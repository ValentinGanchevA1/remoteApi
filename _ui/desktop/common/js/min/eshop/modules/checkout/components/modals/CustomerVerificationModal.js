define(["exports", "react-redux", "react", "prop-types", "../../selectors", "../../actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart"], function(e, t, o, a, l, n, r, s, c, i, d) {
    "use strict";

    function u(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i);
    var m = function(e) {
            babelHelpers.inherits(l, e);
            var a = u(l);

            function l(e) {
                var t;
                return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).state = {
                    shouldClose: !1,
                    checkboxAccepted: !1,
                    showPaymentWarning: !1
                }, t
            }
            return babelHelpers.createClass(l, [{
                key: "handleCancelOrder",
                value: function() {
                    this.props.removeFromCartAndRedirect()
                }
            }, {
                key: "handleRepayment",
                value: function() {
                    this.state.checkboxAccepted ? this.props.handleRepayment() : this.setState({
                        showPaymentWarning: !0
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    0 < this.props.noOfBundles && (null == e.noOfBundles || !e.noOfBundles) && this.setState({
                        shouldClose: !0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.state.shouldClose && (this.setState({
                        shouldClose: !1
                    }), this.props.action())
                }
            }, {
                key: "handleCheckboxChange",
                value: function(e) {
                    this.setState({
                        checkboxAccepted: e.target.checked
                    }), this.setState({
                        showPaymentWarning: !e.target.checked
                    })
                }
            }, {
                key: "isPaytelAcceptable",
                value: function() {
                    return ("POS" == this.props.channels.sales || "AKA" == this.props.channels.sales) && this.props.errors.every(function(e) {
                        return !!e.paytelAcceptable
                    })
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return o.default.createElement("span", null, "Dokonaliśmy weryfikacji Twojego zamówienia. ", o.default.createElement("br", null), "Niestety nie możemy go zrealizować. Zobacz szczegóły poniżej.")
                }
            }, {
                key: "renderSeparatorLine",
                value: function() {
                    return o.default.createElement("tr", null, o.default.createElement("td", {
                        className: "o-separator u-padding-top-l",
                        colSpan: "2"
                    }))
                }
            }, {
                key: "renderLoyaltyLength",
                value: function() {
                    switch (this.props.loyaltyLength) {
                        case 0:
                            return o.default.createElement("div", null, "czas nieokreślony");
                        case 12:
                            return o.default.createElement("div", null, "12 miesięcy");
                        case 24:
                            return o.default.createElement("div", null, "24 miesiące");
                        default:
                            return o.default.createElement("div", null, "inny")
                    }
                }
            }, {
                key: "renderErrorTable",
                value: function(e, t, a, l) {
                    var n = this,
                        r = "u-padding-top-l u-padding-right",
                        s = "u-font-bold u-padding-top-l u-padding-left";
                    return o.default.createElement("tbody", null, e.details.msisdn && o.default.createElement("tr", null, o.default.createElement("th", {
                        className: r
                    }, t.msisdnCaption || "Numer telefonu"), o.default.createElement("td", {
                        className: s
                    }, i.default.formatMsisdn(e.details.msisdn))), e.details.planName && o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("th", {
                        className: r
                    }, t.planCaption || "Plan taryfowy"), o.default.createElement("td", {
                        className: s
                    }, e.details.planName)), o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("th", {
                        className: r
                    }, t.loyaltyCaption || "Okres trwania umowy"), o.default.createElement("td", {
                        className: s
                    }, this.renderLoyaltyLength())), e.details.deviceName && [o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("th", {
                        className: r
                    }, t.deviceCaption || "Zamawiane urządzenie"), o.default.createElement("td", {
                        className: s
                    }, e.details.deviceName))], o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("td", {
                        className: "u-padding-top-l",
                        colSpan: "2"
                    }, o.default.createElement("strong", null, t.declineReasonCaption || "Powód odmowy:", " "), e.code || t.defaultMessage || "Brak dodatkowych informacji. [Default msg, set descriptions.defaultMessage]")), a && o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("td", {
                        className: "u-padding-top-l",
                        colSpan: "2"
                    }, o.default.createElement("label", {
                        className: "o-checkbox opl-checkbox opl-checkbox--black"
                    }, o.default.createElement("input", {
                        type: "checkbox",
                        onChange: function(e) {
                            n.handleCheckboxChange(e)
                        }
                    }), " ", o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, o.default.createElement("strong", null, t.continuePaytel || "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), a && o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("td", {
                        colSpan: "2",
                        className: "u-padding-top-s"
                    }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), a && l && o.default.createElement("tr", {
                        className: ""
                    }, o.default.createElement("td", {
                        className: "u-padding-top-l",
                        colSpan: "2"
                    }, o.default.createElement("div", {
                        className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                    }, o.default.createElement("p", {
                        className: "o-icon-text__text u-font-bold opl-msg--error"
                    }, "Akceptacja jest wymagana do realizacji zamówienia.")))), this.renderSeparatorLine())
                }
            }, {
                key: "render",
                value: function() {
                    var a = this;
                    return o.default.createElement(s.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.props.dismiss,
                        size: "narrow"
                    }, o.default.createElement("h2", {
                        className: "u-font-standard u-margin-l opl-modal-title-space"
                    }, o.default.createElement("span", {
                        className: "h3 u-small-hide"
                    }, this.props.descriptions.headerCaption ? this.props.descriptions.headerCaption.replace("{}", this.props.cartCode) : "Zamówienie nie może być zrealizowane"), o.default.createElement("span", {
                        className: "h1 u-large-hide u-medium-hide"
                    }, this.props.descriptions.headerCaption ? this.props.descriptions.headerCaption.replace("{}", this.props.cartCode) : "Zamówienie nie może być zrealizowane")), o.default.createElement("p", {
                        className: "u-margin-l"
                    }, this.props.descriptions.infoCaption || this.renderInfo()), o.default.createElement("h2", {
                        className: "u-font-standard u-no-margin"
                    }, o.default.createElement("span", {
                        className: "h4 u-small-hide"
                    }, this.props.descriptions.declineReasonHeader || "Negatywnie zweryfikowane:"), o.default.createElement("span", {
                        className: "h2 u-large-hide u-medium-hide"
                    }, this.props.descriptions.declineReasonHeader || "Negatywnie zweryfikowane:")), o.default.createElement("table", {
                        className: "u-table-fixed"
                    }, o.default.createElement("caption", {
                        className: "u-acc-hide"
                    }, o.default.createElement("h3", null, "Lista niedostępnych produktów")), this.props.errors.map(function(e, t) {
                        return a.renderErrorTable(e, a.props.descriptions, a.isPaytelAcceptable() && e.details.bundleNo === a.props.noOfBundles, a.state.showPaymentWarning)
                    })), o.default.createElement("div", {
                        className: "l-row u-margin-top-l"
                    }, this.props.action ? this.isPaytelAcceptable() ? [o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-5 l-col-5"
                    }, o.default.createElement(r.OraButton, {
                        onClick: this.handleCancelOrder.bind(this),
                        className: "u-w-100",
                        type: "secondary"
                    }, "Anuluj zamówienie")), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                    }, o.default.createElement(r.OraButton, {
                        onClick: this.props.action,
                        className: "u-w-100",
                        type: "secondary"
                    }, "Wróć do koszyka")), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-3 l-col-3 u-large-right u-medium-right"
                    }, o.default.createElement(r.OraButton, {
                        onClick: this.handleRepayment.bind(this),
                        className: "u-w-100",
                        type: "primary"
                    }, "Kontynuuj"))] : [o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-5 l-col-5 large-offset-by-3 medium-offset-by-3 u-small-padding-l"
                    }, o.default.createElement(r.OraButton, {
                        onClick: this.handleCancelOrder.bind(this),
                        className: "u-w-100",
                        type: "secondary"
                    }, "Anuluj zamówienie")), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-large-right u-medium-right"
                    }, o.default.createElement(r.OraButton, {
                        onClick: this.props.action,
                        className: "u-w-100",
                        type: "primary"
                    }, "Wróć do koszyka"))] : null))
                }
            }]), l
        }(o.Component),
        p = (0, t.connect)(function(e) {
            return {
                errors: (0, l.getCvCheckoutErrors)(e),
                noOfBundles: (0, c.getMaxBundleNo)(e),
                offer: (0, c.getCartFirstOffer)(e),
                offerDescription: (0, c.getCartFirstOffer)(e) ? (0, c.getCartFirstOffer)(e).planName : "",
                deviceDescription: (0, c.getCartDevices)(e) && (0, c.getCartDevices)(e)[0] ? (0, c.getCartDevices)(e)[0].description : null,
                device: (0, c.getCartDevices)(e),
                msisdn: (0, c.getOfferMsisdn)(e),
                loyaltyLength: (0, c.getOfferLoyaltyLength)(e),
                cartCode: (0, c.getCartCode)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, n.dismissCvErrors)())
                },
                action: function() {
                    return e((0, n.gotoPreviousCheckoutStep)())
                },
                removeFromCartAndRedirect: function() {
                    return e((0, d.removeFromCartAndRedirect)())
                },
                handleRepayment: function() {
                    return e((0, d.handleRepayment)())
                }
            }
        })(m);
    e.default = p
});
//# sourceMappingURL=CustomerVerificationModal.js.map