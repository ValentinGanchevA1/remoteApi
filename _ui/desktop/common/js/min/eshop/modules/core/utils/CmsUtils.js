define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createCMSDescriptionWithParams = void 0;
    e.createCMSDescriptionWithParams = function(e, t) {
        var r = e;
        return e && t && t.map(function(e, t) {
            r = r.replace(new RegExp("\\{" + t + "\\}", "g"), e)
        }), r
    }
});
//# sourceMappingURL=CmsUtils.js.map