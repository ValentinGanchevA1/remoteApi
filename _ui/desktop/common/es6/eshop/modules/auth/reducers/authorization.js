import {
    combineReducers
} from "redux";
import * as ACTIONS from "../actionTypes";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    DO_CHECKOUT_STEP_ERROR
} from "eshop/modules/checkout/actionTypes";

const getResults = (action) => action.results || [];

export var doRegisterBillingAccountPopupB2B = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B:
            return true;
        default:
            return state;
    }



}

export var stayLoveRetentionMSISDN = (state = OnlineUtils.loadFromSessionStorage("stayLoveRetentionMSISDN"), action) => {
    switch (action.type) {
        case ACTIONS.STAY_LOVE_RETENTION_MSISDN:
            OnlineUtils.saveInSessionStorage("stayLoveRetentionMSISDN", action.msisdn)
            return action.msisdn;
        default:
            return state;
    }

}


export var isPeselAndAddressVerificationEnabled = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED:
            return action.isEnabled;
        default:
            return state;
    }

}

export var isPeselAndAddressVerified = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.IS_PESEL_AND_ADDRESS_VERIFIED:
            return action.isVerified;
        default:
            return state;
    }

}

export var msisdn = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_MSISDN_OR_LOGIN:
            return action.msisdn;
        default:
            return state;
    }
}

export var retentionAlertModalOn = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_ON:
            return true
        case ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF:
            return false
        default:
            return state;
    }
}

export var addToCartAfterAuth = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER:
            return action.value

        default:
            return state;
    }
}

export var modalForProcessOn = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_ON:
            return true
        case ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF:
            return false
        default:
            return state;
    }
}

export var modalForAccountIdentifyOn = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON:
            return true
        case ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF:
            return false
        case DO_CHECKOUT_STEP_ERROR:
            if (getResults(action).filter(result => result.category === "AUTH").length)
                return true;
            return state;
        default:
            return state;
    }
}
export var modalForAccountSelectionOn = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_ON:
            return true
        case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
        case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF:
            return false
        default:
            return state;
    }
};
export var billingAccountChangeOn = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_ON:
            return true
        case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
            return false
        default:
            return state;
    }
};
export var chosenExistingAccount = (state = true, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING:
            return true
        case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_NEW:
            return false
        default:
            return state;
    }
};

export var isLoading = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_IS_LOADING_ON:
            return true
        case ACTIONS.AUTHORIZATION_IS_LOADING_OFF:
            return false
        default:
            return state;
    }
};

export var incompatibleMarket = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.MARKET_IS_INCOMPATIBLE:
            return action.payload
        case ACTIONS.MARKET_IS_COMPATIBLE:
            return false
        default:
            return state;
    }
};

export var showSection = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_SHOW_SECTION:
            return action.section;
        default:
            return state;
    }
};

export var getMessage = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SHOW_MESSAGE:
            if (action.msg == undefined)
                return state;
            return action.msg;
        case ACTIONS.CLEAR_MESSAGE:
            return state;
        default:
            return state;
    }
};

export const loggedCustomerData = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
            if (action.payload == undefined) {
                return state;
            }
            console.log("loggedCustomerData", action.payload);
            return {
                ...action.payload, isCartChanged: (state && state.isCartChanged) || action.payload.isCartChanged
            };
        case ACTIONS.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG:
            return {
                ...state, isCartChanged: false
            };
        default:
            return state;
    }
};
export var billingAccountContractLimitExceeded = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
            if (action.payload && action.payload.status && action.payload.status == 422)
                return true;
            return false;
        default:
            return state;
    }
};
export var billingAccounts = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
            console.log("billingAccounts reducer", action.payload);
            if (action.payload == undefined || action.payload.status)
                return null;

            return action.payload;
        default:
            return state;
    }
};
export var selectedBillingAccountId = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_BILLING_ACCOUNT_ID:
            return action.accountId;
        case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
            if (action.payload == undefined)
                return state;
            return action.payload.accountId || "";
        default:
            return state;
    }
};
export var ommitAccountAuth = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_OMMIT_ACCOUNT_AUTH:
            return true;
        default:
            return state;
    }
};
export var showLogoutConfirmationModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON:
            return true;
        case ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF:
            return false;
        default:
            return state;
    }
};

export const accountByMsisdn = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.SET_ACCOUNT_BY_MSISDN:
            return {
                ...action.account, hasMagnumProduct: false
            };
        default:
            return state;
    }
};

export var salesChannel = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SALES_CHANNEL:
            return action.channel;
        default:
            return state;
    }
};

export default combineReducers({
    isLoading: isLoading,
    msisdn: msisdn,
    modalForProcessOn: modalForProcessOn,
    modalForAccountIdentifyOn: modalForAccountIdentifyOn,
    modalForAccountSelectionOn: modalForAccountSelectionOn,
    addToCartAfterAuth: addToCartAfterAuth,
    billingAccountChangeOn: billingAccountChangeOn,
    retentionAlertModalOn: retentionAlertModalOn,
    showSection: showSection,
    chosenExistingAccount: chosenExistingAccount,
    getMessage: getMessage,
    loggedCustomerData: loggedCustomerData,
    isPeselAndAddressVerificationEnabled,
    isPeselAndAddressVerified,
    billingAccountContractLimitExceeded: billingAccountContractLimitExceeded,
    billingAccounts: billingAccounts,
    accountByMsisdn,
    selectedBillingAccountId: selectedBillingAccountId,
    ommitAccountAuth: ommitAccountAuth,
    showLogoutConfirmationModal: showLogoutConfirmationModal,
    doRegisterBillingAccountPopupB2B: doRegisterBillingAccountPopupB2B,
    salesChannel,
    incompatibleMarket,
    stayLoveRetentionMSISDN,
});