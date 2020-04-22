define(["exports", "../remoteApi", "../actionTypes", "./wwt", "eshop/modules/cart/actions/cart", "../sessionAttributes", "../selectors/root", "eshop/modules/checkout/utils/utils", "../../../utils/OnlineUtils", "../../core/enum/MarketSegment", "../../core/enum/CustomerType", "../../core/enum/EcareEvent", "./errors"], function(_exports, _remoteApi, ACTIONS, _wwt, _cart, SESSION, _root, _utils, _OnlineUtils, _MarketSegment, _CustomerType, _EcareEvent, _errors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createLead = _exports.setSalesChannel = _exports.openWwtValidationModal = _exports.duplicateOrderModalState = _exports.checkDuplicateOrder = _exports.checkDuplicateOrderNoCache = _exports.resetDuplicateOrder = _exports.cartSummarySearchCustomerIsDone = _exports.showForceSearchModal = _exports.closeForceSearchModal = _exports.closeCustomerSelectedModal = _exports.showCustomerSelectedModal = _exports.subscribeSearchCustomer = _exports.lpSearchCustomerIsDone = _exports.redirectOnCustomerSearch = _exports.getCustomerServiceList = _exports.getMigrationMode = _exports.getOnlyNeededAddressData = _exports.customerServicesListIsEmpty = _exports.customerServicesListIsLoading = void 0;
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    SESSION = babelHelpers.interopRequireWildcard(SESSION);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _CustomerType = babelHelpers.interopRequireDefault(_CustomerType);
    _EcareEvent = babelHelpers.interopRequireDefault(_EcareEvent);

    var customerServicesListIsLoading = function customerServicesListIsLoading(bool) {
        return {
            type: ACTIONS.CUSTOMER_SERVICES_LIST_IS_LOADING,
            isLoading: bool
        };
    };

    _exports.customerServicesListIsLoading = customerServicesListIsLoading;

    var customerServicesListIsEmpty = function customerServicesListIsEmpty(bool) {
        return {
            type: ACTIONS.CUSTOMER_SERVICES_LIST_IS_EMPTY,
            isEmpty: bool
        };
    };

    _exports.customerServicesListIsEmpty = customerServicesListIsEmpty;

    var getOnlyNeededAddressData = function getOnlyNeededAddressData(addressData) {
        var address = {};
        address.preZipCode = addressData.preZipCode;
        address.postalCode = addressData.postalCode;
        address.zip = addressData.preZipCode + addressData.postalCode;
        address.cityName = addressData.town;
        address.cityId = addressData.cityId;
        address.streetName = addressData.line1;
        address.streetId = addressData.streetId;
        address.streetNumber = addressData.line2;
        address.apartmentNumber = addressData.appartmentNo;
        return address;
    };

    _exports.getOnlyNeededAddressData = getOnlyNeededAddressData;

    var getMigrationMode = function getMigrationMode(bundleTypes) {
        return function(dispatch) {
            _remoteApi.default.getMigrationMode(bundleTypes).then(function(response) {
                dispatch({
                    type: ACTIONS.MIGRATION_MODE,
                    payload: response
                });
            });
        };
    };

    _exports.getMigrationMode = getMigrationMode;

    var getCustomerServiceList = function getCustomerServiceList() {
        return function(dispatch) {
            dispatch(customerServicesListIsEmpty(false));
            dispatch(customerServicesListIsLoading(true));

            _remoteApi.default.getCustomerServiceList().then(function(response) {
                if (howManyAddresses(response) === 0) {
                    dispatch(customerServicesListIsEmpty(true));
                } else if (howManyAddresses(response) === 1 && howManyServicesForChosenAddress(response[0]) === 0) {
                    dispatch(customerServicesListIsEmpty(true));
                    dispatch((0, _wwt.updateAddress)(getOnlyNeededAddressData(response[0].addressData)));
                }

                dispatch({
                    type: ACTIONS.GET_CUSTOMER_SERVICES_LIST,
                    payload: response
                });
                dispatch(customerServicesListIsLoading(false));
            });
        };
    };

    _exports.getCustomerServiceList = getCustomerServiceList;

    function howManyAddresses(response) {
        return response.length;
    }

    function howManyServicesForChosenAddress(responseAddress) {
        return responseAddress.serviceBundles.length;
    }

    var redirectOnCustomerSearch = function redirectOnCustomerSearch() {
        return function(dispatch, getState) {
            (0, _utils.whenAvailable)("PubSub", function() {
                PubSub.subscribe(_EcareEvent.default.SEARCH, function() {
                    sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
                    dispatch(cartSummarySearchCustomerIsDone());
                });
                PubSub.subscribe(_EcareEvent.default.NOT_FOUND, function() {
                    if ((0, _root.getCartSummarySearchCustomerDone)(getState())) {
                        sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
                        dispatch(showCustomerSelectedModal());
                        setTimeout(function() {
                            window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
                        }, 3000);
                    }
                });
                PubSub.subscribe(_EcareEvent.default.CUSTOMER_SELECTED, function() {
                    if ((0, _root.getCartSummarySearchCustomerDone)(getState())) {
                        dispatch(showCustomerSelectedModal());
                        setTimeout(function() {
                            window.location.href = _OnlineUtils.default.getLastViewedOfferPage();
                        }, 3000);
                    }
                });
            });
        };
    };

    _exports.redirectOnCustomerSearch = redirectOnCustomerSearch;

    var lpSearchCustomerIsDone = function lpSearchCustomerIsDone(payload) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.LP_SEARCH_CUSTOMER_DONE,
                payload: payload
            });
        };
    };

    _exports.lpSearchCustomerIsDone = lpSearchCustomerIsDone;

    var subscribeSearchCustomer = function subscribeSearchCustomer() {
        return function(dispatch, getState) {
            (0, _utils.whenAvailable)("PubSub", function() {
                PubSub.subscribe(_EcareEvent.default.SEARCH, function() {
                    sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
                    dispatch(lpSearchCustomerIsDone(true));
                });
                PubSub.subscribe(_EcareEvent.default.NOT_FOUND, function() {
                    if ((0, _root.getLPSearchCustomerDone)(getState())) {
                        dispatch(lpSearchCustomerIsDone(false));
                        location.reload(true);
                    }
                });
                PubSub.subscribe(_EcareEvent.default.CUSTOMER_SELECTED_DATA, function(event, customerData) {
                    var cimId = customerData.cimId,
                        customerType = customerData.customerType;

                    if (_MarketSegment.default.isB2B((0, _root.marketSegment)(getState())) ^ customerType === _CustomerType.default.ORGANIZATION) {
                        dispatch((0, _errors.openErrorModal)("Error1000"));
                        return;
                    }

                    if ((0, _root.getLPSearchCustomerDone)(getState())) {
                        dispatch(lpSearchCustomerIsDone(false));
                        location.reload(true);
                    }
                });
            }, dispatch);
        };
    };

    _exports.subscribeSearchCustomer = subscribeSearchCustomer;

    var showCustomerSelectedModal = function showCustomerSelectedModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_CUSTOMER_SELECTED_MODAL_ACTION
            });
        };
    };

    _exports.showCustomerSelectedModal = showCustomerSelectedModal;

    var closeCustomerSelectedModal = function closeCustomerSelectedModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION
            });
        };
    };

    _exports.closeCustomerSelectedModal = closeCustomerSelectedModal;

    var closeForceSearchModal = function closeForceSearchModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_FORCE_SEARCH_MODAL_ACTION
            });
        };
    };

    _exports.closeForceSearchModal = closeForceSearchModal;

    var showForceSearchModal = function showForceSearchModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
            });
        };
    };

    _exports.showForceSearchModal = showForceSearchModal;

    var cartSummarySearchCustomerIsDone = function cartSummarySearchCustomerIsDone() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CART_SUMMARY_SEARCH_CUSTOMER_DONE
            });
        };
    };

    _exports.cartSummarySearchCustomerIsDone = cartSummarySearchCustomerIsDone;

    var resetDuplicateOrder = function resetDuplicateOrder() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_RESET
            });
        };
    };

    _exports.resetDuplicateOrder = resetDuplicateOrder;

    var checkDuplicateOrderNoCache = function checkDuplicateOrderNoCache(addressObject) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_FETCHING
            });

            _remoteApi.default.getDuplicateOrdersNoCache(addressObject).then(function(response) {
                return dispatch(handleDuplicateOrderResponse(response));
            }).catch(function(error) {
                console.error("error in duplicate order component", error);
                dispatch({
                    type: ACTIONS.DUPLICATE_ORDER_FETCHED
                });
            });
        };
    };

    _exports.checkDuplicateOrderNoCache = checkDuplicateOrderNoCache;

    var checkDuplicateOrder = function checkDuplicateOrder(addressObject) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_FETCHING
            });

            _remoteApi.default.getDuplicateOrders(addressObject).then(function(response) {
                return dispatch(handleDuplicateOrderResponse(response));
            }).catch(function(error) {
                console.error("error in duplicate order component", error);
                dispatch({
                    type: ACTIONS.DUPLICATE_ORDER_FETCHED
                });
            });
        };
    };

    _exports.checkDuplicateOrder = checkDuplicateOrder;

    var handleDuplicateOrderResponse = function handleDuplicateOrderResponse(response) {
        return function(dispatch, getState) {
            if (response != null && response.duplicateOrderInfo != null && response.requestOrderProcessGroup) {
                //isMigration
                var isMigration = response.requestOrderProcessGroup === "MIGRATION_GROUP" || response.requestOrderProcessGroup === "ASSIGNMENT_GROUP"; //orderDetails

                var duplicateOrder = {
                    orderNumber: response.duplicateOrderInfo.orderNumber,
                    serviceName: response.duplicateOrderInfo.orderType
                };
                setTimeout(function() {
                    dispatch({
                        type: ACTIONS.DUPLICATE_ORDER_IS_MODAL_OPENED,
                        payload: response.hasOpenOrder
                    });
                }, 500);
                dispatch({
                    type: ACTIONS.IS_DUPLICATE_ORDER,
                    payload: response.hasOpenOrder
                });
                dispatch({
                    type: ACTIONS.HAS_ACCESS_ROLE_TO_PROCESS_DUPLICATE_ORDER,
                    payload: response.hasAccessRoleToProcessDuplicateOrder
                });
                dispatch({
                    type: ACTIONS.DUPLICATE_ORDER_DETAILS,
                    payload: duplicateOrder
                });
                dispatch({
                    type: ACTIONS.IS_MIGRATION,
                    payload: isMigration
                });
            } else {
                dispatch({
                    type: ACTIONS.IS_DUPLICATE_ORDER,
                    payload: false
                });
            }

            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_FETCHED
            });
        };
    };

    var duplicateOrderModalState = function duplicateOrderModalState(isModalOpened) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_IS_MODAL_OPENED,
                payload: isModalOpened
            });
        };
    };

    _exports.duplicateOrderModalState = duplicateOrderModalState;

    var openWwtValidationModal = function openWwtValidationModal(state, message) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.WWT_VALIDATION_MODAL_MESSAGE,
                payload: message
            });
            dispatch({
                type: ACTIONS.WWT_VALIDATION_MODAL,
                payload: state
            });
        };
    };

    _exports.openWwtValidationModal = openWwtValidationModal;

    var setSalesChannel = function setSalesChannel(salesChannel) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SALES_CHANNEL,
                payload: salesChannel
            });
        };
    };

    _exports.setSalesChannel = setSalesChannel;

    var createLead = function createLead() {
        return function() {
            window.location = '/deklaracja';
        };
    };

    _exports.createLead = createLead;
});
//# sourceMappingURL=data.js.map