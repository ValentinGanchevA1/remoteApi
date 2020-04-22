define(["exports", "react", "prop-types"], function(e, i, t) {
    "use strict";

    function l(r) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t);
    var n = 0,
        r = function(e) {
            babelHelpers.inherits(o, e);
            var a = l(o);

            function o() {
                var e;
                babelHelpers.classCallCheck(this, o);
                for (var t = arguments.length, l = new Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                return e = a.call.apply(a, [this].concat(l)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "state", {
                    floatingLabelId: n++
                }), e
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "loadModule",
                value: function() {
                    OPL.UI.loadModules(this.refs.wrapperRef, [{
                        path: "core/modules/floating-label"
                    }])
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        l = e.overrideClass,
                        r = e.autoComplete,
                        a = e.maximumWidth,
                        o = e.children,
                        n = l || "o-floating-label opl-floating-label-line opl-floating-label-line--white";
                    return t && (n += " " + t), r && (n += " opl-autocomplete"), a && (n += " u-w-100"), i.default.createElement("div", {
                        ref: "wrapperRef",
                        id: "floating-label-wrapper-" + this.state.floatingLabelId,
                        className: n
                    }, o)
                }
            }]), o
        }(i.PureComponent);
    babelHelpers.defineProperty(r, "propTypes", {
        className: t.default.string,
        autoComplete: t.default.bool,
        maximumWidth: t.default.bool,
        children: t.default.any,
        overrideClass: t.default.string
    }), babelHelpers.defineProperty(r, "defaultProps", {
        autoComplete: !1,
        maximumWidth: !1
    });
    var a = r;
    e.default = a
});
//# sourceMappingURL=OraFloatingLabelWrapper.js.map