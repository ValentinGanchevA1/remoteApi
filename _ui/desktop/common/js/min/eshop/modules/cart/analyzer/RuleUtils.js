define(["exports", "./ArrayUtils", "../../checkout/constants/RuleTypeEnum"], function(r, p, i) {
    "use strict";

    function v(r) {
        if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
            if (Array.isArray(r) || (r = function(r, t) {
                    if (!r) return;
                    if ("string" == typeof r) return a(r, t);
                    var e = Object.prototype.toString.call(r).slice(8, -1);
                    "Object" === e && r.constructor && (e = r.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return a(r, t)
                }(r))) {
                var t = 0,
                    e = function() {};
                return {
                    s: e,
                    n: function() {
                        return t >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[t++]
                        }
                    },
                    e: function(r) {
                        throw r
                    },
                    f: e
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, o, u = !0,
            i = !1;
        return {
            s: function() {
                n = r[Symbol.iterator]()
            },
            n: function() {
                var r = n.next();
                return u = r.done, r
            },
            e: function(r) {
                i = !0, o = r
            },
            f: function() {
                try {
                    u || null == n.return || n.return()
                } finally {
                    if (i) throw o
                }
            }
        }
    }

    function a(r, t) {
        (null == t || t > r.length) && (t = r.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
        return n
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.dilateProductList = function(o, r) {
        var u;
        for (; u = !1, r.forEach(function(r) {
                var t, e, n;
                c(o.products, r) && (r.type === i.default.REQUIRE_SOME ? (t = o, e = r, n = (0, p.removeAllFromArray)(e.targetVases, t.products), t.products = t.products.concat(n)) : s(o, r), u = !0)
            }), u;);
        return o
    }, r.erodeProductList = function(t, r) {
        return r.forEach(function(r) {
            n(t.products, r) && u(t, r)
        }), t
    }, r.findProductsToHide = r.validate = void 0, i = babelHelpers.interopRequireDefault(i);

    function e(t, e) {
        return "ALL" === e.ruleType ? e.sourceVases.every(function(r) {
            return t.includes(r)
        }) : "NONE" === e.ruleType ? !t.some(function(r) {
            return e.sourceVases.includes(r)
        }) : e.sourceVases.some(function(r) {
            return "ANY" === r
        }) || t.some(function(r) {
            return e.sourceVases.includes(r)
        })
    }

    function y(r, t) {
        var e = r.filter(function(r) {
            return t.conditionalProducts.includes(r)
        });
        return [0 < e.length, e]
    }
    var c = function(t, r) {
            return e(t, r) && !r.targetVases.every(function(r) {
                return t.includes(r)
            })
        },
        n = function(t, r) {
            return e(t, r) && r.targetVases.some(function(r) {
                return t.includes(r)
            })
        };

    function s(r, t) {
        var e = (0, p.removeAllFromArray)(t.targetVases, r.products);
        r.autoadded = r.autoadded.concat(e), r.products = r.products.concat(e)
    }

    function o(r, t) {
        return e(r, t)
    }
    var u = function(r, t) {
        r.products = (0, p.removeAllFromArray)(r.products, t.targetVases)
    };
    r.validate = function(r, t) {
        var e, n, o, u, i, a = {
                valid: !0
            },
            c = v(t);
        try {
            for (c.s(); !(e = c.n()).done;) {
                var s = e.value,
                    l = y(r.products, s),
                    f = babelHelpers.slicedToArray(l, 2),
                    d = f[0],
                    m = f[1];
                if (d && (n = r.products, o = s, u = m, i = (i = void 0, p.commonPartOfArrays)(n, o.targetProducts), !(a = o.max && i.length > o.max ? {
                        valid: !1,
                        reason: "There are too many products in this group",
                        actualProducts: i.slice(),
                        expected: o.targetProducts,
                        triggers: u,
                        number: o.max
                    } : o.min && i.length < o.min ? {
                        valid: !1,
                        reason: "There are too few products from this group",
                        actualProducts: i.slice(),
                        expected: o.targetProducts,
                        triggers: u,
                        number: o.min
                    } : {
                        valid: !0
                    }).valid)) break
            }
        } catch (r) {
            c.e(r)
        } finally {
            c.f()
        }
        return r.validationResult = a, r
    };
    r.findProductsToHide = function(t, r, n) {
        return r.filter(function(e) {
            var r = n.filter(function(r) {
                return t = e, r.targetVases.some(function(r) {
                    return r === t
                });
                var t
            });
            return r.some(function(r) {
                return "MR" === r.source
            }) ? l(r.filter(function(r) {
                return "MR" === r.source
            }), t) : l(r, t)
        })
    };
    var l = function(r, t) {
        var e = r.filter(function(r) {
                return "NONE" === r.ruleType
            }),
            n = r.filter(function(r) {
                return "NONE" !== r.ruleType
            });
        return 0 < e.length && e.some(function(r) {
            return !o(t, r)
        }) || 0 < n.length && !n.some(function(r) {
            return o(t, r)
        })
    }
});
//# sourceMappingURL=RuleUtils.js.map