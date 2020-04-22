define(["exports", "../actionTypes"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectLoyaltyDurationChoiceFilter = e.selectTvPackagesChoiceFilter = void 0, i = babelHelpers.interopRequireWildcard(i);
    e.selectTvPackagesChoiceFilter = function(t) {
        return function(e) {
            e({
                type: i.SELECT_TV_PACKAGES_CHOICE_FILTER,
                payload: t
            })
        }
    };
    e.selectLoyaltyDurationChoiceFilter = function(t) {
        return function(e) {
            e({
                type: i.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER,
                payload: t
            })
        }
    }
});
//# sourceMappingURL=filters.js.map