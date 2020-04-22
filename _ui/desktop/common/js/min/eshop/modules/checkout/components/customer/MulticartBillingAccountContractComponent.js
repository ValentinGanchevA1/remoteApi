define(["exports", "react", "react-redux", "../../../../utils/OnlineUtils"], function(e, a, t, s) {
    "use strict";

    function r(a) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), s = babelHelpers.interopRequireDefault(s);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return a.default.createElement("li", {
                    className: "opl-tree__li opl-tree__li--icon"
                }, a.default.createElement("div", {
                    className: "opl-tree__branch u-w-100"
                }, a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, a.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, a.default.createElement("div", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--device-smartphone g-icon--before g-icon--l g-icon--s-w"
                })), a.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, a.default.createElement("p", null, "Telefon komórkowy"), a.default.createElement("p", {
                    className: "h4"
                }, s.default.formatMsisdn(this.props.msisdn)))), a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                }, a.default.createElement("div", {
                    className: "u-text-right u-small-spacing-top-l u-small-spacing-l"
                }, a.default.createElement("span", {
                    className: "opl-service-status opl-service-status opl-service-status--on u-spacing-right-s"
                }, a.default.createElement("span", {
                    className: "opl-service-status__indicator"
                }), a.default.createElement("span", {
                    className: "opl-service-status__status h6 u-no-margin"
                }, "Aktywny")), a.default.createElement("span", {
                    className: "g-gray5-c u-spacing-right-s"
                }, "do ", this.props.dateTo))))))
            }
        }]), l
    }(a.Component);
    e.default = l
});
//# sourceMappingURL=MulticartBillingAccountContractComponent.js.map