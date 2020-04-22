define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.documentsDataSavedBeforeCreation = _exports.documentAlternativeDownload = _exports.documentBeingDownloaded = _exports.fetchingUnfilteredInProgress = _exports.fetchingInProgress = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var fetchingInProgress = function fetchingInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DOCUMENTS_LOADING:
                return action.isLoading;

            default:
                return state;
        }
    };

    _exports.fetchingInProgress = fetchingInProgress;

    var fetchingUnfilteredInProgress = function fetchingUnfilteredInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DOCUMENTS_UNFILTERED_LOADING:
                return action.isLoading;

            default:
                return state;
        }
    };

    _exports.fetchingUnfilteredInProgress = fetchingUnfilteredInProgress;

    var documentBeingDownloaded = function documentBeingDownloaded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DOWNLOAD_DOCUMENT_START:
                return action.code;

            case ACTIONS.DOCUMENT_READY_TO_DOWNLOAD:
                return '';

            case ACTIONS.DOWNLOAD_DOCUMENT_ERROR:
                return '';

            default:
                return state;
        }
    };

    _exports.documentBeingDownloaded = documentBeingDownloaded;

    var documentAlternativeDownload = function documentAlternativeDownload() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_ALTERNATIVE_DOCUMENT_DOWNLOAD_METHOD:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.documentAlternativeDownload = documentAlternativeDownload;

    var documentsDataSavedBeforeCreation = function documentsDataSavedBeforeCreation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DATA_SAVED_BEFORE_DOCUMENT_CREATION:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.documentsDataSavedBeforeCreation = documentsDataSavedBeforeCreation;
});
//# sourceMappingURL=metadata.js.map