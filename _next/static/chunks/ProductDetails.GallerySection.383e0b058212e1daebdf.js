(window.omniJsonp = window.omniJsonp || []).push([
    [19], {
        "2P86": function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "GallerySection", (function() {
                return p
            }));
            var n = i("zjfJ"),
                a = i("5IAQ"),
                o = i("zygG"),
                s = i("ERkP"),
                c = i.n(s),
                l = i("I6rk"),
                r = i("Kq2c"),
                b = i("F6me"),
                d = i("nJ3U"),
                u = i("IBuz"),
                m = i("l1C2");
            c.a.createElement;
            var O = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                p = c.a.memo((function() {
                    var e, t = Object(l.a)(),
                        i = Object(r.useTheme)().bp,
                        s = function() {
                            var e = Object(u.b)().current.context,
                                t = e.details,
                                i = e.onCloseShelf,
                                n = e.selectedItemIndex,
                                a = e.selectedVariants;
                            return {
                                images: c.a.useMemo((function() {
                                    var e;
                                    if (!t) return [];
                                    var i = t.product.items[n].code;
                                    return (null === (e = a[i].images) || void 0 === e ? void 0 : e.map((function(e) {
                                        return {
                                            alt: e.alt || "",
                                            url: e.source
                                        }
                                    }))) || []
                                }), [t, n, a]),
                                onCloseShelf: i
                            }
                        }(),
                        p = s.images,
                        f = s.onCloseShelf,
                        j = c.a.useState(!1),
                        h = Object(o.a)(j, 2),
                        g = h[0],
                        x = h[1];
                    return Object(m.b)("section", {
                        role: "region",
                        css: Object(a.a)(Object(n.a)({
                            flex: "1 0 0",
                            display: "block",
                            padding: "10px 0 0 0"
                        }, i.FROM_DESKTOP, {
                            display: "flex",
                            flexBasis: "50%",
                            flexDirection: "column",
                            padding: "10px 20px 50px 0"
                        }), "")
                    }, f && Object(m.b)(b.a, {
                        variant: "LIGHT",
                        isFirstStep: !1,
                        backAction: f,
                        isBorderBottom: !1,
                        isVisible: !0,
                        shouldBeAnimated: !1,
                        steps: [{
                            id: "A",
                            name: "Rekomendowane",
                            shouldBeVisible: !0,
                            isActive: !1,
                            action: f
                        }, {
                            id: "B",
                            name: "Szczeg\xf3\u0142y",
                            shouldBeVisible: !0,
                            isActive: !0
                        }],
                        css: O
                    }), Object(m.b)("div", {
                        css: Object(a.a)((e = {
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            width: "100vw",
                            left: -20
                        }, Object(n.a)(e, i.FROM_TABLET, {
                            justifyContent: "space-between",
                            left: 0,
                            margin: "0 auto",
                            width: 480
                        }), Object(n.a)(e, i.FROM_DESKTOP, {
                            height: "100%",
                            width: "100%"
                        }), Object(n.a)(e, i.ONLY_TABLET, {
                            minHeight: 630
                        }), e), "")
                    }, Object(m.b)(r.ArrowSeparator, {
                        orientation: "VERTICAL",
                        css: Object(a.a)(Object(n.a)({
                            display: "none"
                        }, i.FROM_DESKTOP, {
                            display: "block",
                            position: "absolute",
                            right: -20,
                            top: 0,
                            bottom: 0
                        }), "")
                    }), Object(m.b)("div", {
                        css: Object(a.a)(Object(n.a)({
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                            width: "100%"
                        }, i.FROM_TABLET, {
                            flex: 1,
                            margin: "0 auto",
                            maxWidth: g ? 260 : "100%",
                            transition: "max-width ".concat(g ? ".25s ease-out" : ".5s ease-in"),
                            willChange: "max-width"
                        }), "")
                    }, Object(m.b)(r.Gallery, {
                        images: p,
                        isMobile: t
                    })), !t && Object(m.b)(d.a, {
                        onToggle: x
                    })))
                }))
        }
    }
]);
//# sourceMappingURL=ProductDetails.GallerySection.383e0b058212e1daebdf.js.map