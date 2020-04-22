import OraActions from "eshop/flux/actions/OraActions";
import {
    get,
    getPdf,
    put,
    post,
    postJson,
    postJsonObject,
    poll,
    mock
} from "eshop/flux/utils/OraApiUtils";
import $ from "jquery";

/**
 * All API calls for eshop
 **/
var OraEshopAPI = (function(OraEshopAPI) {

    // TODO: refactor availableProductsKey as a proper filter
    function prepareFilters(filters) {
        var availableProductsKey = $('#availableProductsKey').val();
        return $.extend(availableProductsKey ? {
            availableProductsKey: availableProductsKey
        } : {}, filters);
    }

    function getAvailableProductsKey() {
        return $('#availableProductsKey').val();
    }

    function prepareAddToCartData(plan, services, products, msisdn, process, deviceVariantId, numberVerificationData) {
        var serviceIds = services.map(service => service.id);
        let addToCartDataWithoutMsisdn = {
            'bundle': plan.id,
            'offer': plan.rateplanId,
            'services': serviceIds,
            'products': products,
            'process': process,
            'deviceVariant': deviceVariantId,
            'numberVerificationData': JSON.stringify(numberVerificationData)
        };
        return Object.assign(addToCartDataWithoutMsisdn, msisdn ? {
            'msisdn': msisdn
        } : {});
    }


    function prepareWZRKConsentsCodes(consents) {
        var consentsCodes = consents
            .filter(consent => consent.type === "WZRK")
            .map(consent => consent.code);
        return {
            'consentEligsCodes': consentsCodes
        };
    }

    OraEshopAPI.getOffers = function(filters, msisdn) {
        var offerUrl = bsfContextPath + "/offersList/offers?";
        return get(offerUrl, $.extend(prepareFilters(filters), {
                msisdn: msisdn
            }))
            .then(OraActions.server.loadedOffers)
            .catch(OraActions.error.getOffers);
    };

    OraEshopAPI.getOrderDataNumber = function() {
        var orderUrl = bsfContextPath + "/order/placedOrderSummary";
        return get(orderUrl)
            .then(OraActions.server.loadedOrderNumber);
    };

    OraEshopAPI.getFilters = function(filters) {
        var filtersAPI = bsfContextPath + "/filters/getFilters";
        return get(filtersAPI, prepareFilters(filters))
            .then(OraActions.server.loadedFilters);
    };

    OraEshopAPI.getServices = function(offerId, bundleTemplateId, processType) {
        var vasesAPI = bsfContextPath + "/vases/getVases";
        var reqData = {
            propositionId: offerId,
            bundle: bundleTemplateId,
            process: processType
        };
        return get(vasesAPI, reqData)
            .then(OraActions.server.loadedServices);
    };

    OraEshopAPI.getSimCards = function(offerId, processType) {
        var simAPI = bsfContextPath + "/simCard/getSimCards";
        var minimumStockLevel = $("#minimumSimCardStockLevel").val();
        var reqData = {
            propositionId: offerId,
            processType: processType,
            minimumStockLevel: minimumStockLevel
        };
        return get(simAPI, reqData)
            .then(OraActions.server.loadedSimCards);
    };

    OraEshopAPI.getSimCardTypes = function() {
        var simAPI = bsfContextPath + "/simCard/getSimCardTypes";
        return get(simAPI)
            .then(OraActions.server.loadedSimCardTypes)
            .catch(OraActions.error.getSimCardTypesError);
    };

    OraEshopAPI.validateSimCards = function(simList) {
        var simAPI = bsfContextPath + "/simCard/addSimCardsToCart";
        return postJsonObject(simAPI, simList)
            .then(OraActions.server.validateResult);
    };

    OraEshopAPI.validateSimAndImei = function(simList, imeiList) {
        var simImeiAPI = bsfContextPath + "/MobileResources/addSimImeiToCart";

        return postJsonObject(simImeiAPI, {
                simList: simList,
                imeiList: imeiList
            })
            .then(OraActions.server.validateResult);
    };

    OraEshopAPI.getMsisdnList = function(number, pattern) {
        var msisdnAPI = bsfContextPath + "/resources/msisdn/getMSISDNs";
        return postJson(msisdnAPI, {
                number: number,
                pattern: pattern
            })
            .then(OraActions.server.loadedMsisdnList);
    };

    OraEshopAPI.checkMsisdnType = function(number) {
        var msisdnAPI = bsfContextPath + "/resources/msisdn/checkMSISDNType";
        return postJson(msisdnAPI, {
                number: number
            })
            .then(OraActions.server.checkedMsisdnType);
    };

    OraEshopAPI.verifyNumber = function(number, processType) {
        var msisdnAPI = bsfContextPath + "/resources/msisdn/verifyNumber";
        return postJson(msisdnAPI, {
                number: number,
                processType: processType
            })
            .then(OraActions.server.verifiedNumber)
            .catch(OraActions.error.verifyNumber);
    };


    OraEshopAPI.releaseMsisdnList = function(msisdnList) {
        var msisdnAPI = bsfContextPath + "/resources/msisdn/unreserve";
        if (!msisdnList || msisdnList.length === 0)
            return Promise.resolve();
        return post(msisdnAPI, {
                msisdnList: msisdnList
            })
            .then(OraActions.server.releasedMsisdnList);
    };

    OraEshopAPI.rerollMsisdnList = function(number, pattern, msisdnList) {
        return this.getMsisdnList(number, pattern)
            .then(this.releaseMsisdnList.bind(this, msisdnList));
    };

    OraEshopAPI.searchMsisdnList = function(number, pattern, msisdnList) {
        return this.releaseMsisdnList(msisdnList)
            .then(this.getMsisdnList.bind(this, number, pattern));
    };

    OraEshopAPI.reserveMsisdn = function(msisdn) {
        var msisdnAPI = bsfContextPath + "/resources/msisdn/reserve";
        return postJson(msisdnAPI, {
                msisdn: msisdn
            })
            .then(OraActions.server.reservedMsisdn)
            .catch(OraActions.error.reserveMsisdn);
    };

    OraEshopAPI.getCart = function(id) {
        var cartAPI = bsfContextPath + "/koszyk/minikoszyk";
        return get(cartAPI, {
                id: id
            })
            .then(OraActions.server.loadedCart);
    };

    OraEshopAPI.getTelesalesCampaignData = function() {
        var tlsCampaignAPI = bsfContextPath + "/telesales/campaign/data";
        return get(tlsCampaignAPI).then(OraActions.server.loadedCampaignData);

    }

    OraEshopAPI.addToCart = function(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData) {
        var addTocartAPI = bsfContextPath + "/koszyk/dodaj";

        return postJson(addTocartAPI, prepareAddToCartData(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData))
            .then(OraActions.server.addedToCart)
            .catch(OraActions.error.addToCart);
    };

    OraEshopAPI.changeOffer = function(bundleNo, plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData) {
        var addTocartAPI = bsfContextPath + "/koszyk/change/" + bundleNo;

        return postJson(addTocartAPI, prepareAddToCartData(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData))
            .then(OraActions.server.addedToCart)
            .catch(OraActions.error.addToCart);
    };

    OraEshopAPI.doCheckoutStep = function(data) {
        var checkoutStepAPI = bsfContextPath + $('#currentCheckoutStepUrl').val();
        return postJsonObject(checkoutStepAPI, data)
            .then(OraActions.server.checkoutStepDone)
            .catch(OraActions.error.checkoutStepError);
    };

    OraEshopAPI.saveCheckoutStep = function(data) {
        var checkoutStepAPI = bsfContextPath + $('#currentCheckoutStepUrl').val() + "/zapisz";
        return postJsonObject(checkoutStepAPI, data)
            .then(OraActions.server.checkoutStepSaved);
    };

    OraEshopAPI.calculatePrice = function(offer, services, products, process, deviceVariantId) {
        var calculatePriceAPI = bsfContextPath + "/koszyk/oblicz";

        return postJson(calculatePriceAPI, prepareAddToCartData(offer, services, products, null, process, deviceVariantId, null))
            .then(OraActions.server.priceCalculated)
            .catch(OraActions.error.calculatePrice);
    };

    OraEshopAPI.calculateCart = function() {
        var calculateCartAPI = bsfContextPath + "/koszyk/przelicz";
        return get(calculateCartAPI)
            .then(OraActions.server.cartCalculated);
    };

    OraEshopAPI.changeDevice = function(url, offerId, from) {
        document.location.href = url + "?propositionId=" + offerId + "&from=" + encodeURIComponent(from);
    };

    OraEshopAPI.gotoDeviceDetailsPage = function(url, variantId, from) {
        document.location.href = url + "?variantId=" + variantId + "&from=" + encodeURIComponent(from);
    };

    OraEshopAPI.getConsent = function(deliveryMethods) {
        var consentAPI = bsfContextPath + "/consents";
        return get(consentAPI, {
                deliveryMethods
            })
            .then(OraActions.server.loadedConsents);
    };

    OraEshopAPI.getOfferDeviceFilters = function(processType) {
        const deviceOfferFilterAPI = bsfContextPath + "/device/filters";
        const params = {
            availableProductsKey: getAvailableProductsKey(),
            processType: processType
        };

        return get(deviceOfferFilterAPI, params)
            .then(OraActions.server.loadedDeviceOfferFilter);
        /* return mock("", [
                                {
                                    "defaultOption": null,
                                    "description": "24 miesięcy",
                                    "value": 24,
                                    "propositions": [
                                        {
                                            "propositionId" : "Orange_Telefon_Komorkowy_247560$MOB_CPO_6029_5700_AC_247561",
                                            "lowestPrice" : 10.99,
                                            "name": "testowa"
                                        },
                                        {
                                            "propositionId" : "Orange_Telefon_Komorkowy_247560$MOB_CPO_6029_5700_AC_247560",
                                            "lowestPrice" : 30.99,
                                            "name": "testowa 1"

                                        }
                                    ]
                                },
                                {
                                    "defaultOption": null,
                                    "description": "12 miesięcy",
                                    "value": 12,
                                    "propositions": [
                                        {
                                            "propositionId" : "Orange_Telefon_Komorkowy_247560$MOB_CPO_6029_5700_AC_2475611",
                                            "lowestPrice" : 133.99,
                                            "name": "testowa 12 miesiecy"
                                        },
                                        {
                                            "propositionId" : "Orange_Telefon_Komorkowy_247560$MOB_CPO_6029_5700_AC_2475601",
                                            "lowestPrice" : 3330.99,
                                            "name": "testowa 1 12 miesiecy"

                                        }
                                    ]
                                }

                            ]

                        )
             .then(OraActions.server.loadedDeviceOfferFilter);*/
    };

    OraEshopAPI.getDeviceParameterFilters = function(propositionId, processType) {
        const deviceParametersAPI = bsfContextPath + "/device/parameters";
        const params = {
            propositionId: propositionId,
            processType: processType
        }

        return get(deviceParametersAPI, params)
            .then(OraActions.server.loadedDeviceParameterFilter);
    }

    OraEshopAPI.getConsentByType = function(serviceVariantsCodes, consentType) {
        var discountAPI = bsfContextPath + "/consents/byTypeAndServiceVariants";
        let params = {
            serviceVariantCodes: serviceVariantsCodes,
            consentType: consentType
        };

        return get(discountAPI, params)
            .then(OraActions.server.loadedConsentsByType);
    };

    OraEshopAPI.getCartConsents = function() {
        var cartConsentAPI = bsfContextPath + "/koszyk/zgody";
        return get(cartConsentAPI)
            .then(OraActions.server.loadedCartConsents);
    };

    OraEshopAPI.verifyBenefitConsents = function(consents) {
        var consentAPI = bsfContextPath + "/koszyk/modifyConsentsInCart";
        return postJsonObject(consentAPI, consents).then(OraActions.server.benefitConsentsVerified);

        /*        return mock("",[
                    {
                        consentCode: "MOB_CE_MOB_CONS_PHONE_CONTACT_MARKETING_MOB_CD_MOB_CONS_PHONE_CONTACT_MARKETING_B2C_MOB_CHL_WWW_ACT_B2C_MOB_CHL_WWW_ACT_POS_MOB",
                        wasModificationSuccessful: true
                    }
                ]).then(OraActions.server.benefitConsentsVerified);*/
    };

    OraEshopAPI.getBenefits = function() {
        //TODO implement
        return mock("", [{
                code: "1",
                checked: false
            }, {
                code: "2",
                checked: false
            }, {
                code: "3",
                checked: false
            }])
            .then(OraActions.server.loadedBenefits);
    };

    OraEshopAPI.getAvailableDeliveryMethods = function() {
        var deliveryMethodControllerAPI = bsfContextPath + "/checkout/delivery/delivery-methods";
        return get(deliveryMethodControllerAPI, "")
            .then(OraActions.server.availableDeliveryMethods);
    };

    OraEshopAPI.validatePostCodeCBS = function(postCode, bundleNumbers) {
        var validatePostCode = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto";
        return get(validatePostCode, {
                postcode: postCode
            })
            .then((data) => OraActions.server.validatedPostCodeCBS(data, bundleNumbers));
    };

    OraEshopAPI.validateStreetByPostCodeAndCity = function(city, postCode, term, bundleNumbers) {
        var validatePostCode = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity";
        return get(validatePostCode, {
                term: term,
                cityname: city,
                postcode: postCode
            })
            .then((data) => OraActions.server.getStreetsByPostCodeAntCityCBS(data, bundleNumbers));
    };

    OraEshopAPI.getDeliveryData = function() {
        var deliveryDataControllerAPI = bsfContextPath + "/checkout/delivery/delivery-data";
        return get(deliveryDataControllerAPI, "")
            .then(OraActions.server.loadDeliveryData);
    };

    OraEshopAPI.getOrderData = function() {
        var orderDataControllerAPI = bsfContextPath + "/order/placedOrderSummary";
        return get(orderDataControllerAPI, "")
            .then(OraActions.server.loadedOrderData);
    };

    OraEshopAPI.getAvailableDeliveryData = function() {
        var availableDeliveryData = bsfContextPath + "/checkout/delivery/availableDeliveryData";
        return get(availableDeliveryData, "")
            .then(OraActions.server.loadAvailableDeliveryData);
        /*return mock("",
        {
            korespondencyjny : {
                firstName: "Marek",
                lastName: "Afrykanski",
                postalCode : "22400",
                town : "Zamość",
                streetName : "Koszary",
                streetNumber : "69",
            },
            main : {
                firstName: "Marek",
                lastName: "Afrykanski",
                postalCode : "05290",
                town : "Kobyłka",
                streetName : "Napoleona",
                streetNumber : "12",
                appartmentNo: "1"
            }
        }).then(OraActions.server.loadAvailableDeliveryData);*/
    };

    OraEshopAPI.getDocumentsForProducts = function(productIds, processType) {
        var getDocumentsForProductsAPI = bsfContextPath + "/documents/getDocumentsForProducts";
        var reqData = {
            productIds: productIds,
            processType: processType
        };
        return get(getDocumentsForProductsAPI, reqData)
            .then(OraActions.server.loadedDocumentsList);
    };

    OraEshopAPI.getDocumentsForCart = function() {
        var getDocumentsForCartAPI = bsfContextPath + "/documents/getDocumentsForCart";
        return get(getDocumentsForCartAPI, "")
            .then(OraActions.server.loadedDocumentsForCart);
    };

    OraEshopAPI.getDocumentForConsents = function(consents, bundleNo) {
        var getDocumentForConsentsAPI = bsfContextPath + "/documents/getDocumentForConsentEligs";
        return get(getDocumentForConsentsAPI, prepareWZRKConsentsCodes(consents))
            .then(OraActions.server.loadedConsentsDocument.bind(null, bundleNo));
    };

    OraEshopAPI.getDocumentsFromOrder = function(orderGuid) {
        var getDocumentsFromOrderAPI = bsfContextPath + "/documents/getDocumentsFromOrder";
        return get(getDocumentsFromOrderAPI, {
            orderGuid: orderGuid
        }).then(OraActions.server.loadedDocumentsFromOrder);
    };

    var createDocumentAsyncResultAPI = bsfContextPath + "/documents/createDocumentAsyncResult";
    var getDocumentAsyncResultAPI = bsfContextPath + "/documents/getDocumentAsyncResult";

    function checkCreateDocumentAsyncResult() {
        return poll(createDocumentAsyncResultAPI, null, status => status === true);
    }

    function checkGetDocumentAsyncResult(documentCode) {
        return poll(getDocumentAsyncResultAPI, documentCode, status => status === true);
    }

    OraEshopAPI.getOrCreateDocument = function(documentCode, bundleNo) {
        var data = {
            "documentCode": documentCode,
            bundleNo: bundleNo
        };
        var checkDocumentExistenceUrl = bsfContextPath + "/documents/checkDocumentExistence";
        return get(checkDocumentExistenceUrl, data)
            .then((result) => {
                if (!result) {
                    OraEshopAPI.createDocument(documentCode, bundleNo);
                } else {
                    OraEshopAPI.getDocument(documentCode, bundleNo);
                }
            });
    };


    OraEshopAPI.createDocument = function(documentCode, bundleNo) {
        var createDocumentUrl = bsfContextPath + "/documents/createDocuments";
        return get(createDocumentUrl, {
                documentDefinitionCodes: documentCode,
                bundleNo: bundleNo,
                factory: "MOBILE"
            })
            .then(checkCreateDocumentAsyncResult)
            .then(OraActions.server.createdDocument.bind(null, documentCode, bundleNo))
            .catch(OraActions.server.loadDocumentError.bind(null, documentCode, bundleNo));
    };

    OraEshopAPI.checkManualVerificationAsyncResult = function() {
        var checkManualVerificationAsyncResultAPI = bsfContextPath + "/koszyk/danezamawiajacego/checkManualVerificationAsyncResult";
        var iterations = 60;
        var timeout = 10000;
        return poll(checkManualVerificationAsyncResultAPI, null, response => response.code !== "WAITING", iterations, timeout)
            .then(OraActions.server.cvManualVerificationResult)
            .catch(OraActions.error.cvManualVerificationResultError);
    };

    OraEshopAPI.getDocument = function(documentCode, bundleNo) {
        let data = {
            "documentCodes": documentCode,
            bundleNo: bundleNo
        }
        var findInLocalStorageUrl = bsfContextPath + "/documents/findDocumentInLocalStorage";
        return get(findInLocalStorageUrl, data)
            .then((path) => {
                if (path[documentCode]) {
                    OraActions.server.loadedDocument(documentCode, bundleNo, path);
                } else {
                    let getDocumentUrl = bsfContextPath + "/documents/getDocuments";

                    get(getDocumentUrl, data)
                        .then(checkGetDocumentAsyncResult.bind(null, data))
                        .then(get.bind(null, findInLocalStorageUrl, data))
                        .then(OraActions.server.loadedDocument.bind(null, documentCode, bundleNo))
                        .catch(OraActions.server.loadDocumentError.bind(null, documentCode, bundleNo));
                }
            });
    };

    OraEshopAPI.getDocumentFromOrder = function(documentCode, orderGuid, bundleNumber) {
        var getDocumentFromOrderUri = bsfContextPath + "/documents/getDocumentFromOrder";
        return poll(getDocumentFromOrderUri, {
                documentCode: documentCode,
                orderGuid: orderGuid,
                bundleNumber: bundleNumber
            }, response => response.status !== "LOADING", 20)
            .then(OraActions.server.getDocumentFromOrderCompleted)
            .catch(OraActions.error.failedToLoadDocumentFromOrder.bind(null, documentCode, bundleNumber));
    }

    /**
     * If bundleNo is passed, function removes bundle from cart,
     * if bundleNo is null whole cart is cleaned
     */
    OraEshopAPI.removeFromCart = function(bundleNo, id) {
        var removeFromCartUrl = bsfContextPath + "/koszyk/usun" + (bundleNo != null ? "/" + bundleNo : "");
        return post(removeFromCartUrl, {
                id: id
            })
            .then(OraActions.server.removedFromCart);
    };

    OraEshopAPI.checkReserveStatus = function(msisdn) {
        let checkReserveStatusUrl = bsfContextPath + "/resources/msisdn/checkReserveStatus";
        return post(checkReserveStatusUrl, {
                msisdn: msisdn
            })
            .then(OraActions.server.checkedReserveStatus.bind(null, msisdn));
    };

    OraEshopAPI.getNearestPoses = function(location, bundleNumbers, deliveryModeCode) {
        let getNearestPoses = bsfContextPath + "/checkout/pickup/nearest";
        return get(getNearestPoses, {
                gpsLatitude: location.lat,
                gpsLongitude: location.lng,
                deliveryModeCode: deliveryModeCode
            })
            .then(OraActions.server.nearestPosesLoaded.bind(null, bundleNumbers));
    };

    OraEshopAPI.getAssistModeState = function() {
        let assistModeState = bsfContextPath + "/assist/state";

        return get(assistModeState, {})
            .then(OraActions.server.assistModeStateLoaded)
            .catch(OraActions.error.createAssistStateError);
    };

    OraEshopAPI.leaveAssistMode = function() {
        let assistModeLeave = bsfContextPath + "/assist/leave";

        return post(assistModeLeave, {})
            .then(OraActions.server.assistModeStateChanged)
            .catch(OraActions.error.createAssistModeLeaveError);
    };

    OraEshopAPI.enterAssistMode = function(sisId) {
        let assistModeEnter = bsfContextPath + "/assist/enter";

        return post(assistModeEnter, {
                sisId: sisId
            })
            .then(OraActions.server.assistModeStateChanged)
            .catch(OraActions.error.createAssistModeEnterError);
    };

    OraEshopAPI.getEmployeeList = function(filters, limit) {
        let url = bsfContextPath + "/employee/list";

        let params = {
            lastName: filters.lastName,
            name: filters.name,
            location: filters.location,
            loginOtsa: filters.loginOtsa,
            fullBscs: filters.fullBscs,
            sisId: filters.sisId,
            offset: limit.offset,
            limit: limit.limit
        };

        return get(url, params)
            .then(OraActions.server.employeeListLoaded)
            .catch(OraActions.error.createEmployeeListSearchError);
    };

    OraEshopAPI.getPhoneContactData = function() {
        var phoneContactDataControllerAPI = bsfContextPath + "/checkout/delivery/phoneContact";
        return get(phoneContactDataControllerAPI, "")
            .then(OraActions.server.loadPhoneContactData);
    };

    OraEshopAPI.clearCustomerSession = function() {
        var clearCustomerSessionAPI = bsfContextPath + "/koszyk/danezamawiajacego/clearCustomerSession";
        return post(clearCustomerSessionAPI, {})
            .then(OraActions.server.clearCustomerSession)
            .catch(OraActions.error.clearCustomerSessionError);
    };
    //serio Tomek? zrobil takie o dwie funkcje i uciekl
    OraEshopAPI.getDeviceList = function(filters, limit, processType, selectedDevice) {
        let url = bsfContextPath + "/device/list";

        let params = {
            propositionId: filters.propositionId,
            offset: limit.offset,
            limit: limit.limit,
            processType: processType,
            selectedDeviceId: selectedDevice.productId,
            "manufacturers[]": filters.manufacturers
        };
        console.log('----GET---- Filters ', filters.manufacturers);
        var prevFilters = JSON.parse(JSON.stringify(filters));

        return get(url, params)
            .then(OraActions.server.deviceListLoaded.bind(null, prevFilters))
            .catch(OraActions.error.createDeviceListSearchError);
    };

    OraEshopAPI.getDeviceListMore = function(filters, limit, processType, selectedDevice) {
        let url = bsfContextPath + "/device/list";

        let params = {
            propositionId: filters.propositionId,
            offset: limit.offset,
            limit: limit.limit,
            processType: processType,
            selectedDeviceId: selectedDevice.productId,
            "manufacturers[]": filters.manufacturers
        };
        console.log('----GET---- Filters ', filters.manufacturers);
        var prevFilters = JSON.parse(JSON.stringify(filters));

        return get(url, params)
            .then(OraActions.server.deviceListMoreLoaded.bind(null, prevFilters))
            .catch(OraActions.error.createDeviceListSearchError);
    };

    OraEshopAPI.validateAndOrderItems = function(data) {
        const url = bsfContextPath + "/goodsOrders/serialNumbers";
        return postJsonObject(url, data)
            .then(OraActions.server.sapIfsReservationDone)
            .catch(OraActions.error.checkAndOrderSerialNumbersError);
    };

    OraEshopAPI.getSapFioriCorrectiveInvoiceLink = function() {
        let url = bsfContextPath + "/goodsOrders/fioriCorrectiveInvoiceLink";
        return get(url, '')
            .then(OraActions.server.sapFioriCorrectiveInvoiceLinkReady);
    };

    OraEshopAPI.getSapFioriLinks = function(orderId) {
        let url = bsfContextPath + "/goodsOrders/fioriLinks/" + orderId;
        return get(url, '')
            .then(OraActions.server.sapFioriLinksReady)
            .catch(OraActions.error.sapFioriLinksError);
    };

    OraEshopAPI.unlockSaleInSap = function(orderId) {
        let url = bsfContextPath + "/goodsOrders/unlockSale/" + orderId;
        return put(url, '')
            .then(OraActions.server.unlockSaleInSapDone)
            .catch(OraActions.error.unlockSaleInSapError);
    };

    OraEshopAPI.getPaymentAndFiscalizationDataFromSap = function(orderId) {
        let url = bsfContextPath + "/goodsOrders/paymentAndFiscalization/" + orderId;
        return get(url, '')
            .then(OraActions.server.paymentAndFiscalizationDataLoaded)
            .catch(OraActions.error.paymentAndFiscalizationDataError);
    };

    OraEshopAPI.checkUnlockSaleInSapStatus = function(orderId) {
        let url = bsfContextPath + "/goodsOrders/unlockSale/status/" + orderId;
        return get(url, '')
            .then(OraActions.server.unlockSaleInSapDone)
            .catch(OraActions.error.unlockSaleInSapError);
    };

    OraEshopAPI.checkPaymentStatus = function(orderId) {
        let url = bsfContextPath + '/goodsOrders/paymentStatus/' + orderId;
        return get(url, '')
            .then(OraActions.server.paymentStatusVerificationSuccess)
            .catch(OraActions.error.createOrderPaymentValidationError);
    };

    OraEshopAPI.orderCancel = function(orderId) {
        let url = bsfContextPath + '/goodsOrders/cancelOrder/' + orderId;
        return put(url, '')
            .then(OraActions.server.orderCancelResponse)
            .catch(OraActions.error.orderCancelError);
    };

    OraEshopAPI.printOrderNumber = function(orderId) {
        let url = bsfContextPath + '/goodsOrders/checkoutPaymentPrintout/' + orderId;

        return getPdf(url)
            .then(OraActions.server.printOutDocumentResult)
            .catch(OraActions.error.createOrderNumberPrintError);
    };

    OraEshopAPI.printInvoiceNumber = function(orderId) {
        let url = bsfContextPath + '/goodsOrders/invoicePrintout/' + orderId;

        return getPdf(url)
            .then(OraActions.server.printOutDocumentResult)
            .catch(OraActions.error.createInvoicePrintError);
    };

    OraEshopAPI.getMNPFormData = function() {
        let url = bsfContextPath + "/mnp/getMNPFormData";
        return get(url, "")
            .then(OraActions.server.loadedMNPData);
    };

    OraEshopAPI.getCustomerAdditionalDocuments = function() {
        let url = bsfContextPath + "/customer/getAdditionalDocuments";
        return get(url, "")
            .then(OraActions.server.loadedCustomerAdditionalDocuments);
    };

    function throwAddToCartError(errorData) {
        OraActions.error.addToCart(errorData);
        throw errorData;
    }

    function handleErrorIn200Response(responseData) {
        let errorData = {
            responseJSON: {
                message: responseData.message
            }
        }
        throwAddToCartError(errorData);
    }

    OraEshopAPI.addMagnumToMultiCart = function(propositionId, deviceVariantId, voipNumber, knaNumber, voiceBundleMsisdn, dataBundleMsisdn, secondaryChoiceOffer) {
        const url = bsfContextPath + "/hapi/multiCart/add";
        const data = {
            propositionId,
            deviceVariantId,
            voipNumber,
            knaNumber,
            voiceBundleMsisdn,
            dataBundleMsisdn,
            secondaryChoiceOffer
        };

        return post(url, data)
            .then((responseData) => {
                if (responseData && responseData.message && typeof responseData.message === "string") {
                    handleErrorIn200Response(responseData)
                } else {
                    OraActions.server.addedToCart(responseData);
                }
            })
            .catch(throwAddToCartError);
    };

    OraEshopAPI.removeMagnumFromMultiCart = function(bundleNos) {
        let url = bsfContextPath + "/multiCart/remove";
        return postJsonObject(url, bundleNos)
            .then(OraActions.server.removedFromCart)
            .catch(OraActions.error.removeFromCart);
    };

    OraEshopAPI.getChannel = function() {
        let url = bsfContextPath + "/customer/channel";
        return get(url, "")
            .then(OraActions.server.loadedChannel);
    };

    return OraEshopAPI;
})({});

export default OraEshopAPI;