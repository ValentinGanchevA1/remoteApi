define(["exports", "react", "react-redux", "eshop/modules/auth/selectors/authorization"], function(e, n, t, r) {
    "use strict";

    function s(n) {
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
    var i = function(e) {
            babelHelpers.inherits(r, e);
            var t = s(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "toHTML",
                value: function() {
                    return {
                        __html: this.props.isOnlineCookie ? this.props.descriptions.textCaap : this.props.smsVerified ? this.props.descriptions.textSms : this.props.descriptions.text
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement("div", {
                        dangerouslySetInnerHTML: this.toHTML(this.props.descriptions)
                    })
                }
            }]), r
        }((n = babelHelpers.interopRequireWildcard(n)).Component),
        o = (0, t.connect)(function(e) {
            return {
                smsVerified: (0, r.getIsSmsVerifiedCustomer)(e),
                isOnlineCookie: (0, r.getIsOnlineCookie)(e)
            }
        }, function() {
            return {}
        })(i);
    e.default = o
});
//# sourceMappingURL=MulticartStaticTextComponent.js.map