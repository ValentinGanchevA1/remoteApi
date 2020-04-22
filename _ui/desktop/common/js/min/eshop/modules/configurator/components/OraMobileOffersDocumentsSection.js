define(["exports", "react", "react-redux", "./OraDocumentsSectionPart", "eshop/modules/cart/selectors", "eshop/modules/core/components/ui/Expander"], function(e, s, t, o, r, c) {
    "use strict";

    function n(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), o = babelHelpers.interopRequireDefault(o);
    var a = function(e) {
            babelHelpers.inherits(r, e);
            var t = n(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    var e = this.props.regulationsList,
                        t = this.props.agreementsList,
                        r = this.props.pricesList,
                        n = this.props.depositList,
                        a = s.default.createElement("h2", {
                            className: "h4 opl-section__heading"
                        }, "Umowy, cenniki, regulaminy"),
                        l = s.default.createElement("div", {
                            className: "l-row"
                        }, s.default.createElement(c.Toggle, {
                            variant: "arrow",
                            header: a,
                            className: "l-col l-col-12 ",
                            triggerClassName: "opl-document__expander__trigger"
                        }, s.default.createElement("span", {
                            className: "opl-section__text-show"
                        }, "rozwiń sekcję Umowy, cenniki, regulaminy"), s.default.createElement("span", {
                            className: "opl-section__text-hide"
                        }, "zwiń sekcję Umowy, cenniki, regulaminy")));
                    return s.default.createElement(c.Expander, {
                        scrollToSelected: !1,
                        className: "l-page-row",
                        id: "doc_expander"
                    }, s.default.createElement(c.Section, {
                        header: l,
                        variant: "section",
                        className: "opl-document__expander",
                        contentClassName: "opl-document__expander__content",
                        id: "document-component-section"
                    }, s.default.createElement(c.Expander, {
                        scrollToSelected: !1,
                        className: "u-padding-left-l",
                        id: "doc_section_expander"
                    }, !("SIMFREE" === this.props.selectedOfferType || !t || 0 == t.length) && s.default.createElement(o.default, {
                        documentList: t,
                        header: "Umowy"
                    }), !("SIMFREE" === this.props.selectedOfferType) && !(!r || 0 == r.length) && s.default.createElement(o.default, {
                        documentList: r,
                        header: "Cenniki"
                    }), !(!e || 0 == e.length) && s.default.createElement(o.default, {
                        documentList: e,
                        header: "Regulaminy"
                    }), !("SIMFREE" === this.props.selectedOfferType) && !(!n || 0 == n.length || !this.props.getDepositCost) && s.default.createElement(o.default, {
                        documentList: n,
                        header: "Depozyty"
                    }))))
                }
            }]), r
        }(s.Component),
        l = (0, t.connect)(function(e) {
            return {
                getDepositCost: (0, r.getDepositCost)(e)
            }
        }, function() {
            return {}
        })(a);
    e.default = l
});
//# sourceMappingURL=OraMobileOffersDocumentsSection.js.map