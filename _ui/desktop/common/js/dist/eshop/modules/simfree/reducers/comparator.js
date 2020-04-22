define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errorCode = _exports.isComparatorCategory = _exports.selectedModel = _exports.selectedProducer = _exports.producers = _exports.deviceBrands = _exports.modelsForBrand = _exports.comparatorConfig = _exports.devices = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var devices = function devices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.UPDATE_COMPARATOR_DEVICES:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.devices = devices;

    var comparatorConfig = function comparatorConfig() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_COMPARATOR_CONFIG:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.comparatorConfig = comparatorConfig;

    var modelsForBrand = function modelsForBrand() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_MODELS_FOR_BRAND:
                return action.payload;

            case ACTIONS.CLEAR_MODELS_FOR_BRAND:
                return [];

            default:
                return state;
        }
    };

    _exports.modelsForBrand = modelsForBrand;

    var deviceBrands = function deviceBrands() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DEVICE_BRANDS:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.deviceBrands = deviceBrands;

    var producers = function producers() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_PRODUCERS:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.producers = producers;

    var selectedProducer = function selectedProducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_SELECTED_PRODUCER:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.selectedProducer = selectedProducer;

    var selectedModel = function selectedModel() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_SELECTED_MODEL:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.selectedModel = selectedModel;

    var isComparatorCategory = function isComparatorCategory() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_IS_COMPARATOR_CATEGORY:
                return action.value;

            default:
                return state;
        }
    };

    _exports.isComparatorCategory = isComparatorCategory;

    var errorCode = function errorCode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_COMPARATOR_ERROR_CODE:
                return action.value;

            default:
                return state;
        }
    };

    _exports.errorCode = errorCode;
});
//# sourceMappingURL=comparator.js.map