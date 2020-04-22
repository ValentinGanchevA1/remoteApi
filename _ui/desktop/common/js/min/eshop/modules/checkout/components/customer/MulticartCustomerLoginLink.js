define(["exports", "react", "prop-types", "react-redux", "eshop/modules/auth/actions/authorization", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "eshop/modules/fix/selectors/root"], function(e, s, t, r, o, l, n, a, i) {
    "use strict";

    function u(s) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t);
    var c = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return "WWW" === this.props.channels.sales ? s.default.createElement("p", null, !!this.props.title && s.default.createElement("span", {
                    className: "u-left",
                    dangerouslySetInnerHTML: {
                        __html: !!this.props.title && this.props.title
                    }
                }), s.default.createElement("span", {
                    className: this.props.title && !this.props.isFix ? "u-right " : "u-left "
                }, this.props.title ? " " : "", s.default.createElement("a", {
                    href: "#",
                    onClick: this.props.logIn
                }, " Zaloguj się"))) : null
            }
        }]), r
    }(s.default.Component);
    c.propTypes = {
        title: t.default.string,
        loggedTitle: t.default.string
    }, c.defaultProps = {
        loggedTitle: "Jesteś zalogowany od teraz możesz modyfikować obecne usługi. Sprawdź oferty dostępne dla Ciebie."
    };
    var p = (0, r.connect)(function(e) {
        var t = (0, n.getLoggedCustomerData)(e);
        return {
            isFix: (0, a.isCartFix)(e) || (0, i.isLandingPage)(e),
            loggedCustomerData: t,
            isExistingCustomer: (0, l.isExistingCustomer)(e) || t && (t.lastName || t.tradingName)
        }
    }, function(e) {
        return {
            logIn: function() {
                return e((0, o.logIn)())
            }
        }
    })(c);
    e.default = p
});
//# sourceMappingURL=MulticartCustomerLoginLink.js.map