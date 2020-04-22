import * as ACTIONS from "../actionTypes";
import * as MAGNUM_ACTIONS from "../../magnum2/actionTypes";
import RemoteApi from "../remoteApi";
import * as CARTACTIONS from "eshop/modules/cart/actionTypes"
import {
    showKnaModal,
    showPaymentLink
} from "./kna";
import * as magnumActions from "eshop/modules/checkout/actionTypes";
import {
    openErrorModal
} from "./errors";
import {
    getKnaModalRegistered,
    getPageContext,
    getSelectedLoyalty,
    getWwtCityId,
    isPreLandingPage,
    isWWW,
    voipModalComponentIsMounted
} from "../selectors/root";
import {
    doShowWWTModal,
    saveWWTAddress
} from "./wwt";
import {
    fetchVoipNumbers,
    voipSelection
} from "./voip";
import {
    getRedirectUrlAfterWWT
} from "eshop/modules/fix/selectors"
import OnlineUtils from "eshop/utils/OnlineUtils";

export const fetchOffers = (address, customerServicesHashCode = null, reset = false, forceAfterWwt = false, kna = false) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START
    });
    dispatch({
        type: ACTIONS.HIDE_PAYMENT_LINK_COMPONENT
    });

    let addressObject = convertAddressToCommonFormat(address, kna);
    if (addressObject) {
        dispatch({
            type: magnumActions.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success,
            payload: addressObject
        });
    } else {
        addressObject = {};
    }

    dispatch(saveWWTAddress({
        address: addressObject,
        forceAfterWwt,
        designationNumber: customerServicesHashCode
    }));

    dispatch(optionallyRedirectAfterWWT());

    const selectedLoyalty = getSelectedLoyalty(getState());

    RemoteApi.getOffers(!!addressObject.fromSession ? null : addressObject, selectedLoyalty, customerServicesHashCode, reset)
        .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response
                });

                RemoteApi.getDocuments(!!response.offers ? response.offers.map(offer => offer.broadband.bundleId) : [])
                    .then(responseDocuments => {
                            dispatch({
                                type: ACTIONS.FETCH_DOCUMENTS,
                                payload: responseDocuments
                            });
                        },
                        (error) => console.error("getDocuments", error)
                    );

                if (!response || !response.offers) {
                    dispatch(openErrorModal(response.errorMessage));
                    return;
                }

                if (response.process === "ACTIVATION" && response.offers.length > 0 &&
                    !response.technologies.includes("FTTH") && isAddressNotEmpty(addressObject)) {
                    if (getKnaModalRegistered(getState())) {
                        dispatch(showKnaModal(false));
                    } else {
                        dispatch(showPaymentLink());
                    }
                }

                if (reset && !isAddressNotEmpty(addressObject)) {
                    dispatch(doShowWWTModal());
                }
            },
            (error) => console.error('fetchOffers getOffers error', error))

};
export const fetchTvChannels = (propositionId) => (dispatch) => {
    RemoteApi.getTvPackages(propositionId).then(response => {
        let configurables = [{
            tvPackages: response
        }]
        dispatch({
            type: CARTACTIONS.FETCH_FIX_CONFIGURABLES,
            payload: configurables
        })

        console.log(response)
    });
}
const convertAddressToCommonFormat = (address, kna) => {
    if (address) {
        if (!!address.zip) {
            return {
                preZipCode: address.zip && address.zip.substr(0, 2),
                postalCode: address.zip && address.zip.substr(2),
                town: address.cityName,
                line1: address.streetName,
                line2: address.streetNumber,
                appartmentNo: address.apartmentNumber,
                streetId: address.streetId,
                cityId: address.cityId,
            };
        } else if (kna || !!address.preZipCode) {
            return address;
        }
    }
};

export const fetchOffersAndCheckAvailablePromotions = (address, forceAfterWwt) => (dispatch, getState) => {
    const www = isWWW(getState());
    dispatch(checkAvailablePromotions(address))
        .then((response) => {
            if (!address.fromSession && !www && !!response && !!response.availableApartments && response.availableApartments.length > 0) {
                dispatch({
                    type: MAGNUM_ACTIONS.SAVE_WWT_ADDITIONAL_DATA,
                    payload: response
                });
            } else {
                dispatch(fetchOffers(address, null, false, forceAfterWwt));
            }
        });
};

export const checkAvailablePromotions = (address) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        dispatch({
            type: ACTIONS.PROMOTION_IS_AVAILABLE_START
        });
        const addressObject = convertAddressToCommonFormat(address, false);
        if (addressObject && addressObject.preZipCode && addressObject.postalCode && addressObject.cityId && addressObject.line2) {
            const request = {
                address: addressObject,
                context: getPageContext(getState())
            };
            RemoteApi.checkWwtAdditionalData(request)
                .then(wwtData => {
                    if (wwtData) {
                        const redirectionData = {
                            componentUid: "WWT_NewLove",
                            boxID: "love-offer",
                            formType: "DETAILED",
                            leadAddressForm: decodeURI($.param(wwtData.address)).replace("+", " "),
                            address: wwtData.base64Address
                        };
                        localStorage.setItem("OPL-prompterWWT_address", JSON.stringify(redirectionData));
                    }
                    if (wwtData && wwtData.redirectAvailable && wwtData.redirectAvailable === true && window.location.pathname !== wwtData.redirectUrl) {
                        window.location = wwtData.redirectUrl;
                        reject();
                    } else {
                        dispatch({
                            type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
                        });
                        resolve(wwtData);
                    }
                }, () => {
                    dispatch({
                        type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
                    });
                    resolve();
                });
        } else {
            dispatch({
                type: ACTIONS.PROMOTION_IS_AVAILABLE_LOADED
            });
            resolve();
        }
    });
};

export const optionallyRedirectAfterWWT = () => (dispatch, getState) => {

    let redirectUrlAfterWWT = getRedirectUrlAfterWWT(getState());
    if (isPreLandingPage(getState()) && redirectUrlAfterWWT && window.location.pathname != redirectUrlAfterWWT) {
        window.location = redirectUrlAfterWWT;
    }
};
export const refreshOffertsByLoyalty = (loyalty) => (dispatch) => {

    dispatch({
        type: ACTIONS.FETCH_OFFERS_START
    });

    RemoteApi.getOffers({}, loyalty)
        .then(response => {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response
            });
            dispatch({
                type: ACTIONS.SELECT_LOYALTY,
                payload: loyalty
            });

            RemoteApi.getDocuments(response.offers.map(offer => offer.broadband.bundleId))
                .then(responseDocuments => {
                    dispatch({
                        type: ACTIONS.FETCH_DOCUMENTS,
                        payload: responseDocuments
                    });
                });
        });
};


export function showTVModal(id) {
    return {
        type: ACTIONS.SHOW_MODAL_ACTION,
        payload: {
            modalId: id
        }
    };
}

export function closeTvModal(id) {
    return {
        type: ACTIONS.CLOSE_TV_MODAL,
        payload: {
            modalId: id
        }
    };
}


export const showCartNotEmptyModal = (show) => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_CART_NOT_EMPTY_MODAL,
        payload: show
    });
};

export const chooseOffer = ({
    offerId,
    secondaryChoiceOffer
}) => (dispatch, getState) => {
    const enableVoipSelection = voipModalComponentIsMounted(getState());
    dispatch(saveSelectedOfferId(offerId));
    //due to NOR-156774

    RemoteApi.removeFromCart().then(res => {
            if (enableVoipSelection) {
                if (res && res.description == null) { //cart was not empty
                    dispatch(fetchVoipNumbers(getWwtCityId(getState())));
                }
                dispatch(voipSelection(true));
            } else {

                dispatch(addToCart(offerId, secondaryChoiceOffer));
            }
        }

    );


};

export const addToCart = (id, secondaryChoiceOffer) => (dispatch) => {
    dispatch({
        type: ACTIONS.CART_MOD_LOADING,
        payload: true
    });
    RemoteApi.addOfferToCart(id, secondaryChoiceOffer).then(response => {
        if (response.status) {
            window.location.replace("/koszyk/multi");
        }
    }).catch((err) => {
        dispatch({
            type: ACTIONS.CART_MOD_LOADING,
            payload: false
        });

        dispatch({
            type: ACTIONS.SAVE_BUNDLE_NOS,
            data: err.responseJSON.bundleNos
        });

        if (err && err.responseJSON && err.responseJSON.errorCode) {
            const modalConfig = {
                showIcon: 'HtmlErrorMessage' !== err.responseJSON.errorCode
            };
            dispatch(openErrorModal(err.responseJSON.errorCode, err.responseJSON.description, modalConfig));
        } else {
            setTimeout(() => dispatch(showCartNotEmptyModal(true)), 400);
        }
    });
    OnlineUtils.removePwaSuflerContextFromSession();
};

export const removeCart = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CART_MOD_LOADING,
        payload: true
    });
    dispatch(showCartNotEmptyModal(false))
    RemoteApi.removeFromCart().then(() => {
        OPL.UI.fire(OPL.UI.EVENTS.modules.header.updateRightMenuBadge, {
            id: 'basketBadgeService',
            value: 0
        })
    }).then(() => {
        dispatch({
            type: ACTIONS.CART_MOD_LOADING,
            payload: false
        });
    }).then(() => {
        const enableVoipSelection = voipModalComponentIsMounted(getState());
        if (enableVoipSelection) {
            dispatch(fetchVoipNumbers(getWwtCityId(getState())));
        }
    });
};

export const showBaseOffer = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_BASE_OFFER
    });
    //Workaround for opl-carousel
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START
    });
    setTimeout(() => dispatch({
        type: ACTIONS.FETCH_OFFERS_STOP
    }), 100);
};

export const showSecondaryChoiceOffer = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_SECONDARY_CHOICE_OFFER
    });
    //Workaround for opl-carousel
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START
    });
    setTimeout(() => dispatch({
        type: ACTIONS.FETCH_OFFERS_STOP
    }), 100);
};

export function isAddressNotEmpty(addressObject) {
    return !isEmptyObject(addressObject) && addressObject.preZipCode !== "" && addressObject.town !== "";
}

function isEmptyObject(obj) {
    return !obj || !Object.keys(obj).length;
}

export function saveSelectedOfferId(id) {
    return {
        type: ACTIONS.SAVE_SELECTED_OFFER_ID,
        payload: id
    };
}

export function saveSelectedLoyalty(loyalty) {
    return {
        type: ACTIONS.SELECT_LOYALTY,
        payload: loyalty
    };
}

export const updateIsLandingPage = (isLP) => (dispatch) => {
    dispatch({
        type: ACTIONS.IS_LP,
        payload: isLP
    });
};