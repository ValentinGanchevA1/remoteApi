define(["exports", "react", "react-redux", "lodash", "./BuyMoreProductsEntry", "../../../../../checkout/constants/ProductEntryTypeEnum", "../../../../selectors", "../../../../../checkout/constants/AddonTypeEnum", "../../../../../checkout/constants/CartEntryTypeEnum", "../../shared/CommonProductEntries", "eshop/modules/magnum2/utils", "eshop/modules/magnum2/constants/ProcessTypeEnum", "../../../../../fix/components/console/CMSParagraphConsoleComponent", "eshop/utils/OnlineUtils", "../../utils/ConfigurableUtils", "../../../../../checkout/constants/ProcessTypeEnum"], function(_exports, _react, _reactRedux, _lodash, _BuyMoreProductsEntry, _ProductEntryTypeEnum, _selectors, _AddonTypeEnum, _CartEntryTypeEnum, _CommonProductEntries, _utils, _ProcessTypeEnum, _CMSParagraphConsoleComponent, _OnlineUtils, _ConfigurableUtils, _ProcessTypeEnum2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _BuyMoreProductsEntry = babelHelpers.interopRequireDefault(_BuyMoreProductsEntry);
    _ProductEntryTypeEnum = babelHelpers.interopRequireDefault(_ProductEntryTypeEnum);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _CommonProductEntries = babelHelpers.interopRequireDefault(_CommonProductEntries);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);
    _CMSParagraphConsoleComponent = babelHelpers.interopRequireDefault(_CMSParagraphConsoleComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ProcessTypeEnum2 = babelHelpers.interopRequireDefault(_ProcessTypeEnum2);

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

    var ConvergentProductEntries = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentProductEntries, _Component);

        var _super = _createSuper(ConvergentProductEntries);

        function ConvergentProductEntries(props) {
            var _this;

            babelHelpers.classCallCheck(this, ConvergentProductEntries);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "doContinueActionCallback", function() {
                if (!!_this.state.loader.callback && _this.state.loader.show && _this.hasConfigurables()) {
                    OPL.UI.fire('modules.loader.hide', $("#buy-more-products"));

                    _this.state.loader.callback({
                        section: _this.state.loader.section
                    });

                    _this.setState({
                        loader: {}
                    });
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "hasConfigurables", function() {
                return _this.props.configurables && _this.props.configurables.configurables && _this.props.configurables.configurables.length;
            });
            _this.state = {
                loader: {}
            };
            return _this;
        }

        babelHelpers.createClass(ConvergentProductEntries, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.doContinueActionCallback();
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var productSections = this.props.sectionConf ? this.props.sectionConf.productSections : [];

                if (_ProcessTypeEnum.default._2U == (0, _utils.getProcessType)(this.props.entry.entries)) {
                    productSections = productSections.filter(function(section) {
                        return _ProductEntryTypeEnum.default.PARAGRAPH != section.entryType;
                    });
                }

                var configurables = this.props.configurables.configurables;
                var mandatoryProducts = configurables && Object.keys(configurables) && Object.keys(configurables).map(function(s) {
                    return configurables[s];
                }).reduce(function(a, b) {
                    return a.concat(b.mandatoryProducts);
                }, []) || [];
                var tvPackages = this.getAllTvPackages(configurables);
                var sections = {};
                sections[_ProductEntryTypeEnum.default.TERMINAL] = {
                    entries: this.getMobileTerminals(mandatoryProducts),
                    onChange: this.props.onDeviceChange,
                    onRemove: this.props.onRemoveTerminal,
                    lowerInstallmentsClicked: this.props.lowerInstallmentsClicked
                };
                sections[_ProductEntryTypeEnum.default.VAS] = {
                    entries: this.getVases(configurables, tvPackages),
                    onChange: this.props.onClickAddVas,
                    onRemove: this.props.onRemoveProduct
                };
                sections[_ProductEntryTypeEnum.default.EURO_SET] = {
                    entries: this.getEuroSets(mandatoryProducts),
                    onChange: this.props.onDeviceChange,
                    onRemove: this.props.onRemoveTerminal
                };
                sections[_ProductEntryTypeEnum.default.TV_PACKAGE] = {
                    entries: this.getTvPackages(configurables, tvPackages),
                    onChange: this.props.onClickAddTvPackage,
                    onRemove: this.props.onRemoveProduct
                };
                sections[_ProductEntryTypeEnum.default.SECONDARY_CHOICE] = {
                    entries: this.getBonusSection(this.props, mandatoryProducts),
                    onChange: this.props.onClickAddVas,
                    onRemove: this.props.onRemoveProduct
                };
                var buyMoreProductsSections = productSections.map(function(section, index) {
                    switch (section.entryType) {
                        case _ProductEntryTypeEnum.default.GADGET: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: section.entryType + index,
                                className: "g-white1-bg u-box-shadow u-spacing"
                            }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsEntry.default, {
                                buyMoreLabel: section.buyMoreLabel,
                                icon: section.icon,
                                addButtonClicked: function addButtonClicked() {
                                    return console.log('Add GADGET clicked');
                                }
                            }));
                        }

                        case _ProductEntryTypeEnum.default.VAS: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: section.entryType + index
                            }, /*#__PURE__*/ _react.default.createElement("div", {
                                className: "g-white1-bg u-box-shadow u-spacing"
                            }, /*#__PURE__*/ _react.default.createElement("div", {
                                id: "buy-more-products-vases-entry"
                            }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsEntry.default, {
                                buyMoreLabel: section.buyMoreLabel,
                                icon: section.icon,
                                addButtonClicked: function addButtonClicked() {
                                    _this2.showBodyLoader(_this2.props.onClickAddVas, section);
                                }
                            }))));
                        }

                        case _ProductEntryTypeEnum.default.TV_PACKAGE: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: section.entryType + index
                            }, _this2.props.isTvSubEntry && /*#__PURE__*/ _react.default.createElement("div", {
                                className: "g-white1-bg u-box-shadow u-spacing"
                            }, /*#__PURE__*/ _react.default.createElement("div", {
                                id: "buy-more-products-tv-entry"
                            }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsEntry.default, {
                                buyMoreLabel: section.buyMoreLabel,
                                icon: section.icon,
                                addButtonClicked: function addButtonClicked() {
                                    _this2.showBodyLoader(_this2.props.onClickAddTvPackage, section);
                                }
                            }))));
                        }

                        case _ProductEntryTypeEnum.default.SECONDARY_CHOICE: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                key: section.entryType + index
                            }, _this2.props.areSecondaryChoiceBonusesAvailable && /*#__PURE__*/ _react.default.createElement("div", {
                                className: "g-white1-bg u-box-shadow u-spacing"
                            }, /*#__PURE__*/ _react.default.createElement("div", {
                                id: "buy-more-products-fixBonus-entry"
                            }, /*#__PURE__*/ _react.default.createElement(_BuyMoreProductsEntry.default, {
                                buyMoreLabel: section.buyMoreLabel,
                                icon: section.icon,
                                addButtonClicked: function addButtonClicked() {
                                    _this2.showBodyLoader(_this2.props.onClickAddFixBonus, section);
                                }
                            }))));
                        }

                        case _ProductEntryTypeEnum.default.PARAGRAPH: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                className: "u-padding",
                                style: {
                                    marginLeft: '-20px',
                                    marginRight: '-20px'
                                }
                            }, /*#__PURE__*/ _react.default.createElement(_CMSParagraphConsoleComponent.default, {
                                key: section.entryType + index,
                                content: section.sectionTitle,
                                innerPadding: 's',
                                outerPadding: 's'
                            }));
                        }

                        default: {
                            return null;
                        }
                    }
                });
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "convergent-product-entries"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, /*#__PURE__*/ _react.default.createElement(_CommonProductEntries.default, {
                    sections: sections,
                    sectionConf: this.props.sectionConf,
                    showNetPrices: this.props.showNetPrices
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding",
                    id: "buy-more-products"
                }, buyMoreProductsSections)));
            }
        }, {
            key: "showBodyLoader",
            value: function showBodyLoader(callback, section) {
                if (this.hasConfigurables()) {
                    callback({
                        section: section
                    });
                } else {
                    this.setState({
                        loader: {
                            callback: callback,
                            section: section,
                            show: true
                        }
                    });
                    OPL.UI.fire('modules.loader.show', $("#buy-more-products"));
                }
            }
        }, {
            key: "getMobileTerminals",
            value: function getMobileTerminals(mandatoryProducts) {
                var _this3 = this;

                return this.props.entry.entries.filter(function(subEntry) {
                    return subEntry.entryType === _CartEntryTypeEnum.default.MOBILE;
                }).reduce(function(acc, subEntry) {
                    return acc.concat(subEntry.terminals);
                }, []).map(function(e) {
                    return _objectSpread({}, e, {
                        mandatory: _lodash.default.includes(mandatoryProducts, e.productCode) || _this3.is3ULTEActivation()
                    });
                });
            }
        }, {
            key: "is3ULTE",
            value: function is3ULTE() {
                var processType = (0, _utils.getProcessType)(this.props.entry.entries);
                return processType === _ProcessTypeEnum.default._3ULTE;
            }
        }, {
            key: "getVases",
            value: function getVases(configurables, tvPackages) {
                var _this4 = this;

                var fixTerminals = this.props.entry.entries.filter(function(subEntry) {
                    return subEntry.entryType === _CartEntryTypeEnum.default.FIX;
                }).reduce(function(acc, subEntry) {
                    return acc.concat((subEntry.terminals || []).filter(function(t) {
                        return !t.hiddenEntry;
                    }));
                }, []);
                var vases = this.getAllVases().filter(function(v) {
                    return !_lodash.default.includes(tvPackages, v.productCode);
                });
                var allEntries = [].concat(babelHelpers.toConsumableArray(fixTerminals), babelHelpers.toConsumableArray(vases));
                return allEntries.map(function(v) {
                    return _objectSpread({}, v, {
                        mandatory: _this4.isEntryMandatory(v, allEntries, configurables)
                    });
                });
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
            key: "getEuroSets",
            value: function getEuroSets(mandatoryProducts) {
                var _this5 = this;

                return this.props.entry.entries.filter(function(subEntry) {
                    return subEntry.entryType === _CartEntryTypeEnum.default.MOBILE;
                }).reduce(function(acc, subEntry) {
                    return acc.concat(subEntry.euroSets);
                }, []).map(function(e) {
                    return _objectSpread({}, e, {
                        mandatory: _lodash.default.includes(mandatoryProducts, e.productCode) || _this5.is3ULTEActivation()
                    });
                });
            }
        }, {
            key: "is3ULTEActivation",
            value: function is3ULTEActivation() {
                return this.is3ULTE() && this.props.entry.entries.filter(function(subEntry) {
                    return subEntry.entryType === _CartEntryTypeEnum.default.FIX;
                }).filter(function(fix) {
                    return fix.processType === _ProcessTypeEnum2.default.TV0_ACTIVATION;
                }).length > 0;
            }
        }, {
            key: "getTvPackages",
            value: function getTvPackages(configurables, tvPackages) {
                var _this6 = this;

                return this.getAllVases().filter(function(v) {
                    return _lodash.default.includes(tvPackages, v.productCode);
                }).filter(function(v) {
                    return _this6.shouldTvPackageBeDisplayed(configurables, v);
                });
            }
        }, {
            key: "getAllVases",
            value: function getAllVases() {
                return this.props.entry.entries.reduce(function(acc, subEntry) {
                    return acc.concat(subEntry.vases);
                }, []);
            }
        }, {
            key: "shouldTvPackageBeDisplayed",
            value: function shouldTvPackageBeDisplayed(configurables, tvPackage) {
                var tvPackageConf = this.getTvPackageConfiguration(configurables, tvPackage);
                return tvPackageConf && tvPackageConf.addonType !== _AddonTypeEnum.default.TVBASIC;
            }
        }, {
            key: "getTvPackageConfiguration",
            value: function getTvPackageConfiguration(configurables, vas) {
                if (configurables) {
                    return configurables.reduce(function(acc, configurablesEntry) {
                        return acc.concat(configurablesEntry.tvPackages);
                    }, []).filter(function(tvPackage) {
                        return tvPackage.id === vas.productCode;
                    }).shift();
                } else {
                    return undefined;
                }
            }
        }, {
            key: "getAllTvPackages",
            value: function getAllTvPackages(configurables) {
                return configurables && configurables.reduce(function(acc, configurablesEntry) {
                    return acc.concat(configurablesEntry.tvPackages);
                }, []).map(function(v) {
                    return v.id;
                }) || [];
            }
        }, {
            key: "getBonusSection",
            value: function getBonusSection(props, mandatoryProducts) {
                var bonusEntries = props.bonusEntries;
                var is2ULTE = _ProcessTypeEnum.default._2ULTE === (0, _utils.getProcessType)(this.props.entry.entries);

                if (is2ULTE) {
                    return this.getBonusSectionLTE(props, mandatoryProducts);
                } //Removing grouped discounts is not supported as of now. Don't think we need it at the moment, so let's treat them as mandatory.


                return this.getDiscounts(bonusEntries.filter(function(bonus) {
                    return bonus.secondaryChoiceDiscount;
                }) || []).map(function(b) {
                    return _objectSpread({}, b, {
                        productCode: b.code,
                        mandatory: !!b.discountGroup || mandatoryProducts && mandatoryProducts.includes(b.code)
                    });
                });
            }
        }, {
            key: "getBonusSectionLTE",
            value: function getBonusSectionLTE(props, mandatoryProducts) {
                var _this7 = this;

                var bonusEntries = props.bonusEntries;
                var magnumDiscounts = this.getDiscounts(bonusEntries.filter(function(bonus) {
                    return bonus.secondaryChoiceDiscount && !_this7.props.areSecondaryChoiceBonusesAvailable;
                }) || []).map(function(b) {
                    return _objectSpread({}, b, {
                        mandatory: !!b.discountGroup || mandatoryProducts && mandatoryProducts.includes(b.code)
                    });
                });
                return !!magnumDiscounts.length ? magnumDiscounts : [].concat(babelHelpers.toConsumableArray(this.getAllVases()), babelHelpers.toConsumableArray(props.entry.vases)).filter(function(service) {
                    return service.addonType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT && bonusEntries.some(function(e) {
                        return e.code === service.productCode;
                    });
                }).map(function(bonus) {
                    var entry = bonusEntries.filter(function(e) {
                        return e.code === bonus.productCode;
                    })[0];

                    if (entry) {
                        bonus.checkoutPrice = entry.payNowCost;
                        bonus.firstBillPrice = entry.oneTimeCost;
                        bonus.monthlyPrices = entry.monthlyCosts;
                    }

                    bonus.mandatory = !!entry.discountGroup || mandatoryProducts && mandatoryProducts.includes(bonus.productCode);
                    return bonus;
                });
            }
        }, {
            key: "getDiscounts",
            value: function getDiscounts(bonusEntries) {
                return bonusEntries.map(function(bonus) {
                    var copy = _objectSpread({}, bonus);

                    if (bonus.monthlyCosts) {
                        copy.monthlyPrices = bonus.monthlyCosts.map(function(cost) {
                            var copyCost = _objectSpread({}, cost);

                            copyCost.net = _OnlineUtils.default.formatPrice(copyCost.price);
                            copyCost.gross = _OnlineUtils.default.formatPrice(copyCost.price);
                            return copyCost;
                        });
                    }

                    copy.unchangeable = true;
                    copy.name = copy.description;
                    copy.description = "";
                    return copy;
                });
            }
        }]);
        return ConvergentProductEntries;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isTvSubEntry: (0, _selectors.isTvSubEntry)(state),
            configurables: state.cart.convergentConfigurables,
            bonusEntries: (0, _selectors.getBonusEntry)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(ConvergentProductEntries);

    _exports.default = _default;
});
//# sourceMappingURL=ConvergentProductEntries.js.map