define(["exports", "react", "../enum/TvPackagesChoiceFilter"], function(_exports, _react, _TvPackagesChoiceFilter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

    var SecondaryChoiceTvPackagesComponent = function SecondaryChoiceTvPackagesComponent(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row opl-console u-padding-all-l u-small-padding-all-m u-no-margin"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-12 l-col-8 u-margin-top"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: props.descriptions.content
            }
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-medium-padding-top-l u-small-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-switch-btn u-right u-w-100",
            style: {
                height: "40px"
            }
        }, /*#__PURE__*/ _react.default.createElement("input", {
            name: "discountTvPackagesSwitch",
            className: "opl-switch-btn--left",
            id: "base_tv_packages_switch",
            type: "radio",
            checked: _TvPackagesChoiceFilter.default.TV_SECONDARY_CHOICE_PRODUCT !== props.selectedSecondaryChoice,
            onChange: function onChange() {
                return null;
            },
            value: props.descriptions.baseOffer
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "base_offer_switch",
            onClick: props.showBaseOffer
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, /*#__PURE__*/ _react.default.createElement("span", null, props.descriptions.baseOffer))), /*#__PURE__*/ _react.default.createElement("input", {
            name: "discountTvPackagesSwitch",
            className: "opl-switch-btn--right",
            id: "discount_tv_packages_switch",
            type: "radio",
            checked: _TvPackagesChoiceFilter.default.TV_SECONDARY_CHOICE_PRODUCT === props.selectedSecondaryChoice,
            onChange: function onChange() {
                return null;
            },
            value: props.descriptions.discountOffer
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "discount_offer_switch",
            onClick: props.showSecondaryChoiceOffer
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, /*#__PURE__*/ _react.default.createElement("span", null, props.descriptions.discountOffer))), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--bg g-greenf-bg"
        })))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top-l"
        }));
    };

    var _default = SecondaryChoiceTvPackagesComponent;
    _exports.default = _default;
});
//# sourceMappingURL=SecondaryChoiceTvPackagesComponent.js.map