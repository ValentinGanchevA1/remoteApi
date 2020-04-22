define(["exports", "react", "prop-types", "lodash", "../../../../core/components/ui/OraSwitcher", "../../../../magnum2/components/OfferPropositionList/OfferProposition/OfferPropositionDetails", "../../../../magnum2/components/Utils"], function(e, t, l, o, s, n, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), n = babelHelpers.interopRequireDefault(n);

    function c(e) {
        var l = d(e.offer.payNowPrice.value, e.offer.currency),
            a = d(e.offer.monthlyPayments[0].finalPrice, e.offer.currency);
        return t.default.createElement(s.default, {
            className: "u-no-padding-l u-no-padding-r",
            isSelected: e.selected
        }, t.default.createElement("div", {
            className: "l-row u-no-margin u-padding-left-m "
        }, t.default.createElement("div", {
            className: "l-col l-col-1 "
        }, t.default.createElement("label", {
            className: "o-radio opl-radio"
        }, t.default.createElement("input", {
            type: "radio",
            name: "offer-plans",
            className: "switcher-trigger",
            checked: e.selected,
            onChange: e.onChange,
            disabled: e.disabled
        }), t.default.createElement("span", {
            className: "o-ci"
        }), t.default.createElement("span", {
            className: "o-ci-label"
        }))), t.default.createElement("div", {
            className: "l-col l-col-11"
        }, t.default.createElement("div", {
            className: "l-row u-small-block u-no-margin"
        }, t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-small-block u-small-no-padding-r u-no-padding-l"
        }, t.default.createElement("div", {
            className: "u-small-block u-small-right u-large-hide u-medium-hide"
        }), t.default.createElement("p", {
            className: "h5 u-spacing"
        }, (e.selectedProposition.promotionType ? "Orange Love " + o.default.capitalize(e.selectedProposition.promotionType) : "") || e.selectedProposition.hardbundleName), t.default.createElement("p", {
            dangerouslySetInnerHTML: {
                __html: e.selectedProposition.offerDescription
            }
        }), t.default.createElement("div", {
            className: "u-inline-block"
        }, t.default.createElement(n.default, {
            linkName: e.descriptions.detailsLabel,
            proposition: e.selectedProposition,
            transactions: e.transactions
        }))), t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-small-padding-top u-small-no-padding-r"
        }, t.default.createElement("div", {
            className: "u-small-hide"
        }, t.default.createElement("p", {
            className: "u-left"
        }, t.default.createElement("span", {
            className: "u-font-bold u-right"
        }, a)))), t.default.createElement("div", {
            className: "u-large-hide u-medium-hide l-col l-col-small-12 l-col-medium-3 l-col-3   u-small-block u-small-no-padding-r"
        }, t.default.createElement("div", {
            className: "l-row"
        }, t.default.createElement("div", {
            className: "l-col l-col-5 u-no-padding"
        }, t.default.createElement("p", {
            className: "u-medium-hide u-large-hide u-inline-block"
        }, "Opłata abonamentowa")), t.default.createElement("div", {
            className: "l-col l-col-7 u-small-right u-font-bold"
        }, t.default.createElement("p", {
            className: "u-left u-text-right"
        }, t.default.createElement("span", {
            className: "u-font-bold u-right"
        }, a))))), t.default.createElement("div", {
            className: "u-small-hide l-col l-col-small-12 l-col-medium-3 l-col-3  u-small-no-padding-r "
        }, t.default.createElement("div", {
            className: "u-small-hide"
        }, t.default.createElement("p", null, t.default.createElement("span", {
            className: "u-font-bold u-right"
        }, l)))), t.default.createElement("div", {
            className: "u-large-hide u-medium-hide l-col l-col-small-12 l-col-medium-3 l-col-3   u-small-block u-small-no-padding-r"
        }, t.default.createElement("div", {
            className: "l-row"
        }, t.default.createElement("div", {
            className: "l-col l-col-5 u-no-padding"
        }, t.default.createElement("p", {
            className: "u-medium-hide u-large-hide u-inline-block"
        }, "Aktywacja")), t.default.createElement("div", {
            className: "l-col l-col-7 u-small-right u-font-bold"
        }, t.default.createElement("p", {
            className: "u-left u-text-right"
        }, t.default.createElement("span", {
            className: "u-font-bold u-right"
        }, l)))))))))
    }

    function d(e, l) {
        return (0, a.integer)(e) + "," + (0, a.fraction)(e) + " " + l
    }
    c.propTypes = {
        descriptions: l.default.shape({
            detailsLabel: l.default.string
        }),
        offer: l.default.shape({
            currency: l.default.string,
            payNowPrice: l.default.shape({
                value: l.default.string
            }),
            monthlyPayments: l.default.arrayOf(l.default.shape({
                finalPrice: l.default.string
            }))
        }),
        selected: l.default.bool,
        selectedProposition: l.default.object,
        onChange: l.default.func,
        offerDescription: l.default.string
    };
    var i = c;
    e.default = i
});
//# sourceMappingURL=MagnumOfferPropositionListItemProduct.js.map