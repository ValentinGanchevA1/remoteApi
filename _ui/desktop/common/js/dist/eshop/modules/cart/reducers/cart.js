define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.cartData = void 0;
    var INITIAL_CART_DATA_STATE = {
        checkoutCost: {},
        oneTimeCost: {},
        monthlyCosts: []
    };
    var EMPTY_CHECKOUT_COST = {
        currency: "zł",
        gross: "0,00",
        monthFrom: null,
        monthTo: null,
        net: "0,00",
        price: 0
    }; //Checkout summary data

    var cartData = function cartData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_CART_DATA_STATE;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_CART:
                return Object.assign({}, state, action.payload);

            case _actionTypes.REMOVE_FROM_CART:
            case _actionTypes.REMOVE_TERMINAL_FROM_CART_BUNDLE:
                var result = Object.assign({}, state, action.payload);

                if (!(action.payload.entries && action.payload.entries.length)) {
                    result.checkoutCost = EMPTY_CHECKOUT_COST;
                    result.devices = [];
                }

                return result;

            default:
                return state;
        }
    };

    _exports.cartData = cartData;
});
//# sourceMappingURL=cart.js.map