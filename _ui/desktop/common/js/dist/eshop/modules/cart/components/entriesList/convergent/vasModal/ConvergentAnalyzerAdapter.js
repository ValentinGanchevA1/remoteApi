define(["exports", "react", "prop-types", "../../../../analyzer/CartInfoUtils", "./AnalyzerAdapter"], function(_exports, _react, _propTypes, _CartInfoUtils, _AnalyzerAdapter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _AnalyzerAdapter = babelHelpers.interopRequireDefault(_AnalyzerAdapter);

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

    var ConvergentAnalyzerAdapter = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentAnalyzerAdapter, _Component);

        var _super = _createSuper(ConvergentAnalyzerAdapter);

        function ConvergentAnalyzerAdapter(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentAnalyzerAdapter);
            _this = _super.call(this, props);
            _this.getCartProducts = _this.getCartProducts.bind(babelHelpers.assertThisInitialized(_this));
            _this.getPresentableProducts = _this.getPresentableProducts.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ConvergentAnalyzerAdapter, [{
            key: "removeButtonClicked",
            value: function removeButtonClicked(productCode, propositionId) {
                if (this.convergentAdapter && this.convergentAdapter.onRemove) {
                    this.convergentAdapter.onRemove(productCode, propositionId);
                }
            }
        }, {
            key: "getCartProducts",
            value: function getCartProducts() {
                var cartProducts = {};
                this.props.entry.entries.forEach(function(entry) {
                    if (!cartProducts[entry.propositionId]) {
                        cartProducts[entry.propositionId] = [];
                    }

                    cartProducts[entry.propositionId] = cartProducts[entry.propositionId].concat((0, _CartInfoUtils.getCartProductsFromEntry)(entry));
                    cartProducts[entry.propositionId] = cartProducts[entry.propositionId].concat(entry.previouslySelectedInvisible);
                });
                return cartProducts;
            }
        }, {
            key: "getPresentableProducts",
            value: function getPresentableProducts() {
                var presentableProducts = {};
                this.props.configurables.forEach(function(configurablesEntry) {
                    presentableProducts[configurablesEntry.propositionId] = (0, _CartInfoUtils.getPresentableProductsFromConfigurables)(configurablesEntry);
                });
                return presentableProducts;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var cartProducts = this.getCartProducts();
                var presentableProducts = this.getPresentableProducts();
                var configurables = Object.assign([], this.props.configurables);

                if (!!this.props.customRules && this.props.customRules.length > 0) {
                    configurables.filter(function(c) {
                        return c.factoryName === "FIX" && !!c.relations;
                    }).forEach(function(c) {
                        c.relations = c.relations.concat(_this2.props.customRules);
                    });
                }

                return /*#__PURE__*/ _react.default.createElement(_AnalyzerAdapter.default, {
                    entry: this.props.entry,
                    configurables: configurables,
                    cartProducts: cartProducts,
                    presentableProducts: presentableProducts,
                    children: this.props.children,
                    unselectable: this.props.unselectable,
                    updateCartProducts: this.props.updateCartProducts,
                    singlePropositionId: this.props.singlePropositionId,
                    ref: function ref(convergentAdapter) {
                        _this2.convergentAdapter = convergentAdapter;
                    },
                    triggerCartRecalculation: this.props.triggerCartRecalculation
                });
            }
        }]);
        return ConvergentAnalyzerAdapter;
    }(_react.Component);

    babelHelpers.defineProperty(ConvergentAnalyzerAdapter, "propTypes", {
        entry: _propTypes.default.object.isRequired,
        configurables: _propTypes.default.array.isRequired,
        updateCartProducts: _propTypes.default.func
    });
    babelHelpers.defineProperty(ConvergentAnalyzerAdapter, "defaultProps", {
        unselectable: true
    });
    var _default = ConvergentAnalyzerAdapter;
    _exports.default = _default;
});
//# sourceMappingURL=ConvergentAnalyzerAdapter.js.map