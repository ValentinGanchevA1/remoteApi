define(["exports", "react"], function(e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Sticker = void 0, s = babelHelpers.interopRequireDefault(s);
    e.Sticker = function(e) {
        var l = 0 < arguments.length && void 0 !== e ? e : {};
        if (l.sticker) {
            var a = {
                    background: {
                        backgroundColor: "#" + l.sticker.color || "#FFD200"
                    },
                    font: {
                        color: "#" + l.sticker.textColor || "#000000",
                        fontSize: l.sticker.textSize || "small"
                    }
                },
                t = "LEFT" === l.sticker.align ? "u-left u-position-left" : "u-right u-position-right",
                o = l.className ? l.className : "",
                r = {
                    __html: l.sticker.name
                };
            return l.renderMobileVersion ? s.default.createElement("div", {
                className: "opl-glorious--badges opl-glorious--badges-small  ".concat(t)
            }, s.default.createElement("span", {
                className: "opl-glorious--badges-bg u-margin-left-l u-medium-margin-left-xl u-small-no-margin",
                style: a.background
            }), s.default.createElement("div", {
                className: "opl-glorious--badges-text u-margin-left-l u-medium-margin-left-m u-medium-margin-left-xl u-small-no-margin",
                style: a.font
            }, s.default.createElement("p", {
                className: "u-font-bold u-small-font-small u-no-margin-b",
                dangerouslySetInnerHTML: r
            }))) : s.default.createElement("div", {
                className: "opl-glorious--badges opl-glorious--badges-small u-large-margin-left-m u-large-margin-left-l ".concat(o, " ").concat(t)
            }, s.default.createElement("span", {
                className: "opl-glorious--badges-bg u-small-no-margin",
                style: a.background
            }), s.default.createElement("div", {
                className: "opl-glorious--badges-text ",
                style: a.font
            }, s.default.createElement("p", {
                className: "u-font-bold u-small-font-small u-no-margin-b",
                dangerouslySetInnerHTML: r
            })))
        }
        return null
    }
});
//# sourceMappingURL=Sticker.js.map