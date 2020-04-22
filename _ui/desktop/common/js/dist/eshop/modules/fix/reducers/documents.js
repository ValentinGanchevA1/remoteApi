define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.documentsDataLP = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var documentsDataLP = function documentsDataLP() {
        var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DOCUMENTS: {
                var documents = action.payload;
                return documents;
            }

            default:
                return store;
        }
    };

    _exports.documentsDataLP = documentsDataLP;
});
//# sourceMappingURL=documents.js.map