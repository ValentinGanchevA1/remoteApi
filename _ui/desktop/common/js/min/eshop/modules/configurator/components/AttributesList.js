define(["exports", "react", "react-redux", "prop-types", "./stateless/Attribute", "../selectors/filters"], function(e, o, t, r, s, n) {
    "use strict";

    function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function u(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), r = babelHelpers.interopRequireDefault(r), s = babelHelpers.interopRequireDefault(s);
    var i = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var r, e, n, u = this,
                    i = 0,
                    t = this.props.fixerClasses ? (r = this.props.attributes, e = this.props.fixerClasses, n = [], e.forEach(function(t) {
                        var e = r.find(function(e) {
                            return e.attribute === t.attribute
                        });
                        e = e || {
                            attribute: t.attribute,
                            type: "static",
                            value: "<div></div>",
                            dummy: !0,
                            hide: !t.visible
                        }, n.push(e)
                    }), n) : this.props.attributes,
                    a = t.map(function(e) {
                        return e.hide || e.dummy ? 0 : 1
                    }).reduce(function(e, t) {
                        return e + t
                    }, 0);
                return o.default.createElement("div", null, o.default.createElement("ul", {
                    className: "opl-box__icon-list opl-box__icon-list--break-medium "
                }, t.map(p).map(function(e) {
                    return function(t, e) {
                        e && (t.fixer = e.filter(function(e) {
                            return e.attribute === t.attribute
                        })[0].fixer);
                        return t
                    }(e, u.props.fixerClasses)
                }).map(function(e) {
                    return l(e, "box", u.props.box)
                }).map(function(e) {
                    return l(e, "table", u.props.table && !e.hide)
                }).map(c).map(function(e) {
                    return t = e, r = a, u.props.separate && (t.hide || (i++, t.border = i != r)), t;
                    var t, r
                }).map(function(e) {
                    return o.default.createElement(s.default, babelHelpers.extends({}, e, {
                        config: u.props.config
                    }))
                })), !!(u.props.paddingIfNotEmpty && 0 < a) || !(!u.props.fixerClasses || !u.props.fixerClasses.map(function(e) {
                    return e.visible
                }).reduce(function(e, t) {
                    return e || t
                }, !1)) ? o.default.createElement("div", {
                    className: "u-padding-l"
                }) : null)
            }
        }]), r
    }(o.default.Component);

    function l(e, t, r) {
        return e[t] = r, e
    }

    function p(e) {
        return e.key = e.attribute, e
    }

    function c(e) {
        return [e].map(f).map(b)[0]
    }

    function f(e) {
        return e
    }

    function b(e) {
        if ("data_desc" !== e.attribute) return e;
        var t = e.value.trim().split(" ");
        if (2 != t.length) return e;
        var r = t[1],
            n = t[0].split("/"),
            u = parseInt(n[0] || ""),
            i = parseInt(n[1] || "");
        return 2 == n.length && u && i ? function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(r), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }({}, e, {
            value: u + " " + r,
            technicalValue: u / i * 100
        }) : e
    }
    i.propTypes = {
        attributes: r.default.array.isRequired,
        separate: r.default.bool,
        box: r.default.bool,
        paddingFixer: r.default.string,
        paddingIfNotEmpty: r.default.bool,
        table: r.default.bool
    }, i.defaultProps = {
        separate: !0,
        box: !0,
        paddingIfNotEmpty: !1,
        table: !1
    };
    var d = (0, t.connect)(function(e) {
        return {
            clientContext: (0, n.getClientContext)(e),
            process: (0, n.getSelectedProcessTypeValue)(e)
        }
    }, function() {
        return {}
    })(i);
    e.default = d
});
//# sourceMappingURL=AttributesList.js.map