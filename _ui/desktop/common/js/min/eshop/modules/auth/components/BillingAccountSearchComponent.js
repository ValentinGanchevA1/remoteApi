define(["exports", "react", "../../magnum2/components/InputWithFloatingLabel"], function(e, t, i) {
    "use strict";

    function s(l) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), i = babelHelpers.interopRequireDefault(i);
    var n = function(e) {
        babelHelpers.inherits(l, e);
        var n = s(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = n.call(this, e)).state = {
                msisdn: ""
            }, t
        }
        return babelHelpers.createClass(l, [{
            key: "inputLabel",
            value: function() {
                return "Numer MSISDN"
            }
        }, {
            key: "onMsisdnFieldChange",
            value: function(e) {
                this.setState({
                    msisdn: e.value
                })
            }
        }, {
            key: "validateAccountCode",
            value: function() {
                this.getMsisdnInputVal();
                return !1
            }
        }, {
            key: "validateMsisdn",
            value: function() {
                var e = this.getMsisdnInputVal();
                return !e || !(9 != e.length || !jQuery.isNumeric(e))
            }
        }, {
            key: "getMsisdnInputVal",
            value: function() {
                return this.state && this.state.msisdn && this.state.msisdn.replace(/-/g, "")
            }
        }, {
            key: "findByInput",
            value: function(e) {
                e.stopPropagation(), this.validateMsisdn() ? this.props.getAccount(this.state.msisdn, !1) : this.validateAccountCode() && this.props.getAccountByCode(this.state.msisdn)
            }
        }, {
            key: "onKeyUp",
            value: function(e) {
                13 == e.keyCode && this.findByInput(e)
            }
        }, {
            key: "isInputFieldValid",
            value: function() {
                return this.validateMsisdn()
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("div", {
                    className: "u-padding-all-m"
                }, t.default.createElement("p", null, "Klient ma zbyt wiele kart SIM, żeby móc pobrać jego listę kont"), t.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 u-small-padding"
                }, t.default.createElement(i.default, {
                    id: "msisdn",
                    value: this.state.msisdn,
                    required: !0,
                    onChange: this.onMsisdnFieldChange.bind(this),
                    placeholder: this.inputLabel(),
                    focusOnMount: !0,
                    showValidation: !0,
                    showErrors: !0,
                    valid: this.isInputFieldValid(),
                    errors: !this.isInputFieldValid(),
                    onKeyUp: this.onKeyUp.bind(this),
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })), t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, t.default.createElement("button", {
                    id: "sms",
                    type: "submit",
                    onClick: this.findByInput.bind(this),
                    className: "o-btn opl-btn opl-btn--secondary u-w-100"
                }, "Wyszukaj"))))
            }
        }]), l
    }(t.Component);
    e.default = n
});
//# sourceMappingURL=BillingAccountSearchComponent.js.map