define(["exports", "../actionTypes", "./cart", "eshop/modules/cart/actions/cart", "../selectors/filters", "eshop/modules/cart/selectors", "eshop/modules/auth/actions/authorization", "eshop/utils/OnlineUtils", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/selectors", "../selectors/offers", "eshop/utils/DataLayerUtils", "eshop/modules/configurator/selectors/metaData", "./filters", "eshop/modules/configurator/selectors/offers", "../remoteApi", "../../checkout/selectors", "../../simfree/actions/app", "../../auth/selectors/authorization", "eshop/modules/checkout/actions/app", "../../simfree/actions/filter"], function(_exports, ACTIONS, _cart, _cart2, _filters, _selectors, _authorization, _OnlineUtils, _filter, _selectors2, _offers, _DataLayerUtils, _metaData, _filters2, _offers2, _remoteApi, _selectors3, _app, _authorization2, _app2, _filter2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.setDeviceInstallmentsInSessionForMagnum = setDeviceInstallmentsInSessionForMagnum;
    _exports.clearSelectedVases = _exports.selectVas = _exports.unselectVas = _exports.fetchFirstOffer = _exports.fetchContractRole = _exports.clearDeviceInstalmentsCountFromSessionStorage = _exports.pickDeviceB2B = _exports.setDeviceInstalmentsConfiguration = _exports.clearPropositionId = _exports.pickDevice = _exports.setSelectedDeviceInstalmentsCountForProductList = _exports.setSelectedOfferForProductList = _exports.setSelectedOffer = _exports.preSelectOffer = _exports.setCartConfigurationFromUrl = _exports.tryAddToCartFromLink = _exports.carouselReady = _exports.carouselPreparing = _exports.selectOffer = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    //Prosze nie dispatchowac zadnych akcji na krzywy ryj, glownie chodzi o to zeby rownie rateplanBaseProductId bylo wysylane ta akcja.
    //W przeciwnym razie zrobi sie w storze jebnik z rateplanBaseProductId i zle rzeczy sie zadzieja
    //Ewentualnie dorzucac tez rateplanBaseProductId do tej akcji to bedzie git
    var selectOfferMetaAction = function selectOfferMetaAction(propositionId) {
        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var deviceId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var rateplanBaseProductId = arguments.length > 3 ? arguments[3] : undefined;
        return function(dispatch, getState) {
            var rateplanBaseProductId = rateplanBaseProductId || (0, _offers.getBaseRatePlanIdByPropositionId)(propositionId)(getState());
            var avaliableInstalmentCount = (0, _offers.getDeviceInstalmentsCountValueByPropositionId)(propositionId)(getState());
            setAvailableInstalment(propositionId)(dispatch, getState());
            console.log("OFFERSELECTEDDD ", propositionId, rateplanBaseProductId, deviceId);

            if (rateplanBaseProductId) {
                dispatch({
                    type: ACTIONS.SELECT_OFFER,
                    rateplanBaseProductId: rateplanBaseProductId,
                    propositionId: propositionId,
                    deviceId: deviceId,
                    position: position,
                    urlParametersUsed: (0, _metaData.getUrlParametersUsed)(getState())
                });
            }

            (0, _app.fetchIfActivePickupFromShelf)(dispatch, getState);
        };
    };

    var selectOffer = function selectOffer(propositionId, position, deviceId, rateplanBaseProductId) {
        return function(dispatch, getState) {
            console.warn("selectOffer marketContext", (0, _filters.getMarketContext)(getState()));

            _DataLayerUtils.default.pushAddToCartProductClickOfferEvent((0, _offers.getOfferDataInContextForPropositionId)(propositionId)(getState()), (0, _filters.getSelectedFilters)(getState()), (0, _selectors2.getProductDataForVariantId)(deviceId)(getState()), deviceId, position, (0, _filters.getMarketContext)(getState()), (0, _authorization2.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            _DataLayerUtils.default.pushAddToCartOfferEvent((0, _offers.getOfferDataInContextForPropositionId)(propositionId)(getState()), (0, _filters.getSelectedFilters)(getState()), (0, _selectors2.getProductDataForVariantId)(deviceId)(getState()), deviceId, position, (0, _filters.getMarketContext)(getState()), (0, _authorization2.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            console.log("selectOffer", propositionId, deviceId);
            dispatch(selectOfferMetaAction(propositionId, position, deviceId, rateplanBaseProductId));

            if ("WWW" === (0, _authorization2.getSalesChannel)(getState())) {
                if ((0, _filters.getVerifiedMsisdn)(getState())) {
                    //verifiedMsisdn set in sessionStorage by PWA
                    dispatch((0, _authorization.doSmsAccountVerification)());
                } else {
                    dispatch((0, _authorization.doSmsAuthorization)());
                }
            } else {
                var process = (0, _filters.getSelectedProcessTypeValue)(getState());

                if ((0, _filters.getMsisdnVerificationNeeded)(getState()) && (0, _filters.getVerifiedMsisdn)(getState()) || ['ACTIVATION', 'SALE_OF_GOODS', 'INSTALMENT_SALES_OF_GOODS_NC'].includes(process)) {
                    dispatch((0, _cart.addToCart)());
                } else if ('INSTALMENT_SALES_OF_GOODS' === process) {
                    dispatch((0, _cart.addInstallmentSalesOfGoodsToCart)());
                } else {
                    dispatch((0, _filter.doOpenVerificationModal)());
                }
            }
        };
    };

    _exports.selectOffer = selectOffer;

    var carouselPreparing = function carouselPreparing() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CAROUSEL_PREPARING
            });
        };
    };

    _exports.carouselPreparing = carouselPreparing;

    var carouselReady = function carouselReady() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CAROUSEL_READY
            });
        };
    };

    _exports.carouselReady = carouselReady;

    var tryAddToCartFromLink = function tryAddToCartFromLink() {
        return function(dispatch, getState) {
            if ((0, _metaData.getAddFromLink)(getState())) {
                var propositionId = _OnlineUtils.default.getParameterValueFromUrl('propositionId');

                var serviceplan = _OnlineUtils.default.getParameterValueFromUrl('serviceplan');

                var deviceId = _OnlineUtils.default.getParameterValueFromUrl('chosenDevice');

                if (propositionId) {
                    serviceplan = (0, _offers.getBaseRatePlanIdByPropositionId)(propositionId)(getState());
                } else if (serviceplan) {
                    var data = (0, _offers.getOffersForCurrentFilters)(getState());
                    propositionId = (0, _offers.getPropositionIdByRatePlanId)(serviceplan, data);
                }

                console.log("Try to auto add ***************************************************");
                console.log(propositionId);
                console.log(serviceplan);
                console.log(deviceId);
                dispatch(selectOffer(propositionId, -1, deviceId, serviceplan));
            }
        };
    };

    _exports.tryAddToCartFromLink = tryAddToCartFromLink;

    var setCartConfigurationFromUrl = function setCartConfigurationFromUrl() {
        return function(dispatch, getState) {
            if (_OnlineUtils.default.getParameterValueFromUrl('autoadd')) {
                var serviceplan = _OnlineUtils.default.getParameterValueFromUrl('serviceplan');

                var propositionId = _OnlineUtils.default.getParameterValueFromUrl('propositionId');

                var deviceId = _OnlineUtils.default.getParameterValueFromUrl('chosenDevice');

                dispatch({
                    type: ACTIONS.ADD_FROM_LINK,
                    serviceplan: serviceplan,
                    deviceId: deviceId,
                    propositionId: propositionId
                });
            }
        };
    };

    _exports.setCartConfigurationFromUrl = setCartConfigurationFromUrl;

    var preSelectOffer = function preSelectOffer(propositionId, position, deviceId) {
        return function(dispatch, getState) {
            console.log("PRESELECT OFFER **********************,", propositionId);
            dispatch(selectOfferMetaAction(propositionId, position, deviceId));
            var selectedOffer = (0, _offers2.getSelectedOffer)(getState());

            if (selectedOffer) {
                if ((0, _selectors2.isProductDetailsPage)(getState())) {
                    _DataLayerUtils.default.pushProductDetailsView(selectedOffer, (0, _filters.getSelectedOfferType)(getState()), (0, _filters.getClientContext)(getState()), (0, _selectors2.getSelectedVariant)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization2.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
                } else { //other datalayer
                }
            }
        };
    };

    _exports.preSelectOffer = preSelectOffer;

    var setSelectedOffer = function setSelectedOffer(propositionId) {
        return function(dispatch) {
            return dispatch(selectOfferMetaAction(propositionId));
        };
    };

    _exports.setSelectedOffer = setSelectedOffer;

    var setSelectedOfferForProductList = function setSelectedOfferForProductList(propositionId) {
        return function(dispatch) {
            console.log("setSelectedOfferForProductList", propositionId);
            dispatch(selectOfferMetaAction(propositionId));
            dispatch((0, _filter.reloadProductList)());
        };
    };

    _exports.setSelectedOfferForProductList = setSelectedOfferForProductList;

    var setAvailableInstalment = function setAvailableInstalment(propositionId) {
        return function(dispatch, state) {
            var avaliableInstalmentCount = (0, _offers.getDeviceInstalmentsCountValueByPropositionId)(propositionId)(state);
            var currentInstalmentCountValue = (0, _offers.getCurrentDeviceInstalmentsCountValue)(state);

            if (avaliableInstalmentCount.indexOf(parseInt(currentInstalmentCountValue)) > -1) {
                console.log("currently set instalmentCountValue accurate: DO NOTHING");
            } else {
                console.log("currently set instalmentCountValue not available: CHANGE ");
                var defaultInstallmentNumber = (0, _offers.getDeviceInstalmentsConfigurationInContext)(state) && (0, _offers.getDeviceInstalmentsConfigurationInContext)(state)['default'];
                var deviceInstallmentsCount = avaliableInstalmentCount && avaliableInstalmentCount.length > 0 && avaliableInstalmentCount.includes(defaultInstallmentNumber) ? defaultInstallmentNumber : null;
                dispatch({
                    type: ACTIONS.SELECT_DEVICE_INSTALMENTS_COUNT,
                    deviceInstalmentsCount: deviceInstallmentsCount
                });
            }
        };
    };

    var setSelectedDeviceInstalmentsCountForProductList = function setSelectedDeviceInstalmentsCountForProductList(deviceInstalmentsCount) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SELECT_DEVICE_INSTALMENTS_COUNT,
                deviceInstalmentsCount: deviceInstalmentsCount
            });
            dispatch((0, _filter.reloadProductList)());
        };
    };

    _exports.setSelectedDeviceInstalmentsCountForProductList = setSelectedDeviceInstalmentsCountForProductList;

    function setDeviceInstallmentsInSessionForMagnum(deviceInstalmentsCount) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
                deviceInstalmentsCount: deviceInstalmentsCount
            });
        };
    }

    var pickDevice = function pickDevice(propositionId, url, position) {
        return function(dispatch, getState) {
            dispatch((0, _cart2.clearAddTerminalToOfferFromSessionStorage)());
            dispatch(clearDeviceInstalmentsCountFromSessionStorage());
            dispatch(_filters2.urlParametersUsed);
            dispatch(selectOfferMetaAction(propositionId));

            _DataLayerUtils.default.pushProductClickEvent((0, _offers.getOfferDataInContextForPropositionId)(propositionId)(getState()), (0, _filters.getSelectedFilters)(getState()), position, null, (0, _filters.getMarketContext)(getState()), (0, _authorization2.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            _OnlineUtils.default.pageRedirect(url);
        };
    };

    _exports.pickDevice = pickDevice;

    var clearPropositionId = function clearPropositionId() {
        return {
            type: ACTIONS.CLEAR_OFFER
        };
    };

    _exports.clearPropositionId = clearPropositionId;

    var setDeviceInstalmentsConfiguration = function setDeviceInstalmentsConfiguration(deviceInstalmentsConfiguration) {
        return {
            type: ACTIONS.SET_DEVICE_INSTALMENTS_CONFIGURATION,
            deviceInstalmentsConfiguration: deviceInstalmentsConfiguration
        };
    };

    _exports.setDeviceInstalmentsConfiguration = setDeviceInstalmentsConfiguration;

    var pickDeviceB2B = function pickDeviceB2B(url) {
        return function(dispatch, getState) {
            /*Temporary*/
            //let first = parameters[0]
            //dispatch({processType: first.processType, type: ACTIONS.SELECT_PROCESS_TYPE})
            //dispatch(pickDevice(first.offer.id, url))
            _OnlineUtils.default.pageRedirect(url);
        };
    };

    _exports.pickDeviceB2B = pickDeviceB2B;

    var clearDeviceInstalmentsCountFromSessionStorage = function clearDeviceInstalmentsCountFromSessionStorage() {
        return {
            type: ACTIONS.CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE
        };
    };

    _exports.clearDeviceInstalmentsCountFromSessionStorage = clearDeviceInstalmentsCountFromSessionStorage;

    var fetchContractRole = function fetchContractRole(availableProductsKey) {
        return function(dispatch, getState) {
            var marketContext = (0, _filters.getMarketContext)(getState());

            if (["B2B", "B2C"].indexOf(marketContext) === -1) {
                console.log("market context is not B2B (" + marketContext + "). fetchContractRole action skipped");
                return;
            }

            availableProductsKey = availableProductsKey || (0, _selectors2.getCurrentSelectedAvailableProductsKey)(getState()) || (0, _selectors2.getFirstAvailableProductsKey)(getState());

            if (!availableProductsKey) {
                console.log("no availableProductsKey. fetchContractRole action skipped");
                return;
            }

            dispatch({
                type: ACTIONS.GET_CONTRACT_ROLE_START
            });

            _remoteApi.default.getContractRole({
                availableProductsKey: availableProductsKey
            }).then(function(response) {
                if (response.roles) {
                    dispatch({
                        type: ACTIONS.GET_CONTRACT_ROLE_RESPONSE,
                        data: response
                    });
                } else {
                    dispatch({
                        type: ACTIONS.GET_CONTRACT_ROLE_ERROR
                    });
                }
            }).catch(function(data) {
                dispatch({
                    type: ACTIONS.GET_CONTRACT_ROLE_ERROR
                });
            });
        };
    };

    _exports.fetchContractRole = fetchContractRole;

    var fetchFirstOffer = function fetchFirstOffer(availableProductsKey) {
        return function(dispatch, getState) {
            if (!availableProductsKey) {
                console.log("no availableProductsKey. fetchFirstOffer action skipped");
                availableProductsKey = (0, _selectors2.getFirstAvailableProductsKey)(getState());
            }

            dispatch({
                type: ACTIONS.GET_FIRST_OFFER_START
            });

            _remoteApi.default.getFirstOffer({
                availableProductsKey: availableProductsKey
            }).then(function(response) {
                if (response) {
                    dispatch({
                        type: ACTIONS.GET_FIRST_OFFER_RESPONSE,
                        data: response
                    });
                } else {
                    dispatch({
                        type: ACTIONS.GET_FIRST_OFFER_ERROR
                    });
                }
            }).catch(function(data) {
                dispatch({
                    type: ACTIONS.GET_FIRST_OFFER_ERROR
                });
            });
        };
    };

    _exports.fetchFirstOffer = fetchFirstOffer;

    var unselectVas = function unselectVas(propositionId, vasId, rateplanName) {
        return function(dispatch, getState) {
            console.log("UNSELECT VAS ", propositionId, vasId, rateplanName);
            dispatch({
                type: ACTIONS.UNSELECT_VAS,
                propositionId: propositionId,
                vasId: vasId,
                rateplanName: rateplanName
            });
        };
    };

    _exports.unselectVas = unselectVas;

    var selectVas = function selectVas(propositionId, vasId, rateplanName) {
        return function(dispatch, getState) {
            console.log("SELECT VAS ", propositionId, vasId, rateplanName);
            dispatch({
                type: ACTIONS.SELECT_VAS,
                propositionId: propositionId,
                vasId: vasId,
                rateplanName: rateplanName
            });
        };
    };

    _exports.selectVas = selectVas;

    var clearSelectedVases = function clearSelectedVases() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CLEAR_SELECTED_VASES
            });
        };
    };

    _exports.clearSelectedVases = clearSelectedVases;
});
//# sourceMappingURL=offers.js.map