define(["exports", "../actionTypes", "./remote", "../remoteApi", "../selectors", "./data", "./payment", "../constants/AgreementType", "./app", "../../documents/actions/documents", "../constants/DeliveryMethod", "eshop/utils/DataLayerUtils"], function(_exports, ACTIONS, remote, _remoteApi, _selectors, _data, _payment, _AgreementType, _app, _documents, _DeliveryMethod, _DataLayerUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectedDocumentsDeliveryMethod = _exports.fetchDeliveryMethodsDone = _exports.setEmailConfirmationModalAccepted = _exports.setEmailConfirmationModalState = _exports.setDeliveryEmailAddress = _exports.setIsDigitalAgreementDefault = _exports.selectAgreementType = _exports.selectDeliveryMethodForDevices = _exports.selectDeliveryMethods = _exports.updateDeliveryMethod = _exports.updateAgreementType = _exports.initDelivery = _exports.fetchCartDelivery = _exports.fetchDeliveryMethods = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    remote = babelHelpers.interopRequireWildcard(remote);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _AgreementType = babelHelpers.interopRequireDefault(_AgreementType);
    _DeliveryMethod = babelHelpers.interopRequireDefault(_DeliveryMethod);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);

    var fetchDeliveryMethods = function fetchDeliveryMethods() {
        return function(dispatch) {
            return new Promise(function(resolve, reject) {
                _remoteApi.default.getCartDelivery().then(function(deliveryMethods) {
                    dispatch(fetchDeliveryMethodsDone(deliveryMethods));
                    resolve(deliveryMethods);
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    };

    _exports.fetchDeliveryMethods = fetchDeliveryMethods;

    var fetchCartDelivery = function fetchCartDelivery() {
        return function(dispatch) {
            return new Promise(function(resolve, reject) {
                _remoteApi.default.getCartDeliveryData().then(function(cartDelivery) {
                    dispatch(remote.getCartDeliveryDataDone(cartDelivery[0]));
                    resolve(cartDelivery[0]);
                }).catch(function(error) {
                    reject(error);
                });
            });
        };
    };

    _exports.fetchCartDelivery = fetchCartDelivery;

    var initDelivery = function initDelivery() {
        return function(dispatch, getState) {
            dispatch((0, _data.registerNextStepCondition)('payment'));
            dispatch((0, _data.registerNextStepCondition)('delivery'));
            dispatch(selectAgreementType((0, _selectors.getSelectedOrDefaultAgreementType)(getState())));
            dispatch(selectDeliveryAndWithoutChangingPaymentMethod((0, _selectors.getSelectedOrDefaultDeliveryMethod)(getState())));
            var deliveryMethodForDevices = (0, _selectors.getCartDeliveryMethodForDevices)(getState()) || (0, _selectors.getDeliveryMethodsForDevices)(getState())[0] && (0, _selectors.getDeliveryMethodsForDevices)(getState())[0].id;
            deliveryMethodForDevices && dispatch(selectDeliveryMethodForDevices(deliveryMethodForDevices));
            dispatch(showEmailWarning());
            (0, _data.updateDelivery)()(dispatch, getState).then(function(isUpdated) {
                return conditionallyFetchDeliveryMethods(_selectors.hasAgreementTypeChanged)(dispatch, getState);
            }).then(function(isFetched) {
                return updateDefaultDeliveryMethod()(dispatch, getState);
            }).then(function(isUpdated) {
                dispatch((0, _data.requestCartConsentsData)());
                dispatch((0, _documents.fetchDocuments)());

                _DataLayerUtils.default.pushAgreementVisibilityEvent((0, _selectors.getDeliveryMethodsRaw)(getState()).map(function(m) {
                    return m.id;
                }).some(_DeliveryMethod.default.isDigital) ? _AgreementType.default.DIGITAL : _AgreementType.default.PAPER);

                _DataLayerUtils.default.pushSelectedAgreementType((0, _selectors.getSelectedOrDefaultAgreementType)(getState()));
            });
        };
    };

    _exports.initDelivery = initDelivery;

    var updateAgreementType = function updateAgreementType(agreementType) {
        return function(dispatch, getState) {
            var deliveryMethodsRaw = (0, _selectors.getDeliveryMethodsRaw)(getState()).map(function(m) {
                return m.id;
            });

            if (agreementType === _AgreementType.default.DIGITAL && (0, _selectors.getCustomerNoEmail)(getState()) && deliveryMethodsRaw.some(function(methodId) {
                    return _DeliveryMethod.default.PICKUP_ON_EMAIL === methodId;
                })) {
                dispatch((0, _app.showEmailWarningModal)());
                return;
            }

            dispatch(selectAgreementType(agreementType));
            dispatch(selectDeliveryAndPaymentMethod((0, _selectors.getSelectedOrDefaultDeliveryMethod)(getState())));

            _DataLayerUtils.default.pushSelectedAgreementType(agreementType);

            if (agreementType === _AgreementType.default.DIGITAL) {
                dispatch((0, _data.unregisterNextStepCondition)('additionalDocuments'));
            }

            (0, _data.updateDelivery)()(dispatch, getState).then(function(isUpdated) {
                return fetchDeliveryMethods()(dispatch);
            }).then(function(deliveryMethods) {
                return updateDefaultDeliveryMethod()(dispatch, getState);
            }).then(function(isUpdated) {
                dispatch((0, _data.requestCartConsentsData)());
                dispatch((0, _documents.fetchDocuments)());
            });
        };
    };

    _exports.updateAgreementType = updateAgreementType;

    var updateDeliveryMethod = function updateDeliveryMethod(deliveryMethodCode) {
        return function(dispatch, getState) {
            dispatch(selectDeliveryAndPaymentMethod(deliveryMethodCode));
            (0, _data.updateDelivery)()(dispatch, getState).then(function(isUpdated) {
                dispatch((0, _data.requestCartConsentsData)());
                dispatch((0, _documents.fetchDocuments)());
            });
        };
    };

    _exports.updateDeliveryMethod = updateDeliveryMethod;

    var showEmailWarning = function showEmailWarning() {
        return function(dispatch, getState) {
            if ((0, _selectors.shouldShowEmailWarning)(getState())) {
                dispatch((0, _app.showEmailWarningModal)((0, _selectors.getDescriptionKey)(getState())));
            }
        };
    };

    var updateDefaultDeliveryMethod = function updateDefaultDeliveryMethod() {
        return function(dispatch, getState) {
            if ((0, _selectors.isSelectedDeliveryMethodAvailable)(getState())) {
                return Promise.resolve(false);
            }

            dispatch(selectDeliveryAndPaymentMethod((0, _selectors.getDefaultDeliveryMethod)(getState())));
            return (0, _data.updateDelivery)()(dispatch, getState);
        };
    };

    var conditionallyFetchDeliveryMethods = function conditionallyFetchDeliveryMethods(conditionSelector) {
        return function(dispatch, getState) {
            if (conditionSelector(getState())) {
                return fetchDeliveryMethods()(dispatch);
            }

            return Promise.resolve(false);
        };
    };

    var selectDeliveryAndPaymentMethod = function selectDeliveryAndPaymentMethod(deliveryMethodCode) {
        return function(dispatch, getState) {
            dispatch((0, _payment.selectPaymentMethod)((0, _selectors.getSelectedOrDefaultPaymentMethod)(getState())));
            dispatch(selectDeliveryMethod(deliveryMethodCode));
        };
    };

    var selectDeliveryAndWithoutChangingPaymentMethod = function selectDeliveryAndWithoutChangingPaymentMethod(deliveryMethodCode) {
        return function(dispatch, getState) {
            dispatch(selectDeliveryMethodWithoutChangingPayment(deliveryMethodCode));
        };
    };

    var selectDeliveryMethodWithoutChangingPayment = function selectDeliveryMethodWithoutChangingPayment(deliveryMethodCode) {
        return {
            type: ACTIONS.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD,
            id: deliveryMethodCode
        };
    };

    var selectDeliveryMethod = function selectDeliveryMethod(deliveryMethodCode) {
        return {
            type: ACTIONS.SELECT_DELIVERY_METHOD,
            id: deliveryMethodCode
        };
    };

    var selectDeliveryMethods = function selectDeliveryMethods() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mobile = _ref.mobile,
            fixDocuments = _ref.fixDocuments,
            fixDevices = _ref.fixDevices;

        return {
            type: ACTIONS.SELECT_DELIVERY_METHODS,
            mobile: mobile,
            fixDocuments: fixDocuments,
            fixDevices: fixDevices
        };
    };

    _exports.selectDeliveryMethods = selectDeliveryMethods;

    var selectDeliveryMethodForDevices = function selectDeliveryMethodForDevices(id) {
        return {
            type: ACTIONS.SELECT_DELIVERY_METHOD_FOR_DEVICES,
            id: id
        };
    };

    _exports.selectDeliveryMethodForDevices = selectDeliveryMethodForDevices;

    var selectAgreementType = function selectAgreementType(id) {
        return {
            type: ACTIONS.SELECT_AGREEMENT_TYPE,
            id: id
        };
    };

    _exports.selectAgreementType = selectAgreementType;

    var setIsDigitalAgreementDefault = function setIsDigitalAgreementDefault(isDigitalAgreementDefault) {
        return {
            type: ACTIONS.SET_IS_DIGITAL_AGREEMENT_DEFAULT,
            isDigitalAgreementDefault: isDigitalAgreementDefault
        };
    };

    _exports.setIsDigitalAgreementDefault = setIsDigitalAgreementDefault;

    var setDeliveryEmailAddress = function setDeliveryEmailAddress(emailAddress) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_DELIVERY_EMAIL,
                payload: emailAddress
            });
        };
    };

    _exports.setDeliveryEmailAddress = setDeliveryEmailAddress;

    var setEmailConfirmationModalState = function setEmailConfirmationModalState(open) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_STATE,
                payload: open
            });
        };
    };

    _exports.setEmailConfirmationModalState = setEmailConfirmationModalState;

    var setEmailConfirmationModalAccepted = function setEmailConfirmationModalAccepted(accepted) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED,
                payload: accepted
            });
        };
    };

    _exports.setEmailConfirmationModalAccepted = setEmailConfirmationModalAccepted;

    var fetchDeliveryMethodsDone = function fetchDeliveryMethodsDone(data) {
        return {
            type: ACTIONS.FETCH_DELIVERY_METHODS_DONE,
            methods: data.deliveryMethods,
            isDeliveryRequired: data.isDeliveryRequired,
            isFirstMethodDefault: data.isFirstMethodDefault,
            paymentWithoutDeliveryMethod: data.paymentWithoutDeliveryMethod
        };
    };

    _exports.fetchDeliveryMethodsDone = fetchDeliveryMethodsDone;

    var selectedDocumentsDeliveryMethod = function selectedDocumentsDeliveryMethod(state) {
        var delivery = (0, _selectors.getDelivery)(state);

        if (delivery.selectedDeliveryMethods && delivery.selectedDeliveryMethods.fixDocuments) {
            return delivery.selectedDeliveryMethods.fixDocuments;
        } else {
            return delivery.selectedMethod;
        }
    };

    _exports.selectedDocumentsDeliveryMethod = selectedDocumentsDeliveryMethod;
});
//# sourceMappingURL=delivery.js.map