import {
    SET_AGREEMENT_INTRODUCTION_STATUS,
    SET_AGREEMENT_INTRODUCTION_STATUSES,
    SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING,
    SET_DOCUMENTS_TO_MERGE_PER_BUNDLE
} from '../actionTypes';

export const introductionStatuses = (state = {}, action) => {
    switch (action.type) {
        case SET_AGREEMENT_INTRODUCTION_STATUS:
            return {
                ...state, [action.bundleNo]: action.status
            };
        case SET_AGREEMENT_INTRODUCTION_STATUSES:
            return action.introductionStatuses.reduce((newState, introduction) => ({
                ...newState,
                [introduction.bundleNo]: introduction.status
            }), {});
        default:
            return state;
    }
};

export const documentLoadings = (state = {}, action) => {
    switch (action.type) {
        case SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING:
            return {
                ...state, [action.bundleNo]: action.loading
            };
        default:
            return state
    }
};

export const documentsToMergePerBundle = (state = [], action) => {
    switch (action.type) {
        case SET_DOCUMENTS_TO_MERGE_PER_BUNDLE:
            return action.documentsToMergePerBundle;
        default:
            return state
    }
};