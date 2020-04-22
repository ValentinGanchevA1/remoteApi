define(["exports", "../actionTypes", "../../core/constants/FactoryTypeEnum"], function(e, i, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectedServices = e.packageDiscountConfirmation = e.services = e.accountBalanceWithInstallmentPlanExists = e.process = e.fetchingServices = e.errorMessage = void 0, i = babelHelpers.interopRequireWildcard(i), a = babelHelpers.interopRequireDefault(a);
    e.errorMessage = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.FETCH_SERVICES_TO_TRANSFER_ERROR:
                return n.message;
            default:
                return r
        }
    };
    e.fetchingServices = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.FETCH_SERVICES_TO_TRANSFER_START:
                return !0;
            case i.FETCH_SERVICES_TO_TRANSFER_END:
            case i.FETCH_SERVICES_TO_TRANSFER_ERROR:
                return !1;
            default:
                return r
        }
    };
    e.process = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.SELECT_PROCESS:
                return n.process;
            default:
                return r
        }
    };
    e.accountBalanceWithInstallmentPlanExists = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.ACCOUNT_BALANCE_WITH_INSTALLMENT_PLAN:
                return n.payload.accountBalanceWithInstallmentPlanExists;
            default:
                return r
        }
    };
    e.services = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.FETCH_SERVICES_TO_TRANSFER_END:
                return n.payload.servicesToTransfer;
            default:
                return r
        }
    };
    e.packageDiscountConfirmation = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PACKAGE_DISCOUNT_CONFIRM_CHECKED:
                return !0;
            case i.PACKAGE_DISCOUNT_CONFIRM_UNCHECKED:
                return !1;
            default:
                return r
        }
    };
    e.selectedServices = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.SELECTED_SERVICE_CHANGED:
                var s = n.serviceType === a.default.FIX ? [] : babelHelpers.toConsumableArray(r);
                return s.includes(n.serviceNumber) ? s = s.filter(function(e) {
                    return e !== n.serviceNumber
                }) : s.push(n.serviceNumber), s;
            default:
                return r
        }
    }
});
//# sourceMappingURL=transfer.js.map