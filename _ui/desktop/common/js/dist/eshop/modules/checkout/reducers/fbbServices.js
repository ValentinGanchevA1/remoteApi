define(["exports", "../actionTypes", "lodash"], function(_exports, _actionTypes, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectedServiceInstanceId = _exports.selectedDesignationNumber = _exports.fbbServices = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    var getResults = function getResults(action) {
        return action.results || [];
    };

    var fbbServices = function fbbServices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                ;
                var res = getResults(action).filter(function(result) {
                    return result.category === "FBB_SERVICES";
                }).map(function(r1) {
                    return r1.details;
                });
                return _lodash.default.flatMap(res, function(r2) {
                    return r2.fixAddressWithServices;
                });

            case _actionTypes.CHECKOUT_FBB_SERVICES_DISMISS:
                return [];

            case _actionTypes.SET_FBB_SERVICE_DATA:
                return action.payload.fixAddressWithServices || [];

            default:
                return state;
        }
    };

    _exports.fbbServices = fbbServices;

    var selectedDesignationNumber = function selectedDesignationNumber() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_DESIGNATION_NUMBER:
                return action.designationNumber;

            default:
                return state;
        }
    };

    _exports.selectedDesignationNumber = selectedDesignationNumber;

    var selectedServiceInstanceId = function selectedServiceInstanceId() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_SERVICE_INSTANCE_ID:
                return action.serviceInstanceId;

            default:
                return state;
        }
    };

    _exports.selectedServiceInstanceId = selectedServiceInstanceId;
});
//# sourceMappingURL=fbbServices.js.map