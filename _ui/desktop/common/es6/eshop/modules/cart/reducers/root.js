import {
    combineReducers
} from "redux";
import {
    FETCH_MINI_CART,
    FETCH_CART,
    REMOVE_FROM_CART,
    FETCH_MOBILE_VASES,
    SET_PRICE_VIEW_NET,
    FETCH_FIX_CONFIGURABLES,
    FETCHED_MINI_CART,
    FETCHED_CART,
    FETCHING_MOBILE_VASES,
    FETCHING_FIX_CONFIGURABLES,
    TV_MODAL_VISIBILITY,
    TV_FILTERED_MODAL_VISIBILITY,
    REMOVE_TERMINAL_FROM_CART_BUNDLE,
    FETCH_BUNDLES_PROCESS_TYPE,
    SET_MANUAL_STATUS,
    CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
    CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
    VAS_MODAL_SHOW_CHANGE,
    BONUS_MODAL_SHOW_CHANGE,
    OFICES_SERVICES_MODAL_VISIBILITY
} from "../actionTypes";

import {
    SET_MARKET_CONTEXT
} from "eshop/modules/configurator/actionTypes";
import * as voucher from './voucher';
import * as kdrData from './kdr';
import * as lowerInstallments from './lowerInstallments';
import {
    convergentConfigurablesReducer
} from "./convergentConfigurables";
import * as resources from './resources';
import * as assignment from './assignment';
import * as tvPackagesFilters from './filters';
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    FETCH_OFFERS
} from "../../configurator/actionTypes";
import * as cart from "./cart";
import * as invoiceData from './invoiceData';

import {
    mobileVas,
    mobileVasUpdating
} from "./vases"

//TODO trzeba bedzie polaczyc te strzaly zeby nie napierdalac po te same dane pare razy
//Data for cart entries list component  and also for mini cart
const miniCartData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MINI_CART:
        case REMOVE_FROM_CART:
        case REMOVE_TERMINAL_FROM_CART_BUNDLE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};
export var priceViewIsNet = (state = null, action) => {
    switch (action.type) {
        // console.log();
        case SET_PRICE_VIEW_NET:
            if (!!action.market) {
                return action.market === "B2B" ? true : action.market === "B2C" ? false : state;
            }
            return action.showNet;
        case FETCH_OFFERS:
            let newContext = action.payload && action.payload[0] && action.payload[0].filterMarketSegment;
            newContext = newContext && newContext.replace("_SOHO", "");
            return newContext === "B2B" ? true : newContext === "B2C" ? false : state;
        default:
            return state
    }
};

const bundlesProcessType = (state = [], action) => {
    switch (action.type) {
        case FETCH_BUNDLES_PROCESS_TYPE:
            if (action.payload.entries)
                return Array.from(action.payload.entries, entry => entry.processType);
            else return state;
        default:
            return state
    }
};

const fixConfigurables = (state = [], action) => {
    switch (action.type) {
        case FETCH_FIX_CONFIGURABLES:
            return state.concat(action.payload);
        default:
            return state
    }
};

const hasMiniCartData = (state = false, action) => {
    switch (action.type) {
        case FETCHED_MINI_CART:
            return action.payload
        default:
            return state
    }
};

const hasCartData = (state = false, action) => {
    switch (action.type) {
        case FETCHED_CART:
            return action.payload
        default:
            return state
    }
};

const mobileVasMetadata = (state = [], action) => {
    switch (action.type) {
        case FETCHING_MOBILE_VASES:
            return state.concat(action.payload);
        default:
            return state
    }
};

const fixConfigurablesMetadata = (state = [], action) => {
    switch (action.type) {
        case FETCHING_FIX_CONFIGURABLES:
            return state.concat(action.payload);
        default:
            return state
    }
};

const tvModalVisibility = (state = false, action) => {
    switch (action.type) {
        case TV_MODAL_VISIBILITY:
            return !!action.data;
        default:
            return state;
    }
};
const tvFilteredModalVisibility = (state = false, action) => {
    switch (action.type) {
        case TV_FILTERED_MODAL_VISIBILITY:
            return !!action.data;
        default:
            return state;
    }
};
const manualVerificationStatus = (state = "", action) => {
    switch (action.type) {
        case SET_MANUAL_STATUS:
            return action.status;
        default:
            return state;
    }
};

const addTerminalToOfferBundleNo = (state = OnlineUtils.loadFromSessionStorage("addTerminalToOfferBundleNo") || null, action) => {
    switch (action.type) {
        case CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
            if (action.value != null) {
                OnlineUtils.saveInSessionStorage("addTerminalToOfferBundleNo", action.value)
                return action.value;
            } else {
                return state;
            }
            case CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
                OnlineUtils.removeFromSessionStorage("addTerminalToOfferBundleNo");
                return null;
            case REMOVE_FROM_CART:
                OnlineUtils.removeFromSessionStorage("addTerminalToOfferBundleNo");
                return null;
            default:
                return state;
    }
};

export const vasModalStatus = (state = false, action) => {
    switch (action.type) {
        case VAS_MODAL_SHOW_CHANGE:
            return action.payload;
        default:
            return state
    }
};

export const bonusModalStatus = (state = false, action) => {
    switch (action.type) {
        case BONUS_MODAL_SHOW_CHANGE:
            return action.payload;
        default:
            return state
    }
};

const b2bVasesModalVisibility = (state = false, action) => {
    switch (action.type) {
        case OFICES_SERVICES_MODAL_VISIBILITY:
            return !!action.data;
        default:
            return state
    }
};


const fix = combineReducers({
    fixConfigurablesMetadata: fixConfigurablesMetadata,
    tvModalVisibility: tvModalVisibility,
    tvFilteredModalVisibility: tvFilteredModalVisibility,
});

const b2b = combineReducers({
    b2bVasesModalVisibility: b2bVasesModalVisibility
});

const mobile = combineReducers({
    mobileVasMetadata: mobileVasMetadata
});

const metadata = combineReducers({
    hasMiniCartData: hasMiniCartData,
    hasCartData: hasCartData,
    mobileVasUpdating: mobileVasUpdating,
    mobile: mobile,
    fix: fix,
    b2b: b2b
});

export default combineReducers({
    cartData: cart.cartData,
    miniCartData,
    mobileVas,
    vasModalStatus,
    bonusModalStatus,
    priceViewIsNet,
    fixConfigurables,
    convergentConfigurables: convergentConfigurablesReducer,
    bundlesProcessType,
    metadata,
    resourcesModal: combineReducers(resources),
    assignment: combineReducers(assignment),
    manualVerificationStatus: manualVerificationStatus,
    addTerminalToOfferBundleNo: addTerminalToOfferBundleNo,
    voucher: combineReducers(voucher),
    lowerInstallments: combineReducers(lowerInstallments),
    kdrData: combineReducers(kdrData),
    tvPackagesFilters: combineReducers(tvPackagesFilters),
    invoiceData: combineReducers(invoiceData)
});