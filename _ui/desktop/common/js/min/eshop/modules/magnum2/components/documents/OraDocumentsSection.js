define(["exports", "react", "prop-types", "react-redux", "redux", "lodash", "../../../core/components/ui/Expander", "./OraDocumentsSectionCategory", "../FullScreenLoader", "../../actions/data", "../../../core/constants/RequestState"], function(e, s, t, n, r, a, c, o, l, u, i) {
    "use strict";

    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function p(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.OraOffersDocumentsExpander = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l);
    var f = function(e) {
        babelHelpers.inherits(n, e);
        var t = p(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "componentDidUpdate",
            value: function(e) {
                var t = e.durationList.requestState === i.RequestState.Waiting,
                    n = this.props.durationList.requestState === i.RequestState.Success;
                t && n && this.props.fetchDocuments()
            }
        }, {
            key: "getDocumentKeys",
            value: function() {
                return this.props.descriptions.sectionName.split(",").map(function(e) {
                    return e.trim()
                })
            }
        }, {
            key: "renderContent",
            value: function() {
                if (a.default.isEmpty(this.props.documents)) return s.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, this.props.descriptions.noDocuments);
                for (var e = [], t = this.getDocumentKeys(), n = 0; n < t.length; n++) {
                    var r = this.props.documents[t[n]];
                    r && e.push(s.default.createElement(o.default, {
                        documents: r,
                        header: t[n],
                        key: n
                    }))
                }
                return e
            }
        }, {
            key: "renderContentLoader",
            value: function() {
                return s.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, s.default.createElement("span", null, this.props.descriptions.fetchDocumentsMessage, "..."))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.descriptions,
                    t = s.default.createElement("h2", {
                        className: "h4 opl-section__heading"
                    }, e.sectionName),
                    n = s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement(c.Toggle, {
                        variant: "arrow",
                        header: t,
                        className: "l-col l-col-12 ",
                        triggerClassName: "opl-document__expander__trigger"
                    }, s.default.createElement("span", {
                        className: "opl-section__text-show"
                    }, e.expandSection, " ", e.sectionName), s.default.createElement("span", {
                        className: "opl-section__text-hide"
                    }, e.collapseSection, " ", e.sectionName))),
                    r = e.downloadDocumentMessage,
                    a = this.props.documentsMetadata && "" !== this.props.documentsMetadata.documentBeingDownloaded,
                    o = this.props.isLoading;
                return s.default.createElement("div", null, s.default.createElement(l.default, {
                    id: "document-all-loader-id",
                    showLoader: a,
                    message: r,
                    showClose: !0
                }), s.default.createElement(c.Expander, {
                    id: "doc_expander",
                    variant: "section",
                    sectionClassName: "opl-checkout-section",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h4 opl-checkout-section__heading"
                }, s.default.createElement(c.Section, {
                    header: n
                }, s.default.createElement("div", {
                    className: "l-page-row"
                }, o ? this.renderContentLoader() : this.renderContent()))))
            }
        }]), n
    }(s.Component);
    e.OraOffersDocumentsExpander = f, babelHelpers.defineProperty(f, "propTypes", {
        descriptions: t.default.shape({
            sectionName: t.default.string,
            noDocuments: t.default.string,
            expandSection: t.default.string,
            collapseSection: t.default.string,
            fetchDocumentsMessage: t.default.string,
            downloadDocumentMessage: t.default.string
        }),
        documents: t.default.oneOfType([t.default.array, t.default.object]),
        documentsMetadata: t.default.object,
        isLoading: t.default.bool,
        durationList: t.default.object,
        fetchDocuments: t.default.func
    });
    var m = (0, n.connect)(function(e) {
        return {
            documents: e.magnum.documents.list,
            documentsMetadata: e.documents.metadata,
            isLoading: e.magnum.documents.loading,
            durationList: e.magnum.durationList
        }
    }, function(e) {
        return function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }({}, (0, r.bindActionCreators)({
            fetchDocuments: u.fetchDocuments
        }, e))
    })(f);
    e.default = m
});
//# sourceMappingURL=OraDocumentsSection.js.map