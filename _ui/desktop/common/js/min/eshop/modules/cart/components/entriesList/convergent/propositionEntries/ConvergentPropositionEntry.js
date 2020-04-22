define(["exports", "react", "react-redux", "lodash", "../../../../actions/resources", "./../../SectionEntryTypeEnum", "./../../utils/CartUtils", "../../../../enum/ProcessType", "eshop/modules/fix/selectors/root", "../../shared/CommonPropositionEntry", "../../../../../checkout/constants/CartEntryTypeEnum", "../../../../analyzer/DeviceUtils", "../../../../../magnum2/components/OfferPropositionList/OfferProposition/OfferPropositionDetails", "eshop/flux/utils/OraModalService", "eshop/modules/cart/components/CartDetailsModal", "../../../../../fix/actions/voip", "../../../../selectors", "../../../../../magnum2/selectors", "../../utils/ConfigurableUtils"], function(e, d, t, r, o, a, p, l, n, u, f, i, h, s, c, b, m, y, v) {
    "use strict";

    function P(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), o.push.apply(o, n)
        }
        return o
    }

    function C(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? P(Object(o), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, o[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : P(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            })
        }
        return t
    }

    function g(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, d = babelHelpers.interopRequireWildcard(d), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), u = babelHelpers.interopRequireDefault(u), f = babelHelpers.interopRequireDefault(f), h = babelHelpers.interopRequireDefault(h), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c);
    var D = function(e) {
            babelHelpers.inherits(n, e);
            var o = g(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = o.call(this, e)).handleShowModalVoip = t.handleShowModalVoip.bind(babelHelpers.assertThisInitialized(t)), t.handleShowModalMobileVoice = t.handleShowModalMobileVoice.bind(babelHelpers.assertThisInitialized(t)), t.getProductCustomData = t.getProductCustomData.bind(babelHelpers.assertThisInitialized(t)), t.onDetailsClicked = t.onDetailsClicked.bind(babelHelpers.assertThisInitialized(t)), t.name = t.props.entry.entries.map(function(e) {
                    return e.bundleNo
                }).join("-"), t
            }
            return babelHelpers.createClass(n, [{
                key: "componentWillMount",
                value: function() {
                    var t = this,
                        o = [{
                            key: "brak",
                            value: "danych"
                        }];
                    try {
                        o = JSON.parse(this.props.entry.details)
                    } catch (e) {}
                    s.default.add(function(e) {
                        return d.default.createElement(c.default, {
                            id: "offer_proposition_details_" + t.props.entry.propositionId,
                            details: o,
                            proposition: t.props.entry
                        })
                    })
                }
            }, {
                key: "handleShowModalVoip",
                value: function(e) {
                    e.preventDefault(), this.props.openVoipModal()
                }
            }, {
                key: "handleShowModalMobileVoice",
                value: function(e, t) {
                    e.preventDefault(), this.props.openMobileVoiceModal(t)
                }
            }, {
                key: "getProductCustomData",
                value: function(e, t) {
                    var o = this;
                    switch (e) {
                        case a.default.VOIP:
                            var n = "" !== this.props.selectedVoipNumber ? this.props.selectedVoipNumber : t.voipFixProduct.phoneNumber;
                            return d.default.createElement("div", {
                                key: e
                            }, this.props.descriptions.number, " ", d.default.createElement("span", {
                                className: "u-font-bold"
                            }, (0, p.transformVoip)(n)), this.props.voipModalComponentIsMounted && d.default.createElement("a", {
                                href: "#",
                                onClick: this.handleShowModalVoip,
                                className: "u-spacing-left"
                            }, this.props.sectionConf.changeEntryLabel));
                        case a.default.MOBILE_VOICE:
                        case a.default.MOBILE_DATA:
                            var r = t.processType === l.default.ACTIVATION,
                                i = t.processType === l.default.MNP || t.processType === l.default.MNP_TWOSTEP,
                                s = r ? t.msisdn : t.msisdnVerificationData.msisdn;
                            return d.default.createElement("div", {
                                key: e
                            }, this.props.descriptions.simCard, " ", t.details, ", ", i ? this.props.descriptions.mnpNumber : this.props.descriptions.number, " ", d.default.createElement("span", {
                                className: "u-font-bold"
                            }, s && (0, p.transformMsisdn)(s)), d.default.createElement("a", {
                                href: "#",
                                onClick: function(e) {
                                    return o.handleShowModalMobileVoice(e, t.bundleNo)
                                },
                                className: "u-spacing-left"
                            }, this.props.sectionConf.changeEntryLabel));
                        default:
                            return null
                    }
                }
            }, {
                key: "onDetailsClicked",
                value: function() {
                    s.default.open("productDetails-" + this.name)
                }
            }, {
                key: "isDeviceChangeable",
                value: function(e, t, o) {
                    var n = e && (0, i.findDeviceByType)(e, o.deviceType);
                    return n && 0 < n.filter(function(e) {
                        return !r.default.includes(t, e.id)
                    }).length
                }
            }, {
                key: "findBundleNoByProductCode",
                value: function(e, t) {
                    return e.entries.find(function(e) {
                        return e.terminals.find(function(e) {
                            return e.productCode === t
                        }) || e.vases.find(function(e) {
                            return e.productCode === t
                        })
                    }).bundleNo
                }
            }, {
                key: "findSectionByType",
                value: function(e, t) {
                    var o = this.props.sectionConf && this.props.sectionConf.productSections.filter(function(e) {
                        return e.entryType === t
                    });
                    return o && o[0] || null
                }
            }, {
                key: "populateDetailsModal",
                value: function(e, r) {
                    var i = {};
                    return e.map(function(t) {
                        if ("BROADBAND" === t.subEntryType && t.terminals && 0 < t.terminals.length) {
                            i.broadband = {}, i.broadband.name = t.name, i.broadband.devices = [], i.broadband.details = t.descriptionShort, i.details = t.description;
                            var o = {};
                            o.imgUrl = t.terminals[0].imageUrl, o.title = t.terminals[0].name, o.longDescription = t.terminals[0].details, r.filter(function(e) {
                                return e.code == t.terminals[0].productCode
                            }).map(function(e) {
                                o.title = e.description, o.deviceType = e.deviceType
                            }), i.broadband.devices.push(o)
                        } else if ("TV" === t.subEntryType && t.terminals && 0 < t.terminals.length) {
                            i.tvProduct = {}, i.tvPackages = [], i.tvProduct.name = t.name, i.tvProduct.devices = [];
                            var n = r.filter(function(e) {
                                return "STB" == e.deviceType
                            })[0];
                            t.terminals.filter(function(e) {
                                return e.productCode == n.code
                            }).map(function(e) {
                                i.tvProduct.devices.push({
                                    imgUrl: e.imageUrl,
                                    longDescription: e.details,
                                    title: n.description,
                                    deviceType: n.deviceType
                                })
                            })
                        } else "VOIP" === t.subEntryType && t.voipFixProduct ? (i.voip = {}, i.voip.name = t.voipFixProduct.name, i.voip.details = t.voipFixProduct.description, i.voip.devices = []) : "MOBILE_VOICE" === t.subEntryType ? (i.voice = {}, i.voice.name = t.name, i.voice.details = t.description, i.voice.devices = []) : "MOBILE_DATA" === t.subEntryType && (i.data = {}, i.data.name = t.name, i.data.devices = [], i.data.details = "<span><b>" + t.name + "</b> " + t.description + "</span>")
                    }), i
                }
            }, {
                key: "render",
                value: function() {
                    var o = this,
                        n = [],
                        t = this.findSectionByType(this.props.sectionConf, "VAS");
                    this.props.sectionConf && this.props.sectionConf.productSections.forEach(function(t) {
                        var e = o.props.entry.entries.find(function(e) {
                            return t.entryType === e.subEntryType
                        });
                        e && n.push(C({}, e, {
                            code: e.productCode,
                            thumbnailIcon: t.icon,
                            name: e.planName,
                            additionalContent: o.getProductCustomData(e.subEntryType, e)
                        }))
                    });
                    var e = this.props.configurables.find(function(e) {
                            return e.factoryName === f.default.FIX
                        }),
                        r = e && e.devices,
                        i = e && e.mandatoryProducts,
                        s = [];
                    this.props.entry.modemFixProduct && s.push(C({}, this.props.entry.modemFixProduct, {
                        name: "Modem",
                        description: this.props.entry.modemFixProduct.name,
                        changeable: this.isDeviceChangeable(r, i, this.props.entry.modemFixProduct),
                        removable: (0, v.isRemovable)(e, i, this.props.entry.modemFixProduct.code),
                        section: "NEO_VASES"
                    })), this.props.entry.decoderFixProduct && s.push(C({}, this.props.entry.decoderFixProduct, {
                        name: "Dekoder",
                        description: this.props.entry.decoderFixProduct.name,
                        changeable: this.isDeviceChangeable(r, i, this.props.entry.decoderFixProduct),
                        removable: (0, v.isRemovable)(e, i, this.props.entry.decoderFixProduct.code),
                        section: "TV_VASES"
                    }));
                    var a = {
                            monthlyCosts: this.props.entry.planTotalMonthlyPrices,
                            oneTimeCost: this.props.entry.planTotalPayNowPrice,
                            tooltip: this.props.descriptions.convergentPropositionLegal
                        },
                        p = {
                            deleteLabel: this.props.sectionConf.deleteEntryLabelMainItem || "Usuń",
                            changeLabel: this.props.sectionConf.changeEntryLabel,
                            detailsLabel: this.props.sectionConf.detailsLabel,
                            changeDeviceLabel: this.props.descriptions.changeDevice,
                            forFreeLabel: this.props.descriptions.deviceFreeWithinProposition ? this.props.descriptions.deviceFreeWithinProposition : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                            serviceFreeLabel: this.props.descriptions.serviceFreeWithinProposition ? this.props.descriptions.serviceFreeWithinProposition : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                        },
                        l = this.populateDetailsModal(n, s),
                        c = d.default.createElement(h.default, {
                            linkName: this.props.sectionConf.detailsLabel,
                            proposition: l,
                            transactions: this.props.transactions
                        });
                    return d.default.createElement(u.default, {
                        mainEntries: n,
                        subEntries: s,
                        offerPrice: a,
                        loyaltyLength: this.props.entry.loyaltyLength,
                        bundleNo: this.props.entry.bundleNo,
                        entryNo: this.props.entry.entryNo,
                        onRemove: this.props.openRemovePopup,
                        onDetails: this.onDetailsClicked,
                        onChange: function(e) {
                            return o.props.openVasModal(C({
                                section: t
                            }, e))
                        },
                        descriptions: p,
                        overrideDefaultDetailsPartBy: c,
                        rejectionReason: this.props.entry.rejectionReason,
                        showNetPrices: this.props.showNetPrices,
                        onVasRemove: function(e) {
                            return o.props.onRemoveProduct(e, o.findBundleNoByProductCode(o.props.entry, e))
                        },
                        showButtons: !0
                    })
                }
            }]), n
        }(d.Component),
        M = (0, t.connect)(function(e) {
            return {
                selectedVoipNumber: (0, m.getSelectedVoipNumber)(e),
                voipModalComponentIsMounted: (0, n.voipModalComponentIsMounted)(e),
                transactions: (0, y.getTransactions)(e)
            }
        }, function(t) {
            return {
                openVoipModal: function() {
                    return t((0, b.voipSelection)(!0))
                },
                openMobileVoiceModal: function(e) {
                    return t((0, o.resourceModalOpen)(e))
                }
            }
        })(D);
    e.default = M
});
//# sourceMappingURL=ConvergentPropositionEntry.js.map