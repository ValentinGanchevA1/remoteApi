import RemoteApi from "../remoteApi";
import RemoteApiDocs from "../../documents/remoteApi";
import RemoteApiPickup from "../../documents/pickup/remoteApi";
import * as remote from "./remote";
import * as ACTIONS from "../actionTypes";
import * as MAGNUM_ACTIONS from "../../magnum2/actionTypes";
import {
    billingAccountDataRequested,
    cartConsentsDataRequested,
    cartMnpDataRequested,
    checkoutConditionIsRegistered,
    customerDataRequested,
    getAddressCorrespondence,
    getAddressMain,
    getBillingAccountFormData,
    getBillingAccountsData,
    getCheckoutData,
    getCheckoutDataForDelivery,
    getCurrentStepId,
    getCustomerNoEmail,
    getInstallationAvailableTimeSlots,
    getLegalForm,
    getModifyConsentsInCartQueue,
    getPaymentOverrideStatus,
    installationAvailableTimeSlotsRequested,
    isCustomerModified,
    representativeDataRequested,
    updatingAnyConsent,
} from "../selectors";
import {
    fetchCartPromise,
    fetchMiniCart
} from "../../cart/actions/cart";
import {
    actions as cbs
} from "eshop/modules/cbs/main";
import {
    bodyLoaderHide,
    bodyLoaderShow,
    changeCustomerContactFormField,
    changeCustomerDataFormField,
    changeCustomerMainAddressFormField,
    manualRedirectResult,
    setConsentStatesToNegative,
    setModifyConsentsInCartQueue,
    setSelectedBillingAccount,
    showErrorMessage,
    showSpecifiedMessage,
} from "./app";
import {
    getBillingAccountForm,
    requiredBillingAccountFieldExist,
    runValidator,
    whenAvailable
} from "../utils/utils";
import {
    entryContainsReservableSimCard
} from "../utils/MiniCartUtils";
import {
    clearAllLinks,
    fetchDocuments
} from "../../documents/actions/documents";
import {
    emptyAddress,
    emptyBusinessData,
    emptyCustomerContact
} from "../reducers/helperObjects";
import {
    customerContactFormValidators,
    customerDataFormValidators,
    customerWorkPhoneNumberValidator,
} from "../validators";
import {
    requestLoggedCustomerDataAndCheckExistence
} from "eshop/modules/auth/actions/api";
import {
    getRegisterBillingAccountPopupB2B,
    isLogged
} from "eshop/modules/auth/selectors/authorization";
import {
    fetchDeliveryMethodsDone,
    selectedDocumentsDeliveryMethod
} from "./delivery";

export const registerNextStepCondition = (condition) => (dispatch, getState) => {
    if (checkoutConditionIsRegistered(condition)(getState())) {
        return;
    }
    dispatch({
        type: ACTIONS.REGISTER_NEXT_STEP_CONDITION,
        condition: condition,
    });
};

export const unregisterNextStepCondition = (condition) => (dispatch, getState) => {
    if (!checkoutConditionIsRegistered(condition)(getState())) {
        return;
    }
    dispatch({
        type: ACTIONS.UNREGISTER_NEXT_STEP_CONDITION,
        condition,
    });
};

export const registerCmsConsentConfig = (config) => ({
    type: ACTIONS.REGISTER_CMS_CONFIGURATION,
    config: config,
});

export const forceRequestCartCustomerData = () => (dispatch, getState) => {
    dispatch(remote.getCartCustomerStart());
    return RemoteApi.getCartCustomer()
        .then(data => data.length > 0 ? data[0] : null) // we pick the customer from the first bundle
        .then(data => {

            dispatch(remote.getCartCustomerDone(data)); //todo if DZ ?
            dispatch(cbs.getCbsData(getAddressMain(getState()), true));
            dispatch(cbs.getCbsData(getAddressCorrespondence(getState())));
        });
};

export const requestCartCustomerData = () => (dispatch, getState) => {
    if (!customerDataRequested(getState())) {
        return dispatch(forceRequestCartCustomerData());
    } else {
        return Promise.resolve();
    }
};

export const requestCustomerData = () => (dispatch, getState) => {
    dispatch(remote.getCustomerStart());
    return RemoteApi.getCustomer()
        .then(data => {
            dispatch(remote.getCustomerDone(data));
        });
};
export const clearCartCustomerRequested = () => ({
    type: ACTIONS.CLEAR_CART_CUSTOMER_REQUESTED,
});

export const requestCartRepresentativeData = () => (dispatch, getState) => {
    if (!representativeDataRequested(getState())) {
        dispatch(remote.getCartRepresentativeStart());
        return RemoteApi.getCartRepresentative()
            .then(data => data.length > 0 ? data[0] : null)
            .then(data => dispatch(remote.getCartRepresentativeDone(data)))
    } else {
        return Promise.resolve();
    }
};

export const fetchInstallationAvailableTimeSlots = (earlierInstallationConsentAccepted = true, documentsDeliveryMode = null, forcedRefreshSlots = false) => (dispatch, getState) => {
    dispatch(remote.getInstallationAvailableTimeSlotsStart());
    installationAvailableTimeSlotsRequested(getState());
    dispatch(registerNextStepCondition('installationTimeSlot'));
    RemoteApi.getInstallationAvailableTimeSlots(earlierInstallationConsentAccepted, documentsDeliveryMode)
        .then(data => dispatch(remote.getInstallationAvailableTimeSlotsDone(data)));
    dispatch(selectInstallationTimeSlot({}));

    if (forcedRefreshSlots) {
        dispatch(forceSlotRefresh(false));
        dispatch({
            type: ACTIONS.SHOW_INSTALLATION_SLOT_ERROR,
            payload: true
        });
    }

};

export const selectInstallationTimeSlot = (data) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SELECT_INSTALLATION_TIME_SLOT,
        data
    });
    dispatch({
        type: ACTIONS.SHOW_INSTALLATION_SLOT_ERROR,
        payload: false
    });
    let text = "";
    let days = getInstallationAvailableTimeSlots(getState()).slots;
    if (days) {
        days.map((day, i) => {
            if (day.slots) {
                day.slots.map((slot, j) => {
                    if (slot.startDate == data.startDate && slot.endDate == data.endDate) {
                        text = text + " " + day.header.split(" ")[1] + " " + day.header.split(" ")[2] + " " + data.startDate.split("-")[0] + ", " + slot.htmlText;
                        dispatch({
                            type: ACTIONS.SELECT_INSTALLATION_SLOT_DESCRIPTION,
                            payload: text
                        });
                    }
                })

            }
        });
    }
};

export const changeInstallationComment = (data) => ({
    type: ACTIONS.CHANGE_INSTALLATION_COMMENT,
    payload: data.value,
});

export const subscribeCustomerSelected = () => (dispatch, getState) => {
    whenAvailable("PubSub", () => {
            console.log("subscribeCustomerSelectedFlag+", window.subscribeCustomerSelectedFlag);
            if (window.subscribeCustomerSelectedFlag) {
                console.log("subscribeCustomerSelectedFlag - unsubscribe", window.subscribeCustomerSelectedFlag);
                PubSub.unsubscribe(window.subscribeCustomerSelectedFlag);
            }
            window.subscribeCustomerSelectedFlag = PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.CustomerSelected", function() {

                console.log("UXEvent.CustomerService.SearchCustomer.CustomerSelected triggered.");
                console.log("STATE:", getState());
                dispatch({
                    type: ACTIONS.CUSTOMER_SELECTED
                });

                if (getRegisterBillingAccountPopupB2B(getState())) {
                    dispatch(requestLoggedCustomerDataAndCheckExistence());
                }

            });
            console.log("subscribeCustomerSelectedFlag-", window.subscribeCustomerSelectedFlag);
        },
        dispatch);
};

export const requestCartMnpData = (defaults) => (dispatch, getState) => {
    if (!cartMnpDataRequested(getState())) {
        dispatch(remote.getCartMnpDataStart());
        RemoteApi.getCartMnpData()
            .then(response => dispatch(remote.getCartMnpDataDone({
                response,
                defaults
            })));
    }
};

export const requestCartConsentsData = () => (dispatch, getState) => {
    const deliveryMethodCode = selectedDocumentsDeliveryMethod(getState());
    if ((!deliveryMethodCode && getCurrentStepId(getState()) == "delivery-payment") && !cartConsentsDataRequested(getState())) {
        console.log("DEBUG deliveryMethodCode is empty, getting only cart consents");
        dispatch(remote.getCartConsentsStart());
        RemoteApi.getCartConsents()
            .then(data => dispatch(remote.getCartConsentsDone(data, data)));
        return Promise.resolve();
    }
    const legalForm = getLegalForm(getState());
    if ((deliveryMethodCode) || (legalForm) || !cartConsentsDataRequested(getState()) || isLogged(getState())) {
        dispatch(remote.getCartConsentsStart());
        dispatch(remote.getConsentsStart({
            deliveryMethodCode,
            legalForm
        }));
        RemoteApi.getConsentsData(deliveryMethodCode, legalForm)
            .then(consents => {
                dispatch(remote.getConsentsDone(consents, deliveryMethodCode));
                dispatch(remote.setConsentReadOnly("21_CONV", getCustomerNoEmail(getState())));
                RemoteApi.getCartConsents()
                    .then(data => dispatch(remote.getCartConsentsDone(data, consents)));
            });
    }
};

export const requestRecalculateConsentsStrategy = (bundleNo, offerType) => (dispatch, getState) => {
    const deliveryMethodCode = selectedDocumentsDeliveryMethod(getState());
    const legalForm = getLegalForm(getState());
    dispatch(remote.getCartConsentsStart());
    RemoteApi.recalculateConsentFromStrategy(bundleNo, offerType).then(() => {
        RemoteApi.getConsentsData(deliveryMethodCode, legalForm).then(consents => {
            dispatch(remote.getConsentsDone(consents, deliveryMethodCode));
            dispatch(remote.setConsentReadOnly("21_CONV", getCustomerNoEmail(getState())));
            RemoteApi.getCartConsents()
                .then(data => dispatch(remote.getCartConsentsDone(data, consents)));
        });
    });
};

export const requestRecalculateConsentsForForeigner = (isForeigner) => (dispatch) => {
    dispatch(remote.getCartConsentsStart());
    RemoteApi.requestRecalculateConsentsForForeigner(isForeigner).then(() => {
        RemoteApi.getConsentsData().then(consents => {
            dispatch(remote.getConsentsDone(consents));
            RemoteApi.getCartConsents()
                .then(data => dispatch(remote.getCartConsentsDone(data, consents)));
        });
    });
};

export const clearModifyConsentsInCartQueue = (dataAlreadyProcessed) => (dispatch, getState) => {
    let currentData = getModifyConsentsInCartQueue(getState());

    //remove already processed data
    const consentStateEquals = (cs1, cs2) => cs1.consentCode == cs2.consentCode && cs1.consentState == cs2.consentState;
    if (dataAlreadyProcessed && dataAlreadyProcessed[0]) {

        const consentStateContains = (cs, csArray) => csArray.filter(c => consentStateEquals(c, cs)).length > 0;

        let newData = currentData.filter(cs => !consentStateContains(cs, dataAlreadyProcessed));
        dispatch(setModifyConsentsInCartQueue(newData));
    }

    //send not processed data to backend
    currentData = getModifyConsentsInCartQueue(getState());
    if (currentData[0]) {
        dispatch(updateConsentsStates(currentData));
    }
};

export const updateConsentsStates = (data) => (dispatch, getState) => {
    if (data.length > 0 && !updatingAnyConsent(getState())) {
        let codes = data.map(e => e.consentCode);
        dispatch(remote.updateCartConsentsStart(codes));
        return RemoteApi.updateCartConsents(data)
            .then(response => {
                dispatch(fetchCartPromise()).then(() => dispatch(remote.updateCartConsentsDone(response)));
                fetchMiniCart()(dispatch, getState);
                dispatch(clearModifyConsentsInCartQueue(data));
            });
    }
};

export const updateAsynchConsent = () => (dispatch, getState) => {
    const data = getCheckoutData(getState());
    RemoteApi.updateConsents(data).then(response => {
        dispatch(clearAllLinks());
    });
};

export const updateCartAndGetDocuments = () => (dispatch, getState) => {
    let checkoutData = getCheckoutData(getState());
    RemoteApi.updateCheckoutCart(checkoutData).then(() => {
        cartUpdateDone(dispatch, getState);
    });
};

export const updateDelivery = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        RemoteApi.updateCheckoutCart(getCheckoutDataForDelivery(getState())).then((success) => {
            resolve(success);
        }).catch(error => {
            reject(error);
        });
    });
};

const cartUpdateDone = (dispatch, getState) => {
    dispatch(fetchDocuments());
    dispatch(fetchDeliveryMethodsOnly());
};

export const fetchDeliveryMethodsOnly = () => (dispatch) => {
    RemoteApi.getCartDelivery()
        .then(data => {
            dispatch(fetchDeliveryMethodsDone(data));
        });
};

export const updateInstallationInfo = () => (dispatch, getState) => {
    let checkoutData = getCheckoutData(getState());
    RemoteApi.updateInstallationInfoOnCart(checkoutData);
};

// get zipCode from WWT
export const getZipCodeFromWWT = (placeId, placeName, streetId, streetName, streetNumber, apartmentNumber) =>
    (dispatch) => {
        dispatch(remote.fetchZipCodeFromWWTActions.start());
        return RemoteApi.getZipCodeFromWWT(placeId, streetId, streetNumber)
            .success(response => {
                if (response.length === 1) {
                    dispatch(remote.fetchZipCodeFromWWTActions.success({
                        placeId,
                        placeName,
                        streetId,
                        streetName,
                        streetNumber,
                        apartmentNumber,
                        zip: response[0].zip,
                    }));
                } else if (response.length > 1) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDRESS_NO_ZIP,
                        payload: {
                            placeId,
                            placeName,
                            streetId,
                            streetName,
                            streetNumber,
                            apartmentNumber,
                            zips: response.map(r => r.zip),
                        }
                    });
                    dispatch({
                        type: MAGNUM_ACTIONS.OPEN_WWT_ZIP_MODAL
                    });
                }
            }).fail(err => {
                console.log(err);
                if (err.status === 404) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDRESS_NO_ZIP,
                        payload: {
                            placeId,
                            placeName,
                            streetId,
                            streetName,
                            streetNumber,
                            apartmentNumber,
                        },
                    });
                    dispatch({
                        type: MAGNUM_ACTIONS.OPEN_WWT_ZIP_MODAL
                    });
                } else {
                    dispatch(remote.fetchZipCodeFromWWTActions.error(err));
                }
                return err;
            });
    };

export const validateZipCode = ({
    addressType,
    zip,
    townId,
    streetId,
    streetNumber
}) => (dispatch) => {
    let type = "";
    switch (addressType) {
        case "main":
            type = ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD;
            break;
        case "correspondence":
            type = ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD;
            break;
        case "delivery":
            type = ACTIONS.CHANGE_DELIVERY_ADDRESS_FORM_FIELD;
            break;
    }
    RemoteApi.validateZipCode(zip, townId, streetId, streetNumber)
        .success(response => dispatch({
            type,
            name: "zipValid",
            value: !!response
        }))
        .fail(err => {
            dispatch({
                type,
                name: "zipValid",
                value: false
            });
            console.error(err)
        });
};

export const getSelectedWwtAddress = () =>
    (dispatch) => {
        dispatch(remote.fetchSelectedWwtAddressActions.start());
        return RemoteApi.getSelectedWwtAddress()
            .then(
                data => dispatch(remote.fetchSelectedWwtAddressActions.success(data)),
                error => dispatch(remote.fetchSelectedWwtAddressActions.error())
            );
    };


export const selectWwtAddress = (data) => ({
    type: ACTIONS.SELECT_WWT_ADDRESS,
    payload: data,
});



export const fetchCvDocumentList = () => (dispatch, getState) => {
    RemoteApi.fetchCvDocumentList()
        .then(response => {
            dispatch({
                type: ACTIONS.SELECT_CV_DOCUMENTS_LIST,
                payload: response,
            });
        });
};

export const selectCvDocument = (documentCode) => (dispatch, getState) => {
    dispatch({
        documentCode,
        type: ACTIONS.SELECT_CV_DOCUMENT,
    });
};

export const selectCustomerWorkPhoneNumber = (phoneNumber) => (dispatch, getState) => {
    dispatch({
        phoneNumber,
        type: ACTIONS.SELECT_CUSTOMER_WORK_PHONE_NUMBER,
        errors: customerWorkPhoneNumberValidator.customerWorkPhoneNumber(phoneNumber),
    });
};

export const openDocument = function(link, fileName = "document.pdf") {
    let request = new XMLHttpRequest(),
        file;
    request.open("GET", link);
    request.responseType = "arraybuffer";
    request.send(null);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            file = new Blob([request.response], {
                type: "application/pdf"
            });
            openFile(file, fileName);
        }
    };
};

export const downloadFile = (link, mimeType = 'application/pdf') =>
    new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", link);
        request.responseType = "arraybuffer";
        request.onreadystatechange = () => {
            if (request.readyState !== 4) return;
            if (request.status >= 200 && request.status < 300) {
                resolve(new Blob([request.response], {
                    type: mimeType
                }));
            } else {
                reject(`Error while downloading file=${link}`);
            }
        };
        request.send(null);
    });

export const openFile = (file, filename) => {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE
        window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
        let fileURL = URL.createObjectURL(file);
        console.log("fileURL", fileURL);
        var element = document.createElement("a");
        element.setAttribute("href", fileURL);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
};

export const printConsents = (consentCodes) => (dispatch, getState) => {
    dispatch(setConsentStatesToNegative());

    //customer
    var checkoutData = getCheckoutData(getState());

    //start loader
    dispatch({
        type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
        data: true,
    });

    //create customer
    RemoteApi.doCheckoutAsyncStep(checkoutData)
        .catch(data => {
            if (data.code !== "9") {
                dispatch(remote.doCheckoutStepError(data));
            }
            showErrorMessage(dispatch, data);

            //stop loader
            dispatch({
                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                data: false,
            });
        })
        .then(data => {
            if (data.code === "0" || data.code === "9" || (!!data.results && manualRedirectResult(data.results)) || data.results.filter((result) => result.category === "APPARTMENT_NO_VALIDATION").length > 0) {
                dispatch(remote.doCheckoutStepDone(data));

                //print documents
                RemoteApi.getDocumentCode(consentCodes)
                    .then(response => {
                        console.log("PRINTING OF CONSENTS " + response.documentCode);
                        console.log(response);

                        let code = response.documentCode;
                        let bundleNo = null;
                        let documentData = {
                            documentCodes: code,
                            bundleNo: bundleNo,
                        };

                        RemoteApiDocs.checkDocumentExistence({
                            documentCode: code,
                            bundleNo: bundleNo,
                        }).then(result => {
                            return result === false ?
                                RemoteApiDocs.createDocument({
                                    documentDefinitionCodes: code,
                                    bundleNo: 1,
                                    factory: "MOBILE",
                                }) : result

                        }).then(() => {
                            return RemoteApiDocs.findDocumentInLocalStorage(documentData)
                        }).then(result => {
                            return !result[code] ? RemoteApiDocs.getDocuments(documentData).then(() => {
                                return RemoteApiDocs.findDocumentInLocalStorage(documentData)
                            }) : result
                        }).then(result => {

                            //stop loader
                            dispatch({
                                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                                data: false,
                            });

                            //set validator
                            dispatch({
                                type: ACTIONS.CONSENT_PRINT_DOCUMENTS,
                            });

                            openDocument(result[code]);

                        }).catch(result => {
                            console.log(result);

                            //stop loader
                            dispatch({
                                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                                data: false,
                            });

                            //validator
                            dispatch({
                                type: ACTIONS.CONSENT_PRINT_DOCUMENTS,
                            });

                        });

                    });


            } else {
                dispatch(remote.doCheckoutStepError(data));
                showErrorMessage(dispatch, data);

                //stop loader
                dispatch({
                    type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                    data: false,
                });
            }


        });

};

export const printMobileConsents = (consentCodes) => (dispatch, getState) => {

    dispatch(setConsentStatesToNegative());

    var checkoutData = getCheckoutData(getState());
    let customerModified = isCustomerModified(getState());

    //start loader
    dispatch({
        type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
        data: true,
    });

    //print documents
    RemoteApi.doSaveCheckoutData(checkoutData).
    then(response => {
            RemoteApi.getDocumentCode(consentCodes)
                .then(response => {
                    console.log("PRINTING OF MOBILE CONSENTS " + response.documentCode);
                    console.log(response);

                    let code = response.documentCode;
                    let bundleNo = 1;
                    let documentCode = code + (bundleNo ? "_" + bundleNo : "");
                    let documentData = {
                        documentCodes: code,
                        bundleNo: bundleNo,
                    };

                    RemoteApiDocs.checkDocumentExistence({
                        documentCode: code,
                        bundleNo: bundleNo,
                    }).then(result => {
                        if (result === false || customerModified) {
                            return RemoteApiDocs.removeDocuments()
                                .then(() => {
                                    console.log("Removed document!");
                                    return RemoteApiDocs.createDocument({
                                        documentDefinitionCodes: code,
                                        bundleNo: bundleNo,
                                        factory: "MOBILE",
                                    });
                                }).catch(error => {
                                    console.log("Removed error");
                                    console.log(error);
                                    return RemoteApiDocs.createDocument({
                                        documentDefinitionCodes: code,
                                        bundleNo: bundleNo,
                                        factory: "MOBILE",
                                    });
                                });
                        } else {
                            return result;
                        }

                    }).then(() => {
                        return RemoteApiDocs.findDocumentInLocalStorage(documentData)
                    }).then(result => {
                        return !result[code] ? RemoteApiDocs.getDocuments(documentData).then(() => {
                            return RemoteApiDocs.findDocumentInLocalStorage(documentData)
                        }) : result
                    }).then(result => {
                        window.open(result[code]);

                        //stop loader
                        dispatch({
                            type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                            data: false,
                        });

                        //set validator
                        dispatch({
                            type: ACTIONS.CONSENT_PRINT_DOCUMENTS,
                        });

                    }).catch(result => {
                        console.log(result);

                        //stop loader
                        dispatch({
                            type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                            data: false,
                        });

                        //validator
                        dispatch({
                            type: ACTIONS.CONSENT_PRINT_DOCUMENTS,
                        });

                    });

                });
        })
        .catch(data => {
            showErrorMessage(dispatch, data);

            //stop loader
            dispatch({
                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                data: false,
            });
        });
};

export const selectApu = (option) => (dispatch) => {
    dispatch({
        type: ACTIONS.START_LOAD_APU
    });
    RemoteApi.selectApu(option)
        .then(response => {
            dispatch({
                type: ACTIONS.SELECT_APU,
            });
            dispatch({
                type: ACTIONS.STOP_LOAD_APU
            });
        });
};


export const registerPrintConsentValidator = (consentType) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR,
        consentType: consentType,
    });
};

export const registerVerificationConsentType = (verificationConsentType) => (dispatch) => {
    dispatch({
        type: ACTIONS.REGISTER_VERIFICATION_CONSENT_TYPE,
        verificationConsentType: verificationConsentType,
    });
};

export const fetchPosSimCardTypes = () => (dispatch, getState) => {
    RemoteApi.getPosSimCardsTypes().then(response => dispatch(remote.fetchPosSimCardTypesDone(response)));
};

export const pickupGeneralError = (error) => (dispatch) => {
    console.log("error:", error);
    dispatch({
        type: ACTIONS.PICKUP_GENERAL_ERROR,
        error: error,
    });
};

export const fetchSerialNumbers = () => (dispatch, getState) => {
    RemoteApi.getSerialNumbers()
        .then(response => {
            if (response.list && response.list.length > 0) {
                let serials = response.list.reduce((map, obj) => {
                    map[obj.entryNo] = obj.id;
                    return map;
                }, {});
                dispatch(remote.fetchSerialNumbersDone(serials));

                dispatch(remote.updateSerialNumbersDone({
                    status: "RESERVED"
                }));

                let sapReservation = getState().cart.miniCartData.orderNr;
                RemoteApi.paymentAndFiscalization(sapReservation).then(response => {
                    dispatch({
                        type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                        data: response,
                    });
                    RemoteApi.getSapFioriLinks(sapReservation)
                        .then(response => dispatch({
                            type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                            payload: response,
                        }))
                        .catch(error => console.error("nok", error));
                }).catch(error => console.error("nok", error));
            }
            validateSerialNumbers(dispatch, getState);
        })
        .catch(error => console.log(error));
};

export const changeSerialNumber = (productCode, value) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_PICKUP_SERIAL_NUMBER_VALUE,
        productCode,
        value,
    });
    validateSerialNumbers(dispatch, getState);
};

export const validateSerialNumbers = (dispatch, getState) => {
    dispatch({
        type: ACTIONS.PICKUP_SERIAL_NUMBERS_VALIDATION,
        isValid: serialNumbersValidation(getState()),
    });
};

export function serialNumbersValidation(storage) {
    var isValidSim = true;
    var isValidTerminal = true;

    const serialNumbers = storage.checkout.pickup.serialNumbers;
    if (!serialNumbers && !storage.cart.miniCartData.entries) {
        return false;
    }

    // check all sim card serial numbers
    storage.cart.miniCartData.entries.filter(entry => entryContainsReservableSimCard(entry)).map(entry => {
        if (!(serialNumbers && serialNumbers[entry.entryNo] && serialNumbers[entry.entryNo].length === 19)) {
            isValidSim = false;
            return false;
        }
    });

    // check all terminals serial numbers
    storage.cart.miniCartData.entries.map((entry) => {
        entry.terminals.map((terminal) => {
            if (terminal.requireSerialNumber && !(serialNumbers && serialNumbers[terminal.entryNo] && serialNumbers[terminal.entryNo].length > 0)) {
                isValidTerminal = false;
                return false;
            }
        });
    });

    return isValidSim && isValidTerminal;
}

export const changeSimType = (value, bundleNo) => (dispatch) => {
    dispatch({
        type: ACTIONS.CHANGE_PICKUP_SIM_CARD_TYPE,
        value,
        bundleNo,
    });
};

export const pickupSerialNumbersErrorDismiss = () => ({
    type: ACTIONS.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS,
})

export const updateOrderSerialNumbers = (request) => (dispatch, getState) => {
    dispatch(pickupNavigationNextButtonStart());
    dispatch(pickupSerialNumbersErrorDismiss());
    RemoteApi.updateSerialNumbers(request)
        .then(response => {
            dispatch(remote.updateSerialNumbersDone({
                status: "RESERVED"
            }));

            let sapReservation = getState().cart.miniCartData.orderNr;
            RemoteApi.paymentAndFiscalization(sapReservation).then(response => {
                dispatch({
                    type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                    data: response,
                });
                RemoteApi.getSapFioriLinks(sapReservation)
                    .then(response => {
                        dispatch(pickupNavigationNextButtonDone());
                        dispatch({
                            type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                            payload: response,
                        });
                    }).catch(error => {
                        dispatch(remote.pickupGeneralError(error));
                    });
            }).catch(error => {
                dispatch(remote.pickupGeneralError(error));
            });
        }).catch(error => {
            let response = error.responseJSON;
            if (Array.isArray(response)) {
                let data = response.filter(r => !!r && r.details);
                if (data && data.length > 0) {
                    let errors = data.reduce((array, d) => {
                        if (d.details && d.details.length > 0) {
                            return array.concat(d.details);
                        }
                    }, []);
                    dispatch(remote.pickupSerialNumberError(errors));
                    dispatch(remote.pickupGeneralError({
                        responseJSON: {
                            description: "Jedno lub więcej urządzeń ma błędne numery seryjne"
                        },
                    }));
                }
            } else {
                dispatch(remote.pickupGeneralError(error));
            }
        });
};

export const fetchGoodsOrderPaymentStatus = (id) => (dispatch, getState) => {
    let override = getPaymentOverrideStatus(getState());
    if (override) {
        dispatch(pickupNavigationNextButtonStart());
        RemoteApi.getPickupPaymentStatus(override)
            .then(response => {
                dispatch(pickupNavigationNextButtonDone());
                dispatch({
                    type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                    response: "Paid",
                });
            }).catch(error => {
                dispatch(pickupNavigationNextButtonDone());
                remote.pickupPaymentStateusError();
            });
    } else {
        dispatch(pickupNavigationNextButtonStart());
        RemoteApi.checkPaymentStatus(id).then(response => {
            dispatch(pickupNavigationNextButtonDone());
            dispatch({
                type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                response,
            });
        }).catch(error => {
            dispatch(pickupNavigationNextButtonDone());
            remote.pickupPaymentStateusError();
        });
    }
};

export const changePaymentOverride = (value) => (dispatch) => {
    dispatch({
        type: ACTIONS.CHANGE_PAYMENT_OVERRIDE,
        value,
    });
};

export const pickupDocumentDownloadStarted = (code) => (dispatch) => {
    dispatch({
        type: ACTIONS.PICKUP_DOCUMENT_DOWNLOAD_START,
        code,
    });
};

export const printPickupDocument = (code, bundleNo) => (dispatch) => {
    dispatch(pickupDocumentDownloadStarted(code));

    let documentData = {
        documentCodes: code,
        bundleNo: bundleNo,
    };

    return RemoteApiPickup.checkDocumentExistence({
        documentCode: code,
        bundleNo: bundleNo,
    }).then(result => {
        return result === false ?
            RemoteApiPickup.createDocument({
                documentDefinitionCodes: code,
                bundleNo: bundleNo,
                factory: "MOBILE",
            }) : result;
    }).then(() => {
        return RemoteApiPickup.findDocumentInLocalStorage(documentData);
    }).then(result => {
        return !result[code] ? RemoteApiPickup.getDocuments(documentData).then(() => {
            return RemoteApiPickup.findDocumentInLocalStorage(documentData);
        }) : result;
    }).then(result => {
        let link = result[code];
        window.open(result[code], "_blank", "toolbar=0,location=0,menubar=0");

        dispatch({
            type: ACTIONS.PICKUP_DOCUMENT_DOWNLOAD_DONE,
            code: code,
            link: result[code],
            bundleNo: bundleNo,
        });
        return Promise.resolve();
    }).catch(error => {
        console.log(error);
        dispatch({
            type: ACTIONS.PICKUP_GENERAL_ERROR,
            error: "Błąd pobierania dokumentu",
        });
        return Promise.reject();
    });
};

export const fetchSimCardTypes = configurationId => (dispatch, getState) => {
    var store = getState();
    var serialNumbers = store.checkout.reservation.serialNumbers;
    RemoteApi.getSimCardTypes(configurationId).then(data => dispatch(remote.getSimCardTypesDone(data, serialNumbers)));
};

const setDefaultBillingAccountIfDataNotExist = (dispatch, getState, data) => {
    if (!requiredBillingAccountFieldExist(data)) {
        const defaultFixAccount = getBillingAccountsData(getState()).filter(account => account.type === "FIX");
        if (defaultFixAccount.length > 0) {
            setSelectedBillingAccount(defaultFixAccount[0])(dispatch);
        }
        const defaultMobileAccount = getBillingAccountsData(getState()).filter(account => account.type === "MOBILE");
        if (defaultMobileAccount.length > 0) {
            setSelectedBillingAccount(defaultMobileAccount[0])(dispatch);
        }
    }
    return data;
};

export const requestBillingAccountFormData = () => (dispatch, getState) => {
    if (!billingAccountDataRequested(getState())) {
        dispatch(remote.getBillingAccountFormDataStart());
        return RemoteApi.getBillingAccount()
            .then(data => data[0])
            .then(data => getBillingAccountForm(data))
            .then(data => setDefaultBillingAccountIfDataNotExist(dispatch, getState, data))
            .then(data => dispatch(remote.getBillingAccountFormDataDone(data)))
            .then(data => dispatch(cbs.getCbsData(getBillingAccountFormData(getState()))));
    } else {
        return Promise.resolve();
    }
};


export const pickupNavigationNextButtonStart = () => (dispatch) => {
    dispatch({
        type: ACTIONS.PICKUP_NAVIGATION_NEXT_START,
    });
};

export const pickupNavigationNextButtonDone = () => (dispatch) => {
    dispatch({
        type: ACTIONS.PICKUP_NAVIGATION_NEXT_DONE
    });
};

export const fetchSAPSerialNumbers = () => (dispatch, getState) => {
    dispatch(pickupNavigationNextButtonStart());
    RemoteApi.getWarehouseSerialNumbers()
        .then(response => {
            if (response.list && response.list.length > 0) {
                const serials = response.list.reduce((map, obj) => {
                    map[obj.entryNo] = obj.id;
                    return map;
                }, {});
                dispatch(remote.fetchSerialNumbersDone(serials));

                dispatch(remote.updateSerialNumbersDone({
                    status: "RESERVED"
                }));

                const sapReservation = getState().cart.miniCartData.orderNr;
                RemoteApi.paymentAndFiscalization(sapReservation).then(response => {
                    dispatch({
                        type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                        data: response,
                    });
                    RemoteApi.getSapFioriLinks(sapReservation)
                        .then(response => {
                            dispatch(pickupNavigationNextButtonDone());
                            dispatch({
                                type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                                payload: response,
                            });
                        })
                        .catch(error => dispatch(remote.pickupGeneralError(error)));
                }).catch(error => dispatch(remote.pickupGeneralError(error)));
            } else {
                dispatch(remote.pickupGeneralError({
                    description: "Błąd pobierania danych z systemu magazynowego!"
                }));
            }
        })
        .catch(error => dispatch(remote.pickupGeneralError(error)));
};

export const pickupActivation = () => (dispatch) => {
    dispatch(remote.pickupActivationStart());
    RemoteApi.pickupActivation()
        .then(response => dispatch(remote.pickupActivationDone()))
        .catch(error => dispatch(remote.pickupGeneralError(error)));
};

export const fetchPickupLastOrder = () => (dispatch) => {
    RemoteApi.getLastOrder().then(response => dispatch({
        type: ACTIONS.PICKUP_LAST_ORDER_DATA,
        data: response,
    })).catch(error => console.log("LasOrderError: ", error));
};

export const printReturnDevicesDocument = () => (dispatch, getState) => {

    console.log("PRINTING RETURN DEVICES DOCUMENT");

    //start loader
    dispatch({
        type: ACTIONS.RETURN_DOCUMENT_LOADER,
        data: true,
    });

    const code = "RET_DEV_INFO1";
    const bundleNo = 1;
    const documentData = {
        documentCodes: code,
        bundleNo: bundleNo,
    };

    RemoteApiDocs.checkDocumentExistence({
        documentCode: code,
        bundleNo: bundleNo,
    }).then(result => {
        return result === false ?
            RemoteApiDocs.createDocument({
                documentDefinitionCodes: code,
                bundleNo: bundleNo,
                factory: "MOBILE",
            }) : result;

    }).then(() => {
        return RemoteApiDocs.findDocumentInLocalStorage(documentData);
    }).then(result => {
        return !result[code] ? RemoteApiDocs.getDocuments(documentData).then(() => {
            return RemoteApiDocs.findDocumentInLocalStorage(documentData);
        }) : result;
    }).then(result => {
        window.open(result[code]);

        //stop loader
        dispatch({
            type: ACTIONS.RETURN_DOCUMENT_LOADER,
            data: false,
        });

    }).catch(result => {
        console.log(result);

        //stop loader
        dispatch({
            type: ACTIONS.RETURN_DOCUMENT_LOADER,
            data: false,
        });

    });
};

export const forceSlotRefresh = (isForced) => (dispatch) => {
    dispatch({
        type: ACTIONS.INSTALLATION_SLOT_FORCE_REFRESH,
        payload: isForced
    });
};

export const updateConsentGroupExpanded = (listNo) => (dispatch, getState) => {
    const store = getState();
    const value = !(store.checkout.consents.consentGroupExpanded[listNo]);

    dispatch(updateValueConsentGroupExpanded(listNo, value));
};

export const updateValueConsentGroupExpanded = (listNo, value) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CONSENT_GROUP_EXPANDED,
        listNo: listNo,
        value: value,
    });
};

export const registerAgreementConfirmationComponent = () => (dispatch) => {
    dispatch({
        type: ACTIONS.REGISTER_AGREEMENT_VALIDATION_COMPONENT,
        data: true,
    });
};

export const validateCustomerDataFields = (data) => (dispatch) => {
    const dataToValidate = {};
    Object.keys(emptyBusinessData).forEach(k => {
        if (!!data[k]) {
            dataToValidate[k] = data[k];
        }
    });

    const contactToValidate = {};
    Object.keys(emptyCustomerContact).forEach(k => {
        if (!!data[k]) {
            contactToValidate[k] = data[k];
        }
    });

    if (data.mainAddress) {
        Object.keys(emptyAddress).forEach(k => {
            if (!!data.mainAddress[k]) {
                dispatch(changeCustomerMainAddressFormField({
                    name: k,
                    value: data.mainAddress[k]
                }));
            } else if (typeof data.mainAddress[k] === "boolean") {
                dispatch(changeCustomerMainAddressFormField({
                    name: k,
                    value: data.mainAddress[k]
                }, false));
            }
        });
    }
    runValidator(contactToValidate, customerContactFormValidators, changeCustomerContactFormField, null, dispatch);
    runValidator(dataToValidate, customerDataFormValidators, changeCustomerDataFormField, null, dispatch);
}

export const requestBpgData = (nip) => (dispatch) => {
    dispatch(remote.getBpgDataStart());
    bodyLoaderShow();
    RemoteApi.getBpgData(nip)
        .then(data => {
            if (!!data.mainAddress) {
                data.mainAddress.wwtaddress = false;
            }
            if (data.isPublic) {
                dispatch(showSpecifiedMessage("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg"));
            } else {
                dispatch(remote.getBpgDataDone(data));
            }
            dispatch(cbs.getCbsDataThenDispatch(data.mainAddress, true, validateCustomerDataFields, data));
            bodyLoaderHide();
        })
        .catch(() => {
            dispatch(remote.getBpgDataDone());
            bodyLoaderHide();
        });
    //TODO: some logs? errors?
};

export const requestDocumentsToMerge = () => dispatch => {
    return new Promise((resolve, reject) =>
        RemoteApiDocs.getDocumentsToMerge().then(documentsToMergePerBundle => {
            dispatch({
                type: ACTIONS.SET_DOCUMENTS_TO_MERGE_PER_BUNDLE,
                documentsToMergePerBundle,
            });
            resolve(documentsToMergePerBundle);
        }).catch(error => {
            reject(error);
        })
    );
};

export const setInitialNationality = (initialNationality) => dispatch => dispatch({
    type: ACTIONS.SET_INITIAL_NATIONALITY,
    payload: initialNationality
});

export const setForeignerAvailable = (foreignerAvailable) => dispatch => dispatch({
    type: ACTIONS.SET_FOREIGNER,
    payload: foreignerAvailable
});


export const consentsGetStatus = () => (dispatch) => {
    RemoteApi.consentsGetStatus()
        .then(response => {
            console.log(response);
            dispatch({
                type: ACTIONS.CONSENTS_GET_STATUS,
                payload: response
            });
        });
};

export const consentsCreateAndSendDocument = (mail, phone, consentSections) => (dispatch) => {
    RemoteApi.consentsCreateAndSendDocument(mail, phone, consentSections)
        .then(response => {
            dispatch({
                type: ACTIONS.CONSENTS_CREATE_AND_SEND_DOCUMENT,
                payload: response
            });
        });
};

export function enterConsentsEmailAddress(emailAddress) {
    return {
        type: ACTIONS.ENTER_CONSENTS_EMAIL_ADDRESS,
        payload: emailAddress
    };
};

export function enterConsentsPhoneNumber(phoneNumber) {
    return {
        type: ACTIONS.ENTER_CONSENTS_PHONE_NUMBER,
        payload: phoneNumber
    };
};

export function enterConsentsAcknowledgmentsReadWhileTalking(acknowledged) {
    return {
        type: ACTIONS.ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS,
        payload: acknowledged
    };
};

export function resetConsentsStatus() {
    return {
        type: ACTIONS.CONSENTS_GET_STATUS,
        payload: ""
    };
};