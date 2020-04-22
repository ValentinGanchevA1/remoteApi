define(["exports", "../actionTypes", "../enum/VoipVariant"], function(_exports, ACTIONS, _VoipVariant) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.designationNumber = _exports.selectionInProgress = _exports.numbersFetching = _exports.numbersFetched = _exports.selectedVoipNumber = _exports.designationNumbers = _exports.voipNumbers = _exports.showNumbersModal = _exports.showVariantModal = _exports.variant = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _VoipVariant = babelHelpers.interopRequireDefault(_VoipVariant);

    var variant = function variant() {
        var voipVariant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _VoipVariant.default.NEW_VOIP;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_VARIANT:
                return action.payload;

            case ACTIONS.DUPLICATE_ORDER_RESET:
                return _VoipVariant.default.NEW_VOIP;

            default:
                return voipVariant;
        }
    };

    _exports.variant = variant;

    var showVariantModal = function showVariantModal() {
        var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_SELECTION:
            case ACTIONS.SHOW_VOIP_VARIANT_MODAL:
                return action.payload;

            default:
                return show;
        }
    };

    _exports.showVariantModal = showVariantModal;

    var showNumbersModal = function showNumbersModal() {
        var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_SELECTION:
            case ACTIONS.SHOW_VOIP_NUMBERS_MODAL:
                return action.payload;

            default:
                return show;
        }
    };

    _exports.showNumbersModal = showNumbersModal;

    var voipNumbers = function voipNumbers() {
        var voipNumbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_VOIP_NUMBERS:
                return action.payload && action.payload.voipNumbers || [];

            default:
                return voipNumbers;
        }
    };

    _exports.voipNumbers = voipNumbers;

    var designationNumbers = function designationNumbers() {
        var designationNumbers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_VOIP_NUMBERS:
                return action.payload && action.payload.designationNumbers || [];

            default:
                return designationNumbers;
        }
    };

    _exports.designationNumbers = designationNumbers;

    var selectedVoipNumber = function selectedVoipNumber() {
        var selectedVoipNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_VOIP_NUMBER:
                return action.payload;

            default:
                return selectedVoipNumber;
        }
    };

    _exports.selectedVoipNumber = selectedVoipNumber;

    var numbersFetched = function numbersFetched() {
        var fetched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_NUMBERS_FETCHED:
                return action.payload;

            default:
                return fetched;
        }
    };

    _exports.numbersFetched = numbersFetched;

    var numbersFetching = function numbersFetching() {
        var fetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_NUMBERS_FETCHING:
                return action.payload;

            default:
                return fetching;
        }
    };

    _exports.numbersFetching = numbersFetching;

    var selectionInProgress = function selectionInProgress() {
        var inProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VOIP_SELECTION:
                return action.payload;

            default:
                return inProgress;
        }
    };

    _exports.selectionInProgress = selectionInProgress;

    var designationNumber = function designationNumber() {
        var designationNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DESIGNATION_NUMBER:
                return action.payload;

            default:
                return designationNumber;
        }
    };

    _exports.designationNumber = designationNumber;
});
//# sourceMappingURL=voip.js.map