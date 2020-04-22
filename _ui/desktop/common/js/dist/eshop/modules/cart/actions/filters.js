define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectLoyaltyDurationChoiceFilter = _exports.selectTvPackagesChoiceFilter = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var selectTvPackagesChoiceFilter = function selectTvPackagesChoiceFilter(selectedChoice) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SELECT_TV_PACKAGES_CHOICE_FILTER,
                payload: selectedChoice
            });
        };
    };

    _exports.selectTvPackagesChoiceFilter = selectTvPackagesChoiceFilter;

    var selectLoyaltyDurationChoiceFilter = function selectLoyaltyDurationChoiceFilter(selectedChoice) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER,
                payload: selectedChoice
            });
        };
    };

    _exports.selectLoyaltyDurationChoiceFilter = selectLoyaltyDurationChoiceFilter;
});
//# sourceMappingURL=filters.js.map