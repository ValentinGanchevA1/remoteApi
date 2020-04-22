define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(_exports, _react, _propTypes, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var CheckoutPrice = function CheckoutPrice(props) {
        var checkoutPrice = props.checkoutPrice;

        if (!checkoutPrice) {
            return /*#__PURE__*/ _react.default.createElement("span", {
                className: "h4 u-no-spacing"
            }, "\u2014");
        }

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, "Op\u0142aty jednorazowe"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "h2 u-no-spacing"
        }, (0, _Utils.integer)(checkoutPrice.gross)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, ",", (0, _Utils.fraction)(checkoutPrice.gross), "\xA0", checkoutPrice.currency));
    };

    var _default = CheckoutPrice;
    _exports.default = _default;
});
//# sourceMappingURL=CheckoutPrice.js.map