define(["exports", "react", "../enum/TvPackagesChoiceFilter"], function(e, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);

    function a(e) {
        return t.default.createElement("div", {
            className: "l-page-row"
        }, t.default.createElement("div", {
            className: "l-row opl-console opl-console--no-border u-padding-all-l u-small-padding-all-m u-no-margin"
        }, t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-12 l-col-8 u-margin-top"
        }, t.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: e.descriptions.content
            }
        })), t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-medium-padding-top-l u-small-padding-top-l"
        }, t.default.createElement("div", {
            className: "opl-switch-btn u-right u-w-100",
            style: {
                height: "40px"
            }
        }, t.default.createElement("input", {
            name: "loyaltyDuration_12",
            className: "opl-switch-btn--left",
            id: "loyaltyDuration_12",
            type: "radio",
            checked: l.default.TV_LOYALTY_DURATION_12 === e.selectedLoyaltyDuration,
            onChange: function() {
                return null
            },
            value: e.descriptions.loyaltyDuration12
        }), t.default.createElement("label", {
            htmlFor: "loyaltyDuration_12",
            onClick: function() {
                return e.selectLoyaltyDurationChoiceFilter(l.default.TV_LOYALTY_DURATION_12)
            }
        }, t.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, t.default.createElement("span", null, e.descriptions.loyaltyDuration12))), t.default.createElement("input", {
            name: "loyaltyDuration_24",
            className: "opl-switch-btn--right",
            id: "loyaltyDuration_24",
            type: "radio",
            checked: l.default.TV_LOYALTY_DURATION_24 === e.selectedLoyaltyDuration,
            onChange: function() {
                return null
            },
            value: e.descriptions.loyaltyDuration24
        }), t.default.createElement("label", {
            htmlFor: "loyaltyDuration_24",
            onClick: function() {
                return e.selectLoyaltyDurationChoiceFilter(l.default.TV_LOYALTY_DURATION_24)
            }
        }, t.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, t.default.createElement("span", null, e.descriptions.loyaltyDuration24))), t.default.createElement("span", {
            className: "opl-switch-btn--bg"
        })))), t.default.createElement("div", {
            className: "u-padding-top-l"
        }))
    }
    e.default = a
});
//# sourceMappingURL=LoyaltyDurationChoiceTvPackagesComponent.js.map