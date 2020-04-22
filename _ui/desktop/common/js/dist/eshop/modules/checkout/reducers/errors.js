define(["exports", "../actionTypes", "../utils/utils"], function(_exports, _actionTypes, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.frontValidationMsg = _exports.existingOrderOrCartValidation = _exports.agreementConfirmationModalVariant = _exports.showAgreementConfirmationModal = _exports.pickupReplanishmentRequired = _exports.fixAppartmentNoValidation = _exports.fixCustomerExists = _exports.cvWithDeposit = _exports.manual = _exports.stock = _exports.reservation = _exports.backendValidation = _exports.data = _exports.order = _exports.noemailmnp = _exports.cimconsenterror = _exports.needsearch = _exports.callback = _exports.auth = _exports.cvMagnum = _exports.cv = _exports.cim = void 0;

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

    var getResults = function getResults(action) {
        return action.results || [];
    };

    var cim = function cim() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CIM";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.cim = cim;

    var cv = function cv() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CV";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description,
                        details: result.details,
                        paytelAcceptable: !!result.paytelAcceptable
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_CV_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.cv = cv;

    var cvMagnum = function cvMagnum() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CV_MAGNUM" || result.category === "CV_MAGNUM_WITH_DEPOSIT";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description,
                        details: result.details,
                        category: result.category,
                        paytelAcceptable: result.paytelAcceptable
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_CV_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.cvMagnum = cvMagnum;

    var auth = function auth() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "AUTH";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.auth = auth;

    var callback = function callback() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CALLBACK";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_CALLBACK_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.callback = callback;

    var needsearch = function needsearch() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "SEARCH";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.needsearch = needsearch;

    var cimconsenterror = function cimconsenterror() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CIM_CONSISTENT";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description,
                        peselFromSession: result.details.peselFromSession,
                        peselFromCheckout: result.details.peselFromCheckout
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.cimconsenterror = cimconsenterror;

    var noemailmnp = function noemailmnp() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "NO_EMAIL_MNP";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.noemailmnp = noemailmnp;

    var order = function order() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "ORDER";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.order = order;

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "DATA";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.data = data;

    var backendValidation = function backendValidation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "VALIDATION";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.backendValidation = backendValidation;

    var reservation = function reservation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "RESERVATION";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.reservation = reservation;

    var stock = function stock() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "STOCK";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.stock = stock;

    var manual = function manual() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "MANUAL";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_MANUAL_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.manual = manual;

    var cvWithDeposit = function cvWithDeposit() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "CV_WITH_DEPOSIT";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description,
                        deposit: result.deposit,
                        bundleNo: result.bundleNo,
                        allowDepositAcceptance: result.allowDepositAcceptance,
                        paytelAcceptable: result.paytelAcceptable
                    };
                });
                //        case CHECKOUT_ERROR_BACKEND_DISMISS:
                //             return [];

            default:
                return state;
        }
    };

    _exports.cvWithDeposit = cvWithDeposit;

    var fixCustomerExists = function fixCustomerExists() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.code === "GET_CUSTOMER";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.fixCustomerExists = fixCustomerExists;

    var fixAppartmentNoValidation = function fixAppartmentNoValidation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                if (getResults(action).length < 2) {
                    return getResults(action).filter(function(result) {
                        return result.category === "APPARTMENT_NO_VALIDATION";
                    }).map(function(result) {
                        return {
                            code: result.code,
                            description: result.description
                        };
                    });
                } else {
                    return [];
                }

                case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                    return [];

                default:
                    return state;
        }
    };

    _exports.fixAppartmentNoValidation = fixAppartmentNoValidation;

    var pickupReplanishmentRequired = function pickupReplanishmentRequired() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return getResults(action).filter(function(result) {
                    return result.category === "REPLANISHMENT_REQUIRED";
                }).map(function(result) {
                    return {
                        code: result.code,
                        description: result.description
                    };
                });

            case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.pickupReplanishmentRequired = pickupReplanishmentRequired;

    var showAgreementConfirmationModal = function showAgreementConfirmationModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_AGREEMENT_VALIDATION_MODAL:
                return true;

            case _actionTypes.CLOSE_AGREEMENT_VALIDATION_MODAL:
                return false;

            default:
                return state;
        }
    };

    _exports.showAgreementConfirmationModal = showAgreementConfirmationModal;

    var agreementConfirmationModalVariant = function agreementConfirmationModalVariant() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_AGREEMENT_VALIDATION_MODAL:
                return action.modalVariant;

            default:
                return message;
        }
    };

    _exports.agreementConfirmationModalVariant = agreementConfirmationModalVariant;

    var existingOrderOrCartValidation = function existingOrderOrCartValidation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
            case _actionTypes.DO_CHECKOUT_STEP_DONE:
                return [];

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                if (getResults(action).length < 2) {
                    return getResults(action).filter(function(result) {
                        return result.category === "EXISTING_ORDER";
                    }).map(function(result) {
                        return {
                            code: result.code,
                            description: result.description
                        };
                    });
                } else {
                    return [];
                }

                case _actionTypes.CHECKOUT_ERROR_BACKEND_DISMISS:
                    return [];

                default:
                    return state;
        }
    };

    _exports.existingOrderOrCartValidation = existingOrderOrCartValidation;

    var frontValidationMsg = function frontValidationMsg() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FRONT_VALIDATION:
                return action.data.map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: true
                    });
                });

            case _actionTypes.CHANGE_CONSENT_STATE:
            case _actionTypes.UPDATE_CONSENT_STATE_START:
                return state.map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            case _actionTypes.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            case _actionTypes.SWITCH_CUSTOMER_EDIT_MODE:
            case _actionTypes.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            case _actionTypes.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                return (0, _utils.removeElementFromArray)(state, 'type', 'customerData').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
            case _actionTypes.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
            case _actionTypes.CHANGE_CUSTOMER_MNP_DATA_CONTACT_METHOD:
            case _actionTypes.CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_MODE:
            case _actionTypes.CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_TIME:
                return (0, _utils.removeElementFromArray)(state, 'type', 'mnpData').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.SELECT_APU:
                return (0, _utils.removeElementFromArray)(state, 'type', 'apuData').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.CONSENT_PRINT_DOCUMENTS:
                return (0, _utils.removeElementFromArray)(state, 'type', 'consentDocuments').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.CHANGE_REPRESENTATIVE_FORM_FIELD:
            case _actionTypes.CHANGE_GRANTOR_FORM_FIELD:
                return (0, _utils.removeElementFromArray)(state, 'type', 'representativeData').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            case _actionTypes.VERIFY_SERIAL_NUMBERS:
                return (0, _utils.removeElementFromArray)(state, 'type', 'simCardSerialNumberFilled').map(function(e) {
                    return _objectSpread({}, e, {
                        afterValidation: false
                    });
                });

            default:
                return state;
        }
    };

    _exports.frontValidationMsg = frontValidationMsg;
});
//# sourceMappingURL=errors.js.map