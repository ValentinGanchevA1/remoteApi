define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes"], function(_exports, _react, _propTypes, _Utils, _PriceBoxes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    var initialProps = {
        monthlyPrices: [],
        onlyFirst: false
    };

    var MonthlyPrices = function MonthlyPrices() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialProps;
        var monthlyPrices = props.monthlyPrices;

        if (!monthlyPrices || monthlyPrices.length == 0) {
            return /*#__PURE__*/ _react.default.createElement("span", {
                className: "h4 u-no-spacing"
            }, "\u2014");
        }

        var firstMonthPrice = monthlyPrices[0];
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, "Op\u0142aty miesi\u0119czne"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "h2 u-no-spacing"
        }, (0, _Utils.integer)(firstMonthPrice.gross)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, ",", (0, _Utils.fraction)(firstMonthPrice.gross), "\xA0", firstMonthPrice.currency), props.onlyFirst ? null : renderRemainingMonthlyPrices(monthlyPrices));
    };

    var renderRemainingMonthlyPrices = function renderRemainingMonthlyPrices(monthlyPrices) {
        return /*#__PURE__*/ _react.default.createElement("div", null, monthlyPrices.map(function(monthlyPrice, index) {
            //Skip the first one
            if (index == 0) {
                return null;
            }

            var price = monthlyPrice.gross.split(',');
            return /*#__PURE__*/ _react.default.createElement("span", {
                key: monthlyPrice.monthFrom + "-" + monthlyPrice.monthTo,
                className: "u-right u-text-nowrap"
            }, "od\xA0", monthlyPrice.monthFrom, " ", monthlyPrice.monthTo ? "do " + monthlyPrice.monthTo + " " : "", "m-ca ", monthlyPrice.gross, " ", monthlyPrice.currency);
        }));
    };

    var _default = MonthlyPrices;
    _exports.default = _default;
});
//# sourceMappingURL=MonthlyPrices.js.map