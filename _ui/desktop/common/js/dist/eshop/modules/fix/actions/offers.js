define(["exports", "../actionTypes", "../../magnum2/actionTypes", "../remoteApi", "eshop/modules/cart/actionTypes", "./kna", "eshop/modules/checkout/actionTypes", "./errors", "../selectors/root", "./wwt", "./voip", "eshop/modules/fix/selectors", "eshop/utils/OnlineUtils"], function(_exports, ACTIONS, MAGNUM_ACTIONS, _remoteApi, CARTACTIONS, _kna, magnumActions, _errors, _root, _wwt, _voip, _selectors, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.showTVModal = showTVModal;
    _exports.closeTvModal = closeTvModal;
    _exports.isAddressNotEmpty = isAddressNotEmpty;
    _exports.saveSelectedOfferId = saveSelectedOfferId;
    _exports.saveSelectedLoyalty = saveSelectedLoyalty;
    _exports.updateIsLandingPage = _exports.showSecondaryChoiceOffer = _exports.showBaseOffer = _exports.removeCart = _exports.addToCart = _exports.chooseOffer = _exports.showCartNotEmptyModal = _exports.refreshOffertsByLoyalty = _exports.optionallyRedirectAfterWWT = _exports.checkAvailablePromotions = _exports.fetchOffersAndCheckAvailablePromotions = _exports.fetchTvChannels = _exports.fetchOffers = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    MAGNUM_ACTIONS = babelHelpers.interopRequireWildcard(MAGNUM_ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    CARTACTIONS = babelHelpers.interopRequireWildcard(CARTACTIONS);
    magnumActions = babelHelpers.interopRequireWildcard(magnumActions);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var fetchOffers = function fetchOffers(address) {
        var customerServicesHashCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var forceAfterWwt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var kna = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS_START
            });
            dispatch({
                type: ACTIONS.HIDE_PAYMENT_LINK_COMPONENT
            });
            var addressObject = convertAddressToCommonFormat(address, kna);

            if (addressObject) {
                dispatch({
                    type: magnumActions.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success,
                    payload: addressObject
                });
            } else {
                addressObject = {};
            }

            dispatch((0, _wwt.saveWWTAddress)({
                address: addressObject,
                forceAfterWwt: forceAfterWwt,
                designationNumber: customerServicesHashCode
            }));
            dispatch(optionallyRedirectAfterWWT());
            var selectedLoyalty = (0, _root.getSelectedLoyalty)(getState());

            _remoteApi.default.getOffers(!!addressObject.fromSession ? null : addressObject, selectedLoyalty, customerServicesHashCode, reset).then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response
                });

                _remoteApi.default.getDocuments(!!response.offers ? response.offers.map(function(offer) {
                    return offer.broadband.bundleId;
                }) : []).then(function(responseDocuments) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS,
                        payload: responseDocuments
                    });
                }, function(error) {
                    return console.error("getDocuments", error);
                });

                if (!response || !response.offers) {
                    dispatch((0, _errors.openErrorModal)(response.errorMessage));
                    return;
                }

                if (response.process === "ACTIVATION" && response.offers.length > 0 && !response.technologies.includes("FTTH") && isAddressNotEmpty(addressObject)) {
                    if ((0, _root.getKnaModalRegistered)(getState())) {
                        dispatch((0, _kna.showKnaModal)(false));
                    } else {
                        dispatch((0, _kna.showPaymentLink)());
                    }
                }

                if (reset && !isAddressNotEmpty(addressObject)) {
                    dispatch((0, _wwt.doShowWWTModal)());
                }
            }, function(error) {
                return console.error('fetchOffers getOffers error', error);
            });
        };
    };

    _exports.fetchOffers = fetchOffers;

    var fetchTvChannels = function fetchTvChannels(propositionId) {
        return function(dispatch) {
            _remoteApi.default.getTvPackages(propositionId).then(function(response) {
                var configurables = [{
                    tvPackages: response
                }];
                dispatch({
                    type: CARTACTIONS.FETCH_FIX_CONFIGURABLES,
                    payload: configurables
                });
                console.log(response);
            });
        };
    };

    _exports.fetchTvChannels = fetchTvChannels;

    var convertAddressToCommonFormat = function convertAddressToCommonFormat(address, kna) {
        if (address) {
            if (!!address.zip) {
                return {
                    preZipCode: address.zip && address.zip.substr(0, 2),
                    postalCode: address.zip && address.zip.substr(2),
                    town: address.cityName,
                    line1: address.streetName,
                    line2: address.streetNumber,
                    appartmentNo: address.apartmentNumber,
                    streetId: address.streetId,
                    cityId: address.cityId
                };
            } else if (kna || !!address.preZipCode) {
                return address;
            }
        }
    };

    var fetchOffersAndCheckAvailablePromotions = function fetchOffersAndCheckAvailablePromotions(address, forceAfterWwt) {
        return function(dispatch, getState) {
            var www = (0, _root.isWWW)(getState());
            dispatch(checkAvailablePromotions(address)).then(function(response) {
                if (!address.fromSession && !www && !!response && !!response.availableApartments && response.availableApartments.length > 0) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDITIONAL_DATA,
                        payload: response
                    });
                } else {
                    dispatch(fetchOffers(address, null, false, forceAfterWwt));
                }
            });
        };
    };

    _exports.fetchOffersAndCheckAvailablePromotions = fetchOffersAndCheckAvailablePromotions;

    var checkAvailablePromotions = function checkAvailablePromotions(address) {
        return function(dispatch, getState) {
            return new Promise(function(resolve, reject) {
                dispatch({
                    type: ACTIONS.PROMOTION_IS_AVAILABLE_START
                });
                var addressObject = convertAddressToCommonFormat(address, false);

                if (addressObject && addressObject.preZipCode && addressObject.postalCode && addressObject.cityId && addressObject.line2) {
                    var request = {
                        address: addressObject,
                        context: (0, _root.getPageContext)(getState())
                    };

                    _remoteApi.default.checkWwtAdditionalData(request).then(function(wwtData) {
                        if (wwtData) {
                            var redirectionData = {
                                componentUid: "WWT_NewLove",
                                boxID: "love-offer",
                                formType: "DETAILED",
                                leadAddressForm: decodeURI($.param(wwtData.address)).replace("+", " "),
                                address: wwtData.base64Address
                            };
                            localStorage.setItem("OPL-prompterWWT_address", JSON.stringify(redirectionData));
                        }

                        if (wwtData && wwtData.redirectAvailable && wwtData.redirectAvailable === true && window.location.pathname !== wwtData.redirectUrl) {
                            window.location = wwtData.redirectUrl;
                            reject();
                        } else {
                            dispatch({
                                type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
                            });
                            resolve(wwtData);
                        }
                    }, function() {
                        dispatch({
                            type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
                        });
                        resolve();
                    });
                } else {
                    dispatch({
                        type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
                    });
                    resolve();
                }
            });
        };
    };

    _exports.checkAvailablePromotions = checkAvailablePromotions;

    var optionallyRedirectAfterWWT = function optionallyRedirectAfterWWT() {
        return function(dispatch, getState) {
            var redirectUrlAfterWWT = (0, _selectors.getRedirectUrlAfterWWT)(getState());

            if ((0, _root.isPreLandingPage)(getState()) && redirectUrlAfterWWT && window.location.pathname != redirectUrlAfterWWT) {
                window.location = redirectUrlAfterWWT;
            }
        };
    };

    _exports.optionallyRedirectAfterWWT = optionallyRedirectAfterWWT;

    var refreshOffertsByLoyalty = function refreshOffertsByLoyalty(loyalty) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS_START
            });

            _remoteApi.default.getOffers({}, loyalty).then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response
                });
                dispatch({
                    type: ACTIONS.SELECT_LOYALTY,
                    payload: loyalty
                });

                _remoteApi.default.getDocuments(response.offers.map(function(offer) {
                    return offer.broadband.bundleId;
                })).then(function(responseDocuments) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS,
                        payload: responseDocuments
                    });
                });
            });
        };
    };

    _exports.refreshOffertsByLoyalty = refreshOffertsByLoyalty;

    function showTVModal(id) {
        return {
            type: ACTIONS.SHOW_MODAL_ACTION,
            payload: {
                modalId: id
            }
        };
    }

    function closeTvModal(id) {
        return {
            type: ACTIONS.CLOSE_TV_MODAL,
            payload: {
                modalId: id
            }
        };
    }

    var showCartNotEmptyModal = function showCartNotEmptyModal(show) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_CART_NOT_EMPTY_MODAL,
                payload: show
            });
        };
    };

    _exports.showCartNotEmptyModal = showCartNotEmptyModal;

    var chooseOffer = function chooseOffer(_ref) {
        var offerId = _ref.offerId,
            secondaryChoiceOffer = _ref.secondaryChoiceOffer;
        return function(dispatch, getState) {
            var enableVoipSelection = (0, _root.voipModalComponentIsMounted)(getState());
            dispatch(saveSelectedOfferId(offerId)); //due to NOR-156774

            _remoteApi.default.removeFromCart().then(function(res) {
                if (enableVoipSelection) {
                    if (res && res.description == null) {
                        //cart was not empty
                        dispatch((0, _voip.fetchVoipNumbers)((0, _root.getWwtCityId)(getState())));
                    }

                    dispatch((0, _voip.voipSelection)(true));
                } else {
                    dispatch(addToCart(offerId, secondaryChoiceOffer));
                }
            });
        };
    };

    _exports.chooseOffer = chooseOffer;

    var addToCart = function addToCart(id, secondaryChoiceOffer) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CART_MOD_LOADING,
                payload: true
            });

            _remoteApi.default.addOfferToCart(id, secondaryChoiceOffer).then(function(response) {
                if (response.status) {
                    window.location.replace("/koszyk/multi");
                }
            }).catch(function(err) {
                dispatch({
                    type: ACTIONS.CART_MOD_LOADING,
                    payload: false
                });
                dispatch({
                    type: ACTIONS.SAVE_BUNDLE_NOS,
                    data: err.responseJSON.bundleNos
                });

                if (err && err.responseJSON && err.responseJSON.errorCode) {
                    var modalConfig = {
                        showIcon: 'HtmlErrorMessage' !== err.responseJSON.errorCode
                    };
                    dispatch((0, _errors.openErrorModal)(err.responseJSON.errorCode, err.responseJSON.description, modalConfig));
                } else {
                    setTimeout(function() {
                        return dispatch(showCartNotEmptyModal(true));
                    }, 400);
                }
            });

            _OnlineUtils.default.removePwaSuflerContextFromSession();
        };
    };

    _exports.addToCart = addToCart;

    var removeCart = function removeCart() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CART_MOD_LOADING,
                payload: true
            });
            dispatch(showCartNotEmptyModal(false));

            _remoteApi.default.removeFromCart().then(function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.header.updateRightMenuBadge, {
                    id: 'basketBadgeService',
                    value: 0
                });
            }).then(function() {
                dispatch({
                    type: ACTIONS.CART_MOD_LOADING,
                    payload: false
                });
            }).then(function() {
                var enableVoipSelection = (0, _root.voipModalComponentIsMounted)(getState());

                if (enableVoipSelection) {
                    dispatch((0, _voip.fetchVoipNumbers)((0, _root.getWwtCityId)(getState())));
                }
            });
        };
    };

    _exports.removeCart = removeCart;

    var showBaseOffer = function showBaseOffer() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_BASE_OFFER
            }); //Workaround for opl-carousel

            dispatch({
                type: ACTIONS.FETCH_OFFERS_START
            });
            setTimeout(function() {
                return dispatch({
                    type: ACTIONS.FETCH_OFFERS_STOP
                });
            }, 100);
        };
    };

    _exports.showBaseOffer = showBaseOffer;

    var showSecondaryChoiceOffer = function showSecondaryChoiceOffer() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_SECONDARY_CHOICE_OFFER
            }); //Workaround for opl-carousel

            dispatch({
                type: ACTIONS.FETCH_OFFERS_START
            });
            setTimeout(function() {
                return dispatch({
                    type: ACTIONS.FETCH_OFFERS_STOP
                });
            }, 100);
        };
    };

    _exports.showSecondaryChoiceOffer = showSecondaryChoiceOffer;

    function isAddressNotEmpty(addressObject) {
        return !isEmptyObject(addressObject) && addressObject.preZipCode !== "" && addressObject.town !== "";
    }

    function isEmptyObject(obj) {
        return !obj || !Object.keys(obj).length;
    }

    function saveSelectedOfferId(id) {
        return {
            type: ACTIONS.SAVE_SELECTED_OFFER_ID,
            payload: id
        };
    }

    function saveSelectedLoyalty(loyalty) {
        return {
            type: ACTIONS.SELECT_LOYALTY,
            payload: loyalty
        };
    }

    var updateIsLandingPage = function updateIsLandingPage(isLP) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.IS_LP,
                payload: isLP
            });
        };
    };

    _exports.updateIsLandingPage = updateIsLandingPage;
});
//# sourceMappingURL=offers.js.map