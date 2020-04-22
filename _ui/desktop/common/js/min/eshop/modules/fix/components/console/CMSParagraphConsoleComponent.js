define(["exports", "react", "prop-types", "../../../core/enum/ParagraphType", "../../../core/enum/Color"], function(e, n, t, l, r) {
    "use strict";

    function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l), r = babelHelpers.interopRequireDefault(r);

    function a(e) {
        var t = e.innerPadding ? "u-padding-" + e.innerPadding + " u-padding-top-" + e.innerPadding : "",
            r = e.title ? e.title : e.type === l.default.WARN || e.type === l.default.ERROR ? "Uwaga" : "",
            a = l.default.getColor(e.type);
        return n.default.createElement("div", {
            className: "l-page-row u-padding-".concat(e.outerPadding, " u-padding-top-").concat(e.outerPadding)
        }, n.default.createElement("div", {
            className: "opl-console l-row ".concat(t),
            style: {
                borderLeft: "10px solid ".concat(a)
            }
        }, d(function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(r), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }({}, e, {
            color: a
        })), n.default.createElement("div", {
            className: "u-padding-all-m l-col l-col--auto"
        }, !!r && n.default.createElement("div", {
            className: "u-padding-s u-font-bold"
        }, r), n.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: e.content
            }
        })), !!e.reactContent && n.default.createElement("div", {
            className: "u-padding-all-m l-col l-col-3 u-right"
        }, e.reactContent)))
    }
    var d = function(e) {
        var t = e.type,
            r = e.color;
        switch (t) {
            case l.default.WARN:
            case l.default.ERROR:
            case l.default.INFO:
                return n.default.createElement("div", {
                    className: "l-col l-col--auto"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--".concat(t.toLowerCase(), " g-icon--m-s u-padding u-padding-right-s u-padding-top-m"),
                    style: {
                        color: r
                    },
                    "aria-hidden": "true"
                }));
            default:
                return null
        }
    };
    a.propTypes = {
        content: t.default.string.isRequired,
        type: t.default.string,
        title: t.default.string,
        outerPadding: t.default.string,
        innerPadding: t.default.string
    }, a.defaultProps = {
        outerPadding: "l",
        type: l.default.CONSOLE
    };
    var i = a;
    e.default = i
});
//# sourceMappingURL=CMSParagraphConsoleComponent.js.map