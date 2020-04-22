define(["exports", "react", "prop-types", "lodash", "./OraFloatingLabelWrapper", "../../../components/OraCommonComponents"], function(e, s, t, u, p, c) {
    "use strict";

    function a(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u), p = babelHelpers.interopRequireDefault(p);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = a(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "renderOptions",
            value: function() {
                return this.props.options.map(function(e) {
                    return s.default.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.label)
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.id,
                    l = e.autocomplete,
                    a = e.placeholder,
                    r = e.children,
                    n = e.onChange,
                    o = e.value,
                    i = e.disabled;
                return s.default.createElement(p.default, {
                    autoComplete: l,
                    maximumWidth: !0,
                    className: "o-floating-label o-select u-spacing-l"
                }, s.default.createElement("select", {
                    id: t + "Select",
                    name: "select",
                    "aria-describedby": "floating-label__placeholder1",
                    className: "opl-select-primary opl-input--size-m" + (u.default.isEmpty(this.props.options) ? "" : " is-not-empty"),
                    value: o || "",
                    onChange: n,
                    disabled: i
                }, this.renderOptions()), s.default.createElement("span", {
                    className: "o-select__arrow"
                }), s.default.createElement(c.OraLabel, {
                    htmlFor: t,
                    className: "label o-floating-label__placeholder o-floating-label__p-2"
                }, a), r)
            }
        }]), l
    }(s.PureComponent);
    babelHelpers.defineProperty(l, "propTypes", {
        id: t.default.string.isRequired,
        options: t.default.arrayOf(t.default.shape({
            value: t.default.any.isRequired,
            label: t.default.string
        })).isRequired,
        value: t.default.any,
        placeholder: t.default.string,
        autocomplete: t.default.bool,
        children: t.default.any,
        onChange: t.default.func,
        disabled: t.default.bool
    });
    var r = l;
    e.default = r
});
//# sourceMappingURL=SelectWithFloatingLable.js.map