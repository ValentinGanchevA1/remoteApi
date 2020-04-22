define(["exports", "../../flux/utils/OraApiUtils", "eshop/utils/OnlineUtils", "jquery", "lodash"], function(t, r, o, i, u) {
    "use strict";

    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = t.prepareUrl = void 0, o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u);

    function n(t) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + t
    }
    var a = "/koszyk/multi/_data";
    t.prepareUrl = n;

    function s(t, e, n) {
        return function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach(function(t) {
                    babelHelpers.defineProperty(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }({
            deliveryMethodCode: t,
            fiscalCharacterization: e
        }, o.default.getComponentKeyObject(n))
    }
    var p = (0, i.default)("#consentsComponentId").val(),
        l = {
            statusCode: {
                403: function() {
                    location.reload()
                }
            },
            headers: {
                CSRFToken: (0, i.default)("#CSRFToken").val()
            },
            cache: !1
        },
        e = {
            getConsentsData: function(t, e) {
                return (0, r.get)(n(a + "/consents"), s(t, e, p))
            },
            getCartConsents: function() {
                return (0, r.get)(n(a + "/consents/cart"))
            },
            recalculateConsentFromStrategy: function(t, e) {
                return (0, r.get)(n(a + "/recalculateStrategy/consent/" + t + "/" + e))
            },
            requestRecalculateConsentsForForeigner: function(t) {
                return (0, r.get)(n(a + "/recalculateStrategy/foreigner/consent/" + t))
            },
            updateCartConsents: function(t) {
                return (0, r.postJsonObject)(n(a + "/consents/modifyConsentsInCart/" + p), t)
            },
            getCartCustomer: function() {
                return (0, r.get)(n(a + "/customer"))
            },
            getCustomer: function() {
                return (0, r.get)(n("/customer/details"))
            },
            getCartRepresentative: function() {
                return (0, r.get)(n(a + "/representative"))
            },
            getCartDelivery: function() {
                return (0, r.get)(n(a + "/delivery/availableMethods"))
            },
            getCartDeliveryData: function() {
                return (0, r.get)(n(a + "/delivery"))
            },
            getInstallationAvailableTimeSlots: function(t, e) {
                var n = {
                    earlierInstallationConsentAccepted: t,
                    documentsDeliveryMode: e
                };
                return (0, r.get)(a + "/installation/availableTimeSlots", n)
            },
            getCartPayment: function() {
                return (0, r.get)(n(a + "/payment"))
            },
            updateCartPayment: function(t) {
                return (0, r.postJsonObject)(n(a + "/payment"), t)
            },
            updateCustomerSignedDocuments: function(t) {
                return (0, r.get)(a + "/customerSignedDocuments/" + t)
            },
            getCartMnpData: function() {
                return (0, r.get)(n(a + "/mnp"))
            },
            doCheckoutStep: function(t) {
                return (0, r.postJsonObject)(n(window.location.pathname), t)
            },
            doCheckoutAsyncStep: function(t) {
                return (0, r.postJsonObject)(window.location.pathname + "/async", t)
            },
            doSaveCheckoutData: function(t) {
                return (0, r.postJsonObject)(n(window.location.pathname) + "/saveData", t)
            },
            fetchNearestPointsOfSale: function(t) {
                return (0, r.get)("".concat(contextPath, "/checkout/pickup/nearest"), t)
            },
            fetchPOSPickupCities: function() {
                return (0, r.get)("".concat(contextPath, "/hapi/pickup/cities"))
            },
            fetchPOSPickupAvailability: function(t) {
                var e = {
                    town: t
                };
                return (0, r.get)("".concat(contextPath, "/hapi/pickup/pointofservice"), e)
            },
            getLastSelectedPos: function() {
                return (0, r.get)(n("/pickup/lastSelectedPos"))
            },
            reloadSummaryOnCart: function(t) {
                return (0, r.postJsonObject)(n(a + "/cart/reloadSummary"), t)
            },
            fetchCvDocumentList: function() {
                return (0, r.get)(n(a + "/customer/getAdditionalDocuments"))
            },
            getBpgData: function(t) {
                return (0, r.get)(n(a + "/customer/bpg?nip=" + t))
            },
            getZipCodeFromWWT: function(t, e, n) {
                var r = {
                    placeId: t,
                    streetId: e,
                    streetNumber: n
                };
                return i.default.ajax(u.default.extend({}, l, {
                    url: bsfContextPath + "/wwt/streetZips",
                    data: r,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    type: "get"
                }))
            },
            validateZipCode: function(t, e, n, r) {
                var o = {
                    postalCode: t,
                    placeId: e,
                    streetId: n,
                    streetNumber: r
                };
                return i.default.ajax(u.default.extend({}, l, {
                    url: bsfContextPath + "/wwt/validateZip",
                    data: o,
                    dataType: "json",
                    contentType: "application/json; charset=utf-8",
                    type: "get"
                }))
            },
            getSelectedWwtAddress: function() {
                return (0, r.get)(bsfContextPath + "/wwt/selectedAddress", {})
            },
            getFutureInvestmentAddress: function() {
                return (0, r.get)("/fix/lead/address", {})
            },
            getFutureInvestmentConsent: function() {
                return (0, r.get)("/consent/futureInvestment", {})
            },
            getFutureInvestmentOffers: function() {
                return (0, r.get)("/offers/futureInvestment", {})
            },
            registerLead: function(t) {
                return (0, r.postJsonObject)("/fix/lead", t)
            },
            getDocumentCode: function(t) {
                return (0, r.get)("/documents/getDocumentForConsentFix?consentCodes=" + t)
            },
            selectApu: function(t) {
                var e = {
                    apuOption: t
                };
                return (0, r.post)(bsfContextPath + "/fix/apu/select", e)
            },
            updateBillingAccount: function(t) {
                return (0, r.postJsonObjectNoResult)(a + "/customerBillingAccount/update", t)
            },
            getBillingAccountContracts: function(t) {
                return (0, r.get)(a + "/customerBillingAccount/getAccountContracts?accountId=" + t)
            },
            setNewBillingAccount: function(t) {
                return (0, r.postJsonObjectNoResult)(a + "/customerBillingAccount/new", t)
            },
            getBillingAccount: function() {
                return (0, r.get)(a + "/customerBillingAccount")
            },
            getPosSimCardsTypes: function() {
                return (0, r.get)(n("/simCard/getSimCardTypes"))
            },
            updateSerialNumbers: function(t) {
                return (0, r.postJsonObject)("/pickup/serialnumbers", t)
            },
            cancleGoodsOrder: function() {
                return (0, r.put)("/pickup/cancel")
            },
            getSerialNumbers: function() {
                return (0, r.get)("/pickup/serialnumbers")
            },
            clearSessionData: function() {
                return (0, r.get)(a + "/customer/clearSessionData")
            },
            getWarehouseSerialNumbers: function() {
                return (0, r.get)("/pickup/warehouseserialnumbers")
            },
            getPickupDocuments: function() {
                return (0, r.get)("/pickup/documents")
            },
            getSimCardTypes: function(t) {
                var e = bsfContextPath + "/simCard/getSimCardTypes";
                return (0, r.get)(e, {
                    configurationId: t
                })
            },
            verifySerialNumbers: function(t) {
                return (0, r.postJsonObject)("/goodsOrders/serialNumbers", t)
            },
            getSapFioriLinks: function(t) {
                var e = "/goodsOrders/fioriLinks/" + t;
                return (0, r.get)(e)
            },
            getFioriCorrectiveInvoiceLink: function() {
                return (0, r.get)("/goodsOrders/fioriCorrectiveInvoiceLink")
            },
            unlockSale: function(t) {
                var e = "/goodsOrders/unlockSale/" + t;
                return (0, r.put)(e, "")
            },
            checkUnlockSaleInSapStatus: function(t) {
                var e = "/goodsOrders/unlockSale/status/" + t;
                return (0, r.get)(e, "")
            },
            paymentAndFiscalization: function(t) {
                var e = "/goodsOrders/paymentAndFiscalization/" + t;
                return (0, r.get)(e)
            },
            cancelOrder: function(t) {
                var e = "/goodsOrders/cancelOrder/" + t;
                return (0, r.put)(e)
            },
            checkPaymentStatus: function(t) {
                var e = "/goodsOrders/paymentStatus/" + t;
                return (0, r.get)(e)
            },
            printOrderNumber: function(t) {
                var e = "/goodsOrders/checkoutPaymentPrintout/" + t;
                return (0, r.getPdf)(e)
            },
            printInvoiceNumber: function(t) {
                var e = "/goodsOrders/invoicePrintout/" + t;
                return (0, r.getPdf)(e)
            },
            getAssistModeState: function() {
                return (0, r.get)("/assist/state")
            },
            getAssistModeEmployeeList: function(t) {
                return (0, r.get)("/employee/list", t)
            },
            setAssistEmployee: function(t) {
                return (0, r.post)("/assist/enter", t)
            },
            leaveAssistMode: function() {
                return (0, r.post)("/assist/leave")
            },
            updateCheckoutCart: function(t) {
                return (0, r.postJsonObject)(n(a + "/updateDeliveryMethod"), t)
            },
            updateInstallationInfoOnCart: function(t) {
                return (0, r.postJsonObject)(n(a + "/updateInstallationInfoMethod"), t)
            },
            confirmReplanishment: function() {
                return (0, r.put)(n("/pickup/replanishment"))
            },
            setPickupPosId: function(t) {
                (0, r.post)("".concat(contextPath, "/view/OraPickupPosMapsComponentController/setPosId"), {
                    pos: t
                })
            },
            pickupActivation: function() {
                return (0, r.put)("/pickup/activation")
            },
            getLastOrder: function() {
                return (0, r.get)("/pickup/lastOrderData")
            },
            updateConsents: function(t) {
                return (0, r.postJsonObject)(a + "/updateConsentsStates", t)
            },
            pickupCompletion: function() {
                return (0, r.get)("/pickup/pickupCompletion")
            },
            getPickupPaymentStatus: function(t) {
                var e = {
                    forced: t
                };
                return (0, r.get)("/pickup/paymentStatus", e)
            },
            prepareDocumentsToZip: function() {
                return (0, r.get)(n("/pickup/prepareToZip")).then(function() {
                    return (0, r.poll)(n("/pickup/readyToZip"), null, function(t) {
                        return !0 === t
                    })
                })
            },
            getZipDocumentsUrl: function() {
                return "/pickup/zip"
            },
            getParcelLockerList: function(t) {
                var e = {
                    town: t
                };
                return (0, r.get)("".concat(contextPath, "/hapi/parcel/get"), e)
            },
            getParcelLockerCityList: function(t) {
                var e = {
                    town: t.toUpperCase()
                };
                return (0, r.get)("".concat(contextPath, "/hapi/parcel/get/cities"), e)
            },
            getLastSelectedParcelLocker: function() {
                return (0, r.get)("".concat(contextPath, "/hapi/parcel/lastSelectedPos"))
            },
            setPosId: function(t) {
                var e = {
                    pos: t
                };
                (0, r.post)("".concat(contextPath, "/view/OraParcelLockerMapsComponentController/setPosId"), e)
            },
            updateSelectedPOSAvailabilityStatus: function(t) {
                var e = {
                    status: t
                };
                return (0, r.get)(n("/pickup/posAvailability"), e)
            },
            updateSimCard: function(t, e) {
                return (0, r.postJson)(bsfContextPath + "/koszyk/updateSimCard", {
                    bundleNo: t,
                    baseSimCardCode: e
                })
            },
            postFbbServiceData: function(t, e) {
                return (0, r.post)(n("/fbbServices/serviceData"), {
                    designationNumber: t,
                    serviceInstanceId: e
                })
            },
            getFBBServiceData: function() {
                return (0, r.get)(n("/fbbServices/fixAddressWithServices"))
            },
            getFBBServiceDataFilteredByWWT: function() {
                return (0, r.get)(n("/fbbServices/fixAddressFilteredByWWTWithServices"))
            },
            refreshFixCartWithoutFbbCheck: function() {
                return (0, r.post)(n("/fbbServices/refreshFixCartWithoutFBBCheck"))
            },
            getDocumentApprovements: function() {
                return (0, r.get)(n(a + "/documentApprovement"))
            },
            updateDocumentApprovement: function(t, e) {
                return (0, r.postJsonObject)(n(a + "/documentApprovement/".concat(e)), t)
            },
            getIdVerificationResult: function() {
                return (0, r.get)(n(a + "/idVerification/result"))
            },
            getIdVerificationBanks: function() {
                return (0, r.get)(n(a + "/idVerification/banks"))
            },
            updateIdVerificationBank: function(t) {
                return (0, r.postJsonObject)(n(a + "/idVerification/bank"), {
                    id: t
                })
            },
            requestIdVerification: function() {
                return (0, r.post)(n(a + "/idVerification/request"), null)
            }
        };
    t.default = e
});
//# sourceMappingURL=remoteApi.js.map