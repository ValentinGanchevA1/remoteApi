define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var PriceBox = function PriceBox(props) {
        if (!props.price || !props.price.monthlyCosts || !props.price.monthlyCosts.length > 0 || !props.price.monthlyCosts[0]) {
            return null;
        }

        var price = !!props.net ? props.price.monthlyCosts[0].net.split(',') : props.price.monthlyCosts[0].gross.split(',');
        var integerPricePart = price[0];
        var fractionPricePart = price[1].split(' ')[0];
        var monthly = !!props.price.monthlyCosts[0].monthFrom || !!props.price.monthlyCosts[0].monthTo;
        var currency = "".concat(props.price.monthlyCosts[0].currency).concat(monthly && '/mies.');
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part u-padding-right-s"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__whole"
        }, integerPricePart)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__part"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__separator"
        }, ","), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__decimal"
        }, fractionPricePart), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-price-v2__suffix"
        }, currency))), /*#__PURE__*/ _react.default.createElement("div", null, props.price.oneTimeCost && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-spacing-top-s u-font-small u-font-bold"
        }, "+\xA0", !!props.net ? props.price.oneTimeCost.net : props.price.oneTimeCost.gross, " ", props.price.oneTimeCost.currency, "\xA0jednorazowa op\u0142ata")));
    };

    PriceBox.propTypes = {
        price: _propTypes.default.shape({
            oneTimeCost: _propTypes.default.shape({
                gross: _propTypes.default.string,
                net: _propTypes.default.string,
                currency: _propTypes.default.string
            }),
            monthlyCosts: _propTypes.default.arrayOf(_propTypes.default.shape({
                gross: _propTypes.default.string,
                net: _propTypes.default.string,
                currency: _propTypes.default.string,
                monthFrom: _propTypes.default.number,
                monthTo: _propTypes.default.number
            }))
        })
    };
    var _default = PriceBox;
    _exports.default = _default;
});
//# sourceMappingURL=PriceBox.js.map