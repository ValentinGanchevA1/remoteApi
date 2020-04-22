define(["exports", "../actionTypes", "eshop/modules/checkout/actionTypes", "eshop/utils/OnlineUtils"], function(_exports, ACTIONS, _actionTypes2, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errors = _exports.invoiceEmailMapping = _exports.invoiceEmail = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var invoiceEmail = function invoiceEmail() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.INVOICE_EMAIL_CHANGE:
                return action.value;

            default:
                return state;
        }
    };

    _exports.invoiceEmail = invoiceEmail;

    var createKeyForInvoiceEmailMapping = function createKeyForInvoiceEmailMapping() {
        return 'invoiceEmailMapping.' + _OnlineUtils.default.getCookie('telco-cart');
    };

    var readInvoiceEmailMappingSessionStorage = function readInvoiceEmailMappingSessionStorage() {
        var key = createKeyForInvoiceEmailMapping();

        var value = _OnlineUtils.default.loadFromSessionStorage(key);

        return value ? value : 'invoiceEmail';
    };

    var saveInvoiceEmailMappingSessionStorage = function saveInvoiceEmailMappingSessionStorage(value) {
        var key = createKeyForInvoiceEmailMapping();

        _OnlineUtils.default.saveInSessionStorage(key, value);
    };

    var invoiceEmailMapping = function invoiceEmailMapping() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'invoiceEmail';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.INVOICE_EMAIL_MAPPING_CHANGE:
                saveInvoiceEmailMappingSessionStorage(action.payload);
                return action.payload;

            case _actionTypes2.GET_CART_CUSTOMER_DONE:
                return readInvoiceEmailMappingSessionStorage();

            default:
                return state;
        }
    };

    _exports.invoiceEmailMapping = invoiceEmailMapping;

    var errors = function errors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.INVOICE_EMAIL_CHANGE:
                return action.errors;

            default:
                return state;
        }
    };

    _exports.errors = errors;
});
//# sourceMappingURL=invoiceData.js.map