define(["exports", "../actionTypes", "../../core/constants/FactoryTypeEnum"], function(_exports, ACTIONS, _FactoryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectedServices = _exports.packageDiscountConfirmation = _exports.services = _exports.accountBalanceWithInstallmentPlanExists = _exports.process = _exports.fetchingServices = _exports.errorMessage = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _FactoryTypeEnum = babelHelpers.interopRequireDefault(_FactoryTypeEnum);

    var errorMessage = function errorMessage() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_SERVICES_TO_TRANSFER_ERROR:
                console.log(action.message);
                return action.message;

            default:
                return state;
        }
    };

    _exports.errorMessage = errorMessage;

    var fetchingServices = function fetchingServices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_SERVICES_TO_TRANSFER_START:
                return true;

            case ACTIONS.FETCH_SERVICES_TO_TRANSFER_END:
            case ACTIONS.FETCH_SERVICES_TO_TRANSFER_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.fetchingServices = fetchingServices;

    var process = function process() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_PROCESS:
                return action.process;

            default:
                return state;
        }
    };

    _exports.process = process;

    var accountBalanceWithInstallmentPlanExists = function accountBalanceWithInstallmentPlanExists() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ACCOUNT_BALANCE_WITH_INSTALLMENT_PLAN:
                return action.payload.accountBalanceWithInstallmentPlanExists;

            default:
                return state;
        }
    };

    _exports.accountBalanceWithInstallmentPlanExists = accountBalanceWithInstallmentPlanExists;

    var services = function services() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_SERVICES_TO_TRANSFER_END:
                return action.payload.servicesToTransfer;

            default:
                return state;
        }
    };

    _exports.services = services;

    var packageDiscountConfirmation = function packageDiscountConfirmation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.PACKAGE_DISCOUNT_CONFIRM_CHECKED:
                return true;

            case ACTIONS.PACKAGE_DISCOUNT_CONFIRM_UNCHECKED:
                return false;

            default:
                return state;
        }
    };

    _exports.packageDiscountConfirmation = packageDiscountConfirmation;

    var selectedServices = function selectedServices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECTED_SERVICE_CHANGED:
                var newState = action.serviceType === _FactoryTypeEnum.default.FIX ? [] : babelHelpers.toConsumableArray(state);

                if (newState.includes(action.serviceNumber)) {
                    newState = newState.filter(function(val) {
                        return val !== action.serviceNumber;
                    });
                } else {
                    newState.push(action.serviceNumber);
                }

                return newState;

            default:
                return state;
        }
    };

    _exports.selectedServices = selectedServices;
});
//# sourceMappingURL=transfer.js.map