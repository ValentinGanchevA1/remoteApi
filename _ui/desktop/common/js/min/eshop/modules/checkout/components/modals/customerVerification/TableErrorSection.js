define(["exports", "react-redux", "react", "prop-types", "eshop/utils/OnlineUtils"], function(e, t, n, r, l) {
    "use strict";

    function s(a) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r), l = babelHelpers.interopRequireDefault(l);
    var a = function(e) {
        babelHelpers.inherits(a, e);
        var t = s(a);

        function a(e) {
            var r;
            return babelHelpers.classCallCheck(this, a), r = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "renderMsisdn", function(e) {
                var t = r.props.descriptions;
                if (reasonData.msisdn) return n.default.createElement("div", null, t.msisdnCaption || "Nr telefonu", " ", l.default.formatMsisdn(e))
            }), r.state = {
                currency: "zł"
            }, r
        }
        return babelHelpers.createClass(a, [{
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.reasonData,
                    r = e.descriptions;
                return n.default.createElement("div", babelHelpers.defineProperty({
                    key: t.planName,
                    className: "l-row u-padding-left-xl u-padding-top"
                }, "key", "customer-verification-message-" + t.msisdn), n.default.createElement("div", {
                    className: "l-col l-col-10"
                }, t.planName && n.default.createElement("div", null, n.default.createElement("strong", null, t.planName), t.msisdn && n.default.createElement("span", null, n.default.createElement("span", {
                    className: "u-padding-left-s"
                }, r.msisdnCaption || "Nr telefonu ", l.default.formatMsisdn(t.msisdn)))), t.deviceName && n.default.createElement("div", {
                    className: "u-font-bold"
                }, t.deviceName), n.default.createElement("div", {
                    className: "u-padding-top-s"
                }, t.reasons.map(function(e, t) {
                    return n.default.createElement("div", {
                        key: "customer-verification-reason-" + t,
                        className: "u-padding-top-s"
                    }, n.default.createElement("strong", null, r.declineReasonCaption || "Powód:", " "), " ", e)
                }))), n.default.createElement("div", {
                    className: "l-col l-col-2 u-right u-font-bold vertical-center u-text-right"
                }, !!t.deposit && 0 < t.deposit && n.default.createElement("strong", null, t.deposit, " ", this.state.currency)))
            }
        }]), a
    }(n.Component);
    (e.default = a).propTypes = {
        reasonData: r.default.any.isRequired,
        descriptions: r.default.any.isRequired
    }
});
//# sourceMappingURL=TableErrorSection.js.map