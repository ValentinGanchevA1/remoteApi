define(["exports", "react", "prop-types", "./Utils"], function(_exports, _react, _propTypes, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var ProductRow = function ProductRow(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-l-xl u-padding-top-l-xl u-small-padding-top-l u-small-padding-l ".concat(props.borderBottom && 'u-border-bottom')
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-checkout__icon__cell u-text-center"
        }, /*#__PURE__*/ _react.default.createElement(_Utils.Graphic, {
            icon: props.product.thumbnailIcon,
            imgUrl: props.product.imageUrl
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-small-font-large opl-word-wrap",
            dangerouslySetInnerHTML: {
                __html: props.product.name
            }
        }), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-small-padding-top-s",
            dangerouslySetInnerHTML: {
                __html: props.product.description
            }
        }), props.product.additionalContent));
    };

    ProductRow.propTypes = {
        product: _propTypes.default.shape({
            name: _propTypes.default.string,
            thumbnailIcon: _propTypes.default.string,
            imageUrl: _propTypes.default.string,
            description: _propTypes.default.string,
            additionalContent: _propTypes.default.object
        }),
        borderBottom: _propTypes.default.bool
    };
    ProductRow.defaultProps = {
        borderBottom: true
    };
    var _default = ProductRow;
    _exports.default = _default;
});
//# sourceMappingURL=ProductRow.js.map