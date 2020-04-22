define(["exports", "lodash", "../../cart/components/entriesList/BundleTypeEnum"], function(e, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.is2UCartEntry = function(e) {
        var t = [n.default._1P_PRE, n.default.VOICE].sort();
        return r.default.isEqual(t, i(e))
    }, e.is4UCartEntry = function(e) {
        var t = [n.default._3P_PRE, n.default.VOICE].sort();
        return r.default.isEqual(t, i(e))
    }, e.cartContainsEsim = e.entryContainsReservableSimCard = e.cartEntriesContainsReservableItems = e.isVoiceCartEntry = e.getAllCartEntries = void 0, r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n);

    function i(e) {
        return "CONVERGENT" !== e.entryType ? [e.bundleType] : r.default.uniq(e.entries.map(function(e) {
            return e.bundleType
        })).sort()
    }
    e.getAllCartEntries = function(e) {
        return r.default.flatMap(e.entries, function(e) {
            return "CONVERGENT" === e.entryType ? e.entries : [e]
        })
    };
    e.isVoiceCartEntry = function(e) {
        return -1 < i(e).indexOf(n.default.VOICE)
    };
    e.cartEntriesContainsReservableItems = function(e) {
        return 0 < e.filter(function(e) {
            return t(e) || u(e) || a(e) || s(e) || l(e)
        }).length
    };
    var t = function(e) {
        return e.isSim && e.msisdn && e.simCard && e.simCard.reservable
    };
    e.entryContainsReservableSimCard = t;
    e.cartContainsEsim = function(e) {
        return 0 < e.filter(function(e) {
            return e.isSim && e.simCard
        }).length
    };
    var u = function(t) {
            return !!t.terminals && 0 < t.terminals.filter(function(e) {
                return !e.migrated && e.isSerialNumberRequired || "MOBILE" === t.entryType || "SIMFREE" === t.entryType
            }).length
        },
        a = function(e) {
            return !!e.euroSets && 0 < e.euroSets.filter(function(e) {
                return e.setElements && 0 < e.setElements.length
            }).length
        },
        s = function(e) {
            return !(!e.broadbandFixProduct || !e.broadbandFixProduct.devices) && 0 < e.broadbandFixProduct.devices.filter(function(e) {
                return !e.migrated && e.isSerialNumberRequired
            }).length
        },
        l = function(e) {
            return !(!e.tvFixProduct || !e.tvFixProduct.devices) && 0 < e.tvFixProduct.devices.filter(function(e) {
                return !e.migrated && e.isSerialNumberRequired
            }).length
        }
});
//# sourceMappingURL=MiniCartUtils.js.map