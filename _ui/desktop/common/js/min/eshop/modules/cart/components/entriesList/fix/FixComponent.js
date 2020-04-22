define(["exports", "react", "react-redux", "lodash", "../shared/MultiCartExpandingSectionComponent", "../mobile/MultiCartCollapsedItemComponent", "./FixMainProductComponent", "../shared/UniversalEntryComponent", "../../../selectors", "../../../actions/cart", "eshop/flux/utils/OraModalService", "./BoxFragments", "./buymore/buttons/AddVasesButton", "./buymore/buttons/AddBonusButton", "./buymore/buttons/AddGadgetsButton", "./buymore/buttons/AddOfficesServicesButton", "./buymore/buttons/AddTVButton", "./ProductsFinePrintInfo", "../mobile/MultiCartRemovePopup", "../../../../checkout/constants/ProductEntryTypeEnum", "../../../analyzer/ProductInfoUtils", "../shared/CommonProductEntries", "../../../../checkout/constants/AddonTypeEnum", "../../../../fix/components/console/CMSParagraphConsoleComponent", "../utils/CartUtils", "../utils/ConfigurableUtils", "../../../analyzer/DeviceUtils"], function(e, b, t, a, s, h, C, m, n, o, r, y, v, g, k, E, S, R, i, P, B, O, l, T, V, u, H) {
    "use strict";

    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function p(o) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, b = babelHelpers.interopRequireWildcard(b), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), h = babelHelpers.interopRequireDefault(h), C = babelHelpers.interopRequireDefault(C), m = babelHelpers.interopRequireDefault(m), r = babelHelpers.interopRequireDefault(r), v = babelHelpers.interopRequireDefault(v), g = babelHelpers.interopRequireDefault(g), k = babelHelpers.interopRequireDefault(k), E = babelHelpers.interopRequireDefault(E), S = babelHelpers.interopRequireDefault(S), i = babelHelpers.interopRequireDefault(i), P = babelHelpers.interopRequireDefault(P), O = babelHelpers.interopRequireDefault(O), l = babelHelpers.interopRequireDefault(l), T = babelHelpers.interopRequireDefault(T);
    var f = function(e) {
            babelHelpers.inherits(o, e);
            var n = p(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = n.call(this, e)).getVasSection = t.getVasSection.bind(babelHelpers.assertThisInitialized(t)), t.getTVSection = t.getTVSection.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                    selectedSection: null
                }, t
            }
            return babelHelpers.createClass(o, [{
                key: "vasChangeClicked",
                value: function(e) {
                    var t = e.selectedSection;
                    this.addVases && this.addVases.addButtonClicked && (this.setState({
                        selectedSection: t
                    }), this.addVases.addButtonClicked())
                }
            }, {
                key: "vasRemoveClicked",
                value: function(e) {
                    this.addVases && this.addVases.removeButtonClicked && this.addVases.removeButtonClicked(e)
                }
            }, {
                key: "bonusChangeClicked",
                value: function(e) {
                    var t = e.selectedSection;
                    this.addBonuses && this.addBonuses.addButtonClicked && (this.setState({
                        selectedSection: t
                    }), this.addBonuses.addButtonClicked())
                }
            }, {
                key: "bonusRemoveClicked",
                value: function(e) {
                    this.addBonuses && this.addBonuses.removeButtonClicked && this.addBonuses.removeButtonClicked(e)
                }
            }, {
                key: "tvChangeClicked",
                value: function() {
                    this.addTV && this.addTV.addButtonClicked && this.addTV.addButtonClicked()
                }
            }, {
                key: "tvRemoveClicked",
                value: function(e) {
                    this.addTV && this.addTV.removeButtonClicked && this.addTV.removeButtonClicked(e)
                }
            }, {
                key: "gadgetChangeClicked",
                value: function() {
                    this.addGadgets && this.addGadgets.addButtonClicked && this.addGadgets.addButtonClicked()
                }
            }, {
                key: "gadgetRemoveClicked",
                value: function(e) {
                    this.addGadgets && this.addGadgets.removeButtonClicked && this.addGadgets.removeButtonClicked(e)
                }
            }, {
                key: "openRemovePopup",
                value: function() {
                    var e = this.props.entry;
                    r.default.open("remove-from-cart-modal-" + e.bundleNo, {
                        bundleNo: e.bundleNo,
                        offerIndex: e.bundleNo
                    })
                }
            }, {
                key: "registerRemovePopup",
                value: function(t) {
                    var n = this;
                    r.default.add(function(e) {
                        return b.default.createElement(i.default, {
                            id: "remove-from-cart-modal-" + t.bundleNo,
                            bundleNo: t.bundleNo,
                            title: n.props.sectionConf.deleteEntryPopupTitle,
                            content: n.props.sectionConf.deleteEntryPopupContent,
                            decline: n.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                            confirm: n.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                            onClickRemove: n.props.removeFromCart.bind(n, null, t.bundleNo),
                            textRepresentation: n.props.sectionConf.sectionTitle
                        })
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.registerRemovePopup(this.props.entry)
                }
            }, {
                key: "getVasSection",
                value: function(t, n, o) {
                    var r = this,
                        e = (this.props.entry.terminals || []).filter(function(e) {
                            return !e.hiddenEntry
                        }),
                        i = (this.props.entry.vases || []).filter(function(e) {
                            return !(a.default.includes(o, e.productCode) || a.default.includes(n, e.productCode) && e.addonType !== l.default.SFH || e.addonType === l.default.SECONDARY_CHOICE_DISCOUNT)
                        }),
                        s = [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(i));
                    return {
                        entries: s.map(function(e) {
                            return c({}, e, {
                                mandatory: r.isEntryMandatory(e, s, t)
                            })
                        }),
                        onChange: this.vasChangeClicked.bind(this),
                        onRemove: this.vasRemoveClicked.bind(this)
                    }
                }
            }, {
                key: "isEntryMandatory",
                value: function(t, e, n) {
                    var o = e.filter(function(e) {
                        return !!e.quantityGroup && e.quantityGroup === t.quantityGroup
                    }).map(function(e) {
                        return e.productCode
                    });
                    return (0, u.isMandatory)(t.productCode, n, o)
                }
            }, {
                key: "getBonusSection",
                value: function(n, t) {
                    var e = (this.props.entry.vases || []).filter(function(t) {
                        return t.addonType === l.default.SECONDARY_CHOICE_DISCOUNT && n.some(function(e) {
                            return e.code === t.productCode
                        })
                    }).map(function(e) {
                        return c({}, e, {
                            mandatory: t && t.mandatoryProducts.includes(e.productCode)
                        })
                    }).map(function(t) {
                        var e = n.filter(function(e) {
                            return e.code === t.productCode
                        })[0];
                        return t.monthlyPrices = e.monthlyCosts, t.firstBillPrice = e.oneTimeCost, t.checkoutPrice = e.payNowCost, t
                    });
                    return {
                        entries: babelHelpers.toConsumableArray(e),
                        onChange: this.bonusChangeClicked.bind(this),
                        onRemove: this.bonusRemoveClicked.bind(this)
                    }
                }
            }, {
                key: "getTVSection",
                value: function(t, e, n) {
                    var o = (e && (0, B.getTvPackages)(e) || []).filter(function(e) {
                        return e.addonType === l.default.TVBASIC
                    }).map(function(e) {
                        return e.id
                    });
                    return {
                        entries: (this.props.entry.vases || []).filter(function(e) {
                            return a.default.includes(n, e.productCode) && !a.default.includes(t, e.productCode)
                        }).filter(function(e) {
                            return !a.default.includes(o, e.productCode)
                        }).map(function(e) {
                            return c({}, e, {
                                mandatory: a.default.includes(t, e.productCode)
                            })
                        }),
                        onChange: this.tvChangeClicked.bind(this),
                        onRemove: this.tvRemoveClicked.bind(this)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var a = this,
                        e = this.props.sectionConf.sectionTitle,
                        t = "fix_section" + this.props.idx,
                        l = (0, B.getConfigurables)(this.props.configurables),
                        n = l && l.mandatoryProducts || [],
                        u = [].concat((0, B.getServices)(l)).concat((0, H.getDevicesWithAdjustedDeviceType)((0, B.getDevices)(l))),
                        d = (0, B.getNumberOfGadgets)(l),
                        c = (0, V.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.configurables, this.props.bonusEntry),
                        o = "ost-" + this.props.entry.bundleNo,
                        p = this.props.entry.migratedProducts || [],
                        r = (l && (0, B.getTvPackages)(l) || []).map(function(e) {
                            return e.id
                        }),
                        f = (0, B.getOfficesServices)(l),
                        i = {};
                    return i[P.default.VAS] = this.getVasSection(l, n, r), i[P.default.TV_PACKAGE] = this.getTVSection(n, l, r), i[P.default.SECONDARY_CHOICE] = this.getBonusSection(this.props.bonusEntry, l), b.default.createElement("div", null, b.default.createElement(s.default, {
                        title: e,
                        key: t,
                        entry: this.props.entry,
                        trigger: o,
                        conf: this.props.sectionConf,
                        onRemoveClicked: function() {
                            return a.openRemovePopup(a.props.entry)
                        }
                    }, b.default.createElement("div", null, b.default.createElement(y.FloatingBox, {
                        key: t
                    }, b.default.createElement(D, {
                        key: t,
                        entry: this.props.entry,
                        sectionTitle: ""
                    }, b.default.createElement(C.default, babelHelpers.extends({
                        key: t
                    }, this.props, {
                        openRemovePopup: this.openRemovePopup.bind(this),
                        onVasRemove: this.vasRemoveClicked.bind(this),
                        onVasChange: this.vasChangeClicked.bind(this),
                        showNetPrices: this.props.showNetPrices
                    })))), l && b.default.createElement(O.default, {
                        sections: i,
                        sectionConf: this.props.sectionConf,
                        showNetPrices: this.props.showNetPrices,
                        forFreeLabel: this.props.descriptions.forFreeLabel ? this.props.descriptions.forFreeLabel : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                        serviceFreeLabel: this.props.descriptions.serviceFreeLabel ? this.props.descriptions.serviceFreeLabel : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                    }), this.props.entry.gadgets.map(function(e, t) {
                        var n;
                        return n = d <= 1 ? Object.assign({
                            unchangeable: !0
                        }, e) : e, b.default.createElement(y.FloatingBox, null, b.default.createElement(m.default, {
                            key: t,
                            entry: n,
                            onChangeClicked: a.gadgetChangeClicked.bind(a),
                            onRemoveClicked: a.gadgetRemoveClicked.bind(a),
                            showNetPrices: a.props.showNetPrices
                        }))
                    }), b.default.createElement(R.FinePrintForSatteliteTV, {
                        entry: this.props.entry,
                        label: this.props.descriptions.fixMultiCartLegalSAT
                    }), b.default.createElement(R.FinePrintForADSLModem, {
                        entry: this.props.entry,
                        label: this.props.descriptions.fixMultiCartLegalDSL
                    }), this.props.sectionConf.productSections.map(function(e, n) {
                        var o = {};
                        switch (o.icon = e.icon, o.label = e.buyMoreLabel, o.header = e.buyMoreLabel, o.descriptions = e.descriptions, o.configurables = l, o.entry = a.props.entry, o.inner = e.productList, o.showNetPrices = a.props.showNetPrices, e.entryType) {
                            case P.default.OFFICES_SERVICES:
                                return 0 < f.length ? b.default.createElement(E.default, babelHelpers.extends({
                                    key: "OFFICES_SERVICES" + n
                                }, o, {
                                    officesServices: f
                                })) : b.default.createElement("div", {
                                    key: "NULL_OFFICES_SERVICES"
                                });
                            case P.default.VAS:
                                return 0 < u.length ? b.default.createElement(v.default, babelHelpers.extends({
                                    uid: "VASES" + n,
                                    key: "VASES" + n
                                }, o, {
                                    migrated: p,
                                    presentable: u,
                                    ref: function(e) {
                                        return a.addVases = e
                                    },
                                    isModalOpen: a.props.isVasModalOpen,
                                    modalOpenAction: function() {
                                        return a.props.openVasModal()
                                    },
                                    modalCloseAction: function() {
                                        a.props.closeVasModal(), a.setState({
                                            selectedSection: null
                                        })
                                    },
                                    selectedSection: a.state.selectedSection
                                })) : b.default.createElement("div", {
                                    key: "NULL_VASES"
                                });
                            case P.default.TV_PACKAGE:
                                var t = (0, B.getTvPackages)(l),
                                    r = p.filter(function(e) {
                                        return !!e.addonType
                                    }).map(function(e) {
                                        return e.id = e.productCode, e.inputType = "MIGRATED", e
                                    }),
                                    i = r.map(function(e) {
                                        return e.productCode
                                    }),
                                    s = (t = t.filter(function(e) {
                                        return !i.includes(e.id)
                                    })).concat(r);
                                return 0 < t.length ? b.default.createElement(S.default, babelHelpers.extends({
                                    key: "TVS" + n
                                }, o, {
                                    migratedTvPacks: r || [],
                                    presentable: s,
                                    ref: function(e) {
                                        a.addTV = e ? e.getWrappedInstance() : null
                                    }
                                })) : b.default.createElement("div", {
                                    key: "NULL_TVS"
                                });
                            case P.default.GADGET:
                                return 0 < d ? b.default.createElement(k.default, babelHelpers.extends({
                                    key: "GADGETS" + n
                                }, o, {
                                    presentable: (0, B.getGadgets)(l),
                                    ref: function(e) {
                                        a.addGadgets = e
                                    }
                                })) : b.default.createElement("div", {
                                    key: "NULL_GADGETS"
                                });
                            case P.default.SECONDARY_CHOICE:
                                return c.map(function(e, t) {
                                    return b.default.createElement(g.default, babelHelpers.extends({
                                        key: "SECONDARY_CHOICE_" + n + "_" + t
                                    }, o, {
                                        idx: t,
                                        presentable: e.relatedProducts || [],
                                        bonus: e,
                                        isModalOpen: a.props.isBonusModalOpen,
                                        modalOpenAction: function() {
                                            return a.props.openBonusModal()
                                        },
                                        modalCloseAction: function() {
                                            return a.props.closeBonusModal()
                                        },
                                        ref: function(e) {
                                            return a.addBonuses = e
                                        },
                                        migrated: p
                                    }))
                                });
                            case P.default.PARAGRAPH:
                                return b.default.createElement(T.default, {
                                    key: "PARAGRAPH" + n,
                                    content: e.sectionTitle,
                                    innerPadding: "s",
                                    outerPadding: "s"
                                });
                            default:
                                return b.default.createElement("div", {
                                    key: "DEFAULT_NULL"
                                })
                        }
                    })), b.default.createElement(h.default, {
                        key: "collapsed" + t
                    })))
                }
            }]), o
        }(b.Component),
        D = function(e) {
            return b.default.createElement("div", {
                className: "u-box-shadow"
            }, e.sectionTitle && b.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        },
        A = function(e) {
            babelHelpers.inherits(n, e);
            var t = p(n);

            function n(e) {
                return babelHelpers.classCallCheck(this, n), t.call(this, e)
            }
            return babelHelpers.createClass(n, [{
                key: "componentWillMount",
                value: function() {
                    this.props.entry.bundleNo && this.props.fetchFixConfigurables(this.props.entry.bundleNo)
                }
            }, {
                key: "render",
                value: function() {
                    return b.default.createElement(f, this.props)
                }
            }]), n
        }(b.Component),
        M = (0, t.connect)(function(e) {
            return {
                configurables: (0, n.getFixConfigurables)(e),
                isVasModalOpen: (0, n.isVasModalOpen)(e),
                isBonusModalOpen: (0, n.isBonusModalOpen)(e),
                bonusEntry: (0, n.getBonusEntry)(e)
            }
        }, function(n) {
            return {
                removeFromCart: function(e, t) {
                    return n((0, o.removeFromCart)(e, t))
                },
                fetchFixConfigurables: function(e) {
                    return n((0, o.fetchFixConfigurables)(e))
                },
                openVasModal: function() {
                    return n((0, o.openVasModal)())
                },
                closeVasModal: function() {
                    return n((0, o.closeVasModal)())
                },
                openBonusModal: function() {
                    return n((0, o.openBonusModal)())
                },
                closeBonusModal: function() {
                    return n((0, o.closeBonusModal)())
                }
            }
        })(A);
    e.default = M
});
//# sourceMappingURL=FixComponent.js.map