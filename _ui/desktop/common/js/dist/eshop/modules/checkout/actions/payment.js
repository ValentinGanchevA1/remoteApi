define(["exports", "../remoteApi", "../actionTypes", "../selectors"], function(_exports, _remoteApi, ACTIONS, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectPaymentMethod = _exports.updatePaymentMethod = _exports.fetchCartPayment = void 0;
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var fetchCartPayment = function fetchCartPayment() {
        return function(dispatch) {
            return new Promise(function(resolve, reject) {
                dispatch(fetchPaymentStarted());

                _remoteApi.default.getCartPayment().then(function(cartPayment) {
                    var paymentMethod = cartPayment && cartPayment.length > 0 ? cartPayment[0].paymentMethod : null;
                    var eligCode = cartPayment && cartPayment.length > 0 ? cartPayment[0].eligCode : null;
                    dispatch(selectPaymentMethod(paymentMethod, eligCode));
                    dispatch(fetchPaymentDone());
                    resolve(cartPayment);
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    };

    _exports.fetchCartPayment = fetchCartPayment;

    var updatePaymentMethod = function updatePaymentMethod(code, eligCode) {
        return function(dispatch, getState) {
            dispatch(selectPaymentMethod(code, eligCode));

            _remoteApi.default.updateCartPayment((0, _selectors.getPaymentCheckoutData)(getState()));
        };
    };

    _exports.updatePaymentMethod = updatePaymentMethod;

    var selectPaymentMethod = function selectPaymentMethod(code, eligCode) {
        return {
            type: ACTIONS.SELECT_PAYMENT_METHOD,
            code: code,
            eligCode: eligCode
        };
    };

    _exports.selectPaymentMethod = selectPaymentMethod;

    var fetchPaymentStarted = function fetchPaymentStarted() {
        return {
            type: ACTIONS.GET_PAYMENT_DATA_START
        };
    };

    var fetchPaymentDone = function fetchPaymentDone() {
        return {
            type: ACTIONS.GET_PAYMENT_DATA_DONE
        };
    };
});
//# sourceMappingURL=payment.js.map