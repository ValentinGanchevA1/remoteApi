define(["exports", "../actionTypes", "eshop/modules/cart/actionTypes", "../../auth/actionTypes", "eshop/modules/fix/actionTypes", "../remoteApi", "../validators", "../selectors", "eshop/utils/OnlineUtils", "../actions/data", "./remote", "eshop/modules/cbs/main", "../../cbs/selectors", "../../simfree/constants/OfferTypeEnum", "eshop/modules/cart/actions/cart", "../../documents/actions/documents", "eshop/modules/fix/selectors/root", "lodash", "../constants/DeliveryMethod", "./delivery", "eshop/utils/DataLayerUtils", "../constants/EmailWarningDescriptionEnum"], function(_exports, ACTIONS, CART_ACTIONS, AUTH_ACTIONS, FIX_ACTIONS, _remoteApi, _validators, _selectors, _OnlineUtils, _data, remote, _main, _selectors2, _OfferTypeEnum, _cart, _documents, _root, _lodash, _DeliveryMethod, _delivery, _DataLayerUtils, _EmailWarningDescriptionEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.gotoNextCheckoutStep = gotoNextCheckoutStep;
    _exports.gotoPreviousCheckoutStep = gotoPreviousCheckoutStep;
    _exports.gotoCartSummary = gotoCartSummary;
    _exports.gotoMagnumDeviceList = gotoMagnumDeviceList;
    _exports.updateMagnumTerminal = updateMagnumTerminal;
    _exports.showErrorMessage = showErrorMessage;
    _exports.bodyLoaderEvent = bodyLoaderEvent;
    _exports.bodyLoaderShow = bodyLoaderShow;
    _exports.bodyLoaderHide = bodyLoaderHide;
    _exports.doCheckoutStepPickup = doCheckoutStepPickup;
    _exports.doCheckoutStep = doCheckoutStep;
    _exports.manualRedirectResult = manualRedirectResult;
    _exports.doCheckoutStepNoRedirect = doCheckoutStepNoRedirect;
    _exports.closeCimConsistentErrorModal = closeCimConsistentErrorModal;
    _exports.gotoLoginPage = gotoLoginPage;
    _exports.reloadSummaryOnCart = reloadSummaryOnCart;
    _exports.setConsentStatesToNegative = setConsentStatesToNegative;
    _exports.changeConsentState = changeConsentState;
    _exports.changeSerialNumberField = changeSerialNumberField;
    _exports.changeWarehouse = changeWarehouse;
    _exports.setInitialSerialNumberState = setInitialSerialNumberState;
    _exports.verifySerialNumbers = verifySerialNumbers;
    _exports.getSapFioriLinks = getSapFioriLinks;
    _exports.getFioriCorrectiveInvoiceLink = getFioriCorrectiveInvoiceLink;
    _exports.unlockSale = unlockSale;
    _exports.checkUnlockSaleInSapStatus = checkUnlockSaleInSapStatus;
    _exports.cancelOrder = cancelOrder;
    _exports.cancelOrderWithRedirect = cancelOrderWithRedirect;
    _exports.paymentAndFiscalization = paymentAndFiscalization;
    _exports.openOrderCancelPopup = openOrderCancelPopup;
    _exports.openOrderCancelPopupFromNavComponent = openOrderCancelPopupFromNavComponent;
    _exports.closeOrderCancelErrorPopup = closeOrderCancelErrorPopup;
    _exports.checkPaymentStatus = checkPaymentStatus;
    _exports.paymentOverride = paymentOverride;
    _exports.setInitialConfiguration = setInitialConfiguration;
    _exports.printOrderNumber = printOrderNumber;
    _exports.printInvoiceNumber = printInvoiceNumber;
    _exports.printInvoiceNumberPickup = printInvoiceNumberPickup;
    _exports.openPdfInNewWindow = openPdfInNewWindow;
    _exports.areSerialNumbersFilled = areSerialNumbersFilled;
    _exports.changeOrderComment = changeOrderComment;
    _exports.changeShowComment = changeShowComment;
    _exports.switchEditIdNumberMode = switchEditIdNumberMode;
    _exports.switchForeignerMode = switchForeignerMode;
    _exports.switchSameMnpData = switchSameMnpData;
    _exports.showEarlierInstallationConsentModal = showEarlierInstallationConsentModal;
    _exports.finishSavingAllDocuments = _exports.startSavingAllDocuments = _exports.changeInvoiceEmail = _exports.changeInvoiceEmailMapping = _exports.registerComponentPropsValue = _exports.setIdVerificationResult = _exports.setIdVerificationsSelectedBankId = _exports.setIdVerificationsBanks = _exports.isIdVerificationInProgress = _exports.verifyIdentity = _exports.setAgreementIntroductionDocumentLoading = _exports.setAgreementIntroductionStatus = _exports.setAgreementIntroductionStatuses = _exports.processChanged = _exports.clearSapErrorMessages = _exports.updateDAPPhoneNumber = _exports.updateDeliveryPhoneNumber = _exports.updateSelectedPOSAvailability = _exports.setManualVerificationModalVisibility = _exports.setPermanentlyAgreedConsentsVisibleForGroup = _exports.fetchPickupDocuments = _exports.pickuErrorDismiss = _exports.pickupCancel = _exports.confirmReplanishment = _exports.setCourierDeliveryMethodModalState = _exports.courierDeliveryMethodModalDidMount = _exports.hideEmailWarningModal = _exports.showEmailWarningModal = _exports.closeCourierDeliveryMethodModal = _exports.showCourierDeliveryMethodModal = _exports.earlierInstallationConsentNotAcceptedModalDidMount = _exports.acceptEarlierInstallationConsentNotAcceptedModal = _exports.closeEarlierInstallationConsentNotAcceptedModal = _exports.showEarlierInstallationConsentNotAcceptedModal = _exports.getActiveContracts = _exports.setBillingAccountContractsVisibility = _exports.setSelectedBillingAccount = _exports.setCreateBillingAccount = _exports.setBillingAccounts = _exports.changeBillingAccountFormField = _exports.setBillingAccountFormVisibility = _exports.changeSimCardType = _exports.setSimCardType = _exports.saveInSessionDocumentPosSigned = _exports.changeDebtRepaymentFormField = _exports.changeTelesalesFormField = _exports.changeDocumentsConfirmation = _exports.registerCurrentStepId = _exports.changeBusinessMnpAddressFormField = _exports.changeCustomerMnpDataFormField = _exports.changeEmailRelatedConsents = _exports.changeConsentsContactData = _exports.changeCourierPhoneContact = _exports.changeCustomerContactFormFieldForceValid = _exports.changeCustomerContactDeliveryFormField = _exports.changeCustomerContactFormField = _exports.changeAddressMapping = _exports.changeDeliveryCourierMessageField = _exports.changeDeliveryAddressFormField = _exports.changeCorrespondenceAddressFormField = _exports.setModifyConsentsInCartQueue = _exports.pushToModifyConsentsInCartQueue = _exports.changeCustomerMainAddressFormField = _exports.setGrantingDate = _exports.setRepresentationMode = _exports.removeGrantor = _exports.removeRepresentative = _exports.changeGrantorFormField = _exports.clearRepresentativeFormFieldErrors = _exports.changeRepresentativeFormFieldNoValidations = _exports.changeRepresentativeFormField = _exports.changeRepresentativeCountry = _exports.changeCustomerDataFormFieldNoValidations = _exports.changeCustomerCountry = _exports.changeCustomerRegonFormField = _exports.changeCustomerDataFormField = _exports.setSelectedServiceInstanceIdAction = _exports.setSelectedDesignationNumberAction = _exports.dismissManualErrors = _exports.dismissBackendValidationErrors = _exports.dismissFbbServices = _exports.dismissCvErrors = _exports.dismissAuthErrors = _exports.dismissCallbackErrors = _exports.showSpecifiedMessage = _exports.setFBBServiceData = _exports.requestFBBServiceDataFilteredByWWT = _exports.requestFBBServiceData = _exports.hideWwtComponent = _exports.showWwtComponent = _exports.refreshFixCartWithoutFbbCheck = _exports.gotoFixDispatcher = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    CART_ACTIONS = babelHelpers.interopRequireWildcard(CART_ACTIONS);
    AUTH_ACTIONS = babelHelpers.interopRequireWildcard(AUTH_ACTIONS);
    FIX_ACTIONS = babelHelpers.interopRequireWildcard(FIX_ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    remote = babelHelpers.interopRequireWildcard(remote);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _DeliveryMethod = babelHelpers.interopRequireDefault(_DeliveryMethod);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _EmailWarningDescriptionEnum = babelHelpers.interopRequireDefault(_EmailWarningDescriptionEnum);

    function gotoNextCheckoutStep() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GOTO_CHECKOUT_NEXT
            });
            window.location.href = [window.location.protocol, '//', window.location.host, window.location.pathname, '/dalej'].join('');
        };
    }

    ;

    function gotoPreviousCheckoutStep() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GOTO_CHECKOUT_PREVIOUS
            });
            window.location.href = [window.location.protocol, '//', window.location.host, window.location.pathname, '/wstecz'].join('');
        };
    }

    ;

    function gotoCartSummary() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GOTO_CHECKOUT_CART
            });
            window.location.href = [window.location.protocol, '//', window.location.host, "/koszyk/multi"].join('');
        };
    }

    var gotoFixDispatcher = function gotoFixDispatcher(selectedDesignationNumber, selectedServiceInstanceId) {
        return function(dispatch, getState) {
            _remoteApi.default.postFbbServiceData(selectedDesignationNumber, selectedServiceInstanceId).then(function(response) {
                dispatch({
                    type: ACTIONS.GOTO_FIX_DISPATCHER
                });
                window.location.href = [window.location.protocol, '//', window.location.host, "/internet-domowy/oferty-migracyjne"].join('');
            }).catch(function(error) {
                console.log(error);
            });
        };
    };

    _exports.gotoFixDispatcher = gotoFixDispatcher;

    var refreshFixCartWithoutFbbCheck = function refreshFixCartWithoutFbbCheck() {
        return function(dispatch, getState) {
            _remoteApi.default.refreshFixCartWithoutFbbCheck().then(function(response) {
                dispatch(dismissFbbServices());
            }).catch(function(error) {
                console.log(error);
            });
        };
    };

    _exports.refreshFixCartWithoutFbbCheck = refreshFixCartWithoutFbbCheck;

    var showWwtComponent = function showWwtComponent() {
        return function(dispatch) {
            dispatch({
                type: FIX_ACTIONS.SHOW_WWT_COMPONENT
            });
        };
    };

    _exports.showWwtComponent = showWwtComponent;

    var hideWwtComponent = function hideWwtComponent() {
        return function(dispatch) {
            dispatch({
                type: FIX_ACTIONS.HIDE_WWT_COMPONENT
            });
        };
    };

    _exports.hideWwtComponent = hideWwtComponent;

    var requestFBBServiceData = function requestFBBServiceData() {
        return function(dispatch) {
            return _remoteApi.default.getFBBServiceData().then(function(response) {
                dispatch(setFBBServiceData(response));
            });
        };
    };

    _exports.requestFBBServiceData = requestFBBServiceData;

    var requestFBBServiceDataFilteredByWWT = function requestFBBServiceDataFilteredByWWT() {
        return function(dispatch) {
            _remoteApi.default.getFBBServiceDataFilteredByWWT().then(function(response) {
                if (isOneService(response)) {
                    dispatch(gotoFixDispatcher(response.fixAddressWithServices[0].serviceBundles[0].mainService.designationNumber, response.fixAddressWithServices[0].serviceBundles[0].mainService.cfServiceInstanceId));
                } else {
                    dispatch(setFBBServiceData(response));
                }
            });
        };
    };

    _exports.requestFBBServiceDataFilteredByWWT = requestFBBServiceDataFilteredByWWT;

    function isOneService(response) {
        return !!response && !!response.fixAddressWithServices && response.fixAddressWithServices.length == 1 && !!response.fixAddressWithServices[0].serviceBundles && response.fixAddressWithServices[0].serviceBundles.length == 1;
    }

    var setFBBServiceData = function setFBBServiceData(payload) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_FBB_SERVICE_DATA,
                payload: payload
            });

            if ((0, _root.isPreLandingPage)(getState()) && !!payload && !!payload.fixAddressWithServices && !!payload.fixAddressWithServices.length > 0 && payload.fixAddressWithServices[0] && payload.fixAddressWithServices[0].serviceBundles && payload.fixAddressWithServices[0].serviceBundles.length > 0) {
                console.log("setFBBServiceData payload:");
                console.log(payload);
                var url = "/internet-domowy";
                window.location.replace(url);
            }
        };
    };

    _exports.setFBBServiceData = setFBBServiceData;

    function gotoMagnumDeviceList() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GOTO_MAGNUM_DEVICE_LIST
            });
            var url = "/sklep?offerType=".concat(_OfferTypeEnum.default.CONVERGENT);
            window.location.replace(url);
        };
    }

    function updateMagnumTerminal(bundleNo) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GOTO_MAGNUM_DEVICE_LIST
            });
            dispatch({
                type: CART_ACTIONS.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: bundleNo
            });
            var url = "/sklep?offerType=".concat(_OfferTypeEnum.default.CONVERGENT);
            window.location.replace(url);
        };
    }

    function mapToMessage(data) {
        var specifiedMessages = [{
            condition: function condition(data) {
                return data && data.results && data.results.filter(function(result) {
                    return ["10", "13"].includes(result.code) && result.category === "ORDER";
                }).length !== 0;
            },
            map: function map(data) {
                var result = data && data.results && data.results.filter(function(result) {
                    return ["10", "13"].includes(result.code) && result.category === "ORDER";
                })[0];
                return result && result.description && {
                    text: result.description,
                    type: "error"
                };
            }
        }, {
            condition: function condition(item) {
                return item && item.results && item.results.filter(function(result) {
                    return result.category === "ASSIGNMENT";
                }).length !== 0;
            },
            map: function map(item) {
                var result = item && item.results && item.results.filter(function(i) {
                    return i.category === "ASSIGNMENT";
                })[0];
                var text = result.code === "peselsNoMatch" ? "Dane osoby fizycznej nie są zgodne z danymi Jednoosobowej działalności gospodarczej. Wybierz właściwy scenariusz." : "Sprawdź czy wprowadzone dane są poprawne.";
                return {
                    text: text,
                    type: "error"
                };
            }
        }];
        return specifiedMessages.filter(function(sm) {
            return sm.condition(data);
        }).map(function(sm) {
            return sm.map(data);
        }).filter(function(exists) {
            return exists;
        })[0];
    }

    function showErrorMessage(dispatch, data) {
        if (!(data && data.results && data.results.filter(function(result) {
                return result.code !== '0' && (result.category === 'CV' || result.category === 'CV_MAGNUM' || result.category === 'CV_MAGNUM_WITH_DEPOSIT' || result.category === 'MANUAL' || result.category === 'AUTH' || result.category === 'CALLBACK' || result.category === 'RESERVATION' || result.category === 'SEARCH' || result.category === 'NO_EMAIL_MNP' || result.category === 'CIM_CONSISTENT' || result.category === 'FBB_SERVICES');
            }).length !== 0)) {
            if (data && data.results && data.results.filter(function(result) {
                    return result.code !== '0' && result.category === "PUBLIC";
                }).length !== 0) {
                dispatch(showSpecifiedMessage("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg"));
            } else {
                var msg = mapToMessage(data) || {
                    text: "Sprawdź czy wprowadzone dane są poprawne.",
                    type: "error"
                };
                dispatch({
                    type: AUTH_ACTIONS.SHOW_MESSAGE,
                    msg: msg
                });
            }
        }
    }

    var showSpecifiedMessage = function showSpecifiedMessage(defaultText, type, descriptionName) {
        return function(dispatch) {
            dispatch({
                type: AUTH_ACTIONS.SHOW_MESSAGE,
                msg: {
                    text: defaultText,
                    type: type,
                    descriptionName: descriptionName
                }
            });
        };
    };

    _exports.showSpecifiedMessage = showSpecifiedMessage;

    function bodyLoaderEvent(event) {
        OPL.UI.fire(event, null, 'body-loader');
    }

    function bodyLoaderShow() {
        bodyLoaderEvent('modules.loader.show');
    }

    function bodyLoaderHide() {
        bodyLoaderEvent('modules.loader.hide');
    }

    function doCheckoutStepPickup() {
        return function(dispatch, getState) {
            var checkoutData = (0, _selectors.getCheckoutData)(getState());

            _remoteApi.default.pickupCompletion().then(function(response) {
                dispatch(remote.doCheckoutStepStart(checkoutData));
                dispatch(remote.doCheckoutStepDone({
                    code: 0
                }));
                dispatch(gotoNextCheckoutStep());
            }).catch(function(error) {
                dispatch({
                    type: ACTIONS.PICKUP_GENERAL_ERROR,
                    error: error
                });
            });
        };
    }

    function doCheckoutStep(afterCheckoutStep) {
        return function(dispatch, getState) {
            var checkoutData = (0, _selectors.getCheckoutData)(getState());

            if (showEarlierInstallationConsentModal(checkoutData, getState)) {
                if ((0, _selectors.isEarlierInstallationConsentNotAcceptedModalIsAccepted)(getState())) {
                    checkoutData.delivery.forEach(function(delivery) {
                        return delivery.deliveryMethod = "courier";
                    });
                } else {
                    dispatch(showEarlierInstallationConsentNotAcceptedModal());
                    return;
                }
            }

            if (checkoutData.delivery.some(function(delivery) {
                    return delivery.deliveryMethod === _DeliveryMethod.default.BZU;
                }) && !(0, _selectors.getEmailConfirmationModalAccepted)(getState())) {
                dispatch((0, _delivery.setEmailConfirmationModalState)(true));
                return;
            }

            bodyLoaderEvent('modules.loader.show');
            dispatch(remote.doCheckoutStepStart(checkoutData));

            if ((0, _selectors.getDeliveryAndPaymentStep)(getState())) {
                _DataLayerUtils.default.pushFinalizeOrder((0, _selectors.getAgreementType)(getState()));
            }

            return _remoteApi.default.doCheckoutStep(checkoutData).catch(function(data) {
                bodyLoaderEvent('modules.loader.hide');

                if (data.code === 'REDIRECT') {
                    var redirectPrefix = "redirect:";
                    var redirectVal = data.callbackUrl.toLowerCase();

                    if (redirectVal.indexOf(redirectPrefix) >= 0) {
                        redirectVal = redirectVal.split(redirectPrefix).pop();
                    }

                    window.location.pathname = redirectVal;
                } else if (data.code !== "9") {
                    dispatch(remote.doCheckoutStepError(data));
                }

                showErrorMessage(dispatch, data);
                console.log("showErrorMessage(dispatch, data)2");
            }).then(function(data) {
                if (data.code === 'REDIRECT') {
                    if (!!afterCheckoutStep) {
                        dispatch(afterCheckoutStep());
                    } else {
                        var redirectPrefix = "redirect:";
                        var redirectVal = data.callbackUrl.toLowerCase();

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
                    dispatch((0, _data.forceSlotRefresh)(true));
                    dispatch(remote.doCheckoutStepError(data));
                } else {
                    bodyLoaderEvent('modules.loader.hide');

                    if (data.results.length < 2 && data.results.filter(function(result) {
                            return result.category === "APPARTMENT_NO_VALIDATION" || result.category === "REPLANISHMENT_REQUIRED" || result.category === "EXISTING_ORDER";
                        }).length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.filter(function(result) {
                            return result.category === "CV_WITH_DEPOSIT";
                        }).length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.filter(function(result) {
                            return result.category === "MANUAL";
                        }).length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else if (data.results.length < 2 && data.results.filter(function(result) {
                            return result.code === "2";
                        }).length > 0) {
                        dispatch(remote.doCheckoutStepError(data));
                    } else {
                        dispatch(remote.doCheckoutStepError(data));
                        showErrorMessage(dispatch, data);
                    }
                }
            });
        };
    }

    function manualRedirectResult(results) {
        var errorResults = results.filter(function(result) {
            return result.code !== "0";
        });
        return errorResults.filter(function(error) {
            return error.category !== "MANUAL";
        }).length === 0;
    }

    function doCheckoutStepNoRedirect() {
        return function(dispatch, getState) {
            var checkoutData = (0, _selectors.getCheckoutData)(getState());
            bodyLoaderEvent('modules.loader.show');
            dispatch(remote.doCheckoutStepStart(checkoutData));
            return _remoteApi.default.doCheckoutStep(checkoutData).catch(function(data) {
                bodyLoaderEvent('modules.loader.hide');
                dispatch(remote.doCheckoutStepError(data));
            }).then(function(data) {
                bodyLoaderEvent('modules.loader.hide');

                if (data.code === "0" || !!data.results && manualRedirectResult(data.results)) {
                    dispatch(remote.doCheckoutStepDone(data));
                    window.scrollTo(0, 0);
                } else {
                    bodyLoaderEvent('modules.loader.hide');
                    dispatch(remote.doCheckoutStepError(data));
                }
            });
        };
    }

    var dismissCallbackErrors = function dismissCallbackErrors() {
        return {
            type: ACTIONS.CHECKOUT_ERROR_CALLBACK_DISMISS
        };
    };

    _exports.dismissCallbackErrors = dismissCallbackErrors;

    var dismissAuthErrors = function dismissAuthErrors() {
        return {
            type: ACTIONS.CHECKOUT_ERROR_AUTH_DISMISS
        };
    };

    _exports.dismissAuthErrors = dismissAuthErrors;

    var dismissCvErrors = function dismissCvErrors() {
        return {
            type: ACTIONS.CHECKOUT_ERROR_CV_DISMISS
        };
    };

    _exports.dismissCvErrors = dismissCvErrors;

    var dismissFbbServices = function dismissFbbServices() {
        return {
            type: ACTIONS.CHECKOUT_FBB_SERVICES_DISMISS
        };
    };

    _exports.dismissFbbServices = dismissFbbServices;

    var dismissBackendValidationErrors = function dismissBackendValidationErrors() {
        return {
            type: ACTIONS.CHECKOUT_ERROR_BACKEND_DISMISS
        };
    };

    _exports.dismissBackendValidationErrors = dismissBackendValidationErrors;

    var dismissManualErrors = function dismissManualErrors() {
        return {
            type: ACTIONS.CHECKOUT_ERROR_MANUAL_DISMISS
        };
    };

    _exports.dismissManualErrors = dismissManualErrors;

    var setSelectedDesignationNumberAction = function setSelectedDesignationNumberAction(designationNumber) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_DESIGNATION_NUMBER,
                designationNumber: designationNumber
            });
        };
    };

    _exports.setSelectedDesignationNumberAction = setSelectedDesignationNumberAction;

    var setSelectedServiceInstanceIdAction = function setSelectedServiceInstanceIdAction(serviceInstanceId) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_SELECTED_SERVICE_INSTANCE_ID,
                serviceInstanceId: serviceInstanceId
            });
        };
    };

    _exports.setSelectedServiceInstanceIdAction = setSelectedServiceInstanceIdAction;

    function closeCimConsistentErrorModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHECKOUT_ERROR_AUTH_DISMISS
            });
        };
    }

    function gotoLoginPage() {
        return function(dispatch) {
            dispatch({
                type: AUTH_ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            }); //  window.location.assign("/twojekonto/logowanie?url=" + window.location.href);
        };
    }

    var changeCustomerDataFormField = function changeCustomerDataFormField(_ref) {
        var name = _ref.name,
            value = _ref.value;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return function(dispatch, getState) {
            if (name === "legalForm" && (0, _selectors.getLegalForm)(getState()) !== value) {
                dispatch((0, _documents.fetchDocuments)(value));
            }

            dispatch({
                type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: name,
                value: value,
                errors: validate ? _validators.customerDataFormValidators[name](value) : undefined
            });
        };
    };

    _exports.changeCustomerDataFormField = changeCustomerDataFormField;

    var changeCustomerRegonFormField = function changeCustomerRegonFormField(_ref2) {
        var name = _ref2.name,
            value = _ref2.value;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var isSog = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return function(dispatch) {
            var validatorName = isSog ? name + "Sog" : name;
            dispatch({
                type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: name,
                value: value,
                errors: validate ? _validators.customerDataFormValidators[validatorName](value) : undefined
            });
        };
    };

    _exports.changeCustomerRegonFormField = changeCustomerRegonFormField;

    var changeCustomerCountry = function changeCustomerCountry(_ref3) {
        var value = _ref3.value;
        return function(dispatch, getState) {
            var countryNameOrIsocode = value;
            var countries = (0, _selectors2.getCountries)(getState());
            var country = countries.find(function(country) {
                return country.name === countryNameOrIsocode;
            });

            if (country) {
                countryNameOrIsocode = country.isocode;
            }

            dispatch({
                type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: 'country',
                value: countryNameOrIsocode,
                errors: (0, _validators.countryValidator)(countryNameOrIsocode, countries)
            });
        };
    };

    _exports.changeCustomerCountry = changeCustomerCountry;

    var changeCustomerDataFormFieldNoValidations = function changeCustomerDataFormFieldNoValidations(_ref4) {
        var name = _ref4.name,
            value = _ref4.value;
        return {
            type: ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD,
            name: name,
            value: value
        };
    };

    _exports.changeCustomerDataFormFieldNoValidations = changeCustomerDataFormFieldNoValidations;

    var changeRepresentativeCountry = function changeRepresentativeCountry(_ref5) {
        var id = _ref5.id,
            name = _ref5.name,
            value = _ref5.value,
            index = _ref5.index;
        return function(dispatch, getState) {
            var countryNameOrIsocode = value;
            var countries = (0, _selectors2.getCountries)(getState());
            var country = countries.find(function(country) {
                return country.name === countryNameOrIsocode;
            });

            if (country) {
                countryNameOrIsocode = country.isocode;
            }

            dispatch({
                type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: 'country',
                index: index,
                value: countryNameOrIsocode,
                errors: (0, _validators.countryValidator)(countryNameOrIsocode, countries)
            });
        };
    };

    _exports.changeRepresentativeCountry = changeRepresentativeCountry;

    var changeRepresentativeFormField = function changeRepresentativeFormField(_ref6) {
        var name = _ref6.name,
            value = _ref6.value,
            index = _ref6.index,
            _ref6$validate = _ref6.validate,
            validate = _ref6$validate === void 0 ? true : _ref6$validate;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: name,
                value: value,
                index: index,
                errors: validate && name ? _validators.representativeDataFormValidators[name](value) : []
            });
        };
    };

    _exports.changeRepresentativeFormField = changeRepresentativeFormField;

    var changeRepresentativeFormFieldNoValidations = function changeRepresentativeFormFieldNoValidations(_ref7) {
        var name = _ref7.name,
            value = _ref7.value,
            index = _ref7.index;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: name,
                value: value,
                index: index
            });
        };
    };

    _exports.changeRepresentativeFormFieldNoValidations = changeRepresentativeFormFieldNoValidations;

    var clearRepresentativeFormFieldErrors = function clearRepresentativeFormFieldErrors() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS
            });
        };
    };

    _exports.clearRepresentativeFormFieldErrors = clearRepresentativeFormFieldErrors;

    var changeGrantorFormField = function changeGrantorFormField(_ref8) {
        var name = _ref8.name,
            value = _ref8.value,
            index = _ref8.index,
            validate = _ref8.validate;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_GRANTOR_FORM_FIELD,
                name: name,
                value: value,
                index: index,
                errors: validate && name ? _validators.representativeDataFormValidators[name](value) : []
            });
        };
    };

    _exports.changeGrantorFormField = changeGrantorFormField;

    var removeRepresentative = function removeRepresentative(index) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.REMOVE_REPRESENTATIVE,
                index: index
            });
        };
    };

    _exports.removeRepresentative = removeRepresentative;

    var removeGrantor = function removeGrantor(index) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.REMOVE_GRANTOR,
                index: index
            });
        };
    };

    _exports.removeGrantor = removeGrantor;

    var setRepresentationMode = function setRepresentationMode(mode, modeConfig) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_REPRESENTATION_MODE,
                mode: mode,
                modeConfig: modeConfig
            });
        };
    };

    _exports.setRepresentationMode = setRepresentationMode;

    var setGrantingDate = function setGrantingDate(date) {
        return function(dispatch, getState) {
            var skipValidation = ["JR", "WR"].indexOf((0, _selectors.getRepresentationMode)(getState())) > -1;
            dispatch({
                type: ACTIONS.SET_GRANTING_DATE,
                date: date,
                errors: skipValidation ? [] : _validators.representativeDataFormValidators['grantingDate'](date)
            });
        };
    };

    _exports.setGrantingDate = setGrantingDate;

    function reloadSummaryOnCart(data) {
        return function(dispatch) {
            _remoteApi.default.reloadSummaryOnCart(data.isBusinessClient).then(function(response) {
                return dispatch({
                    type: CART_ACTIONS.FETCH_CART,
                    payload: response
                });
            });
        };
    }

    ;

    var changeCustomerMainAddressFormField = function changeCustomerMainAddressFormField(_ref9) {
        var name = _ref9.name,
            value = _ref9.value,
            cbsId = _ref9.cbsId;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
                name: name,
                value: value,
                cbsId: cbsId,
                errors: validate ? _validators.addressFormValidators[name](value) : undefined
            });
            dispatch(_main.actions.getCbsData((0, _selectors.getAddressMain)(getState())));
        };
    };

    _exports.changeCustomerMainAddressFormField = changeCustomerMainAddressFormField;

    function setConsentStatesToNegative() {
        return function(dispatch, getState) {
            var consents = (0, _selectors.getCheckoutConsents)(getState());
            var selectedStates = (0, _selectors.getConsentsCheckoutData)(getState());
            var consentsToUpdate = [];
            consents.filter(function(consent) {
                if (!consent.states.find(function(state) {
                        return state.required;
                    })) {
                    var selectedStateCode = selectedStates.find(function(state) {
                        return state.consentCode === consent.consentCode;
                    });

                    if (!selectedStateCode) {
                        var stateCode = consent.states.find(function(state) {
                            return !state.positive;
                        }).code;

                        if (!consent.bundleAssignments || consent.bundleAssignments.length === 0) {
                            if (!!consent.msisdns && consent.msisdns.length > 0) {
                                consent.msisdns.forEach(function(bundleConsent) {
                                    consentsToUpdate.push({
                                        consentCode: consent.consentCode,
                                        bundleNo: bundleConsent.bundleNo,
                                        stateCode: stateCode,
                                        relatedWithBonus: consent.isRelatedWithBonus
                                    });
                                });
                            } else {
                                consentsToUpdate.push({
                                    consentCode: consent.consentCode,
                                    bundleNo: null,
                                    stateCode: stateCode,
                                    relatedWithBonus: consent.isRelatedWithBonus
                                });
                            }
                        } else {
                            consentsToUpdate = matchingConsents.concat(consent.bundleAssignments.map(function(ba) {
                                return {
                                    consentCode: consent.consentCode,
                                    bundleNo: ba.bundleNo,
                                    stateCode: stateCode,
                                    relatedWithBonus: consent.isRelatedWithBonus
                                };
                            }));
                        }
                    }
                }

                if (consentsToUpdate.length > 0) {
                    dispatch(changeConsentState(consentsToUpdate));
                }
            });
        };
    }

    function changeConsentState(changedConsents) {
        function dispatchRequiredConsentChangedEvent(consentsData, changedConsents, dispatch) {
            var verificationTypeConsentsData = getVerificationTypeConsentsData(consentsData);
            var verificationTypeConsentsConfig = getVerificationTypeConsentsConfig(consentsData, verificationTypeConsentsData);
            var requiredChangedConsents = verificationTypeConsentsData.filter(function(consentData) {
                return consentCodePrecondition(consentData, changedConsents) && consentData.required === true && listNumberPrecondition(consentData, verificationTypeConsentsConfig);
            });

            if (requiredChangedConsents.length > 0) {
                dispatch({
                    type: ACTIONS.REQUIRED_CONSENT_CHANGED
                });
            }
        }

        function getVerificationTypeConsentsData(consentsData) {
            return consentsData.consents.filter(function(consentData) {
                return consentData.type === consentsData.verificationConsentType;
            });
        }

        function getVerificationTypeConsentsConfig(consentsData, verificationTypeConsentsData) {
            var verificationTypeConsentsCodes = verificationTypeConsentsData.map(function(consentData) {
                return consentData.consentCode;
            });
            return consentsData.conf.filter(function(config) {
                return _lodash.default.intersection(config.consentsCode, verificationTypeConsentsCodes).length > 0;
            });
        }

        function consentCodePrecondition(consentData, changedConsents) {
            return changedConsents.filter(function(changed) {
                return changed.consentCode === consentData.consentCode;
            }).length > 0;
        }

        function listNumberPrecondition(consentData, verificationTypeConsentsConfig) {
            return verificationTypeConsentsConfig.filter(function(config) {
                return _lodash.default.includes(config.consentsCode, consentData.consentCode);
            }).filter(function(config) {
                return config.listNumber === 1 || config.listNumber === 11;
            }).length > 0;
        }

        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_CONSENT_STATE,
                data: changedConsents
            });
            var consentsData = (0, _selectors.getConsentsData)(getState());

            if (consentsData.consents) {
                dispatchRequiredConsentChangedEvent(consentsData, changedConsents, dispatch);

                if (consentsData.consents.find(function(c) {
                        return c.consentCode === changedConsents[0].consentCode;
                    }).shouldCartBeUpdateAfterStateChange) {
                    var checkoutData = (0, _selectors.getCheckoutData)(getState());

                    _remoteApi.default.updateConsents(checkoutData);
                }
            }
        };
    }

    ;

    var pushToModifyConsentsInCartQueue = function pushToModifyConsentsInCartQueue(toAdd) {
        return {
            type: ACTIONS.PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE,
            toAdd: toAdd
        };
    };

    _exports.pushToModifyConsentsInCartQueue = pushToModifyConsentsInCartQueue;

    var setModifyConsentsInCartQueue = function setModifyConsentsInCartQueue(data) {
        return {
            type: ACTIONS.SET_MODIFY_CONSENTS_IN_CART_QUEUE,
            data: data
        };
    };

    _exports.setModifyConsentsInCartQueue = setModifyConsentsInCartQueue;

    var changeCorrespondenceAddressFormField = function changeCorrespondenceAddressFormField(_ref10) {
        var name = _ref10.name,
            value = _ref10.value,
            cbsId = _ref10.cbsId;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD,
                name: name,
                value: value,
                cbsId: cbsId,
                errors: validate ? _validators.addressFormValidators[name](value) : undefined
            });
            dispatch(_main.actions.getCbsData((0, _selectors.getAddressCorrespondence)(getState())));
        };
    };

    _exports.changeCorrespondenceAddressFormField = changeCorrespondenceAddressFormField;

    var changeDeliveryAddressFormField = function changeDeliveryAddressFormField(_ref11) {
        var name = _ref11.name,
            value = _ref11.value,
            cbsId = _ref11.cbsId;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_DELIVERY_ADDRESS_FORM_FIELD,
                name: name,
                value: value,
                cbsId: cbsId,
                errors: validate ? _validators.addressFormValidators[name](value) : undefined
            });
            dispatch(_main.actions.getCbsData((0, _selectors.getAddressDelivery)(getState())));
        };
    };

    _exports.changeDeliveryAddressFormField = changeDeliveryAddressFormField;

    var changeDeliveryCourierMessageField = function changeDeliveryCourierMessageField(_ref12) {
        var name = _ref12.name,
            value = _ref12.value;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_DELIVERY_COURIER_MESSAGE,
                name: name,
                value: value,
                errors: _validators.courierDeliveryMessageValidator
            });
        };
    };

    _exports.changeDeliveryCourierMessageField = changeDeliveryCourierMessageField;

    var changeAddressMapping = function changeAddressMapping(mappedAddress, pickedAddress) {
        return {
            type: ACTIONS.CHANGE_ADDRESS,
            mappedAddress: mappedAddress,
            pickedAddress: pickedAddress
        };
    };

    _exports.changeAddressMapping = changeAddressMapping;

    var changeCustomerContactFormField = function changeCustomerContactFormField(_ref13) {
        var name = _ref13.name,
            value = _ref13.value;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return {
            type: ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
            name: name,
            value: value,
            errors: validate ? _validators.customerContactFormValidators[name](value) : undefined
        };
    };

    _exports.changeCustomerContactFormField = changeCustomerContactFormField;

    var changeCustomerContactDeliveryFormField = function changeCustomerContactDeliveryFormField(_ref14) {
        var name = _ref14.name,
            value = _ref14.value;
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return {
            type: ACTIONS.CHANGE_DELIVERY_CONTACT_FORM_FIELD,
            name: name,
            value: value,
            errors: validate ? _validators.customerContactFormValidators[name](value) : undefined
        };
    };

    _exports.changeCustomerContactDeliveryFormField = changeCustomerContactDeliveryFormField;

    var changeCustomerContactFormFieldForceValid = function changeCustomerContactFormFieldForceValid(_ref15) {
        var name = _ref15.name,
            value = _ref15.value;
        return {
            type: ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
            name: name,
            value: value,
            errors: []
        };
    };

    _exports.changeCustomerContactFormFieldForceValid = changeCustomerContactFormFieldForceValid;

    var changeCourierPhoneContact = function changeCourierPhoneContact(name, value) {
        return {
            type: ACTIONS.CHANGE_COURIER_PHONE_CONTACT,
            name: name,
            value: value,
            errors: _validators.courierPhoneContactValidator[name](value)
        };
    };

    _exports.changeCourierPhoneContact = changeCourierPhoneContact;

    var changeConsentsContactData = function changeConsentsContactData(name, value) {
        return {
            type: ACTIONS.CHANGE_CONSENTS_CONTACT_DATA,
            name: name,
            value: value,
            errors: validate ? _validators.customerContactFormValidators[name](value) : undefined
        };
    };

    _exports.changeConsentsContactData = changeConsentsContactData;

    var changeEmailRelatedConsents = function changeEmailRelatedConsents(noEmail) {
        /*Przerobić na pobieranie danych z kontrolera jak M. Lipiec raczy podesłać specyfikację z SID (powiązanie email->zgoda 21_CONV)*/
        var dataFromController = {
            consentCode: "21_CONV",
            consentNoState: "NO_21_CONV"
        };
        return function(dispatch) {
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
    };

    _exports.changeEmailRelatedConsents = changeEmailRelatedConsents;

    var changeCustomerMnpDataFormField = function changeCustomerMnpDataFormField(_ref16) {
        var name = _ref16.name,
            value = _ref16.value,
            entryIndex = _ref16.entryIndex,
            defaults = _ref16.defaults;
        return {
            type: ACTIONS.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD,
            name: name,
            value: value,
            entryIndex: entryIndex,
            defaults: defaults,
            errors: !!_validators.mnpFormValidators[name] ? _validators.mnpFormValidators[name](value) : []
        };
    };

    _exports.changeCustomerMnpDataFormField = changeCustomerMnpDataFormField;

    var changeBusinessMnpAddressFormField = function changeBusinessMnpAddressFormField(_ref17) {
        var name = _ref17.name,
            value = _ref17.value;
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD,
                name: name,
                value: value,
                errors: _validators.addressFormValidators[name](value)
            });
            dispatch(_main.actions.getCbsData((0, _selectors.getAddressMain)(getState())));
        };
    };

    _exports.changeBusinessMnpAddressFormField = changeBusinessMnpAddressFormField;

    var registerCurrentStepId = function registerCurrentStepId(currentStepId) {
        return {
            type: ACTIONS.REGISTER_CURRENT_STEP_ID,
            id: currentStepId
        };
    };

    _exports.registerCurrentStepId = registerCurrentStepId;

    var changeDocumentsConfirmation = function changeDocumentsConfirmation(value) {
        return {
            type: ACTIONS.CHANGE_DOCUMENTS_CONFIRMATION,
            value: value
        };
    };

    _exports.changeDocumentsConfirmation = changeDocumentsConfirmation;

    var changeTelesalesFormField = function changeTelesalesFormField(name, value) {
        return {
            type: ACTIONS.CHANGE_TELESALES_FORM_FIELD,
            name: name,
            value: value
        };
    };

    _exports.changeTelesalesFormField = changeTelesalesFormField;

    var changeDebtRepaymentFormField = function changeDebtRepaymentFormField(name, value) {
        return {
            type: ACTIONS.CHANGE_DEBT_REPAYMENT_FORM_FIELD,
            name: name,
            value: value
        };
    };

    _exports.changeDebtRepaymentFormField = changeDebtRepaymentFormField;

    var saveInSessionDocumentPosSigned = function saveInSessionDocumentPosSigned(isSigned) {
        return function(dispatch) {
            _remoteApi.default.updateCustomerSignedDocuments(isSigned).then(function(response) {
                dispatch(changeDocumentsConfirmation(isSigned));
            });
        };
    };

    _exports.saveInSessionDocumentPosSigned = saveInSessionDocumentPosSigned;

    function checkDuplicateSerialNumber(serialNumbers, serialNumber, productCode) {
        var duplicateSerialNumber = Object.keys(serialNumbers).filter(function(key) {
            return serialNumbers[key] != "";
        }).find(function(key) {
            return serialNumbers[key] === serialNumber;
        });
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

    function changeSerialNumberField(productCode, serialNumber) {
        changeSerialNumberField;
        return function(dispatch, getState) {
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
    }

    ;

    var setSimCardType = function setSimCardType(bundleNo, simCardType) {
        return {
            type: ACTIONS.CHANGE_SIM_CARD_TYPE,
            bundleNo: bundleNo,
            simCardType: simCardType
        };
    };

    _exports.setSimCardType = setSimCardType;

    var changeSimCardType = function changeSimCardType(bundleNo, simCardType) {
        return function(dispatch, getState) {
            var previousCardType = (0, _selectors.getSimCardTypeForBundle)(bundleNo)(getState());
            dispatch(changingSimCardType(bundleNo, true));

            _remoteApi.default.updateSimCard(bundleNo, simCardType).then(function() {
                dispatch(setSimCardType(bundleNo, simCardType));
                dispatch(changingSimCardType(bundleNo, false));
                (0, _cart.reloadCartState)()(dispatch, getState);
                dispatch((0, _delivery.fetchDeliveryMethods)());
            }).catch(function(error) {
                console.log("Error while changing sim card type=".concat(simCardType, ". Setting previous card type=").concat(previousCardType));
                return _remoteApi.default.updateSimCard(bundleNo, previousCardType);
            }).then(function() {
                dispatch(changingSimCardType(bundleNo, false));
                (0, _cart.reloadCartState)()(dispatch, getState);
            }).catch(function(error) {
                console.log("Error while changing sim card type=".concat(previousCardType));
                dispatch(changingSimCardType(bundleNo, false));
            });
        };
    };

    _exports.changeSimCardType = changeSimCardType;

    var changingSimCardType = function changingSimCardType(bundleNo, changing) {
        return {
            type: ACTIONS.SIM_CARD_TYPE_CHANGING,
            bundleNo: bundleNo,
            changing: changing
        };
    };

    function changeWarehouse(warehouseCode, deviceCode) {
        return function(dispatch, getState) {
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
    }

    ;

    function setInitialSerialNumberState(initialState) {
        return function(dispatch) {
            var serialNumbers = {};

            if (initialState.serialNumberPair) {
                var lines = initialState.serialNumberPair.split(";");
                lines.map(function(pair) {
                    var pairArray = pair.split(",");

                    if (pairArray && pairArray.length > 1) {
                        serialNumbers[pairArray[0]] = pairArray[1];
                    }
                });
            }

            dispatch({
                type: ACTIONS.SET_SERIAL_NUMBER_INITIAL_STATE,
                sapReservationNumber: initialState.sapReservationNumber,
                serialNumberPair: serialNumbers,
                paymentStatus: initialState.paymentStatus,
                agencyPOSReservationDone: initialState.agencyPOSReservationDone,
                saleUnlocked: initialState.saleUnlocked
            });
        };
    }

    function verifySerialNumbers(data) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.VERIFY_SERIAL_NUMBERS_STARTED
            });

            _remoteApi.default.verifySerialNumbers(data).then(function(response) {
                if (response.code && response.code !== "200") {
                    dispatch({
                        type: ACTIONS.VERIFY_SERIAL_NUMBERS_ERROR,
                        payload: response
                    });
                } else {
                    dispatch({
                        type: ACTIONS.VERIFY_SERIAL_NUMBERS,
                        payload: response
                    });
                    dispatch(getSapFioriLinks());
                }
            }, function(error) {
                return dispatch({
                    type: ACTIONS.VERIFY_SERIAL_NUMBERS_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function getSapFioriLinks() {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            if (sapReservationNumber) {
                _remoteApi.default.getSapFioriLinks(sapReservationNumber).then(function(response) {
                    dispatch({
                        type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                        payload: response
                    });
                    dispatch(getFioriCorrectiveInvoiceLink());
                }, function(error) {
                    return dispatch({
                        type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                        payload: error
                    });
                });
            }
        };
    }

    ;

    function getFioriCorrectiveInvoiceLink() {
        return function(dispatch) {
            _remoteApi.default.getFioriCorrectiveInvoiceLink().then(function(response) {
                dispatch({
                    type: ACTIONS.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE,
                    payload: response
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function unlockSale() {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.UNLOCK_SALE_STARTED
            });
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.unlockSale(sapReservationNumber).then(function() {
                dispatch({
                    type: ACTIONS.UNLOCK_SALE_DONE
                });
                dispatch(paymentAndFiscalization());
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function checkUnlockSaleInSapStatus() {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.unlockSale(sapReservationNumber).then(function(data) {
                dispatch({
                    type: ACTIONS.UNLOCK_SALE_STATUS_CHECK_DONE,
                    data: data
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function cancelOrder() {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.cancelOrder(sapReservationNumber).then(function() {
                dispatch({
                    type: ACTIONS.CANCEL_ORDER_DONE
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.CANCEL_ORDER_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function cancelOrderWithRedirect() {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.cancelOrder(sapReservationNumber).then(function() {
                (0, _cart.removeFromCartAndRedirect)(null)(dispatch, getState);
            }, function(error) {
                return dispatch({
                    type: ACTIONS.CANCEL_ORDER_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function paymentAndFiscalization() {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.paymentAndFiscalization(sapReservationNumber).then(function(data) {
                dispatch({
                    type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                    data: data
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function openOrderCancelPopup(param) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_ORDER_CANCEL_POPUP,
                data: param
            });
        };
    }

    ;

    function openOrderCancelPopupFromNavComponent(param) {
        return function(dispatch, getState) {
            (getState().checkout.reservation.sapReservationNumber && param ? checkPaymentStatus()(dispatch, getState) : Promise.resolve()).then(function() {
                return dispatch({
                    type: ACTIONS.OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT,
                    data: param
                });
            });
        };
    }

    ;

    function closeOrderCancelErrorPopup() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_ORDER_CANCEL_ERROR_POPUP
            });
        };
    }

    ;

    function checkPaymentStatus() {
        return function(dispatch, getState) {
            return _remoteApi.default.checkPaymentStatus(getState().checkout.reservation.sapReservationNumber).then(function(data) {
                dispatch({
                    type: ACTIONS.PAYMENT_STATUS_CHECK_DONE,
                    data: data
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function paymentOverride() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PAYMENT_OVERRIDE_DONE
            });
        };
    }

    ;

    function setInitialConfiguration(configuration) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.INITIAL_CONFIGURATION_SET_DONE,
                data: configuration
            });
        };
    }

    ;

    function printOrderNumber(id) {
        return function(dispatch, getState) {
            var store = getState();
            var sapReservationNumber = id ? id : store.checkout.reservation.sapReservationNumber;

            _remoteApi.default.printOrderNumber(sapReservationNumber).then(function(data) {
                openPdfInNewWindow(data);
                dispatch({
                    type: ACTIONS.PRINT_ORDER_NUMBER_DONE
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    ;

    function printInvoiceNumber(id) {
        return printInvoice(id, false);
    }

    ;

    function printInvoiceNumberPickup(id) {
        return printInvoice(id, true);
    }

    ;

    function printInvoice(id, isPickup) {
        return function(dispatch, getState) {
            var sapReservationNumber = id ? id : (0, _selectors.getSapReservationNumber)(getState());

            _remoteApi.default.printInvoiceNumber(sapReservationNumber, isPickup).then(function(data) {
                openPdfInNewWindow(data);
                dispatch({
                    type: ACTIONS.PRINT_INVOICE_NUMBER_DONE
                });
            }, function(error) {
                return dispatch({
                    type: ACTIONS.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: error
                });
            });
        };
    }

    function openPdfInNewWindow(data) {
        var dataURI = "data:application/pdf;base64," + data;
        var pdfWindow = window.open("", '_blank', 'location=0,titlebar=0,toolbar=0,location=0,menubar=0');
        pdfWindow.document.write("<embed style='position: absolute; height: 99%; width: 99%;' src='" + dataURI + "' type='application/pdf;base64'>");
    }

    ;

    function areSerialNumbersFilled(serialNumbers, store) {
        var result = true;
        var checked = false;

        if (!store.checkout.reservation.miniCartData.entries) {
            return false;
        }

        var cartEntries = (0, _selectors.getAllReservableCartEntries)(store);
        cartEntries.filter(function(entry) {
            return entry.isSim && entry.msisdn && entry.simCard.reservable;
        }).map(function(entry) {
            checked = true;
            var simSerialNumberProductCode = entry.productCode + "_" + entry.bundleOmniCode;

            if (!(serialNumbers && serialNumbers[simSerialNumberProductCode] && serialNumbers[simSerialNumberProductCode].length === 19)) {
                result = false;
                return;
            }
        });
        cartEntries.map(function(entry) {
            entry.terminals.map(function(terminal) {
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
        cartEntries.map(function(entry) {
            if (entry.broadbandFixProduct && entry.broadbandFixProduct.devices) {
                entry.broadbandFixProduct.devices.filter(function(device) {
                    return !device.migrated;
                }).map(function(device) {
                    if (device.isSerialNumberRequired) {
                        checked = true;
                        var productkey = device.code + "_" + entry.bundleOmniCode;

                        if (!(serialNumbers[productkey] && serialNumbers[productkey].length > 0)) {
                            result = false;
                            return false;
                        }
                    }
                });
            }

            if (entry.tvFixProduct && entry.tvFixProduct.devices) {
                entry.tvFixProduct.devices.filter(function(device) {
                    return !device.migrated;
                }).map(function(device) {
                    if (device.isSerialNumberRequired) {
                        checked = true;
                        var productkey = device.code + "_" + entry.bundleOmniCode;

                        if (device.isSerialNumberRequired && !(serialNumbers[productkey] && serialNumbers[productkey].length > 0)) {
                            result = false;
                            return false;
                        }
                    }
                });
            }
        });
        cartEntries.map(function(entry) {
            entry.euroSets && entry.euroSets.map(function(euroSet) {
                euroSet.setElements.map(function(euroSetElement) {
                    checked = true;

                    if (!(serialNumbers && serialNumbers[euroSetElement.sku + entry.bundleNo] && serialNumbers[euroSetElement.sku + entry.bundleNo].length > 0)) {
                        result = false;
                        return false;
                    }
                });
            });
        });
        return result || !checked;
    }

    var setBillingAccountFormVisibility = function setBillingAccountFormVisibility(visible) {
        return {
            type: ACTIONS.SET_BILLING_ACCOUNT_FORM_VISIBILITY,
            visible: visible
        };
    };

    _exports.setBillingAccountFormVisibility = setBillingAccountFormVisibility;

    var changeBillingAccountFormField = function changeBillingAccountFormField(name, value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_BILLING_ACCOUNT_FORM_FIELD,
                name: name,
                value: value,
                errors: _validators.billingAccountFormValidators[name](value)
            });
            dispatch(_main.actions.getCbsData((0, _selectors.getBillingAccountFormData)(getState())));
        };
    };

    _exports.changeBillingAccountFormField = changeBillingAccountFormField;

    var setBillingAccounts = function setBillingAccounts(billingAccounts) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_BILLING_ACCOUNTS,
                billingAccounts: billingAccounts
            });
        };
    };

    _exports.setBillingAccounts = setBillingAccounts;

    var setCreateBillingAccount = function setCreateBillingAccount(type) {
        return function(dispatch) {
            _remoteApi.default.setNewBillingAccount({
                type: type
            }).then(function() {
                dispatch({
                    type: ACTIONS.SET_CREATE_NEW_BILLING_ACCOUNT
                });
            });
        };
    };

    _exports.setCreateBillingAccount = setCreateBillingAccount;

    var setSelectedBillingAccount = function setSelectedBillingAccount(billingAccount) {
        return function(dispatch) {
            _remoteApi.default.updateBillingAccount(billingAccount).then(function() {
                if (billingAccount.type === 'MOBILE') {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_MOBILE,
                        billingAccount: billingAccount
                    });
                } else {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_BILLING_ACCOUNT_FIX,
                        billingAccount: billingAccount
                    });
                }
            }).then(function(data) {
                if (billingAccount.type === 'MOBILE') {
                    dispatch({
                        type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS_START
                    });

                    _remoteApi.default.getBillingAccountContracts(billingAccount.accountId).then(function(data) {
                        dispatch({
                            type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS,
                            accountContracts: data
                        });
                    });
                }
            });
        };
    };

    _exports.setSelectedBillingAccount = setSelectedBillingAccount;

    var setBillingAccountContractsVisibility = function setBillingAccountContractsVisibility(visible) {
        return {
            type: ACTIONS.SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY,
            visible: visible
        };
    };

    _exports.setBillingAccountContractsVisibility = setBillingAccountContractsVisibility;

    var getActiveContracts = function getActiveContracts(accountId) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS_START
            });

            _remoteApi.default.getBillingAccountContracts(accountId).then(function(data) {
                dispatch({
                    type: ACTIONS.GET_BILLING_ACCOUNT_CONTRACTS,
                    accountContracts: data
                });
            });
        };
    };

    _exports.getActiveContracts = getActiveContracts;

    function changeOrderComment(comment) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_COMMENT_DONE,
                data: comment
            });
        };
    }

    function changeShowComment() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_SHOW_COMMENT_DONE
            });
        };
    }

    function switchEditIdNumberMode() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SWITCH_EDIT_ID_NUMBER_MODE
            });
        };
    }

    function switchForeignerMode() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SWITCH_FOREIGNER_MODE
            });
        };
    }

    function switchSameMnpData() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SWITCH_SAME_MNP_DATA
            });
        };
    }

    var showEarlierInstallationConsentNotAcceptedModal = function showEarlierInstallationConsentNotAcceptedModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            });
        };
    };

    _exports.showEarlierInstallationConsentNotAcceptedModal = showEarlierInstallationConsentNotAcceptedModal;

    var closeEarlierInstallationConsentNotAcceptedModal = function closeEarlierInstallationConsentNotAcceptedModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            });
        };
    };

    _exports.closeEarlierInstallationConsentNotAcceptedModal = closeEarlierInstallationConsentNotAcceptedModal;

    var acceptEarlierInstallationConsentNotAcceptedModal = function acceptEarlierInstallationConsentNotAcceptedModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            });
        };
    };

    _exports.acceptEarlierInstallationConsentNotAcceptedModal = acceptEarlierInstallationConsentNotAcceptedModal;

    var earlierInstallationConsentNotAcceptedModalDidMount = function earlierInstallationConsentNotAcceptedModalDidMount() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION
            });
        };
    };

    _exports.earlierInstallationConsentNotAcceptedModalDidMount = earlierInstallationConsentNotAcceptedModalDidMount;

    var showCourierDeliveryMethodModal = function showCourierDeliveryMethodModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_COURIER_DELIVERY_METHOD_MODAL
            });
        };
    };

    _exports.showCourierDeliveryMethodModal = showCourierDeliveryMethodModal;

    var closeCourierDeliveryMethodModal = function closeCourierDeliveryMethodModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.HIDE_COURIER_DELIVERY_METHOD_MODAL
            });
        };
    };

    _exports.closeCourierDeliveryMethodModal = closeCourierDeliveryMethodModal;

    var showEmailWarningModal = function showEmailWarningModal() {
        var descriptionKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _EmailWarningDescriptionEnum.default.DEFAULT;
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SHOW_EMAIL_WARNING_MODAL,
                descriptionKey: descriptionKey
            });
        };
    };

    _exports.showEmailWarningModal = showEmailWarningModal;

    var hideEmailWarningModal = function hideEmailWarningModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.HIDE_EMAIL_WARNING_MODAL
            });
        };
    };

    _exports.hideEmailWarningModal = hideEmailWarningModal;

    var courierDeliveryMethodModalDidMount = function courierDeliveryMethodModalDidMount() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.COURIER_DELIVERY_METHOD_MODAL_MOUNTED
            });
        };
    };

    _exports.courierDeliveryMethodModalDidMount = courierDeliveryMethodModalDidMount;

    var setCourierDeliveryMethodModalState = function setCourierDeliveryMethodModalState(payload) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_COURIER_DELIVERY_METHOD_MODAL_STATE,
                payload: payload
            });
        };
    };

    _exports.setCourierDeliveryMethodModalState = setCourierDeliveryMethodModalState;

    function showEarlierInstallationConsentModal(checkoutData, getState) {
        var componentDidMount = (0, _selectors.isEarlierInstallationConsentNotAcceptedModalMounted)(getState());
        return componentDidMount && !(0, _selectors.isEarlierInstallation)(getState()) && checkoutData.delivery.some(function(delivery) {
            return delivery.deliveryMethod === "technical_assistant";
        });
    }

    var confirmReplanishment = function confirmReplanishment() {
        return function(dispatch) {
            _remoteApi.default.confirmReplanishment().then(function(response) {
                return dispatch(doCheckoutStep());
            }).catch(function(error) {
                return console.log("nok", error);
            });
        };
    };

    _exports.confirmReplanishment = confirmReplanishment;

    var pickupCancel = function pickupCancel() {
        return function(dispatch) {
            _remoteApi.default.cancleGoodsOrder().then(function(response) {
                dispatch(doCheckoutStep());
                dispatch({
                    type: ACTIONS.CANCEL_GOODS_ORDER_DONE
                });
            });
        };
    };

    _exports.pickupCancel = pickupCancel;

    var pickuErrorDismiss = function pickuErrorDismiss() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PICKUP_GENERAL_ERROR_DISMISS
            });
        };
    };

    _exports.pickuErrorDismiss = pickuErrorDismiss;

    var fetchPickupDocuments = function fetchPickupDocuments() {
        return function(dispatch) {
            _remoteApi.default.getPickupDocuments().then(function(response) {
                var data = {};

                if (response.length > 0) {
                    data = response.reduce(function(map, doc) {
                        var docs = map[doc.bundleNo];

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
    };

    _exports.fetchPickupDocuments = fetchPickupDocuments;

    var setPermanentlyAgreedConsentsVisibleForGroup = function setPermanentlyAgreedConsentsVisibleForGroup(groupNumber, visible) {
        return {
            type: ACTIONS.SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP,
            groupNumber: groupNumber,
            visible: visible
        };
    };

    _exports.setPermanentlyAgreedConsentsVisibleForGroup = setPermanentlyAgreedConsentsVisibleForGroup;

    var setManualVerificationModalVisibility = function setManualVerificationModalVisibility(visible) {
        return {
            type: ACTIONS.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY,
            visible: visible
        };
    };

    _exports.setManualVerificationModalVisibility = setManualVerificationModalVisibility;

    var updateSelectedPOSAvailability = function updateSelectedPOSAvailability(status) {
        _remoteApi.default.updateSelectedPOSAvailabilityStatus(status);
    };

    _exports.updateSelectedPOSAvailability = updateSelectedPOSAvailability;

    var updateDeliveryPhoneNumber = function updateDeliveryPhoneNumber(data) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_DELIVERY_PHONE_NUMBER,
                data: data
            });
        };
    };

    _exports.updateDeliveryPhoneNumber = updateDeliveryPhoneNumber;

    var updateDAPPhoneNumber = function updateDAPPhoneNumber(data) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_DAP_PHONE_NUMBER,
                data: data
            });
        };
    };

    _exports.updateDAPPhoneNumber = updateDAPPhoneNumber;

    var clearSapErrorMessages = function clearSapErrorMessages() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_SAP_ERROR_MESSAGES
            });
        };
    };

    _exports.clearSapErrorMessages = clearSapErrorMessages;

    var processChanged = function processChanged() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PROCESS_CHANGED
            });
        };
    };

    _exports.processChanged = processChanged;

    var setAgreementIntroductionStatuses = function setAgreementIntroductionStatuses(introductionStatuses) {
        return {
            type: ACTIONS.SET_AGREEMENT_INTRODUCTION_STATUSES,
            introductionStatuses: introductionStatuses
        };
    };

    _exports.setAgreementIntroductionStatuses = setAgreementIntroductionStatuses;

    var setAgreementIntroductionStatus = function setAgreementIntroductionStatus(bundleNo, status) {
        return {
            type: ACTIONS.SET_AGREEMENT_INTRODUCTION_STATUS,
            bundleNo: bundleNo,
            status: status
        };
    };

    _exports.setAgreementIntroductionStatus = setAgreementIntroductionStatus;

    var setAgreementIntroductionDocumentLoading = function setAgreementIntroductionDocumentLoading(bundleNo, loading) {
        return {
            type: ACTIONS.SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING,
            bundleNo: bundleNo,
            loading: loading
        };
    };

    _exports.setAgreementIntroductionDocumentLoading = setAgreementIntroductionDocumentLoading;

    var verifyIdentity = function verifyIdentity() {
        return function(dispatch) {
            _remoteApi.default.requestIdVerification().then(function(verificationResult) {
                dispatch(setIdVerificationResult(verificationResult));

                _OnlineUtils.default.pageRedirect(verificationResult.redirectUrl);
            });
        };
    };

    _exports.verifyIdentity = verifyIdentity;

    var isIdVerificationInProgress = function isIdVerificationInProgress() {
        return function(dispatch, getState) {
            return function(verificationResult) {
                return verificationResult.status === 'IN_PROGRESS' && (0, _selectors.isIdVerificationRequired)(getState());
            };
        };
    };

    _exports.isIdVerificationInProgress = isIdVerificationInProgress;

    var setIdVerificationsBanks = function setIdVerificationsBanks(banks) {
        return {
            type: ACTIONS.SET_ID_VERIFICATION_BANKS,
            banks: banks
        };
    };

    _exports.setIdVerificationsBanks = setIdVerificationsBanks;

    var setIdVerificationsSelectedBankId = function setIdVerificationsSelectedBankId(selectedBankId) {
        return {
            type: ACTIONS.SET_ID_VERIFICATION_SELECTED_BANK_ID,
            selectedBankId: selectedBankId
        };
    };

    _exports.setIdVerificationsSelectedBankId = setIdVerificationsSelectedBankId;

    var setIdVerificationResult = function setIdVerificationResult(verificationResult) {
        return {
            type: ACTIONS.SET_ID_VERIFICATION_RESULT,
            verificationResult: verificationResult
        };
    };

    _exports.setIdVerificationResult = setIdVerificationResult;

    var registerComponentPropsValue = function registerComponentPropsValue(props) {
        return {
            type: ACTIONS.REGISTER_COMPONENT_PROPS_VALUE,
            payload: props
        };
    };

    _exports.registerComponentPropsValue = registerComponentPropsValue;

    var changeInvoiceEmailMapping = function changeInvoiceEmailMapping(invoiceEmailMapping) {
        return {
            type: CART_ACTIONS.INVOICE_EMAIL_MAPPING_CHANGE,
            payload: invoiceEmailMapping
        };
    };

    _exports.changeInvoiceEmailMapping = changeInvoiceEmailMapping;

    var changeInvoiceEmail = function changeInvoiceEmail(invoiceEmail) {
        var validate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return {
            type: CART_ACTIONS.INVOICE_EMAIL_CHANGE,
            value: invoiceEmail,
            errors: validate ? _validators.customerDataFormValidators["invoiceEmail"](invoiceEmail) : []
        };
    };

    _exports.changeInvoiceEmail = changeInvoiceEmail;

    var startSavingAllDocuments = function startSavingAllDocuments() {
        return {
            type: ACTIONS.SAVE_ALL_DOCUMENTS_STARTED
        };
    };

    _exports.startSavingAllDocuments = startSavingAllDocuments;

    var finishSavingAllDocuments = function finishSavingAllDocuments() {
        return {
            type: ACTIONS.SAVE_ALL_DOCUMENTS_FINISHED
        };
    };

    _exports.finishSavingAllDocuments = finishSavingAllDocuments;
});
//# sourceMappingURL=app.js.map