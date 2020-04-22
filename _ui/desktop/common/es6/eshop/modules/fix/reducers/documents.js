import * as ACTIONS from '../actionTypes'

export const documentsDataLP = (store = {}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DOCUMENTS: {
            const documents = action.payload
            return documents
        }
        default:
            return store
    }
}