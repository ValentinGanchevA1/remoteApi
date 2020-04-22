import RemoteApi from "../remoteApi";
import * as ACTIONS from "../actionTypes";
import {
    updateAddress
} from "./wwt";
import {
    removeFromCart
} from "eshop/modules/cart/actions/cart";
import * as SESSION from "../sessionAttributes";
import {
    duplicateOrderCalled,
    getCartSummarySearchCustomerDone,
    getLPSearchCustomerDone,
    marketSegment
} from "../selectors/root";
import {
    whenAvailable
} from "eshop/modules/checkout/utils/utils";
import OnlineUtils from "../../../utils/OnlineUtils";
import MarketSegment from "../../core/enum/MarketSegment";
import CustomerType from "../../core/enum/CustomerType";
import EcareEvent from "../../core/enum/EcareEvent";
import {
    openErrorModal
} from "./errors";

export const customerServicesListIsLoading = (bool) => ({
    type: ACTIONS.CUSTOMER_SERVICES_LIST_IS_LOADING,
    isLoading: bool
});

export const customerServicesListIsEmpty = (bool) => ({
    type: ACTIONS.CUSTOMER_SERVICES_LIST_IS_EMPTY,
    isEmpty: bool
});

export const getOnlyNeededAddressData = (addressData) => {
    const address = {};
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

export const getMigrationMode = (bundleTypes) => (dispatch) => {
    RemoteApi.getMigrationMode(bundleTypes)
        .then(response => {
            dispatch({
                type: ACTIONS.MIGRATION_MODE,
                payload: response
            });
        });
};

export const getCustomerServiceList = () => (dispatch) => {
    dispatch(customerServicesListIsEmpty(false));
    dispatch(customerServicesListIsLoading(true));
    RemoteApi.getCustomerServiceList()
        .then(response => {
            if (howManyAddresses(response) === 0) {
                dispatch(customerServicesListIsEmpty(true));
            } else if (howManyAddresses(response) === 1 &&
                howManyServicesForChosenAddress(response[0]) === 0) {
                dispatch(customerServicesListIsEmpty(true));
                dispatch(updateAddress(getOnlyNeededAddressData(response[0].addressData)));
            }
            dispatch({
                type: ACTIONS.GET_CUSTOMER_SERVICES_LIST,
                payload: response
            });
            dispatch(customerServicesListIsLoading(false));
        });
};

function howManyAddresses(response) {
    return response.length;
}

function howManyServicesForChosenAddress(responseAddress) {
    return responseAddress.serviceBundles.length;
}

export const redirectOnCustomerSearch = () => (dispatch, getState) => {
    whenAvailable("PubSub", () => {
        PubSub.subscribe(EcareEvent.SEARCH, function() {
            sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
            dispatch(cartSummarySearchCustomerIsDone());
        });
        PubSub.subscribe(EcareEvent.NOT_FOUND, function() {
            if (getCartSummarySearchCustomerDone(getState())) {
                sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
                dispatch(showCustomerSelectedModal());
                setTimeout(function() {
                    window.location.href = OnlineUtils.getLastViewedOfferPage();
                }, 3000);
            }
        });
        PubSub.subscribe(EcareEvent.CUSTOMER_SELECTED, function() {
            if (getCartSummarySearchCustomerDone(getState())) {
                dispatch(showCustomerSelectedModal());
                setTimeout(function() {
                    window.location.href = OnlineUtils.getLastViewedOfferPage();
                }, 3000);
            }
        });
    });
};

export const lpSearchCustomerIsDone = (payload) => (dispatch) => {
    dispatch({
        type: ACTIONS.LP_SEARCH_CUSTOMER_DONE,
        payload
    });
};

export const subscribeSearchCustomer = () => (dispatch, getState) => {
    whenAvailable("PubSub", () => {
            PubSub.subscribe(EcareEvent.SEARCH, () => {
                sessionStorage.removeItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR);
                dispatch(lpSearchCustomerIsDone(true));
            });
            PubSub.subscribe(EcareEvent.NOT_FOUND, () => {
                if (getLPSearchCustomerDone(getState())) {
                    dispatch(lpSearchCustomerIsDone(false));
                    location.reload(true);
                }
            });
            PubSub.subscribe(EcareEvent.CUSTOMER_SELECTED_DATA, (event, customerData) => {
                const {
                    cimId,
                    customerType
                } = customerData;
                if (MarketSegment.isB2B(marketSegment(getState())) ^ customerType === CustomerType.ORGANIZATION) {
                    dispatch(openErrorModal("Error1000"));
                    return;
                }
                if (getLPSearchCustomerDone(getState())) {
                    dispatch(lpSearchCustomerIsDone(false));
                    location.reload(true);
                }
            });
        },
        dispatch);
};

export const showCustomerSelectedModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_CUSTOMER_SELECTED_MODAL_ACTION
    });
};

export const closeCustomerSelectedModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION
    });
};


export const closeForceSearchModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_FORCE_SEARCH_MODAL_ACTION
    });
};

export const showForceSearchModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
    });
};

export const cartSummarySearchCustomerIsDone = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CART_SUMMARY_SEARCH_CUSTOMER_DONE
    });
};

export const resetDuplicateOrder = () => (dispatch) => {
    dispatch({
        type: ACTIONS.DUPLICATE_ORDER_RESET
    });
};

export const checkDuplicateOrderNoCache = (addressObject) => (dispatch, getState) => {

    dispatch({
        type: ACTIONS.DUPLICATE_ORDER_FETCHING
    });

    RemoteApi.getDuplicateOrdersNoCache(addressObject)
        .then(response => dispatch(handleDuplicateOrderResponse(response)))
        .catch(error => {
            console.error("error in duplicate order component", error);
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_FETCHED
            });
        });
};

export const checkDuplicateOrder = (addressObject) => (dispatch, getState) => {

    dispatch({
        type: ACTIONS.DUPLICATE_ORDER_FETCHING
    });

    RemoteApi.getDuplicateOrders(addressObject)
        .then(response => dispatch(handleDuplicateOrderResponse(response)))
        .catch(error => {
            console.error("error in duplicate order component", error);
            dispatch({
                type: ACTIONS.DUPLICATE_ORDER_FETCHED
            });
        });
};

const handleDuplicateOrderResponse = (response) => (dispatch, getState) => {
    if (response != null && response.duplicateOrderInfo != null && response.requestOrderProcessGroup) {

        //isMigration
        let isMigration = (response.requestOrderProcessGroup === "MIGRATION_GROUP") || (response.requestOrderProcessGroup === "ASSIGNMENT_GROUP");

        //orderDetails
        let duplicateOrder = {
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

export const duplicateOrderModalState = (isModalOpened) => (dispatch) => {

    dispatch({
        type: ACTIONS.DUPLICATE_ORDER_IS_MODAL_OPENED,
        payload: isModalOpened
    });

}

export const openWwtValidationModal = (state, message) => (dispatch) => {

    dispatch({
        type: ACTIONS.WWT_VALIDATION_MODAL_MESSAGE,
        payload: message
    });

    dispatch({
        type: ACTIONS.WWT_VALIDATION_MODAL,
        payload: state
    });

}

export const setSalesChannel = (salesChannel) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_SALES_CHANNEL,
        payload: salesChannel
    })
}

export const createLead = () => () => {
    window.location = '/deklaracja';
};