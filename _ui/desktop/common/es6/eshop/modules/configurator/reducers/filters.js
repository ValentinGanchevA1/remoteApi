import {
    combineReducers
} from "redux";
import {
    findDefaultOptionInArrayOrPickFirst,
    findDefaultOptionInArrayOrSmallestValue
} from "eshop/modules/configurator/utils";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    CHECK_MSISDN,
    CHECK_MSISDN_ERROR,
    CHECK_MSISDN_RESULT,
    CHECK_MSISDN_RESULT_B2B,
    CLEAR_CHECK_MSISDN,
    CLEAR_CHECK_MSISDN_B2B,
    CLEAR_LOYALTY_LENGTH,
    CLIENT_CONTEXT_CHANGE_SUBSCRIPTION,
    CLIENT_CONTEXT_DISABLED,
    CLIENT_CONTEXT_ENABLED,
    CUSTOMER_SELECTED,
    FETCH_OFFER_FILTERS,
    FETCH_OFFER_FILTERS_START,
    FETCH_OFFERS,
    MSISDN_INPUT_CHANGED,
    MSISDN_VERIFICATION_NEEDED,
    PROCESS_FOR_MSISDN,
    PROPOSITION_LIST_COUNT_DECREMENT,
    PROPOSITION_LIST_COUNT_INCREMENT,
    PROPOSITION_LIST_COUNT_SET,
    PROPOSITION_LIST_COUNT_SET_MODE,
    PROPOSITION_LIST_OFFER_TYPE,
    PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
    SELECT_LOYALTY_LENGTH,
    SELECT_PROCESS_TYPE,
    SET_MARKET_CONTEXT,
    SET_MAX_SIM_COUNT,
    USE_DEFAULT_LOYALTY,
    USE_DEFAULT_OFFER,
    USE_DEFAULT_OFFER_TYPE,
    USE_DEFAULT_PROCESS,
} from "../actionTypes";
import {
    REGISTER_OFFER_TYPES_CMS_CONF,
    SELECT_OFFER_TYPE
} from "eshop/modules/simfree/actionTypes";

const getInitialClientContextState = () => OnlineUtils.loadFromSessionStorage("convergence") === "true";
const getSelectedOfferType = () => OnlineUtils.loadFromSessionStorage("offerType");

export const cmsConf = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_OFFER_TYPES_CMS_CONF:
            return action.cmsConf || state;
        default:
            return state
    }
};


const parseUseDefaults = () => {
    if (OnlineUtils.loadFromSessionStorage("dontUseDefaults") != undefined) {
        return !OnlineUtils.loadFromSessionStorage("dontUseDefaults");

    }
    return true;

};
export var useDefaultOfferType = (state = parseUseDefaults(), action) => {
    switch (action.type) {
        case USE_DEFAULT_OFFER_TYPE:
            return action.use;
        default:
            return state;
    }
};
export var maxSimCount = (state = 5, action) => {
    switch (action.type) {
        case SET_MAX_SIM_COUNT:
            OnlineUtils.saveInSessionStorage("maxSimCount", action.maxSimCount);
            return action.maxSimCount;
        default:
            OnlineUtils.saveInSessionStorage("maxSimCount", state);
            return state;
    }
};

export var useDefaultProcess = (state = parseUseDefaults(), action) => {
    switch (action.type) {
        case USE_DEFAULT_PROCESS:
            return action.use;
        default:
            return state;
    }
};
export var useDefaultLoyalty = (state = parseUseDefaults(), action) => {
    switch (action.type) {
        case USE_DEFAULT_LOYALTY:
            return action.use;
        default:
            return state;
    }
};
export var useDefaultOffer = (state = true, action) => {
    switch (action.type) {
        case USE_DEFAULT_OFFER:
            return action.use;
        default:
            return state;
    }
};
export var clientContext = (state = getInitialClientContextState(), action) => {
    switch (action.type) {
        case CLIENT_CONTEXT_ENABLED:
            OnlineUtils.saveInStorageOnCanonicalLinks("convergence", true);
            return true
        case CLIENT_CONTEXT_DISABLED:
            OnlineUtils.saveInStorageOnCanonicalLinks("convergence", false);
            return false
        default:
            if (OnlineUtils.getParameterValueFromUrl("convergence")) {
                return JSON.parse(OnlineUtils.getParameterValueFromUrl("convergence"));
            }
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("convergence", state);
            return state;
    }
};

export var clientContextChangeHandlers = (state = [], action) => {
    switch (action.type) {
        case CLIENT_CONTEXT_CHANGE_SUBSCRIPTION:
            let newState = state.slice();
            newState.push(action.handler);
            return newState;
        default:
            return state;
    }
};

export var propositionListOfferType = (state = OnlineUtils.loadFromSessionStorage("propositionListOfferType"), action) => {
    switch (action.type) {
        case PROPOSITION_LIST_OFFER_TYPE:
            OnlineUtils.saveInSessionStorage("propositionListOfferType", action.offerType);
            if (!action.offerType || action.offerType == "null") {
                OnlineUtils.removeFromSessionStorage("propositionListOfferType");
                return null;
            }
            return action.offerType;
        default:
            return state;
    }

};
export var propositionListSoftBundleGroup = (state = OnlineUtils.loadFromSessionStorage("propositionListSoftBundleGroup"), action) => {

    switch (action.type) {

        case PROPOSITION_LIST_SOFT_BUNDLE_GROUP:
            OnlineUtils.saveInSessionStorage("propositionListSoftBundleGroup", action.softBundleGroup);
            if (!action.softBundleGroup || action.softBundleGroup == "null") {
                OnlineUtils.removeFromSessionStorage("propositionListSoftBundleGroup");
                return null;
            }
            return action.softBundleGroup;
        default:
            return state;
    }

};
const propositionListCountValue = () => {
    if (OnlineUtils.loadFromSessionStorage("propositionListCount") != undefined || !!OnlineUtils.getParameterValueFromUrl("count")) {
        return parseInt(OnlineUtils.getParameterValueFromUrl("count") || OnlineUtils.loadFromSessionStorage("propositionListCount"));
    }
    return simCountSelectedValue();
};
const simCountSelectedValue = () => {
    if (!!OnlineUtils.getParameterValueFromUrl("count")) {
        let retValue = parseInt(OnlineUtils.getParameterValueFromUrl("count") <= OnlineUtils.loadFromSessionStorage("maxSimCount") ? OnlineUtils.getParameterValueFromUrl("count") : OnlineUtils.loadFromSessionStorage("maxSimCount"))
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("count", retValue);
        return retValue;
    }
    if (OnlineUtils.loadFromSessionStorage("simCountSelected") != undefined) {
        return parseInt(OnlineUtils.loadFromSessionStorage("simCountSelected"));
    }

    return 1;
};
export var simCountSelected = (state = simCountSelectedValue(), action = {}) => {
    switch (action.type) {
        case PROPOSITION_LIST_COUNT_SET:
            OnlineUtils.saveInSessionStorage("simCountSelected", action.count);
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("count", action.count);
            return action.count;
        default:
            return state;
    }
};
export var propositionListCount = (state = propositionListCountValue(), action = {}) => {
    switch (action.type) {
        case PROPOSITION_LIST_COUNT_INCREMENT:
            if (state <= 0) {
                OnlineUtils.saveInSessionStorage("propositionListCount", 1);
                return 1;
            }
            OnlineUtils.saveInSessionStorage("propositionListCount", state + 1);
            return state + 1;
        case PROPOSITION_LIST_COUNT_DECREMENT:
            if (state == 0) {
                OnlineUtils.saveInSessionStorage("propositionListCount", state);
                return state;
            }
            OnlineUtils.saveInSessionStorage("propositionListCount", state - 1);
            return state - 1;
        case PROPOSITION_LIST_COUNT_SET:
            OnlineUtils.saveInSessionStorage("propositionListCount", action.count);
            return action.count;
        default:
            return state;
    }
};
export var propositionListCountSetMode = (state = false, action) => {
    switch (action.type) {
        case PROPOSITION_LIST_COUNT_SET_MODE:
            return action.on;
        default:
            return state;
    }
};
export var marketContext = (state = "B2C", action) => {
    switch (action.type) {
        case SET_MARKET_CONTEXT:
            if (!!action.market && ["B2B", "B2C"].indexOf(action.market.replace("_SOHO", "")) > -1) {
                return action.market
            } else {
                console.error("Unknown market: " + action.market);
                return state
            }
            case FETCH_OFFERS:
                let newContext = action.payload && action.payload[0] && action.payload[0].filterMarketSegment;
                newContext = newContext && newContext.replace("_SOHO", "");
                return newContext || state;
            default:
                return state;
    }
};

const loadObjectFromSessionStorage = (key) => {
    const value = OnlineUtils.loadFromSessionStorage(key);
    if (!value || value === "null") {
        return {};
    }
    return JSON.parse(value);
};

export var checkMsisdnResult = (state = loadObjectFromSessionStorage("checkMsidnResult") || {}, action) => {
    switch (action.type) {
        case CHECK_MSISDN_RESULT:
            OnlineUtils.saveInSessionStorage("checkMsidnResult", JSON.stringify(action.payload.response));
            return action.payload.response;
        case CHECK_MSISDN_ERROR:
            OnlineUtils.saveInSessionStorage("checkMsidnResult", JSON.stringify({
                isPositive: false,
                description: action.message
            }));
            return {
                isPositive: false, description: action.message
            };
        case CLEAR_CHECK_MSISDN:
        case SELECT_PROCESS_TYPE:
            console.warn("checkMsisdnResult SELECT_PROCESS_TYPE");
            console.warn("action:", action);
            if (OnlineUtils.loadFromSessionStorage("processType") === action.processType) {
                return state;
            } else {
                OnlineUtils.saveInSessionStorage("checkMsidnResult", JSON.stringify({}));
            }
            return {};
        case CUSTOMER_SELECTED:
            OnlineUtils.saveInSessionStorage("checkMsidnResult", JSON.stringify({}));
            return {}
            default:
                return state;
    }
};

export var isMsisdnChecking = (state = false, action) => {
    switch (action.type) {
        case CHECK_MSISDN:
            return true;
        case CHECK_MSISDN_RESULT:
            return false;
        case CHECK_MSISDN_ERROR:
            return false;
        default:
            return state;
    }
};

export var msisdnInput = (state = {
    msisdn: "",
    valid: true
}, action) => {
    switch (action.type) {
        case MSISDN_INPUT_CHANGED:
            return action.payload;
        case SELECT_PROCESS_TYPE:
            console.warn("msisdnInput SELECT_PROCESS_TYPE");
            console.warn("action:", action);
            return state;
        default:
            return state;
    }
};

export var verifiedMsisdnB2B = (state = [], action) => {
    switch (action.type) {
        case CHECK_MSISDN_RESULT_B2B:
            let newState = state.slice(0);
            newState[action.index] = {
                msisdn: action.msisdn,
                status: action.status,
                description: action.description
            };
            return newState;
        case CLEAR_CHECK_MSISDN_B2B:
            let newState2 = state.slice(0);
            newState2[action.index] = null;
            return newState2;
        default:
            return state;
    }
};

export var verifiedMsisdn = (state = loadObjectFromSessionStorage("verifiedMsisdn") || {}, action) => {
    switch (action.type) {
        case CHECK_MSISDN_ERROR:
        case CHECK_MSISDN_RESULT:
            const retVal = {
                context: {
                    market: action.payload.market,
                    offer: action.payload.offer,
                    process: action.payload.process
                },
                value: action.payload.response.msisdn
            };
            OnlineUtils.saveInSessionStorage("verifiedMsisdn", JSON.stringify(retVal));
            return retVal;
        case SELECT_PROCESS_TYPE:
            console.warn("verifiedMsisdn SELECT_PROCESS_TYPE");
            console.warn("action:", action);
            if (OnlineUtils.loadFromSessionStorage("processType") === action.processType) {
                return state;
            } else {
                console.log("CLEAR_CHECK_MSISDN by SELECT_PROCESS_TYPE");
                OnlineUtils.saveInSessionStorage("verifiedMsisdn", JSON.stringify({}));
                return {};
            }
            case CHECK_MSISDN:
            case CUSTOMER_SELECTED:
            case CLEAR_CHECK_MSISDN:
                console.log("CLEAR_CHECK_MSISDN verifiedMsisdn ", action.type);
                OnlineUtils.saveInSessionStorage("verifiedMsisdn", JSON.stringify({}));
                return {};
            default:
                return state;
    }
};
export var msisdnVerificationNeeded = (state = OnlineUtils.loadFromSessionStorage("msisdnVerificationNeeded") || false, action) => {
    switch (action.type) {
        case MSISDN_VERIFICATION_NEEDED:
            OnlineUtils.saveInSessionStorage("msisdnVerificationNeeded", true);
            return true;
        default:
            return state;
    }
};

export var data = (state = [], action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS:

            return action.payload
        default:
            return state;
    }
};


var processType = (state = OnlineUtils.getParameterValueFromUrl("processType") || OnlineUtils.loadFromSessionStorage("processType"), action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS:
            const valueFromParameter = OnlineUtils.getParameterValueFromUrl("processType") || OnlineUtils.loadFromSessionStorage("processType");
            const isParameterExistsInPayload = action.payload.find(r => r.value === valueFromParameter);
            const canonicalConfiguration = action.payload.find(r => r.isCanonicalConfiguration);
            if (canonicalConfiguration && OnlineUtils.isCanonicalLink()) {
                OnlineUtils.saveCanonicalValueInSessionStorage("processType", canonicalConfiguration.value);
                OnlineUtils.saveInStorageOnCanonicalLinks("processType", canonicalConfiguration.value);
                return canonicalConfiguration.value;
            } else if (!action.urlParametersUsed && isParameterExistsInPayload) {
                OnlineUtils.saveInStorageOnCanonicalLinks("processType", valueFromParameter);
                console.log("!action.urlParametersUsed && isParameterExistsInPayload ");
                return valueFromParameter;
            } else if (state && action.payload.find(r => r.value === state)) {
                console.log("state && action.payload.find(r => r.value === state)");

                return state;
            } else if (action.useDefaultProcess) {
                console.log("action.useDefaultProcess");
                const processTypeTmp = findDefaultOptionInArrayOrPickFirst(action.payload);
                console.log(processTypeTmp);
                return processTypeTmp && processTypeTmp.value;
            }
            return state;
        case SELECT_PROCESS_TYPE:
            console.warn("processType SELECT_PROCESS_TYPE");
            console.warn("action:", action);
            OnlineUtils.saveInStorageOnCanonicalLinks("processType", action.processType);
            return action.processType;
        default:
            return state;
    }
};

const loyaltyLength = (state = ((!!OnlineUtils.getParameterValueFromUrl('loyalty')) ? OnlineUtils.getParameterValueFromUrl('loyalty') : OnlineUtils.loadFromSessionStorage("selectedLoyaltyDuration")), action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS:
            let newState = {};

            newState = Object.assign(newState, state);
            let loyaltyUrl = OnlineUtils.getParameterValueFromUrl('loyalty');
            let loyaltyFromUrlOrStorage = !!loyaltyUrl ? OnlineUtils.getParameterValueFromUrl('loyalty') : OnlineUtils.loadFromSessionStorage("selectedLoyaltyDuration");
            console.log("reduser loyaltyLength loyaltyLength FETCH_OFFER_FILTERS");
            console.log("reduser loyaltyLength action:", action);
            console.log("reduser loyaltyLength processType:", OnlineUtils.getParameterValueFromUrl('processType'));
            console.log("reduser loyaltyLength loyaltyUrl:", loyaltyUrl);
            console.log("reduser loyaltyLength loyaltyUrl:", !!loyaltyUrl);
            console.log("reduser loyaltyLength state", state);
            console.log("reduser loyaltyLength newState:", newState);
            if (!action.urlParametersUsed &&
                findGivenLoyaltyFormUrlInArray(OnlineUtils.getParameterValueFromUrl('processType'), loyaltyFromUrlOrStorage, action.payload)) {
                action.payload.map(data => newState[data.value] = findDefaultOptionInArrayOrSmallestValue(data.loyalties));
                newState[OnlineUtils.getParameterValueFromUrl('processType')] = loyaltyFromUrlOrStorage;
                OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", newState[OnlineUtils.getParameterValueFromUrl('processType')]);
                console.log("loyalty from store or url", newState[OnlineUtils.getParameterValueFromUrl('processType')]);
            } else if (OnlineUtils.isCanonicalLink()) {
                OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", newState[OnlineUtils.loadFromSessionStorage('processType')]);
            } else if (action.useDefaultLoyalty) {
                console.log("useDefault loyalty");
                action.payload.map(data => newState[data.value] = (newState[data.value] || findDefaultOptionInArrayOrSmallestValue(data.loyalties)));
                const defaultProcessFromPayload = findDefaultOptionInArrayOrPickFirst(action.payload)
                const defaultProcess = OnlineUtils.loadFromSessionStorage("processType") || (defaultProcessFromPayload && defaultProcessFromPayload.value);
                OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", newState[defaultProcess]);
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("loyalty", newState[defaultProcess]);
            }
            OnlineUtils.saveInSessionStorage("loyalty", JSON.stringify(newState));
            console.log("final state:", newState);
            return newState;
        case SELECT_LOYALTY_LENGTH:
            console.log("loyaltyLength SELECT_LOYALTY_LENGTH");
            let newValue = {};
            newValue[action.processType] = action.loyaltyLength;
            OnlineUtils.saveInSessionStorage("loyalty", JSON.stringify(Object.assign({}, state, newValue)));
            OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", action.loyaltyLength);
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", action.loyaltyLength);
            console.log("loyalty set to:", Object.assign({}, state, newValue));
            return Object.assign({}, state, newValue)
        case CLEAR_LOYALTY_LENGTH:
            console.log("loyaltyLength CLEAR_LOYALTY_LENGTH");
            OnlineUtils.saveInSessionStorage("loyalty", JSON.stringify(newState));
            OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", "");
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("loyalty", "");
            console.log("loyalty set to:", Object.assign({}, state, newValue));
            return {};
        case SELECT_PROCESS_TYPE: //kruci nie wiem czy to powinno tutaj byc czy moze w akcji
            console.warn("loyaltyLength SELECT_PROCESS_TYPE");
            console.warn("action:", action);
            console.warn("state:", state);
            console.log("action.availableLoyalties.find(proc => proc.value==action.procesType)",
                action.availableLoyalties && action.availableLoyalties.find(proc => proc.value == action.processType));
            if (action.useDefaultLoyalty) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("loyalty", state[action.processType]);

            } else if (action.availableLoyalties && action.availableLoyalties.find(proc => proc.value === action.processType)) {
                let availableLoyalties = action.availableLoyalties.find(proc => proc.value === action.processType).loyalties;
                if (availableLoyalties && availableLoyalties.length > 0) {
                    //auto select
                    let newValue = {};

                    if (availableLoyalties.find(loy => loy.value === state[action.processType])) {
                        newValue[action.processType] = state[action.processType];

                    } else {
                        newValue[action.processType] = action.availableLoyalties.find(proc => proc.value === action.processType).loyalties[0].value;
                    }
                    OnlineUtils.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", newValue[action.processType]);
                    OnlineUtils.saveInSessionStorage("selectedLoyaltyDuration", newValue[action.processType]);
                    console.log("loyalty set to:", Object.assign({}, state, newValue));
                    return Object.assign({}, state, newValue);
                }
            }
            return state;
        default:
            return state;
    }
};

function initOfferTypeState() {
    var originalState;
    if (OnlineUtils.isCanonicalLink()) {
        originalState = OnlineUtils.getParameterValueFromUrl("offerType") || "SIMFREE_INST";
        OnlineUtils.saveCanonicalValueInSessionStorage("offerType", originalState);
        OnlineUtils.saveInSessionStorage("offerType", originalState);
    } else {
        originalState = OnlineUtils.getParameterValueFromUrl("offerType") || OnlineUtils.getFromSessionStorageAndSetUrlParameter("offerType") || "SIMFREE";
    }
    return originalState
}
const offerType = (state = initOfferTypeState(), action) => {
    switch (action.type) {
        case SELECT_OFFER_TYPE:
            if (action.offerType == undefined) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("offerType", state);
                return state
            }
            OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout("offerType", action.offerType);
            return action.offerType;
        case REGISTER_OFFER_TYPES_CMS_CONF:
            let newState = state.slice();

            if (action.validOfferTypes && action.validOfferTypes[0]) {
                if (action.validOfferTypes.indexOf(newState) <= -1) {
                    newState = action.validOfferTypes[0]
                }
            }
            if (!parseUseDefaults()) {
                newState = "";
                OnlineUtils.saveInSessionStorage("offerType", newState);
                return newState;
            }
            if (Object.getOwnPropertyNames(action.cmsConf).find(offerType => offerType === newState)) {
                OnlineUtils.saveInStorageOnCanonicalLinks("offerType", newState);
                return newState
            } else if (Object.getOwnPropertyNames(action.cmsConf).length) { //nie mamy konfiguracji dla domyslnej wartosci wiec ustawiamy voice
                OnlineUtils.saveInStorageOnCanonicalLinks("offerType", Object.getOwnPropertyNames(action.cmsConf)[0]);
                return Object.getOwnPropertyNames(action.cmsConf)[0];

            } else { //nie mamy konfiguracji dla domyslnej wartosci wiec ustawiamy voice
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("offerType", "SIMFREE");
                return "SIMFREE"
            }
            default:
                return state
    }
};

export const defaultFilters = (state = {}, action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS:
            const processType = findDefaultOptionInArrayOrPickFirst(action.payload);
            let loyaltyLength = {};
            action.payload.map(data => loyaltyLength[data.value] = findDefaultOptionInArrayOrSmallestValue(data.loyalties));
            let newFilters = {
                processType: processType.value,
                loyaltyLength
            };
            return newFilters;
        default:
            return state;
    }
};

export const offerFiltersLoading = (state = false, action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS_START:
            return true;
        case FETCH_OFFER_FILTERS:
            return false;
        default:
            return state;
    }
};

export var offerTypeFiltersCached = (state = [], action) => {
    switch (action.type) {
        case FETCH_OFFER_FILTERS:
            let selectedOfferType = getSelectedOfferType();
            let newOfferFiltersData = state.slice();
            if (state && state.length === 0 ||
                (state.length > 0 &&
                    state.findIndex(offerFiltersElement => offerFiltersElement.offerType === selectedOfferType) === -1)) {
                newOfferFiltersData.splice(0, 0, {
                    offerType: selectedOfferType,
                    offerFilters: action.payload
                });
            }
            return newOfferFiltersData;
        default:
            return state;
    }
};
//{
//    "msisdn1":{
//        "genericProcess1": "concreteProcess1",
//        "genericProcess2": "concreteProcess2"
//    },
//    "msisdn2":{
//        "genericProcess2": "concreteProcess3",
//        "genericProcess4": "concreteProcess4"
//    }
//}
export const processForMsisdn = (state = {}, action) => {
    switch (action.type) {
        case PROCESS_FOR_MSISDN:
            if (action.msisdn && action.genericProcess && action.concreteProcess) {
                const existValue = state[action.msisdn];
                if (!existValue && action.genericProcess != action.concreteProcess) {
                    const newState = {
                        ...state
                    };
                    newState[action.msisdn] = action.concreteProcess;
                    OnlineUtils.saveInSessionStorage("processForMsisdn", JSON.stringify(newState));
                    return newState;
                }
            }
            return state;
        case FETCH_OFFER_FILTERS:
            const sessionJson = OnlineUtils.loadFromSessionStorage("processForMsisdn");
            let sessionState = state;
            if (!!sessionJson) {
                sessionState = JSON.parse(sessionJson);
            }
            return sessionState;
        case CUSTOMER_SELECTED:
            OnlineUtils.removeFromSessionStorage("processForMsisdn");
            return {};
        default:
            return state;
    }
};



//SELECT_OFFER_TYPE


export var selected = combineReducers({
    processType: processType,
    loyaltyLength: loyaltyLength,
    offerType: offerType,
    verifiedMsisdn: verifiedMsisdn
});

function findGivenLoyaltyFormUrlInArray(urlProcess, urlLoyalty, array) {
    const selectedProcess = array.find(p => p.value === urlProcess);
    return selectedProcess && selectedProcess.loyalties && selectedProcess.loyalties.find(l => l.value == urlLoyalty);
}