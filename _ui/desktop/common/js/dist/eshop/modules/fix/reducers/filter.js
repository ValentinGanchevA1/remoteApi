define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.pageContext = _exports.filterLP = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var filterLP = function filterLP() {
        var filterLP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.UPDATE_FILTER_ID: {
                return action.payload;
            }

            default:
                return filterLP;
        }
    };

    _exports.filterLP = filterLP;

    var pageContext = function pageContext() {
        var pageContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1P";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.UPDATE_PAGE_CONTEXT: {
                return action.payload;
            }

            default:
                return pageContext;
        }
    };

    _exports.pageContext = pageContext;
});
//# sourceMappingURL=filter.js.map