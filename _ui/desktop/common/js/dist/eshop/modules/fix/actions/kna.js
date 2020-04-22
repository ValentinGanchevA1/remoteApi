define(["exports", "../actionTypes", "../remoteApi", "../validators", "./offers"], function(_exports, ACTIONS, _remoteApi, _validators, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.showPaymentLink = _exports.hidePaymentLink = _exports.changeKnaFormField = _exports.submitKnaForm = _exports.closeKnaModal = _exports.registerKnaModal = _exports.showKnaModal = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    var showKnaModal = function showKnaModal() {
        var validate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return function(dispatch) {
            dispatch(changeKnaFormField({
                name: "knaNumber",
                value: undefined
            }, validate));
            dispatch({
                type: ACTIONS.SHOW_KNA_MODAL_ACTION
            });
        };
    };

    _exports.showKnaModal = showKnaModal;

    var registerKnaModal = function registerKnaModal(dispatch) {
        dispatch({
            type: ACTIONS.REGISTER_KNA_MODAL_ACTION
        });
    };

    _exports.registerKnaModal = registerKnaModal;

    var closeKnaModal = function closeKnaModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_KNA_MODAL_ACTION
            });
        };
    };

    _exports.closeKnaModal = closeKnaModal;

    var submitKnaForm = function submitKnaForm(knaNumber, address) {
        return function(dispatch) {
            _remoteApi.default.declareKna(knaNumber).then(function(response) {
                return dispatch((0, _offers.fetchOffers)(address, null, false, true, true));
            });

            dispatch({
                type: ACTIONS.CLOSE_KNA_MODAL_ACTION
            });
        };
    };

    _exports.submitKnaForm = submitKnaForm;

    var changeKnaFormField = function changeKnaFormField(event) {
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return function(dispatch) {
            var errors;

            if (validate) {
                errors = _validators.knaNumberValidator.knaNumber(event.value);
            } else {
                errors = undefined;
            }

            dispatch({
                type: ACTIONS.CHANGE_KNA_FORM_FIELD,
                name: event.name,
                value: event.value,
                errors: errors
            });
        };
    };

    _exports.changeKnaFormField = changeKnaFormField;

    var hidePaymentLink = function hidePaymentLink(event) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.HIDE_PAYMENT_LINK_COMPONENT
            });
        };
    };

    _exports.hidePaymentLink = hidePaymentLink;

    var showPaymentLink = function showPaymentLink(event) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_PAYMENT_LINK_COMPONENT
            });
        };
    };

    _exports.showPaymentLink = showPaymentLink;
});
//# sourceMappingURL=kna.js.map