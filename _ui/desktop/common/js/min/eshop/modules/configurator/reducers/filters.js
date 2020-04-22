define(["exports", "redux", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "../actionTypes", "eshop/modules/simfree/actionTypes"], function(e, t, g, v, O, s) {
    "use strict";

    function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selected = e.processForMsisdn = e.offerTypeFiltersCached = e.offerFiltersLoading = e.defaultFilters = e.data = e.msisdnVerificationNeeded = e.verifiedMsisdn = e.verifiedMsisdnB2B = e.msisdnInput = e.isMsisdnChecking = e.checkMsisdnResult = e.marketContext = e.propositionListCountSetMode = e.propositionListCount = e.simCountSelected = e.propositionListSoftBundleGroup = e.propositionListOfferType = e.clientContextChangeHandlers = e.clientContext = e.useDefaultOffer = e.useDefaultLoyalty = e.useDefaultProcess = e.maxSimCount = e.useDefaultOfferType = e.cmsConf = void 0, v = babelHelpers.interopRequireDefault(v);
    e.cmsConf = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case s.REGISTER_OFFER_TYPES_CMS_CONF:
                return a.cmsConf || r;
            default:
                return r
        }
    };

    function l() {
        return null == v.default.loadFromSessionStorage("dontUseDefaults") || !v.default.loadFromSessionStorage("dontUseDefaults")
    }
    e.useDefaultOfferType = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : l(),
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.USE_DEFAULT_OFFER_TYPE:
                return a.use;
            default:
                return r
        }
    };
    e.maxSimCount = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : 5,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.SET_MAX_SIM_COUNT:
                return v.default.saveInSessionStorage("maxSimCount", a.maxSimCount), a.maxSimCount;
            default:
                return v.default.saveInSessionStorage("maxSimCount", r), r
        }
    };
    e.useDefaultProcess = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : l(),
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.USE_DEFAULT_PROCESS:
                return a.use;
            default:
                return r
        }
    };
    e.useDefaultLoyalty = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : l(),
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.USE_DEFAULT_LOYALTY:
                return a.use;
            default:
                return r
        }
    };
    e.useDefaultOffer = function(e, t) {
        var r = !(0 < arguments.length && void 0 !== e) || e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.USE_DEFAULT_OFFER:
                return a.use;
            default:
                return r
        }
    };
    e.clientContext = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "true" === v.default.loadFromSessionStorage("convergence");
        switch ((1 < arguments.length ? t : void 0).type) {
            case O.CLIENT_CONTEXT_ENABLED:
                return v.default.saveInStorageOnCanonicalLinks("convergence", !0), !0;
            case O.CLIENT_CONTEXT_DISABLED:
                return v.default.saveInStorageOnCanonicalLinks("convergence", !1), !1;
            default:
                return v.default.getParameterValueFromUrl("convergence") ? JSON.parse(v.default.getParameterValueFromUrl("convergence")) : (v.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("convergence", r), r)
        }
    };
    e.clientContextChangeHandlers = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.CLIENT_CONTEXT_CHANGE_SUBSCRIPTION:
                var n = r.slice();
                return n.push(a.handler), n;
            default:
                return r
        }
    };
    e.propositionListOfferType = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : v.default.loadFromSessionStorage("propositionListOfferType"),
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.PROPOSITION_LIST_OFFER_TYPE:
                return v.default.saveInSessionStorage("propositionListOfferType", a.offerType), a.offerType && "null" != a.offerType ? a.offerType : (v.default.removeFromSessionStorage("propositionListOfferType"), null);
            default:
                return r
        }
    };
    e.propositionListSoftBundleGroup = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : v.default.loadFromSessionStorage("propositionListSoftBundleGroup"),
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.PROPOSITION_LIST_SOFT_BUNDLE_GROUP:
                return v.default.saveInSessionStorage("propositionListSoftBundleGroup", a.softBundleGroup), a.softBundleGroup && "null" != a.softBundleGroup ? a.softBundleGroup : (v.default.removeFromSessionStorage("propositionListSoftBundleGroup"), null);
            default:
                return r
        }
    };
    var n = function() {
        if (v.default.getParameterValueFromUrl("count")) {
            var e = parseInt(v.default.getParameterValueFromUrl("count") <= v.default.loadFromSessionStorage("maxSimCount") ? v.default.getParameterValueFromUrl("count") : v.default.loadFromSessionStorage("maxSimCount"));
            return v.default.changeOrAddUrlParameterDisabledOnCheckout("count", e), e
        }
        return null != v.default.loadFromSessionStorage("simCountSelected") ? parseInt(v.default.loadFromSessionStorage("simCountSelected")) : 1
    };
    e.simCountSelected = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : n(),
            a = 1 < arguments.length && void 0 !== t ? t : {};
        switch (a.type) {
            case O.PROPOSITION_LIST_COUNT_SET:
                return v.default.saveInSessionStorage("simCountSelected", a.count), v.default.changeOrAddUrlParameterDisabledOnCheckout("count", a.count), a.count;
            default:
                return r
        }
    };
    e.propositionListCount = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null != v.default.loadFromSessionStorage("propositionListCount") || v.default.getParameterValueFromUrl("count") ? parseInt(v.default.getParameterValueFromUrl("count") || v.default.loadFromSessionStorage("propositionListCount")) : n(),
            a = 1 < arguments.length && void 0 !== t ? t : {};
        switch (a.type) {
            case O.PROPOSITION_LIST_COUNT_INCREMENT:
                return r <= 0 ? (v.default.saveInSessionStorage("propositionListCount", 1), 1) : (v.default.saveInSessionStorage("propositionListCount", r + 1), r + 1);
            case O.PROPOSITION_LIST_COUNT_DECREMENT:
                return 0 == r ? (v.default.saveInSessionStorage("propositionListCount", r), r) : (v.default.saveInSessionStorage("propositionListCount", r - 1), r - 1);
            case O.PROPOSITION_LIST_COUNT_SET:
                return v.default.saveInSessionStorage("propositionListCount", a.count), a.count;
            default:
                return r
        }
    };
    e.propositionListCountSetMode = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.PROPOSITION_LIST_COUNT_SET_MODE:
                return a.on;
            default:
                return r
        }
    };
    e.marketContext = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "B2C",
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.SET_MARKET_CONTEXT:
                return a.market && -1 < ["B2B", "B2C"].indexOf(a.market.replace("_SOHO", "")) ? a.market : r;
            case O.FETCH_OFFERS:
                var n = a.payload && a.payload[0] && a.payload[0].filterMarketSegment;
                return (n = n && n.replace("_SOHO", "")) || r;
            default:
                return r
        }
    };

    function o(e) {
        var t = v.default.loadFromSessionStorage(e);
        return t && "null" !== t ? JSON.parse(t) : {}
    }
    e.checkMsisdnResult = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : o("checkMsidnResult") || {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.CHECK_MSISDN_RESULT:
                return v.default.saveInSessionStorage("checkMsidnResult", JSON.stringify(a.payload.response)), a.payload.response;
            case O.CHECK_MSISDN_ERROR:
                return v.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({
                    isPositive: !1,
                    description: a.message
                })), {
                    isPositive: !1,
                    description: a.message
                };
            case O.CLEAR_CHECK_MSISDN:
            case O.SELECT_PROCESS_TYPE:
                return v.default.loadFromSessionStorage("processType") === a.processType ? r : (v.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({})), {});
            case O.CUSTOMER_SELECTED:
                return v.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({})), {};
            default:
                return r
        }
    };
    e.isMsisdnChecking = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case O.CHECK_MSISDN:
                return !0;
            case O.CHECK_MSISDN_RESULT:
            case O.CHECK_MSISDN_ERROR:
                return !1;
            default:
                return r
        }
    };
    e.msisdnInput = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                msisdn: "",
                valid: !0
            },
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.MSISDN_INPUT_CHANGED:
                return a.payload;
            case O.SELECT_PROCESS_TYPE:
            default:
                return r
        }
    };
    e.verifiedMsisdnB2B = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.CHECK_MSISDN_RESULT_B2B:
                var n = r.slice(0);
                return n[a.index] = {
                    msisdn: a.msisdn,
                    status: a.status,
                    description: a.description
                }, n;
            case O.CLEAR_CHECK_MSISDN_B2B:
                var o = r.slice(0);
                return o[a.index] = null, o;
            default:
                return r
        }
    };

    function r(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : o("verifiedMsisdn") || {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.CHECK_MSISDN_ERROR:
            case O.CHECK_MSISDN_RESULT:
                var n = {
                    context: {
                        market: a.payload.market,
                        offer: a.payload.offer,
                        process: a.payload.process
                    },
                    value: a.payload.response.msisdn
                };
                return v.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify(n)), n;
            case O.SELECT_PROCESS_TYPE:
                return v.default.loadFromSessionStorage("processType") === a.processType ? r : (v.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify({})), {});
            case O.CHECK_MSISDN:
            case O.CUSTOMER_SELECTED:
            case O.CLEAR_CHECK_MSISDN:
                return v.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify({})), {};
            default:
                return r
        }
    }
    e.verifiedMsisdn = r;
    e.msisdnVerificationNeeded = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : v.default.loadFromSessionStorage("msisdnVerificationNeeded") || !1;
        switch ((1 < arguments.length ? t : void 0).type) {
            case O.MSISDN_VERIFICATION_NEEDED:
                return v.default.saveInSessionStorage("msisdnVerificationNeeded", !0), !0;
            default:
                return r
        }
    };
    e.data = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.FETCH_OFFER_FILTERS:
                return a.payload;
            default:
                return r
        }
    };
    e.defaultFilters = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.FETCH_OFFER_FILTERS:
                var n = (0, g.findDefaultOptionInArrayOrPickFirst)(a.payload),
                    o = {};
                return a.payload.map(function(e) {
                    return o[e.value] = (0, g.findDefaultOptionInArrayOrSmallestValue)(e.loyalties)
                }), {
                    processType: n.value,
                    loyaltyLength: o
                };
            default:
                return r
        }
    };
    e.offerFiltersLoading = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case O.FETCH_OFFER_FILTERS_START:
                return !0;
            case O.FETCH_OFFER_FILTERS:
                return !1;
            default:
                return r
        }
    };
    e.offerTypeFiltersCached = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.FETCH_OFFER_FILTERS:
                var n = v.default.loadFromSessionStorage("offerType"),
                    o = r.slice();
                return (r && 0 === r.length || 0 < r.length && -1 === r.findIndex(function(e) {
                    return e.offerType === n
                })) && o.splice(0, 0, {
                    offerType: n,
                    offerFilters: a.payload
                }), o;
            default:
                return r
        }
    };
    e.processForMsisdn = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case O.PROCESS_FOR_MSISDN:
                if (a.msisdn && a.genericProcess && a.concreteProcess)
                    if (!r[a.msisdn] && a.genericProcess != a.concreteProcess) {
                        var n = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? i(Object(r), !0).forEach(function(e) {
                                    babelHelpers.defineProperty(t, e, r[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                })
                            }
                            return t
                        }({}, r);
                        return n[a.msisdn] = a.concreteProcess, v.default.saveInSessionStorage("processForMsisdn", JSON.stringify(n)), n
                    } return r;
            case O.FETCH_OFFER_FILTERS:
                var o = v.default.loadFromSessionStorage("processForMsisdn"),
                    s = r;
                return o && (s = JSON.parse(o)), s;
            case O.CUSTOMER_SELECTED:
                return v.default.removeFromSessionStorage("processForMsisdn"), {};
            default:
                return r
        }
    };
    var a = (0, t.combineReducers)({
        processType: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : v.default.getParameterValueFromUrl("processType") || v.default.loadFromSessionStorage("processType"),
                a = 1 < arguments.length ? t : void 0;
            switch (a.type) {
                case O.FETCH_OFFER_FILTERS:
                    var n = v.default.getParameterValueFromUrl("processType") || v.default.loadFromSessionStorage("processType"),
                        o = a.payload.find(function(e) {
                            return e.value === n
                        }),
                        s = a.payload.find(function(e) {
                            return e.isCanonicalConfiguration
                        });
                    if (s && v.default.isCanonicalLink()) return v.default.saveCanonicalValueInSessionStorage("processType", s.value), v.default.saveInStorageOnCanonicalLinks("processType", s.value), s.value;
                    if (!a.urlParametersUsed && o) return v.default.saveInStorageOnCanonicalLinks("processType", n), n;
                    if (r && a.payload.find(function(e) {
                            return e.value === r
                        })) return r;
                    if (a.useDefaultProcess) {
                        var i = (0, g.findDefaultOptionInArrayOrPickFirst)(a.payload);
                        return i && i.value
                    }
                    return r;
                case O.SELECT_PROCESS_TYPE:
                    return v.default.saveInStorageOnCanonicalLinks("processType", a.processType), a.processType;
                default:
                    return r
            }
        },
        loyaltyLength: function(e, t) {
            var r, a, n, o, s = 0 < arguments.length && void 0 !== e ? e : v.default.getParameterValueFromUrl("loyalty") ? v.default.getParameterValueFromUrl("loyalty") : v.default.loadFromSessionStorage("selectedLoyaltyDuration"),
                i = 1 < arguments.length ? t : void 0;
            switch (i.type) {
                case O.FETCH_OFFER_FILTERS:
                    var l = {};
                    l = Object.assign(l, s);
                    var u = v.default.getParameterValueFromUrl("loyalty"),
                        d = u ? v.default.getParameterValueFromUrl("loyalty") : v.default.loadFromSessionStorage("selectedLoyaltyDuration");
                    if (!i.urlParametersUsed && (r = v.default.getParameterValueFromUrl("processType"), a = d, n = i.payload, (o = n.find(function(e) {
                            return e.value === r
                        })) && o.loyalties && o.loyalties.find(function(e) {
                            return e.value == a
                        }))) i.payload.map(function(e) {
                        return l[e.value] = (0, g.findDefaultOptionInArrayOrSmallestValue)(e.loyalties)
                    }), l[v.default.getParameterValueFromUrl("processType")] = d, v.default.saveInSessionStorage("selectedLoyaltyDuration", l[v.default.getParameterValueFromUrl("processType")]);
                    else if (v.default.isCanonicalLink()) v.default.saveInSessionStorage("selectedLoyaltyDuration", l[v.default.loadFromSessionStorage("processType")]);
                    else if (i.useDefaultLoyalty) {
                        i.payload.map(function(e) {
                            return l[e.value] = l[e.value] || (0, g.findDefaultOptionInArrayOrSmallestValue)(e.loyalties)
                        });
                        var f = (0, g.findDefaultOptionInArrayOrPickFirst)(i.payload),
                            c = v.default.loadFromSessionStorage("processType") || f && f.value;
                        v.default.saveInSessionStorage("selectedLoyaltyDuration", l[c]), v.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", l[c])
                    }
                    return v.default.saveInSessionStorage("loyalty", JSON.stringify(l)), l;
                case O.SELECT_LOYALTY_LENGTH:
                    var S = {};
                    return S[i.processType] = i.loyaltyLength, v.default.saveInSessionStorage("loyalty", JSON.stringify(Object.assign({}, s, S))), v.default.saveInSessionStorage("selectedLoyaltyDuration", i.loyaltyLength), v.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", i.loyaltyLength), Object.assign({}, s, S);
                case O.CLEAR_LOYALTY_LENGTH:
                    return v.default.saveInSessionStorage("loyalty", JSON.stringify(l)), v.default.saveInSessionStorage("selectedLoyaltyDuration", ""), v.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", ""), {};
                case O.SELECT_PROCESS_TYPE:
                    if (i.useDefaultLoyalty) v.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", s[i.processType]);
                    else if (i.availableLoyalties && i.availableLoyalties.find(function(e) {
                            return e.value === i.processType
                        })) {
                        var p = i.availableLoyalties.find(function(e) {
                            return e.value === i.processType
                        }).loyalties;
                        if (p && 0 < p.length) {
                            var y = {};
                            return p.find(function(e) {
                                return e.value === s[i.processType]
                            }) ? y[i.processType] = s[i.processType] : y[i.processType] = i.availableLoyalties.find(function(e) {
                                return e.value === i.processType
                            }).loyalties[0].value, v.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", y[i.processType]), v.default.saveInSessionStorage("selectedLoyaltyDuration", y[i.processType]), Object.assign({}, s, y)
                        }
                    }
                    return s;
                default:
                    return s
            }
        },
        offerType: function(e, t) {
            var r, a = 0 < arguments.length && void 0 !== e ? e : (v.default.isCanonicalLink() ? (r = v.default.getParameterValueFromUrl("offerType") || "SIMFREE_INST", v.default.saveCanonicalValueInSessionStorage("offerType", r), v.default.saveInSessionStorage("offerType", r)) : r = v.default.getParameterValueFromUrl("offerType") || v.default.getFromSessionStorageAndSetUrlParameter("offerType") || "SIMFREE", r),
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case s.SELECT_OFFER_TYPE:
                    return null == n.offerType ? (v.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("offerType", a), a) : (v.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("offerType", n.offerType), n.offerType);
                case s.REGISTER_OFFER_TYPES_CMS_CONF:
                    var o = a.slice();
                    return n.validOfferTypes && n.validOfferTypes[0] && n.validOfferTypes.indexOf(o) <= -1 && (o = n.validOfferTypes[0]), l() ? Object.getOwnPropertyNames(n.cmsConf).find(function(e) {
                        return e === o
                    }) ? (v.default.saveInStorageOnCanonicalLinks("offerType", o), o) : Object.getOwnPropertyNames(n.cmsConf).length ? (v.default.saveInStorageOnCanonicalLinks("offerType", Object.getOwnPropertyNames(n.cmsConf)[0]), Object.getOwnPropertyNames(n.cmsConf)[0]) : (v.default.changeOrAddUrlParameterDisabledOnCheckout("offerType", "SIMFREE"), "SIMFREE") : (o = "", v.default.saveInSessionStorage("offerType", o), o);
                default:
                    return a
            }
        },
        verifiedMsisdn: r
    });
    e.selected = a
});
//# sourceMappingURL=filters.js.map