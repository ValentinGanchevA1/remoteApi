import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    getAssistModeStateData,
    getSalesChannelForSummary
} from "../../checkout/selectors";
import {
    AnalyticsActions,
    AnalyticsEvents,
    getProcessTypeName,
    offerTypeToCategoryMap,
    offerTypeToCommitmentMap,
    stringJoiner,
} from "../dataLayerUtilities";
import {
    SELECT_VAS,
    UNSELECT_VAS
} from "../../configurator/actionTypes";
import {
    getMarketContext,
    getSelectedOfferType,
    getSelectedProcessTypeValue,
} from "../../configurator/selectors/filters";
import {
    getGratisPackagesForPropositionId
} from "../../configurator/selectors/offers";


const calculateSellersData = state => {
    const {
        loggedEmployee,
        assistedEmployee
    } = getAssistModeStateData(state);
    const employee = assistedEmployee || loggedEmployee;
    const {
        fullBscs: fullBscs,
        salesChannelName: salesChannelName,
        loginOtsa: loginOtsa,
        location: location
    } = !!employee && employee;
    return ({
        dimension19: fullBscs || "brak danych ID sprzedawcy",
        dimension20: salesChannelName || "brak danych ID kanału",
        dimension25: loginOtsa || "brak danych ID sprzedawcy OTSA",
        dimension26: location || "brak danych ID punktu",
    });
};
const calculateSalesChannel = state => {
    return getSalesChannel(state) || getSalesChannelForSummary(state) || calculateSellersData(state).dimension20;
};

const selectVasPackage = (state, action) => {
    const packages = getGratisPackagesForPropositionId(action.propositionId)(state);
    const title = packages && packages.find(p => p.bonuses[0].code === action.vasId) && packages.find(p => p.bonuses[0].code === action.vasId).title || "";
    return {
        event: AnalyticsEvents.PACKAGE_B2B,
        action: AnalyticsActions.CHANGED_PACKAGE,
        price: action.rateplanName,
        category: stringJoiner([
            calculateSalesChannel(state),
            getMarketContext(state),
            offerTypeToCommitmentMap(getSelectedOfferType(state)),
            offerTypeToCategoryMap(getSelectedOfferType(state)),
            getProcessTypeName(getSelectedProcessTypeValue(state))
        ], "/"),
        type: title,
    }
};
const unselectVasPackage = (state, action) => {
    const packages = getGratisPackagesForPropositionId(action.propositionId)(state);
    const title = packages && packages.find(p => p.bonuses[0].code === action.vasId) && packages.find(p => p.bonuses[0].code === action.vasId).title || "";
    return {
        event: AnalyticsEvents.PACKAGE_B2B,
        action: AnalyticsActions.CHANGE_PACKAGE,
        price: action.rateplanName,
        category: stringJoiner([
            calculateSalesChannel(state),
            getMarketContext(state),
            offerTypeToCommitmentMap(getSelectedOfferType(state)),
            offerTypeToCategoryMap(getSelectedOfferType(state)),
            getProcessTypeName(getSelectedProcessTypeValue(state))
        ], "/"),
        type: title,
    }
};

export default {
    [SELECT_VAS]: selectVasPackage,
    [UNSELECT_VAS]: unselectVasPackage,
};