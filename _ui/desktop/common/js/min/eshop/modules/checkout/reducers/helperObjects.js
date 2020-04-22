define(["exports"], function(e) {
    "use strict";

    function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.emptyAddress = e.emptyCustomerContact = e.emptyBusinessData = e.emptyPersonalData = e.emptyPolishPersonalData = e.emptyForeignerPersonalData = void 0;
    var t = {
        country: "",
        identification: "",
        identificationNumber: "",
        identificationExpirationDate: "",
        identificationRegistrationDate: "",
        noPesel: !1,
        gender: "",
        fakePesel: "",
        peselType: null
    };
    e.emptyForeignerPersonalData = t;
    var r = {
            pesel: "",
            idNumber: "",
            disabledIdNumber: !1
        },
        n = function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(r), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }({
            firstName: "",
            lastName: ""
        }, e.emptyPolishPersonalData = r, {}, t, {
            foreigner: !1,
            hasActiveContracts: null
        });
    e.emptyPersonalData = n;
    e.emptyBusinessData = {
        nip: "",
        regon: "",
        companyName: "",
        legalForm: "",
        registrationDate: "",
        companyStatus: "",
        statusAndDateFromBpg: !1
    };
    e.emptyCustomerContact = {
        emailAddress: "",
        phoneNumber: "",
        customerNoEmail: !1
    };
    e.emptyAddress = {
        firstName: "",
        lastName: "",
        companyName: "",
        postalCode: "",
        town: "",
        streetName: "",
        streetNumber: "",
        appartmentNo: "",
        wwtaddress: !1
    }
});
//# sourceMappingURL=helperObjects.js.map