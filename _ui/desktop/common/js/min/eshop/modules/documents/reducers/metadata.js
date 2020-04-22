define(["exports", "../actionTypes"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.documentsDataSavedBeforeCreation = e.documentAlternativeDownload = e.documentBeingDownloaded = e.fetchingUnfilteredInProgress = e.fetchingInProgress = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.fetchingInProgress = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.FETCH_DOCUMENTS_LOADING:
                return r.isLoading;
            default:
                return n
        }
    };
    e.fetchingUnfilteredInProgress = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.FETCH_DOCUMENTS_UNFILTERED_LOADING:
                return r.isLoading;
            default:
                return n
        }
    };
    e.documentBeingDownloaded = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.DOWNLOAD_DOCUMENT_START:
                return r.code;
            case o.DOCUMENT_READY_TO_DOWNLOAD:
            case o.DOWNLOAD_DOCUMENT_ERROR:
                return "";
            default:
                return n
        }
    };
    e.documentAlternativeDownload = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.CHANGE_ALTERNATIVE_DOCUMENT_DOWNLOAD_METHOD:
                return r.payload;
            default:
                return n
        }
    };
    e.documentsDataSavedBeforeCreation = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.DATA_SAVED_BEFORE_DOCUMENT_CREATION:
                return r.payload;
            default:
                return n
        }
    }
});
//# sourceMappingURL=metadata.js.map