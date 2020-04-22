define(["exports", "../actionTypes", "../remoteApi", "eshop/modules/configurator/actions/cart", "../listUtils", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/remoteApi", "eshop/modules/configurator/actionTypes", "eshop/modules/auth/actionTypes", "eshop/utils/GenesysWebEngagementUtils", "eshop/modules/simfree/actions/filter", "eshop/utils/OnlineUtils", "eshop/modules/checkout/actions/app", "../constants/OfferTypeEnum", "../../../flux/utils/OraEshopAPI", "../../checkout/actions/app", "../../configurator/constants", "../../magnum2/actions/magnum", "eshop/modules/configurator/selectors/offers", "eshop/utils/DataLayerUtils", "eshop/utils/PickupPosMapUtils", "../../configurator/selectors/filters", "../../auth/selectors/authorization", "../../checkout/selectors", "../../auth/actions/authorization", "../../configurator/actions/filters"], function(_exports, ACTIONS, _remoteApi, _cart, _listUtils, _filters, _filters2, _metaData, _offers, _selectors, _remoteApi2, ACTIONSCONF, ACTIONSAUTH, _GenesysWebEngagementUtils, _filter, _OnlineUtils, _app, _OfferTypeEnum, _OraEshopAPI, _app2, _constants, _magnum, _offers2, _DataLayerUtils, _PickupPosMapUtils, _filters3, _authorization, _selectors2, _authorization2, _filters4) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchDeviceByCode = fetchDeviceByCode;
    _exports.clearErrors = clearErrors;
    _exports.addToCart = addToCart;
    _exports.addMagnumToCart = addMagnumToCart;
    _exports.addToCartSuccess = addToCartSuccess;
    _exports.getProductList = getProductList;
    _exports.setSelectedBaseDeviceCode = setSelectedBaseDeviceCode;
    _exports.setSelectedVariant = setSelectedVariant;
    _exports.setSelectedVariantObject = setSelectedVariantObject;
    _exports.setSelectedDeviceTab = setSelectedDeviceTab;
    _exports.setSelectedVariantOnList = setSelectedVariantOnList;
    _exports.setSelectedVariantOnRecommended = setSelectedVariantOnRecommended;
    _exports.setChosenImageIndex = setChosenImageIndex;
    _exports.changeCategory = changeCategory;
    _exports.setRating = setRating;
    _exports.setLogin = setLogin;
    _exports.setMessage = setMessage;
    _exports.sendReview = sendReview;
    _exports.setDeliveryMethods = _exports.setCartInvoiceValue = _exports.setCashInvoiceLimit = _exports.setShowRatingErrorModal = _exports.setDeliveryAndPaymentComponentUid = _exports.fetchPickupLastPos = _exports.trySetDefaultOffer = _exports.matchPropositionIdToselectedRatePlan = _exports.getStaticSimFreeDocuments = _exports.getSimfreeDocuments = _exports.setSimfreeProcessData = _exports.selectConvergentOffer = _exports.setOfferType = _exports.fetchStorageCapacityForProduct = _exports.fetchDeliveryAndPaymentHtml = _exports.setOfferTypeAction = _exports.getParamsFromUrl = _exports.setOfferTypeCmsConf = _exports.fetchIfActivePickupFromShelf = _exports.setErrorCode = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _listUtils = babelHelpers.interopRequireDefault(_listUtils);
    _remoteApi2 = babelHelpers.interopRequireDefault(_remoteApi2);
    ACTIONSCONF = babelHelpers.interopRequireWildcard(ACTIONSCONF);
    ACTIONSAUTH = babelHelpers.interopRequireWildcard(ACTIONSAUTH);
    _GenesysWebEngagementUtils = babelHelpers.interopRequireDefault(_GenesysWebEngagementUtils);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _OraEshopAPI = babelHelpers.interopRequireDefault(_OraEshopAPI);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _PickupPosMapUtils = babelHelpers.interopRequireDefault(_PickupPosMapUtils);

    function fetchDeviceByCode(productCode) {
        return function(dispatch) {
            _remoteApi.default.getDeviceByCode(productCode).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_DEVICE_DATA_BY_CODE,
                    payload: response
                });
            });
        };
    }

    function clearErrors() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
                errors: []
            });
        };
    }

    var setErrorCode = function setErrorCode(errorCode) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
                errors: [errorCode]
            });
        };
    };

    _exports.setErrorCode = setErrorCode;

    function addToCart(productCode, bundleTemplateName, redirectUrl) {
        return function(dispatch, getState) {
            if ((0, _selectors.addToCartInProgress)(getState())) {
                return;
            }

            dispatch({
                type: ACTIONS.ADD_TO_CART_START
            });
            (0, _app.bodyLoaderShow)();
            var shouldReload = true;

            _remoteApi.default.addToCart(productCode, bundleTemplateName).then(function(responseData) {
                console.log(responseData);

                if (responseData.code === 200) {
                    _GenesysWebEngagementUtils.default.pushAddToCartEvent(productCode, bundleTemplateName, responseData.bundleNo);

                    dispatch(addToCartSuccess(responseData));
                    dispatch((0, _cart.redirectToCart)());
                } else {
                    shouldReload = false;
                    (0, _app.bodyLoaderHide)();

                    if (responseData.code !== 400) {
                        dispatch(setErrorCode("other"));
                    } else {
                        dispatch((0, _authorization2.showError)(responseData.message || ''));
                        dispatch(clearErrors());
                    }
                }
            });

            _OnlineUtils.default.removePwaSuflerContextFromSession();
        };
    }

    function addMagnumToCart(productCode) {
        return function(dispatch, getState) {
            var state = getState();

            if ((0, _selectors.addToCartInProgress)(state)) {
                return;
            }

            dispatch({
                type: ACTIONS.ADD_TO_CART_START
            });
            (0, _app.bodyLoaderShow)();
            var knaNumber = state.magnum.knaNumber;
            var voiceBundleMsisdn = state.magnum.selectedMobileTransaction.number;
            var dataBundleMsisdn = state.magnum.selectedFixBroadbandTransaction.number;
            var voipNumber = state.magnum.selectedFixVoipTransaction.designationNumber || state.magnum.selectedFixBroadbandTransaction.designationNumber;
            var selectedProposition = state.magnum.selectedProposition.code;
            var secondaryChoiceOffer = state.magnum.durationList.secondaryChoiceOffer;

            _OraEshopAPI.default.addMagnumToMultiCart(selectedProposition, productCode, voipNumber, knaNumber, voiceBundleMsisdn, dataBundleMsisdn, secondaryChoiceOffer).then(function() {
                dispatch({
                    type: ACTIONS.ADD_TO_CART_SUCCESS
                });
                dispatch((0, _app2.gotoCartSummary)());
                (0, _app.bodyLoaderHide)();
            }, function(error) {
                dispatch({
                    type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
                    errors: [error.responseJSON.message || "other"]
                });
                (0, _app.bodyLoaderHide)();
            });

            _OnlineUtils.default.removePwaSuflerContextFromSession();
        };
    }

    function addToCartSuccess(responseData) {
        OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData.offerCounter, 'header');
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.ADD_TO_CART,
                payload: responseData
            });
            dispatch({
                type: ACTIONS.ADD_TO_CART_SUCCESS
            });
            dispatch({
                type: ACTIONSAUTH.STAY_LOVE_RETENTION_MSISDN,
                msisdn: ""
            });
        };
    }

    function getProductList(page, showAll) {
        return function(dispatch) {
            _remoteApi.default.getProductList(page, showAll).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_ALL_PRODUCTS,
                    products: response
                });
            });
        };
    }

    function setSelectedBaseDeviceCode(deviceCode) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_BASE_DEVICE_CODE,
                deviceCode: deviceCode
            });
        };
    }

    function setSelectedVariant(variant, productPath, filterState) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_VARIANT,
                payload: variant,
                color: productPath,
                filterState: filterState
            });
            var selectedOffer = (0, _offers2.getSelectedOffer)(getState());

            if (selectedOffer) {
                _DataLayerUtils.default.pushProductDetailsView(selectedOffer, (0, _filters2.getSelectedOfferType)(getState()), (0, _filters2.getClientContext)(getState()), (0, _selectors.getSelectedVariant)(getState()), (0, _filters3.getMarketContext)(getState()), (0, _authorization.getSalesChannel)(getState()), (0, _selectors2.getAssistModeStateData)(getState()));
            }

            _PickupPosMapUtils.default.setSelectedDeviceVariant(variant.productId);
        };
    }

    function setSelectedVariantObject(variant) {
        console.log("^##^(*@^$@(*#^$(*#@^$(@^#$(@^#($&@^#(&$^@($^#", {
            variant: variant
        });
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_VARIANT_OBJECT,
                payload: variant
            });
        };
    }

    function setSelectedDeviceTab(deviceTab) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_DEVICE_TAB,
                deviceTab: deviceTab
            });
        };
    }

    function setSelectedVariantOnList(variant, productPath, productCode) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_VARIANT_ON_LIST,
                products: _listUtils.default.changeVariant(getState(), variant, productCode),
                color: productPath
            });
        };
    }

    function setSelectedVariantOnRecommended(variant, productPath, productCode, products) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_VARIANT_ON_RECOMMENDED,
                products: _listUtils.default.changeRecommendedVariant(getState(), variant, productCode, products),
                productId: productCode,
                color: productPath
            });
        };
    }

    function setChosenImageIndex(chosenImageIndex) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_CHOSEN_IMAGE_INDEX,
                payload: chosenImageIndex
            });
        };
    }

    function changeCategory(category) {
        if (category && category.code && !window.location.href.includes("/details")) {
            _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("selectedCategory", category.code);
        }

        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_CATEGORY,
                selectedCategory: category && category.code,
                selectedCategoryName: category && category.name
            });
        };
    }

    function setRating(rating) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_REVIEW_RATING,
                rating: rating
            });
        };
    }

    function setLogin(login) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_REVIEW_LOGIN,
                login: login
            });
        };
    }

    function setMessage(message) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_REVIEW_MESSAGE,
                message: message
            });
        };
    }

    function sendReview(productCode, rating, login, message) {
        return function(dispatch) {
            _remoteApi.default.sendReview(productCode, rating, login, message).then(function() {
                return dispatch({
                    type: ACTIONS.SEND_REVIEW,
                    payload: true
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SEND_REVIEW,
                    payload: false
                });
            });
        };
    }

    var getDocuments = function getDocuments(dispatch, getState) {
        console.log("getDocuments ^^^^^^^^^^^^^^^^", (0, _selectors.getDefaultProcess)(getState()));

        _remoteApi.default.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", (0, _selectors.getDefaultProcess)(getState())).then(function(response) {
            return dispatch({
                type: ACTIONSCONF.SELECT_DOCUMENTS,
                payload: response
            });
        }).catch(function(error) {
            return console.log("getDocumentsForDevice ", error);
        });
    };

    var trySetDefaultProcess = function trySetDefaultProcess(response) {
        return function(dispatch, getState) {
            console.log("trySetDefaultProcess +");

            if (!(0, _filters2.getUseDefaultProcess)(getState())) {
                return;
            }

            var defProcess = (0, _selectors.getDefaultProcess)(getState());
            console.log("State:", (0, _selectors.getSelectedOfferTypeCmsConf)(getState()));
            console.log("defProces", defProcess); //console.log("!getUrlParametersUsed(getState()) && (OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage('processType'))",!getUrlParametersUsed(getState()) && (OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage("processType"));

            console.log("trySetDefaultProcess -");

            if (!(0, _metaData.getUrlParametersUsed)(getState()) && (_OnlineUtils.default.getParameterValueFromUrl('processType') || _OnlineUtils.default.loadFromSessionStorage("processType"))) {
                var process = _OnlineUtils.default.getParameterValueFromUrl('processType') || _OnlineUtils.default.loadFromSessionStorage("processType");

                var availableProcesses = response && response.map(function(process) {
                    return process.value;
                }) || [];

                if (availableProcesses.includes(process)) {
                    dispatch({
                        type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                        processType: process,
                        useDefaultLoyalty: (0, _filters2.getUseDefaultLoyalty)(getState())
                    });
                } else {
                    dispatch({
                        type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                        processType: defProcess
                    });
                }
            } else if (defProcess) {
                if (response && response.find(function(p) {
                        return p.value === defProcess;
                    })) {
                    dispatch({
                        type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                        processType: defProcess
                    });
                } else {
                    console.error('Wrong default process: ' + defProcess);
                }
            }

            _OnlineUtils.default.saveInStorageOnCanonicalLinks("processType", (0, _filters2.getSelectedProcessTypeValue)(getState()));
        };
    };

    var fetchInitialOOVFiltersAndPreset = function fetchInitialOOVFiltersAndPreset() {
        return function(dispatch, getState) {
            var deviceCode = null;

            if ((0, _selectors.isProductDetailsPage)(getState())) {
                deviceCode = (0, _selectors.getSelectedBaseDeviceCode)(getState());
            }

            console.log("fetchInitialOOVFiltersAndPreset1", getState());
            var availableProductsKey = (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState());
            dispatch((0, _offers.fetchContractRole)(availableProductsKey));
            dispatch((0, _offers.fetchFirstOffer)(availableProductsKey));
            var cachedOfferFilters = (0, _filters3.getOfferTypeFiltersCached)(getState());
            var selectedOfferType = (0, _filters2.getSelectedOfferType)(getState());
            var offerFiltersCacheIndex = cachedOfferFilters.findIndex(function(offerFiltersElement) {
                return offerFiltersElement.offerType === selectedOfferType;
            });
            console.log("fetchInitialOOVFiltersAndPreset2 offerFiltersCacheIndex=", offerFiltersCacheIndex);

            if (offerFiltersCacheIndex !== -1) {
                dispatch(initialOfferFiltersFetched(cachedOfferFilters[offerFiltersCacheIndex].offerFilters));
            } else {
                dispatch({
                    type: ACTIONSCONF.FETCH_OFFER_FILTERS_START
                });

                _remoteApi2.default.getOfferFilters(availableProductsKey, deviceCode).then(function(response) {
                    return dispatch(initialOfferFiltersFetched(response));
                });
            }
        };
    };

    var initialOfferFiltersFetched = function initialOfferFiltersFetched(response) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONSCONF.FETCH_OFFER_FILTERS,
                payload: response,
                urlParametersUsed: (0, _metaData.getUrlParametersUsed)(getState()),
                useDefaultProcess: (0, _filters2.getUseDefaultProcess)(getState()),
                useDefaultLoyalty: (0, _filters2.getUseDefaultLoyalty)(getState()),
                useDefaultOffer: (0, _filters2.getUseDefaultOffer)(getState())
            });
            console.log("fetchInitialOOVFiltersAndPreset2", getState());
            dispatch(trySetDefaultProcess(response));
            dispatch(_filters.urlParametersUsed);

            _OnlineUtils.default.removeFromSessionStorage("dontUseDefaults");

            console.log("fetchInitialOOVFiltersAndPreset3", getState());
            if ((0, _selectors.isProductDetailsPage)(getState()) || (0, _selectors.isProductListPage)(getState()) || (0, _selectors.isAccessoryListPage)(getState())) getDocuments(dispatch, getState);

            if ((0, _filters2.getCallOffersWithMsisdn)(getState())) {
                (0, _filters.checkMsisdnAndGetOffersProductList)((0, _filters2.getVerifiedMsisdn)(getState()))(dispatch, getState);

                if ((0, _selectors.isProductDetailsPage)(getState())) {
                    (0, _filters.getOffersAction)(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
                }
            } else {
                if ((0, _selectors.isProductDetailsPage)(getState())) {
                    (0, _filters4.getProductDetailsOffersWithoutOfferSelectorAction)(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()), true);
                } else if ((0, _selectors.isProductListPage)(getState())) {
                    (0, _filters.getProductListOffersAction)(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()), true);
                } else {
                    (0, _filters.getOffersAction)(dispatch, getState, (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState()));
                }
            }
        };
    };

    var fetchIfActivePickupFromShelf = function fetchIfActivePickupFromShelf(dispatch, getState) {
        _remoteApi.default.checkIfActivePickupFromShelf((0, _filters2.getSelectedOfferType)(getState()), (0, _filters2.getSelectedProcessTypeValue)(getState()), getMarketFromOfferTypeConf((0, _selectors.getSelectedOfferTypeCmsConf)(getState())), (0, _selectors.getSelectedVariant)(getState())).then(function(response) {
            return dispatch({
                type: ACTIONS.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF,
                data: response
            });
        }).catch(function(error) {
            return console.error("Error checking pickup_from_shelf is active: ", error);
        });
    };

    _exports.fetchIfActivePickupFromShelf = fetchIfActivePickupFromShelf;

    var setOfferTypeCmsConf = function setOfferTypeCmsConf(cmsConf, validOfferTypes) {
        console.log("will setOfferTypeCmsConf ", cmsConf);
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.REGISTER_OFFER_TYPES_CMS_CONF,
                cmsConf: cmsConf,
                validOfferTypes: validOfferTypes
            });
            console.log("setOfferTypeCmsConf");
            dispatch((0, _filters.setMarketContext)(getMarketFromOfferTypeConf((0, _selectors.getSelectedOfferTypeCmsConf)(getState()))));

            if ((0, _filters2.getSelectedOfferType)(getState()) !== _OfferTypeEnum.default.SIMFREE && (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState())) {
                dispatch(fetchInitialOOVFiltersAndPreset());
            } else if ((0, _filters2.getSelectedOfferType)(getState()) === _OfferTypeEnum.default.CONVERGENT) {
                fetchOrangeLove(getState, dispatch);
                reloadOrangeLove(getState, dispatch);
            } else if ((0, _selectors.getDefaultProcess)(getState())) {
                // sog configuration
                dispatch({
                    type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                    processType: (0, _selectors.getDefaultProcess)(getState())
                });
                dispatch({
                    type: ACTIONSCONF.SELECT_OFFER,
                    propositionId: (0, _selectors.getDefaultProposition)(getState())
                });
                getDocuments(dispatch, getState);
                dispatch(_filters.urlParametersUsed);
            } else {
                dispatch((0, _filters.clearProcessType)());
                dispatch((0, _filters.clearLoyaltyLength)());
                dispatch((0, _offers.clearPropositionId)());
            }

            console.log("getFirstAvailableProductKey to fetch first offer", (0, _selectors.getFirstAvailableProductsKey)(getState()));

            if (!(0, _selectors.getCurrentSelectedAvailableProductsKey)(getState())) {
                var availableProductsKey = (0, _selectors.getCurrentSelectedAvailableProductsKeyByUrlParameter)(getState()) || (0, _selectors.getFirstAvailableProductsKey)(getState());
                dispatch((0, _offers.fetchContractRole)(availableProductsKey));
                dispatch((0, _offers.fetchFirstOffer)(availableProductsKey));
            }

            fetchIfActivePickupFromShelf(dispatch, getState);

            _OnlineUtils.default.removeFromSessionStorage("dontUseDefaults");
        };
    };

    _exports.setOfferTypeCmsConf = setOfferTypeCmsConf;

    var getParamsFromUrl = function getParamsFromUrl() {
        return function(dispatch) {
            dispatch(_filters.urlParametersUsed);
        };
    };

    _exports.getParamsFromUrl = getParamsFromUrl;

    function getMarketFromOfferTypeConf(offerTypeCmsConf) {
        var market = offerTypeCmsConf && offerTypeCmsConf.market || "B2C";
        return market.replace("_SOHO", "");
    }

    var setOfferTypeAction = function setOfferTypeAction(offerType) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SELECT_OFFER_TYPE,
                offerType: offerType
            });

            _OnlineUtils.default.processOneTimeCostPricesUrlParameter((0, _selectors.getSelectedOneTimePricesList)(getState()));
        };
    };

    _exports.setOfferTypeAction = setOfferTypeAction;

    var fetchDeliveryAndPaymentHtml = function fetchDeliveryAndPaymentHtml(uid) {
        return function(dispatch, getState) {
            _remoteApi.default.getOplHtmlContentForOfferAndProcess(_OnlineUtils.default.getParameterValueFromUrl('offerType') || (0, _filters2.getSelectedOfferType)(getState()), _OnlineUtils.default.getParameterValueFromUrl('processType') || (0, _filters2.getSelectedProcessTypeValue)(getState()), uid != null ? uid : (0, _selectors.getDeliveryAndPaymentComponentUid)(getState())).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_DELIVERY_AND_PAYMENT_HTML,
                    data: response
                });
            }).catch(function(error) {
                return console.error("Error getting html for component: ", error);
            });
        };
    };

    _exports.fetchDeliveryAndPaymentHtml = fetchDeliveryAndPaymentHtml;

    var fetchStorageCapacityForProduct = function fetchStorageCapacityForProduct() {
        return function(dispatch, getState) {
            _remoteApi.default.getStorageCapacityForProduct((0, _selectors.getSelectedBaseDeviceCode)(getState())).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_PRODUCT_STORAGE_CAPACITY,
                    data: response
                });
            }).catch(function(error) {
                return console.log("Product without references", error);
            });
        };
    };

    _exports.fetchStorageCapacityForProduct = fetchStorageCapacityForProduct;

    var setOfferType = function setOfferType(offerType) {
        return function(dispatch, getState) {
            console.log("Set offerType", offerType);
            dispatch(setOfferTypeAction(offerType));

            if (offerType !== _OfferTypeEnum.default.SIMFREE && (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState())) {
                dispatch(fetchInitialOOVFiltersAndPreset());
            } else if (offerType === _OfferTypeEnum.default.CONVERGENT) {
                fetchOrangeLove(getState, dispatch);
                reloadOrangeLove(getState, dispatch);
            } else if ((0, _selectors.getDefaultProcess)(getState())) {
                // sog configuration
                dispatch({
                    type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                    processType: (0, _selectors.getDefaultProcess)(getState())
                });
                dispatch({
                    type: ACTIONSCONF.SELECT_OFFER,
                    propositionId: (0, _selectors.getDefaultProposition)(getState())
                });

                if ((0, _selectors.isProductListPage)(getState())) {
                    (0, _filter.reloadProductList)()(dispatch, getState);
                }

                getDocuments(dispatch, getState);
            } else {
                if ((0, _selectors.isProductListPage)(getState())) {
                    (0, _filter.reloadProductList)()(dispatch, getState);
                }
            }

            if ((0, _selectors.getDeliveryAndPaymentComponentUid)(getState())) {
                fetchDeliveryAndPaymentHtml()(dispatch, getState);
            }
        };
    };

    _exports.setOfferType = setOfferType;

    var selectConvergentOffer = function selectConvergentOffer(propositionId) {
        return function(dispatch) {
            dispatch({
                type: ACTIONSCONF.SELECT_OFFER,
                propositionId: propositionId
            });
        };
    };

    _exports.selectConvergentOffer = selectConvergentOffer;

    function fetchOrangeLove(getState, dispatch) {
        var magnumStore = JSON.parse(_OnlineUtils.default.loadFromSessionStorage(_constants.constants.magnumStore));

        if (magnumStore && !getState().magnum.selectedProposition) {
            dispatch((0, _magnum.setMagnumStore)(magnumStore));

            if ((0, _selectors.isProductDetailsPage)(getState())) {
                (0, _filters.getProductDetailsConvergentOffersAction)(dispatch, getState);
                selectConvergentOffer(magnumStore.selectedProposition && magnumStore.selectedProposition.mobileVoiceBundleTemplateCode)(dispatch);
            }
        }
    }

    function reloadOrangeLove(getState, dispatch) {
        if (getState().magnum.durationList.durations.length === 0) {
            dispatch({
                type: ACTIONS.GET_ALL_PRODUCTS,
                products: []
            });
            dispatch({
                type: ACTIONS.GET_PRODUCTS_TREES,
                payload: null
            });
        }

        (0, _filter.reloadProductList)()(dispatch, getState);
    }

    var setSimfreeProcessData = function setSimfreeProcessData() {
        return function(dispatch) {
            // sog configuration
            dispatch(setOfferTypeAction("SIMFREE"));
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: "SALE_OF_GOODS"
            });
            dispatch({
                type: ACTIONSCONF.SELECT_OFFER,
                propositionId: "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS"
            });
        };
    };

    _exports.setSimfreeProcessData = setSimfreeProcessData;

    var getSimfreeDocuments = function getSimfreeDocuments() {
        console.log("getSimfreeDocuments ^^^^^^^^^^^^^^^^^^");
        return function(dispatch, getState) {
            return _remoteApi.default.getDocumentsForDevice((0, _selectors.getSelectedBaseDeviceCode)(getState()), "SALE_OF_GOODS").then(function(response) {
                return dispatch({
                    type: ACTIONSCONF.SELECT_DOCUMENTS,
                    payload: response
                });
            });
        };
    };

    _exports.getSimfreeDocuments = getSimfreeDocuments;

    var getStaticSimFreeDocuments = function getStaticSimFreeDocuments() {
        return function(dispatch, getState) {
            _remoteApi.default.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", "SALE_OF_GOODS").then(function(response) {
                return dispatch({
                    type: ACTIONSCONF.SELECT_DOCUMENTS,
                    payload: response
                });
            });
        };
    };

    _exports.getStaticSimFreeDocuments = getStaticSimFreeDocuments;

    var matchPropositionIdToselectedRatePlan = function matchPropositionIdToselectedRatePlan() {
        return function(dispatch, getState) {
            console.log("matchPropositionIdToselectedRatePlan");
            dispatch({
                type: ACTIONSCONF.SELECT_PROPOSITION_ID,
                propositionId: (0, _offers2.getPropositionIdByRatePlanId)((0, _offers2.getSelectedBaseRatePlanId)(getState()), (0, _offers2.getOffersForCurrentFilters)(getState()))
            });
        };
    };

    _exports.matchPropositionIdToselectedRatePlan = matchPropositionIdToselectedRatePlan;

    var trySetDefaultOffer = function trySetDefaultOffer(response) {
        return function(dispatch, getState) {
            console.warn("trySetDefaultOffer +", (0, _filters2.getUseDefaultOffer)(getState()));

            if (!(0, _filters2.getUseDefaultOffer)(getState()) && !_OnlineUtils.default.getParameterValueFromUrl("serviceplan")) {
                dispatch(matchPropositionIdToselectedRatePlan());
                return;
            }

            var defServicePlan = (0, _selectors.getDefaultServicePlan)(getState());
            console.warn("State:", (0, _selectors.getSelectedOfferTypeCmsConf)(getState()));
            console.warn("defServicePlan", defServicePlan);

            var urlOrStoragePlan = _OnlineUtils.default.getValueFromUrlOrStorage("serviceplan", "serviceplan");

            var availableOffers = (0, _offers2.getOffersForCurrentFilters)(getState());
            console.log("availableOffers", availableOffers);

            if (!!availableOffers && urlOrStoragePlan) {
                console.log(availableOffers && !availableOffers.filter(function(offer) {
                    return offer.rateplanBaseProductId == urlOrStoragePlan;
                }));

                if (!availableOffers.find(function(offer) {
                        return offer.rateplanBaseProductId == urlOrStoragePlan;
                    })) {
                    console.log("urlPlan does not match available offers -> use default");
                    urlOrStoragePlan = "";
                }
            }

            console.log("FINAL urlOrStoragePlan", urlOrStoragePlan); //ifi urlPlan match available offers

            if (!!urlOrStoragePlan) {
                defServicePlan = urlOrStoragePlan;

                var selectedPropositionId = _OnlineUtils.default.getValueFromUrlOrStorage("selectedPropositionId", "selectedPropositionId");

                console.log("selectedPropositionId", selectedPropositionId);
                var selectedPropositionIds = (0, _offers2.getPropositionIdsByRatePlanId)(defServicePlan, (0, _offers2.getOffersForCurrentFilters)(getState()));
                console.log("selectedPropositionIds", selectedPropositionIds);

                if (!selectedPropositionIds || !selectedPropositionIds.find(function(id) {
                        return id == selectedPropositionId;
                    })) {
                    console.log("siema1");
                    selectedPropositionId = (0, _offers2.getPropositionIdByRatePlanId)(defServicePlan, (0, _offers2.getOffersForCurrentFilters)(getState()));
                    console.log("siema2");
                }

                console.warn("first if defOffer", defServicePlan);
                dispatch({
                    type: ACTIONSCONF.SELECT_OFFER,
                    rateplanBaseProductId: defServicePlan,
                    propositionId: selectedPropositionId
                });
            } else if (defServicePlan) {
                console.warn("else if defOffer", defServicePlan);
                console.log({
                    type: ACTIONSCONF.SELECT_OFFER,
                    rateplanBaseProductId: defServicePlan,
                    propositionId: (0, _offers2.getPropositionIdByRatePlanId)(defServicePlan, (0, _offers2.getOffersForCurrentFilters)(getState()))
                });
                console.log("getOffersForCurrentFilters", (0, _offers2.getOffersForCurrentFilters)(getState()));
                var availableBaseRatePlanIds = (0, _offers2.getAvailableBaseRateplanIds)(getState());

                if (!availableBaseRatePlanIds.includes(defServicePlan)) {
                    defServicePlan = availableBaseRatePlanIds[0];
                }

                dispatch({
                    type: ACTIONSCONF.SELECT_OFFER,
                    rateplanBaseProductId: defServicePlan,
                    propositionId: (0, _offers2.getPropositionIdByRatePlanId)(defServicePlan, (0, _offers2.getOffersForCurrentFilters)(getState()))
                });
            }

            _OnlineUtils.default.saveInStorageOnCanonicalLinks("processType", (0, _filters2.getSelectedProcessTypeValue)(getState()));

            console.warn("trySetDefaultOffer -");
        };
    };

    _exports.trySetDefaultOffer = trySetDefaultOffer;

    var fetchPickupLastPos = function fetchPickupLastPos(productCode) {
        return function(dispatch) {
            _remoteApi.default.getLastSelectedPos(productCode).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_LAST_PICKUP_POS,
                    data: response
                });
            }).catch(function(error) {
                return console.error("LastSelectedPosError: ", error);
            });
        };
    };

    _exports.fetchPickupLastPos = fetchPickupLastPos;

    var setDeliveryAndPaymentComponentUid = function setDeliveryAndPaymentComponentUid(uid) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID,
                data: uid
            });
        };
    };

    _exports.setDeliveryAndPaymentComponentUid = setDeliveryAndPaymentComponentUid;

    var setShowRatingErrorModal = function setShowRatingErrorModal(showRatingErrorModal) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SHOW_RATING_MESSAGE,
                value: showRatingErrorModal
            });
        };
    };

    _exports.setShowRatingErrorModal = setShowRatingErrorModal;

    var setCashInvoiceLimit = function setCashInvoiceLimit(limit) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_CASH_INVOICE_LIMIT,
                data: limit
            });
        };
    };

    _exports.setCashInvoiceLimit = setCashInvoiceLimit;

    var setCartInvoiceValue = function setCartInvoiceValue(value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_CART_INVOICE_VALUE,
                data: value
            });
        };
    };

    _exports.setCartInvoiceValue = setCartInvoiceValue;

    var setDeliveryMethods = function setDeliveryMethods(deliveryMethods) {
        return {
            type: ACTIONS.SET_DELIVERY_METHODS,
            deliveryMethods: deliveryMethods
        };
    };

    _exports.setDeliveryMethods = setDeliveryMethods;
});
//# sourceMappingURL=app.js.map