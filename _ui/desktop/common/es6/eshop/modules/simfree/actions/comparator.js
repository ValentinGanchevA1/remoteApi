import * as ACTIONS from "../actionTypes";
import ActionType from "eshop/modules/simfree/fetchComparatorConfigActionType";
import RemoteApi from "../remoteApi";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import {
    getComparatorDevices
} from "eshop/modules/simfree/selectors";
export function fetchComparatorConfig(device, uid, actionType) {
    return (dispatch) => {
        RemoteApi.getComparatorConfig(device, uid)
            .then((response) => {
                dispatch({
                    type: ACTIONS.FETCH_COMPARATOR_CONFIG,
                    payload: response
                });
                if (response.deviceListResult != null) {
                    executeDataLayer(device, response.deviceListResult.comparatorDevices, actionType);
                    dispatch({
                        type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                        payload: response.deviceListResult.comparatorDevices
                    })
                } else {
                    dispatch({
                        type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                        payload: []
                    })
                }
            }).catch(error => console.log("Error fetchComparatorConfig ", error));
    }
};

function executeDataLayer(device, comparatorDevices, actionType) {
    if (ActionType.VISIT_PAGE === actionType) {
        DataLayerUtils.pushVisitComparatorPage(comparatorDevices);
    } else if (ActionType.ADD_DEVICE === actionType) {
        DataLayerUtils.pushAddDeviceToCompare(device, comparatorDevices);
    } else if (ActionType.REMOVE_DEVICE === actionType) {
        DataLayerUtils.pushRemoveDeviceFromList(comparatorDevices);
    }
}

export function fetchProducers() {
    return (dispatch) => {
        RemoteApi.fetchProducers()
            .then((response) => dispatch({
                type: ACTIONS.FETCH_PRODUCERS,
                payload: response
            }))
    }
};

export function fetchModelsForProducer(producer) {
    return (dispatch) => {
        RemoteApi.fetchModelsForProducers(producer)
            .then((response) => dispatch({
                type: ACTIONS.FETCH_MODELS_FOR_BRAND,
                payload: response
            }))
    }
};

export function setSelectedProducer(selectedProducer) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GET_SELECTED_PRODUCER,
            payload: selectedProducer
        });
        if (selectedProducer != "") {
            RemoteApi.fetchModelsForProducers(selectedProducer)
                .then((response) => dispatch({
                    type: ACTIONS.FETCH_MODELS_FOR_BRAND,
                    payload: response
                }))
        }
    }
};

export function setSelectedModel(selectedModel) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.GET_SELECTED_MODEL,
            payload: selectedModel
        })
    }
};

export function updateComparatorDevicesList(device) {
    return (dispatch) => {
        RemoteApi.updateComparatorDevicesList(device).then((response) => {
            dispatch({
                type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                payload: response.comparatorDevices
            });
            dispatch({
                type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                value: response.errorCode
            });
        }).catch(error => console.log("Error updateComparatorDevicesList ", error));
    }
}

export function updateComparatorDevicesListByUid(deviceUid) {
    return (dispatch) => {
        RemoteApi.updateComparatorDevicesListByUid(deviceUid).then(response => {
            dispatch({
                type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                payload: response.comparatorDevices
            });
            dispatch({
                type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                value: response.errorCode
            });
        }).catch(error => console.log("Error updateComparatorDevicesListByUid ", error));
    }
}

export function clearDevicesList() {
    return (dispatch) => {
        RemoteApi.clearDevicesList().then(response => {
            dispatch({
                type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                payload: response.comparatorDevices
            });
            dispatch({
                type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                value: response.errorCode
            });
        }).catch(error => console.log("Error clearDevicesList ", error));
    }
}

export function redirectToComparator(comparatorUrl) {
    location.href = comparatorUrl;
}

export function fetchComparatorDevicesList() {
    return dispatch => {
        RemoteApi.fetchComparatorDevicesList().then(response => dispatch({
                type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                payload: response,
            }),
            error => console.error("Error fetchComparatorDevicesList ", error));
    }
}
export function storeIsComparatorCategory(isComparatorCategory) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_IS_COMPARATOR_CATEGORY,
            value: isComparatorCategory
        })
    }
}
export function clearErrorCode() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
            value: 0
        })
    }
}
export function clearModelsForBrand() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.CLEAR_MODELS_FOR_BRAND
        })
    }
}