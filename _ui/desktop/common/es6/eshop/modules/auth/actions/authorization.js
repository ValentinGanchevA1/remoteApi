import * as ACTIONS from "../actionTypes";
import * as CONFIG_ACTIONS from "eshop/modules/configurator/actionTypes";
import FixRemoteApi from "eshop/modules/fix/remoteApi";
import {
    addToCart,
    addInstallmentSalesOfGoodsToCart
} from "eshop/modules/configurator/actions/cart";
import {
    getClientContext,
    getMarketContext,
    getSelectedProcessTypeValue,
} from "eshop/modules/configurator/selectors/filters";
import {
    addToCartAfterAuth,
    getAuthorizationForAccountIdentifyModalVisibility,
    getAuthorizationForProcessModalVisibility,
    getIsOnlineCookie,
    getLoggedCustomerData,
    getSalesChannel,
    isCartChanged,
    getWwwCimIdBasedOfferSelectorProcesses,
    getLovePaths,
    getMSISDN,
    getStayLoveRetentionMSISDN,
    isLovePage,
} from "eshop/modules/auth/selectors/authorization";
import {
    bodyLoaderHide,
    bodyLoaderShow,
    dismissAuthErrors,
    dismissCvErrors,
    doCheckoutStepNoRedirect,
    processChanged,
} from "eshop/modules/checkout/actions/app";
import {
    getIsCustomerDataStep,
    shouldShowModalAfterProcessChanged
} from "eshop/modules/checkout/selectors";
import {
    isCartFix
} from "eshop/modules/cart/selectors"

import {
    clearCartCustomerRequested,
    requestCartCustomerData,
    subscribeCustomerSelected,
} from "eshop/modules/checkout/actions/data";

import {
    requestLoggedCustomerData
} from "eshop/modules/auth/actions/api";
import {
    fetchCart,
    fetchMiniCart
} from "eshop/modules/cart/actions/cart";
import {
    whenAvailable
} from "eshop/modules/checkout/utils/utils";
import {
    updateAddress
} from "eshop/modules/fix/actions/wwt"
import {
    isLandingPage,
    isPreLandingPage
} from "eshop/modules/fix/selectors/root";
import {
    hasRetention
} from "eshop/modules/cart/selectors";
import {
    setOfferType
} from "eshop/modules/simfree/actions/app"
import {
    isProductDetailsPage,
    isProductListPage,
    isAccessoryListPage
} from "eshop/modules/simfree/selectors"


import {
    searchCustomerPerformed,
} from "eshop/modules/magnum2/actions/magnum";
import {
    wasSearchCustomerPerformed
} from "eshop/modules/magnum2/selectors"
import {
    getSelectedSoftBundleGroup
} from "eshop/modules/simfree/selectors";
import {
    isLogged
} from "../selectors/authorization";
import TransactionProcessType from "../../core/constants/TransactionProcessTypeEnum";
import ShowSectionName from "../../core/constants/ShowSectionNameEnum";
import {
    getSelectedOfferType
} from "../../configurator/selectors/filters";
import OfferType from "../../core/constants/OfferTypeEnum";
import {
    isDuet
} from "eshop/modules/simfree/selectors";

const loveLeadProcess = getState => {
    return getMarketContext(getState()) === "B2B" &&
        !isLogged(getState()) &&
        getSelectedProcessTypeValue(getState()) !== TransactionProcessType.RETENTION &&
        getSelectedOfferType(getState()) === OfferType.VOICE_LDF &&
        (isLovePage() || isProductListPage() || isProductDetailsPage() || isAccessoryListPage());
};

export const doSmsAuthorization = () => (dispatch, getState) => {
    let isWWW = "WWW" === getSalesChannel(getState());
    let clientContext = getClientContext(getState());
    let process = getSelectedProcessTypeValue(getState());
    let loggedData = getLoggedCustomerData(getState());
    console.log(loggedData);
    let isAccountSelected = loggedData && loggedData.accountCode;
    let isOnlineCookie = loggedData && loggedData.isOnlineCookie;
    let isCartEmpty = loggedData ? loggedData.isCartEmpty : true;

    let authorizationRequired = false;
    console.log("Authorization routine:");
    console.log("Process=", process);
    console.log("isAccountSelected:", isAccountSelected);
    console.log("clientContext:", clientContext);
    console.log("isCartEmpty:", isCartEmpty);
    console.log("isOnlineCookie:", isOnlineCookie);
    console.log("getAuthorizationForProcessModalVisibility");
    console.log(getAuthorizationForProcessModalVisibility(getState()));
    console.log(loggedData);
    dispatch({
        type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
        value: true
    });
    if (getStayLoveRetentionMSISDN(getState())) {
        dispatch(addToCart());
        return;
    }



    if (isWWW) {
        if (process === TransactionProcessType.MNP ||
            process === TransactionProcessType.MIGRATION_PRE_POST ||
            process === TransactionProcessType.MIGRATION_NJU_POST_TO_POST ||
            process === TransactionProcessType.RETENTION) { //auth check
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_ON
            });
            dispatch(setShowSection(ShowSectionName.MSISDN));
            authorizationRequired = true
        }
        if (loveLeadProcess(getState)) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            });
            dispatch(setShowSection(ShowSectionName.CHECK_IS_CUSTOMER));
            authorizationRequired = true;
            return;
        }
        console.log("authorizationRequired:", authorizationRequired);
        if ((
                clientContext && !isDuet(getState()) ||
                isOnlineCookie ||
                process === TransactionProcessType.INSTALMENT_SALES_OF_GOODS
            ) &&
            (
                !isAccountSelected ||
                process === TransactionProcessType.INSTALMENT_SALES_OF_GOODS &&
                isAccountSelected === "0"
            )) {
            if (
                process === TransactionProcessType.MNP ||
                process === TransactionProcessType.MIGRATION_PRE_POST ||
                process === TransactionProcessType.MIGRATION_NJU_POST_TO_POST ||
                process === TransactionProcessType.ACTIVATION ||
                process === TransactionProcessType.INSTALMENT_SALES_OF_GOODS
            ) { //account check
                authorizationRequired = true;
                if (!isOnlineCookie) {
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                    });
                    dispatch(setShowSection(ShowSectionName.MSISDN));
                } else {
                    if (!getAuthorizationForProcessModalVisibility(getState()))
                        dispatch(showMobileAccountSelection());
                }
            }
        }
    }
    if (!authorizationRequired) {
        if (process === TransactionProcessType.INSTALMENT_SALES_OF_GOODS) {
            dispatch(addInstallmentSalesOfGoodsToCart());
        } else {
            dispatch(addToCart());
        }
    }
};

const isProcessWithAccountVerification = process => {
    return process === TransactionProcessType.MNP ||
        process === TransactionProcessType.MIGRATION_PRE_POST ||
        process === TransactionProcessType.ACTIVATION ||
        process === TransactionProcessType.INSTALMENT_SALES_OF_GOODS;
};

export const doSmsAccountVerification = () => (dispatch, getState) => {
    let clientContext = getClientContext(getState());
    let process = getSelectedProcessTypeValue(getState());
    let loggedData = getLoggedCustomerData(getState());
    let isAccountSelected = loggedData && loggedData.accountCode;
    let isOnlineCookie = loggedData && loggedData.isOnlineCookie;

    dispatch({
        type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
        value: true
    });
    if ((clientContext || isOnlineCookie) && !isAccountSelected && isProcessWithAccountVerification(process)) { //account check
        if (!isOnlineCookie) {
            dispatch({
                type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            });
            dispatch(setShowSection(ShowSectionName.MSISDN));
        } else {
            if (!getAuthorizationForProcessModalVisibility(getState())) {
                dispatch(showMobileAccountSelection());
            }
        }
    } else {
        dispatch(addToCart());
    }
};

export const setPeselAndAddressVerificationEnabled = isEnabled => dispatch => {
    dispatch({
        type: ACTIONS.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED,
        isEnabled
    })
};

export const doRegisterBillingAccountPopupB2B = () => (dispatch) => {
    dispatch({
        type: ACTIONS.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B
    });
};

export const registerBillingAccountPopupToPubSub = () => (dispatch, getState) => {
    whenAvailable("PubSub", () => {
        console.log("registerBillingAccountPopupToPubSub");

        PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.NotFound", () => {
            console.log("Customer not found");
            if (wasSearchCustomerPerformed(getState())) {
                dispatch({
                    type: CONFIG_ACTIONS.CUSTOMER_SELECTED
                });
            }
            dispatch(requestLoggedCustomerData());
            dispatch(fetchMiniCart());
            dispatch(fetchCart());
            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, 'header');


        });
        PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.Search", () => {
            dispatch(searchCustomerPerformed());
            dispatch(requestLoggedCustomerData());
            dispatch(fetchMiniCart());
            dispatch(fetchCart());
            OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, 'header');
        });
        dispatch(doRegisterBillingAccountPopupB2B());
        dispatch(subscribeCustomerSelected());
    });
};

export const showMobileAccountSelection = () => (dispatch, getState) => {
    console.log("showMobileAccountSelection");
    if (hasRetention(getState())) {
        dispatch(showRetentionAlertModal());
        return;
    }
    dispatch({
        type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_ON
    });
    dispatch(setShowSection(ShowSectionName.ACCOUNT));
};

export const showMobileAccountChange = () => (dispatch, getState) => {
    console.log("showMobileAccountChange");
    if (hasRetention(getState())) {
        console.log("showRetentionAlertModal");
        dispatch(showRetentionAlertModal());
    } else {
        dispatch(showMobileAccountSelection());
    }
};


export const setMSISDN = msisdn => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_MSISDN_OR_LOGIN,
        msisdn
    })

};
export const logIn = () => (dispatch, getState) => {
    dispatch(chooseExistingAccount(false));
    dispatch(setShowSection(ShowSectionName.MSISDN));
    dispatch({
        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
    });
};
export const safeLogOut = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON
    })
};
export const hideLogoutConfirmationModal = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF
    })

};

export const showRetentionAlertModal = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_ON
    })
};

export const hideProcessAlertModal = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF
    })
};

export const setSelectedBillingAccountId = accountId => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_ID,
        accountId: accountId,
    });
    dispatch(requestLoggedCustomerData());

};

export const showMessage = msg => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SHOW_MESSAGE,
        msg: {
            text: msg,
            type: "info",
        },
    })
};
export const showError = msg => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SHOW_MESSAGE,
        msg: {
            text: msg,
            type: "error",
        },
    })
};

export const setShowSection = section => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_SHOW_SECTION,
        section,
    })
};
export const showProgress = msg => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SHOW_MESSAGE,
        msg: {
            text: msg,
            type: "progress",
        },
    })
};
export const clearMessage = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SHOW_MESSAGE,
        msg: ""
    })
};
export const setIsLoading = isLoading => (dispatch, getState) => {
    if (isLoading)
        dispatch({
            type: ACTIONS.AUTHORIZATION_IS_LOADING_ON,
        });
    else
        dispatch({
            type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF,
        })
};
//isMarketIncompatible?? first arg
export const setIncompatibleMarket = (incompatibleMarket, market) => (dispatch, getState) => {
    if (incompatibleMarket)
        dispatch({
            type: ACTIONS.MARKET_IS_INCOMPATIBLE,
            payload: market,
        });
    else
        dispatch({
            type: ACTIONS.MARKET_IS_COMPATIBLE,
        })
};
export const ommitAccountAuth = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
    });
    dispatch(setIsLoading(false));
    dispatch(showMessage(""));
    dispatch({
        type: CONFIG_ACTIONS.CLIENT_CONTEXT_DISABLED
    });
    dispatch(addToCart());

};


export const clearStayLoveRetentionMSISDN = () => dispatch => {
    dispatch({
        type: CONFIG_ACTIONS.USE_DEFAULT_PROCESS,
        use: true
    });
    dispatch({
        type: CONFIG_ACTIONS.USE_DEFAULT_LOYALTY,
        use: true
    });
    dispatch({
        type: ACTIONS.STAY_LOVE_RETENTION_MSISDN,
        msisdn: ""
    });

};
export const stayLove = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.STAY_LOVE_RETENTION_MSISDN,
        msisdn: getMSISDN(getState())
    });
    if (isProductListPage(getState()) || isProductDetailsPage(getState()) || isAccessoryListPage(getState())) {
        //zmiana kontekstu oferty
        dispatch({
            type: CONFIG_ACTIONS.USE_DEFAULT_PROCESS,
            use: false
        });
        dispatch({
            type: CONFIG_ACTIONS.USE_DEFAULT_LOYALTY,
            use: false
        });
        dispatch(setOfferType("VOICE_LDF"));
        dispatch({
            type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
            value: false
        });
        dispatch(authorizationSuccess());
        return;
    }
    const lovePaths = getLovePaths();
    window.location.pathname = lovePaths[0];


};
const isStayLoveQuestionNecessary = (account, sbg) => {
    console.log("STAY LOVE? ", account);
    return account && account.hasLove && sbg !== "LDF";

};
export const authorizationSuccess = (continueWithODF = false, account = null) => (dispatch, getState) => {
    console.log("authorizationSuccess", continueWithODF);
    console.log("authorizationSuccess", account);
    dispatch(dismissAuthErrors());
    dispatch(clearMessage());
    dispatch(setIsLoading(false));
    if (!continueWithODF && isStayLoveQuestionNecessary(account, getSelectedSoftBundleGroup(getState()))) {
        dispatch(setShowSection(ShowSectionName.STAY_LOVE));

        return;
    }
    dispatch({
        type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
    });

    if (!getAuthorizationForAccountIdentifyModalVisibility(getState()) || getWwwCimIdBasedOfferSelectorProcesses().includes(getSelectedProcessTypeValue(getState()))) {
        dispatch({
            type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
        });
        if (addToCartAfterAuth(getState())) {
            dispatch(addToCart());
        }
        dispatch({
            type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
            value: false
        });

    } else {
        dispatch(setShowSection(ShowSectionName.MSISDN));

    }
};
export const accountIdentifySuccess = () => (dispatch, getState) => {
    console.log("Konto znalezione");
    OPL.UI.fire('modules.header.reloadRightMenu');
    dispatch(setIsLoading(false));
    dispatch(clearMessage());

    dispatch({
        type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
    });
    dispatch({
        type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
    });
    dispatch(dismissAuthErrors());
    if (isLandingPage(getState()) && !isPreLandingPage(getState())) { //for fix
        dispatch(updateAddress({}, null, true));
    }
    if (addToCartAfterAuth(getState())) {

        console.log("AUTH SUCCESS addToCart");
        dispatch(addToCart());
        dispatch({
            type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
        });
        dispatch({
            type: ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER,
            value: false
        });
    } else {
        console.log("AUTH SUCCESS reloadCustomerInfo");
        dispatch({
            type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
        });
        dispatch(dismissCvErrors());
        dispatch({
            type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
        });
        dispatch(clearCartCustomerRequested());
        dispatch(requestLoggedCustomerData());
        dispatch(clearMessage());
        console.log("TU");
        const showProcessChangedModal = shouldShowModalAfterProcessChanged(getState());
        dispatch(requestCartCustomerData());
        if (showProcessChangedModal) {
            dispatch(setShowSection(ShowSectionName.FIX_PROCESS_CHANGED));
        }
    }
    dispatch(fetchMiniCart());
    dispatch(fetchCart());
};

export const chooseExistingAccount = useExisting => dispatch => {
    console.log("chooseExistingAccount ", useExisting);
    if (useExisting == "true") {
        dispatch({
            type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING
        });
    } else {
        dispatch({
            type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_NEW
        });
    }
};

export const closeAuthModal = () => dispatch => {
    dispatch({
        type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
    });
    dispatch({
        type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
    });
    dispatch({
        type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
    });
    dispatch({
        type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
    });
    dispatch({
        type: ACTIONS.SHOW_MESSAGE,
        msg: ""
    });
};
export const authorizationFailure = () => dispatch => {
    console.warn('authorization failed or canceled');
    dispatch(closeAuthModal());
};
export const accountChoosen = accountCode => dispatch => {
    console.log("accountChoosen ", accountCode);
    dispatch(closeAuthModal());
};

export const setAccountByMsisdn = account => dispatch => {
    console.log("setAccountByMsisdn");
    dispatch({
        type: ACTIONS.SET_ACCOUNT_BY_MSISDN,
        account
    });
};

export const setSalesChannel = channel => dispatch => {
    dispatch({
        type: ACTIONS.SET_SALES_CHANNEL,
        channel
    });
};