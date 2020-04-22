define(["exports", "../actionTypes", "../../magnum2/actionTypes", "../enum/TvPackagesChoiceFilter"], function(e, o, t, a) {
    "use strict";

    function r(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, r)
        }
        return a
    }

    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.secondaryChoiceOffer = e.isLP = e.migrationVariantsFetching = e.migrationVariantsFetched = e.migrationVariants = e.bundleNosOnCart = e.showCartNotEmptyModal = e.selectedOfferId = e.data = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireWildcard(t), a = babelHelpers.interopRequireDefault(a);
    var i = {
        offers: [],
        showAlertPopup: !1,
        offerNumber: 0
    };
    e.data = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : i,
            a = 1 < arguments.length ? arguments[1] : void 0;
        switch (a.type) {
            case o.FETCH_OFFERS:
                return a.payload.offers ? {
                    offers: a.payload.offers.map(function(e) {
                        var t = e.tieredPriceList.map(function(e) {
                                return {
                                    finalPrice: e.finalPrice,
                                    finalNetPrice: e.finalNetPrice,
                                    startCycle: e.startCycle,
                                    endCycle: e.endCycle
                                }
                            }),
                            a = e.tvPackages && 0 < e.tvPackages.length;
                        return {
                            offerId: e.broadband.bundleId,
                            tieredPrices: t,
                            hasTV: a,
                            minimumLinkPrice: e.minLinkPrice,
                            availableAsSecondaryChoiceOffer: e.availableAsSecondaryChoiceOffer,
                            modalIsOpen: !1,
                            totalPrice: e.totalPrice.formattedValue,
                            devices: e.devices,
                            activationPrice: e.activationPrice,
                            downgradePenalty: e.downgradePenalty,
                            broadband: e.broadband,
                            voip: e.voip,
                            tvProduct: e.tvProduct,
                            tvPackages: e.tvPackages,
                            feeAddons: e.feeAddons,
                            vasPackagesB2BProduct: e.vasPackagesB2BProduct
                        }
                    }),
                    loyaltyOptions: a.payload.loyalty && a.payload.loyalty.map(function(e) {
                        return {
                            value: e,
                            description: "loyalty" + e
                        }
                    }),
                    technologies: a.payload.technologies,
                    ftthAvailabilityDate: a.payload.ftthAvailabilityDate,
                    pots: a.payload.pots,
                    productListDescription: a.payload.productListDescription,
                    paragraphs: a.payload.paragraphs
                } : n({}, i, {
                    ftthAvailabilityDate: a.payload.ftthAvailabilityDate,
                    errorMessage: a.payload.errorMessage
                });
            case o.SHOW_MODAL_ACTION:
                var t = e.offers.map(function(e, t) {
                    return t === a.payload.modalId ? n({}, e, {
                        modalIsOpen: !0
                    }) : n({}, e)
                });
                return n({}, e, {
                    offers: t,
                    modals: a.payload.modals,
                    offerNumber: a.payload.modalId
                });
            case o.CLOSE_TV_MODAL:
                var r = e.offers.map(function(e, t) {
                    return t === a.payload.modalId ? n({}, e, {
                        modalIsOpen: !1
                    }) : n({}, e)
                });
                return n({}, e, {
                    offers: r,
                    modals: a.payload.modals,
                    offerNumber: a.payload.modalId,
                    showAlertPopup: !1
                });
            default:
                return e
        }
    };
    e.selectedOfferId = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case o.SAVE_SELECTED_OFFER_ID:
                return t.payload;
            default:
                return e
        }
    };
    e.showCartNotEmptyModal = function(e, t) {
        var a = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SHOW_CART_NOT_EMPTY_MODAL:
                return r.payload;
            default:
                return a
        }
    };
    e.bundleNosOnCart = function(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SAVE_BUNDLE_NOS:
                return r.data;
            default:
                return a
        }
    };
    e.migrationVariants = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case o.MIGRATION_VARIANTS_FETCHED:
                return t.payload || {};
            default:
                return e
        }
    };
    e.migrationVariantsFetched = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case o.MIGRATION_VARIANTS_FETCHED:
                return !0;
            default:
                return e
        }
    };
    e.migrationVariantsFetching = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case o.MIGRATION_VARIANTS_FETCHING:
                return !0;
            case o.MIGRATION_VARIANTS_FETCHED:
                return !1;
            default:
                return e
        }
    };
    e.isLP = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case o.IS_LP:
                return t.payload;
            default:
                return e
        }
    };
    e.secondaryChoiceOffer = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case o.SHOW_BASE_OFFER:
            case o.SELECT_LOYALTY:
            case t.SET_LOYALTY_PERIOD:
            case t.SET_FIX_BROADBAND_TRANSACTION:
            case t.SET_FIX_VOIP_TRANSACTION:
            case t.SET_MOBILE_TRANSACTION:
                return !1;
            case o.SHOW_SECONDARY_CHOICE_OFFER:
                return !0;
            default:
                return e
        }
    }
});
//# sourceMappingURL=offers.js.map