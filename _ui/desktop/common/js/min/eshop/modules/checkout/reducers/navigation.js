define(["exports", "../actionTypes"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errorCode = e.inProgress = void 0;
    e.inProgress = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? r : void 0).type) {
            case o.DO_CHECKOUT_STEP_START:
            case o.GOTO_CHECKOUT_NEXT:
                return !0;
            case o.DO_CHECKOUT_STEP_DONE:
            case o.DO_CHECKOUT_STEP_ERROR:
                return !1;
            default:
                return t
        }
    };
    e.errorCode = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case o.DO_CHECKOUT_STEP_START:
                return null;
            case o.DO_CHECKOUT_STEP_ERROR:
                return n.code || "-1";
            default:
                return t
        }
    }
});
//# sourceMappingURL=navigation.js.map