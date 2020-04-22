import {
    get,
    post,
    postJson,
    postJsonObject
} from "eshop/flux/utils/OraApiUtils";

const CONTEXT_PATH = "/sklep";

const DATA_PATH = "/device";
const ADD_TO_CART_PATH = CONTEXT_PATH + "/dodaj";
const GET_PRODUCT_LIST = CONTEXT_PATH + "/getAll";
const SEND_REVIEW = CONTEXT_PATH + "/recenzja/";
const FETCH_FILTER_CONFIGURATION = CONTEXT_PATH + "/filterconfiguration";
const FETCH_STICKER_CONFIGURATION = CONTEXT_PATH + "/fetchStickerConfiguration";
const GET_FILTERED_PRODUCT_LIST = CONTEXT_PATH + "/getFiltered";
const RELOAD_TREE = CONTEXT_PATH + "/tree/reloadCategoriesTree";
const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url

export default {
    getFiltersList: (selectedCategory) => get(prepareUrl("/sklep/tree/getFilters?selectedCategory=" + selectedCategory)),
    getDeviceByCode: (productCode) => get(prepareUrl(DATA_PATH + "?productCode=" + productCode)),
    addToCart: (productCode, bundleTemplateName) => postJson(prepareUrl(ADD_TO_CART_PATH), {
        "productCodePost": productCode,
        "bundleNo": 0,
        "bundleTemplateId": bundleTemplateName
    }),
    getProductsTree: (filters) => postJsonObject(prepareUrl(RELOAD_TREE), filters),
    fetchFilterConfiguration: (filters) => postJsonObject(prepareUrl(FETCH_FILTER_CONFIGURATION), filters),
    fetchStickerConfiguration: (filters) => postJsonObject(prepareUrl(FETCH_STICKER_CONFIGURATION), filters),
    getProductList: (page, showAll) => get(prepareUrl(GET_PRODUCT_LIST + "?page=" + page + (showAll ? "&showAll=" + showAll : ""))),
    sendReview: (productCode, rating, login, message) => postJsonObject(prepareUrl(SEND_REVIEW + productCode), {
        "rating": rating,
        "login": login,
        "message": message
    }),
    getFilteredProductList: (filters) => postJsonObject(prepareUrl(GET_FILTERED_PRODUCT_LIST), filters),
    getFilteredProductTree: (filters) => postJsonObject(prepareUrl(RELOAD_TREE), filters),
    getMatchToData: (filters) => postJsonObject(prepareUrl("/sklep/tree/matchToFilterData"), filters),
    reloadMatchToData: (filters) => postJsonObject(prepareUrl("/sklep/tree/reloadMatchToFilterData"), filters),
    getDocumentsForDevice: (products, processType) => get(prepareUrl("/documents/getDocumentsForProducts"), {
        "productIds": [products],
        "processType": processType
    }),
    getLastSelectedPos: (productCode) => get(prepareUrl("/pickup/lastSelectedPos"), {
        productCode
    }),
    checkIfActivePickupFromShelf: (offer, process, market, product) => get(prepareUrl("/pickup/fromShelf/active?offerType=" + offer + "&process=" + process + "&market=" + market + "&product=" + product)),
    getOplHtmlContentForOfferAndProcess: (offerType, processType, deliveryAndPaymentComponentUid) => get(prepareUrl("/sklep/getDeliveryHtmlForProcess"), {
        "offerType": offerType,
        "processType": processType,
        "uID": deliveryAndPaymentComponentUid
    }),
    getComparatorConfig: (device, componentPk) => get(prepareUrl("/comparator/comparatorConfiguration?device=" + device + "&componentPk=" + componentPk)),
    updateComparatorDevicesList: (devices) => postJsonObject(prepareUrl("/comparator/updateDevicesList"), devices),
    updateComparatorDevicesListByUid: (deviceUid) => post(prepareUrl("/comparator/updateDevicesListByUid"), {
        deviceUid: deviceUid
    }),
    fetchComparatorDevicesList: () => get(prepareUrl("/comparator/fetchDevicesList"), {}),
    fetchProducers: () => get(prepareUrl("/comparator/findProducers")),
    fetchModelsForProducers: (producer) => get(prepareUrl("/comparator/modelsForBrand?brand=" + producer)),
    clearDevicesList: () => post(prepareUrl("/comparator/clearDevicesList"), {}),
    getStorageCapacityForProduct: (productCode) => get(prepareUrl("/sklep/getStorageCapacityForProduct?baseId=" + productCode)),
    getDeliveryForProduct: productBaseCode => get(prepareUrl("/delivery"), {
        productBaseCode
    })
}