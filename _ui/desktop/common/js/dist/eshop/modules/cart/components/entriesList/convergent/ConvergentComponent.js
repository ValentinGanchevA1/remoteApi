define(["exports", "react", "prop-types", "redux", "react-redux", "lodash", "../shared/MultiCartExpandingSectionComponent", "./ConvergentMultiCartExpandedItemComponent", "./ConvergentMultiCartCollapsedItemComponent", "eshop/flux/utils/OraModalService", "../shared/MultiCartRemovePopup", "eshop/modules/checkout/selectors", "eshop/modules/cart/actions/cart", "./vasModal/ConvergentVasModal", "../../../selectors", "../../../actions/cart", "./vasModal/ConvergentAnalyzerAdapter", "./tvPackage/ConvergentTvPackageModal", "./fixBonusModal/ConvergentFixBonusModal", "./typings", "../../../analyzer/DeviceUtils", "../../../../configurator/selectors/filters", "eshop/modules/checkout/actions/app", "../../../../checkout/constants/ProductEntryTypeEnum", "../../../../checkout/constants/CartEntryTypeEnum", "../utils/CartUtils", "../../../../checkout/constants/AddonTypeEnum", "eshop/modules/cart/actions/resources"], function(_exports, _react, _propTypes, _redux, _reactRedux, _lodash, _MultiCartExpandingSectionComponent, _ConvergentMultiCartExpandedItemComponent, _ConvergentMultiCartCollapsedItemComponent, _OraModalService, _MultiCartRemovePopup, _selectors, _cart, _ConvergentVasModal, _selectors2, _cart2, _ConvergentAnalyzerAdapter, _ConvergentTvPackageModal, _ConvergentFixBonusModal, _typings, _DeviceUtils, _filters, _app, _ProductEntryTypeEnum, _CartEntryTypeEnum, _CartUtils, _AddonTypeEnum, _resources) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _ConvergentMultiCartExpandedItemComponent = babelHelpers.interopRequireDefault(_ConvergentMultiCartExpandedItemComponent);
    _ConvergentMultiCartCollapsedItemComponent = babelHelpers.interopRequireDefault(_ConvergentMultiCartCollapsedItemComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _ConvergentVasModal = babelHelpers.interopRequireDefault(_ConvergentVasModal);
    _ConvergentAnalyzerAdapter = babelHelpers.interopRequireDefault(_ConvergentAnalyzerAdapter);
    _ProductEntryTypeEnum = babelHelpers.interopRequireDefault(_ProductEntryTypeEnum);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);

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

    var ConvergentComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentComponent, _Component);

        var _super = _createSuper(ConvergentComponent);

        function ConvergentComponent() {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentComponent);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
                vasModalIsOpen: false,
                tvPackageModalIsOpen: false,
                servicesAndDevices: _this.getServicesAndDevices(_this.props.convergentConfigurables.configurables),
                vasSection: null,
                selectedSection: null
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "openRemovePopup", function() {
                var entry = _this.props.entry;

                _OraModalService.default.open('remove-from-cart-modal-' + entry.bundleNo, {
                    bundleNo: entry.bundleNo,
                    offerIndex: entry.bundleNo
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "removeFromCart", function() {
                _this.props.removeMagnumFromMultiCart(_this.props.convergentBundleNos);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "removeTerminalFromCartBundle", function(productCode, bundleNo) {
                _this.props.removeTerminalFromConvergentCartBundle(bundleNo, productCode);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "updateTerminal", function(_ref) {
                var section = _ref.section,
                    vas = _ref.vas;

                _this.props.updateMagnumTerminal(vas.bundleNo);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "showVasModal", function(_ref2) {
                var section = _ref2.section,
                    selectedSection = _ref2.selectedSection;

                _this.setState({
                    vasModalIsOpen: true,
                    vasSection: section,
                    selectedSection: selectedSection
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "hideVasModal", function() {
                _this.setState({
                    vasModalIsOpen: false
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "showTvPackageModal", function(_ref3) {
                var section = _ref3.section;

                _this.setState({
                    tvPackageModalIsOpen: true,
                    tvPackageSection: section
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "hideTvPackageModal", function() {
                _this.setState({
                    tvPackageModalIsOpen: false
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "showFixBonusModal", function(_ref4) {
                var section = _ref4.section;

                _this.setState({
                    fixBonusModalIsOpen: true,
                    fixBonusModalSection: section
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "hideFixBonusModal", function() {
                _this.setState({
                    fixBonusModalIsOpen: false
                });
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "updateCartProducts", function(products) {
                var entriesProducts = [];
                var entry = _this.props.entry;

                _lodash.default.forEach(products, function(productsList, propositionId) {
                    var propositionEntry = _lodash.default.find(entry.entries, function(proposition) {
                        return proposition.propositionId === propositionId;
                    });

                    entriesProducts.push({
                        bundleNo: propositionEntry ? propositionEntry.bundleNo : null,
                        products: productsList
                    });
                });

                _this.props.updateCartProducts(entriesProducts);
            });
            return _this;
        }

        babelHelpers.createClass(ConvergentComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry);

                if (this.props.entry.propositionId) {
                    this.props.fetchConvergentConfigurables(this.props.entry.propositionId, this.props.convergentBundleNos);
                }
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (nextProps.convergentConfigurables.configurables !== this.props.convergentConfigurables.configurables) {
                    this.setState({
                        servicesAndDevices: this.getServicesAndDevices(nextProps.convergentConfigurables.configurables)
                    });
                }
            }
        }, {
            key: "registerRemovePopup",
            value: function registerRemovePopup(entry) {
                var _this2 = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, {
                        id: 'remove-from-cart-modal-' + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        deleteEntryPopupTitle: _this2.props.sectionConf.deleteEntryPopupTitle,
                        deleteEntryPopupContent: _this2.props.sectionConf.deleteEntryPopupContent,
                        declineDeleteEntryPopupButtonLabel: _this2.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                        confirmDeleteEntryPopupButtonLabel: _this2.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                        onClickRemove: _this2.removeFromCart,
                        textRepresentation: _this2.props.sectionConf.sectionTitle
                    });
                });
            }
        }, {
            key: "removeProductFromCartBundle",
            value: function removeProductFromCartBundle(productCode, bundleNo) {
                var propositionId = this.props.entry.entries.find(function(entry) {
                    return entry.bundleNo === bundleNo;
                }).propositionId;
                this.adapter.removeButtonClicked(productCode, propositionId);
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function lowerInstallmentsClicked(bundleNo) {
                this.props.lowerInstallmentsModalOpen(bundleNo);
            }
        }, {
            key: "getMigratedProducts",
            value: function getMigratedProducts() {
                var entries = this.props.entry.entries || [];
                var migratedProducts = [];
                entries.forEach(function(entry) {
                    var products = entry.migratedProducts || [];
                    migratedProducts.push.apply(migratedProducts, products);
                });
                return migratedProducts;
            }
        }, {
            key: "getServicesAndDevices",
            value: function getServicesAndDevices(configurables) {
                var _this3 = this;

                var servicesAndDevices = {};
                var migratedProducts = this.getMigratedProducts();

                _lodash.default.forEach(configurables, function(entry) {
                    var devices = entry.devices,
                        services = entry.services,
                        propositionId = entry.propositionId;
                    servicesAndDevices[propositionId] = [];

                    if (services && services.length > 0) {
                        var _servicesAndDevices$p;

                        (_servicesAndDevices$p = servicesAndDevices[propositionId]).push.apply(_servicesAndDevices$p, babelHelpers.toConsumableArray(services));
                    }

                    if (devices && devices.length > 0) {
                        var _servicesAndDevices$p2;

                        (_servicesAndDevices$p2 = servicesAndDevices[propositionId]).push.apply(_servicesAndDevices$p2, babelHelpers.toConsumableArray((0, _DeviceUtils.getDevicesWithAdjustedDeviceType)(devices)));
                    }

                    servicesAndDevices[propositionId].forEach(function(product) {
                        return product.migrated = _this3.isMigrated(product, migratedProducts);
                    });
                });

                return servicesAndDevices;
            }
        }, {
            key: "isMigrated",
            value: function isMigrated(product, migratedProducts) {
                if (migratedProducts && product) {
                    return migratedProducts.filter(function(element) {
                        return element.base === product.base && element.productCode === product.id;
                    }).length > 0;
                }

                return false;
            }
        }, {
            key: "areSecondaryChoiceBonusesAvailable",
            value: function areSecondaryChoiceBonusesAvailable() {
                return (0, _CartUtils.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.convergentConfigurables.configurables, this.props.bonusEntry).length > 0;
            }
        }, {
            key: "getSecondaryChoiceDiscountsWithRelatedBonuses",
            value: function getSecondaryChoiceDiscountsWithRelatedBonuses() {
                return (0, _CartUtils.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.convergentConfigurables.configurables, this.props.bonusEntry);
            }
        }, {
            key: "isSecondaryConfigurable",
            value: function isSecondaryConfigurable(conf) {
                if (conf) {
                    if (conf.factoryName === _CartEntryTypeEnum.default.FIX) {
                        var secondaryServices = conf.services.filter(function(vas) {
                            return vas.addonType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
                        });
                        return secondaryServices.length > 0;
                    } else {
                        var _secondaryServices = conf.services.filter(function(vas) {
                            return vas.productType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
                        });

                        return _secondaryServices.length > 0;
                    }
                } else {
                    return false;
                }
            }
        }, {
            key: "getProductListForSecondaryChoiceDiscount",
            value: function getProductListForSecondaryChoiceDiscount() {
                var productSections = this.props.sectionConf ? this.props.sectionConf.productSections : [];
                var productLists = productSections.filter(function(section) {
                    return section.entryType === _ProductEntryTypeEnum.default.SECONDARY_CHOICE;
                }).map(function(section) {
                    return section.productList;
                });
                return _lodash.default.flatMap(productLists);
            }
        }, {
            key: "filterMigratedDevices",
            value: function filterMigratedDevices() {
                var fixMigrationEntry = this.props.entry.entries.filter(function(entry) {
                    return entry.entryType === "FIX";
                }).find(function(entry) {
                    return entry.migratedProducts;
                });
                return fixMigrationEntry && fixMigrationEntry.migratedProducts && fixMigrationEntry.migratedProducts.filter(function(p) {
                    return !!p.deviceType;
                }) || [];
            }
        }, {
            key: "getPresentables",
            value: function getPresentables() {
                var _this4 = this;

                var presentables = [];
                Object.keys(this.state.servicesAndDevices).forEach(function(propositionId) {
                    presentables.push.apply(presentables, babelHelpers.toConsumableArray(_this4.state.servicesAndDevices[propositionId]));
                });
                return presentables;
            }
        }, {
            key: "render",
            value: function render() {
                var _this5 = this;

                var idx = this.props.idx;
                var triggerClass = 'ost-' + this.props.entry.bundleNo;
                var migratedDevices = this.filterMigratedDevices();
                var presentables = this.getPresentables();
                var customRules = (0, _DeviceUtils.createCustomRules)(presentables, migratedDevices);
                var fixBonusModalDescriptions = this.state.fixBonusModalSection ? this.state.fixBonusModalSection.descriptions : '';
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: this.props.sectionConf.sectionTitle,
                    key: idx,
                    entry: this.props.entry,
                    conf: this.props.sectionConf,
                    trigger: triggerClass,
                    onRemoveClicked: this.openRemovePopup
                }, /*#__PURE__*/ _react.default.createElement(_ConvergentMultiCartExpandedItemComponent.default, {
                    entry: this.props.entry,
                    sectionConf: this.props.sectionConf,
                    key: "expanded-" + idx,
                    descriptions: this.props.descriptions,
                    onDeviceChange: this.updateTerminal,
                    onRemoveProduct: this.removeProductFromCartBundle.bind(this),
                    onRemoveTerminal: this.removeTerminalFromCartBundle,
                    lowerInstallmentsClicked: !!this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this) : undefined,
                    onClickAddVas: this.showVasModal,
                    onClickAddTvPackage: this.showTvPackageModal,
                    onClickAddFixBonus: this.showFixBonusModal,
                    isSatTechnology: this.props.isSatTechnologyEntry,
                    isDslTechnology: this.props.isDslTechnologyEntry,
                    openRemovePopup: this.openRemovePopup,
                    configurables: this.props.convergentConfigurables && this.props.convergentConfigurables.configurables,
                    showNetPrices: this.props.showNetPrices,
                    areSecondaryChoiceBonusesAvailable: this.areSecondaryChoiceBonusesAvailable()
                }), /*#__PURE__*/ _react.default.createElement(_ConvergentMultiCartCollapsedItemComponent.default, {
                    entry: this.props.entry,
                    sectionConf: this.props.sectionConf,
                    key: "collapsed-" + idx,
                    trigger: triggerClass
                })), this.props.convergentConfigurables.configurables && /*#__PURE__*/ _react.default.createElement(_ConvergentAnalyzerAdapter.default, {
                    configurables: this.props.convergentConfigurables.configurables,
                    entry: this.props.entry,
                    updateCartProducts: this.updateCartProducts,
                    customRules: customRules,
                    ref: function ref(adapter) {
                        _this5.adapter = adapter;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_ConvergentVasModal.default, {
                    open: this.state.vasModalIsOpen,
                    label: this.state.vasSection && this.state.vasSection.buyMoreLabel,
                    services: this.state.servicesAndDevices,
                    productList: this.state.vasSection && this.state.vasSection.productList,
                    onClose: this.hideVasModal,
                    icon: this.state.vasSection && this.state.vasSection.icon,
                    header: this.state.vasSection && this.state.vasSection.buyMoreLabel,
                    saveVasesButtonText: this.props.descriptions.saveVasesButton,
                    selectedSection: this.state.selectedSection,
                    descriptions: this.state.vasSection && this.state.vasSection.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    configurables: this.props.convergentConfigurables.configurables,
                    migratedProducts: migratedDevices
                })), this.props.convergentConfigurables.configurables && /*#__PURE__*/ _react.default.createElement(_ConvergentTvPackageModal.ConvergentTvPackageModal, {
                    header: this.state.tvPackageSection && this.state.tvPackageSection.buyMoreLabel,
                    descriptions: this.state.tvPackageSection && this.state.tvPackageSection.descriptions,
                    convergentConfigurables: this.props.convergentConfigurables,
                    entry: this.props.entry,
                    inner: this.state.tvPackageSection && this.state.tvPackageSection.productList,
                    modalVisible: this.state.tvPackageModalIsOpen,
                    closeModalClicked: this.hideTvPackageModal,
                    updateCartProducts: this.updateCartProducts,
                    showNetPrices: this.props.showNetPrices,
                    customFilters: this.props.customFilters
                }), this.props.convergentConfigurables.configurables && this.getSecondaryChoiceDiscountsWithRelatedBonuses().map(function(bonus) {
                    return /*#__PURE__*/ _react.default.createElement(_ConvergentFixBonusModal.ConvergentFixBonusModal, {
                        convergentConfigurables: _this5.props.convergentConfigurables,
                        updateCartProducts: _this5.updateCartProducts,
                        entry: _this5.props.entry,
                        uid: "FBM_".concat(_this5.props.uid),
                        label: _this5.props.header,
                        fixBonusModalVisible: _this5.state.fixBonusModalIsOpen,
                        bonus: bonus,
                        services: bonus.relatedProducts,
                        onClose: _this5.hideFixBonusModal,
                        productList: _this5.getProductListForSecondaryChoiceDiscount(),
                        descriptions: fixBonusModalDescriptions,
                        showNetPrices: _this5.props.showNetPrices,
                        isSecondaryConfigurable: _this5.isSecondaryConfigurable,
                        migratedProducts: migratedDevices,
                        customRules: customRules
                    });
                }));
            }
        }]);
        return ConvergentComponent;
    }(_react.Component);

    babelHelpers.defineProperty(ConvergentComponent, "propTypes", {
        entry: _propTypes.default.any,
        sectionConf: _propTypes.default.any,
        idx: _propTypes.default.number,
        descriptions: _propTypes.default.shape(_typings.ConvergentComponentDescriptionsType),
        convergentConfigurables: _propTypes.default.any,
        convergentBundleNos: _propTypes.default.any,
        isSatTechnologyEntry: _propTypes.default.bool,
        isDslTechnologyEntry: _propTypes.default.bool,
        fetchConvergentConfigurables: _propTypes.default.func,
        removeMagnumFromMultiCart: _propTypes.default.func,
        removeTerminalFromConvergentCartBundle: _propTypes.default.func,
        updateCartProducts: _propTypes.default.func
    });

    var mapStateToProps = function mapStateToProps(state) {
        return {
            convergentBundleNos: (0, _selectors.getConvergentBundleNos)(state),
            convergentConfigurables: state.cart.convergentConfigurables,
            isSatTechnologyEntry: (0, _selectors2.isSatTechnologyEntry)(state),
            isDslTechnologyEntry: (0, _selectors2.isDslTechnologyEntry)(state),
            marketSegment: (0, _filters.getMarketContext)(state),
            bonusEntry: (0, _selectors2.getBonusEntry)(state),
            customFilters: (0, _selectors2.getCustomFilters)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return _objectSpread({}, (0, _redux.bindActionCreators)({
            removeMagnumFromMultiCart: _cart.removeMagnumFromMultiCart,
            removeTerminalFromConvergentCartBundle: _cart.removeTerminalFromConvergentCartBundle,
            fetchConvergentConfigurables: _cart2.fetchConvergentConfigurables,
            updateCartProducts: _cart2.updateConvergentCartProducts,
            lowerInstallmentsModalOpen: _resources.lowerInstallmentsModalOpen,
            updateMagnumTerminal: _app.updateMagnumTerminal
        }, dispatch));
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ConvergentComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ConvergentComponent.js.map