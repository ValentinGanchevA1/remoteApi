define(["exports", "eshop/flux/utils/OraApiUtils"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;

    function i(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var t = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto",
        n = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity",
        r = "".concat(contextPath, "/telefonybezumowy/zamowienie/wiele/citiesByTerm"),
        s = "".concat(contextPath, "/hapi/cbs/streetauto"),
        c = {
            getCbsCitiesForPostCode: function(e) {
                return (0, o.get)(i(t), {
                    postcode: e
                })
            },
            getCbsStreetsForPostCodeAndCity: function(e, t) {
                return (0, o.get)(i(n), {
                    term: "",
                    cityname: t,
                    postcode: e
                })
            },
            getCbsStreetsForCityId: function(e) {
                return (0, o.postWithContentType)(s, "application/x-www-form-urlencoded", '{"filter":{"city_id":' + e + '},"html":" "}:')
            },
            getCbsCitiesByTerm: function(e) {
                return (0, o.get)(i("".concat(r, "/").concat(e)))
            }
        };
    e.default = c
});
//# sourceMappingURL=remoteApi.js.map