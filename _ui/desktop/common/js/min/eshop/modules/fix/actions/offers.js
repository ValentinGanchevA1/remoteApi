define(["exports", "../actionTypes", "../../magnum2/actionTypes", "../remoteApi", "eshop/modules/cart/actionTypes", "./kna", "eshop/modules/checkout/actionTypes", "./errors", "../selectors/root", "./wwt", "./voip", "eshop/modules/fix/selectors", "eshop/utils/OnlineUtils"], function(e, l, a, f, n, u, c, p, O, y, i, r, d) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.showTVModal = function(e) {
        return {
            type: l.SHOW_MODAL_ACTION,
            payload: {
                modalId: e
            }
        }
    }, e.closeTvModal = function(e) {
        return {
            type: l.CLOSE_TV_MODAL,
            payload: {
                modalId: e
            }
        }
    }, e.isAddressNotEmpty = C, e.saveSelectedOfferId = S, e.saveSelectedLoyalty = function(e) {
        return {
            type: l.SELECT_LOYALTY,
            payload: e
        }
    }, e.updateIsLandingPage = e.showSecondaryChoiceOffer = e.showBaseOffer = e.removeCart = e.addToCart = e.chooseOffer = e.showCartNotEmptyModal = e.refreshOffertsByLoyalty = e.optionallyRedirectAfterWWT = e.checkAvailablePromotions = e.fetchOffersAndCheckAvailablePromotions = e.fetchTvChannels = e.fetchOffers = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireWildcard(a), f = babelHelpers.interopRequireDefault(f), n = babelHelpers.interopRequireWildcard(n), c = babelHelpers.interopRequireWildcard(c), d = babelHelpers.interopRequireDefault(d);

    function s(r, e, t, o, n) {
        var a = 1 < arguments.length && void 0 !== e ? e : null,
            i = 2 < arguments.length && void 0 !== t && t,
            d = 3 < arguments.length && void 0 !== o && o,
            s = 4 < arguments.length && void 0 !== n && n;
        return function(t, o) {
            t({
                type: l.FETCH_OFFERS_START
            }), t({
                type: l.HIDE_PAYMENT_LINK_COMPONENT
            });
            var n = T(r, s);
            n ? t({
                type: c.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success,
                payload: n
            }) : n = {}, t((0, y.saveWWTAddress)({
                address: n,
                forceAfterWwt: d,
                designationNumber: a
            })), t(A());
            var e = (0, O.getSelectedLoyalty)(o());
            f.default.getOffers(n.fromSession ? null : n, e, a, i).then(function(e) {
                t({
                    type: l.FETCH_OFFERS,
                    payload: e
                }), f.default.getDocuments(e.offers ? e.offers.map(function(e) {
                    return e.broadband.bundleId
                }) : []).then(function(e) {
                    t({
                        type: l.FETCH_DOCUMENTS,
                        payload: e
                    })
                }, function(e) {}), e && e.offers ? ("ACTIVATION" === e.process && 0 < e.offers.length && !e.technologies.includes("FTTH") && C(n) && ((0, O.getKnaModalRegistered)(o()) ? t((0, u.showKnaModal)(!1)) : t((0, u.showPaymentLink)())), i && !C(n) && t((0, y.doShowWWTModal)())) : t((0, p.openErrorModal)(e.errorMessage))
            }, function(e) {})
        }
    }
    e.fetchOffers = s;
    e.fetchTvChannels = function(e) {
        return function(o) {
            f.default.getTvPackages(e).then(function(e) {
                var t = [{
                    tvPackages: e
                }];
                o({
                    type: n.FETCH_FIX_CONFIGURABLES,
                    payload: t
                })
            })
        }
    };
    var T = function(e, t) {
        if (e) {
            if (e.zip) return {
                preZipCode: e.zip && e.zip.substr(0, 2),
                postalCode: e.zip && e.zip.substr(2),
                town: e.cityName,
                line1: e.streetName,
                line2: e.streetNumber,
                appartmentNo: e.apartmentNumber,
                streetId: e.streetId,
                cityId: e.cityId
            };
            if (t || e.preZipCode) return e
        }
    };
    e.fetchOffersAndCheckAvailablePromotions = function(n, r) {
        return function(t, e) {
            var o = (0, O.isWWW)(e());
            t(_(n)).then(function(e) {
                !n.fromSession && !o && e && e.availableApartments && 0 < e.availableApartments.length ? t({
                    type: a.SAVE_WWT_ADDITIONAL_DATA,
                    payload: e
                }) : t(s(n, null, !1, r))
            })
        }
    };
    var _ = function(i) {
        return function(r, a) {
            return new Promise(function(o, n) {
                r({
                    type: l.PROMOTION_IS_AVAILABLE_START
                });
                var e = T(i, !1);
                if (e && e.preZipCode && e.postalCode && e.cityId && e.line2) {
                    var t = {
                        address: e,
                        context: (0, O.getPageContext)(a())
                    };
                    f.default.checkWwtAdditionalData(t).then(function(e) {
                        if (e) {
                            var t = {
                                componentUid: "WWT_NewLove",
                                boxID: "love-offer",
                                formType: "DETAILED",
                                leadAddressForm: decodeURI($.param(e.address)).replace("+", " "),
                                address: e.base64Address
                            };
                            localStorage.setItem("OPL-prompterWWT_address", JSON.stringify(t))
                        }
                        e && e.redirectAvailable && !0 === e.redirectAvailable && window.location.pathname !== e.redirectUrl ? (window.location = e.redirectUrl, n()) : (r({
                            type: l.PROMOTION_IS_AVAILABLE_LOADED
                        }), o(e))
                    }, function() {
                        r({
                            type: l.PROMOTION_IS_AVAILABLE_LOADED
                        }), o()
                    })
                } else r({
                    type: l.PROMOTION_IS_AVAILABLE_LOADED
                }), o()
            })
        }
    };
    e.checkAvailablePromotions = _;
    var A = function() {
        return function(e, t) {
            var o = (0, r.getRedirectUrlAfterWWT)(t());
            (0, O.isPreLandingPage)(t()) && o && window.location.pathname != o && (window.location = o)
        }
    };
    e.optionallyRedirectAfterWWT = A;
    e.refreshOffertsByLoyalty = function(o) {
        return function(t) {
            t({
                type: l.FETCH_OFFERS_START
            }), f.default.getOffers({}, o).then(function(e) {
                t({
                    type: l.FETCH_OFFERS,
                    payload: e
                }), t({
                    type: l.SELECT_LOYALTY,
                    payload: o
                }), f.default.getDocuments(e.offers.map(function(e) {
                    return e.broadband.bundleId
                })).then(function(e) {
                    t({
                        type: l.FETCH_DOCUMENTS,
                        payload: e
                    })
                })
            })
        }
    };

    function E(t) {
        return function(e) {
            e({
                type: l.SHOW_CART_NOT_EMPTY_MODAL,
                payload: t
            })
        }
    }
    e.showCartNotEmptyModal = E;
    e.chooseOffer = function(e) {
        var r = e.offerId,
            a = e.secondaryChoiceOffer;
        return function(t, o) {
            var n = (0, O.voipModalComponentIsMounted)(o());
            t(S(r)), f.default.removeFromCart().then(function(e) {
                n ? (e && null == e.description && t((0, i.fetchVoipNumbers)((0, O.getWwtCityId)(o()))), t((0, i.voipSelection)(!0))) : t(h(r, a))
            })
        }
    };
    var h = function(e, o) {
        return function(t) {
            t({
                type: l.CART_MOD_LOADING,
                payload: !0
            }), f.default.addOfferToCart(e, o).then(function(e) {
                e.status && window.location.replace("/koszyk/multi")
            }).catch(function(e) {
                t({
                    type: l.CART_MOD_LOADING,
                    payload: !1
                }), t({
                    type: l.SAVE_BUNDLE_NOS,
                    data: e.responseJSON.bundleNos
                }), e && e.responseJSON && e.responseJSON.errorCode ? t((0, p.openErrorModal)(e.responseJSON.errorCode, e.responseJSON.description)) : setTimeout(function() {
                    return t(E(!0))
                }, 400)
            }), d.default.removePwaSuflerContextFromSession()
        }
    };
    e.addToCart = h;
    e.removeCart = function() {
        return function(e, t) {
            e({
                type: l.CART_MOD_LOADING,
                payload: !0
            }), e(E(!1)), f.default.removeFromCart().then(function() {
                OPL.UI.fire(OPL.UI.EVENTS.modules.header.updateRightMenuBadge, {
                    id: "basketBadgeService",
                    value: 0
                })
            }).then(function() {
                e({
                    type: l.CART_MOD_LOADING,
                    payload: !1
                })
            }).then(function() {
                (0, O.voipModalComponentIsMounted)(t()) && e((0, i.fetchVoipNumbers)((0, O.getWwtCityId)(t())))
            })
        }
    };
    e.showBaseOffer = function() {
        return function(e) {
            e({
                type: l.SHOW_BASE_OFFER
            }), e({
                type: l.FETCH_OFFERS_START
            }), setTimeout(function() {
                return e({
                    type: l.FETCH_OFFERS_STOP
                })
            }, 100)
        }
    };

    function C(e) {
        return !(!(t = e) || !Object.keys(t).length) && "" !== e.preZipCode && "" !== e.town;
        var t
    }

    function S(e) {
        return {
            type: l.SAVE_SELECTED_OFFER_ID,
            payload: e
        }
    }
    e.showSecondaryChoiceOffer = function() {
        return function(e) {
            e({
                type: l.SHOW_SECONDARY_CHOICE_OFFER
            }), e({
                type: l.FETCH_OFFERS_START
            }), setTimeout(function() {
                return e({
                    type: l.FETCH_OFFERS_STOP
                })
            }, 100)
        }
    };
    e.updateIsLandingPage = function(t) {
        return function(e) {
            e({
                type: l.IS_LP,
                payload: t
            })
        }
    }
});
//# sourceMappingURL=offers.js.map