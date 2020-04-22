! function(t) {
    function e(t, e, n, i) {
        for (var r, a = n.slice(), l = o(e, t), u = 0, c = a.length; c > u && (handler = a[u], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(l) : handler.call(t, l), !l.stoppedImmediatePropagation); u++);
        return r = !l.stoppedPropagation, i && r && t.parentNode ? t.parentNode.dispatchEvent(l) : !l.defaultPrevented
    }

    function n(t, e) {
        return {
            configurable: !0,
            get: t,
            set: e
        }
    }

    function i(t, e, i) {
        var o = g(e || t, i);
        m(t, "textContent", n(function() {
            return o.get.call(this)
        }, function(t) {
            o.set.call(this, t)
        }))
    }

    function o(t, e) {
        return t.currentTarget = e, t.eventPhase = t.target === t.currentTarget ? 2 : 3, t
    }

    function r(t, e) {
        for (var n = t.length; n-- && t[n] !== e;);
        return n
    }

    function a() {
        if ("BR" === this.tagName) return "\n";
        for (var t = this.firstChild, e = []; t;) 8 !== t.nodeType && 7 !== t.nodeType && e.push(t.textContent), t = t.nextSibling;
        return e.join("")
    }

    function l(t) {
        var e = document.createEvent("Event");
        e.initEvent("input", !0, !0), (t.srcElement || t.fromElement || document).dispatchEvent(e)
    }

    function u(t) {
        !p && T.test(document.readyState) && (p = !p, document.detachEvent(v, u), t = document.createEvent("Event"), t.initEvent(h, !0, !0), document.dispatchEvent(t))
    }

    function c(t) {
        for (var e; e = this.lastChild;) this.removeChild(e);
        null != t && this.appendChild(document.createTextNode(t))
    }

    function s(e, n) {
        return n || (n = t.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
    }
    if (!document.createEvent) {
        var d = !0,
            p = !1,
            v = "onreadystatechange",
            h = "DOMContentLoaded",
            f = "__IE8__" + Math.random(),
            m = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            },
            E = Object.defineProperties || function(e, n) {
                for (var i in n)
                    if (y.call(n, i)) try {
                        m(e, i, n[i])
                    } catch (o) {
                        t.console
                    }
            },
            g = Object.getOwnPropertyDescriptor,
            y = Object.prototype.hasOwnProperty,
            b = t.Element.prototype,
            S = t.Text.prototype,
            L = /^[a-z]+$/,
            T = /loaded|complete/,
            C = {},
            P = document.createElement("div"),
            w = document.documentElement,
            x = w.removeAttribute,
            j = w.setAttribute;
        i(t.HTMLCommentElement.prototype, b, "nodeValue"), i(t.HTMLScriptElement.prototype, null, "text"), i(S, null, "nodeValue"), i(t.HTMLTitleElement.prototype, null, "text"), m(t.HTMLStyleElement.prototype, "textContent", function(t) {
                return n(function() {
                    return t.get.call(this.styleSheet)
                }, function(e) {
                    t.set.call(this.styleSheet, e)
                })
            }(g(t.CSSStyleSheet.prototype, "cssText"))), E(b, {
                textContent: {
                    get: a,
                    set: c
                },
                firstElementChild: {
                    get: function() {
                        for (var t = this.childNodes || [], e = 0, n = t.length; n > e; e++)
                            if (1 == t[e].nodeType) return t[e]
                    }
                },
                lastElementChild: {
                    get: function() {
                        for (var t = this.childNodes || [], e = t.length; e--;)
                            if (1 == t[e].nodeType) return t[e]
                    }
                },
                oninput: {
                    get: function() {
                        return this._oninput || null
                    },
                    set: function(t) {
                        this._oninput && (this.removeEventListener("input", this._oninput), this._oninput = t, t && this.addEventListener("input", t))
                    }
                },
                previousElementSibling: {
                    get: function() {
                        for (var t = this.previousSibling; t && 1 != t.nodeType;) t = t.previousSibling;
                        return t
                    }
                },
                nextElementSibling: {
                    get: function() {
                        for (var t = this.nextSibling; t && 1 != t.nodeType;) t = t.nextSibling;
                        return t
                    }
                },
                childElementCount: {
                    get: function() {
                        for (var t = 0, e = this.childNodes || [], n = e.length; n--; t += 1 == e[n].nodeType);
                        return t
                    }
                },
                addEventListener: {
                    value: function(t, n, i) {
                        var o, a, u = this,
                            c = "on" + t,
                            d = u[f] || m(u, f, {
                                value: {}
                            })[f],
                            p = d[c] || (d[c] = {}),
                            v = p.h || (p.h = []);
                        if (!y.call(p, "w")) {
                            if (p.w = function(t) {
                                    return t[f] || e(u, s(u, t), v, !1)
                                }, !y.call(C, c))
                                if (L.test(t)) {
                                    try {
                                        o = document.createEventObject(), o[f] = !0, 9 != u.nodeType && (null == u.parentNode && P.appendChild(u), (a = u.getAttribute(c)) && x.call(u, c)), u.fireEvent(c, o), C[c] = !0
                                    } catch (o) {
                                        for (C[c] = !1; P.hasChildNodes();) P.removeChild(P.firstChild)
                                    }
                                    null != a && j.call(u, c, a)
                                } else C[c] = !1;
                            (p.n = C[c]) && u.attachEvent(c, p.w)
                        }
                        r(v, n) < 0 && v[i ? "unshift" : "push"](n), "input" === t && u.attachEvent("onkeyup", l)
                    }
                },
                dispatchEvent: {
                    value: function(t) {
                        var n, i = this,
                            o = "on" + t.type,
                            r = i[f],
                            a = r && r[o],
                            l = !!a;
                        return t.target || (t.target = i), l ? a.n ? i.fireEvent(o, t) : e(i, t, a.h, !0) : (n = i.parentNode) ? n.dispatchEvent(t) : !0, !t.defaultPrevented
                    }
                },
                removeEventListener: {
                    value: function(t, e, n) {
                        var i = this,
                            o = "on" + t,
                            a = i[f],
                            l = a && a[o],
                            u = l && l.h,
                            c = u ? r(u, e) : -1;
                        c > -1 && u.splice(c, 1)
                    }
                }
            }), E(S, {
                addEventListener: {
                    value: b.addEventListener
                },
                dispatchEvent: {
                    value: b.dispatchEvent
                },
                removeEventListener: {
                    value: b.removeEventListener
                }
            }), E(t.XMLHttpRequest.prototype, {
                addEventListener: {
                    value: function(t, e, n) {
                        var i = this,
                            o = "on" + t,
                            a = i[f] || m(i, f, {
                                value: {}
                            })[f],
                            l = a[o] || (a[o] = {}),
                            u = l.h || (l.h = []);
                        r(u, e) < 0 && (i[o] || (i[o] = function() {
                            var e = document.createEvent("Event");
                            e.initEvent(t, !0, !0), i.dispatchEvent(e)
                        }), u[n ? "unshift" : "push"](e))
                    }
                },
                dispatchEvent: {
                    value: function(t) {
                        var n = this,
                            i = "on" + t.type,
                            o = n[f],
                            r = o && o[i],
                            a = !!r;
                        return a && (r.n ? n.fireEvent(i, t) : e(n, t, r.h, !0))
                    }
                },
                removeEventListener: {
                    value: b.removeEventListener
                }
            }), E(t.Event.prototype, {
                bubbles: {
                    value: !0,
                    writable: !0
                },
                cancelable: {
                    value: !0,
                    writable: !0
                },
                preventDefault: {
                    value: function() {
                        this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                    }
                },
                stopPropagation: {
                    value: function() {
                        this.stoppedPropagation = !0, this.cancelBubble = !0
                    }
                },
                stopImmediatePropagation: {
                    value: function() {
                        this.stoppedImmediatePropagation = !0, this.stopPropagation()
                    }
                },
                initEvent: {
                    value: function(t, e, n) {
                        this.type = t, this.bubbles = !!e, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                    }
                }
            }), E(t.HTMLDocument.prototype, {
                defaultView: {
                    get: function() {
                        return this.parentWindow
                    }
                },
                textContent: {
                    get: function() {
                        return 11 === this.nodeType ? a.call(this) : null
                    },
                    set: function(t) {
                        11 === this.nodeType && c.call(this, t)
                    }
                },
                addEventListener: {
                    value: function(e, n, i) {
                        var o = this;
                        b.addEventListener.call(o, e, n, i), d && e === h && !T.test(o.readyState) && (d = !1, o.attachEvent(v, u), t == top && ! function r(t) {
                            try {
                                o.documentElement.doScroll("left"), u()
                            } catch (e) {
                                setTimeout(r, 50)
                            }
                        }())
                    }
                },
                dispatchEvent: {
                    value: b.dispatchEvent
                },
                removeEventListener: {
                    value: b.removeEventListener
                },
                createEvent: {
                    value: function(t) {
                        var e;
                        if ("Event" !== t) throw new Error("unsupported " + t);
                        return e = document.createEventObject(), e.timeStamp = (new Date).getTime(), e
                    }
                }
            }), E(t.Window.prototype, {
                getComputedStyle: {
                    value: function() {
                        function t(t) {
                            this._ = t
                        }

                        function e() {}
                        var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
                            i = /^(top|right|bottom|left)$/,
                            o = /\-([a-z])/g,
                            r = function(t, e) {
                                return e.toUpperCase()
                            };
                        return t.prototype.getPropertyValue = function(t) {
                                var e, a, l, u = this._,
                                    c = u.style,
                                    s = u.currentStyle,
                                    d = u.runtimeStyle;
                                return t = ("float" === t ? "style-float" : t).replace(o, r), e = s ? s[t] : c[t], n.test(e) && !i.test(t) && (a = c.left, l = d && d.left, l && (d.left = s.left), c.left = "fontSize" === t ? "1em" : e, e = c.pixelLeft + "px", c.left = a, l && (d.left = l)), null == e ? e : e + "" || "auto"
                            }, e.prototype.getPropertyValue = function() {
                                return null
                            },
                            function(n, i) {
                                return i ? new e(n) : new t(n)
                            }
                    }()
                },
                addEventListener: {
                    value: function(n, i, o) {
                        var a, l = t,
                            u = "on" + n;
                        l[u] || (l[u] = function(t) {
                            return e(l, s(l, t), a, !1)
                        }), a = l[u][f] || (l[u][f] = []), r(a, i) < 0 && a[o ? "unshift" : "push"](i)
                    }
                },
                dispatchEvent: {
                    value: function(e) {
                        var n = t["on" + e.type];
                        return n ? n.call(t, e) !== !1 && !e.defaultPrevented : !0
                    }
                },
                removeEventListener: {
                    value: function(e, n, i) {
                        var o = "on" + e,
                            a = (t[o] || Object)[f],
                            l = a ? r(a, n) : -1;
                        l > -1 && a.splice(l, 1)
                    }
                }
            }),
            function(t, e, n) {
                for (n = 0; n < e.length; n++) document.createElement(e[n]);
                t.length || document.createStyleSheet(""), t[0].addRule(e.join(","), "display:block;")
            }(document.styleSheets, ["header", "nav", "section", "article", "aside", "footer"])
    }
}(this.window || global);