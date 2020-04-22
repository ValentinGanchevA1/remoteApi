define(["exports", "react", "prop-types", "lodash", "../../../../analyzer/Analyzer", "../../RelationTypeEnum", "../../../../../core/constants/FactoryTypeEnum"], function(_exports, _react, _propTypes, _lodash, _Analyzer, _RelationTypeEnum, _FactoryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _RelationTypeEnum = babelHelpers.interopRequireDefault(_RelationTypeEnum);
    _FactoryTypeEnum = babelHelpers.interopRequireDefault(_FactoryTypeEnum);

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

    /**
     * Adapter accepts at most a single child
     */
    var AnalyzerAdapter = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AnalyzerAdapter, _Component);

        var _super = _createSuper(AnalyzerAdapter);

        /** Lifecycle **/
        function AnalyzerAdapter(props) {
            var _this;

            babelHelpers.classCallCheck(this, AnalyzerAdapter);
            _this = _super.call(this, props);
            _this.state = _this.createState(props);
            _this.onClick = _this.onClick.bind(babelHelpers.assertThisInitialized(_this));
            _this.onSave = _this.onSave.bind(babelHelpers.assertThisInitialized(_this));
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

                if (forceCartRecalculation || !_lodash.default.isEqual(prevProps.configurables.map(function(entry) {
                        return entry.relations;
                    }), this.props.configurables.map(function(entry) {
                        return entry.relations;
                    }))) {
                    this.recalculateCart();
                }
            }
        }, {
            key: "createState",
            value: function createState(props) {
                var state = {
                    productStatuses: this.createProductStatuses(props.presentableProducts, props.cartProducts),
                    autoadded: this.collectAutoadded(props) || [],
                    hidden: this.getHiddenProducts(props) ? this.getHiddenProducts(props) : []
                };
                console.log(state.productStatuses);
                return state;
            }
            /** Helpers **/

        }, {
            key: "createProductStatuses",
            value: function createProductStatuses(presentableProducts, cartProducts) {
                var productStatuses = this.initializeProductStatuses(presentableProducts);
                this.markProductsInCartAsSelected(productStatuses, cartProducts);
                return productStatuses;
            }
        }, {
            key: "collectAutoadded",
            value: function collectAutoadded(props) {
                return props.entry.entries.reduce(function(autoadded, entry) {
                    return Object.assign(autoadded, babelHelpers.defineProperty({}, entry.propositionId, entry.entryType === "FIX" ? entry.autoadded : null));
                }, {});
            }
        }, {
            key: "initializeProductStatuses",
            value: function initializeProductStatuses(presentableProducts) {
                var productStatuses = {};

                _lodash.default.forEach(presentableProducts, function(products, key) {
                    productStatuses[key] = {};

                    _lodash.default.forEach(products, function(product) {
                        productStatuses[key][product] = false;
                    });
                });

                return productStatuses;
            }
        }, {
            key: "markProductsInCartAsSelected",
            value: function markProductsInCartAsSelected(productStatuses, cartProducts) {
                _lodash.default.forEach(cartProducts, function(productList, key) {
                    if (!productStatuses[key]) {
                        productStatuses[key] = {};
                    }

                    if (_lodash.default.isArray(productList)) {
                        _lodash.default.forEach(productList, function(product) {
                            return productStatuses[key][product] = true;
                        });
                    } else {
                        productStatuses[productList] = true;
                    }
                });
            }
        }, {
            key: "hasProductBeenSelected",
            value: function hasProductBeenSelected(productCode, propositionId) {
                return this.state.productStatuses[propositionId] && this.state.productStatuses[propositionId][productCode];
            }
        }, {
            key: "productSelected",
            value: function productSelected(productCode, propositionId) {
                if (this.hasProductBeenSelected(productCode, propositionId)) {
                    return;
                }

                this.productStatusChanged(productCode, propositionId);
            }
        }, {
            key: "getHiddenProducts",
            value: function getHiddenProducts(props) {
                return _lodash.default.uniq(_lodash.default.flatMap(props.entry.entries, function(entry) {
                    return entry.hidden;
                }));
            }
        }, {
            key: "recalculateCart",
            value: function recalculateCart() {
                this.productStatusChanged(null, null, function() {});
            }
        }, {
            key: "productStatusChanged",
            value: function productStatusChanged(productCode, propositionId, callback) {
                var _this2 = this;

                var hasProductBeenSelected = this.hasProductBeenSelected(productCode, propositionId);
                var updatedProductsList = {};
                var autoadded = {};
                var validationResult = {};
                var extendedData = {};
                var hiddenVases = [];

                _lodash.default.forEach(this.state.productStatuses, function(entry, key) {
                    var factory = _this2.calculateFactory(key);

                    var selectedProducts = _this2.extractSelectedProductsFromProductStatuses(entry);

                    var configurables = _this2.props.configurables.find(function(proposition) {
                        return proposition.propositionId === key;
                    });

                    if (!configurables) {
                        return;
                    }

                    var addedProduct = null;
                    var removedProduct = null;

                    if (key === propositionId) {
                        if (!hasProductBeenSelected) {
                            addedProduct = productCode;
                        } else {
                            removedProduct = productCode;
                        }
                    }

                    if (factory === "FIX") {
                        var _analyzeCombination = (0, _Analyzer.analyzeCombination)(configurables, selectedProducts, _this2.state.autoadded[key] || [], addedProduct, removedProduct);

                        var _analyzeCombination2 = babelHelpers.slicedToArray(_analyzeCombination, 4);

                        updatedProductsList[key] = _analyzeCombination2[0];
                        autoadded[key] = _analyzeCombination2[1];
                        validationResult[key] = _analyzeCombination2[2];
                        extendedData = _analyzeCombination2[3];
                        hiddenVases = extendedData ? hiddenVases.concat(extendedData.hiddenProducts) : hiddenVases;
                    } else {
                        var selectedVases = (0, _Analyzer.mobileAnalyzeCombination)(configurables, selectedProducts, addedProduct, removedProduct);
                        var _ref = [selectedVases, [], {
                                valid: true
                            },
                            []
                        ];
                        updatedProductsList[key] = _ref[0];
                        autoadded[key] = _ref[1];
                        validationResult[key] = _ref[2];
                        extendedData = _ref[3];
                    }
                });

                if (!_lodash.default.find(validationResult, function(result) {
                        return !result.valid;
                    })) {
                    this.setState({
                        productStatuses: this.createProductStatuses(this.props.presentableProducts, updatedProductsList),
                        autoadded: autoadded,
                        hidden: hiddenVases
                    }, callback);
                } else {
                    console.log("Validation failed");
                }
            }
        }, {
            key: "calculateFactory",
            value: function calculateFactory(propositionId) {
                if (this.props.entry.bundleType === "HARDBUNDLE") {
                    var entry = this.props.entry.entries.find(function(e) {
                        return e.propositionId === propositionId;
                    });

                    if (entry) {
                        return entry.entryType;
                    } else {
                        return "FIX";
                    }
                } else {
                    return "FIX";
                }
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
            key: "updateCartContents",
            value: function updateCartContents() {
                var _this3 = this;

                var selectedProducts = {};

                _lodash.default.forEach(this.state.productStatuses, function(proposition, propositionId) {
                    selectedProducts[propositionId] = [];

                    _lodash.default.forEach(proposition, function(selected, productCode) {
                        var autoadded = _this3.state.autoadded[propositionId] && _this3.state.autoadded[propositionId].includes(productCode);

                        if (selected && !autoadded) {
                            var productCodeToSend = _this3.getProductCodeToSend(productCode, propositionId);

                            selectedProducts[propositionId].push(productCodeToSend);
                        }
                    });
                });

                this.props.updateCartProducts(selectedProducts);
            }
        }, {
            key: "getProductCodeToSend",
            value: function getProductCodeToSend(productCode, propositionId) {
                var propositionConfigurables = this.props.configurables.find(function(configurable) {
                    return configurable.propositionId === propositionId;
                });

                if (propositionConfigurables.factoryName === _FactoryTypeEnum.default.FIX) {
                    return productCode;
                } else {
                    var isVas = propositionConfigurables.services.map(function(service) {
                        return service.id;
                    }).includes(productCode);
                    return isVas ? this.getProductCodeToSendForMobileVas(propositionConfigurables, productCode) : productCode;
                }
            }
        }, {
            key: "getProductCodeToSendForMobileVas",
            value: function getProductCodeToSendForMobileVas(propositionConfigurables, productCode) {
                var bonusVasRelation = propositionConfigurables.relations.find(function(relation) {
                    return relation.type === _RelationTypeEnum.default.REQUIRE && relation.targetVases.includes(productCode);
                });
                return bonusVasRelation ? bonusVasRelation.sourceVases[0] : productCode;
            }
            /** Exposed method **/

        }, {
            key: "onRemove",
            value: function onRemove(product, propositionId) {
                if (window.event) {
                    event.preventDefault();
                }

                this.productStatusChanged(product, propositionId, this.updateCartContents);
            }
            /** Callbacks **/

        }, {
            key: "onClick",
            value: function onClick(product, propositionId) {
                var _this4 = this;

                return function(event) {
                    event.preventDefault();

                    if (_this4.props.unselectable) {
                        _this4.productStatusChanged(product, propositionId);
                    } else {
                        _this4.productSelected(product, propositionId);
                    }
                };
            }
        }, {
            key: "onSave",
            value: function onSave() {
                this.updateCartContents();
            }
            /** Render **/

        }, {
            key: "render",
            value: function render() {
                var mandatories = {};

                _lodash.default.forEach(this.props.configurables, function(configurables) {
                    mandatories[configurables.propositionId] = configurables.mandatoryProducts;
                });

                var child = _react.default.cloneElement(this.props.children, {
                    entries: this.props.singlePropositionId ? this.state.productStatuses[this.props.singlePropositionId] : this.state.productStatuses,
                    mandatories: this.props.singlePropositionId ? mandatories[this.props.singlePropositionId] : mandatories,
                    hidden: this.state.hidden,
                    onClick: this.onClick,
                    onSave: this.onSave
                });

                return /*#__PURE__*/ _react.default.createElement("div", null, child);
            }
        }]);
        return AnalyzerAdapter;
    }(_react.Component);

    _exports.default = AnalyzerAdapter;
    AnalyzerAdapter.propTypes = {
        entry: _propTypes.default.object,
        configurables: _propTypes.default.array.isRequired,
        cartProducts: _propTypes.default.object.isRequired,
        presentableProducts: _propTypes.default.object,
        unselectable: _propTypes.default.bool,
        singlePropositionId: _propTypes.default.string,
        children: _propTypes.default.any,
        updateCartProducts: _propTypes.default.func,
        triggerCartRecalculation: _propTypes.default.bool
    };
    AnalyzerAdapter.defaultProps = {
        triggerCartRecalculation: false
    };
});
//# sourceMappingURL=AnalyzerAdapter.js.map