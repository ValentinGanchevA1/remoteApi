define(["exports", "react", "prop-types", "../../../../core/components/ui/OraSwitcher", "../../../../magnum2/components/Utils", "./MagnumPropositionListPriceTag"], function(e, a, l, t, n, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatPrice = r, e.default = void 0, a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);

    function o(e) {
        var l = r(e.offer.payNowPrice.value.toString(), e.offer.currency);
        return a.default.createElement(t.default, {
            className: "u-padding-left-m u-padding-right-m u-padding-top-s",
            isSelected: e.selected,
            onChangeHandler: e.onChange
        }, a.default.createElement("div", {
            className: "l-row u-no-margin"
        }, a.default.createElement("div", {
            className: "o-radio opl-radio u-w-100 u-box-sizing"
        }, a.default.createElement("input", {
            type: "radio",
            checked: e.selected,
            className: "switcher-trigger"
        }), a.default.createElement("span", {
            className: "o-ci"
        }), a.default.createElement("div", null, a.default.createElement("div", {
            className: "l-row u-display_table u-small-block u-no-margin u-large-block"
        }, a.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-12  u-display_table-cell u-small-block u-small-no-padding-r u-large-block u-large-no-padding-r"
        }, a.default.createElement("label", {
            className: "o-ci-label u-font-normal g-black1-c u-no-padding"
        }, a.default.createElement("p", {
            dangerouslySetInnerHTML: {
                __html: e.offerDescription
            }
        })))))), a.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-12  u-clearfix u-display_table-cell u-small-block u-small-padding-top u-small-no-padding-r u-large-block u-large-padding-top u-large-no-padding-r u-medium-hide"
        }, a.default.createElement("div", {
            className: "l-row u-large-margin-s u-small-margin-s"
        }, a.default.createElement("div", {
            className: "l-col l-col-6  u-medium-hide u-no-padding-left"
        }, a.default.createElement("p", null, e.descriptions.monthlyPayments)), a.default.createElement("div", {
            className: "l-col l-col-small-6 l-col-medium-12 l-col-6  u-text-right"
        }, a.default.createElement(i.default, {
            offer: e.offer,
            clientContext: e.clientContext,
            loyaltyLength: e.loyaltyLength,
            monthString: "mies.",
            mainPriceClass: "",
            alignClass: "u-left",
            offerDiscountInfoDescription: e.descriptions.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: e.descriptions.offerDiscountInfoConvDescription,
            baseId: "desktop"
        })))), a.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-12  u-clearfix u-display_table-cell u-small-block u-small-no-padding-r u-large-block u-large-no-padding-r u-no-padding-left"
        }, a.default.createElement("div", {
            className: "l-row u-large-margin-s u-small-margin-s"
        }, a.default.createElement("div", {
            className: "l-col l-col-8 "
        }, a.default.createElement("p", {
            className: "u-medium-hide u-inline-block"
        }, e.descriptions.activation)), a.default.createElement("div", {
            className: "l-col l-col-small-6 l-col-medium-12 l-col-4 "
        }, a.default.createElement("p", {
            className: "u-font-bold u-small-inline-block u-text-right u-small-right u-large-right u-large-inline-block"
        }, l))))))
    }

    function r(e, l) {
        return (0, n.integer)(e) + "," + (0, n.fraction)(e) + " " + l
    }
    o.propTypes = {
        descriptions: l.default.shape({
            detailsLabel: l.default.string,
            monthlyPayments: l.default.string,
            activation: l.default.string
        }),
        offer: l.default.shape({
            currency: l.default.string,
            payNowPrice: l.default.shape({
                value: l.default.any
            }),
            monthlyPayments: l.default.arrayOf(l.default.shape({
                finalPrice: l.default.any
            }))
        }),
        selected: l.default.bool,
        offerDescription: l.default.string,
        onChange: l.default.func,
        clientContext: l.default.bool
    };
    var c = o;
    e.default = c
});
//# sourceMappingURL=MagnumOfferPropositionListItem.js.map