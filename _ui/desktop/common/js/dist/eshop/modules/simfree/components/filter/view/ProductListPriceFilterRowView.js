define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var ProductListPriceFilterRowView = function ProductListPriceFilterRowView(props) {
        return /*#__PURE__*/ _react.default.createElement("li", {
            className: "u-spacing opl-gradient-fade--item",
            key: "key_" + props.type
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: "o-" + props.type + " opl-" + props.type + " u-block"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: props.type,
            checked: props.checked ? true : false,
            onClick: props.onClick
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci-label u-font-normal"
        }, props.text)));
    };

    var _default = ProductListPriceFilterRowView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListPriceFilterRowView.js.map