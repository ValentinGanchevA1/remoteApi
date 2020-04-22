define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(_exports, _react, _propTypes, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var MonthlyPricesMobile = function MonthlyPricesMobile(props) {
        var monthlyPrices = props.monthlyPrices;

        if (!monthlyPrices || monthlyPrices.length == 0) {
            return null;
        }

        var firstMonthPrice = monthlyPrices[0];
        return /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2",
            "data-price": "{firstMonthPrice.gross}"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__whole"
        }, (0, _Utils.integer)(firstMonthPrice.gross))), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__separator"
        }, ","), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__decimal"
        }, (0, _Utils.fraction)(firstMonthPrice.gross)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__suffix"
        }, firstMonthPrice.currency, "/mies.")));
    };

    var _default = MonthlyPricesMobile;
    _exports.default = _default;
});
//# sourceMappingURL=MonthlyPricesMobile.js.map