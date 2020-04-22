define(["exports", "../actionTypes", "../../magnum2/actionTypes", "../enum/TvPackagesChoiceFilter"], function(_exports, ACTIONS, MAGNUM_ACTIONS, _TvPackagesChoiceFilter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.secondaryChoiceOffer = _exports.isLP = _exports.migrationVariantsFetching = _exports.migrationVariantsFetched = _exports.migrationVariants = _exports.bundleNosOnCart = _exports.showCartNotEmptyModal = _exports.selectedOfferId = _exports.data = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    MAGNUM_ACTIONS = babelHelpers.interopRequireWildcard(MAGNUM_ACTIONS);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

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

    var emptyOfferData = {
        offers: [],
        showAlertPopup: false,
        offerNumber: 0
    };

    var data = function data() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyOfferData;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_OFFERS: {
                if (!action.payload.offers) {
                    return _objectSpread({}, emptyOfferData, {
                        ftthAvailabilityDate: action.payload.ftthAvailabilityDate,
                        errorMessage: action.payload.errorMessage
                    });
                }

                var offers = action.payload.offers.map(function(receivedOffer) {
                    var tieredPrices = receivedOffer.tieredPriceList.map(function(tieredPrice) {
                        return {
                            finalPrice: tieredPrice.finalPrice,
                            finalNetPrice: tieredPrice.finalNetPrice,
                            startCycle: tieredPrice.startCycle,
                            endCycle: tieredPrice.endCycle
                        };
                    });
                    var hasTV = receivedOffer.tvPackages && receivedOffer.tvPackages.length > 0;
                    var offerId = receivedOffer.broadband.bundleId;
                    var minimumLinkPrice = receivedOffer.minLinkPrice;
                    return {
                        offerId: offerId,
                        tieredPrices: tieredPrices,
                        hasTV: hasTV,
                        minimumLinkPrice: minimumLinkPrice,
                        availableAsSecondaryChoiceOffer: receivedOffer.availableAsSecondaryChoiceOffer,
                        modalIsOpen: false,
                        totalPrice: receivedOffer.totalPrice.formattedValue,
                        devices: receivedOffer.devices,
                        activationPrice: receivedOffer.activationPrice,
                        downgradePenalty: receivedOffer.downgradePenalty,
                        broadband: receivedOffer.broadband,
                        voip: receivedOffer.voip,
                        tvProduct: receivedOffer.tvProduct,
                        tvPackages: receivedOffer.tvPackages,
                        feeAddons: receivedOffer.feeAddons,
                        vasPackagesB2BProduct: receivedOffer.vasPackagesB2BProduct
                    };
                });
                var loyaltyOptions = action.payload.loyalty && action.payload.loyalty.map(function(value) {
                    return {
                        value: value,
                        description: "loyalty" + value
                    };
                });
                return {
                    offers: offers,
                    loyaltyOptions: loyaltyOptions,
                    technologies: action.payload.technologies,
                    ftthAvailabilityDate: action.payload.ftthAvailabilityDate,
                    pots: action.payload.pots,
                    productListDescription: action.payload.productListDescription,
                    paragraphs: action.payload.paragraphs
                };
            }

            case ACTIONS.SHOW_MODAL_ACTION: {
                var newOffers = data.offers.map(function(item, i) {
                    if (i === action.payload.modalId) {
                        return _objectSpread({}, item, {
                            modalIsOpen: true
                        });
                    } else {
                        return _objectSpread({}, item);
                    }
                });
                return _objectSpread({}, data, {
                    offers: newOffers,
                    modals: action.payload.modals,
                    offerNumber: action.payload.modalId
                });
            }

            case ACTIONS.CLOSE_TV_MODAL: {
                var _newOffers = data.offers.map(function(item, i) {
                    if (i === action.payload.modalId) {
                        return _objectSpread({}, item, {
                            modalIsOpen: false
                        });
                    } else {
                        return _objectSpread({}, item);
                    }
                });

                return _objectSpread({}, data, {
                    offers: _newOffers,
                    modals: action.payload.modals,
                    offerNumber: action.payload.modalId,
                    showAlertPopup: false
                });
            }

            default:
                return data;
        }
    };

    _exports.data = data;

    var selectedOfferId = function selectedOfferId() {
        var selectedOfferId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_SELECTED_OFFER_ID:
                return action.payload;

            default:
                return selectedOfferId;
        }
    };

    _exports.selectedOfferId = selectedOfferId;

    var showCartNotEmptyModal = function showCartNotEmptyModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_CART_NOT_EMPTY_MODAL:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.showCartNotEmptyModal = showCartNotEmptyModal;

    var bundleNosOnCart = function bundleNosOnCart() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_BUNDLE_NOS:
                return action.data;

            default:
                return state;
        }
    };

    _exports.bundleNosOnCart = bundleNosOnCart;

    var migrationVariants = function migrationVariants() {
        var migrationVariants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_VARIANTS_FETCHED:
                return action.payload || {};

            default:
                return migrationVariants;
        }
    };

    _exports.migrationVariants = migrationVariants;

    var migrationVariantsFetched = function migrationVariantsFetched() {
        var migrationVariantsFetched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_VARIANTS_FETCHED:
                return true;

            default:
                return migrationVariantsFetched;
        }
    };

    _exports.migrationVariantsFetched = migrationVariantsFetched;

    var migrationVariantsFetching = function migrationVariantsFetching() {
        var migrationVariantsFetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_VARIANTS_FETCHING:
                return true;

            case ACTIONS.MIGRATION_VARIANTS_FETCHED:
                return false;

            default:
                return migrationVariantsFetching;
        }
    };

    _exports.migrationVariantsFetching = migrationVariantsFetching;

    var isLP = function isLP() {
        var isLP = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.IS_LP:
                return action.payload;

            default:
                return isLP;
        }
    };

    _exports.isLP = isLP;

    var secondaryChoiceOffer = function secondaryChoiceOffer() {
        var secondaryChoiceOffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_BASE_OFFER:
            case ACTIONS.SELECT_LOYALTY:
            case MAGNUM_ACTIONS.SET_LOYALTY_PERIOD:
            case MAGNUM_ACTIONS.SET_FIX_BROADBAND_TRANSACTION:
            case MAGNUM_ACTIONS.SET_FIX_VOIP_TRANSACTION:
            case MAGNUM_ACTIONS.SET_MOBILE_TRANSACTION:
                return false;

            case ACTIONS.SHOW_SECONDARY_CHOICE_OFFER:
                return true;

            default:
                return secondaryChoiceOffer;
        }
    };

    _exports.secondaryChoiceOffer = secondaryChoiceOffer;
});
//# sourceMappingURL=offers.js.map