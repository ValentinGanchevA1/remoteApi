define(["exports", "../../auth/selectors/authorization", "../../checkout/selectors", "../dataLayerUtilities", "../../configurator/actionTypes", "../../configurator/selectors/filters", "../../configurator/selectors/offers"], function(_exports, _authorization, _selectors, _dataLayerUtilities, _actionTypes, _filters, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _SELECT_VAS$UNSELECT_;

    var calculateSellersData = function calculateSellersData(state) {
        var _getAssistModeStateDa = (0, _selectors.getAssistModeStateData)(state),
            loggedEmployee = _getAssistModeStateDa.loggedEmployee,
            assistedEmployee = _getAssistModeStateDa.assistedEmployee;

        var employee = assistedEmployee || loggedEmployee;

        var _ref = !!employee && employee,
            fullBscs = _ref.fullBscs,
            salesChannelName = _ref.salesChannelName,
            loginOtsa = _ref.loginOtsa,
            location = _ref.location;

        return {
            dimension19: fullBscs || "brak danych ID sprzedawcy",
            dimension20: salesChannelName || "brak danych ID kanału",
            dimension25: loginOtsa || "brak danych ID sprzedawcy OTSA",
            dimension26: location || "brak danych ID punktu"
        };
    };

    var calculateSalesChannel = function calculateSalesChannel(state) {
        return (0, _authorization.getSalesChannel)(state) || (0, _selectors.getSalesChannelForSummary)(state) || calculateSellersData(state).dimension20;
    };

    var selectVasPackage = function selectVasPackage(state, action) {
        var packages = (0, _offers.getGratisPackagesForPropositionId)(action.propositionId)(state);
        var title = packages && packages.find(function(p) {
            return p.bonuses[0].code === action.vasId;
        }) && packages.find(function(p) {
            return p.bonuses[0].code === action.vasId;
        }).title || "";
        return {
            event: _dataLayerUtilities.AnalyticsEvents.PACKAGE_B2B,
            action: _dataLayerUtilities.AnalyticsActions.CHANGED_PACKAGE,
            price: action.rateplanName,
            category: (0, _dataLayerUtilities.stringJoiner)([calculateSalesChannel(state), (0, _filters.getMarketContext)(state), (0, _dataLayerUtilities.offerTypeToCommitmentMap)((0, _filters.getSelectedOfferType)(state)), (0, _dataLayerUtilities.offerTypeToCategoryMap)((0, _filters.getSelectedOfferType)(state)), (0, _dataLayerUtilities.getProcessTypeName)((0, _filters.getSelectedProcessTypeValue)(state))], "/"),
            type: title
        };
    };

    var unselectVasPackage = function unselectVasPackage(state, action) {
        var packages = (0, _offers.getGratisPackagesForPropositionId)(action.propositionId)(state);
        var title = packages && packages.find(function(p) {
            return p.bonuses[0].code === action.vasId;
        }) && packages.find(function(p) {
            return p.bonuses[0].code === action.vasId;
        }).title || "";
        return {
            event: _dataLayerUtilities.AnalyticsEvents.PACKAGE_B2B,
            action: _dataLayerUtilities.AnalyticsActions.CHANGE_PACKAGE,
            price: action.rateplanName,
            category: (0, _dataLayerUtilities.stringJoiner)([calculateSalesChannel(state), (0, _filters.getMarketContext)(state), (0, _dataLayerUtilities.offerTypeToCommitmentMap)((0, _filters.getSelectedOfferType)(state)), (0, _dataLayerUtilities.offerTypeToCategoryMap)((0, _filters.getSelectedOfferType)(state)), (0, _dataLayerUtilities.getProcessTypeName)((0, _filters.getSelectedProcessTypeValue)(state))], "/"),
            type: title
        };
    };

    var _default = (_SELECT_VAS$UNSELECT_ = {}, babelHelpers.defineProperty(_SELECT_VAS$UNSELECT_, _actionTypes.SELECT_VAS, selectVasPackage), babelHelpers.defineProperty(_SELECT_VAS$UNSELECT_, _actionTypes.UNSELECT_VAS, unselectVasPackage), _SELECT_VAS$UNSELECT_);

    _exports.default = _default;
});
//# sourceMappingURL=analyticsCustomEventsB2BMobile.js.map