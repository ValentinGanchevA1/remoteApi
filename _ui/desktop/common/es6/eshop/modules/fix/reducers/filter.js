import * as ACTIONS from '../actionTypes'

export const filterLP = (filterLP = [], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_FILTER_ID: {
            return action.payload
        }
        default:
            return filterLP
    }
}

export const pageContext = (pageContext = "1P", action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_PAGE_CONTEXT: {
            return action.payload
        }
        default:
            return pageContext
    }
}