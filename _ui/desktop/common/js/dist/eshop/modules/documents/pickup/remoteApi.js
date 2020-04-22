define(["exports", "eshop/flux/utils/OraApiUtils", "jquery"], function(_exports, _OraApiUtils, _jquery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var DOCUMENTS_PATH = '/pickup_documents';
    var documentsComponentPk = (0, _jquery.default)('#documentsComponentPk').val();
    var _default = {
        /**
         * Gets documents for assigned to session cart
         * @returns Object[]
         */
        getDocumentsForCart: function getDocumentsForCart(legalForm) {
            if (documentsComponentPk) {
                return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/getDocumentsForCart/' + documentsComponentPk), {
                    legalForm: legalForm
                });
            } else {
                return new Promise(function(resolve) {
                    return resolve([]);
                });
            }
        },

        /**
         * Checks if document exists
         * @param {Object} data
         * @returns Boolean
         */
        checkDocumentExistence: function checkDocumentExistence(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/checkDocumentExistence'), data);
        },
        createDocument: function createDocument(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/createDocuments'), data).then(function() {
                return (0, _OraApiUtils.poll)(prepareUrl(DOCUMENTS_PATH + '/createDocumentAsyncResult'), data, function(r) {
                    return r === true;
                });
            });
        },

        /**
         *
         * @param {Object} data - Data should contain documentCode and bundleNo values
         */
        findDocumentInLocalStorage: function findDocumentInLocalStorage(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/findDocumentInLocalStorage'), data);
        },
        getDocuments: function getDocuments(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/getDocuments'), data).then(function() {
                return (0, _OraApiUtils.poll)(prepareUrl(DOCUMENTS_PATH + '/getDocumentAsyncResult'), data, function(r) {
                    return r === true;
                });
            });
        },
        removeDocuments: function removeDocuments() {
            return (0, _OraApiUtils.get)("/documents/removeDynamicDocument");
        },
        getDocumentsToMerge: function getDocumentsToMerge() {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/to-merge'));
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map