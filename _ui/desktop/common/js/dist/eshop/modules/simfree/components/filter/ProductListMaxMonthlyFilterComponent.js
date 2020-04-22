define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeFilterView", "eshop/utils/OnlineUtils"], function(_exports, _react, _reactRedux, _metaData, _filter, _filters, _selectors, _ProductListOneTimeFilterView, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductListOneTimeFilterView = babelHelpers.interopRequireDefault(_ProductListOneTimeFilterView);
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

    var ProductListMaxMonthlyFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListMaxMonthlyFilterComponent, _React$Component);

        var _super = _createSuper(ProductListMaxMonthlyFilterComponent);

        function ProductListMaxMonthlyFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListMaxMonthlyFilterComponent);
            _this = _super.call(this, props);

            _this.props.setCmsConf(_this.props.tieredPriceConf);

            _this.props.subscribeToClientContextChange(_filter.reloadProductList);

            _this.labelProvider = _this.labelProvider.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProductListMaxMonthlyFilterComponent, [{
            key: "labelProvider",
            value: function labelProvider(row) {
                var to = this.props.filterLabelsHardcodedAsGross ? _OnlineUtils.default.formatPrice(_OnlineUtils.default.toGrossHardcoded(row.to)) : row.to;
                return row.alias || "Do " + to + " zł";
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_ProductListOneTimeFilterView.default, {
                    tieredPrices: this.props.tieredPrices,
                    header: this.props.title,
                    type: "radio",
                    id: "expander-module-monthly",
                    labelFormatter: this.labelProvider,
                    selectedTieredPrices: this.props.selectedTieredPrices,
                    onClick: this.props.onClick,
                    showExpanderNumber: this.props.tieredPriceNumberExpander,
                    showComponent: this.props.tieredPrices && this.props.tieredPrices.length > 0 && !this.props.isSalesOfGoodsPage,
                    initiallyExpanded: this.props.initiallyExpanded
                });
            }
        }]);
        return ProductListMaxMonthlyFilterComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            tieredPrices: (0, _selectors.getTieredMaxMonthlyPriceForCurrentOfferType)(state),
            selectedTieredPrices: (0, _selectors.getSelectedMaxMonthlyPrice)(state),
            filterLabelsHardcodedAsGross: (0, _selectors.filterLabelsHardcodedAsGross)(state),
            isSalesOfGoodsPage: (0, _selectors.getIsSalesOfGoodsPage)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setCmsConf: function setCmsConf(value) {
                return dispatch((0, _metaData.registerMaxMonthlyPriceCMSConf)(value));
            },
            onClick: function onClick(id) {
                return dispatch((0, _filter.selectMaxMonthlyPrice)(id));
            },
            subscribeToClientContextChange: function subscribeToClientContextChange(f) {
                return dispatch((0, _filters.subscribeToClientContextChange)(f));
            }
        };
    };

    var _default = ProductListMaxMonthlyFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListMaxMonthlyFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductListMaxMonthlyFilterComponent.js.map