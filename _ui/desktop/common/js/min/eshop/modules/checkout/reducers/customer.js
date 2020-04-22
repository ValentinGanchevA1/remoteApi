define(["exports", "../actionTypes", "./helperObjects"], function(e, p, o) {
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

    function O(r) {
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
    }), e.modified = e.hasFixAddress = e.existing = e.errors = e.contact = e.data = void 0, p = babelHelpers.interopRequireWildcard(p);
    var l = O({}, o.emptyBusinessData, {}, o.emptyPersonalData, {
        isBusinessClient: !1
    });
    e.data = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : l,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return O({}, t, babelHelpers.defineProperty({}, a.name, a.value));
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                if (!a.data) return t;
                var n = O({}, l),
                    s = Object.keys(n);
                return Object.keys(a.data).filter(function(e) {
                    return -1 !== s.indexOf(e)
                }).forEach(function(e) {
                    return n[e] = a.data[e]
                }), t.initialNationality && (n = O({}, n, {
                    initialNationality: t.initialNationality
                })), t.foreignerAvailable && (n = O({}, n, {
                    foreignerAvailable: t.foreignerAvailable
                })), O({}, n);
            case p.SWITCH_EDIT_ID_NUMBER_MODE:
                return O({}, t, {
                    disabledIdNumber: !t.disabledIdNumber,
                    idNumber: t.disabledIdNumber ? "" : t.idNumber
                });
            case p.GET_BPG_DATA_DONE:
                var d = a && a.data && a.data.nip || t.nip,
                    i = a && a.data && a.data.statusAndDateFromBpg;
                return O({}, t, {}, o.emptyBusinessData, {
                    nip: d,
                    statusAndDateFromBpg: i
                });
            case p.CHANGE_INVOICE_EMAIL_MAPPING:
                return O({}, t, {
                    invoiceEmailMapping: a.payload
                });
            case p.SET_INITIAL_NATIONALITY:
                return O({}, t, {
                    initialNationality: a.payload
                });
            case p.SET_FOREIGNER:
                return O({}, t, {
                    foreignerAvailable: a.payload
                });
            default:
                return t
        }
    };
    e.contact = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : o.emptyCustomerContact,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                return O({}, t, babelHelpers.defineProperty({}, a.name, a.value));
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                if (!a.data) return t;
                var n = a.data;
                return {
                    emailAddress: n.emailAddress, phoneNumber: n.phoneNumber, customerNoEmail: n.customerNoEmail
                };
            case p.GET_BPG_DATA_DONE:
                return O({}, o.emptyCustomerContact);
            default:
                return t
        }
    };
    e.errors = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return O({}, t, {
                    data: O({}, t.data, babelHelpers.defineProperty({}, a.name, a.errors))
                });
            case p.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
                return "postalCode" !== a.name ? "town" !== a.name ? "streetName" !== a.name ? O({}, t, {
                    mainAddress: O({}, t.mainAddress, babelHelpers.defineProperty({}, a.name, a.errors))
                }) : O({}, t, {
                    mainAddress: O({}, t.mainAddress, (d = {}, babelHelpers.defineProperty(d, a.name, a.errors), babelHelpers.defineProperty(d, "streetNo", void 0), d))
                }) : O({}, t, {
                    mainAddress: O({}, t.mainAddress, (s = {}, babelHelpers.defineProperty(s, a.name, a.errors), babelHelpers.defineProperty(s, "streetName", void 0), s))
                }) : O({}, t, {
                    mainAddress: O({}, t.mainAddress, (n = {}, babelHelpers.defineProperty(n, a.name, a.errors), babelHelpers.defineProperty(n, "streetName", void 0), babelHelpers.defineProperty(n, "town", void 0), n))
                });
                var n, s, d;
            case p.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                return "postalCode" !== a.name ? "town" !== a.name ? O({}, t, {
                    correspondenceAddress: O({}, t.correspondenceAddress, babelHelpers.defineProperty({}, a.name, a.errors))
                }) : O({}, t, {
                    correspondenceAddress: O({}, t.correspondenceAddress, (o = {}, babelHelpers.defineProperty(o, a.name, a.errors), babelHelpers.defineProperty(o, "streetName", void 0), o))
                }) : O({}, t, {
                    correspondenceAddress: O({}, t.correspondenceAddress, (i = {}, babelHelpers.defineProperty(i, a.name, a.errors), babelHelpers.defineProperty(i, "streetName", void 0), babelHelpers.defineProperty(i, "town", void 0), i))
                });
                var i, o;
            case p.CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
                return "postalCode" !== a.name ? "town" !== a.name ? O({}, t, {
                    deliveryAddress: O({}, t.deliveryAddress, babelHelpers.defineProperty({}, a.name, a.errors))
                }) : O({}, t, {
                    deliveryAddress: O({}, t.deliveryAddress, (E = {}, babelHelpers.defineProperty(E, a.name, a.errors), babelHelpers.defineProperty(E, "streetName", void 0), E))
                }) : O({}, t, {
                    deliveryAddress: O({}, t.deliveryAddress, (l = {}, babelHelpers.defineProperty(l, a.name, a.errors), babelHelpers.defineProperty(l, "streetName", void 0), babelHelpers.defineProperty(l, "town", void 0), l))
                });
                var l, E;
            case p.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                var c = O({}, t.contact, babelHelpers.defineProperty({}, a.name, a.errors));
                return "customerNoEmail" === a.name && !0 === a.value && (c.emailAddress = []), O({}, t, {
                    contact: c
                });
            case p.CHANGE_DELIVERY_CONTACT_FORM_FIELD:
                var _ = O({}, t.contact, babelHelpers.defineProperty({}, a.name, a.errors));
                return O({}, t, {
                    contact: _
                });
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                return O({}, t, {
                    data: O({}, t.data, {}, a.errors)
                });
            case p.SWITCH_FOREIGNER_MODE:
                return delete t.data.idNumber, delete t.data.identificationNumber, delete t.data.identificationExpirationDate, t;
            case p.GET_BPG_DATA_DONE:
                return O({}, t, {
                    mainAddress: [],
                    data: {},
                    contact: {}
                });
            default:
                return t
        }
    };
    e.existing = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                return a.data ? !!a.data.existing : t;
            default:
                return t
        }
    };
    e.hasFixAddress = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                return a.data ? !!a.data.hasFixAddress : t;
            default:
                return t
        }
    };
    e.modified = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case p.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            case p.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            case p.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
            case p.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            case p.SWITCH_FOREIGNER_MODE:
            case p.CHANGE_FOREIGNER_COUNTRY:
            case p.CHANGE_FOREIGNER_IDENTIFICATION_TYPE:
                return !0;
            case p.GET_CUSTOMER_DONE:
            case p.GET_CART_CUSTOMER_DONE:
                return !!a.data && !!a.data.modified || t;
            default:
                return t
        }
    }
});
//# sourceMappingURL=customer.js.map