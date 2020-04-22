define(["exports", "eshop/flux/utils/OraApiUtils"], function(_exports, _OraApiUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var CBS_CITIES_API = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto";
    var CBS_STREETS_API = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity";
    var CBS_CITIES_BY_TERM = "".concat(contextPath, "/telefonybezumowy/zamowienie/wiele/citiesByTerm");
    var CBS_STREETS_BY_CITY_ID = "".concat(contextPath, "/hapi/cbs/streetauto");
    var _default = {
        getCbsCitiesForPostCode: function getCbsCitiesForPostCode(postalCode) {
            return (0, _OraApiUtils.get)(prepareUrl(CBS_CITIES_API), {
                postcode: postalCode
            });
        },
        getCbsStreetsForPostCodeAndCity: function getCbsStreetsForPostCodeAndCity(postalCode, city) {
            return (0, _OraApiUtils.get)(prepareUrl(CBS_STREETS_API), {
                term: "",
                cityname: city,
                postcode: postalCode
            });
        },
        getCbsStreetsForCityId: function getCbsStreetsForCityId(cityId) {
            return (0, _OraApiUtils.postWithContentType)(CBS_STREETS_BY_CITY_ID, 'application/x-www-form-urlencoded', '{"filter":{"city_id":' + cityId + '},"html":" "}:');
        },
        getCbsCitiesByTerm: function getCbsCitiesByTerm(term) {
            return (0, _OraApiUtils.get)(prepareUrl("".concat(CBS_CITIES_BY_TERM, "/").concat(term)));
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map