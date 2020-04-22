define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeFilterView", "eshop/utils/OnlineUtils"], function(e, t, r, s, i, o, n, l, a) {
    "use strict";

    function c(s) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a);
    var u = function(e) {
            babelHelpers.inherits(s, e);
            var r = c(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).props.setCmsConf(t.props.tieredPriceConf), t.props.subscribeToClientContextChange(i.reloadProductList), t.labelProvider = t.labelProvider.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(s, [{
                key: "labelProvider",
                value: function(e) {
                    var t = this.props.filterLabelsHardcodedAsGross ? a.default.formatPrice(a.default.toGrossHardcoded(e.to)) : e.to;
                    return e.alias || "Do " + t + " zł"
                }
            }, {
                key: "render",
                value: function() {
                    return t.default.createElement(l.default, {
                        tieredPrices: this.props.tieredPrices,
                        header: this.props.title,
                        type: "radio",
                        id: "expander-module-monthly",
                        labelFormatter: this.labelProvider,
                        selectedTieredPrices: this.props.selectedTieredPrices,
                        onClick: this.props.onClick,
                        showExpanderNumber: this.props.tieredPriceNumberExpander,
                        showComponent: this.props.tieredPrices && 0 < this.props.tieredPrices.length && !this.props.isSalesOfGoodsPage,
                        initiallyExpanded: this.props.initiallyExpanded
                    })
                }
            }]), s
        }(t.default.Component),
        d = u = (0, r.connect)(function(e) {
            return {
                tieredPrices: (0, n.getTieredMaxMonthlyPriceForCurrentOfferType)(e),
                selectedTieredPrices: (0, n.getSelectedMaxMonthlyPrice)(e),
                filterLabelsHardcodedAsGross: (0, n.filterLabelsHardcodedAsGross)(e),
                isSalesOfGoodsPage: (0, n.getIsSalesOfGoodsPage)(e)
            }
        }, function(t) {
            return {
                setCmsConf: function(e) {
                    return t((0, s.registerMaxMonthlyPriceCMSConf)(e))
                },
                onClick: function(e) {
                    return t((0, i.selectMaxMonthlyPrice)(e))
                },
                subscribeToClientContextChange: function(e) {
                    return t((0, o.subscribeToClientContextChange)(e))
                }
            }
        })(u);
    e.default = d
});
//# sourceMappingURL=ProductListMaxMonthlyFilterComponent.js.map