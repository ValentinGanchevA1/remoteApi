define(["exports", "redux", "./representatives", "./grantors", "../actionTypes"], function(e, r, t, n, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.representativeData = void 0, t = babelHelpers.interopRequireWildcard(t), n = babelHelpers.interopRequireWildcard(n);
    var a = (0, r.combineReducers)({
        representatives: (0, r.combineReducers)(t),
        grantors: (0, r.combineReducers)(n),
        representationMode: function(e, r) {
            var t = 0 < arguments.length && void 0 !== e ? e : "",
                n = 1 < arguments.length ? r : void 0;
            switch (n.type) {
                case i.SET_REPRESENTATION_MODE:
                    return n.mode;
                case i.GET_CART_REPRESENTATIVE_DATA_DONE:
                    return n.data.representationMethod || "";
                default:
                    return t
            }
        },
        grantingDate: function(e, r) {
            var t = 0 < arguments.length && void 0 !== e ? e : "",
                n = 1 < arguments.length ? r : void 0;
            switch (n.type) {
                case i.SET_GRANTING_DATE:
                    return n.date;
                case i.GET_CART_REPRESENTATIVE_DATA_DONE:
                    var a = n.data.grantingDate;
                    return a ? a[0] + "-" + (a[1] < 10 ? "0" + a[1] : a[1]) + "-" + (a[2] < 10 ? "0" + a[2] : a[2]) : t;
                default:
                    return t
            }
        },
        grantingDateErrors: function(e, r) {
            var t = 0 < arguments.length && void 0 !== e ? e : [],
                n = 1 < arguments.length ? r : void 0;
            switch (n.type) {
                case i.SET_GRANTING_DATE:
                    return n.errors;
                case i.GET_CART_REPRESENTATIVE_DATA_DONE:
                    return [];
                default:
                    return t
            }
        }
    });
    e.representativeData = a
});
//# sourceMappingURL=representativeData.js.map