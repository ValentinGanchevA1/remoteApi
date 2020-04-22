define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.serviceDetailsFetched = _exports.serviceDetailsLoading = _exports.serviceDetails = _exports.customerServicesList = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var customerServicesList = function customerServicesList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CUSTOMER_SERVICES_LIST:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.customerServicesList = customerServicesList;

    var serviceDetails = function serviceDetails() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SERVICE_DETAILS_FETCHED:
                return action.payload || {};

            default:
                return state;
        }
    };

    _exports.serviceDetails = serviceDetails;

    var serviceDetailsLoading = function serviceDetailsLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SERVICE_DETAILS_FETCHING:
                return true;

            case ACTIONS.SERVICE_DETAILS_FETCHED:
                return false;

            default:
                return state;
        }
    };

    _exports.serviceDetailsLoading = serviceDetailsLoading;

    var serviceDetailsFetched = function serviceDetailsFetched() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SERVICE_DETAILS_FETCHED:
                return true;

            default:
                return state;
        }
    };

    _exports.serviceDetailsFetched = serviceDetailsFetched;
});
//# sourceMappingURL=customerServices.js.map