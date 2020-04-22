define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/modules/simfree/components/ProductOfferInstalmentPriceTooltipComponent"], function(e, o, t, n, r, s) {
    "use strict";

    function a(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s);

    function i(e) {
        var t = e.monthFrom || 0,
            r = (e.monthTo || e.maxInstalment) - t + 1,
            s = n.default.getPriceFromPaymentsObject(e, e.showNet);
        return o.default.createElement("span", {
            className: "u-block"
        }, n.default.formatPrice(s), " zł x ", r, " ", n.default.odmienRaty(r))
    }
    var p = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.deviceToChange && !!this.props.product.variantList.find(function(e) {
                            return t.props.deviceToChange.productCode == e.productId
                        });
                    if (null == this.props.product.inOffer) return o.default.createElement(l, {
                        product: this.props.product,
                        productVariant: this.props.productVariant,
                        instalmentUrl: this.props.instalmentUrl,
                        showNet: this.props.showNet,
                        marketIsB2B: this.props.marketIsB2B
                    });
                    var r = this.props.product.inOffer.price.base.devicePayments,
                        s = n.default.formatPrice(this.props.showNet ? this.props.product.inOffer.price.base.oneTimePaymentNet : this.props.product.inOffer.price.base.oneTimePaymentGross);
                    return e && (r = this.props.deviceToChange.monthlyPrices, s = n.default.formatPrice(this.props.showNet ? this.props.deviceToChange.checkoutPrice.net : this.props.deviceToChange.checkoutPrice.gross)), o.default.createElement(c, {
                        product: this.props.product,
                        marketIsB2B: this.props.marketIsB2B,
                        showNet: this.props.showNet,
                        proposition: this.props.proposition,
                        instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                        instalmentPayments: r,
                        oneTimePayment: s
                    })
                }
            }]), r
        }(o.default.Component),
        l = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement("p", {
                        className: "g-brand1-c u-font-bold"
                    }, n.default.formatPrice(this.props.showNet ? this.props.product.priceNet : this.props.product.priceGross), " zł"), this.props.productVariant.isInstalmentAvailable && !this.props.marketIsB2B && o.default.createElement("a", {
                        href: this.props.instalmentUrl,
                        className: "u-padding-top-s u-padding-s u-block u-font-bold"
                    }, "lub sprawdź ofertę raty 0%"))
                }
            }]), r
        }(o.default.Component),
        c = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.instalmentPayments,
                        r = this.props.oneTimePayment;
                    return o.default.createElement("span", null, o.default.createElement("p", {
                        className: "g-brand1-c u-font-bold"
                    }, e.map(function(e) {
                        return o.default.createElement(i, babelHelpers.extends({
                            key: "from_" + e.monthFrom,
                            showNet: t.props.showNet
                        }, e))
                    }), o.default.createElement(s.default, {
                        instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                        proposition: this.props.proposition
                    })), o.default.createElement("p", {
                        className: "g-gray7-c u-font-small"
                    }, r, " zł na start "))
                }
            }]), r
        }(o.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                deviceToChange: (0, r.getChangedDevice)(e),
                showNet: (0, r.getPriceIsNet)(e)
            }
        }, {})(p);
    e.default = u
});
//# sourceMappingURL=DevicePayments.js.map