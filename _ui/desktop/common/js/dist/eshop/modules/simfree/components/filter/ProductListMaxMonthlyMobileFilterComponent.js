define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeMobileFilterView", "eshop/utils/OnlineUtils"], function(_exports, _react, _reactRedux, _metaData, _filter, _filters, _selectors, _ProductListOneTimeMobileFilterView, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductListOneTimeMobileFilterView = babelHelpers.interopRequireDefault(_ProductListOneTimeMobileFilterView);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var ProductListMaxMonthlyMobileFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListMaxMonthlyMobileFilterComponent, _React$Component);

        var _super = _createSuper(ProductListMaxMonthlyMobileFilterComponent);

        function ProductListMaxMonthlyMobileFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListMaxMonthlyMobileFilterComponent);
            _this = _super.call(this, props);
            _this.labelProvider = _this.labelProvider.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProductListMaxMonthlyMobileFilterComponent, [{
            key: "labelProvider",
            value: function labelProvider(row) {
                var to = this.props.filterLabelsHardcodedAsGross ? _OnlineUtils.default.formatPrice(_OnlineUtils.default.toGrossHardcoded(row.to)) : row.to;
                return row.alias || "Do " + to + " zł";
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_ProductListOneTimeMobileFilterView.default, {
                    tieredPrices: this.props.tieredPrices,
                    initiallyExpanded: this.props.initiallyExpanded,
                    header: this.props.title,
                    type: "radio",
                    id: "mobile-expander-module-monthly",
                    labelFormatter: this.labelProvider,
                    selectedTieredPrices: this.props.selectedTieredPrices,
                    onClick: this.props.onClick,
                    showExpanderNumber: this.props.tieredPriceNumberExpander,
                    showComponent: this.props.tieredPrices && this.props.tieredPrices.length > 0 && !this.props.isSalesOfGoodsPage
                });
            }
        }]);
        return ProductListMaxMonthlyMobileFilterComponent;
    }(_react.default.Component);

    var _default = ProductListMaxMonthlyMobileFilterComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListMaxMonthlyMobileFilterComponent.js.map