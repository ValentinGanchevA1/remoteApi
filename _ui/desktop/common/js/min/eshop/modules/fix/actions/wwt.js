define(["exports", "../actionTypes", "../../magnum2/actionTypes", "./offers", "./voip", "../selectors/root"], function(e, s, a, W, l, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setRedirectUrlAfterWWT = e.doHideWWTModal = e.doShowWWTModal = e.saveWWTAddress = e.updateAddress = void 0, s = babelHelpers.interopRequireWildcard(s), a = babelHelpers.interopRequireWildcard(a);
    e.updateAddress = function(o, e, t, n) {
        var r = 1 < arguments.length && void 0 !== e ? e : null,
            i = 2 < arguments.length && void 0 !== t && t,
            d = 3 < arguments.length && void 0 !== n && n;
        return function(t, e) {
            var n = (0, u.isWWW)(e());
            t((0, W.checkAvailablePromotions)(o)).then(function(e) {
                !o.fromSession && !n && d && e && e.availableApartments && 0 < e.availableApartments.length ? t({
                    type: a.SAVE_WWT_ADDITIONAL_DATA,
                    payload: e
                }) : t((0, W.fetchOffers)(o, r, i))
            })
        }
    };
    e.saveWWTAddress = function(e) {
        var t = e.address,
            n = void 0 === t ? null : t,
            o = e.forceAfterWwt,
            r = void 0 !== o && o,
            i = e.designationNumber,
            d = void 0 === i ? null : i;
        return function(e) {
            e((0, l.saveDesignationNumber)(d)), e({
                type: s.SAVE_WWT_ADDRESS,
                payload: n
            }), (0, W.isAddressNotEmpty)(n) || r ? e({
                type: s.AFTER_WWT
            }) : e({
                type: s.BEFORE_WWT
            })
        }
    };
    e.doShowWWTModal = function() {
        return function(e) {
            e({
                type: s.SHOW_WWT_MODAL
            })
        }
    };
    e.doHideWWTModal = function() {
        return function(e) {
            e({
                type: s.HIDE_WWT_MODAL
            })
        }
    };
    e.setRedirectUrlAfterWWT = function(t) {
        return function(e) {
            e({
                type: s.SET_REDIRECT_URL_AFTER_WWT,
                url: t
            })
        }
    }
});
//# sourceMappingURL=wwt.js.map