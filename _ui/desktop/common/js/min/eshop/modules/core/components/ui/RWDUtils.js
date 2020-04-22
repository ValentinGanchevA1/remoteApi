define(["exports", "react", "prop-types"], function(e, s, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ResponsiveVisibility = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t);

    function o(e) {
        var t = void 0 === e.tablet ? e.desktop : e.tablet,
            o = void 0 === e.mobile ? e.desktop : e.mobile,
            i = e.desktop ? "" : "u-hide ",
            l = t ? e.desktop ? "" : "u-medium-block" : e.desktop ? "u-medium-hide" : "",
            d = o ? e.desktop ? "" : " u-small-block" : e.desktop ? " u-small-hide" : "";
        return s.default.createElement("div", {
            className: i + l + d
        }, e.children)
    }(e.ResponsiveVisibility = o).propTypes = {
        desktop: t.default.bool,
        tablet: t.default.bool,
        mobile: t.default.bool
    }, o.defaultProps = {
        desktop: !0
    }
});
//# sourceMappingURL=RWDUtils.js.map