define(["exports", "Reselect", "./actionTypes"], function(_exports, _Reselect, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createGetDocumentsForTypesSelector = _exports.createGetDocumentLinkForCodeSelector = _exports.createIsDocumentBeingDownloadedSelector = _exports.isDocumentsDataSavedBeforeCreation = _exports.getAnyDocumentIsBeingLoaded = _exports.isNewAgreementInDocuments = _exports.getDocumentBeingLoaded = _exports.getDocumentsFetchInProgress = _exports.getDocumentLinks = _exports.getDocumentItemsUnfiltered = _exports.getDocumentItems = _exports.getMetadata = _exports.getDocumentsState = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var getDocumentsState = function getDocumentsState(state) {
        return state.documents;
    };

    _exports.getDocumentsState = getDocumentsState;
    var getMetadata = (0, _Reselect.createSelector)(getDocumentsState, function(documentsState) {
        return documentsState.metadata;
    });
    _exports.getMetadata = getMetadata;
    var getDocumentItems = (0, _Reselect.createSelector)(getDocumentsState, function(documentsState) {
        return documentsState.items;
    });
    _exports.getDocumentItems = getDocumentItems;
    var getDocumentItemsUnfiltered = (0, _Reselect.createSelector)(getDocumentsState, function(documentsState) {
        return documentsState.itemsUnfiltered;
    });
    _exports.getDocumentItemsUnfiltered = getDocumentItemsUnfiltered;
    var getDocumentLinks = (0, _Reselect.createSelector)(getDocumentsState, function(documentsState) {
        return documentsState.links;
    });
    _exports.getDocumentLinks = getDocumentLinks;
    var getDocumentsFetchInProgress = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.fetchingInProgress;
    });
    _exports.getDocumentsFetchInProgress = getDocumentsFetchInProgress;
    var getDocumentBeingLoaded = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.documentBeingDownloaded;
    });
    _exports.getDocumentBeingLoaded = getDocumentBeingLoaded;
    var isNewAgreementInDocuments = (0, _Reselect.createSelector)(getDocumentItemsUnfiltered, function(documents) {
        return documents.some(function(document) {
            return document.documentType === "AGR" || document.documentType === "ANX";
        });
    });
    _exports.isNewAgreementInDocuments = isNewAgreementInDocuments;
    var getAnyDocumentIsBeingLoaded = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return !!metadata.documentBeingDownloaded;
    });
    _exports.getAnyDocumentIsBeingLoaded = getAnyDocumentIsBeingLoaded;
    var isDocumentsDataSavedBeforeCreation = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.documentsDataSavedBeforeCreation;
    });
    _exports.isDocumentsDataSavedBeforeCreation = isDocumentsDataSavedBeforeCreation;

    var createIsDocumentBeingDownloadedSelector = function createIsDocumentBeingDownloadedSelector() {
        return (0, _Reselect.createSelector)([getDocumentBeingLoaded, function(_, props) {
            return props.documentCode + (props.bundleNo ? '_' + props.bundleNo : '');
        }], function(currentlyDownloaded, code) {
            return currentlyDownloaded === code;
        });
    };

    _exports.createIsDocumentBeingDownloadedSelector = createIsDocumentBeingDownloadedSelector;

    var createGetDocumentLinkForCodeSelector = function createGetDocumentLinkForCodeSelector() {
        return (0, _Reselect.createSelector)([getDocumentLinks, function(_, props) {
            return props.documentCode + (props.bundleNo ? '_' + props.bundleNo : '');
        }], function(links, code) {
            return links[code];
        });
    };

    _exports.createGetDocumentLinkForCodeSelector = createGetDocumentLinkForCodeSelector;

    var createGetDocumentsForTypesSelector = function createGetDocumentsForTypesSelector() {
        return (0, _Reselect.createSelector)([getDocumentItems, function(_, props) {
            return props.types;
        }], function() {
            var documents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var types = arguments.length > 1 ? arguments[1] : undefined;
            var filtered = documents.filter(function(d) {
                return types.indexOf(d.documentType) !== -1;
            });
            return filtered.sort(function(a, b) {
                if (a.priority === b.priority) {
                    return a.documentDescription.localeCompare(b.documentDescription);
                } else {
                    return a.priority - b.priority;
                }
            });
        });
    };

    _exports.createGetDocumentsForTypesSelector = createGetDocumentsForTypesSelector;
});
//# sourceMappingURL=selectors.js.map