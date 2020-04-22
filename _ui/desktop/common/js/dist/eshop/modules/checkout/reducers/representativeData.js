define(["exports", "redux", "./representatives", "./grantors", "../actionTypes"], function(_exports, _redux, representatives, grantors, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.representativeData = void 0;
    representatives = babelHelpers.interopRequireWildcard(representatives);
    grantors = babelHelpers.interopRequireWildcard(grantors);

    var representationMode = function representationMode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_REPRESENTATION_MODE:
                return action.mode;

            case _actionTypes.GET_CART_REPRESENTATIVE_DATA_DONE:
                return action.data.representationMethod || "";

            default:
                return state;
        }
    };

    var grantingDate = function grantingDate() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_GRANTING_DATE:
                return action.date;

            case _actionTypes.GET_CART_REPRESENTATIVE_DATA_DONE:
                var d = action.data.grantingDate;

                if (d) {
                    var formattedDate = d[0] + "-" + (d[1] < 10 ? "0" + d[1] : d[1]) + "-" + (d[2] < 10 ? "0" + d[2] : d[2]);
                    return formattedDate;
                } else {
                    return state;
                }

                default:
                    return state;
        }
    };

    var grantingDateErrors = function grantingDateErrors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_GRANTING_DATE:
                return action.errors;

            case _actionTypes.GET_CART_REPRESENTATIVE_DATA_DONE:
                return [];

            default:
                return state;
        }
    };

    var representativeData = (0, _redux.combineReducers)({
        representatives: (0, _redux.combineReducers)(representatives),
        grantors: (0, _redux.combineReducers)(grantors),
        representationMode: representationMode,
        grantingDate: grantingDate,
        grantingDateErrors: grantingDateErrors
    });
    _exports.representativeData = representativeData;
});
//# sourceMappingURL=representativeData.js.map