define(["exports", "../actionTypes", "eshop/modules/checkout/utils/utils", "eshop/utils/OnlineUtils"], function(_exports, _actionTypes, _utils, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errors = _exports.data = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    var emptyData = {
        firstName: "",
        lastName: "",
        pesel: "",
        idNumber: "",
        country: "",
        identification: "",
        identificationValue: "",
        identificationEndDate: null,
        identificationRegisterDate: null,
        foreigner: false
    };

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_REPRESENTATIVE_FORM_FIELD:
                return (0, _utils.createArrayWithValueOnIndex)(state, action.index, action.name, action.value, emptyData);

            case _actionTypes.REMOVE_REPRESENTATIVE:
                return _OnlineUtils.default.immutableRemove(state, action.index);

            case _actionTypes.SET_REPRESENTATION_MODE:
                return (0, _utils.enforceArrayLengthInBounds)(state, action.modeConfig.minRC, action.modeConfig.maxRC, emptyData);

            case _actionTypes.GET_CART_REPRESENTATIVE_DATA_DONE:
                return action.data.representatives;

            default:
                return state;
        }
    };

    _exports.data = data;

    var errors = function errors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_REPRESENTATIVE_FORM_FIELD:
                return (0, _utils.createArrayWithValueOnIndex)(state, action.index, action.name, action.errors);

            case _actionTypes.REMOVE_REPRESENTATIVE:
                return _OnlineUtils.default.immutableRemove(state, action.index);

            case _actionTypes.SET_REPRESENTATION_MODE:
                return (0, _utils.enforceArrayLengthInBounds)(state, action.modeConfig.minRC, action.modeConfig.maxRC, []);

            case _actionTypes.CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS:
                return [];

            case _actionTypes.GET_CART_REPRESENTATIVE_DATA_DONE:
                return [];

            default:
                return state;
        }
    };

    _exports.errors = errors;
});
//# sourceMappingURL=representatives.js.map