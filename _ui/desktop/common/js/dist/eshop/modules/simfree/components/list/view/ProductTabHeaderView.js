define(["exports", "react", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent", "../../../../../components/InfoComponent", "../../../../configurator/components/MarketContextCheckboxView", "../../../../core/enum/SalesChannel", "../../../../core/constants/OfferTypeEnum", "../../../../core/enum/SoftBundleGroup"], function(_exports, _react, _OfferDeviceFilterMobileComponent, _InfoComponent, _MarketContextCheckboxView, _SalesChannel, _OfferTypeEnum, _SoftBundleGroup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDeviceFilterMobileComponent = babelHelpers.interopRequireDefault(_OfferDeviceFilterMobileComponent);
    _MarketContextCheckboxView = babelHelpers.interopRequireDefault(_MarketContextCheckboxView);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _SoftBundleGroup = babelHelpers.interopRequireDefault(_SoftBundleGroup);

    var ProductTabHeaderView = function ProductTabHeaderView(props) {
        var renderConditionalInfo = function renderConditionalInfo(_ref) {
            var channels = _ref.channels,
                selectedOfferType = _ref.selectedOfferType,
                softBundleGroup = _ref.softBundleGroup,
                hasLove = _ref.hasLove;

            if (channels.sales === _SalesChannel.default.WWW && selectedOfferType === _OfferTypeEnum.default.VOICE_LDF && softBundleGroup === _SoftBundleGroup.default.LDF) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-padding u-padding-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_InfoComponent.ConditionalInfoComponent, {
                    condition: hasLove,
                    type: "blueInfo",
                    color: "black",
                    bgColor: "white",
                    title: "Pamiętaj!",
                    padding: "noPadding",
                    text: "Jesteś w Love dla Firm - dzięki temu korzystasz ze specjalnych rabatów. Jeśli chcesz korzystać z nich dalej - musisz mieć aktywną umowę na internet dla biura.",
                    altText: "Love dla firm to pakiet obejmujący abonament komórkowy i internet stacjonarny w Orange dzięki czemu koszt pierwszej karty jest od 35,00 zł + VAT, a drugą kartę dostaniesz za 0 zł."
                }));
            }
        };

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding-top-l u-small-padding-top-l u-small-padding-l "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "h1 u-no-spacing"
        }, props.tabHeaderText)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right u-padding-top-s"
        }, /*#__PURE__*/ _react.default.createElement(_MarketContextCheckboxView.default, null)))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding u-padding-left-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs opl-tabs--secondary"
        }, props.options.length >= 1 && !props.isDuet ? /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs__nav-wrapper"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs__nav-wrapper-inner"
        }, /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-tabs__nav",
            "data-js-module": "common/modules/opl-tabs",
            "data-js-options": "{\"tabNavLinkInnerCor\": 30}"
        }, props.options.map(function(option, index) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                className: "opl-tabs__nav-item"
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "opl-tabs__nav-item__content"
            }, /*#__PURE__*/ _react.default.createElement("a", {
                href: "#",
                onClick: function onClick() {
                    return props.onChange(option.value);
                },
                className: "opl-tabs__nav-link" + (option.description === props.headerText ? " is-active" : ""),
                "data-selected": option.value == props.selectedOfferType ? "1" : "0",
                "aria-selected": option.value == props.selectedOfferType
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-tabs__nav-link-inner"
            }, /*#__PURE__*/ _react.default.createElement("span", null, option.description || option.value)))));
        })))) : null)), renderConditionalInfo(props), /*#__PURE__*/ _react.default.createElement(_OfferDeviceFilterMobileComponent.default, {
            descriptions: props.descriptions,
            channels: props.channels
        }));
    };

    var _default = ProductTabHeaderView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductTabHeaderView.js.map