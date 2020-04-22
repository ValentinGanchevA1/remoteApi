define(["exports", "../actionTypes", "../remoteApi", "../selectors", "eshop/modules/cart/selectors", "./cart"], function(_exports, ACTIONS, _remoteApi, _selectors, _selectors2, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchMsisdns = fetchMsisdns;
    _exports.fetchSimCards = fetchSimCards;
    _exports.changeSimCard = _exports.changeMsisdn = _exports.updateResources = _exports.resourceModalClose = _exports.lowerInstallmentsModaClose = _exports.lowerInstallmentsModalOpen = _exports.resourceModalOpen = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    var resourceModalOpen = function resourceModalOpen(bundleNo) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.RESOURCE_MODAL_OPEN,
                bundleNo: bundleNo,
                entry: (0, _selectors.allCartEntries)(getState()).find(function(entry) {
                    return entry.bundleNo === bundleNo;
                })
            });
        };
    };

    _exports.resourceModalOpen = resourceModalOpen;

    var lowerInstallmentsModalOpen = function lowerInstallmentsModalOpen(bundleNo) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN,
                bundleNo: bundleNo
            });
        };
    };

    _exports.lowerInstallmentsModalOpen = lowerInstallmentsModalOpen;

    var lowerInstallmentsModaClose = function lowerInstallmentsModaClose(bundleNo) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE,
                bundleNo: bundleNo
            });
        };
    };

    _exports.lowerInstallmentsModaClose = lowerInstallmentsModaClose;

    var resourceModalClose = function resourceModalClose(bundleNo) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.RESOURCE_MODAL_CLOSE,
                bundleNo: bundleNo
            });
        };
    };

    _exports.resourceModalClose = resourceModalClose;

    var changeMsisdnFailed = function changeMsisdnFailed(bundleNo, response) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_MSISDN_FAILED,
                payload: response
            });
            fetchMsisdns()(dispatch);
        };
    };

    var changeMsisdnSuccess = function changeMsisdnSuccess(bundleNo, response) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_MSISDN_SUCCESS,
                bundleNo: bundleNo,
                payload: response
            });
            (0, _cart.reloadCartState)()(dispatch, getState);
        };
    };
    /*
     * Checks if HTTP200 wraps error message
     */


    var changeMsisdn200Handler = function changeMsisdn200Handler(dispatch, getState, bundleNo, responseData) {
        if (responseData && responseData.message && typeof responseData.message === "string") {
            dispatch(changeMsisdnFailed(bundleNo, responseData));
        } else {
            dispatch(changeMsisdnSuccess(bundleNo, responseData));
        }
    };

    var updateResources = function updateResources() {
        return function(dispatch, getState) {
            var msisdn = (0, _selectors.getMsisdn)(getState());
            var simCard = (0, _selectors.getSimCard)(getState());
            var entry = (0, _selectors.getEntryForResourceModal)(getState());
            var bundleNo = (0, _selectors.getResourceModalBundleNo)(getState());
            var changedMsisdn = msisdn && msisdn !== entry.msisdn;
            var changedSimCard = !entry.simCard && !!simCard.id || !!entry.simCard && simCard.id !== entry.simCard.id;
            var propositionId = entry.propositionId != null ? entry.propositionId : entry.bundleCode;

            if (changedMsisdn && changedSimCard) {
                updateCartSimCardsAndMsisdn(propositionId, entry.productCode, bundleNo, entry.simCard ? [entry.simCard.id] : [], simCard.id === "" ? [] : [simCard.id], msisdn)(dispatch, getState);
            } else if (changedMsisdn) {
                updateCartMsisdn(msisdn, bundleNo)(dispatch, getState);
            } else if (changedSimCard) {
                updateCartSimCards(propositionId, entry.productCode, bundleNo, entry.simCard ? [entry.simCard.id] : [], simCard.id === "" ? [] : [simCard.id])(dispatch, getState);
            } else {
                resourceModalClose(bundleNo)(dispatch);
            }
        };
    };

    _exports.updateResources = updateResources;

    function updateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_SIMCARD
            });

            _remoteApi.default.postUpdateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd).then(function() {
                dispatch({
                    type: ACTIONS.CHANGE_SIMCARD_SUCCESS
                });
                (0, _cart.reloadCartState)()(dispatch, getState);
            });
        };
    }

    function updateCartMsisdn(msisdn, bundleNo) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_MSISDN
            });

            _remoteApi.default.changeMsisdn(msisdn, bundleNo).then(function(responseData) {
                return changeMsisdn200Handler(dispatch, getState, bundleNo, responseData);
            });
        };
    }

    function updateCartSimCardsAndMsisdn(bundle, offer, bundleNo, productsToRemove, productsToAdd, msisdn) {
        return function(dispatch, getState) {
            _remoteApi.default.changeMsisdn(msisdn, bundleNo).then(function(responseData) {
                if (responseData && responseData.message && typeof responseData.message === "string") {
                    dispatch({
                        type: ACTIONS.CHANGE_MSISDN_FAILED,
                        payload: responseData
                    });
                } else {
                    _remoteApi.default.postUpdateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd).then(function() {
                        dispatch({
                            type: ACTIONS.CHANGE_SIMCARD_SUCCESS
                        });
                        (0, _cart.reloadCartState)()(dispatch, getState);
                    });

                    dispatch({
                        type: ACTIONS.CHANGE_MSISDN_SUCCESS,
                        bundleNo: bundleNo,
                        payload: responseData
                    });
                }
            });
        };
    }

    function fetchMsisdns() {
        return function(dispatch, getState) {
            var msisdns = (0, _selectors.getMsisdns)(getState());

            if (!msisdns.length) {
                _remoteApi.default.getMsisdns((0, _selectors.getResourceModalBundleNo)(getState())).then(function(response) {
                    return dispatch({
                        type: ACTIONS.FETCH_MSISDNS,
                        payload: response
                    });
                });
            }
        };
    }

    function fetchSimCards() {
        return function(dispatch, getState) {
            var bundleNo = (0, _selectors.getResourceModalBundleNo)(getState());

            _remoteApi.default.getSimCards(bundleNo).then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_SIM_CARDS,
                    bundleNo: bundleNo,
                    payload: response
                });
            });
        };
    }

    var changeMsisdn = function changeMsisdn(msisdn) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_MSISDN,
                msisdn: msisdn
            });
        };
    };

    _exports.changeMsisdn = changeMsisdn;

    var changeSimCard = function changeSimCard(simCard) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SIMCARD,
                simCard: simCard
            });
        };
    };

    _exports.changeSimCard = changeSimCard;
});
//# sourceMappingURL=resources.js.map