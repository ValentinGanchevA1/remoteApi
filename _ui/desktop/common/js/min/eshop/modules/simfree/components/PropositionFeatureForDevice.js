define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(e, t, r) {
    "use strict";

    function n(n) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r);
    var o = function(e) {
        babelHelpers.inherits(i, e);
        var o = n(i);

        function i() {
            var e;
            babelHelpers.classCallCheck(this, i);
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return e = o.call.apply(o, [this].concat(r)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "findDescription", function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "data_desc";
                return e && e.find(function(e) {
                    return e.attribute === t
                })
            }), e
        }
        return babelHelpers.createClass(i, [{
            key: "icon",
            value: function() {
                return this.props.proposition.features.getMobileDataDesc().icon || "wifi2"
            }
        }, {
            key: "render",
            value: function() {
                var e = this.findDescription(this.props.proposition.bonusDescriptions);
                return e = e ? e.value : null, r.default.conditionalRenderWithClassName((e || "") + (this.props.proposition.features.getMobileRetentionDesc() ? this.props.proposition.features.getMobileRetentionDesc() : ""), "")
            }
        }]), i
    }(t.default.Component);
    e.default = o
});
//# sourceMappingURL=PropositionFeatureForDevice.js.map