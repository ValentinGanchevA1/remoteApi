define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeMobileFilterView", "eshop/utils/OnlineUtils"], function(e, t, r, i, s, o, l, a) {
    "use strict";

    function n(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    var c = function(e) {
        babelHelpers.inherits(i, e);
        var r = n(i);

        function i(e) {
            var t;
            return babelHelpers.classCallCheck(this, i), (t = r.call(this, e)).labelProvider = t.labelProvider.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(i, [{
            key: "labelProvider",
            value: function(e) {
                var t = this.props.filterLabelsHardcodedAsGross ? a.default.formatPrice(a.default.toGrossHardcoded(e.to)) : e.to;
                return (this.props.filterLabelsHardcodedAsGross ? a.default.formatPrice(a.default.toGrossHardcoded(e.from)) : e.from) + " zł - " + t + " zł"
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement(l.default, {
                    tieredPrices: this.props.tieredPrices,
                    id: "mobile-expander-module-one-time",
                    initiallyExpanded: this.props.initiallyExpanded,
                    header: this.props.title,
                    type: "checkbox",
                    labelFormatter: this.labelProvider,
                    selectedTieredPrices: this.props.selectedTieredPrices,
                    onClick: this.props.onClick,
                    showExpanderNumber: this.props.tieredPriceNumberExpander,
                    showComponent: this.props.tieredPrices && 0 < this.props.tieredPrices.length
                })
            }
        }]), i
    }(t.default.Component);
    e.default = c
});
//# sourceMappingURL=ProductListOneTimeFilterMobileComponent.js.map