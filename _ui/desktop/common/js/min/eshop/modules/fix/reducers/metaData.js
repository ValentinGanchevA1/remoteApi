define(["exports", "../actionTypes", "../../core/enum/MarketSegment"], function(e, a, r) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.salesChannel = e.headerInfo = e.wwtValidationModalMessage = e.wwtValidationModalState = e.duplicateOrderCalled = e.isMigration = e.duplicateOrderDetails = e.duplicateOrderIsModalOpened = e.hasAccessRoleToProcessDuplicateOrder = e.isDuplicateOrder = e.lpSearchCustomerDone = e.cartSummarySearchCustomerDone = e.voipModalComponentIsMounted = e.showNetPrices = e.marketSegment = e.isAfterSearchCustomer = e.customerSelectedModalIsShow = e.selectedLoyalty = e.wwtAddress = e.shouldBeRenderedPaymentLinkComponent = e.forceAfterWWT = e.redirectUrlAfterWWT = e.showWWTModal = e.showWwtComponent = e.isAfterWWT = e.forceSearchModalIsShow = e.knaModalState = e.verifyIfServiceListsEmpty = e.migrationDataClear = e.loading = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);
    var i = {
            registered: !1,
            open: !1
        },
        c = {
            offers: !1,
            voipModal: !1,
            voipNumbers: !1,
            serviceDetails: !1,
            duplicates: !1,
            customerServices: !1,
            cartModification: !1,
            checkingPickup: !1
        };
    e.loading = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : c,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.FETCH_OFFERS_START:
                return o({}, e, {
                    offers: !0
                });
            case a.VOIP_START_LOADING_MODAL_ACTION:
                return o({}, e, {
                    voip: !0
                });
            case a.SERVICE_DETAILS_FETCHING:
                return o({}, e, {
                    serviceDetails: !0
                });
            case a.DUPLICATE_ORDER_FETCHING:
                return o({}, e, {
                    duplicates: !0
                });
            case a.PROMOTION_IS_AVAILABLE_START:
                return o({}, e, {
                    promotion: !0
                });
            case a.VOIP_STOP_LOADING_MODAL_ACTION:
                return o({}, e, {
                    voip: !1
                });
            case a.FETCH_OFFERS:
            case a.FETCH_OFFERS_STOP:
                return o({}, e, {
                    offers: !1
                });
            case a.SERVICE_DETAILS_FETCHED:
                return o({}, e, {
                    serviceDetails: !1
                });
            case a.DUPLICATE_ORDER_FETCHED:
                return o({}, e, {
                    duplicates: !1
                });
            case a.PROMOTION_IS_AVAILABLE_LOADED:
                return o({}, e, {
                    promotion: !1
                });
            case a.CUSTOMER_SERVICES_LIST_IS_LOADING:
                return o({}, e, {
                    customerServices: t.isLoading
                });
            case a.CART_MOD_LOADING:
                return o({}, e, {
                    cartModification: t.payload
                });
            case a.CHECK_PICKUP_STARTED:
                return o({}, e, {
                    checkingPickup: !0
                });
            case a.CHECK_PICKUP_DONE:
                return o({}, e, {
                    checkingPickup: !1
                });
            default:
                return e
        }
    };
    e.migrationDataClear = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.MIGRATION_DATA_CLEAR:
                return !0;
            default:
                return r
        }
    };
    e.verifyIfServiceListsEmpty = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.CUSTOMER_SERVICES_LIST_IS_EMPTY:
                return n.isEmpty;
            default:
                return r
        }
    };
    e.knaModalState = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : i;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.SHOW_KNA_MODAL_ACTION:
                return o({}, r, {
                    open: !0
                });
            case a.CLOSE_KNA_MODAL_ACTION:
                return o({}, r, {
                    open: !1
                });
            case a.REGISTER_KNA_MODAL_ACTION:
                return o({}, r, {
                    registered: !0
                });
            default:
                return r
        }
    };
    e.forceSearchModalIsShow = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.SHOW_FORCE_SEARCH_MODAL_ACTION:
                return !0;
            case a.CLOSE_FORCE_SEARCH_MODAL_ACTION:
                return !1;
            default:
                return e
        }
    };
    e.isAfterWWT = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.BEFORE_WWT:
                return !1;
            case a.AFTER_WWT:
                return !0;
            default:
                return e
        }
    };
    e.showWwtComponent = function() {
        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.HIDE_WWT_COMPONENT:
                return !1;
            case a.SHOW_WWT_COMPONENT:
                return !0;
            default:
                return e
        }
    };
    e.showWWTModal = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.SHOW_WWT_MODAL:
                return !0;
            case a.AFTER_WWT:
            case a.HIDE_WWT_MODAL:
                return !1;
            default:
                return r
        }
    };
    e.redirectUrlAfterWWT = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SET_REDIRECT_URL_AFTER_WWT:
                return n.url;
            default:
                return r
        }
    };
    e.forceAfterWWT = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.FORCE_AFTER_WWT:
                return t.payload;
            default:
                return e
        }
    };
    e.shouldBeRenderedPaymentLinkComponent = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.SHOW_PAYMENT_LINK_COMPONENT:
                return !0;
            case a.HIDE_PAYMENT_LINK_COMPONENT:
                return !1;
            default:
                return e
        }
    };
    e.wwtAddress = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.SAVE_WWT_ADDRESS:
                return t.payload;
            default:
                return e
        }
    };
    e.selectedLoyalty = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 24,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.SELECT_LOYALTY:
                return t.payload ? t.payload : 24;
            default:
                return e
        }
    };
    e.customerSelectedModalIsShow = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.SHOW_CUSTOMER_SELECTED_MODAL_ACTION:
                return !0;
            case a.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION:
                return !1;
            default:
                return e
        }
    };
    e.isAfterSearchCustomer = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.AFTER_SEARCH_CUSTOMER:
                return t.payload;
            default:
                return e
        }
    };
    e.marketSegment = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : r.default.B2C,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.MARKET_SEGMENT:
                return t.payload;
            default:
                return e
        }
    };
    e.showNetPrices = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.MARKET_SEGMENT:
                return r.default.isB2B(t.payload);
            default:
                return e
        }
    };
    e.voipModalComponentIsMounted = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.MOUNT_VOIP_MODAL_COMPONENT_ACTION:
                return !0;
            default:
                return e
        }
    };
    e.cartSummarySearchCustomerDone = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.CART_SUMMARY_SEARCH_CUSTOMER_DONE:
                return !0;
            default:
                return e
        }
    };
    e.lpSearchCustomerDone = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.LP_SEARCH_CUSTOMER_DONE:
                return t.payload;
            default:
                return e
        }
    };
    e.isDuplicateOrder = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.IS_DUPLICATE_ORDER:
                return t.payload;
            default:
                return e
        }
    };
    e.hasAccessRoleToProcessDuplicateOrder = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.HAS_ACCESS_ROLE_TO_PROCESS_DUPLICATE_ORDER:
                return t.payload;
            default:
                return e
        }
    };
    e.duplicateOrderIsModalOpened = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.DUPLICATE_ORDER_IS_MODAL_OPENED:
                return t.payload;
            default:
                return e
        }
    };
    e.duplicateOrderDetails = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                orderNumber: "",
                serviceName: ""
            },
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.DUPLICATE_ORDER_DETAILS:
                return t.payload;
            default:
                return e
        }
    };
    e.isMigration = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.IS_MIGRATION:
                return t.payload;
            default:
                return e
        }
    };
    e.duplicateOrderCalled = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case a.DUPLICATE_ORDER_FETCHING:
                return !0;
            case a.DUPLICATE_ORDER_RESET:
                return !1;
            default:
                return e
        }
    };
    e.wwtValidationModalState = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.WWT_VALIDATION_MODAL:
                return n.payload;
            default:
                return r
        }
    };
    e.wwtValidationModalMessage = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.WWT_VALIDATION_MODAL_MESSAGE:
                return n.payload;
            default:
                return r
        }
    };
    e.headerInfo = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SET_HEADERS:
                return o({}, r, {}, n.payload);
            default:
                return r
        }
    };
    e.salesChannel = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SET_SALES_CHANNEL:
                return n.payload;
            default:
                return r
        }
    }
});
//# sourceMappingURL=metaData.js.map