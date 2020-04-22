define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(_exports, _RequestState, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.offers = _exports.consent = _exports.lead = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var initialConsentState = {
        consentRequestState: _RequestState.RequestState.None,
        oneTimeConsentId: '',
        oneTimeConsent: '',
        loaded: false,
        error: false,
        empty: true
    };
    var initialOffersState = {
        offersRequestState: _RequestState.RequestState.None
    };
    var initialLead = {
        registerLeadRequestState: _RequestState.RequestState.None
    };

    var lead = function lead() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialLead;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.REGISTER_LEAD_ACTION_TYPES.start:
                return _objectSpread({}, state, {
                    registerLeadRequestState: _RequestState.RequestState.Waiting
                });

            case actionTypes.REGISTER_LEAD_ACTION_TYPES.success:
                return _objectSpread({}, state, {
                    lead: action.payload,
                    registerLeadRequestState: _RequestState.RequestState.Success
                });

            case actionTypes.REGISTER_LEAD_ACTION_TYPES.error:
                return _objectSpread({}, state, {
                    registerLeadRequestState: _RequestState.RequestState.Error
                });

            default:
                return state;
        }
    };

    _exports.lead = lead;

    var consent = function consent() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialConsentState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.start:
                return _objectSpread({}, state, {
                    consentRequestState: _RequestState.RequestState.Waiting
                });

            case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.success:
                return _objectSpread({}, state, {
                    consentRequestState: _RequestState.RequestState.Success,
                    oneTimeConsentId: action.payload.oneTimeConsentId,
                    oneTimeConsent: action.payload.oneTimeConsent,
                    loaded: true,
                    error: false,
                    empty: action.payload.oneTimeConsent == null
                });

            case actionTypes.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES.error:
                return _objectSpread({}, initialConsentState, {
                    consentRequestState: _RequestState.RequestState.Error,
                    loaded: true,
                    error: true,
                    empty: true
                });

            default:
                return state;
        }
    };

    _exports.consent = consent;

    var offers = function offers() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialOffersState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.start:
                return _objectSpread({}, state, {
                    offersRequestState: _RequestState.RequestState.Waiting
                });

            case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.success:
                return _objectSpread({}, state, {
                    offersRequestState: _RequestState.RequestState.Success,
                    offers: action.payload,
                    loaded: true,
                    error: false
                });

            case actionTypes.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES.error:
                return _objectSpread({}, initialOffersState, {
                    offersRequestState: _RequestState.RequestState.Error,
                    loaded: true,
                    error: true
                });

            default:
                return state;
        }
    };

    _exports.offers = offers;
});
//# sourceMappingURL=investment.js.map