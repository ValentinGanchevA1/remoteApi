define(["exports", "react", "redux", "react-redux", "eshop/modules/cart/actions/cart", "../../selectors", "./mobile/MobileComponent", "./fix/FixComponent", "./simfree/SimfreeComponent", "./convergent/ConvergentComponent", "./tvUpsell/TvUpsellComponent", "./BundleTypeEnum", "../../../checkout/actions/data", "../MsisdnSimCardPickerModal", "../LowerInstallmentsModal", "./CartErrorModal", "eshop/modules/core/components/ui/TooltipFromHtml", "./fix/TransferComponent", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(e, i, r, t, n, s, o, c, u, p, f, d, l, m, b, h, y, E, g) {
    "use strict";

    function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function v(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireDefault(o), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u), p = babelHelpers.interopRequireDefault(p), f = babelHelpers.interopRequireDefault(f), d = babelHelpers.interopRequireDefault(d), m = babelHelpers.interopRequireDefault(m), b = babelHelpers.interopRequireDefault(b), h = babelHelpers.interopRequireDefault(h), y = babelHelpers.interopRequireDefault(y), E = babelHelpers.interopRequireDefault(E), g = babelHelpers.interopRequireDefault(g);
    var C = function(e) {
            babelHelpers.inherits(n, e);
            var r = v(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).state = {
                    assignmentBoxCheck: !1
                }, t.checkAssignmentDeathBox = t.checkAssignmentDeathBox.bind(babelHelpers.assertThisInitialized(t)), t.removeVoucher = t.removeVoucher.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(n, [{
                key: "checkAssignmentDeathBox",
                value: function() {
                    this.setState({
                        assignmentBoxCheck: !this.state.assignmentBoxCheck
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.fetchMiniCart(), this.props.subscribeCustomerSelected()
                }
            }, {
                key: "lowerInstallmentsActive",
                value: function() {
                    return !!this.props.isLowerInstallmentsVisible
                }
            }, {
                key: "removeVoucher",
                value: function(e, t) {
                    e.preventDefault(), this.props.removeVoucher(t)
                }
            }, {
                key: "render",
                value: function() {
                    var l = this,
                        a = this.lowerInstallmentsActive();
                    return i.default.createElement("div", null, this.props.entries && 0 < this.props.entries.length && i.default.createElement("div", {
                        className: "g-gray1-bg u-padding-top-l "
                    }, this.props.miniCart.vouchers && this.props.miniCart.vouchers.map(function(t, e) {
                        return i.default.createElement("div", {
                            key: e,
                            className: "l-full-row ".concat(0 < e ? "u-margin-top-l" : "")
                        }, i.default.createElement("div", {
                            className: "l-page-row"
                        }, i.default.createElement("div", {
                            className: "opl-msg opl-msg--box opl-msg--info u-padding-top u-padding",
                            key: "disclaimer"
                        }, i.default.createElement("div", {
                            className: "u-inline-block"
                        }, y.default.conditionalRender(t.name)), i.default.createElement("a", {
                            href: "#",
                            onClick: function(e) {
                                return l.removeVoucher(e, t)
                            },
                            className: "u-right g-black1-c"
                        }, "Usuń"))))
                    }), this.props.entries.map(function(e, t) {
                        var r = e.bundleType,
                            n = l.props.entryTitle[r.toString()];
                        r === d.default.HARDBUNDLE && 1 === e.entries.length && (n.sectionTitle = l.props.entryTitle[e.entries[0].bundleType.toString()].sectionTitle);
                        var s = {
                            descriptions: l.props.descriptions,
                            sectionConf: n,
                            entry: e,
                            idx: t,
                            channel: l.props.channels.sales,
                            sapReservation: l.props.reservationNumberSapPOS,
                            sapErrorMessage: l.props.descriptions.sapReservationError,
                            lowerInstallmentsActive: a && !(e && e.euroSets && 0 < e.euroSets.length && !l.props.isLowerInstallmentsForEuroSetsVisible) && !(e.terminals && e.terminals[0] && !e.terminals[0].priceOffset && e.terminals[0].monthlyPrices && 1 === e.terminals[0].monthlyPrices.length && 0 === e.terminals[0].monthlyPrices[0].price),
                            showNetPrices: l.props.showNetPrices,
                            checkAssignmentDeathBox: l.checkAssignmentDeathBox,
                            assignmentDeathCheckBoxState: l.state.assignmentBoxCheck
                        };
                        switch (r) {
                            case d.default.VOICE:
                                return i.default.createElement(o.default, babelHelpers.extends({
                                    key: "VOICE_" + t
                                }, s));
                            case d.default.DATA:
                                return i.default.createElement(o.default, babelHelpers.extends({
                                    key: "DATA_" + t
                                }, s));
                            case d.default.SIMFREE:
                                return i.default.createElement(u.default, babelHelpers.extends({
                                    key: "SIMFREE_" + t
                                }, s));
                            case d.default.SIMFREE_INST:
                                return i.default.createElement(u.default, babelHelpers.extends({
                                    key: "SIMFREE_INST_" + t
                                }, s));
                            case d.default._1P_PRE:
                            case d.default._1P_INF:
                                return i.default.createElement(c.default, babelHelpers.extends({
                                    key: "FIX_1P_" + t
                                }, s));
                            case d.default._3P_PRE:
                            case d.default._3P_INF:
                                return i.default.createElement(c.default, babelHelpers.extends({
                                    key: "FIX_3P_" + t
                                }, s, {
                                    selectedNumberVoip: l.props.selectedVoipNumber
                                }));
                            case d.default.HARDBUNDLE:
                                return i.default.createElement(p.default, babelHelpers.extends({
                                    key: "HARDBUNDLE_" + t
                                }, s));
                            case d.default.VIDEO:
                                return i.default.createElement(f.default, babelHelpers.extends({
                                    key: "VIDEO_" + t
                                }, s));
                            case d.default.MNP_APPLICATION:
                                return i.default.createElement(o.default, babelHelpers.extends({
                                    key: "MNP_APPLICATION_" + t
                                }, s));
                            case d.default.TRANSFER:
                                return i.default.createElement(E.default, babelHelpers.extends({
                                    key: "TRANSFER_" + t
                                }, s));
                            default:
                                return null
                        }
                    })), i.default.createElement(h.default, {
                        descriptions: this.props.descriptions,
                        errorCode: this.props.miniCart ? this.props.miniCart.errorCode : null
                    }), i.default.createElement(m.default, {
                        channel: this.props.channels.sales
                    }), i.default.createElement(g.default, null), a && i.default.createElement(b.default, {
                        channel: this.props.channels.sales,
                        showNetPrices: this.props.showNetPrices,
                        descriptions: this.props.descriptions,
                        cartIsNet: this.props.cartIsNet
                    }))
                }
            }]), n
        }(i.Component),
        P = (0, t.connect)(function(e) {
            return {
                entries: (0, s.getCartEntries)(e),
                miniCart: (0, s.getMiniCart)(e),
                selectedVoipNumber: (0, s.getSelectedVoipNumber)(e),
                showNetPrices: (0, s.getPriceIsNet)(e),
                cartIsNet: (0, s.getCartIsNet)(e)
            }
        }, function(t) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, (0, r.bindActionCreators)({
                fetchMiniCart: n.fetchMiniCart
            }, t), {
                subscribeCustomerSelected: function() {
                    return t((0, l.subscribeCustomerSelected)())
                },
                removeVoucher: function(e) {
                    return t((0, n.removeVoucher)(null, null, null, e))
                }
            })
        })(C);
    e.default = P
});
//# sourceMappingURL=MulticartEntriesListContainer.js.map