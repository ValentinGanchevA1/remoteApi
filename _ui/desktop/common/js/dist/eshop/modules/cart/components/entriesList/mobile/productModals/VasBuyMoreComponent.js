define(["exports", "react", "prop-types", "react-redux", "./BuyMoreProductsComponent", "./VasModal", "eshop/components/OraCommonComponents", "eshop/modules/cart/actions/cart", "eshop/modules/core/enum/VasUpdateStatus", "eshop/modules/cart/selectors"], function(_exports, _react, _propTypes, _reactRedux, _BuyMoreProductsComponent, _VasModal, _OraCommonComponents, _cart, _VasUpdateStatus, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _BuyMoreProductsComponent = babelHelpers.interopRequireDefault(_BuyMoreProductsComponent);
    _VasModal = babelHelpers.interopRequireDefault(_VasModal);
    _VasUpdateStatus = babelHelpers.interopRequireDefault(_VasUpdateStatus);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var VasBuyMoreComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VasBuyMoreComponent, _Component);

        var _super = _createSuper(VasBuyMoreComponent);

        function VasBuyMoreComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, VasBuyMoreComponent);
            _this = _super.call(this, props);
            _this.state = {
                modalVisible: false
            };
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(VasBuyMoreComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.entry.bundleCode && this.props.entry.productCode && this.props.entry.processType) {
                    this.props.fetchMobileVases(this.props.entry.bundleCode, this.props.entry.productCode, this.props.entry.processType);
                }
            }
        }, {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                console.log("Modal clicked");
                this.setState({
                    modalVisible: true
                }, function() {
                    console.log("This state modalVisible: " + !!this.state.modalVisible);
                }.bind(this));
            }
        }, {
            key: "closeModalClicked",
            value: function closeModalClicked() {
                this.setState({
                    modalVisible: false
                }, function() {
                    console.log("This state modalVisible: " + !!this.state.modalVisible);
                }.bind(this));
            }
        }, {
            key: "containsVases",
            value: function containsVases() {
                var _this2 = this;

                var vases = (this.props.vases || []).filter(function(v) {
                    return v.propositionId == _this2.props.entry.bundleCode;
                });
                return vases.length > 0 && vases[0].services && vases[0].services.length > 0;
            }
        }, {
            key: "isAnyVasUpdating",
            value: function isAnyVasUpdating() {
                var updating = this.props.mobileVasUpdatingStatus;

                if (updating[this.props.entry.bundleNo]) {
                    var values = Object.values(updating[this.props.entry.bundleNo]);
                    console.log("isAnyMobileVasUpdating", values);

                    for (var j = 0; j < values.length; j++) {
                        console.log("isAnyMobileVasUpdating", values[j] == _VasUpdateStatus.default.UPDATING);
                        if (values[j] == _VasUpdateStatus.default.UPDATING) return true;
                    }
                }

                return false;
            }
        }, {
            key: "render",
            value: function render() {
                var header = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły";
                var vasesInCart = this.props.entry.vases && this.props.entry.vases.length > 0;
                var containsVases = this.containsVases();

                if (containsVases) {
                    var vases = getFilteredVases(this.props.vases, this.props.entry);
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "g-white1-bg"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                        loading: this.isAnyVasUpdating(),
                        key: "loader_" + this.props.entry.bundleNo + "_buyMore",
                        id: "vasComponent-loader" + this.props.entry.bundleNo + "_buyMore",
                        parentId: "cart-loader",
                        useHeightFixing: false
                    }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsComponent.default, {
                        addButtonClicked: this.addButtonClicked,
                        icon: this.props.icon,
                        buyMoreLabel: this.props.buyMoreLabel
                    })), /*#__PURE__*/ _react.default.createElement(_VasModal.default, {
                        cartVases: this.props.entry.vases,
                        vases: vases,
                        header: header,
                        cartBundle: "" + this.props.entry.bundleNo,
                        bundle: this.props.entry.productCode,
                        propositionId: this.props.entry.bundleCode,
                        open: this.state.modalVisible,
                        onClose: this.closeModalClicked,
                        idx: this.props.idx
                    }));
                } else {
                    return null;
                }
            }
        }]);
        return VasBuyMoreComponent;
    }(_react.Component);

    VasBuyMoreComponent.propTypes = {
        idx: _propTypes.default.number,
        entry: _propTypes.default.object,
        fetchMobileVases: _propTypes.default.func,
        vases: _propTypes.default.array
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            vases: (0, _selectors.getMobileVases)(state),
            mobileVasUpdatingStatus: (0, _selectors.getMobileVasUpdatingStatus)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchMobileVases: function fetchMobileVases(propositionId, bundle, process) {
                return dispatch((0, _cart.fetchMobileVases)(propositionId, bundle, process));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VasBuyMoreComponent);

    _exports.default = _default;

    var getFilteredVases = function getFilteredVases(vases, entry) {
        var vasElement = extractMobileVasesForThisSection(vases, entry.bundleCode);
        var packageCartVasCodes = getVasesCodes(filterVasesByCategories(entry.vases, VAS_PACKAGE_CATEGORY));
        var excludingRelations = (vasElement.relations || []).filter(function(r) {
            return r.type === "EXCLUDE";
        });
        var filteredVases = (vasElement.services || []).filter(function(s) {
            return !excludingRelations.some(function(r) {
                return [].concat(babelHelpers.toConsumableArray(r.sourceVases), babelHelpers.toConsumableArray(r.targetVases)).includes(s.id) && [].concat(babelHelpers.toConsumableArray(r.sourceVases), babelHelpers.toConsumableArray(r.targetVases)).some(function(rel) {
                    return packageCartVasCodes.includes(rel);
                });
            });
        });
        return [_objectSpread({}, vasElement, {
            services: filteredVases
        })];
    };

    var VAS_PACKAGE_CATEGORY = "GratisPackageBonuses";

    var filterVasesByCategories = function filterVasesByCategories(vases, category) {
        return vases && category && vases.filter(function(vas) {
            return vas.categories && vas.categories.includes(category);
        }) || [];
    };

    var getVasesCodes = function getVasesCodes(vases) {
        return vases && vases.map(function(vas) {
            return vas.productCode;
        }) || [];
    };

    var extractMobileVasesForThisSection = function extractMobileVasesForThisSection(vases, bundleCode) {
        return (vases || []).find(function(element) {
            return element.propositionId === bundleCode;
        });
    };
});
//# sourceMappingURL=VasBuyMoreComponent.js.map