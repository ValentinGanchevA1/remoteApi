import {
    RequestState
} from "../../core/constants/RequestState";
import * as actionTypes from "../actionTypes";

const initialConsentState = {
    consentRequestState: RequestState.None,
    oneTimeConsentId: '',
    oneTimeConsent: '',
    loaded: false,
    error: false,
    empty: true
};

const initialOffersState = {
    offersRequestState: RequestState.None
};

const initialLead = {
    registerLeadRequestState: RequestState.None,
};

export const lead = (state = initialLead, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_LEAD_ACTION_TYPES.start:
            return {
                ...state,
                registerLeadRequestState: RequestState.Waiting,
            };
        case actionTypes.REGISTER_LEAD_ACTION_TYPES.success:
            return {
                ...state,
                lead: action.payload,
                    registerLeadRequestState: RequestState.Success,
            };
        case actionTypes.REGISTER_LEAD_ACTION_TYPES.error:
            return {
                ...state,
                registerLeadRequestState: RequestState.Error,
            };
        default:
            return state;
    }
};
export const consent = (state = initialConsentState, action) => {
    switch (action.type) {
        case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.start:
            return {
                ...state,
                consentRequestState: RequestState.Waiting
            };
        case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.success:
            return {
                ...state,
                consentRequestState: RequestState.Success,
                    oneTimeConsentId: action.payload.oneTimeConsentId,
                    oneTimeConsent: action.payload.oneTimeConsent,
                    loaded: true,
                    error: false,
                    empty: action.payload.oneTimeConsent == null
            };
        case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.error:
            return {
                ...initialConsentState,
                consentRequestState: RequestState.Error,
                    loaded: true,
                    error: true,
                    empty: true
            };
        default:
            return state;
    }
};

export const offers = (state = initialOffersState, action) => {
    switch (action.type) {
        case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.start:
            return {
                ...state,
                offersRequestState: RequestState.Waiting
            };
        case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.success:
            return {
                ...state,
                offersRequestState: RequestState.Success,
                    offers: action.payload,
                    loaded: true,
                    error: false
            };
        case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.error:
            return {
                ...initialOffersState,
                offersRequestState: RequestState.Error,
                    loaded: true,
                    error: true
            };
        default:
            return state;
    }
};