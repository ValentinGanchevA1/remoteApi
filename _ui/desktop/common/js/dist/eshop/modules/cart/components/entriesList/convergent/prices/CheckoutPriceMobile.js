define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(_exports, _react, _propTypes, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var CheckoutPriceMobile = function CheckoutPriceMobile(props) {
        var checkoutPrice = props.checkoutPrice;

        if (!checkoutPrice) {
            return null;
        }

        return /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-small"
        }, "+ ", (0, _Utils.integer)(checkoutPrice.gross), ",", (0, _Utils.fraction)(checkoutPrice.gross), " ", checkoutPrice.currency, " aktywacja");
    };

    var _default = CheckoutPriceMobile;
    _exports.default = _default;
});
//# sourceMappingURL=CheckoutPriceMobile.js.map