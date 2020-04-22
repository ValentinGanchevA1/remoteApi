define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "eshop/modules/cart/selectors", "../selectors/offers", "eshop/modules/checkout/actions/app", "eshop/modules/auth/actions/authorization", "../selectors/cart", "../constants", "../remoteApi", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/metaData", "eshop/utils/GenesysWebEngagementUtils", "jquery", "eshop/modules/auth/actionTypes", "eshop/modules/simfree/constants/OfferTypeEnum", "eshop/modules/auth/actions/api", "../selectors/filters", "../../core/enum/MarketSegment"], function(_exports, ACTIONS, CONFACTIONS, _selectors, _offers, _app, _authorization, _cart, _constants, _remoteApi, _OnlineUtils, _cart2, _offers2, _filters, _offers3, _filters2, _selectors2, _metaData, _GenesysWebEngagementUtils, _jquery, _actionTypes3, _OfferTypeEnum, _api, _filters3, _MarketSegment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.redirectToCart = _exports.addToCartWithCounter = _exports.pushToCart = _exports.addInstallmentSalesOfGoodsToCart = _exports.addToCart = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    CONFACTIONS = babelHelpers.interopRequireWildcard(CONFACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _GenesysWebEngagementUtils = babelHelpers.interopRequireDefault(_GenesysWebEngagementUtils);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);

    var addToCart = function addToCart(selectedOffer, selectedProcess) {
        return function(dispatch, getState) {
            dispatch(addToCartWithCounter());
        };
    };

    _exports.addToCart = addToCart;

    var addInstallmentSalesOfGoodsToCart = function addInstallmentSalesOfGoodsToCart() {
        return function(dispatch, getState) {
            (0, _app.bodyLoaderEvent)('modules.loader.show');
            var deviceCode = (0, _offers.getSelectedDeviceId)(getState());
            var selectedFilters = (0, _filters3.getSelectedFilters)(getState());
            var availableProductsKey = (0, _selectors2.getCurrentSelectedAvailableProductsKey)(getState());

            _remoteApi.default.checkAndGetOffers(null, selectedFilters, availableProductsKey, deviceCode).then(function(response) {
                (0, _app.bodyLoaderEvent)('modules.loader.hide');

                if (response.isPositive) {
                    dispatch({
                        type: ACTIONS.FETCH_OFFERS,
                        payload: response.offers,
                        selectedFilters: (0, _filters3.getSelectedFilters)(getState()),
                        data: response
                    });
                    dispatch(addToCart());
                } else {
                    dispatch((0, _authorization.showError)(response.description));
                }
            }).catch(function(error) {
                (0, _app.bodyLoaderEvent)('modules.loader.hide');
                var errorMessage = error.responseJSON && error.responseJSON.message || "Wystąpił błąd w trakcie dodania do koszyka";
                dispatch((0, _authorization.showError)(errorMessage));
            });
        };
    };

    _exports.addInstallmentSalesOfGoodsToCart = addInstallmentSalesOfGoodsToCart;

    var getSelectedVasesForProposition = function getSelectedVasesForProposition(state, proposition) {
        var selectedVasesForProposition = (0, _offers3.getSelectedVases)(state);
        console.log("@@@", selectedVasesForProposition);

        if (selectedVasesForProposition && selectedVasesForProposition.find(function(propos) {
                return propos.propositionId == proposition.id;
            })) {
            selectedVasesForProposition = selectedVasesForProposition.find(function(propos) {
                return propos.propositionId == proposition.id;
            }).vases;
            return selectedVasesForProposition;
        }

        return [];
    };

    var getIgnoredVasesForProposition = function getIgnoredVasesForProposition(state, proposition) {
        if (!proposition || !proposition.addons || !proposition.addons.categorizedBonuses || !proposition.addons.categorizedBonuses["GratisPackageBonuses"] || !proposition.addons.categorizedBonuses["GratisPackageBonuses"].services) return [];
        var defaults = proposition.addons.categorizedBonuses["GratisPackageBonuses"].services.filter(function(service) {
            return service.isDefault;
        }).map(function(service) {
            return service.bonuses[0].code;
        });
        console.log("@@@", defaults);
        var selected = getSelectedVasesForProposition(state, proposition);
        return defaults.filter(function(defaultBonus) {
            return selected.indexOf(defaultBonus) < 0;
        });
    };

    var pushToCart = function pushToCart(selectedOffer, selectedProcess) {
        return function(dispatch, getState) {
            selectedOffer = selectedOffer || (0, _offers.getSelectedOffer)(getState());
            selectedProcess = selectedProcess || (0, _filters.getSelectedProcess)(getState());
            var selectedDeviceId = (0, _offers.getSelectedDeviceId)(getState());
            var market = (0, _filters.getMarketContext)(getState()); //coś poszło nie tak i przerywamy dodawanie do koszyka

            console.log("pushToCart");
            console.log({
                selectedOffer: selectedOffer,
                selectedProcess: selectedProcess,
                selectedDeviceId: selectedDeviceId
            });

            if (!(selectedOffer && selectedProcess)) {
                console.log("Invalid parameters: cannot add product");

                _OnlineUtils.default.removeParameterFromURL("autoadd");

                return;
            }

            dispatch((0, _authorization.clearMessage)());
            (0, _app.bodyLoaderEvent)('modules.loader.show');

            if ((0, _cart.addToCartInProgress)(getState())) {
                return;
            }

            var availableProductsKey = (0, _selectors2.getCurrentSelectedAvailableProductsKey)(getState()) || (0, _jquery.default)('#availableProductsKey').val();
            var args = {
                rateplanId: selectedOffer.rateplanId,
                propositionId: selectedOffer.id,
                process: selectedProcess,
                market: market,
                availableProductsKey: availableProductsKey,
                bonusesToAdd: getSelectedVasesForProposition(getState(), selectedOffer) || [],
                defaultBonusesToIgnore: getIgnoredVasesForProposition(getState(), selectedOffer) || []
            };
            console.log("@@@", args);

            if (selectedDeviceId) {
                args.deviceVariant = selectedDeviceId;
            }

            dispatch({
                type: ACTIONS.POST_TO_CART_START,
                args: args
            });

            _remoteApi.default.postToCart(args).then(function(responseData) {
                postToCart200Handler(dispatch, selectedOffer, responseData, args);
                dispatch((0, _offers2.fetchContractRole)(availableProductsKey));
            }, function(errorData) {
                return dispatch(addToCartError(selectedOffer, errorData));
            });

            _OnlineUtils.default.removePwaSuflerContextFromSession();
        };
    };

    _exports.pushToCart = pushToCart;

    var pushGweAddEvents = function pushGweAddEvents(request, response) {
        _GenesysWebEngagementUtils.default.pushAddToCartEvent(request.rateplanId, request.propositionId, response.bundleNo);

        if (request.deviceVariant) {
            _GenesysWebEngagementUtils.default.pushAddToCartEvent(request.deviceVariant, request.propositionId, response.bundleNo);
        }

        if (response.vases) response.vases.forEach(function(vas) {
            return _GenesysWebEngagementUtils.default.pushAddVasToCartEvent(vas.productCode, request.propositionId, response.bundleNo);
        });
    };

    var addToCartWithCounter = function addToCartWithCounter() {
        return function(dispatch, getState) {
            console.log("addToCartWithCounter");

            if ((0, _filters.getPropositionListCount)(getState()) == 0 && !(0, _selectors2.isDuet)(getState())) {
                if ((0, _filters.getPropositionListSoftBundleGroup)(getState()) && (0, _filters.getPropositionListSoftBundleGroup)(getState()) == (0, _selectors2.getSelectedSoftBundleGroup)(getState()) && ((0, _selectors2.isProductListPage)(getState()) || (0, _selectors2.isProductDetailsPage)(getState()))) {
                    var market = (0, _filters.getMarketContext)(getState());

                    if (market == "B2B") {
                        console.log("OnlineUtils.saveInSessionStorage(\"dontUseDefaults\", true)");

                        _OnlineUtils.default.saveInSessionStorage("dontUseDefaults", true);
                    } else if ([_OfferTypeEnum.default.DATA].indexOf((0, _filters.getSelectedOfferType)(getState())) > -1) {
                        dispatch((0, _app.gotoCartSummary)());
                        return;
                    }

                    window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
                } else {
                    dispatch((0, _app.gotoCartSummary)());
                }

                return;
            }

            dispatch(pushToCart(null, null));
        };
    };
    /*
     * Checks if HTTP200 wraps error message
     */


    _exports.addToCartWithCounter = addToCartWithCounter;

    var postToCart200Handler = function postToCart200Handler(dispatch, selectedOffer, responseData, requestData) {
        if (responseData && responseData.message && typeof responseData.message === "string") {
            var errorData = {
                responseJSON: {
                    message: responseData.message
                }
            };
            dispatch(addToCartError(selectedOffer, errorData));
        } else {
            dispatch(addToCartSuccess(selectedOffer, responseData, requestData));
            dispatch(clearVerificationData());
        }
    };

    var redirectToCart = function redirectToCart() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.REDIRECT_TO_CART
            });
            dispatch((0, _offers2.clearPropositionId)());
            dispatch((0, _filters2.clearLoyaltyLength)());
            dispatch((0, _filters2.clearProcessType)()); //   dispatch(clearOfferType());

            dispatch((0, _filters2.clearPropositionListSoftBundleGroup)());
            dispatch((0, _cart2.clearAddTerminalToOfferFromSessionStorage)());
            dispatch((0, _offers2.clearDeviceInstalmentsCountFromSessionStorage)());
            dispatch((0, _offers2.clearSelectedVases)());

            if ((0, _selectors2.isDuet)(getState())) {
                location.href = localStorage.getItem("suflerRedirectUrl");
            } else {
                location.href = _constants.constants.url.cart;
            }
        };
    };

    _exports.redirectToCart = redirectToCart;

    var addToCartSuccess = function addToCartSuccess(selectedOffer, responseData, requestData) {
        return function(dispatch, getState) {
            console.log("add to cart success");
            pushGweAddEvents(requestData, responseData);
            dispatch((0, _authorization.clearStayLoveRetentionMSISDN)());

            if ((0, _metaData.getAddFromLink)(getState())) {
                dispatch(redirectToCart());
                return;
            }

            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData.bundleCount, 'header');
            dispatch({
                type: ACTIONS.POST_TO_CART_SUCCESS
            });
            dispatch((0, _filters2.propositionListCountDecrement)());
            dispatch({
                type: _actionTypes3.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: false
            });

            if ((0, _selectors.getProcessTypesIncludeAssignment)(getState())) {
                //due to NOR-166133
                dispatch(redirectToCart());
                return;
            }

            var propositionListSoftBundleGroup = (0, _filters.getPropositionListSoftBundleGroup)(getState());

            if (!propositionListSoftBundleGroup && !(0, _selectors2.isProductListPage)(getState()) && !(0, _selectors2.isProductDetailsPage)(getState()) && !(0, _selectors2.isAccessoryListPage)(getState())) {
                dispatch((0, _filters2.setPropositionListSoftBundleGroup)());
                propositionListSoftBundleGroup = (0, _filters.getPropositionListSoftBundleGroup)(getState());
            }

            var offerCount = (0, _filters.getPropositionListCount)(getState());
            var market = (0, _filters.getMarketContext)(getState());
            var offerType = (0, _filters.getSelectedOfferType)(getState());
            var process = (0, _filters.getSelectedProcessTypeValue)(getState()); //duety lub b2b

            if (propositionListSoftBundleGroup && propositionListSoftBundleGroup == (0, _selectors2.getSelectedSoftBundleGroup)(getState()) && ((0, _selectors2.isProductListPage)(getState()) || (0, _selectors2.isProductDetailsPage)(getState()) || (0, _selectors2.isAccessoryListPage)(getState()))) {
                if (market == "B2B") {
                    //usunąć 1
                    _OnlineUtils.default.saveInSessionStorage("dontUseDefaults", true);
                }

                console.log("SoftBundle group for loop matches filter softBundleGroup");
                dispatch((0, _offers2.clearPropositionId)());
                dispatch((0, _filters2.clearLoyaltyLength)());
                dispatch((0, _filters2.clearProcessType)());
                dispatch((0, _filters2.clearOfferType)());

                if (_OnlineUtils.default.getLastViewedOfferPage() === "/pwa" || market !== "B2B" && [_OfferTypeEnum.default.DATA].indexOf(offerType) > -1) {
                    dispatch((0, _filters2.clearPropositionListSoftBundleGroup)());
                    dispatch(redirectToCart());
                } else {
                    if (_OnlineUtils.default.getLastViewedOfferPage() && _OnlineUtils.default.getLastViewedOfferPage() != "") {
                        window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
                    } else {
                        dispatch(redirectToCart());
                    }
                }

                return;
            }

            (0, _app.bodyLoaderEvent)('modules.loader.hide');

            if ((0, _filters.getMarketContext)(getState()) == "B2B") {
                if (!propositionListSoftBundleGroup) {
                    console.log("Market B2B simcount offerType not set");
                    dispatch(redirectToCart());
                    return;
                }

                if (propositionListSoftBundleGroup != (0, _selectors2.getSelectedSoftBundleGroup)(getState())) {
                    console.log("SoftBundle group for loop does not matches filter softBundleGroup");
                    dispatch(redirectToCart());
                    return;
                }

                dispatch({
                    type: CONFACTIONS.USE_DEFAULT_OFFER_TYPE,
                    use: false
                });
                dispatch({
                    type: CONFACTIONS.USE_DEFAULT_PROCESS,
                    use: false
                });
                dispatch({
                    type: CONFACTIONS.USE_DEFAULT_LOYALTY,
                    use: false
                });
                dispatch({
                    type: CONFACTIONS.USE_DEFAULT_OFFER,
                    use: false
                });

                if (!_OnlineUtils.default.isMnpApplication(process)) {
                    dispatch((0, _offers2.clearPropositionId)());
                    dispatch((0, _filters2.clearLoyaltyLength)());
                    dispatch((0, _filters2.clearProcessType)());
                    dispatch((0, _filters2.clearOfferType)());
                }

                dispatch((0, _cart2.fetchMiniCart)());
                dispatch((0, _api.requestLoggedCustomerData)());
                return;
            }

            if ([_OfferTypeEnum.default.DATA].indexOf(offerType) === -1) {
                if (offerCount == 0 && propositionListSoftBundleGroup && !((0, _selectors2.isProductListPage)(getState()) || (0, _selectors2.isProductDetailsPage)(getState()) || (0, _selectors2.isAccessoryListPage)(getState()))) {
                    dispatch((0, _offers2.clearPropositionId)());
                    dispatch((0, _filters2.clearLoyaltyLength)());
                    dispatch((0, _filters2.clearProcessType)());
                    dispatch((0, _cart2.fetchMiniCart)());
                    dispatch((0, _api.requestLoggedCustomerData)());
                    return;
                }

                if (propositionListSoftBundleGroup && !((0, _selectors2.isProductListPage)(getState()) || (0, _selectors2.isProductDetailsPage)(getState()) || (0, _selectors2.isAccessoryListPage)(getState()))) {
                    console.log("getPropositionListSoftBundleGroup(getState()) && !(isProductListPage(getState()) || isProductDetailsPage(getState()))");
                    dispatch((0, _cart2.fetchMiniCart)());
                    dispatch((0, _api.requestLoggedCustomerData)());
                    return;
                }
            }

            dispatch((0, _filters2.clearPropositionListSoftBundleGroup)());
            dispatch(redirectToCart());
        };
    };

    var addToCartError = function addToCartError(selectedOffer, responseData) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.POST_TO_CART_ERROR
            });
            var msg = responseData.responseJSON && responseData.responseJSON.message || "Wystąpił błąd w trakcie dodania do koszyka";
            (0, _app.bodyLoaderEvent)('modules.loader.hide');
            dispatch((0, _authorization.showError)(msg));
        };
    };

    var clearVerificationData = function clearVerificationData() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CLEAR_CHECK_MSISDN
            });
        };
    };
});
//# sourceMappingURL=cart.js.map