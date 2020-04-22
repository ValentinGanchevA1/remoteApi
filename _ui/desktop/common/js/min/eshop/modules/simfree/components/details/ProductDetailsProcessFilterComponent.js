define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/components/details/view/ProductDetailsProcessFilterView", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/selectors", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/core/enum/MarketSegment", "../../../configurator/selectors/filters", "../../../auth/selectors/authorization", "../../selectors", "../../../core/constants/OfferTypeEnum", "../../../core/constants/TransactionProcessTypeEnum"], function(e, t, s, r, o, l, n, c, i, a, u, p, f, d, h, y, g) {
    "use strict";

    function P(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), o = babelHelpers.interopRequireDefault(o), c = babelHelpers.interopRequireDefault(c), p = babelHelpers.interopRequireDefault(p), y = babelHelpers.interopRequireDefault(y), g = babelHelpers.interopRequireDefault(g);
    var b = function(e) {
            babelHelpers.inherits(r, e);
            var s = P(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = s.call(this, e)).props.fetchMiniCart(), t.selectProcessType = t.selectProcessType.bind(babelHelpers.assertThisInitialized(t)), t.selectLoyaltyLength = t.selectLoyaltyLength.bind(babelHelpers.assertThisInitialized(t)), t.selectSwitchButton = t.selectSwitchButton.bind(babelHelpers.assertThisInitialized(t)), t.getSelectedExtProcessSelectIndexes = t.getSelectedExtProcessSelectIndexes.bind(babelHelpers.assertThisInitialized(t)), t.getExtProcessSelectForLevel = t.getExtProcessSelectForLevel.bind(babelHelpers.assertThisInitialized(t)), t.selectProcessForExtProcessSelect = t.selectProcessForExtProcessSelect.bind(babelHelpers.assertThisInitialized(t)), t.createInstallmentOptions = t.createInstallmentOptions.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(r, [{
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
                key: "selectSwitchButton",
                value: function(e) {
                    e && c.default.redirectToAnotherPage(e)
                }
            }, {
                key: "convertSwitchConf",
                value: function(e) {
                    return e && e.map(function(e) {
                        return e.selected = e.active, e
                    })
                }
            }, {
                key: "getProcessLabel",
                value: function() {
                    return this.props.selectedOfferType === y.default.DATA ? "Internet mobilny" : this.props.selectedOfferType === y.default.VOICE ? "Abonament komórkowy" : "Proces"
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
                    var r = this,
                        o = e.map(function(e, t) {
                            return r.getSelectedExtProcessSelectIndexesForOption(e, t, s)
                        }).find(function(e) {
                            return e
                        });
                    return !!o && this.getSelectedIndex(o, t)
                }
            }, {
                key: "getSelectedIndex",
                value: function(e, t) {
                    return -1 !== t ? [t].concat(babelHelpers.toConsumableArray(e)) : e
                }
            }, {
                key: "getExtProcessSelectForLevel",
                value: function(e) {
                    for (var t = this.getSelectedExtProcessSelectIndexes(), s = this.props.extProcessSelectConfig, r = 0; r < e; r++) s = s.options[t[r]];
                    return s
                }
            }, {
                key: "selectProcessForExtProcessSelect",
                value: function(s) {
                    var r = this;
                    return function(e) {
                        var t = r.getProcessForExtProcessSelect(s.options[e.value]);
                        r.props.selectProcessType(t)
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
                key: "createInstallmentOptions",
                value: function() {
                    return [{
                        value: this.props.installmentCount,
                        description: this.props.installmentCount ? this.props.installmentCount : "brak"
                    }]
                }
            }, {
                key: "disabledProcessesByStayLove",
                value: function() {
                    if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === y.default.VOICE_LDF) {
                        var t = [];
                        return this.props.processTypeData.forEach(function(e) {
                            return e.value !== g.default.RETENTION && t.push(e)
                        }), t
                    }
                    return []
                }
            }, {
                key: "excludeProcessesFromFilter",
                value: function() {
                    var e = this.disabledProcessesByStayLove();
                    return this.props.processTypeData.filter(function(t) {
                        return 0 === e.filter(function(e) {
                            return e.value === t.value
                        }).length
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return -1 < [y.default.CONVERGENT].indexOf(this.props.selectedOfferType) ? null : t.default.createElement("div", {
                        id: "offer-filters-loader",
                        "data-js-module": "core/modules/loader",
                        "data-js-options": '{"coverOpacity": 50,"fadeDuration": 40,"preloaderAdditionalClass" : "g-gray1-bg"}'
                    }, t.default.createElement(o.default, {
                        processLabel: this.getProcessLabel(),
                        processTypeData: this.excludeProcessesFromFilter(),
                        selectedProcessValue: this.props.selectedProcessValue,
                        selectProcessCallback: this.selectProcessType,
                        clientContextCheckboxConfig: S(this.props.filterCmsDescriptions),
                        loyaltyLengthData: this.props.loyaltyLengthData,
                        selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                        selectLoyaltyLengthCallback: this.selectLoyaltyLength,
                        channels: this.props.channels,
                        isAddTerminalToOfferBundleNo: !!this.props.addTerminalToOfferBundleNo || void 0,
                        disabled: !!this.props.addTerminalToOfferBundleNo || void 0,
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
                    }))
                }
            }]), r
        }(t.Component),
        S = function(e) {
            return {
                label: e && e.clientContextLabel || "Pokaż rabaty dla Klientów Orange",
                tooltip: e && e.clientContextTooltip || "Posiadając Orange Love możesz otrzymać rabat -20 zł za łącznie usług w Orange na Plany Komórkowe Standardowy, Optymalny, Wzbogacony. Rabat naliczany będzie co miesiąc (najpóźniej od 2-giej faktury po spełnieniu warunków promocji)."
            }
        },
        x = (0, s.connect)(function(e) {
            return {
                selectedOffer: (0, u.getSelectedOffer)(e),
                selectedOfferType: (0, l.getSelectedOfferType)(e),
                selectedProcessValue: (0, l.getSelectedProcessTypeValue)(e),
                processTypeData: (0, l.getProcessTypeFiltersForSelect)(e),
                selectedLoyaltyLengthValue: (0, l.getSelectedLoyaltyLengthValue)(e),
                loyaltyLengthData: (0, l.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(e),
                filterCmsDescriptions: (0, n.getSelectedOfferTypeDescriptions)(e),
                addTerminalToOfferBundleNo: (0, a.getAddTerminalToOfferBundleNo)(e),
                isB2B: p.default.isB2B((0, l.getMarketContext)(e)),
                extProcessSelectConfig: (0, f.getExtProcessSelectConfigFiltered)(e),
                installmentCount: (0, u.getInstallmentCount)(e),
                contractRole: (0, u.getContractRole)(e)[0],
                offerFiltersLoading: (0, f.getOfferFiltersLoading)(e),
                marketContext: (0, l.getMarketContext)(e),
                stayLoveRetentionMSISDN: (0, d.getStayLoveRetentionMSISDN)(e),
                isDuet: (0, h.isDuet)(e)
            }
        }, function(t) {
            return {
                selectProcessType: function(e) {
                    return t((0, r.selectProductDetailsProcessType)(e))
                },
                selectLoyaltyLength: function(e) {
                    return t((0, r.selectProductDetailsLoyaltyLength)(e))
                },
                fetchOfferFilters: function() {
                    return t((0, r.fetchOfferFilters)())
                },
                fetchMiniCart: function() {
                    return t((0, i.fetchMiniCart)())
                }
            }
        })(b);
    e.default = x
});
//# sourceMappingURL=ProductDetailsProcessFilterComponent.js.map