define(["exports", "eshop/flux/utils/OraApiUtils", "../checkout/actions/data", "jquery"], function(_exports, _OraApiUtils, _data, _jquery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var DOCUMENTS_PATH = '/documents';
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
         * Gets unfiltered documents for assigned to session cart
         * @returns Object[]
         */
        getDocumentsForCartUnfiltered: function getDocumentsForCartUnfiltered(legalForm) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/getDocumentsForCartUnfiltered/' + documentsComponentPk), {
                legalForm: legalForm
            });
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
                return (0, _OraApiUtils.poll)(prepareUrl(DOCUMENTS_PATH + '/createDocumentAsyncResult'), null, function(r) {
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
        },
        downloadMergedDocuments: function downloadMergedDocuments() {
            return (0, _data.downloadFile)(prepareUrl(DOCUMENTS_PATH + "/mergeDocuments/" + documentsComponentPk));
        },
        prepareDocumentsToMerge: function prepareDocumentsToMerge(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/prepareToMerge'), data).then(function() {
                return (0, _OraApiUtils.poll)(prepareUrl(DOCUMENTS_PATH + '/readyToMerge'), data, function(r) {
                    return r === true;
                });
            });
        },
        createMergeDocumentUrl: function createMergeDocumentUrl(bundleNo) {
            return "/documents/merge?bundleNo=".concat(bundleNo);
        },
        prepareDocumentsToZip: function prepareDocumentsToZip(data) {
            return (0, _OraApiUtils.get)(prepareUrl(DOCUMENTS_PATH + '/prepareToZip'), _objectSpread({}, data, {
                componentId: documentsComponentPk
            })).then(function() {
                return (0, _OraApiUtils.poll)(prepareUrl(DOCUMENTS_PATH + '/readyToZip'), _objectSpread({}, data, {
                    componentId: documentsComponentPk
                }), function(r) {
                    return r === true;
                });
            });
        },
        getZipDocumentsUrl: function getZipDocumentsUrl(data) {
            return "/documents/zip?componentId=".concat(documentsComponentPk, "&legalForm=").concat(data.legalForm);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map