import * as ACTIONS from "../actionTypes";
import * as CART_ACTIONS from "eshop/modules/cart/actionTypes";
import * as AUTH_ACTIONS from "../../auth/actionTypes";
import * as FIX_ACTIONS from "eshop/modules/fix/actionTypes";
import RemoteApi from "../remoteApi";

import {
    addressFormValidators,
    billingAccountFormValidators,
    countryValidator,
    courierDeliveryMessageValidator,
    courierPhoneContactValidator,
    customerContactFormValidators,
    customerDataFormValidators,
    mnpFormValidators,
    representativeDataFormValidators
} from "../validators";
import {
    getAddressCorrespondence,
    getAddressDelivery,
    getAddressMain,
    getAgreementType,
    getAllReservableCartEntries,
    getBillingAccountFormData,
    getCheckoutConsents,
    getCheckoutData,
    getConsentsCheckoutData,
    getConsentsData,
    getDeliveryAndPaymentStep,
    getEmailConfirmationModalAccepted,
    getLegalForm,
    getRepresentationMode,
    getSimCardTypeForBundle,
    isEarlierInstallation,
    isEarlierInstallationConsentNotAcceptedModalIsAccepted,
    isEarlierInstallationConsentNotAcceptedModalMounted,
    isIdVerificationRequired,
    getSapReservationNumber
} from "../selectors";
import OnlineUtils from "eshop/utils/OnlineUtils";

import {
    forceSlotRefresh
} from "../actions/data";
import * as remote from "./remote";
import {
    actions as cbs
} from "eshop/modules/cbs/main";
import {
    getCountries
} from "../../cbs/selectors";
import OfferType from "../../simfree/constants/OfferTypeEnum";
import {
    reloadCartState,
    removeFromCartAndRedirect
} from "eshop/modules/cart/actions/cart";
import {
    fetchDocuments
} from "../../documents/actions/documents";
import {
    isPreLandingPage
} from "eshop/modules/fix/selectors/root";

import _ from "lodash";
import DeliveryMethod from "../constants/DeliveryMethod";
import {
    fetchDeliveryMethods,
    setEmailConfirmationModalState
} from "./delivery";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import EmailWarningDescriptionEnum from "../constants/EmailWarningDescriptionEnum";

export function gotoNextCheckoutStep() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GOTO_CHECKOUT_NEXT
        });
        window.location.href = [window.location.protocol, '//', window.location.host, window.location.pathname, '/dalej'].join('');
    };
};

export function gotoPreviousCheckoutStep() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GOTO_CHECKOUT_PREVIOUS
        });
        window.location.href = [window.location.protocol, '//', window.location.host, window.location.pathname, '/wstecz'].join('');
    };
};

export function gotoCartSummary() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GOTO_CHECKOUT_CART
        });
        window.location.href = [window.location.protocol, '//', window.location.host, "/koszyk/multi"].join('');
    };
}

export const gotoFixDispatcher = (selectedDesignationNumber, selectedServiceInstanceId) => (dispatch, getState) => {
    RemoteApi.postFbbServiceData(selectedDesignationNumber, selectedServiceInstanceId).then(response => {
        dispatch({
            type: ACTIONS.GOTO_FIX_DISPATCHER
        });
        window.location.href = [window.location.protocol, '//', window.location.host, "/internet-domowy/oferty-migracyjne"].join('');
    }).catch(error => {
        console.log(error);
    })
}

export const refreshFixCartWithoutFbbCheck = () => (dispatch, getState) => {
    RemoteApi.refreshFixCartWithoutFbbCheck().then(response => {
        dispatch(dismissFbbServices());
    }).catch(error => {
        console.log(error);
    })
}

export const showWwtComponent = () => (dispatch) => {
    dispatch({
        type: FIX_ACTIONS.SHOW_WWT_COMPONENT
    });
}

export const hideWwtComponent = () => (dispatch) => {
    dispatch({
        type: FIX_ACTIONS.HIDE_WWT_COMPONENT
    });
}

export const requestFBBServiceData = () => (dispatch) => {
    return RemoteApi.getFBBServiceData()
        .then(response => {
            dispatch(setFBBServiceData(response));
        })
}

export const requestFBBServiceDataFilteredByWWT = () => (dispatch) => {
    RemoteApi.getFBBServiceDataFilteredByWWT()
        .then(response => {
            if (isOneService(response)) {
                dispatch(gotoFixDispatcher(response.fixAddressWithServices[0].serviceBundles[0].mainService.designationNumber, response.fixAddressWithServices[0].serviceBundles[0].mainService.cfServiceInstanceId));
            } else {
                dispatch(setFBBServiceData(response));
            }
        })
}

function isOneService(response) {
    return !!response &&
        !!response.fixAddressWithServices &&
        response.fixAddressWithServices.length == 1 &&
        !!response.fixAddressWithServices[0].serviceBundles &&
        response.fixAddressWithServices[0].serviceBundles.length == 1;
}

export const setFBBServiceData =
    (payload) => (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_FBB_SERVICE_DATA,
            payload: payload
        });
        if (isPreLandingPage(getState()) && !!payload && !!payload.fixAddressWithServices && !!payload.fixAddressWithServices.length > 0 && payload.fixAddressWithServices[0] && payload.fixAddressWithServices[0].serviceBundles && payload.fixAddressWithServices[0].serviceBundles.length > 0) {

            console.log("setFBBServiceData payload:");
            console.log(payload);
            const url = `/internet-domowy`;
            window.location.replace(url);

        }
    };

export function gotoMagnumDeviceList() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GOTO_MAGNUM_DEVICE_LIST
        });

        const url = `/sklep?offerType=${OfferType.CONVERGENT}`;
        window.location.replace(url);
    };
}

export function updateMagnumTerminal(bundleNo) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GOTO_MAGNUM_DEVICE_LIST
        });
        dispatch({
            type: CART_ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
            value: bundleNo
        });

        const url = `/sklep?offerType=${OfferType.CONVERGENT}`;
        window.location.replace(url);
    };
}

function mapToMessage(data) {
    let specifiedMessages = [{
        condition: (data) => data && data.results && data.results.filter((result) => ["10", "13"].includes(result.code) && result.category === "ORDER").length !== 0,
        map: (data) => {
            let result = data && data.results && data.results.filter((result) => ["10", "13"].includes(result.code) && result.category === "ORDER")[0]
            return result && result.description && {
                text: result.description,
                type: "error"
            };
        }
    }, {
        condition: (item) => item && item.results && item.results.filter((result) => result.category === "ASSIGNMENT").length !== 0,
        map: (item) => {
            let result = item && item.results && item.results.filter((i) => i.category === "ASSIGNMENT")[0]
            let text = (result.code === "peselsNoMatch") ? "Dane osoby fizycznej nie są zgodne z danymi Jednoosobowej działalności gospodarczej. Wybierz właściwy scenariusz." : "Sprawdź czy wprowadzone dane są poprawne.";
            return {
                text: text,
                type: "error"
            }
        }
    }];

    return specifiedMessages
        .filter(sm => sm.condition(data))
        .map(sm => sm.map(data))
        .filter(exists => exists)[0]
}

export function showErrorMessage(dispatch, data) {
    if (!(data && data.results && data.results.filter((result) => result.code !== '0' && (result.category === 'CV' || result.category === 'CV_MAGNUM' || result.category === 'CV_MAGNUM_WITH_DEPOSIT' || result.category === 'MANUAL' || result.category === 'AUTH' || result.category === 'CALLBACK' || result.category === 'RESERVATION' || result.category === 'SEARCH' || result.category === 'NO_EMAIL_MNP' || result.category === 'CIM_CONSISTENT' || result.category === 'FBB_SERVICES')).length !== 0)) {
        if (data && data.results && data.results.filter((result) => result.code !== '0' && result.category === "PUBLIC").length !== 0) {
            dispatch(showSpecifiedMessage("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg"));
        } else {
            let msg = mapToMessage(data) || {
                text: "Sprawdź czy wprowadzone dane są poprawne.",
                type: "error"
            }

            dispatch({
                type: AUTH_ACTIONS.SHOW_MESSAGE,
                msg
            });
        }
    }
}

export const showSpecifiedMessage = (defaultText, type, descriptionName) => (dispatch) => {
    dispatch({
        type: AUTH_ACTIONS.SHOW_MESSAGE,
        msg: {
            text: defaultText,
            type: type,
            descriptionName: descriptionName
        }
    });
}

export function bodyLoaderEvent(event) {
    OPL.UI.fire(event, null, 'body-loader');
}
export function bodyLoaderShow() {
    bodyLoaderEvent('modules.loader.show');
}
export function bodyLoaderHide() {
    bodyLoaderEvent('modules.loader.hide');
}

export function doCheckoutStepPickup() {
    return (dispatch, getState) => {
        const checkoutData = getCheckoutData(getState());
        RemoteApi.pickupCompletion().then(response => {
            dispatch(remote.doCheckoutStepStart(checkoutData));
            dispatch(remote.doCheckoutStepDone({
                code: 0
            }));
            dispatch(gotoNextCheckoutStep());
        }).catch(error => {
            dispatch({
                type: ACTIONS.PICKUP_GENERAL_ERROR,
                error: error
            });
        });
    }
}
export function doCheckoutStep(afterCheckoutStep) {
    return (dispatch, getState) => {
        const checkoutData = getCheckoutData(getState());
        if (showEarlierInstallationConsentModal(checkoutData, getState)) {
            if (isEarlierInstallationConsentNotAcceptedModalIsAccepted(getState())) {
                checkoutData.delivery.forEach(delivery => delivery.deliveryMethod = "courier");
            } else {
                dispatch(showEarlierInstallationConsentNotAcceptedModal());
                return;
            }
        }
        if (checkoutData.delivery.some(delivery => delivery.deliveryMethod === DeliveryMethod.BZU) && !getEmailConfirmationModalAccepted(getState())) {
            dispatch(setEmailConfirmationModalState(true));
            return;
        }
        bodyLoaderEvent('modules.loader.show');
        dispatch(remote.doCheckoutStepStart(checkoutData));

        if (getDeliveryAndPaymentStep(getState())) {
            DataLayerUtils.pushFinalizeOrder(getAgreementType(getState()));
        }

        return RemoteApi.doCheckoutStep(checkoutData)
            .catch(data => {
                bodyLoaderEvent('modules.loader.hide');
                if (data.code === 'REDIRECT') {
                    let redirectPrefix = "redirect:";
                    let redirectVal = data.callbackUrl.toLowerCase();
                    if (redirectVal.indexOf(redirectPrefix) >= 0) {
                        redirectVal = redirectVal.split(redirectPrefix).pop();
                    }
                    window.location.pathname = redirectVal;
                } else if (data.code !== "9") {
                    dispatch(remote.doCheckoutStepError(data));
                }
                showErrorMessage(dispatch, data);
                console.log("showErrorMessage(dispatch, data)2");
            })
            .then(data => {
                if (data.code === 'REDIRECT') {
                    if (!!afterCheckoutStep) {
                        dispatch(afterCheckoutStep());
                    } else {
                        let redirectPrefix = "redirect:";
                        let redirectVal = data.callbackUrl.toLowerCase();
                        if (redirectVal.indexOf(redirectPrefix) >= 0) {
                            redirectVal = redirectVal.split(redirectPrefix).pop();
                        }
                        window.location.pathname = redirectVal;
                    }
                } else if (data.code === "0") {
                    if (!!afterCheckoutStep) {
                        dispatch(afterCheckoutStep());
                    } else {
                        dispatch(remote.doCheckoutStepDone(data));
                        dispatch(gotoNextCheckoutStep());
                    }
                } else if (data.code === "6") {
                    bodyLoaderEvent('modules.loader.hide');
                    showErrorMessage(dispatch, data);
                } else if (data.results.length < 2 && data.code === "9" || data.code === "12" || data.code === "15") {
                    bodyLoaderEvent('modules.loader.hide');
                    dispatch(remote.doCheckoutStepError(data));
                } else if (data.results.length < 2 && data.code === "30") {
                    bodyLoaderEvent('modules.loader.hide');
                    window.scroll({
                        top: document.getElementById("installation-carousel-loader").offsetTop - 100,
                        left: 0,
                        behavior: 'smooth'
                    });
                    dispatch({
                        type: ACTIONS.SHOW_INSTALLATION_SLOT_ERROR,
                        payload: true
                    });
                    dispatch(forceSlotRefresh(true));
                    dispatch(remote.doCheckoutStepError(data));
                } else {
                    bodyLoaderEvent('modules.loader.hide');
                    if (data.results.length < 2 && data.results.filter((result) =>
                            result.category === "APPARTMENT_NO_VALIDATION" ||
                            result.category === "REPLANISHMENT_REQUIRED" ||
                            result.category === "EXISTING_ORDER").length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.filter((result) => result.category === "CV_WITH_DEPOSIT").length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.filter((result) => result.category === "MANUAL").length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.length < 2 && data.results.filter((result) => result.code === "2").length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else {
                        dispatch(remote.doCheckoutStepError(data));
                        showErrorMessage(dispatch, data);
                    }
                }
            });
    };
}

export function manualRedirectResult(results) {
    var errorResults = results.filter(result => result.code !== "0");
    return (errorResults.filter(error => (error.category !== "MANUAL")).length === 0);
}

export function doCheckoutStepNoRedirect() {
    return (dispatch, getState) => {
        var checkoutData = getCheckoutData(getState());
        bodyLoaderEvent('modules.loader.show');
        dispatch(remote.doCheckoutStepStart(checkoutData));

        return RemoteApi.doCheckoutStep(checkoutData)
            .catch(data => {
                bodyLoaderEvent('modules.loader.hide');
                dispatch(remote.doCheckoutStepError(data));
            })
            .then(data => {
                bodyLoaderEvent('modules.loader.hide');
                if (data.code === "0" || (!!data.results && manualRedirectResult(data.results))) {
                    dispatch(remote.doCheckoutStepDone(data));
                    window.scrollTo(0, 0);
                } else {
                    bodyLoaderEvent('modules.loader.hide');
                    dispatch(remote.doCheckoutStepError(data));
                }
            });
    };
}

export const dismissCallbackErrors = () => ({
    type: ACTIONS.CHECKOUT_ERROR_CALLBACK_DISMISS
});

export const dismissAuthErrors = () => ({
    type: ACTIONS.CHECKOUT_ERROR_AUTH_DISMISS
});

export const dismissCvErrors = () => ({
    type: ACTIONS.CHECKOUT_ERROR_CV_DISMISS
});

export const dismissFbbServices = () => ({
    type: ACTIONS.CHECKOUT_FBB_SERVICES_DISMISS
});

export const dismissBackendValidationErrors = () => ({
    type: ACTIONS.CHECKOUT_ERROR_BACKEND_DISMISS
});

export const dismissManualErrors = () => ({
    type: ACTIONS.CHECKOUT_ERROR_MANUAL_DISMISS
})

export const setSelectedDesignationNumberAction = (designationNumber) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_SELECTED_DESIGNATION_NUMBER,
        designationNumber: designationNumber
    });
};

export const setSelectedServiceInstanceIdAction = (serviceInstanceId) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_SELECTED_SERVICE_INSTANCE_ID,
        serviceInstanceId: serviceInstanceId
    });
};

export function closeCimConsistentErrorModal() {
    return dispatch => {
        dispatch({
            type: ACTIONS.CHECKOUT_ERROR_AUTH_DISMISS
        });
    }
}
export function gotoLoginPage() {
    return dispatch => {
        dispatch({
            type: AUTH_ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
        });
        //  window.location.assign("/twojekonto/logowanie?url=" + window.location.href);
    };
}

export const changeCustomerDataFormField = ({
    name,
    value
}, validate = true) => (dispatch, getState) => {
    if (name === "legalForm" && getLegalForm(getState()) !== value) {
        dispatch(fetchDocuments(value));
    }
    dispatch({
        type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
        name,
        value,
        errors: validate ? customerDataFormValidators[name](value) : undefined
    });
}

export const changeCustomerRegonFormField = ({
    name,
    value
}, validate = true, isSog = false) => (dispatch) => {
    let validatorName = isSog ? name + "Sog" : name;
    dispatch({
        type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
        name,
        value,
        errors: validate ? customerDataFormValidators[validatorName](value) : undefined
    });
};

export const changeCustomerCountry = ({
    value
}) => (dispatch, getState) => {
    var countryNameOrIsocode = value;
    let countries = getCountries(getState());
    let country = countries.find(country => country.name === countryNameOrIsocode);
    if (country) {
        countryNameOrIsocode = country.isocode;
    }
    dispatch({
        type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
        name: 'country',
        value: countryNameOrIsocode,
        errors: countryValidator(countryNameOrIsocode, countries)
    });
};

export const changeCustomerDataFormFieldNoValidations =
    ({
        name,
        value
    }) => ({
        type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
        name,
        value
    });

export const changeRepresentativeCountry = ({
    id,
    name,
    value,
    index
}) => (dispatch, getState) => {
    var countryNameOrIsocode = value;
    let countries = getCountries(getState());
    let country = countries.find(country => country.name === countryNameOrIsocode);
    if (country) {
        countryNameOrIsocode = country.isocode;
    }
    dispatch({
        type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
        name: 'country',
        index: index,
        value: countryNameOrIsocode,
        errors: countryValidator(countryNameOrIsocode, countries)
    });
};

export const changeRepresentativeFormField = ({
    name,
    value,
    index,
    validate = true
}) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
        name,
        value,
        index,
        errors: (validate && name) ? representativeDataFormValidators[name](value) : []
    });
};

export const changeRepresentativeFormFieldNoValidations = ({
    name,
    value,
    index
}) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
        name,
        value,
        index
    });
};

export const clearRepresentativeFormFieldErrors = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS
    });
};

export const changeGrantorFormField = ({
    name,
    value,
    index,
    validate
}) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_GRANTOR_FORM_FIELD,
        name,
        value,
        index,
        errors: (validate && name) ? representativeDataFormValidators[name](value) : []
    });
};

export const removeRepresentative = (index) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.REMOVE_REPRESENTATIVE,
        index
    });
};

export const removeGrantor = (index) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.REMOVE_GRANTOR,
        index
    });
};

export const setRepresentationMode = (mode, modeConfig) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_REPRESENTATION_MODE,
        mode,
        modeConfig
    });
};

export const setGrantingDate = (date) => (dispatch, getState) => {
    let skipValidation = ["JR", "WR"].indexOf(getRepresentationMode(getState())) > -1
    dispatch({
        type: ACTIONS.SET_GRANTING_DATE,
        date,
        errors: skipValidation ? [] : representativeDataFormValidators['grantingDate'](date)
    });
};

export function reloadSummaryOnCart(data) {
    return (dispatch) => {
        RemoteApi.reloadSummaryOnCart(data.isBusinessClient).then((response) =>
            dispatch({
                type: CART_ACTIONS.FETCH_CART,
                payload: response
            }));
    };
};

export const changeCustomerMainAddressFormField = function({
    name,
    value,
    cbsId
}, validate = true) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
            name,
            value,
            cbsId,
            errors: validate ? addressFormValidators[name](value) : undefined
        });
        dispatch(cbs.getCbsData(getAddressMain(getState())));
    };
};

export function setConsentStatesToNegative() {
    return (dispatch, getState) => {
        let consents = getCheckoutConsents(getState());
        let selectedStates = getConsentsCheckoutData(getState());
        let consentsToUpdate = [];
        consents.filter(consent => {
            if (!consent.states.find(state => state.required)) {
                const selectedStateCode = selectedStates.find(state => state.consentCode === consent.consentCode);
                if (!selectedStateCode) {
                    let stateCode = consent.states.find((state) => !state.positive).code;
                    if (!consent.bundleAssignments || consent.bundleAssignments.length === 0) {
                        if (!!consent.msisdns && consent.msisdns.length > 0) {
                            consent.msisdns.forEach(bundleConsent => {
                                consentsToUpdate.push({
                                    consentCode: consent.consentCode,
                                    bundleNo: bundleConsent.bundleNo,
                                    stateCode: stateCode,
                                    relatedWithBonus: consent.isRelatedWithBonus
                                });
                            })
                        } else {
                            consentsToUpdate.push({
                                consentCode: consent.consentCode,
                                bundleNo: null,
                                stateCode: stateCode,
                                relatedWithBonus: consent.isRelatedWithBonus
                            });
                        }
                    } else {
                        consentsToUpdate = matchingConsents.concat(
                            consent.bundleAssignments.map(ba => ({
                                consentCode: consent.consentCode,
                                bundleNo: ba.bundleNo,
                                stateCode: stateCode,
                                relatedWithBonus: consent.isRelatedWithBonus
                            }))
                        );
                    }
                }
            }
            if (consentsToUpdate.length > 0) {
                dispatch(changeConsentState(consentsToUpdate));
            }
        });
    }
}

export function changeConsentState(changedConsents) {

    function dispatchRequiredConsentChangedEvent(consentsData, changedConsents, dispatch) {

        const verificationTypeConsentsData = getVerificationTypeConsentsData(consentsData);
        const verificationTypeConsentsConfig = getVerificationTypeConsentsConfig(consentsData, verificationTypeConsentsData);

        const requiredChangedConsents = verificationTypeConsentsData
            .filter(consentData =>
                consentCodePrecondition(consentData, changedConsents) &&
                consentData.required === true &&
                listNumberPrecondition(consentData, verificationTypeConsentsConfig)
            );

        if (requiredChangedConsents.length > 0) {
            dispatch({
                type: ACTIONS.REQUIRED_CONSENT_CHANGED
            });

        }
    }

    function getVerificationTypeConsentsData(consentsData) {
        return consentsData.consents.filter(consentData => consentData.type === consentsData.verificationConsentType);
    }

    function getVerificationTypeConsentsConfig(consentsData, verificationTypeConsentsData) {
        const verificationTypeConsentsCodes = verificationTypeConsentsData.map(consentData => consentData.consentCode);
        return consentsData.conf
            .filter(config => _.intersection(config.consentsCode, verificationTypeConsentsCodes).length > 0);
    }

    function consentCodePrecondition(consentData, changedConsents) {
        return changedConsents
            .filter(changed => changed.consentCode === consentData.consentCode)
            .length > 0;
    }

    function listNumberPrecondition(consentData, verificationTypeConsentsConfig) {
        return verificationTypeConsentsConfig
            .filter(config => _.includes(config.consentsCode, consentData.consentCode))
            .filter(config => config.listNumber === 1 || config.listNumber === 11).length > 0;
    }

    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_CONSENT_STATE,
            data: changedConsents
        });

        let consentsData = getConsentsData(getState());

        if (consentsData.consents) {
            dispatchRequiredConsentChangedEvent(consentsData, changedConsents, dispatch);
            if (consentsData.consents.find(c => c.consentCode === changedConsents[0].consentCode).shouldCartBeUpdateAfterStateChange) {
                let checkoutData = getCheckoutData(getState());
                RemoteApi.updateConsents(checkoutData);
            }
        }
    };
};

export const pushToModifyConsentsInCartQueue =
    (toAdd) => ({
        type: ACTIONS.PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE,
        toAdd
    });

export const setModifyConsentsInCartQueue =
    (data) => ({
        type: ACTIONS.SET_MODIFY_CONSENTS_IN_CART_QUEUE,
        data
    });


export const changeCorrespondenceAddressFormField = function({
    name,
    value,
    cbsId
}, validate = true) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD,
            name,
            value,
            cbsId,
            errors: validate ? addressFormValidators[name](value) : undefined
        });
        dispatch(cbs.getCbsData(getAddressCorrespondence(getState())));
    };
};

export const changeDeliveryAddressFormField = function({
    name,
    value,
    cbsId
}, validate = true) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_DELIVERY_ADDRESS_FORM_FIELD,
            name,
            value,
            cbsId,
            errors: validate ? addressFormValidators[name](value) : undefined
        });
        dispatch(cbs.getCbsData(getAddressDelivery(getState())));
    };
};

export const changeDeliveryCourierMessageField = ({
    name,
    value
}) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_DELIVERY_COURIER_MESSAGE,
        name,
        value,
        errors: courierDeliveryMessageValidator
    });
};

export const changeAddressMapping = (mappedAddress, pickedAddress) => ({
    type: ACTIONS.CHANGE_ADDRESS,
    mappedAddress,
    pickedAddress
});

export const changeCustomerContactFormField =
    ({
        name,
        value
    }, validate = true) => ({
        type: ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
        name,
        value,
        errors: validate ? customerContactFormValidators[name](value) : undefined
    });

export const changeCustomerContactDeliveryFormField =
    ({
        name,
        value
    }, validate = true) => ({
        type: ACTIONS.CHANGE_DELIVERY_CONTACT_FORM_FIELD,
        name,
        value,
        errors: validate ? customerContactFormValidators[name](value) : undefined
    });

export const changeCustomerContactFormFieldForceValid =
    ({
        name,
        value
    }) => ({
        type: ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
        name,
        value,
        errors: []
    });


export const changeCourierPhoneContact =
    (name, value) => ({
        type: ACTIONS.CHANGE_COURIER_PHONE_CONTACT,
        name,
        value,
        errors: courierPhoneContactValidator[name](value)
    });

export const changeConsentsContactData =
    (name, value) => ({
        type: ACTIONS.CHANGE_CONSENTS_CONTACT_DATA,
        name,
        value,
        errors: validate ? customerContactFormValidators[name](value) : undefined
    });

export const changeEmailRelatedConsents = function(noEmail) {
    /*Przerobić na pobieranie danych z kontrolera jak M. Lipiec raczy podesłać specyfikację z SID (powiązanie email->zgoda 21_CONV)*/
    const dataFromController = {
        consentCode: "21_CONV",
        consentNoState: "NO_21_CONV"
    };
    return (dispatch) => {
        dispatch({
            type: ACTIONS.CHANGE_CONSENT_STATE,
            data: [{
                consentCode: dataFromController.consentCode,
                stateCode: noEmail ? dataFromController.consentNoState : null,
                bundleNo: null
            }]
        });
        dispatch({
            type: ACTIONS.MAKE_CONSENT_READONLY,
            consentCode: dataFromController.consentCode,
            readOnly: noEmail
        });
    };
}

export const changeCustomerMnpDataFormField = ({
    name,
    value,
    entryIndex,
    defaults
}) => ({
    type: ACTIONS.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD,
    name,
    value,
    entryIndex,
    defaults,
    errors: !!mnpFormValidators[name] ? mnpFormValidators[name](value) : []
});

export const changeBusinessMnpAddressFormField = function({
    name,
    value
}) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD,
            name,
            value,
            errors: addressFormValidators[name](value)
        });
        dispatch(cbs.getCbsData(getAddressMain(getState())));
    };
};

export const registerCurrentStepId = (currentStepId) => ({
    type: ACTIONS.REGISTER_CURRENT_STEP_ID,
    id: currentStepId
});

export const changeDocumentsConfirmation = (value) => ({
    type: ACTIONS.CHANGE_DOCUMENTS_CONFIRMATION,
    value
});

export const changeTelesalesFormField = (name, value) => ({
    type: ACTIONS.CHANGE_TELESALES_FORM_FIELD,
    name,
    value
});

export const changeDebtRepaymentFormField = (name, value) => ({
    type: ACTIONS.CHANGE_DEBT_REPAYMENT_FORM_FIELD,
    name,
    value
});

export const saveInSessionDocumentPosSigned = (isSigned) => (dispatch) => {
    RemoteApi.updateCustomerSignedDocuments(isSigned).then(response => {
        dispatch(changeDocumentsConfirmation(isSigned));
    });
};

function checkDuplicateSerialNumber(serialNumbers, serialNumber, productCode) {
    let duplicateSerialNumber = Object.keys(serialNumbers)
        .filter(key => serialNumbers[key] != "")
        .find(key => serialNumbers[key] === serialNumber);

    return {
        type: ACTIONS.VERIFY_DUPLICATE_SERIAL_NUMBERS,
        payload: duplicateSerialNumber ? {
            details: [{
                message: "Ten numer seryjny jest już na zamówieniu",
                productCode: productCode
            }]
        } : {
            details: []
        }
    };

}

export function changeSerialNumberField(productCode, serialNumber) {
    changeSerialNumberField
    return (dispatch, getState) => {
        var store = getState();
        var serialNumbers = store.checkout.reservation.serialNumbers;
        if (!serialNumbers) {
            serialNumbers = {};
        }

        dispatch(checkDuplicateSerialNumber(serialNumbers, serialNumber, productCode));

        serialNumbers[productCode] = serialNumber;
        dispatch({
            type: ACTIONS.CHANGE_SERIAL_NUMBER_FIELD,
            payload: serialNumbers
        });
    };
};

export const setSimCardType = (bundleNo, simCardType) => ({
    type: ACTIONS.CHANGE_SIM_CARD_TYPE,
    bundleNo,
    simCardType
});

export const changeSimCardType = (bundleNo, simCardType) => (dispatch, getState) => {
    let previousCardType = getSimCardTypeForBundle(bundleNo)(getState());
    dispatch(changingSimCardType(bundleNo, true));
    RemoteApi.updateSimCard(bundleNo, simCardType).then(() => {
        dispatch(setSimCardType(bundleNo, simCardType));
        dispatch(changingSimCardType(bundleNo, false));
        reloadCartState()(dispatch, getState);
        dispatch(fetchDeliveryMethods());
    }).catch(error => {
        console.log(`Error while changing sim card type=${simCardType}. Setting previous card type=${previousCardType}`);
        return RemoteApi.updateSimCard(bundleNo, previousCardType);
    }).then(() => {
        dispatch(changingSimCardType(bundleNo, false));
        reloadCartState()(dispatch, getState);
    }).catch(error => {
        console.log(`Error while changing sim card type=${previousCardType}`);
        dispatch(changingSimCardType(bundleNo, false));
    });
};

const changingSimCardType = (bundleNo, changing) => ({
    type: ACTIONS.SIM_CARD_TYPE_CHANGING,
    bundleNo,
    changing
});

export function changeWarehouse(warehouseCode, deviceCode) {
    return (dispatch, getState) => {
        var store = getState();
        var warehouses = store.checkout.reservation.warehouses;
        if (!warehouses) {
            warehouses = {};
        }
        warehouses[deviceCode] = warehouseCode;
        dispatch({
            type: ACTIONS.CHANGE_WAREHOUSE_TYPE,
            warehouses: warehouses
        });
    };
};

export function setInitialSerialNumberState(initialState) {
    return (dispatch) => {

        var serialNumbers = {};
        if (initialState.serialNumberPair) {
            var lines = initialState.serialNumberPair.split(";")
            lines.map((pair) => {
                var pairArray = pair.split(",");
                if (pairArray && pairArray.length > 1) {
                    serialNumbers[pairArray[0]] = pairArray[1];
                }
            })
        }

        dispatch({
            type: ACTIONS.SET_SERIAL_NUMBER_INITIAL_STATE,
            sapReservationNumber: initialState.sapReservationNumber,
            serialNumberPair: serialNumbers,
            paymentStatus: initialState.paymentStatus,
            agencyPOSReservationDone: initialState.agencyPOSReservationDone,
            saleUnlocked: initialState.saleUnlocked
        });
    }
}

export function verifySerialNumbers(data) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.VERIFY_SERIAL_NUMBERS_STARTED
        });
        RemoteApi.verifySerialNumbers(data).then(
            (response) => {
                if (response.code && response.code !== "200") {
                    dispatch({
                        type: ACTIONS.VERIFY_SERIAL_NUMBERS_ERROR,
                        payload: response
                    })
                } else {
                    dispatch({
                        type: ACTIONS.VERIFY_SERIAL_NUMBERS,
                        payload: response
                    });
                    dispatch(getSapFioriLinks());
                }
            }, (error) => dispatch({
                type: ACTIONS.VERIFY_SERIAL_NUMBERS_ERROR,
                payload: error
            })
        )
    }
};

export function getSapFioriLinks() {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        if (sapReservationNumber) {
            RemoteApi.getSapFioriLinks(sapReservationNumber).then(
                (response) => {
                    dispatch({
                        type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                        payload: response
                    });
                    dispatch(getFioriCorrectiveInvoiceLink());
                }, (error) => dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                })
            )
        }
    }
};

export function getFioriCorrectiveInvoiceLink() {
    return (dispatch) => {
        RemoteApi.getFioriCorrectiveInvoiceLink().then(
            (response) => {
                dispatch({
                    type: ACTIONS.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE,
                    payload: response
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
};

export function unlockSale() {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.UNLOCK_SALE_STARTED
        });
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        RemoteApi.unlockSale(sapReservationNumber).then(
            () => {
                dispatch({
                    type: ACTIONS.UNLOCK_SALE_DONE
                });
                dispatch(paymentAndFiscalization());
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
};

export function checkUnlockSaleInSapStatus() {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        RemoteApi.unlockSale(sapReservationNumber).then(
            (data) => {
                dispatch({
                    type: ACTIONS.UNLOCK_SALE_STATUS_CHECK_DONE,
                    data: data
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
};

export function cancelOrder() {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        RemoteApi.cancelOrder(sapReservationNumber).then(
            () => {
                dispatch({
                    type: ACTIONS.CANCEL_ORDER_DONE
                });
            }, (error) => dispatch({
                type: ACTIONS.CANCEL_ORDER_ERROR,
                payload: error
            })
        )
    }
};

export function cancelOrderWithRedirect() {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        RemoteApi.cancelOrder(sapReservationNumber).then(
            () => {
                removeFromCartAndRedirect(null)(dispatch, getState);
            }, (error) => dispatch({
                type: ACTIONS.CANCEL_ORDER_ERROR,
                payload: error
            })
        )
    }
};

export function paymentAndFiscalization() {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = store.checkout.reservation.sapReservationNumber;
        RemoteApi.paymentAndFiscalization(sapReservationNumber).then(
            (data) => {
                dispatch({
                    type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                    data: data
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
};

export function openOrderCancelPopup(param) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.OPEN_ORDER_CANCEL_POPUP,
            data: param
        });
    };
};

export function openOrderCancelPopupFromNavComponent(param) {
    return (dispatch, getState) => {
        (getState().checkout.reservation.sapReservationNumber && param ? checkPaymentStatus()(dispatch, getState) : Promise.resolve())
        .then(() =>
            dispatch({
                type: ACTIONS.OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT,
                data: param
            }))
    };
};

export function closeOrderCancelErrorPopup() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.CLOSE_ORDER_CANCEL_ERROR_POPUP
        });
    };
};

export function checkPaymentStatus() {
    return (dispatch, getState) =>
        RemoteApi.checkPaymentStatus(getState().checkout.reservation.sapReservationNumber).then(
            (data) => {
                dispatch({
                    type: ACTIONS.PAYMENT_STATUS_CHECK_DONE,
                    data: data
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
};

export function paymentOverride() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.PAYMENT_OVERRIDE_DONE
        });
    };
};

export function setInitialConfiguration(configuration) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.INITIAL_CONFIGURATION_SET_DONE,
            data: configuration
        });
    };
};


export function printOrderNumber(id) {
    return (dispatch, getState) => {
        var store = getState();
        var sapReservationNumber = id ? id : store.checkout.reservation.sapReservationNumber;
        RemoteApi.printOrderNumber(sapReservationNumber).then(
            (data) => {
                openPdfInNewWindow(data);
                dispatch({
                    type: ACTIONS.PRINT_ORDER_NUMBER_DONE
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
};

export function printInvoiceNumber(id) {
    return printInvoice(id, false);
};

export function printInvoiceNumberPickup(id) {
    return printInvoice(id, true);
};

function printInvoice(id, isPickup) {
    return (dispatch, getState) => {
        let sapReservationNumber = id ? id : getSapReservationNumber(getState());
        RemoteApi.printInvoiceNumber(sapReservationNumber, isPickup).then(
            (data) => {
                openPdfInNewWindow(data);
                dispatch({
                    type: ACTIONS.PRINT_INVOICE_NUMBER_DONE
                });
            }, (error) => dispatch({
                type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                payload: error
            })
        )
    }
}

export function openPdfInNewWindow(data) {
    var dataURI = "data:application/pdf;base64," + data;
    var pdfWindow = window.open("", '_blank', 'location=0,titlebar=0,toolbar=0,location=0,menubar=0');
    pdfWindow.document.write("<embed style='position: absolute; height: 99%; width: 99%;' src='" + dataURI + "' type='application/pdf;base64'>");
};

export function areSerialNumbersFilled(serialNumbers, store) {
    var result = true;
    var checked = false;
    if (!store.checkout.reservation.miniCartData.entries) {
        return false;
    }

    const cartEntries = getAllReservableCartEntries(store);

    cartEntries.filter(entry => entry.isSim && entry.msisdn && entry.simCard.reservable).map((entry) => {
        checked = true;

        var simSerialNumberProductCode = entry.productCode + "_" + entry.bundleOmniCode;
        if (!(serialNumbers && serialNumbers[simSerialNumberProductCode] && serialNumbers[simSerialNumberProductCode].length === 19)) {
            result = false;
            return;
        }
    });

    cartEntries.map((entry) => {
        entry.terminals.map((terminal) => {
            checked = true;
            if ((terminal.isSerialNumberRequired || terminal.requireSerialNumber) && !terminal.migrated) {
                var productkey = terminal.productCode + "_" + entry.bundleOmniCode + "_" + terminal.entryNo;
                if (!(serialNumbers && serialNumbers[productkey] && serialNumbers[productkey].length > 0)) {
                    result = false;
                    return false;
                }
            }
        });
    });

    cartEntries.map((entry) => {
        if (entry.broadbandFixProduct && entry.broadbandFixProduct.devices) {
            entry.broadbandFixProduct.devices.filter((device) => !device.migrated).map((device) => {
                if (device.isSerialNumberRequired) {
                    checked = true;
                    var productkey = device.code + "_" + entry.bundleOmniCode;
                    if (!(serialNumbers[productkey] && serialNumbers[productkey].length > 0)) {
                        result = false;
                        return false;
                    }
                }
            })
        }
        if (entry.tvFixProduct && entry.tvFixProduct.devices) {
            entry.tvFixProduct.devices.filter((device) => !device.migrated).map((device) => {
                if (device.isSerialNumberRequired) {
                    checked = true;
                    var productkey = device.code + "_" + entry.bundleOmniCode;
                    if (device.isSerialNumberRequired && !(serialNumbers[productkey] && serialNumbers[productkey].length > 0)) {
                        result = false;
                        return false;
                    }
                }
            })
        }
    });

    cartEntries.map((entry) => {
        entry.euroSets && entry.euroSets.map((euroSet) => {
            euroSet.setElements.map((euroSetElement) => {
                checked = true;
                if (!(serialNumbers && serialNumbers[euroSetElement.sku + entry.bundleNo] && serialNumbers[euroSetElement.sku + entry.bundleNo].length > 0)) {
                    result = false;
                    return false;
                }
            })
        })
    });

    return result || !checked;
}

export const setBillingAccountFormVisibility = visible => ({
    type: ACTIONS.SET_BILLING_ACCOUNT_FORM_VISIBILITY,
    visible
});

export const changeBillingAccountFormField = (name, value) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_BILLING_ACCOUNT_FORM_FIELD,
        name,
        value,
        errors: billingAccountFormValidators[name](value)
    });
    dispatch(cbs.getCbsData(getBillingAccountFormData(getState())));
};


export const setBillingAccounts = billingAccounts => dispatch => {
    dispatch({
        type: ACTIONS.SET_BILLING_ACCOUNTS,
        billingAccounts
    })
};

export const setCreateBillingAccount = type => dispatch => {
    RemoteApi.setNewBillingAccount({
        type
    }).then(() => {
        dispatch({
            type: ACTIONS.SET_CREATE_NEW_BILLING_ACCOUNT
        });
    })
};

export const setSelectedBillingAccount = billingAccount => dispatch => {
    RemoteApi.updateBillingAccount(billingAccount).then(() => {
        if (billingAccount.type === 'MOBILE') {
            dispatch({
                type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_MOBILE,
                billingAccount
            });
        } else {
            dispatch({
                type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_FIX,
                billingAccount
            });
        }
    }).then((data) => {
        if (billingAccount.type === 'MOBILE') {
            dispatch({
                type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS_START
            });
            RemoteApi.getBillingAccountContracts(billingAccount.accountId).then((data) => {
                dispatch({
                    type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS,
                    accountContracts: data
                });
            });
        }
    });
};

export const setBillingAccountContractsVisibility = visible => ({
    type: ACTIONS.SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY,
    visible
});

export const getActiveContracts = (accountId) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS_START
    });
    RemoteApi.getBillingAccountContracts(accountId).then((data) => {
        dispatch({
            type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS,
            accountContracts: data
        });
    });
};

export function changeOrderComment(comment) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.CHANGE_COMMENT_DONE,
            data: comment
        });
    }
}

export function changeShowComment() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.CHANGE_SHOW_COMMENT_DONE
        });
    }
}

export function switchEditIdNumberMode() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SWITCH_EDIT_ID_NUMBER_MODE
        });
    }
}

export function switchForeignerMode() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SWITCH_FOREIGNER_MODE
        });
    }
}

export function switchSameMnpData() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SWITCH_SAME_MNP_DATA
        });
    }
}

export const showEarlierInstallationConsentNotAcceptedModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
    });
};

export const closeEarlierInstallationConsentNotAcceptedModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
    });
};

export const acceptEarlierInstallationConsentNotAcceptedModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
    });
};

export const earlierInstallationConsentNotAcceptedModalDidMount = () => (dispatch) => {
    dispatch({
        type: ACTIONS.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION
    });
};

export const showCourierDeliveryMethodModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_COURIER_DELIVERY_METHOD_MODAL
    });
};

export const closeCourierDeliveryMethodModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.HIDE_COURIER_DELIVERY_METHOD_MODAL
    });
};

export const showEmailWarningModal = (descriptionKey = EmailWarningDescriptionEnum.DEFAULT) => dispatch => {
    dispatch({
        type: ACTIONS.SHOW_EMAIL_WARNING_MODAL,
        descriptionKey
    });
};

export const hideEmailWarningModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.HIDE_EMAIL_WARNING_MODAL
    });
};

export const courierDeliveryMethodModalDidMount = () => (dispatch) => {
    dispatch({
        type: ACTIONS.COURIER_DELIVERY_METHOD_MODAL_MOUNTED
    });
};

export const setCourierDeliveryMethodModalState = (payload) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_COURIER_DELIVERY_METHOD_MODAL_STATE,
        payload
    });
};

export function showEarlierInstallationConsentModal(checkoutData, getState) {
    const componentDidMount = isEarlierInstallationConsentNotAcceptedModalMounted(getState());
    return componentDidMount && !isEarlierInstallation(getState()) && checkoutData.delivery.some(delivery => delivery.deliveryMethod === "technical_assistant");
}

export const confirmReplanishment = () => (dispatch) => {
    RemoteApi.confirmReplanishment()
        .then(response => dispatch(doCheckoutStep()))
        .catch(error => console.log("nok", error));
};

export const pickupCancel = () => (dispatch) => {
    RemoteApi.cancleGoodsOrder().then(response => {
        dispatch(doCheckoutStep());
        dispatch({
            type: ACTIONS.CANCEL_GOODS_ORDER_DONE
        });
    });
};

export const pickuErrorDismiss = () => (dispatch) => {
    dispatch({
        type: ACTIONS.PICKUP_GENERAL_ERROR_DISMISS
    });
};

export const fetchPickupDocuments = () => (dispatch) => {
    RemoteApi.getPickupDocuments().then(response => {
        var data = {};
        if (response.length > 0) {
            data = response.reduce((map, doc) => {
                let docs = map[doc.bundleNo];
                if (docs && docs.length > 0) {
                    docs.push(doc);
                } else {
                    docs = [doc];
                }
                map[doc.bundleNo] = docs;
                return map;
            }, {});
        }
        dispatch(remote.pickupDocumentsDone(data));
    });
};

export const setPermanentlyAgreedConsentsVisibleForGroup = (groupNumber, visible) => ({
    type: ACTIONS.SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP,
    groupNumber,
    visible
});

export const setManualVerificationModalVisibility = visible => ({
    type: ACTIONS.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY,
    visible
});

export const updateSelectedPOSAvailability = (status) => {
    RemoteApi.updateSelectedPOSAvailabilityStatus(status);
};

export const updateDeliveryPhoneNumber = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.UPDATE_DELIVERY_PHONE_NUMBER,
        data
    });
};

export const updateDAPPhoneNumber = (data) => (dispatch) => {
    dispatch({
        type: ACTIONS.UPDATE_DAP_PHONE_NUMBER,
        data
    });
};

export const clearSapErrorMessages = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLEAR_SAP_ERROR_MESSAGES
    });
};

export const processChanged = () => (dispatch) => {
    dispatch({
        type: ACTIONS.PROCESS_CHANGED
    });
};

export const setAgreementIntroductionStatuses = introductionStatuses => ({
    type: ACTIONS.SET_AGREEMENT_INTRODUCTION_STATUSES,
    introductionStatuses
});

export const setAgreementIntroductionStatus = (bundleNo, status) => ({
    type: ACTIONS.SET_AGREEMENT_INTRODUCTION_STATUS,
    bundleNo,
    status
});

export const setAgreementIntroductionDocumentLoading = (bundleNo, loading) => ({
    type: ACTIONS.SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING,
    bundleNo,
    loading
});

export const verifyIdentity = () => dispatch => {
    RemoteApi.requestIdVerification().then(verificationResult => {
        dispatch(setIdVerificationResult(verificationResult));
        OnlineUtils.pageRedirect(verificationResult.redirectUrl);
    });
};

export const isIdVerificationInProgress = () => (dispatch, getState) => verificationResult => {
    return verificationResult.status === 'IN_PROGRESS' &&
        isIdVerificationRequired(getState());
};

export const setIdVerificationsBanks = banks => ({
    type: ACTIONS.SET_ID_VERIFICATION_BANKS,
    banks
});

export const setIdVerificationsSelectedBankId = selectedBankId => ({
    type: ACTIONS.SET_ID_VERIFICATION_SELECTED_BANK_ID,
    selectedBankId
});

export const setIdVerificationResult = verificationResult => ({
    type: ACTIONS.SET_ID_VERIFICATION_RESULT,
    verificationResult
});

export const registerComponentPropsValue = (props) => ({
    type: ACTIONS.REGISTER_COMPONENT_PROPS_VALUE,
    payload: props
});

export const changeInvoiceEmailMapping = (invoiceEmailMapping) => ({
    type: CART_ACTIONS.INVOICE_EMAIL_MAPPING_CHANGE,
    payload: invoiceEmailMapping
});

export const changeInvoiceEmail = (invoiceEmail, validate = true) => ({
    type: CART_ACTIONS.INVOICE_EMAIL_CHANGE,
    value: invoiceEmail,
    errors: validate ? customerDataFormValidators["invoiceEmail"](invoiceEmail) : []
});

export const startSavingAllDocuments = () => ({
    type: ACTIONS.SAVE_ALL_DOCUMENTS_STARTED
});

export const finishSavingAllDocuments = () => ({
    type: ACTIONS.SAVE_ALL_DOCUMENTS_FINISHED
});