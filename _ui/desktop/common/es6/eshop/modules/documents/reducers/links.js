import {
    DOCUMENT_READY_TO_DOWNLOAD,
    DOCUMENT_LINK_CLEAR
} from "../actionTypes";
import {
    PICKUP_DOCUMENT_DOWNLOAD_DONE
} from "../../checkout/actionTypes";
export default (state = {}, action) => {
    switch (action.type) {
        case DOCUMENT_READY_TO_DOWNLOAD:
            return {
                ...state, [action.code]: action.link
            };
        case PICKUP_DOCUMENT_DOWNLOAD_DONE:
            return {
                ...state, [action.code + "_" + action.bundleNo]: action.link
            }
            case DOCUMENT_LINK_CLEAR:
                return {};
            default:
                return state;
    }
};