import {
    RequestState
} from "../../core/constants/RequestState";
import * as actionTypes from "../actionTypes";

const initialDurationListState = {
    requestState: RequestState.None,
    requestId: null,
    durations: [],
    propositions: [],
    productListDescription: null,
    showOnlyFTTH: true,
    paragraphsAbove: [],
    paragraphsBelow: []
};

const durationListReducer = (state = initialDurationListState, action) => {
    switch (action.type) {
        case actionTypes.fetchPropositionList.start:
            return {
                ...state,
                requestState: RequestState.Waiting,
                    durations: [],
                    propositions: [],
                    requestId: action.payload.requestId,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
            };
        case actionTypes.fetchPropositionList.success:
            return {
                ...state,
                ...action.payload,
                    requestState: RequestState.Success
            };
        case actionTypes.fetchPropositionList.error:
            return {
                ...state,
                requestState: RequestState.Error,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
            };
        case actionTypes.fetchPropositionList.reset:
            return {
                ...state,
                requestState: RequestState.None,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
            };
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.durationList;
        case actionTypes.SHOW_ONLY_FTTH:
            return {
                ...state, showOnlyFTTH: action.payload
            };
        default:
            return state;
    }
};

export default durationListReducer;