define(["exports", "../actionTypes", "lodash"], function(_exports, ACTIONS, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.consentAcknowledgmentsReadWhileTalking = _exports.consentPhoneNumber = _exports.consentEmailAddress = _exports.consentDocumentStatus = _exports.wasBigAndZonkAgreementConfirmationModalConfirmed = _exports.wasBonusAgreementConfirmationModalConfirmed = _exports.isRegisteredAgreementConfirmationComponent = _exports.consentGroupExpanded = _exports.permanentlyAgreedVisibleForGroup = _exports.documentsConfirmation = _exports.verificationConsentType = _exports.consentTypeInPrintConsentsValidator = _exports.consentDocumentsPrintStateForMobile = _exports.consentDocumentsPrintState = _exports.consentDocumentsLoader = _exports.conf = _exports.consentStates = _exports.modifyConsentsInCartQueue = _exports.consents = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var consents = function consents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CONSENTS_DONE:
                return action.data;

            case ACTIONS.MAKE_CONSENT_READONLY:
                var copyState = state.slice();
                var foundIndex = state.findIndex(function(element) {
                    return element.consentCode === action.consentCode;
                });

                if (foundIndex != -1) {
                    copyState[foundIndex].readonly = action.readOnly;
                }

                return copyState;

            default:
                return state;
        }
    };

    _exports.consents = consents;

    var modifyConsentsInCartQueue = function modifyConsentsInCartQueue() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE:
                return aggregateStatesInQueue(state, action.toAdd);

            case ACTIONS.SET_MODIFY_CONSENTS_IN_CART_QUEUE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.modifyConsentsInCartQueue = modifyConsentsInCartQueue;

    function aggregateStatesInQueue(state, toAddArray) {
        //remove old versions
        var stateWithoutToAddArray = state;
        toAddArray.forEach(function(toAdd) {
            var matchToRemove = function matchToRemove(x) {
                return x.consentCode == toAdd.consentCode && (toAdd.bundleNo == x.bundleNo || !toAdd.bundleNo || !x.bundleNo);
            };

            stateWithoutToAddArray = stateWithoutToAddArray.filter(function(x) {
                return !matchToRemove(x);
            });
        });
        return stateWithoutToAddArray.concat(toAddArray);
    }

    var consentStates = function consentStates() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_CONSENTS_DONE:
                var consentsWithMsisdn = action.consents.filter(function(consent) {
                    var consentState = action.data.find(function(consentState) {
                        return consentState.consentCode === consent.consentCode;
                    });
                    return consent.msisdns && consent.msisdns.length != 0 && consentState && consentState.bundleNo == null;
                });
                var consentsWithMsisdnCodes = consentsWithMsisdn.map(function(consent) {
                    return consent.consentCode;
                });
                var consentStatesWithMsisdn = [];
                consentsWithMsisdn.forEach(function(consent) {
                    var consentState = action.data.find(function(consentState) {
                        return consentState.consentCode === consent.consentCode;
                    });
                    consent.msisdns.forEach(function(msisdn) {
                        consentStatesWithMsisdn.push({
                            consentCode: consentState.consentCode,
                            bundleNo: msisdn.bundleNo,
                            stateCode: consentState.consentStateCode,
                            permanentlyAgreed: consentState.permanentlyAgreed
                        });
                    });
                });
                var consentStatesWithoutMsisdn = action.data.filter(function(consentState) {
                    return !consentsWithMsisdnCodes.includes(consentState.consentCode);
                }).map(function(cartConsent) {
                    return {
                        consentCode: cartConsent.consentCode,
                        bundleNo: cartConsent.bundleNo,
                        stateCode: cartConsent.consentStateCode,
                        permanentlyAgreed: cartConsent.permanentlyAgreed
                    };
                });

                var _consentStates = [].concat(consentStatesWithMsisdn, babelHelpers.toConsumableArray(consentStatesWithoutMsisdn));

                return makeBundleNoOptionallyExplicit(_consentStates, action.consents);

            case ACTIONS.CHANGE_CONSENT_STATE:
                var changeDecisions = [];
                action.data.map(function(consentState) {
                    var consentBundleNo = consentState.bundleNo || null;
                    var consentCurrentState = state.filter(function(e) {
                        return e.consentCode === consentState.consentCode && (consentBundleNo == null || e.bundleNo == consentBundleNo);
                    });

                    if (consentCurrentState[0]) {
                        consentCurrentState.forEach(function(ccs) {
                            return ccs.stateCode = consentState.stateCode;
                        });
                    } else {
                        changeDecisions = changeDecisions.concat([{
                            consentCode: consentState.consentCode,
                            stateCode: consentState.stateCode,
                            bundleNo: consentBundleNo,
                            permanentlyAgreed: false
                        }]);
                    }
                });
                return state.concat(changeDecisions);

            case ACTIONS.UPDATE_CONSENT_STATE_DONE:
                var updateDecisions = [];
                action.response.map(function(consentState) {
                    var consentBundleNo = consentState.bundleNo || null;
                    var consentCurrentState = state.find(function(e) {
                        return e.consentCode === consentState.consentCode && e.bundleNo == consentBundleNo;
                    });

                    if (consentCurrentState) {
                        state.find(function(e) {
                            return e.consentCode === consentState.consentCode && e.bundleNo == consentBundleNo;
                        }).stateCode = consentState.stateCode;
                    } else {
                        updateDecisions = updateDecisions.concat([{
                            consentCode: consentState.consentCode,
                            stateCode: consentState.stateCode,
                            bundleNo: consentBundleNo,
                            permanentlyAgreed: false
                        }]);
                    }
                });
                return state.concat(updateDecisions);

            case ACTIONS.GET_CONSENTS_DONE:
                var consentCodes = action.data.map(function(consent) {
                    return consent.consentCode;
                });
                return state.filter(function(consentState) {
                    var result = false;
                    consentCodes.map(function(c) {
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

    _exports.consentStates = consentStates;

    var conf = function conf() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_CMS_CONFIGURATION:
                return state.concat(action.config || []);

            default:
                return state;
        }
    };

    _exports.conf = conf;

    var consentDocumentsLoader = function consentDocumentsLoader() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_DOCUMENTS_LOADER:
                return action.data;

            default:
                return state;
        }
    };

    _exports.consentDocumentsLoader = consentDocumentsLoader;

    var consentDocumentsPrintState = function consentDocumentsPrintState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_PRINT_DOCUMENTS:
                return true;

            case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                return false;

            case ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
                return false;

            case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return false;

            case ACTIONS.REQUIRED_CONSENT_CHANGED:
                return false;

            default:
                return state;
        }
    };

    _exports.consentDocumentsPrintState = consentDocumentsPrintState;

    var consentDocumentsPrintStateForMobile = function consentDocumentsPrintStateForMobile() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_PRINT_DOCUMENTS:
                return true;

            default:
                return state;
        }
    };

    _exports.consentDocumentsPrintStateForMobile = consentDocumentsPrintStateForMobile;

    var consentTypeInPrintConsentsValidator = function consentTypeInPrintConsentsValidator() {
        var consentType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "WZRK";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR:
                return action.consentType;

            default:
                return consentType;
        }
    };

    _exports.consentTypeInPrintConsentsValidator = consentTypeInPrintConsentsValidator;

    var verificationConsentType = function verificationConsentType() {
        var verificationConsentType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_VERIFICATION_CONSENT_TYPE:
                return action.verificationConsentType;

            default:
                return verificationConsentType;
        }
    };

    _exports.verificationConsentType = verificationConsentType;

    var documentsConfirmation = function documentsConfirmation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_DOCUMENTS_CONFIRMATION:
                return action.value;

            default:
                return state;
        }
    };

    _exports.documentsConfirmation = documentsConfirmation;

    var permanentlyAgreedVisibleForGroup = function permanentlyAgreedVisibleForGroup() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.groupNumber, action.visible));

            default:
                return state;
        }
    };

    _exports.permanentlyAgreedVisibleForGroup = permanentlyAgreedVisibleForGroup;

    var consentGroupExpanded = function consentGroupExpanded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_GROUP_EXPANDED:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.listNo, action.value));

            default:
                return state;
        }
    };

    _exports.consentGroupExpanded = consentGroupExpanded;

    var isRegisteredAgreementConfirmationComponent = function isRegisteredAgreementConfirmationComponent() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_AGREEMENT_VALIDATION_COMPONENT:
                return true;

            default:
                return state;
        }
    };

    _exports.isRegisteredAgreementConfirmationComponent = isRegisteredAgreementConfirmationComponent;

    var wasBonusAgreementConfirmationModalConfirmed = function wasBonusAgreementConfirmationModalConfirmed() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.wasBonusAgreementConfirmationModalConfirmed = wasBonusAgreementConfirmationModalConfirmed;

    var wasBigAndZonkAgreementConfirmationModalConfirmed = function wasBigAndZonkAgreementConfirmationModalConfirmed() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.wasBigAndZonkAgreementConfirmationModalConfirmed = wasBigAndZonkAgreementConfirmationModalConfirmed;

    function makeBundleNoOptionallyExplicit(checkoutConsentStates, checkoutConsents) {
        var consentsWithBundleAssignments = (checkoutConsents || []).filter(function(consent) {
            return consent.bundleAssignments && consent.bundleAssignments[0];
        });
        checkoutConsentStates = checkoutConsentStates || [];
        var makeBundleNoExplicitFor = consentsWithBundleAssignments.map(function(c) {
            var currentConsentStates = checkoutConsentStates.filter(function(cs) {
                return cs.consentCode == c.consentCode;
            });
            var nullConsentState = currentConsentStates.filter(function(cs) {
                return cs.bundleNo == null;
            })[0];
            var nonNullConsentStates = currentConsentStates.filter(function(cs) {
                return cs.bundleNo != null;
            });

            if (nullConsentState) {
                return _objectSpread({}, c, {
                    nullConsentState: nullConsentState,
                    nonNullConsentStates: nonNullConsentStates
                });
            } else {
                return null;
            }
        }).filter(function(c) {
            return !!c;
        }); //not null

        var doNonTouchThisConsentState = function doNonTouchThisConsentState(cs) {
            return !makeBundleNoExplicitFor.find(function(mbnef) {
                return mbnef.consentCode == cs.consentCode;
            });
        };

        var ret = checkoutConsentStates.filter(doNonTouchThisConsentState);

        var consentStatesWithExplicitBundleNo = _lodash.default.flatMap(makeBundleNoExplicitFor, function(c) {
            if (c.nonNullConsentStates[0]) {
                return c.nonNullConsentStates;
            } else {
                return c.bundleAssignments.map(function(ba) {
                    return _objectSpread({}, c.nullConsentState, {
                        bundleNo: ba.bundleNo
                    });
                });
            }
        });

        return ret.concat(consentStatesWithExplicitBundleNo);
    }

    var consentDocumentStatus = function consentDocumentStatus() {
        var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENTS_GET_STATUS:
                return action.payload;

            default:
                return status;
        }
    };

    _exports.consentDocumentStatus = consentDocumentStatus;

    var consentEmailAddress = function consentEmailAddress() {
        var emailAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.consentEmailAddress = consentEmailAddress;

    var consentPhoneNumber = function consentPhoneNumber() {
        var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.consentPhoneNumber = consentPhoneNumber;

    var consentAcknowledgmentsReadWhileTalking = function consentAcknowledgmentsReadWhileTalking() {
        var acknowledged = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS:
                return action.payload;

            default:
                return acknowledged;
        }
    };

    _exports.consentAcknowledgmentsReadWhileTalking = consentAcknowledgmentsReadWhileTalking;
});
//# sourceMappingURL=consents.js.map