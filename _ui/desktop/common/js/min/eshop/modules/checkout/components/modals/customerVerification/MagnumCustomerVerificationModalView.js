define(["exports", "react-redux", "react", "prop-types", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/components/modals/customerVerification/TableErrorSection"], function(e, t, i, a, l, r, n, o, s, c, u, d) {
    "use strict";

    function p(l) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d);
    var m = function(e) {
            babelHelpers.inherits(a, e);
            var t = p(a);

            function a(e) {
                var s;
                return babelHelpers.classCallCheck(this, a), s = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "renderMessagesForOffers", function() {
                    var e = s.props.errors[0].details.bundles;
                    return i.default.createElement("div", {
                        id: "messages-for-offers"
                    }, e.map(function(e, a) {
                        return i.default.createElement("div", {
                            key: a
                        }, i.default.createElement("div", {
                            key: a + "-title",
                            className: "u-padding-top"
                        }, i.default.createElement("div", {
                            className: "u-font-bold"
                        }, "Pakiet ", e.title), i.default.createElement("div", null, s.props.descriptions.loyaltyCaption || "Umowa na ", " ", e.loyaltyDuration, " miesiące")), i.default.createElement("div", {
                            key: a + "-reason"
                        }, e.entries.map(function(e, t) {
                            return this.renderMessage(e, a + "_" + t)
                        }, babelHelpers.assertThisInitialized(s))))
                    }))
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "renderMessage", function(e, t) {
                    var a = s.props.descriptions;
                    return i.default.createElement("div", null, i.default.createElement(d.default, {
                        key: "reasonSection_" + t,
                        reasonData: e,
                        descriptions: a
                    }), f())
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "renderInfo", function(e, t, a, l, r) {
                    var n = s.props.errors && s.props.errors.length ? s.props.errors[0].category : null,
                        o = s.props.errors && s.props.errors.length ? s.props.errors[0].details.depositSum : null;
                    return i.default.createElement("div", {
                        className: "u-padding-top-s"
                    }, i.default.createElement("div", {
                        className: "sg sg-section-header kss-title g-gray2-bg u-padding-top-s u-padding-bottom-s u-padding-left-s u-padding-right-s"
                    }, i.default.createElement("span", {
                        "data-js-module": "core/modules/tooltips",
                        "data-js-options": '{"side": "top", "trigger": "hover"}'
                    }, i.default.createElement("h5", {
                        className: "u-margin-s "
                    }, i.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, e), i.default.createElement("span", {
                        "data-js-module": "core/modules/tooltips",
                        id: "magnum-deposit-modal-help-tooltip"
                    }, i.default.createElement("a", {
                        href: "#",
                        "data-type": "no-click",
                        "data-tooltip-trigger-event": "mouseover",
                        className: "o-tooltip__trigger",
                        hidden: "CV_MAGNUM_WITH_DEPOSIT" !== n
                    }, i.default.createElement("span", {
                        className: "g-icon g-icon--info g-icon--xs"
                    })), i.default.createElement("span", {
                        className: "o-tooltip__content",
                        hidden: "true"
                    }, " ", r, " "))), !!t && i.default.createElement("div", {
                        className: "u-padding-s"
                    }, t))), i.default.createElement("div", {
                        className: "l-page-row u-padding-top-m u-no-padding-left  u-no-margin-left u-no-padding-right"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-9 u-left u-no-padding-left  u-no-margin-left"
                    }, i.default.createElement("span", null, a || "Produkty do zamówienia")), !!o && i.default.createElement("div", {
                        className: "l-col l-col-3 u-right u-no-padding-right u-text-right"
                    }, i.default.createElement("span", null, l || "Wysokość kaucji"))))
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "renderHeader", function() {
                    var e, t, a, l, r = s.props.errors && s.props.errors.length ? s.props.errors[0].category : "",
                        n = s.props.descriptions,
                        o = s.props.description;
                    switch (r) {
                        case "CV_MAGNUM":
                            e = " g-icon--error g-redf-c ", t = n.negativeVerificationResultTitle || "Zamówienie nie może być zrealizowane", o = n.negativeVerification, a = n.negativeVerificationHeader || "Negatywnie zweryfikowane", l = n.negativeVerificationHeaderLine2;
                            break;
                        case "CV_MAGNUM_WITH_DEPOSIT":
                            e = " g-icon--warn g-yellowf-c ", t = n.verificationResultTitle || "Wynik weryfikacji technicznej", a = n.depositRequiredVerification || "Wymagana kaucja";
                            break;
                        default:
                            e = "opl-msg opl-msg--error opl-msg--context", t = n.verificationResultTitle || "Wynik weryfikacji technicznej", a = "Dokonano weryfikacji technicznej", o = "Zweryfikowano"
                    }
                    return i.default.createElement("div", null, i.default.createElement("div", {
                        className: "u-font-standard u-margin-l opl-modal-title-space"
                    }, i.default.createElement("div", {
                        className: "u-small-hide o-icon-text g-icon  g-icon--before g-icon--m " + e
                    }, i.default.createElement("span", {
                        className: "h3 u-padding-top-s"
                    }, " ", t, " "))), s.renderInfo(a, l, o, n.depositValue, n.tooltipDepositDefinition))
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "renderDepositSum", function() {
                    var e = s.props.errors[0].details.depositSum;
                    if (e) return i.default.createElement("div", {
                        className: "l-page-row u-no-padding-right"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-large-right u-medium-right u-padding-top-m  u-no-padding-right"
                    }, i.default.createElement("div", {
                        className: "u-right u-font-bold u-text-right"
                    }, i.default.createElement("span", null, "Razem: "), i.default.createElement("span", {
                        className: "u-right u-padding-left-s g-brand1-c"
                    }, e, " ", s.state.currency))))
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "canAcceptVerification", function() {
                    var e = s.props.errors[0].category,
                        t = s.props.channels.sales;
                    return "CV_MAGNUM_WITH_DEPOSIT" === e && ("POS" === t || "AKA" === t)
                }), s.state = {
                    currency: "zł",
                    checkboxAccepted: !1,
                    showPaymentWarning: !1
                }, s
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    var e = document.getElementById("magnum-deposit-modal-help-tooltip");
                    e && OPL.UI.loadModules(e, [{
                        path: "core/modules/tooltips",
                        options: {
                            mouseoverMinWidth: 0,
                            triggerEvent: "mouseover"
                        }
                    }])
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.errors,
                        t = e && 0 < e.length && 0 < e[0].details.bundles.length;
                    return i.default.createElement(o.default, {
                        showClose: !0,
                        open: t,
                        onClose: this.props.dismiss,
                        size: "medium"
                    }, this.renderHeader(), t && i.default.createElement("div", null, f(), this.renderMessagesForOffers(), this.renderDepositSum(), this.renderPaytel(), this.renderFooterButtons()))
                }
            }, {
                key: "handleRepaymentButton",
                value: function() {
                    this.state.checkboxAccepted ? this.props.handleRepayment() : this.setState({
                        showPaymentWarning: !0
                    })
                }
            }, {
                key: "gotoNextCheckoutStepButton",
                value: function() {
                    this.isPaytelAcceptable() && !this.state.checkboxAccepted ? this.setState({
                        showPaymentWarning: !0
                    }) : this.props.gotoNextCheckoutStep()
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
                    return ("POS" == this.props.channels.sales || "AKA" == this.props.channels.sales) && this.props.errors.some(function(e) {
                        return !!e.paytelAcceptable
                    })
                }
            }, {
                key: "renderPaytel",
                value: function() {
                    var t = this;
                    return i.default.createElement("div", {
                        className: "u-padding-all-s u-small-padding-s"
                    }, i.default.createElement("table", {
                        className: "u-table-fixed"
                    }, i.default.createElement("tbody", null, this.isPaytelAcceptable() && i.default.createElement("tr", {
                        className: ""
                    }, i.default.createElement("td", {
                        className: "",
                        colSpan: "2"
                    }, i.default.createElement("label", {
                        className: "o-checkbox opl-checkbox opl-checkbox--black"
                    }, i.default.createElement("input", {
                        type: "checkbox",
                        onChange: function(e) {
                            t.handleCheckboxChange(e)
                        }
                    }), " ", i.default.createElement("span", {
                        className: "o-ci"
                    }), i.default.createElement("span", {
                        className: "o-ci-label"
                    }, i.default.createElement("strong", null, "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), this.isPaytelAcceptable() && i.default.createElement("tr", {
                        className: ""
                    }, i.default.createElement("td", {
                        colSpan: "2",
                        className: "u-padding-top-s"
                    }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), this.isPaytelAcceptable() && this.state.showPaymentWarning && i.default.createElement("tr", {
                        className: ""
                    }, i.default.createElement("td", {
                        className: "u-padding-top-l",
                        colSpan: "2"
                    }, i.default.createElement("div", {
                        className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                    }, i.default.createElement("p", {
                        className: "o-icon-text__text u-font-bold opl-msg--error"
                    }, "Akceptacja jest wymagana do realizacji zamówienia.")))))))
                }
            }, {
                key: "renderErrorInfo",
                value: function() {
                    var e = this.props.descriptions;
                    return i.default.createElement("div", null, i.default.createElement("div", {
                        className: "l-page-row u-padding-top-s u-no-padding-left  u-no-margin-left"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-large-left u-medium-left"
                    }, i.default.createElement("div", {
                        className: "u-left"
                    }, i.default.createElement("span", null, "descriptions.negativeVerificationHeader")))), i.default.createElement("div", {
                        className: "l-page-row u-no-padding-left  u-no-margin-left"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-large-left u-medium-left"
                    }, i.default.createElement("div", {
                        className: "u-left"
                    }, i.default.createElement("span", null, e.negativeVerificationHeaderLine2)))))
                }
            }, {
                key: "renderFooterButtons",
                value: function() {
                    var e = this.canAcceptVerification() || this.isPaytelAcceptable() ? "" : "large-offset-by-6";
                    return i.default.createElement("div", {
                        className: "l-row u-margin-top-l"
                    }, this.props.goToCartSummary ? [i.default.createElement("div", {
                        key: "back-to-cart",
                        className: "l-col l-col-small-3 l-col-medium-3 l-col-3 u-large-left u-medium-left"
                    }, i.default.createElement(n.OraButton, {
                        onClick: this.props.goToCartSummary.bind(this),
                        className: "u-w-100",
                        type: "secondary"
                    }, this.props.descriptions.backToCartButton || "Wróć do koszyka")), i.default.createElement("div", {
                        key: "operations",
                        className: "large-offset-by-3 l-col l-col-small-6 l-col-medium-4 l-col-6 u-small-padding-l u-large-right u-medium-right"
                    }, i.default.createElement("div", {
                        className: "l-row"
                    }, i.default.createElement("div", {
                        className: e + " l-col l-col-6"
                    }, i.default.createElement(n.OraButton, {
                        onClick: this.props.removeFromCartAndRedirect.bind(this),
                        className: "u-w-100 u-medium-left",
                        type: "secondary"
                    }, this.props.descriptions.cancelOrderButton || "Anuluj zamówienie")), i.default.createElement("div", {
                        className: "l-col l-col-6 "
                    }, this.canAcceptVerification() && i.default.createElement(n.OraButton, {
                        onClick: this.gotoNextCheckoutStepButton.bind(this),
                        className: "u-w-100 u-medium-right",
                        type: "primary"
                    }, this.props.descriptions.acceptDepositButton || "Akceptuję kaucję")), i.default.createElement("div", {
                        className: "l-col l-col-6 "
                    }, !this.canAcceptVerification() && this.isPaytelAcceptable() && i.default.createElement(n.OraButton, {
                        onClick: this.handleRepaymentButton.bind(this),
                        className: "u-w-100 u-medium-right",
                        type: "primary"
                    }, "Kontynuuj"))))] : null)
                }
            }]), a
        }(i.Component),
        f = function() {
            return i.default.createElement("div", {
                className: "o-separator u-padding-top"
            })
        },
        h = (0, t.connect)(function(e) {
            return {
                errors: (0, l.getCvMagnumCheckoutErrors)(e),
                noOfBundles: (0, s.getMaxBundleNo)(e),
                channel: (0, u.getSalesChannel)(e)
            }
        }, function(e) {
            return {
                gotoNextCheckoutStep: function() {
                    return e((0, r.gotoNextCheckoutStep)())
                },
                dismiss: function() {
                    return e((0, r.dismissCvErrors)())
                },
                goToCartSummary: function() {
                    return e((0, r.gotoPreviousCheckoutStep)())
                },
                removeFromCartAndRedirect: function() {
                    return e((0, c.removeFromCartAndRedirect)())
                },
                handleRepayment: function() {
                    return e((0, c.handleRepayment)())
                }
            }
        })(m);
    e.default = h
});
//# sourceMappingURL=MagnumCustomerVerificationModalView.js.map