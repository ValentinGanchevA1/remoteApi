define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.transformOneTimePriceInfo = transformOneTimePriceInfo;
    _exports.transformPriceInfo = transformPriceInfo;
    _exports.IfCollectionNotEmpty = _exports.LCol = _exports.LRow = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var LRow = function LRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            id: props.id,
            className: "l-row " + props.className,
            onClick: props.onClick
        }, props.children);
    };

    _exports.LRow = LRow;

    var LCol = function LCol(props) {
        var bigColumnWidth = props.big ? " l-col-" + props.big : "";
        var mediumColumnWidth = props.medium ? " l-col-medium-" + props.medium : "";
        var smallColumnWidth = props.small ? " l-col-small-" + props.small : "";
        var className = props.className ? props.className : "";
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col " + bigColumnWidth + mediumColumnWidth + smallColumnWidth + " " + className,
            onClick: props.onClick
        }, props.children);
    };

    _exports.LCol = LCol;

    var IfCollectionNotEmpty = function IfCollectionNotEmpty(props) {
        if (props.array && props.array.length > 0) {
            return /*#__PURE__*/ _react.default.createElement("div", null, props.children);
        } else {
            return null;
        }
    };

    _exports.IfCollectionNotEmpty = IfCollectionNotEmpty;
    LCol.propTypes = {
        big: _propTypes.PropTypes.string,
        medium: _propTypes.PropTypes.string,
        small: _propTypes.PropTypes.string,
        className: _propTypes.PropTypes.string
    };

    function transformOneTimePriceInfo(price, net) {
        var oneTimePrice;

        if (price && price.price) {
            var priceTxt;

            if (net) {
                if (typeof price.netPrice === "string") {
                    priceTxt = price.netPrice;
                } else {
                    priceTxt = price.net;
                }
            } else {
                if (typeof price.price === "string") {
                    priceTxt = price.price;
                } else {
                    priceTxt = price.gross;
                }
            }

            oneTimePrice = {
                integer: priceTxt.split(',')[0],
                fraction: priceTxt.split(',')[1],
                currency: price.currency
            };
        } else {
            oneTimePrice = {
                integer: "0",
                fraction: "00",
                currency: "zł"
            };
        }

        return oneTimePrice;
    }

    function transformPriceInfo(prices, net) {
        var monthlyPrices = prices && prices.map(function(charge) {
            var priceTxt;

            if (net) {
                if (typeof charge.netPrice === "string") {
                    priceTxt = charge.netPrice;
                } else {
                    priceTxt = charge.net;
                }
            } else {
                if (typeof charge.price === "string") {
                    priceTxt = charge.price;
                } else {
                    priceTxt = charge.gross;
                }
            }

            return {
                integer: priceTxt.split(',')[0],
                fraction: priceTxt.split(',')[1],
                currency: charge.currency,
                start: charge.monthFrom,
                end: charge.monthTo
            };
        });

        if (!monthlyPrices || monthlyPrices.length === 0) {
            monthlyPrices = [{
                integer: "0",
                fraction: "00",
                currency: "zł",
                start: null,
                end: null
            }];
        }

        return monthlyPrices;
    }
});
//# sourceMappingURL=Utils.js.map