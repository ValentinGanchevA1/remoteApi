define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "eshop/modules/checkout/actions/data"], function(e, l, t, n, o, i, a, r, s) {
    "use strict";

    function c(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var i = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, i)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartInvoiceEmailAddressComponent = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o);
    var p = function(e) {
        babelHelpers.inherits(a, e);
        var i = c(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = i.call(this, e)).pickInvoiceEmail = t.pickInvoiceEmail.bind(babelHelpers.assertThisInitialized(t)), t.handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.handleBlur = t.handleBlur.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(a, [{
            key: "loadTooltipModule",
            value: function() {
                OPL.UI.loadModules(document.getElementById("tooltip-" + this.props.component), [{
                    path: "core/modules/tooltips",
                    options: {
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover",
                        maxWidth: 300
                    }
                }])
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.loadTooltipModule(), this.props.registerNextStepCondition("invoiceData"), this.props.changeInvoiceEmail(this.props.email)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                !this.props.contactEmailFilledAndValid && this.props.customerFinished && this.props.changeInvoiceEmailMapping("invoiceEmail")
            }
        }, {
            key: "pickInvoiceEmail",
            value: function(e) {
                var t = e.name;
                this.props.changeInvoiceEmailMapping(t), this.props.changeInvoiceEmail(""), "invoiceEmail" === t ? this.props.registerNextStepCondition("invoiceData") : this.props.unregisterNextStepCondition("invoiceData")
            }
        }, {
            key: "handleChange",
            value: function(e) {
                e.name;
                var t = e.value;
                this.props.changeInvoiceEmail(t, !1)
            }
        }, {
            key: "handleBlur",
            value: function(e) {
                var t = e.value;
                this.props.changeInvoiceEmail(t)
            }
        }, {
            key: "getDescription",
            value: function(e) {
                return this.props.descriptions[e] || {
                    sectionTitle: "Adres e-faktury",
                    sameAsAbove: "Taki sam jak podany powyżej",
                    otherEmail: "Inny adres email",
                    invoiceEmail: "E-mail dla e-faktury",
                    otherEmailToolip: "",
                    sameAsAboveTooltip: ""
                } [e]
            }
        }, {
            key: "render",
            value: function() {
                var e = "invoiceEmail" === this.props.invoiceEmailMapping,
                    t = "contactEmail" === this.props.invoiceEmailMapping,
                    i = 0 === this.props.errors.length,
                    a = !!this.props.invoiceEmail && 0 < this.props.invoiceEmail.length;
                return l.default.createElement("div", {
                    className: "opl-form u-padding-l u-left  l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-right u-no-padding-left"
                }, l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-top-l"
                }, l.default.createElement("h3", null, this.getDescription("sectionTitle"))), l.default.createElement("div", {
                    className: "u-padding u-no-padding-left",
                    id: "tooltip-" + this.props.component
                }, l.default.createElement("div", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                }, l.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, l.default.createElement("label", {
                    className: "o-radio opl-radio u-padding"
                }, l.default.createElement(n.OraInput, {
                    type: "radio",
                    id: "switch_right4",
                    name: "contactEmail",
                    value: "close",
                    checked: t,
                    onChange: this.pickInvoiceEmail,
                    disabled: !this.props.contactEmailFilledAndValid
                }), l.default.createElement("span", {
                    className: "o-ci"
                }), l.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("sameAsAbove"))), l.default.createElement("span", {
                    className: "u-padding-left u-left"
                }, this.getDescription("sameAsAboveTooltip") && l.default.createElement("span", null, l.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), l.default.createElement("p", {
                    className: "o-tooltip__content",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription("sameAsAboveTooltip")
                    }
                })))), l.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, l.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, l.default.createElement(n.OraInput, {
                    type: "radio",
                    id: "switch_left3",
                    name: "invoiceEmail",
                    value: "open",
                    checked: e,
                    onChange: this.pickInvoiceEmail
                }), l.default.createElement("span", {
                    className: "o-ci"
                }), l.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("otherEmail"))), l.default.createElement("span", {
                    className: "u-padding-left u-left"
                }, this.getDescription("otherEmailToolip") && l.default.createElement("span", null, l.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, l.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), l.default.createElement("p", {
                    className: "o-tooltip__content",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription("otherEmailToolip")
                    }
                })))))), l.default.createElement("div", {
                    className: "l-row u-small-padding-l u-padding-left u-padding-right"
                }, e && l.default.createElement("span", null, l.default.createElement(o.default, {
                    value: this.props.invoiceEmail,
                    name: "invoiceEmail",
                    label: this.getDescription("invoiceEmail"),
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    minLength: 3,
                    errors: this.props.errors,
                    validationMark: a,
                    valid: i
                }))))
            }
        }]), a
    }(l.Component);
    (e.MulticartInvoiceEmailAddressComponent = p).propTypes = {
        invoiceEmail: t.default.string
    };
    var d = (0, i.connect)(a.getInvoiceEmailForm, {
        changeInvoiceEmailMapping: r.changeInvoiceEmailMapping,
        changeInvoiceEmail: r.changeInvoiceEmail,
        registerNextStepCondition: s.registerNextStepCondition,
        unregisterNextStepCondition: s.unregisterNextStepCondition
    })(p);
    e.default = d
});
//# sourceMappingURL=MulticartInvoiceEmailAddressComponent.js.map