define(["exports", "redux", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "../actionTypes", "eshop/modules/simfree/actionTypes"], function(_exports, _redux, _utils, _OnlineUtils, _actionTypes, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selected = _exports.processForMsisdn = _exports.offerTypeFiltersCached = _exports.offerFiltersLoading = _exports.defaultFilters = _exports.data = _exports.msisdnVerificationNeeded = _exports.verifiedMsisdn = _exports.verifiedMsisdnB2B = _exports.msisdnInput = _exports.isMsisdnChecking = _exports.checkMsisdnResult = _exports.marketContext = _exports.propositionListCountSetMode = _exports.propositionListCount = _exports.simCountSelected = _exports.propositionListSoftBundleGroup = _exports.propositionListOfferType = _exports.clientContextChangeHandlers = _exports.clientContext = _exports.useDefaultOffer = _exports.useDefaultLoyalty = _exports.useDefaultProcess = _exports.maxSimCount = _exports.useDefaultOfferType = _exports.cmsConf = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var getInitialClientContextState = function getInitialClientContextState() {
        return _OnlineUtils.default.loadFromSessionStorage("convergence") === "true";
    };

    var getSelectedOfferType = function getSelectedOfferType() {
        return _OnlineUtils.default.loadFromSessionStorage("offerType");
    };

    var cmsConf = function cmsConf() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes2.REGISTER_OFFER_TYPES_CMS_CONF:
                return action.cmsConf || state;

            default:
                return state;
        }
    };

    _exports.cmsConf = cmsConf;

    var parseUseDefaults = function parseUseDefaults() {
        if (_OnlineUtils.default.loadFromSessionStorage("dontUseDefaults") != undefined) {
            return !_OnlineUtils.default.loadFromSessionStorage("dontUseDefaults");
        }

        return true;
    };

    var useDefaultOfferType = function useDefaultOfferType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseUseDefaults();
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.USE_DEFAULT_OFFER_TYPE:
                return action.use;

            default:
                return state;
        }
    };

    _exports.useDefaultOfferType = useDefaultOfferType;

    var maxSimCount = function maxSimCount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_MAX_SIM_COUNT:
                _OnlineUtils.default.saveInSessionStorage("maxSimCount", action.maxSimCount);

                return action.maxSimCount;

            default:
                _OnlineUtils.default.saveInSessionStorage("maxSimCount", state);

                return state;
        }
    };

    _exports.maxSimCount = maxSimCount;

    var useDefaultProcess = function useDefaultProcess() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseUseDefaults();
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.USE_DEFAULT_PROCESS:
                return action.use;

            default:
                return state;
        }
    };

    _exports.useDefaultProcess = useDefaultProcess;

    var useDefaultLoyalty = function useDefaultLoyalty() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseUseDefaults();
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.USE_DEFAULT_LOYALTY:
                return action.use;

            default:
                return state;
        }
    };

    _exports.useDefaultLoyalty = useDefaultLoyalty;

    var useDefaultOffer = function useDefaultOffer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.USE_DEFAULT_OFFER:
                return action.use;

            default:
                return state;
        }
    };

    _exports.useDefaultOffer = useDefaultOffer;

    var clientContext = function clientContext() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getInitialClientContextState();
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CLIENT_CONTEXT_ENABLED:
                _OnlineUtils.default.saveInStorageOnCanonicalLinks("convergence", true);

                return true;

            case _actionTypes.CLIENT_CONTEXT_DISABLED:
                _OnlineUtils.default.saveInStorageOnCanonicalLinks("convergence", false);

                return false;

            default:
                if (_OnlineUtils.default.getParameterValueFromUrl("convergence")) {
                    return JSON.parse(_OnlineUtils.default.getParameterValueFromUrl("convergence"));
                }

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("convergence", state);

                return state;
        }
    };

    _exports.clientContext = clientContext;

    var clientContextChangeHandlers = function clientContextChangeHandlers() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CLIENT_CONTEXT_CHANGE_SUBSCRIPTION:
                var newState = state.slice();
                newState.push(action.handler);
                return newState;

            default:
                return state;
        }
    };

    _exports.clientContextChangeHandlers = clientContextChangeHandlers;

    var propositionListOfferType = function propositionListOfferType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("propositionListOfferType");
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PROPOSITION_LIST_OFFER_TYPE:
                _OnlineUtils.default.saveInSessionStorage("propositionListOfferType", action.offerType);

                if (!action.offerType || action.offerType == "null") {
                    _OnlineUtils.default.removeFromSessionStorage("propositionListOfferType");

                    return null;
                }

                return action.offerType;

            default:
                return state;
        }
    };

    _exports.propositionListOfferType = propositionListOfferType;

    var propositionListSoftBundleGroup = function propositionListSoftBundleGroup() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("propositionListSoftBundleGroup");
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PROPOSITION_LIST_SOFT_BUNDLE_GROUP:
                _OnlineUtils.default.saveInSessionStorage("propositionListSoftBundleGroup", action.softBundleGroup);

                if (!action.softBundleGroup || action.softBundleGroup == "null") {
                    _OnlineUtils.default.removeFromSessionStorage("propositionListSoftBundleGroup");

                    return null;
                }

                return action.softBundleGroup;

            default:
                return state;
        }
    };

    _exports.propositionListSoftBundleGroup = propositionListSoftBundleGroup;

    var propositionListCountValue = function propositionListCountValue() {
        if (_OnlineUtils.default.loadFromSessionStorage("propositionListCount") != undefined || !!_OnlineUtils.default.getParameterValueFromUrl("count")) {
            return parseInt(_OnlineUtils.default.getParameterValueFromUrl("count") || _OnlineUtils.default.loadFromSessionStorage("propositionListCount"));
        }

        return simCountSelectedValue();
    };

    var simCountSelectedValue = function simCountSelectedValue() {
        if (!!_OnlineUtils.default.getParameterValueFromUrl("count")) {
            var retValue = parseInt(_OnlineUtils.default.getParameterValueFromUrl("count") <= _OnlineUtils.default.loadFromSessionStorage("maxSimCount") ? _OnlineUtils.default.getParameterValueFromUrl("count") : _OnlineUtils.default.loadFromSessionStorage("maxSimCount"));

            _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("count", retValue);

            return retValue;
        }

        if (_OnlineUtils.default.loadFromSessionStorage("simCountSelected") != undefined) {
            return parseInt(_OnlineUtils.default.loadFromSessionStorage("simCountSelected"));
        }

        return 1;
    };

    var simCountSelected = function simCountSelected() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : simCountSelectedValue();
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        switch (action.type) {
            case _actionTypes.PROPOSITION_LIST_COUNT_SET:
                _OnlineUtils.default.saveInSessionStorage("simCountSelected", action.count);

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("count", action.count);

                return action.count;

            default:
                return state;
        }
    };

    _exports.simCountSelected = simCountSelected;

    var propositionListCount = function propositionListCount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : propositionListCountValue();
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        switch (action.type) {
            case _actionTypes.PROPOSITION_LIST_COUNT_INCREMENT:
                if (state <= 0) {
                    _OnlineUtils.default.saveInSessionStorage("propositionListCount", 1);

                    return 1;
                }

                _OnlineUtils.default.saveInSessionStorage("propositionListCount", state + 1);

                return state + 1;

            case _actionTypes.PROPOSITION_LIST_COUNT_DECREMENT:
                if (state == 0) {
                    _OnlineUtils.default.saveInSessionStorage("propositionListCount", state);

                    return state;
                }

                _OnlineUtils.default.saveInSessionStorage("propositionListCount", state - 1);

                return state - 1;

            case _actionTypes.PROPOSITION_LIST_COUNT_SET:
                _OnlineUtils.default.saveInSessionStorage("propositionListCount", action.count);

                return action.count;

            default:
                return state;
        }
    };

    _exports.propositionListCount = propositionListCount;

    var propositionListCountSetMode = function propositionListCountSetMode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PROPOSITION_LIST_COUNT_SET_MODE:
                return action.on;

            default:
                return state;
        }
    };

    _exports.propositionListCountSetMode = propositionListCountSetMode;

    var marketContext = function marketContext() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "B2C";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_MARKET_CONTEXT:
                if (!!action.market && ["B2B", "B2C"].indexOf(action.market.replace("_SOHO", "")) > -1) {
                    return action.market;
                } else {
                    console.error("Unknown market: " + action.market);
                    return state;
                }

                case _actionTypes.FETCH_OFFERS:
                    var newContext = action.payload && action.payload[0] && action.payload[0].filterMarketSegment;
                    newContext = newContext && newContext.replace("_SOHO", "");
                    return newContext || state;

                default:
                    return state;
        }
    };

    _exports.marketContext = marketContext;

    var loadObjectFromSessionStorage = function loadObjectFromSessionStorage(key) {
        var value = _OnlineUtils.default.loadFromSessionStorage(key);

        if (!value || value === "null") {
            return {};
        }

        return JSON.parse(value);
    };

    var checkMsisdnResult = function checkMsisdnResult() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loadObjectFromSessionStorage("checkMsidnResult") || {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_MSISDN_RESULT:
                _OnlineUtils.default.saveInSessionStorage("checkMsidnResult", JSON.stringify(action.payload.response));

                return action.payload.response;

            case _actionTypes.CHECK_MSISDN_ERROR:
                _OnlineUtils.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({
                    isPositive: false,
                    description: action.message
                }));

                return {
                    isPositive: false,
                        description: action.message
                };

            case _actionTypes.CLEAR_CHECK_MSISDN:
            case _actionTypes.SELECT_PROCESS_TYPE:
                console.warn("checkMsisdnResult SELECT_PROCESS_TYPE");
                console.warn("action:", action);

                if (_OnlineUtils.default.loadFromSessionStorage("processType") === action.processType) {
                    return state;
                } else {
                    _OnlineUtils.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({}));
                }

                return {};

            case _actionTypes.CUSTOMER_SELECTED:
                _OnlineUtils.default.saveInSessionStorage("checkMsidnResult", JSON.stringify({}));

                return {};

            default:
                return state;
        }
    };

    _exports.checkMsisdnResult = checkMsisdnResult;

    var isMsisdnChecking = function isMsisdnChecking() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_MSISDN:
                return true;

            case _actionTypes.CHECK_MSISDN_RESULT:
                return false;

            case _actionTypes.CHECK_MSISDN_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.isMsisdnChecking = isMsisdnChecking;

    var msisdnInput = function msisdnInput() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            msisdn: "",
            valid: true
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.MSISDN_INPUT_CHANGED:
                return action.payload;

            case _actionTypes.SELECT_PROCESS_TYPE:
                console.warn("msisdnInput SELECT_PROCESS_TYPE");
                console.warn("action:", action);
                return state;

            default:
                return state;
        }
    };

    _exports.msisdnInput = msisdnInput;

    var verifiedMsisdnB2B = function verifiedMsisdnB2B() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_MSISDN_RESULT_B2B:
                var newState = state.slice(0);
                newState[action.index] = {
                    msisdn: action.msisdn,
                    status: action.status,
                    description: action.description
                };
                return newState;

            case _actionTypes.CLEAR_CHECK_MSISDN_B2B:
                var newState2 = state.slice(0);
                newState2[action.index] = null;
                return newState2;

            default:
                return state;
        }
    };

    _exports.verifiedMsisdnB2B = verifiedMsisdnB2B;

    var verifiedMsisdn = function verifiedMsisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loadObjectFromSessionStorage("verifiedMsisdn") || {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_MSISDN_ERROR:
            case _actionTypes.CHECK_MSISDN_RESULT:
                var retVal = {
                    context: {
                        market: action.payload.market,
                        offer: action.payload.offer,
                        process: action.payload.process
                    },
                    value: action.payload.response.msisdn
                };

                _OnlineUtils.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify(retVal));

                return retVal;

            case _actionTypes.SELECT_PROCESS_TYPE:
                console.warn("verifiedMsisdn SELECT_PROCESS_TYPE");
                console.warn("action:", action);

                if (_OnlineUtils.default.loadFromSessionStorage("processType") === action.processType) {
                    return state;
                } else {
                    console.log("CLEAR_CHECK_MSISDN by SELECT_PROCESS_TYPE");

                    _OnlineUtils.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify({}));

                    return {};
                }

                case _actionTypes.CHECK_MSISDN:
                case _actionTypes.CUSTOMER_SELECTED:
                case _actionTypes.CLEAR_CHECK_MSISDN:
                    console.log("CLEAR_CHECK_MSISDN verifiedMsisdn ", action.type);

                    _OnlineUtils.default.saveInSessionStorage("verifiedMsisdn", JSON.stringify({}));

                    return {};

                default:
                    return state;
        }
    };

    _exports.verifiedMsisdn = verifiedMsisdn;

    var msisdnVerificationNeeded = function msisdnVerificationNeeded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("msisdnVerificationNeeded") || false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.MSISDN_VERIFICATION_NEEDED:
                _OnlineUtils.default.saveInSessionStorage("msisdnVerificationNeeded", true);

                return true;

            default:
                return state;
        }
    };

    _exports.msisdnVerificationNeeded = msisdnVerificationNeeded;

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.data = data;

    var processType = function processType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.getParameterValueFromUrl("processType") || _OnlineUtils.default.loadFromSessionStorage("processType");
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS:
                var valueFromParameter = _OnlineUtils.default.getParameterValueFromUrl("processType") || _OnlineUtils.default.loadFromSessionStorage("processType");

                var isParameterExistsInPayload = action.payload.find(function(r) {
                    return r.value === valueFromParameter;
                });
                var canonicalConfiguration = action.payload.find(function(r) {
                    return r.isCanonicalConfiguration;
                });

                if (canonicalConfiguration && _OnlineUtils.default.isCanonicalLink()) {
                    _OnlineUtils.default.saveCanonicalValueInSessionStorage("processType", canonicalConfiguration.value);

                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("processType", canonicalConfiguration.value);

                    return canonicalConfiguration.value;
                } else if (!action.urlParametersUsed && isParameterExistsInPayload) {
                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("processType", valueFromParameter);

                    console.log("!action.urlParametersUsed && isParameterExistsInPayload ");
                    return valueFromParameter;
                } else if (state && action.payload.find(function(r) {
                        return r.value === state;
                    })) {
                    console.log("state && action.payload.find(r => r.value === state)");
                    return state;
                } else if (action.useDefaultProcess) {
                    console.log("action.useDefaultProcess");
                    var processTypeTmp = (0, _utils.findDefaultOptionInArrayOrPickFirst)(action.payload);
                    console.log(processTypeTmp);
                    return processTypeTmp && processTypeTmp.value;
                }

                return state;

            case _actionTypes.SELECT_PROCESS_TYPE:
                console.warn("processType SELECT_PROCESS_TYPE");
                console.warn("action:", action);

                _OnlineUtils.default.saveInStorageOnCanonicalLinks("processType", action.processType);

                return action.processType;

            default:
                return state;
        }
    };

    var loyaltyLength = function loyaltyLength() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !!_OnlineUtils.default.getParameterValueFromUrl('loyalty') ? _OnlineUtils.default.getParameterValueFromUrl('loyalty') : _OnlineUtils.default.loadFromSessionStorage("selectedLoyaltyDuration");
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS:
                var newState = {};
                newState = Object.assign(newState, state);

                var loyaltyUrl = _OnlineUtils.default.getParameterValueFromUrl('loyalty');

                var loyaltyFromUrlOrStorage = !!loyaltyUrl ? _OnlineUtils.default.getParameterValueFromUrl('loyalty') : _OnlineUtils.default.loadFromSessionStorage("selectedLoyaltyDuration");
                console.log("reduser loyaltyLength loyaltyLength FETCH_OFFER_FILTERS");
                console.log("reduser loyaltyLength action:", action);
                console.log("reduser loyaltyLength processType:", _OnlineUtils.default.getParameterValueFromUrl('processType'));
                console.log("reduser loyaltyLength loyaltyUrl:", loyaltyUrl);
                console.log("reduser loyaltyLength loyaltyUrl:", !!loyaltyUrl);
                console.log("reduser loyaltyLength state", state);
                console.log("reduser loyaltyLength newState:", newState);

                if (!action.urlParametersUsed && findGivenLoyaltyFormUrlInArray(_OnlineUtils.default.getParameterValueFromUrl('processType'), loyaltyFromUrlOrStorage, action.payload)) {
                    action.payload.map(function(data) {
                        return newState[data.value] = (0, _utils.findDefaultOptionInArrayOrSmallestValue)(data.loyalties);
                    });
                    newState[_OnlineUtils.default.getParameterValueFromUrl('processType')] = loyaltyFromUrlOrStorage;

                    _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", newState[_OnlineUtils.default.getParameterValueFromUrl('processType')]);

                    console.log("loyalty from store or url", newState[_OnlineUtils.default.getParameterValueFromUrl('processType')]);
                } else if (_OnlineUtils.default.isCanonicalLink()) {
                    _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", newState[_OnlineUtils.default.loadFromSessionStorage('processType')]);
                } else if (action.useDefaultLoyalty) {
                    console.log("useDefault loyalty");
                    action.payload.map(function(data) {
                        return newState[data.value] = newState[data.value] || (0, _utils.findDefaultOptionInArrayOrSmallestValue)(data.loyalties);
                    });
                    var defaultProcessFromPayload = (0, _utils.findDefaultOptionInArrayOrPickFirst)(action.payload);
                    var defaultProcess = _OnlineUtils.default.loadFromSessionStorage("processType") || defaultProcessFromPayload && defaultProcessFromPayload.value;

                    _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", newState[defaultProcess]);

                    _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", newState[defaultProcess]);
                }

                _OnlineUtils.default.saveInSessionStorage("loyalty", JSON.stringify(newState));

                console.log("final state:", newState);
                return newState;

            case _actionTypes.SELECT_LOYALTY_LENGTH:
                console.log("loyaltyLength SELECT_LOYALTY_LENGTH");
                var newValue = {};
                newValue[action.processType] = action.loyaltyLength;

                _OnlineUtils.default.saveInSessionStorage("loyalty", JSON.stringify(Object.assign({}, state, newValue)));

                _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", action.loyaltyLength);

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", action.loyaltyLength);

                console.log("loyalty set to:", Object.assign({}, state, newValue));
                return Object.assign({}, state, newValue);

            case _actionTypes.CLEAR_LOYALTY_LENGTH:
                console.log("loyaltyLength CLEAR_LOYALTY_LENGTH");

                _OnlineUtils.default.saveInSessionStorage("loyalty", JSON.stringify(newState));

                _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", "");

                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", "");

                console.log("loyalty set to:", Object.assign({}, state, newValue));
                return {};

            case _actionTypes.SELECT_PROCESS_TYPE:
                //kruci nie wiem czy to powinno tutaj byc czy moze w akcji
                console.warn("loyaltyLength SELECT_PROCESS_TYPE");
                console.warn("action:", action);
                console.warn("state:", state);
                console.log("action.availableLoyalties.find(proc => proc.value==action.procesType)", action.availableLoyalties && action.availableLoyalties.find(function(proc) {
                    return proc.value == action.processType;
                }));

                if (action.useDefaultLoyalty) {
                    _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("loyalty", state[action.processType]);
                } else if (action.availableLoyalties && action.availableLoyalties.find(function(proc) {
                        return proc.value === action.processType;
                    })) {
                    var availableLoyalties = action.availableLoyalties.find(function(proc) {
                        return proc.value === action.processType;
                    }).loyalties;

                    if (availableLoyalties && availableLoyalties.length > 0) {
                        //auto select
                        var _newValue = {};

                        if (availableLoyalties.find(function(loy) {
                                return loy.value === state[action.processType];
                            })) {
                            _newValue[action.processType] = state[action.processType];
                        } else {
                            _newValue[action.processType] = action.availableLoyalties.find(function(proc) {
                                return proc.value === action.processType;
                            }).loyalties[0].value;
                        }

                        _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("loyalty", _newValue[action.processType]);

                        _OnlineUtils.default.saveInSessionStorage("selectedLoyaltyDuration", _newValue[action.processType]);

                        console.log("loyalty set to:", Object.assign({}, state, _newValue));
                        return Object.assign({}, state, _newValue);
                    }
                }

                return state;

            default:
                return state;
        }
    };

    function initOfferTypeState() {
        var originalState;

        if (_OnlineUtils.default.isCanonicalLink()) {
            originalState = _OnlineUtils.default.getParameterValueFromUrl("offerType") || "SIMFREE_INST";

            _OnlineUtils.default.saveCanonicalValueInSessionStorage("offerType", originalState);

            _OnlineUtils.default.saveInSessionStorage("offerType", originalState);
        } else {
            originalState = _OnlineUtils.default.getParameterValueFromUrl("offerType") || _OnlineUtils.default.getFromSessionStorageAndSetUrlParameter("offerType") || "SIMFREE";
        }

        return originalState;
    }

    var offerType = function offerType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initOfferTypeState();
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes2.SELECT_OFFER_TYPE:
                if (action.offerType == undefined) {
                    _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks("offerType", state);

                    return state;
                }

                _OnlineUtils.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("offerType", action.offerType);

                return action.offerType;

            case _actionTypes2.REGISTER_OFFER_TYPES_CMS_CONF:
                var newState = state.slice();

                if (action.validOfferTypes && action.validOfferTypes[0]) {
                    if (action.validOfferTypes.indexOf(newState) <= -1) {
                        newState = action.validOfferTypes[0];
                    }
                }

                if (!parseUseDefaults()) {
                    newState = "";

                    _OnlineUtils.default.saveInSessionStorage("offerType", newState);

                    return newState;
                }

                if (Object.getOwnPropertyNames(action.cmsConf).find(function(offerType) {
                        return offerType === newState;
                    })) {
                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("offerType", newState);

                    return newState;
                } else if (Object.getOwnPropertyNames(action.cmsConf).length) {
                    //nie mamy konfiguracji dla domyslnej wartosci wiec ustawiamy voice
                    _OnlineUtils.default.saveInStorageOnCanonicalLinks("offerType", Object.getOwnPropertyNames(action.cmsConf)[0]);

                    return Object.getOwnPropertyNames(action.cmsConf)[0];
                } else {
                    //nie mamy konfiguracji dla domyslnej wartosci wiec ustawiamy voice
                    _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("offerType", "SIMFREE");

                    return "SIMFREE";
                }

                default:
                    return state;
        }
    };

    var defaultFilters = function defaultFilters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS:
                var _processType = (0, _utils.findDefaultOptionInArrayOrPickFirst)(action.payload);

                var _loyaltyLength = {};
                action.payload.map(function(data) {
                    return _loyaltyLength[data.value] = (0, _utils.findDefaultOptionInArrayOrSmallestValue)(data.loyalties);
                });
                var newFilters = {
                    processType: _processType.value,
                    loyaltyLength: _loyaltyLength
                };
                return newFilters;

            default:
                return state;
        }
    };

    _exports.defaultFilters = defaultFilters;

    var offerFiltersLoading = function offerFiltersLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS_START:
                return true;

            case _actionTypes.FETCH_OFFER_FILTERS:
                return false;

            default:
                return state;
        }
    };

    _exports.offerFiltersLoading = offerFiltersLoading;

    var offerTypeFiltersCached = function offerTypeFiltersCached() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFER_FILTERS:
                var selectedOfferType = getSelectedOfferType();
                var newOfferFiltersData = state.slice();

                if (state && state.length === 0 || state.length > 0 && state.findIndex(function(offerFiltersElement) {
                        return offerFiltersElement.offerType === selectedOfferType;
                    }) === -1) {
                    newOfferFiltersData.splice(0, 0, {
                        offerType: selectedOfferType,
                        offerFilters: action.payload
                    });
                }

                return newOfferFiltersData;

            default:
                return state;
        }
    }; //{
    //    "msisdn1":{
    //        "genericProcess1": "concreteProcess1",
    //        "genericProcess2": "concreteProcess2"
    //    },
    //    "msisdn2":{
    //        "genericProcess2": "concreteProcess3",
    //        "genericProcess4": "concreteProcess4"
    //    }
    //}


    _exports.offerTypeFiltersCached = offerTypeFiltersCached;

    var processForMsisdn = function processForMsisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PROCESS_FOR_MSISDN:
                if (action.msisdn && action.genericProcess && action.concreteProcess) {
                    var existValue = state[action.msisdn];

                    if (!existValue && action.genericProcess != action.concreteProcess) {
                        var newState = _objectSpread({}, state);

                        newState[action.msisdn] = action.concreteProcess;

                        _OnlineUtils.default.saveInSessionStorage("processForMsisdn", JSON.stringify(newState));

                        return newState;
                    }
                }

                return state;

            case _actionTypes.FETCH_OFFER_FILTERS:
                var sessionJson = _OnlineUtils.default.loadFromSessionStorage("processForMsisdn");

                var sessionState = state;

                if (!!sessionJson) {
                    sessionState = JSON.parse(sessionJson);
                }

                return sessionState;

            case _actionTypes.CUSTOMER_SELECTED:
                _OnlineUtils.default.removeFromSessionStorage("processForMsisdn");

                return {};

            default:
                return state;
        }
    }; //SELECT_OFFER_TYPE


    _exports.processForMsisdn = processForMsisdn;
    var selected = (0, _redux.combineReducers)({
        processType: processType,
        loyaltyLength: loyaltyLength,
        offerType: offerType,
        verifiedMsisdn: verifiedMsisdn
    });
    _exports.selected = selected;

    function findGivenLoyaltyFormUrlInArray(urlProcess, urlLoyalty, array) {
        var selectedProcess = array.find(function(p) {
            return p.value === urlProcess;
        });
        return selectedProcess && selectedProcess.loyalties && selectedProcess.loyalties.find(function(l) {
            return l.value == urlLoyalty;
        });
    }
});
//# sourceMappingURL=filters.js.map