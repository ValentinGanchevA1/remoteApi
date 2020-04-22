define(["exports", "../actionTypes", "../../cart/actionTypes", "eshop/modules/simfree/actionTypes", "../remoteApi", "../selectors/filters", "eshop/modules/simfree/selectors", "../selectors/offers", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/actions/filter", "eshop/utils/OnlineUtils", "eshop/utils/DataLayerUtils", "eshop/modules/configurator/selectors/metaData", "../../magnum2/actions/magnum", "../../simfree/actions/app", "../../cart/selectors", "../../auth/selectors/authorization", "../../checkout/selectors", "../utils", "lodash", "../selectors/root", "../../auth/actions/api", "../../core/constants/TransactionProcessTypeEnum", "../../../utils/SimfreeUtils", "../../simfree/selectors"], function(_exports, ACTIONS, CART_ACTIONS, _actionTypes3, _remoteApi, _filters, _selectors, _offers, _offers2, _filter, _OnlineUtils, _DataLayerUtils, _metaData, remote, _app, _selectors2, _authorization, _selectors3, _utils, _lodash, _root, _api, _TransactionProcessTypeEnum, _SimfreeUtils, _selectors4) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isMatchingFilters = _exports.setProcessForMsisdn = _exports.verifyMsisdnB2B = _exports.setMarketContext = _exports.selectProcessTypeB2B = _exports.selectProductDetailsProcessType = _exports.selectProductListProcessType = _exports.selectProcessType = _exports.selectLoyaltyLengthB2B = _exports.selectProductDetailsLoyaltyLength = _exports.selectProductListLoyaltyLength = _exports.selectLoyaltyLength = _exports.clearLoyaltyLength = _exports.clearProcessType = _exports.clearOfferType = _exports.urlOfferParametersUsed = _exports.urlParametersUsed = _exports.requiredMsisdnVerificationOff = _exports.requiredMsisdnVerificationOn = _exports.changeMsisdnInput = _exports.msisdnVerificationNeeded = _exports.propositionListCountSetMode = _exports.propositionListCountSet = _exports.propositionListCountDecrement = _exports.propositionListCountIncrement = _exports.clearCheckMsisdnB2B = _exports.clearCheckMsisdn = _exports.setMaxSimCount = _exports.checkMsisdnAndGetOffersProductList = _exports.checkMsisdnAndGetOffersB2B = _exports.checkMsisdnAndGetOffers = _exports.fetchOfferFilters = _exports.getDocumentsAction = _exports.getProductDetailsConvergentOffersAction = _exports.getProductDetailsOffersWithoutOfferSelectorAction = _exports.getProductListOffersAction = _exports.getOffersAction = _exports.clearPropositionListSoftBundleGroup = _exports.clearPropositionListOfferType = _exports.setPropositionListSoftBundleGroup = _exports.subscribeToClientContextChange = _exports.setClientContext = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    CART_ACTIONS = babelHelpers.interopRequireWildcard(CART_ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    remote = babelHelpers.interopRequireWildcard(remote);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _SimfreeUtils = babelHelpers.interopRequireDefault(_SimfreeUtils);

    var setClientContext = function setClientContext(isEnabled) {
        return function(dispatch, getState) {
            dispatch({
                type: isEnabled ? ACTIONS.CLIENT_CONTEXT_ENABLED : ACTIONS.CLIENT_CONTEXT_DISABLED
            });
            var handlers = (0, _filters.getClientContextChangeHandlers)(getState());
            handlers.forEach(function(e) {
                return dispatch(e());
            });

            _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
        };
    };

    _exports.setClientContext = setClientContext;

    var subscribeToClientContextChange = function subscribeToClientContextChange(action) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CLIENT_CONTEXT_CHANGE_SUBSCRIPTION,
                handler: action
            });
        };
    };

    _exports.subscribeToClientContextChange = subscribeToClientContextChange;

    var setCurrentProposition = function setCurrentProposition(offerArray) {
        return function(dispatch, getState) {
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$ setCurrentProposition $$$$$$$$$$$$$$$$$$$$");
            offerArray = offerArray || (0, _offers.getOffersForCurrentFilters)(getState());
            dispatch({
                type: ACTIONS.CAROUSEL_READY
            });

            if (!(0, _filters.getUseDefaultOffer)(getState())) {
                dispatch((0, _app.matchPropositionIdToselectedRatePlan)());
                return;
            }

            var selectedRatePlanId = (0, _offers.getSelectedBaseRatePlanId)(getState());
            var newPropositionId = offerArray.find(function(offer) {
                return offer.rateplanBaseProductId === selectedRatePlanId;
            });
            dispatch((0, _offers2.setSelectedOffer)(newPropositionId && newPropositionId.id || offerArray[0] && offerArray[0].id));
        };
    };

    var setPropositionListSoftBundleGroup = function setPropositionListSoftBundleGroup() {
        return function(dispatch, getState) {
            console.log("ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP ", (0, _selectors.getSelectedSoftBundleGroup)(getState()));
            dispatch({
                type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(getState())
            });
        };
    };

    _exports.setPropositionListSoftBundleGroup = setPropositionListSoftBundleGroup;

    var clearPropositionListOfferType = function clearPropositionListOfferType() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.PROPOSITION_LIST_OFFER_TYPE,
                offerType: null
            });
            dispatch({
                type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: null
            });
        };
    };

    _exports.clearPropositionListOfferType = clearPropositionListOfferType;

    var clearPropositionListSoftBundleGroup = function clearPropositionListSoftBundleGroup() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: null
            });
        };
    };

    _exports.clearPropositionListSoftBundleGroup = clearPropositionListSoftBundleGroup;

    var getOffersAction = function getOffersAction(dispatch, getState) {
        var availableProductsKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        dispatch({
            type: ACTIONS.FETCH_OFFERS_START
        });
        var deviceCode = (0, _selectors.getSelectedBaseDeviceCode)(getState());
        var selectedFilters = (0, _filters.getSelectedFilters)(getState());
        return _remoteApi.default.getOffers(selectedFilters, availableProductsKey, deviceCode).then(function(response) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: selectedFilters,
                useDefaultProcess: (0, _filters.getUseDefaultProcess)(getState()),
                useDefaultLoyalty: (0, _filters.getUseDefaultLoyalty)(getState()),
                useDefaultOffer: (0, _filters.getUseDefaultOffer)(getState())
            });
            getDocumentsAction(dispatch, getState);
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% getOffersAction");
            dispatch((0, _app.trySetDefaultOffer)());
            (0, _app.fetchIfActivePickupFromShelf)(dispatch, getState);

            if ((0, _selectors.isProductListPage)(getState()) || (0, _selectors4.isAccessoryListPage)(getState())) {
                (0, _filter.reloadProductList)()(dispatch, getState);
            }

            _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, selectedFilters, (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            dispatch((0, _offers2.tryAddToCartFromLink)());
        }, function(error) {
            return console.error("Offers not fetched! getOffersAction getOffers error", error);
        });
    };

    _exports.getOffersAction = getOffersAction;

    var getProductListOffersAction = function getProductListOffersAction(dispatch, getState) {
        var availableProductsKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var isInitialFetch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        dispatch({
            type: ACTIONS.FETCH_OFFERS_START
        });
        var deviceCode = (0, _offers.getSelectedDeviceId)(getState());
        var selectedFilters = (0, _filters.getSelectedFilters)(getState());

        _remoteApi.default.getOffers(selectedFilters, availableProductsKey, deviceCode, isInitialFetch).then(function(response) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: selectedFilters
            });
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% getProductListOffersAction");
            dispatch(trySetDefaultProposition());
            dispatch((0, _app.trySetDefaultOffer)());
            getDocumentsAction(dispatch, getState);
            (0, _filter.reloadProductList)()(dispatch, getState);
            dispatch((0, _offers2.tryAddToCartFromLink)());
        }).catch(function(error) {
            console.error("offers not fetched", error);
        });
    };

    _exports.getProductListOffersAction = getProductListOffersAction;

    var getProductDetailsOffersWithoutOfferSelectorAction = function getProductDetailsOffersWithoutOfferSelectorAction(dispatch, getState) {
        var availableProductsKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var isInitialFetch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        dispatch({
            type: ACTIONS.FETCH_OFFERS_START
        });
        var deviceCode = (0, _selectors.getSelectedBaseDeviceCode)(getState());
        var selectedFilters = (0, _filters.getSelectedFilters)(getState());

        _remoteApi.default.getOffersWithoutOfferSelector(selectedFilters, availableProductsKey, deviceCode, isInitialFetch).then(function(response) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: selectedFilters
            });
            getDocumentsAction(dispatch, getState);
            (0, _app.fetchIfActivePickupFromShelf)(dispatch, getState);
            dispatch(trySetDefaultProposition());
            dispatch((0, _app.trySetDefaultOffer)());

            _DataLayerUtils.default.pushProductDetailsView((0, _offers.getSelectedOffer)(getState()), (0, _filters.getSelectedOfferType)(getState()), (0, _filters.getClientContext)(getState()), (0, _selectors.getSelectedVariant)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            dispatch((0, _offers2.tryAddToCartFromLink)());
        }, function(error) {
            console.warn("getProductDetailsOffersAction offers not fetched", error);
        }).catch(function(error) {
            console.error("getProductDetailsOffersAction failed", error);
        });
    };

    _exports.getProductDetailsOffersWithoutOfferSelectorAction = getProductDetailsOffersWithoutOfferSelectorAction;

    var getProductDetailsConvergentOffersAction = function getProductDetailsConvergentOffersAction(dispatch, getState) {
        dispatch({
            type: ACTIONS.FETCH_OFFERS_START
        });
        var magnumStore = getState().magnum;
        var deviceCode = (0, _selectors.getSelectedBaseDeviceCode)(getState());
        var propositionIds = magnumStore.durationList.propositions.map(function(proposition) {
            return proposition.mobileVoiceBundleTemplateCode;
        });
        var processType = null;

        if (magnumStore.selectedProposition && magnumStore.selectedProposition.voice && magnumStore.selectedProposition.mobileVoiceBundleTemplateCode && magnumStore.selectedProposition.mobileVoiceBundleTemplateCode.includes(magnumStore.selectedProposition.voice.code)) {
            if ("POS" === magnumStore.possibleTransactions.salesChannel && "MNP" === magnumStore.selectedMobileTransaction.process) {
                processType = "MNP_TWOSTEP";
            } else {
                processType = magnumStore.selectedMobileTransaction.process;
            }
        } else {
            processType = magnumStore.selectedFixBroadbandTransaction.process;
        }

        _remoteApi.default.getConvergentOffers(processType, deviceCode, propositionIds).then(function(response) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: (0, _filters.getSelectedFilters)(getState())
            });
            filterOffersContainingDevice(dispatch, magnumStore, response);
        });
    };

    _exports.getProductDetailsConvergentOffersAction = getProductDetailsConvergentOffersAction;

    function filterOffersContainingDevice(dispatch, magnumStore, offersData) {
        var availableOfferIds = offersData.map(function(offer) {
            return offer.id;
        });
        var propositions = magnumStore.durationList.propositions;
        magnumStore.durationList.propositions = propositions.filter(function(proposition) {
            return availableOfferIds.indexOf(proposition.mobileVoiceBundleTemplateCode) !== -1;
        });
        dispatch(remote.fetchPropositionListActions.success(magnumStore.durationList));
    }

    var getDocumentsAction = function getDocumentsAction(dispatch, getState) {
        var process = (0, _filters.getSelectedFiltersProcessType)(getState());
        var ratePlanIds = getRatePlanIds(process)(getState);

        _remoteApi.default.getDocuments(ratePlanIds, process).then(function(response) {
            dispatch({
                type: ACTIONS.SELECT_DOCUMENTS,
                payload: response
            });
        });
    };

    _exports.getDocumentsAction = getDocumentsAction;

    var getRatePlanIds = function getRatePlanIds(process) {
        return function(getState) {
            if (process && _TransactionProcessTypeEnum.default.SALE_OF_GOODS === process.processType) {
                return {
                    productIds: [_SimfreeUtils.default.CPO]
                };
            }

            return (0, _offers.getRateplanIdsObj)(getState());
        };
    };

    var fetchOfferFilters = function fetchOfferFilters() {
        return function(dispatch, getState) {
            _remoteApi.default.getOfferFilters().then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_OFFER_FILTERS,
                    payload: response,
                    urlParametersUsed: (0, _metaData.getUrlParametersUsed)(getState()),
                    useDefaultProcess: (0, _filters.getUseDefaultProcess)(getState()),
                    useDefaultLoyalty: (0, _filters.getUseDefaultLoyalty)(getState())
                });

                _OnlineUtils.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("processType", (0, _filters.getSelectedProcessTypeValue)(getState()));

                if (typeof Feedback !== "undefined") {
                    Feedback.showHideFeedback();
                }

                dispatch((0, _offers2.fetchContractRole)());
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% fechOfferFilters");
                getOffersAction(dispatch, getState);
            }).catch(function(error) {
                console.error("Cannot get filters", error);
            });
        };
    };

    _exports.fetchOfferFilters = fetchOfferFilters;

    var checkMsisdnAndGetOffers = function checkMsisdnAndGetOffers(msisdn) {
        return function(dispatch, getState) {
            console.log("checkMsisdnAndGetOffers", msisdn);
            dispatch({
                type: ACTIONS.CHECK_MSISDN
            });
            var deviceCode = (0, _offers.getSelectedDeviceId)(getState());
            var selectedFilters = (0, _filters.getSelectedFilters)(getState());
            var marketContext = (0, _filters.getMarketContext)(getState());
            var availableProductsKey = (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState());

            _remoteApi.default.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode).then(function(response) {
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_RESULT,
                    payload: {
                        response: response,
                        process: selectedFilters.processType,
                        offer: selectedFilters.offerType,
                        market: marketContext
                    }
                });

                if (response.isPositive) {
                    dispatch((0, _offers2.fetchContractRole)());
                    dispatch({
                        type: ACTIONS.FETCH_OFFERS,
                        payload: response.offers,
                        selectedFilters: (0, _filters.getSelectedFilters)(getState())
                    });
                    dispatch((0, _api.requestLoggedCustomerData)());
                    getDocumentsAction(dispatch, getState);
                    dispatch(setProcessForMsisdn(msisdn, selectedFilters.processType, response.process));

                    _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, selectedFilters, (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
                }
            }).catch(function(response) {
                console.error("checkMsisdnAndGetOffers ");
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_ERROR,
                    message: response.responseText,
                    payload: {
                        response: {
                            msisdn: msisdn
                        },
                        process: selectedFilters.processType,
                        offer: selectedFilters.offerType,
                        market: marketContext
                    }
                });
            });
        };
    };

    _exports.checkMsisdnAndGetOffers = checkMsisdnAndGetOffers;

    var checkMsisdnAndGetOffersB2B = function checkMsisdnAndGetOffersB2B(msisdn, index) {
        return function(dispatch, getState) {
            var selectedFilters = (0, _filters.getSelectedFiltersByIndexB2B)(index)(getState());
            dispatch({
                type: ACTIONS.CHECK_MSISDN_RESULT_B2B_START,
                index: index
            });

            _remoteApi.default.checkAndGetOffers(msisdn, selectedFilters).then(function(response) {
                if (response.isPositive) {
                    dispatch({
                        type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                        status: "OK",
                        description: response.description,
                        msisdn: msisdn,
                        index: index
                    });
                    selectedFilters.verifiedMsisdn = msisdn;
                    dispatch({
                        type: ACTIONS.FETCH_OFFERS,
                        payload: response.offers,
                        selectedFilters: selectedFilters,
                        useDefaultProcess: (0, _filters.getUseDefaultProcess)(getState()),
                        useDefaultLoyalty: (0, _filters.getUseDefaultLoyalty)(getState()),
                        useDefaultOffer: (0, _filters.getUseDefaultOffer)(getState())
                    });
                } else {
                    dispatch({
                        type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                        status: "NOK",
                        description: response.description,
                        msisdn: null,
                        index: index
                    });
                }
            }).catch(function(error) {
                console.error("Error checking MSISDN", error);
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                    status: "NOK",
                    msisdn: null,
                    index: index
                });
            });
        };
    };

    _exports.checkMsisdnAndGetOffersB2B = checkMsisdnAndGetOffersB2B;

    var manageChackMsisdnAndGetOffersProductList = function manageChackMsisdnAndGetOffersProductList(response, selectedFilters) {
        return function(dispatch, getState) {
            console.log("checkMsisdnAndGetOffersProductList response", response);
            var marketContext = (0, _filters.getMarketContext)(getState());
            dispatch({
                type: ACTIONS.CHECK_MSISDN_RESULT,
                payload: {
                    response: response,
                    process: selectedFilters.processType,
                    offer: selectedFilters.offerType,
                    market: marketContext
                }
            });
            dispatch((0, _offers2.fetchContractRole)());
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response.offers,
                selectedFilters: (0, _filters.getSelectedFilters)(getState())
            });
            dispatch((0, _app.trySetDefaultOffer)(response));
            console.log("after trySetDefaultOffer");
            dispatch(trySetDefaultProposition());
            getDocumentsAction(dispatch, getState);

            _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, selectedFilters, (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

            console.log("after pushSIMOImpressionEvent");
            (0, _filter.reloadProductList)()(dispatch, getState);
            console.log("WSZYSTKO GRA");
        };
    };

    var checkMsisdnAndGetOffersProductList = function checkMsisdnAndGetOffersProductList(msisdn) {
        return function(dispatch, getState) {
            console.log("checkMsisdnAndGetOffersProductList (", msisdn);
            dispatch({
                type: ACTIONS.CHECK_MSISDN
            });
            var deviceCode = (0, _offers.getSelectedDeviceId)(getState()) || (0, _selectors.getSelectedBaseDeviceCode)(getState());
            var selectedFilters = (0, _filters.getSelectedFilters)(getState());
            var availableProductsKey = (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState());

            if ((0, _filters.getCheckMsisdnResult)(getState())) {
                dispatch(manageChackMsisdnAndGetOffersProductList((0, _filters.getCheckMsisdnResult)(getState()), selectedFilters));
            } else _remoteApi.default.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode).then(function(response) {
                dispatch(manageChackMsisdnAndGetOffersProductList(response, selectedFilters));
            }).catch(function(response) {
                console.error("checkMsisdnAndGetOffersProductList ");
                var marketContext = (0, _filters.getMarketContext)(getState());
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_ERROR,
                    message: response.responseText,
                    payload: {
                        response: {
                            msisdn: msisdn
                        },
                        process: selectedFilters.processType,
                        offer: selectedFilters.offerType,
                        market: marketContext
                    }
                });
            });
        };
    };

    _exports.checkMsisdnAndGetOffersProductList = checkMsisdnAndGetOffersProductList;

    var setMaxSimCount = function setMaxSimCount(maxSimCount) {
        return {
            type: ACTIONS.SET_MAX_SIM_COUNT,
            maxSimCount: maxSimCount
        };
    };

    _exports.setMaxSimCount = setMaxSimCount;

    var clearCheckMsisdn = function clearCheckMsisdn() {
        return {
            type: ACTIONS.CLEAR_CHECK_MSISDN,
            payload: []
        };
    };

    _exports.clearCheckMsisdn = clearCheckMsisdn;

    var clearCheckMsisdnB2B = function clearCheckMsisdnB2B(index) {
        return {
            type: ACTIONS.CLEAR_CHECK_MSISDN_B2B,
            index: index
        };
    };

    _exports.clearCheckMsisdnB2B = clearCheckMsisdnB2B;

    var propositionListCountIncrement = function propositionListCountIncrement() {
        return function(dispatch, getState) {
            return dispatch({
                type: ACTIONS.PROPOSITION_LIST_COUNT_INCREMENT,
                defaultFilters: (0, _filters.getDefaultFilters)(getState())
            });
        };
    };

    _exports.propositionListCountIncrement = propositionListCountIncrement;

    var propositionListCountDecrement = function propositionListCountDecrement() {
        return {
            type: ACTIONS.PROPOSITION_LIST_COUNT_DECREMENT
        };
    };

    _exports.propositionListCountDecrement = propositionListCountDecrement;

    var propositionListCountSet = function propositionListCountSet(count) {
        return {
            type: ACTIONS.PROPOSITION_LIST_COUNT_SET,
            count: count
        };
    };

    _exports.propositionListCountSet = propositionListCountSet;

    var propositionListCountSetMode = function propositionListCountSetMode(on) {
        return {
            type: ACTIONS.PROPOSITION_LIST_COUNT_SET_MODE,
            on: on
        };
    };

    _exports.propositionListCountSetMode = propositionListCountSetMode;
    var msisdnVerificationNeeded = {
        type: ACTIONS.MSISDN_VERIFICATION_NEEDED
    };
    _exports.msisdnVerificationNeeded = msisdnVerificationNeeded;

    var changeMsisdnInput = function changeMsisdnInput(msisdn, valid) {
        return {
            type: ACTIONS.MSISDN_INPUT_CHANGED,
            payload: {
                msisdn: msisdn,
                valid: valid
            }
        };
    };

    _exports.changeMsisdnInput = changeMsisdnInput;

    var requiredMsisdnVerificationOn = function requiredMsisdnVerificationOn() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.MSISDN_VERIFICATION_REQUIRED_ON
            });
        };
    };

    _exports.requiredMsisdnVerificationOn = requiredMsisdnVerificationOn;

    var requiredMsisdnVerificationOff = function requiredMsisdnVerificationOff() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.MSISDN_VERIFICATION_REQUIRED_OFF
            });
        };
    };

    _exports.requiredMsisdnVerificationOff = requiredMsisdnVerificationOff;
    var urlParametersUsed = {
        type: ACTIONS.URL_PARAMETERS_USED
    };
    _exports.urlParametersUsed = urlParametersUsed;
    var urlOfferParametersUsed = {
        type: ACTIONS.URL_OFFER_PARAMETERS_USED
    };
    _exports.urlOfferParametersUsed = urlOfferParametersUsed;

    var clearOfferType = function clearOfferType() {
        return {
            type: _actionTypes3.SELECT_OFFER_TYPE,
            offerType: ""
        };
    };

    _exports.clearOfferType = clearOfferType;

    var clearProcessType = function clearProcessType() {
        return {
            type: ACTIONS.SELECT_PROCESS_TYPE,
            processType: ""
        };
    };

    _exports.clearProcessType = clearProcessType;

    var clearLoyaltyLength = function clearLoyaltyLength() {
        return {
            type: ACTIONS.CLEAR_LOYALTY_LENGTH
        };
    };

    _exports.clearLoyaltyLength = clearLoyaltyLength;

    var selectLoyaltyLength = function selectLoyaltyLength(loyaltyLength) {
        return selectLoyaltyLengthMetaAction(loyaltyLength, getOffersAction);
    };

    _exports.selectLoyaltyLength = selectLoyaltyLength;

    var selectProductListLoyaltyLength = function selectProductListLoyaltyLength(loyaltyLength) {
        return selectLoyaltyLengthMetaAction(loyaltyLength, getProductListOffersAction);
    };

    _exports.selectProductListLoyaltyLength = selectProductListLoyaltyLength;

    var selectProductDetailsLoyaltyLength = function selectProductDetailsLoyaltyLength(loyaltyLength) {
        return selectLoyaltyLengthMetaAction(loyaltyLength, getProductDetailsOffersWithoutOfferSelectorAction);
    };

    _exports.selectProductDetailsLoyaltyLength = selectProductDetailsLoyaltyLength;

    var selectLoyaltyLengthB2B = function selectLoyaltyLengthB2B(loyaltyLength) {
        return selectLoyaltyLengthMetaAction(loyaltyLength, getOffersAction);
    };

    _exports.selectLoyaltyLengthB2B = selectLoyaltyLengthB2B;

    var selectProcessType = function selectProcessType(processType) {
        return selectProcessTypeMetaAction(processType, getOffersAction);
    };

    _exports.selectProcessType = selectProcessType;

    var selectProductListProcessType = function selectProductListProcessType(processType) {
        return selectProcessTypeMetaAction(processType, getProductListOffersAction);
    };

    _exports.selectProductListProcessType = selectProductListProcessType;

    var selectProductDetailsProcessType = function selectProductDetailsProcessType(processType) {
        return selectProcessTypeMetaAction(processType, getProductDetailsOffersWithoutOfferSelectorAction);
    };

    _exports.selectProductDetailsProcessType = selectProductDetailsProcessType;

    var selectProcessTypeB2B = function selectProcessTypeB2B(processType, index) {
        return selectProcessTypeMetaAction(processType, index, getOffersActionB2B);
    };

    _exports.selectProcessTypeB2B = selectProcessTypeB2B;

    var setMarketContext = function setMarketContext(market) {
        return function(dispatch, getState) {
            var marketContext = (0, _filters.getMarketContext)(getState());
            var priceIsNet = (0, _selectors2.getPriceIsNet)(getState());
            console.warn("setMarketContext");

            if (marketContext !== market || priceIsNet === null || priceIsNet === undefined) {
                dispatch({
                    type: CART_ACTIONS.SET_PRICE_VIEW_NET,
                    market: market
                });
            }

            dispatch({
                type: ACTIONS.SET_MARKET_CONTEXT,
                market: market
            });
        };
    };

    _exports.setMarketContext = setMarketContext;

    var verifyMsisdnB2B = function verifyMsisdnB2B(msisdn, index) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                msisdn: msisdn,
                index: index
            });
        };
    };

    _exports.verifyMsisdnB2B = verifyMsisdnB2B;

    var selectLoyaltyLengthMetaAction = function selectLoyaltyLengthMetaAction(loyaltyLength, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            var actualLoyaltyLength = (0, _filters.getSelectedLoyaltyLengthValue)(getState());

            if (actualLoyaltyLength === loyaltyLength) {
                return;
            }

            dispatch({
                loyaltyLength: loyaltyLength,
                type: ACTIONS.SELECT_LOYALTY_LENGTH,
                processType: (0, _filters.getSelectedProcessTypeValue)(getState())
            });

            if ((0, _filters.getCallOffersWithMsisdn)(getState())) {
                checkMsisdnAndGetOffers((0, _filters.getVerifiedMsisdn)(getState()))(dispatch, getState);
            } else if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState())).then(function() {
                    return dispatch(setCurrentProposition());
                });
            } else {
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
            }
        };
    };

    var selectProductListLoyaltyLengthMetaAction = function selectProductListLoyaltyLengthMetaAction(loyaltyLength, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            dispatch({
                loyaltyLength: loyaltyLength,
                type: ACTIONS.SELECT_LOYALTY_LENGTH,
                processType: (0, _filters.getSelectedProcessTypeValue)(getState())
            });

            if ((0, _filters.getCallOffersWithMsisdn)(getState())) {
                checkMsisdnAndGetOffersProductList((0, _filters.getVerifiedMsisdn)(getState()))(dispatch, getState);
            } else if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
            } else {
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

                dispatch((0, _filter.reloadProductList)());
            }
        };
    };

    var selectProductDetailsLoyaltyLengthMetaAction = function selectProductDetailsLoyaltyLengthMetaAction(loyaltyLength, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            console.log("selectProductDetailsLoyaltyLengthMetaAction", loyaltyLength);
            dispatch({
                loyaltyLength: loyaltyLength,
                type: ACTIONS.SELECT_LOYALTY_LENGTH,
                processType: (0, _filters.getSelectedProcessTypeValue)(getState())
            });

            if ((0, _filters.getCallOffersWithMsisdn)(getState())) {
                checkMsisdnAndGetOffersProductList((0, _filters.getVerifiedMsisdn)(getState()))(dispatch, getState);
            } else if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
            } else {
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
            }
        };
    };

    var selectLoyaltyLengthB2BMetaAction = function selectLoyaltyLengthB2BMetaAction(loyaltyLength, index, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            console.log("selectLoyaltyLengthB2BMetaAction", loyaltyLength);
            dispatch({
                loyaltyLength: loyaltyLength,
                index: index,
                type: ACTIONS.SELECT_LOYALTY_LENGTH_B2B
            });
            dispatch({
                type: ACTIONS.SELECT_OFFER_B2B,
                propositionId: null,
                index: index
            });

            if (!(0, _offers.checkOffersForCurrentIndexedFiltersB2B)(index)(getState())) {
                getOffersActionMetaAction(dispatch, getState, index);
            }
        };
    };

    var selectProcessTypeMetaAction = function selectProcessTypeMetaAction(processType, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&   selectProcessTypeMetaAction   &&&&&&&&&&");
            console.log(processType);
            var actualProcessType = (0, _filters.getSelectedProcessTypeValue)(getState());

            if (actualProcessType == processType) {
                return;
            }

            dispatch({
                processType: processType,
                type: ACTIONS.SELECT_PROCESS_TYPE,
                availableLoyalties: (0, _filters.getFiltersData)(getState())
            });
            console.log((0, _offers.getOffersForCurrentFilters)(getState()));

            if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                console.log("if(!getOffersForCurrentFilters(getState()))  TRUE");
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
            } else {
                console.log("if(!getOffersForCurrentFilters(getState()))  else");
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

                if ((0, _selectors.isProductListPage)(getState()) || (0, _selectors4.isAccessoryListPage)(getState())) {
                    (0, _filter.reloadProductList)()(dispatch, getState);
                }

                getDocumentsAction(dispatch, getState);
            }

            if ((0, _selectors.getDeliveryAndPaymentComponentUid)(getState())) {
                (0, _app.fetchDeliveryAndPaymentHtml)()(dispatch, getState);
            }
        };
    };

    var selectProductListProcessTypeMetaAction = function selectProductListProcessTypeMetaAction(processType, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            dispatch({
                processType: processType,
                type: ACTIONS.SELECT_PROCESS_TYPE
            });

            if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
            } else {
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));

                dispatch((0, _filter.reloadProductList)());
            }
        };
    };

    var selectProductDetailsProcessTypeMetaAction = function selectProductDetailsProcessTypeMetaAction(processType, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            dispatch({
                processType: processType,
                type: ACTIONS.SELECT_PROCESS_TYPE
            });

            if (!(0, _offers.getOffersForCurrentFilters)(getState())) {
                getOffersActionMetaAction(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
            } else {
                dispatch(setCurrentProposition((0, _offers.getOffersForCurrentFilters)(getState())));

                _DataLayerUtils.default.pushSIMOImpressionEvent((0, _offers.getOffersDataInContext)(getState()).offers, (0, _filters.getSelectedFilters)(getState()), (0, _filters.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors3.getAssistModeStateData)(getState()));
            }
        };
    };

    var selectProcessTypeB2BMetaAction = function selectProcessTypeB2BMetaAction(processType, index, getOffersActionMetaAction) {
        return function(dispatch, getState) {
            dispatch({
                processType: processType,
                index: index,
                type: ACTIONS.SELECT_PROCESS_TYPE_B2B
            });
            dispatch({
                type: ACTIONS.SELECT_OFFER_B2B,
                propositionId: null,
                index: index
            });

            if (!(0, _offers.checkOffersForCurrentIndexedFiltersB2B)(index)(getState())) {
                getOffersActionMetaAction(dispatch, getState, index);
            }
        };
    };

    var trySetDefaultProposition = function trySetDefaultProposition() {
        return function(dispatch, getState) {
            var propositions = (0, _offers.getOffersDataInContext)(getState()).offers || [];
            var defProposition = (0, _selectors.getDefaultProposition)(getState());

            var urlServicePlan = _OnlineUtils.default.getParameterValueFromUrl("serviceplan");

            if (!(0, _metaData.getUrlOfferParametersUsed)(getState()) && urlServicePlan) {
                var propositionsForRatePlan = propositions.filter(function(offer) {
                    return offer.rateplanBaseProductId === urlServicePlan;
                });
                var propositionForRatePlan = pickProposition(propositionsForRatePlan) || propositionsForRatePlan[0];
                dispatch((0, _offers2.setSelectedOffer)(propositionForRatePlan && propositionForRatePlan.id));
            } else if (_OnlineUtils.default.loadFromSessionStorage("selectedPropositionId")) {
                dispatch(setCurrentProposition(propositions));
            } else if (defProposition) {
                if (propositions.find(function(offer) {
                        return offer.id === defProposition;
                    })) {
                    dispatch((0, _offers2.setSelectedOffer)(defProposition));
                } else {
                    console.error("Wrong default proposition: " + defProposition);
                    dispatch(setCurrentProposition(propositions));
                }
            }

            dispatch(urlOfferParametersUsed);
        };
    };

    var setProcessForMsisdn = function setProcessForMsisdn(msisdn, genericProcess, concreteProcess) {
        return function(dispatch, getState) {
            dispatch({
                msisdn: msisdn,
                genericProcess: genericProcess,
                concreteProcess: concreteProcess,
                type: ACTIONS.PROCESS_FOR_MSISDN
            });
        };
    };

    _exports.setProcessForMsisdn = setProcessForMsisdn;

    var pickProposition = function pickProposition(propositionsForRatePlan) {
        var selectedPropositionId = _OnlineUtils.default.getParameterValueFromUrl("selectedPropositionId") || _OnlineUtils.default.loadFromSessionStorage("selectedPropositionId");

        return propositionsForRatePlan.find(function(p) {
            return selectedPropositionId == p.id;
        });
    };

    var isMatchingFilters = function isMatchingFilters() {
        return function(dispatch, getState) {
            var filters = (0, _root.getFiltersState)(getState());
            return (0, _utils.filtersMatching)(filters);
        };
    };

    _exports.isMatchingFilters = isMatchingFilters;
});
//# sourceMappingURL=filters.js.map