define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../utils/utils"], function(e, s, a, t, r, o, l, i) {
    "use strict";

    function n(s) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartCustomerPersonalDetailsView = void 0, s = babelHelpers.interopRequireWildcard(s), a = babelHelpers.interopRequireDefault(a);
    var p = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getPropsForInput",
            value: function(e) {
                return {
                    name: e,
                    defaultValue: this.props[e] || "",
                    errors: this.props.errors && this.props.errors[e],
                    onBlur: this.props.changeCustomerDataFormField
                }
            }
        }, {
            key: "getInputValidationParams",
            value: function(e) {
                var t = (0, i.isFieldDisabledForValidation)(this.props, e),
                    r = (0, i.isFieldDisabled)(this.props, e),
                    s = {
                        disabled: r
                    },
                    a = void 0 === this.props.errors && null !== this.props[e] && 0 < this.props[e].length || this.props.errors && this.props.errors[e] && 0 === this.props.errors[e].length;
                return r && (t || a) || (s.valid = a), s
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, s.default.createElement(a.default, babelHelpers.extends({
                    key: "firstName"
                }, this.getPropsForInput("firstName"), {
                    label: this.props.descriptions.firstName
                }, this.getInputValidationParams("firstName"), {
                    labelType: "floating",
                    maxLength: "255",
                    virtualKeyboard: !0
                })), s.default.createElement(a.default, babelHelpers.extends({
                    key: "lastName"
                }, this.getPropsForInput("lastName"), {
                    label: this.props.descriptions.lastName
                }, this.getInputValidationParams("lastName"), {
                    labelType: "floating",
                    className: "u-spacing-top-l",
                    maxLength: "255",
                    virtualKeyboard: !0
                })))
            }
        }]), r
    }(s.Component);
    (e.MulticartCustomerPersonalDetailsView = p).propTypes = {
        firstName: s.PropTypes.string,
        lastName: s.PropTypes.string,
        readOnly: s.PropTypes.bool,
        requestCartCustomerData: s.PropTypes.func,
        changeCustomerDataFormField: s.PropTypes.func
    };
    var u = (0, t.connect)(r.getCustomerDataForm, {
        changeCustomerDataFormField: o.changeCustomerDataFormField,
        requestCartCustomerData: l.requestCartCustomerData
    })(p);
    e.default = u
});
//# sourceMappingURL=MulticartCustomerPersonalDetailsDataComponent.js.map