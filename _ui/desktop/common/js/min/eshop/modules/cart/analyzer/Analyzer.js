define(["exports", "./RuleUtils", "./CombinationUtils", "./ArrayUtils", "./CartInfoUtils", "../../checkout/constants/RuleTypeEnum", "eshop/modules/checkout/constants/AddonTypeEnum", "lodash"], function(e, v, y, p, V, b, h, R) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mobileAnalyzeCombination = e.analyzeCombination = void 0, b = babelHelpers.interopRequireDefault(b), h = babelHelpers.interopRequireDefault(h), R = babelHelpers.interopRequireDefault(R);
    e.analyzeCombination = function(e, t, n, r, u) {
        var o = e.relations.filter(function(e) {
                return e.type === b.default.REQUIRE
            }),
            i = e.relations.filter(function(e) {
                return e.type === b.default.REQUIRE_SOME
            }),
            s = e.relations.filter(function(e) {
                return e.type === b.default.EXCLUDE
            });
        s = s.filter(function(e) {
            return R.default.includes(e.sourceVases, r)
        }).concat(s.filter(function(e) {
            return !R.default.includes(e.sourceVases, r)
        }));
        var a = e.relations.filter(function(e) {
                return e.type === b.default.EXCLUDE_ONCE
            }).filter(function(e) {
                return e.sourceVases.includes(r)
            }),
            c = e.groups.slice(),
            l = e.mandatoryProducts.slice(),
            f = (e.mandatoryProducts.slice(), (0, v.dilateProductList)({
                products: t,
                autoadded: n
            }, o));
        u && -1 !== t.indexOf(u) && t.splice(t.indexOf(u), 1), r && t.push(r), t = t.filter(function(e) {
            return !n.includes(e)
        });
        var d = (0, v.dilateProductList)({
                products: l,
                autoadded: []
            }, o),
            p = [];
        p.push((0, y.createBaseCombination)(t, d));
        var h = (p = (p = (p = (p = (p = (p = p.concat((0, y.createSmallerCombinations)(t, d))).map(function(e) {
            return (0, v.erodeProductList)(e, a)
        })).map(function(e) {
            return (0, v.dilateProductList)(e, o.concat(i))
        })).map(function(e) {
            return (0, v.erodeProductList)(e, s)
        })).map(function(e) {
            return (0, v.validate)(e, c)
        })).map(function(e) {
            return e.lastActionIncluded = !!(r && e.products.includes(r) || u && !e.products.includes(u)), e
        })).filter(function(e) {
            return e.validationResult.valid
        });
        h.sort((0, V.compareCombinations)(f));
        var E = h[0];
        if (!E) return [null, null, (E = p.find(function(e) {
            return "selection" === e.name
        })).validationResult, null];
        var m = {};
        return m.hiddenProducts = C(e, E), [E.products, E.autoadded, E.validationResult, m]
    };
    var C = function(e, t) {
        var n = e.relations.filter(function(e) {
                return e.type === b.default.SHOW
            }),
            r = (0, p.removeAllFromArray)(e.bundleProducts.slice(), t.products);
        return (0, v.findProductsToHide)(t.products, r, n)
    };
    e.mobileAnalyzeCombination = function(e, r, t, n) {
        var u = e.relations.filter(function(e) {
                return e.type === b.default.REQUIRE
            }).filter(function(e) {
                return "bonusVasRelation" === e.source
            }),
            o = e.services.filter(function(e) {
                return e.productType === h.default.SECONDARY_CHOICE_DISCOUNT
            }).map(function(e) {
                return e.id
            }),
            i = e.relations.filter(function(e) {
                return e.type === b.default.REQUIRE
            }).filter(function(e) {
                return "bonusVasRelation" !== e.source
            }).filter(function(e) {
                return e.sourceVases.some(function(e) {
                    return o.includes(e)
                })
            }),
            s = [],
            a = [],
            c = [];
        if (n && (s.push(n), u.filter(function(e) {
                return e.targetVases.includes(n)
            }).forEach(function(e) {
                return e.sourceVases.forEach(function(e) {
                    return s.push(e)
                })
            }), c = i.filter(function(e) {
                return e.targetVases.includes(n)
            })), t)
            if (o.includes(t)) {
                var l = [];
                i.filter(function(e) {
                    return e.sourceVases.includes(t)
                }).forEach(function(e) {
                    return e.targetVases.forEach(function(e) {
                        return l.push(e)
                    })
                });
                var f = l.filter(function(e) {
                    return r.includes(e)
                });
                (0 == l.length || 0 < l.length && 0 < f.length) && (a.push(t), u.filter(function(e) {
                    return e.targetVases.includes(t)
                }).forEach(function(e) {
                    return e.sourceVases.forEach(function(e) {
                        return a.push(e)
                    })
                }))
            } else {
                a.push(t), u.filter(function(e) {
                    return e.targetVases.includes(t)
                }).forEach(function(e) {
                    return e.sourceVases.forEach(function(e) {
                        return a.push(e)
                    })
                });
                var d = [];
                e.relations.filter(function(e) {
                    return e.type === b.default.EXCLUDE
                }).filter(function(e) {
                    return e.sourceVases.includes(t)
                }).forEach(function(e) {
                    return e.targetVases.forEach(function(e) {
                        return d.push(e)
                    })
                }), d.forEach(function(t) {
                    s.push(t), u.filter(function(e) {
                        return e.targetVases.includes(t)
                    }).forEach(function(e) {
                        return e.sourceVases.forEach(function(e) {
                            return s.push(e)
                        })
                    })
                })
            } return r = (0, p.sumArraysWithoutDupes)(r, a), r = (0, p.removeAllFromArray)(r, s), c.forEach(function(e) {
            if (0 === e.targetVases.filter(function(t) {
                    return r.some(function(e) {
                        return e === t
                    })
                }).length) {
                var n = e.sourceVases;
                u.filter(function(e) {
                    return 0 < e.targetVases.filter(function(t) {
                        return n.some(function(e) {
                            return e === t
                        })
                    }).length
                }).forEach(function(e) {
                    return e.sourceVases.forEach(function(e) {
                        return n.push(e)
                    })
                }), r = (0, p.removeAllFromArray)(r, n)
            }
        }), r
    }
});
//# sourceMappingURL=Analyzer.js.map