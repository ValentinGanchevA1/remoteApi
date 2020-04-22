define(["exports", "react", "react-redux", "../../actions/app", "../../selectors"], function(e, l, t, c, n) {
    "use strict";

    function i(l) {
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
                var c = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, c)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = function(e) {
            babelHelpers.inherits(c, e);
            var t = i(c);

            function c(e) {
                return babelHelpers.classCallCheck(this, c), t.call(this, e)
            }
            return babelHelpers.createClass(c, [{
                key: "showActiveContracts",
                value: function(e) {
                    var t = e.target.value,
                        c = this.getSelectedAccount();
                    t && "MOBILE" === c.type && c.accountCode === t && !this.props.accountContractsVisible && this.props.setBillingAccountContractsVisibility(!0)
                }
            }, {
                key: "renderBillingAccountSelectorOptions",
                value: function() {
                    var e = this.props.billingAccounts.map(function(e, t) {
                        return l.default.createElement("option", {
                            key: t,
                            "data-option": e.accountCode,
                            value: e.accountCode,
                            className: "g-white1-bg"
                        }, e.accountCode)
                    });
                    return e.unshift(l.default.createElement("option", {
                        key: -1,
                        value: null,
                        className: "g-white1-bg"
                    })), e
                }
            }, {
                key: "setSelectedBillingAccount",
                value: function(e) {
                    var t = e.target.value;
                    if (t) {
                        var c = this.getBillingAccountByCode(t);
                        this.props.setSelectedBillingAccount(c)
                    }
                }
            }, {
                key: "getBillingAccountByCode",
                value: function(t) {
                    return this.props.billingAccounts.find(function(e) {
                        return e.accountCode === t
                    })
                }
            }, {
                key: "getSelectedAccount",
                value: function() {
                    return "MOBILE" === this.props.accountType ? this.props.selectedMobile : this.props.selectedFix
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getSelectedAccount();
                    return l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-spacing"
                    }, l.default.createElement("div", {
                        "data-js-module": "core/modules/floating-label",
                        className: "o-floating-label o-select"
                    }, l.default.createElement("select", {
                        id: "select1",
                        name: "select",
                        "aria-describedby": "floating-label__placeholder1",
                        className: "opl-select-primary opl-input--size-m" + (e.accountCode ? " g-greenf-bg is-not-empty" : ""),
                        value: e.accountCode,
                        onChange: this.setSelectedBillingAccount.bind(this),
                        onClick: this.showActiveContracts.bind(this)
                    }, this.renderBillingAccountSelectorOptions.bind(this)()), l.default.createElement("span", {
                        className: "o-select__arrow"
                    }), l.default.createElement("p", {
                        id: "floating-label__placeholder1",
                        className: "label o-floating-label__placeholder g-gray6-c "
                    }, this.props.descriptions[this.props.accountType.toLowerCase() + "Label"])))
                }
            }]), c
        }((l = babelHelpers.interopRequireWildcard(l)).Component),
        a = (0, t.connect)(function(e) {
            return {
                selectedMobile: (0, n.getSelectedBillingAccountMobile)(e),
                selectedFix: (0, n.getSelectedBillingAccountFix)(e),
                accountContractsVisible: (0, n.areBillingAccountContractsVisible)(e),
                accountContracts: (0, n.getSelectedAccountContracts)(e)
            }
        }, {
            setSelectedBillingAccount: c.setSelectedBillingAccount,
            getActiveContracts: c.getActiveContracts,
            setBillingAccountContractsVisibility: c.setBillingAccountContractsVisibility
        })(o);
    e.default = a
});
//# sourceMappingURL=MulticartBillingAccountSelectorComponent.js.map