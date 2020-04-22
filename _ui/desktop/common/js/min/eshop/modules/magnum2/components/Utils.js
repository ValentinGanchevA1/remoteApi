define(["exports"], function(n) {
    "use strict";

    function e(n) {
        function e(n, e) {
            return {
                integer: n,
                fraction: e
            }
        }
        var r = n.toString();
        if (new RegExp("\\d[.|,]\\d").test(r)) {
            var t = new RegExp("[.|,]"),
                u = r.split(t);
            return e(u[0], u[1])
        }
        return new RegExp("\\d").test(r) ? e(r, "00") : e(null, null)
    }

    function r(n) {
        return e(n).integer
    }

    function t(n) {
        return e(n).fraction
    }

    function u(n) {
        return 0 === parseInt(r(n.gross)) && 0 === parseInt(t(n.gross))
    }

    function i(n) {
        var e = n.features ? n.features.map(function(n) {
                return n.featureValues[0].value
            }) : [],
            r = n.price.oraPaymentsData.monthlyPayments.map(function(n) {
                return {
                    monthFrom: n.monthFrom,
                    price: n.price,
                    currency: n.currency,
                    description: n.description
                }
            });
        return {
            id: n.code,
            features: e,
            monthlyPayments: r,
            img: n.img
        }
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.integer = r, n.fraction = t, n.isPriceZero = u, n.areMonthlyPricesZero = function(n) {
        return 1 === n.length && u(n[0])
    }, n.extractMainTvPackages = function(n) {
        return n.filter(function(n) {
            return "TVPCK_MAIN" === n.addonType.code && "" === n.partner
        }).map(function(n) {
            return i(n)
        })
    }, n.extractExtendingTvPackages = function(n) {
        return n.filter(function(n) {
            return "TVPCK_MAIN" === n.addonType.code && "OPTV" === n.partner
        }).map(function(n) {
            return i(n)
        })
    }, n.extractExtraTvPackages = function(n) {
        return n.filter(function(n) {
            return "TVPCK_OPTIONAL" === n.addonType.code || "TVPCK_MAIN" === n.addonType.code && "" !== n.partner && "OPTV" !== n.partner
        }).map(function(n) {
            return i(n)
        })
    }
});
//# sourceMappingURL=Utils.js.map