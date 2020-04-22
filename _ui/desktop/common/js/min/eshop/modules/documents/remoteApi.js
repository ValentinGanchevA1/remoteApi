define(["exports", "eshop/flux/utils/OraApiUtils", "../checkout/actions/data", "jquery"], function(e, t, n, r) {
    "use strict";

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r);

    function u(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var i = "/documents",
        f = (0, r.default)("#documentsComponentPk").val(),
        l = {
            getDocumentsForCart: function(e) {
                return f ? (0, t.get)(u(i + "/getDocumentsForCart/" + f), {
                    legalForm: e
                }) : new Promise(function(e) {
                    return e([])
                })
            },
            getDocumentsForCartUnfiltered: function(e) {
                return (0, t.get)(u(i + "/getDocumentsForCartUnfiltered/" + f), {
                    legalForm: e
                })
            },
            checkDocumentExistence: function(e) {
                return (0, t.get)(u(i + "/checkDocumentExistence"), e)
            },
            createDocument: function(e) {
                return (0, t.get)(u(i + "/createDocuments"), e).then(function() {
                    return (0, t.poll)(u(i + "/createDocumentAsyncResult"), null, function(e) {
                        return !0 === e
                    })
                })
            },
            findDocumentInLocalStorage: function(e) {
                return (0, t.get)(u(i + "/findDocumentInLocalStorage"), e)
            },
            getDocuments: function(e) {
                return (0, t.get)(u(i + "/getDocuments"), e).then(function() {
                    return (0, t.poll)(u(i + "/getDocumentAsyncResult"), e, function(e) {
                        return !0 === e
                    })
                })
            },
            removeDocuments: function() {
                return (0, t.get)("/documents/removeDynamicDocument")
            },
            getDocumentsToMerge: function() {
                return (0, t.get)(u(i + "/to-merge"))
            },
            downloadMergedDocuments: function() {
                return (0, n.downloadFile)(u(i + "/mergeDocuments/" + f))
            },
            prepareDocumentsToMerge: function(e) {
                return (0, t.get)(u(i + "/prepareToMerge"), e).then(function() {
                    return (0, t.poll)(u(i + "/readyToMerge"), e, function(e) {
                        return !0 === e
                    })
                })
            },
            createMergeDocumentUrl: function(e) {
                return "/documents/merge?bundleNo=".concat(e)
            },
            prepareDocumentsToZip: function(e) {
                return (0, t.get)(u(i + "/prepareToZip"), c({}, e, {
                    componentId: f
                })).then(function() {
                    return (0, t.poll)(u(i + "/readyToZip"), c({}, e, {
                        componentId: f
                    }), function(e) {
                        return !0 === e
                    })
                })
            },
            getZipDocumentsUrl: function(e) {
                return "/documents/zip?componentId=".concat(f, "&legalForm=").concat(e.legalForm)
            }
        };
    e.default = l
});
//# sourceMappingURL=remoteApi.js.map