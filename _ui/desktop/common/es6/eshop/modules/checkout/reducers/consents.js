import {
    CHANGE_CONSENT_STATE,
    GET_CONSENTS_DONE,
    GET_CART_CONSENTS_DONE,
    UPDATE_CONSENT_STATE_DONE,
    REGISTER_CMS_CONFIGURATION,
    CONSENT_DOCUMENTS_LOADER,
    CONSENT_PRINT_DOCUMENTS,
    CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
    CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
    CHANGE_CUSTOMER_DATA_FORM_FIELD,
    CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR,
    CHANGE_DOCUMENTS_CONFIRMATION,
    MAKE_CONSENT_READONLY,
    GET_CART_CUSTOMER_DONE,
    PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE,
    SET_MODIFY_CONSENTS_IN_CART_QUEUE,
    SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP,
    CONSENT_GROUP_EXPANDED,
    REQUIRED_CONSENT_CHANGED,
    REGISTER_VERIFICATION_CONSENT_TYPE
} from "../actionTypes";
import * as ACTIONS from "../actionTypes";
import _ from "lodash";

var emptyConsentData = {
    consentCode: "",
    code: "",
    stateRequired: false,
    description: "",
    title: "",
    message: "",
    type: "",
    priority: 0,
    required: false,
    states: [],
    validEntries: [],
    isRelatedWithBonus: false,
    bonuses: [],
    installationLevel: ""
};

var emptyConsentCurrentState = {
    consentCode: "",
    bundleNo: null,
    stateCode: ""
};

export var consents = (state = [], action) => {
    switch (action.type) {
        case GET_CONSENTS_DONE:
            return action.data;
        case MAKE_CONSENT_READONLY:
            let copyState = state.slice();
            let foundIndex = state.findIndex(element => element.consentCode === action.consentCode);
            if (foundIndex != -1) {
                copyState[foundIndex].readonly = action.readOnly;
            }
            return copyState;
        default:
            return state;
    }
};

export var modifyConsentsInCartQueue = (state = [], action) => {
    switch (action.type) {
        case PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE:
            return aggregateStatesInQueue(state, action.toAdd);
        case SET_MODIFY_CONSENTS_IN_CART_QUEUE:
            return action.data;
        default:
            return state;
    }
}

function aggregateStatesInQueue(state, toAddArray) {
    //remove old versions
    let stateWithoutToAddArray = state
    toAddArray.forEach(toAdd => {
        var matchToRemove = x => x.consentCode == toAdd.consentCode && (toAdd.bundleNo == x.bundleNo || !toAdd.bundleNo || !x.bundleNo)
        stateWithoutToAddArray = stateWithoutToAddArray.filter(x => !matchToRemove(x))
    })

    return stateWithoutToAddArray.concat(toAddArray)
}

export var consentStates = (state = [], action) => {
    switch (action.type) {
        case GET_CART_CONSENTS_DONE:
            let consentsWithMsisdn = action.consents.filter(consent => {
                let consentState = action.data.find(consentState => consentState.consentCode === consent.consentCode);
                return consent.msisdns && consent.msisdns.length != 0 && consentState && consentState.bundleNo == null;
            });
            let consentsWithMsisdnCodes = consentsWithMsisdn.map(consent => consent.consentCode);
            let consentStatesWithMsisdn = [];
            consentsWithMsisdn.forEach(consent => {
                let consentState = action.data.find(consentState => consentState.consentCode === consent.consentCode);
                consent.msisdns.forEach(msisdn => {
                    consentStatesWithMsisdn.push({
                        consentCode: consentState.consentCode,
                        bundleNo: msisdn.bundleNo,
                        stateCode: consentState.consentStateCode,
                        permanentlyAgreed: consentState.permanentlyAgreed
                    })
                });
            });
            let consentStatesWithoutMsisdn = action.data.filter(consentState => !consentsWithMsisdnCodes.includes(consentState.consentCode)).map(cartConsent => ({
                consentCode: cartConsent.consentCode,
                bundleNo: cartConsent.bundleNo,
                stateCode: cartConsent.consentStateCode,
                permanentlyAgreed: cartConsent.permanentlyAgreed
            }));
            let consentStates = [...consentStatesWithMsisdn, ...consentStatesWithoutMsisdn];
            return makeBundleNoOptionallyExplicit(consentStates, action.consents)
        case CHANGE_CONSENT_STATE:
            var changeDecisions = [];
            action.data.map(consentState => {
                var consentBundleNo = consentState.bundleNo || null;
                var consentCurrentState = state.filter(e => e.consentCode === consentState.consentCode && (consentBundleNo == null || e.bundleNo == consentBundleNo));
                if (consentCurrentState[0]) {
                    consentCurrentState.forEach(ccs => ccs.stateCode = consentState.stateCode);
                } else {
                    changeDecisions =
                        changeDecisions.concat(
                            [
                                ({
                                    consentCode: consentState.consentCode,
                                    stateCode: consentState.stateCode,
                                    bundleNo: consentBundleNo,
                                    permanentlyAgreed: false
                                })
                            ]
                        );
                }

            });
            return state.concat(changeDecisions);
        case UPDATE_CONSENT_STATE_DONE:
            var updateDecisions = [];
            action.response.map(consentState => {
                var consentBundleNo = consentState.bundleNo || null;
                var consentCurrentState = state.find(e => e.consentCode === consentState.consentCode && e.bundleNo == consentBundleNo);
                if (consentCurrentState) {
                    state.find(e => e.consentCode === consentState.consentCode && e.bundleNo == consentBundleNo)
                        .stateCode = consentState.stateCode;
                } else {
                    updateDecisions =
                        updateDecisions.concat(
                            [
                                ({
                                    consentCode: consentState.consentCode,
                                    stateCode: consentState.stateCode,
                                    bundleNo: consentBundleNo,
                                    permanentlyAgreed: false
                                })
                            ]
                        );
                }
            });
            return state.concat(updateDecisions);
        case GET_CONSENTS_DONE:
            const consentCodes = action.data.map((consent => consent.consentCode));
            return state.filter(consentState => {
                var result = false;
                consentCodes.map(c => {
                    if (c === consentState.consentCode) {
                        result = true;
                        return;
                    }
                });
                return result;
            });
        default:
            return state;
    }
};


export var conf = (state = [], action) => {
    switch (action.type) {
        case REGISTER_CMS_CONFIGURATION:
            return state.concat(action.config || []);
        default:
            return state;
    }
};


export var consentDocumentsLoader = (state = false, action) => {
    switch (action.type) {
        case CONSENT_DOCUMENTS_LOADER:
            return action.data;
        default:
            return state;
    }
};

export var consentDocumentsPrintState = (state = false, action) => {
    switch (action.type) {
        case CONSENT_PRINT_DOCUMENTS:
            return true;
        case CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            return false;
        case CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            return false;
        case CHANGE_CUSTOMER_DATA_FORM_FIELD:
            return false;
        case REQUIRED_CONSENT_CHANGED:
            return false;
        default:
            return state;
    }
};

export var consentDocumentsPrintStateForMobile = (state = false, action) => {
    switch (action.type) {
        case CONSENT_PRINT_DOCUMENTS:
            return true;
        default:
            return state;
    }
};

export var consentTypeInPrintConsentsValidator = (consentType = "WZRK", action) => {
    switch (action.type) {
        case CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR:
            return action.consentType;
        default:
            return consentType;
    }
};

export var verificationConsentType = (verificationConsentType = null, action) => {
    switch (action.type) {
        case REGISTER_VERIFICATION_CONSENT_TYPE:
            return action.verificationConsentType;
        default:
            return verificationConsentType;
    }
};

export var documentsConfirmation = (state = false, action) => {
    switch (action.type) {
        case CHANGE_DOCUMENTS_CONFIRMATION:
            return action.value;
        default:
            return state;
    }
};

export var permanentlyAgreedVisibleForGroup = (state = {}, action) => {
    switch (action.type) {
        case SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP:
            return {
                ...state, [action.groupNumber]: action.visible
            };
        default:
            return state;
    }
};

export var consentGroupExpanded = (state = [], action) => {
    switch (action.type) {
        case CONSENT_GROUP_EXPANDED:
            return {
                ...state, [action.listNo]: action.value
            };
        default:
            return state;
    }
};

export const isRegisteredAgreementConfirmationComponent = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.REGISTER_AGREEMENT_VALIDATION_COMPONENT:
            return true;
        default:
            return state;
    }
};

export const wasBonusAgreementConfirmationModalConfirmed = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CLOSE_AGREEMENT_VALIDATION_MODAL:
            if ((action.modalVariant === 'BONUS' || action.modalVariant === 'COMMON') && !!action.wasConfirmed) {
                return true;
            }
            return state;
        default:
            return state;
    }
};

export const wasBigAndZonkAgreementConfirmationModalConfirmed = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CLOSE_AGREEMENT_VALIDATION_MODAL:
            if ((action.modalVariant === 'BIGZONK' || action.modalVariant === 'COMMON') && !!action.wasConfirmed) {
                return true;
            }
            return state;
        default:
            return state;
    }
};

function makeBundleNoOptionallyExplicit(checkoutConsentStates, checkoutConsents) {
    let consentsWithBundleAssignments = (checkoutConsents || []).filter(consent => consent.bundleAssignments && consent.bundleAssignments[0])
    checkoutConsentStates = checkoutConsentStates || []

    let makeBundleNoExplicitFor = consentsWithBundleAssignments.map(c => {
        let currentConsentStates = checkoutConsentStates.filter(cs => cs.consentCode == c.consentCode)
        let nullConsentState = currentConsentStates.filter(cs => cs.bundleNo == null)[0]
        let nonNullConsentStates = currentConsentStates.filter(cs => cs.bundleNo != null)

        if (nullConsentState) {
            return {
                ...c,
                nullConsentState,
                nonNullConsentStates
            }
        } else {
            return null
        }
    }).filter(c => !!c) //not null

    let doNonTouchThisConsentState = cs => !makeBundleNoExplicitFor.find(mbnef => mbnef.consentCode == cs.consentCode)

    let ret = checkoutConsentStates.filter(doNonTouchThisConsentState)

    let consentStatesWithExplicitBundleNo = _.flatMap(makeBundleNoExplicitFor, c => {
        if (c.nonNullConsentStates[0]) {
            return c.nonNullConsentStates;
        } else {
            return c.bundleAssignments.map(ba => ({
                ...c.nullConsentState,
                bundleNo: ba.bundleNo
            }))
        }
    });

    return ret.concat(consentStatesWithExplicitBundleNo)

}


export const consentDocumentStatus = (status = "", action) => {
    switch (action.type) {
        case ACTIONS.CONSENTS_GET_STATUS:
            return action.payload;
        default:
            return status;
    }
};

export const consentEmailAddress = (emailAddress = "", action) => {
    switch (action.type) {
        case ACTIONS.ENTER_CONSENTS_EMAIL_ADDRESS:
            return action.payload;
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return action.data.emailAddress ? action.data.emailAddress : '';
        default:
            return emailAddress;
    }
};

export const consentPhoneNumber = (phoneNumber = "", action) => {
    switch (action.type) {
        case ACTIONS.ENTER_CONSENTS_PHONE_NUMBER:
            return action.payload;
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return action.data.phoneNumber ? action.data.phoneNumber : '';
        default:
            return phoneNumber;
    }
};
export const consentAcknowledgmentsReadWhileTalking = (acknowledged = false, action) => {
    switch (action.type) {
        case ACTIONS.ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS:
            return action.payload;
        default:
            return acknowledged;
    }
};