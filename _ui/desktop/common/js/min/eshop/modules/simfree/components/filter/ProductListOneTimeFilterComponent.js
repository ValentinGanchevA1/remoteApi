define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeFilterView", "eshop/utils/OnlineUtils"], function(e, r, t, i, s, o, l, n) {
    "use strict";

    function c(i) {
        return function() {
            var e, r = babelHelpers.getPrototypeOf(i);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(r, arguments, t)
            } else e = r.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n);
    var a = function(e) {
            babelHelpers.inherits(i, e);
            var t = c(i);

            function i(e) {
                var r;
                return babelHelpers.classCallCheck(this, i), (r = t.call(this, e)).props.setCmsConf(r.props.tieredPriceConf), r.labelProvider = r.labelProvider.bind(babelHelpers.assertThisInitialized(r)), r
            }
            return babelHelpers.createClass(i, [{
                key: "labelProvider",
                value: function(e) {
                    var r = this.props.filterLabelsHardcodedAsGross ? n.default.formatPrice(n.default.toGrossHardcoded(e.to)) : e.to;
                    return (this.props.filterLabelsHardcodedAsGross ? n.default.formatPrice(n.default.toGrossHardcoded(e.from)) : e.from) + " zł - " + r + " zł"
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement(l.default, {
                        tieredPrices: this.props.tieredPrices,
                        header: this.props.title,
                        type: "checkbox",
                        id: "expander-module-one-time",
                        labelFormatter: this.labelProvider,
                        selectedTieredPrices: this.props.selectedTieredPrices,
                        onClick: this.props.onClick,
                        showExpanderNumber: this.props.tieredPriceNumberExpander,
                        showComponent: this.props.tieredPrices && 0 < this.props.tieredPrices.length,
                        initiallyExpanded: this.props.initiallyExpanded
                    })
                }
            }]), i
        }(r.default.Component),
        d = a = (0, t.connect)(function(e) {
            return {
                tieredPrices: (0, o.getTieredOneTimePriceForCurrentOfferType)(e),
                selectedTieredPrices: (0, o.getSelectedOneTimePrices)(e),
                filterLabelsHardcodedAsGross: (0, o.filterLabelsHardcodedAsGross)(e)
            }
        }, function(r) {
            return {
                setCmsConf: function(e) {
                    return r((0, i.registerOneTimePriceCMSConf)(e))
                },
                onClick: function(e) {
                    return r((0, s.selectOneTimePrice)(e))
                }
            }
        })(a);
    e.default = d
});
//# sourceMappingURL=ProductListOneTimeFilterComponent.js.map