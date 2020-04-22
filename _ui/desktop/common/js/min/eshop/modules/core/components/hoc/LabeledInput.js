define(["exports", "react", "./ErrorRow", "eshop/modules/core/utils/ui"], function(e, r, o, n) {
    "use strict";

    function t(s) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), o = babelHelpers.interopRequireDefault(o);
    var i = 0,
        a = function(e) {
            babelHelpers.inherits(s, e);
            var a = t(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = a.call(this, e)).OWN_PROPS = ["showMaskOnHover", "virtualKeyboard", "wrapperClassName", "virtualKeyboardWrapperClass", "onChange", "onBlur", "placeholder", "mask", "errors", "validateEmpty", "valid", "labelType", "labelClassName", "validationMark", "mapSuggestion", "markClassName", "locked", "labelElement", "customInputClass"], e.autoComplete ? (t.OWN_PROPS = t.OWN_PROPS.concat(["maxResults", "minLength", "mapSuggestion", "suggestions"]), t.id = e.id || "react-autocomplete-" + i++) : t.id = e.id, t.showValidationSign = !!e.defaultValue || !!e.value || !!e.errors && 0 < e.errors.length, t.forceHideSign = !1, t.state = {
                    switchState: !0
                }, t.handleVirtualKeyboardChange = t.handleVirtualKeyboardChange.bind(babelHelpers.assertThisInitialized(t)), t.virtualKeyboardId = "LabeledInput-virtualKeyboard" + i++, t
            }
            return babelHelpers.createClass(s, [{
                key: "componentDidMount",
                value: function() {
                    this.props.labelType && this.initUiLabel(this.props.labelType), this.props.labelType && (this.OWN_PROPS = this.OWN_PROPS.concat(["labelClassName", "label"])), this.props.mask && void 0 !== this.props.placeholder && this.initMaskModule(), this.isVirtualKeyboardEnabled() && this.initVirtualKeyboardModule(), this.props.autoComplete && (this.modulePromise = (0, n.loadModule)(this.refs.input, {
                        path: "common/modules/opl-autocomplete",
                        options: {
                            noWrap: !0,
                            arrayData: !0,
                            minLength: this.props.minLength,
                            maxResults: this.props.maxResults,
                            completecallback: this.onSelect.bind(this)
                        }
                    }), this.updateSuggestions())
                }
            }, {
                key: "handleVirtualKeyboardChange",
                value: function(e) {
                    var t = this.props.name;
                    this.handleValueChange("", t, e), this.handleBlur("", t, e), this.refs.input.focus()
                }
            }, {
                key: "initVirtualKeyboardModule",
                value: function() {
                    (0, n.loadModule)(this.refs.virtualKeyboardWrapper, {
                        path: "common/modules/opl-keyboard"
                    }), OPL.UI.on(OPL.UI.EVENTS.modules.virtualKeyboard.valueChanged, this.handleVirtualKeyboardChange, this.virtualKeyboardId)
                }
            }, {
                key: "isVirtualKeyboardEnabled",
                value: function() {
                    return this.props.virtualKeyboard && !(this.props.autoSelect || this.props.disabled)
                }
            }, {
                key: "updateSuggestions",
                value: function() {
                    if (this.props.suggestions) {
                        var e = this.props.suggestions.map(this.props.mapSuggestion);
                        OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.arrayData, e, this.id)
                    }
                }
            }, {
                key: "onSelect",
                value: function() {
                    if (this.props.onChange) {
                        this.showValidationSign = !0, this.forceHideSign = !1;
                        var e = this.refs.input,
                            t = e.id,
                            a = e.name,
                            s = e.value;
                        this.props.onChange({
                            id: t,
                            name: a,
                            value: s
                        })
                    }
                }
            }, {
                key: "switchState",
                value: function() {
                    this.setState({
                        switchState: !this.state.switchState
                    })
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    var t = !!e.errors && 0 < e.errors.length && !e.disabled,
                        a = !!this.props.errors && 0 < this.props.errors.length && !this.props.disabled;
                    t || !this.props.value && e.value ? this.showValidationSign = !0 : !a || t || void 0 === e.value || e.value || (this.showValidationSign = !1), this.props.value && !e.value && (this.showValidationSign = !1)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.labelType && !e.value && this.props.value && ("floating" !== this.props.labelType ? (OPL.UI.stopModules(this.refs.wrapper), OPL.UI.initModules(this.refs.wrapper)) : OPL.UI.fire(OPL.UI.EVENTS.modules.floatinglabels.checkvalue, this.refs.input, this.refs.wrapper)), this.props.autoComplete && e.suggestions !== this.props.suggestions && this.updateSuggestions()
                }
            }, {
                key: "initUiLabel",
                value: function(e) {
                    (0, n.loadModule)(this.refs.wrapper, {
                        path: "core/modules/" + e + "-label"
                    })
                }
            }, {
                key: "initMaskModule",
                value: function() {
                    (0, n.loadModule)(this.refs.input, {
                        path: "common/modules/opl-input-mask",
                        options: {
                            mask: this.props.mask,
                            placeholder: this.props.placeholder,
                            showMaskOnHover: this.props.showMaskOnHover
                        }
                    })
                }
            }, {
                key: "isVirtualKeyboardEnabled",
                value: function() {
                    return this.props.virtualKeyboard && !(this.props.autoSelect || this.props.disabled)
                }
            }, {
                key: "handleChangeEvent",
                value: function(e) {
                    this.handleValueChange(e.target.id, e.target.name, e.target.value)
                }
            }, {
                key: "handleValueChange",
                value: function(e, t, a) {
                    var s = this.props.index;
                    this.forceHideSign || this.switchState(), this.forceHideSign = !0, this.props.onChange && (void 0 !== s ? this.props.onChange({
                        id: e,
                        name: t,
                        value: a,
                        index: s
                    }) : this.props.onChange({
                        id: e,
                        name: t,
                        value: a
                    }))
                }
            }, {
                key: "clearFocus",
                value: function() {
                    this.refs.input.blur()
                }
            }, {
                key: "handleBlurEvent",
                value: function(e) {
                    this.handleBlur(e.target.id, e.target.name, e.target.value)
                }
            }, {
                key: "handleBlur",
                value: function(e, t, a) {
                    var s = this.props.index;
                    this.forceHideSign = !1, this.showValidationSign = !0, this.switchState(), this.props.onBlur && (void 0 !== s ? this.props.onBlur({
                        id: e,
                        name: t,
                        value: a,
                        index: s
                    }) : this.props.onBlur({
                        id: e,
                        name: t,
                        value: a
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = !this.forceHideSign && this.showValidationSign,
                        t = "",
                        a = (0, n.styleVariant)("o-", this.props.labelType, "-label ") + (this.props.wrapperClassName || ""),
                        s = (this.props.labelClassName || "") + (0, n.styleVariant)(" o-", this.props.labelType, "-label__placeholder"),
                        i = this.props.className || "",
                        l = (this.props.markClassName || "") + " o-validation-mark";
                    return this.props.labelType && (e || this.props.value) && (i += " is-not-empty"), this.props.validationMark && e && (!0 === this.props.valid ? (i += " success", l += " o-validation-mark--success") : (!1 === this.props.valid || this.props.validateEmpty && void 0 !== this.props.value && !this.props.value) && (i += " error", l += " o-validation-mark--error")), this.props.autoComplete && a.indexOf("opl-autocomplete") < 0 && (a += " opl-autocomplete"), this.isVirtualKeyboardEnabled() && (t += " opl-keyboard", i += " opl-keyboard-input-value"), r.default.createElement(o.default, {
                        showErrors: e,
                        errors: this.props.errors,
                        className: this.props.errorWrapperClassName || ""
                    }, r.default.createElement("div", {
                        className: t,
                        ref: "virtualKeyboardWrapper",
                        id: this.virtualKeyboardId
                    }, r.default.createElement("div", {
                        className: a,
                        ref: "wrapper"
                    }, r.default.createElement("div", {
                        className: "o-floating-label"
                    }, r.default.createElement("input", babelHelpers.extends({}, (0, n.excludeProps)(this.props, this.OWN_PROPS), {
                        autoComplete: "off",
                        ref: "input",
                        id: this.id,
                        className: i,
                        "aria-describedby": (this.props.id || this.props.label) + "__placeholder",
                        disabled: this.props.autoSelect || this.props.disabled,
                        onBlur: this.handleBlurEvent.bind(this),
                        onChange: this.handleChangeEvent.bind(this)
                    })), this.props.validationMark && r.default.createElement("span", {
                        className: l
                    }), this.props.labelType && r.default.createElement("p", {
                        id: (this.props.id || this.props.label) + "__placeholder",
                        className: s
                    }, this.props.label), !!this.props.labelElement && this.props.labelElement))))
                }
            }]), s
        }(r.Component);
    a.defaultProps = {
        labelType: "floating",
        labelClassName: "label",
        validationMark: !0,
        minLength: 3,
        mapSuggestion: function(e) {
            return {
                value: e,
                label: e
            }
        },
        showMaskOnHover: !1,
        virtualKeyboard: !1
    };
    var s = a;
    e.default = s
});
//# sourceMappingURL=LabeledInput.js.map