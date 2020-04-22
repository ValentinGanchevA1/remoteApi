define(["exports", "../actionTypes", "../../core/enum/MarketSegment"], function(_exports, ACTIONS, _MarketSegment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.salesChannel = _exports.headerInfo = _exports.wwtValidationModalMessage = _exports.wwtValidationModalState = _exports.duplicateOrderCalled = _exports.isMigration = _exports.duplicateOrderDetails = _exports.duplicateOrderIsModalOpened = _exports.hasAccessRoleToProcessDuplicateOrder = _exports.isDuplicateOrder = _exports.lpSearchCustomerDone = _exports.cartSummarySearchCustomerDone = _exports.voipModalComponentIsMounted = _exports.showNetPrices = _exports.marketSegment = _exports.isAfterSearchCustomer = _exports.customerSelectedModalIsShow = _exports.selectedLoyalty = _exports.wwtAddress = _exports.shouldBeRenderedPaymentLinkComponent = _exports.forceAfterWWT = _exports.redirectUrlAfterWWT = _exports.showWWTModal = _exports.showWwtComponent = _exports.isAfterWWT = _exports.forceSearchModalIsShow = _exports.knaModalState = _exports.verifyIfServiceListsEmpty = _exports.migrationDataClear = _exports.loading = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);

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

    var knaModalDefaultState = {
        registered: false,
        open: false
    };
    var defaultLoadingState = {
        offers: false,
        voipModal: false,
        voipNumbers: false,
        serviceDetails: false,
        duplicates: false,
        customerServices: false,
        cartModification: false,
        checkingPickup: false
    };

    var loading = function loading() {
        var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLoadingState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_OFFERS_START:
                return _objectSpread({}, loading, {
                    offers: true
                });

            case ACTIONS.VOIP_START_LOADING_MODAL_ACTION:
                return _objectSpread({}, loading, {
                    voip: true
                });

            case ACTIONS.SERVICE_DETAILS_FETCHING:
                return _objectSpread({}, loading, {
                    serviceDetails: true
                });

            case ACTIONS.DUPLICATE_ORDER_FETCHING:
                return _objectSpread({}, loading, {
                    duplicates: true
                });

            case ACTIONS.PROMOTION_IS_AVAILABLE_START:
                return _objectSpread({}, loading, {
                    promotion: true
                });

            case ACTIONS.VOIP_STOP_LOADING_MODAL_ACTION:
                return _objectSpread({}, loading, {
                    voip: false
                });

            case ACTIONS.FETCH_OFFERS:
            case ACTIONS.FETCH_OFFERS_STOP:
                return _objectSpread({}, loading, {
                    offers: false
                });

            case ACTIONS.SERVICE_DETAILS_FETCHED:
                return _objectSpread({}, loading, {
                    serviceDetails: false
                });

            case ACTIONS.DUPLICATE_ORDER_FETCHED:
                return _objectSpread({}, loading, {
                    duplicates: false
                });

            case ACTIONS.PROMOTION_IS_AVAILABLE_LOADED:
                return _objectSpread({}, loading, {
                    promotion: false
                });

            case ACTIONS.CUSTOMER_SERVICES_LIST_IS_LOADING:
                return _objectSpread({}, loading, {
                    customerServices: action.isLoading
                });

            case ACTIONS.CART_MOD_LOADING:
                return _objectSpread({}, loading, {
                    cartModification: action.payload
                });

            case ACTIONS.CHECK_PICKUP_STARTED:
                return _objectSpread({}, loading, {
                    checkingPickup: true
                });

            case ACTIONS.CHECK_PICKUP_DONE:
                return _objectSpread({}, loading, {
                    checkingPickup: false
                });

            default:
                return loading;
        }
    };

    _exports.loading = loading;

    var migrationDataClear = function migrationDataClear() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_DATA_CLEAR:
                return true;

            default:
                return state;
        }
    };

    _exports.migrationDataClear = migrationDataClear;

    var verifyIfServiceListsEmpty = function verifyIfServiceListsEmpty() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CUSTOMER_SERVICES_LIST_IS_EMPTY:
                return action.isEmpty;

            default:
                return state;
        }
    };

    _exports.verifyIfServiceListsEmpty = verifyIfServiceListsEmpty;

    var knaModalState = function knaModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : knaModalDefaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_KNA_MODAL_ACTION:
                return _objectSpread({}, state, {
                    open: true
                });

            case ACTIONS.CLOSE_KNA_MODAL_ACTION:
                return _objectSpread({}, state, {
                    open: false
                });

            case ACTIONS.REGISTER_KNA_MODAL_ACTION:
                return _objectSpread({}, state, {
                    registered: true
                });

            default:
                return state;
        }
    };

    _exports.knaModalState = knaModalState;

    var forceSearchModalIsShow = function forceSearchModalIsShow() {
        var forceSearchModalIsShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION:
                return true;

            case ACTIONS.CLOSE_FORCE_SEARCH_MODAL_ACTION:
                return false;

            default:
                return forceSearchModalIsShow;
        }
    };

    _exports.forceSearchModalIsShow = forceSearchModalIsShow;

    var isAfterWWT = function isAfterWWT() {
        var isAfterWWT = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.BEFORE_WWT:
                return false;

            case ACTIONS.AFTER_WWT:
                return true;

            default:
                return isAfterWWT;
        }
    };

    _exports.isAfterWWT = isAfterWWT;

    var showWwtComponent = function showWwtComponent() {
        var showWwtComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.HIDE_WWT_COMPONENT:
                return false;

            case ACTIONS.SHOW_WWT_COMPONENT:
                return true;

            default:
                return showWwtComponent;
        }
    };

    _exports.showWwtComponent = showWwtComponent;

    var showWWTModal = function showWWTModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_WWT_MODAL:
                return true;

            case ACTIONS.AFTER_WWT:
            case ACTIONS.HIDE_WWT_MODAL:
                return false;

            default:
                return state;
        }
    };

    _exports.showWWTModal = showWWTModal;

    var redirectUrlAfterWWT = function redirectUrlAfterWWT() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_REDIRECT_URL_AFTER_WWT:
                return action.url;

            default:
                return state;
        }
    };

    _exports.redirectUrlAfterWWT = redirectUrlAfterWWT;

    var forceAfterWWT = function forceAfterWWT() {
        var forceAfterWWT = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FORCE_AFTER_WWT:
                return action.payload;

            default:
                return forceAfterWWT;
        }
    };

    _exports.forceAfterWWT = forceAfterWWT;

    var shouldBeRenderedPaymentLinkComponent = function shouldBeRenderedPaymentLinkComponent() {
        var shouldBeRenderedPaymentLinkComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_PAYMENT_LINK_COMPONENT:
                return true;

            case ACTIONS.HIDE_PAYMENT_LINK_COMPONENT:
                return false;

            default:
                return shouldBeRenderedPaymentLinkComponent;
        }
    };

    _exports.shouldBeRenderedPaymentLinkComponent = shouldBeRenderedPaymentLinkComponent;

    var wwtAddress = function wwtAddress() {
        var wwtAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_WWT_ADDRESS:
                return action.payload;

            default:
                return wwtAddress;
        }
    };

    _exports.wwtAddress = wwtAddress;

    var selectedLoyalty = function selectedLoyalty() {
        var selectedLoyalty = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_LOYALTY:
                if (action.payload) {
                    return action.payload;
                } else {
                    return 24;
                }

                default:
                    return selectedLoyalty;
        }
    };

    _exports.selectedLoyalty = selectedLoyalty;

    var customerSelectedModalIsShow = function customerSelectedModalIsShow() {
        var customerSelectedModalIsShow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_CUSTOMER_SELECTED_MODAL_ACTION:
                return true;

            case ACTIONS.CLOSE_CUSTOMER_SELECTED_MODAL_ACTION:
                return false;

            default:
                return customerSelectedModalIsShow;
        }
    };

    _exports.customerSelectedModalIsShow = customerSelectedModalIsShow;

    var isAfterSearchCustomer = function isAfterSearchCustomer() {
        var isAfterSearchCustomer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AFTER_SEARCH_CUSTOMER:
                return action.payload;

            default:
                return isAfterSearchCustomer;
        }
    };

    _exports.isAfterSearchCustomer = isAfterSearchCustomer;

    var marketSegment = function marketSegment() {
        var marketSegment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _MarketSegment.default.B2C;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MARKET_SEGMENT:
                return action.payload;

            default:
                return marketSegment;
        }
    };

    _exports.marketSegment = marketSegment;

    var showNetPrices = function showNetPrices() {
        var showNetPrices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MARKET_SEGMENT:
                return _MarketSegment.default.isB2B(action.payload);

            default:
                return showNetPrices;
        }
    }; //TODO move to voip


    _exports.showNetPrices = showNetPrices;

    var voipModalComponentIsMounted = function voipModalComponentIsMounted() {
        var voipModalComponentIsMounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MOUNT_VOIP_MODAL_COMPONENT_ACTION:
                return true;

            default:
                return voipModalComponentIsMounted;
        }
    };

    _exports.voipModalComponentIsMounted = voipModalComponentIsMounted;

    var cartSummarySearchCustomerDone = function cartSummarySearchCustomerDone() {
        var cartSummarySearchCustomerDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CART_SUMMARY_SEARCH_CUSTOMER_DONE:
                return true;

            default:
                return cartSummarySearchCustomerDone;
        }
    };

    _exports.cartSummarySearchCustomerDone = cartSummarySearchCustomerDone;

    var lpSearchCustomerDone = function lpSearchCustomerDone() {
        var lpSearchCustomerDone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.LP_SEARCH_CUSTOMER_DONE:
                return action.payload;

            default:
                return lpSearchCustomerDone;
        }
    };

    _exports.lpSearchCustomerDone = lpSearchCustomerDone;

    var isDuplicateOrder = function isDuplicateOrder() {
        var isDuplicateOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.IS_DUPLICATE_ORDER:
                return action.payload;

            default:
                return isDuplicateOrder;
        }
    };

    _exports.isDuplicateOrder = isDuplicateOrder;

    var hasAccessRoleToProcessDuplicateOrder = function hasAccessRoleToProcessDuplicateOrder() {
        var hasAccessRoleToProcessDuplicateOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.HAS_ACCESS_ROLE_TO_PROCESS_DUPLICATE_ORDER:
                return action.payload;

            default:
                return hasAccessRoleToProcessDuplicateOrder;
        }
    };

    _exports.hasAccessRoleToProcessDuplicateOrder = hasAccessRoleToProcessDuplicateOrder;

    var duplicateOrderIsModalOpened = function duplicateOrderIsModalOpened() {
        var duplicateOrderIsModalOpened = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DUPLICATE_ORDER_IS_MODAL_OPENED:
                return action.payload;

            default:
                return duplicateOrderIsModalOpened;
        }
    };

    _exports.duplicateOrderIsModalOpened = duplicateOrderIsModalOpened;

    var duplicateOrderDetails = function duplicateOrderDetails() {
        var duplicateOrderDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            orderNumber: "",
            serviceName: ""
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DUPLICATE_ORDER_DETAILS:
                return action.payload;

            default:
                return duplicateOrderDetails;
        }
    };

    _exports.duplicateOrderDetails = duplicateOrderDetails;

    var isMigration = function isMigration() {
        var isMigration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.IS_MIGRATION:
                return action.payload;

            default:
                return isMigration;
        }
    };

    _exports.isMigration = isMigration;

    var duplicateOrderCalled = function duplicateOrderCalled() {
        var duplicateOrderCalled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DUPLICATE_ORDER_FETCHING:
                return true;

            case ACTIONS.DUPLICATE_ORDER_RESET:
                return false;

            default:
                return duplicateOrderCalled;
        }
    };

    _exports.duplicateOrderCalled = duplicateOrderCalled;

    var wwtValidationModalState = function wwtValidationModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.WWT_VALIDATION_MODAL:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.wwtValidationModalState = wwtValidationModalState;

    var wwtValidationModalMessage = function wwtValidationModalMessage() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.WWT_VALIDATION_MODAL_MESSAGE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.wwtValidationModalMessage = wwtValidationModalMessage;

    var headerInfo = function headerInfo() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_HEADERS:
                return _objectSpread({}, state, {}, action.payload);

            default:
                return state;
        }
    };

    _exports.headerInfo = headerInfo;

    var salesChannel = function salesChannel() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SALES_CHANNEL:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.salesChannel = salesChannel;
});
//# sourceMappingURL=metaData.js.map