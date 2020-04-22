define(["exports", "react", "eshop/modules/magnum2/components/wwt/WWTForm", "../actions/api"], function(e, s, n, t) {
    "use strict";

    function o(s) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "verifyCustomerSearched",
            value: function(e, t, r, s, n, o) {
                this.props.requestPeselAndAddressAuth({
                    townId: e,
                    streetId: t,
                    streetNumber: r,
                    appartmentNo: s,
                    town: n,
                    streetName: o
                }, this.props.msisdn, this.props.descriptions && this.props.descriptions.peselAndAddressVerificationTimeout || 3e4)
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", null, s.default.createElement(n.default, babelHelpers.extends({}, this.props, {
                    wwt: {},
                    isModal: !0,
                    isNarrow: !0,
                    focusCityOnMount: !0,
                    onSubmit: this.verifyCustomerSearched.bind(this)
                })))
            }
        }]), r
    }(s.default.Component);
    e.default = r
});
//# sourceMappingURL=AddressSectionComponent.js.map