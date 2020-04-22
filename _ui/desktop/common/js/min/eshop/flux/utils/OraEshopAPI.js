define(["exports", "eshop/flux/actions/OraActions", "eshop/flux/utils/OraApiUtils", "jquery"], function(e, l, f, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), u = babelHelpers.interopRequireDefault(u);
    var t = function(a) {
        function n(e) {
            var t = (0, u.default)("#availableProductsKey").val();
            return u.default.extend(t ? {
                availableProductsKey: t
            } : {}, e)
        }

        function c(e, t, r, n, a, o, s) {
            var u = t.map(function(e) {
                    return e.id
                }),
                d = {
                    bundle: e.id,
                    offer: e.rateplanId,
                    services: u,
                    products: r,
                    process: a,
                    deviceVariant: o,
                    numberVerificationData: JSON.stringify(s)
                };
            return Object.assign(d, n ? {
                msisdn: n
            } : {})
        }
        a.getOffers = function(e, t) {
            var r = bsfContextPath + "/offersList/offers?";
            return (0, f.get)(r, u.default.extend(n(e), {
                msisdn: t
            })).then(l.default.server.loadedOffers).catch(l.default.error.getOffers)
        }, a.getOrderDataNumber = function() {
            var e = bsfContextPath + "/order/placedOrderSummary";
            return (0, f.get)(e).then(l.default.server.loadedOrderNumber)
        }, a.getFilters = function(e) {
            var t = bsfContextPath + "/filters/getFilters";
            return (0, f.get)(t, n(e)).then(l.default.server.loadedFilters)
        }, a.getServices = function(e, t, r) {
            var n = bsfContextPath + "/vases/getVases",
                a = {
                    propositionId: e,
                    bundle: t,
                    process: r
                };
            return (0, f.get)(n, a).then(l.default.server.loadedServices)
        }, a.getSimCards = function(e, t) {
            var r = bsfContextPath + "/simCard/getSimCards",
                n = {
                    propositionId: e,
                    processType: t,
                    minimumStockLevel: (0, u.default)("#minimumSimCardStockLevel").val()
                };
            return (0, f.get)(r, n).then(l.default.server.loadedSimCards)
        }, a.getSimCardTypes = function() {
            var e = bsfContextPath + "/simCard/getSimCardTypes";
            return (0, f.get)(e).then(l.default.server.loadedSimCardTypes).catch(l.default.error.getSimCardTypesError)
        }, a.validateSimCards = function(e) {
            var t = bsfContextPath + "/simCard/addSimCardsToCart";
            return (0, f.postJsonObject)(t, e).then(l.default.server.validateResult)
        }, a.validateSimAndImei = function(e, t) {
            var r = bsfContextPath + "/MobileResources/addSimImeiToCart";
            return (0, f.postJsonObject)(r, {
                simList: e,
                imeiList: t
            }).then(l.default.server.validateResult)
        }, a.getMsisdnList = function(e, t) {
            var r = bsfContextPath + "/resources/msisdn/getMSISDNs";
            return (0, f.postJson)(r, {
                number: e,
                pattern: t
            }).then(l.default.server.loadedMsisdnList)
        }, a.checkMsisdnType = function(e) {
            var t = bsfContextPath + "/resources/msisdn/checkMSISDNType";
            return (0, f.postJson)(t, {
                number: e
            }).then(l.default.server.checkedMsisdnType)
        }, a.verifyNumber = function(e, t) {
            var r = bsfContextPath + "/resources/msisdn/verifyNumber";
            return (0, f.postJson)(r, {
                number: e,
                processType: t
            }).then(l.default.server.verifiedNumber).catch(l.default.error.verifyNumber)
        }, a.releaseMsisdnList = function(e) {
            var t = bsfContextPath + "/resources/msisdn/unreserve";
            return e && 0 !== e.length ? (0, f.post)(t, {
                msisdnList: e
            }).then(l.default.server.releasedMsisdnList) : Promise.resolve()
        }, a.rerollMsisdnList = function(e, t, r) {
            return this.getMsisdnList(e, t).then(this.releaseMsisdnList.bind(this, r))
        }, a.searchMsisdnList = function(e, t, r) {
            return this.releaseMsisdnList(r).then(this.getMsisdnList.bind(this, e, t))
        }, a.reserveMsisdn = function(e) {
            var t = bsfContextPath + "/resources/msisdn/reserve";
            return (0, f.postJson)(t, {
                msisdn: e
            }).then(l.default.server.reservedMsisdn).catch(l.default.error.reserveMsisdn)
        }, a.getCart = function(e) {
            var t = bsfContextPath + "/koszyk/minikoszyk";
            return (0, f.get)(t, {
                id: e
            }).then(l.default.server.loadedCart)
        }, a.getTelesalesCampaignData = function() {
            var e = bsfContextPath + "/telesales/campaign/data";
            return (0, f.get)(e).then(l.default.server.loadedCampaignData)
        }, a.addToCart = function(e, t, r, n, a, o, s, u) {
            var d = bsfContextPath + "/koszyk/dodaj";
            return (0, f.postJson)(d, c(e, t, r, n, a, o, s)).then(l.default.server.addedToCart).catch(l.default.error.addToCart)
        }, a.changeOffer = function(e, t, r, n, a, o, s, u, d) {
            var i = bsfContextPath + "/koszyk/change/" + e;
            return (0, f.postJson)(i, c(t, r, n, a, o, s, u)).then(l.default.server.addedToCart).catch(l.default.error.addToCart)
        }, a.doCheckoutStep = function(e) {
            var t = bsfContextPath + (0, u.default)("#currentCheckoutStepUrl").val();
            return (0, f.postJsonObject)(t, e).then(l.default.server.checkoutStepDone).catch(l.default.error.checkoutStepError)
        }, a.saveCheckoutStep = function(e) {
            var t = bsfContextPath + (0, u.default)("#currentCheckoutStepUrl").val() + "/zapisz";
            return (0, f.postJsonObject)(t, e).then(l.default.server.checkoutStepSaved)
        }, a.calculatePrice = function(e, t, r, n, a) {
            var o = bsfContextPath + "/koszyk/oblicz";
            return (0, f.postJson)(o, c(e, t, r, null, n, a, null)).then(l.default.server.priceCalculated).catch(l.default.error.calculatePrice)
        }, a.calculateCart = function() {
            var e = bsfContextPath + "/koszyk/przelicz";
            return (0, f.get)(e).then(l.default.server.cartCalculated)
        }, a.changeDevice = function(e, t, r) {
            document.location.href = e + "?propositionId=" + t + "&from=" + encodeURIComponent(r)
        }, a.gotoDeviceDetailsPage = function(e, t, r) {
            document.location.href = e + "?variantId=" + t + "&from=" + encodeURIComponent(r)
        }, a.getConsent = function(e) {
            var t = bsfContextPath + "/consents";
            return (0, f.get)(t, {
                deliveryMethods: e
            }).then(l.default.server.loadedConsents)
        }, a.getOfferDeviceFilters = function(e) {
            var t = bsfContextPath + "/device/filters",
                r = {
                    availableProductsKey: (0, u.default)("#availableProductsKey").val(),
                    processType: e
                };
            return (0, f.get)(t, r).then(l.default.server.loadedDeviceOfferFilter)
        }, a.getDeviceParameterFilters = function(e, t) {
            var r = bsfContextPath + "/device/parameters",
                n = {
                    propositionId: e,
                    processType: t
                };
            return (0, f.get)(r, n).then(l.default.server.loadedDeviceParameterFilter)
        }, a.getConsentByType = function(e, t) {
            var r = bsfContextPath + "/consents/byTypeAndServiceVariants",
                n = {
                    serviceVariantCodes: e,
                    consentType: t
                };
            return (0, f.get)(r, n).then(l.default.server.loadedConsentsByType)
        }, a.getCartConsents = function() {
            var e = bsfContextPath + "/koszyk/zgody";
            return (0, f.get)(e).then(l.default.server.loadedCartConsents)
        }, a.verifyBenefitConsents = function(e) {
            var t = bsfContextPath + "/koszyk/modifyConsentsInCart";
            return (0, f.postJsonObject)(t, e).then(l.default.server.benefitConsentsVerified)
        }, a.getBenefits = function() {
            return (0, f.mock)("", [{
                code: "1",
                checked: !1
            }, {
                code: "2",
                checked: !1
            }, {
                code: "3",
                checked: !1
            }]).then(l.default.server.loadedBenefits)
        }, a.getAvailableDeliveryMethods = function() {
            var e = bsfContextPath + "/checkout/delivery/delivery-methods";
            return (0, f.get)(e, "").then(l.default.server.availableDeliveryMethods)
        }, a.validatePostCodeCBS = function(e, t) {
            var r = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto";
            return (0, f.get)(r, {
                postcode: e
            }).then(function(e) {
                return l.default.server.validatedPostCodeCBS(e, t)
            })
        }, a.validateStreetByPostCodeAndCity = function(e, t, r, n) {
            var a = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity";
            return (0, f.get)(a, {
                term: r,
                cityname: e,
                postcode: t
            }).then(function(e) {
                return l.default.server.getStreetsByPostCodeAntCityCBS(e, n)
            })
        }, a.getDeliveryData = function() {
            var e = bsfContextPath + "/checkout/delivery/delivery-data";
            return (0, f.get)(e, "").then(l.default.server.loadDeliveryData)
        }, a.getOrderData = function() {
            var e = bsfContextPath + "/order/placedOrderSummary";
            return (0, f.get)(e, "").then(l.default.server.loadedOrderData)
        }, a.getAvailableDeliveryData = function() {
            var e = bsfContextPath + "/checkout/delivery/availableDeliveryData";
            return (0, f.get)(e, "").then(l.default.server.loadAvailableDeliveryData)
        }, a.getDocumentsForProducts = function(e, t) {
            var r = bsfContextPath + "/documents/getDocumentsForProducts",
                n = {
                    productIds: e,
                    processType: t
                };
            return (0, f.get)(r, n).then(l.default.server.loadedDocumentsList)
        }, a.getDocumentsForCart = function() {
            var e = bsfContextPath + "/documents/getDocumentsForCart";
            return (0, f.get)(e, "").then(l.default.server.loadedDocumentsForCart)
        }, a.getDocumentForConsents = function(e, t) {
            var r = bsfContextPath + "/documents/getDocumentForConsentEligs";
            return (0, f.get)(r, {
                consentEligsCodes: e.filter(function(e) {
                    return "WZRK" === e.type
                }).map(function(e) {
                    return e.code
                })
            }).then(l.default.server.loadedConsentsDocument.bind(null, t))
        }, a.getDocumentsFromOrder = function(e) {
            var t = bsfContextPath + "/documents/getDocumentsFromOrder";
            return (0, f.get)(t, {
                orderGuid: e
            }).then(l.default.server.loadedDocumentsFromOrder)
        };
        var e = bsfContextPath + "/documents/createDocumentAsyncResult",
            s = bsfContextPath + "/documents/getDocumentAsyncResult";

        function o() {
            return (0, f.poll)(e, null, function(e) {
                return !0 === e
            })
        }

        function i(e) {
            throw l.default.error.addToCart(e), e
        }
        return a.getOrCreateDocument = function(t, r) {
            var e = {
                    documentCode: t,
                    bundleNo: r
                },
                n = bsfContextPath + "/documents/checkDocumentExistence";
            return (0, f.get)(n, e).then(function(e) {
                e ? a.getDocument(t, r) : a.createDocument(t, r)
            })
        }, a.createDocument = function(e, t) {
            var r = bsfContextPath + "/documents/createDocuments";
            return (0, f.get)(r, {
                documentDefinitionCodes: e,
                bundleNo: t,
                factory: "MOBILE"
            }).then(o).then(l.default.server.createdDocument.bind(null, e, t)).catch(l.default.server.loadDocumentError.bind(null, e, t))
        }, a.checkManualVerificationAsyncResult = function() {
            var e = bsfContextPath + "/koszyk/danezamawiajacego/checkManualVerificationAsyncResult";
            return (0, f.poll)(e, null, function(e) {
                return "WAITING" !== e.code
            }, 60, 1e4).then(l.default.server.cvManualVerificationResult).catch(l.default.error.cvManualVerificationResultError)
        }, a.getDocument = function(r, n) {
            var a = {
                    documentCodes: r,
                    bundleNo: n
                },
                o = bsfContextPath + "/documents/findDocumentInLocalStorage";
            return (0, f.get)(o, a).then(function(e) {
                if (e[r]) l.default.server.loadedDocument(r, n, e);
                else {
                    var t = bsfContextPath + "/documents/getDocuments";
                    (0, f.get)(t, a).then(function(e) {
                        return (0, f.poll)(s, e, function(e) {
                            return !0 === e
                        })
                    }.bind(null, a)).then(f.get.bind(null, o, a)).then(l.default.server.loadedDocument.bind(null, r, n)).catch(l.default.server.loadDocumentError.bind(null, r, n))
                }
            })
        }, a.getDocumentFromOrder = function(e, t, r) {
            var n = bsfContextPath + "/documents/getDocumentFromOrder";
            return (0, f.poll)(n, {
                documentCode: e,
                orderGuid: t,
                bundleNumber: r
            }, function(e) {
                return "LOADING" !== e.status
            }, 20).then(l.default.server.getDocumentFromOrderCompleted).catch(l.default.error.failedToLoadDocumentFromOrder.bind(null, e, r))
        }, a.removeFromCart = function(e, t) {
            var r = bsfContextPath + "/koszyk/usun" + (null != e ? "/" + e : "");
            return (0, f.post)(r, {
                id: t
            }).then(l.default.server.removedFromCart)
        }, a.checkReserveStatus = function(e) {
            var t = bsfContextPath + "/resources/msisdn/checkReserveStatus";
            return (0, f.post)(t, {
                msisdn: e
            }).then(l.default.server.checkedReserveStatus.bind(null, e))
        }, a.getNearestPoses = function(e, t, r) {
            var n = bsfContextPath + "/checkout/pickup/nearest";
            return (0, f.get)(n, {
                gpsLatitude: e.lat,
                gpsLongitude: e.lng,
                deliveryModeCode: r
            }).then(l.default.server.nearestPosesLoaded.bind(null, t))
        }, a.getAssistModeState = function() {
            var e = bsfContextPath + "/assist/state";
            return (0, f.get)(e, {}).then(l.default.server.assistModeStateLoaded).catch(l.default.error.createAssistStateError)
        }, a.leaveAssistMode = function() {
            var e = bsfContextPath + "/assist/leave";
            return (0, f.post)(e, {}).then(l.default.server.assistModeStateChanged).catch(l.default.error.createAssistModeLeaveError)
        }, a.enterAssistMode = function(e) {
            var t = bsfContextPath + "/assist/enter";
            return (0, f.post)(t, {
                sisId: e
            }).then(l.default.server.assistModeStateChanged).catch(l.default.error.createAssistModeEnterError)
        }, a.getEmployeeList = function(e, t) {
            var r = bsfContextPath + "/employee/list",
                n = {
                    lastName: e.lastName,
                    name: e.name,
                    location: e.location,
                    loginOtsa: e.loginOtsa,
                    fullBscs: e.fullBscs,
                    sisId: e.sisId,
                    offset: t.offset,
                    limit: t.limit
                };
            return (0, f.get)(r, n).then(l.default.server.employeeListLoaded).catch(l.default.error.createEmployeeListSearchError)
        }, a.getPhoneContactData = function() {
            var e = bsfContextPath + "/checkout/delivery/phoneContact";
            return (0, f.get)(e, "").then(l.default.server.loadPhoneContactData)
        }, a.clearCustomerSession = function() {
            var e = bsfContextPath + "/koszyk/danezamawiajacego/clearCustomerSession";
            return (0, f.post)(e, {}).then(l.default.server.clearCustomerSession).catch(l.default.error.clearCustomerSessionError)
        }, a.getDeviceList = function(e, t, r, n) {
            var a = bsfContextPath + "/device/list",
                o = {
                    propositionId: e.propositionId,
                    offset: t.offset,
                    limit: t.limit,
                    processType: r,
                    selectedDeviceId: n.productId,
                    "manufacturers[]": e.manufacturers
                },
                s = JSON.parse(JSON.stringify(e));
            return (0, f.get)(a, o).then(l.default.server.deviceListLoaded.bind(null, s)).catch(l.default.error.createDeviceListSearchError)
        }, a.getDeviceListMore = function(e, t, r, n) {
            var a = bsfContextPath + "/device/list",
                o = {
                    propositionId: e.propositionId,
                    offset: t.offset,
                    limit: t.limit,
                    processType: r,
                    selectedDeviceId: n.productId,
                    "manufacturers[]": e.manufacturers
                },
                s = JSON.parse(JSON.stringify(e));
            return (0, f.get)(a, o).then(l.default.server.deviceListMoreLoaded.bind(null, s)).catch(l.default.error.createDeviceListSearchError)
        }, a.validateAndOrderItems = function(e) {
            var t = bsfContextPath + "/goodsOrders/serialNumbers";
            return (0, f.postJsonObject)(t, e).then(l.default.server.sapIfsReservationDone).catch(l.default.error.checkAndOrderSerialNumbersError)
        }, a.getSapFioriCorrectiveInvoiceLink = function() {
            var e = bsfContextPath + "/goodsOrders/fioriCorrectiveInvoiceLink";
            return (0, f.get)(e, "").then(l.default.server.sapFioriCorrectiveInvoiceLinkReady)
        }, a.getSapFioriLinks = function(e) {
            var t = bsfContextPath + "/goodsOrders/fioriLinks/" + e;
            return (0, f.get)(t, "").then(l.default.server.sapFioriLinksReady).catch(l.default.error.sapFioriLinksError)
        }, a.unlockSaleInSap = function(e) {
            var t = bsfContextPath + "/goodsOrders/unlockSale/" + e;
            return (0, f.put)(t, "").then(l.default.server.unlockSaleInSapDone).catch(l.default.error.unlockSaleInSapError)
        }, a.getPaymentAndFiscalizationDataFromSap = function(e) {
            var t = bsfContextPath + "/goodsOrders/paymentAndFiscalization/" + e;
            return (0, f.get)(t, "").then(l.default.server.paymentAndFiscalizationDataLoaded).catch(l.default.error.paymentAndFiscalizationDataError)
        }, a.checkUnlockSaleInSapStatus = function(e) {
            var t = bsfContextPath + "/goodsOrders/unlockSale/status/" + e;
            return (0, f.get)(t, "").then(l.default.server.unlockSaleInSapDone).catch(l.default.error.unlockSaleInSapError)
        }, a.checkPaymentStatus = function(e) {
            var t = bsfContextPath + "/goodsOrders/paymentStatus/" + e;
            return (0, f.get)(t, "").then(l.default.server.paymentStatusVerificationSuccess).catch(l.default.error.createOrderPaymentValidationError)
        }, a.orderCancel = function(e) {
            var t = bsfContextPath + "/goodsOrders/cancelOrder/" + e;
            return (0, f.put)(t, "").then(l.default.server.orderCancelResponse).catch(l.default.error.orderCancelError)
        }, a.printOrderNumber = function(e) {
            var t = bsfContextPath + "/goodsOrders/checkoutPaymentPrintout/" + e;
            return (0, f.getPdf)(t).then(l.default.server.printOutDocumentResult).catch(l.default.error.createOrderNumberPrintError)
        }, a.printInvoiceNumber = function(e) {
            var t = bsfContextPath + "/goodsOrders/invoicePrintout/" + e;
            return (0, f.getPdf)(t).then(l.default.server.printOutDocumentResult).catch(l.default.error.createInvoicePrintError)
        }, a.getMNPFormData = function() {
            var e = bsfContextPath + "/mnp/getMNPFormData";
            return (0, f.get)(e, "").then(l.default.server.loadedMNPData)
        }, a.getCustomerAdditionalDocuments = function() {
            var e = bsfContextPath + "/customer/getAdditionalDocuments";
            return (0, f.get)(e, "").then(l.default.server.loadedCustomerAdditionalDocuments)
        }, a.addMagnumToMultiCart = function(e, t, r, n, a, o, s) {
            var u = bsfContextPath + "/hapi/multiCart/add",
                d = {
                    propositionId: e,
                    deviceVariantId: t,
                    voipNumber: r,
                    knaNumber: n,
                    voiceBundleMsisdn: a,
                    dataBundleMsisdn: o,
                    secondaryChoiceOffer: s
                };
            return (0, f.post)(u, d).then(function(e) {
                e && e.message && "string" == typeof e.message ? i({
                    responseJSON: {
                        message: e.message
                    }
                }) : l.default.server.addedToCart(e)
            }).catch(i)
        }, a.removeMagnumFromMultiCart = function(e) {
            var t = bsfContextPath + "/multiCart/remove";
            return (0, f.postJsonObject)(t, e).then(l.default.server.removedFromCart).catch(l.default.error.removeFromCart)
        }, a.getChannel = function() {
            var e = bsfContextPath + "/customer/channel";
            return (0, f.get)(e, "").then(l.default.server.loadedChannel)
        }, a
    }({});
    e.default = t
});
//# sourceMappingURL=OraEshopAPI.js.map