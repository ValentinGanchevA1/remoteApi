define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/actions/filter", "../../../core/constants/TransactionProcessTypeEnum", "eshop/modules/core/enum/MarketSegment", "prop-types", "../../../auth/selectors/authorization", "../../selectors", "../../../core/constants/OfferTypeEnum"], function(e, t, s, o, r, n, l, c, i, a, p, u, f, d, h, g, y) {
    "use strict";

    function S(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u), f = babelHelpers.interopRequireDefault(f), d = babelHelpers.interopRequireWildcard(d), y = babelHelpers.interopRequireDefault(y);
    var P = function(e) {
            babelHelpers.inherits(o, e);
            var s = S(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = s.call(this, e)).selectProcessType = t.selectProcessType.bind(babelHelpers.assertThisInitialized(t)), t.selectLoyaltyLength = t.selectLoyaltyLength.bind(babelHelpers.assertThisInitialized(t)), t.selectOffer = t.selectOffer.bind(babelHelpers.assertThisInitialized(t)), t.selectDeviceInstalmentsCount = t.selectDeviceInstalmentsCount.bind(babelHelpers.assertThisInitialized(t)), t.changeSearchDeviceValue = t.changeSearchDeviceValue.bind(babelHelpers.assertThisInitialized(t)), t.getSelectedExtProcessSelectIndexes = t.getSelectedExtProcessSelectIndexes.bind(babelHelpers.assertThisInitialized(t)), t.getExtProcessSelectForLevel = t.getExtProcessSelectForLevel.bind(babelHelpers.assertThisInitialized(t)), t.selectProcessForExtProcessSelect = t.selectProcessForExtProcessSelect.bind(babelHelpers.assertThisInitialized(t)), t.getInfo = t.getInfo.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(o, [{
                key: "componentWillMount",
                value: function() {
                    this.props.deviceInstalmentsConfiguration && this.props.setDeviceInstalmentsConfiguration(this.props.deviceInstalmentsConfiguration)
                }
            }, {
                key: "selectProcessType",
                value: function(e) {
                    this.props.selectProcessType(e.value)
                }
            }, {
                key: "selectLoyaltyLength",
                value: function(e) {
                    this.props.selectLoyaltyLength(e.value)
                }
            }, {
                key: "selectOffer",
                value: function(e) {
                    this.props.selectOffer(e)
                }
            }, {
                key: "selectDeviceInstalmentsCount",
                value: function(e) {
                    this.props.selectDeviceInstalmentsCount(e.value)
                }
            }, {
                key: "getProcessLabel",
                value: function() {
                    return this.props.selectedOfferType === y.default.DATA ? "Internet mobilny" : this.props.selectedOfferType === y.default.VOICE ? "Abonament komórkowy" : "Proces"
                }
            }, {
                key: "changeSearchDeviceValue",
                value: function(e) {
                    this.props.changeSearchDeviceValue(e.value)
                }
            }, {
                key: "disabledProcessesByStayLove",
                value: function() {
                    if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === y.default.VOICE_LDF) {
                        var t = [];
                        return this.props.processTypesForSelect.forEach(function(e) {
                            return e.value !== u.default.RETENTION && t.push(e)
                        }), t
                    }
                    return []
                }
            }, {
                key: "excludeProcessesFromDevicesFilter",
                value: function() {
                    var e = [u.default.ASSIGNMENT, u.default.ASSIGNMENT_DEATH, u.default.ASSIGNMENT_B2C_B2B, u.default.ASSIGNMENT_B2C_JDG],
                        s = this.disabledProcessesByStayLove();
                    return this.props.processTypesForSelect && this.props.processTypesForSelect.filter(function(t) {
                        return -1 === e.indexOf(t.value) && 0 === s.filter(function(e) {
                            return e.value == t.value
                        }).length
                    })
                }
            }, {
                key: "getPropositionDetails",
                value: function() {
                    var e = this.props.entryUnderChange;
                    if (!e) return this.props.propositionDetails;
                    if (this.props.propositionDetails) try {
                        return JSON.parse(e.details)
                    } catch (e) {}
                }
            }, {
                key: "getSelectedExtProcessSelectIndexes",
                value: function() {
                    return this.getSelectedExtProcessSelectIndexesForOption(this.props.extProcessSelectConfig, -1, this.props.selectedProcessValue)
                }
            }, {
                key: "getSelectedExtProcessSelectIndexesForOption",
                value: function(e, t, s) {
                    return e.options && 0 < e.options.length ? this.getSelectedExtProcessSelectIndexesForOptions(e.options, t, s) : e.process === s && [t]
                }
            }, {
                key: "getSelectedExtProcessSelectIndexesForOptions",
                value: function(e, t, s) {
                    var o = this,
                        r = e.map(function(e, t) {
                            return o.getSelectedExtProcessSelectIndexesForOption(e, t, s)
                        }).find(function(e) {
                            return e
                        });
                    return !!r && this.getSelectedIndex(r, t)
                }
            }, {
                key: "getSelectedIndex",
                value: function(e, t) {
                    return -1 !== t ? [t].concat(babelHelpers.toConsumableArray(e)) : e
                }
            }, {
                key: "getExtProcessSelectForLevel",
                value: function(e) {
                    for (var t = this.getSelectedExtProcessSelectIndexes(), s = this.props.extProcessSelectConfig, o = 0; o < e; o++) s = s.options[t[o]];
                    return s
                }
            }, {
                key: "selectProcessForExtProcessSelect",
                value: function(s) {
                    var o = this;
                    return function(e) {
                        var t = o.getProcessForExtProcessSelect(s.options[e.value]);
                        o.props.selectProcessType(t)
                    }
                }
            }, {
                key: "createOptionsForExtProcessSelect",
                value: function(e) {
                    return e.options.map(function(e, t) {
                        return {
                            value: t,
                            description: e.description
                        }
                    })
                }
            }, {
                key: "getProcessForExtProcessSelect",
                value: function(e) {
                    for (; !e.process;) e = e.options[0];
                    return e.process
                }
            }, {
                key: "getInfo",
                value: function() {
                    return {
                        label: this.props.descriptions["infoDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)],
                        tooltip: this.props.descriptions["infoTooltipDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)]
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return t.default.cloneElement(this.props.children, {
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
                        hide: !this.props.showProductListOfferFilters || this.props.selectedOfferType === y.default.SIMFREE,
                        detailsTable: this.getPropositionDetails(),
                        entry: this.props.entryUnderChange,
                        clientContextCheckboxConfig: v(this.props.filterCmsDescriptions),
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
                    })
                }
            }]), o
        }(t.default.Component),
        v = function(e) {
            return {
                label: e && e.clientContextLabel || "Pokaż rabaty dla Klientów Orange",
                tooltip: e && e.clientContextTooltip || "Posiadając Orange Love możesz otrzymać rabat -20 zł za łącznie usług w Orange na Plany Komórkowe Standardowy, Optymalny, Wzbogacony. Rabat naliczany będzie co miesiąc (najpóźniej od 2-giej faktury po spełnieniu warunków promocji)."
            }
        };
    P.PropTypes = {
        softBundleGroup: d.string
    };
    var b = (0, s.connect)(function(e) {
        return {
            propositionName: (0, l.getNameForSelectedOffer)(e),
            propositionDetails: (0, l.getLongDescriptionTableForSelectedOffer)(e),
            processTypesForSelect: (0, n.getProcessTypeFiltersForSelect)(e),
            loyaltyLengthsForSelect: (0, n.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(e),
            selectedProcessValue: (0, n.getSelectedProcessTypeValue)(e),
            selectedLoyaltyLengthValue: (0, n.getSelectedLoyaltyLengthValue)(e),
            selectedDeviceInstalmentsCountValue: (0, l.getCurrentDeviceInstalmentsCountValue)(e),
            deviceInstalmentsConfigurationForSelect: (0, l.getDeviceInstalmentsCountForSelect)(e),
            offersInContext: (0, l.getOffersDataInContext)(e),
            selectedOffer: (0, l.getSelectedOfferId)(e),
            selectedOfferType: (0, n.getSelectedOfferType)(e),
            showProductListOfferFilters: (0, o.getCurrentSelectedAvailableProductsKey)(e),
            offersLoading: (0, a.getOffersLoading)(e),
            mnpPriceDescription: (0, l.getMnpPriceDescriptionForSelectedOffer)(e),
            selectedRatePlanName: (0, l.getSelectedOfferRatePlanName)(e),
            selectedOfferObject: (0, l.getSelectedOffer)(e),
            clientContext: (0, n.getClientContext)(e),
            contractRole: (0, l.getContractRole)(e),
            getContractRoleInProgress: (0, l.getContractRoleInProgress)(e),
            loyaltyLength: (0, n.getSelectedLoyaltyLengthValue)(e),
            filterCmsDescriptions: (0, o.getSelectedOfferTypeDescriptions)(e),
            addTerminalToOfferBundleNo: (0, r.getAddTerminalToOfferBundleNo)(e),
            searchValue: (0, o.getSearchValue)(e),
            entryUnderChange: (0, r.getEntryUnderChange)(e),
            isB2B: f.default.isB2B((0, n.getMarketContext)(e)),
            extProcessSelectConfig: (0, n.getExtProcessSelectConfig)(e),
            softBundleGroup: (0, o.getSelectedSoftBundleGroup)(e),
            marketContext: (0, n.getMarketContext)(e),
            stayLoveRetentionMSISDN: (0, h.getStayLoveRetentionMSISDN)(e),
            isDuet: (0, g.isDuet)(e)
        }
    }, function(t) {
        return {
            selectProcessType: function(e) {
                return t((0, c.selectProductListProcessType)(e))
            },
            selectLoyaltyLength: function(e) {
                return t((0, c.selectProductListLoyaltyLength)(e))
            },
            selectOffer: function(e) {
                return t((0, i.setSelectedOfferForProductList)(e))
            },
            selectDeviceInstalmentsCount: function(e) {
                return t((0, i.setSelectedDeviceInstalmentsCountForProductList)(parseInt(e)))
            },
            setDeviceInstalmentsConfiguration: function(e) {
                return t((0, i.setDeviceInstalmentsConfiguration)(e))
            },
            changeSearchDeviceValue: function(e) {
                return t((0, p.changeSearchDeviceValue)(e))
            }
        }
    })(P);
    e.default = b
});
//# sourceMappingURL=OfferDeviceFilterComponent.js.map