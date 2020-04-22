(window.omniJsonp = window.omniJsonp || []).push([
    [23], {
        BjmB: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            }));
            var o = n("zjfJ"),
                i = n("5IAQ"),
                a = n("ERkP"),
                s = n.n(a),
                c = n("Kq2c"),
                r = n("Bc8N"),
                l = n("9Hq1"),
                b = n("xWEo"),
                d = n("l1C2");
            s.a.createElement;
            var p = {
                    name: "1abkfa",
                    styles: "display:flex;justify-content:space-between;margin-bottom:7px;"
                },
                O = {
                    name: "1bge839",
                    styles: "flex:1;text-align:right;"
                },
                f = {
                    name: "7sp8lv",
                    styles: "font-size:14px;margin-left:4px;"
                },
                g = {
                    name: "1uk1gs8",
                    styles: "margin:0;"
                },
                j = {
                    name: "k2ld0j",
                    styles: "margin:0;margin-left:auto;"
                },
                m = s.a.memo((function(t) {
                    var e, n = t.onExpanderClick,
                        a = t.onCheckClick,
                        s = t.isExpanded,
                        m = t.isChecked,
                        h = t.isBase,
                        u = t.isActive,
                        x = t.data,
                        y = Object(c.useTheme)(),
                        E = y.colors,
                        R = y.bp,
                        w = y.zIndex,
                        C = x.prices ? Object(r.a)(x.prices) : null,
                        v = {
                            position: "relative",
                            "::after": {
                                position: "absolute",
                                content: "''",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: E.WHITE,
                                opacity: .5,
                                zIndex: w.LAYER_5,
                                cursor: "not-allowed"
                            }
                        };
                    return Object(d.b)("header", {
                        css: u ? void 0 : v
                    }, Object(d.b)("div", {
                        css: Object(i.a)({
                            display: "flex",
                            flexFlow: "row no-wrap",
                            zIndex: w.LAYER_1
                        }, "")
                    }, Object(d.b)("button", {
                        type: "button",
                        disabled: !u,
                        onClick: a,
                        css: Object(i.a)((e = {
                            width: s ? 0 : 50,
                            position: "relative",
                            backgroundColor: "transparent",
                            margin: 0,
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            zIndex: w.LAYER_2,
                            transition: "width .2s ease",
                            flexShrink: 0,
                            "::before": {
                                position: "absolute",
                                content: "''",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: h ? E.BLACK : E.ORANGE_DARK,
                                opacity: s ? 0 : 1,
                                transform: "scaleX(".concat(m ? 1 : 0, ")"),
                                transition: "transform .15s, opacity .15s"
                            }
                        }, Object(o.a)(e, R.FROM_DESKTOP, {
                            width: s ? 0 : 65
                        }), Object(o.a)(e, R.FROM_DESKTOP, {
                            cursor: h ? "not-allowed" : "pointer"
                        }), e), "")
                    }, Object(d.b)("div", {
                        css: Object(i.a)({
                            border: "1px solid ".concat(m ? "transparent" : E.CHROME),
                            borderRadius: "50%",
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: w.LAYER_3
                        }, "")
                    }, Object(d.b)(b.a, {
                        name: "plus-1",
                        css: Object(i.a)({
                            display: m ? "none" : void 0,
                            width: 12,
                            height: 12
                        }, "")
                    }), Object(d.b)(b.a, {
                        name: "check-mark2",
                        css: Object(i.a)(Object(o.a)({
                            display: m ? void 0 : "none",
                            color: E.WHITE,
                            width: 15,
                            height: 13
                        }, R.FROM_DESKTOP, {
                            width: 20,
                            height: 18
                        }), "")
                    }))), Object(d.b)("button", {
                        type: "button",
                        disabled: !u,
                        onClick: n,
                        css: Object(i.a)({
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
                            borderLeft: "1px solid ".concat(m || s ? "transparent" : E.CHROME)
                        }, "")
                    }, Object(d.b)("div", {
                        css: p
                    }, Object(d.b)("strong", {
                        css: Object(i.a)({
                            color: h ? E.BLACK : E.ORANGE_DARK,
                            fontSize: 12,
                            lineHeight: 1,
                            textAlign: "left"
                        }, "")
                    }, x.subtitle, x.title && Object(d.b)("p", {
                        css: Object(i.a)({
                            fontSize: 18,
                            margin: s ? "5px 0 0 0" : 0,
                            lineHeight: 1,
                            color: E.BLACK,
                            maxHeight: s ? 40 : 0,
                            overflow: "hidden",
                            strong: {
                                color: E.ORANGE_DARK
                            }
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: x.title
                        }
                    })), Object(d.b)(b.a, {
                        name: "arrow-down-slim",
                        css: Object(i.a)(Object(o.a)({
                            fill: E.CHROME,
                            transition: "fill .15s, transform .3s",
                            transform: "rotate(".concat(s ? "180" : "0", "deg)"),
                            pointerEvents: "none"
                        }, R.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })), Object(d.b)("div", {
                        css: Object(i.a)({
                            maxHeight: s ? 0 : void 0,
                            overflow: "hidden",
                            transition: "max-height .05s ease"
                        }, "")
                    }, Object(d.b)("div", {
                        css: Object(i.a)(Object(o.a)({
                            display: "flex",
                            justifyContent: "space-betwen",
                            alignItems: "flex-end",
                            marginBottom: 7
                        }, R.FROM_DESKTOP, {
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginRight: 40
                        }), "")
                    }, x.title && Object(d.b)("strong", {
                        css: Object(i.a)(Object(o.a)({
                            flex: 1,
                            textAlign: "left",
                            marginRight: 20,
                            fontSize: 14,
                            strong: {
                                color: E.ORANGE_DARK
                            }
                        }, R.FROM_DESKTOP, {
                            fontSize: 18,
                            marginRight: "auto"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: x.title
                        }
                    }), !h && C && Object(d.b)("div", {
                        css: O
                    }, C.first && Object(l.a)(C.first) && Object(d.b)("span", {
                        css: Object(i.a)({
                            color: E.SILVER,
                            fontSize: 12,
                            display: "block",
                            width: "100%",
                            paddingBottom: 5
                        }, "")
                    }, "op\u0142ata jednorazowa ", C.first.price, " z\u0142"), C.last && !Object(l.a)(C.last) && Object(d.b)("span", {
                        css: Object(i.a)(Object(o.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            marginLeft: "auto"
                        }, R.FROM_DESKTOP, {
                            fontSize: 18
                        }), "")
                    }, C.last.price, Object(d.b)("span", {
                        css: f
                    }, "".concat(C.last.currency, "/mies."))))), !h && Object(d.b)("div", {
                        css: Object(i.a)(Object(o.a)({
                            display: "flex",
                            justifyContent: "space-between",
                            p: {
                                fontSize: 12,
                                lineHeight: 1,
                                color: E.SILVER
                            }
                        }, R.FROM_DESKTOP, {
                            marginRight: 42
                        }), "")
                    }, x.channels && Object(d.b)("p", {
                        css: g
                    }, "do ", x.channels.length, " kana\u0142\xf3w"), C && C.head.filter((function(t) {
                        return !Object(l.a)(t)
                    })).slice(0, 1).map((function(t, e) {
                        return Object(d.b)("p", {
                            css: j,
                            key: "PriceStep_".concat(t.price, "-").concat(e)
                        }, "".concat(t.price, " ").concat(t.currency, " / ").concat(t.monthTo, " mies."))
                    })))), Object(d.b)(b.a, {
                        name: "arrow-down-slim",
                        css: Object(i.a)(Object(o.a)({
                            display: "none"
                        }, R.FROM_DESKTOP, {
                            display: "block",
                            position: "absolute",
                            right: 0,
                            top: s ? 12 : 22,
                            fill: E.CHROME,
                            transition: "fill .15s, transform .3s",
                            transform: "rotate(".concat(s ? "180" : "0", "deg)"),
                            pointerEvents: "none",
                            width: 30,
                            height: 18,
                            marginLeft: 10
                        }), "")
                    }))), x.teaser && Object(d.b)("p", {
                        css: Object(i.a)({
                            width: "100%",
                            margin: 0,
                            maxHeight: s ? 0 : 40,
                            overflow: "hidden",
                            fontSize: 12,
                            lineHeight: "24px",
                            backgroundColor: E.BLACK,
                            color: E.WHITE,
                            padding: "0 10px"
                        }, "")
                    }, x.teaser))
                }))
        }
    }
]);
//# sourceMappingURL=e8e44bb0.1896306c277c3c8029bf.js.map