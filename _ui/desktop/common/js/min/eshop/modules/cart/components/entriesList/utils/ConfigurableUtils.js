define(["exports", "lodash"], function(e, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isRemovable = e.isMandatory = void 0, u = babelHelpers.interopRequireDefault(u);
    e.isMandatory = function(r, e, n) {
        Array.isArray(e) || (e = [e]);
        var t = s(e, r);
        return 0 < t.length && (t.some(function(e) {
            return o(r, e, n)
        }) || t.some(function(e) {
            return i(r, e, n)
        }))
    };
    var o = function(r, e, n) {
            return e.mandatoryProducts.includes(r) || e.relations.filter(function(e) {
                return "REQUIRE" === e.type
            }).some(function(e) {
                return e.targetVases.some(function(e) {
                    return e === r
                }) && e.sourceVases.some(function(e) {
                    return n.includes(e)
                })
            })
        },
        i = function(r, e, n) {
            var t = e.relations.filter(function(e) {
                return "SHOW" === e.type
            }).filter(function(e) {
                return "ANY" === e.ruleType || "ALL" === e.ruleType
            }).filter(function(e) {
                return e.targetVases.some(function(e) {
                    return n.includes(e)
                })
            });
            return t.some(function(e) {
                return "MR" === e.source
            }) ? t.filter(function(e) {
                return "MR" === e.source
            }).some(function(e) {
                return e.sourceVases.some(function(e) {
                    return e === r
                })
            }) : t.some(function(e) {
                return e.sourceVases.some(function(e) {
                    return e === r
                })
            })
        },
        s = function(e, r) {
            return e.filter(function(e) {
                return !!e
            }).filter(function(e) {
                return [].concat(babelHelpers.toConsumableArray(e.services || []), babelHelpers.toConsumableArray(e.devices || []), babelHelpers.toConsumableArray(e.gadgets || [])).map(function(e) {
                    return e.id
                }).some(function(e) {
                    return e === r
                })
            })
        };
    e.isRemovable = function(e, r, n) {
        if (!e) return !1;
        if (u.default.includes(r, n)) return !1;
        if (Array.isArray(e)) {
            if (0 === e.length) return !1
        } else e = [e];
        var t = s(e, n);
        return 0 === t.length || !t.some(function(e) {
            return e.groups.some(function(e) {
                return c(e, r, n)
            })
        })
    };
    var c = function(r, e, n) {
        return u.default.includes(r.targetProducts, n) && e.some(function(e) {
            return r.conditionalProducts.includes(e)
        })
    }
});
//# sourceMappingURL=ConfigurableUtils.js.map