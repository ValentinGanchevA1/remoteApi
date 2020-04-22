define(["exports", "react", "prop-types", "../../../shared/PriceBoxes", "../Utils", "../../Utils"], function(e, t, a, l, s, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InputCell = e.PriceCell = e.NameCell = e.GraphicCell = void 0, t = babelHelpers.interopRequireWildcard(t);
    e.GraphicCell = function(e) {
        var a = e.vas.thumbnailIcon ? e.vas.thumbnailIcon : "air-drop";
        return t.default.createElement(s.LCol, {
            big: "3",
            medium: "3",
            small: "8",
            className: "u-small-spacing-l"
        }, t.default.createElement(n.Graphic, {
            icon: a ? a.toLowerCase().split("_").join("-") : "",
            imgUrl: e.vas.imgUrl
        }))
    };
    e.NameCell = function(e) {
        return t.default.createElement(s.LCol, {
            small: "12",
            medium: "4",
            big: "4"
        }, t.default.createElement("h4", {
            className: "u-font-standard u-margin",
            dangerouslySetInnerHTML: {
                __html: e.vas.title
            }
        }), e.vas.slogan && t.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: e.vas.slogan
            }
        }), e.vas.detailsDescription && t.default.createElement("p", {
            className: "u-margin",
            "aria-hidden": "false",
            dangerouslySetInnerHTML: {
                __html: e.vas.detailsDescription
            }
        }))
    };

    function i(e) {
        return t.default.createElement(s.LCol, {
            small: e.small,
            medium: e.medium,
            big: e.big,
            className: "u-large-text-right u-medium-text-right u-small-padding-l"
        }, t.default.createElement(l.RwdPriceBox, {
            quantity: e.quantity,
            prices: (0, s.transformPriceInfo)(e.vas.paymentDescriptions.monthlyPayments, e.net),
            oneTimePrice: (0, s.transformOneTimePriceInfo)(e.vas.paymentDescriptions.oneTimePayment, e.net),
            checkoutPrice: (0, s.transformOneTimePriceInfo)(e.vas.paymentDescriptions.payNowPayment, e.net)
        }))
    }(e.PriceCell = i).defaultProps = {
        small: "12",
        medium: "3",
        big: "3",
        quantity: "1"
    };
    e.InputCell = function(e) {
        return t.default.createElement(s.LCol, {
            small: "12",
            medium: "2",
            big: "2",
            className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
        }, t.default.createElement("label", {
            className: "o-radio opl-radio"
        }, t.default.createElement("input", {
            type: "checkbox",
            name: "gadget-choose",
            className: "u-acc-hide",
            checked: e.vas.selected,
            disabled: e.vas.mandatory,
            value: e.vas.id
        }), t.default.createElement("span", {
            className: "o-ci"
        }), t.default.createElement("span", {
            className: "o-ci-label"
        }, t.default.createElement("span", {
            className: "u-acc-txt--show"
        }, "Wybieram"), t.default.createElement("span", {
            className: "u-acc-txt--hide"
        }, e.vas.selected ? "Wybrano" : "Wybierz"))))
    }
});
//# sourceMappingURL=FixInputFragments.js.map