define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils"], function(e, s, n, o) {
    "use strict";

    function i(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o);
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = i(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "componentWillMount",
            value: function() {
                this.id = "msisdn-verification-row" + (this.props.index || 0 === this.props.index ? "-" + this.props.index : "")
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.parentId && !document.getElementById(this.id) || (OPL.UI.loadModules(document.getElementById(this.id), {
                    path: "core/modules/loader",
                    options: '{"fadeDuration":120}'
                }), OPL.UI.loadModules(document.getElementById("msisdnInput"), {
                    path: "common/modules/opl-input-mask",
                    options: {
                        mask: "999999999"
                    }
                }))
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return s.default.createElement("div", {
                    id: "msisdn-verification-row",
                    "data-js-module": "core/modules/loader"
                }, s.default.createElement(n.OraLoader, {
                    className: "l-row",
                    loading: this.props.isMsisdnChecking,
                    id: "msisdn-verification-loader-component",
                    parentId: "msisdn-verification-row",
                    size: "m"
                }, s.default.createElement("div", {
                    className: "opl-console"
                }, s.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, s.default.createElement("div", {
                    className: "l-row u-spacing-bottom-l"
                }, s.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
                }, s.default.createElement("label", {
                    htmlFor: "msisdnInput"
                }, this.props.inputFieldDesc)), s.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
                }, s.default.createElement("input", {
                    type: "text",
                    id: "msisdnInput",
                    role: "alert",
                    ref: function(e) {
                        return t.inputRef = e
                    },
                    autoFocus: this.inputRef && !this.inputRef.value && (!o.default.isMnpApplication(this.props.processType) || this.props.isCustomerSelected),
                    defaultValue: "undefined" != this.props.msisdn && this.props.msisdn ? this.props.msisdn : "",
                    onBlur: this.props.handleMsisdnChange,
                    className: this.props.valid ? "" : "error"
                }), this.props.valid ? null : s.default.createElement(n.OraMessage, {
                    type: "error",
                    text: this.props.invalidNumberDesc
                }), this.props.showMsisdnVerificationWarning && s.default.createElement(n.OraMessage, {
                    type: "error",
                    text: "Najpierw zweryfikuj numer"
                })), s.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-1"
                }, s.default.createElement(n.OraButton, {
                    className: "u-w-100 opl-console-button--green",
                    id: "msisdn-verification-component-submit-button",
                    onClick: this.props.validate
                }, "Dalej")))))))
            }
        }]), l
    }(s.default.Component);
    e.default = t
});
//# sourceMappingURL=MsisdnVerificationComponent.js.map