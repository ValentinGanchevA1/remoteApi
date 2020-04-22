define(["exports", "../actionTypes", "../../core/utils/request-actions-creator"], function(_exports, ACTIONS, _requestActionsCreator) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchPossibleTransactions = _exports.fetchDeviceListActions = _exports.fetchPropositionListActions = _exports.fetchDocumentsListActions = _exports.showOnlyFTTH = _exports.fillMissingZipCode = _exports.closeWWTZipModal = _exports.openWWTZipModal = _exports.showForceSearchModal = _exports.closeForceSearchCustomer = _exports.showForceSearchCustomer = _exports.searchCustomerPerformed = _exports.setAvailableBundleTypes = _exports.setMagnumStore = _exports.setLoyaltyPeriod = _exports.setMobileTransaction = _exports.setFixVoipTransaction = _exports.setFixBroadbandTransaction = _exports.selectDeviceVariant = _exports.setPropositionComponentPk = _exports.setKnaNumber = _exports.selectProposition = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var selectProposition = function selectProposition(proposition) {
        return {
            type: ACTIONS.SELECT_PROPOSITION,
            payload: {
                proposition: proposition
            }
        };
    };

    _exports.selectProposition = selectProposition;

    var setKnaNumber = function setKnaNumber(knaNumber) {
        return {
            type: ACTIONS.SET_KNA_NUMBER,
            payload: {
                knaNumber: knaNumber
            }
        };
    };

    _exports.setKnaNumber = setKnaNumber;

    var setPropositionComponentPk = function setPropositionComponentPk(componentPk) {
        return {
            type: ACTIONS.SET_PROPOSITION_COMPONENT_PK,
            payload: {
                componentPk: componentPk
            }
        };
    };

    _exports.setPropositionComponentPk = setPropositionComponentPk;

    var selectDeviceVariant = function selectDeviceVariant(productId, variantId) {
        return {
            type: ACTIONS.SELECT_DEVICE_VARIANT,
            payload: {
                productId: productId,
                variantId: variantId
            }
        };
    };

    _exports.selectDeviceVariant = selectDeviceVariant;

    var setFixBroadbandTransaction = function setFixBroadbandTransaction(transaction) {
        return {
            type: ACTIONS.SET_FIX_BROADBAND_TRANSACTION,
            payload: {
                transaction: transaction
            }
        };
    };

    _exports.setFixBroadbandTransaction = setFixBroadbandTransaction;

    var setFixVoipTransaction = function setFixVoipTransaction(transaction) {
        return {
            type: ACTIONS.SET_FIX_VOIP_TRANSACTION,
            payload: {
                transaction: transaction
            }
        };
    };

    _exports.setFixVoipTransaction = setFixVoipTransaction;

    var setMobileTransaction = function setMobileTransaction(transaction, msisdn) {
        return {
            type: ACTIONS.SET_MOBILE_TRANSACTION,
            payload: {
                transaction: transaction,
                msisdn: msisdn
            }
        };
    };

    _exports.setMobileTransaction = setMobileTransaction;

    var setLoyaltyPeriod = function setLoyaltyPeriod(loyaltyPeriod) {
        return {
            type: ACTIONS.SET_LOYALTY_PERIOD,
            payload: {
                loyaltyPeriod: loyaltyPeriod
            }
        };
    };

    _exports.setLoyaltyPeriod = setLoyaltyPeriod;

    var setMagnumStore = function setMagnumStore(magnum) {
        return {
            type: ACTIONS.SET_MAGNUM_STORE,
            payload: {
                magnum: magnum
            }
        };
    };

    _exports.setMagnumStore = setMagnumStore;

    var setAvailableBundleTypes = function setAvailableBundleTypes(availableBundleTypes) {
        return {
            type: ACTIONS.SET_AVAILABLE_BUNDLE_TYPES,
            payload: {
                availableBundleTypes: availableBundleTypes
            }
        };
    };

    _exports.setAvailableBundleTypes = setAvailableBundleTypes;

    var searchCustomerPerformed = function searchCustomerPerformed() {
        return {
            type: ACTIONS.CUSTOMER_SEARCHED
        };
    };

    _exports.searchCustomerPerformed = searchCustomerPerformed;

    var showForceSearchCustomer = function showForceSearchCustomer() {
        return {
            type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
        };
    };

    _exports.showForceSearchCustomer = showForceSearchCustomer;

    var closeForceSearchCustomer = function closeForceSearchCustomer() {
        return {
            type: ACTIONS.CLOSE_CUSTOMER_SEARCHED_MODAL
        };
    };

    _exports.closeForceSearchCustomer = closeForceSearchCustomer;

    var showForceSearchModal = function showForceSearchModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
            });
        };
    };

    _exports.showForceSearchModal = showForceSearchModal;

    var openWWTZipModal = function openWWTZipModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_WWT_ZIP_MODAL
            });
        };
    };

    _exports.openWWTZipModal = openWWTZipModal;

    var closeWWTZipModal = function closeWWTZipModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_WWT_ZIP_MODAL
            });
        };
    };

    _exports.closeWWTZipModal = closeWWTZipModal;

    var fillMissingZipCode = function fillMissingZipCode(zip) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.FILL_MISSING_ZIP_CODE,
                payload: {
                    zip: zip
                }
            });
        };
    };

    _exports.fillMissingZipCode = fillMissingZipCode;

    var showOnlyFTTH = function showOnlyFTTH(_showOnlyFTTH) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_ONLY_FTTH,
                payload: _showOnlyFTTH
            });
        };
    };

    _exports.showOnlyFTTH = showOnlyFTTH;
    var fetchDocumentsListActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.fetchDocumentsList);
    _exports.fetchDocumentsListActions = fetchDocumentsListActions;
    var fetchPropositionListActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.fetchPropositionList);
    _exports.fetchPropositionListActions = fetchPropositionListActions;
    var fetchDeviceListActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.fetchDeviceList);
    _exports.fetchDeviceListActions = fetchDeviceListActions;
    var fetchPossibleTransactions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.fetchPossibleTransactions);
    _exports.fetchPossibleTransactions = fetchPossibleTransactions;
});
//# sourceMappingURL=magnum.js.map