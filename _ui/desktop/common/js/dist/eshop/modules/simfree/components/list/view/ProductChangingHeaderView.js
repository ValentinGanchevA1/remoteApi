define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent"], function(_exports, _react, _OraCommonComponents, _OfferDeviceFilterMobileComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDeviceFilterMobileComponent = babelHelpers.interopRequireDefault(_OfferDeviceFilterMobileComponent);

    var ProductChangingHeaderView = function ProductChangingHeaderView(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-padding-top-xl u-padding-l u-small-padding-top-l u-small-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "h1 l-col l-col-small-12 l-col-medium-4 l-col-3"
        }, props.changeTerminalLbl), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            onClick: props.redirectToCart,
            className: "u-w-100"
        }, "Powrót do koszyka")))), /*#__PURE__*/ _react.default.createElement(_OfferDeviceFilterMobileComponent.default, {
            descriptions: props.descriptions,
            channels: props.channels
        }));
    };

    var _default = ProductChangingHeaderView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductChangingHeaderView.js.map