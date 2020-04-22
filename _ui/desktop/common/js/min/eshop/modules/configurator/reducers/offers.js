define(["exports", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "../actionTypes"], function(e, o, d, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getContractRoleInProgress = e.contractRoleForRetention = e.contractRole = e.documents = e.deviceInstalmentsConfiguration = e.selectedDeviceInstalmentsCount = e.selectedDevice = e.selectedRateplanBaseProductId = e.selectedVases = e.selectedPosition = e.selected = e.firstOfferFromProductFilter = e.data = void 0, d = babelHelpers.interopRequireDefault(d);
    e.data = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.FETCH_OFFERS:
                var r = {};
                return r[(0, o.hashFilters)(a.selectedFilters)] = a.payload, Object.assign({}, n, r);
            default:
                return n
        }
    };
    e.firstOfferFromProductFilter = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.GET_FIRST_OFFER_RESPONSE:
                return a.data;
            case u.GET_FIRST_OFFER_ERROR:
                return {};
            default:
                return n
        }
    };
    e.selected = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : d.default.loadFromSessionStorage("selectedPropositionId") || "",
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.FETCH_OFFERS:
                return n;
            case u.SELECT_OFFER:
            case u.SELECT_PROPOSITION_ID:
                return d.default.saveInSessionStorage("selectedPropositionId", a.propositionId), d.default.changeOrAddUrlParameterDisabledIfNotCanonical("selectedPropositionId", a.propositionId), a.propositionId || n;
            case u.CLEAR_OFFER:
                return d.default.saveInSessionStorage("selectedPropositionId", a.propositionId), d.default.changeOrAddUrlParameterDisabledOnCheckout("serviceplan", ""), d.default.changeOrAddUrlParameterDisabledOnCheckout("selectedPropositionId", ""), "";
            default:
                return n
        }
    };

    function c(e) {
        return JSON.stringify(e)
    }
    e.selectedPosition = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : d.default.loadFromSessionStorage("selectedPropositionPosition") || -1,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.SELECT_OFFER:
            case u.SELECT_PROPOSITION_ID:
                return d.default.saveInSessionStorage("selectedPropositionPosition", a.position || -1), a.position || -1;
            default:
                return n
        }
    };
    e.selectedVases = function(e, t) {
        var n, a = 0 < arguments.length && void 0 !== e ? e : (n = d.default.getParameterValueFromUrl("selectedVases") || d.default.loadFromSessionStorage("selectedVases")) ? (n = decodeURI(n), d.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", c(JSON.parse(n))), JSON.parse(n)) : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case u.CLEAR_SELECTED_VASES:
                return d.default.removeFromSessionStorage("selectedVases"), [];
            case u.SELECT_VAS:
                var o = a || [],
                    s = o && o.find(function(e) {
                        return e.propositionId === r.propositionId
                    });
                return s ? d.default.addUniqueIntoArray(r.vasId, s.vases) : (s = {
                    propositionId: r.propositionId,
                    vases: [r.vasId]
                }, o.push(s)), d.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", c(o)), d.default.cloneArray(o);
            case u.UNSELECT_VAS:
                var l = a || [],
                    i = l && l.find(function(e) {
                        return e.propositionId === r.propositionId
                    });
                return i && i.vases.length && (i.vases = d.default.addOrRemoveFromArray(r.vasId, i.vases), 0 === i.vases.length && (l = d.default.addOrRemoveFromArray(i, l))), d.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", c(l)), d.default.cloneArray(l);
            default:
                return a
        }
    };
    e.selectedRateplanBaseProductId = function(e, t) {
        var n = 1 < arguments.length ? t : void 0,
            a = d.default.getParameterValueFromUrl("serviceplan") || d.default.loadFromSessionStorage("serviceplan");
        switch (n.type) {
            case u.FETCH_OFFERS:
                var r = n.payload && n.payload.find(function(e) {
                    return e.isDefault
                });
                if (r && !a && (null == n.useDefaultOffer || n.useDefaultOffer)) return r.rateplanBaseProductId;
                var o = n.payload && n.payload.find(function(e) {
                    return e.isCanonicalConfiguration
                });
                return d.default.isCanonicalLink() && o && (a = o.rateplanBaseProductId, d.default.saveCanonicalValueInSessionStorage("serviceplan", a), d.default.saveInStorageOnCanonicalLinks("serviceplan", a)), a;
            case u.SELECT_OFFER:
                var s = d.default.getParameterValueFromUrl("serviceplan") || d.default.loadFromSessionStorage("serviceplan");
                return !n.urlParametersUsed && s && d.default.isCanonicalLink() ? (d.default.saveInStorageOnCanonicalLinks("serviceplan", s), s) : (d.default.saveInStorageOnCanonicalLinks("serviceplan", n.rateplanBaseProductId), n.rateplanBaseProductId || a);
            case u.CLEAR_OFFER:
                return d.default.removeFromSessionStorage("serviceplan"), "";
            case u.ADD_FROM_LINK:
                return n.serviceplan;
            default:
                return a
        }
    };
    e.selectedDevice = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.ADD_FROM_LINK:
            case u.SELECT_OFFER:
                return a.deviceId || "";
            default:
                return n
        }
    };
    e.selectedDeviceInstalmentsCount = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : d.default.loadFromSessionStorage("selectedDeviceInstalmentsCount") || null,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE:
                return null != a.deviceInstalmentsCount ? (d.default.saveInSessionStorage("selectedDeviceInstalmentsCount", a.deviceInstalmentsCount), a.deviceInstalmentsCount) : n;
            case u.CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE:
                return d.default.removeFromSessionStorage("selectedDeviceInstalmentsCount"), n;
            case u.SELECT_DEVICE_INSTALMENTS_COUNT:
                return a.deviceInstalmentsCount || null;
            case u.SELECT_PROCESS_TYPE:
                return null;
            default:
                return n
        }
    };
    e.deviceInstalmentsConfiguration = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.SET_DEVICE_INSTALMENTS_CONFIGURATION:
                return a.deviceInstalmentsConfiguration || null;
            default:
                return n
        }
    };
    e.documents = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.SELECT_DOCUMENTS:
                var r = !1;
                return a.payload.forEach(function(t) {
                    r || n.filter(function(e) {
                        return e.templateId === t.templateId
                    }).find(function(e) {
                        return e.documentCode === t.documentCode
                    }) || (r = !0)
                }), r && n.forEach(function(t) {
                    r || a.payload.filter(function(e) {
                        return e.templateId === t.templateId
                    }).find(function(e) {
                        return e.documentCode === t.documentCode
                    }) || (r = !0)
                }), a.payload.length && a.payload.length === n.length || (r = !0), r ? a.payload : n;
            default:
                return n
        }
    };
    e.contractRole = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.GET_CONTRACT_ROLE_RESPONSE:
                return a.data.roles;
            default:
                return n
        }
    };
    e.contractRoleForRetention = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.GET_CONTRACT_ROLE_RESPONSE:
                return a.data.retentionRoles;
            default:
                return n
        }
    };
    e.getContractRoleInProgress = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case u.GET_CONTRACT_ROLE_START:
                return !0;
            case u.GET_CONTRACT_ROLE_RESPONSE:
            case u.GET_CONTRACT_ROLE_ERROR:
                return !1;
            default:
                return n
        }
    }
});
//# sourceMappingURL=offers.js.map