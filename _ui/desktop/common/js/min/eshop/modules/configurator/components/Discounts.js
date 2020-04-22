define(["exports", "react", "react-redux", "prop-types", "./stateless/Discount", "../selectors/filters"], function(e, i, t, r, a, n) {
    "use strict";

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
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a);
    var o = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var r, e, n, t = this,
                    u = this.props.fixerClasses ? (r = this.props.attributes, e = this.props.fixerClasses, n = [], e.forEach(function(t) {
                        var e = r.find(function(e) {
                            return e.attribute === t.attribute
                        });
                        e = e || {
                            attribute: t.attribute,
                            value: "<div></div>",
                            dummy: !0,
                            hide: !t.visible
                        }, n.push(e)
                    }), n) : this.props.attributes;
                u.map(function(e) {
                    return e.hide || e.dummy ? 0 : 1
                }).reduce(function(e, t) {
                    return e + t
                }, 0);
                return i.default.createElement("div", null, u.map(s).map(function(e) {
                    return function(t, e) {
                        e && (t.fixer = e.filter(function(e) {
                            return e.attribute === t.attribute
                        })[0].fixer);
                        return t
                    }(e, t.props.fixerClasses)
                }).map(function(e) {
                    return i.default.createElement(a.default, babelHelpers.extends({}, e, t.props, {
                        config: t.props.config
                    }))
                }))
            }
        }]), r
    }(i.default.Component);

    function s(e) {
        return e.key = e.attribute, e
    }
    o.propTypes = {
        attributes: r.default.array.isRequired,
        separate: r.default.bool,
        box: r.default.bool,
        paddingFixer: r.default.string,
        paddingIfNotEmpty: r.default.bool,
        table: r.default.bool
    }, o.defaultProps = {
        separate: !0,
        box: !0,
        paddingIfNotEmpty: !1,
        table: !1
    };
    var l = (0, t.connect)(function(e) {
        return {
            clientContext: (0, n.getClientContext)(e),
            process: (0, n.getSelectedProcessTypeValue)(e)
        }
    }, function() {
        return {}
    })(o);
    e.default = l
});
//# sourceMappingURL=Discounts.js.map