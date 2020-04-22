define(["exports", "react", "eshop/modules/fix/components/FixTvFilteredView", "eshop/modules/core/components/ui/Modal", "react-redux", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/fix/selectors/root"], function(e, n, i, o, t, r, s, l) {
    "use strict";

    function a(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o);
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return n.default.createElement(o.default, {
                        open: this.props.tvFilteredModalVisibility,
                        onClose: this.props.onClose
                    }, n.default.createElement(i.default, {
                        isPreLandingPage: this.props.isPreLandingPage,
                        tvPackages: this.props.tvPackages
                    }))
                }
            }]), r
        }(n.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                tvFilteredModalVisibility: (0, r.getTvFilteredModalVisibility)(e),
                tvPackages: (0, r.getTvPackages)(e),
                isPreLandingPage: (0, l.isPreLandingPage)(e)
            }
        }, function(e) {
            return {
                onClose: function() {
                    return e((0, s.changeFixTvFilteredModalVisibility)(!1))
                }
            }
        })(c);
    e.default = u
});
//# sourceMappingURL=FixTvFilteredModal.js.map