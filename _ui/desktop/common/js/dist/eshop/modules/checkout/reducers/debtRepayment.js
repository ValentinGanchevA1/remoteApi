define(["exports", "../actionTypes", "../../cart/actionTypes"], function(_exports, _actionTypes, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.show = _exports.data = void 0;

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var empty = {
        receiptNumber: '',
        amount: ''
    };

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : empty;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_DEBT_REPAYMENT_FORM_FIELD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));

            default:
                return state;
        }
    };

    _exports.data = data;

    var show = function show() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes2.FETCH_MINI_CART:
                return action.payload.showDebtRepaymentForm;

            default:
                return state;
        }
    };

    _exports.show = show;
});
//# sourceMappingURL=debtRepayment.js.map