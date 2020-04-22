define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var BuyMoreProductsComponent = function BuyMoreProductsComponent(props) {
        var onClick = function onClick(event) {
            event.preventDefault();
            props.addButtonClicked(event);
        };

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "g-white1-bg u-box-shadow u-spacing"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-left-l u-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement("table", {
            className: "u-table-fixed"
        }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__icon__cell"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--" + props.icon
        })), /*#__PURE__*/ _react.default.createElement("td", {
            className: "u-padding-top-l u-padding-l u-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, props.buyMoreLabel)), /*#__PURE__*/ _react.default.createElement("td", {
            className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "opl-product-addlink u-right u-small-right",
            onClick: onClick
        }))))))));
    };

    BuyMoreProductsComponent.propTypes = {
        buyMoreLabel: _propTypes.default.string,
        icon: _propTypes.default.string,
        addButtonClicked: _propTypes.default.func
    };
    var _default = BuyMoreProductsComponent;
    _exports.default = _default;
});
//# sourceMappingURL=BuyMoreProductsEntry.js.map