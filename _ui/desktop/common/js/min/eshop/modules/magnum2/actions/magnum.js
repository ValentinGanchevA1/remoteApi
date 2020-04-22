define(["exports", "../actionTypes", "../../core/utils/request-actions-creator"], function(e, o, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchPossibleTransactions = e.fetchDeviceListActions = e.fetchPropositionListActions = e.fetchDocumentsListActions = e.showOnlyFTTH = e.fillMissingZipCode = e.closeWWTZipModal = e.openWWTZipModal = e.showForceSearchModal = e.closeForceSearchCustomer = e.showForceSearchCustomer = e.searchCustomerPerformed = e.setAvailableBundleTypes = e.setMagnumStore = e.setLoyaltyPeriod = e.setMobileTransaction = e.setFixVoipTransaction = e.setFixBroadbandTransaction = e.selectDeviceVariant = e.setPropositionComponentPk = e.setKnaNumber = e.selectProposition = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.selectProposition = function(e) {
        return {
            type: o.SELECT_PROPOSITION,
            payload: {
                proposition: e
            }
        }
    };
    e.setKnaNumber = function(e) {
        return {
            type: o.SET_KNA_NUMBER,
            payload: {
                knaNumber: e
            }
        }
    };
    e.setPropositionComponentPk = function(e) {
        return {
            type: o.SET_PROPOSITION_COMPONENT_PK,
            payload: {
                componentPk: e
            }
        }
    };
    e.selectDeviceVariant = function(e, t) {
        return {
            type: o.SELECT_DEVICE_VARIANT,
            payload: {
                productId: e,
                variantId: t
            }
        }
    };
    e.setFixBroadbandTransaction = function(e) {
        return {
            type: o.SET_FIX_BROADBAND_TRANSACTION,
            payload: {
                transaction: e
            }
        }
    };
    e.setFixVoipTransaction = function(e) {
        return {
            type: o.SET_FIX_VOIP_TRANSACTION,
            payload: {
                transaction: e
            }
        }
    };
    e.setMobileTransaction = function(e, t) {
        return {
            type: o.SET_MOBILE_TRANSACTION,
            payload: {
                transaction: e,
                msisdn: t
            }
        }
    };
    e.setLoyaltyPeriod = function(e) {
        return {
            type: o.SET_LOYALTY_PERIOD,
            payload: {
                loyaltyPeriod: e
            }
        }
    };
    e.setMagnumStore = function(e) {
        return {
            type: o.SET_MAGNUM_STORE,
            payload: {
                magnum: e
            }
        }
    };
    e.setAvailableBundleTypes = function(e) {
        return {
            type: o.SET_AVAILABLE_BUNDLE_TYPES,
            payload: {
                availableBundleTypes: e
            }
        }
    };
    e.searchCustomerPerformed = function() {
        return {
            type: o.CUSTOMER_SEARCHED
        }
    };
    e.showForceSearchCustomer = function() {
        return {
            type: o.SHOW_FORCE_SEARCH_MODAL_ACTION
        }
    };
    e.closeForceSearchCustomer = function() {
        return {
            type: o.CLOSE_CUSTOMER_SEARCHED_MODAL
        }
    };
    e.showForceSearchModal = function() {
        return function(e) {
            e({
                type: o.SHOW_FORCE_SEARCH_MODAL_ACTION
            })
        }
    };
    e.openWWTZipModal = function() {
        return function(e) {
            e({
                type: o.OPEN_WWT_ZIP_MODAL
            })
        }
    };
    e.closeWWTZipModal = function() {
        return function(e) {
            e({
                type: o.CLOSE_WWT_ZIP_MODAL
            })
        }
    };
    e.fillMissingZipCode = function(t) {
        return function(e) {
            e({
                type: o.FILL_MISSING_ZIP_CODE,
                payload: {
                    zip: t
                }
            })
        }
    };
    e.showOnlyFTTH = function(t) {
        return function(e) {
            e({
                type: o.SHOW_ONLY_FTTH,
                payload: t
            })
        }
    };
    var n = (0, t.createRequestActions)(o.fetchDocumentsList);
    e.fetchDocumentsListActions = n;
    var i = (0, t.createRequestActions)(o.fetchPropositionList);
    e.fetchPropositionListActions = i;
    var r = (0, t.createRequestActions)(o.fetchDeviceList);
    e.fetchDeviceListActions = r;
    var s = (0, t.createRequestActions)(o.fetchPossibleTransactions);
    e.fetchPossibleTransactions = s
});
//# sourceMappingURL=magnum.js.map