define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "./CustomerVerificationProductLineComponent"], function(e, l, t, a, n, o, r, s, i, c) {
    "use strict";

    function u(n) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c);
    var d = function(e) {
            babelHelpers.inherits(n, e);
            var a = u(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = a.call(this, e)).state = {
                    checkboxAccepted: !1,
                    showPaymentWarning: !1
                }, t
            }
            return babelHelpers.createClass(n, [{
                key: "componentDidMount",
                value: function() {
                    OPL.UI.loadModules(document.getElementById("deposit_modal_tooltip"), [{
                        path: "core/modules/tooltips",
                        options: {
                            mouseoverMinWidth: 0,
                            triggerEvent: "mouseover"
                        }
                    }])
                }
            }, {
                key: "handleRepayment",
                value: function() {
                    this.state.checkboxAccepted ? this.props.handleRepayment() : this.setState({
                        showPaymentWarning: !0
                    })
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
                key: "onClose",
                value: function() {}
            }, {
                key: "handleValidateAndOrderItems",
                value: function() {
                    this.props.removeFromCartWithRedirect([window.location.protocol, "//", window.location.host, "/sklep"].join(""))
                }
            }, {
                key: "isPaytelAcceptable",
                value: function() {
                    return ("POS" == this.props.channels.sales || "AKA" == this.props.channels.sales) && this.props.errors.some(function(e) {
                        return !!e.paytelAcceptable
                    }) && this.allowDepositAcceptance()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return l.default.createElement("div", null, l.default.createElement(s.default, {
                        id: "customer-verification-with-deposit-modal",
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium"
                    }, l.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, l.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, l.default.createElement("div", {
                        className: "opl-msg opl-msg--context opl-msg--warn"
                    }, l.default.createElement("span", {
                        className: "u-font-bold u-font-large u-no-margin"
                    }, l.default.createElement("b", null, this.props.descriptions.verificationResultTitle))), l.default.createElement("div", {
                        hidden: !this.positiveVerificationSectionShouldBeVisible()
                    }, l.default.createElement("div", {
                        className: "u-padding-top-m u-padding-m"
                    }, l.default.createElement("span", {
                        className: "u-font-bold u-no-margin"
                    }, this.props.descriptions.positiveVerification)), l.default.createElement("div", {
                        className: "u-border u-padding-all-m"
                    }, l.default.createElement("span", {
                        className: "u-font-bold u-no-margin"
                    }, this.props.descriptions.productsWithOutDeposit), this.renderSeparatorLine(), this._renderPositiveVerificationSection())), l.default.createElement("div", {
                        "data-js-module": "core/modules/tooltips",
                        id: "deposit_modal_tooltip"
                    }, l.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, l.default.createElement("b", null, this.props.descriptions.depositRequired)), l.default.createElement("a", {
                        href: "#",
                        "data-type": "no-click",
                        "data-tooltip-trigger-event": "mouseover",
                        className: "o-tooltip__trigger"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--info g-icon--xs-s"
                    })), l.default.createElement("span", {
                        className: "o-tooltip__content"
                    }, " ", this.props.descriptions.tooltipDepositDefinition, " ")), l.default.createElement("div", {
                        className: "u-padding-top-m u-padding-m"
                    }, l.default.createElement("span", null, this.props.descriptions.depositAcceptanceInfo)), l.default.createElement("div", {
                        className: "u-border u-border--l g-brand2-bdrc u-padding-all-m"
                    }, l.default.createElement("table", {
                        role: "presentation"
                    }, l.default.createElement("tbody", null, l.default.createElement("tr", null, l.default.createElement("td", {
                        colspan: "4"
                    }, l.default.createElement("span", {
                        className: "u-font-bold u-no-margin"
                    }, this.props.descriptions.productsWithDeposit)), l.default.createElement("td", {
                        colspan: "1",
                        className: "u-text-right "
                    }, l.default.createElement("span", {
                        className: "u-font-bold u-no-margin"
                    }, this.props.descriptions.depositValue))))), this.renderSeparatorLine(), this._renderNegativeVerificationSection()))), l.default.createElement("div", {
                        className: "u-padding-all-s u-small-padding-s"
                    }, l.default.createElement("table", {
                        className: "u-table-fixed"
                    }, l.default.createElement("tbody", null, this.isPaytelAcceptable() && l.default.createElement("tr", {
                        className: ""
                    }, l.default.createElement("td", {
                        className: "",
                        colSpan: "2"
                    }, l.default.createElement("label", {
                        className: "o-checkbox opl-checkbox opl-checkbox--black"
                    }, l.default.createElement("input", {
                        type: "checkbox",
                        onChange: function(e) {
                            t.handleCheckboxChange(e)
                        }
                    }), " ", l.default.createElement("span", {
                        className: "o-ci"
                    }), l.default.createElement("span", {
                        className: "o-ci-label"
                    }, l.default.createElement("strong", null, "Kontynuuj zamówienie ze spłatą zadłużenia", " "))))), this.isPaytelAcceptable() && l.default.createElement("tr", {
                        className: ""
                    }, l.default.createElement("td", {
                        colSpan: "2",
                        className: "u-padding-top-s"
                    }, "Zaznacz powyższe i kontynuuj jeśli Klient zgadza się na dokonanie spłaty zadłużenia na miejscu przez terminal Paytel")), this.isPaytelAcceptable() && this.state.showPaymentWarning && l.default.createElement("tr", {
                        className: ""
                    }, l.default.createElement("td", {
                        className: "u-padding-top-l",
                        colSpan: "2"
                    }, l.default.createElement("div", {
                        className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c "
                    }, l.default.createElement("p", {
                        className: "o-icon-text__text u-font-bold opl-msg--error"
                    }, "Akceptacja jest wymagana do realizacji zamówienia."))))))), this._renderButtons()))
                }
            }, {
                key: "_renderPositiveVerificationSection",
                value: function() {
                    var t = this;
                    return l.default.createElement("div", null, this.props.cartData && this.props.cartData.entries ? this.props.cartData.entries.filter(function(e) {
                        return 0 === t.findDepositValueForBundle(e.bundleNo)
                    }).map(function(e, t) {
                        return l.default.createElement(c.default, {
                            entry: e
                        })
                    }) : null)
                }
            }, {
                key: "_renderNegativeVerificationSection",
                value: function() {
                    var a = this;
                    return l.default.createElement("div", null, this.props.cartData && this.props.cartData.entries ? this.props.cartData.entries.filter(function(e) {
                        return 0 !== a.findDepositValueForBundle(e.bundleNo)
                    }).map(function(e, t) {
                        return l.default.createElement(c.default, {
                            entry: e,
                            deposit: a.findDepositValueForBundle(e.bundleNo),
                            reasons: a.props.errors
                        })
                    }) : null, l.default.createElement("div", null, l.default.createElement("table", {
                        role: "presentation",
                        class: "opl-checkout-header u-small-padding-s"
                    }, l.default.createElement("tbody", null, l.default.createElement("tr", null, l.default.createElement("td", {
                        colspan: "4",
                        class: "u-small-no-padding-b"
                    }, l.default.createElement("div", {
                        className: "u-right"
                    }, l.default.createElement("span", null, l.default.createElement("b", null, "Razem: ")))), l.default.createElement("td", null, l.default.createElement("span", {
                        className: "u-right"
                    }, this.findDepositSum(), " zł")))))))
                }
            }, {
                key: "handleAccept",
                value: function() {
                    !this.isPaytelAcceptable() || this.state.checkboxAccepted ? this.isPaytelAcceptable() && this.state.checkboxAccepted ? this.props.handleRepaymentDeposit() : this.props.gotoNextCheckoutStep() : this.setState({
                        showPaymentWarning: !0
                    })
                }
            }, {
                key: "_renderButtons",
                value: function() {
                    return l.default.createElement("div", {
                        className: "opl-form__button-row"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-5 l-col-5  u-right",
                        hidden: !this.allowDepositAcceptance()
                    }, l.default.createElement(i.OraButton, {
                        className: "u-right",
                        onClick: this.handleAccept.bind(this)
                    }, this.props.descriptions.acceptDepositButton)), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-7 l-col-7 "
                    }, l.default.createElement("div", {
                        className: "opl-form__button-row__part"
                    }, l.default.createElement(i.OraButton, {
                        onClick: this.props.backToCartSummary.bind(this),
                        type: "secondary",
                        size: "small"
                    }, this.props.descriptions.backToCartButton), l.default.createElement(i.OraButton, {
                        onClick: this.handleValidateAndOrderItems.bind(this),
                        type: "secondary",
                        size: "small"
                    }, this.props.descriptions.cancelOrderButton)))))
                }
            }, {
                key: "renderSeparatorLine",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                    }, l.default.createElement("div", {
                        className: "o-separator u-no-padding-all"
                    }))
                }
            }, {
                key: "allowDepositAcceptance",
                value: function() {
                    var a = !0;
                    return this.props.errors && this.props.errors.map(function(e, t) {
                        e.allowDepositAcceptance || (a = !1)
                    }), a
                }
            }, {
                key: "positiveVerificationSectionShouldBeVisible",
                value: function() {
                    var t = this,
                        a = !1;
                    return this.props.cartData && this.props.cartData.entries && this.props.cartData.entries.filter(function(e) {
                        return 0 === t.findDepositValueForBundle(e.bundleNo)
                    }).map(function(e, t) {
                        a = !0
                    }), a
                }
            }, {
                key: "findDepositValueForBundle",
                value: function(a) {
                    var n = 0;
                    return this.props.errors && this.props.errors.map(function(e, t) {
                        e.bundleNo === a && e.deposit && (n = e.deposit)
                    }), n
                }
            }, {
                key: "findDepositSum",
                value: function() {
                    var a = 0,
                        n = [];
                    return this.props.errors && this.props.errors.map(function(e, t) {
                        e.deposit && !n[e.bundleNo] && (a += e.deposit, n[e.bundleNo] = e.deposit)
                    }), a
                }
            }]), n
        }(l.Component),
        p = (0, t.connect)(function(e) {
            return {
                errors: (0, a.getCVWithDepositErrors)(e),
                cartData: (0, n.getMiniCartData)(e)
            }
        }, function(t) {
            return {
                dismiss: function() {
                    return t(dismissCVWithDepositErrors())
                },
                backToCartSummary: function() {
                    return t((0, o.gotoCartSummary)())
                },
                doCheckoutStep: function() {
                    return t((0, o.doCheckoutStep)())
                },
                gotoNextCheckoutStep: function() {
                    return t((0, o.gotoNextCheckoutStep)())
                },
                removeFromCartWithRedirect: function(e) {
                    return t((0, r.removeFromCartWithRedirect)(e))
                },
                handleRepaymentDeposit: function() {
                    return t((0, r.handleRepaymentDeposit)())
                }
            }
        })(d);
    e.default = p
});
//# sourceMappingURL=CustomerVerificationWithDepositModal.js.map