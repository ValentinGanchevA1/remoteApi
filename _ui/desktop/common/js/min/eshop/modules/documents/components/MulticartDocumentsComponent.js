define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Expander", "../actions/documents", "./MulticartDocumentsListComponent", "eshop/modules/cart/components/Utils", "../../checkout/selectors", "../selectors", "eshop/modules/checkout/components/serialNumber/documents/MulticartGoodsOrdersDocuments"], function(e, r, t, l, n, s, o, a, c, u) {
    "use strict";

    function i(r) {
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
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), s = babelHelpers.interopRequireDefault(s), u = babelHelpers.interopRequireDefault(u);
    var d = function(e) {
            babelHelpers.inherits(n, e);
            var t = i(n);

            function n() {
                return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
            }
            return babelHelpers.createClass(n, [{
                key: "componentWillMount",
                value: function() {
                    this.props.fetchDocuments()
                }
            }, {
                key: "renderLists",
                value: function() {
                    return this.props.lists.map(function(e) {
                        return r.default.createElement(s.default, {
                            key: e.id,
                            types: e.types,
                            title: e.name,
                            sectionKey: e.id
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return this.documentsAvailable() ? r.default.createElement(o.HideWhenCartIsEmpty, null, this.renderExpander()) : null
                }
            }, {
                key: "renderNotWWW",
                value: function() {
                    return r.default.createElement("div", {
                        className: "l-page-row"
                    }, r.default.createElement("div", {
                        className: "l-row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12"
                    }, r.default.createElement("div", {
                        className: "opl-console u-margin-l"
                    }, this.renderExpander()))))
                }
            }, {
                key: "renderExpander",
                value: function() {
                    var e = r.default.createElement("h2", {
                            className: "h4 opl-section__heading"
                        }, this.props.descriptions.title),
                        t = r.default.createElement("div", {
                            className: "l-row"
                        }, r.default.createElement(l.Toggle, {
                            variant: "arrow",
                            header: e,
                            className: "l-col l-col-12 ",
                            triggerClassName: "opl-document__expander__trigger"
                        }, r.default.createElement("span", {
                            className: "opl-section__text-show"
                        }, "rozwiń sekcję Umowy, cenniki, regulaminy"), r.default.createElement("span", {
                            className: "opl-section__text-hide"
                        }, "zwiń sekcję Umowy, cenniki, regulaminy")));
                    return r.default.createElement(l.Expander, {
                        scrollToSelected: !1,
                        className: "l-page-row",
                        id: "document-section"
                    }, r.default.createElement(l.Section, {
                        header: t,
                        variant: "section",
                        className: "opl-document__expander",
                        contentClassName: "opl-document__expander__content",
                        id: "document-component-section"
                    }, r.default.createElement(l.Expander, {
                        scrollToSelected: !1,
                        className: "u-padding-left-l",
                        id: "document-component-subexpander"
                    }, this.renderLists(), "POS" == this.props.channels.sales && r.default.createElement(u.default, this.props))))
                }
            }, {
                key: "documentsAvailable",
                value: function() {
                    return this.props.documentItems && 0 < this.props.documentItems.length
                }
            }]), n
        }(r.Component),
        p = (0, t.connect)(function(e) {
            return {
                currentStepId: (0, a.getCurrentStepId)(e),
                documentItems: (0, c.getDocumentItems)(e)
            }
        }, function(e) {
            return {
                fetchDocuments: function() {
                    return e((0, n.fetchDocuments)())
                }
            }
        })(d);
    e.default = p
});
//# sourceMappingURL=MulticartDocumentsComponent.js.map