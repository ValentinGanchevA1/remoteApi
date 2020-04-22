define(["exports", "../actionTypes"], function(e, s) {
    "use strict";

    function a(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(r);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, a)
        }
        return t
    }

    function n(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(r, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.data = void 0;
    var i = ["nip", "regon", "businessName", "pesel", "firstName", "lastName", "idNumber"],
        u = ["nip", "regon"],
        c = ["postalCode", "city", "street", "houseNumber", "flatNumber"];
    e.data = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case s.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
            case s.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
                return t.map(function(e, r) {
                    var t = n({}, e);
                    switch (t.errors || (t.errors = []), a.name) {
                        case "contactMethod":
                            t[a.name] = a.value
                    }
                    if (a.entryIndex === r && a.defaults) {
                        if (a.value !== t[a.name]) switch (a.name) {
                            case "offerType":
                                if ("" === a.value) t.migrationMode = "", t.offerType = "";
                                else switch (a.value) {
                                    case "postpaid":
                                        t.migrationMode = a.defaults.migrationModes.filter(function(e) {
                                            return e.operatorOfferTypeCode === a.value
                                        }).filter(function(e) {
                                            return "EOP" === e.value
                                        }).reduce(function(e) {
                                            return e
                                        }).value;
                                        break;
                                    default:
                                        t.migrationMode = a.defaults.migrationModes.filter(function(e) {
                                            return e.operatorOfferTypeCode === a.value
                                        })[0].value
                                }
                                t.errors.migrationMode = [], t.errors.date = [];
                                break;
                            case "migrationMode":
                                t.date = "", t.errors.date = [];
                                break;
                            case "identifier":
                                u.forEach(function(e) {
                                    t[e] = "", t.errors[e] = []
                                });
                                break;
                            case "agreementType":
                                i.forEach(function(e) {
                                    t[e] = "", t.errors[e] = []
                                }), t.identifier = "NIP", t.isHeadquartersAddressSame = !0;
                                break;
                            case "isHeadquartersAddressSame":
                                c.forEach(function(e) {
                                    t[e] = "", t.errors[e] = []
                                })
                        }
                        t[a.name] = "isHeadquartersAddressSame" === a.name ? !0 === a.value : a.value, t.errors || (t.errors = {}), t.errors[a.name] = a.errors
                    } else a.entryIndex === e.bundleNo && (t.errors || (t.errors = {}), t.errors[a.name] = a.errors);
                    return t
                });
            case s.GET_CART_MNP_DATA_DONE:
                return a.sources.response ? a.sources.response.map(function(r) {
                    return r.errors = {}, Object.getOwnPropertyNames(a.sources.defaults).forEach(function(e) {
                        r[e] || (r[e] = a.sources.defaults[e])
                    }), r
                }) : t;
            case s.SWITCH_SAME_MNP_DATA:
                var o = t.slice(1).map(function(e, r) {
                    return n({}, e, {
                        postalCode: t[0].postalCode,
                        agreementType: t[0].agreementType,
                        businessName: t[0].businessName,
                        contactMethod: t[0].contactMethod,
                        date: t[0].date,
                        email: t[0].email,
                        flatNumber: t[0].flatNumber,
                        houseNumber: t[0].houseNumber,
                        identifier: t[0].identifier,
                        isHeadquartersAddressSame: t[0].isHeadquartersAddressSame,
                        migrationMode: t[0].migrationMode,
                        nip: t[0].nip,
                        offerType: t[0].offerType,
                        operator: t[0].operator,
                        regon: t[0].regon,
                        city: t[0].city,
                        street: t[0].street,
                        firstName: t[0].firstName,
                        lastName: t[0].lastName,
                        pesel: t[0].pesel,
                        idNumber: t[0].idNumber
                    })
                });
                return t.slice(0, 1).concat(o);
            default:
                return t
        }
    }
});
//# sourceMappingURL=mnpData.js.map