import {
    createSelector
} from "Reselect";
import * as ACTIONS from "./actionTypes";

export const getDocumentsState = state => state.documents;

export const getMetadata = createSelector(getDocumentsState, documentsState => documentsState.metadata);
export const getDocumentItems = createSelector(getDocumentsState, documentsState => documentsState.items);
export const getDocumentItemsUnfiltered = createSelector(getDocumentsState, documentsState => documentsState.itemsUnfiltered);
export const getDocumentLinks = createSelector(getDocumentsState, documentsState => documentsState.links);
export const getDocumentsFetchInProgress = createSelector(getMetadata, metadata => metadata.fetchingInProgress);
export const getDocumentBeingLoaded = createSelector(getMetadata, metadata => metadata.documentBeingDownloaded);
export const isNewAgreementInDocuments = createSelector(getDocumentItemsUnfiltered, documents => documents.some(document => document.documentType === "AGR" || document.documentType === "ANX"));


export const getAnyDocumentIsBeingLoaded = createSelector(getMetadata, metadata => {
    return !!metadata.documentBeingDownloaded;
});

export const isDocumentsDataSavedBeforeCreation = createSelector(getMetadata, metadata => metadata.documentsDataSavedBeforeCreation);

export const createIsDocumentBeingDownloadedSelector = () => {
    return createSelector([
        getDocumentBeingLoaded,
        (_, props) => props.documentCode + (props.bundleNo ? '_' + props.bundleNo : '')
    ], (currentlyDownloaded, code) => currentlyDownloaded === code);
};

export const createGetDocumentLinkForCodeSelector = () => {
    return createSelector([
        getDocumentLinks,
        (_, props) => props.documentCode + (props.bundleNo ? '_' + props.bundleNo : '')
    ], (links, code) => links[code]);
};

export const createGetDocumentsForTypesSelector = () => {
    return createSelector([getDocumentItems, (_, props) => props.types], (documents = [], types) => {
        let filtered = documents.filter(d => types.indexOf(d.documentType) !== -1);

        return filtered.sort(function(a, b) {
            if (a.priority === b.priority) {
                return a.documentDescription.localeCompare(b.documentDescription);
            } else {
                return a.priority - b.priority;
            }
        });
    });
};