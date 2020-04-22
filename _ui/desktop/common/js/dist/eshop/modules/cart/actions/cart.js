define(["exports", "../actionTypes", "../remoteApi", "../../../utils/OnlineUtils", "../../../utils/DataLayerUtils", "../../checkout/selectors", "../../simfree/selectors", "../selectors", "../../configurator/selectors/filters", "../../configurator/selectors/offers", "../../documents/actions/documents", "../../checkout/actions/app", "../../magnum2/utils", "../../magnum2/constants/ProcessTypeEnum", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actionTypes", "eshop/modules/configurator/actions/cart", "eshop/modules/auth/actions/authorization", "eshop/utils/GenesysWebEngagementUtils", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/filters", "../../auth/selectors/authorization", "eshop/modules/simfree/constants/OfferTypeEnum", "../../checkout/actions/validation", "eshop/modules/configurator/actions/offers", "eshop/modules/core/enum/VasUpdateStatus"], function(_exports, ACTIONS, _remoteApi, _OnlineUtils, _DataLayerUtils, _selectors, _selectors2, _selectors3, _filters, _offers, _documents, _app, _utils, _ProcessTypeEnum, _app2, ACTIONSCONF, _cart, _authorization, _GenesysWebEngagementUtils, _filters2, _filters3, _authorization2, _OfferTypeEnum, _validation, _offers2, _VasUpdateStatus) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchCart = fetchCart;
    _exports.fetchOrder = fetchOrder;
    _exports.reloadCartState = reloadCartState;
    _exports.updateFixCartProducts = updateFixCartProducts;
    _exports.updateCartVases = updateCartVases;
    _exports.updateConvergentCartProducts = updateConvergentCartProducts;
    _exports.updateCartDevices = updateCartDevices;
    _exports.postLowerInstallments = postLowerInstallments;
    _exports.updateTerminalToOffer = updateTerminalToOffer;
    _exports.removeDeviceFromSimfreeBundle = removeDeviceFromSimfreeBundle;
    _exports.fetchMiniCart = fetchMiniCart;
    _exports.fetchFixConfigurables = fetchFixConfigurables;
    _exports.fetchMobileVases = fetchMobileVases;
    _exports.fetchConvergentConfigurables = fetchConvergentConfigurables;
    _exports.goToOrangeLoveLandingPage = goToOrangeLoveLandingPage;
    _exports.goBackEmptyCart = goBackEmptyCart;
    _exports.showErrorMessage = showErrorMessage;
    _exports.removeFromCart = removeFromCart;
    _exports.removeFromCartAndRedirect = removeFromCartAndRedirect;
    _exports.handleRepayment = handleRepayment;
    _exports.handleRepaymentDeposit = handleRepaymentDeposit;
    _exports.removeFromCartWithRedirect = removeFromCartWithRedirect;
    _exports.removeMagnumFromMultiCart = removeMagnumFromMultiCart;
    _exports.removeTerminalFromConvergentCartBundle = removeTerminalFromConvergentCartBundle;
    _exports.removeTerminalFromCartBundle = removeTerminalFromCartBundle;
    _exports.clearCartAndRedirect = clearCartAndRedirect;
    _exports.fetchPickupMiniCart = fetchPickupMiniCart;
    _exports.createNewCart = createNewCart;
    _exports.setFilters = setFilters;
    _exports.openVasModal = openVasModal;
    _exports.closeVasModal = closeVasModal;
    _exports.openBonusModal = openBonusModal;
    _exports.closeBonusModal = closeBonusModal;
    _exports.setPaymentPlanAssignValue = setPaymentPlanAssignValue;
    _exports.changeCertificateDeathConfimation = changeCertificateDeathConfimation;
    _exports.haltCart = _exports.saveKdrData = _exports.dispatchKdrError = _exports.clearKdrNumber = _exports.approveKdrNumber = _exports.changeKdrNumber = _exports.getKdrDataFromCart = _exports.setSelectedVasesForCartEntry = _exports.setPriceIsNet = _exports.removeVoucher = _exports.applyVoucher = _exports.findApplicableProducts = _exports.clearVoucher = _exports.changedVoucherCode = _exports.clearAddTerminalToOfferFromSessionStorage = _exports.changeAddTerminalToOfferBundleNo = _exports.handleManualVerificationProcess = _exports.removeCartByOmniCode = _exports.changeB2BVasesModalVisibility = _exports.changeFixTvFilteredModalVisibility = _exports.changeTvModalVisibility = _exports.setMiniCart = _exports.fetchCartPromise = _exports.redirectToLastViewedOfferPage = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);
    ACTIONSCONF = babelHelpers.interopRequireWildcard(ACTIONSCONF);
    _GenesysWebEngagementUtils = babelHelpers.interopRequireDefault(_GenesysWebEngagementUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _VasUpdateStatus = babelHelpers.interopRequireDefault(_VasUpdateStatus);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var SIMFREE_PROPOSITION = "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS";
    var SIMFREE_PROCESS = "SALE_OF_GOODS";

    var redirectToLastViewedOfferPage = function redirectToLastViewedOfferPage() {
        return function(dispatch, getState) {
            window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
        };
    };
    /**
     * @deprecated Use fetchCartPromise as it allows do things after remote API.
     * E.g.: Show loader -> modify cart -> fetch cart -> hide loader.
     */


    _exports.redirectToLastViewedOfferPage = redirectToLastViewedOfferPage;

    function fetchCart() {
        return function(dispatch) {
            _remoteApi.default.getCart().then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_CART,
                    payload: response
                });
            }, function(error) {
                return console.error("fetchCart (deprecated)", error);
            }).then(function() {
                return dispatch({
                    type: ACTIONS.FETCHED_CART,
                    payload: true
                });
            });
        };
    }

    var fetchCartPromise = function fetchCartPromise() {
        return function(dispatch) {
            return new Promise(function(resolve, reject) {
                _remoteApi.default.getCart().then(function(response) {
                    dispatch({
                        type: ACTIONS.FETCH_CART,
                        payload: response
                    });
                }, function(error) {
                    return console.error("fetchCartPromise", error);
                }).then(function() {
                    dispatch({
                        type: ACTIONS.FETCHED_CART,
                        payload: true
                    });
                    resolve();
                });
            });
        };
    };

    _exports.fetchCartPromise = fetchCartPromise;

    function fetchOrder() {
        return function(dispatch) {
            _remoteApi.default.getOrder().then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_CART,
                    payload: response
                });
            }).then(function() {
                return dispatch({
                    type: ACTIONS.FETCHED_CART,
                    payload: true
                });
            }).catch(function(error) {
                console.error("ERROR", error);
            });
        };
    }

    function reloadCartState(afterFetchFunc) {
        return function(dispatch, getState) {
            if ((0, _selectors3.isAnyMobileVasUpdating)(getState())) {
                return;
            }

            fetchMiniCart()(dispatch, getState);
            dispatch(fetchCartPromise()).then(function() {
                if (afterFetchFunc) afterFetchFunc();
            });
            (0, _documents.fetchDocuments)()(dispatch, getState);
        };
    }

    function updateFixCartProducts(bundle, offer, cartBundle, products) {
        return function(dispatch, getState) {
            _remoteApi.default.postUpdateFixCartProducts(bundle, offer, cartBundle, products).then(function() {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function updateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.UPDATING_MOBILE_VASES,
                payload: true,
                bundleNo: cartBundle,
                productsToRemove: productsToRemove,
                productsToAdd: productsToAdd
            });

            _remoteApi.default.postUpdateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd).then(function() {
                productsToRemove.forEach(function(vasCode) {
                    return _GenesysWebEngagementUtils.default.pushDeleteVasFromCartEvent(vasCode, bundle, cartBundle);
                });
                productsToAdd.forEach(function(vasCode) {
                    return _GenesysWebEngagementUtils.default.pushAddVasToCartEvent(vasCode, bundle, cartBundle);
                });
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true,
                    bundleNo: cartBundle
                });
                dispatch({
                    type: ACTIONS.UPDATING_MOBILE_VASES,
                    payload: false,
                    bundleNo: cartBundle,
                    productsToRemove: productsToRemove,
                    productsToAdd: productsToAdd
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function updateConvergentCartProducts(products) {
        return function(dispatch, getState) {
            _remoteApi.default.postUpdateConvergentCartProducts(products).then(function() {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true
                });
                reloadCartState()(dispatch, getState);
            }, function() {
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function updateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
        return function(dispatch, getState) {
            _remoteApi.default.postUpdateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd).then(function() {
                pushGweEventForProducts(productsToAdd, productsToRemove, bundle, cartBundle);
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function postLowerInstallments(bundleNo, diff, market) {
        return function(dispatch, getState) {
            _remoteApi.default.postLowerInstallments(bundleNo, diff, market).then(function() {
                dispatch({
                    type: ACTIONS.LOWER_INSTALLMENTS_SUBMITED,
                    payload: true
                });
                dispatch({
                    type: ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE,
                    bundleNo: bundleNo
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function updateTerminalToOffer(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
        return function(dispatch, getState) {
            (0, _app.bodyLoaderEvent)("modules.loader.show");

            _remoteApi.default.postUpdateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd).then(function(responseData) {
                pushGweEventForProducts(productsToAdd, productsToRemove, bundle, cartBundle);

                if (responseData && responseData.message && typeof responseData.message === "string" || responseData === false) {
                    var msg = responseData ? responseData.message : "Błąd dodawania do koszyka";
                    (0, _app.bodyLoaderEvent)("modules.loader.hide");
                    dispatch((0, _authorization.showError)(msg));
                } else {
                    dispatch({
                        type: ACTIONS.UPDATED_CART_CONTENTS,
                        payload: true
                    });
                    dispatch((0, _cart.redirectToCart)());
                }
            });
        };
    }

    function removeDeviceFromSimfreeBundle(bundleNo, entryNo, lastOne) {
        return function(dispatch, getState) {
            _remoteApi.default.removeDeviceFromSimfreeBundle(bundleNo, entryNo, lastOne).then(function(responseData) {
                pushGweDeleteEventForSimfreeBundleEntry(bundleNo, entryNo, getState());
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData, "header");
                dispatch({
                    type: ACTIONS.UPDATED_CART_CONTENTS,
                    payload: true
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function fetchMiniCart() {
        return function(dispatch, getState) {
            _remoteApi.default.getMiniCart(_OfferTypeEnum.default.CONVERGENT !== (0, _filters3.getSelectedOfferType)(getState()) && (0, _selectors2.getAvailableProductsKeys)(getState()) || []).then(function(response) {
                console.log("FETCHED MINICART WITH:", response);
                dispatch(setMiniCart(response));
                dispatch({
                    type: ACTIONS.FETCH_BUNDLES_PROCESS_TYPE,
                    payload: response
                });
                var cartEntries = (0, _selectors3.getCartEntries)(getState());
                console.warn("fetchminicart", cartEntries);

                if (cartEntries && cartEntries.length > 0) {
                    dispatch((0, _filters2.setMarketContext)((0, _selectors3.getCartIsNet)(getState()) ? "B2B" : "B2C"));
                    dispatch((0, _filters2.propositionListCountSetMode)(false));
                }

                if (!(0, _selectors3.isCartFix)(getState())) {
                    var stepId = (0, _selectors.getCurrentStepId)(getState());
                    stepId && _DataLayerUtils.default.pushCheckoutStepOneTime(response, (0, _filters.getSelectedFilters)(getState()), stepId, (0, _offers.getSelectedOfferId)(getState()), (0, _offers.getSelectedOfferPosition)(getState()), _objectSpread({
                        salesChannel: (0, _authorization2.getSalesChannel)(getState())
                    }, (0, _selectors.getAssistModeStateData)(getState())));
                }
            }).then(function() {
                return dispatch({
                    type: ACTIONS.FETCHED_MINI_CART,
                    payload: true
                });
            });
        };
    }

    var setMiniCart = function setMiniCart(payload) {
        return {
            type: ACTIONS.FETCH_MINI_CART,
            payload: payload
        };
    };

    _exports.setMiniCart = setMiniCart;

    function fetchFixConfigurables(cartBundle) {
        return function(dispatch, getState) {
            if (!(0, _selectors3.getFixConfigurablesMetadata)(getState()).find(function(fixConfigurablesMetadata) {
                    return fixConfigurablesMetadata.cartBundle === cartBundle;
                })) {
                dispatch({
                    type: ACTIONS.FETCHING_FIX_CONFIGURABLES,
                    payload: {
                        cartBundle: cartBundle
                    }
                });

                _remoteApi.default.getFixConfigurables(cartBundle).then(function(response) {
                    return dispatch({
                        type: ACTIONS.FETCH_FIX_CONFIGURABLES,
                        payload: Object.assign({}, response, {
                            cartBundle: cartBundle
                        })
                    });
                });
            }
        };
    }

    var changeTvModalVisibility = function changeTvModalVisibility(visibility) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.TV_MODAL_VISIBILITY,
                data: visibility
            });
        };
    };

    _exports.changeTvModalVisibility = changeTvModalVisibility;

    var changeFixTvFilteredModalVisibility = function changeFixTvFilteredModalVisibility(visibility) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.TV_FILTERED_MODAL_VISIBILITY,
                data: visibility
            });
        };
    };

    _exports.changeFixTvFilteredModalVisibility = changeFixTvFilteredModalVisibility;

    var changeB2BVasesModalVisibility = function changeB2BVasesModalVisibility(visibility) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OFICES_SERVICES_MODAL_VISIBILITY,
                data: visibility
            });
        };
    };

    _exports.changeB2BVasesModalVisibility = changeB2BVasesModalVisibility;

    function fetchMobileVases(propositionId, bundle, process) {
        return function(dispatch, getState) {
            console.log("VASES fetchMobileVases", propositionId, bundle, process);

            if (!(0, _selectors3.getMobileVasMetadata)(getState()).find(function(mobileVasMetadata) {
                    return mobileVasMetadata.propositionId === propositionId && mobileVasMetadata.bundle === bundle && mobileVasMetadata.process === process;
                })) {
                dispatch({
                    type: ACTIONS.FETCHING_MOBILE_VASES,
                    payload: {
                        propositionId: propositionId,
                        bundle: bundle,
                        process: process
                    }
                });

                _remoteApi.default.getMobileVases(propositionId, bundle, process).then(function(response) {
                    return dispatch({
                        type: ACTIONS.FETCH_MOBILE_VASES,
                        payload: Object.assign({}, response, {
                            propositionId: propositionId,
                            bundle: bundle,
                            process: process
                        })
                    });
                });
            }
        };
    }

    function fetchConvergentConfigurables(propositionId, bundleNos) {
        return function(dispatch, getState) {
            if (!(0, _selectors3.getFixConfigurablesMetadata)(getState()).find(function(fixConfigurablesMetadata) {
                    return fixConfigurablesMetadata.propositionId === propositionId;
                })) {
                dispatch({
                    type: ACTIONS.FETCHING_CONVERGENT_CONFIGURABLES,
                    payload: {
                        propositionId: propositionId,
                        configurables: []
                    }
                });

                _remoteApi.default.getConvergentConfigurables(bundleNos).then(function(response) {
                    return dispatch({
                        type: ACTIONS.FETCH_CONVERGENT_CONFIGURABLES,
                        payload: {
                            propositionId: propositionId,
                            configurables: babelHelpers.toConsumableArray(response)
                        }
                    });
                });
            }
        };
    }

    function goToOrangeLoveLandingPage(entries) {
        return function() {
            var processType = (0, _utils.getProcessType)(entries);

            if (processType === _ProcessTypeEnum.default._4U) {
                _remoteApi.default.goToOrangeLove4DLandingPage();
            } else if (processType === _ProcessTypeEnum.default._2U) {
                _remoteApi.default.goToOrangeLove2DLandingPage();
            } else if (_.includes([_ProcessTypeEnum.default._2ULTE, _ProcessTypeEnum.default._3ULTE], processType)) {
                _remoteApi.default.goToOrangeLoveLTE4FIXLandingPage();
            } else {
                console.error("Unexpected process type: '".concat(processType, "' could not redirect to Orange Love landing page"));
            }
        };
    }

    function goBackEmptyCart() {
        return function(dispatch, getState) {
            dispatch(clearAddTerminalToOfferFromSessionStorage());

            var lastOfferPage = _OnlineUtils.default.getLastViewedOfferPage();

            if (lastOfferPage) {
                window.location.href = lastOfferPage;
                return;
            }

            if ((0, _filters3.getMarketContext)(getState()) === "B2B") {
                window.location.href = window.location.protocol + "//" + window.location.host + "/male-firmy/sklep";
            } else window.location.href = window.location.protocol + "//" + window.location.host + "/sklep";
        };
    }

    function showErrorMessage(message) {
        return function(dispatch, getState) {
            dispatch((0, _authorization.showError)(message));
        };
    }

    var removeCartByOmniCode = function removeCartByOmniCode(omni) {
        return function(dispatch, getState) {
            _remoteApi.default.removeCartByOmniCode(omni).then(function(response) {
                var result = (0, _filters3.getCheckMsisdnResult)(getState());
                var msisdn = result.msisdn;
                dispatch((0, _filters2.checkMsisdnAndGetOffers)(msisdn));
            }).catch(function(error) {
                console.error("ERROR", error);
                dispatch(showErrorMessage("Błąd podczas usuwania koszyka."));
            });
        };
    };

    _exports.removeCartByOmniCode = removeCartByOmniCode;

    function removeFromCart(data, id) {
        return function(dispatch, getState) {
            _remoteApi.default.removeFromCart(data, id).then(function(response) {
                dispatch((0, _filters2.propositionListCountSet)(1));
                pushGweDeleteEventsForBundleId(id, getState());
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response
                });
                reloadCartState()(dispatch, getState);
            });
        };
    }

    function removeFromCartAndRedirect(data, id) {
        return function(dispatch, getState) {
            _remoteApi.default.removeFromCart(data, id).then(function(response) {
                if (id == null) {
                    _GenesysWebEngagementUtils.default.deleteAllFromCartEvent((0, _selectors3.allCartEntries)(getState()));
                }

                _DataLayerUtils.default.pushOrderResigned((0, _selectors.getAgreementType)(getState()));

                dispatch((0, _filters2.propositionListCountSet)(1));
                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response
                });
                reloadCartState()(dispatch, getState);
                (0, _app.gotoCartSummary)()(dispatch);
            });
        };
    }

    function handleRepayment() {
        return function(dispatch, getState) {
            _remoteApi.default.markAsRepayment().then(function(response) {
                return dispatch((0, _app.doCheckoutStep)());
            });
        };
    }

    function handleRepaymentDeposit() {
        return function(dispatch, getState) {
            _remoteApi.default.markAsRepayment().then(function(response) {
                return dispatch((0, _app.gotoNextCheckoutStep)());
            });
        };
    }

    function removeFromCartWithRedirect(href) {
        return function(dispatch, getState) {
            _remoteApi.default.removeFromCart().then(function(response) {
                _GenesysWebEngagementUtils.default.deleteAllFromCartEvent((0, _selectors3.allCartEntries)(getState()));

                OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, response.offerCount, "header");
                dispatch({
                    type: ACTIONS.REMOVE_FROM_CART,
                    payload: response
                });
                window.location.href = href;
            });
        };
    }

    function removeMagnumFromMultiCart(bundleNos) {
        return function(dispatch, getState) {
            _remoteApi.default.removeMagnumFromMultiCart(bundleNos).then(function() {
                reloadCartState()(dispatch, getState);
                (0, _app.gotoCartSummary)()(dispatch);
            });
        };
    }

    function removeTerminalFromConvergentCartBundle(bundleNo, productCode) {
        return function(dispatch, getState) {
            _remoteApi.default.removeTerminalFromConvergentCartBundle(bundleNo, productCode).then(function() {
                return reloadCartState()(dispatch, getState);
            });
        };
    }

    function removeTerminalFromCartBundle(data, id) {
        return function(dispatch) {
            _remoteApi.default.removeTerminalFromCartBundle(data, id).then(function(response) {
                return dispatch({
                    type: ACTIONS.REMOVE_TERMINAL_FROM_CART_BUNDLE,
                    payload: response
                });
            });
        };
    }

    function clearCartAndRedirect(id, url) {
        _remoteApi.default.removeFromCart(null, id).then(function(data) {
            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, data.offerCount, "header");
            window.location.href = url;
        });
    }

    var handleManualVerificationProcess = function handleManualVerificationProcess(requestCount, intervalBetweenRequests) {
        return function(dispatch) {
            _remoteApi.default.checkManualVerificationIsFinish(requestCount, intervalBetweenRequests).then(function() {
                return _remoteApi.default.getManualVerificationStatus().then(function(response) {
                    return dispatch({
                        type: ACTIONS.SET_MANUAL_STATUS,
                        status: response
                    });
                });
            });
        };
    };

    _exports.handleManualVerificationProcess = handleManualVerificationProcess;

    var changeAddTerminalToOfferBundleNo = function changeAddTerminalToOfferBundleNo(bundleNo) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: bundleNo
            });
        };
    };

    _exports.changeAddTerminalToOfferBundleNo = changeAddTerminalToOfferBundleNo;

    var clearAddTerminalToOfferFromSessionStorage = function clearAddTerminalToOfferFromSessionStorage() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER
            });
        };
    };

    _exports.clearAddTerminalToOfferFromSessionStorage = clearAddTerminalToOfferFromSessionStorage;

    var changedVoucherCode = function changedVoucherCode(voucherCode) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_VOUCHER_CODE,
                value: voucherCode
            });
        };
    };

    _exports.changedVoucherCode = changedVoucherCode;

    var clearVoucher = function clearVoucher() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_VOUCHER_DATA
            });
        };
    };

    _exports.clearVoucher = clearVoucher;

    var findApplicableProducts = function findApplicableProducts(voucherCode) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.FIND_APPLICABLE_PRODUCTS_START
            });
            changedVoucherCode(voucherCode);
            console.log("Finding products for voucher: ", voucherCode);

            _remoteApi.default.findApplicableProducts(voucherCode).then(function(data) {
                if (data && data.message && typeof data.message === "string") {
                    dispatch({
                        type: ACTIONS.VOUCHER_ERROR,
                        value: {
                            level: "error",
                            message: data.message
                        }
                    });
                } else {
                    dispatch({
                        type: ACTIONS.FIND_APPLICABLE_PRODUCTS_DONE,
                        value: data
                    });
                }
            });
        };
    };

    _exports.findApplicableProducts = findApplicableProducts;

    var applyVoucher = function applyVoucher(voucherCode, product) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.APPLY_VOUCHER_START
            });
            console.log("Applying voucher '".concat(voucherCode, "' to product ").concat(product));

            _remoteApi.default.applyVoucher(voucherCode, product).then(function(data) {
                if (data && data.message && typeof data.message === "string") {
                    dispatch({
                        type: ACTIONS.VOUCHER_ERROR,
                        value: {
                            level: "error",
                            message: data.message
                        }
                    });
                } else {
                    fetchMiniCart()(dispatch, getState);
                    fetchCart()(dispatch, getState);
                    dispatch({
                        type: ACTIONS.APPLY_VOUCHER_DONE
                    });
                }
            });
        };
    };

    _exports.applyVoucher = applyVoucher;

    var removeVoucher = function removeVoucher(entryNo, bundleNo) {
        var voucherSubType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var voucher = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        return function(dispatch, getState) {
            console.log("remove voucher from entry", entryNo, bundleNo, voucherSubType, voucher);

            _remoteApi.default.removeVoucher(entryNo, bundleNo, voucherSubType, voucher).then(function() {
                (0, _app.bodyLoaderEvent)("modules.loader.show");
                fetchMiniCart()(dispatch, getState);
                fetchCart()(dispatch, getState);
                (0, _app.bodyLoaderEvent)("modules.loader.hide");
            });
        };
    };

    _exports.removeVoucher = removeVoucher;

    var setPriceIsNet = function setPriceIsNet(showNet) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_PRICE_VIEW_NET,
                showNet: showNet
            });
        };
    };

    _exports.setPriceIsNet = setPriceIsNet;

    function fetchPickupMiniCart() {
        return function(dispatch, getState) {
            _remoteApi.default.getPickupMiniCart().then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_MINI_CART,
                    payload: response
                });
                var stepId = (0, _selectors.getCurrentStepId)(getState());
                stepId && _DataLayerUtils.default.pushCheckoutStepOneTime(response, (0, _filters.getSelectedFilters)(getState()), stepId, (0, _offers.getSelectedOfferId)(getState()), (0, _offers.getSelectedOfferPosition)(getState()), (0, _selectors.getAssistModeStateData)(getState()));
            }).then(function(response) {
                return dispatch({
                    type: ACTIONS.FETCH_BUNDLES_PROCESS_TYPE,
                    payload: response.payload
                });
            }).then(function() {
                return dispatch({
                    type: ACTIONS.FETCHED_MINI_CART,
                    payload: true
                });
            }).catch(function(error) {
                console.error("fetchPickupMiniCart error", error);
            });
        };
    }

    function createNewCart() {
        return function(dispatch) {
            _remoteApi.default.createNewCart().then(function() {
                return dispatch((0, _app.gotoCartSummary)());
            }).then(function() {
                return dispatch({
                    type: ACTIONS.CREATE_NEW_CART
                });
            });
        };
    }

    function setFilters(bundleNo) {
        return function(dispatch, getState) {
            var entries = (0, _selectors3.allCartEntries)(getState());
            var entry = entries.find(function(entry) {
                return entry.bundleNo == bundleNo;
            });
            dispatch((0, _app2.setOfferTypeAction)(entry.bundleType));
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: entry.processType
            });
            dispatch({
                type: ACTIONSCONF.SELECT_LOYALTY_LENGTH,
                loyaltyLength: entry.loyaltyLength
            });
            dispatch({
                type: ACTIONSCONF.SELECT_OFFER,
                propositionId: entry.bundleCode
            });
            dispatch({
                type: ACTIONSCONF.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
                deviceInstalmentsCount: getDeviceInstallmentsCount(entry)
            });
            dispatch({
                type: ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: bundleNo
            });
            dispatch(setSelectedVasesForCartEntry(entry));
        };
    }

    var filterVasesByCategories = function filterVasesByCategories(vases, category) {
        return vases && category && vases.filter(function(vas) {
            return vas.categories && vas.categories.includes(category);
        }) || [];
    };

    var setSelectedVasesForCartEntry = function setSelectedVasesForCartEntry(entry) {
        return function(dispatch, getState) {
            var bundlePackages = filterVasesByCategories(entry.vases, "GratisPackageBonuses");
            dispatch((0, _offers2.clearSelectedVases)());
            bundlePackages.forEach(function(vas) {
                return dispatch((0, _offers2.selectVas)(entry.bundleCode, vas.productCode));
            });
        };
    };

    _exports.setSelectedVasesForCartEntry = setSelectedVasesForCartEntry;

    function getDeviceInstallmentsCount(entry) {
        var deviceMonthlyPrices;

        if (entry.terminals && entry.terminals.length > 0) {
            deviceMonthlyPrices = entry.terminals[0].monthlyPrices;
        } else if (entry.euroSets && entry.euroSets.length > 0) {
            deviceMonthlyPrices = entry.euroSets[0].monthlyPrices;
        } else {
            return;
        }

        return deviceMonthlyPrices[deviceMonthlyPrices.length - 1] && deviceMonthlyPrices[deviceMonthlyPrices.length - 1].monthTo;
    }

    var pushGweEventForProducts = function pushGweEventForProducts(productsToAdd, productsToRemove, proposition, cartBundle) {
        productsToAdd.filter(function(productId) {
            return productId;
        }).forEach(function(productId) {
            _GenesysWebEngagementUtils.default.pushAddToCartEvent(productId, proposition, cartBundle);
        });
        productsToRemove.filter(function(productId) {
            return productId;
        }).forEach(function(productId) {
            _GenesysWebEngagementUtils.default.pushDeleteFromCartEvent(productId, proposition, cartBundle);
        });
    };

    var pushGweDeleteEventForSimfreeBundleEntry = function pushGweDeleteEventForSimfreeBundleEntry(bundleNumber, entryNumber, state) {
        var terminal = (0, _selectors3.getTerminalForBundleAndEntryNumber)(bundleNumber, entryNumber)(state);

        if (terminal) {
            _GenesysWebEngagementUtils.default.pushDeleteFromCartEvent(getIdForTerminal(terminal), SIMFREE_PROPOSITION, terminal.bundleNo);
        }
    };

    var pushGweDeleteEventsForBundleId = function pushGweDeleteEventsForBundleId(bundleId, state) {
        if (!bundleId) {
            _GenesysWebEngagementUtils.default.deleteAllFromCartEvent((0, _selectors3.allCartEntries)(state));
        } else {
            pushGweDeleteEventsForCartEntry((0, _selectors3.getCartEntryById)(bundleId)(state));
        }
    };

    var pushGweDeleteEventsForCartEntry = function pushGweDeleteEventsForCartEntry(cartEntry) {
        if (cartEntry.processType !== SIMFREE_PROCESS) {
            _GenesysWebEngagementUtils.default.pushDeleteFromCartEvent(cartEntry.productCode, cartEntry.bundleCode, cartEntry.bundleNo);
        }

        cartEntry.terminals.forEach(function(terminal) {
            return _GenesysWebEngagementUtils.default.pushDeleteFromCartEvent(getIdForTerminal(terminal), getPropositionForCartEntry(cartEntry), terminal.bundleNo);
        });
        cartEntry.vases.forEach(function(vas) {
            return _GenesysWebEngagementUtils.default.pushDeleteVasFromCartEvent(vas.productCode, getPropositionForCartEntry(cartEntry), vas.bundleNo);
        });
    };

    var getPropositionForCartEntry = function getPropositionForCartEntry(cartEntry) {
        return cartEntry.processType === SIMFREE_PROCESS ? SIMFREE_PROPOSITION : cartEntry.bundleCode;
    };

    var getIdForTerminal = function getIdForTerminal(terminal) {
        return terminal.processType === SIMFREE_PROCESS ? terminal.productId : terminal.productCode;
    };

    function openVasModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.VAS_MODAL_SHOW_CHANGE,
                payload: true
            });
        };
    }

    function closeVasModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.VAS_MODAL_SHOW_CHANGE,
                payload: false
            });
        };
    }

    function openBonusModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.BONUS_MODAL_SHOW_CHANGE,
                payload: true
            });
        };
    }

    function closeBonusModal() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.BONUS_MODAL_SHOW_CHANGE,
                payload: false
            });
        };
    }

    function setPaymentPlanAssignValue(value, bundleNo, withRecalculate) {
        return function(dispatch, getState) {
            if (withRecalculate) {
                _remoteApi.default.changeAssignPaymentPlans(value, bundleNo).then(function(response) {
                    if (response) {
                        reloadCartState()(dispatch, getState);
                    }
                });
            }

            var assignmentState = getState().cart.assignment.isPaymentPlanAssigned;
            var newStates = assignmentState.slice();
            newStates[bundleNo] = value;
            dispatch({
                type: ACTIONS.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE,
                payload: newStates
            });
        };
    }

    function changeCertificateDeathConfimation(value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CONFIRMATION_DEATH_CHANGE,
                payload: value
            });
        };
    }

    var getKdrDataFromCart = function getKdrDataFromCart() {
        return function(dispatch, getState) {
            _remoteApi.default.getKdrDataFromCart().then(function(response) {
                dispatch({
                    type: ACTIONS.KDR_CART_DATA,
                    payload: response
                });

                if (response.source && response.source.toLowerCase() === "legacy") {
                    reloadCartState()(dispatch, getState);
                }
            });
        };
    };

    _exports.getKdrDataFromCart = getKdrDataFromCart;

    var changeKdrNumber = function changeKdrNumber(value) {
        return function(dispatch) {
            return dispatch({
                type: ACTIONS.KDR_NUMBER_CHANGE,
                payload: value
            });
        };
    };

    _exports.changeKdrNumber = changeKdrNumber;

    var approveKdrNumber = function approveKdrNumber() {
        return function(dispatch) {
            return dispatch({
                type: ACTIONS.KDR_NUMBER_APPROVE
            });
        };
    };

    _exports.approveKdrNumber = approveKdrNumber;

    var clearKdrNumber = function clearKdrNumber() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.KDR_NUMBER_CLEAR
            });
            (0, _app.bodyLoaderShow)();

            _remoteApi.default.saveKdrData({}).then(function(response) {
                if (!response || response.code.toUpperCase() === "NOK") {
                    if (response && response.description && typeof response.description === "string") {
                        dispatch({
                            type: ACTIONS.KDR_ERROR,
                            value: {
                                level: "error",
                                message: response.description
                            }
                        });
                    } else {
                        dispatch({
                            type: ACTIONS.KDR_ERROR,
                            value: {
                                level: "error",
                                message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                            }
                        });
                    }
                }

                reloadCartState(function() {
                    return (0, _app.bodyLoaderHide)();
                })(dispatch, getState);
                dispatch({
                    type: ACTIONS.KDR_SAVED
                });
            });
        };
    };

    _exports.clearKdrNumber = clearKdrNumber;

    var dispatchKdrError = function dispatchKdrError(error) {
        return function(dispatch) {
            return dispatch({
                type: ACTIONS.KDR_ERROR,
                value: error
            });
        };
    };

    _exports.dispatchKdrError = dispatchKdrError;

    var saveKdrData = function saveKdrData(kdrData) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.KDR_SAVING
            });

            _remoteApi.default.saveKdrData(kdrData).then(function(response) {
                if (!response || response.code.toUpperCase() === "NOK") {
                    if (response && response.description && typeof response.description === "string") {
                        dispatch({
                            type: ACTIONS.KDR_ERROR,
                            value: {
                                level: "error",
                                message: response.description
                            }
                        });
                    } else {
                        dispatch({
                            type: ACTIONS.KDR_ERROR,
                            value: {
                                level: "error",
                                message: "Przepraszamy, chwilowe trudności techniczne. Spróbuj jeszcze raz."
                            }
                        });
                    }
                }

                reloadCartState()(dispatch, getState);
                dispatch({
                    type: ACTIONS.KDR_SAVED
                });
            });
        };
    };

    _exports.saveKdrData = saveKdrData;

    var haltCart = function haltCart() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.HALT_CART_START
            });
            (0, _validation.validateData)(false)(dispatch, getState).then(function(success) {
                if (!!success) {
                    _remoteApi.default.haltCart().then(function(response) {
                        var errorCode = response.jqXHR && response.jqXHR.getResponseHeader('x-opl-error-descriptors');

                        if (errorCode) {
                            dispatch({
                                type: ACTIONS.HALT_CART_ERROR,
                                message: response.data.message
                            });
                            dispatch(showErrorMessage("Błąd podczas wstrzymywania: " + response.data.message));
                        } else {
                            dispatch({
                                type: ACTIONS.HALT_CART_SUCCESS
                            });
                            dispatch((0, _app.doCheckoutStep)());
                        }
                    });
                }
            }).catch(function(err) {
                console.error(err);
            });
        };
    };

    _exports.haltCart = haltCart;
});
//# sourceMappingURL=cart.js.map