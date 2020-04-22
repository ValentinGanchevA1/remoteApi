define(["exports", "../remoteApi", "../actionTypes", "./wwt", "eshop/modules/cart/actions/cart", "../sessionAttributes", "../selectors/root", "eshop/modules/checkout/utils/utils", "../../../utils/OnlineUtils", "../../core/enum/MarketSegment", "../../core/enum/CustomerType", "../../core/enum/EcareEvent", "./errors"], function(e, o, u, r, t, a, c, i, n, s, l, d, S) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createLead = e.setSalesChannel = e.openWwtValidationModal = e.duplicateOrderModalState = e.checkDuplicateOrder = e.checkDuplicateOrderNoCache = e.resetDuplicateOrder = e.cartSummarySearchCustomerIsDone = e.showForceSearchModal = e.closeForceSearchModal = e.closeCustomerSelectedModal = e.showCustomerSelectedModal = e.subscribeSearchCustomer = e.lpSearchCustomerIsDone = e.redirectOnCustomerSearch = e.getCustomerServiceList = e.getMigrationMode = e.getOnlyNeededAddressData = e.customerServicesListIsEmpty = e.customerServicesListIsLoading = void 0, o = babelHelpers.interopRequireDefault(o), u = babelHelpers.interopRequireWildcard(u), a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l), d = babelHelpers.interopRequireDefault(d);

    function E(e) {
        return {
            type: u.CUSTOMER_SERVICES_LIST_IS_LOADING,
            isLoading: e
        }
    }
    e.customerServicesListIsLoading = E;

    function p(e) {
        return {
            type: u.CUSTOMER_SERVICES_LIST_IS_EMPTY,
            isEmpty: e
        }
    }
    e.customerServicesListIsEmpty = p;

    function _(e) {
        var t = {};
        return t.preZipCode = e.preZipCode, t.postalCode = e.postalCode, t.zip = e.preZipCode + e.postalCode, t.cityName = e.town, t.cityId = e.cityId, t.streetName = e.line1, t.streetId = e.streetId, t.streetNumber = e.line2, t.apartmentNumber = e.appartmentNo, t
    }
    e.getOnlyNeededAddressData = _;
    e.getMigrationMode = function(e) {
        return function(t) {
            o.default.getMigrationMode(e).then(function(e) {
                t({
                    type: u.MIGRATION_MODE,
                    payload: e
                })
            })
        }
    };

    function f(e) {
        return e.length
    }
    e.getCustomerServiceList = function() {
        return function(t) {
            t(p(!1)), t(E(!0)), o.default.getCustomerServiceList().then(function(e) {
                0 === f(e) ? t(p(!0)) : 1 === f(e) && 0 === e[0].serviceBundles.length && (t(p(!0)), t((0, r.updateAddress)(_(e[0].addressData)))), t({
                    type: u.GET_CUSTOMER_SERVICES_LIST,
                    payload: e
                }), t(E(!1))
            })
        }
    };
    e.redirectOnCustomerSearch = function() {
        return function(e, t) {
            (0, i.whenAvailable)("PubSub", function() {
                PubSub.subscribe(d.default.SEARCH, function() {
                    sessionStorage.removeItem(a.FIX_SERVICE_DETAILS_BB_ATTR), e(D())
                }), PubSub.subscribe(d.default.NOT_FOUND, function() {
                    (0, c.getCartSummarySearchCustomerDone)(t()) && (sessionStorage.removeItem(a.FIX_SERVICE_DETAILS_BB_ATTR), e(O()), setTimeout(function() {
                        window.location.href = n.default.getLastViewedOfferPage()
                    }, 3e3))
                }), PubSub.subscribe(d.default.CUSTOMER_SELECTED, function() {
                    (0, c.getCartSummarySearchCustomerDone)(t()) && (e(O()), setTimeout(function() {
                        window.location.href = n.default.getLastViewedOfferPage()
                    }, 3e3))
                })
            })
        }
    };

    function C(t) {
        return function(e) {
            e({
                type: u.LP_SEARCH_CUSTOMER_DONE,
                payload: t
            })
        }
    }
    e.lpSearchCustomerIsDone = C;
    e.subscribeSearchCustomer = function() {
        return function(o, n) {
            (0, i.whenAvailable)("PubSub", function() {
                PubSub.subscribe(d.default.SEARCH, function() {
                    sessionStorage.removeItem(a.FIX_SERVICE_DETAILS_BB_ATTR), o(C(!0))
                }), PubSub.subscribe(d.default.NOT_FOUND, function() {
                    (0, c.getLPSearchCustomerDone)(n()) && (o(C(!1)), location.reload(!0))
                }), PubSub.subscribe(d.default.CUSTOMER_SELECTED_DATA, function(e, t) {
                    t.cimId;
                    var r = t.customerType;
                    s.default.isB2B((0, c.marketSegment)(n())) ^ r === l.default.ORGANIZATION ? o((0, S.openErrorModal)("Error1000")) : (0, c.getLPSearchCustomerDone)(n()) && (o(C(!1)), location.reload(!0))
                })
            }, o)
        }
    };
    var O = function() {
        return function(e) {
            e({
                type: u.SHOW_CUSTOMER_SELECTED_MODAL_ACTION
            })
        }
    };
    e.showCustomerSelectedModal = O;
    e.closeCustomerSelectedModal = function() {
        return function(e) {
            e({
                type: u.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION
            })
        }
    };
    e.closeForceSearchModal = function() {
        return function(e) {
            e({
                type: u.CLOSE_FORCE_SEARCH_MODAL_ACTION
            })
        }
    };
    e.showForceSearchModal = function() {
        return function(e) {
            e({
                type: u.SHOW_FORCE_SEARCH_MODAL_ACTION
            })
        }
    };
    var D = function() {
        return function(e) {
            e({
                type: u.CART_SUMMARY_SEARCH_CUSTOMER_DONE
            })
        }
    };
    e.cartSummarySearchCustomerIsDone = D;
    e.resetDuplicateOrder = function() {
        return function(e) {
            e({
                type: u.DUPLICATE_ORDER_RESET
            })
        }
    };
    e.checkDuplicateOrderNoCache = function(r) {
        return function(t, e) {
            t({
                type: u.DUPLICATE_ORDER_FETCHING
            }), o.default.getDuplicateOrdersNoCache(r).then(function(e) {
                return t(I(e))
            }).catch(function(e) {
                t({
                    type: u.DUPLICATE_ORDER_FETCHED
                })
            })
        }
    };
    e.checkDuplicateOrder = function(r) {
        return function(t, e) {
            t({
                type: u.DUPLICATE_ORDER_FETCHING
            }), o.default.getDuplicateOrders(r).then(function(e) {
                return t(I(e))
            }).catch(function(e) {
                t({
                    type: u.DUPLICATE_ORDER_FETCHED
                })
            })
        }
    };
    var I = function(n) {
        return function(e, t) {
            if (null != n && null != n.duplicateOrderInfo && n.requestOrderProcessGroup) {
                var r = "MIGRATION_GROUP" === n.requestOrderProcessGroup,
                    o = {
                        orderNumber: n.duplicateOrderInfo.orderNumber,
                        serviceName: n.duplicateOrderInfo.orderType
                    };
                setTimeout(function() {
                    e({
                        type: u.DUPLICATE_ORDER_IS_MODAL_OPENED,
                        payload: n.hasOpenOrder
                    })
                }, 500), e({
                    type: u.IS_DUPLICATE_ORDER,
                    payload: n.hasOpenOrder
                }), e({
                    type: u.HAS_ACCESS_ROLE_TO_PROCESS_DUPLICATE_ORDER,
                    payload: n.hasAccessRoleToProcessDuplicateOrder
                }), e({
                    type: u.DUPLICATE_ORDER_DETAILS,
                    payload: o
                }), e({
                    type: u.IS_MIGRATION,
                    payload: r
                })
            } else e({
                type: u.IS_DUPLICATE_ORDER,
                payload: !1
            });
            e({
                type: u.DUPLICATE_ORDER_FETCHED
            })
        }
    };
    e.duplicateOrderModalState = function(t) {
        return function(e) {
            e({
                type: u.DUPLICATE_ORDER_IS_MODAL_OPENED,
                payload: t
            })
        }
    };
    e.openWwtValidationModal = function(t, r) {
        return function(e) {
            e({
                type: u.WWT_VALIDATION_MODAL_MESSAGE,
                payload: r
            }), e({
                type: u.WWT_VALIDATION_MODAL,
                payload: t
            })
        }
    };
    e.setSalesChannel = function(t) {
        return function(e) {
            e({
                type: u.SET_SALES_CHANNEL,
                payload: t
            })
        }
    };
    e.createLead = function() {
        return function() {
            window.location = "/deklaracja"
        }
    }
});
//# sourceMappingURL=data.js.map