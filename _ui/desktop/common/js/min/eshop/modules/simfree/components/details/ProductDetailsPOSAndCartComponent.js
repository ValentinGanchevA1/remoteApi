define(["exports", "react", "eshop/utils/DataLayerUtils", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "../../actions/app", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/constants", "eshop/utils/OnlineUtils", "../../../checkout/selectors", "../../../configurator/selectors/filters", "../../../cart/enum/ProcessType", "eshop/modules/simfree/components/modals/OraCashInvoiceLimitComponent", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent", "eshop/modules/magnum2/selectors", "./ProductDetailsDeliveryComponent"], function(e, r, o, s, t, l, i, n, d, p, a, c, u, f, m, h, g, v, T, y, b, P, O) {
    "use strict";

    function D(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, r)
        }
        return a
    }

    function C(r) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), c = babelHelpers.interopRequireDefault(c), h = babelHelpers.interopRequireDefault(h), T = babelHelpers.interopRequireDefault(T), y = babelHelpers.interopRequireDefault(y), b = babelHelpers.interopRequireDefault(b), O = babelHelpers.interopRequireDefault(O);
    var k = function(e) {
            babelHelpers.inherits(a, e);
            var t = C(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    "SIMFREE" === this.props.offerType && o.default.pushSimfreeProductImpression(this.findProductVariant(), this.props.deviceData.price, null, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), o.default.setSelectedDeviceData(this.findProductVariant()), "false" == this.props.isFut && this.props.getSogDocuments(), this.props.fetchPickupLastPos(this.props.deviceData.selectedVariant), OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, this.closeMapModal.bind(this))
                }
            }, {
                key: "findProductVariant",
                value: function() {
                    for (var e = 0; e < this.props.deviceData.variantList.length; e++)
                        if (this.props.deviceData.variantList[e].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[e].productId == this.props.deviceData.selectedVariant) return this.props.deviceData.variantList[e]
                }
            }, {
                key: "getStockLevel",
                value: function() {
                    var e = this.findProductVariant(),
                        t = c.default.CONVERGENT === this.props.offerType ? this.props.magnumProcessType : this.props.processType;
                    return e.stockLevelsPerProcess && e.stockLevelsPerProcess[t] ? e.stockLevelsPerProcess[t].stockLevel : this.findProductVariant().stockLevel
                }
            }, {
                key: "saveMagnumStore",
                value: function() {
                    var e = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? D(Object(a), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, a[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : D(Object(a)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                            })
                        }
                        return t
                    }({}, this.props.magnumStore);
                    e.possibleTransactions.salesChannel = this.props.channels.sales, h.default.saveInSessionStorage(m.constants.magnumStore, JSON.stringify(e))
                }
            }, {
                key: "price",
                value: function() {
                    var e, t = 0;
                    return t = this.props.processType === T.default.SALE_OF_GOODS ? this.findProductVariant().devicePaymentsData.oneTimePayment.originalGrossPrice : this.props.selectedOffer.deviceData.deviceTotalPriceGross, t - (this.props.changedDevice && ((e = this.props.changedDevice).checkoutPrice.priceGross || 0) + (e.monthlyPrices || []).map(function(e) {
                        return (e.monthTo - e.monthFrom + 1) * e.priceGross
                    }).reduce(function(e, t) {
                        return e + t
                    }, 0) || 0)
                }
            }, {
                key: "handleAddToCart",
                value: function(n, d) {
                    function e() {
                        if (p.props.processType === T.default.SALE_OF_GOODS) p.handleSimfreeAddToCart(n, d);
                        else if (-1 < [c.default.DATA, c.default.VOICE, c.default.VOICE_LDF, c.default.DATA_LDF, c.default.SIMFREE_INST].indexOf(p.props.offerType))
                            if (p.props.addTerminalToOfferBundleNo) {
                                var e = [p.props.productCodeToRemove],
                                    t = [p.props.selectedVariant],
                                    a = p.props.addTerminalToOfferBundleNo,
                                    r = p.props.selectedOfferId;
                                p.props.addTerminalToOfferToCart(r, null, a, e, t)
                            } else p.props.selectOfferWithDevice(p.props.selectedOfferId, p.props.selectedOfferPosition, p.findProductVariant().productId);
                        else if (c.default.CONVERGENT === p.props.offerType)
                            if (p.saveMagnumStore(), p.props.addTerminalToOfferBundleNo) {
                                var o = [p.props.productCodeToRemove],
                                    s = [p.props.selectedVariant],
                                    l = p.props.addTerminalToOfferBundleNo,
                                    i = p.props.updateMagnumBundleTemplate;
                                p.props.addTerminalToOfferToCart(i, null, l, o, s)
                            } else p.props.addMagnumToCart(n)
                    }
                    var p = this;
                    this.props.cartIsFix && this.props.channels && "WWW" == this.props.channels.sales ? this.props.setErrorCode("fixincart") : this.props.cashInvoiceLimit && this.props.cartInvoiceValue + this.price() > this.props.cashInvoiceLimit ? y.default.openPopup({
                        onClickConfirm: e
                    }) : e()
                }
            }, {
                key: "openMapModal",
                value: function(e) {
                    e.preventDefault(), document.getElementById("pickupPosModal").click()
                }
            }, {
                key: "closeMapModal",
                value: function() {
                    this.props.fetchPickupLastPos(this.props.deviceData.selectedVariant)
                }
            }, {
                key: "_renderDeliveryInformation",
                value: function() {
                    var t = this,
                        e = r.default.createElement("div", {
                            className: "l-col l-col-small-12 l-col-medium-8 l-col-8  u-medium-padding-left-l u-medium-padding-right-l u-small-padding-all-l-xl"
                        });
                    return 0 === this.getStockLevel() ? e = r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8   u-padding-left-l u-medium-padding-top-l u-medium-padding-left-l-xl u-medium-padding-right-l-xl u-small-padding-top-m u-small-padding-right-l-xl u-small-padding-left-l-xl"
                    }, r.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, r.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--info g-icon--xs-s u-padding-right-m"
                    }), r.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, "Model chwilowo niedostępny"))) : this.props.pickupPosEnabled && (e = r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8  u-padding-left-l u-medium-padding-left-l-xl u-medium-padding-right-l-xl u-small-padding-top-m u-small-padding-left-l-xl u-small-padding-right-l-xl"
                    }, r.default.createElement("div", {
                        hidden: this.isConvergentOffer()
                    }, r.default.createElement("p", {
                        className: "u-font-bold u-inline-block u-medium-padding-top-l"
                    }, "Darmowy odbiór w salonie."), r.default.createElement("a", {
                        href: "#",
                        className: "u-inline-block u-padding-left-l",
                        onClick: function(e) {
                            return t.openMapModal(e)
                        }
                    }, this.props.lastPos.uniqueName ? "Zmień" : "Znajdź salon")), this.props.lastPos.uniqueName && r.default.createElement("p", null, this.props.lastPos.city, ", ", this.props.lastPos.address, " ", this.props.lastPos.address2))), e
                }
            }, {
                key: "handleSimfreeAddToCart",
                value: function(e, t) {
                    var a = this.findProductVariant();
                    o.default.pushSimfreeAddToCart(a, a && a.devicePaymentsData.oneTimePayment.price, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), this.props.addToCartSimfree(e, t)
                }
            }, {
                key: "isConvergentOffer",
                value: function() {
                    return "CONVERGENT" === this.props.offerType
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement("div", {
                        className: "l-row u-padding-top-l u-small-no-padding-top"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 u-large-hide u-padding u-padding-right-l-xl u-padding-left-l-xl u-small-padding-top-m"
                    }, r.default.createElement(s.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: this.props.isDisableAddToCartButton || 0 === this.getStockLevel(),
                        onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName, !0)
                    }, "Do koszyka")), this._renderDeliveryInformation(), r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-hide u-padding u-medium-hide u-padding-right-l"
                    }, r.default.createElement(s.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: this.props.isDisableAddToCartButton || 0 === this.getStockLevel(),
                        onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName, !1)
                    }, "Do koszyka")), r.default.createElement(b.default, null), r.default.createElement(O.default, null))
                }
            }]), a
        }(r.default.Component),
        E = (0, t.connect)(function() {
            var a = (0, u.getProductCodeByBundleNo)(),
                r = (0, u.getMagnumBundleTemplate)();
            return function(e, t) {
                return {
                    productName: (0, i.getProductName)(e),
                    selectedVariant: (0, i.getSelectedVariant)(e),
                    selectedOfferId: (0, n.getSelectedOfferId)(e),
                    selectedOffer: (0, n.getSelectedOffer)(e),
                    offerType: (0, p.getSelectedOfferType)(e),
                    processType: (0, p.getSelectedProcessTypeValue)(e),
                    selectedOfferPosition: (0, n.getSelectedOfferPosition)(e),
                    isDisableAddToCartButton: (0, i.getStateAddToCartButton)(e),
                    lastPos: (0, i.getLastPos)(e),
                    pickupPosEnabled: (0, i.isPickupPosEnabled)(e),
                    addTerminalToOfferBundleNo: (0, u.getAddTerminalToOfferBundleNo)(e),
                    productCodeToRemove: a(e, t.addTerminalToOfferBundleNo),
                    magnumStore: e.magnum,
                    updateMagnumBundleTemplate: r(e, t.addTerminalToOfferBundleNo),
                    assistModeStateData: (0, g.getAssistModeStateData)(e),
                    marketContext: (0, v.getMarketContext)(e),
                    cashInvoiceLimit: (0, i.getCashInvoiceLimit)(e),
                    cartInvoiceValue: (0, i.getCartInvoiceValue)(e),
                    changedDevice: (0, u.getChangedDevice)(e),
                    magnumProcessType: (0, P.getMagnumTerminalProcess)(e)
                }
            }
        }, function(s) {
            return {
                addToCartSimfree: function(e, t, a) {
                    return s((0, l.addToCart)(e, t, a))
                },
                selectOfferWithDevice: function(e, t, a) {
                    return s((0, d.selectOffer)(e, t, a))
                },
                getSogDocuments: function() {
                    return s((0, l.getSimfreeDocuments)())
                },
                fetchPickupLastPos: function(e) {
                    return s((0, l.fetchPickupLastPos)(e))
                },
                addMagnumToCart: function(e) {
                    return s((0, a.addMagnumToCart)(e))
                },
                addTerminalToOfferToCart: function(e, t, a, r, o) {
                    return s((0, f.updateTerminalToOffer)(e, t, a, r, o))
                },
                setErrorCode: function(e) {
                    return s((0, l.setErrorCode)(e))
                }
            }
        })(k);
    e.default = E
});
//# sourceMappingURL=ProductDetailsPOSAndCartComponent.js.map