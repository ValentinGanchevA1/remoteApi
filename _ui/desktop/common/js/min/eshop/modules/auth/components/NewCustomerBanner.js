define(["exports", "react", "react-redux", "eshop/modules/auth/selectors/authorization"], function(e, n, t, r) {
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
                    return this.props.isNewUser ? n.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, n.default.createElement("div", {
                        className: "l-page-row "
                    }, n.default.createElement("div", {
                        className: "opl-console--left-border g-white1-bg u-padding-all-l"
                    }, n.default.createElement("p", {
                        className: "h3 u-margin"
                    }, "Pracujesz w kontekście nowego klienta"), n.default.createElement("p", null, "Pamietaj, aby znaleźć istniejącego klienta przez system w celu przyznania mu najlepszej ceny oraz przedłużenia umowy.")))) : null
                }
            }]), r
        }((n = babelHelpers.interopRequireWildcard(n)).Component),
        c = (0, t.connect)(function(e) {
            return {
                isNewUser: (0, r.isNewUser)(e)
            }
        }, function() {
            return {}
        })(a);
    e.default = c
});
//# sourceMappingURL=NewCustomerBanner.js.map