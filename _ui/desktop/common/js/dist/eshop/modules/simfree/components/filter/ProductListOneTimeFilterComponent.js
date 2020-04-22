define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/metaData", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/selectors", "./view/ProductListOneTimeFilterView", "eshop/utils/OnlineUtils"], function(_exports, _react, _reactRedux, _metaData, _filter, _selectors, _ProductListOneTimeFilterView, _OnlineUtils) {
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

    var ProductListOneTimeFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListOneTimeFilterComponent, _React$Component);

        var _super = _createSuper(ProductListOneTimeFilterComponent);

        function ProductListOneTimeFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListOneTimeFilterComponent);
            _this = _super.call(this, props);

            _this.props.setCmsConf(_this.props.tieredPriceConf);

            _this.labelProvider = _this.labelProvider.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProductListOneTimeFilterComponent, [{
            key: "labelProvider",
            value: function labelProvider(row) {
                var to = this.props.filterLabelsHardcodedAsGross ? _OnlineUtils.default.formatPrice(_OnlineUtils.default.toGrossHardcoded(row.to)) : row.to;
                var from = this.props.filterLabelsHardcodedAsGross ? _OnlineUtils.default.formatPrice(_OnlineUtils.default.toGrossHardcoded(row.from)) : row.from;
                return from + " zł - " + to + " zł";
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_ProductListOneTimeFilterView.default, {
                    tieredPrices: this.props.tieredPrices,
                    header: this.props.title,
                    type: "checkbox",
                    id: "expander-module-one-time",
                    labelFormatter: this.labelProvider,
                    selectedTieredPrices: this.props.selectedTieredPrices,
                    onClick: this.props.onClick,
                    showExpanderNumber: this.props.tieredPriceNumberExpander,
                    showComponent: this.props.tieredPrices && this.props.tieredPrices.length > 0,
                    initiallyExpanded: this.props.initiallyExpanded
                });
            }
        }]);
        return ProductListOneTimeFilterComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            tieredPrices: (0, _selectors.getTieredOneTimePriceForCurrentOfferType)(state),
            selectedTieredPrices: (0, _selectors.getSelectedOneTimePrices)(state),
            filterLabelsHardcodedAsGross: (0, _selectors.filterLabelsHardcodedAsGross)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setCmsConf: function setCmsConf(value) {
                return dispatch((0, _metaData.registerOneTimePriceCMSConf)(value));
            },
            onClick: function onClick(id) {
                return dispatch((0, _filter.selectOneTimePrice)(id));
            }
        };
    };

    var _default = ProductListOneTimeFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListOneTimeFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductListOneTimeFilterComponent.js.map