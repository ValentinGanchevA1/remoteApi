define(["exports", "../actionTypes", "../remoteApi", "../selectors/root", "./offers", "../selectors/voip"], function(_exports, ACTIONS, _remoteApi, _root, _offers, _voip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.saveDesignationNumber = _exports.showVoipNumbersModal = _exports.showVoipVariantModal = _exports.selectVoipVariant = _exports.mountVoipModalComponent = _exports.saveSelectedVoipNumber = _exports.fetchingVoipNumbersWithMultiCallBlock = _exports.voipSelection = _exports.fetchVoipNumbers = _exports.selectVoipNumber = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    var voipNumbersFetching = function voipNumbersFetching(fetching) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.VOIP_NUMBERS_FETCHING,
                payload: fetching
            });
        };
    };

    var voipNumbersFetched = function voipNumbersFetched(fetched) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.VOIP_NUMBERS_FETCHED,
                payload: fetched
            });
        };
    };

    var selectVoipNumber = function selectVoipNumber(number) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SELECT_VOIP_NUMBER,
                payload: number
            });
        };
    };

    _exports.selectVoipNumber = selectVoipNumber;

    var saveVoipNumbers = function saveVoipNumbers(numbers) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SAVE_VOIP_NUMBERS,
                payload: numbers
            });

            if (numbers && numbers.voipNumbers && numbers.voipNumbers[0]) {
                dispatch(selectVoipNumber(numbers.voipNumbers[0]));
            }
        };
    };

    var fetchVoipNumbers = function fetchVoipNumbers(cityId) {
        return function(dispatch) {
            dispatch(voipNumbersFetching(true));
            dispatch(saveVoipNumbers());
            dispatch(voipNumbersFetched(false));
            return _remoteApi.default.fetchVoipNumbers(cityId).then(function(response) {
                dispatch(saveVoipNumbers(response));
                dispatch(voipNumbersFetched(true));
                dispatch(voipNumbersFetching(false));
                return response;
            });
        };
    };

    _exports.fetchVoipNumbers = fetchVoipNumbers;

    var voipSelection = function voipSelection(_voipSelection) {
        return function(dispatch, getState) {
            var voipFetching = (0, _voip.getNumbersFetching)(getState());
            var voipFetched = (0, _voip.getNumbersFetched)(getState());

            if (!voipFetching && !voipFetched) {
                dispatch(fetchVoipNumbers((0, _root.getWwtCityId)(getState())));
            }

            dispatch({
                type: ACTIONS.VOIP_SELECTION,
                source: "voipSelection",
                payload: _voipSelection
            });
        };
    };

    _exports.voipSelection = voipSelection;

    var fetchingVoipNumbersWithMultiCallBlock = function fetchingVoipNumbersWithMultiCallBlock(cityId) {
        return function(dispatch, getState) {
            var voipFetching = (0, _voip.getNumbersFetching)(getState());
            var voipFetched = (0, _voip.getNumbersFetched)(getState());

            if (!voipFetching && !voipFetched) {
                dispatch(fetchVoipNumbers(cityId));
            }
        };
    };

    _exports.fetchingVoipNumbersWithMultiCallBlock = fetchingVoipNumbersWithMultiCallBlock;

    var saveSelectedVoipNumber = function saveSelectedVoipNumber(number) {
        return function(dispatch, getState) {
            var secondaryChoiceOffer = (0, _root.isSecondaryChoiceOfferSelected)(getState());
            var offerId = (0, _root.getSelectedOfferId)(getState());

            _remoteApi.default.saveSelectedVoipNumber(number).then(function() {
                dispatch({
                    type: ACTIONS.VOIP_NUMBER_SELECTED
                });

                if (!!offerId) {
                    dispatch((0, _offers.addToCart)(offerId, secondaryChoiceOffer));
                }
            });
        };
    };

    _exports.saveSelectedVoipNumber = saveSelectedVoipNumber;

    var mountVoipModalComponent = function mountVoipModalComponent() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.MOUNT_VOIP_MODAL_COMPONENT_ACTION
            });
        };
    };

    _exports.mountVoipModalComponent = mountVoipModalComponent;

    var selectVoipVariant = function selectVoipVariant(voipVariant) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.VOIP_VARIANT,
                payload: voipVariant
            });
        };
    };

    _exports.selectVoipVariant = selectVoipVariant;

    var showVoipVariantModal = function showVoipVariantModal(show) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_VOIP_VARIANT_MODAL,
                payload: show
            });
        };
    };

    _exports.showVoipVariantModal = showVoipVariantModal;

    var showVoipNumbersModal = function showVoipNumbersModal(show) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_VOIP_NUMBERS_MODAL,
                payload: show
            });
        };
    };

    _exports.showVoipNumbersModal = showVoipNumbersModal;

    var saveDesignationNumber = function saveDesignationNumber(designationNumber) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.DESIGNATION_NUMBER,
                payload: designationNumber
            });
        };
    };

    _exports.saveDesignationNumber = saveDesignationNumber;
});
//# sourceMappingURL=voip.js.map