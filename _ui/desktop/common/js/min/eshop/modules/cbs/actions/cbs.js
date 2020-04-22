define(["exports", "../actionTypes", "../selectors", "../remoteApi", "../utils"], function(t, r, d, f, S) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCbsCitiesAndStreets = l, t.getCbsStreets = b, t.getCbsData = function(r) {
        var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        return function(t) {
            var e = r.postalCode,
                n = r.city || r.town;
            e && t(l(e, n, r.townId && "" + r.townId, i))
        }
    }, t.getCbsDataThenDispatch = function(r, i, o, s) {
        return function(t) {
            var e = r.postalCode,
                n = r.city || r.town;
            e ? t(l(e, n, r.townId && "" + r.townId, i, o, s)) : null != o && t(o(s))
        }
    }, t.setCountries = t.clearCbsStreets = t.fetchCbsStreetsError = t.fetchCbsStreetsDone = t.removeStreet = t.fetchCbsStreetsStart = t.clearCbsCities = t.fetchCbsCitiesError = t.fetchCbsCitiesDone = t.fetchCbsCitiesStart = void 0, r = babelHelpers.interopRequireWildcard(r), f = babelHelpers.interopRequireDefault(f);
    var C = function(t) {
        return {
            type: r.FETCH_CBS_CITIES_START,
            postalCode: t
        }
    };
    t.fetchCbsCitiesStart = C;
    var c = function(t, e) {
        return {
            type: r.FETCH_CBS_CITIES_DONE,
            postalCode: t,
            cities: e
        }
    };
    t.fetchCbsCitiesDone = c;
    var a = function(t, e) {
        return {
            type: r.FETCH_CBS_CITIES_ERROR,
            postalCode: t,
            error: e
        }
    };
    t.fetchCbsCitiesError = a;
    t.clearCbsCities = function(t) {
        return {
            type: r.CLEAR_CBS_CITIES,
            postalCode: t
        }
    };
    var h = function(t, e) {
        return {
            type: r.FETCH_CBS_STREETS_START,
            postalCode: t,
            city: e
        }
    };
    t.fetchCbsStreetsStart = h;
    var g = function(t) {
        return {
            type: r.REMOVE_STREET,
            streets: t
        }
    };
    t.removeStreet = g;
    var p = function(t, e, n) {
        return {
            type: r.FETCH_CBS_STREETS_DONE,
            postalCode: t,
            city: e,
            streets: n
        }
    };
    t.fetchCbsStreetsDone = p;
    var E = function(t, e, n) {
        return {
            type: r.FETCH_CBS_STREETS_ERROR,
            postalCode: t,
            city: e,
            error: n
        }
    };
    t.fetchCbsStreetsError = E;
    t.clearCbsStreets = function(t) {
        return {
            type: r.CLEAR_CBS_STREETS,
            postalCode: t
        }
    };

    function l(r) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            o = 2 < arguments.length ? arguments[2] : void 0,
            s = 3 < arguments.length ? arguments[3] : void 0,
            l = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
            u = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
        return function(e, t) {
            var n = (0, d.getAllCitySuggestions)(t())[(0, S.cbsKey)(r)];
            (0, S.isValidPostalCode)(r) && !n ? (e(C(r)), f.default.getCbsCitiesForPostCode(r).then(function(t) {
                return e(c(r, t))
            }).then(function() {
                i && e(b(r, i, o, s, l, u))
            }).catch(function(t) {
                e(a(r, t)), null != l && e(l(u))
            })) : (0, S.isValidPostalCode)(r) && i && e(b(r, i, o, s, l, u))
        }
    }

    function b(s) {
        var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            u = 2 < arguments.length ? arguments[2] : void 0,
            C = 3 < arguments.length ? arguments[3] : void 0,
            c = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
            a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
        return function(r, t) {
            var e = (0, d.getAllCitySuggestions)(t())[(0, S.cbsKey)(s)],
                n = e && 0 === e.length,
                i = (0, d.getAllStreetSuggestions)(t())[(0, S.cbsKey)(s, l)],
                o = i && i.length;
            if (!(0, S.isValidPostalCode)(s) || o || n) {
                if ((0, S.isValidPostalCode)(s) && u && !o && !(0, d.getAllStreetSuggestions)(t())[(0, S.cbsKey)("id", u)]) return r(h("id", u)), f.default.getCbsStreetsForCityId(u).then(function(t) {
                    var e = t && t.map(function(t) {
                        return {
                            streetName: t.name && t.name.toUpperCase(),
                            streetId: t.id
                        }
                    }) || [];
                    return r(p("id", u, e)), null != c && r(c(a)), C && 0 === e.length && r(g(streets)), e
                }).catch(function(t) {
                    r(E("id", u, t)), null != c && r(c(a))
                })
            } else r(h(s, l)), f.default.getCbsStreetsForPostCodeAndCity(s, l).then(function(t) {
                return r(p(s, l, t)), null != c && r(c(a)), t
            }).then(function(n) {
                if (0 === n.length && u) return r(h("id", u)), f.default.getCbsStreetsForCityId(u).then(function(t) {
                    var e = t && t.map(function(t) {
                        return {
                            streetName: t.name && t.name.toUpperCase(),
                            streetId: t.id
                        }
                    }) || [];
                    return r(p("id", u, e)), C && 0 === e.length && r(g(n)), null != c && r(c(a)), e
                }).catch(function(t) {
                    r(E("id", u, t)), null != c && r(c(a))
                })
            }).catch(function(t) {
                return r(E(s, l, t))
            })
        }
    }
    t.setCountries = function(t) {
        return {
            type: r.SET_COUNTRIES,
            countries: t
        }
    }
});
//# sourceMappingURL=cbs.js.map