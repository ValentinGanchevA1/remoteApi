define(["exports", "Reselect", "./utils"], function(e, t, p) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createAddressValidationSelector = e.createFilteredStreetSuggestionsSelector = e.createFilteredCitySuggestionsSelector = e.createStreetSuggestionsSelector = e.createCitySuggestionsSelector = e.filterCitySuggestions = e.filterStreetSuggestions = e.getCountries = e.getAllStreetSuggestions = e.getAllCitySuggestions = e.getCbsState = void 0;

    function r(e) {
        return e.cbs
    }
    e.getCbsState = r;
    var n = (0, t.createSelector)(r, function(e) {
        return e.cities
    });
    e.getAllCitySuggestions = n;
    var o = (0, t.createSelector)(r, function(e) {
        return e.streets
    });
    e.getAllStreetSuggestions = o;
    var i = (0, t.createSelector)(r, function(e) {
        return e.countries
    });
    e.getCountries = i;

    function w(e, t) {
        var r = e[(0, p.cbsKey)(t.postalCode, t.city || t.town)] || [];
        if (0 === r.length) {
            var n = t.townId && "" + t.townId;
            r = e[(0, p.cbsKey)("id", n)] || []
        }
        return r
    }

    function s(e, t) {
        return e.filter(function(e) {
            return 0 <= e.toLowerCase().indexOf(t.streetName ? t.streetName.toLowerCase() : "")
        })
    }
    e.filterStreetSuggestions = s;

    function c(e, t) {
        return e.filter(function(e) {
            return 0 <= e.toLowerCase().indexOf(t.town ? t.town.toLowerCase() : "")
        })
    }
    e.filterCitySuggestions = c;

    function u(e) {
        return (0, t.createSelector)([n, e], function(e, t) {
            return e[(0, p.cbsKey)(t.postalCode)] || []
        })
    }
    e.createCitySuggestionsSelector = u;

    function l(e) {
        return (0, t.createSelector)([o, e], function(e, t) {
            return w(e, t)
        })
    }
    e.createStreetSuggestionsSelector = l;
    e.createFilteredCitySuggestionsSelector = function(e) {
        return (0, t.createSelector)([u(e), e], c)
    };
    e.createFilteredStreetSuggestionsSelector = function(e) {
        return (0, t.createSelector)([l(e), e], s)
    };
    e.createAddressValidationSelector = function(e) {
        return (0, t.createSelector)([n, o, e], function(e, t, r) {
            var n = r.postalCode,
                o = r.city,
                i = r.town,
                s = r.streetName,
                c = r.townId,
                u = r.streetId,
                l = r.zipValid,
                a = e[(0, p.cbsKey)(n)],
                S = w(t, {
                    postalCode: n,
                    city: o,
                    town: i,
                    townId: c
                }),
                g = !!a && 0 < a.length,
                d = (0, p.isValidPostalCode)(n) && (g || l),
                f = !!o && !!a && -1 < a.indexOf(o.toUpperCase()),
                C = !!i && !!a && -1 < a.indexOf(i.toUpperCase()) || !!c,
                y = !(d && f ^ C) || !!S && (0 === S.length || -1 < S.indexOf(s.toUpperCase())) || !!u && !!c;
            return {
                postalCode: d,
                city: f,
                town: C,
                streetName: d && (f || C) && y
            }
        })
    }
});
//# sourceMappingURL=selectors.js.map