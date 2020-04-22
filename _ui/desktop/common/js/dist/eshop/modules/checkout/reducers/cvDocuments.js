define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errors = _exports.customerWorkPhoneNumber = _exports.selectedCustomerAdditionalDocument = _exports.cvDocumentsList = void 0;

    var cvDocumentsList = function cvDocumentsList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_CV_DOCUMENTS_LIST:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.cvDocumentsList = cvDocumentsList;

    var selectedCustomerAdditionalDocument = function selectedCustomerAdditionalDocument() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_CV_DOCUMENT:
                return action.documentCode;

            default:
                return state;
        }
    };

    _exports.selectedCustomerAdditionalDocument = selectedCustomerAdditionalDocument;

    var customerWorkPhoneNumber = function customerWorkPhoneNumber() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_CUSTOMER_WORK_PHONE_NUMBER:
                return action.phoneNumber;

            default:
                return state;
        }
    };

    _exports.customerWorkPhoneNumber = customerWorkPhoneNumber;

    var errors = function errors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_CUSTOMER_WORK_PHONE_NUMBER:
                return {
                    customerWorkPhoneNumber: action.errors
                };

            default:
                return state;
        }
    };

    _exports.errors = errors;
});
//# sourceMappingURL=cvDocuments.js.map