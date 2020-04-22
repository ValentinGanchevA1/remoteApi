define(["exports", "react", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/modules/simfree/components/PropositionForDeviceTabletDesktopView"], function(_exports, _react, _OraSwitcher, _PropositionForDeviceMobileView, _PropositionForDeviceTabletDesktopView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _PropositionForDeviceMobileView = babelHelpers.interopRequireDefault(_PropositionForDeviceMobileView);
    _PropositionForDeviceTabletDesktopView = babelHelpers.interopRequireDefault(_PropositionForDeviceTabletDesktopView);

    var OfferProductListMobileView = function OfferProductListMobileView(props) {
        var proposition = props.offer;
        return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
            key: props.index + "_switcher_mobile",
            onChangeHandler: props.onChange,
            isSelected: props.isSelected,
            className: "u-margin-l u-no-padding-r u-border",
            switcherClassName: "  opl-switcher-list__item u-cursor-pointer u-padding-all-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-large-hide u-medium-hide"
        }, /*#__PURE__*/ _react.default.createElement(_PropositionForDeviceMobileView.default, babelHelpers.extends({
            offer: proposition
        }, props, {
            isSelected: props.isSelected,
            key: "mobile_" + proposition.id,
            index: props.index
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement(_PropositionForDeviceTabletDesktopView.default, babelHelpers.extends({
            offer: proposition
        }, props, {
            isSelected: props.isSelected,
            key: "tablet_" + proposition.id,
            index: props.index
        }))));
    };

    var _default = OfferProductListMobileView;
    _exports.default = _default;
});
//# sourceMappingURL=OfferProductListMobileView.js.map