import {
    createSelector
} from "Reselect";
import {
    getFixState
} from "./root";
import VoipVariant from "../enum/VoipVariant";

export const getVoipState = createSelector(getFixState, fix => fix.voip);

export const getVoipVariant = createSelector(getVoipState, voip => voip.variant);

export const getVoipNumbers = createSelector(getVoipState, voip => voip.voipNumbers);

export const getDesignationNumbers = createSelector(getVoipState, voip => {
    let desNumbers = voip.designationNumbers || [];
    if (!!voip.designationNumber) {
        desNumbers.push(voip.designationNumber);
    }
    return [...new Set(desNumbers)];
});

export const getShowVoipVariantModal = createSelector(getVoipState,
    voip => voip.showVariantModal && voip.designationNumbers.length > 0
);

export const getShowVoipNumbersModal = createSelector([getVoipState, getShowVoipVariantModal, getVoipVariant],
    (voip, showVariantModal, voipVariant) => !showVariantModal && voip.showNumbersModal && voip.voipNumbers.length > 0 && voipVariant === VoipVariant.NEW_VOIP
);

export const getSelectedVoipNumber = createSelector(getVoipState, voip => voip.selectedVoipNumber);

export const getNumbersFetched = createSelector(getVoipState, voip => voip.numbersFetched);

export const getNumbersFetching = createSelector(getVoipState, voip => voip.numbersFetching);

export const getDesignationNumber = createSelector(getVoipState, voip => voip.designationNumber);