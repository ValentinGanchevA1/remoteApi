define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.returnDocumentLoader = void 0;

    var returnDocumentLoader = function returnDocumentLoader() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.RETURN_DOCUMENT_LOADER:
                return action.data;

            default:
                return state;
        }
    };

    _exports.returnDocumentLoader = returnDocumentLoader;
});
//# sourceMappingURL=returnDocument.js.map