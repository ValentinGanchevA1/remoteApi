import {
    get,
    postWithContentType
} from "eshop/flux/utils/OraApiUtils";
const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url
const CBS_CITIES_API = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto";
const CBS_STREETS_API = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity";
const CBS_CITIES_BY_TERM = `${contextPath}/telefonybezumowy/zamowienie/wiele/citiesByTerm`;
const CBS_STREETS_BY_CITY_ID = `${contextPath}/hapi/cbs/streetauto`;

export default {
    getCbsCitiesForPostCode: (postalCode) => get(prepareUrl(CBS_CITIES_API), {
        postcode: postalCode
    }),
    getCbsStreetsForPostCodeAndCity: (postalCode, city) => get(prepareUrl(CBS_STREETS_API), {
        term: "",
        cityname: city,
        postcode: postalCode
    }),
    getCbsStreetsForCityId: (cityId) => postWithContentType(CBS_STREETS_BY_CITY_ID, 'application/x-www-form-urlencoded', '{"filter":{"city_id":' + cityId + '},"html":" "}:'),
    getCbsCitiesByTerm: (term) => get(prepareUrl(`${CBS_CITIES_BY_TERM}/${term}`))
};