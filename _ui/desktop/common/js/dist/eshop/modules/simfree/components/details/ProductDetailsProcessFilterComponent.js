define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/components/details/view/ProductDetailsProcessFilterView", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/selectors", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/core/enum/MarketSegment", "../../../configurator/selectors/filters", "../../../auth/selectors/authorization", "../../selectors", "../../../core/constants/OfferTypeEnum", "../../../core/constants/TransactionProcessTypeEnum"], function(_exports, _react, _reactRedux, _filters, _ProductDetailsProcessFilterView, _filters2, _selectors, _OnlineUtils, _cart, _selectors2, _offers, _MarketSegment, _filters3, _authorization, _selectors3, _OfferTypeEnum, _TransactionProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductDetailsProcessFilterView = babelHelpers.interopRequireDefault(_ProductDetailsProcessFilterView);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
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

    var ProductDetailsProcessFilterComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsProcessFilterComponent, _Component);

        var _super = _createSuper(ProductDetailsProcessFilterComponent);

        function ProductDetailsProcessFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductDetailsProcessFilterComponent);
            _this = _super.call(this, props);

            _this.props.fetchMiniCart();

            _this.selectProcessType = _this.selectProcessType.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectLoyaltyLength = _this.selectLoyaltyLength.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectSwitchButton = _this.selectSwitchButton.bind(babelHelpers.assertThisInitialized(_this));
            _this.getSelectedExtProcessSelectIndexes = _this.getSelectedExtProcessSelectIndexes.bind(babelHelpers.assertThisInitialized(_this));
            _this.getExtProcessSelectForLevel = _this.getExtProcessSelectForLevel.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectProcessForExtProcessSelect = _this.selectProcessForExtProcessSelect.bind(babelHelpers.assertThisInitialized(_this));
            _this.createInstallmentOptions = _this.createInstallmentOptions.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(ProductDetailsProcessFilterComponent, [{
            key: "selectProcessType",
            value: function selectProcessType(e) {
                this.props.selectProcessType(e.value);
            }
        }, {
            key: "selectLoyaltyLength",
            value: function selectLoyaltyLength(e) {
                this.props.selectLoyaltyLength(e.value);
            }
        }, {
            key: "selectSwitchButton",
            value: function selectSwitchButton(url) {
                url && _OnlineUtils.default.redirectToAnotherPage(url);
            }
        }, {
            key: "convertSwitchConf",
            value: function convertSwitchConf(conf) {
                return conf && conf.map(function(c) {
                    c.selected = c.active;
                    return c;
                });
            }
        }, {
            key: "getProcessLabel",
            value: function getProcessLabel() {
                if (this.props.selectedOfferType === _OfferTypeEnum.default.DATA) return "Internet mobilny";
                if (this.props.selectedOfferType === _OfferTypeEnum.default.VOICE) return "Abonament komórkowy";
                return "Proces";
            }
        }, {
            key: "getSelectedExtProcessSelectIndexes",
            value: function getSelectedExtProcessSelectIndexes() {
                return this.getSelectedExtProcessSelectIndexesForOption(this.props.extProcessSelectConfig, -1, this.props.selectedProcessValue);
            }
        }, {
            key: "getSelectedExtProcessSelectIndexesForOption",
            value: function getSelectedExtProcessSelectIndexesForOption(option, index, process) {
                if (option.options && option.options.length > 0) {
                    return this.getSelectedExtProcessSelectIndexesForOptions(option.options, index, process);
                }

                if (option.process === process) {
                    return [index];
                }

                return false;
            }
        }, {
            key: "getSelectedExtProcessSelectIndexesForOptions",
            value: function getSelectedExtProcessSelectIndexesForOptions(options, index, process) {
                var _this2 = this;

                var found = options.map(function(options, index) {
                    return _this2.getSelectedExtProcessSelectIndexesForOption(options, index, process);
                }).find(function(result) {
                    return result;
                });

                if (found) {
                    return this.getSelectedIndex(found, index);
                }

                return false;
            }
        }, {
            key: "getSelectedIndex",
            value: function getSelectedIndex(found, index) {
                if (index !== -1) {
                    return [index].concat(babelHelpers.toConsumableArray(found));
                }

                return found;
            }
        }, {
            key: "getExtProcessSelectForLevel",
            value: function getExtProcessSelectForLevel(level) {
                var selectedExtProcessSelectIndexes = this.getSelectedExtProcessSelectIndexes();
                var extProcessSelect = this.props.extProcessSelectConfig;

                for (var i = 0; i < level; i++) {
                    extProcessSelect = extProcessSelect.options[selectedExtProcessSelectIndexes[i]];
                }

                return extProcessSelect;
            }
        }, {
            key: "selectProcessForExtProcessSelect",
            value: function selectProcessForExtProcessSelect(extProcessSelect) {
                var _this3 = this;

                return function(e) {
                    var process = _this3.getProcessForExtProcessSelect(extProcessSelect.options[e.value]);

                    _this3.props.selectProcessType(process);
                };
            }
        }, {
            key: "createOptionsForExtProcessSelect",
            value: function createOptionsForExtProcessSelect(extProcessSelect) {
                return extProcessSelect.options.map(function(option, index) {
                    return {
                        value: index,
                        description: option.description
                    };
                });
            }
        }, {
            key: "getProcessForExtProcessSelect",
            value: function getProcessForExtProcessSelect(extProcessSelect) {
                while (!extProcessSelect.process) {
                    extProcessSelect = extProcessSelect.options[0];
                }

                return extProcessSelect.process;
            }
        }, {
            key: "createInstallmentOptions",
            value: function createInstallmentOptions() {
                return [{
                    value: this.props.installmentCount,
                    description: this.props.installmentCount ? this.props.installmentCount : "brak"
                }];
            }
        }, {
            key: "disabledProcessesByStayLove",
            value: function disabledProcessesByStayLove() {
                if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === _OfferTypeEnum.default.VOICE_LDF) {
                    console.log("OPTIONS TO DISABLE ", this.props.processTypeData);
                    var optionsToDisable = [];
                    this.props.processTypeData.forEach(function(option) {
                        return option.value !== _TransactionProcessTypeEnum.default.RETENTION && optionsToDisable.push(option);
                    });
                    console.log("OPTIONS TO DISABLE ", optionsToDisable);
                    return optionsToDisable;
                }

                return [];
            }
        }, {
            key: "excludeProcessesFromFilter",
            value: function excludeProcessesFromFilter() {
                var processTypesToExcludeByStayLove = this.disabledProcessesByStayLove();
                console.log("processTypesToExcludeByStayLove", processTypesToExcludeByStayLove);
                return this.props.processTypeData.filter(function(processType) {
                    return processTypesToExcludeByStayLove.filter(function(processTypeNotStayLove) {
                        return processTypeNotStayLove.value === processType.value;
                    }).length === 0;
                });
            }
        }, {
            key: "render",
            value: function render() {
                if ([_OfferTypeEnum.default.CONVERGENT].indexOf(this.props.selectedOfferType) > -1) return null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "offer-filters-loader",
                    "data-js-module": "core/modules/loader",
                    "data-js-options": "{\"coverOpacity\": 50,\"fadeDuration\": 40,\"preloaderAdditionalClass\" : \"g-gray1-bg\"}"
                }, /*#__PURE__*/ _react.default.createElement(_ProductDetailsProcessFilterView.default, {
                    processLabel: this.getProcessLabel(),
                    processTypeData: this.excludeProcessesFromFilter(),
                    selectedProcessValue: this.props.selectedProcessValue,
                    selectProcessCallback: this.selectProcessType,
                    clientContextCheckboxConfig: getClientContextCheckboxConfig(this.props.filterCmsDescriptions),
                    loyaltyLengthData: this.props.loyaltyLengthData,
                    selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                    selectLoyaltyLengthCallback: this.selectLoyaltyLength,
                    channels: this.props.channels,
                    isAddTerminalToOfferBundleNo: !!this.props.addTerminalToOfferBundleNo ? true : undefined,
                    disabled: !!this.props.addTerminalToOfferBundleNo ? true : undefined,
                    selectedOfferType: this.props.selectedOfferType,
                    descriptions: this.props.descriptions,
                    selectedOffer: this.props.selectedOffer,
                    isB2B: this.props.isB2B,
                    extProcessSelectConfig: this.props.extProcessSelectConfig,
                    getSelectedExtProcessSelectIndexes: this.getSelectedExtProcessSelectIndexes,
                    getExtProcessSelectForLevel: this.getExtProcessSelectForLevel,
                    createOptionsForExtProcessSelect: this.createOptionsForExtProcessSelect,
                    selectProcessForExtProcessSelect: this.selectProcessForExtProcessSelect,
                    installmentOptions: this.createInstallmentOptions(),
                    installmentCount: this.props.installmentCount,
                    offerFiltersLoading: this.props.offerFiltersLoading,
                    marketContext: this.props.marketContext,
                    contractRole: this.props.contractRole,
                    isDuet: this.props.isDuet
                }));
            }
        }]);
        return ProductDetailsProcessFilterComponent;
    }(_react.Component);

    var getClientContextCheckboxConfig = function getClientContextCheckboxConfig(desc) {
        return {
            label: desc && desc.clientContextLabel || "Pokaż rabaty dla Klientów Orange",
            tooltip: desc && desc.clientContextTooltip || "Posiadając Orange Love możesz otrzymać rabat -20 zł za łącznie usług w Orange na Plany Komórkowe Standardowy, Optymalny, Wzbogacony. Rabat naliczany będzie co miesiąc (najpóźniej od 2-giej faktury po spełnieniu warunków promocji)."
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectProcessType: function selectProcessType(value) {
                return dispatch((0, _filters.selectProductDetailsProcessType)(value));
            },
            selectLoyaltyLength: function selectLoyaltyLength(value) {
                return dispatch((0, _filters.selectProductDetailsLoyaltyLength)(value));
            },
            fetchOfferFilters: function fetchOfferFilters() {
                return dispatch((0, _filters.fetchOfferFilters)());
            },
            fetchMiniCart: function fetchMiniCart() {
                return dispatch((0, _cart.fetchMiniCart)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOffer: (0, _offers.getSelectedOffer)(state),
            selectedOfferType: (0, _filters2.getSelectedOfferType)(state),
            selectedProcessValue: (0, _filters2.getSelectedProcessTypeValue)(state),
            processTypeData: (0, _filters2.getProcessTypeFiltersForSelect)(state),
            selectedLoyaltyLengthValue: (0, _filters2.getSelectedLoyaltyLengthValue)(state),
            loyaltyLengthData: (0, _filters2.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(state),
            filterCmsDescriptions: (0, _selectors.getSelectedOfferTypeDescriptions)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            isB2B: _MarketSegment.default.isB2B((0, _filters2.getMarketContext)(state)),
            extProcessSelectConfig: (0, _filters3.getExtProcessSelectConfigFiltered)(state),
            installmentCount: (0, _offers.getInstallmentCount)(state),
            contractRole: (0, _offers.getContractRole)(state)[0],
            offerFiltersLoading: (0, _filters3.getOfferFiltersLoading)(state),
            marketContext: (0, _filters2.getMarketContext)(state),
            stayLoveRetentionMSISDN: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            isDuet: (0, _selectors3.isDuet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsProcessFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsProcessFilterComponent.js.map