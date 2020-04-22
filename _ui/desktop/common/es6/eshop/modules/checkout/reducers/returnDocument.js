import {
    RETURN_DOCUMENT_LOADER
} from '../actionTypes';

export var returnDocumentLoader = (state = false, action) => {
    switch (action.type) {
        case RETURN_DOCUMENT_LOADER:
            return action.data;
        default:
            return state;
    }
};