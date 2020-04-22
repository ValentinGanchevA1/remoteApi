import {
    get,
    poll,
    post,
    postWrap,
    postJson,
    deleteJson,
    postJsonObject,
    postJsonObjectNoResult,
    mock
} from "eshop/flux/utils/OraApiUtils";

const BASE_PATH = "/koszyk/multi";
const DATA_PATH = BASE_PATH + "/_data";
const GET_MINI_CART = "/koszyk/minikoszyk";
const POST_UPDATE_VASES = "/koszyk/updateMobileVases";
const POST_UPDATE_SIM_CARDS = "/koszyk/updateSimCards";
const POST_UPDATE_DEVICES = "/koszyk/updateDevices";
const POST_LOWER_INSTALLMENTS = "/koszyk/lowerInstallments";
const MARK_AS_REPAYMENT = "/koszyk/markAsDebtRepaymentAccepted";
const UPDATE_FIX_CART_PRODUCTS = "/fix/cart/updateProducts";
const UPDATE_CONVERGENT_CART_PRODUCTS = "/multiCart/configurables";
const REMOVE_DEVICE_FROM_SIMFREE = "/koszyk/removeDeviceFromSimFreeBundle";
const MOBILE_VASES_PATH = "/vases/getVases";
const FIX_CONFIGURABLES_PATH = "/fix/cart/data/configurables";
const CONVERGENT_CONFIGURABLES_PATH = "/multiCart/configurables";
const MOBILE_RESOURCES_MSISDN_PATH = "/resources/msisdns";
const MOBILE_RESOURCES_SIM_CARDS_PATH = "/resources/simcards";
const MOBILE_RESOURCES_MSISDN_CHANGE_PATH = "/resources/msisdn";
const PICKUP_GET_MINI_CART = "/pickup/minicart";
const CHECK_CART_MANUAL_STATUS_FINISH = "/koszyk/additional/manual/isFinish";
const GET_CART_MANUAL_VERIFICATION_STATUS = "/koszyk/additional/manual/getStatus";
const VOUCHER_GET_ENTRIES = "/voucher/getEntries";
const VOUCHER_RESERVE = "/voucher/reserveVoucher";
const VOUCHER_REMOVE = "/voucher/removeVoucher";
const CREATE_NEW_CART_PATH = "/multiCart/new";
const CHANGE_ASSIGN_PAYMENT_PLANS = "/assignment/changeAssignPaymentPlans";
const GET_CART_KDR_DATA = "/kdr/getCartKdrData";
const SAVE_KDR_DATA = "/kdr/saveKdrData";
const REMOVE_CART_BY_OMNI_CODE = "/koszyk/removeByOmniCode";
const HALT_CART = "/multiCart/halt";
const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
const prepareSecureUrls = (url) => prepareUrl(url);

export default {
    getCart: () => get(prepareUrl(DATA_PATH + "/cart")),
    getOrder: () => get(prepareUrl(DATA_PATH + "/pickupOrder")),
    getMiniCart: (availableProductsKeys) => get(prepareUrl(GET_MINI_CART), {
        "availableProductsKeys[]": availableProductsKeys
    }),
    removeFromCart: (data = '', id = null) => {
        let url = "/koszyk/usun" + ((id !== null) ? '/' + id : '');
        return postJsonObject(url, data);
    },
    markAsRepayment: () => get(prepareUrl(MARK_AS_REPAYMENT)),
    removeTerminalFromCartBundle: (data = '', id = null) => {
        // @TODO here should be the REST call, that will remove the terminal from bundle.
        console.log('Expected the rest call here.');
    },

    removeDeviceFromSimfreeBundle: (bundleNo = 1, entryNo = null, lastOne = false) => {
        return postJson(prepareUrl(REMOVE_DEVICE_FROM_SIMFREE), {
            bundleNo: bundleNo,
            entryNumber: entryNo,
            lastOne: lastOne
        });
    },


    removeCartByOmniCode: (omniCode) => {
        return deleteJson(prepareUrl(REMOVE_CART_BY_OMNI_CODE) + '/' + omniCode);
    },
    removeMagnumFromMultiCart: (bundleNos) => {
        let url = bsfContextPath + "/multiCart/remove";
        return postJsonObjectNoResult(url, bundleNos);
    },

    removeTerminalFromConvergentCartBundle: (bundleNo, terminalCode) => {
        let url = bsfContextPath + "/multiCart/removeTerminal";
        return post(url, {
            bundleNo: bundleNo,
            terminalCode: terminalCode
        });
    },

    goToOrangeLove4DLandingPage: () => {
        document.location.href = bsfContextPath + "/orangeLove4D";
    },

    goToOrangeLove2DLandingPage: () => {
        document.location.href = bsfContextPath + "/orangeLove2D";
    },

    goToOrangeLoveLTE4FIXLandingPage: () => {
        document.location.href = bsfContextPath + "/orangeLoveLTE4FIX";
    },

    getMobileVases: (propositionId = '', bundle = '', process = '') => {
        return get(prepareUrl(MOBILE_VASES_PATH), {
            propositionId: propositionId,
            bundle: bundle,
            process: process
        });
    },
    getFixConfigurables: (cartBundle = '') => {
        return get(prepareSecureUrls(FIX_CONFIGURABLES_PATH), {
            cartBundle: cartBundle
        });
    },
    getConvergentConfigurables: (bundleNos = []) => {
        return get(
            prepareSecureUrls(CONVERGENT_CONFIGURABLES_PATH), {
                bundleNos: bundleNos.join(",")
            }
        );
    },
    postUpdateFixCartProducts: (bundle, offer, cartBundle, products) => {
        return postJson(prepareSecureUrls(UPDATE_FIX_CART_PRODUCTS), {
            bundle: bundle,
            cartBundle: cartBundle,
            offer: offer,
            products: products
        });
    },
    postUpdateCartVases: (bundle, offer, cartBundle, productsToRemove, productsToAdd) => {
        return postJson(prepareUrl(POST_UPDATE_VASES), {
            bundle: bundle,
            cartBundle: cartBundle,
            offer: offer,
            productsToRemove: productsToRemove,
            productsToAdd: productsToAdd
        });
    },
    postUpdateCartSimCards: (bundle, offer, cartBundle, productsToRemove, productsToAdd) => {
        return postJson(prepareUrl(POST_UPDATE_SIM_CARDS), {
            bundle: bundle,
            cartBundle: cartBundle,
            offer: offer,
            productsToRemove: productsToRemove,
            productsToAdd: productsToAdd
        });
    },
    postUpdateConvergentCartProducts: (products) => {
        return postJsonObject(prepareSecureUrls(UPDATE_CONVERGENT_CART_PRODUCTS), products)
    },
    postUpdateCartDevices: (bundle, offer, cartBundle, productsToRemove, productsToAdd) => {
        return postJson(prepareUrl(POST_UPDATE_DEVICES), {
            bundle: bundle,
            cartBundle: cartBundle,
            offer: offer,
            productsToRemove: productsToRemove,
            productsToAdd: productsToAdd
        });
    },
    postLowerInstallments: (bundleNo, diff, market) => {
        return postJson(prepareUrl(POST_LOWER_INSTALLMENTS), {
            bundleNo: bundleNo,
            diff: diff,
            market: market,
        });
    },
    getMsisdns: (bundleNo) => get(prepareUrl(MOBILE_RESOURCES_MSISDN_PATH), {
        bundleNo
    }),
    getSimCards: (bundleNo) => get(prepareUrl(MOBILE_RESOURCES_SIM_CARDS_PATH), {
        bundleNo
    }),
    changeMsisdn: (msisdn, bundleNo) => post(prepareUrl(MOBILE_RESOURCES_MSISDN_CHANGE_PATH), {
        msisdn,
        bundleNo
    }),
    checkManualVerificationIsFinish: (requestCount, intervalBetweenRequests) =>
        get(prepareUrl(CHECK_CART_MANUAL_STATUS_FINISH))
        .then((response) => {
            if (!response) {
                return poll(prepareUrl(CHECK_CART_MANUAL_STATUS_FINISH),
                    null,
                    r => r === true,
                    requestCount,
                    intervalBetweenRequests);
            }
        }),
    getManualVerificationStatus: () => get(prepareUrl(GET_CART_MANUAL_VERIFICATION_STATUS)),
    getPickupMiniCart: () => get(prepareUrl(PICKUP_GET_MINI_CART)),

    findApplicableProducts: (code) => get(prepareUrl(VOUCHER_GET_ENTRIES), {
        code
    }),
    applyVoucher: (voucherCode, product) => postJsonObject(prepareUrl(VOUCHER_RESERVE), {
        voucherCode,
        ...product
    }),
    removeVoucher: (entryNo, bundleNo, voucherSubType = null, voucher = null) => postJsonObject(prepareUrl(VOUCHER_REMOVE), {
        entryNo,
        bundleNo,
        voucherSubType,
        voucher
    }),
    changeAssignPaymentPlans: (isPaymentPlanAssigned, bundleNo) => get(prepareUrl(CHANGE_ASSIGN_PAYMENT_PLANS), {
        isPaymentPlanAssigned,
        bundleNo
    }),
    createNewCart: () => {
        return post(CREATE_NEW_CART_PATH, '');
    },
    getKdrDataFromCart: () => get(prepareUrl(GET_CART_KDR_DATA)),
    saveKdrData: (kdrData) => postJsonObject(prepareUrl(SAVE_KDR_DATA), kdrData),
    haltCart: () => postWrap(prepareUrl(HALT_CART))
};