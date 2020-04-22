define(["exports", "../actionTypes"], function(e, c) {
    "use strict";

    function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.verificationResult = e.banks = void 0;
    e.banks = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.SET_ID_VERIFICATION_BANKS:
                return n.banks;
            default:
                return r
        }
    };
    e.verificationResult = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.SET_ID_VERIFICATION_RESULT:
                return n.verificationResult || {};
            case c.SET_ID_VERIFICATION_SELECTED_BANK_ID:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, {
                    selectedBankId: n.selectedBankId
                });
            default:
                return r
        }
    }
});
//# sourceMappingURL=idVerification.js.map