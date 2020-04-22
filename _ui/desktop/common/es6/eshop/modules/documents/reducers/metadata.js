import * as ACTIONS from '../actionTypes';

export const fetchingInProgress = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DOCUMENTS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const fetchingUnfilteredInProgress = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DOCUMENTS_UNFILTERED_LOADING:
            return action.isLoading;
        default:
            return state;
    }
};

export const documentBeingDownloaded = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.DOWNLOAD_DOCUMENT_START:
            return action.code;
        case ACTIONS.DOCUMENT_READY_TO_DOWNLOAD:
            return '';
        case ACTIONS.DOWNLOAD_DOCUMENT_ERROR:
            return '';
        default:
            return state;
    }
};

export const documentAlternativeDownload = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_ALTERNATIVE_DOCUMENT_DOWNLOAD_METHOD:
            return action.payload;
        default:
            return state;
    }
};

export const documentsDataSavedBeforeCreation = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.DATA_SAVED_BEFORE_DOCUMENT_CREATION:
            return action.payload;
        default:
            return state;
    }
};