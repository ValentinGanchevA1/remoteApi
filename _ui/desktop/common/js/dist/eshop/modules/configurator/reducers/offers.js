define(["exports", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "../actionTypes"], function(_exports, _utils, _OnlineUtils, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getContractRoleInProgress = _exports.contractRoleForRetention = _exports.contractRole = _exports.documents = _exports.deviceInstalmentsConfiguration = _exports.selectedDeviceInstalmentsCount = _exports.selectedDevice = _exports.selectedRateplanBaseProductId = _exports.selectedVases = _exports.selectedPosition = _exports.selected = _exports.firstOfferFromProductFilter = _exports.data = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFERS:
                var newOffers = {};
                newOffers[(0, _utils.hashFilters)(action.selectedFilters)] = action.payload;
                return Object.assign({}, state, newOffers);

            default:
                return state;
        }
    };

    _exports.data = data;

    var firstOfferFromProductFilter = function firstOfferFromProductFilter() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_FIRST_OFFER_RESPONSE:
                return action.data;

            case _actionTypes.GET_FIRST_OFFER_ERROR:
                return {};

            default:
                return state;
        }
    }; //before authorization


    _exports.firstOfferFromProductFilter = firstOfferFromProductFilter;

    var selected = function selected() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("selectedPropositionId") || "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFERS:
                return state;

            case _actionTypes.SELECT_OFFER:
            case _actionTypes.SELECT_PROPOSITION_ID:
                _OnlineUtils.default.saveInSessionStorage("selectedPropositionId", action.propositionId);

                _OnlineUtils.default.changeOrAddUrlParameterDisabledIfNotCanonical("selectedPropositionId", action.propositionId);

                return action.propositionId || state;

            case _actionTypes.CLEAR_OFFER:
                _OnlineUtils.default.saveInSessionStorage("selectedPropositionId", action.propositionId);

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("serviceplan", "");

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("selectedPropositionId", "");

                return "";

            default:
                return state;
        }
    };

    _exports.selected = selected;

    var selectedPosition = function selectedPosition() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("selectedPropositionPosition") || -1;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_OFFER:
            case _actionTypes.SELECT_PROPOSITION_ID:
                _OnlineUtils.default.saveInSessionStorage("selectedPropositionPosition", action.position || -1);

                return action.position || -1;

            default:
                return state;
        }
    };

    _exports.selectedPosition = selectedPosition;

    function parseSelectedVasesFromUrlParam(param) {
        if (!param) {
            return null;
        }

        param = decodeURI(param);

        _OnlineUtils.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(JSON.parse(param)));

        return JSON.parse(param);
    }

    function parseSelectedVasesToUrlParam(param) {
        return JSON.stringify(param);
    }

    var selectedVases = function selectedVases() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseSelectedVasesFromUrlParam(_OnlineUtils.default.getParameterValueFromUrl("selectedVases") || _OnlineUtils.default.loadFromSessionStorage("selectedVases"));
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CLEAR_SELECTED_VASES: {
                _OnlineUtils.default.removeFromSessionStorage("selectedVases");

                return [];
            }

            case _actionTypes.SELECT_VAS: {
                var newState = state || [];
                var vasesForPropos = newState && newState.find(function(p) {
                    return p.propositionId === action.propositionId;
                });

                if (!vasesForPropos) {
                    vasesForPropos = {
                        propositionId: action.propositionId,
                        vases: [action.vasId]
                    };
                    newState.push(vasesForPropos);
                } else {
                    _OnlineUtils.default.addUniqueIntoArray(action.vasId, vasesForPropos.vases);
                }

                _OnlineUtils.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(newState));

                return _OnlineUtils.default.cloneArray(newState);
            }

            case _actionTypes.UNSELECT_VAS: {
                var _newState = state || [];

                var selectedVasesForPropos = _newState && _newState.find(function(p) {
                    return p.propositionId === action.propositionId;
                });

                if (selectedVasesForPropos && selectedVasesForPropos.vases.length) {
                    selectedVasesForPropos.vases = _OnlineUtils.default.addOrRemoveFromArray(action.vasId, selectedVasesForPropos.vases);

                    if (selectedVasesForPropos.vases.length === 0) {
                        _newState = _OnlineUtils.default.addOrRemoveFromArray(selectedVasesForPropos, _newState);
                    }
                }

                _OnlineUtils.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(_newState));

                return _OnlineUtils.default.cloneArray(_newState);
            }

            default:
                return state;
        }
    };

    _exports.selectedVases = selectedVases;

    var selectedRateplanBaseProductId = function selectedRateplanBaseProductId() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        var originalState = _OnlineUtils.default.getParameterValueFromUrl("serviceplan") || _OnlineUtils.default.loadFromSessionStorage("serviceplan");

        switch (action.type) {
            case _actionTypes.FETCH_OFFERS:
                console.warn("selectedRateplanBaseProductId FETCH_OFFERS");
                var defaultOffer = action.payload && action.payload.find(function(offer) {
                    return offer.isDefault;
                });

                if (defaultOffer && !originalState && (action.useDefaultOffer == undefined || action.useDefaultOffer)) {
                    return defaultOffer.rateplanBaseProductId;
                }

                var canonicalConfiguration = action.payload && action.payload.find(function(offer) {
                    return offer.isCanonicalConfiguration;
                });

                if (_OnlineUtils.default.isCanonicalLink() && canonicalConfiguration) {
                    console.log(canonicalConfiguration.rateplanBaseProductId);
                    originalState = canonicalConfiguration.rateplanBaseProductId;

                    _OnlineUtils.default.saveCanonicalValueInSessionStorage("serviceplan", originalState);

                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("serviceplan", originalState);
                }

                return originalState;

            case _actionTypes.SELECT_OFFER:
                var servicePlanParameter = _OnlineUtils.default.getParameterValueFromUrl("serviceplan") || _OnlineUtils.default.loadFromSessionStorage("serviceplan");

                if (!action.urlParametersUsed && servicePlanParameter && _OnlineUtils.default.isCanonicalLink()) {
                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("serviceplan", servicePlanParameter);

                    return servicePlanParameter;
                } else {
                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("serviceplan", action.rateplanBaseProductId);

                    return action.rateplanBaseProductId || originalState;
                }

                case _actionTypes.CLEAR_OFFER:
                    console.warn("selectedRateplanBaseProductId CLEAR_OFFER");

                    _OnlineUtils.default.removeFromSessionStorage("serviceplan");

                    return "";

                case _actionTypes.ADD_FROM_LINK:
                    return action.serviceplan;

                default:
                    return originalState;
        }
    };

    _exports.selectedRateplanBaseProductId = selectedRateplanBaseProductId;

    var selectedDevice = function selectedDevice() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.ADD_FROM_LINK:
            case _actionTypes.SELECT_OFFER:
                return action.deviceId || "";

            default:
                return state;
        }
    };

    _exports.selectedDevice = selectedDevice;

    var selectedDeviceInstalmentsCount = function selectedDeviceInstalmentsCount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("selectedDeviceInstalmentsCount") || null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE:
                if (action.deviceInstalmentsCount != null) {
                    _OnlineUtils.default.saveInSessionStorage("selectedDeviceInstalmentsCount", action.deviceInstalmentsCount);

                    return action.deviceInstalmentsCount;
                } else {
                    return state;
                }

                case _actionTypes.CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE:
                    _OnlineUtils.default.removeFromSessionStorage("selectedDeviceInstalmentsCount");

                    return state;

                case _actionTypes.SELECT_DEVICE_INSTALMENTS_COUNT:
                    return action.deviceInstalmentsCount || null;

                case _actionTypes.SELECT_PROCESS_TYPE:
                    console.warn("selectedDeviceInstalmentsCount action:", action);
                    return null;

                default:
                    return state;
        }
    };

    _exports.selectedDeviceInstalmentsCount = selectedDeviceInstalmentsCount;

    var deviceInstalmentsConfiguration = function deviceInstalmentsConfiguration() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_DEVICE_INSTALMENTS_CONFIGURATION:
                return action.deviceInstalmentsConfiguration || null;

            default:
                return state;
        }
    };

    _exports.deviceInstalmentsConfiguration = deviceInstalmentsConfiguration;

    var documents = function documents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_DOCUMENTS:
                var newDocuments = false;
                action.payload.forEach(function(d) {
                    if (!newDocuments && !state.filter(function(sd) {
                            return sd.templateId === d.templateId;
                        }).find(function(sdf) {
                            return sdf.documentCode === d.documentCode;
                        })) {
                        newDocuments = true;
                    }
                });
                newDocuments && state.forEach(function(sd) {
                    if (!newDocuments && !action.payload.filter(function(d) {
                            return d.templateId === sd.templateId;
                        }).find(function(df) {
                            return df.documentCode === sd.documentCode;
                        })) {
                        newDocuments = true;
                    }
                });

                if (!action.payload.length || action.payload.length !== state.length) {
                    newDocuments = true;
                }

                return newDocuments ? action.payload : state;

            default:
                return state;
        }
    };

    _exports.documents = documents;

    var contractRole = function contractRole() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_CONTRACT_ROLE_RESPONSE:
                return action.data.roles;

            default:
                return state;
        }
    };

    _exports.contractRole = contractRole;

    var contractRoleForRetention = function contractRoleForRetention() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_CONTRACT_ROLE_RESPONSE:
                return action.data.retentionRoles;

            default:
                return state;
        }
    };

    _exports.contractRoleForRetention = contractRoleForRetention;

    var getContractRoleInProgress = function getContractRoleInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_CONTRACT_ROLE_START:
                return true;

            case _actionTypes.GET_CONTRACT_ROLE_RESPONSE:
                return false;

            case _actionTypes.GET_CONTRACT_ROLE_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.getContractRoleInProgress = getContractRoleInProgress;
});
//# sourceMappingURL=offers.js.map