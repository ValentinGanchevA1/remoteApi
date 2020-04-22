define(["exports", "react"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t);

    function a(e) {
        return t.default.createElement("li", {
            className: "u-spacing opl-gradient-fade--item",
            key: "key_" + e.type
        }, t.default.createElement("label", {
            className: "o-" + e.type + " opl-" + e.type + " u-block"
        }, t.default.createElement("input", {
            type: e.type,
            checked: !!e.checked,
            onClick: e.onClick
        }), t.default.createElement("span", {
            className: "o-ci"
        }), t.default.createElement("span", {
            className: "o-ci-label u-font-normal"
        }, e.text)))
    }
    e.default = a
});
//# sourceMappingURL=ProductListPriceFilterRowView.js.map