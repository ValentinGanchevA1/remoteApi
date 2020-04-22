define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t);

    function o(e) {
        return t.default.createElement(l.OraModal, {
            id: e.id,
            showClose: !1,
            narrow: !0,
            fallback: e.onClickRemove
        }, t.default.createElement("div", {
            className: "l-page-row u-font-bold opl-msg opl-msg--info g-icon--xs opl-msg--context"
        }, t.default.createElement("div", {
            className: "l-row u-spacing"
        }, t.default.createElement("div", {
            className: "l-col l-col-12"
        }, t.default.createElement("p", null, null != e.bundleNo ? e.removeItemPopupText : e.removeCartPopupText))), t.default.createElement("div", {
            className: "l-row"
        }, t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4 u-small-spacing"
        }, t.default.createElement(l.OraButton, {
            onClick: e.onClickRemove,
            type: "secondary",
            className: "u-w-100",
            modal: !0
        }, null != e.bundleNo ? e.removeItemAgreeButtonText : e.removeCartAgreeButtonText)), t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-4"
        }, t.default.createElement(l.OraButton, {
            className: "u-w-100",
            modal: !0
        }, null != e.bundleNo ? e.removeItemNotAgreeButtonText : e.removeCartNotAgreeButtonText)))))
    }
    o.defaultProps = {
        removeItemPopupText: "Czy na pewno chcesz usunąć produkt z koszyka?",
        removeItemAgreeButtonText: "Tak",
        removeItemNotAgreeButtonText: "Nie",
        removeCartPopupText: "Czy na pewno chcesz usunąć wszystko z koszyka?",
        removeCartAgreeButtonText: "Tak",
        removeCartNotAgreeButtonText: "Nie"
    };
    var a = o;
    e.default = a
});
//# sourceMappingURL=MultiCartRemovePopup.js.map