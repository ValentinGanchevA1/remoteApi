define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "../checkout/remoteApi"], function(e, g, t, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t);
    var f = "/magnum2",
        o = (0, t.default)("#documentsComponentId").val(),
        r = (0, t.default)("#convergentMigrationVariantsId").val(),
        i = {
            getOrangeLoveDevices: function(e, t, n) {
                var o = {
                    deviceListComponentPk: e,
                    propositionCode: t,
                    installmentsOption: n
                };
                return (0, g.get)(f + "/getRecommendedDevices", o)
            },
            getOrangeLovePropositions: function(e, t, n, o, r, i, a, s, p, u, c, l) {
                var d = f + "/getPropositions?propositionComponentPk=" + e,
                    m = {
                        loyaltyDuration: l,
                        transactions: [u, c]
                    };
                return o && (m.addressData = {
                    preZipCode: t,
                    postalCode: n,
                    cityId: o,
                    town: r,
                    streetId: i,
                    line1: a,
                    line2: s,
                    appartmentNo: p
                }), (0, g.postJsonObject)(d, m)
            },
            getPossibleTransactions: function(e, t, n) {
                var o = {
                    addressData: {
                        preZipCode: e.preZipCode,
                        postalCode: e.postalCode,
                        cityId: e.cityId,
                        town: e.cityName,
                        streetId: e.streetId,
                        line1: e.streetName,
                        line2: e.estateNumber,
                        appartmentNo: e.apartmentNumber
                    },
                    bundleTypes: t
                };
                return (0, g.postJsonObject)(f + "/getPossibleTransactions?transactionComponentPk=" + n, o)
            },
            fetchDocuments: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : [];
                return (0, g.post)((0, n.prepareUrl)(f + "/getLandingPageDocuments"), {
                    componentId: o,
                    templates: t
                })
            },
            getMigrationOffers: function() {
                return (0, g.get)((0, n.prepareUrl)("/magnum/migration/offers"), {
                    componentPk: r
                })
            },
            getNextMigrationOffer: function() {
                return (0, g.get)((0, n.prepareUrl)("/magnum/migration/nextOffer"), {
                    componentPk: r
                })
            },
            selectMigrationOffer: function(e) {
                return (0, g.postJsonObject)((0, n.prepareUrl)("/magnum/migration/select"), e)
            }
        };
    e.default = i
});
//# sourceMappingURL=remoteApi.js.map