define(["exports", "../actionTypes", "eshop/modules/checkout/utils/utils", "eshop/utils/OnlineUtils"], function(e, a, i, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errors = e.data = void 0, o = babelHelpers.interopRequireDefault(o);
    var u = {
        firstName: "",
        lastName: ""
    };
    e.data = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case a.CHANGE_GRANTOR_FORM_FIELD:
                return (0, i.createArrayWithValueOnIndex)(t, n.index, n.name, n.value, u);
            case a.REMOVE_GRANTOR:
                return o.default.immutableRemove(t, n.index);
            case a.SET_REPRESENTATION_MODE:
                return (0, i.enforceArrayLengthInBounds)(t, n.modeConfig.minRMC, n.modeConfig.maxRMC, u);
            case a.GET_CART_REPRESENTATIVE_DATA_DONE:
                return n.data.grantors;
            default:
                return t
        }
    };
    e.errors = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case a.CHANGE_GRANTOR_FORM_FIELD:
                return (0, i.createArrayWithValueOnIndex)(t, n.index, n.name, n.errors);
            case a.REMOVE_GRANTOR:
                return o.default.immutableRemove(t, n.index);
            case a.SET_REPRESENTATION_MODE:
                return (0, i.enforceArrayLengthInBounds)(t, n.modeConfig.minRMC, n.modeConfig.maxRMC, {});
            case a.GET_CART_REPRESENTATIVE_DATA_DONE:
                return [];
            default:
                return t
        }
    }
});
//# sourceMappingURL=grantors.js.map