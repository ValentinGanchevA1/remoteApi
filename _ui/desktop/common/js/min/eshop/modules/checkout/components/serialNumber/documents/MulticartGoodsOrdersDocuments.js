define(["exports", "react", "eshop/modules/core/components/ui/Expander", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app"], function(e, o, a, t, c, n, r) {
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
    }), e.default = e.MulticartGoodsOrdersDocumentsView = void 0;
    var s = function(e) {
        babelHelpers.inherits(r, e);
        var n = i(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = n.call(this, e)).state = {
                document: {
                    title: "Faktura",
                    description: "Wydrukuj fakturę"
                },
                sectionId: "expander-content-invoice",
                printInvoiceError: !1
            }, t
        }
        return babelHelpers.createClass(r, [{
            key: "handleClick",
            value: function(e) {
                e.preventDefault(), this.props.printInvoiceNumber()
            }
        }, {
            key: "renderDocumentLink",
            value: function() {
                return o.default.createElement("a", {
                    href: "#",
                    onClick: this.handleClick.bind(this)
                }, this.state.document.description)
            }
        }, {
            key: "render",
            value: function() {
                var e = o.default.createElement("h3", {
                        className: "h4 opl-section__heading"
                    }, this.state.document.title),
                    t = o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement(a.Toggle, {
                        variant: "arrow",
                        header: e,
                        className: "l-col l-col-12 ",
                        triggerClassName: "opl-document__section__trigger"
                    }, o.default.createElement("span", {
                        className: "opl-section__text-show"
                    }, "rozwiń sekcję Umowy"), o.default.createElement("span", {
                        className: "opl-section__text-hide"
                    }, "zwiń sekcję Umowy")));
                return o.default.createElement("div", {
                    hidden: !this.showInvoice()
                }, o.default.createElement(a.Section, {
                    header: t,
                    id: "document-component-subsection-expander-content-invoice",
                    variant: "section",
                    className: "opl-document__section",
                    contentClassName: "opl-document__section__content"
                }, o.default.createElement("div", {
                    className: "u-padding-left-l-xl u-small-no-padding-l u-padding-m"
                }, o.default.createElement("ul", null, o.default.createElement(c.OraLoader, {
                    loading: !1,
                    id: "print-documents-loader-invoice-1"
                }, this.renderDocumentLink())))))
            }
        }, {
            key: "showInvoice",
            value: function() {
                return this.props.reservation.paymentAndFiscalization && !!this.props.reservation.paymentAndFiscalization.isInvoicePresent && !!this.props.reservation.paymentStatus
            }
        }]), r
    }((o = babelHelpers.interopRequireDefault(o)).default.Component);
    e.MulticartGoodsOrdersDocumentsView = s;
    var l = (0, t.connect)(function(e) {
        return {
            reservation: (0, n.reservationData)(e)
        }
    }, function(e) {
        return {
            printInvoiceNumber: function() {
                return e((0, r.printInvoiceNumber)())
            }
        }
    })(s);
    e.default = l
});
//# sourceMappingURL=MulticartGoodsOrdersDocuments.js.map