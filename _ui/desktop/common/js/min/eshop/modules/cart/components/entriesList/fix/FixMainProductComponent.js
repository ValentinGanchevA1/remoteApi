define(["exports", "react", "react-redux", "lodash", "../../../../fix/actions/voip", "../../../../../flux/utils/OraModalService", "../shared/productDetails/OfferDetailsModal", "./Utils", "../../../../fix/selectors/root", "../../../analyzer/DeviceUtils", "../shared/CommonPropositionEntry", "../../../actions/cart", "../../../../fix/components/modal/FixTvFilteredModal", "../utils/ConfigurableUtils"], function(e, a, t, i, r, l, p, n, o, s, c, d, u, h) {
    "use strict";

    function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? f(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function v(o) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u);
    var y = function(e) {
            babelHelpers.inherits(o, e);
            var r = v(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).prepareVoipEntry = t.prepareVoipEntry.bind(babelHelpers.assertThisInitialized(t)), t.handleShowModalVoip = t.handleShowModalVoip.bind(babelHelpers.assertThisInitialized(t)), t.onDetailsClicked = t.onDetailsClicked.bind(babelHelpers.assertThisInitialized(t)), t.name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidUpdate",
                value: function() {
                    var n = this;
                    if (this.props.entry && this.props.configurables && 0 < this.props.configurables.length) {
                        var s = this.props.configurables[0];
                        l.default.add(function(e) {
                            var t = n.props.entry.broadbandFixProduct.devices.map(function(e) {
                                    return e.code
                                }),
                                r = Object.assign({}, n.props.entry.broadbandFixProduct);
                            r.devices = s.devices.filter(function(e) {
                                return t.includes(e.id)
                            });
                            var o = null;
                            if (n.props.entry.tvFixProduct) {
                                var i = n.props.entry.tvFixProduct.devices.map(function(e) {
                                    return e.code
                                });
                                (o = Object.assign({}, n.props.entry.tvFixProduct)).devices = s.devices.filter(function(e) {
                                    return i.includes(e.id)
                                })
                            }
                            return a.default.createElement(p.default, {
                                id: "productDetails-" + n.name,
                                header: n.props.detailsHeader || "Szczegóły oferty",
                                broadband: r,
                                tv: o,
                                voip: n.props.entry.voipFixProduct,
                                tvPackages: s.tvPackages
                            })
                        })
                    }
                }
            }, {
                key: "onDetailsClicked",
                value: function() {
                    l.default.open("productDetails-" + this.name)
                }
            }, {
                key: "handleShowModalVoip",
                value: function(e) {
                    e.preventDefault(), this.props.openVoipModal()
                }
            }, {
                key: "addButtonClicked",
                value: function(e) {
                    e.preventDefault(), this.props.showTvModal()
                }
            }, {
                key: "showTvPackagesButtonClicked",
                value: function(e) {
                    e.preventDefault(), this.props.showFixTvFilteredModal()
                }
            }, {
                key: "showB2BVasesButtonClicked",
                value: function(e) {
                    e.preventDefault(), this.props.showB2BVasesModal()
                }
            }, {
                key: "removeB2BVasesButtonClicked",
                value: function(e) {
                    e.preventDefault(), this.props.onVasRemove(this.props.entry.vasPackagesB2BFixProduct.code)
                }
            }, {
                key: "prepareTvEntry",
                value: function() {
                    var e = a.default.createElement(n.ChangeComponent, {
                            onChange: this.addButtonClicked.bind(this),
                            changeLabel: "Zmień"
                        }),
                        t = a.default.createElement(n.ChangeComponent, {
                            onChange: this.showTvPackagesButtonClicked.bind(this),
                            changeLabel: "Pakiety telewizji"
                        }),
                        r = a.default.createElement("div", {
                            className: "l-row"
                        }, a.default.createElement("div", {
                            className: "l-col l-col--auto"
                        }, e), a.default.createElement("div", {
                            className: "l-col l-col--auto"
                        }, t, a.default.createElement(u.default, null)));
                    return b({}, this.props.entry.tvFixProduct, {
                        additionalContent: r
                    })
                }
            }, {
                key: "prepareVoipEntry",
                value: function() {
                    var e = a.default.createElement(n.NumberComponent, {
                        product: this.props.entry.voipFixProduct,
                        numberLabel: this.props.sectionConf.numberLabel,
                        selectedNumberVoip: this.props.selectedNumberVoip,
                        changeNumberLabel: this.props.sectionConf.changeNumberLabel,
                        handleShowModalVoip: this.handleShowModalVoip,
                        editable: this.props.voipModalComponentIsMounted
                    });
                    return b({}, this.props.entry.voipFixProduct, {
                        additionalContent: e
                    })
                }
            }, {
                key: "prepareVasPackagesB2BEntry",
                value: function() {
                    var e = a.default.createElement(n.ChangeComponent, {
                            onChange: this.addButtonClicked.bind(this),
                            changeLabel: "Szczegóły"
                        }),
                        t = a.default.createElement(n.ChangeComponent, {
                            onChange: this.showB2BVasesButtonClicked.bind(this),
                            changeLabel: "Zmień"
                        }),
                        r = a.default.createElement(n.ChangeComponent, {
                            onChange: this.removeB2BVasesButtonClicked.bind(this),
                            changeLabel: "Usuń"
                        }),
                        o = a.default.createElement("div", {
                            className: "l-row"
                        }, a.default.createElement("div", {
                            className: "l-col l-col--auto"
                        }, e), a.default.createElement("div", {
                            className: "l-col l-col--auto"
                        }, t), a.default.createElement("div", {
                            className: "l-col l-col--auto"
                        }, r));
                    return b({}, this.props.entry.vasPackagesB2BFixProduct, {
                        additionalContent: o
                    })
                }
            }, {
                key: "isDeviceChangeable",
                value: function(e, t, r) {
                    var o = e && (0, s.findDeviceByType)(e, r.deviceType);
                    return o && 0 < o.filter(function(e) {
                        return !i.default.includes(t, e.id)
                    }).length
                }
            }, {
                key: "render",
                value: function() {
                    var e = [];
                    this.props.entry.broadbandFixProduct && e.push(this.props.entry.broadbandFixProduct), this.props.entry.tvFixProduct && e.push(this.prepareTvEntry()), this.props.entry.voipFixProduct && e.push(this.prepareVoipEntry()), this.props.entry.vasPackagesB2BFixProduct && e.push(this.prepareVasPackagesB2BEntry());
                    var t = this.props.configurables && 0 < this.props.configurables.length && this.props.configurables[0] && this.props.configurables[0].devices,
                        r = this.props.configurables && 0 < this.props.configurables.length && this.props.configurables[0] && this.props.configurables[0].mandatoryProducts,
                        o = [];
                    this.props.entry.modemFixProduct && o.push(b({}, this.props.entry.modemFixProduct, {
                        name: "Modem",
                        description: this.props.entry.modemFixProduct.name,
                        changeable: this.isDeviceChangeable(t, r, this.props.entry.modemFixProduct),
                        removable: (0, h.isRemovable)(this.props.configurables, r, this.props.entry.modemFixProduct.code),
                        section: "NEO_VASES"
                    })), this.props.entry.decoderFixProduct && o.push(b({}, this.props.entry.decoderFixProduct, {
                        name: "Dekoder",
                        description: this.props.entry.decoderFixProduct.name,
                        changeable: this.isDeviceChangeable(t, r, this.props.entry.decoderFixProduct),
                        removable: (0, h.isRemovable)(this.props.configurables, r, this.props.entry.decoderFixProduct.code),
                        section: "TV_VASES"
                    }));
                    var i = {
                        deleteLabel: this.props.sectionConf.deleteEntryLabelMainItem,
                        changeLabel: this.props.sectionConf.changeEntryLabel,
                        detailsLabel: this.props.sectionConf.detailsLabel,
                        changeDeviceLabel: this.props.descriptions.changeDevice,
                        forFreeLabel: this.props.descriptions.deviceFreeWithinProposition ? this.props.descriptions.deviceFreeWithinProposition : "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
                        serviceFreeLabel: this.props.descriptions.serviceFreeWithinProposition ? this.props.descriptions.serviceFreeWithinProposition : "<div>Bezpłatne w cenie</div><div>pakietu</div>"
                    };
                    return a.default.createElement(c.default, {
                        mainEntries: e,
                        subEntries: o,
                        offerPrice: this.props.entry.priceForMainFixProducts,
                        loyaltyLength: this.props.entry.loyaltyLength,
                        bundleNo: this.props.entry.bundleNo,
                        entryNo: this.props.entry.entryNo,
                        onRemove: this.props.openRemovePopup,
                        onDetails: this.onDetailsClicked,
                        onChange: this.props.onVasChange,
                        descriptions: i,
                        showNetPrices: this.props.showNetPrices,
                        onVasRemove: this.props.onVasRemove,
                        rejectionReason: this.props.entry.rejectionReason
                    })
                }
            }]), o
        }(a.Component),
        m = (0, t.connect)(function(e) {
            return {
                voipModalComponentIsMounted: (0, o.voipModalComponentIsMounted)(e)
            }
        }, function(e) {
            return {
                openVoipModal: function() {
                    return e((0, r.voipSelection)(!0))
                },
                showTvModal: function() {
                    return e((0, d.changeTvModalVisibility)(!0))
                },
                showFixTvFilteredModal: function() {
                    return e((0, d.changeFixTvFilteredModalVisibility)(!0))
                },
                showB2BVasesModal: function() {
                    return e((0, d.changeB2BVasesModalVisibility)(!0))
                }
            }
        })(y);
    e.default = m
});
//# sourceMappingURL=FixMainProductComponent.js.map