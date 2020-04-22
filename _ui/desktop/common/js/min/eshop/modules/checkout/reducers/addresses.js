define(["exports", "../actionTypes", "./helperObjects"], function(e, o, d) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mappings = e.delivery = e.correspondence = e.main = e.replaceAddressNullValues = void 0;

    function i(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length && void 0 !== t ? t : d.emptyAddress;
        return {
            firstName: r.firstName || "",
            lastName: r.lastName || "",
            companyName: r.companyName || "",
            postalCode: n.postalCode || "",
            town: n.town || "",
            streetName: n.streetName || "",
            streetNumber: n.streetNumber || "",
            appartmentNo: n.appartmentNo || "",
            wwtaddress: r.wwtaddress || !1,
            foreigner: r.foreigner || !1,
            townId: n.townId || "",
            streetId: n.streetId || ""
        }
    }
    e.replaceAddressNullValues = i;

    function s(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : "";
        return "firstName" === t || "lastName" === t || "foreigner" === t || "companyName" === t
    }
    e.main = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : d.emptyAddress,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
                "postalCode" === n.name && n.value.toUpperCase() !== r.postalCode.toUpperCase() ? (r.town = "", r.townId = "", r.streetName = "", r.streetId = "", r.zipValid = !0) : "town" === n.name && n.value.toUpperCase() !== r.town.toUpperCase() && (r.streetName = "", r.streetId = "", r.zipValid = !0);
                var a = {};
                return "town" === n.name ? a.townId = n.cbsId : "streetName" === n.name && (a.streetId = n.cbsId), p({}, r, babelHelpers.defineProperty({}, n.name, n.value), a);
            case o.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return s(n.name) ? p({}, r, babelHelpers.defineProperty({}, n.name, n.value)) : r;
            case o.GET_CART_CUSTOMER_DONE:
                return n.data ? p({}, i(n.data, n.data.mainAddress)) : r;
            case o.REMOVE_STREET:
                return p({}, r, {
                    streetName: ""
                });
            case o.GET_BPG_DATA_DONE:
                return r.wwtaddress ? r : p({}, d.emptyAddress);
            default:
                return r
        }
    };
    e.correspondence = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : d.emptyAddress,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                "postalCode" === n.name && n.value.toUpperCase() !== r.postalCode.toUpperCase() ? (r.town = "", r.townId = "", r.streetName = "", r.streetId = "", r.zipValid = !0) : "town" === n.name && n.value.toUpperCase() !== r.town.toUpperCase() && (r.streetName = "", r.streetId = "", r.zipValid = !0);
                var a = {};
                return "town" === n.name ? a.townId = n.cbsId : "streetName" === n.name && (a.streetId = n.cbsId), p({}, r, babelHelpers.defineProperty({}, n.name, n.value), a);
            case o.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return s(n.name) ? p({}, r, babelHelpers.defineProperty({}, n.name, n.value)) : r;
            case o.GET_CART_CUSTOMER_DONE:
                return n.data ? p({}, i(n.data, n.data.correspondenceAddress)) : r;
            default:
                return r
        }
    };
    e.delivery = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : d.emptyAddress,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
                "postalCode" === n.name && n.value.toUpperCase() !== r.postalCode.toUpperCase() ? (r.town = "", r.townId = "", r.streetName = "", r.streetId = "", r.zipValid = !0) : "town" === n.name && n.value.toUpperCase() !== r.town.toUpperCase() && (r.streetName = "", r.streetId = "", r.zipValid = !0);
                var a = {};
                return "town" === n.name ? a.townId = n.cbsId : "streetName" === n.name && (a.streetId = n.cbsId), p({}, r, babelHelpers.defineProperty({}, n.name, n.value), a);
            case o.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return s(n.name) ? p({}, r, babelHelpers.defineProperty({}, n.name, n.value)) : r;
            case o.GET_CART_CUSTOMER_DONE:
                return p({}, i(n.data));
            default:
                return r
        }
    };
    e.mappings = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                correspondence: "main",
                delivery: "main"
            },
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_ADDRESS:
                return p({}, r, babelHelpers.defineProperty({}, n.mappedAddress, n.pickedAddress));
            case o.GET_CART_CUSTOMER_DONE:
                var a = i(n.data, n.data.mainAddress),
                    s = i(n.data, n.data.correspondenceAddress),
                    d = l(a, s) ? "main" : "correspondence";
                return d = function(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {};
                    return null == t.postalCode && null == t.town && null == t.streetName && null == t.streetNumber && null == t.appartmentNo
                }(n.data.correspondenceAddress) ? "main" : d, p({}, r, {
                    correspondence: d = n.data.wwtaddress ? "main" : d
                });
            default:
                return r
        }
    };
    var l = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : d.emptyAddress,
            n = 1 < arguments.length && void 0 !== t ? t : d.emptyAddress,
            a = Object.keys(r).map(function(e) {
                return e in d.emptyAddress
            }).reduce(function(e, t) {
                return e && t
            }),
            s = Object.keys(n).map(function(e) {
                return e in d.emptyAddress
            }).reduce(function(e, t) {
                return e && t
            });
        return !(!a || !s) && Object.keys(d.emptyAddress).map(function(e) {
            return e in r && e in n && r[e] === n[e]
        }).reduce(function(e, t) {
            return e && t
        })
    }
});
//# sourceMappingURL=addresses.js.map