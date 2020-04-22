define(["exports", "react", "react-redux", "eshop/modules/fix/selectors/root"], function(e, n, t, r) {
    "use strict";

    function l(n) {
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
    }), e.default = void 0;
    var a = function(e) {
            babelHelpers.inherits(r, e);
            var t = l(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return 0 != this.props.loyaltyDuration && n.default.createElement("div", {
                        className: "l-page-row"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-small-12 "
                    }, n.default.createElement("div", {
                        className: "l-row u-margin-l"
                    }, n.default.createElement("div", {
                        className: "g-gray2-bg u-padding-all-m"
                    }, n.default.createElement("span", {
                        className: "kss-icon-preview g-icon g-icon--only g-icon--calendar3"
                    }, n.default.createElement("span", {
                        className: "u-margin-all-l u-font-large u-font-bold"
                    }, "Umowa przedłuża się na czas nieokreślony z ceną z ostatniego miesiąca przed przedłużeniem."))))))
                }
            }]), r
        }((n = babelHelpers.interopRequireWildcard(n)).Component),
        c = (0, t.connect)(function(e) {
            return {
                loyaltyLength: (0, r.getSelectedLoyalty)(e)
            }
        }, function(t) {
            return {
                selectApu: (r = function(e) {
                    return t(selectApu(e))
                }, e.toString = function() {
                    return r.toString()
                }, e)
            };

            function e(e) {
                return r.apply(this, arguments)
            }
            var r
        })(a);
    e.default = c
});
//# sourceMappingURL=ApuComponent.js.map