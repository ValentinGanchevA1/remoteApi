import {
    RequestState
} from "../../core/constants/RequestState";
import * as actionTypes from "../actionTypes";

const initialPossibleTransactionsState = {
    requestState: RequestState.None,
    transactions: [],
    cimId: null
};

const possibleTransactionsReducer = (state = initialPossibleTransactionsState, action) => {
    switch (action.type) {
        case actionTypes.fetchPossibleTransactions.start:
            return {
                requestState: RequestState.Waiting,
                    transactions: state.transactions,
                    cimId: null
            };
        case actionTypes.fetchPossibleTransactions.success:
            return {
                requestState: RequestState.Success,
                    transactions: [...action.payload.transactionDatas],
                    cimId: action.payload.cimId,
                    userSalesChannel: action.payload.userSalesChannel
            };
        case actionTypes.fetchPossibleTransactions.error:
            return {
                ...state,
                requestState: RequestState.Error,
                    transactions: [],
                    cimId: null
            };
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.possibleTransactions;
        default:
            return state;
    }
};

export default possibleTransactionsReducer;