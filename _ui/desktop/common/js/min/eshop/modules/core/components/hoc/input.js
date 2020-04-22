define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(e, u, d, c) {
    "use strict";

    function r(a, e) {
        var t = Object.keys(a);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(a);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable
            })), t.push.apply(t, r)
        }
        return t
    }

    function h(a) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(a, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return a
    }

    function f(r) {
        return function() {
            var e, a = babelHelpers.getPrototypeOf(r);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(a, arguments, t)
            } else e = a.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mapDisplayValue = e.maskField = e.addLabelToInputKna = e.addLabelToInputIdNumber = e.addLabelToInputCensoredIdNumber = e.addLabelToInputPesel = e.addLabelToInputNip = e.addLabelToInputPhone = e.addLabelToInput = e.enhanceInput = e.appendErrorsNotTimeouted = e.appendErrors = void 0, u = babelHelpers.interopRequireWildcard(u), d = babelHelpers.interopRequireDefault(d);
    e.appendErrors = function(l) {
        return function(r) {
            var e = function(e) {
                babelHelpers.inherits(t, e);
                var a = f(t);

                function t() {
                    return babelHelpers.classCallCheck(this, t), a.apply(this, arguments)
                }
                return babelHelpers.createClass(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.state = {
                            waiting: !1
                        }
                    }
                }, {
                    key: "delay",
                    value: function() {
                        var e = this;
                        this.timeout = setTimeout(function() {
                            e.setState({
                                waiting: !1
                            })
                        }, 2e3)
                    }
                }, {
                    key: "handleChange",
                    value: function(e) {
                        this.setState({
                            waiting: !0
                        }), this.props.onChange(e), clearTimeout(this.timeout), this.delay()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement("div", null, u.default.createElement(r, babelHelpers.extends({}, (0, c.excludeProps)(this.props, ["errors"]), {
                            onChange: this.handleChange.bind(this)
                        })), !this.state.waiting && this.props.errors && this.props.errors.slice(0, 1).map(l))
                    }
                }]), t
            }(u.Component);
            return e.displayName = "WithErrors(".concat(r.displayName || r.name, ")"), e.propTypes = h({}, r.propTypes, {
                errors: d.default.array
            }), e.defaultProps = h({}, r.defaultProps), e
        }
    };
    e.appendErrorsNotTimeouted = function(r) {
        return function(a) {
            function e(e) {
                return u.default.createElement("div", null, u.default.createElement(a, (0, c.excludeProps)(e, t)), e.errors ? e.errors.map(r) : null)
            }
            var t = ["errors"];
            return e.displayName = "WithErrors(".concat(a.displayName || a.name, ")"), e.propTypes = h({}, a.propTypes, {
                errors: d.default.array
            }), e.defaultProps = h({}, a.defaultProps), e
        }
    };

    function a(e) {
        var s = e.labelType,
            o = e.validationMark,
            p = e.mask,
            i = e.placeholder;
        return function(l) {
            var n = ["wrapperClassName"];
            s && (n = n.concat(["labelClassName", "label"])), o && (n = n.concat(["markClassName", "valid"]));
            var e = function(e) {
                babelHelpers.inherits(t, e);
                var a = f(t);

                function t() {
                    return babelHelpers.classCallCheck(this, t), a.apply(this, arguments)
                }
                return babelHelpers.createClass(t, [{
                    key: "componentDidMount",
                    value: function() {
                        s && this.initUiLabel(s)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        s && !e.value && this.props.value && ("floating" !== s ? (OPL.UI.stopModules(this.refs.wrapper), OPL.UI.initModules(this.refs.wrapper)) : OPL.UI.fire(OPL.UI.EVENTS.modules.floatinglabels.checkvalue, this.refs.input, this.refs.wrapper))
                    }
                }, {
                    key: "initUiLabel",
                    value: function(e) {
                        (0, c.loadModule)(this.refs.wrapper, {
                            path: "core/modules/" + e + "-label"
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (this.props.wrapperClassName || "") + (0, c.styleVariant)(" o-", s, "-label"),
                            a = (this.props.labelClassName || "") + (0, c.styleVariant)(" o-", s, "-label__placeholder"),
                            t = (this.props.markClassName || "") + " o-validation-mark",
                            r = this.props.className || "";
                        return s && this.props.value && (r += " is-not-empty"), o && (this.props.value || this.props.validateEmpty) && (!0 === this.props.valid ? (r += " success", t += " o-validation-mark--success") : (!1 === this.props.valid || this.props.validateEmpty && !this.props.value) && (r += " error", t += " o-validation-mark--error")), u.default.createElement("div", {
                            className: e,
                            ref: "wrapper"
                        }, u.default.createElement(l, babelHelpers.extends({}, (0, c.excludeProps)(this.props, n), {
                            className: r,
                            ref: "input",
                            autoComplete: "off",
                            "aria-describedby": this.props.id + "__placeholder",
                            "data-js-module": p && i ? "common/modules/opl-input-mask" : "",
                            "data-js-options": p && i ? '{"mask":"' + p + '", "placeholder":"' + i + '"}' : ""
                        })), o && u.default.createElement("span", {
                            className: t
                        }), s && u.default.createElement("p", {
                            id: this.props.id + "__placeholder",
                            className: a
                        }, this.props.label))
                    }
                }]), t
            }(u.Component);
            return e.displayName = "Enhanced(".concat(l.displayName || l.name, ")"), e.propTypes = h({}, l.propTypes, {
                wrapperClassName: d.default.string
            }, s && {
                labelClassName: d.default.string,
                label: d.default.string
            }, {}, o && {
                markClassName: d.default.string,
                valid: d.default.bool
            }), e.defaultProps = h({}, l.defaultProps, {
                wrapperClassName: ""
            }, s && {
                labelClassName: "label"
            }), e
        }
    }
    var t = (e.enhanceInput = a)({
        labelType: "floating",
        validationMark: !0
    });
    e.addLabelToInput = t;
    var l = a({
        labelType: "floating",
        validationMark: !0,
        mask: "(+48) 999-999-999",
        placeholder: "(+48) ___-___-___"
    });
    e.addLabelToInputPhone = l;
    var n = a({
        labelType: "floating",
        validationMark: !0,
        mask: "(999-999-99-99",
        placeholder: "___-___-__-__"
    });
    e.addLabelToInputNip = n;
    var s = a({
        labelType: "floating",
        validationMark: !0,
        mask: "99999999999",
        placeholder: "___________"
    });
    e.addLabelToInputPesel = s;
    var o = a({
        labelType: "floating",
        validationMark: !0,
        mask: "*********",
        placeholder: "______"
    });
    e.addLabelToInputCensoredIdNumber = o;
    var p = a({
        labelType: "floating",
        validationMark: !0,
        mask: "aaa999999",
        placeholder: "______"
    });
    e.addLabelToInputIdNumber = p;
    var i = a({
        labelType: "floating",
        validationMark: !0,
        mask: "99-999-99-99",
        placeholder: "__-___-__-__"
    });
    e.addLabelToInputKna = i;
    e.maskField = function(l) {
        return function(r) {
            var e = function(e) {
                babelHelpers.inherits(t, e);
                var a = f(t);

                function t() {
                    return babelHelpers.classCallCheck(this, t), a.apply(this, arguments)
                }
                return babelHelpers.createClass(t, [{
                    key: "handleChange",
                    value: function(e) {
                        l(e.value) && this.props.onChange(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement(r, babelHelpers.extends({}, this.props, {
                            onChange: this.handleChange.bind(this)
                        }))
                    }
                }]), t
            }(u.Component);
            return e.displayName = "MaskedDisplay(".concat(r.displayName || r.name, ")"), e.propTypes = r.propTypes, e
        }
    };
    e.mapDisplayValue = function(e) {
        var l = e.mapToDisplay,
            n = e.mapToValue;
        return function(r) {
            var e = function(e) {
                babelHelpers.inherits(t, e);
                var a = f(t);

                function t() {
                    return babelHelpers.classCallCheck(this, t), a.apply(this, arguments)
                }
                return babelHelpers.createClass(t, [{
                    key: "componentWillMount",
                    value: function() {
                        this.setState({
                            displayValue: l(this.props.value)
                        })
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        var a = e.value;
                        n(this.state.displayValue) !== a && this.setState({
                            displayValue: l(a)
                        })
                    }
                }, {
                    key: "handleChange",
                    value: function(e) {
                        this.setState({
                            displayValue: e.value
                        }), this.props.onChange(h({}, e, {
                            value: n(e.value)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return u.default.createElement(r, babelHelpers.extends({}, this.props, {
                            value: this.state.displayValue,
                            onChange: this.handleChange.bind(this)
                        }))
                    }
                }]), t
            }(u.Component);
            return e.displayName = "MappedDisplay(".concat(r.displayName || r.name, ")"), e.propTypes = r.propTypes, e
        }
    }
});
//# sourceMappingURL=input.js.map