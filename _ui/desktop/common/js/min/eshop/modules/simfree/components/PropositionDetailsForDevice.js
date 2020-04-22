define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDetailsPopUp"], function(e, o, l) {
    "use strict";

    function n(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return o.default.createElement("div", {
                    className: "u-padding-top-l"
                }, o.default.createElement(l.default, {
                    labelText: "Szczegóły",
                    header: [(e = this.props.descriptions) && e["details.close"], e && e["details.header"] || "Szczegóły oferty", e && e["details.select"]][1],
                    propositionName: this.props.rateplanName,
                    details: this.props.longDescriptionTable,
                    proposition: this.props.proposition,
                    clientContext: this.props.clientContext
                }));
                var e
            }
        }]), r
    }(o.default.Component);
    e.default = t
});
//# sourceMappingURL=PropositionDetailsForDevice.js.map