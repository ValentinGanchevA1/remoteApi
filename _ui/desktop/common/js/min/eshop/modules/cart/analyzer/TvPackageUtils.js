define(["exports", "./CartInfoUtils", "../../checkout/constants/RuleTypeEnum", "../../checkout/constants/TvPackageTypeEnum", "../enum/MigrationStatus"], function(e, F, I, D, L) {
    "use strict";

    function t(e, t, u) {
        var r, a, n, s, l, o, i, d, f, p, c, C, T, N, E, y, _ = [],
            V = (r = t, (0, F.Filters)()[D.default.MAIN_OPTV](r).map(function(e) {
                return e.id || e.productCode
            })),
            A = (a = t, (0, F.Filters)()[D.default.ALL_OPTV](a)),
            O = A.map(g),
            m = (n = t, (0, F.Filters)()[D.default.ALL_NC](n)),
            h = m.map(g);
        return _.push((s = e, {
            ruleType: I.default.ANY,
            sourceVases: (0, F.Filters)()[D.default.MAIN_OPTV](s).concat((0, F.Filters)()[D.default.BASIC_TV](s)).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: (0, F.Filters)()[D.default.OPTIONAL_OPTV](s).map(function(e) {
                return e.id || e.productCode
            }),
            type: I.default.EXCLUDE_ONCE
        })), _.push((l = e, {
            ruleType: I.default.ANY,
            sourceVases: (0, F.Filters)()[L.default.NOT_MIGRATED]((0, F.Filters)()[D.default.MAIN_NC](l)).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: (0, F.Filters)()[D.default.OPTIONAL_NC](l).map(function(e) {
                return e.id || e.productCode
            }),
            type: I.default.EXCLUDE_ONCE
        })), _.push((o = e, i = m, {
            ruleType: I.default.ANY,
            sourceVases: (0, F.Filters)()[L.default.NOT_MIGRATED]((0, F.Filters)()[D.default.MAIN_NC](o)).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: i.map(g),
            type: I.default.EXCLUDE_ONCE
        })), _.push((d = e, f = A, {
            ruleType: I.default.ANY,
            sourceVases: (0, F.Filters)()[D.default.NOT_BASIC_TV]((0, F.Filters)()[D.default.ALL_OPTV]((0, F.Filters)()[L.default.NOT_MIGRATED](d))).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: function(e, t) {
                return t.filter(function(r) {
                    return !e.some(function(e) {
                        return u = r, (t = e).id === u.id || t.hasElasticPromo && t.base === u.base;
                        var t, u
                    })
                }).map(g)
            }(d, f),
            type: I.default.EXCLUDE_ONCE
        })), _.push.apply(_, babelHelpers.toConsumableArray((p = e, c = t, (0, F.Filters)()[L.default.NOT_MIGRATED](p).map(function(t) {
            var u = t.base,
                e = c.filter(function(e) {
                    return u === e.base
                }).map(function(e) {
                    return e.id
                }).filter(function(e) {
                    return e !== t.id
                });
            return 0 < e.length ? {
                ruleType: I.default.ANY,
                sourceVases: [t.id],
                targetVases: e,
                type: I.default.EXCLUDE
            } : null
        }).filter(function(e) {
            return !!e
        })))), A && 0 < A.length ? V && 0 < V.length ? _.push(M(e, O)) : _.push((T = e, N = (N = O.slice()).concat((0, F.Filters)()[D.default.BASIC_TV](T).map(function(e) {
            return e.id || e.productCode
        })), M(T, N))) : _.push(M(C = e, (0, F.Filters)()[D.default.BASIC_TV](C).map(function(e) {
            return e.id || e.productCode
        }))), m && 0 < m.length && _.push((E = e, y = h, {
            ruleType: I.default.NONE,
            sourceVases: (0, F.Filters)()[D.default.MAIN_NC](E).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: y,
            type: I.default.REQUIRE_SOME
        })), u && u.secondaryChoice && (_.push(R(e, u.secondaryChoice)), _.push(b(e, u.secondaryChoice))), u && u.loyaltyDuration && (_.push(R(e, u.loyaltyDuration)), _.push(b(e, u.loyaltyDuration))), _
    }

    function g(e) {
        return e.id || e.productCode
    }

    function R(e, t) {
        return {
            ruleType: I.default.NONE,
            sourceVases: [],
            targetVases: (0, F.Filters)()[t](e).map(function(e) {
                return e.id || e.productCode
            }),
            type: I.default.EXCLUDE
        }
    }

    function b(e, t) {
        return {
            ruleType: I.default.ANY,
            sourceVases: [],
            targetVases: (0, F.Filters)()[t](e).map(function(e) {
                return e.id || e.productCode
            }),
            type: I.default.SHOW
        }
    }

    function M(e, t) {
        return {
            ruleType: I.default.NONE,
            sourceVases: (0, F.Filters)()[D.default.NOT_BASIC_TV]((0, F.Filters)()[D.default.ALL_OPTV]((0, F.Filters)()[L.default.NOT_MIGRATED](e))).map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: t,
            type: I.default.REQUIRE_SOME
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createCustomRule = function(e) {
        return t(e, [])
    }, e.createCustomRules = t, I = babelHelpers.interopRequireDefault(I), D = babelHelpers.interopRequireDefault(D), L = babelHelpers.interopRequireDefault(L)
});
//# sourceMappingURL=TvPackageUtils.js.map