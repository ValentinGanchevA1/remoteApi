define(["exports", "../actionTypes", "../remoteApi", "../pickup/remoteApi", "eshop/modules/checkout/remoteApi", "eshop/modules/checkout/actions/data", "../selectors", "../../checkout/selectors"], function(e, r, d, i, o, l, f, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearAllLinks = e.getOrCreateDocumentPickup = e.getOrCreateDocument = e.documentReadyToDownload = e.documentDownloadStarted = e.documentsUnfilteredAreLoading = e.documentsAreLoading = e.fetchDocuments = void 0, r = babelHelpers.interopRequireWildcard(r), d = babelHelpers.interopRequireDefault(d), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o);
    e.fetchDocuments = function(e) {
        var n = 0 < arguments.length && void 0 !== e ? e : "";
        return function(t, e) {
            (0, f.getDocumentsFetchInProgress)(e()) || (t(c(!0)), t(a(!0)), d.default.getDocumentsForCart(n || (0, u.getLegalForm)(e())).then(function(e) {
                t({
                    type: r.FETCH_DOCUMENTS_FOR_CART,
                    payload: e
                }), t(c(!1))
            }).catch(function(e) {
                t({
                    type: r.FETCH_DOCUMENTS_ERROR,
                    payload: e
                })
            }), d.default.getDocumentsForCartUnfiltered(n || (0, u.getLegalForm)(e())).then(function(e) {
                t({
                    type: r.FETCH_DOCUMENTS_UNFILTERED_FOR_CART,
                    payload: e
                }), t(a(!1))
            }).catch(function(e) {
                t({
                    type: r.FETCH_DOCUMENTS_UNFILTERED_ERROR,
                    payload: e
                })
            }))
        }
    };
    var c = function(e) {
        return {
            type: r.FETCH_DOCUMENTS_LOADING,
            isLoading: e
        }
    };
    e.documentsAreLoading = c;
    var a = function(e) {
        return {
            type: r.FETCH_DOCUMENTS_UNFILTERED_LOADING,
            isLoading: e
        }
    };
    e.documentsUnfilteredAreLoading = a;

    function D(e) {
        return {
            type: r.DOWNLOAD_DOCUMENT_START,
            code: e
        }
    }
    e.documentDownloadStarted = D;

    function m(e, t) {
        return {
            type: r.DOCUMENT_READY_TO_DOWNLOAD,
            code: e,
            link: t
        }
    }
    e.documentReadyToDownload = m;
    e.getOrCreateDocument = function(c, a) {
        return function(t, e) {
            var n = (0, f.getAnyDocumentIsBeingLoaded)(e()),
                o = c + (a ? "_" + a : "");
            if (!n) {
                t(D(o));
                var u = {
                    documentCodes: c,
                    bundleNo: a
                };
                s(e, t), d.default.checkDocumentExistence({
                    documentCode: c,
                    bundleNo: a
                }).then(function(e) {
                    return !1 === e ? d.default.createDocument({
                        documentDefinitionCodes: c,
                        bundleNo: a,
                        factory: "MOBILE"
                    }) : e
                }).then(function() {
                    return d.default.findDocumentInLocalStorage(u)
                }).then(function(e) {
                    return e[c] ? e : d.default.getDocuments(u).then(function() {
                        return d.default.findDocumentInLocalStorage(u)
                    })
                }).then(function(e) {
                    t(m(o, e[c])), (0, l.openDocument)(e[c])
                }).catch(function(e) {
                    t({
                        type: r.DOWNLOAD_DOCUMENT_ERROR,
                        payload: e
                    })
                })
            }
        }
    };
    e.getOrCreateDocumentPickup = function(c, a) {
        return function(t, e) {
            var n = (0, f.getAnyDocumentIsBeingLoaded)(e()),
                o = c + (a ? "_" + a : "");
            if (!n) {
                t(D(o));
                var u = {
                    documentCodes: c,
                    bundleNo: a
                };
                s(e, t), i.default.checkDocumentExistence({
                    documentCode: c,
                    bundleNo: a
                }).then(function(e) {
                    return !1 === e ? i.default.createDocument({
                        documentDefinitionCodes: c,
                        bundleNo: a,
                        factory: "MOBILE"
                    }) : e
                }).then(function() {
                    return i.default.findDocumentInLocalStorage(u)
                }).then(function(e) {
                    return e[c] ? e : i.default.getDocuments(u).then(function() {
                        return i.default.findDocumentInLocalStorage(u)
                    })
                }).then(function(e) {
                    t(m(o, e[c])), (0, l.openDocument)(e[c])
                }).catch(function(e) {
                    t({
                        type: r.DOWNLOAD_DOCUMENT_ERROR,
                        payload: e
                    })
                })
            }
        }
    };

    function s(e, t) {
        if ((0, u.getDeliveryAndPaymentStep)(e()) && !1 === (0, f.isDocumentsDataSavedBeforeCreation)(e())) {
            var n = (0, u.getCheckoutData)(e());
            o.default.doSaveCheckoutData(n).then(function() {
                t({
                    type: r.DATA_SAVED_BEFORE_DOCUMENT_CREATION,
                    payload: !0
                })
            })
        }
    }
    e.clearAllLinks = function() {
        return {
            type: r.DOCUMENT_LINK_CLEAR
        }
    }
});
//# sourceMappingURL=documents.js.map