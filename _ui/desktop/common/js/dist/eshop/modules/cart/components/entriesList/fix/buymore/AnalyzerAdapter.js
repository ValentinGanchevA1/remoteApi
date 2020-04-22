define(["exports", "react", "prop-types", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/analyzer/CartInfoUtils", "eshop/modules/cart/analyzer/Analyzer", "lodash"], function(_exports, _react, _propTypes, _reactRedux, _cart, _CartInfoUtils, _Analyzer, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.FixAnalyzerAdapter = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

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

    var preventDefaultWrapper = function preventDefaultWrapper(handler) {
        return function(event) {
            event.preventDefault();
            handler(event);
        };
    };
    /**
     * Adapter accepts at most a single child
     */


    var AnalyzerAdapter = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AnalyzerAdapter, _Component);

        var _super = _createSuper(AnalyzerAdapter);

        function AnalyzerAdapter(props) {
            var _this;

            babelHelpers.classCallCheck(this, AnalyzerAdapter);
            _this = _super.call(this, props);
            _this.state = _this.createState(props);

            _this.updateCartContents.bind(babelHelpers.assertThisInitialized(_this));

            _this.removeProduct.bind(babelHelpers.assertThisInitialized(_this));

            return _this;
        }

        babelHelpers.createClass(AnalyzerAdapter, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                this.setState(this.createState(nextProps));
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var forceCartRecalculation = this.props.triggerCartRecalculation === true && this.props.triggerCartRecalculation !== prevProps.triggerCartRecalculation;

                if (forceCartRecalculation || !_lodash.default.isEqual(prevProps.configurables.relations, this.props.configurables.relations)) {
                    this.recalculateCart();
                }
            }
        }, {
            key: "createState",
            value: function createState(props) {
                var productStatuses = {};
                props.presentableProducts.forEach(function(product) {
                    return productStatuses[product] = false;
                });
                props.cartProducts.forEach(function(product) {
                    return productStatuses[product] = true;
                });
                var state = {
                    productStatuses: productStatuses,
                    autoadded: props.entry.autoadded ? props.entry.autoadded : [],
                    hidden: props.entry.hidden ? props.entry.hidden : []
                };
                console.log(state.productStatuses);
                return state;
            }
        }, {
            key: "createClickedCallback",
            value: function createClickedCallback(product) {
                var _this2 = this;

                var productClicked = function productClicked() {
                    _this2.productStatusChanged(product);
                };

                return preventDefaultWrapper(productClicked.bind(this));
            }
        }, {
            key: "createClickedCallbackWithoutPreventDefault",
            value: function createClickedCallbackWithoutPreventDefault(product) {
                this.productStatusChanged(product);
            }
        }, {
            key: "migratedProductStatusesChangedHandler",
            value: function migratedProductStatusesChangedHandler(products) {
                var _this3 = this;

                var productClicked = function productClicked() {
                    _this3.migratedProductStatusesChanged(products);
                };

                return preventDefaultWrapper(productClicked.bind(this));
            }
        }, {
            key: "createClickedNonRemovableCallback",
            value: function createClickedNonRemovableCallback(product) {
                var _this4 = this;

                var productClicked = function productClicked() {
                    _this4.productSelected(product);
                };

                return preventDefaultWrapper(productClicked.bind(this));
            }
        }, {
            key: "removeProduct",
            value: function removeProduct(productCode) {
                this.productStatusChanged(productCode, this.updateCartContents);
            }
        }, {
            key: "recalculateCart",
            value: function recalculateCart() {
                this.productStatusChanged(null, function() {});
            }
        }, {
            key: "updateCartContents",
            value: function updateCartContents() {
                var _this5 = this;

                var selectedProducts = Object.keys(this.state.productStatuses).filter(function(productCode) {
                        return _this5.state.productStatuses[productCode];
                    }) //only those, that are marked as selected
                    .filter(function(productCode) {
                        return !_this5.state.autoadded.includes(productCode);
                    }); //skip autoadded

                this.props.updateCartProducts(this.props.bundleCode, this.props.offer, this.props.cartBundle, selectedProducts);
            }
        }, {
            key: "productSelected",
            value: function productSelected(productCode) {
                var hasProductBeenSelected = !!this.state.productStatuses[productCode];

                if (!hasProductBeenSelected) {
                    this.productStatusChanged(productCode);
                }
            }
        }, {
            key: "productStatusChanged",
            value: function productStatusChanged(productCode, callback) {
                var hasProductBeenSelected = !!this.state.productStatuses[productCode];
                var selectedProducts = this.extractSelectedProductsFromProductStatuses(this.state.productStatuses);
                var updatedProductsList, autoadded, validationResult, extendedData;

                if (!hasProductBeenSelected) {
                    //Product added
                    var _analyzeCombination = (0, _Analyzer.analyzeCombination)(this.props.configurables, selectedProducts, this.state.autoadded, productCode);

                    var _analyzeCombination2 = babelHelpers.slicedToArray(_analyzeCombination, 4);

                    updatedProductsList = _analyzeCombination2[0];
                    autoadded = _analyzeCombination2[1];
                    validationResult = _analyzeCombination2[2];
                    extendedData = _analyzeCombination2[3];
                } else {
                    //Product removed
                    var _analyzeCombination3 = (0, _Analyzer.analyzeCombination)(this.props.configurables, selectedProducts, this.state.autoadded, null, productCode);

                    var _analyzeCombination4 = babelHelpers.slicedToArray(_analyzeCombination3, 4);

                    updatedProductsList = _analyzeCombination4[0];
                    autoadded = _analyzeCombination4[1];
                    validationResult = _analyzeCombination4[2];
                    extendedData = _analyzeCombination4[3];
                }

                if (validationResult.valid) {
                    var updatedProductStatuses = {};
                    this.props.presentableProducts.forEach(function(product) {
                        return updatedProductStatuses[product] = false;
                    });
                    updatedProductsList.forEach(function(product) {
                        return updatedProductStatuses[product] = true;
                    });
                    this.setState({
                        productStatuses: updatedProductStatuses,
                        autoadded: autoadded,
                        hidden: extendedData.hiddenProducts
                    }, callback);
                    console.log("Updated product statuses:");
                    console.log(updatedProductStatuses);
                    console.log("Updated product statuses:");
                    console.log(autoadded);
                } else {
                    console.log(validationResult.reason);
                }
            }
        }, {
            key: "migratedProductStatusesChanged",
            value: function migratedProductStatusesChanged(productCodes) {
                var _this6 = this;

                var hasProductBeenSelected = !!this.state.productStatuses[productCodes[0]];
                var selectedProducts = this.extractSelectedProductsFromProductStatuses(this.state.productStatuses);
                var updatedProductsList, validationResult, extendedData;
                var autoadded = this.state.autoadded;
                var updatedProductStatuses = {};
                var isOperationValid = false;

                if (!hasProductBeenSelected) {
                    productCodes.forEach(function(productCode) {
                        var tempAutoadded;

                        var _analyzeCombination5 = (0, _Analyzer.analyzeCombination)(_this6.props.configurables, selectedProducts, autoadded, productCode);

                        var _analyzeCombination6 = babelHelpers.slicedToArray(_analyzeCombination5, 4);

                        updatedProductsList = _analyzeCombination6[0];
                        tempAutoadded = _analyzeCombination6[1];
                        validationResult = _analyzeCombination6[2];
                        extendedData = _analyzeCombination6[3];

                        if (validationResult.valid) {
                            isOperationValid = true;
                            autoadded = tempAutoadded;
                            selectedProducts = _this6.updateProducts(updatedProductStatuses, updatedProductsList);
                        } else {
                            console.log("updated product " + productCode + " fail");
                            console.log(validationResult.reason);
                        }
                    });
                } else {
                    productCodes.forEach(function(productCode) {
                        var tempAutoadded;

                        var _analyzeCombination7 = (0, _Analyzer.analyzeCombination)(_this6.props.configurables, selectedProducts, autoadded, null, productCode);

                        var _analyzeCombination8 = babelHelpers.slicedToArray(_analyzeCombination7, 4);

                        updatedProductsList = _analyzeCombination8[0];
                        tempAutoadded = _analyzeCombination8[1];
                        validationResult = _analyzeCombination8[2];
                        extendedData = _analyzeCombination8[3];

                        if (validationResult.valid) {
                            autoadded = tempAutoadded;
                            isOperationValid = true;
                            selectedProducts = _this6.updateProducts(updatedProductStatuses, updatedProductsList);
                        } else {
                            console.log("updated product " + productCode + " fail");
                            console.log(validationResult.reason);
                        }
                    });
                }

                if (isOperationValid) {
                    this.setState({
                        productStatuses: updatedProductStatuses,
                        autoadded: autoadded,
                        hidden: extendedData.hiddenProducts
                    });
                    console.log("Updated product statuses:");
                    console.log(updatedProductStatuses);
                    console.log("Updated product statuses:");
                    console.log(autoadded);
                }
            }
        }, {
            key: "updateProducts",
            value: function updateProducts(updatedProductStatuses, updatedProductsList) {
                this.props.presentableProducts.forEach(function(product) {
                    return updatedProductStatuses[product] = false;
                });
                updatedProductsList.forEach(function(product) {
                    return updatedProductStatuses[product] = true;
                });
                return this.extractSelectedProductsFromProductStatuses(updatedProductStatuses);
            }
        }, {
            key: "extractSelectedProductsFromProductStatuses",
            value: function extractSelectedProductsFromProductStatuses(productStatuses) {
                if (!productStatuses) {
                    return [];
                }

                return Object.keys(productStatuses).filter(function(productCode) {
                    return productStatuses[productCode];
                });
            }
        }, {
            key: "render",
            value: function render() {
                var child = _react.default.cloneElement(this.props.children, {
                    entries: this.state.productStatuses,
                    mandatories: this.props.configurables.mandatoryProducts,
                    onClick: this.props.unselectable ? this.createClickedCallback.bind(this) : this.createClickedNonRemovableCallback.bind(this),
                    onClickWithoutPreventDefault: this.createClickedCallbackWithoutPreventDefault.bind(this),
                    onClickMigratedCheckBox: this.migratedProductStatusesChangedHandler.bind(this),
                    onSave: this.updateCartContents.bind(this),
                    hidden: this.state.hidden
                });

                return /*#__PURE__*/ _react.default.createElement("div", null, child);
            }
        }]);
        return AnalyzerAdapter;
    }(_react.Component);

    AnalyzerAdapter.propTypes = {
        cartProducts: _propTypes.default.array.isRequired,
        configurables: _propTypes.default.object.isRequired,
        triggerCartRecalculation: _propTypes.default.bool
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            updateCartProducts: function updateCartProducts(bundle, offer, cartBundle, products) {
                return dispatch((0, _cart.updateFixCartProducts)(bundle, offer, cartBundle, products));
            }
        };
    };

    var ConnectedAnalyzerAdapter = (0, _reactRedux.connect)(null, mapDispatchToProps, null, {
        withRef: true
    })(AnalyzerAdapter);

    var FixAnalyzerAdapter = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(FixAnalyzerAdapter, _Component2);

        var _super2 = _createSuper(FixAnalyzerAdapter);

        function FixAnalyzerAdapter(props) {
            babelHelpers.classCallCheck(this, FixAnalyzerAdapter);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(FixAnalyzerAdapter, [{
            key: "removeProduct",
            value: function removeProduct(productCode) {
                console.log("Rmv 2: " + productCode);

                if (this.analyzer && this.analyzer.removeProduct) {
                    this.analyzer.removeProduct(productCode);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this7 = this;

                var cartProducts = (0, _CartInfoUtils.getCartProductsFromEntry)(this.props.entry);
                cartProducts = cartProducts.concat(this.props.entry.previouslySelectedInvisible);
                var presentableProducts = (0, _CartInfoUtils.getPresentableProductsFromConfigurables)(this.props.configurables);
                var configurables = JSON.parse(JSON.stringify(this.props.configurables));

                if (this.props.customRules) {
                    configurables.relations = configurables.relations.concat(this.props.customRules);
                }

                return /*#__PURE__*/ _react.default.createElement(ConnectedAnalyzerAdapter, {
                    triggerCartRecalculation: this.props.triggerCartRecalculation,
                    entry: this.props.entry,
                    configurables: configurables,
                    cartProducts: cartProducts,
                    presentableProducts: presentableProducts,
                    children: this.props.children,
                    bundleCode: this.props.entry.bundleCode,
                    offer: this.props.entry.productCode,
                    cartBundle: this.props.entry.bundleNo,
                    unselectable: this.props.unselectable,
                    ref: function ref(analyzer) {
                        if (!!analyzer) {
                            _this7.analyzer = analyzer.getWrappedInstance();
                        }
                    }
                });
            }
        }]);
        return FixAnalyzerAdapter;
    }(_react.Component);

    _exports.FixAnalyzerAdapter = FixAnalyzerAdapter;
    FixAnalyzerAdapter.propTypes = {
        entry: _propTypes.default.object.isRequired,
        configurables: _propTypes.default.object.isRequired,
        triggerCartRecalculation: _propTypes.default.bool
    };
    FixAnalyzerAdapter.defaultProps = {
        unselectable: true,
        triggerCartRecalculation: false
    };
});
//# sourceMappingURL=AnalyzerAdapter.js.map