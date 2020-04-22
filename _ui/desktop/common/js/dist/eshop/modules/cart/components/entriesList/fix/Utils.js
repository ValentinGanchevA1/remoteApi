define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.GraphicCell = _exports.Graphic = _exports.getFormattedNumber = _exports.transformMonthlyPriceInfo = _exports.transformFirstBillInfo = _exports.ChangeComponent = _exports.NumberComponent = _exports.MobileNumberSection = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var MobileNumberSection = function MobileNumberSection(props) {
        return /*#__PURE__*/ _react.default.createElement("div", null, props.numberLabel, "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, getFormattedNumber(props.product.phoneNumber), props.editable === true && /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            onClick: props.handleShowModalVoip,
            className: "u-spacing-left"
        }, props.changeNumberLabel)));
    };

    _exports.MobileNumberSection = MobileNumberSection;

    var NumberComponent = function NumberComponent(props) {
        var phoneNumber = props.selectedNumberVoip != "" ? props.selectedNumberVoip : props.product.phoneNumber;
        phoneNumber = phoneNumber ? getFormattedNumber(phoneNumber) : null;
        return phoneNumber ? /*#__PURE__*/ _react.default.createElement("div", null, props.numberLabel, "\xA0", phoneNumber, props.editable === true && /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            onClick: props.handleShowModalVoip,
            className: "u-spacing-left"
        }, props.changeNumberLabel)) : null;
    };

    _exports.NumberComponent = NumberComponent;

    var ChangeComponent = function ChangeComponent(props) {
        return !!props.onChange && !!props.changeLabel ? /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap",
            onClick: props.onChange
        }, props.changeLabel)) : null;
    };

    _exports.ChangeComponent = ChangeComponent;

    var transformFirstBillInfo = function transformFirstBillInfo(price) {
        if (price) {
            return {
                integer: price.gross.split(',')[0],
                fraction: price.gross.split(',')[1],
                currency: price.currency
            };
        } else {
            return null;
        }
    };

    _exports.transformFirstBillInfo = transformFirstBillInfo;

    var transformMonthlyPriceInfo = function transformMonthlyPriceInfo(prices) {
        var monthlyPrices = prices.map(function(charge) {
            return {
                integer: charge.gross.split(',')[0],
                fraction: charge.gross.split(',')[1],
                currency: charge.currency,
                start: charge.monthFrom,
                end: charge.monthTo
            };
        });
        return monthlyPrices;
    };

    _exports.transformMonthlyPriceInfo = transformMonthlyPriceInfo;

    var getFormattedNumber = function getFormattedNumber(number) {
        var formattedNumber = "";

        if (number) {
            formattedNumber = number.substr(0, 2) + " " + number.substr(2, 3) + " " + number.substr(5, 2) + " " + number.substr(7, 2);
        }

        return formattedNumber;
    };

    _exports.getFormattedNumber = getFormattedNumber;

    var Graphic = function Graphic(props) {
        if (props.imgUrl) {
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("img", {
                src: props.imgUrl
            }));
        } else {
            return /*#__PURE__*/ _react.default.createElement("span", {
                "aria-hidden": "true",
                className: "g-icon g-icon--only g-icon--" + props.icon
            });
        }
    };

    _exports.Graphic = Graphic;

    var GraphicCell = function GraphicCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__icon__cell"
        }, /*#__PURE__*/ _react.default.createElement(Graphic, {
            icon: props.icon ? props.icon.toLowerCase().split('_').join("-") : "",
            imgUrl: props.imgUrl
        }));
    };

    _exports.GraphicCell = GraphicCell;
});
//# sourceMappingURL=Utils.js.map