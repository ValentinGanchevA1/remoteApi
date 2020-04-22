(window.omniJsonp = window.omniJsonp || []).push([
    [23], {
        BjmB: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var i = n("zjfJ"),
                o = n("5IAQ"),
                a = n("ERkP"),
                s = n.n(a),
                c = n("Kq2c"),
                r = n("6Ks6"),
                l = n("IPR6"),
                b = n("61+9"),
                d = n("Bc8N"),
                p = n("9Hq1"),
                O = n("l1C2");
            s.a.createElement;
            var f = {
                    name: "1abkfa",
                    styles: "display:flex;justify-content:space-between;margin-bottom:7px;"
                },
                g = {
                    name: "1bge839",
                    styles: "flex:1;text-align:right;"
                },
                j = {
                    name: "7sp8lv",
                    styles: "font-size:14px;margin-left:4px;"
                },
                h = {
                    name: "1uk1gs8",
                    styles: "margin:0;"
                },
                m = {
                    name: "k2ld0j",
                    styles: "margin:0;margin-left:auto;"
                },
                u = s.a.memo((function(t) {
                    var e, n = t.onExpanderClick,
                        a = t.onCheckClick,
                        s = t.isExpanded,
                        u = t.isChecked,
                        x = t.isBase,
                        y = t.isActive,
                        R = t.data,
                        E = Object(c.useTheme)(),
                        w = E.colors,
                        C = E.bp,
                        v = E.zIndex,
                        S = R.prices ? Object(d.a)(R.prices) : null,
                        _ = {
                            position: "relative",
                            "::after": {
                                position: "absolute",
                                content: "''",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: w.WHITE,
                                opacity: .5,
                                zIndex: v.LAYER_5,
                                cursor: "not-allowed"
                            }
                        };
                    return Object(O.b)("header", {
                        css: y ? void 0 : _
                    }, Object(O.b)("div", {
                        css: Object(o.a)({
                            display: "flex",
                            flexFlow: "row no-wrap",
                            zIndex: v.LAYER_1
                        }, "")
                    }, Object(O.b)("button", {
                        type: "button",
                        disabled: !y,
                        onClick: a,
                        css: Object(o.a)((e = {
                            width: s ? 0 : 50,
                            position: "relative",
                            backgroundColor: "transparent",
                            margin: 0,
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            zIndex: v.LAYER_2,
                            transition: "width .2s ease",
                            flexShrink: 0,
                            "::before": {
                                position: "absolute",
                                content: "''",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: x ? w.BLACK : w.ORANGE_DARK,
                                opacity: s ? 0 : 1,
                                transform: "scaleX(".concat(u ? 1 : 0, ")"),
                                transition: "transform .15s, opacity .15s"
                            }
                        }, Object(i.a)(e, C.FROM_DESKTOP, {
                            width: s ? 0 : 65
                        }), Object(i.a)(e, C.FROM_DESKTOP, {
                            cursor: x ? "not-allowed" : "pointer"
                        }), e), "")
                    }, Object(O.b)("div", {
                        css: Object(o.a)({
                            border: "1px solid ".concat(u ? "transparent" : w.CHROME),
                            borderRadius: "50%",
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: v.LAYER_3
                        }, "")
                    }, Object(O.b)(r.a, {
                        css: Object(o.a)({
                            display: u ? "none" : void 0,
                            width: 12,
                            height: 12
                        }, "")
                    }), Object(O.b)(l.a, {
                        css: Object(o.a)(Object(i.a)({
                            display: u ? void 0 : "none",
                            color: w.WHITE,
                            width: 15,
                            height: 13
                        }, C.FROM_DESKTOP, {
                            width: 20,
                            height: 18
                        }), "")
                    }))), Object(O.b)("button", {
                        type: "button",
                        disabled: !y,
                        onClick: n,
                        css: Object(o.a)({
                            cursor: "pointer",
                            flex: 1,
                            minHeight: s ? 20 : 57,
                            border: "none",
                            margin: s ? "20px 20px 10px 0" : "10px 10px 10px 0",
                            paddingLeft: s ? 20 : 10,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "stretch",
                            backgroundColor: "transparent",
                            position: "relative",
                            borderLeft: "1px solid ".concat(u || s ? "transparent" : w.CHROME)
                        }, "")
                    }, Object(O.b)("div", {
                        css: f
                    }, Object(O.b)("strong", {
                        css: Object(o.a)({
                            color: x ? w.BLACK : w.ORANGE_DARK,
                            fontSize: 12,
                            lineHeight: 1,
                            textAlign: "left"
                        }, "")
                    }, R.subtitle, R.title && Object(O.b)("p", {
                        css: Object(o.a)({
                            fontSize: 18,
                            margin: s ? "5px 0 0 0" : 0,
                            lineHeight: 1,
                            color: w.BLACK,
                            maxHeight: s ? 40 : 0,
                            overflow: "hidden",
                            strong: {
                                color: w.ORANGE_DARK
                            }
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: R.title
                        }
                    })), Object(O.b)(b.a, {
                        css: Object(o.a)(Object(i.a)({
                            fill: w.CHROME,
                            transition: "fill .15s, transform .3s",
                            transform: "rotate(".concat(s ? "180" : "0", "deg)"),
                            pointerEvents: "none"
                        }, C.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })), Object(O.b)("div", {
                        css: Object(o.a)({
                            maxHeight: s ? 0 : void 0,
                            overflow: "hidden",
                            transition: "max-height .05s ease"
                        }, "")
                    }, Object(O.b)("div", {
                        css: Object(o.a)(Object(i.a)({
                            display: "flex",
                            justifyContent: "space-betwen",
                            alignItems: "flex-end",
                            marginBottom: 7
                        }, C.FROM_DESKTOP, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginRight: 40
                        }), "")
                    }, R.title && Object(O.b)("strong", {
                        css: Object(o.a)(Object(i.a)({
                            flex: 1,
                            textAlign: "left",
                            marginRight: 20,
                            fontSize: 14,
                            strong: {
                                color: w.ORANGE_DARK
                            }
                        }, C.FROM_DESKTOP, {
                            fontSize: 18,
                            marginRight: "auto"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: R.title
                        }
                    }), !x && S && Object(O.b)("div", {
                        css: g
                    }, S.first && Object(p.a)(S.first) && Object(O.b)("span", {
                        css: Object(o.a)({
                            color: w.SILVER,
                            fontSize: 12,
                            display: "block",
                            width: "100%",
                            paddingBottom: 5
                        }, "")
                    }, "op\u0142ata jednorazowa ", S.first.price, " z\u0142"), S.last && !Object(p.a)(S.last) && Object(O.b)("span", {
                        css: Object(o.a)(Object(i.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            marginLeft: "auto"
                        }, C.FROM_DESKTOP, {
                            fontSize: 18
                        }), "")
                    }, S.last.price, Object(O.b)("span", {
                        css: j
                    }, "".concat(S.last.currency, "/mies."))))), !x && Object(O.b)("div", {
                        css: Object(o.a)(Object(i.a)({
                            display: "flex",
                            justifyContent: "space-between",
                            p: {
                                fontSize: 12,
                                lineHeight: 1,
                                color: w.SILVER
                            }
                        }, C.FROM_DESKTOP, {
                            marginRight: 42
                        }), "")
                    }, R.channels && Object(O.b)("p", {
                        css: h
                    }, "do ", R.channels.length, " kana\u0142\xf3w"), S && S.head.filter((function(t) {
                        return !Object(p.a)(t)
                    })).slice(0, 1).map((function(t, e) {
                        return Object(O.b)("p", {
                            css: m,
                            key: "PriceStep_".concat(t.price, "-").concat(e)
                        }, "".concat(t.price, " ").concat(t.currency, " / ").concat(t.monthTo, " mies."))
                    })))), Object(O.b)(b.a, {
                        css: Object(o.a)(Object(i.a)({
                            display: "none"
                        }, C.FROM_DESKTOP, {
                            display: "block",
                            position: "absolute",
                            right: 0,
                            top: s ? 12 : 22,
                            fill: w.CHROME,
                            transition: "fill .15s, transform .3s",
                            transform: "rotate(".concat(s ? "180" : "0", "deg)"),
                            pointerEvents: "none",
                            width: 30,
                            height: 18,
                            marginLeft: 10
                        }), "")
                    }))), R.teaser && Object(O.b)("p", {
                        css: Object(o.a)({
                            width: "100%",
                            margin: 0,
                            maxHeight: s ? 0 : 40,
                            overflow: "hidden",
                            fontSize: 12,
                            lineHeight: "24px",
                            backgroundColor: w.BLACK,
                            color: w.WHITE,
                            padding: "0 10px"
                        }, "")
                    }, R.teaser))
                }))
        }
    }
]);
//# sourceMappingURL=e8e44bb0.0d445727f2108e70b170.js.map