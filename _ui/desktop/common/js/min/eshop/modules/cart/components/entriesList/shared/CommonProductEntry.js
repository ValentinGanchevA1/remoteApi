define(["exports", "react", "prop-types", "../fix/FullProductRow"], function(e, a, l, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t);

    function n(e) {
        var l = e.product.changeable && e.onChange && e.onDetails;
        return a.default.createElement("div", {
            className: "u-position-relative"
        }, a.default.createElement("div", {
            className: "u-padding-left-l u-padding-right-l-xl"
        }, a.default.createElement(t.default, babelHelpers.extends({}, e, {
            borderTop: !1,
            forFreeLabel: e.forFreeLabel,
            serviceFreeLabel: e.serviceFreeLabel,
            lowerInstallmentsClicked: e.lowerInstallmentsClicked,
            descriptions: e.descriptions,
            showActionsMobile: !1
        })), a.default.createElement("div", {
            className: "l-row u-border-top u-medium-hide u-large-hide"
        }, e.product.changeable && e.onChange && a.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-".concat(l ? "6 u-small-border-right" : "12", " u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center")
        }, a.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-small-no-spacing",
            onClick: e.onChange
        }, e.changeLabel)), e.onDetails && a.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-".concat(l ? "6" : "12", " u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center")
        }, a.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-small-no-spacing",
            onClick: e.onDetails
        }, e.detailsLabel)))), e.product.removable && e.onRemove && a.default.createElement("a", {
            href: "#",
            className: "opl-checkout__item__remove u-hide u-small-block",
            onClick: e.onRemove
        }, a.default.createElement("span", {
            className: "u-acc-hide"
        }, e.removeLabel)))
    }
    n.propTypes = {
        product: l.default.shape({
            price: l.default.shape({
                oneTimeCost: l.default.shape({
                    gross: l.default.string,
                    currency: l.default.string
                }),
                monthlyCosts: l.default.arrayOf(l.default.shape({
                    gross: l.default.string,
                    currency: l.default.string,
                    monthFrom: l.default.number,
                    monthTo: l.default.number
                })),
                installments: l.default.bool
            }),
            code: l.default.string,
            name: l.default.string,
            thumbnailIcon: l.default.string,
            imageUrl: l.default.string,
            description: l.default.string,
            changeable: l.default.bool,
            removable: l.default.bool
        }),
        detailsLabel: l.default.string,
        forFreeLabel: l.default.string,
        changeLabel: l.default.string,
        removeLabel: l.default.string,
        onDetails: l.default.func,
        onChange: l.default.func,
        onRemove: l.default.func,
        lowerInstallmentsClicked: l.default.func,
        serviceFreeLabel: l.default.string
    }, n.defaultProps = {
        changeLabel: "Zmień",
        detailsLabel: "Szczegóły",
        removeLabel: "Usuń"
    };
    var r = n;
    e.default = r
});
//# sourceMappingURL=CommonProductEntry.js.map