define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent", "../../../../configurator/components/MarketContextCheckboxView"], function(_exports, _react, _OfferDeviceFilterMobileComponent, _MarketContextCheckboxView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDeviceFilterMobileComponent = babelHelpers.interopRequireDefault(_OfferDeviceFilterMobileComponent);
    _MarketContextCheckboxView = babelHelpers.interopRequireDefault(_MarketContextCheckboxView);

    var ProductListHeaderView = function ProductListHeaderView(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding-top-l u-padding-l u-box-shadow u-large-no-shadow "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-display_table-cell u-padding-right"
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "h1 u-no-spacing"
        }, props.headerText)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-display_table-cell u-vertical-bottom"
        }, props.options.length > 1 ? /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-dropdown-button opl-dropdown-button--inline opl-dropdown-button--basic opl-dropdown-button--mobile-100"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), "Zmie\u0144"), /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-dropdown-button__list"
        }, props.options.map(function(option, index) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: option.value + "_" + index
            }, /*#__PURE__*/ _react.default.createElement("button", {
                onClick: function onClick() {
                    return props.onChange(option.value);
                },
                className: "o-btn opl-btn opl-dropdown-button__item u-w-100"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-box"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-ripple-circle"
            })), option.description));
        }))) : null)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right"
        }, /*#__PURE__*/ _react.default.createElement(_MarketContextCheckboxView.default, null)))), /*#__PURE__*/ _react.default.createElement(_OfferDeviceFilterMobileComponent.default, {
            descriptions: props.descriptions,
            channels: props.channels
        }));
    };

    var _default = ProductListHeaderView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListHeaderView.js.map