define(["exports", "Reselect", "./actionTypes"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createGetDocumentsForTypesSelector = e.createGetDocumentLinkForCodeSelector = e.createIsDocumentBeingDownloadedSelector = e.isDocumentsDataSavedBeforeCreation = e.getAnyDocumentIsBeingLoaded = e.isNewAgreementInDocuments = e.getDocumentBeingLoaded = e.getDocumentsFetchInProgress = e.getDocumentLinks = e.getDocumentItemsUnfiltered = e.getDocumentItems = e.getMetadata = e.getDocumentsState = void 0, n = babelHelpers.interopRequireWildcard(n);

    function r(e) {
        return e.documents
    }
    e.getDocumentsState = r;
    var o = (0, t.createSelector)(r, function(e) {
        return e.metadata
    });
    e.getMetadata = o;
    var c = (0, t.createSelector)(r, function(e) {
        return e.items
    });
    e.getDocumentItems = c;
    var u = (0, t.createSelector)(r, function(e) {
        return e.itemsUnfiltered
    });
    e.getDocumentItemsUnfiltered = u;
    var i = (0, t.createSelector)(r, function(e) {
        return e.links
    });
    e.getDocumentLinks = i;
    var a = (0, t.createSelector)(o, function(e) {
        return e.fetchingInProgress
    });
    e.getDocumentsFetchInProgress = a;
    var d = (0, t.createSelector)(o, function(e) {
        return e.documentBeingDownloaded
    });
    e.getDocumentBeingLoaded = d;
    var s = (0, t.createSelector)(u, function(e) {
        return e.some(function(e) {
            return "AGR" === e.documentType || "ANX" === e.documentType
        })
    });
    e.isNewAgreementInDocuments = s;
    var m = (0, t.createSelector)(o, function(e) {
        return !!e.documentBeingDownloaded
    });
    e.getAnyDocumentIsBeingLoaded = m;
    var l = (0, t.createSelector)(o, function(e) {
        return e.documentsDataSavedBeforeCreation
    });
    e.isDocumentsDataSavedBeforeCreation = l;
    e.createIsDocumentBeingDownloadedSelector = function() {
        return (0, t.createSelector)([d, function(e, t) {
            return t.documentCode + (t.bundleNo ? "_" + t.bundleNo : "")
        }], function(e, t) {
            return e === t
        })
    };
    e.createGetDocumentLinkForCodeSelector = function() {
        return (0, t.createSelector)([i, function(e, t) {
            return t.documentCode + (t.bundleNo ? "_" + t.bundleNo : "")
        }], function(e, t) {
            return e[t]
        })
    };
    e.createGetDocumentsForTypesSelector = function() {
        return (0, t.createSelector)([c, function(e, t) {
            return t.types
        }], function() {
            var t = 1 < arguments.length ? arguments[1] : void 0;
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []).filter(function(e) {
                return -1 !== t.indexOf(e.documentType)
            }).sort(function(e, t) {
                return e.priority === t.priority ? e.documentDescription.localeCompare(t.documentDescription) : e.priority - t.priority
            })
        })
    }
});
//# sourceMappingURL=selectors.js.map