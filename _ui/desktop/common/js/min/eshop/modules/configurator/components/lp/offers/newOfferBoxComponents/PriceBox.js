define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Feature"], function(e, l, i, n) {
    "use strict";

    function r(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PriceBox = void 0, l = babelHelpers.interopRequireWildcard(l), i = babelHelpers.interopRequireDefault(i);
    var t = function(e) {
        babelHelpers.inherits(a, e);
        var t = r(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "mapFeaturesWithPositions",
            value: function() {
                var e = this.props.featuresPositions,
                    a = this.props.featuresGroup,
                    r = [];
                return e.forEach(function(t) {
                    var e = a.find(function(e) {
                        return e.code == t
                    });
                    e ? r.push(e) : r.push({})
                }), r
            }
        }, {
            key: "render",
            value: function() {
                var a = this,
                    e = this.props.price && this.props.price.split(","),
                    t = e && e[0],
                    r = e && e[1],
                    s = this.mapFeaturesWithPositions();
                return l.default.createElement("div", {
                    className: "u-padding-l"
                }, l.default.createElement("div", {
                    key: "div1_" + this.props.id,
                    className: "u-spacing-l"
                }, l.default.createElement("div", {
                    className: "js-layout-rateplan-name-fixer u-animate-height"
                }, l.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, l.default.createElement("p", null, this.props.name)))), l.default.createElement("div", {
                    className: "u-clearfix"
                }, l.default.createElement("div", {
                    style: {
                        minWidth: "100%"
                    },
                    className: "u-right u-small-right u-text-left u-text-nowrap"
                }, l.default.createElement("div", {
                    className: "u-table u-margin-minus-right-l u-small-margin-minus-right"
                }, l.default.createElement("div", {
                    className: "u-table-cell"
                }, l.default.createElement("span", {
                    className: "opl-price-v2 opl-price-v2--l",
                    "data-price": this.props.price
                }, l.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, l.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, t)), l.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, l.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), l.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, r), l.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, "zł/mies.")))), l.default.createElement("div", {
                    className: "u-table-cell u-vertical-top"
                }, this.props.oldPrice && this.props.tooltipValues ? i.default.conditionalRender(this.props.tooltipValues.convergent) : i.default.conditionalRender(this.props.tooltipValues.noConvergent))))), l.default.createElement("div", {
                    className: "js-layout-fixer-group-1"
                }, l.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, this.props.oldPrice && l.default.createElement("p", {
                    className: "u-padding-top u-font-bold g-gray5-c u-text-line-through"
                }, this.props.oldPrice + " zł/mies."))), s.map(function(e, t) {
                    return l.default.createElement("div", {
                        key: "Feature_" + t + "_" + a.props.id,
                        className: "js-layout-fixer-group-" + (2 + t) + " feature" + t
                    }, l.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, e.code && l.default.createElement(n.Feature, {
                        key: e.code + a.props.id,
                        removeClassFromLast: !0,
                        feature: e,
                        className: "u-padding-top-l",
                        processType: a.props.processType,
                        convergence: a.props.convergence
                    })))
                }), l.default.createElement("div", {
                    className: "js-layout-fixer-group-4"
                }, l.default.createElement("div", {
                    className: "js-height-sensitive-element"
                })))
            }
        }]), a
    }(l.Component);
    e.PriceBox = t
});
//# sourceMappingURL=PriceBox.js.map