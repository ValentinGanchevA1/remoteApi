import * as ACTIONS from '../actionTypes';

import * as MAGNUM_ACTIONS from '../../magnum2/actionTypes';
import TvPackagesChoiceFilter from '../enum/TvPackagesChoiceFilter';

const emptyOfferData = {
    offers: [],
    showAlertPopup: false,
    offerNumber: 0
};

export const data = (data = emptyOfferData, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_OFFERS: {
            if (!action.payload.offers) {
                return {
                    ...emptyOfferData,
                    ftthAvailabilityDate: action.payload.ftthAvailabilityDate,
                    errorMessage: action.payload.errorMessage,
                };
            }
            const offers = action.payload.offers.map((receivedOffer) => {

                const tieredPrices = receivedOffer.tieredPriceList.map((tieredPrice) => {
                    return {
                        finalPrice: tieredPrice.finalPrice,
                        finalNetPrice: tieredPrice.finalNetPrice,
                        startCycle: tieredPrice.startCycle,
                        endCycle: tieredPrice.endCycle
                    };
                });

                const hasTV = receivedOffer.tvPackages && receivedOffer.tvPackages.length > 0;

                const offerId = receivedOffer.broadband.bundleId;

                const minimumLinkPrice = receivedOffer.minLinkPrice;

                return {
                    offerId,
                    tieredPrices,
                    hasTV,
                    minimumLinkPrice,
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

            const loyaltyOptions = action.payload.loyalty && action.payload.loyalty.map((value) => {
                return {
                    value: value,
                    description: "loyalty" + value
                };
            });

            return {
                offers,
                loyaltyOptions,
                technologies: action.payload.technologies,
                ftthAvailabilityDate: action.payload.ftthAvailabilityDate,
                pots: action.payload.pots,
                productListDescription: action.payload.productListDescription,
                paragraphs: action.payload.paragraphs
            };
        }
        case ACTIONS.SHOW_MODAL_ACTION: {
            const newOffers = data.offers.map(function(item, i) {
                if (i === action.payload.modalId) {
                    return {
                        ...item,
                        modalIsOpen: true
                    };
                } else {
                    return {
                        ...item
                    };
                }
            });

            return {
                ...data,
                offers: newOffers,
                modals: action.payload.modals,
                offerNumber: action.payload.modalId
            };
        }
        case ACTIONS.CLOSE_TV_MODAL: {
            const newOffers = data.offers.map(function(item, i) {
                if (i === action.payload.modalId) {
                    return {
                        ...item,
                        modalIsOpen: false
                    };
                } else {
                    return {
                        ...item
                    };
                }
            });

            return {
                ...data,
                offers: newOffers,
                modals: action.payload.modals,
                offerNumber: action.payload.modalId,
                showAlertPopup: false
            };
        }
        default:
            return data;
    }
};

export const selectedOfferId = (selectedOfferId = null, action) => {
    switch (action.type) {
        case ACTIONS.SAVE_SELECTED_OFFER_ID:
            return action.payload

        default:
            return selectedOfferId;
    }
}

export const showCartNotEmptyModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_CART_NOT_EMPTY_MODAL:
            return action.payload;
        default:
            return state;
    }
};

export const bundleNosOnCart = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.SAVE_BUNDLE_NOS:
            return action.data;
        default:
            return state;
    }
}

export const migrationVariants = (migrationVariants = {}, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_VARIANTS_FETCHED:
            return action.payload || {};
        default:
            return migrationVariants;
    }
};
export const migrationVariantsFetched = (migrationVariantsFetched = false, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_VARIANTS_FETCHED:
            return true;
        default:
            return migrationVariantsFetched;
    }
};

export const migrationVariantsFetching = (migrationVariantsFetching = false, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_VARIANTS_FETCHING:
            return true;
        case ACTIONS.MIGRATION_VARIANTS_FETCHED:
            return false;
        default:
            return migrationVariantsFetching;
    }
};

export const isLP = (isLP = false, action) => {
    switch (action.type) {
        case ACTIONS.IS_LP:
            return action.payload;
        default:
            return isLP;
    }
};

export const secondaryChoiceOffer = (secondaryChoiceOffer = false, action) => {
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