define(["exports", "eshop/flux/utils/OraApiUtils"], function(_exports, _OraApiUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var CONTEXT_PATH = "/sklep";
    var DATA_PATH = "/device";
    var ADD_TO_CART_PATH = CONTEXT_PATH + "/dodaj";
    var GET_PRODUCT_LIST = CONTEXT_PATH + "/getAll";
    var SEND_REVIEW = CONTEXT_PATH + "/recenzja/";
    var FETCH_FILTER_CONFIGURATION = CONTEXT_PATH + "/filterconfiguration";
    var FETCH_STICKER_CONFIGURATION = CONTEXT_PATH + "/fetchStickerConfiguration";
    var GET_FILTERED_PRODUCT_LIST = CONTEXT_PATH + "/getFiltered";
    var RELOAD_TREE = CONTEXT_PATH + "/tree/reloadCategoriesTree";

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var _default = {
        getFiltersList: function getFiltersList(selectedCategory) {
            return (0, _OraApiUtils.get)(prepareUrl("/sklep/tree/getFilters?selectedCategory=" + selectedCategory));
        },
        getDeviceByCode: function getDeviceByCode(productCode) {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "?productCode=" + productCode));
        },
        addToCart: function addToCart(productCode, bundleTemplateName) {
            return (0, _OraApiUtils.postJson)(prepareUrl(ADD_TO_CART_PATH), {
                "productCodePost": productCode,
                "bundleNo": 0,
                "bundleTemplateId": bundleTemplateName
            });
        },
        getProductsTree: function getProductsTree(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(RELOAD_TREE), filters);
        },
        fetchFilterConfiguration: function fetchFilterConfiguration(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(FETCH_FILTER_CONFIGURATION), filters);
        },
        fetchStickerConfiguration: function fetchStickerConfiguration(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(FETCH_STICKER_CONFIGURATION), filters);
        },
        getProductList: function getProductList(page, showAll) {
            return (0, _OraApiUtils.get)(prepareUrl(GET_PRODUCT_LIST + "?page=" + page + (showAll ? "&showAll=" + showAll : "")));
        },
        sendReview: function sendReview(productCode, rating, login, message) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(SEND_REVIEW + productCode), {
                "rating": rating,
                "login": login,
                "message": message
            });
        },
        getFilteredProductList: function getFilteredProductList(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(GET_FILTERED_PRODUCT_LIST), filters);
        },
        getFilteredProductTree: function getFilteredProductTree(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(RELOAD_TREE), filters);
        },
        getMatchToData: function getMatchToData(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/sklep/tree/matchToFilterData"), filters);
        },
        reloadMatchToData: function reloadMatchToData(filters) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/sklep/tree/reloadMatchToFilterData"), filters);
        },
        getDocumentsForDevice: function getDocumentsForDevice(products, processType) {
            return (0, _OraApiUtils.get)(prepareUrl("/documents/getDocumentsForProducts"), {
                "productIds": [products],
                "processType": processType
            });
        },
        getLastSelectedPos: function getLastSelectedPos(productCode) {
            return (0, _OraApiUtils.get)(prepareUrl("/pickup/lastSelectedPos"), {
                productCode: productCode
            });
        },
        checkIfActivePickupFromShelf: function checkIfActivePickupFromShelf(offer, process, market, product) {
            return (0, _OraApiUtils.get)(prepareUrl("/pickup/fromShelf/active?offerType=" + offer + "&process=" + process + "&market=" + market + "&product=" + product));
        },
        getOplHtmlContentForOfferAndProcess: function getOplHtmlContentForOfferAndProcess(offerType, processType, deliveryAndPaymentComponentUid) {
            return (0, _OraApiUtils.get)(prepareUrl("/sklep/getDeliveryHtmlForProcess"), {
                "offerType": offerType,
                "processType": processType,
                "uID": deliveryAndPaymentComponentUid
            });
        },
        getComparatorConfig: function getComparatorConfig(device, componentPk) {
            return (0, _OraApiUtils.get)(prepareUrl("/comparator/comparatorConfiguration?device=" + device + "&componentPk=" + componentPk));
        },
        updateComparatorDevicesList: function updateComparatorDevicesList(devices) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/comparator/updateDevicesList"), devices);
        },
        updateComparatorDevicesListByUid: function updateComparatorDevicesListByUid(deviceUid) {
            return (0, _OraApiUtils.post)(prepareUrl("/comparator/updateDevicesListByUid"), {
                deviceUid: deviceUid
            });
        },
        fetchComparatorDevicesList: function fetchComparatorDevicesList() {
            return (0, _OraApiUtils.get)(prepareUrl("/comparator/fetchDevicesList"), {});
        },
        fetchProducers: function fetchProducers() {
            return (0, _OraApiUtils.get)(prepareUrl("/comparator/findProducers"));
        },
        fetchModelsForProducers: function fetchModelsForProducers(producer) {
            return (0, _OraApiUtils.get)(prepareUrl("/comparator/modelsForBrand?brand=" + producer));
        },
        clearDevicesList: function clearDevicesList() {
            return (0, _OraApiUtils.post)(prepareUrl("/comparator/clearDevicesList"), {});
        },
        getStorageCapacityForProduct: function getStorageCapacityForProduct(productCode) {
            return (0, _OraApiUtils.get)(prepareUrl("/sklep/getStorageCapacityForProduct?baseId=" + productCode));
        },
        getDeliveryForProduct: function getDeliveryForProduct(productBaseCode) {
            return (0, _OraApiUtils.get)(prepareUrl("/delivery"), {
                productBaseCode: productBaseCode
            });
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map