define(["exports", "react", "../enum/TvPackagesChoiceFilter"], function(_exports, _react, _TvPackagesChoiceFilter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

    var LoyaltyDurationChoiceTvPackagesComponent = function LoyaltyDurationChoiceTvPackagesComponent(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row opl-console opl-console--no-border u-padding-all-l u-small-padding-all-m u-no-margin"
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
            name: "loyaltyDuration_12",
            className: "opl-switch-btn--left",
            id: "loyaltyDuration_12",
            type: "radio",
            checked: _TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_12 === props.selectedLoyaltyDuration,
            onChange: function onChange() {
                return null;
            },
            value: props.descriptions.loyaltyDuration12
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "loyaltyDuration_12",
            onClick: function onClick() {
                return props.selectLoyaltyDurationChoiceFilter(_TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_12);
            }
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, /*#__PURE__*/ _react.default.createElement("span", null, props.descriptions.loyaltyDuration12))), /*#__PURE__*/ _react.default.createElement("input", {
            name: "loyaltyDuration_24",
            className: "opl-switch-btn--right",
            id: "loyaltyDuration_24",
            type: "radio",
            checked: _TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_24 === props.selectedLoyaltyDuration,
            onChange: function onChange() {
                return null;
            },
            value: props.descriptions.loyaltyDuration24
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "loyaltyDuration_24",
            onClick: function onClick() {
                return props.selectLoyaltyDurationChoiceFilter(_TvPackagesChoiceFilter.default.TV_LOYALTY_DURATION_24);
            }
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, /*#__PURE__*/ _react.default.createElement("span", null, props.descriptions.loyaltyDuration24))), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--bg"
        })))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top-l"
        }));
    };

    var _default = LoyaltyDurationChoiceTvPackagesComponent;
    _exports.default = _default;
});
//# sourceMappingURL=LoyaltyDurationChoiceTvPackagesComponent.js.map