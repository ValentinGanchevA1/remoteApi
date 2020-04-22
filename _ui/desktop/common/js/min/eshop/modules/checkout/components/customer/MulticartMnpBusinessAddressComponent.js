define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/core/components/forms", "eshop/modules/core/components/ui/Autocomplete"], function(e, r, t, l, o, n, a) {
    "use strict";

    function s(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), l.push.apply(l, r)
        }
        return l
    }

    function c(r) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t);
    var u = function(e) {
        babelHelpers.inherits(l, e);
        var t = c(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "getPropsForInput",
            value: function(e) {
                return {
                    name: e,
                    value: this.props.entry[e] || "",
                    errors: this.props.entry.errors && this.props.entry.errors[e],
                    onChange: this.onValueChange.bind(this)
                }
            }
        }, {
            key: "onValueChange",
            value: function(e) {
                this.props.changeCustomerMnpDataFormField(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var l = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? s(Object(l), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, l[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : s(Object(l)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                        })
                    }
                    return t
                }({}, e, {
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                }))
            }
        }, {
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "opl-form"
                }, r.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, r.default.createElement(n.LabeledPostalCodeInputWithErrors, babelHelpers.extends({
                    label: "Kod pocztowy"
                }, this.getPropsForInput("postalCode"), {
                    labelType: "floating"
                }))), r.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, r.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Miejscowość"
                }, this.getPropsForInput("city"), {
                    labelType: "floating"
                }))), r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, r.default.createElement("div", {
                    className: "u-spacing-l "
                }), r.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Ulica"
                }, this.getPropsForInput("street"), {
                    labelType: "floating"
                })), r.default.createElement("div", {
                    className: "u-spacing-l "
                })), r.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, r.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Nr domu"
                }, this.getPropsForInput("houseNumber"), {
                    labelType: "floating"
                }))), r.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, r.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Nr lokalu"
                }, this.getPropsForInput("flatNumber"), {
                    labelType: "floating"
                }))))
            }
        }]), l
    }(r.Component);
    e.default = u
});
//# sourceMappingURL=MulticartMnpBusinessAddressComponent.js.map