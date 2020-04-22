define(["exports", "react", "./MultiCartItemTooltip", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/OnlineUtils"], function(e, a, n, t, l) {
    "use strict";

    function i(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = i(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getPartsOfPrice",
            value: function(e) {
                var t, r = [];
                return void 0 === e ? [null, null] : ("number" == typeof e && (e = e.toFixed(2)), (t = e.match(/^(\d+)?((,|.)(\d{2}))?$/)) && (r.push(t[1]), r.push(void 0 !== t[4] ? t[4] : "00")), r)
            }
        }, {
            key: "transformMsisdn",
            value: function(e) {
                return e.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                    return arguments[1] + " " + arguments[2] + " " + arguments[3]
                })
            }
        }, {
            key: "getPriceSpelling",
            value: function(e) {
                return !e.monthTo || e.monthFrom && 1 !== e.monthFrom ? !e.monthTo && element.monthFrom ? "od " + e.monthFrom + ". miesiąca" : "od " + e.monthFrom + ". do " + e.monthTo + ". miesiąca" : 1 === e.monthTo ? "przez pierwszy miesiąc" : 1 < e.monthTo && e.monthTo < 5 ? "przez pierwsze " + e.monthTo + " miesiące" : 5 <= e.monthTo ? "przez pierwsze " + e.monthTo + " miesięcy" : "do " + e.monthTo + ". miesiąca"
            }
        }, {
            key: "getPricesTooltip",
            value: function(e) {
                var r = this,
                    t = e && 1 < e.length && e.map(function(e, t) {
                        return a.default.createElement("li", {
                            key: t
                        }, r.getPriceSpelling(e), ": ", e.price, " ", e.currency)
                    });
                if (t) return a.default.createElement(n.default, null, a.default.createElement("div", null, "Opłaty miesięczne:"), a.default.createElement("ul", null, t))
            }
        }, {
            key: "getHighestMonthlyPrice",
            value: function(e) {
                return e.slice().sort(function(e, t) {
                    return e.price - t.price
                }).pop()
            }
        }, {
            key: "getCrossedOutPrice",
            value: function(e, t, r) {
                switch (e) {
                    case "DISCOUNTED_PRICE":
                        if (t) return a.default.createElement("span", null, this.getPartsOfPrice(t.price).join(","), " ", t.currency);
                        break;
                    case "HIGHEST":
                        if (r) return a.default.createElement("span", null, this.getPartsOfPrice(this.getHighestMonthlyPrice(r)).join(","))
                }
            }
        }, {
            key: "renderVoidDesktop",
            value: function() {
                return [a.default.createElement("span", {
                    className: "h4 u-no-spacing",
                    "aria-hidden": "true"
                }, "—"), a.default.createElement("span", {
                    className: "u-acc-hide"
                }, "brak")]
            }
        }, {
            key: "renderPriceDesktop",
            value: function(e, t, r) {
                return a.default.createElement("div", {
                    className: "u-inline"
                }, a.default.createElement("span", {
                    className: "u-small-hide u-medium-hide opl-price-v2 opl-price-v2--s"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(e.price)[0])), a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), a.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(e.price)[1]), a.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, e.currency))), a.default.createElement("span", {
                    className: "u-small-hide u-large-hide opl-price-v2 opl-price-v2--xs"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(e.price)[0])), a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), a.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(e.price)[1]), a.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, e.currency))))
            }
        }, {
            key: "renderPrice",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : null;
                return this.props.monthlyPricePresentation.main ? this.renderPriceDesktop(this.props.monthlyPricePresentation.main, this.props.stockLevelStatus, t) : this.renderVoidDesktop()
            }
        }, {
            key: "prepareCrossedOneTimePrice",
            value: function(e) {
                return Math.floor(100 * e.priceWithoutVouchers) / 100 > e.price && a.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, l.default.formatPrice(e.priceWithoutVouchers) + " " + e.currency)
            }
        }]), r
    }(a.Component);
    e.default = r
});
//# sourceMappingURL=MultiCartItemAttributeComponent.js.map