define(["exports", "react", "prop-types", "react-redux", "./BuyMoreProductsComponent", "./VasModal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/entriesList/mobile/productEntries/VasEntryComponent", "eshop/modules/checkout/selectors", "eshop/modules/checkout/components/MulticartValidationComponent", "../../../../../core/constants/TransactionProcessTypeEnum"], function(_exports, _react, _propTypes, _reactRedux, _BuyMoreProductsComponent, _VasModal, _selectors, _cart, _VasEntryComponent, _selectors2, _MulticartValidationComponent, _TransactionProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _BuyMoreProductsComponent = babelHelpers.interopRequireDefault(_BuyMoreProductsComponent);
    _VasModal = babelHelpers.interopRequireDefault(_VasModal);
    _VasEntryComponent = babelHelpers.interopRequireDefault(_VasEntryComponent);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);

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

    var SelectRetentionBonusComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SelectRetentionBonusComponent, _Component);

        var _super = _createSuper(SelectRetentionBonusComponent);

        function SelectRetentionBonusComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, SelectRetentionBonusComponent);
            _this = _super.call(this, props);
            _this.state = {
                modalVisible: false
            };
            _this.addButtonClicked = _this.addButtonClicked.bind(babelHelpers.assertThisInitialized(_this));
            _this.closeModalClicked = _this.closeModalClicked.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(SelectRetentionBonusComponent, [{
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

                if (vases.length > 0 && vases.categorizedBonuses) {
                    console.log("RetentionBonuses containsVases2", vases);
                }

                return vases.length > 0 && vases[0].categorizedBonuses && vases[0].categorizedBonuses["RetentionBonuses"] && vases[0].categorizedBonuses["RetentionBonuses"].services && vases[0].categorizedBonuses["RetentionBonuses"].services.length > 0;
            }
        }, {
            key: "getVasesForBundle",
            value: function getVasesForBundle(bundle) {
                return this.props.vases && this.props.vases.find(function(vas) {
                    return vas.bundle == bundle;
                });
            }
        }, {
            key: "getRetentionBonuses",
            value: function getRetentionBonuses() {
                var vases = this.props.vases.find(function(mv) {
                    return mv.process == _TransactionProcessTypeEnum.default.RETENTION;
                });

                if (!vases || !vases.categorizedBonuses || !vases.categorizedBonuses["RetentionBonuses"]) {
                    return [];
                }

                console.log("RetentionBonuses getRetentionBonuses returns ", vases.categorizedBonuses["RetentionBonuses"].services);
                return vases.categorizedBonuses["RetentionBonuses"].services;
            }
        }, {
            key: "isVasInBonuses",
            value: function isVasInBonuses(vas) {
                var retentionBonuses = this.getRetentionBonuses();

                if (!retentionBonuses) {
                    return false;
                }

                var inBonuses = [];
                retentionBonuses.forEach(function(bonus) {
                    if (bonus.id == vas.productCode) inBonuses.push(vas);
                });
                return !!inBonuses.length;
            }
        }, {
            key: "getSelectedBonus",
            value: function getSelectedBonus() {
                var _this3 = this;

                var selected = null;
                console.log("RetentionBonuses getSelectedBonus");
                console.log("RetentionBonuses", this.props.entry.vases);
                console.log("RetentionBonuses", this.props);
                this.props.entry.vases.forEach(function(cartVas) {
                    return _this3.isVasInBonuses(cartVas) ? selected = cartVas : "";
                });
                return selected;
            }
        }, {
            key: "isRetentionBonusSelected",
            value: function isRetentionBonusSelected() {
                console.log("isRetentionBonusSelected");
                var ret = true;
                var entry = this.props.entry;

                if (!!this.props.vases && !!this.props.vases.find(function(mv) {
                        return mv.process == "RETENTION";
                    })) {
                    var retentionBonuses = this.getRetentionBonuses();

                    if (retentionBonuses.length > 0) {
                        if (this.props.entry.vases.length == 0) {
                            console.log("NO RETENTION BONUS SELECTED", entry);
                            return false;
                        }

                        ret = false;
                        retentionBonuses.forEach(function(rb) {
                            if (entry.vases.find(function(vas) {
                                    return vas.productCode == rb.id;
                                })) {
                                ret = true;
                            }
                        });
                    }
                }

                console.log("isRetentionBonusSelected", ret);
                return ret;
            }
        }, {
            key: "render",
            value: function render() {
                var header = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły";
                var vas = this.getSelectedBonus();
                return this.containsVases() ? /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                    key: "productSectionWrapper_" + this.props.index,
                    entry: this.props.entry,
                    sectionTitle: this.props.sectionTitle,
                    className: "u-box-shadow--s"
                }, vas ? /*#__PURE__*/ _react.default.createElement(_VasEntryComponent.default, {
                    key: "VAS" + vas.productCode + "_bonus",
                    detailsHeader: this.props.detailsHeader,
                    showDetails: false,
                    entry: vas,
                    cartBundle: this.props.cartBundle,
                    bundle: this.props.bundle,
                    propositionId: this.props.propositionId,
                    topBorder: true,
                    onChangeClicked: this.addButtonClicked
                }) : /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsComponent.default, {
                    addButtonClicked: this.addButtonClicked,
                    icon: this.props.icon,
                    buyMoreLabel: this.props.buyMoreLabel,
                    className: "g-brand2-c"
                }), /*#__PURE__*/ _react.default.createElement(_VasModal.default, {
                    title: "Wybierz bonus za przedłużenie umowy",
                    cartVases: this.props.entry.vases,
                    vases: this.props.vases,
                    viewAsRetentionBonuses: true,
                    multiChoice: false,
                    header: header,
                    cartBundle: "" + this.props.entry.bundleNo,
                    bundle: this.props.entry.productCode,
                    propositionId: this.props.entry.bundleCode,
                    open: this.state.modalVisible,
                    onClose: this.closeModalClicked,
                    idx: this.props.idx
                })), /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "retentionBonuses",
                    iconType: "warn",
                    className: "u-padding-top-m",
                    scrollToParent: true,
                    show: !this.isRetentionBonusSelected()
                })) : null;
            }
        }]);
        return SelectRetentionBonusComponent;
    }(_react.Component);

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        var icon = props.icon ? props.icon.split('_').join('-') : null;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-margin-top-l" + (props.className ? " " + props.className : "")
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    SelectRetentionBonusComponent.propTypes = {
        idx: _propTypes.default.number,
        entry: _propTypes.default.object,
        fetchMobileVases: _propTypes.default.func,
        vases: _propTypes.default.array
    };
    SelectRetentionBonusComponent.defaultProps = {
        buyMoreLabel: "Dziękujemy, że jesteś z nami. Wybierz bonus za przedłużenie umowy."
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            vases: (0, _selectors.getMobileVases)(state),
            validationMsg: (0, _selectors2.getFrontValidationMsg)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchMobileVases: function fetchMobileVases(propositionId, bundle, process) {
                return dispatch((0, _cart.fetchMobileVases)(propositionId, bundle, process));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SelectRetentionBonusComponent);

    _exports.default = _default;
});
//# sourceMappingURL=SelectRetentionBonusComponent.js.map