define(["exports", "react", "react-redux", "./ClientContextCheckbox"], function(e, t, l, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), n = babelHelpers.interopRequireDefault(n);
    var r = (0, l.connect)(function() {
        return {}
    }, function() {
        return {}
    })(function() {
        return t.default.createElement("div", null, t.default.createElement("p", {
            className: "h3"
        }, "FiltersComponent"), t.default.createElement(n.default, {
            tooltip: "tooltip",
            label: "label"
        }))
    });
    e.default = r
});
//# sourceMappingURL=FiltersComponent.js.map