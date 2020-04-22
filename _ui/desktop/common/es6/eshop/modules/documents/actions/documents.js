import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import RemoteApiPickup from "../pickup/remoteApi";
import RemoteApiCheckout from "eshop/modules/checkout/remoteApi";
import {
    openDocument
} from "eshop/modules/checkout/actions/data";
import {
    getDocumentsFetchInProgress,
    getAnyDocumentIsBeingLoaded,
    isDocumentsDataSavedBeforeCreation
} from "../selectors";
import {
    getCheckoutData,
    getLegalForm,
    getDeliveryAndPaymentStep
} from "../../checkout/selectors";

export const fetchDocuments = (legalForm = "") => (dispatch, getState) => {
    let status = getDocumentsFetchInProgress(getState());

    if (!status) {
        dispatch(documentsAreLoading(true));
        dispatch(documentsUnfilteredAreLoading(true));

        RemoteApi.getDocumentsForCart(legalForm || getLegalForm(getState()))
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_DOCUMENTS_FOR_CART,
                    payload: response
                });
                dispatch(documentsAreLoading(false));
            })
            .catch(response => {
                dispatch({
                    type: ACTIONS.FETCH_DOCUMENTS_ERROR,
                    payload: response
                })
            });

        RemoteApi.getDocumentsForCartUnfiltered(legalForm || getLegalForm(getState()))
            .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_FOR_CART,
                    payload: response
                });
                dispatch(documentsUnfilteredAreLoading(false));
            })
            .catch(response => {
                dispatch({
                    type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_ERROR,
                    payload: response
                })
            });
    }
};

export const documentsAreLoading = (bool) => ({
    type: ACTIONS.FETCH_DOCUMENTS_LOADING,
    isLoading: bool
});

export const documentsUnfilteredAreLoading = (bool) => ({
    type: ACTIONS.FETCH_DOCUMENTS_UNFILTERED_LOADING,
    isLoading: bool
});

export const documentDownloadStarted = (code) => ({
    type: ACTIONS.DOWNLOAD_DOCUMENT_START,
    code: code
});

export const documentReadyToDownload = (code, link) => ({
    type: ACTIONS.DOCUMENT_READY_TO_DOWNLOAD,
    code,
    link
});

/**
 * Gets of creates document to download
 * @param {String} code Document code
 * @param bundleNo Bundle number
 * @param documentType document type
 */
export const getOrCreateDocument = (code, bundleNo, documentType) => (dispatch, getState) => {
    let status = getAnyDocumentIsBeingLoaded(getState());
    let documentCode = code + (bundleNo ? '_' + bundleNo : '');

    if (!status) {
        dispatch(documentDownloadStarted(documentCode));

        let documentData = {
            documentCodes: code,
            bundleNo: bundleNo
        };

        saveDataBeforeDocumentCreation(getState, dispatch);

        RemoteApi.checkDocumentExistence({
            documentCode: code,
            bundleNo: bundleNo
        }).then(result => {
            return result === false ?
                RemoteApi.createDocument({
                    documentDefinitionCodes: code,
                    bundleNo: bundleNo,
                    factory: "MOBILE"
                }) : result

        }).then(() => {
            return RemoteApi.findDocumentInLocalStorage(documentData)
        }).then(result => {
            return !result[code] ? RemoteApi.getDocuments(documentData).then(() => {
                return RemoteApi.findDocumentInLocalStorage(documentData)
            }) : result
        }).then(result => {
            dispatch(documentReadyToDownload(documentCode, result[code]));
            openDocument(result[code]);
        }).catch(result => {
            dispatch({
                type: ACTIONS.DOWNLOAD_DOCUMENT_ERROR,
                payload: result
            });
        });

    }
};

/**
 * Gets of creates document to download
 * @param {String} code Document code
 * @param bundleNo Bundle number
 * @param documentType document type
 */
export const getOrCreateDocumentPickup = (code, bundleNo, documentType) => (dispatch, getState) => {
    let status = getAnyDocumentIsBeingLoaded(getState());
    let documentCode = code + (bundleNo ? '_' + bundleNo : '');

    if (!status) {
        dispatch(documentDownloadStarted(documentCode));

        let documentData = {
            documentCodes: code,
            bundleNo: bundleNo
        };

        saveDataBeforeDocumentCreation(getState, dispatch);

        RemoteApiPickup.checkDocumentExistence({
            documentCode: code,
            bundleNo: bundleNo
        }).then(result => {
            return result === false ?
                RemoteApiPickup.createDocument({
                    documentDefinitionCodes: code,
                    bundleNo: bundleNo,
                    factory: "MOBILE"
                }) : result

        }).then(() => {
            return RemoteApiPickup.findDocumentInLocalStorage(documentData)
        }).then(result => {
            return !result[code] ? RemoteApiPickup.getDocuments(documentData).then(() => {
                return RemoteApiPickup.findDocumentInLocalStorage(documentData)
            }) : result
        }).then(result => {
            dispatch(documentReadyToDownload(documentCode, result[code]));
            openDocument(result[code]);
        }).catch(result => {
            dispatch({
                type: ACTIONS.DOWNLOAD_DOCUMENT_ERROR,
                payload: result
            });
        });

    }
};

export const clearAllLinks = () => ({
    type: ACTIONS.DOCUMENT_LINK_CLEAR
});

function saveDataBeforeDocumentCreation(getState, dispatch) {
    if (getDeliveryAndPaymentStep(getState())) {
        if (isDocumentsDataSavedBeforeCreation(getState()) === false) {
            const checkoutData = getCheckoutData(getState());
            RemoteApiCheckout.doSaveCheckoutData(checkoutData).then(() => {
                dispatch({
                    type: ACTIONS.DATA_SAVED_BEFORE_DOCUMENT_CREATION,
                    payload: true
                });
            });
        }
    }
};