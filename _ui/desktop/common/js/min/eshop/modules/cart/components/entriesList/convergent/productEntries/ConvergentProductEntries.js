define(["exports", "react", "react-redux", "lodash", "./BuyMoreProductsEntry", "../../../../../checkout/constants/ProductEntryTypeEnum", "../../../../selectors", "../../../../../checkout/constants/AddonTypeEnum", "../../../../../checkout/constants/CartEntryTypeEnum", "../../shared/CommonProductEntries", "eshop/modules/magnum2/utils", "eshop/modules/magnum2/constants/ProcessTypeEnum", "../../../../../fix/components/console/CMSParagraphConsoleComponent", "eshop/utils/OnlineUtils", "../../utils/ConfigurableUtils", "../../../../../checkout/constants/ProcessTypeEnum"], function(e, s, t, u, i, c, n, a, l, d, p, f, y, o, b, h) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function g(r) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), u = babelHelpers.interopRequireDefault(u), i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), d = babelHelpers.interopRequireDefault(d), f = babelHelpers.interopRequireDefault(f), y = babelHelpers.interopRequireDefault(y), o = babelHelpers.interopRequireDefault(o), h = babelHelpers.interopRequireDefault(h);
    var v = function(e) {
            babelHelpers.inherits(r, e);
            var n = g(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), t = n.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "doContinueActionCallback", function() {
                    t.state.loader.callback && t.state.loader.show && t.hasConfigurables() && (OPL.UI.fire("modules.loader.hide", $("#buy-more-products")), t.state.loader.callback({
                        section: t.state.loader.section
                    }), t.setState({
                        loader: {}
                    }))
                }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "hasConfigurables", function() {
                    return t.props.configurables && t.props.configurables.configurables && t.props.configurables.configurables.length
                }), t.state = {
                    loader: {}
                }, t
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidUpdate",
                value: function() {
                    this.doContinueActionCallback()
                }
            }, {
                key: "render",
                value: function() {
                    var n = this,
                        e = this.props.sectionConf ? this.props.sectionConf.productSections : [];
                    f.default._2U == (0, p.getProcessType)(this.props.entry.entries) && (e = e.filter(function(e) {
                        return c.default.PARAGRAPH != e.entryType
                    }));
                    var t = this.props.configurables.configurables,
                        r = t && Object.keys(t) && Object.keys(t).map(function(e) {
                            return t[e]
                        }).reduce(function(e, t) {
                            return e.concat(t.mandatoryProducts)
                        }, []) || [],
                        o = this.getAllTvPackages(t),
                        a = {};
                    a[c.default.TERMINAL] = {
                        entries: this.getMobileTerminals(r),
                        onChange: this.props.onDeviceChange,
                        onRemove: this.props.onRemoveTerminal,
                        lowerInstallmentsClicked: this.props.lowerInstallmentsClicked
                    }, a[c.default.VAS] = {
                        entries: this.getVases(t, o),
                        onChange: this.props.onClickAddVas,
                        onRemove: this.props.onRemoveProduct
                    }, a[c.default.EURO_SET] = {
                        entries: this.getEuroSets(r),
                        onChange: this.props.onDeviceChange,
                        onRemove: this.props.onRemoveTerminal
                    }, a[c.default.TV_PACKAGE] = {
                        entries: this.getTvPackages(t, o),
                        onChange: this.props.onClickAddTvPackage,
                        onRemove: this.props.onRemoveProduct
                    }, a[c.default.SECONDARY_CHOICE] = {
                        entries: this.getBonusSection(this.props, r),
                        onChange: this.props.onClickAddVas,
                        onRemove: this.props.onRemoveProduct
                    };
                    var u = e.map(function(e, t) {
                        switch (e.entryType) {
                            case c.default.GADGET:
                                return s.default.createElement("div", {
                                    key: e.entryType + t,
                                    className: "g-white1-bg u-box-shadow u-spacing"
                                }, s.default.createElement(i.default, {
                                    buyMoreLabel: e.buyMoreLabel,
                                    icon: e.icon,
                                    addButtonClicked: function() {}
                                }));
                            case c.default.VAS:
                                return s.default.createElement("div", {
                                    key: e.entryType + t
                                }, s.default.createElement("div", {
                                    className: "g-white1-bg u-box-shadow u-spacing"
                                }, s.default.createElement("div", {
                                    id: "buy-more-products-vases-entry"
                                }, s.default.createElement(i.default, {
                                    buyMoreLabel: e.buyMoreLabel,
                                    icon: e.icon,
                                    addButtonClicked: function() {
                                        n.showBodyLoader(n.props.onClickAddVas, e)
                                    }
                                }))));
                            case c.default.TV_PACKAGE:
                                return s.default.createElement("div", {
                                    key: e.entryType + t
                                }, n.props.isTvSubEntry && s.default.createElement("div", {
                                    className: "g-white1-bg u-box-shadow u-spacing"
                                }, s.default.createElement("div", {
                                    id: "buy-more-products-tv-entry"
                                }, s.default.createElement(i.default, {
                                    buyMoreLabel: e.buyMoreLabel,
                                    icon: e.icon,
                                    addButtonClicked: function() {
                                        n.showBodyLoader(n.props.onClickAddTvPackage, e)
                                    }
                                }))));
                            case c.default.SECONDARY_CHOICE:
                                return s.default.createElement("div", {
                                    key: e.entryType + t
                                }, n.props.areSecondaryChoiceBonusesAvailable && s.default.createElement("div", {
                                    className: "g-white1-bg u-box-shadow u-spacing"
                                }, s.default.createElement("div", {
                                    id: "buy-more-products-fixBonus-entry"
                                }, s.default.createElement(i.default, {
                                    buyMoreLabel: e.buyMoreLabel,
                                    icon: e.icon,
                                    addButtonClicked: function() {
                                        n.showBodyLoader(n.props.onClickAddFixBonus, e)
                                    }
                                }))));
                            case c.default.PARAGRAPH:
                                return s.default.createElement("div", {
                                    className: "u-padding",
                                    style: {
                                        marginLeft: "-20px",
                                        marginRight: "-20px"
                                    }
                                }, s.default.createElement(y.default, {
                                    key: e.entryType + t,
                                    content: e.sectionTitle,
                                    innerPadding: "s",
                                    outerPadding: "s"
                                }));
                            default:
                                return null
                        }
                    });
                    return s.default.createElement("div", {
                        id: "convergent-product-entries"
                    }, s.default.createElement("div", {
                        className: "u-padding-top u-padding"
                    }, s.default.createElement(d.default, {
                        sections: a,
                        sectionConf: this.props.sectionConf,
                        showNetPrices: this.props.showNetPrices
                    })), s.default.createElement("div", {
                        className: "l-page-row"
                    }, s.default.createElement("div", {
                        className: "u-padding-top u-padding",
                        id: "buy-more-products"
                    }, u)))
                }
            }, {
                key: "showBodyLoader",
                value: function(e, t) {
                    this.hasConfigurables() ? e({
                        section: t
                    }) : (this.setState({
                        loader: {
                            callback: e,
                            section: t,
                            show: !0
                        }
                    }), OPL.UI.fire("modules.loader.show", $("#buy-more-products")))
                }
            }, {
                key: "getMobileTerminals",
                value: function(t) {
                    var n = this;
                    return this.props.entry.entries.filter(function(e) {
                        return e.entryType === l.default.MOBILE
                    }).reduce(function(e, t) {
                        return e.concat(t.terminals)
                    }, []).map(function(e) {
                        return m({}, e, {
                            mandatory: u.default.includes(t, e.productCode) || n.is3ULTEActivation()
                        })
                    })
                }
            }, {
                key: "is3ULTE",
                value: function() {
                    return (0, p.getProcessType)(this.props.entry.entries) === f.default._3ULTE
                }
            }, {
                key: "getVases",
                value: function(t, n) {
                    var r = this,
                        e = this.props.entry.entries.filter(function(e) {
                            return e.entryType === l.default.FIX
                        }).reduce(function(e, t) {
                            return e.concat((t.terminals || []).filter(function(e) {
                                return !e.hiddenEntry
                            }))
                        }, []),
                        o = this.getAllVases().filter(function(e) {
                            return !u.default.includes(n, e.productCode)
                        }),
                        a = [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(o));
                    return a.map(function(e) {
                        return m({}, e, {
                            mandatory: r.isEntryMandatory(e, a, t)
                        })
                    })
                }
            }, {
                key: "isEntryMandatory",
                value: function(t, e, n) {
                    var r = e.filter(function(e) {
                        return !!e.quantityGroup && e.quantityGroup === t.quantityGroup
                    }).map(function(e) {
                        return e.productCode
                    });
                    return (0, b.isMandatory)(t.productCode, n, r)
                }
            }, {
                key: "getEuroSets",
                value: function(t) {
                    var n = this;
                    return this.props.entry.entries.filter(function(e) {
                        return e.entryType === l.default.MOBILE
                    }).reduce(function(e, t) {
                        return e.concat(t.euroSets)
                    }, []).map(function(e) {
                        return m({}, e, {
                            mandatory: u.default.includes(t, e.productCode) || n.is3ULTEActivation()
                        })
                    })
                }
            }, {
                key: "is3ULTEActivation",
                value: function() {
                    return this.is3ULTE() && 0 < this.props.entry.entries.filter(function(e) {
                        return e.entryType === l.default.FIX
                    }).filter(function(e) {
                        return e.processType === h.default.TV0_ACTIVATION
                    }).length
                }
            }, {
                key: "getTvPackages",
                value: function(t, n) {
                    var r = this;
                    return this.getAllVases().filter(function(e) {
                        return u.default.includes(n, e.productCode)
                    }).filter(function(e) {
                        return r.shouldTvPackageBeDisplayed(t, e)
                    })
                }
            }, {
                key: "getAllVases",
                value: function() {
                    return this.props.entry.entries.reduce(function(e, t) {
                        return e.concat(t.vases)
                    }, [])
                }
            }, {
                key: "shouldTvPackageBeDisplayed",
                value: function(e, t) {
                    var n = this.getTvPackageConfiguration(e, t);
                    return n && n.addonType !== a.default.TVBASIC
                }
            }, {
                key: "getTvPackageConfiguration",
                value: function(e, t) {
                    return e ? e.reduce(function(e, t) {
                        return e.concat(t.tvPackages)
                    }, []).filter(function(e) {
                        return e.id === t.productCode
                    }).shift() : void 0
                }
            }, {
                key: "getAllTvPackages",
                value: function(e) {
                    return e && e.reduce(function(e, t) {
                        return e.concat(t.tvPackages)
                    }, []).map(function(e) {
                        return e.id
                    }) || []
                }
            }, {
                key: "getBonusSection",
                value: function(e, t) {
                    var n = e.bonusEntries;
                    return f.default._2ULTE === (0, p.getProcessType)(this.props.entry.entries) ? this.getBonusSectionLTE(e, t) : this.getDiscounts(n.filter(function(e) {
                        return e.secondaryChoiceDiscount
                    }) || []).map(function(e) {
                        return m({}, e, {
                            productCode: e.code,
                            mandatory: !!e.discountGroup || t && t.includes(e.code)
                        })
                    })
                }
            }, {
                key: "getBonusSectionLTE",
                value: function(e, n) {
                    var t = this,
                        r = e.bonusEntries,
                        o = this.getDiscounts(r.filter(function(e) {
                            return e.secondaryChoiceDiscount && !t.props.areSecondaryChoiceBonusesAvailable
                        }) || []).map(function(e) {
                            return m({}, e, {
                                mandatory: !!e.discountGroup || n && n.includes(e.code)
                            })
                        });
                    return o.length ? o : [].concat(babelHelpers.toConsumableArray(this.getAllVases()), babelHelpers.toConsumableArray(e.entry.vases)).filter(function(t) {
                        return t.addonType === a.default.SECONDARY_CHOICE_DISCOUNT && r.some(function(e) {
                            return e.code === t.productCode
                        })
                    }).map(function(t) {
                        var e = r.filter(function(e) {
                            return e.code === t.productCode
                        })[0];
                        return e && (t.checkoutPrice = e.payNowCost, t.firstBillPrice = e.oneTimeCost, t.monthlyPrices = e.monthlyCosts), t.mandatory = !!e.discountGroup || n && n.includes(t.productCode), t
                    })
                }
            }, {
                key: "getDiscounts",
                value: function(e) {
                    return e.map(function(e) {
                        var t = m({}, e);
                        return e.monthlyCosts && (t.monthlyPrices = e.monthlyCosts.map(function(e) {
                            var t = m({}, e);
                            return t.net = o.default.formatPrice(t.price), t.gross = o.default.formatPrice(t.price), t
                        })), t.unchangeable = !0, t.name = t.description, t.description = "", t
                    })
                }
            }]), r
        }(s.Component),
        C = (0, t.connect)(function(e) {
            return {
                isTvSubEntry: (0, n.isTvSubEntry)(e),
                configurables: e.cart.convergentConfigurables,
                bonusEntries: (0, n.getBonusEntry)(e)
            }
        }, null)(v);
    e.default = C
});
//# sourceMappingURL=ConvergentProductEntries.js.map