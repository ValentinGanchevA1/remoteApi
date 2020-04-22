define(["exports", "../actionTypes"], function(e, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.bundleNo = e.visibleModal = void 0, l = babelHelpers.interopRequireWildcard(l);
    e.visibleModal = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case l.LOWER_INSTALLMENTS_MODAL_OPEN:
                return !0;
            case l.LOWER_INSTALLMENTS_MODAL_CLOSE:
                return !1;
            default:
                return n
        }
    };
    e.bundleNo = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            i = 1 < arguments.length ? t : void 0;
        switch (i.type) {
            case l.LOWER_INSTALLMENTS_MODAL_OPEN:
                return i.bundleNo;
            default:
                return n
        }
    }
});
//# sourceMappingURL=lowerInstallments.js.map