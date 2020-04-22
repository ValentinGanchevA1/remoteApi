define(["exports", "eshop/flux/utils/OraApiUtils"], function(_exports, _OraApiUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

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

    var BASE_PATH = "/koszyk/multi";
    var DATA_PATH = BASE_PATH + "/_data";
    var GET_MINI_CART = "/koszyk/minikoszyk";
    var POST_UPDATE_VASES = "/koszyk/updateMobileVases";
    var POST_UPDATE_SIM_CARDS = "/koszyk/updateSimCards";
    var POST_UPDATE_DEVICES = "/koszyk/updateDevices";
    var POST_LOWER_INSTALLMENTS = "/koszyk/lowerInstallments";
    var MARK_AS_REPAYMENT = "/koszyk/markAsDebtRepaymentAccepted";
    var UPDATE_FIX_CART_PRODUCTS = "/fix/cart/updateProducts";
    var UPDATE_CONVERGENT_CART_PRODUCTS = "/multiCart/configurables";
    var REMOVE_DEVICE_FROM_SIMFREE = "/koszyk/removeDeviceFromSimFreeBundle";
    var MOBILE_VASES_PATH = "/vases/getVases";
    var FIX_CONFIGURABLES_PATH = "/fix/cart/data/configurables";
    var CONVERGENT_CONFIGURABLES_PATH = "/multiCart/configurables";
    var MOBILE_RESOURCES_MSISDN_PATH = "/resources/msisdns";
    var MOBILE_RESOURCES_SIM_CARDS_PATH = "/resources/simcards";
    var MOBILE_RESOURCES_MSISDN_CHANGE_PATH = "/resources/msisdn";
    var PICKUP_GET_MINI_CART = "/pickup/minicart";
    var CHECK_CART_MANUAL_STATUS_FINISH = "/koszyk/additional/manual/isFinish";
    var GET_CART_MANUAL_VERIFICATION_STATUS = "/koszyk/additional/manual/getStatus";
    var VOUCHER_GET_ENTRIES = "/voucher/getEntries";
    var VOUCHER_RESERVE = "/voucher/reserveVoucher";
    var VOUCHER_REMOVE = "/voucher/removeVoucher";
    var CREATE_NEW_CART_PATH = "/multiCart/new";
    var CHANGE_ASSIGN_PAYMENT_PLANS = "/assignment/changeAssignPaymentPlans";
    var GET_CART_KDR_DATA = "/kdr/getCartKdrData";
    var SAVE_KDR_DATA = "/kdr/saveKdrData";
    var REMOVE_CART_BY_OMNI_CODE = "/koszyk/removeByOmniCode";
    var HALT_CART = "/multiCart/halt";

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var prepareSecureUrls = function prepareSecureUrls(url) {
        return prepareUrl(url);
    };

    var _default = {
        getCart: function getCart() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/cart"));
        },
        getOrder: function getOrder() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/pickupOrder"));
        },
        getMiniCart: function getMiniCart(availableProductsKeys) {
            return (0, _OraApiUtils.get)(prepareUrl(GET_MINI_CART), {
                "availableProductsKeys[]": availableProductsKeys
            });
        },
        removeFromCart: function removeFromCart() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var url = "/koszyk/usun" + (id !== null ? '/' + id : '');
            return (0, _OraApiUtils.postJsonObject)(url, data);
        },
        markAsRepayment: function markAsRepayment() {
            return (0, _OraApiUtils.get)(prepareUrl(MARK_AS_REPAYMENT));
        },
        removeTerminalFromCartBundle: function removeTerminalFromCartBundle() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            // @TODO here should be the REST call, that will remove the terminal from bundle.
            console.log('Expected the rest call here.');
        },
        removeDeviceFromSimfreeBundle: function removeDeviceFromSimfreeBundle() {
            var bundleNo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var entryNo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var lastOne = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            return (0, _OraApiUtils.postJson)(prepareUrl(REMOVE_DEVICE_FROM_SIMFREE), {
                bundleNo: bundleNo,
                entryNumber: entryNo,
                lastOne: lastOne
            });
        },
        removeCartByOmniCode: function removeCartByOmniCode(omniCode) {
            return (0, _OraApiUtils.deleteJson)(prepareUrl(REMOVE_CART_BY_OMNI_CODE) + '/' + omniCode);
        },
        removeMagnumFromMultiCart: function removeMagnumFromMultiCart(bundleNos) {
            var url = bsfContextPath + "/multiCart/remove";
            return (0, _OraApiUtils.postJsonObjectNoResult)(url, bundleNos);
        },
        removeTerminalFromConvergentCartBundle: function removeTerminalFromConvergentCartBundle(bundleNo, terminalCode) {
            var url = bsfContextPath + "/multiCart/removeTerminal";
            return (0, _OraApiUtils.post)(url, {
                bundleNo: bundleNo,
                terminalCode: terminalCode
            });
        },
        goToOrangeLove4DLandingPage: function goToOrangeLove4DLandingPage() {
            document.location.href = bsfContextPath + "/orangeLove4D";
        },
        goToOrangeLove2DLandingPage: function goToOrangeLove2DLandingPage() {
            document.location.href = bsfContextPath + "/orangeLove2D";
        },
        goToOrangeLoveLTE4FIXLandingPage: function goToOrangeLoveLTE4FIXLandingPage() {
            document.location.href = bsfContextPath + "/orangeLoveLTE4FIX";
        },
        getMobileVases: function getMobileVases() {
            var propositionId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var bundle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            return (0, _OraApiUtils.get)(prepareUrl(MOBILE_VASES_PATH), {
                propositionId: propositionId,
                bundle: bundle,
                process: process
            });
        },
        getFixConfigurables: function getFixConfigurables() {
            var cartBundle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            return (0, _OraApiUtils.get)(prepareSecureUrls(FIX_CONFIGURABLES_PATH), {
                cartBundle: cartBundle
            });
        },
        getConvergentConfigurables: function getConvergentConfigurables() {
            var bundleNos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return (0, _OraApiUtils.get)(prepareSecureUrls(CONVERGENT_CONFIGURABLES_PATH), {
                bundleNos: bundleNos.join(",")
            });
        },
        postUpdateFixCartProducts: function postUpdateFixCartProducts(bundle, offer, cartBundle, products) {
            return (0, _OraApiUtils.postJson)(prepareSecureUrls(UPDATE_FIX_CART_PRODUCTS), {
                bundle: bundle,
                cartBundle: cartBundle,
                offer: offer,
                products: products
            });
        },
        postUpdateCartVases: function postUpdateCartVases(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
            return (0, _OraApiUtils.postJson)(prepareUrl(POST_UPDATE_VASES), {
                bundle: bundle,
                cartBundle: cartBundle,
                offer: offer,
                productsToRemove: productsToRemove,
                productsToAdd: productsToAdd
            });
        },
        postUpdateCartSimCards: function postUpdateCartSimCards(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
            return (0, _OraApiUtils.postJson)(prepareUrl(POST_UPDATE_SIM_CARDS), {
                bundle: bundle,
                cartBundle: cartBundle,
                offer: offer,
                productsToRemove: productsToRemove,
                productsToAdd: productsToAdd
            });
        },
        postUpdateConvergentCartProducts: function postUpdateConvergentCartProducts(products) {
            return (0, _OraApiUtils.postJsonObject)(prepareSecureUrls(UPDATE_CONVERGENT_CART_PRODUCTS), products);
        },
        postUpdateCartDevices: function postUpdateCartDevices(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
            return (0, _OraApiUtils.postJson)(prepareUrl(POST_UPDATE_DEVICES), {
                bundle: bundle,
                cartBundle: cartBundle,
                offer: offer,
                productsToRemove: productsToRemove,
                productsToAdd: productsToAdd
            });
        },
        postLowerInstallments: function postLowerInstallments(bundleNo, diff, market) {
            return (0, _OraApiUtils.postJson)(prepareUrl(POST_LOWER_INSTALLMENTS), {
                bundleNo: bundleNo,
                diff: diff,
                market: market
            });
        },
        getMsisdns: function getMsisdns(bundleNo) {
            return (0, _OraApiUtils.get)(prepareUrl(MOBILE_RESOURCES_MSISDN_PATH), {
                bundleNo: bundleNo
            });
        },
        getSimCards: function getSimCards(bundleNo) {
            return (0, _OraApiUtils.get)(prepareUrl(MOBILE_RESOURCES_SIM_CARDS_PATH), {
                bundleNo: bundleNo
            });
        },
        changeMsisdn: function changeMsisdn(msisdn, bundleNo) {
            return (0, _OraApiUtils.post)(prepareUrl(MOBILE_RESOURCES_MSISDN_CHANGE_PATH), {
                msisdn: msisdn,
                bundleNo: bundleNo
            });
        },
        checkManualVerificationIsFinish: function checkManualVerificationIsFinish(requestCount, intervalBetweenRequests) {
            return (0, _OraApiUtils.get)(prepareUrl(CHECK_CART_MANUAL_STATUS_FINISH)).then(function(response) {
                if (!response) {
                    return (0, _OraApiUtils.poll)(prepareUrl(CHECK_CART_MANUAL_STATUS_FINISH), null, function(r) {
                        return r === true;
                    }, requestCount, intervalBetweenRequests);
                }
            });
        },
        getManualVerificationStatus: function getManualVerificationStatus() {
            return (0, _OraApiUtils.get)(prepareUrl(GET_CART_MANUAL_VERIFICATION_STATUS));
        },
        getPickupMiniCart: function getPickupMiniCart() {
            return (0, _OraApiUtils.get)(prepareUrl(PICKUP_GET_MINI_CART));
        },
        findApplicableProducts: function findApplicableProducts(code) {
            return (0, _OraApiUtils.get)(prepareUrl(VOUCHER_GET_ENTRIES), {
                code: code
            });
        },
        applyVoucher: function applyVoucher(voucherCode, product) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(VOUCHER_RESERVE), _objectSpread({
                voucherCode: voucherCode
            }, product));
        },
        removeVoucher: function removeVoucher(entryNo, bundleNo) {
            var voucherSubType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var voucher = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(VOUCHER_REMOVE), {
                entryNo: entryNo,
                bundleNo: bundleNo,
                voucherSubType: voucherSubType,
                voucher: voucher
            });
        },
        changeAssignPaymentPlans: function changeAssignPaymentPlans(isPaymentPlanAssigned, bundleNo) {
            return (0, _OraApiUtils.get)(prepareUrl(CHANGE_ASSIGN_PAYMENT_PLANS), {
                isPaymentPlanAssigned: isPaymentPlanAssigned,
                bundleNo: bundleNo
            });
        },
        createNewCart: function createNewCart() {
            return (0, _OraApiUtils.post)(CREATE_NEW_CART_PATH, '');
        },
        getKdrDataFromCart: function getKdrDataFromCart() {
            return (0, _OraApiUtils.get)(prepareUrl(GET_CART_KDR_DATA));
        },
        saveKdrData: function saveKdrData(kdrData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(SAVE_KDR_DATA), kdrData);
        },
        haltCart: function haltCart() {
            return (0, _OraApiUtils.postWrap)(prepareUrl(HALT_CART));
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map