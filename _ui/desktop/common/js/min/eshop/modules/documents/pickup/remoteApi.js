define(["exports", "eshop/flux/utils/OraApiUtils", "jquery"], function(e, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n);

    function u(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var o = "/pickup_documents",
        r = (0, n.default)("#documentsComponentPk").val(),
        c = {
            getDocumentsForCart: function(e) {
                return r ? (0, t.get)(u(o + "/getDocumentsForCart/" + r), {
                    legalForm: e
                }) : new Promise(function(e) {
                    return e([])
                })
            },
            checkDocumentExistence: function(e) {
                return (0, t.get)(u(o + "/checkDocumentExistence"), e)
            },
            createDocument: function(e) {
                return (0, t.get)(u(o + "/createDocuments"), e).then(function() {
                    return (0, t.poll)(u(o + "/createDocumentAsyncResult"), e, function(e) {
                        return !0 === e
                    })
                })
            },
            findDocumentInLocalStorage: function(e) {
                return (0, t.get)(u(o + "/findDocumentInLocalStorage"), e)
            },
            getDocuments: function(e) {
                return (0, t.get)(u(o + "/getDocuments"), e).then(function() {
                    return (0, t.poll)(u(o + "/getDocumentAsyncResult"), e, function(e) {
                        return !0 === e
                    })
                })
            },
            removeDocuments: function() {
                return (0, t.get)("/documents/removeDynamicDocument")
            },
            getDocumentsToMerge: function() {
                return (0, t.get)(u(o + "/to-merge"))
            }
        };
    e.default = c
});
//# sourceMappingURL=remoteApi.js.map