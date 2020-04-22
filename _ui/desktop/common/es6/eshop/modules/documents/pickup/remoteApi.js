import {
    get,
    poll
} from "eshop/flux/utils/OraApiUtils";
import $ from "jquery";

const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url
const DOCUMENTS_PATH = '/pickup_documents';

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
     * Checks if document exists
     * @param {Object} data
     * @returns Boolean
     */
    checkDocumentExistence: (data) => get(prepareUrl(DOCUMENTS_PATH + '/checkDocumentExistence'), data),

    createDocument: (data) => get(prepareUrl(DOCUMENTS_PATH + '/createDocuments'), data).then(() =>
        poll(prepareUrl(DOCUMENTS_PATH + '/createDocumentAsyncResult'), data, r => r === true)
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
    getDocumentsToMerge: () => get(prepareUrl(DOCUMENTS_PATH + '/to-merge'))
}