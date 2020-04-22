import * as ACTIONS from "../actionTypes";
import * as CONFACTIONS from "eshop/modules/configurator/actionTypes";
import {
    getProcessTypesIncludeAssignment
} from "eshop/modules/cart/selectors";
import {
    getSelectedDeviceId,
    getSelectedOffer
} from '../selectors/offers';
import {
    bodyLoaderEvent,
    gotoCartSummary
} from "eshop/modules/checkout/actions/app"
import {
    clearMessage,
    showError,
    showMessage
} from "eshop/modules/auth/actions/authorization"
import {
    addToCartInProgress
} from '../selectors/cart';
import {
    constants
} from '../constants';
import RemoteApi from "../remoteApi";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    clearAddTerminalToOfferFromSessionStorage,
    fetchCart,
    fetchMiniCart
} from "eshop/modules/cart/actions/cart";
import {
    clearDeviceInstalmentsCountFromSessionStorage,
    clearPropositionId,
    fetchContractRole,
    clearSelectedVases
} from "eshop/modules/configurator/actions/offers"

import {
    getPropositionListCount,
    getPropositionListCountSetMode,
    getPropositionListSoftBundleGroup,
    getSelectedOfferType,
    isProductDetailsListPage,
    getMarketContext,
    getSelectedProcessTypeValue,
    getSelectedProcess
} from "eshop/modules/configurator/selectors/filters"


import {
    getSelectedVases
} from "eshop/modules/configurator/selectors/offers"

import {
    clearLoyaltyLength,
    clearOfferType,
    clearProcessType,
    clearPropositionListSoftBundleGroup,
    propositionListCountDecrement,
    setPropositionListSoftBundleGroup
} from "eshop/modules/configurator/actions/filters"
import {
    getCurrentSelectedAvailableProductsKey,
    isProductDetailsPage,
    isProductListPage,
    isAccessoryListPage
} from "eshop/modules/simfree/selectors";
import {
    getAddFromLink
} from "eshop/modules/configurator/selectors/metaData";
import GenesysWebEngagementUtils from "eshop/utils/GenesysWebEngagementUtils";
import $ from "jquery";
import {
    getSelectedSoftBundleGroup
} from "eshop/modules/simfree/selectors"
import {
    AUTHORIZATION_ADD_TO_CART_AFTER
} from "eshop/modules/auth/actionTypes"
import OfferType from "eshop/modules/simfree/constants/OfferTypeEnum";
import {
    requestLoggedCustomerData
} from "eshop/modules/auth/actions/api";
import {
    clearStayLoveRetentionMSISDN
} from "eshop/modules/auth/actions/authorization"
import {
    getSelectedFilters
} from "../selectors/filters";
import {
    isDuet
} from "eshop/modules/simfree/selectors";
import MarketSegment from "../../core/enum/MarketSegment";

export const addToCart = (selectedOffer, selectedProcess) => (dispatch, getState) => {


    dispatch(addToCartWithCounter());


}

export const addInstallmentSalesOfGoodsToCart = () => (dispatch, getState) => {
    bodyLoaderEvent('modules.loader.show');
    const deviceCode = getSelectedDeviceId(getState());
    const selectedFilters = getSelectedFilters(getState());
    const availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());
    RemoteApi.checkAndGetOffers(null, selectedFilters, availableProductsKey, deviceCode).then(response => {
        bodyLoaderEvent('modules.loader.hide');
        if (response.isPositive) {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response.offers,
                selectedFilters: getSelectedFilters(getState()),
                data: response
            });
            dispatch(addToCart());
        } else {
            dispatch(showError(response.description));
        }
    }).catch(error => {
        bodyLoaderEvent('modules.loader.hide');
        let errorMessage = (error.responseJSON && (error.responseJSON.message)) || "Wystąpił błąd w trakcie dodania do koszyka";
        dispatch(showError(errorMessage));
    });
};

const getSelectedVasesForProposition = (state, proposition) => {
    let selectedVasesForProposition = getSelectedVases(state);
    console.log("@@@", selectedVasesForProposition);
    if (selectedVasesForProposition && selectedVasesForProposition.find(propos => propos.propositionId == proposition.id)) {
        selectedVasesForProposition = selectedVasesForProposition.find(propos => propos.propositionId == proposition.id).vases;
        return selectedVasesForProposition;
    }
    return [];
}
const getIgnoredVasesForProposition = (state, proposition) => {
    if (!proposition || !proposition.addons || !proposition.addons.categorizedBonuses || !proposition.addons.categorizedBonuses["GratisPackageBonuses"] || !proposition.addons.categorizedBonuses["GratisPackageBonuses"].services)
        return [];
    let defaults = proposition.addons.categorizedBonuses["GratisPackageBonuses"].services.filter(service => service.isDefault).map(service => service.bonuses[0].code);
    console.log("@@@", defaults);
    let selected = getSelectedVasesForProposition(state, proposition);
    return defaults.filter(defaultBonus => selected.indexOf(defaultBonus) < 0);
}
export const pushToCart = (selectedOffer, selectedProcess) => (dispatch, getState) => {
    selectedOffer = selectedOffer || getSelectedOffer(getState())
    selectedProcess = selectedProcess || getSelectedProcess(getState())
    let selectedDeviceId = getSelectedDeviceId(getState())
    let market = getMarketContext(getState())
    //coś poszło nie tak i przerywamy dodawanie do koszyka
    console.log("pushToCart");
    console.log({
        selectedOffer,
        selectedProcess,
        selectedDeviceId
    })
    if (!(selectedOffer && selectedProcess)) {
        console.log("Invalid parameters: cannot add product");
        OnlineUtils.removeParameterFromURL("autoadd");
        return
    }
    dispatch(clearMessage());
    bodyLoaderEvent('modules.loader.show');
    if (addToCartInProgress(getState())) {
        return
    }
    let availableProductsKey = getCurrentSelectedAvailableProductsKey(getState()) || $('#availableProductsKey').val();

    let args = {
        rateplanId: selectedOffer.rateplanId,
        propositionId: selectedOffer.id,
        process: selectedProcess,
        market: market,
        availableProductsKey: availableProductsKey,
        bonusesToAdd: getSelectedVasesForProposition(getState(), selectedOffer) || [],
        defaultBonusesToIgnore: getIgnoredVasesForProposition(getState(), selectedOffer) || []
    }

    console.log("@@@", args);

    if (selectedDeviceId) {
        args.deviceVariant = selectedDeviceId
    }

    dispatch({
        type: ACTIONS.POST_TO_CART_START,
        args: args
    })
    RemoteApi.postToCart(args).then(
        responseData => {
            postToCart200Handler(dispatch, selectedOffer, responseData, args);
            dispatch(fetchContractRole(availableProductsKey))
        },
        errorData => dispatch(addToCartError(selectedOffer, errorData))
    )
    OnlineUtils.removePwaSuflerContextFromSession();
}

const pushGweAddEvents = (request, response) => {
    GenesysWebEngagementUtils.pushAddToCartEvent(request.rateplanId, request.propositionId, response.bundleNo);
    if (request.deviceVariant) {
        GenesysWebEngagementUtils.pushAddToCartEvent(request.deviceVariant, request.propositionId, response.bundleNo);
    }
    if (response.vases)
        response.vases.forEach(vas => GenesysWebEngagementUtils.pushAddVasToCartEvent(vas.productCode, request.propositionId, response.bundleNo))
};

export const addToCartWithCounter = () => (dispatch, getState) => {

    console.log("addToCartWithCounter");
    if (getPropositionListCount(getState()) == 0 && !isDuet(getState())) {

        if (getPropositionListSoftBundleGroup(getState()) && getPropositionListSoftBundleGroup(getState()) == getSelectedSoftBundleGroup(getState()) &&
            (isProductListPage(getState()) || isProductDetailsPage(getState()))
        ) {
            let market = getMarketContext(getState())
            if (market == "B2B") {
                console.log("OnlineUtils.saveInSessionStorage(\"dontUseDefaults\", true)");
                OnlineUtils.saveInSessionStorage("dontUseDefaults", true);
            } else if ([OfferType.DATA].indexOf(getSelectedOfferType(getState())) > -1) {
                dispatch(gotoCartSummary());
                return;
            }
            window.location.href = OnlineUtils.getLastViewedOfferPage();
        } else {
            dispatch(gotoCartSummary());
        }
        return;
    }
    dispatch(pushToCart(null, null))
}

/*
 * Checks if HTTP200 wraps error message
 */
const postToCart200Handler = (dispatch, selectedOffer, responseData, requestData) => {
    if (responseData && responseData.message && typeof responseData.message === "string") {
        let errorData = {
            responseJSON: {
                message: responseData.message
            }
        }
        dispatch(addToCartError(selectedOffer, errorData))
    } else {
        dispatch(addToCartSuccess(selectedOffer, responseData, requestData));
        dispatch(clearVerificationData())
    }
}

export const redirectToCart = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.REDIRECT_TO_CART
    });
    dispatch(clearPropositionId());
    dispatch(clearLoyaltyLength());
    dispatch(clearProcessType());
    //   dispatch(clearOfferType());
    dispatch(clearPropositionListSoftBundleGroup());
    dispatch(clearAddTerminalToOfferFromSessionStorage());
    dispatch(clearDeviceInstalmentsCountFromSessionStorage());
    dispatch(clearSelectedVases());

    if (isDuet(getState())) {
        location.href = localStorage.getItem("suflerRedirectUrl");
    } else {
        location.href = constants.url.cart
    }
}


const addToCartSuccess = (selectedOffer, responseData, requestData) => (dispatch, getState) => {
    console.log("add to cart success");
    pushGweAddEvents(requestData, responseData);
    dispatch(clearStayLoveRetentionMSISDN());
    if (getAddFromLink(getState())) {
        dispatch(redirectToCart());
        return
    }

    OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData.bundleCount, 'header');
    dispatch({
        type: ACTIONS.POST_TO_CART_SUCCESS
    });
    dispatch(propositionListCountDecrement());
    dispatch({
        type: AUTHORIZATION_ADD_TO_CART_AFTER,
        value: false
    });


    if (getProcessTypesIncludeAssignment(getState())) { //due to NOR-166133
        dispatch(redirectToCart());
        return;
    }


    let propositionListSoftBundleGroup = getPropositionListSoftBundleGroup(getState());

    if (!propositionListSoftBundleGroup &&
        !isProductListPage(getState()) && !isProductDetailsPage(getState()) && !isAccessoryListPage(getState())) {
        dispatch(setPropositionListSoftBundleGroup());
        propositionListSoftBundleGroup = getPropositionListSoftBundleGroup(getState());
    }


    let offerCount = getPropositionListCount(getState());
    let market = getMarketContext(getState());
    const offerType = getSelectedOfferType(getState());
    const process = getSelectedProcessTypeValue(getState());

    //duety lub b2b
    if ((propositionListSoftBundleGroup && propositionListSoftBundleGroup == getSelectedSoftBundleGroup(getState())) &&
        (isProductListPage(getState()) || isProductDetailsPage(getState()) || isAccessoryListPage(getState()))
    ) {
        if (market == "B2B") { //usunąć 1
            OnlineUtils.saveInSessionStorage("dontUseDefaults", true);
        }
        console.log("SoftBundle group for loop matches filter softBundleGroup");
        dispatch(clearPropositionId());
        dispatch(clearLoyaltyLength());
        dispatch(clearProcessType());
        dispatch(clearOfferType());
        if (OnlineUtils.getLastViewedOfferPage() === "/pwa" || market !== "B2B" && [OfferType.DATA].indexOf(offerType) > -1) {
            dispatch(clearPropositionListSoftBundleGroup());
            dispatch(redirectToCart());
        } else {
            if (OnlineUtils.getLastViewedOfferPage() && OnlineUtils.getLastViewedOfferPage() != "") {
                window.location.href = OnlineUtils.getLastViewedOfferPage();
            } else {
                dispatch(redirectToCart());
            }
        }
        return;
    }
    bodyLoaderEvent('modules.loader.hide');

    if (getMarketContext(getState()) == "B2B") {
        if (!propositionListSoftBundleGroup) {
            console.log("Market B2B simcount offerType not set");
            dispatch(redirectToCart());
            return;
        }
        if (propositionListSoftBundleGroup != getSelectedSoftBundleGroup(getState())) {
            console.log("SoftBundle group for loop does not matches filter softBundleGroup");
            dispatch(redirectToCart());
            return;

        }
        dispatch({
            type: CONFACTIONS.USE_DEFAULT_OFFER_TYPE,
            use: false
        });
        dispatch({
            type: CONFACTIONS.USE_DEFAULT_PROCESS,
            use: false
        });
        dispatch({
            type: CONFACTIONS.USE_DEFAULT_LOYALTY,
            use: false
        });
        dispatch({
            type: CONFACTIONS.USE_DEFAULT_OFFER,
            use: false
        });
        if (!OnlineUtils.isMnpApplication(process)) {
            dispatch(clearPropositionId());
            dispatch(clearLoyaltyLength());
            dispatch(clearProcessType());
            dispatch(clearOfferType());
        }
        dispatch(fetchMiniCart());
        dispatch(requestLoggedCustomerData());
        return;
    }
    if ([OfferType.DATA].indexOf(offerType) === -1) {
        if (offerCount == 0 && propositionListSoftBundleGroup && !(isProductListPage(getState()) || isProductDetailsPage(getState()) || isAccessoryListPage(getState()))) {
            dispatch(clearPropositionId());
            dispatch(clearLoyaltyLength());
            dispatch(clearProcessType());
            dispatch(fetchMiniCart());
            dispatch(requestLoggedCustomerData());
            return;
        }

        if (propositionListSoftBundleGroup && !(isProductListPage(getState()) || isProductDetailsPage(getState()) || isAccessoryListPage(getState()))) {
            console.log("getPropositionListSoftBundleGroup(getState()) && !(isProductListPage(getState()) || isProductDetailsPage(getState()))");
            dispatch(fetchMiniCart());
            dispatch(requestLoggedCustomerData());
            return;
        }
    }

    dispatch(clearPropositionListSoftBundleGroup());
    dispatch(redirectToCart());


};
const addToCartError = (selectedOffer, responseData) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.POST_TO_CART_ERROR
    });
    let msg = (responseData.responseJSON && (responseData.responseJSON.message)) || "Wystąpił błąd w trakcie dodania do koszyka";
    bodyLoaderEvent('modules.loader.hide');
    dispatch(showError(msg))
};

const clearVerificationData = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CLEAR_CHECK_MSISDN
    })
};