import * as ACTIONS from '../actionTypes';
import MarketSegment from "../../core/enum/MarketSegment";

const knaModalDefaultState = {
    registered: false,
    open: false
};

const defaultLoadingState = {
    offers: false,
    voipModal: false,
    voipNumbers: false,
    serviceDetails: false,
    duplicates: false,
    customerServices: false,
    cartModification: false,
    checkingPickup: false
};

export const loading = (loading = defaultLoadingState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_OFFERS_START:
            return {
                ...loading, offers: true
            };
        case ACTIONS.VOIP_START_LOADING_MODAL_ACTION:
            return {
                ...loading, voip: true
            };
        case ACTIONS.SERVICE_DETAILS_FETCHING:
            return {
                ...loading, serviceDetails: true
            };
        case ACTIONS.DUPLICATE_ORDER_FETCHING:
            return {
                ...loading, duplicates: true
            };
        case ACTIONS.PROMOTION_IS_AVAILABLE_START:
            return {
                ...loading, promotion: true
            };
        case ACTIONS.VOIP_STOP_LOADING_MODAL_ACTION:
            return {
                ...loading, voip: false
            };
        case ACTIONS.FETCH_OFFERS:
        case ACTIONS.FETCH_OFFERS_STOP:
            return {
                ...loading, offers: false
            };
        case ACTIONS.SERVICE_DETAILS_FETCHED:
            return {
                ...loading, serviceDetails: false
            };
        case ACTIONS.DUPLICATE_ORDER_FETCHED:
            return {
                ...loading, duplicates: false
            };
        case ACTIONS.PROMOTION_IS_AVAILABLE_LOADED:
            return {
                ...loading, promotion: false
            };
        case ACTIONS.CUSTOMER_SERVICES_LIST_IS_LOADING:
            return {
                ...loading, customerServices: action.isLoading
            };
        case ACTIONS.CART_MOD_LOADING:
            return {
                ...loading, cartModification: action.payload
            };
        case ACTIONS.CHECK_PICKUP_STARTED:
            return {
                ...loading, checkingPickup: true
            };
        case ACTIONS.CHECK_PICKUP_DONE:
            return {
                ...loading, checkingPickup: false
            };
        default:
            return loading;
    }
};

export const migrationDataClear = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_DATA_CLEAR:
            return true;
        default:
            return state;
    }
};

export const verifyIfServiceListsEmpty = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CUSTOMER_SERVICES_LIST_IS_EMPTY:
            return action.isEmpty;
        default:
            return state;
    }
};

export const knaModalState = (state = knaModalDefaultState, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_KNA_MODAL_ACTION:
            return {
                ...state, open: true
            };
        case ACTIONS.CLOSE_KNA_MODAL_ACTION:
            return {
                ...state, open: false
            };
        case ACTIONS.REGISTER_KNA_MODAL_ACTION:
            return {
                ...state, registered: true
            };
        default:
            return state;
    }
};

export const forceSearchModalIsShow = (forceSearchModalIsShow = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION:
            return true;
        case ACTIONS.CLOSE_FORCE_SEARCH_MODAL_ACTION:
            return false;
        default:
            return forceSearchModalIsShow;
    }
}

export const isAfterWWT = (isAfterWWT = false, action) => {
    switch (action.type) {
        case ACTIONS.BEFORE_WWT:
            return false;
        case ACTIONS.AFTER_WWT:
            return true;
        default:
            return isAfterWWT;
    }
}
export const showWwtComponent = (showWwtComponent = true, action) => {
    switch (action.type) {
        case ACTIONS.HIDE_WWT_COMPONENT:
            return false;
        case ACTIONS.SHOW_WWT_COMPONENT:
            return true;
        default:
            return showWwtComponent;
    }
};
export const showWWTModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_WWT_MODAL:
            return true;

        case ACTIONS.AFTER_WWT:
        case ACTIONS.HIDE_WWT_MODAL:
            return false;
        default:
            return state;
    }
}
export const redirectUrlAfterWWT = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_REDIRECT_URL_AFTER_WWT:
            return action.url;
        default:
            return state;
    }

}
export const forceAfterWWT = (forceAfterWWT = false, action) => {
    switch (action.type) {
        case ACTIONS.FORCE_AFTER_WWT:
            return action.payload;
        default:
            return forceAfterWWT;
    }
};

export const shouldBeRenderedPaymentLinkComponent = (shouldBeRenderedPaymentLinkComponent = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_PAYMENT_LINK_COMPONENT:
            return true;
        case ACTIONS.HIDE_PAYMENT_LINK_COMPONENT:
            return false;
        default:
            return shouldBeRenderedPaymentLinkComponent;
    }
}

export const wwtAddress = (wwtAddress = {}, action) => {
    switch (action.type) {
        case ACTIONS.SAVE_WWT_ADDRESS:
            return action.payload;
        default:
            return wwtAddress;
    }
}

export const selectedLoyalty = (selectedLoyalty = 24, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_LOYALTY:
            if (action.payload) {
                return action.payload;
            } else {
                return 24;
            }

            default:
                return selectedLoyalty;
    }
}

export const customerSelectedModalIsShow = (customerSelectedModalIsShow = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_CUSTOMER_SELECTED_MODAL_ACTION:
            return true;
        case ACTIONS.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION:
            return false;
        default:
            return customerSelectedModalIsShow;

    }
};

export const isAfterSearchCustomer = (isAfterSearchCustomer = false, action) => {
    switch (action.type) {
        case ACTIONS.AFTER_SEARCH_CUSTOMER:
            return action.payload;
        default:
            return isAfterSearchCustomer;
    }
};

export const marketSegment = (marketSegment = MarketSegment.B2C, action) => {
    switch (action.type) {
        case ACTIONS.MARKET_SEGMENT:
            return action.payload;
        default:
            return marketSegment;
    }
};

export const showNetPrices = (showNetPrices = false, action) => {
    switch (action.type) {
        case ACTIONS.MARKET_SEGMENT:
            return MarketSegment.isB2B(action.payload);
        default:
            return showNetPrices;
    }
};

//TODO move to voip
export const voipModalComponentIsMounted = (voipModalComponentIsMounted = false, action) => {
    switch (action.type) {
        case ACTIONS.MOUNT_VOIP_MODAL_COMPONENT_ACTION:
            return true;
        default:
            return voipModalComponentIsMounted;
    }
};

export const cartSummarySearchCustomerDone = (cartSummarySearchCustomerDone = false, action) => {
    switch (action.type) {
        case ACTIONS.CART_SUMMARY_SEARCH_CUSTOMER_DONE:
            return true;
        default:
            return cartSummarySearchCustomerDone;
    }
};

export const lpSearchCustomerDone = (lpSearchCustomerDone = false, action) => {
    switch (action.type) {
        case ACTIONS.LP_SEARCH_CUSTOMER_DONE:
            return action.payload;
        default:
            return lpSearchCustomerDone;
    }
};


export const isDuplicateOrder = (isDuplicateOrder = false, action) => {
    switch (action.type) {
        case ACTIONS.IS_DUPLICATE_ORDER:
            return action.payload;
        default:
            return isDuplicateOrder;
    }
};

export const hasAccessRoleToProcessDuplicateOrder = (hasAccessRoleToProcessDuplicateOrder = false, action) => {
    switch (action.type) {
        case ACTIONS.HAS_ACCESS_ROLE_TO_PROCESS_DUPLICATE_ORDER:
            return action.payload;
        default:
            return hasAccessRoleToProcessDuplicateOrder;
    }
};

export const duplicateOrderIsModalOpened = (duplicateOrderIsModalOpened = false, action) => {
    switch (action.type) {
        case ACTIONS.DUPLICATE_ORDER_IS_MODAL_OPENED:
            return action.payload;
        default:
            return duplicateOrderIsModalOpened;
    }
};

export const duplicateOrderDetails = (duplicateOrderDetails = {
    orderNumber: "",
    serviceName: ""
}, action) => {
    switch (action.type) {
        case ACTIONS.DUPLICATE_ORDER_DETAILS:
            return action.payload;
        default:
            return duplicateOrderDetails;
    }
};


export const isMigration = (isMigration = false, action) => {
    switch (action.type) {
        case ACTIONS.IS_MIGRATION:
            return action.payload;
        default:
            return isMigration;
    }
};

export const duplicateOrderCalled = (duplicateOrderCalled = false, action) => {
    switch (action.type) {
        case ACTIONS.DUPLICATE_ORDER_FETCHING:
            return true;
        case ACTIONS.DUPLICATE_ORDER_RESET:
            return false;
        default:
            return duplicateOrderCalled;
    }
};

export const wwtValidationModalState = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.WWT_VALIDATION_MODAL:
            return action.payload;
        default:
            return state;
    }
};

export const wwtValidationModalMessage = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.WWT_VALIDATION_MODAL_MESSAGE:
            return action.payload;
        default:
            return state;
    }
};

export const headerInfo = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_HEADERS:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

export const salesChannel = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SALES_CHANNEL:
            return action.payload;
        default:
            return state;
    }
}