define(["exports", "lodash", "../enum/EntryType", "../enum/EntryParams", "./ArrayUtils", "../../checkout/constants/AddonTypeEnum", "../../checkout/constants/ProviderTypeEnum", "../../checkout/constants/BoundedMainServiceEnum", "../../fix/enum/TvPackagesChoiceFilter"], function(e, t, r, a, u, n, d, o, l) {
    "use strict";

    function i(e, r) {
        return e ? e.map(function(e) {
            return e[r]
        }) : []
    }

    function f(e) {
        return e ? [e.code].concat(babelHelpers.toConsumableArray(i(e.devices, a.default.CODE))) : []
    }

    function c(e) {
        return [].concat(babelHelpers.toConsumableArray(i(e.vases, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i(e.terminals, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i(e.gadgets, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i((r = e.migratedProducts, t = a.default.ACTIVE, n = !0, r ? r.filter(function(e) {
            return e[t] === n
        }) : []), a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(f(e.broadbandFixProduct)), babelHelpers.toConsumableArray(f(e.tvFixProduct)), babelHelpers.toConsumableArray(f(e.voipFixProduct)));
        var r, t, n
    }

    function T(e) {
        var r = [].concat(babelHelpers.toConsumableArray(i(e.vases, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i(e.terminals, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i(e.gadgets, a.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(i(e.euroSets, a.default.PRODUCT_CODE)));
        return e.simCard && r.push(e.simCard.id), r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCartProductsFromEntry = function(e) {
        return (e.entryType === r.default.MOBILE ? T : c)(e)
    }, e.getCartProductsFromFixEntry = c, e.getCartProductsFromMobileEntry = T, e.getCartProductsFinePrintFromFixEntry = function(e) {
        return [].concat(babelHelpers.toConsumableArray(i(e.vases, a.default.FINE_PRINT)), babelHelpers.toConsumableArray(i(e.terminals, a.default.FINE_PRINT)), babelHelpers.toConsumableArray(i(e.gadgets, a.default.FINE_PRINT)))
    }, e.getPresentableProductsFromConfigurables = function(e) {
        return e ? [].concat(babelHelpers.toConsumableArray(i(e.tvPackages, a.default.ID)), babelHelpers.toConsumableArray(i(e.devices, a.default.ID)), babelHelpers.toConsumableArray(i(e.services, a.default.ID)), babelHelpers.toConsumableArray(i(e.gadgets, a.default.ID))) : []
    }, e.Filters = e.compareCombinations = e.compareByPartnerAndMandatoryAndTitle = e.compareByProductListAndPartnerAndMandatoryAndTitle = e.compareByProductCodeListAndMandatoryAndTitle = e.compareByProductListAndMandatoryAndTitle = e.compareByMandatoryAndTitle = void 0, t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), d = babelHelpers.interopRequireDefault(d), o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l);

    function s(t) {
        return function(e, r) {
            return e[t] ? e[t].localeCompare(r[t]) : r[t] ? -r[t].localeCompare(e[t]) : 0
        }
    }

    function p(n) {
        return function(t) {
            return function(e, r) {
                return e[t] && !r[t] ? n ? -1 : 1 : r[t] && !e[t] ? n ? 1 : -1 : 0
            }
        }
    }

    function A(n) {
        return function(e, r) {
            return t = "length",
                function(e, r) {
                    return e[t] - r[t]
                }(e[n], r[n]);
            var t
        }
    }

    function C(d) {
        return function(o) {
            return function(e, r) {
                var t = e[d],
                    n = r[d];
                if (!o) return 0;
                var a = o.indexOf(t);
                a < 0 && (a = Number.MAX_SAFE_INTEGER);
                var u = o.indexOf(n);
                return u < 0 && (u = Number.MAX_SAFE_INTEGER), a - u
            }
        }
    }

    function y(a) {
        return function(n) {
            return function(e, r) {
                var t = a(e, r);
                return 0 !== t ? t : n ? n(e, r) : 0
            }
        }
    }

    function b(t) {
        return function(e, r) {
            return y(t)(null)(e, r)
        }
    }
    var O = p(!0),
        m = p(!1);
    e.compareByMandatoryAndTitle = function(e, r) {
        var t = m("mandatory"),
            n = s("title");
        return y(t)(b(n))(e, r)
    };
    e.compareByProductListAndMandatoryAndTitle = function(u) {
        return function(e, r) {
            var t = C("id")(u),
                n = m("mandatory"),
                a = s("title");
            return y(t)(y(n)(b(a)))(e, r)
        }
    };
    e.compareByProductCodeListAndMandatoryAndTitle = function(u) {
        return function(e, r) {
            var t = C("productCode")(u),
                n = m("mandatory"),
                a = s("title");
            return y(t)(y(n)(b(a)))(e, r)
        }
    };
    e.compareByProductListAndPartnerAndMandatoryAndTitle = function(o) {
        return function(e, r) {
            var t = C("id")(o),
                n = C("provider")([d.default.OPTV, d.default.NC, d.default.OTHER]),
                a = m("mandatory"),
                u = s("title");
            return y(t)(y(n)(y(a)(b(u))))(e, r)
        }
    };
    e.compareByPartnerAndMandatoryAndTitle = function(e, r) {
        var t = C("provider")([d.default.OPTV, d.default.NC, d.default.OTHER]),
            n = m("mandatory"),
            a = s("title");
        return y(t)(y(n)(b(a)))(e, r)
    };

    function _(e, r) {
        var t = (0, u.removeAllFromArray)(r.products, r.autoadded),
            n = (0, u.removeAllFromArray)(e.products, e.autoadded);
        e.added = (0, u.removeAllFromArray)(n, t), e.missing = (0, u.removeAllFromArray)(t, n), e.comparatorSupport = !0
    }
    e.compareCombinations = function(o) {
        return function(e, r) {
            e.comparatorSupport || _(e, o), r.comparatorSupport || _(r, o);
            var t, n = O("lastActionIncluded"),
                a = (t = A("added"), function(e, r) {
                    return -1 * t(e, r)
                }),
                u = A("missing");
            return y(n)(y(u)(b(a)))(e, r)
        }
    };

    function P(r) {
        return function(e) {
            return t.default.filter(e, r)
        }
    }

    function E(e) {
        return e.addonType === n.default.TVOPTIONAL || e.addonType === n.default.TVMAIN
    }

    function I(e, r) {
        return e.supercategories && e.supercategories.some(function(e) {
            return -1 !== r.indexOf(e)
        })
    }

    function D(e, r) {
        return e.supercategories && -1 !== e.supercategories.indexOf(r)
    }
    var N = [l.default.TV_DEFAULT_CHOICE_PRODUCT, l.default.TV_SECONDARY_CHOICE_PRODUCT];
    e.Filters = function() {
        return {
            ASSITS: P(function(e) {
                return e.addonType === n.default.ASSIST
            }),
            TV_VASES: P(function(e) {
                return e.addonType !== n.default.ASSIST && e.boundedMainService === o.default.TV
            }),
            NEO_VASES: P(function(e) {
                return e.addonType !== n.default.ASSIST && e.addonType !== n.default.SECONDARY_CHOICE_DISCOUNT && e.boundedMainService === o.default.NEO
            }),
            MAIN_TV: P(function(e) {
                return e.addonType === n.default.TVMAIN
            }),
            MAIN_OPTV: P(function(e) {
                return e.addonType === n.default.TVMAIN && e.provider !== d.default.NC
            }),
            OPTIONAL_TV: P(function(e) {
                return e.addonType === n.default.TVOPTIONAL
            }),
            OPTIONAL_OPTV: P(function(e) {
                return e.addonType === n.default.TVOPTIONAL && e.provider !== d.default.NC
            }),
            BASIC_TV: P(function(e) {
                return e.addonType === n.default.TVBASIC
            }),
            NOT_BASIC_TV: P(function(e) {
                return e.addonType !== n.default.TVBASIC
            }),
            MAIN_NC: P(function(e) {
                return e.addonType === n.default.TVMAIN && e.provider === d.default.NC
            }),
            OPTIONAL_NC: P(function(e) {
                return e.addonType === n.default.TVOPTIONAL && e.provider === d.default.NC
            }),
            ALL_OPTV: P(function(e) {
                return (e.addonType === n.default.TVMAIN || e.addonType === n.default.TVOPTIONAL) && e.provider !== d.default.NC
            }),
            ALL_NC: P(function(e) {
                return (e.addonType === n.default.TVMAIN || e.addonType === n.default.TVOPTIONAL) && e.provider === d.default.NC
            }),
            MIGRATED: P(function(e) {
                return e.inputType
            }),
            NOT_MIGRATED: P(function(e) {
                return !e.inputType
            }),
            VOICE_VASES: P(function(e) {
                return !e.addonType && (null === e.boundedMainService || e.boundedMainService === o.default.OTHER)
            }),
            TV_DEFAULT_CHOICE_PRODUCT: P(function(e) {
                return E(e) && I(e, N) && !D(e, l.default.TV_DEFAULT_CHOICE_PRODUCT)
            }),
            TV_SECONDARY_CHOICE_PRODUCT: P(function(e) {
                return E(e) && I(e, N) && !D(e, l.default.TV_SECONDARY_CHOICE_PRODUCT)
            }),
            TV_LOYALTY_DURATION_12: P(function(e) {
                return e.loyaltyDuration && e.provider === d.default.NC && 12 !== e.loyaltyDuration && 0 !== e.loyaltyDuration
            }),
            TV_LOYALTY_DURATION_24: P(function(e) {
                return e.loyaltyDuration && e.provider === d.default.NC && 24 !== e.loyaltyDuration && 0 !== e.loyaltyDuration
            })
        }
    }
});
//# sourceMappingURL=CartInfoUtils.js.map