define(["exports", "../remoteApi", "../../documents/remoteApi", "../../documents/pickup/remoteApi", "./remote", "../actionTypes", "../../magnum2/actionTypes", "../selectors", "../../cart/actions/cart", "eshop/modules/cbs/main", "./app", "../utils/utils", "../utils/MiniCartUtils", "../../documents/actions/documents", "../reducers/helperObjects", "../validators", "eshop/modules/auth/actions/api", "eshop/modules/auth/selectors/authorization", "./delivery"], function(_exports, _remoteApi, _remoteApi2, _remoteApi3, remote, ACTIONS, MAGNUM_ACTIONS, _selectors, _cart, _main, _app, _utils, _MiniCartUtils, _documents, _helperObjects, _validators, _api, _authorization, _delivery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.serialNumbersValidation = serialNumbersValidation;
    _exports.enterConsentsEmailAddress = enterConsentsEmailAddress;
    _exports.enterConsentsPhoneNumber = enterConsentsPhoneNumber;
    _exports.enterConsentsAcknowledgmentsReadWhileTalking = enterConsentsAcknowledgmentsReadWhileTalking;
    _exports.resetConsentsStatus = resetConsentsStatus;
    _exports.consentsCreateAndSendDocument = _exports.consentsGetStatus = _exports.setForeignerAvailable = _exports.setInitialNationality = _exports.requestDocumentsToMerge = _exports.requestBpgData = _exports.validateCustomerDataFields = _exports.registerAgreementConfirmationComponent = _exports.updateValueConsentGroupExpanded = _exports.updateConsentGroupExpanded = _exports.forceSlotRefresh = _exports.printReturnDevicesDocument = _exports.fetchPickupLastOrder = _exports.pickupActivation = _exports.fetchSAPSerialNumbers = _exports.pickupNavigationNextButtonDone = _exports.pickupNavigationNextButtonStart = _exports.requestBillingAccountFormData = _exports.fetchSimCardTypes = _exports.printPickupDocument = _exports.pickupDocumentDownloadStarted = _exports.changePaymentOverride = _exports.fetchGoodsOrderPaymentStatus = _exports.updateOrderSerialNumbers = _exports.pickupSerialNumbersErrorDismiss = _exports.changeSimType = _exports.validateSerialNumbers = _exports.changeSerialNumber = _exports.fetchSerialNumbers = _exports.pickupGeneralError = _exports.fetchPosSimCardTypes = _exports.registerVerificationConsentType = _exports.registerPrintConsentValidator = _exports.selectApu = _exports.printMobileConsents = _exports.printConsents = _exports.openFile = _exports.downloadFile = _exports.openDocument = _exports.selectCustomerWorkPhoneNumber = _exports.selectCvDocument = _exports.fetchCvDocumentList = _exports.selectWwtAddress = _exports.getSelectedWwtAddress = _exports.validateZipCode = _exports.getZipCodeFromWWT = _exports.updateInstallationInfo = _exports.fetchDeliveryMethodsOnly = _exports.updateDelivery = _exports.updateCartAndGetDocuments = _exports.updateAsynchConsent = _exports.updateConsentsStates = _exports.clearModifyConsentsInCartQueue = _exports.requestRecalculateConsentsForForeigner = _exports.requestRecalculateConsentsStrategy = _exports.requestCartConsentsData = _exports.requestCartMnpData = _exports.subscribeCustomerSelected = _exports.changeInstallationComment = _exports.selectInstallationTimeSlot = _exports.fetchInstallationAvailableTimeSlots = _exports.requestCartRepresentativeData = _exports.clearCartCustomerRequested = _exports.requestCustomerData = _exports.requestCartCustomerData = _exports.forceRequestCartCustomerData = _exports.registerCmsConsentConfig = _exports.unregisterNextStepCondition = _exports.registerNextStepCondition = void 0;
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _remoteApi2 = babelHelpers.interopRequireDefault(_remoteApi2);
    _remoteApi3 = babelHelpers.interopRequireDefault(_remoteApi3);
    remote = babelHelpers.interopRequireWildcard(remote);
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    MAGNUM_ACTIONS = babelHelpers.interopRequireWildcard(MAGNUM_ACTIONS);

    var registerNextStepCondition = function registerNextStepCondition(condition) {
        return function(dispatch, getState) {
            if ((0, _selectors.checkoutConditionIsRegistered)(condition)(getState())) {
                return;
            }

            dispatch({
                type: ACTIONS.REGISTER_NEXT_STEP_CONDITION,
                condition: condition
            });
        };
    };

    _exports.registerNextStepCondition = registerNextStepCondition;

    var unregisterNextStepCondition = function unregisterNextStepCondition(condition) {
        return function(dispatch, getState) {
            if (!(0, _selectors.checkoutConditionIsRegistered)(condition)(getState())) {
                return;
            }

            dispatch({
                type: ACTIONS.UNREGISTER_NEXT_STEP_CONDITION,
                condition: condition
            });
        };
    };

    _exports.unregisterNextStepCondition = unregisterNextStepCondition;

    var registerCmsConsentConfig = function registerCmsConsentConfig(config) {
        return {
            type: ACTIONS.REGISTER_CMS_CONFIGURATION,
            config: config
        };
    };

    _exports.registerCmsConsentConfig = registerCmsConsentConfig;

    var forceRequestCartCustomerData = function forceRequestCartCustomerData() {
        return function(dispatch, getState) {
            dispatch(remote.getCartCustomerStart());
            return _remoteApi.default.getCartCustomer().then(function(data) {
                    return data.length > 0 ? data[0] : null;
                }) // we pick the customer from the first bundle
                .then(function(data) {
                    dispatch(remote.getCartCustomerDone(data)); //todo if DZ ?

                    dispatch(_main.actions.getCbsData((0, _selectors.getAddressMain)(getState()), true));
                    dispatch(_main.actions.getCbsData((0, _selectors.getAddressCorrespondence)(getState())));
                });
        };
    };

    _exports.forceRequestCartCustomerData = forceRequestCartCustomerData;

    var requestCartCustomerData = function requestCartCustomerData() {
        return function(dispatch, getState) {
            if (!(0, _selectors.customerDataRequested)(getState())) {
                return dispatch(forceRequestCartCustomerData());
            } else {
                return Promise.resolve();
            }
        };
    };

    _exports.requestCartCustomerData = requestCartCustomerData;

    var requestCustomerData = function requestCustomerData() {
        return function(dispatch, getState) {
            dispatch(remote.getCustomerStart());
            return _remoteApi.default.getCustomer().then(function(data) {
                dispatch(remote.getCustomerDone(data));
            });
        };
    };

    _exports.requestCustomerData = requestCustomerData;

    var clearCartCustomerRequested = function clearCartCustomerRequested() {
        return {
            type: ACTIONS.CLEAR_CART_CUSTOMER_REQUESTED
        };
    };

    _exports.clearCartCustomerRequested = clearCartCustomerRequested;

    var requestCartRepresentativeData = function requestCartRepresentativeData() {
        return function(dispatch, getState) {
            if (!(0, _selectors.representativeDataRequested)(getState())) {
                dispatch(remote.getCartRepresentativeStart());
                return _remoteApi.default.getCartRepresentative().then(function(data) {
                    return data.length > 0 ? data[0] : null;
                }).then(function(data) {
                    return dispatch(remote.getCartRepresentativeDone(data));
                });
            } else {
                return Promise.resolve();
            }
        };
    };

    _exports.requestCartRepresentativeData = requestCartRepresentativeData;

    var fetchInstallationAvailableTimeSlots = function fetchInstallationAvailableTimeSlots() {
        var earlierInstallationConsentAccepted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var documentsDeliveryMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var forcedRefreshSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return function(dispatch, getState) {
            dispatch(remote.getInstallationAvailableTimeSlotsStart());
            (0, _selectors.installationAvailableTimeSlotsRequested)(getState());
            dispatch(registerNextStepCondition('installationTimeSlot'));

            _remoteApi.default.getInstallationAvailableTimeSlots(earlierInstallationConsentAccepted, documentsDeliveryMode).then(function(data) {
                return dispatch(remote.getInstallationAvailableTimeSlotsDone(data));
            });

            dispatch(selectInstallationTimeSlot({}));

            if (forcedRefreshSlots) {
                dispatch(forceSlotRefresh(false));
                dispatch({
                    type: ACTIONS.SHOW_INSTALLATION_SLOT_ERROR,
                    payload: true
                });
            }
        };
    };

    _exports.fetchInstallationAvailableTimeSlots = fetchInstallationAvailableTimeSlots;

    var selectInstallationTimeSlot = function selectInstallationTimeSlot(data) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SELECT_INSTALLATION_TIME_SLOT,
                data: data
            });
            dispatch({
                type: ACTIONS.SHOW_INSTALLATION_SLOT_ERROR,
                payload: false
            });
            var text = "";
            var days = (0, _selectors.getInstallationAvailableTimeSlots)(getState()).slots;

            if (days) {
                days.map(function(day, i) {
                    if (day.slots) {
                        day.slots.map(function(slot, j) {
                            if (slot.startDate == data.startDate && slot.endDate == data.endDate) {
                                text = text + " " + day.header.split(" ")[1] + " " + day.header.split(" ")[2] + " " + data.startDate.split("-")[0] + ", " + slot.htmlText;
                                dispatch({
                                    type: ACTIONS.SELECT_INSTALLATION_SLOT_DESCRIPTION,
                                    payload: text
                                });
                            }
                        });
                    }
                });
            }
        };
    };

    _exports.selectInstallationTimeSlot = selectInstallationTimeSlot;

    var changeInstallationComment = function changeInstallationComment(data) {
        return {
            type: ACTIONS.CHANGE_INSTALLATION_COMMENT,
            payload: data.value
        };
    };

    _exports.changeInstallationComment = changeInstallationComment;

    var subscribeCustomerSelected = function subscribeCustomerSelected() {
        return function(dispatch, getState) {
            (0, _utils.whenAvailable)("PubSub", function() {
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

                    if ((0, _authorization.getRegisterBillingAccountPopupB2B)(getState())) {
                        dispatch((0, _api.requestLoggedCustomerDataAndCheckExistence)());
                    }
                });
                console.log("subscribeCustomerSelectedFlag-", window.subscribeCustomerSelectedFlag);
            }, dispatch);
        };
    };

    _exports.subscribeCustomerSelected = subscribeCustomerSelected;

    var requestCartMnpData = function requestCartMnpData(defaults) {
        return function(dispatch, getState) {
            if (!(0, _selectors.cartMnpDataRequested)(getState())) {
                dispatch(remote.getCartMnpDataStart());

                _remoteApi.default.getCartMnpData().then(function(response) {
                    return dispatch(remote.getCartMnpDataDone({
                        response: response,
                        defaults: defaults
                    }));
                });
            }
        };
    };

    _exports.requestCartMnpData = requestCartMnpData;

    var requestCartConsentsData = function requestCartConsentsData() {
        return function(dispatch, getState) {
            var deliveryMethodCode = (0, _delivery.selectedDocumentsDeliveryMethod)(getState());

            if (!deliveryMethodCode && (0, _selectors.getCurrentStepId)(getState()) == "delivery-payment" && !(0, _selectors.cartConsentsDataRequested)(getState())) {
                console.log("DEBUG deliveryMethodCode is empty, getting only cart consents");
                dispatch(remote.getCartConsentsStart());

                _remoteApi.default.getCartConsents().then(function(data) {
                    return dispatch(remote.getCartConsentsDone(data, data));
                });

                return Promise.resolve();
            }

            var legalForm = (0, _selectors.getLegalForm)(getState());

            if (deliveryMethodCode || legalForm || !(0, _selectors.cartConsentsDataRequested)(getState()) || (0, _authorization.isLogged)(getState())) {
                dispatch(remote.getCartConsentsStart());
                dispatch(remote.getConsentsStart({
                    deliveryMethodCode: deliveryMethodCode,
                    legalForm: legalForm
                }));

                _remoteApi.default.getConsentsData(deliveryMethodCode, legalForm).then(function(consents) {
                    dispatch(remote.getConsentsDone(consents, deliveryMethodCode));
                    dispatch(remote.setConsentReadOnly("21_CONV", (0, _selectors.getCustomerNoEmail)(getState())));

                    _remoteApi.default.getCartConsents().then(function(data) {
                        return dispatch(remote.getCartConsentsDone(data, consents));
                    });
                });
            }
        };
    };

    _exports.requestCartConsentsData = requestCartConsentsData;

    var requestRecalculateConsentsStrategy = function requestRecalculateConsentsStrategy(bundleNo, offerType) {
        return function(dispatch, getState) {
            var deliveryMethodCode = (0, _delivery.selectedDocumentsDeliveryMethod)(getState());
            var legalForm = (0, _selectors.getLegalForm)(getState());
            dispatch(remote.getCartConsentsStart());

            _remoteApi.default.recalculateConsentFromStrategy(bundleNo, offerType).then(function() {
                _remoteApi.default.getConsentsData(deliveryMethodCode, legalForm).then(function(consents) {
                    dispatch(remote.getConsentsDone(consents, deliveryMethodCode));
                    dispatch(remote.setConsentReadOnly("21_CONV", (0, _selectors.getCustomerNoEmail)(getState())));

                    _remoteApi.default.getCartConsents().then(function(data) {
                        return dispatch(remote.getCartConsentsDone(data, consents));
                    });
                });
            });
        };
    };

    _exports.requestRecalculateConsentsStrategy = requestRecalculateConsentsStrategy;

    var requestRecalculateConsentsForForeigner = function requestRecalculateConsentsForForeigner(isForeigner) {
        return function(dispatch) {
            dispatch(remote.getCartConsentsStart());

            _remoteApi.default.requestRecalculateConsentsForForeigner(isForeigner).then(function() {
                _remoteApi.default.getConsentsData().then(function(consents) {
                    dispatch(remote.getConsentsDone(consents));

                    _remoteApi.default.getCartConsents().then(function(data) {
                        return dispatch(remote.getCartConsentsDone(data, consents));
                    });
                });
            });
        };
    };

    _exports.requestRecalculateConsentsForForeigner = requestRecalculateConsentsForForeigner;

    var clearModifyConsentsInCartQueue = function clearModifyConsentsInCartQueue(dataAlreadyProcessed) {
        return function(dispatch, getState) {
            var currentData = (0, _selectors.getModifyConsentsInCartQueue)(getState()); //remove already processed data

            var consentStateEquals = function consentStateEquals(cs1, cs2) {
                return cs1.consentCode == cs2.consentCode && cs1.consentState == cs2.consentState;
            };

            if (dataAlreadyProcessed && dataAlreadyProcessed[0]) {
                var consentStateContains = function consentStateContains(cs, csArray) {
                    return csArray.filter(function(c) {
                        return consentStateEquals(c, cs);
                    }).length > 0;
                };

                var newData = currentData.filter(function(cs) {
                    return !consentStateContains(cs, dataAlreadyProcessed);
                });
                dispatch((0, _app.setModifyConsentsInCartQueue)(newData));
            } //send not processed data to backend


            currentData = (0, _selectors.getModifyConsentsInCartQueue)(getState());

            if (currentData[0]) {
                dispatch(updateConsentsStates(currentData));
            }
        };
    };

    _exports.clearModifyConsentsInCartQueue = clearModifyConsentsInCartQueue;

    var updateConsentsStates = function updateConsentsStates(data) {
        return function(dispatch, getState) {
            if (data.length > 0 && !(0, _selectors.updatingAnyConsent)(getState())) {
                var codes = data.map(function(e) {
                    return e.consentCode;
                });
                dispatch(remote.updateCartConsentsStart(codes));
                return _remoteApi.default.updateCartConsents(data).then(function(response) {
                    dispatch((0, _cart.fetchCartPromise)()).then(function() {
                        return dispatch(remote.updateCartConsentsDone(response));
                    });
                    (0, _cart.fetchMiniCart)()(dispatch, getState);
                    dispatch(clearModifyConsentsInCartQueue(data));
                });
            }
        };
    };

    _exports.updateConsentsStates = updateConsentsStates;

    var updateAsynchConsent = function updateAsynchConsent() {
        return function(dispatch, getState) {
            var data = (0, _selectors.getCheckoutData)(getState());

            _remoteApi.default.updateConsents(data).then(function(response) {
                dispatch((0, _documents.clearAllLinks)());
            });
        };
    };

    _exports.updateAsynchConsent = updateAsynchConsent;

    var updateCartAndGetDocuments = function updateCartAndGetDocuments() {
        return function(dispatch, getState) {
            var checkoutData = (0, _selectors.getCheckoutData)(getState());

            _remoteApi.default.updateCheckoutCart(checkoutData).then(function() {
                cartUpdateDone(dispatch, getState);
            });
        };
    };

    _exports.updateCartAndGetDocuments = updateCartAndGetDocuments;

    var updateDelivery = function updateDelivery() {
        return function(dispatch, getState) {
            return new Promise(function(resolve, reject) {
                _remoteApi.default.updateCheckoutCart((0, _selectors.getCheckoutDataForDelivery)(getState())).then(function(success) {
                    resolve(success);
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    };

    _exports.updateDelivery = updateDelivery;

    var cartUpdateDone = function cartUpdateDone(dispatch, getState) {
        dispatch((0, _documents.fetchDocuments)());
        dispatch(fetchDeliveryMethodsOnly());
    };

    var fetchDeliveryMethodsOnly = function fetchDeliveryMethodsOnly() {
        return function(dispatch) {
            _remoteApi.default.getCartDelivery().then(function(data) {
                dispatch((0, _delivery.fetchDeliveryMethodsDone)(data));
            });
        };
    };

    _exports.fetchDeliveryMethodsOnly = fetchDeliveryMethodsOnly;

    var updateInstallationInfo = function updateInstallationInfo() {
        return function(dispatch, getState) {
            var checkoutData = (0, _selectors.getCheckoutData)(getState());

            _remoteApi.default.updateInstallationInfoOnCart(checkoutData);
        };
    }; // get zipCode from WWT


    _exports.updateInstallationInfo = updateInstallationInfo;

    var getZipCodeFromWWT = function getZipCodeFromWWT(placeId, placeName, streetId, streetName, streetNumber, apartmentNumber) {
        return function(dispatch) {
            dispatch(remote.fetchZipCodeFromWWTActions.start());
            return _remoteApi.default.getZipCodeFromWWT(placeId, streetId, streetNumber).success(function(response) {
                if (response.length === 1) {
                    dispatch(remote.fetchZipCodeFromWWTActions.success({
                        placeId: placeId,
                        placeName: placeName,
                        streetId: streetId,
                        streetName: streetName,
                        streetNumber: streetNumber,
                        apartmentNumber: apartmentNumber,
                        zip: response[0].zip
                    }));
                } else if (response.length > 1) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDRESS_NO_ZIP,
                        payload: {
                            placeId: placeId,
                            placeName: placeName,
                            streetId: streetId,
                            streetName: streetName,
                            streetNumber: streetNumber,
                            apartmentNumber: apartmentNumber,
                            zips: response.map(function(r) {
                                return r.zip;
                            })
                        }
                    });
                    dispatch({
                        type: MAGNUM_ACTIONS.OPEN_WWT_ZIP_MODAL
                    });
                }
            }).fail(function(err) {
                console.log(err);

                if (err.status === 404) {
                    dispatch({
                        type: MAGNUM_ACTIONS.SAVE_WWT_ADDRESS_NO_ZIP,
                        payload: {
                            placeId: placeId,
                            placeName: placeName,
                            streetId: streetId,
                            streetName: streetName,
                            streetNumber: streetNumber,
                            apartmentNumber: apartmentNumber
                        }
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
    };

    _exports.getZipCodeFromWWT = getZipCodeFromWWT;

    var validateZipCode = function validateZipCode(_ref) {
        var addressType = _ref.addressType,
            zip = _ref.zip,
            townId = _ref.townId,
            streetId = _ref.streetId,
            streetNumber = _ref.streetNumber;
        return function(dispatch) {
            var type = "";

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

            _remoteApi.default.validateZipCode(zip, townId, streetId, streetNumber).success(function(response) {
                return dispatch({
                    type: type,
                    name: "zipValid",
                    value: !!response
                });
            }).fail(function(err) {
                dispatch({
                    type: type,
                    name: "zipValid",
                    value: false
                });
                console.error(err);
            });
        };
    };

    _exports.validateZipCode = validateZipCode;

    var getSelectedWwtAddress = function getSelectedWwtAddress() {
        return function(dispatch) {
            dispatch(remote.fetchSelectedWwtAddressActions.start());
            return _remoteApi.default.getSelectedWwtAddress().then(function(data) {
                return dispatch(remote.fetchSelectedWwtAddressActions.success(data));
            }, function(error) {
                return dispatch(remote.fetchSelectedWwtAddressActions.error());
            });
        };
    };

    _exports.getSelectedWwtAddress = getSelectedWwtAddress;

    var selectWwtAddress = function selectWwtAddress(data) {
        return {
            type: ACTIONS.SELECT_WWT_ADDRESS,
            payload: data
        };
    };

    _exports.selectWwtAddress = selectWwtAddress;

    var fetchCvDocumentList = function fetchCvDocumentList() {
        return function(dispatch, getState) {
            _remoteApi.default.fetchCvDocumentList().then(function(response) {
                dispatch({
                    type: ACTIONS.SELECT_CV_DOCUMENTS_LIST,
                    payload: response
                });
            });
        };
    };

    _exports.fetchCvDocumentList = fetchCvDocumentList;

    var selectCvDocument = function selectCvDocument(documentCode) {
        return function(dispatch, getState) {
            dispatch({
                documentCode: documentCode,
                type: ACTIONS.SELECT_CV_DOCUMENT
            });
        };
    };

    _exports.selectCvDocument = selectCvDocument;

    var selectCustomerWorkPhoneNumber = function selectCustomerWorkPhoneNumber(phoneNumber) {
        return function(dispatch, getState) {
            dispatch({
                phoneNumber: phoneNumber,
                type: ACTIONS.SELECT_CUSTOMER_WORK_PHONE_NUMBER,
                errors: _validators.customerWorkPhoneNumberValidator.customerWorkPhoneNumber(phoneNumber)
            });
        };
    };

    _exports.selectCustomerWorkPhoneNumber = selectCustomerWorkPhoneNumber;

    var openDocument = function openDocument(link) {
        var fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";
        var request = new XMLHttpRequest(),
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

    _exports.openDocument = openDocument;

    var downloadFile = function downloadFile(link) {
        var mimeType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'application/pdf';
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open("GET", link);
            request.responseType = "arraybuffer";

            request.onreadystatechange = function() {
                if (request.readyState !== 4) return;

                if (request.status >= 200 && request.status < 300) {
                    resolve(new Blob([request.response], {
                        type: mimeType
                    }));
                } else {
                    reject("Error while downloading file=".concat(link));
                }
            };

            request.send(null);
        });
    };

    _exports.downloadFile = downloadFile;

    var openFile = function openFile(file, filename) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // IE
            window.navigator.msSaveOrOpenBlob(file, filename);
        } else {
            var fileURL = URL.createObjectURL(file);
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

    _exports.openFile = openFile;

    var printConsents = function printConsents(consentCodes) {
        return function(dispatch, getState) {
            dispatch((0, _app.setConsentStatesToNegative)()); //customer

            var checkoutData = (0, _selectors.getCheckoutData)(getState()); //start loader

            dispatch({
                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                data: true
            }); //create customer

            _remoteApi.default.doCheckoutAsyncStep(checkoutData).catch(function(data) {
                if (data.code !== "9") {
                    dispatch(remote.doCheckoutStepError(data));
                }

                (0, _app.showErrorMessage)(dispatch, data); //stop loader

                dispatch({
                    type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                    data: false
                });
            }).then(function(data) {
                if (data.code === "0" || data.code === "9" || !!data.results && (0, _app.manualRedirectResult)(data.results) || data.results.filter(function(result) {
                        return result.category === "APPARTMENT_NO_VALIDATION";
                    }).length > 0) {
                    dispatch(remote.doCheckoutStepDone(data)); //print documents

                    _remoteApi.default.getDocumentCode(consentCodes).then(function(response) {
                        console.log("PRINTING OF CONSENTS " + response.documentCode);
                        console.log(response);
                        var code = response.documentCode;
                        var bundleNo = null;
                        var documentData = {
                            documentCodes: code,
                            bundleNo: bundleNo
                        };

                        _remoteApi2.default.checkDocumentExistence({
                            documentCode: code,
                            bundleNo: bundleNo
                        }).then(function(result) {
                            return result === false ? _remoteApi2.default.createDocument({
                                documentDefinitionCodes: code,
                                bundleNo: 1,
                                factory: "MOBILE"
                            }) : result;
                        }).then(function() {
                            return _remoteApi2.default.findDocumentInLocalStorage(documentData);
                        }).then(function(result) {
                            return !result[code] ? _remoteApi2.default.getDocuments(documentData).then(function() {
                                return _remoteApi2.default.findDocumentInLocalStorage(documentData);
                            }) : result;
                        }).then(function(result) {
                            //stop loader
                            dispatch({
                                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                                data: false
                            }); //set validator

                            dispatch({
                                type: ACTIONS.CONSENT_PRINT_DOCUMENTS
                            });
                            openDocument(result[code]);
                        }).catch(function(result) {
                            console.log(result); //stop loader

                            dispatch({
                                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                                data: false
                            }); //validator

                            dispatch({
                                type: ACTIONS.CONSENT_PRINT_DOCUMENTS
                            });
                        });
                    });
                } else {
                    dispatch(remote.doCheckoutStepError(data));
                    (0, _app.showErrorMessage)(dispatch, data); //stop loader

                    dispatch({
                        type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                        data: false
                    });
                }
            });
        };
    };

    _exports.printConsents = printConsents;

    var printMobileConsents = function printMobileConsents(consentCodes) {
        return function(dispatch, getState) {
            dispatch((0, _app.setConsentStatesToNegative)());
            var checkoutData = (0, _selectors.getCheckoutData)(getState());
            var customerModified = (0, _selectors.isCustomerModified)(getState()); //start loader

            dispatch({
                type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                data: true
            }); //print documents

            _remoteApi.default.doSaveCheckoutData(checkoutData).then(function(response) {
                _remoteApi.default.getDocumentCode(consentCodes).then(function(response) {
                    console.log("PRINTING OF MOBILE CONSENTS " + response.documentCode);
                    console.log(response);
                    var code = response.documentCode;
                    var bundleNo = 1;
                    var documentCode = code + (bundleNo ? "_" + bundleNo : "");
                    var documentData = {
                        documentCodes: code,
                        bundleNo: bundleNo
                    };

                    _remoteApi2.default.checkDocumentExistence({
                        documentCode: code,
                        bundleNo: bundleNo
                    }).then(function(result) {
                        if (result === false || customerModified) {
                            return _remoteApi2.default.removeDocuments().then(function() {
                                console.log("Removed document!");
                                return _remoteApi2.default.createDocument({
                                    documentDefinitionCodes: code,
                                    bundleNo: bundleNo,
                                    factory: "MOBILE"
                                });
                            }).catch(function(error) {
                                console.log("Removed error");
                                console.log(error);
                                return _remoteApi2.default.createDocument({
                                    documentDefinitionCodes: code,
                                    bundleNo: bundleNo,
                                    factory: "MOBILE"
                                });
                            });
                        } else {
                            return result;
                        }
                    }).then(function() {
                        return _remoteApi2.default.findDocumentInLocalStorage(documentData);
                    }).then(function(result) {
                        return !result[code] ? _remoteApi2.default.getDocuments(documentData).then(function() {
                            return _remoteApi2.default.findDocumentInLocalStorage(documentData);
                        }) : result;
                    }).then(function(result) {
                        window.open(result[code]); //stop loader

                        dispatch({
                            type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                            data: false
                        }); //set validator

                        dispatch({
                            type: ACTIONS.CONSENT_PRINT_DOCUMENTS
                        });
                    }).catch(function(result) {
                        console.log(result); //stop loader

                        dispatch({
                            type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                            data: false
                        }); //validator

                        dispatch({
                            type: ACTIONS.CONSENT_PRINT_DOCUMENTS
                        });
                    });
                });
            }).catch(function(data) {
                (0, _app.showErrorMessage)(dispatch, data); //stop loader

                dispatch({
                    type: ACTIONS.CONSENT_DOCUMENTS_LOADER,
                    data: false
                });
            });
        };
    };

    _exports.printMobileConsents = printMobileConsents;

    var selectApu = function selectApu(option) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.START_LOAD_APU
            });

            _remoteApi.default.selectApu(option).then(function(response) {
                dispatch({
                    type: ACTIONS.SELECT_APU
                });
                dispatch({
                    type: ACTIONS.STOP_LOAD_APU
                });
            });
        };
    };

    _exports.selectApu = selectApu;

    var registerPrintConsentValidator = function registerPrintConsentValidator(consentType) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR,
                consentType: consentType
            });
        };
    };

    _exports.registerPrintConsentValidator = registerPrintConsentValidator;

    var registerVerificationConsentType = function registerVerificationConsentType(verificationConsentType) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.REGISTER_VERIFICATION_CONSENT_TYPE,
                verificationConsentType: verificationConsentType
            });
        };
    };

    _exports.registerVerificationConsentType = registerVerificationConsentType;

    var fetchPosSimCardTypes = function fetchPosSimCardTypes() {
        return function(dispatch, getState) {
            _remoteApi.default.getPosSimCardsTypes().then(function(response) {
                return dispatch(remote.fetchPosSimCardTypesDone(response));
            });
        };
    };

    _exports.fetchPosSimCardTypes = fetchPosSimCardTypes;

    var pickupGeneralError = function pickupGeneralError(error) {
        return function(dispatch) {
            console.log("error:", error);
            dispatch({
                type: ACTIONS.PICKUP_GENERAL_ERROR,
                error: error
            });
        };
    };

    _exports.pickupGeneralError = pickupGeneralError;

    var fetchSerialNumbers = function fetchSerialNumbers() {
        return function(dispatch, getState) {
            _remoteApi.default.getSerialNumbers().then(function(response) {
                if (response.list && response.list.length > 0) {
                    var serials = response.list.reduce(function(map, obj) {
                        map[obj.entryNo] = obj.id;
                        return map;
                    }, {});
                    dispatch(remote.fetchSerialNumbersDone(serials));
                    dispatch(remote.updateSerialNumbersDone({
                        status: "RESERVED"
                    }));
                    var sapReservation = getState().cart.miniCartData.orderNr;

                    _remoteApi.default.paymentAndFiscalization(sapReservation).then(function(response) {
                        dispatch({
                            type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                            data: response
                        });

                        _remoteApi.default.getSapFioriLinks(sapReservation).then(function(response) {
                            return dispatch({
                                type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                                payload: response
                            });
                        }).catch(function(error) {
                            return console.error("nok", error);
                        });
                    }).catch(function(error) {
                        return console.error("nok", error);
                    });
                }

                validateSerialNumbers(dispatch, getState);
            }).catch(function(error) {
                return console.log(error);
            });
        };
    };

    _exports.fetchSerialNumbers = fetchSerialNumbers;

    var changeSerialNumber = function changeSerialNumber(productCode, value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CHANGE_PICKUP_SERIAL_NUMBER_VALUE,
                productCode: productCode,
                value: value
            });
            validateSerialNumbers(dispatch, getState);
        };
    };

    _exports.changeSerialNumber = changeSerialNumber;

    var validateSerialNumbers = function validateSerialNumbers(dispatch, getState) {
        dispatch({
            type: ACTIONS.PICKUP_SERIAL_NUMBERS_VALIDATION,
            isValid: serialNumbersValidation(getState())
        });
    };

    _exports.validateSerialNumbers = validateSerialNumbers;

    function serialNumbersValidation(storage) {
        var isValidSim = true;
        var isValidTerminal = true;
        var serialNumbers = storage.checkout.pickup.serialNumbers;

        if (!serialNumbers && !storage.cart.miniCartData.entries) {
            return false;
        } // check all sim card serial numbers


        storage.cart.miniCartData.entries.filter(function(entry) {
            return (0, _MiniCartUtils.entryContainsReservableSimCard)(entry);
        }).map(function(entry) {
            if (!(serialNumbers && serialNumbers[entry.entryNo] && serialNumbers[entry.entryNo].length === 19)) {
                isValidSim = false;
                return false;
            }
        }); // check all terminals serial numbers

        storage.cart.miniCartData.entries.map(function(entry) {
            entry.terminals.map(function(terminal) {
                if (terminal.requireSerialNumber && !(serialNumbers && serialNumbers[terminal.entryNo] && serialNumbers[terminal.entryNo].length > 0)) {
                    isValidTerminal = false;
                    return false;
                }
            });
        });
        return isValidSim && isValidTerminal;
    }

    var changeSimType = function changeSimType(value, bundleNo) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_PICKUP_SIM_CARD_TYPE,
                value: value,
                bundleNo: bundleNo
            });
        };
    };

    _exports.changeSimType = changeSimType;

    var pickupSerialNumbersErrorDismiss = function pickupSerialNumbersErrorDismiss() {
        return {
            type: ACTIONS.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS
        };
    };

    _exports.pickupSerialNumbersErrorDismiss = pickupSerialNumbersErrorDismiss;

    var updateOrderSerialNumbers = function updateOrderSerialNumbers(request) {
        return function(dispatch, getState) {
            dispatch(pickupNavigationNextButtonStart());
            dispatch(pickupSerialNumbersErrorDismiss());

            _remoteApi.default.updateSerialNumbers(request).then(function(response) {
                dispatch(remote.updateSerialNumbersDone({
                    status: "RESERVED"
                }));
                var sapReservation = getState().cart.miniCartData.orderNr;

                _remoteApi.default.paymentAndFiscalization(sapReservation).then(function(response) {
                    dispatch({
                        type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                        data: response
                    });

                    _remoteApi.default.getSapFioriLinks(sapReservation).then(function(response) {
                        dispatch(pickupNavigationNextButtonDone());
                        dispatch({
                            type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                            payload: response
                        });
                    }).catch(function(error) {
                        dispatch(remote.pickupGeneralError(error));
                    });
                }).catch(function(error) {
                    dispatch(remote.pickupGeneralError(error));
                });
            }).catch(function(error) {
                var response = error.responseJSON;

                if (Array.isArray(response)) {
                    var data = response.filter(function(r) {
                        return !!r && r.details;
                    });

                    if (data && data.length > 0) {
                        var errors = data.reduce(function(array, d) {
                            if (d.details && d.details.length > 0) {
                                return array.concat(d.details);
                            }
                        }, []);
                        dispatch(remote.pickupSerialNumberError(errors));
                        dispatch(remote.pickupGeneralError({
                            responseJSON: {
                                description: "Jedno lub więcej urządzeń ma błędne numery seryjne"
                            }
                        }));
                    }
                } else {
                    dispatch(remote.pickupGeneralError(error));
                }
            });
        };
    };

    _exports.updateOrderSerialNumbers = updateOrderSerialNumbers;

    var fetchGoodsOrderPaymentStatus = function fetchGoodsOrderPaymentStatus(id) {
        return function(dispatch, getState) {
            var override = (0, _selectors.getPaymentOverrideStatus)(getState());

            if (override) {
                dispatch(pickupNavigationNextButtonStart());

                _remoteApi.default.getPickupPaymentStatus(override).then(function(response) {
                    dispatch(pickupNavigationNextButtonDone());
                    dispatch({
                        type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                        response: "Paid"
                    });
                }).catch(function(error) {
                    dispatch(pickupNavigationNextButtonDone());
                    remote.pickupPaymentStateusError();
                });
            } else {
                dispatch(pickupNavigationNextButtonStart());

                _remoteApi.default.checkPaymentStatus(id).then(function(response) {
                    dispatch(pickupNavigationNextButtonDone());
                    dispatch({
                        type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                        response: response
                    });
                }).catch(function(error) {
                    dispatch(pickupNavigationNextButtonDone());
                    remote.pickupPaymentStateusError();
                });
            }
        };
    };

    _exports.fetchGoodsOrderPaymentStatus = fetchGoodsOrderPaymentStatus;

    var changePaymentOverride = function changePaymentOverride(value) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_PAYMENT_OVERRIDE,
                value: value
            });
        };
    };

    _exports.changePaymentOverride = changePaymentOverride;

    var pickupDocumentDownloadStarted = function pickupDocumentDownloadStarted(code) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PICKUP_DOCUMENT_DOWNLOAD_START,
                code: code
            });
        };
    };

    _exports.pickupDocumentDownloadStarted = pickupDocumentDownloadStarted;

    var printPickupDocument = function printPickupDocument(code, bundleNo) {
        return function(dispatch) {
            dispatch(pickupDocumentDownloadStarted(code));
            var documentData = {
                documentCodes: code,
                bundleNo: bundleNo
            };
            return _remoteApi3.default.checkDocumentExistence({
                documentCode: code,
                bundleNo: bundleNo
            }).then(function(result) {
                return result === false ? _remoteApi3.default.createDocument({
                    documentDefinitionCodes: code,
                    bundleNo: bundleNo,
                    factory: "MOBILE"
                }) : result;
            }).then(function() {
                return _remoteApi3.default.findDocumentInLocalStorage(documentData);
            }).then(function(result) {
                return !result[code] ? _remoteApi3.default.getDocuments(documentData).then(function() {
                    return _remoteApi3.default.findDocumentInLocalStorage(documentData);
                }) : result;
            }).then(function(result) {
                var link = result[code];
                window.open(result[code], "_blank", "toolbar=0,location=0,menubar=0");
                dispatch({
                    type: ACTIONS.PICKUP_DOCUMENT_DOWNLOAD_DONE,
                    code: code,
                    link: result[code],
                    bundleNo: bundleNo
                });
                return Promise.resolve();
            }).catch(function(error) {
                console.log(error);
                dispatch({
                    type: ACTIONS.PICKUP_GENERAL_ERROR,
                    error: "Błąd pobierania dokumentu"
                });
                return Promise.reject();
            });
        };
    };

    _exports.printPickupDocument = printPickupDocument;

    var fetchSimCardTypes = function fetchSimCardTypes(configurationId) {
        return function(dispatch, getState) {
            var store = getState();
            var serialNumbers = store.checkout.reservation.serialNumbers;

            _remoteApi.default.getSimCardTypes(configurationId).then(function(data) {
                return dispatch(remote.getSimCardTypesDone(data, serialNumbers));
            });
        };
    };

    _exports.fetchSimCardTypes = fetchSimCardTypes;

    var setDefaultBillingAccountIfDataNotExist = function setDefaultBillingAccountIfDataNotExist(dispatch, getState, data) {
        if (!(0, _utils.requiredBillingAccountFieldExist)(data)) {
            var defaultFixAccount = (0, _selectors.getBillingAccountsData)(getState()).filter(function(account) {
                return account.type === "FIX";
            });

            if (defaultFixAccount.length > 0) {
                (0, _app.setSelectedBillingAccount)(defaultFixAccount[0])(dispatch);
            }

            var defaultMobileAccount = (0, _selectors.getBillingAccountsData)(getState()).filter(function(account) {
                return account.type === "MOBILE";
            });

            if (defaultMobileAccount.length > 0) {
                (0, _app.setSelectedBillingAccount)(defaultMobileAccount[0])(dispatch);
            }
        }

        return data;
    };

    var requestBillingAccountFormData = function requestBillingAccountFormData() {
        return function(dispatch, getState) {
            if (!(0, _selectors.billingAccountDataRequested)(getState())) {
                dispatch(remote.getBillingAccountFormDataStart());
                return _remoteApi.default.getBillingAccount().then(function(data) {
                    return data[0];
                }).then(function(data) {
                    return (0, _utils.getBillingAccountForm)(data);
                }).then(function(data) {
                    return setDefaultBillingAccountIfDataNotExist(dispatch, getState, data);
                }).then(function(data) {
                    return dispatch(remote.getBillingAccountFormDataDone(data));
                }).then(function(data) {
                    return dispatch(_main.actions.getCbsData((0, _selectors.getBillingAccountFormData)(getState())));
                });
            } else {
                return Promise.resolve();
            }
        };
    };

    _exports.requestBillingAccountFormData = requestBillingAccountFormData;

    var pickupNavigationNextButtonStart = function pickupNavigationNextButtonStart() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PICKUP_NAVIGATION_NEXT_START
            });
        };
    };

    _exports.pickupNavigationNextButtonStart = pickupNavigationNextButtonStart;

    var pickupNavigationNextButtonDone = function pickupNavigationNextButtonDone() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.PICKUP_NAVIGATION_NEXT_DONE
            });
        };
    };

    _exports.pickupNavigationNextButtonDone = pickupNavigationNextButtonDone;

    var fetchSAPSerialNumbers = function fetchSAPSerialNumbers() {
        return function(dispatch, getState) {
            dispatch(pickupNavigationNextButtonStart());

            _remoteApi.default.getWarehouseSerialNumbers().then(function(response) {
                if (response.list && response.list.length > 0) {
                    var serials = response.list.reduce(function(map, obj) {
                        map[obj.entryNo] = obj.id;
                        return map;
                    }, {});
                    dispatch(remote.fetchSerialNumbersDone(serials));
                    dispatch(remote.updateSerialNumbersDone({
                        status: "RESERVED"
                    }));
                    var sapReservation = getState().cart.miniCartData.orderNr;

                    _remoteApi.default.paymentAndFiscalization(sapReservation).then(function(response) {
                        dispatch({
                            type: ACTIONS.PAYMENT_AND_FISCALIZATION,
                            data: response
                        });

                        _remoteApi.default.getSapFioriLinks(sapReservation).then(function(response) {
                            dispatch(pickupNavigationNextButtonDone());
                            dispatch({
                                type: ACTIONS.GET_SAP_FIORI_LINKS_DONE,
                                payload: response
                            });
                        }).catch(function(error) {
                            return dispatch(remote.pickupGeneralError(error));
                        });
                    }).catch(function(error) {
                        return dispatch(remote.pickupGeneralError(error));
                    });
                } else {
                    dispatch(remote.pickupGeneralError({
                        description: "Błąd pobierania danych z systemu magazynowego!"
                    }));
                }
            }).catch(function(error) {
                return dispatch(remote.pickupGeneralError(error));
            });
        };
    };

    _exports.fetchSAPSerialNumbers = fetchSAPSerialNumbers;

    var pickupActivation = function pickupActivation() {
        return function(dispatch) {
            dispatch(remote.pickupActivationStart());

            _remoteApi.default.pickupActivation().then(function(response) {
                return dispatch(remote.pickupActivationDone());
            }).catch(function(error) {
                return dispatch(remote.pickupGeneralError(error));
            });
        };
    };

    _exports.pickupActivation = pickupActivation;

    var fetchPickupLastOrder = function fetchPickupLastOrder() {
        return function(dispatch) {
            _remoteApi.default.getLastOrder().then(function(response) {
                return dispatch({
                    type: ACTIONS.PICKUP_LAST_ORDER_DATA,
                    data: response
                });
            }).catch(function(error) {
                return console.log("LasOrderError: ", error);
            });
        };
    };

    _exports.fetchPickupLastOrder = fetchPickupLastOrder;

    var printReturnDevicesDocument = function printReturnDevicesDocument() {
        return function(dispatch, getState) {
            console.log("PRINTING RETURN DEVICES DOCUMENT"); //start loader

            dispatch({
                type: ACTIONS.RETURN_DOCUMENT_LOADER,
                data: true
            });
            var code = "RET_DEV_INFO1";
            var bundleNo = 1;
            var documentData = {
                documentCodes: code,
                bundleNo: bundleNo
            };

            _remoteApi2.default.checkDocumentExistence({
                documentCode: code,
                bundleNo: bundleNo
            }).then(function(result) {
                return result === false ? _remoteApi2.default.createDocument({
                    documentDefinitionCodes: code,
                    bundleNo: bundleNo,
                    factory: "MOBILE"
                }) : result;
            }).then(function() {
                return _remoteApi2.default.findDocumentInLocalStorage(documentData);
            }).then(function(result) {
                return !result[code] ? _remoteApi2.default.getDocuments(documentData).then(function() {
                    return _remoteApi2.default.findDocumentInLocalStorage(documentData);
                }) : result;
            }).then(function(result) {
                window.open(result[code]); //stop loader

                dispatch({
                    type: ACTIONS.RETURN_DOCUMENT_LOADER,
                    data: false
                });
            }).catch(function(result) {
                console.log(result); //stop loader

                dispatch({
                    type: ACTIONS.RETURN_DOCUMENT_LOADER,
                    data: false
                });
            });
        };
    };

    _exports.printReturnDevicesDocument = printReturnDevicesDocument;

    var forceSlotRefresh = function forceSlotRefresh(isForced) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.INSTALLATION_SLOT_FORCE_REFRESH,
                payload: isForced
            });
        };
    };

    _exports.forceSlotRefresh = forceSlotRefresh;

    var updateConsentGroupExpanded = function updateConsentGroupExpanded(listNo) {
        return function(dispatch, getState) {
            var store = getState();
            var value = !store.checkout.consents.consentGroupExpanded[listNo];
            dispatch(updateValueConsentGroupExpanded(listNo, value));
        };
    };

    _exports.updateConsentGroupExpanded = updateConsentGroupExpanded;

    var updateValueConsentGroupExpanded = function updateValueConsentGroupExpanded(listNo, value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.CONSENT_GROUP_EXPANDED,
                listNo: listNo,
                value: value
            });
        };
    };

    _exports.updateValueConsentGroupExpanded = updateValueConsentGroupExpanded;

    var registerAgreementConfirmationComponent = function registerAgreementConfirmationComponent() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.REGISTER_AGREEMENT_VALIDATION_COMPONENT,
                data: true
            });
        };
    };

    _exports.registerAgreementConfirmationComponent = registerAgreementConfirmationComponent;

    var validateCustomerDataFields = function validateCustomerDataFields(data) {
        return function(dispatch) {
            var dataToValidate = {};
            Object.keys(_helperObjects.emptyBusinessData).forEach(function(k) {
                if (!!data[k]) {
                    dataToValidate[k] = data[k];
                }
            });
            var contactToValidate = {};
            Object.keys(_helperObjects.emptyCustomerContact).forEach(function(k) {
                if (!!data[k]) {
                    contactToValidate[k] = data[k];
                }
            });

            if (data.mainAddress) {
                Object.keys(_helperObjects.emptyAddress).forEach(function(k) {
                    if (!!data.mainAddress[k]) {
                        dispatch((0, _app.changeCustomerMainAddressFormField)({
                            name: k,
                            value: data.mainAddress[k]
                        }));
                    } else if (typeof data.mainAddress[k] === "boolean") {
                        dispatch((0, _app.changeCustomerMainAddressFormField)({
                            name: k,
                            value: data.mainAddress[k]
                        }, false));
                    }
                });
            }

            (0, _utils.runValidator)(contactToValidate, _validators.customerContactFormValidators, _app.changeCustomerContactFormField, null, dispatch);
            (0, _utils.runValidator)(dataToValidate, _validators.customerDataFormValidators, _app.changeCustomerDataFormField, null, dispatch);
        };
    };

    _exports.validateCustomerDataFields = validateCustomerDataFields;

    var requestBpgData = function requestBpgData(nip) {
        return function(dispatch) {
            dispatch(remote.getBpgDataStart());
            (0, _app.bodyLoaderShow)();

            _remoteApi.default.getBpgData(nip).then(function(data) {
                if (!!data.mainAddress) {
                    data.mainAddress.wwtaddress = false;
                }

                if (data.isPublic) {
                    dispatch((0, _app.showSpecifiedMessage)("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg"));
                } else {
                    dispatch(remote.getBpgDataDone(data));
                }

                dispatch(_main.actions.getCbsDataThenDispatch(data.mainAddress, true, validateCustomerDataFields, data));
                (0, _app.bodyLoaderHide)();
            }).catch(function() {
                dispatch(remote.getBpgDataDone());
                (0, _app.bodyLoaderHide)();
            }); //TODO: some logs? errors?

        };
    };

    _exports.requestBpgData = requestBpgData;

    var requestDocumentsToMerge = function requestDocumentsToMerge() {
        return function(dispatch) {
            return new Promise(function(resolve, reject) {
                return _remoteApi2.default.getDocumentsToMerge().then(function(documentsToMergePerBundle) {
                    dispatch({
                        type: ACTIONS.SET_DOCUMENTS_TO_MERGE_PER_BUNDLE,
                        documentsToMergePerBundle: documentsToMergePerBundle
                    });
                    resolve(documentsToMergePerBundle);
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    };

    _exports.requestDocumentsToMerge = requestDocumentsToMerge;

    var setInitialNationality = function setInitialNationality(initialNationality) {
        return function(dispatch) {
            return dispatch({
                type: ACTIONS.SET_INITIAL_NATIONALITY,
                payload: initialNationality
            });
        };
    };

    _exports.setInitialNationality = setInitialNationality;

    var setForeignerAvailable = function setForeignerAvailable(foreignerAvailable) {
        return function(dispatch) {
            return dispatch({
                type: ACTIONS.SET_FOREIGNER,
                payload: foreignerAvailable
            });
        };
    };

    _exports.setForeignerAvailable = setForeignerAvailable;

    var consentsGetStatus = function consentsGetStatus() {
        return function(dispatch) {
            _remoteApi.default.consentsGetStatus().then(function(response) {
                console.log(response);
                dispatch({
                    type: ACTIONS.CONSENTS_GET_STATUS,
                    payload: response
                });
            });
        };
    };

    _exports.consentsGetStatus = consentsGetStatus;

    var consentsCreateAndSendDocument = function consentsCreateAndSendDocument(mail, phone, consentSections) {
        return function(dispatch) {
            _remoteApi.default.consentsCreateAndSendDocument(mail, phone, consentSections).then(function(response) {
                dispatch({
                    type: ACTIONS.CONSENTS_CREATE_AND_SEND_DOCUMENT,
                    payload: response
                });
            });
        };
    };

    _exports.consentsCreateAndSendDocument = consentsCreateAndSendDocument;

    function enterConsentsEmailAddress(emailAddress) {
        return {
            type: ACTIONS.ENTER_CONSENTS_EMAIL_ADDRESS,
            payload: emailAddress
        };
    }

    ;

    function enterConsentsPhoneNumber(phoneNumber) {
        return {
            type: ACTIONS.ENTER_CONSENTS_PHONE_NUMBER,
            payload: phoneNumber
        };
    }

    ;

    function enterConsentsAcknowledgmentsReadWhileTalking(acknowledged) {
        return {
            type: ACTIONS.ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS,
            payload: acknowledged
        };
    }

    ;

    function resetConsentsStatus() {
        return {
            type: ACTIONS.CONSENTS_GET_STATUS,
            payload: ""
        };
    }

    ;
});
//# sourceMappingURL=data.js.map