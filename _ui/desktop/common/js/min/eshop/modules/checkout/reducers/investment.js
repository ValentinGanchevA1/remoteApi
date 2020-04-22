define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(e, n, o) {
    "use strict";

    function s(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.offers = e.consent = e.lead = void 0, o = babelHelpers.interopRequireWildcard(o);
    var u = {
            consentRequestState: n.RequestState.None,
            oneTimeConsentId: "",
            oneTimeConsent: "",
            loaded: !1,
            error: !1,
            empty: !0
        },
        c = {
            offersRequestState: n.RequestState.None
        },
        T = {
            registerLeadRequestState: n.RequestState.None
        };
    e.lead = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : T,
            s = 1 < arguments.length ? t : void 0;
        switch (s.type) {
            case o.REGISTER_LEAD_ACTION_TYPES.start:
                return a({}, r, {
                    registerLeadRequestState: n.RequestState.Waiting
                });
            case o.REGISTER_LEAD_ACTION_TYPES.success:
                return a({}, r, {
                    lead: s.payload,
                    registerLeadRequestState: n.RequestState.Success
                });
            case o.REGISTER_LEAD_ACTION_TYPES.error:
                return a({}, r, {
                    registerLeadRequestState: n.RequestState.Error
                });
            default:
                return r
        }
    };
    e.consent = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : u,
            s = 1 < arguments.length ? t : void 0;
        switch (s.type) {
            case o.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.start:
                return a({}, r, {
                    consentRequestState: n.RequestState.Waiting
                });
            case o.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.success:
                return a({}, r, {
                    consentRequestState: n.RequestState.Success,
                    oneTimeConsentId: s.payload.oneTimeConsentId,
                    oneTimeConsent: s.payload.oneTimeConsent,
                    loaded: !0,
                    error: !1,
                    empty: null == s.payload.oneTimeConsent
                });
            case o.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.error:
                return a({}, u, {
                    consentRequestState: n.RequestState.Error,
                    loaded: !0,
                    error: !0,
                    empty: !0
                });
            default:
                return r
        }
    };
    e.offers = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : c,
            s = 1 < arguments.length ? t : void 0;
        switch (s.type) {
            case o.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.start:
                return a({}, r, {
                    offersRequestState: n.RequestState.Waiting
                });
            case o.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.success:
                return a({}, r, {
                    offersRequestState: n.RequestState.Success,
                    offers: s.payload,
                    loaded: !0,
                    error: !1
                });
            case o.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.error:
                return a({}, c, {
                    offersRequestState: n.RequestState.Error,
                    loaded: !0,
                    error: !0
                });
            default:
                return r
        }
    }
});
//# sourceMappingURL=investment.js.map