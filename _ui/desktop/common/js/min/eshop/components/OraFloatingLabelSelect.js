define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(e, s, t, i) {
    "use strict";

    function r(l) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.OraFloatingLabelSelect = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    var a = function(e) {
        babelHelpers.inherits(l, e);
        var a = r(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).handleChange = t.handleChange.bind(babelHelpers.assertThisInitialized(t)), t.handleChangeIe8 = t.handleChangeIe8.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                this.props.floating && this.loadModule(), i.default.ifIe8 && document.getElementById(this.props.id).attachEvent("onchange", this.handleChangeIe8.bind(this))
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.props.isFeedbackParam && "undefined" != typeof Feedback && Feedback.showHideFeedback()
            }
        }, {
            key: "loadModule",
            value: function() {
                OPL.UI.loadModules(this.ref, [{
                    path: "core/modules/floating-label",
                    options: {}
                }])
            }
        }, {
            key: "handleChangeIe8",
            value: function(e) {
                var t = e.srcElement,
                    a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.onChange({
                    id: a,
                    name: l,
                    value: s
                })
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = this.props.index,
                    a = e.target,
                    l = a.id,
                    s = a.name,
                    i = a.value;
                void 0 !== t ? this.props.onChange({
                    id: l,
                    name: s,
                    value: i,
                    index: t
                }) : this.props.onChange({
                    id: l,
                    name: s,
                    value: i
                })
            }
        }, {
            key: "getError",
            value: function() {
                return this.props.errors && 0 < this.props.errors.length ? this.props.errors[0] : null
            }
        }, {
            key: "getSelectClasses",
            value: function() {
                var e = this.props.disabled || 1 === this.props.options.length ? " g-gray6-c" : "",
                    t = this.props.selected ? " is-not-empty success" : "",
                    a = this.props.isPrimary ? " opl-select-primary" : "";
                return "u-padding-right-xl is-not-empty " + this.props.className + t + a + e
            }
        }, {
            key: "getSelectArrowClasses",
            value: function() {
                return "o-select__arrow " + this.getBackgroundColorFromClassName()
            }
        }, {
            key: "getBackgroundColorFromClassName",
            value: function() {
                var e = this.props.className.match(/\S*-bg/g);
                return e && 1 === e.length ? e : "g-white1-bg"
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.getError.apply(this);
                return s.default.createElement("div", {
                    className: ""
                }, s.default.createElement("div", {
                    ref: function(e) {
                        return t.ref = e
                    },
                    className: "o-floating-label o-select"
                }, s.default.createElement("select", {
                    onChange: this.handleChange,
                    name: this.props.name,
                    value: this.props.selected,
                    id: this.props.id,
                    disabled: this.props.disabled || 1 === this.props.options.length,
                    "data-feedback-param": this.props.isFeedbackParam,
                    className: this.getSelectClasses.apply(this),
                    style: this.props.style,
                    "aria-describedby": "floating-label__placeholder_" + this.props.id
                }, this.props.withEmptyOption ? s.default.createElement("option", {
                    key: this.props.emptyOption.value,
                    value: this.props.emptyOption.value
                }, this.props.emptyOption.description) : null, this.props.options.map(function(e) {
                    return s.default.createElement("option", {
                        key: e.value,
                        value: e.value,
                        hidden: e.hidden,
                        disabled: e.disabled
                    }, e.description)
                })), !this.props.disabled && s.default.createElement("span", {
                    className: this.getSelectArrowClasses.apply(this)
                }), s.default.createElement("p", {
                    id: "floating-label__placeholder_" + this.props.id,
                    className: "label o-floating-label__placeholder u-padding-right-l"
                }, this.props.label)), e && s.default.createElement("div", {
                    id: this.props.id,
                    className: "opl-msg opl-msg--context u-margin-top-s opl-msg--" + e.level
                }, s.default.createElement("p", null, e.message)))
            }
        }]), l
    }(s.Component);
    (e.OraFloatingLabelSelect = a).propTypes = {
        id: t.default.string.isRequired,
        options: t.default.arrayOf(t.default.shape({
            value: t.default.oneOfType([t.default.string, t.default.number]),
            description: t.default.string
        })),
        selected: t.default.oneOfType([t.default.string, t.default.number]),
        disabled: t.default.bool,
        className: t.default.string,
        btnClassName: t.default.string,
        onChange: t.default.func,
        emptyOption: t.default.shape({
            value: t.default.string,
            description: t.default.string,
            hidden: t.default.bool,
            disabled: t.default.bool
        }),
        withEmptyOption: t.default.bool,
        singleDataText: t.default.string,
        floating: t.default.bool,
        isPrimary: t.default.bool
    }, a.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: !1,
        floating: !1,
        isPrimary: !0
    }
});
//# sourceMappingURL=OraFloatingLabelSelect.js.map