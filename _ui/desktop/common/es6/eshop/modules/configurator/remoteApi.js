import {
    get,
    mock,
    mockRandomError,
    post,
    postJson,
    postJsonObject
} from "eshop/flux/utils/OraApiUtils";
import $ from "jquery";
import OnlineUtils from "eshop/utils/OnlineUtils";

const availableProductsKey = $('#availableProductsKey').val();

const getAvailableProductKeyObject = () => availableProductsKey ? {
    availableProductsKey
} : {};


function prepareFilters(avProductsKey, deviceCode) {
    const productsKey = avProductsKey ? avProductsKey : availableProductsKey;
    const fkPk = $('#filtersComponentPk').val();
    return {
        filtersComponentPk: fkPk,
        availableProductsKey: productsKey,
        deviceCode: deviceCode,
        isCanonicalLink: OnlineUtils.isCanonicalLink()
    };
}
const component = $('#propositionCarouselId').val();

const getComponentKeyObject = () => component ? {
    component
} : {};

function prepareGetDocumentsParameters(offers, processType) {
    return Object.assign({}, offers, processType)
}

function prepareGetOfferParameters(filters, availableProductsKeyVal, deviceCode, isInitialFetch) {
    //TODO pobranie PK komponentu do atrybutow klasyfikacyjnych jak w prepareFilters
    //TODO zrobic cos w stylu Object.assign({},filters,{classAttrPk})
    //FIXME cos zrobic z tym strzalem bo bez terminalOption nic nie zwraca
    //FIXME no i do chuja wafla trzeba ogarnac zeby nie zwracalo pierdyliard rzeczy te getOffers
    const availableProductsKey = availableProductsKeyVal ? {
        availableProductsKey: availableProductsKeyVal
    } : getAvailableProductKeyObject();
    const device = deviceCode ? {
        deviceCode: deviceCode
    } : {};
    return Object.assign({}, {
        processType: filters.processType,
        loyaltyLength: filters.loyaltyLength[filters.processType],
        isInitialFetch: isInitialFetch,
        isCanonicalLink: OnlineUtils.isCanonicalLink()
    }, device, availableProductsKey, getComponentKeyObject());
}

function prepareConvergentOfferParameters(processType, deviceCode, propositionIds) {
    return {
        processType,
        deviceCode,
        propositionIds
    };
}

function prepareCheckAndGetOfferParameters(msisdn, filters, availableProductsKeyVal, deviceCode) {
    OnlineUtils.removePwaSuflerContextFromSession();
    const availableProductsKey = availableProductsKeyVal ? {
        availableProductsKey: availableProductsKeyVal
    } : getAvailableProductKeyObject();
    const device = deviceCode ? {
        deviceCode: deviceCode
    } : {};
    return {
        msisdn: msisdn,
        processType: filters.processType,
        loyaltyLength: filters.loyaltyLength[filters.processType],
        ...device,
        ...availableProductsKey,
        ...getComponentKeyObject()
    };
}


const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;

export default {
    getOffers: (filters, availableProductsKey = "", deviceCode, isInitialFetch = false) => get(prepareUrl("/offersList/offers"), prepareGetOfferParameters(filters, availableProductsKey, deviceCode, isInitialFetch)),
    getOffersWithoutOfferSelector: (filters, availableProductsKey = "", deviceCode, isInitialFetch = false) => get(prepareUrl("/offersList/offersWithoutOfferSelector"), prepareGetOfferParameters(filters, availableProductsKey, deviceCode, isInitialFetch)),
    getConvergentOffers: (processType, deviceCode, propositionIds) => get(prepareUrl("/convergentOffersList/offers"), prepareConvergentOfferParameters(processType, deviceCode, propositionIds)),
    getDocuments: (offers, processType) => get(prepareUrl("/documents/getDocumentsForProducts"), prepareGetDocumentsParameters(offers, processType)),
    getOfferFilters: (availableProductsKey, deviceCode = "") => get(prepareUrl("/filters/offerFilters"), prepareFilters(availableProductsKey, deviceCode)),
    postToCart: (params) => postJson(prepareUrl("/koszyk/oovdodaj"), params),
    postAssignmentToCart: (param) => post(prepareUrl("/koszyk/addServiceTransfer"), param),
    postFixAssignmentToCart: (param) => post(prepareUrl("/fix/cart/addServiceTransfer"), param),
    checkAndGetOffers: (msisdn, filters, availableProductsKey, deviceCode) => postJson(
        prepareUrl("/offersList/checkAndGetOffers"),
        prepareCheckAndGetOfferParameters(msisdn, filters, availableProductsKey, deviceCode)
    ),
    getContractRole: (params) => get(prepareUrl("/contractRole"), params),
    getFirstOffer: (params) => get(prepareUrl("/offersList/firstOffer"), params),
}