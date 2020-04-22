define(["exports", "../actionTypes", "../remoteApi", "../pickup/remoteApi", "eshop/modules/checkout/remoteApi", "eshop/modules/checkout/actions/data", "../selectors", "../../checkout/selectors"], function(_exports, ACTIONS, _remoteApi, _remoteApi2, _remoteApi3, _data, _selectors, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.clearAllLinks = _exports.getOrCreateDocumentPickup = _exports.getOrCreateDocument = _exports.documentReadyToDownload = _exports.documentDownloadStarted = _exports.documentsUnfilteredAreLoading = _exports.documentsAreLoading = _exports.fetchDocuments = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _remoteApi2 = babelHelpers.interopRequireDefault(_remoteApi2);
    _remoteApi3 = babelHelpers.interopRequireDefault(_remoteApi3);

    var fetchDocuments = function fetchDocuments() {
        var legalForm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return function(dispatch, getState) {
            var status = (0, _selectors.getDocumentsFetchInProgress)(getState());

            if (!status) {
                dispatch(documentsAreLoading(true));
                dispatch(documentsUnfilteredAreLoading(true));

                _remoteApi.default.getDocumentsForCart(legalForm || (0, _selectors2.getLegalForm)(getState())).then(function(response) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS_FOR_CART,
                        payload: response
                    });
                    dispatch(documentsAreLoading(false));
                }).catch(function(response) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS_ERROR,
                        payload: response
                    });
                });

                _remoteApi.default.getDocumentsForCartUnfiltered(legalForm || (0, _selectors2.getLegalForm)(getState())).then(function(response) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_FOR_CART,
                        payload: response
                    });
                    dispatch(documentsUnfilteredAreLoading(false));
                }).catch(function(response) {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_ERROR,
                        payload: response
                    });
                });
            }
        };
    };

    _exports.fetchDocuments = fetchDocuments;

    var documentsAreLoading = function documentsAreLoading(bool) {
        return {
            type: ACTIONS.FETCH_DOCUMENTS_LOADING,
            isLoading: bool
        };
    };

    _exports.documentsAreLoading = documentsAreLoading;

    var documentsUnfilteredAreLoading = function documentsUnfilteredAreLoading(bool) {
        return {
            type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_LOADING,
            isLoading: bool
        };
    };

    _exports.documentsUnfilteredAreLoading = documentsUnfilteredAreLoading;

    var documentDownloadStarted = function documentDownloadStarted(code) {
        return {
            type: ACTIONS.DOWNLOAD_DOCUMENT_START,
            code: code
        };
    };

    _exports.documentDownloadStarted = documentDownloadStarted;

    var documentReadyToDownload = function documentReadyToDownload(code, link) {
        return {
            type: ACTIONS.DOCUMENT_READY_TO_DOWNLOAD,
            code: code,
            link: link
        };
    };
    /**
     * Gets of creates document to download
     * @param {String} code Document code
     * @param bundleNo Bundle number
     * @param documentType document type
     */


    _exports.documentReadyToDownload = documentReadyToDownload;

    var getOrCreateDocument = function getOrCreateDocument(code, bundleNo, documentType) {
        return function(dispatch, getState) {
            var status = (0, _selectors.getAnyDocumentIsBeingLoaded)(getState());
            var documentCode = code + (bundleNo ? '_' + bundleNo : '');

            if (!status) {
                dispatch(documentDownloadStarted(documentCode));
                var documentData = {
                    documentCodes: code,
                    bundleNo: bundleNo
                };
                saveDataBeforeDocumentCreation(getState, dispatch);

                _remoteApi.default.checkDocumentExistence({
                    documentCode: code,
                    bundleNo: bundleNo
                }).then(function(result) {
                    return result === false ? _remoteApi.default.createDocument({
                        documentDefinitionCodes: code,
                        bundleNo: bundleNo,
                        factory: "MOBILE"
                    }) : result;
                }).then(function() {
                    return _remoteApi.default.findDocumentInLocalStorage(documentData);
                }).then(function(result) {
                    return !result[code] ? _remoteApi.default.getDocuments(documentData).then(function() {
                        return _remoteApi.default.findDocumentInLocalStorage(documentData);
                    }) : result;
                }).then(function(result) {
                    dispatch(documentReadyToDownload(documentCode, result[code]));
                    (0, _data.openDocument)(result[code]);
                }).catch(function(result) {
                    dispatch({
                        type: ACTIONS.DOWNLOAD_DOCUMENT_ERROR,
                        payload: result
                    });
                });
            }
        };
    };
    /**
     * Gets of creates document to download
     * @param {String} code Document code
     * @param bundleNo Bundle number
     * @param documentType document type
     */


    _exports.getOrCreateDocument = getOrCreateDocument;

    var getOrCreateDocumentPickup = function getOrCreateDocumentPickup(code, bundleNo, documentType) {
        return function(dispatch, getState) {
            var status = (0, _selectors.getAnyDocumentIsBeingLoaded)(getState());
            var documentCode = code + (bundleNo ? '_' + bundleNo : '');

            if (!status) {
                dispatch(documentDownloadStarted(documentCode));
                var documentData = {
                    documentCodes: code,
                    bundleNo: bundleNo
                };
                saveDataBeforeDocumentCreation(getState, dispatch);

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
                    dispatch(documentReadyToDownload(documentCode, result[code]));
                    (0, _data.openDocument)(result[code]);
                }).catch(function(result) {
                    dispatch({
                        type: ACTIONS.DOWNLOAD_DOCUMENT_ERROR,
                        payload: result
                    });
                });
            }
        };
    };

    _exports.getOrCreateDocumentPickup = getOrCreateDocumentPickup;

    var clearAllLinks = function clearAllLinks() {
        return {
            type: ACTIONS.DOCUMENT_LINK_CLEAR
        };
    };

    _exports.clearAllLinks = clearAllLinks;

    function saveDataBeforeDocumentCreation(getState, dispatch) {
        if ((0, _selectors2.getDeliveryAndPaymentStep)(getState())) {
            if ((0, _selectors.isDocumentsDataSavedBeforeCreation)(getState()) === false) {
                var checkoutData = (0, _selectors2.getCheckoutData)(getState());

                _remoteApi3.default.doSaveCheckoutData(checkoutData).then(function() {
                    dispatch({
                        type: ACTIONS.DATA_SAVED_BEFORE_DOCUMENT_CREATION,
                        payload: true
                    });
                });
            }
        }
    }

    ;
});
//# sourceMappingURL=documents.js.map