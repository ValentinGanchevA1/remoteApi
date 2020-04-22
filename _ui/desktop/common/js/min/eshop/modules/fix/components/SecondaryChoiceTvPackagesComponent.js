define(["exports", "react", "../enum/TvPackagesChoiceFilter"], function(e, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);

    function a(e) {
        return t.default.createElement("div", {
            className: "l-page-row"
        }, t.default.createElement("div", {
            className: "l-row opl-console u-padding-all-l u-small-padding-all-m u-no-margin"
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
            name: "discountTvPackagesSwitch",
            className: "opl-switch-btn--left",
            id: "base_tv_packages_switch",
            type: "radio",
            checked: l.default.TV_SECONDARY_CHOICE_PRODUCT !== e.selectedSecondaryChoice,
            onChange: function() {
                return null
            },
            value: e.descriptions.baseOffer
        }), t.default.createElement("label", {
            htmlFor: "base_offer_switch",
            onClick: e.showBaseOffer
        }, t.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, t.default.createElement("span", null, e.descriptions.baseOffer))), t.default.createElement("input", {
            name: "discountTvPackagesSwitch",
            className: "opl-switch-btn--right",
            id: "discount_tv_packages_switch",
            type: "radio",
            checked: l.default.TV_SECONDARY_CHOICE_PRODUCT === e.selectedSecondaryChoice,
            onChange: function() {
                return null
            },
            value: e.descriptions.discountOffer
        }), t.default.createElement("label", {
            htmlFor: "discount_offer_switch",
            onClick: e.showSecondaryChoiceOffer
        }, t.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, t.default.createElement("span", null, e.descriptions.discountOffer))), t.default.createElement("span", {
            className: "opl-switch-btn--bg g-greenf-bg"
        })))), t.default.createElement("div", {
            className: "u-padding-top-l"
        }))
    }
    e.default = a
});
//# sourceMappingURL=SecondaryChoiceTvPackagesComponent.js.map