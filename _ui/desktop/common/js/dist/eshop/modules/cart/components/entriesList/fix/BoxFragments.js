define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.PriceTiers = _exports.ButtonCell = _exports.LabelCell = _exports.FloatingBox = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var FloatingBox = function FloatingBox(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top-s u-padding-s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-box-shadow ".concat(props.boxClassName)
        }, props.children))));
    };

    _exports.FloatingBox = FloatingBox;

    var LabelCell = function LabelCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "u-padding-top-l u-padding-l u-padding-right-l"
        }, props.label);
    };

    _exports.LabelCell = LabelCell;

    var ButtonCell = function ButtonCell(props) {
        return /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "opl-product-addlink u-right u-small-right",
            onClick: props.onclick
        }));
    };

    _exports.ButtonCell = ButtonCell;

    var PriceTiers = function PriceTiers(props) {
        var _props$prices = babelHelpers.toArray(props.prices),
            head = _props$prices[0],
            tail = _props$prices.slice(1);

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", null, head.integer, ",", head.fraction, " ", head.currency, "/mc "), head.end ? /*#__PURE__*/ _react.default.createElement("span", null, head.start, "-", head.end, " mc") : /*#__PURE__*/ _react.default.createElement("span", null, "od ", head.start, " mc")), tail && tail.length > 0 && /*#__PURE__*/ _react.default.createElement(PriceTiers, {
            prices: tail
        }));
    };

    _exports.PriceTiers = PriceTiers;
});
//# sourceMappingURL=BoxFragments.js.map