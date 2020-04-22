define(["exports", "redux", "../actionTypes"], function(e, t, i) {
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

    function s(t) {
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
    }), e.msisdnComponent = e.simCardComponent = e.resourcesMsg = e.bundleNo = e.visible = void 0;
    e.visible = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.RESOURCE_MODAL_OPEN:
                return !0;
            case i.RESOURCE_MODAL_CLOSE:
            case i.CHANGE_MSISDN_SUCCESS:
            case i.CHANGE_SIMCARD_SUCCESS:
                return !1;
            default:
                return r
        }
    };
    e.bundleNo = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.RESOURCE_MODAL_OPEN:
                return n.bundleNo;
            default:
                return r
        }
    };
    e.resourcesMsg = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CHANGE_MSISDN_FAILED:
                return n.payload ? n.payload : r;
            case i.CHANGE_MSISDN_SUCCESS:
            case i.RESOURCE_MODAL_CLOSE:
                return null;
            default:
                return r
        }
    };
    var r = (0, t.combineReducers)({
        simCards: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case i.FETCH_SIM_CARDS:
                    return s({}, r, babelHelpers.defineProperty({}, n.bundleNo, n.payload));
                default:
                    return r
            }
        },
        simCard: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case i.SET_SIMCARD:
                    return s({}, n.simCard);
                case i.RESOURCE_MODAL_OPEN:
                    return s({}, n.entry.simCard);
                default:
                    return r
            }
        },
        changingSimCard: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e && e;
            switch ((1 < arguments.length ? t : void 0).type) {
                case i.CHANGE_SIMCARD:
                    return !0;
                case i.CHANGE_SIMCARD_SUCCESS:
                    return !1;
                default:
                    return r
            }
        }
    });
    e.simCardComponent = r;
    var o = (0, t.combineReducers)({
        msisdns: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : [],
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case i.FETCH_MSISDNS:
                    return n.payload;
                case i.CHANGE_MSISDN_SUCCESS:
                    return [];
                default:
                    return r
            }
        },
        msisdn: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : null,
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case i.SET_MSISDN:
                    return n.msisdn;
                case i.RESOURCE_MODAL_OPEN:
                    return n.entry.msisdn;
                default:
                    return r
            }
        },
        changingMsisdn: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e && e;
            switch ((1 < arguments.length ? t : void 0).type) {
                case i.CHANGE_MSISDN:
                    return !0;
                case i.CHANGE_MSISDN_FAILED:
                case i.CHANGE_MSISDN_SUCCESS:
                    return !1;
                default:
                    return r
            }
        }
    });
    e.msisdnComponent = o
});
//# sourceMappingURL=resources.js.map