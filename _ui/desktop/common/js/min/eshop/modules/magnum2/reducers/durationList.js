define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(e, o, n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : i,
            s = 1 < arguments.length ? t : void 0;
        switch (s.type) {
            case n.fetchPropositionList.start:
                return a({}, r, {
                    requestState: o.RequestState.Waiting,
                    durations: [],
                    propositions: [],
                    requestId: s.payload.requestId,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });
            case n.fetchPropositionList.success:
                return a({}, r, {}, s.payload, {
                    requestState: o.RequestState.Success
                });
            case n.fetchPropositionList.error:
                return a({}, r, {
                    requestState: o.RequestState.Error,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });
            case n.fetchPropositionList.reset:
                return a({}, r, {
                    requestState: o.RequestState.None,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });
            case n.SET_MAGNUM_STORE:
                return s.payload.magnum.durationList;
            case n.SHOW_ONLY_FTTH:
                return a({}, r, {
                    showOnlyFTTH: s.payload
                });
            default:
                return r
        }
    }
    var i = {
        requestState: o.RequestState.None,
        requestId: null,
        durations: [],
        propositions: [],
        productListDescription: null,
        showOnlyFTTH: !0,
        paragraphsAbove: [],
        paragraphsBelow: []
    };
    e.default = t
});
//# sourceMappingURL=durationList.js.map