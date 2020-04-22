(window.omniJsonp = window.omniJsonp || []).push([
    [13], {
        "7XZX": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("zjfJ"),
                a = n("ERkP"),
                o = n.n(a),
                c = n("IdR4"),
                i = n("KcfE"),
                s = n("Bc8N");

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var l = function(e) {
                var t = e.currentPayment,
                    n = e.shouldShowNetPrices,
                    a = "ONETIME" === t.paymentType,
                    l = o.a.useMemo((function() {
                        var e = [];
                        a ? e.push({
                            price: n ? t.netPrice : t.priceGross,
                            monthFrom: 0,
                            monthTo: 0,
                            currency: "z\u0142"
                        }) : (t.monthlyPayments ? t.monthlyPayments : []).forEach((function(t) {
                            return e.push(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        Object(r.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t, {
                                price: n ? t.netPrice : t.price
                            }))
                        }));
                        return Object(s.a)(e)
                    }), [a, t, n]);
                if (!t || !l) return null;
                var p = a ? "za ".concat(Object(c.a)(l.first.price), " z\u0142 ").concat(n ? "+ VAT" : "") : null,
                    b = a ? null : l.tail.map((function(e) {
                        return "".concat(Object(c.a)(e.price), " z\u0142 ").concat(n ? "+ VAT " : "", "x ").concat(e.monthTo, " ").concat(Object(i.a)(["rata", "raty", "rat"], e.monthTo))
                    })),
                    O = l.tail.length > 0 ? Object(c.a)(l.first.price) : null;
                return {
                    propositionName: t.propositionName,
                    oneTimePayment: p,
                    installmentPayment: b,
                    followingPriceStep: O
                }
            }
        },
        SHc4: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "ProductDetails", (function() {
                return ve
            }));
            var r = n("ERkP"),
                a = n.n(r),
                o = n("zjfJ"),
                c = n("5IAQ"),
                i = n("Kq2c"),
                s = n("tHt9"),
                u = n("l1C2"),
                l = (a.a.createElement, a.a.memo((function(e) {
                    var t = e.children,
                        n = Object(i.useTheme)(),
                        r = n.colors,
                        a = n.bp;
                    return Object(u.b)("div", {
                        css: Object(c.a)({
                            width: "100%",
                            backgroundColor: r.WHITE
                        }, "")
                    }, Object(u.b)(s.a, {
                        css: Object(c.a)(Object(o.a)({
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            minHeight: 700
                        }, a.FROM_DESKTOP, {
                            flexDirection: "row",
                            padding: "30px 0",
                            justifyContent: "space-between"
                        }), "")
                    }, t))
                }))),
                p = n("I6rk"),
                b = n("F6me"),
                O = n("cxan"),
                d = n("zygG"),
                f = n("HbGN"),
                m = n("kN39");

            function y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var j = function(e, t) {
                    switch (t.type) {
                        case "setConfigValue":
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? y(Object(n), !0).forEach((function(t) {
                                        Object(o.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e, Object(o.a)({}, t.payload.key, t.payload.value));
                        default:
                            return e
                    }
                },
                g = n("y6sE");
            a.a.createElement;

            function T(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var h = a.a.createContext(null),
                v = a.a.memo((function(e) {
                    var t = e.payments,
                        n = e.products,
                        r = e.productUrl,
                        c = e.productId,
                        i = e.secondaryButton,
                        s = e.onCloseShelf,
                        l = Object(f.a)(e, ["payments", "products", "productUrl", "productId", "secondaryButton", "onCloseShelf"]),
                        p = Object(g.b)().market,
                        b = a.a.useReducer(j, {
                            payments: t,
                            products: n,
                            productUrl: r,
                            productId: c,
                            secondaryButton: i,
                            onCloseShelf: s,
                            selectedProductIndex: 0,
                            currentPayment: t.find((function(e) {
                                return e.primary
                            })) || t[0],
                            showNetPrices: Object(m.a)(p)
                        }),
                        y = Object(d.a)(b, 2),
                        v = y[0],
                        x = y[1],
                        P = a.a.useMemo((function() {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? T(Object(n), !0).forEach((function(t) {
                                        Object(o.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, v, {
                                dispatch: x
                            })
                        }), [v, x]);
                    return Object(u.b)(h.Provider, Object(O.a)({
                        value: P
                    }, l))
                })),
                x = function() {
                    var e = a.a.useContext(h);
                    if (null === e) throw Error("useProductDetailsContext: Please provide ProductDetailsProvider value.");
                    return e
                };
            a.a.createElement;
            var P = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                S = a.a.memo((function() {
                    var e, t = Object(i.useTheme)().bp,
                        n = function() {
                            var e = x(),
                                t = e.onCloseShelf,
                                n = e.selectedProductIndex,
                                r = e.products;
                            return {
                                images: a.a.useMemo((function() {
                                    return r[n].pictures.map((function(e) {
                                        return {
                                            url: e.src,
                                            alt: e.title
                                        }
                                    }))
                                }), [n, r]),
                                onCloseShelf: t
                            }
                        }(),
                        r = n.images,
                        s = n.onCloseShelf,
                        l = Object(p.a)();
                    return Object(u.b)("section", {
                        role: "region",
                        css: Object(c.a)(Object(o.a)({
                            flex: "1 0 0",
                            display: "block",
                            padding: "10px 0 0 0"
                        }, t.FROM_DESKTOP, {
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px 20px 50px 0",
                            justifyContent: "space-between",
                            width: "100%"
                        }), "")
                    }, s && Object(u.b)(b.a, {
                        variant: "LIGHT",
                        isFirstStep: !1,
                        backAction: s,
                        isBorderBottom: !1,
                        isVisible: !0,
                        shouldBeAnimated: !1,
                        steps: [{
                            id: "A",
                            name: "Rekomendowane",
                            shouldBeVisible: !0,
                            isActive: !1,
                            action: s
                        }, {
                            id: "B",
                            name: "Szczeg\xf3\u0142y",
                            shouldBeVisible: !0,
                            isActive: !0
                        }],
                        css: P
                    }), Object(u.b)("div", {
                        css: Object(c.a)((e = {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            width: "100vw",
                            left: -20
                        }, Object(o.a)(e, t.FROM_TABLET, {
                            width: "100%",
                            left: 0
                        }), Object(o.a)(e, t.FROM_DESKTOP, {
                            flexBasis: 500,
                            justifyContent: "flex-start"
                        }), e), "")
                    }, Object(u.b)(i.ArrowSeparator, {
                        orientation: "VERTICAL",
                        css: Object(c.a)(Object(o.a)({
                            display: "none"
                        }, t.FROM_DESKTOP, {
                            display: "block",
                            position: "absolute",
                            right: -20,
                            top: 0,
                            bottom: 0
                        }), "")
                    }), Object(u.b)(i.Gallery, {
                        images: r,
                        isMobile: l
                    })))
                })),
                w = n("wS+0"),
                E = n("qziy"),
                A = n("xD7x"),
                I = n("OMmA"),
                C = n("BBT5"),
                _ = n("kARf"),
                R = n("CoR5"),
                N = n("LNx+"),
                k = n("cvAU"),
                M = n("vczh"),
                z = n("xk1y"),
                D = n("IyoU"),
                B = {
                    ram: A.a,
                    ram2: I.a,
                    batterycapacity: E.a,
                    "batterycapacity-2": C.a,
                    cameratype: _.a,
                    "cameratype-2": R.a,
                    displaysize: w.a,
                    "displaysize-2": D.a,
                    "displaysize-3": D.a,
                    softwareversion: N.a,
                    "softwareversion-2": k.a,
                    "internal storage capacity": M.a,
                    "internal storage capacity-2": z.a,
                    default: w.a
                };
            a.a.createElement;
            var L = {
                    name: "ss0py5",
                    styles: "display:flex;align-items:center;:not(:last-of-type){margin-bottom:20px;}"
                },
                F = {
                    name: "1ljoqyq",
                    styles: "width:28px;height:28px;margin-right:24px;flex-shrink:0;"
                },
                G = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                K = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                H = {
                    name: "1cev0y9",
                    styles: "margin:0;font-size:14px;"
                },
                V = a.a.memo((function() {
                    var e = Object(i.useTheme)().colors,
                        t = function() {
                            var e = x();
                            return {
                                attributes: e.products[e.selectedProductIndex].attributes,
                                attributesMap: B
                            }
                        }(),
                        n = t.attributes,
                        r = t.attributesMap;
                    return Object(u.b)(i.SmoothHeightResizer, null, Object(u.b)("ul", {
                        css: Object(c.a)({
                            borderTop: "1px solid ".concat(e.CHROME),
                            paddingTop: 20
                        }, "")
                    }, n.map((function(e, t) {
                        var n = e.key,
                            a = e.value,
                            o = e.name,
                            c = r[n] || r.default;
                        return Object(u.b)("li", {
                            key: "".concat(n, "-").concat(t),
                            css: L
                        }, c && Object(u.b)(c, {
                            css: F
                        }), Object(u.b)("div", {
                            css: G
                        }, o && Object(u.b)("strong", {
                            css: K
                        }, o), a && Object(u.b)("p", {
                            css: H
                        }, a)))
                    }))))
                }));
            a.a.createElement;
            var U = {
                    name: "1c18zwa",
                    styles: "display:flex;padding-bottom:8px;"
                },
                W = a.a.memo(a.a.forwardRef((function(e, t) {
                    var n = e.children,
                        r = e.setRefs,
                        o = a.a.useRef([]);
                    return a.a.useEffect((function() {
                        r(o.current)
                    }), [r, n]), Object(u.b)("div", {
                        ref: t,
                        css: U
                    }, a.a.Children.map(n, (function(e, t) {
                        return e && a.a.cloneElement(e, {
                            ref: function(e) {
                                o.current[t] = e
                            }
                        })
                    })))
                })));
            a.a.createElement;
            var q = {
                    name: "h6tsxv",
                    styles: "position:relative;margin-bottom:20px;"
                },
                J = function() {
                    var e = Object(i.useTheme)(),
                        t = e.colors,
                        n = e.bp,
                        r = function() {
                            var e = x(),
                                t = e.products,
                                n = e.selectedProductIndex,
                                r = e.dispatch;
                            return {
                                onProductClick: a.a.useCallback((function(e) {
                                    r({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "selectedProductIndex",
                                            value: e
                                        }
                                    })
                                }), [r]),
                                products: t,
                                selectedProductIndex: n
                            }
                        }(),
                        s = r.products,
                        l = r.onProductClick,
                        p = function() {
                            var e = a.a.useRef(null),
                                t = a.a.useRef([]),
                                n = a.a.useState(0),
                                r = Object(d.a)(n, 2),
                                o = r[0],
                                c = r[1],
                                i = a.a.useState({}),
                                s = Object(d.a)(i, 2),
                                u = s[0],
                                l = s[1];
                            return a.a.useEffect((function() {
                                t.current.length <= 0 || l({
                                    left: t.current[o].offsetLeft,
                                    width: t.current[o].offsetWidth
                                })
                            }), [o]), {
                                bind: {
                                    containerRef: e,
                                    setRefs: function(e) {
                                        t.current = e
                                    }
                                },
                                activeItemIndex: o,
                                setActiveItemIndex: c,
                                activeItemStyles: u
                            }
                        }(),
                        b = p.setActiveItemIndex,
                        O = p.bind,
                        f = p.activeItemStyles,
                        m = p.activeItemIndex;
                    return Object(u.b)("nav", {
                        role: "tablist",
                        "aria-label": "Produkty",
                        css: q
                    }, Object(u.b)(W, O, s.map((function(e, r) {
                        return Object(u.b)("span", {
                            key: r,
                            role: "tab",
                            "aria-selected": r === m,
                            onClick: function() {
                                l(r), b(r)
                            },
                            css: Object(c.a)(Object(o.a)({
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: 12,
                                color: r === m ? t.ORANGE_DARK : t.BLACK,
                                transition: "color .15s",
                                ":not(:last-child)": {
                                    marginRight: 20
                                }
                            }, n.FROM_TABLET, {
                                fontSize: 14
                            }), "")
                        }, e.name)
                    }))), Object(u.b)("div", {
                        style: f,
                        css: Object(c.a)([{
                            position: "absolute",
                            bottom: 0,
                            height: 2,
                            backgroundColor: t.ORANGE_DARK,
                            transition: "all .2s",
                            willChange: "left, width"
                        }], "")
                    }))
                },
                Z = function() {
                    var e = x(),
                        t = e.payments,
                        n = e.currentPayment,
                        r = e.dispatch,
                        o = {
                            CONTRACT: ["ACTIVATION", "MNP", "RETENTION", "MIGRATION_PRE_POST", "MIGRATION_NJU_POST_TO_POST", "MNP_TWOSTEP", "MIGRATION_NJU_PRE_TO_POST", "MIGRATION_ZETAFON_POST"],
                            NO_CONTRACT: ["SALE_OF_GOODS"],
                            NO_CONTRACT_INST: ["INSTALMENT_SALES_OF_GOODS_NC", "INSTALMENT_SALES_OF_GOODS"]
                        },
                        c = Object.entries(o).map((function(e) {
                            var n = Object(d.a)(e, 2),
                                r = n[0],
                                a = n[1];
                            return {
                                toggleType: r,
                                offerComponents: t.filter((function(e) {
                                    return a.includes(e.processType)
                                })).map((function(e) {
                                    return {
                                        propositionId: e.propositionId,
                                        processType: e.processType
                                    }
                                }))
                            }
                        })).filter((function(e) {
                            return e.offerComponents.length > 0
                        })),
                        i = c.find((function(e) {
                            return e.offerComponents.some((function(e) {
                                return e.propositionId === n.propositionId
                            }))
                        }));
                    return {
                        onOfferChange: a.a.useCallback((function(e) {
                            r({
                                type: "setConfigValue",
                                payload: {
                                    key: "currentPayment",
                                    value: t.find((function(t) {
                                        return t.propositionId === e
                                    }))
                                }
                            })
                        }), [r, t]),
                        currentPayment: n,
                        processTypesPerOfferToggleMap: o,
                        togglesData: c,
                        togglesLabelMap: {
                            CONTRACT: "z abonamentem",
                            NO_CONTRACT: "bez abonamentu",
                            NO_CONTRACT_INST: "bez abonamentu na raty",
                            INSTALMENT_SALES_OF_GOODS_NC: "nie",
                            INSTALMENT_SALES_OF_GOODS: "tak"
                        },
                        currentToggle: i
                    }
                },
                X = (a.a.createElement, a.a.memo((function() {
                    var e = Object(i.useTheme)().bp,
                        t = Z(),
                        n = t.onOfferChange,
                        r = t.currentPayment,
                        a = t.togglesData,
                        s = t.togglesLabelMap;
                    return Object(u.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, a.map((function(t) {
                        return Object(u.b)(i.Toggle, {
                            key: t.toggleType,
                            checked: t.offerComponents.some((function(e) {
                                return e.propositionId === r.propositionId
                            })),
                            onChange: function() {
                                return n(t.offerComponents[0].propositionId)
                            },
                            wrapperCss: {
                                "input + div": Object(o.a)({
                                    minHeight: 45,
                                    textAlign: "center",
                                    fontSize: 12
                                }, e.FROM_TABLET, {
                                    padding: 8,
                                    minHeight: 50
                                }),
                                "&:not(:last-of-type)": Object(o.a)({
                                    marginBottom: 10
                                }, e.FROM_TABLET, {
                                    marginRight: 20,
                                    marginBottom: 0
                                })
                            }
                        }, s[t.toggleType])
                    })))
                }))),
                Y = n("7XZX");
            a.a.createElement;
            var Q = {
                    name: "uewl2b",
                    styles: "margin-bottom:20px;"
                },
                $ = {
                    name: "w2l4ca",
                    styles: "font-size:12px;font-weight:bold;margin:0 0 10px 0;line-height:1;"
                },
                ee = {
                    name: "pp2erc",
                    styles: "display:block;font-size:12px;margin-top:2px;"
                },
                te = function() {
                    var e = Object(i.useTheme)(),
                        t = e.colors,
                        n = e.bp,
                        r = x(),
                        a = r.currentPayment,
                        s = r.showNetPrices,
                        l = Object(Y.a)({
                            currentPayment: a,
                            shouldShowNetPrices: s
                        });
                    if (!l) return null;
                    var p = l.propositionName,
                        b = l.oneTimePayment,
                        O = l.installmentPayment,
                        d = l.followingPriceStep;
                    return Object(u.b)("div", {
                        css: Q
                    }, Object(u.b)(i.SmoothHeightResizer, null, p && Object(u.b)("p", {
                        css: $
                    }, p), Object(u.b)("strong", {
                        css: Object(c.a)(Object(o.a)({
                            color: t.ORANGE_DARK,
                            fontSize: 18
                        }, n.FROM_TABLET, {
                            fontSize: 22
                        }), "")
                    }, b, O), d && Object(u.b)("span", {
                        css: ee
                    }, "+ ", d, " z\u0142", " ", s && "0" !== d ? "+ VAT" : "", " na start")))
                };
            a.a.createElement;
            var ne = {
                    name: "vtn2l4",
                    styles: "padding-bottom:20px;"
                },
                re = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                ae = function() {
                    var e = Object(i.useTheme)().bp,
                        t = Z(),
                        n = t.currentPayment,
                        r = t.onOfferChange,
                        a = t.currentToggle,
                        s = t.togglesLabelMap;
                    return Object(u.b)(i.SmoothHeightResizer, null, a.offerComponents.length > 1 && Object(u.b)("div", {
                        css: ne
                    }, Object(u.b)("strong", {
                        css: re
                    }, "Korzystasz z us\u0142ug abonamentowych Orange?"), Object(u.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 10
                        }, e.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, a.offerComponents.map((function(t) {
                        return Object(u.b)(i.Toggle, {
                            key: t.propositionId,
                            checked: t.propositionId === n.propositionId,
                            onChange: function() {
                                return r(t.propositionId)
                            },
                            wrapperCss: {
                                "input + div": Object(o.a)({
                                    minHeight: 45,
                                    textAlign: "center",
                                    fontSize: 12
                                }, e.FROM_TABLET, {
                                    padding: 8,
                                    minHeight: 50
                                }),
                                "&:not(:last-of-type)": Object(o.a)({
                                    marginBottom: 10
                                }, e.FROM_TABLET, {
                                    marginRight: 20,
                                    marginBottom: 0
                                })
                            }
                        }, s["INSTALMENT_SALES_OF_GOODS" === t.processType ? "INSTALMENT_SALES_OF_GOODS" : "INSTALMENT_SALES_OF_GOODS_NC"])
                    })))))
                },
                oe = (a.a.createElement, a.a.memo((function() {
                    var e = Object(i.useTheme)().bp,
                        t = function() {
                            var e = x().products,
                                t = e[0].name,
                                n = e.slice(1).map((function(e) {
                                    return e.name
                                }));
                            return {
                                baseProductName: t,
                                additionalProductsNames: n,
                                doAdditionalProductsExist: n.length > 0
                            }
                        }(),
                        n = t.baseProductName,
                        r = t.additionalProductsNames,
                        a = t.doAdditionalProductsExist;
                    return Object(u.b)("h3", {
                        css: Object(c.a)(Object(o.a)({
                            fontSize: 18,
                            marginBottom: 20,
                            lineHeight: "1"
                        }, e.FROM_TABLET, {
                            fontSize: 30
                        }), "")
                    }, n, a && Object(u.b)("span", {
                        css: Object(c.a)(Object(o.a)({
                            display: "block",
                            fontSize: 14,
                            lineHeight: "1",
                            fontWeight: "lighter"
                        }, e.FROM_TABLET, {
                            lineHeight: "22px"
                        }), "")
                    }, "w zestawie z", " ", r.map((function(e, t) {
                        return Object(u.b)("strong", {
                            key: t
                        }, " ".concat(e))
                    }))))
                }))),
                ce = n("KD1n"),
                ie = n("Bit+"),
                se = n("VtSi"),
                ue = n.n(se),
                le = n("pu3o"),
                pe = n.n(le),
                be = n("VfYs"),
                Oe = n("LsVC"),
                de = n("sGZ7"),
                fe = (r.createElement, r.memo((function(e) {
                    return Object(u.b)("svg", Object(O.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 750.2 667.2",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(u.b)("path", {
                        fill: "currentColor",
                        d: "M750.2 574v20c-.3 1.1-.8 2.1-1 3.2-1.8 11-5.4 21.3-11.4 30.7-16.6 25.9-40.8 38.7-71.2 39-39.3.5-78.7.3-118 .3-155.6 0-311.3-.1-466.9-.2-42.5 0-79.2-35.4-81.5-77.9-1-19.4 4.7-36.6 14.4-53.1 67.7-115.8 135.2-231.7 202.8-347.6 28.3-48.6 56.7-97.2 85.1-145.8 11-18.8 26.2-32.7 47.4-38.9 5.1-1.5 10.3-2.5 15.4-3.7h20c.4.2.8.7 1.3.7C415 4.1 434.9 19.8 449 43.9 545.1 209 641.4 374 737.4 539.2c4.5 7.7 7.1 16.4 10.3 24.8 1.3 3.2 1.7 6.7 2.5 10zM375.9 451.4c-.6-.3-.1-.2.3.2 26.2 26.3 52.4 52.7 78.6 79 8.2 8.2 18 12.8 29.8 10.8 13.8-2.3 23.5-10 27.8-23.5 4.4-13.5.6-25.3-9.2-35.2-25-25.2-50.1-50.3-75.1-75.4-1.4-1.4-2.7-2.8-4.2-4.4 2-2.1 3.7-4 5.4-5.7 23.3-23.3 46.8-46.5 69.8-70.1 4.7-4.8 8.8-11.1 10.9-17.5 4.6-13.6-2.5-29.9-15-37.6-13-8-29.8-6.7-41.1 4.3-25 24.5-49.6 49.3-74.4 74-1.4 1.4-2.8 2.7-5 4.7-1.4-1.9-2.4-3.5-3.7-4.8-23.4-23.5-46.9-46.9-70.3-70.3-2.1-2.1-4.3-4.2-6.7-6-15.8-11.9-37.7-8.2-48.7 8.2-9.6 14.2-7.3 31.4 6.1 44.9 23.4 23.5 46.9 46.9 70.3 70.4 1.9 1.9 3.7 4 5.4 5.8-27.2 27.2-54.3 53.9-80.8 81.1-13.8 14.2-12.8 35 1.2 48.3 13.4 12.7 33.9 12.3 47.7-1.2 26.9-26.5 53.7-53.1 80.9-80z"
                    }))
                })));
            fe.displayName = "FunctionalErrorIcon";
            a.a.createElement;
            var me = {
                    name: "121on1r",
                    styles: "display:flex;align-items:center;padding-top:10px;width:100%;"
                },
                ye = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                je = a.a.memo((function(e) {
                    var t = e.errorMessage,
                        n = Object(i.useTheme)().colors;
                    return t ? Object(u.b)("div", {
                        css: me
                    }, Object(u.b)(fe, {
                        css: Object(c.a)({
                            width: 20,
                            height: 20,
                            color: n.DANGER,
                            marginRight: 20,
                            flexShrink: 0
                        }, "")
                    }), Object(u.b)("strong", {
                        css: ye
                    }, t)) : null
                }));
            a.a.createElement;

            function ge() {
                var e = Object(ce.a)(["\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]);
                return ge = function() {
                    return e
                }, e
            }
            var Te = function() {
                    var e, t = Object(i.useTheme)().bp,
                        n = function() {
                            var e = x(),
                                t = e.products,
                                n = e.productUrl,
                                r = e.productId,
                                o = e.currentPayment,
                                c = Object(g.b)().market,
                                i = Object(de.c)(),
                                s = i.cartItemsCount,
                                u = i.dispatch,
                                l = a.a.useState(!1),
                                p = Object(d.a)(l, 2),
                                b = p[0],
                                O = p[1],
                                f = a.a.useState(null),
                                m = Object(d.a)(f, 2),
                                y = m[0],
                                j = m[1];
                            a.a.useEffect((function() {
                                j(null)
                            }), [o]);
                            var T = o.processType,
                                h = o.servicePlan,
                                v = o.offerType,
                                P = o.rateplanId,
                                S = o.propositionId,
                                w = o.priceGross,
                                E = o.availableProductsKey,
                                A = "".concat(n.indexOf("/sklep") > -1 ? n : "/sklep".concat(n), "?").concat(pe.a.stringify({
                                    processType: T,
                                    serviceplan: h,
                                    chosenDevice: r,
                                    offerType: v
                                })),
                                I = o ? {
                                    ratePlanId: P,
                                    id: S,
                                    offerType: v,
                                    processType: T,
                                    deviceVariant: r,
                                    market: c,
                                    availableProductsKey: E
                                } : {},
                                C = "INSTALMENT_SALES_OF_GOODS" !== o.processType;
                            return {
                                onAddToCartClick: a.a.useCallback((function() {
                                    if (o) {
                                        ue.a.async((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, j(null), O(!0), Object(Oe.b)(t[0].name, S, "".concat(w), T, v, c), e.next = 6, ue.a.awrap(Object(be.a)(I));
                                                case 6:
                                                    u({
                                                        type: "setCartItemsCount",
                                                        payload: (s || 0) + 1
                                                    }), window.location.assign("/koszyk/multi"), e.next = 14;
                                                    break;
                                                case 10:
                                                    e.prev = 10, e.t0 = e.catch(0), O(!1), j(e.t0.message || "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d.");
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), null, null, [
                                            [0, 10]
                                        ], Promise)
                                    }
                                }), [t, I, u, s, v, w, T, S, o, c]),
                                isAddToCartResponsePending: b,
                                productPageUrl: A,
                                errorMessage: y,
                                isProcessTypeForNewCustomer: C
                            }
                        }(),
                        r = n.onAddToCartClick,
                        s = n.isAddToCartResponsePending,
                        l = n.errorMessage,
                        p = n.productPageUrl,
                        b = n.isProcessTypeForNewCustomer,
                        O = Object(u.c)(ge());
                    return Object(u.b)(i.SmoothHeightResizer, null, Object(u.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingBottom: 20
                        }, t.FROM_TABLET, {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItems: "center"
                        }), "")
                    }, s && Object(u.b)("strong", {
                        css: Object(c.a)(Object(o.a)({
                            fontSize: 14,
                            display: "block",
                            opacity: 1,
                            maxHeight: 20,
                            transition: "opacity .2s ease 1s, max-height .2s",
                            span: {
                                animation: "".concat(O, " 1.2s ease infinite"),
                                ":nth-of-type(2)": {
                                    animationDelay: ".2s"
                                },
                                ":nth-of-type(3)": {
                                    animationDelay: ".4s"
                                }
                            }
                        }, t.FROM_TABLET, {
                            fontSize: 16,
                            margin: "15px 0"
                        }), "")
                    }, "Trwa dodawanie do koszyka", Object(u.b)("span", null, "."), Object(u.b)("span", null, "."), Object(u.b)("span", null, ".")), Object(u.b)(ie.a, {
                        disabled: s,
                        action: {
                            id: "buy_now",
                            text: "Kup teraz",
                            title: "Kup teraz",
                            variant: "PRIMARY_ON_WHITE",
                            type: b ? "BUTTON" : "BUTTON_LINK",
                            action: b ? "addToCart" : p
                        },
                        actionsMap: {
                            addToCart: r
                        },
                        css: Object(c.a)((e = {
                            display: s ? "none" : void 0,
                            width: "100%"
                        }, Object(o.a)(e, t.FROM_TABLET, {
                            width: 230,
                            order: -1
                        }), Object(o.a)(e, t.FROM_DESKTOP, {
                            width: 190
                        }), e), "")
                    }), Object(u.b)(je, {
                        errorMessage: l
                    }), b && Object(u.b)(i.A, {
                        title: "Zobacz wi\u0119cej",
                        href: p,
                        disabled: s,
                        css: Object(c.a)(Object(o.a)({
                            display: s ? "none" : void 0,
                            marginTop: 20,
                            fontSize: 14
                        }, t.FROM_TABLET, {
                            margin: "0 0 0 20px",
                            order: -1
                        }), "")
                    }, "Zobacz wi\u0119cej")))
                },
                he = (a.a.createElement, a.a.memo((function() {
                    var e, t, n = Object(i.useTheme)().bp,
                        r = Object(p.a)();
                    return Object(u.b)("section", {
                        role: "region",
                        css: Object(c.a)(Object(o.a)({
                            flex: "1 0 0",
                            padding: "20px 0",
                            marginBottom: 10
                        }, n.FROM_DESKTOP, {
                            padding: "10px 0 60px 20px",
                            margin: 0,
                            width: "100%"
                        }), "")
                    }, Object(u.b)("div", {
                        css: Object(c.a)((e = {
                            display: "flex",
                            flexDirection: "column"
                        }, Object(o.a)(e, n.FROM_TABLET, {
                            width: 480,
                            margin: "0 auto"
                        }), Object(o.a)(e, n.FROM_DESKTOP, {
                            width: 500,
                            margin: "0 0 0 auto",
                            justifyContent: "space-between",
                            height: "100%"
                        }), e), "")
                    }, Object(u.b)(i.ArrowSeparator, {
                        css: Object(c.a)(Object(o.a)({
                            display: "none"
                        }, n.ONLY_TABLET, {
                            display: "block",
                            margin: "10px 0 40px 0"
                        }), "")
                    }), Object(u.b)(J, null), Object(u.b)(i.CustomScroll, {
                        isInvisible: r,
                        variant: "LIGHT",
                        css: Object(c.a)((t = {}, Object(o.a)(t, n.FROM_DESKTOP, {
                            height: 500
                        }), Object(o.a)(t, n.SIDEBAR_NAVIGATION_INTERSECTION, {
                            margin: "0 30px 0 0"
                        }), t), "")
                    }, Object(u.b)("div", {
                        css: Object(c.a)(Object(o.a)({}, n.FROM_DESKTOP, {
                            width: 400,
                            marginRight: "auto"
                        }), "")
                    }, Object(u.b)(oe, null), Object(u.b)(X, null), Object(u.b)(ae, null), Object(u.b)(te, null), Object(u.b)(Te, null), Object(u.b)(V, null)))))
                }))),
                ve = (a.a.createElement, a.a.memo((function(e) {
                    return Object(u.b)(v, e, Object(u.b)(l, null, Object(u.b)(S, null), Object(u.b)(he, null)))
                })));
            ve.displayName = "ProductDetails"
        },
        VfYs: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "a", (function() {
                return p
            }));
            var r = n("VtSi"),
                a = n.n(r),
                o = n("pu3o"),
                c = n.n(o),
                i = n("com9"),
                s = function() {
                    var e;
                    return a.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, a.a.awrap(i.a.get("/hapi/pwa/v1/offerSelector/getToken"));
                            case 2:
                                return e = t.sent, t.abrupt("return", e.data);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                u = function(e) {
                    var t, n;
                    return a.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, a.a.awrap(s());
                            case 2:
                                return t = r.sent, r.next = 5, a.a.awrap(i.a.post("/hapi/pwa/v1/product/getProducts", e, {
                                    headers: {
                                        CSRFToken: t
                                    }
                                }));
                            case 5:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                l = function(e) {
                    var t;
                    return a.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, a.a.awrap(i.a.get("/hapi/pwa/v1/product/getProducts?pk=".concat(e)));
                            case 2:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                p = function(e) {
                    var t, n, r, o, u, l, p, b, O, d, f, m, y;
                    return a.a.async((function(j) {
                        for (;;) switch (j.prev = j.next) {
                            case 0:
                                return t = e.ratePlanId, n = e.id, r = e.processType, o = e.offerType, u = e.deviceVariant, l = e.market, p = e.availableProductsKey, b = e.bonusesToAdd, O = e.defaultBonusesToIgnore, j.next = 3, a.a.awrap(s());
                            case 3:
                                if (d = j.sent, f = function(e) {
                                        return 400 === e.code || !1 === e.success || !e.success
                                    }, "SALE_OF_GOODS" !== r) {
                                    j.next = 13;
                                    break
                                }
                                return j.next = 8, a.a.awrap(i.a.post("/hapi/sklep/dodaj", c.a.stringify({
                                    productCodePost: u,
                                    bundleTemplateId: n,
                                    bundleNo: 0
                                }), {
                                    headers: {
                                        CSRFToken: d
                                    }
                                }));
                            case 8:
                                if (m = j.sent, !f(m.data) || 400 !== m.data.code) {
                                    j.next = 11;
                                    break
                                }
                                throw new Error(m.data.message);
                            case 11:
                                j.next = 18;
                                break;
                            case 13:
                                return j.next = 15, a.a.awrap(i.a.post("/hapi/koszyk/oovdodaj", c.a.stringify({
                                    rateplanId: t,
                                    propositionId: n,
                                    process: r,
                                    offerType: o,
                                    market: l,
                                    deviceVariant: u,
                                    availableProductsKey: p,
                                    bonusesToAdd: b,
                                    defaultBonusesToIgnore: O
                                }, {
                                    arrayFormat: "brackets"
                                }), {
                                    headers: {
                                        CSRFToken: d
                                    }
                                }));
                            case 15:
                                if (y = j.sent, !f(y.data)) {
                                    j.next = 18;
                                    break
                                }
                                throw new Error(y.data.message);
                            case 18:
                            case "end":
                                return j.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        kN39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return "B2C" !== e
            }
        }
    }
]);
//# sourceMappingURL=72926a497baa2233c34de28c96109f7f16a5aaa9.536c5e17102dd1454330.js.map