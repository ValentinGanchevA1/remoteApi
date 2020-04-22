define(["exports", "../actionTypes", "../../fix/enum/TvPackagesChoiceFilter"], function(e, i, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.loyaltyDuration = e.secondaryChoice = void 0, i = babelHelpers.interopRequireWildcard(i), r = babelHelpers.interopRequireDefault(r);
    e.secondaryChoice = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.default.TV_DEFAULT_CHOICE_PRODUCT,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case i.SELECT_TV_PACKAGES_CHOICE_FILTER:
                return t.payload;
            default:
                return e
        }
    };
    e.loyaltyDuration = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case i.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER:
                return t.payload;
            default:
                return e
        }
    }
});
//# sourceMappingURL=filters.js.map