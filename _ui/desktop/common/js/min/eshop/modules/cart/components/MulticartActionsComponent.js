define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/Utils"], function(e, t, l, n, o, a, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l);

    function u(e) {
        return t.default.createElement("div", null, t.default.createElement(r.ShowWhenCartIsEmpty, null, t.default.createElement(o.OraButton, {
            className: "",
            size: "small",
            type: "text",
            onClick: e.onClickReturn
        }, e.descriptions.returnToShopButton || "Wróć do sklepu")), ("true" !== e.showNewButton ? c : s)(e))
    }
    var c = function(e) {
            return t.default.createElement(r.HideWhenCartIsEmpty, {
                className: "l-row u-small-padding-top-l"
            }, t.default.createElement("div", {
                className: "l-col l-col-small-6"
            }, t.default.createElement(o.OraButton, {
                className: "",
                size: "small",
                type: "text",
                onClick: e.onClickReturn
            }, e.descriptions.returnToShopButton || "Wróć do sklepu")), t.default.createElement("div", {
                className: "l-col l-col-small-6 u-text-right"
            }, t.default.createElement(o.OraButton, {
                size: "small",
                type: "text",
                onClick: e.onClickRemove
            }, e.descriptions.removeCartButton || "Wyczyść koszyk")))
        },
        s = function(e) {
            return t.default.createElement(r.HideWhenCartIsEmpty, null, t.default.createElement("div", {
                className: "l-row u-padding-left-l u-padding-right-m u-padding-top-s u-padding-l"
            }, t.default.createElement("div", {
                className: "l-col u-vertical-middle l-col-small-" + ("true" == e.showNewButton ? "4" : "6")
            }, t.default.createElement(o.OraButton, {
                className: "",
                size: "small",
                type: "text",
                onClick: e.onClickReturn
            }, e.descriptions.returnToShopButton || "Wróć do sklepu")), t.default.createElement("div", {
                className: "l-col u-vertical-middle l-col-small-" + ("true" == e.showNewButton ? "4" : "6")
            }, t.default.createElement(o.OraButton, {
                size: "small",
                type: "text",
                onClick: e.onClickRemove
            }, e.descriptions.removeCartButton || "Wyczyść koszyk")), "true" == e.showNewButton && [t.default.createElement("div", {
                className: "l-col l-col-small-4 u-vertical-middle"
            }, t.default.createElement(o.OraButton, {
                size: "small",
                type: "text",
                onClick: e.onClickNew
            }, e.descriptions.newCartButton || "Nowy koszyk"))]))
        };
    u.propTypes = {
        onClickRemove: l.default.func
    };
    var i = (0, n.connect)(null, function(e) {
        return {
            onClickRemove: function() {
                return e((0, a.removeFromCart)(null))
            },
            onClickReturn: function() {
                return e((0, a.goBackEmptyCart)())
            },
            onClickNew: function() {
                return e((0, a.createNewCart)())
            }
        }
    })(u);
    e.default = i
});
//# sourceMappingURL=MulticartActionsComponent.js.map