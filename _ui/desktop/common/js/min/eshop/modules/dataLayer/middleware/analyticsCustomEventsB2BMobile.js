define(["exports", "../../auth/selectors/authorization", "../../checkout/selectors", "../dataLayerUtilities", "../../configurator/actionTypes", "../../configurator/selectors/filters", "../../configurator/selectors/offers"], function(e, s, i, n, t, a, c) {
    "use strict";
    var o;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;

    function l(e) {
        return (0, s.getSalesChannel)(e) || (0, i.getSalesChannelForSummary)(e) || (t = e, o = (0, i.getAssistModeStateData)(t), r = o.loggedEmployee, n = o.assistedEmployee || r, [(a = !!n && n).fullBscs, a.salesChannelName || "brak danych ID kanału", a.loginOtsa, a.location][1]);
        var t, o, r, n, a
    }
    var r = (o = {}, babelHelpers.defineProperty(o, t.SELECT_VAS, function(e, t) {
        var o = (0, c.getGratisPackagesForPropositionId)(t.propositionId)(e),
            r = o && o.find(function(e) {
                return e.bonuses[0].code === t.vasId
            }) && o.find(function(e) {
                return e.bonuses[0].code === t.vasId
            }).title || "";
        return {
            event: n.AnalyticsEvents.PACKAGE_B2B,
            action: n.AnalyticsActions.CHANGED_PACKAGE,
            price: t.rateplanName,
            category: (0, n.stringJoiner)([l(e), (0, a.getMarketContext)(e), (0, n.offerTypeToCommitmentMap)((0, a.getSelectedOfferType)(e)), (0, n.offerTypeToCategoryMap)((0, a.getSelectedOfferType)(e)), (0, n.getProcessTypeName)((0, a.getSelectedProcessTypeValue)(e))], "/"),
            type: r
        }
    }), babelHelpers.defineProperty(o, t.UNSELECT_VAS, function(e, t) {
        var o = (0, c.getGratisPackagesForPropositionId)(t.propositionId)(e),
            r = o && o.find(function(e) {
                return e.bonuses[0].code === t.vasId
            }) && o.find(function(e) {
                return e.bonuses[0].code === t.vasId
            }).title || "";
        return {
            event: n.AnalyticsEvents.PACKAGE_B2B,
            action: n.AnalyticsActions.CHANGE_PACKAGE,
            price: t.rateplanName,
            category: (0, n.stringJoiner)([l(e), (0, a.getMarketContext)(e), (0, n.offerTypeToCommitmentMap)((0, a.getSelectedOfferType)(e)), (0, n.offerTypeToCategoryMap)((0, a.getSelectedOfferType)(e)), (0, n.getProcessTypeName)((0, a.getSelectedProcessTypeValue)(e))], "/"),
            type: r
        }
    }), o);
    e.default = r
});
//# sourceMappingURL=analyticsCustomEventsB2BMobile.js.map