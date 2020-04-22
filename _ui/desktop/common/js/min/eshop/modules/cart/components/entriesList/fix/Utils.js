define(["exports", "react"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.GraphicCell = e.Graphic = e.getFormattedNumber = e.transformMonthlyPriceInfo = e.transformFirstBillInfo = e.ChangeComponent = e.NumberComponent = e.MobileNumberSection = void 0, t = babelHelpers.interopRequireWildcard(t);
    e.MobileNumberSection = function(e) {
        return t.default.createElement("div", null, e.numberLabel, " ", t.default.createElement("span", {
            className: "u-font-bold"
        }, r(e.product.phoneNumber), !0 === e.editable && t.default.createElement("a", {
            href: "#",
            onClick: e.handleShowModalVoip,
            className: "u-spacing-left"
        }, e.changeNumberLabel)))
    };
    e.NumberComponent = function(e) {
        var n = "" != e.selectedNumberVoip ? e.selectedNumberVoip : e.product.phoneNumber;
        return (n = n ? r(n) : null) ? t.default.createElement("div", null, e.numberLabel, " ", n, !0 === e.editable && t.default.createElement("a", {
            href: "#",
            onClick: e.handleShowModalVoip,
            className: "u-spacing-left"
        }, e.changeNumberLabel)) : null
    };
    e.ChangeComponent = function(e) {
        return e.onChange && e.changeLabel ? t.default.createElement("div", {
            className: "u-padding-top"
        }, t.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap",
            onClick: e.onChange
        }, e.changeLabel)) : null
    };
    e.transformFirstBillInfo = function(e) {
        return e ? {
            integer: e.gross.split(",")[0],
            fraction: e.gross.split(",")[1],
            currency: e.currency
        } : null
    };
    e.transformMonthlyPriceInfo = function(e) {
        return e.map(function(e) {
            return {
                integer: e.gross.split(",")[0],
                fraction: e.gross.split(",")[1],
                currency: e.currency,
                start: e.monthFrom,
                end: e.monthTo
            }
        })
    };
    var r = function(e) {
        var n = "";
        return e && (n = e.substr(0, 2) + " " + e.substr(2, 3) + " " + e.substr(5, 2) + " " + e.substr(7, 2)), n
    };
    e.getFormattedNumber = r;

    function n(e) {
        return e.imgUrl ? t.default.createElement("div", null, t.default.createElement("img", {
            src: e.imgUrl
        })) : t.default.createElement("span", {
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--" + e.icon
        })
    }
    e.Graphic = n;
    e.GraphicCell = function(e) {
        return t.default.createElement("td", {
            className: "opl-checkout__icon__cell"
        }, t.default.createElement(n, {
            icon: e.icon ? e.icon.toLowerCase().split("_").join("-") : "",
            imgUrl: e.imgUrl
        }))
    }
});
//# sourceMappingURL=Utils.js.map