define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/components/ProductOfferInstalmentPriceTooltipComponent", "eshop/utils/OnlineUtils", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../../cart/enum/ProcessType"], function(e, s, t, a, l, r, n, c, o, i, u, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), c = babelHelpers.interopRequireDefault(c), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), d = babelHelpers.interopRequireDefault(d);

    function f(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    var p = function(e) {
            babelHelpers.inherits(a, e);
            var t = f(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "render",
                value: function() {
                    var t = this;
                    if (d.default.SALE_OF_GOODS === this.props.selectedProcess) return s.default.createElement(h, this.props);
                    var e = this.props.selectedOffer;
                    if (!e || !e.deviceData) return null;
                    var a = e.deviceData.inOffer.price.base.devicePayments,
                        l = this.props.showNet ? e.deviceData.inOffer.price.base.oneTimePaymentNet : e.deviceData.inOffer.price.base.oneTimePaymentGross;
                    this.props.deviceToChange && !!this.props.deviceData.variantList.find(function(e) {
                        return t.props.deviceToChange.productCode == e.productId
                    }) && (a = this.props.deviceToChange.monthlyPrices, l = o.default.formatPrice(this.props.showNet ? this.props.deviceToChange.checkoutPrice.net : this.props.deviceToChange.checkoutPrice.gross));
                    var r = a[0].monthTo,
                        n = o.default.getPriceFromPaymentsObject(a[0], this.props.showNet);
                    return s.default.createElement("div", {
                        key: this.props.selectedOfferId,
                        className: "l-col l-col-12  u-padding-l u-small-no-padding-bottom"
                    }, s.default.createElement("div", {
                        className: "l-row u-no-spacing"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-7  l-col-small-6 u-large-no-padding-left"
                    }, s.default.createElement("p", {
                        className: "h4"
                    }, "Cena"), "SIMFREE_INST" !== this.props.selectedOfferType && s.default.createElement("p", {
                        className: "u-small-hide"
                    }, "Cena abonamentu nie jest zawarta w cenie telefonu")), s.default.createElement("div", {
                        className: "l-col l-col-5  l-col-small-6 u-text-right u-large-no-padding-right"
                    }, s.default.createElement("div", {
                        className: "u-font-bold"
                    }, s.default.createElement("span", {
                        className: "h2"
                    }, o.default.formatPriceAbsolute(n)), s.default.createElement("span", {
                        className: "h4"
                    }, ",", o.default.formatPriceDecimals(n), " zł x ", r, " ", o.default.odmienRaty(r)), o.default.updateOgTag("product:original_price:device_installment_price", o.default.formatPrice(n)), o.default.updateOgTag("product:device_installment_loyalyty", r), s.default.createElement(c.default, {
                        instalmentTooltipDescription: this.props.descriptions.instalmentTooltipDescription,
                        proposition: e
                    })), 1 < a.length && a.map(function(e, t) {
                        return 0 == t ? null : s.default.createElement(m, babelHelpers.extends({
                            key: "from_" + e.monthFrom
                        }, e))
                    }), s.default.createElement("p", null, "+ ", o.default.formatPrice(l), " zł na start"), o.default.updateOgTag("product:original_price:device_start_price", o.default.formatPrice(l)))))
                }
            }]), a
        }(s.default.Component),
        m = function(e) {
            var t = e.monthFrom || 0,
                a = (e.monthTo || e.maxInstalment) - t + 1;
            return s.default.createElement("h5", {
                className: "u-no-margin u-padding-top-s"
            }, o.default.formatPrice(e.price), " zł x ", a, " ", o.default.odmienRaty(a))
        },
        h = function(e) {
            if (!e.selectedVariantObject.devicePaymentsData) return null;
            var t = e.selectedVariantObject.devicePaymentsData.oneTimePayment.price;
            return e.showNet && (t = e.selectedVariantObject.devicePaymentsData.oneTimePayment.originalNetPrice), s.default.createElement("div", null, s.default.createElement("div", {
                className: "l-col l-col-12  u-padding-l u-small-no-padding-bottom"
            }, s.default.createElement("div", {
                className: "l-row u-no-spacing"
            }, s.default.createElement("div", {
                className: "l-col l-col-7  l-col-small-6 u-large-no-padding-left"
            }, s.default.createElement("h2", {
                className: "h4"
            }, "Cena")), s.default.createElement("div", {
                className: "l-col l-col-5  l-col-small-6 u-text-right u-large-no-padding-right"
            }, s.default.createElement("p", {
                style: {
                    textAlign: "right"
                },
                className: "u-font-bold"
            }, s.default.createElement("span", {
                className: "h1"
            }, o.default.formatPriceAbsolute(t)), s.default.createElement("span", {
                className: "h3"
            }, ",", o.default.formatPriceDecimals(t), " zł"), o.default.updateOgTag("product:original_price:device_full_price", o.default.formatPrice(t))), s.default.createElement("div", {
                style: {
                    textAlign: "right"
                }
            }, e.offerTypesForSelect && 0 < e.offerTypesForSelect.filter(function(e) {
                return e.value === i.default.SIMFREE_INST
            }).length && !e.marketIsB2B && s.default.createElement("a", {
                className: "u-cursor-pointer",
                onClick: e.setOfferType.bind(void 0, i.default.SIMFREE_INST)
            }, " lub sprawdź ofertę raty 0%"))))), s.default.createElement("div", {
                className: "l-col l-col-12  u-padding-l u-padding-top-l u-medium-padding-left-l u-medium-padding-right-l u-small-hide"
            }, s.default.createElement("div", {
                className: "o-separator"
            })))
        },
        g = (0, t.connect)(function(e) {
            return {
                selectedOfferType: (0, r.getSelectedOfferType)(e),
                selectedOffer: (0, l.getSelectedOffer)(e),
                selectedVariantObject: (0, a.getSelectedVariantObject)(e),
                selectedOfferId: (0, l.getSelectedOfferId)(e),
                offerTypesForSelect: (0, a.getOfferTypesForSelect)(e),
                marketIsB2B: "B2B" == (0, r.getMarketContext)(e),
                showNet: (0, u.getPriceIsNet)(e),
                selectedProcess: (0, r.getSelectedProcessTypeValue)(e),
                deviceToChange: (0, u.getChangedDevice)(e)
            }
        }, function(t) {
            return {
                setOfferType: function(e) {
                    return t((0, n.setOfferType)(e))
                }
            }
        })(p);
    e.default = g
});
//# sourceMappingURL=ProductDetailsDevicePriceComponent.js.map