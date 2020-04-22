define(["exports", "../cart/components/entriesList/BundleTypeEnum", "./constants/ProcessTypeEnum"], function(e, u, f) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getProcessType = function(e) {
        var t = e.map(function(e) {
            return e.bundleType
        }); {
            if (0 === _.difference(t, [u.default._3P_PRE, u.default.VOICE]).length) return f.default._4U;
            if (0 === _.difference(t, [u.default._1P_PRE, u.default.VOICE]).length) return f.default._2U;
            if (0 === _.difference(t, [u.default.VOICE, u.default.DATA]).length) return f.default._2ULTE;
            if (0 === _.difference(t, [u.default.VOICE, u.default.DATA, u.default.VIDEO]).length) return f.default._3ULTE
        }
        return f.default.UNKNOWN
    }, u = babelHelpers.interopRequireDefault(u), f = babelHelpers.interopRequireDefault(f)
});
//# sourceMappingURL=utils.js.map