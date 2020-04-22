define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var MultiCartRemovePopup = function MultiCartRemovePopup(props) {
        return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraModal, {
            id: props.id,
            showClose: false,
            narrow: true,
            fallback: props.onClickRemove
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row u-font-bold opl-msg opl-msg--info g-icon--xs opl-msg--context"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-spacing"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12"
        }, /*#__PURE__*/ _react.default.createElement("p", null, props.bundleNo != null ? props.removeItemPopupText : props.removeCartPopupText))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4 u-small-spacing"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            onClick: props.onClickRemove,
            type: "secondary",
            className: "u-w-100",
            modal: true
        }, props.bundleNo != null ? props.removeItemAgreeButtonText : props.removeCartAgreeButtonText)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4"
        }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
            className: "u-w-100",
            modal: true
        }, props.bundleNo != null ? props.removeItemNotAgreeButtonText : props.removeCartNotAgreeButtonText)))));
    };

    MultiCartRemovePopup.defaultProps = {
        removeItemPopupText: "Czy na pewno chcesz usunąć produkt z koszyka?",
        removeItemAgreeButtonText: "Tak",
        removeItemNotAgreeButtonText: "Nie",
        removeCartPopupText: "Czy na pewno chcesz usunąć wszystko z koszyka?",
        removeCartAgreeButtonText: "Tak",
        removeCartNotAgreeButtonText: "Nie"
    };
    var _default = MultiCartRemovePopup;
    _exports.default = _default;
});
//# sourceMappingURL=MultiCartRemovePopup.js.map