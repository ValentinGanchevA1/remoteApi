define(["exports", "react", "react-redux", "lodash", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "./FixMainProductComponent", "../shared/UniversalEntryComponent", "../../../selectors", "../../../actions/cart", "eshop/flux/utils/OraModalService", "./BoxFragments", "./buymore/buttons/AddVasesButton", "./buymore/buttons/AddBonusButton", "./buymore/buttons/AddGadgetsButton", "./buymore/buttons/AddOfficesServicesButton", "./buymore/buttons/AddTVButton", "./ProductsFinePrintInfo", "../mobile/MultiCartRemovePopup", "../../../../checkout/constants/ProductEntryTypeEnum", "../../../analyzer/ProductInfoUtils", "../shared/CommonProductEntries", "../../../../checkout/constants/AddonTypeEnum", "../../../../fix/components/console/CMSParagraphConsoleComponent", "../utils/CartUtils", "../utils/ConfigurableUtils", "../../../analyzer/DeviceUtils"], function(_exports, _react, _reactRedux, _lodash, _MultiCartExpandingSectionComponent, _MultiCartCollapsedItemComponent, _FixMainProductComponent, _UniversalEntryComponent, _selectors, _cart, _OraModalService, _BoxFragments, _AddVasesButton, _AddBonusButton, _AddGadgetsButton, _AddOfficesServicesButton, _AddTVButton, _ProductsFinePrintInfo, _MultiCartRemovePopup, _ProductEntryTypeEnum, _ProductInfoUtils, _CommonProductEntries, _AddonTypeEnum, _CMSParagraphConsoleComponent, _CartUtils, _ConfigurableUtils, _DeviceUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _MultiCartExpandingSectionComponent = babelHelpers.interopRequireDefault(_MultiCartExpandingSectionComponent);
    _MultiCartCollapsedItemComponent = babelHelpers.interopRequireDefault(_MultiCartCollapsedItemComponent);
    _FixMainProductComponent = babelHelpers.interopRequireDefault(_FixMainProductComponent);
    _UniversalEntryComponent = babelHelpers.interopRequireDefault(_UniversalEntryComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _AddVasesButton = babelHelpers.interopRequireDefault(_AddVasesButton);
    _AddBonusButton = babelHelpers.interopRequireDefault(_AddBonusButton);
    _AddGadgetsButton = babelHelpers.interopRequireDefault(_AddGadgetsButton);
    _AddOfficesServicesButton = babelHelpers.interopRequireDefault(_AddOfficesServicesButton);
    _AddTVButton = babelHelpers.interopRequireDefault(_AddTVButton);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _ProductEntryTypeEnum = babelHelpers.interopRequireDefault(_ProductEntryTypeEnum);
    _CommonProductEntries = babelHelpers.interopRequireDefault(_CommonProductEntries);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);
    _CMSParagraphConsoleComponent = babelHelpers.interopRequireDefault(_CMSParagraphConsoleComponent);

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

    var FixComponentView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixComponentView, _Component);

        var _super = _createSuper(FixComponentView);

        function FixComponentView(props) {
            var _this;

            babelHelpers.classCallCheck(this, FixComponentView);
            _this = _super.call(this, props);
            _this.getVasSection = _this.getVasSection.bind(babelHelpers.assertThisInitialized(_this));
            _this.getTVSection = _this.getTVSection.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                selectedSection: null
            };
            return _this;
        }

        babelHelpers.createClass(FixComponentView, [{
            key: "vasChangeClicked",
            value: function vasChangeClicked(_ref) {
                var selectedSection = _ref.selectedSection;

                if (this.addVases && this.addVases.addButtonClicked) {
                    this.setState({
                        selectedSection: selectedSection
                    });
                    this.addVases.addButtonClicked();
                } else {
                    console.warn("No add vases button found");
                }
            }
        }, {
            key: "vasRemoveClicked",
            value: function vasRemoveClicked(productCode) {
                if (this.addVases && this.addVases.removeButtonClicked) {
                    this.addVases.removeButtonClicked(productCode);
                } else {
                    console.warn("No add vases button found");
                }
            }
        }, {
            key: "bonusChangeClicked",
            value: function bonusChangeClicked(_ref2) {
                var selectedSection = _ref2.selectedSection;

                if (this.addBonuses && this.addBonuses.addButtonClicked) {
                    this.setState({
                        selectedSection: selectedSection
                    });
                    this.addBonuses.addButtonClicked();
                } else {
                    console.warn("No add bonuses button found");
                }
            }
        }, {
            key: "bonusRemoveClicked",
            value: function bonusRemoveClicked(productCode) {
                if (this.addBonuses && this.addBonuses.removeButtonClicked) {
                    this.addBonuses.removeButtonClicked(productCode);
                } else {
                    console.warn("No add bonuses button found");
                }
            }
        }, {
            key: "tvChangeClicked",
            value: function tvChangeClicked() {
                if (this.addTV && this.addTV.addButtonClicked) {
                    this.addTV.addButtonClicked();
                } else {
                    console.warn("No add TV button found");
                }
            }
        }, {
            key: "tvRemoveClicked",
            value: function tvRemoveClicked(productCode) {
                if (this.addTV && this.addTV.removeButtonClicked) {
                    this.addTV.removeButtonClicked(productCode);
                } else {
                    console.warn("No add TV button found");
                }
            }
        }, {
            key: "gadgetChangeClicked",
            value: function gadgetChangeClicked() {
                if (this.addGadgets && this.addGadgets.addButtonClicked) {
                    this.addGadgets.addButtonClicked();
                } else {
                    console.warn("No add gadgets button found");
                }
            }
        }, {
            key: "gadgetRemoveClicked",
            value: function gadgetRemoveClicked(productCode) {
                if (this.addGadgets && this.addGadgets.removeButtonClicked) {
                    this.addGadgets.removeButtonClicked(productCode);
                } else {
                    console.warn("No add gadgets button found");
                }
            }
        }, {
            key: "openRemovePopup",
            value: function openRemovePopup() {
                var entry = this.props.entry;

                _OraModalService.default.open('remove-from-cart-modal-' + entry.bundleNo, {
                    bundleNo: entry.bundleNo,
                    offerIndex: entry.bundleNo
                });
            }
        }, {
            key: "registerRemovePopup",
            value: function registerRemovePopup(entry) {
                var _this2 = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, {
                        id: 'remove-from-cart-modal-' + entry.bundleNo,
                        bundleNo: entry.bundleNo,
                        title: _this2.props.sectionConf.deleteEntryPopupTitle,
                        content: _this2.props.sectionConf.deleteEntryPopupContent,
                        decline: _this2.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                        confirm: _this2.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                        onClickRemove: _this2.props.removeFromCart.bind(_this2, null, entry.bundleNo),
                        textRepresentation: _this2.props.sectionConf.sectionTitle
                    });
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.registerRemovePopup(this.props.entry);
            }
        }, {
            key: "getVasSection",
            value: function getVasSection(configurables, mandatoryProducts, tvPackages) {
                var _this3 = this;

                var fixTerminals = (this.props.entry.terminals || []).filter(function(t) {
                    return !t.hiddenEntry;
                });
                var vases = (this.props.entry.vases || []).filter(function(v) {
                    return !_lodash.default.includes(tvPackages, v.productCode) && (!_lodash.default.includes(mandatoryProducts, v.productCode) || v.addonType === _AddonTypeEnum.default.SFH) && v.addonType !== _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
                });
                var allEntries = [].concat(babelHelpers.toConsumableArray(fixTerminals), babelHelpers.toConsumableArray(vases));
                var entries = allEntries.map(function(v) {
                    return _objectSpread({}, v, {
                        mandatory: _this3.isEntryMandatory(v, allEntries, configurables)
                    });
                });
                return {
                    entries: entries,
                    onChange: this.vasChangeClicked.bind(this),
                    onRemove: this.vasRemoveClicked.bind(this)
                };
            }
        }, {
            key: "isEntryMandatory",
            value: function isEntryMandatory(entry, allEntries, configurables) {
                var selectedGroupedProductsIds = allEntries.filter(function(e) {
                    return !!e.quantityGroup && e.quantityGroup === entry.quantityGroup;
                }).map(function(e) {
                    return e.productCode;
                });
                return (0, _ConfigurableUtils.isMandatory)(entry.productCode, configurables, selectedGroupedProductsIds);
            }
        }, {
            key: "getBonusSection",
            value: function getBonusSection(bonusEntries, configurables) {
                var bonuses = (this.props.entry.vases || []).filter(function(b) {
                    return b.addonType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT && bonusEntries.some(function(entry) {
                        return entry.code === b.productCode;
                    });
                }).map(function(b) {
                    return _objectSpread({}, b, {
                        mandatory: configurables && configurables.mandatoryProducts.includes(b.productCode)
                    });
                }).map(function(b) {
                    var entry = bonusEntries.filter(function(entry) {
                        return entry.code === b.productCode;
                    })[0];
                    b.monthlyPrices = entry.monthlyCosts;
                    b.firstBillPrice = entry.oneTimeCost;
                    b.checkoutPrice = entry.payNowCost;
                    return b;
                });
                return {
                    entries: babelHelpers.toConsumableArray(bonuses),
                    onChange: this.bonusChangeClicked.bind(this),
                    onRemove: this.bonusRemoveClicked.bind(this)
                };
            }
        }, {
            key: "getTVSection",
            value: function getTVSection(mandatoryProducts, configurables, tvPackages) {
                var basicTVs = (configurables && (0, _ProductInfoUtils.getTvPackages)(configurables) || []).filter(function(v) {
                    return v.addonType === _AddonTypeEnum.default.TVBASIC;
                }).map(function(v) {
                    return v.id;
                });
                var entries = (this.props.entry.vases || []).filter(function(v) {
                    return _lodash.default.includes(tvPackages, v.productCode) && !_lodash.default.includes(mandatoryProducts, v.productCode);
                }).filter(function(v) {
                    return !_lodash.default.includes(basicTVs, v.productCode);
                }).map(function(v) {
                    return _objectSpread({}, v, {
                        mandatory: _lodash.default.includes(mandatoryProducts, v.productCode)
                    });
                });
                return {
                    entries: entries,
                    onChange: this.tvChangeClicked.bind(this),
                    onRemove: this.tvRemoveClicked.bind(this)
                };
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                var title = this.props.sectionConf.sectionTitle;
                var idx = "fix_section" + this.props.idx;
                var configurables = (0, _ProductInfoUtils.getConfigurables)(this.props.configurables);
                var mandatoryProducts = configurables && configurables.mandatoryProducts || [];
                var servicesAndDevices = [].concat((0, _ProductInfoUtils.getServices)(configurables)).concat((0, _DeviceUtils.getDevicesWithAdjustedDeviceType)((0, _ProductInfoUtils.getDevices)(configurables)));
                var numberOfAvailableGadgets = (0, _ProductInfoUtils.getNumberOfGadgets)(configurables);
                var bonusesForSecondaryChoiceDiscount = (0, _CartUtils.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.configurables, this.props.bonusEntry);
                var trigger = 'ost-' + this.props.entry.bundleNo;
                var migratedProducts = this.props.entry.migratedProducts || [];
                var tvPackagesIds = (configurables && (0, _ProductInfoUtils.getTvPackages)(configurables) || []).map(function(t) {
                    return t.id;
                });
                var officesServices = (0, _ProductInfoUtils.getOfficesServices)(configurables);
                var sections = {};
                sections[_ProductEntryTypeEnum.default.VAS] = this.getVasSection(configurables, mandatoryProducts, tvPackagesIds);
                sections[_ProductEntryTypeEnum.default.TV_PACKAGE] = this.getTVSection(mandatoryProducts, configurables, tvPackagesIds);
                sections[_ProductEntryTypeEnum.default.SECONDARY_CHOICE] = this.getBonusSection(this.props.bonusEntry, configurables);
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MultiCartExpandingSectionComponent.default, {
                    title: title,
                    key: idx,
                    entry: this.props.entry,
                    trigger: trigger,
                    conf: this.props.sectionConf,
                    onRemoveClicked: function onRemoveClicked() {
                        return _this4.openRemovePopup(_this4.props.entry);
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, {
                    key: idx
                }, /*#__PURE__*/ _react.default.createElement(ProductSectionWrapper, {
                    key: idx,
                    entry: this.props.entry,
                    sectionTitle: ""
                }, /*#__PURE__*/ _react.default.createElement(_FixMainProductComponent.default, babelHelpers.extends({
                    key: idx
                }, this.props, {
                    openRemovePopup: this.openRemovePopup.bind(this),
                    onVasRemove: this.vasRemoveClicked.bind(this),
                    onVasChange: this.vasChangeClicked.bind(this),
                    showNetPrices: this.props.showNetPrices
                })))), configurables && /*#__PURE__*/ _react.default.createElement(_CommonProductEntries.default, {
                    sections: sections,
                    sectionConf: this.props.sectionConf,
                    showNetPrices: this.props.showNetPrices,
                    forFreeLabel: this.props.descriptions.forFreeLabel ? this.props.descriptions.forFreeLabel : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                    serviceFreeLabel: this.props.descriptions.serviceFreeLabel ? this.props.descriptions.serviceFreeLabel : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                }), this.props.entry.gadgets.map(function(gadget, index) {
                    var product;

                    if (numberOfAvailableGadgets <= 1) {
                        product = Object.assign({
                            unchangeable: true
                        }, gadget);
                    } else {
                        product = gadget;
                    }

                    return /*#__PURE__*/ _react.default.createElement(_BoxFragments.FloatingBox, null, /*#__PURE__*/ _react.default.createElement(_UniversalEntryComponent.default, {
                        key: index,
                        entry: product,
                        onChangeClicked: _this4.gadgetChangeClicked.bind(_this4),
                        onRemoveClicked: _this4.gadgetRemoveClicked.bind(_this4),
                        showNetPrices: _this4.props.showNetPrices
                    }));
                }), /*#__PURE__*/ _react.default.createElement(_ProductsFinePrintInfo.FinePrintForSatteliteTV, {
                    entry: this.props.entry,
                    label: this.props.descriptions["fixMultiCartLegalSAT"]
                }), /*#__PURE__*/ _react.default.createElement(_ProductsFinePrintInfo.FinePrintForADSLModem, {
                    entry: this.props.entry,
                    label: this.props.descriptions["fixMultiCartLegalDSL"]
                }), this.props.sectionConf.productSections.map(function(section, index) {
                    var propsToPass = {};
                    propsToPass.icon = section.icon;
                    propsToPass.label = section.buyMoreLabel;
                    propsToPass.header = section.buyMoreLabel;
                    propsToPass.descriptions = section.descriptions;
                    propsToPass.configurables = configurables;
                    propsToPass.entry = _this4.props.entry;
                    propsToPass.inner = section.productList;
                    propsToPass.showNetPrices = _this4.props.showNetPrices;

                    switch (section.entryType) {
                        case _ProductEntryTypeEnum.default.OFFICES_SERVICES: {
                            return officesServices.length > 0 ? /*#__PURE__*/ _react.default.createElement(_AddOfficesServicesButton.default, babelHelpers.extends({
                                key: "OFFICES_SERVICES" + index
                            }, propsToPass, {
                                officesServices: officesServices
                            })) : /*#__PURE__*/ _react.default.createElement("div", {
                                key: "NULL_OFFICES_SERVICES"
                            });
                        }

                        case _ProductEntryTypeEnum.default.VAS: {
                            return servicesAndDevices.length > 0 ? /*#__PURE__*/ _react.default.createElement(_AddVasesButton.default, babelHelpers.extends({
                                uid: "VASES" + index,
                                key: "VASES" + index
                            }, propsToPass, {
                                migrated: migratedProducts,
                                presentable: servicesAndDevices,
                                ref: function ref(addVases) {
                                    return _this4.addVases = addVases;
                                },
                                isModalOpen: _this4.props.isVasModalOpen,
                                modalOpenAction: function modalOpenAction() {
                                    return _this4.props.openVasModal();
                                },
                                modalCloseAction: function modalCloseAction() {
                                    _this4.props.closeVasModal();

                                    _this4.setState({
                                        selectedSection: null
                                    });
                                },
                                selectedSection: _this4.state.selectedSection
                            })) : /*#__PURE__*/ _react.default.createElement("div", {
                                key: "NULL_VASES"
                            });
                        }

                        case _ProductEntryTypeEnum.default.TV_PACKAGE: {
                            var tvPackages = (0, _ProductInfoUtils.getTvPackages)(configurables);
                            var migratedTvPackages = migratedProducts.filter(function(p) {
                                return !!p.addonType;
                            });
                            var extendedPackages = migratedTvPackages.map(function(tv) {
                                tv.id = tv.productCode;
                                tv.inputType = "MIGRATED";
                                return tv;
                            });
                            var extendedPackagesCodes = extendedPackages.map(function(extendedPack) {
                                return extendedPack.productCode;
                            });
                            tvPackages = tvPackages.filter(function(tvPackage) {
                                return !extendedPackagesCodes.includes(tvPackage.id);
                            });
                            var sumOfTvPackages = tvPackages.concat(extendedPackages);
                            return tvPackages.length > 0 ? /*#__PURE__*/ _react.default.createElement(_AddTVButton.default, babelHelpers.extends({
                                key: "TVS" + index
                            }, propsToPass, {
                                migratedTvPacks: extendedPackages ? extendedPackages : [],
                                presentable: sumOfTvPackages,
                                ref: function ref(addTV) {
                                    _this4.addTV = !!addTV ? addTV.getWrappedInstance() : null;
                                }
                            })) : /*#__PURE__*/ _react.default.createElement("div", {
                                key: "NULL_TVS"
                            });
                        }

                        case _ProductEntryTypeEnum.default.GADGET: {
                            return numberOfAvailableGadgets > 0 ? /*#__PURE__*/ _react.default.createElement(_AddGadgetsButton.default, babelHelpers.extends({
                                key: "GADGETS" + index
                            }, propsToPass, {
                                presentable: (0, _ProductInfoUtils.getGadgets)(configurables),
                                ref: function ref(addGadgets) {
                                    _this4.addGadgets = addGadgets;
                                }
                            })) : /*#__PURE__*/ _react.default.createElement("div", {
                                key: "NULL_GADGETS"
                            });
                        }

                        case _ProductEntryTypeEnum.default.SECONDARY_CHOICE: {
                            return bonusesForSecondaryChoiceDiscount.map(function(bonus, idx) {
                                return /*#__PURE__*/ _react.default.createElement(_AddBonusButton.default, babelHelpers.extends({
                                    key: "SECONDARY_CHOICE_" + index + "_" + idx
                                }, propsToPass, {
                                    idx: idx,
                                    presentable: bonus.relatedProducts || [],
                                    bonus: bonus,
                                    isModalOpen: _this4.props.isBonusModalOpen,
                                    modalOpenAction: function modalOpenAction() {
                                        return _this4.props.openBonusModal();
                                    },
                                    modalCloseAction: function modalCloseAction() {
                                        return _this4.props.closeBonusModal();
                                    },
                                    ref: function ref(addBonuses) {
                                        return _this4.addBonuses = addBonuses;
                                    },
                                    migrated: migratedProducts
                                }));
                            });
                        }

                        case _ProductEntryTypeEnum.default.PARAGRAPH: {
                            return /*#__PURE__*/ _react.default.createElement(_CMSParagraphConsoleComponent.default, {
                                key: "PARAGRAPH" + index,
                                content: section.sectionTitle,
                                innerPadding: 's',
                                outerPadding: 's'
                            });
                        }

                        default:
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: "DEFAULT_NULL"
                            });
                    }
                })), /*#__PURE__*/ _react.default.createElement(_MultiCartCollapsedItemComponent.default, {
                    key: "collapsed" + idx
                })));
            }
        }]);
        return FixComponentView;
    }(_react.Component);

    var ProductSectionWrapper = function ProductSectionWrapper(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-box-shadow"
        }, props.sectionTitle && /*#__PURE__*/ _react.default.createElement("h3", {
            className: "h3 u-small-hide u-padding-all-l u-no-spacing"
        }, props.sectionTitle), props.children);
    };

    var FixComponent = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(FixComponent, _Component2);

        var _super2 = _createSuper(FixComponent);

        function FixComponent(props) {
            babelHelpers.classCallCheck(this, FixComponent);
            return _super2.call(this, props);
        }

        babelHelpers.createClass(FixComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.entry.bundleNo) {
                    this.props.fetchFixConfigurables(this.props.entry.bundleNo);
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(FixComponentView, this.props);
            }
        }]);
        return FixComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            configurables: (0, _selectors.getFixConfigurables)(state),
            isVasModalOpen: (0, _selectors.isVasModalOpen)(state),
            isBonusModalOpen: (0, _selectors.isBonusModalOpen)(state),
            bonusEntry: (0, _selectors.getBonusEntry)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeFromCart: function removeFromCart(data, id) {
                return dispatch((0, _cart.removeFromCart)(data, id));
            },
            fetchFixConfigurables: function fetchFixConfigurables(cartBundle) {
                return dispatch((0, _cart.fetchFixConfigurables)(cartBundle));
            },
            openVasModal: function openVasModal() {
                return dispatch((0, _cart.openVasModal)());
            },
            closeVasModal: function closeVasModal() {
                return dispatch((0, _cart.closeVasModal)());
            },
            openBonusModal: function openBonusModal() {
                return dispatch((0, _cart.openBonusModal)());
            },
            closeBonusModal: function closeBonusModal() {
                return dispatch((0, _cart.closeBonusModal)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixComponent);

    _exports.default = _default;
});
//# sourceMappingURL=FixComponent.js.map