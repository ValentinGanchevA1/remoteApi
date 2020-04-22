define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/cart/components/entriesList/utils/CartUtils", "eshop/modules/cart/selectors"], function(e, f, t, d, r, a, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, f = babelHelpers.interopRequireDefault(f), d = babelHelpers.interopRequireDefault(d), r = babelHelpers.interopRequireDefault(r);

    function p(e) {
        var t = e.isBonus ? e.priceWithBonuses : e.price;
        return f.default.createElement("div", {
            className: "l-row "
        }, f.default.createElement("div", {
            className: "l-col l-col-12 "
        }, "- ", e.from, "-", e.to || e.loyaltyLength, " mies. za ", e.isBonus && e.priceWithBonuses != e.price && f.default.createElement("span", null, f.default.createElement("span", {
            className: "u-text-line-through"
        }, e.price, " zł/mies."), " "), f.default.createElement("span", {
            className: "u-font-bold"
        }, t), " zł/mies."))
    }

    function s(e) {
        return f.default.createElement("div", {
            className: "l-row "
        }, f.default.createElement("div", null), f.default.createElement("div", {
            className: "l-col l-col-12 " + e.addClass,
            dangerouslySetInnerHTML: {
                __html: e.title
            }
        }))
    }
    var n = (0, t.connect)(function(e) {
        return {
            showNet: (0, l.getPriceIsNet)(e)
        }
    }, null)(function(u) {
        if (!u.monthlyPayments) return null;
        var e = u.clientContext || u.isBonus,
            i = u.monthlyPayments || [],
            c = u.monthlyPaymentsWithBonuses || [],
            m = [];
        m.push(f.default.createElement(s, {
            key: "title",
            title: "<b>Opłaty miesięczne</b>"
        })), m.push(f.default.createElement(s, {
            key: "separator1",
            addClass: " u-spacing-top-s "
        }));
        var t = babelHelpers.toConsumableArray(new Set([].concat(babelHelpers.toConsumableArray(i), babelHelpers.toConsumableArray(c)).flatMap(function(e) {
                return e.monthFrom
            }))).sort(d.default.ascendingNumberComparator),
            a = babelHelpers.toConsumableArray(new Set([].concat(babelHelpers.toConsumableArray(i), babelHelpers.toConsumableArray(c)).flatMap(function(e) {
                return e.monthTo
            }))).sort(d.default.ascendingNumberComparator);
        t.map(function(e, t) {
            return [e, a[t]]
        }).forEach(function(t, e) {
            var a = i.find(function(e) {
                    return e.monthFrom <= t[0] && e.monthTo >= t[1]
                }),
                l = c.find(function(e) {
                    return e.monthFrom <= t[0] && e.monthTo >= t[1]
                }),
                n = d.default.getPriceAsNumberFromPaymentsObject(a, u.showNet) || 0,
                o = d.default.formatPrice(n),
                r = d.default.getPriceAsNumberFromPaymentsObject(l, u.showNet) || 0,
                s = d.default.formatPrice(r);
            m.push(f.default.createElement(p, {
                key: "line_" + e,
                loyaltyLength: u.loyaltyLength,
                isBonus: l && r < n,
                price: o,
                priceWithBonuses: s,
                from: t[0],
                to: t[1]
            }))
        });
        var l = d.default.getPriceFromPaymentsObject(i[i.length - 1], u.showNet) || 0,
            n = d.default.getPriceFromPaymentsObject(c[c.length - 1], u.showNet) || 0;
        if (e && l !== n && u.offerDiscountInfoConvDescription ? (m.push(f.default.createElement(s, {
                key: "desc",
                title: "- " + u.offerDiscountInfoConvDescription
            })), m.push(f.default.createElement(s, {
                key: "separator3",
                addClass: " u-spacing-top-s "
            }))) : u.offerDiscountInfoDescription && (m.push(f.default.createElement(s, {
                key: "desc",
                title: "- " + u.offerDiscountInfoDescription
            })), m.push(f.default.createElement(s, {
                key: "separator4",
                addClass: " u-spacing-top-s "
            }))), u.additionalInfo)
            for (var o = 0; o < u.additionalInfo.length; o++) m.push(f.default.createElement(s, {
                key: "additionalInfo" + o,
                title: "- " + u.additionalInfo[o]
            })), m.push(f.default.createElement(s, {
                key: "separator" + (6 + o),
                addClass: " u-spacing-top-s "
            }));
        return f.default.createElement(r.default, {
            key: "context_" + e + "_" + u.showNet,
            maxWidth: 400,
            baseId: (u.baseId && u.baseId) + "-offerPriceTooltip_" + u.showNet,
            className: "u-right u-w-100",
            iconClassName: "u-table-cell u-vertical-top",
            label: u.children
        }, m)
    });
    e.default = n
});
//# sourceMappingURL=ProductOfferPriceTooltipComponent.js.map