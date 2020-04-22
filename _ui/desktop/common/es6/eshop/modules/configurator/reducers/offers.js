import {
    hashFilters
} from "eshop/modules/configurator/utils";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    ADD_FROM_LINK,
    CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE,
    CLEAR_OFFER,
    FETCH_OFFERS,
    GET_CONTRACT_ROLE_ERROR,
    GET_CONTRACT_ROLE_RESPONSE,
    GET_CONTRACT_ROLE_START,
    GET_FIRST_OFFER_ERROR,
    GET_FIRST_OFFER_RESPONSE,
    SELECT_DEVICE_INSTALMENTS_COUNT,
    SELECT_DOCUMENTS,
    SELECT_OFFER,
    SELECT_PROCESS_TYPE,
    SELECT_PROPOSITION_ID,
    SELECT_VAS,
    SET_DEVICE_INSTALMENTS_CONFIGURATION,
    SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
    UNSELECT_VAS,
    CLEAR_SELECTED_VASES,
} from "../actionTypes";


export var data = (state = {}, action) => {
    switch (action.type) {
        case FETCH_OFFERS:
            const newOffers = {};
            newOffers[hashFilters(action.selectedFilters)] = action.payload;
            return Object.assign({}, state, newOffers);
        default:
            return state;
    }
};

export var firstOfferFromProductFilter = (state = {}, action) => {
    switch (action.type) {
        case GET_FIRST_OFFER_RESPONSE:
            return action.data;
        case GET_FIRST_OFFER_ERROR:
            return {};
        default:
            return state;
    }
};

//before authorization
export var selected = (state = OnlineUtils.loadFromSessionStorage("selectedPropositionId") || "", action) => {
    switch (action.type) {
        case FETCH_OFFERS:
            return state;
        case SELECT_OFFER:
        case SELECT_PROPOSITION_ID:
            OnlineUtils.saveInSessionStorage("selectedPropositionId", action.propositionId);
            OnlineUtils.changeOrAddUrlParameterDisabledIfNotCanonical("selectedPropositionId", action.propositionId);
            return action.propositionId || state;
        case CLEAR_OFFER:
            OnlineUtils.saveInSessionStorage("selectedPropositionId", action.propositionId);
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("serviceplan", "");
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("selectedPropositionId", "");

            return "";
        default:
            return state;
    }
};

export var selectedPosition = (state = OnlineUtils.loadFromSessionStorage("selectedPropositionPosition") || -1, action) => {
    switch (action.type) {
        case SELECT_OFFER:
        case SELECT_PROPOSITION_ID:
            OnlineUtils.saveInSessionStorage("selectedPropositionPosition", action.position || -1);
            return action.position || -1;
        default:
            return state;
    }
};

function parseSelectedVasesFromUrlParam(param) {
    if (!param) {
        return null;
    }
    param = decodeURI(param);
    OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(JSON.parse(param)));
    return JSON.parse(param);

}

function parseSelectedVasesToUrlParam(param) {
    return JSON.stringify(param);

}

export const selectedVases = (state = parseSelectedVasesFromUrlParam(OnlineUtils.getParameterValueFromUrl("selectedVases") || OnlineUtils.loadFromSessionStorage("selectedVases")), action) => {
    switch (action.type) {
        case CLEAR_SELECTED_VASES: {
            OnlineUtils.removeFromSessionStorage("selectedVases");
            return [];
        }
        case SELECT_VAS: {
            let newState = state || [];
            let vasesForPropos = newState && newState.find(p => p.propositionId === action.propositionId);
            if (!vasesForPropos) {
                vasesForPropos = {
                    propositionId: action.propositionId,
                    vases: [action.vasId]
                };
                newState.push(vasesForPropos);
            } else {
                OnlineUtils.addUniqueIntoArray(action.vasId, vasesForPropos.vases);
            }
            OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(newState));

            return OnlineUtils.cloneArray(newState);
        }
        case UNSELECT_VAS: {
            let newState = state || [];
            const selectedVasesForPropos = newState && newState.find(p => p.propositionId === action.propositionId);
            if (selectedVasesForPropos && selectedVasesForPropos.vases.length) {
                selectedVasesForPropos.vases = OnlineUtils.addOrRemoveFromArray(action.vasId, selectedVasesForPropos.vases);
                if (selectedVasesForPropos.vases.length === 0) {
                    newState = OnlineUtils.addOrRemoveFromArray(selectedVasesForPropos, newState);
                }
            }
            OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout("selectedVases", parseSelectedVasesToUrlParam(newState));
            return OnlineUtils.cloneArray(newState);
        }
        default:
            return state;
    }
}

export const selectedRateplanBaseProductId = (state = {}, action) => {
    let originalState = OnlineUtils.getParameterValueFromUrl("serviceplan") || OnlineUtils.loadFromSessionStorage("serviceplan");
    switch (action.type) {
        case FETCH_OFFERS:
            console.warn("selectedRateplanBaseProductId FETCH_OFFERS");
            const defaultOffer = action.payload && action.payload.find(offer => offer.isDefault);
            if (defaultOffer && !originalState && (action.useDefaultOffer == undefined || action.useDefaultOffer)) {
                return defaultOffer.rateplanBaseProductId;
            }
            const canonicalConfiguration = action.payload && action.payload.find(offer => offer.isCanonicalConfiguration);
            if (OnlineUtils.isCanonicalLink() && canonicalConfiguration) {
                console.log(canonicalConfiguration.rateplanBaseProductId);
                originalState = canonicalConfiguration.rateplanBaseProductId;
                OnlineUtils.saveCanonicalValueInSessionStorage("serviceplan", originalState);
                OnlineUtils.saveInStorageOnCanonicalLinks("serviceplan", originalState);
            }
            return originalState;
        case SELECT_OFFER:
            const servicePlanParameter = OnlineUtils.getParameterValueFromUrl("serviceplan") || OnlineUtils.loadFromSessionStorage("serviceplan");
            if (!action.urlParametersUsed && servicePlanParameter && OnlineUtils.isCanonicalLink()) {
                OnlineUtils.saveInStorageOnCanonicalLinks("serviceplan", servicePlanParameter);
                return servicePlanParameter;
            } else {
                OnlineUtils.saveInStorageOnCanonicalLinks("serviceplan", action.rateplanBaseProductId);
                return action.rateplanBaseProductId || originalState;
            }
            case CLEAR_OFFER:
                console.warn("selectedRateplanBaseProductId CLEAR_OFFER");
                OnlineUtils.removeFromSessionStorage("serviceplan");
                return "";
            case ADD_FROM_LINK:
                return action.serviceplan;
            default:
                return originalState;
    }
};

export var selectedDevice = (state = "", action) => {
    switch (action.type) {
        case ADD_FROM_LINK:
        case SELECT_OFFER:
            return action.deviceId || "";
        default:
            return state;
    }
};

export var selectedDeviceInstalmentsCount = (state = OnlineUtils.loadFromSessionStorage("selectedDeviceInstalmentsCount") || null, action) => {
    switch (action.type) {
        case SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE:
            if (action.deviceInstalmentsCount != null) {
                OnlineUtils.saveInSessionStorage("selectedDeviceInstalmentsCount", action.deviceInstalmentsCount);
                return action.deviceInstalmentsCount;
            } else {
                return state;
            }
            case CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE:
                OnlineUtils.removeFromSessionStorage("selectedDeviceInstalmentsCount");
                return state;
            case SELECT_DEVICE_INSTALMENTS_COUNT:
                return action.deviceInstalmentsCount || null;
            case SELECT_PROCESS_TYPE:
                console.warn("selectedDeviceInstalmentsCount action:", action);
                return null;
            default:
                return state;
    }
};
export var deviceInstalmentsConfiguration = (state = [], action) => {
    switch (action.type) {
        case SET_DEVICE_INSTALMENTS_CONFIGURATION:
            return action.deviceInstalmentsConfiguration || null;
        default:
            return state;
    }
};

export var documents = (state = [], action) => {
    switch (action.type) {
        case SELECT_DOCUMENTS:
            let newDocuments = false;
            action.payload.forEach(d => {
                if (!newDocuments && !state.filter(sd => sd.templateId === d.templateId).find(sdf => sdf.documentCode === d.documentCode)) {
                    newDocuments = true;
                }
            });
            newDocuments && state.forEach(sd => {
                if (!newDocuments && !action.payload.filter(d => d.templateId === sd.templateId).find(df => df.documentCode === sd.documentCode)) {
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


export var contractRole = (state = [], action) => {
    switch (action.type) {
        case GET_CONTRACT_ROLE_RESPONSE:
            return action.data.roles;
        default:
            return state;
    }
};

export var contractRoleForRetention = (state = [], action) => {
    switch (action.type) {
        case GET_CONTRACT_ROLE_RESPONSE:
            return action.data.retentionRoles;
        default:
            return state;
    }
};

export var getContractRoleInProgress = (state = false, action) => {
    switch (action.type) {
        case GET_CONTRACT_ROLE_START:
            return true;
        case GET_CONTRACT_ROLE_RESPONSE:
            return false;
        case GET_CONTRACT_ROLE_ERROR:
            return false;
        default:
            return state;
    }
};