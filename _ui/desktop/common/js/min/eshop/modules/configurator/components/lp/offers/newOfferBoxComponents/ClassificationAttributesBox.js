define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Feature"], function(e, s, o) {
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
    }), e.ClassificationAttributesBox = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var n = this;
                return s.default.createElement("div", {
                    className: "u-padding-l-xl u-padding-top-l-xl"
                }, s.default.createElement("div", {
                    className: "js-layout-fixer-group-classification-attribute"
                }, s.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, this.props.featuresGroup.map(function(e, t, r) {
                    return s.default.createElement(o.Feature, {
                        key: e.code + n.props.id,
                        removeClassFromLast: !0,
                        feature: e,
                        className: "u-padding-l",
                        length: r.length,
                        index: t,
                        processType: n.props.processType,
                        convergence: n.props.convergence
                    })
                }))))
            }
        }]), r
    }((s = babelHelpers.interopRequireWildcard(s)).Component);
    e.ClassificationAttributesBox = t
});
//# sourceMappingURL=ClassificationAttributesBox.js.map