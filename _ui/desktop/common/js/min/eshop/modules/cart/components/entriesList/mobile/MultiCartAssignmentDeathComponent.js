define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../../actions/cart", "../../../selectors", "../../../../checkout/actions/data", "../../../../checkout/components/MulticartValidationComponent"], function(e, t, n, a, r, o, c, i) {
    "use strict";

    function l(a) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), i = babelHelpers.interopRequireDefault(i);
    var s = function(e) {
            babelHelpers.inherits(a, e);
            var n = l(a);

            function a(e) {
                var t;
                return babelHelpers.classCallCheck(this, a), "ASSIGNMENT_DEATH" === (t = n.call(this, e)).props.entry.processType && t.props.registerNextStepCondition("certificateDeathConfirm"), t
            }
            return babelHelpers.createClass(a, [{
                key: "handleCheckboxChange",
                value: function(e) {
                    this.props.changeCertificateDeathConfimation(e.target.checked), this.props.checkAssignmentDeathBox()
                }
            }, {
                key: "render",
                value: function() {
                    return "ASSIGNMENT_DEATH" === this.props.entry.processType ? t.default.createElement("div", {
                        className: "opl-console--only u-margin-top"
                    }, t.default.createElement(i.default, {
                        messageType: "certificateDeathConfirm",
                        show: !this.props.deathCertificateConfirmed,
                        className: "u-padding-l"
                    }), t.default.createElement("div", {
                        className: "u-font-bold u-padding-all-l u-no-padding-top u-no-padding-left"
                    }, t.default.createElement("span", null, "Przed złożeniem zamówienia potwierdź akt zgonu")), t.default.createElement("div", {
                        className: "u-font-bold"
                    }, t.default.createElement("label", {
                        className: "o-checkbox opl-checkbox"
                    }, t.default.createElement("input", {
                        type: "checkbox",
                        checked: this.props.assignmentDeathCheckBoxState,
                        onChange: this.handleCheckboxChange.bind(this)
                    }), t.default.createElement("span", {
                        className: "o-ci"
                    }), t.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Potwierdzam akt zgonu")))) : null
                }
            }]), a
        }(t.Component),
        u = (0, n.connect)(function(e) {
            return {
                deathCertificateConfirmed: (0, o.getDeathCertificateConfirmed)(e)
            }
        }, function(t) {
            return {
                changeCertificateDeathConfimation: function(e) {
                    return t((0, r.changeCertificateDeathConfimation)(e))
                },
                registerNextStepCondition: function(e) {
                    return t((0, c.registerNextStepCondition)(e))
                }
            }
        })(s);
    e.default = u
});
//# sourceMappingURL=MultiCartAssignmentDeathComponent.js.map