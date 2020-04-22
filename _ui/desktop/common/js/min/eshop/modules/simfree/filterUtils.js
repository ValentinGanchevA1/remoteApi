define(["exports"], function(e) {
    "use strict";

    function a(e, t, n) {
        var r = e[n];
        r && "" != r ? -1 !== ("," + r + ",").indexOf("," + t + ",") ? (r = (r = (r = (r = "," + r + ",").replace("," + t + ",", ",")).substring(1, r.length)).substring(0, r.length - 1), e[n] = r) : e[n] = r + "," + t : e[n] = t
    }

    function t(t) {
        return new Map(Object.keys(t).map(function(e) {
            return [e, t[e]]
        }))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.manageMultiValue = a, e.createMapFromObject = t, e.default = void 0;
    var n = {
        manageFilter: function(r, e, t, n, c, i) {
            return n ? (a(r, e, t), "" === r[t] && delete r[t]) : r[t] = e, Object.keys(r).forEach(function(t, e) {
                var n = !0;
                i && i.forEach(function(e) {
                    e.code === t && (n = !1)
                }), !0 === n && delete r[t]
            }), r
        },
        manageNumberFilter: function(e, t, n, r) {
            return e[r.code + "_" + t] = n, e
        },
        manageMatchToData: function(n, e, t, r) {
            if (r = r || new Map, e) {
                var c = "",
                    i = !0;
                t && t.category && (t.category.forEach(function(t) {
                    t.children.forEach(function(e) {
                        e.id === n && (c = t.id, delete r[t.id])
                    })
                }), t.category.forEach(function(e) {
                    c === e.id && e.children.forEach(function(e) {
                        e.id && "" != e.id && !0 == !$("[data-id=" + e.id + "] :input").prop("checked") && (i = !1)
                    })
                }), i && t.category.forEach(function(e) {
                    c === e.id && e.children.forEach(function(e) {
                        delete r[e.id]
                    })
                })), i && "" != c ? (r[c] = 1, $("[data-id=" + c + "] :input").prop("checked", !0)) : r[n] = 1
            } else {
                var o = !1,
                    a = "";
                t && t.category && t.category.forEach(function(t) {
                    t.children.forEach(function(e) {
                        e.id === n && (a = t.id, delete r[t.id]), e.id && "" != e.id && !0 === $("[data-id=" + e.id + "] :input").prop("checked") && (r[e.id] = 1, o = !0)
                    })
                }), o || "" == a || (r[a] = "1"), delete r[n]
            }
            return r
        },
        deleteFilterByCode: function(e, t) {
            return delete t[e], t
        },
        deleteNumberFilterByCode: function(e, t) {
            return t[e] = "", t
        },
        deleteMatchToFilterByCode: function(e, t) {
            return delete t[e], $("[data-id=" + e + "] :input").prop("checked", !1), t
        },
        getMapFilters: function(e) {
            return e ? t(e) : new Map
        },
        getFilterNameDescription: function(t, e) {
            var n = "";
            return e.forEach(function(e) {
                e.code === t && (n = e.name)
            }), n
        },
        getMatchToDescription: function(t, e) {
            var n = "";
            return e.category.forEach(function(e) {
                e.id === t && (n = e.title), e.children.forEach(function(e) {
                    e.id === t && (n = e.title)
                })
            }), n
        },
        getNumberFilterNameDescription: function(t, e) {
            var n = "";
            n = 0 < t.indexOf("_to") ? " do" : " od", t = (t = t.replace("_to", "")).replace("_from", "");
            var r = "";
            return e.forEach(function(e) {
                e.code === t && (r = e.name + n)
            }), r
        },
        manageStickerFilter: function(n, e, t, r, c, i) {
            var o = t.code;
            return r ? (a(n, e, o), "" == n[o] && delete n[o]) : n[o] = e, Object.keys(i).forEach(function(t, e) {
                i.forEach(function(e) {
                    e.code == t && 0
                }), 1 == n && delete n[t]
            }), n
        },
        getStickerFilters: function(e, t) {
            var n = {};
            return t.split(",").forEach(function(t) {
                e && e.forEach(function(e) {
                    t == e.code && (n[t] = e.name)
                }), n[t] || (n[t] = "")
            }), n
        },
        clearActualNumberFilterAfterCategoryChange: function(n, r) {
            return r && Object.keys(r).forEach(function(t) {
                var e = n.filter(function(e) {
                    return t.startsWith(e.code)
                });
                e && 0 === e.length && delete r[t]
            }), r
        },
        clearActualFilterAfterCategoryChange: function(r, c) {
            return c && Object.keys(c).forEach(function(t, e) {
                var n = r.filter(function(e) {
                    return t === e.code
                });
                n && 0 === n.length && delete c[t]
            }), c
        }
    };
    e.default = n
});
//# sourceMappingURL=filterUtils.js.map