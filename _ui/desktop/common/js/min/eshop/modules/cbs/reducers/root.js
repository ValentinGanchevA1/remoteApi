define(["exports", "redux", "../actionTypes", "../utils"], function(e, t, o, c) {
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
    });
    var r = (e.default = void 0, t.combineReducers)({
        cities: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case o.FETCH_CBS_CITIES_DONE:
                    return n.postalCode ? s({}, r, babelHelpers.defineProperty({}, (0, c.cbsKey)(n.postalCode), n.cities)) : r;
                case o.CLEAR_CBS_CITIES:
                case o.FETCH_CBS_CITIES_START:
                case o.FETCH_CBS_CITIES_ERROR:
                    return s({}, r, babelHelpers.defineProperty({}, (0, c.cbsKey)(n.postalCode), []));
                default:
                    return r
            }
        },
        streets: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : {},
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case o.FETCH_CBS_STREETS_DONE:
                    return s({}, r, babelHelpers.defineProperty({}, (0, c.cbsKey)(n.postalCode, n.city), n.streets.map(function(e) {
                        return e.streetName
                    })));
                case o.CLEAR_CBS_STREETS:
                case o.FETCH_CBS_STREETS_START:
                case o.FETCH_CBS_STREETS_ERROR:
                    return s({}, r, babelHelpers.defineProperty({}, (0, c.cbsKey)(n.postalCode, n.city), []));
                default:
                    return r
            }
        },
        countries: function(e, t) {
            var r = 0 < arguments.length && void 0 !== e ? e : [],
                n = 1 < arguments.length ? t : void 0;
            switch (n.type) {
                case o.SET_COUNTRIES:
                    return n.countries;
                default:
                    return r
            }
        }
    });
    e.default = r
});
//# sourceMappingURL=root.js.map