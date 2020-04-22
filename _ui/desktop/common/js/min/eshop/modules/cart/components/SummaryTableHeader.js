define(["exports", "react"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SummaryTableHeader = void 0, t = babelHelpers.interopRequireWildcard(t);

    function a(e) {
        return t.default.createElement("table", {
            id: e.parentCmp
        }, t.default.createElement("caption", {
            className: "u-small-padding-l u-small-border-bottom u-small-border--l"
        }, t.default.createElement("span", {
            className: "h1 u-no-padding-left u-small-no-padding"
        }, e.title)), t.default.createElement("thead", null, t.default.createElement("tr", null, t.default.createElement("th", null), t.default.createElement("th", null), t.default.createElement("th", {
            className: "second-last u-font-normal"
        }, e.oneTimeHeader), t.default.createElement("th", {
            className: "last u-font-normal u-no-padding-right"
        }, e.monthlyHeader))))
    }(e.SummaryTableHeader = a).defaultProps = {
        title: "",
        oneTimeHeader: "",
        monthlyHeader: ""
    }
});
//# sourceMappingURL=SummaryTableHeader.js.map