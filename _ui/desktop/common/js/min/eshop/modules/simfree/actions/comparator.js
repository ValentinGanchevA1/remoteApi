define(["exports", "../actionTypes", "eshop/modules/simfree/fetchComparatorConfigActionType", "../remoteApi", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/selectors"], function(e, c, i, o, f, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchComparatorConfig = function(a, e, u) {
        return function(n) {
            o.default.getComparatorConfig(a, e).then(function(e) {
                var t, o, r;
                n({
                    type: c.FETCH_COMPARATOR_CONFIG,
                    payload: e
                }), null != e.deviceListResult ? (t = a, o = e.deviceListResult.comparatorDevices, r = u, i.default.VISIT_PAGE === r ? f.default.pushVisitComparatorPage(o) : i.default.ADD_DEVICE === r ? f.default.pushAddDeviceToCompare(t, o) : i.default.REMOVE_DEVICE === r && f.default.pushRemoveDeviceFromList(o), n({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: e.deviceListResult.comparatorDevices
                })) : n({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: []
                })
            }).catch(function(e) {})
        }
    }, e.fetchProducers = function() {
        return function(t) {
            o.default.fetchProducers().then(function(e) {
                return t({
                    type: c.FETCH_PRODUCERS,
                    payload: e
                })
            })
        }
    }, e.fetchModelsForProducer = function(e) {
        return function(t) {
            o.default.fetchModelsForProducers(e).then(function(e) {
                return t({
                    type: c.FETCH_MODELS_FOR_BRAND,
                    payload: e
                })
            })
        }
    }, e.setSelectedProducer = function(e) {
        return function(t) {
            t({
                type: c.GET_SELECTED_PRODUCER,
                payload: e
            }), "" != e && o.default.fetchModelsForProducers(e).then(function(e) {
                return t({
                    type: c.FETCH_MODELS_FOR_BRAND,
                    payload: e
                })
            })
        }
    }, e.setSelectedModel = function(t) {
        return function(e) {
            e({
                type: c.GET_SELECTED_MODEL,
                payload: t
            })
        }
    }, e.updateComparatorDevicesList = function(e) {
        return function(t) {
            o.default.updateComparatorDevicesList(e).then(function(e) {
                t({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: e.comparatorDevices
                }), t({
                    type: c.SET_COMPARATOR_ERROR_CODE,
                    value: e.errorCode
                })
            }).catch(function(e) {})
        }
    }, e.updateComparatorDevicesListByUid = function(e) {
        return function(t) {
            o.default.updateComparatorDevicesListByUid(e).then(function(e) {
                t({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: e.comparatorDevices
                }), t({
                    type: c.SET_COMPARATOR_ERROR_CODE,
                    value: e.errorCode
                })
            }).catch(function(e) {})
        }
    }, e.clearDevicesList = function() {
        return function(t) {
            o.default.clearDevicesList().then(function(e) {
                t({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: e.comparatorDevices
                }), t({
                    type: c.SET_COMPARATOR_ERROR_CODE,
                    value: e.errorCode
                })
            }).catch(function(e) {})
        }
    }, e.redirectToComparator = function(e) {
        location.href = e
    }, e.fetchComparatorDevicesList = function() {
        return function(t) {
            o.default.fetchComparatorDevicesList().then(function(e) {
                return t({
                    type: c.UPDATE_COMPARATOR_DEVICES,
                    payload: e
                })
            }, function(e) {})
        }
    }, e.storeIsComparatorCategory = function(t) {
        return function(e) {
            e({
                type: c.SET_IS_COMPARATOR_CATEGORY,
                value: t
            })
        }
    }, e.clearErrorCode = function() {
        return function(e) {
            e({
                type: c.SET_COMPARATOR_ERROR_CODE,
                value: 0
            })
        }
    }, e.clearModelsForBrand = function() {
        return function(e) {
            e({
                type: c.CLEAR_MODELS_FOR_BRAND
            })
        }
    }, c = babelHelpers.interopRequireWildcard(c), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), f = babelHelpers.interopRequireDefault(f)
});
//# sourceMappingURL=comparator.js.map