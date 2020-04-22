define(["exports", "../actionTypes", "eshop/modules/checkout/utils/utils", "eshop/utils/OnlineUtils"], function(e, i, E, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errors = e.data = void 0, a = babelHelpers.interopRequireDefault(a);
    var o = {
        firstName: "",
        lastName: "",
        pesel: "",
        idNumber: "",
        country: "",
        identification: "",
        identificationValue: "",
        identificationEndDate: null,
        identificationRegisterDate: null,
        foreigner: !1
    };
    e.data = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.CHANGE_REPRESENTATIVE_FORM_FIELD:
                return (0, E.createArrayWithValueOnIndex)(n, r.index, r.name, r.value, o);
            case i.REMOVE_REPRESENTATIVE:
                return a.default.immutableRemove(n, r.index);
            case i.SET_REPRESENTATION_MODE:
                return (0, E.enforceArrayLengthInBounds)(n, r.modeConfig.minRC, r.modeConfig.maxRC, o);
            case i.GET_CART_REPRESENTATIVE_DATA_DONE:
                return r.data.representatives;
            default:
                return n
        }
    };
    e.errors = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.CHANGE_REPRESENTATIVE_FORM_FIELD:
                return (0, E.createArrayWithValueOnIndex)(n, r.index, r.name, r.errors);
            case i.REMOVE_REPRESENTATIVE:
                return a.default.immutableRemove(n, r.index);
            case i.SET_REPRESENTATION_MODE:
                return (0, E.enforceArrayLengthInBounds)(n, r.modeConfig.minRC, r.modeConfig.maxRC, []);
            case i.CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS:
            case i.GET_CART_REPRESENTATIVE_DATA_DONE:
                return [];
            default:
                return n
        }
    }
});
//# sourceMappingURL=representatives.js.map