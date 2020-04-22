define(["exports", "redux", "../actionTypes", "eshop/modules/configurator/actionTypes", "./voucher", "./kdr", "./lowerInstallments", "./convergentConfigurables", "./resources", "./assignment", "./filters", "eshop/utils/OnlineUtils", "../../configurator/actionTypes", "./cart", "./invoiceData", "./vases"], function(_exports, _redux, _actionTypes, _actionTypes2, voucher, kdrData, lowerInstallments, _convergentConfigurables, resources, assignment, tvPackagesFilters, _OnlineUtils, _actionTypes3, cart, invoiceData, _vases) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.bonusModalStatus = _exports.vasModalStatus = _exports.priceViewIsNet = void 0;
    voucher = babelHelpers.interopRequireWildcard(voucher);
    kdrData = babelHelpers.interopRequireWildcard(kdrData);
    lowerInstallments = babelHelpers.interopRequireWildcard(lowerInstallments);
    resources = babelHelpers.interopRequireWildcard(resources);
    assignment = babelHelpers.interopRequireWildcard(assignment);
    tvPackagesFilters = babelHelpers.interopRequireWildcard(tvPackagesFilters);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    cart = babelHelpers.interopRequireWildcard(cart);
    invoiceData = babelHelpers.interopRequireWildcard(invoiceData);

    //TODO trzeba bedzie polaczyc te strzaly zeby nie napierdalac po te same dane pare razy
    //Data for cart entries list component  and also for mini cart
    var miniCartData = function miniCartData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_MINI_CART:
            case _actionTypes.REMOVE_FROM_CART:
            case _actionTypes.REMOVE_TERMINAL_FROM_CART_BUNDLE:
                return Object.assign({}, state, action.payload);

            default:
                return state;
        }
    };

    var priceViewIsNet = function priceViewIsNet() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            // console.log();
            case _actionTypes.SET_PRICE_VIEW_NET:
                if (!!action.market) {
                    return action.market === "B2B" ? true : action.market === "B2C" ? false : state;
                }

                return action.showNet;

            case _actionTypes3.FETCH_OFFERS:
                var newContext = action.payload && action.payload[0] && action.payload[0].filterMarketSegment;
                newContext = newContext && newContext.replace("_SOHO", "");
                return newContext === "B2B" ? true : newContext === "B2C" ? false : state;

            default:
                return state;
        }
    };

    _exports.priceViewIsNet = priceViewIsNet;

    var bundlesProcessType = function bundlesProcessType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_BUNDLES_PROCESS_TYPE:
                if (action.payload.entries) return Array.from(action.payload.entries, function(entry) {
                    return entry.processType;
                });
                else return state;

            default:
                return state;
        }
    };

    var fixConfigurables = function fixConfigurables() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_FIX_CONFIGURABLES:
                return state.concat(action.payload);

            default:
                return state;
        }
    };

    var hasMiniCartData = function hasMiniCartData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCHED_MINI_CART:
                return action.payload;

            default:
                return state;
        }
    };

    var hasCartData = function hasCartData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCHED_CART:
                return action.payload;

            default:
                return state;
        }
    };

    var mobileVasMetadata = function mobileVasMetadata() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCHING_MOBILE_VASES:
                return state.concat(action.payload);

            default:
                return state;
        }
    };

    var fixConfigurablesMetadata = function fixConfigurablesMetadata() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCHING_FIX_CONFIGURABLES:
                return state.concat(action.payload);

            default:
                return state;
        }
    };

    var tvModalVisibility = function tvModalVisibility() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TV_MODAL_VISIBILITY:
                return !!action.data;

            default:
                return state;
        }
    };

    var tvFilteredModalVisibility = function tvFilteredModalVisibility() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TV_FILTERED_MODAL_VISIBILITY:
                return !!action.data;

            default:
                return state;
        }
    };

    var manualVerificationStatus = function manualVerificationStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_MANUAL_STATUS:
                return action.status;

            default:
                return state;
        }
    };

    var addTerminalToOfferBundleNo = function addTerminalToOfferBundleNo() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("addTerminalToOfferBundleNo") || null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
                if (action.value != null) {
                    _OnlineUtils.default.saveInSessionStorage("addTerminalToOfferBundleNo", action.value);

                    return action.value;
                } else {
                    return state;
                }

                case _actionTypes.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
                    _OnlineUtils.default.removeFromSessionStorage("addTerminalToOfferBundleNo");

                    return null;

                case _actionTypes.REMOVE_FROM_CART:
                    _OnlineUtils.default.removeFromSessionStorage("addTerminalToOfferBundleNo");

                    return null;

                default:
                    return state;
        }
    };

    var vasModalStatus = function vasModalStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VAS_MODAL_SHOW_CHANGE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.vasModalStatus = vasModalStatus;

    var bonusModalStatus = function bonusModalStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.BONUS_MODAL_SHOW_CHANGE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.bonusModalStatus = bonusModalStatus;

    var b2bVasesModalVisibility = function b2bVasesModalVisibility() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OFICES_SERVICES_MODAL_VISIBILITY:
                return !!action.data;

            default:
                return state;
        }
    };

    var fix = (0, _redux.combineReducers)({
        fixConfigurablesMetadata: fixConfigurablesMetadata,
        tvModalVisibility: tvModalVisibility,
        tvFilteredModalVisibility: tvFilteredModalVisibility
    });
    var b2b = (0, _redux.combineReducers)({
        b2bVasesModalVisibility: b2bVasesModalVisibility
    });
    var mobile = (0, _redux.combineReducers)({
        mobileVasMetadata: mobileVasMetadata
    });
    var metadata = (0, _redux.combineReducers)({
        hasMiniCartData: hasMiniCartData,
        hasCartData: hasCartData,
        mobileVasUpdating: _vases.mobileVasUpdating,
        mobile: mobile,
        fix: fix,
        b2b: b2b
    });

    var _default = (0, _redux.combineReducers)({
        cartData: cart.cartData,
        miniCartData: miniCartData,
        mobileVas: _vases.mobileVas,
        vasModalStatus: vasModalStatus,
        bonusModalStatus: bonusModalStatus,
        priceViewIsNet: priceViewIsNet,
        fixConfigurables: fixConfigurables,
        convergentConfigurables: _convergentConfigurables.convergentConfigurablesReducer,
        bundlesProcessType: bundlesProcessType,
        metadata: metadata,
        resourcesModal: (0, _redux.combineReducers)(resources),
        assignment: (0, _redux.combineReducers)(assignment),
        manualVerificationStatus: manualVerificationStatus,
        addTerminalToOfferBundleNo: addTerminalToOfferBundleNo,
        voucher: (0, _redux.combineReducers)(voucher),
        lowerInstallments: (0, _redux.combineReducers)(lowerInstallments),
        kdrData: (0, _redux.combineReducers)(kdrData),
        tvPackagesFilters: (0, _redux.combineReducers)(tvPackagesFilters),
        invoiceData: (0, _redux.combineReducers)(invoiceData)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map