import {
    get,
    poll
} from "eshop/flux/utils/OraApiUtils";
import {
    downloadFile
} from "../checkout/actions/data";
import $ from "jquery";

const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url
const DOCUMENTS_PATH = '/documents';

const documentsComponentPk = $('#documentsComponentPk').val();

export default {

    /**
     * Gets documents for assigned to session cart
     * @returns Object[]
     */
    getDocumentsForCart: (legalForm) => {
        if (documentsComponentPk) {
            return get(prepareUrl(DOCUMENTS_PATH + '/getDocumentsForCart/' + documentsComponentPk), {
                legalForm: legalForm
            });
        } else {
            return new Promise(
                (resolve) => resolve([])
            );
        }
    },

    /**
     * Gets unfiltered documents for assigned to session cart
     * @returns Object[]
     */
    getDocumentsForCartUnfiltered: (legalForm) => get(prepareUrl(DOCUMENTS_PATH + '/getDocumentsForCartUnfiltered/' + documentsComponentPk), {
        legalForm: legalForm
    }),

    /**
     * Checks if document exists
     * @param {Object} data
     * @returns Boolean
     */
    checkDocumentExistence: (data) => get(prepareUrl(DOCUMENTS_PATH + '/checkDocumentExistence'), data),

    createDocument: (data) => get(prepareUrl(DOCUMENTS_PATH + '/createDocuments'), data).then(() =>
        poll(prepareUrl(DOCUMENTS_PATH + '/createDocumentAsyncResult'), null, r => r === true)
    ),

    /**
     *
     * @param {Object} data - Data should contain documentCode and bundleNo values
     */
    findDocumentInLocalStorage: (data) => get(prepareUrl(DOCUMENTS_PATH + '/findDocumentInLocalStorage'), data),

    getDocuments: (data) => get(prepareUrl(DOCUMENTS_PATH + '/getDocuments'), data).then(() =>
        poll(prepareUrl(DOCUMENTS_PATH + '/getDocumentAsyncResult'), data, r => r === true)
    ),

    removeDocuments: () => get("/documents/removeDynamicDocument"),
    getDocumentsToMerge: () => get(prepareUrl(DOCUMENTS_PATH + '/to-merge')),
    downloadMergedDocuments: () => downloadFile(prepareUrl(DOCUMENTS_PATH + "/mergeDocuments/" + documentsComponentPk)),
    prepareDocumentsToMerge: (data) => get(prepareUrl(DOCUMENTS_PATH + '/prepareToMerge'), data).then(() =>
        poll(prepareUrl(DOCUMENTS_PATH + '/readyToMerge'), data, r => r === true)
    ),
    createMergeDocumentUrl: bundleNo => `/documents/merge?bundleNo=${bundleNo}`,
    prepareDocumentsToZip: data => get(prepareUrl(DOCUMENTS_PATH + '/prepareToZip'), {
        ...data,
        componentId: documentsComponentPk
    }).then(() =>
        poll(prepareUrl(DOCUMENTS_PATH + '/readyToZip'), {
            ...data,
            componentId: documentsComponentPk
        }, r => r === true)
    ),
    getZipDocumentsUrl: data => `/documents/zip?componentId=${documentsComponentPk}&legalForm=${data.legalForm}`
}