define(["exports", "react", "prop-types", "jquery", "../../../components/OraCommonComponents", "../../core/components/hoc/ErrorRow", "./OraFloatingLabelWrapper"], function(e, l, t, o, a, i, n) {
    "use strict";

    function s(r) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var o = s(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = o.call(this, e)).state = {
                validationOnMount: !!e.value || !!e.errors && 0 < e.errors.length,
                isFocused: !1
            }, t
        }
        return babelHelpers.createClass(r, [{
            key: "componentWillUpdate",
            value: function(e) {
                this.state.validationOnMount && (!!e.errors ^ !!this.props.errors || this.props.value !== e.value) && this.setState({
                    validationOnMount: !1
                })
            }
        }, {
            key: "onFocus",
            value: function() {
                this.setState({
                    isFocused: !0
                })
            }
        }, {
            key: "onBlur",
            value: function(e) {
                this.props.onBlur && this.props.onBlur(e), this.setState({
                    isFocused: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props.customInputClass ? this.props.customInputClass : "",
                    o = "o-validation-mark",
                    r = !!this.props.errors;
                this.props.showValidation && (r || this.state.validationOnMount || !!this.props.value) && (!0 === this.props.valid ? (e += " success", o += " o-validation-mark--success ") : !1 !== this.props.valid || this.state.isFocused || (e += " error", o += "  o-validation-mark--error "));
                var s = this.props.showErrors && r;
                return l.default.createElement(i.default, {
                    showErrors: s,
                    errors: this.props.errors
                }, l.default.createElement(n.default, {
                    autoComplete: this.props.autocomplete,
                    maximumWidth: !0,
                    overrideClass: this.props.overrideClass
                }, l.default.createElement(a.OraInput, {
                    autocomplete: this.props.autocomplete,
                    autocompleteUrl: this.props.autocompleteUrl,
                    ref: function(e) {
                        return t.ref = e
                    },
                    type: "text",
                    id: this.props.id,
                    value: this.props.value,
                    required: this.props.required,
                    onChange: this.props.onChange,
                    disabled: this.props.autoSelect || this.props.disabled,
                    onBlur: this.onBlur.bind(this),
                    className: e,
                    onFocus: this.onFocus.bind(this),
                    focusOnMount: this.props.focusOnMount,
                    onPick: this.props.onPick,
                    browserAutocomplete: this.props.browserAutocomplete || this.props.id + "no_autocomplete",
                    name: this.props.name || this.props.id + "_no_autocomplete",
                    onKeyUp: this.props.onKeyUp
                }), this.props.showValidation && l.default.createElement("span", {
                    className: o
                }), l.default.createElement(a.OraLabel, {
                    htmlFor: this.props.id,
                    className: "label o-floating-label__placeholder o-floating-label__p-2"
                }, this.props.placeholder), this.props.children))
            }
        }]), r
    }(l.PureComponent);
    babelHelpers.defineProperty(r, "propTypes", {
        id: t.default.string,
        value: t.default.string,
        placeholder: t.default.string,
        required: t.default.bool,
        disabled: t.default.bool,
        autocomplete: t.default.bool,
        autocompleteUrl: t.default.string,
        onChange: t.default.func,
        onSelect: t.default.func,
        children: t.default.any,
        overrideClass: t.default.string,
        showValidation: t.default.bool,
        valid: t.default.bool,
        showErrors: t.default.bool,
        customInputClass: t.default.string,
        autoSelect: t.default.bool
    }), babelHelpers.defineProperty(r, "defaultProps", {
        required: !1,
        disabled: !1,
        autocomplete: !1,
        showValidation: !1,
        showErrors: !1,
        customInputClass: ""
    });
    var p = r;
    e.default = p
});
//# sourceMappingURL=InputWithFloatingLabel.js.map