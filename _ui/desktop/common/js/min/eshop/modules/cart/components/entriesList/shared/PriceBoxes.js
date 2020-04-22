define(["exports", "react", "prop-types"], function(e, s, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RwdPriceBox = e.MobilePriceBox = e.DesktopPriceBox = void 0, s = babelHelpers.interopRequireWildcard(s);

    function l(e) {
        var a = babelHelpers.toArray(e.prices),
            l = a[0],
            t = a.slice(1),
            n = e.biggerPadding ? "u-padding-all-m " : "u-padding-all ";
        return s.default.createElement("div", {
            className: n + "u-small-no-padding"
        }, s.default.createElement(r, {
            head: l
        }), t && 0 < t.length ? s.default.createElement(c, {
            prices: t
        }) : null)
    }(e.DesktopPriceBox = l).propTypes = {
        prices: a.PropTypes.array,
        biggerPadding: a.PropTypes.bool
    }, l.defaultProps = {
        biggerPadding: !0
    };
    e.MobilePriceBox = function(e) {
        var a = babelHelpers.toArray(e.prices),
            l = a[0],
            t = a.slice(1);
        return s.default.createElement("div", null, s.default.createElement(n, {
            head: l
        }), t && 0 < t.length ? s.default.createElement(c, {
            prices: t
        }) : null)
    };
    var c = function e(a) {
        var l = babelHelpers.toArray(a.prices),
            t = l[0],
            n = l.slice(1);
        return s.default.createElement("div", null, s.default.createElement("p", null, s.default.createElement("span", null, t.integer, ",", t.fraction, " ", t.currency, " "), t.end ? s.default.createElement("span", null, t.start, "-", t.end, " mies.") : s.default.createElement("span", null, "od ", t.start, " mies.")), n && 0 < n.length ? s.default.createElement(e, {
            prices: n
        }) : null)
    };
    e.RwdPriceBox = function(e) {
        var a = !0,
            l = babelHelpers.toArray(e.prices),
            t = l[0],
            n = l.slice(1),
            r = n && 0 < n.length;
        return e.prices && 0 !== e.prices.length && ("0" !== t.integer || "00" !== t.fraction || r) || (t.start || (a = !1), "0" === (t = "0" !== e.oneTimePrice.integer ? e.oneTimePrice : e.checkoutPrice).integer && "00" === t.fraction || (a = !1)), s.default.createElement("div", null, s.default.createElement("p", {
            className: "opl-price-v2 opl-price-v2--s g-small-brand2-c"
        }, s.default.createElement("span", {
            className: "opl-price-v2__part u-small-font-standard"
        }, isNaN(e.quantity) || e.quantity < 2 ? null : s.default.createElement("span", null, s.default.createElement("span", {
            className: "opl-price-v2__whole u-small-font-standard"
        }, e.quantity), s.default.createElement("span", {
            className: "opl-price-v2__suffix u-small-font-standard"
        }, " razy ")), s.default.createElement("span", {
            className: "opl-price-v2__whole u-small-font-standard"
        }, t.integer)), s.default.createElement("span", {
            className: "opl-price-v2__part u-small-font-standard"
        }, s.default.createElement("span", {
            className: "opl-price-v2__separator u-small-font-standard"
        }, ","), s.default.createElement("span", {
            className: "opl-price-v2__decimal u-small-font-standard"
        }, t.fraction), s.default.createElement("span", {
            className: "opl-price-v2__suffix u-small-font-standard"
        }, t.currency, a ? "/mies." : ""))), r && s.default.createElement(c, {
            prices: n
        }))
    };
    var r = function(e) {
            var a, l = e.head;
            return s.default.createElement("p", {
                className: "h5 u-no-spacing"
            }, s.default.createElement("span", {
                className: "h3 u-no-spacing u-inline-block"
            }, l.integer), s.default.createElement("span", null, ",", l.fraction, " ", l.currency), l.start == l.end ? s.default.createElement("span", null, " w pierwszym mies.") : (a = l, s.default.createElement("span", null, s.default.createElement("span", null, "/mies. "), a.end ? s.default.createElement("span", null, a.start, " - ", a.end, " mies.") : null)))
        },
        n = function(e) {
            var a, l = e.head;
            return s.default.createElement("p", null, s.default.createElement("span", {
                className: "g-brand1-c"
            }, l.integer, ",", l.fraction, " ", l.currency), l.start == l.end ? s.default.createElement("span", {
                className: "g-brand1-c"
            }, " w pierwszym mies.") : (a = l, s.default.createElement("span", null, s.default.createElement("span", {
                className: "g-brand1-c"
            }, "/mies. "), a.end ? s.default.createElement("span", {
                className: "g-brand1-c"
            }, a.start, " - ", a.end, " mies.") : null)))
        }
});
//# sourceMappingURL=PriceBoxes.js.map