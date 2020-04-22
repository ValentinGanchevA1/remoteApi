define(["exports", "../actionTypes", "../../fix/enum/TvPackagesChoiceFilter"], function(_exports, ACTIONS, _TvPackagesChoiceFilter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.loyaltyDuration = _exports.secondaryChoice = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

    var secondaryChoice = function secondaryChoice() {
        var secondaryChoice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _TvPackagesChoiceFilter.default.TV_DEFAULT_CHOICE_PRODUCT;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_TV_PACKAGES_CHOICE_FILTER:
                return action.payload;

            default:
                return secondaryChoice;
        }
    };

    _exports.secondaryChoice = secondaryChoice;

    var loyaltyDuration = function loyaltyDuration() {
        var loyaltyDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER:
                return action.payload;

            default:
                return loyaltyDuration;
        }
    };

    _exports.loyaltyDuration = loyaltyDuration;
});
//# sourceMappingURL=filters.js.map