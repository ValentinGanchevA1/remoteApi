import {
    RequestState
} from "../../core/constants/RequestState";
import * as actionTypes from "../actionTypes";

const initialDeviceListState = {
    requestState: RequestState.None,
    devices: []
};

const deviceListReducer = (state = initialDeviceListState, action) => {
    switch (action.type) {
        case actionTypes.fetchDeviceList.start:
            return {
                requestState: RequestState.Waiting,
                    devices: []
            };
        case actionTypes.fetchDeviceList.success:
            return {
                requestState: RequestState.Success,
                    devices: [...action.payload]
            };
        case actionTypes.fetchDeviceList.error:
            return {
                ...state,
                requestState: RequestState.Error,
                    devices: []
            };
        default:
            return state;
    }
};

export default deviceListReducer;