import RemoteApi from "eshop/modules/auth/remoteApi";
import * as ACTIONS from "eshop/modules/auth/actionTypes";
import * as CHECKOUT_ACTIONS from "eshop/modules/checkout/actionTypes";
import {
    accountIdentifySuccess,
    authorizationSuccess,
    clearMessage,
    closeAuthModal,
    setAccountByMsisdn,
    setIncompatibleMarket,
    setIsLoading,
    setShowSection,
    showError,
    showMessage,
    showMobileAccountSelection,
} from "eshop/modules/auth/actions/authorization";
import {
    fetchContractRole
} from "eshop/modules/configurator/actions/offers";
import {
    getSelectedProcessTypeValue
} from "eshop/modules/configurator/selectors/filters";
import {
    getIsCartStep,
    getIsCustomerDataStep,
    shouldShowModalAfterProcessChanged,
} from "eshop/modules/checkout/selectors";
import {
    getAccountSelectionModalVisibility,
    getBillingAccountChangeVisibility,
    getBillingAccountContractLimitExceeded,
    getBillingAccountsForSelection,
    getLoggedCustomerData,
    getLovePaths,
    getSalesChannel,
    getSelectedBillingAccountId,
    getWwwCimIdBasedOfferSelectorProcesses,
    isLovePage,
    isPeselAndAddressVerified
} from "eshop/modules/auth/selectors/authorization";
import {
    isLandingPage,
    isPreLandingPage
} from "eshop/modules/fix/selectors/root";
import {
    fetchCart,
    fetchMiniCart
} from "eshop/modules/cart/actions/cart";
import {
    getCartIsNet
} from "eshop/modules/cart/selectors";

import {
    gotoCartSummary,
    requestFBBServiceData,
    requestFBBServiceDataFilteredByWWT,
} from "eshop/modules/checkout/actions/app";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    getCurrentSelectedAvailableProductsKey,
    isAccessoryListPage,
    isProductDetailsPage,
    isProductListPage,
} from "eshop/modules/simfree/selectors";
import {
    createRequestActions
} from "../../core/utils/request-actions-creator";
import {
    isMobileBillingAccountsSet
} from "../../configurator/selectors/metaData";
import ShowSectionName from "../../core/constants/ShowSectionNameEnum";
import {
    hasLove,
    isLogged,
    isOdfPage
} from "../selectors/authorization";
import {
    setOfferType
} from "../../simfree/actions/app";
import {
    getDeliveryAndPaymentStep
} from "eshop/modules/checkout/selectors"

export const doLogOut = () => (dispatch, getState) => {
    RemoteApi.logOut()
        .catch(data => console.error(`Error while log out! Code: ${data.code}`))
        .then(data => {
            console.log(data);
            OnlineUtils.removePwaSuflerContextFromSession();

            const lastOfferPage = OnlineUtils.getLastViewedOfferPage();
            if (lastOfferPage && $("#offerTypeSelectionComponent").length) {
                window.location.href = lastOfferPage;
                return;
            }

            dispatch(gotoCartSummary());
        });
};


export const setPeselAndAddresVerified = isVerified => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.IS_PESEL_AND_ADDRESS_VERIFIED,
        isVerified
    })
};

export const backToAuthStartWithError = message => (dispatch, getState) => {
    dispatch(setIsLoading(false));
    dispatch(setShowSection(ShowSectionName.MSISDN));

    dispatch(showError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."));
    $("#msisdn").focus();
};

const pollIsPeselAndAddressVerified = timeout => (dispatch, getState) => {
    console.log("isPeselAndAddressVerifiedRequest  ");
    RemoteApi.isPeselAndAddressedVerified(timeout).then(
        response => {
            console.log(response);

            if (isErrorResponse(response)) {
                dispatch(setPeselAndAddresVerified(false));
            } else if (response == "false") {
                dispatch(setPeselAndAddresVerified(false));
                dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."))
            } else {
                dispatch(setPeselAndAddresVerified(true));
                dispatch(commonAfterLoginActions(response));
            }
            console.log("Pooling :", response);
        }
    ).catch(error => {
        dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."))
        console.log(error);
    });
};

let peselAuthorizationReguestId = "";
export const requestPeselAndAddressAuth = (simpleAddresPartial, pesel, timeout) => (dispatch, getState) => {
    dispatch(setShowSection(ShowSectionName.MSISDN));
    dispatch(setIsLoading(true));
    dispatch(showMessage("Trwa weryfikacja wprowadzonych danych."));
    RemoteApi.requestPeselAndAddressAuth(simpleAddresPartial, pesel, timeout).then(
        response => {
            if (isErrorResponse(response)) {
                dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."))
                return;
            }


            peselAuthorizationReguestId = response;
            dispatch(pollIsPeselAndAddressVerified(timeout));
            console.log("peselAuthorizationReguestId", response);
        }
    ).catch(error => {
        console.log(error);
        dispatch(backToAuthStartWithError("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz."))
    });
};

export const setAccounts =
    payload => ({
        type: ACTIONS.SET_BILLING_ACCOUNTS,
        payload: payload,
    });
export const requestMobileBillingAccounts = () => (dispatch, getState) => {
    dispatch(setIsLoading(true));
    RemoteApi.requestMobileBillingAccounts()
        .then(response => {
            dispatch({
                type: ACTIONS.SET_MOBILE_BILLING_ACCOUNTS,
                payload: response,
                meta: true,
            });
            dispatch(clearMessage());
            dispatch(setIsLoading(false));
            //TODO jeśli nie znaleziono kont to nowe
        }).catch(error => {
            console.error("Accounts NOT Found", error);
            dispatch(showError("Nie znaleziono kont"));
            dispatch(setIsLoading(false));
        });
};

export const requestMobileBillingAccountsAndChooseDefault = () => (dispatch, getState) => {

    if (getDeliveryAndPaymentStep(getState())) {
        return;
    }
    console.log("#################### requestMobileBillingAccountsAndChooseDefault");
    RemoteApi.requestMobileBillingAccounts()
        .then(response => {
            dispatch({
                type: ACTIONS.SET_MOBILE_BILLING_ACCOUNTS,
                payload: response,
                meta: true,
            });
            if (getLoggedCustomerData(getState()).accountCode == null) {
                if (response.length > 1 || getBillingAccountContractLimitExceeded(getState())) {
                    dispatch({
                        type: ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_ON
                    });
                    dispatch(showMobileAccountSelection());
                } else if (response.length === 1) {
                    dispatch(selectAccount(response[0].accountId, response[0].accountCode));

                } else {
                    dispatch(selectAccount("", ""));
                }
            }
            dispatch(setIsLoading(false));
        }).catch(error => {
            console.error("Accounts NOT Found", error);
            dispatch(showError("Nie znaleziono kont"));
            dispatch(setIsLoading(false));
        });
};

export const optionalRedirectToDifferentLP = () => (dispatch, getState) => {
    const accountId = getSelectedBillingAccountId(getState());
    if (!accountId) {
        return;
    }
    let account = getLoggedCustomerData(getState());
    if (isMobileBillingAccountsSet(getState())) {
        const accounts = getBillingAccountsForSelection(getState());
        account = (accounts || []).filter(a => a.accountId === accountId)[0];

        if (!account) {
            console.error("accountId unconsistency");
            return;
        }
    }
    //temporary disable redirection for WWW
    // if (getSalesChannel(getState()) === "WWW") {
    //     return;
    // }
    // to be configurable
    const odfPaths = [
        "/abonament-komorkowy-dla-firm",
        "/male-firmy/abonament-komorkowy",
    ];
    const lovePaths = getLovePaths();

    const path = window.location.pathname;
    const hasLove = account.hasLove;
    const hasODF = account.hasODF;

    if (odfPaths.indexOf(path) > -1 && hasLove) {
        window.location.pathname = lovePaths[0];
        return true;
    } else if (!hasLove && isLovePage() && hasODF) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("offerType", "VOICE");
        window.location.pathname = odfPaths[0];
        return true;
    } else {
        //NOP
    }

};

export const setLoggedCustomerData =
    payload => ({
        type: ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA,
        payload: payload,
    });

export const clearCartChangedFlag =
    () => ({
        type: ACTIONS.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG,
    });


export const requestLoggedCustomerDataAndCheckExistence = (timeout = 3000) => (dispatch, getState) => {
    console.log("#################### requestLoggedCustomerDataAndCheckExistence");
    RemoteApi.getLoggedCustomerData()
        .then(response => {
                dispatch(setLoggedCustomerData(response));
                if (getSalesChannel(getState()) === "WWW" && isLogged(getState()) && hasLove(getState())) {
                    if (isOdfPage()) {
                        dispatch(optionalRedirectToDifferentLP());
                    } else if (isProductListPage() && getSelectedOfferType(getState()) !== OfferType.VOICE_LDF) {
                        dispatch(setOfferType(OfferType.VOICE_LDF));
                    }
                }
                if (!response.accountCode && (response.lastName || response.tradingName)) {
                    dispatch(requestMobileBillingAccountsAndChooseDefault());
                } else {
                    dispatch(fetchContractRole());
                }
            },
            error => console.error("requestLoggedCustomerDataAndCheckExistence getLoggedCustomerData", error));

};


export const requestLoggedCustomerData = () => (dispatch, getState) => {
    console.log("requestLoggedCustomerData *************************************************");
    RemoteApi.getLoggedCustomerData()
        .then(response => {
            dispatch(setLoggedCustomerData(response));
            if (response.isCartChanged && (getIsCartStep(getState()) || getIsCustomerDataStep(getState()))) {
                dispatch(setShowSection(ShowSectionName.CART_WAS_CHANGED));
            } else if (!shouldShowModalAfterProcessChanged(getState()) && !getWwwCimIdBasedOfferSelectorProcesses().includes(getSelectedProcessTypeValue(getState()))) {
                dispatch({
                    type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                });
            }
        });
};


export const selectAccount = (accountId, accountCode) => (dispatch, getState) => {
    dispatch(setIsLoading(true));
    RemoteApi.selectAccount({
            accountId,
            accountCode,
        })
        .then(response => {
            console.log(response);
            console.log("Account pre set selectAccount");

            if (isErrorResponse(response)) {
                dispatch(accountSelectionErrorHandler(response));
                return;
            }

            if (dispatch(optionalRedirectToDifferentLP())) {
                return;
            }

            dispatch(fetchContractRole());
            if (getBillingAccountChangeVisibility(getState())) {
                console.log("Change account executed");
                dispatch({
                    type: ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF,
                });

                dispatch(requestLoggedCustomerData());
                if (getIsCartStep(getState())) {
                    dispatch(fetchMiniCart());
                    dispatch(fetchCart());
                }
                dispatch(setIsLoading(false));
            } else {
                dispatch(accountIdentifySuccess());
            }
        }).catch(err => {
            dispatch(accountSelectionErrorHandler(err));
        })
};

const accountSelectionErrorHandler = err => (dispatch, getState) => {
    console.warn("accountSelectionErrorHandler");

    dispatch(setIsLoading(false));
    //dispatch({type: ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF});

    if (!getAccountSelectionModalVisibility(getState())) {
        dispatch({
            type: ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
        });
        dispatch({
            type: ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
        });
        dispatch({
            type: ACTIONS.AUTHORIZATION_IS_LOADING_OFF
        });
        dispatch(setShowSection(""));
    }
    console.error("Account NOT Found", err);
    dispatch(showError("Nie znaleziono konta"));
    dispatch(setIsLoading(false));
    return true;

};
export const setCimByMsisdn = msisdn => (dispatch, getState) => {
    RemoteApi.setCimByMsisdn({
            msisdn
        })
        .then(response => {
            if (isErrorResponse(response)) {
                console.error("CIM not set", error);
                dispatch(setIsLoading(false));
                dispatch(setShowSection(ShowSectionName.MSISDN));
            } else {
                dispatch(commonAfterLoginActions(response))
            }
        }).catch(error => {
            console.error("CIM not set", error);
            dispatch(setIsLoading(false));
            dispatch(setShowSection(ShowSectionName.MSISDN));


        })
};

export const setCimByLogin = login => (dispatch, getState) => {
    RemoteApi.setCimByLogin({
            login
        })
        .then(response => {
            dispatch(commonAfterLoginActions(response))
        }).catch(error => {
            console.error("CIM not set", error);
            dispatch(showError("Nie udało się ustawić klienta"));
        })
};

const commonAfterLoginActions = loginResponse => (dispatch, getState) => {
    console.log("CIM set login response", loginResponse);
    if (loginResponse.status == "PROPOSITION_NO_LONGER_APPLIES") {
        window.location.href = OnlineUtils.getLastViewedOfferPage()
        return true
    }
    if (isLandingPage(getState()) || isPreLandingPage(getState())) {
        console.log("LANDINGPAGE");
        dispatch(requestFBBServiceData());
    } else {
        console.log("NOT_LANDINGPAGE");
        dispatch(requestFBBServiceDataFilteredByWWT());
    }

    dispatch({
        type: CHECKOUT_ACTIONS.SET_FIX_CART_REFRESH_RESULT,
        data: loginResponse,
    });
    dispatch(accountIdentifySuccess());
};

export const pushAccount = (msisdn, useExisting) => (dispatch, getState) => {
    RemoteApi.pushAccount({
            msisdn,
            useExisting
        })
        .then(response => {
            console.log("Account pre set", {
                response
            });
            dispatch(accountIdentifySuccess());
        }).catch(error => {
            console.error("Account NOT Found", error);
            dispatch(showError("Nie znaleziono konta"));
        })
};
export const setMsisdn = (msisdn, processType) => (dispatch, getState) => {
    console.log("Try to set msisdn, login or pesel =" + msisdn + " " + processType);
    dispatch(clearMessage());
    if (!!msisdn && msisdn.length === 11 && jQuery.isNumeric(msisdn)) {
        console.log("Pesel set in session");
        dispatch(setIsLoading(false));
        return;
    }
    dispatch(setIsLoading(true));
    RemoteApi.setMsisdnOrLogin({
            msisdn,
            processType
        })
        .then(response => {
            console.log(response);

            if (!!msisdn && msisdn.length === 9 && jQuery.isNumeric(msisdn)) {
                console.log("Msisdn set in session");
                PubSub.publish(
                    "UXEvent.CAAP.PhoneVerification.Init", {
                        containerId: "smsVerificationCaapSectionBody",
                        pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE",
                    }
                );
                console.log("Msisdn set in session DONE");
            } else {
                console.log("Login set in session");
                PubSub.publish(
                    "UXEvent.CAAP.PortalLoginVerification.Init", {
                        containerId: "smsVerificationCaapSectionBody",
                        pageVariant: "VERIFICATION_PORTAL_PASSWORD",
                    }
                );
            }

            dispatch(setIsLoading(false));

        }).catch(error => {
            console.error("Cannot set MSISDN or login ", msisdn, error);
        })
};

const incompatibleMarketActions = createRequestActions(ACTIONS.incompatibleMarketCheck);
export const checkMarketCompatibility = msisdn => (dispatch, getState) => {
    dispatch(incompatibleMarketActions.start());
    return RemoteApi.checkMarketCompatibility({
            msisdn
        })
        .then(
            response => {
                dispatch(incompatibleMarketActions.success(response));
                console.warn("WARN4", isErrorResponse(response), response);
                if (isErrorResponse(response)) {
                    if (response && response.message === "B2B") {
                        dispatch(setIncompatibleMarket(true, "B2B"))
                    } else if (response && response.message === "B2C") {
                        dispatch(setIncompatibleMarket(true, "B2C"))
                    } else {
                        dispatch(setIncompatibleMarket(true, null))
                    }
                    dispatch(setShowSection(ShowSectionName.INCOMPATIBLE_MARKET_MODAL));
                    dispatch(setIsLoading(false));
                    console.log("INNY RYNEK");
                    return false;
                } else {
                    dispatch(setIncompatibleMarket(false, null));
                    console.log("RYNEK OK");
                    return true;
                }
            },
            error => {
                console.error("checkMarketCompatibility", error);
                dispatch(incompatibleMarketActions.error());
                dispatch(showError("Nie można zweryfikować rynku"));
            }
        )
};

export const lightLogout = () => (dispatch, getState) => {
    RemoteApi.lightLogout()
        .then(response => {
            console.log("Wylogowano", response);
        }).catch(error => {
            console.error("lightLogout", error);
            dispatch(showError("Nie można zweryfikować rynku"));
        })
};

export const getAccount = (msisdn, push) => (dispatch, getState) => {
    console.log("$$$$$$$$$$$$$$   getAccount   $$$$$$$$$$$$$$$$$$$$ ");
    dispatch(showMessage("Trwa wyszukiwanie konta."));

    dispatch(setIsLoading(true));
    RemoteApi.getAccount({
            msisdn,
            push
        })
        .then(response => {
            dispatch(getAccountFromResponse(response, push));
        }).catch(error => {
            dispatch(manageGetAccountError(error));

        })

};

export const getAccountByCode = (accountCode) => (dispatch, getState) => {
    console.log("$$$$$$$$$$$$$$   getAccountByCode   $$$$$$$$$$$$$$$$$$$$ ");
    dispatch(showMessage("Trwa wyszukiwanie konta."));

    dispatch(setIsLoading(true));
    RemoteApi.getAccountByCode({
            accountCode
        })
        .then(response => {
            dispatch(getAccountFromResponse(response, false));
        }).catch(error => {
            dispatch(manageGetAccountError(error));

        })

};

export const getAccountFromResponse = (response, push) => (dispatch, getState) => {
    console.log("Konto zostało znalezione:", response);
    if (isErrorResponse(response)) {
        dispatch(manageGetAccountError(response));
        return;
    }
    dispatch(showMessage(""));
    if (isWwwPrepaidB2b(response, getSalesChannel(getState()), getCartIsNet(getState()))) {
        dispatch(handleNewPrepaidAccount());
        return;
    }

    let doChooseAccount = !push;
    if (doChooseAccount) {
        dispatch(setAccountByMsisdn(response));
        dispatch(showMobileAccountSelection());
        dispatch(setIsLoading(false))

    } else {

        dispatch(accountIdentifySuccess());
    }
}

const manageGetAccountError = (response) => (dispatch, getState) => {
    console.warn("Account NOT Found", response);
    console.warn("getAccountSelectionModalVisibility(getState()):", getAccountSelectionModalVisibility(getState()));

    dispatch(setIsLoading(false));

    dispatch(showResponseError(response));



}
const handleNewPrepaidAccount = () => (dispatch, getState) => {
    console.log("New WWW B2B prepaid account");
    dispatch(setIsLoading(false));
    dispatch(closeAuthModal());
    console.log("Close modal dispatched");
    dispatch(requestLoggedCustomerData());
    if (getIsCartStep(getState())) {
        dispatch(fetchMiniCart());
        dispatch(fetchCart());
    }
};

export const pushVerifiedMsisdn = (msisdn, processType, propositionId, nextSection, selectedDeviceId) => (dispatch, getState) => {
    dispatch(setIsLoading(true));
    let availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());
    RemoteApi.pushVerifiedMsisdn({
            msisdn,
            processType,
            availableProductsKey,
            propositionId,
            selectedDeviceId
        })

        .then(function(response) {

            if (isErrorResponse(response)) {
                dispatch(showResponseError(response));
                return;
            }

            if (nextSection) {
                dispatch(clearMessage());
                dispatch(setIsLoading(false));
                dispatch(setShowSection(nextSection));
            } else {
                dispatch(setShowSection(""));
                dispatch(authorizationSuccess(false, response));
            }
        }).catch(function(err) {

            dispatch(showResponseError(err));
        })
    OnlineUtils.removePwaSuflerContextFromSession();
};

export const checkOfferSelector = (processType, propositionId, selectedDeviceId) => dispatch => {
    dispatch(setIsLoading(true));
    return RemoteApi.checkOfferSelector({
        processType,
        propositionId,
        selectedDeviceId
    }).then(response => {
        if (isErrorResponse(response)) {
            dispatch(showResponseError(response));
            return Promise.reject(response.message);
        }
        return Promise.resolve(response);
    }).catch(error => {
        dispatch(showResponseError(error));
        return Promise.reject(error);
    });
};

export const showResponseError = response => (dispatch, getState) => {
    dispatch(setIsLoading(false));
    if (!getAccountSelectionModalVisibility(getState())) {
        dispatch(setShowSection(ShowSectionName.MSISDN));
    };
    if (response.status == 200) {
        dispatch(showError(response.message));
    } else if (response.status >= 500) {
        dispatch(showError("Mamy chwilowe trudności techniczne. Spróbuj za jakiś czas."));

    } else if (response.status == 404) {
        dispatch(showError(JSON.parse(response.responseText).message));
    } else {
        console.log(response);
        if (response.responseText)
            dispatch(showError(JSON.parse(response.responseText).message));
    }
};

function isErrorResponse(response) {
    console.log(response);
    if (response && (response.message || response.originalHttpStatus > 200)) {
        console.log(response.message);
        return true;
    }
    return false;
}

function isWwwPrepaidB2b(response, salesChannel, isB2b) {
    let isWww = "WWW" === salesChannel;
    let isPrepaid = !!response.prepaid;
    console.log("Is WWW prepaid B2B: ", isPrepaid && isB2b && isWww);
    return isPrepaid && isB2b && isWww;
}