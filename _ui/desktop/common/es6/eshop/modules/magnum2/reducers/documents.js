import * as actionTypes from "../actionTypes";

const documentsReducer = (state = {
    list: [],
    loading: false
}, action) => {
    switch (action.type) {
        case actionTypes.fetchDocumentsList.success:
            return {
                ...state,
                list: action.payload,
                    loading: false
            };
        case actionTypes.fetchDocumentsList.start:
            return {
                ...state,
                loading: true
            };
        case actionTypes.fetchDocumentsList.error:
            return {
                ...state,
                loading: false
            };
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.documents;
        default:
            return state;
    }
};

export default documentsReducer;