define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/actions/filter", "../../../core/constants/TransactionProcessTypeEnum", "eshop/modules/core/enum/MarketSegment", "prop-types", "../../../auth/selectors/authorization", "../../selectors", "../../../core/constants/OfferTypeEnum"], function(_exports, _react, _reactRedux, _selectors, _selectors2, _filters, _offers, _filters2, _offers2, _metaData, _filter, _TransactionProcessTypeEnum, _MarketSegment, PropTypes, _authorization, _selectors3, _OfferTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    PropTypes = babelHelpers.interopRequireWildcard(PropTypes);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    var OfferDeviceFilterComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OfferDeviceFilterComponent, _React$Component);

        var _super = _createSuper(OfferDeviceFilterComponent);

        function OfferDeviceFilterComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, OfferDeviceFilterComponent);
            _this = _super.call(this, props);
            _this.selectProcessType = _this.selectProcessType.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectLoyaltyLength = _this.selectLoyaltyLength.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectOffer = _this.selectOffer.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectDeviceInstalmentsCount = _this.selectDeviceInstalmentsCount.bind(babelHelpers.assertThisInitialized(_this));
            _this.changeSearchDeviceValue = _this.changeSearchDeviceValue.bind(babelHelpers.assertThisInitialized(_this));
            _this.getSelectedExtProcessSelectIndexes = _this.getSelectedExtProcessSelectIndexes.bind(babelHelpers.assertThisInitialized(_this));
            _this.getExtProcessSelectForLevel = _this.getExtProcessSelectForLevel.bind(babelHelpers.assertThisInitialized(_this));
            _this.selectProcessForExtProcessSelect = _this.selectProcessForExtProcessSelect.bind(babelHelpers.assertThisInitialized(_this));
            _this.getInfo = _this.getInfo.bind(babelHelpers.assertThisInitialized(_this));
            console.warn("^^^^^^^^^^^^^^^^^^^^OfferDeviceFilterComponent constructor props^^^^^^^^^^^^^^^^^^^^");
            console.warn(_this.props);
            return _this;
        }

        babelHelpers.createClass(OfferDeviceFilterComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.deviceInstalmentsConfiguration) {
                    this.props.setDeviceInstalmentsConfiguration(this.props.deviceInstalmentsConfiguration);
                }
            }
        }, {
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
            key: "selectOffer",
            value: function selectOffer(value) {
                this.props.selectOffer(value);
            }
        }, {
            key: "selectDeviceInstalmentsCount",
            value: function selectDeviceInstalmentsCount(e) {
                this.props.selectDeviceInstalmentsCount(e.value);
            }
        }, {
            key: "getProcessLabel",
            value: function getProcessLabel() {
                if (this.props.selectedOfferType === _OfferTypeEnum.default.DATA) return "Internet mobilny";
                if (this.props.selectedOfferType === _OfferTypeEnum.default.VOICE) return "Abonament komórkowy";
                return "Proces";
            }
        }, {
            key: "changeSearchDeviceValue",
            value: function changeSearchDeviceValue(e) {
                this.props.changeSearchDeviceValue(e.value);
            }
        }, {
            key: "disabledProcessesByStayLove",
            value: function disabledProcessesByStayLove() {
                if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === _OfferTypeEnum.default.VOICE_LDF) {
                    console.log("OPTIONS TO DISABLE ", this.props.processTypesForSelect);
                    var optionsToDisable = [];
                    this.props.processTypesForSelect.forEach(function(option) {
                        return option.value !== _TransactionProcessTypeEnum.default.RETENTION && optionsToDisable.push(option);
                    });
                    console.log("OPTIONS TO DISABLE ", optionsToDisable);
                    return optionsToDisable;
                }

                return [];
            }
        }, {
            key: "excludeProcessesFromDevicesFilter",
            value: function excludeProcessesFromDevicesFilter() {
                var processTypesToExclude = [_TransactionProcessTypeEnum.default.ASSIGNMENT, _TransactionProcessTypeEnum.default.ASSIGNMENT_DEATH, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_B2B, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_JDG];
                var processTypesToExcludeByStayLove = this.disabledProcessesByStayLove();
                console.log("processTypesToExcludeByStayLove", processTypesToExcludeByStayLove);
                return this.props.processTypesForSelect && this.props.processTypesForSelect.filter(function(processType) {
                    return processTypesToExclude.indexOf(processType.value) === -1 && processTypesToExcludeByStayLove.filter(function(processTypeNotStayLove) {
                        return processTypeNotStayLove.value == processType.value;
                    }).length === 0;
                });
            }
        }, {
            key: "getPropositionDetails",
            value: function getPropositionDetails() {
                var entryUnderChange = this.props.entryUnderChange;

                if (entryUnderChange) {
                    if (this.props.propositionDetails) {
                        //this condition is a dirty hack to delay entryUnderChange.details render
                        try {
                            return JSON.parse(entryUnderChange.details);
                        } catch (err) {
                            console.log("## details on cart parsing error##");
                        }
                    }
                } else {
                    return this.props.propositionDetails;
                }
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
            key: "getInfo",
            value: function getInfo() {
                return {
                    label: this.props.descriptions["infoDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)],
                    tooltip: this.props.descriptions["infoTooltipDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)]
                };
            }
        }, {
            key: "render",
            value: function render() {
                return _react.default.cloneElement(this.props.children, {
                    processLabel: this.getProcessLabel(),
                    header: this.props.descriptions.detailsPopupHeader,
                    propositionName: this.props.propositionName,
                    processTypesForSelect: this.excludeProcessesFromDevicesFilter(),
                    loyaltyLengthsForSelect: this.props.loyaltyLengthsForSelect,
                    loyaltyLength: this.props.loyaltyLength,
                    deviceInstalmentsCountForSelect: this.props.deviceInstalmentsConfigurationForSelect,
                    selectProcessCallback: this.selectProcessType,
                    selectLoyaltyLengthCallback: this.selectLoyaltyLength,
                    selectedProcessValue: this.props.selectedProcessValue,
                    selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                    selectedDeviceInstalmentsCountValue: this.props.selectedDeviceInstalmentsCountValue,
                    offers: this.props.offersInContext && this.props.offersInContext.offers,
                    selectOfferCallback: this.selectOffer,
                    selectDeviceInstalmentsCountCallback: this.selectDeviceInstalmentsCount,
                    selectedOffer: this.props.selectedOffer,
                    selectedOfferType: this.props.selectedOfferType,
                    hide: !this.props.showProductListOfferFilters || this.props.selectedOfferType === _OfferTypeEnum.default.SIMFREE,
                    detailsTable: this.getPropositionDetails(),
                    entry: this.props.entryUnderChange,
                    clientContextCheckboxConfig: getClientContextCheckboxConfig(this.props.filterCmsDescriptions),
                    detailsLabelText: this.props.descriptions.detailLabelText,
                    loading: this.props.offersLoading,
                    mnpPriceDescription: this.props.mnpPriceDescription,
                    selectedRatePlanName: this.props.selectedRatePlanName,
                    selectedOfferObject: this.props.selectedOfferObject,
                    clientContext: this.props.clientContext,
                    contractRole: this.props.contractRole && this.props.contractRole[0],
                    getContractRoleInProgress: this.props.getContractRoleInProgress,
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    descriptions: this.props.descriptions,
                    channels: this.props.channels,
                    addTerminalToOfferBundleNo: this.props.addTerminalToOfferBundleNo,
                    handleChangeSearchDeviceValue: this.changeSearchDeviceValue,
                    searchValue: this.props.searchValue,
                    isB2B: this.props.isB2B,
                    extProcessSelectConfig: this.props.extProcessSelectConfig,
                    getSelectedExtProcessSelectIndexes: this.getSelectedExtProcessSelectIndexes,
                    getExtProcessSelectForLevel: this.getExtProcessSelectForLevel,
                    createOptionsForExtProcessSelect: this.createOptionsForExtProcessSelect,
                    selectProcessForExtProcessSelect: this.selectProcessForExtProcessSelect,
                    info: this.getInfo(),
                    softBundleGroup: this.props.softBundleGroup,
                    stayLoveRetentionMSISDN: this.props.stayLoveRetentionMSISDN,
                    isDuet: this.props.isDuet
                });
            }
        }]);
        return OfferDeviceFilterComponent;
    }(_react.default.Component);

    var getClientContextCheckboxConfig = function getClientContextCheckboxConfig(desc) {
        return {
            label: desc && desc.clientContextLabel || "Pokaż rabaty dla Klientów Orange",
            tooltip: desc && desc.clientContextTooltip || "Posiadając Orange Love możesz otrzymać rabat -20 zł za łącznie usług w Orange na Plany Komórkowe Standardowy, Optymalny, Wzbogacony. Rabat naliczany będzie co miesiąc (najpóźniej od 2-giej faktury po spełnieniu warunków promocji)."
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            propositionName: (0, _offers.getNameForSelectedOffer)(state),
            propositionDetails: (0, _offers.getLongDescriptionTableForSelectedOffer)(state),
            processTypesForSelect: (0, _filters.getProcessTypeFiltersForSelect)(state),
            loyaltyLengthsForSelect: (0, _filters.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(state),
            selectedProcessValue: (0, _filters.getSelectedProcessTypeValue)(state),
            selectedLoyaltyLengthValue: (0, _filters.getSelectedLoyaltyLengthValue)(state),
            selectedDeviceInstalmentsCountValue: (0, _offers.getCurrentDeviceInstalmentsCountValue)(state),
            deviceInstalmentsConfigurationForSelect: (0, _offers.getDeviceInstalmentsCountForSelect)(state),
            offersInContext: (0, _offers.getOffersDataInContext)(state),
            selectedOffer: (0, _offers.getSelectedOfferId)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            showProductListOfferFilters: (0, _selectors.getCurrentSelectedAvailableProductsKey)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            mnpPriceDescription: (0, _offers.getMnpPriceDescriptionForSelectedOffer)(state),
            selectedRatePlanName: (0, _offers.getSelectedOfferRatePlanName)(state),
            selectedOfferObject: (0, _offers.getSelectedOffer)(state),
            clientContext: (0, _filters.getClientContext)(state),
            contractRole: (0, _offers.getContractRole)(state),
            getContractRoleInProgress: (0, _offers.getContractRoleInProgress)(state),
            loyaltyLength: (0, _filters.getSelectedLoyaltyLengthValue)(state),
            filterCmsDescriptions: (0, _selectors.getSelectedOfferTypeDescriptions)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            searchValue: (0, _selectors.getSearchValue)(state),
            entryUnderChange: (0, _selectors2.getEntryUnderChange)(state),
            isB2B: _MarketSegment.default.isB2B((0, _filters.getMarketContext)(state)),
            extProcessSelectConfig: (0, _filters.getExtProcessSelectConfig)(state),
            softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(state),
            marketContext: (0, _filters.getMarketContext)(state),
            stayLoveRetentionMSISDN: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            isDuet: (0, _selectors3.isDuet)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectProcessType: function selectProcessType(value) {
                return dispatch((0, _filters2.selectProductListProcessType)(value));
            },
            selectLoyaltyLength: function selectLoyaltyLength(value) {
                return dispatch((0, _filters2.selectProductListLoyaltyLength)(value));
            },
            selectOffer: function selectOffer(value) {
                return dispatch((0, _offers2.setSelectedOfferForProductList)(value));
            },
            selectDeviceInstalmentsCount: function selectDeviceInstalmentsCount(value) {
                return dispatch((0, _offers2.setSelectedDeviceInstalmentsCountForProductList)(parseInt(value)));
            },
            setDeviceInstalmentsConfiguration: function setDeviceInstalmentsConfiguration(value) {
                return dispatch((0, _offers2.setDeviceInstalmentsConfiguration)(value));
            },
            changeSearchDeviceValue: function changeSearchDeviceValue(value) {
                return dispatch((0, _filter.changeSearchDeviceValue)(value));
            }
        };
    };

    OfferDeviceFilterComponent.PropTypes = {
        softBundleGroup: PropTypes.string
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OfferDeviceFilterComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OfferDeviceFilterComponent.js.map