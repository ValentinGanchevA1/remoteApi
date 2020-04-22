define(["exports", "./ArrayUtils"], function(r, l) {
    "use strict";

    function d(r, t) {
        (null == t || t > r.length) && (t = r.length);
        for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
        return n
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.createBaseCombination = function(r, t) {
        var e = (0, l.sumArraysWithoutDupes)(r, t.products),
            n = s(e);
        return n.autoadded = t.autoadded, n
    }, r.createSmallerCombinations = function(r, t) {
        var e, n = (0, l.sumArraysWithoutDupes)(r, t.products),
            o = (0, l.removeAllFromArray)(n, t.products),
            u = [],
            a = function(r) {
                if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
                    if (Array.isArray(r) || (r = function(r, t) {
                            if (!r) return;
                            if ("string" == typeof r) return d(r, t);
                            var e = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === e && r.constructor && (e = r.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(e);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return d(r, t)
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
                    a = !1;
                return {
                    s: function() {
                        n = r[Symbol.iterator]()
                    },
                    n: function() {
                        var r = n.next();
                        return u = r.done, r
                    },
                    e: function(r) {
                        a = !0, o = r
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }(o);
        try {
            for (a.s(); !(e = a.n()).done;) {
                var i = e.value,
                    c = s(n, null, i);
                c.autoadded = (0, l.removeAllFromArray)(t.autoadded, [i]), u.push(c)
            }
        } catch (r) {
            a.e(r)
        } finally {
            a.f()
        }
        return u
    };
    var s = function(r, t, e) {
        var n = {};
        return n.products = r.slice(), n.autoadded = [], t ? (n.name = "add_" + t, n.products.push(t)) : e ? (n.name = "drop_" + e, n.products = n.products.filter(function(r) {
            return r !== e
        })) : n.name = "selection", n
    }
});
//# sourceMappingURL=CombinationUtils.js.map