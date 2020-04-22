define(["exports", "../remoteApi", "./magnum", "lodash"], function(e, D, P, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchOrangeLoveDeviceList = e.fetchDocuments = e.fetchOrangeLovePropositionList = e.getPossibleTransactions = void 0, D = babelHelpers.interopRequireDefault(D), P = babelHelpers.interopRequireWildcard(P), s = babelHelpers.interopRequireDefault(s);
    e.getPossibleTransactions = function(r, o, c) {
        return function(t) {
            var e = A(r.zip),
                n = e.preZipCode,
                s = e.postalCode;
            t(P.fetchPossibleTransactions.start());
            var i = {
                preZipCode: n,
                postalCode: s,
                cityId: r.cityId,
                cityName: r.cityName,
                streetId: r.streetId,
                streetName: r.streetName,
                estateNumber: r.streetNumber,
                apartmentNumber: r.apartmentNumber
            };
            return D.default.getPossibleTransactions(i, o, c).then(function(e) {
                return t(P.fetchPossibleTransactions.success(e))
            }, function(e) {
                return t(P.fetchPossibleTransactions.error(e))
            })
        }
    };
    e.fetchOrangeLovePropositionList = function() {
        return function(t, n) {
            var e = n().magnum,
                s = e.wwt,
                i = s.zip,
                r = s.cityId,
                o = s.cityName,
                c = s.streetId,
                a = s.streetName,
                u = s.streetNumber,
                f = s.apartmentNumber,
                l = e.durationList.requestId;
            null !== l && t(P.fetchDeviceListActions.reset());
            var p = (new Date).getTime();
            t(P.fetchPropositionListActions.start({
                requestId: p
            }));
            var d = A(i),
                m = d.preZipCode,
                h = d.postalCode,
                L = e.selectedFixVoipTransaction.process ? e.selectedFixVoipTransaction : e.selectedFixBroadbandTransaction,
                v = e.selectedMobileTransaction,
                b = e.selectedLoyaltyPeriod,
                g = D.default.getOrangeLovePropositions(e.propositionComponentPk, m, h, r, o, c, a, u, f, L, v, b);
            return g.then(function(e) {
                (l = n().magnum.durationList.requestId) === p && t(P.fetchPropositionListActions.success(e))
            }, function(e) {
                t(P.fetchPropositionListActions.error(e))
            }), g
        }
    };
    e.fetchDocuments = function() {
        return function(t, e) {
            var n = e().magnum.durationList.propositions.map(function(e) {
                return e.code
            });
            if (t(P.fetchDocumentsListActions.start()), !s.default.isEmpty(n)) return D.default.fetchDocuments(n).then(function(e) {
                return t(P.fetchDocumentsListActions.success(e))
            }, function(e) {
                return t(P.fetchDocumentsListActions.error(e))
            });
            t(P.fetchDocumentsListActions.success({}))
        }
    };
    e.fetchOrangeLoveDeviceList = function(e, n, s) {
        return function(t) {
            t(P.fetchDeviceListActions.start()), D.default.getOrangeLoveDevices(e, n, s).then(function(e) {
                return t(P.fetchDeviceListActions.success(e))
            }, function(e) {
                return t(P.fetchDeviceListActions.error(e))
            })
        }
    };
    var A = function(e) {
        var t, n;
        if (e && -1 < e.indexOf("-")) {
            var s = e.split("-");
            t = 0 < s.length ? s[0] : "", n = 1 < s.length ? s[1] : ""
        } else t = e ? e.slice(0, 2) : null, n = e ? e.slice(2, 5) : null;
        return {
            preZipCode: t,
            postalCode: n
        }
    }
});
//# sourceMappingURL=data.js.map