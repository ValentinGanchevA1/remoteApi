define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(_exports, _react, _TooltipFromHtml) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);

    var OfferDisclaimerComponent = function OfferDisclaimerComponent(_ref) {
        var descriptions = _ref.descriptions,
            processType = _ref.processType,
            className = _ref.className;
        var offerDisclaimer = descriptions[['offerDisclaimer', processType].filter(Boolean).join(".")];
        return !!offerDisclaimer ? /*#__PURE__*/ _react.default.createElement(_TooltipFromHtml.default, {
            className: "g-black1-bg g-white1-c u-padding-all-l u-padding u-padding-top ".concat(className),
            html: offerDisclaimer
        }) : null;
    };

    var _default = OfferDisclaimerComponent;
    _exports.default = _default;
});
//# sourceMappingURL=OfferDisclaimerComponent.js.map