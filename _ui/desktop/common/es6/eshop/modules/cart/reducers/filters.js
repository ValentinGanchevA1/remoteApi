import * as ACTIONS from "../actionTypes";
import TvPackagesChoiceFilter from "../../fix/enum/TvPackagesChoiceFilter";

export const secondaryChoice = (secondaryChoice = TvPackagesChoiceFilter.TV_DEFAULT_CHOICE_PRODUCT, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_TV_PACKAGES_CHOICE_FILTER:
            return action.payload;
        default:
            return secondaryChoice;
    }
};

export const loyaltyDuration = (loyaltyDuration = null, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER:
            return action.payload;
        default:
            return loyaltyDuration;
    }
};