define(["exports", "../actionTypes", "eshop/modules/simfree/fetchComparatorConfigActionType", "../remoteApi", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/selectors"], function(_exports, ACTIONS, _fetchComparatorConfigActionType, _remoteApi, _DataLayerUtils, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchComparatorConfig = fetchComparatorConfig;
    _exports.fetchProducers = fetchProducers;
    _exports.fetchModelsForProducer = fetchModelsForProducer;
    _exports.setSelectedProducer = setSelectedProducer;
    _exports.setSelectedModel = setSelectedModel;
    _exports.updateComparatorDevicesList = updateComparatorDevicesList;
    _exports.updateComparatorDevicesListByUid = updateComparatorDevicesListByUid;
    _exports.clearDevicesList = clearDevicesList;
    _exports.redirectToComparator = redirectToComparator;
    _exports.fetchComparatorDevicesList = fetchComparatorDevicesList;
    _exports.storeIsComparatorCategory = storeIsComparatorCategory;
    _exports.clearErrorCode = clearErrorCode;
    _exports.clearModelsForBrand = clearModelsForBrand;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _fetchComparatorConfigActionType = babelHelpers.interopRequireDefault(_fetchComparatorConfigActionType);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);

    function fetchComparatorConfig(device, uid, actionType) {
        return function(dispatch) {
            _remoteApi.default.getComparatorConfig(device, uid).then(function(response) {
                dispatch({
                    type: ACTIONS.FETCH_COMPARATOR_CONFIG,
                    payload: response
                });

                if (response.deviceListResult != null) {
                    executeDataLayer(device, response.deviceListResult.comparatorDevices, actionType);
                    dispatch({
                        type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                        payload: response.deviceListResult.comparatorDevices
                    });
                } else {
                    dispatch({
                        type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                        payload: []
                    });
                }
            }).catch(function(error) {
                return console.log("Error fetchComparatorConfig ", error);
            });
        };
    }

    ;

    function executeDataLayer(device, comparatorDevices, actionType) {
        if (_fetchComparatorConfigActionType.default.VISIT_PAGE === actionType) {
            _DataLayerUtils.default.pushVisitComparatorPage(comparatorDevices);
        } else if (_fetchComparatorConfigActionType.default.ADD_DEVICE === actionType) {
            _DataLayerUtils.default.pushAddDeviceToCompare(device, comparatorDevices);
        } else if (_fetchComparatorConfigActionType.default.REMOVE_DEVICE === actionType) {
            _DataLayerUtils.default.pushRemoveDeviceFromList(comparatorDevices);
        }
    }

    function fetchProducers() {
        return function(dispatch) {
            _remoteApi.default.fetchProducers().then(function(response) {
                return dispatch({
                    type: ACTIONS.FETCH_PRODUCERS,
                    payload: response
                });
            });
        };
    }

    ;

    function fetchModelsForProducer(producer) {
        return function(dispatch) {
            _remoteApi.default.fetchModelsForProducers(producer).then(function(response) {
                return dispatch({
                    type: ACTIONS.FETCH_MODELS_FOR_BRAND,
                    payload: response
                });
            });
        };
    }

    ;

    function setSelectedProducer(selectedProducer) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GET_SELECTED_PRODUCER,
                payload: selectedProducer
            });

            if (selectedProducer != "") {
                _remoteApi.default.fetchModelsForProducers(selectedProducer).then(function(response) {
                    return dispatch({
                        type: ACTIONS.FETCH_MODELS_FOR_BRAND,
                        payload: response
                    });
                });
            }
        };
    }

    ;

    function setSelectedModel(selectedModel) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.GET_SELECTED_MODEL,
                payload: selectedModel
            });
        };
    }

    ;

    function updateComparatorDevicesList(device) {
        return function(dispatch) {
            _remoteApi.default.updateComparatorDevicesList(device).then(function(response) {
                dispatch({
                    type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                    payload: response.comparatorDevices
                });
                dispatch({
                    type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                    value: response.errorCode
                });
            }).catch(function(error) {
                return console.log("Error updateComparatorDevicesList ", error);
            });
        };
    }

    function updateComparatorDevicesListByUid(deviceUid) {
        return function(dispatch) {
            _remoteApi.default.updateComparatorDevicesListByUid(deviceUid).then(function(response) {
                dispatch({
                    type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                    payload: response.comparatorDevices
                });
                dispatch({
                    type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                    value: response.errorCode
                });
            }).catch(function(error) {
                return console.log("Error updateComparatorDevicesListByUid ", error);
            });
        };
    }

    function clearDevicesList() {
        return function(dispatch) {
            _remoteApi.default.clearDevicesList().then(function(response) {
                dispatch({
                    type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                    payload: response.comparatorDevices
                });
                dispatch({
                    type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                    value: response.errorCode
                });
            }).catch(function(error) {
                return console.log("Error clearDevicesList ", error);
            });
        };
    }

    function redirectToComparator(comparatorUrl) {
        location.href = comparatorUrl;
    }

    function fetchComparatorDevicesList() {
        return function(dispatch) {
            _remoteApi.default.fetchComparatorDevicesList().then(function(response) {
                return dispatch({
                    type: ACTIONS.UPDATE_COMPARATOR_DEVICES,
                    payload: response
                });
            }, function(error) {
                return console.error("Error fetchComparatorDevicesList ", error);
            });
        };
    }

    function storeIsComparatorCategory(isComparatorCategory) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_IS_COMPARATOR_CATEGORY,
                value: isComparatorCategory
            });
        };
    }

    function clearErrorCode() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_COMPARATOR_ERROR_CODE,
                value: 0
            });
        };
    }

    function clearModelsForBrand() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_MODELS_FOR_BRAND
            });
        };
    }
});
//# sourceMappingURL=comparator.js.map