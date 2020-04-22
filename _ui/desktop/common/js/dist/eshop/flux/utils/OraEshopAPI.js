define(["exports", "eshop/flux/actions/OraActions", "eshop/flux/utils/OraApiUtils", "jquery"], function(_exports, _OraActions, _OraApiUtils, _jquery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraActions = babelHelpers.interopRequireDefault(_OraActions);
    _jquery = babelHelpers.interopRequireDefault(_jquery);

    /**
     * All API calls for eshop
     **/
    var OraEshopAPI = function(OraEshopAPI) {
        // TODO: refactor availableProductsKey as a proper filter
        function prepareFilters(filters) {
            var availableProductsKey = (0, _jquery.default)('#availableProductsKey').val();
            return _jquery.default.extend(availableProductsKey ? {
                availableProductsKey: availableProductsKey
            } : {}, filters);
        }

        function getAvailableProductsKey() {
            return (0, _jquery.default)('#availableProductsKey').val();
        }

        function prepareAddToCartData(plan, services, products, msisdn, process, deviceVariantId, numberVerificationData) {
            var serviceIds = services.map(function(service) {
                return service.id;
            });
            var addToCartDataWithoutMsisdn = {
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
            var consentsCodes = consents.filter(function(consent) {
                return consent.type === "WZRK";
            }).map(function(consent) {
                return consent.code;
            });
            return {
                'consentEligsCodes': consentsCodes
            };
        }

        OraEshopAPI.getOffers = function(filters, msisdn) {
            var offerUrl = bsfContextPath + "/offersList/offers?";
            return (0, _OraApiUtils.get)(offerUrl, _jquery.default.extend(prepareFilters(filters), {
                msisdn: msisdn
            })).then(_OraActions.default.server.loadedOffers).catch(_OraActions.default.error.getOffers);
        };

        OraEshopAPI.getOrderDataNumber = function() {
            var orderUrl = bsfContextPath + "/order/placedOrderSummary";
            return (0, _OraApiUtils.get)(orderUrl).then(_OraActions.default.server.loadedOrderNumber);
        };

        OraEshopAPI.getFilters = function(filters) {
            var filtersAPI = bsfContextPath + "/filters/getFilters";
            return (0, _OraApiUtils.get)(filtersAPI, prepareFilters(filters)).then(_OraActions.default.server.loadedFilters);
        };

        OraEshopAPI.getServices = function(offerId, bundleTemplateId, processType) {
            var vasesAPI = bsfContextPath + "/vases/getVases";
            var reqData = {
                propositionId: offerId,
                bundle: bundleTemplateId,
                process: processType
            };
            return (0, _OraApiUtils.get)(vasesAPI, reqData).then(_OraActions.default.server.loadedServices);
        };

        OraEshopAPI.getSimCards = function(offerId, processType) {
            var simAPI = bsfContextPath + "/simCard/getSimCards";
            var minimumStockLevel = (0, _jquery.default)("#minimumSimCardStockLevel").val();
            var reqData = {
                propositionId: offerId,
                processType: processType,
                minimumStockLevel: minimumStockLevel
            };
            return (0, _OraApiUtils.get)(simAPI, reqData).then(_OraActions.default.server.loadedSimCards);
        };

        OraEshopAPI.getSimCardTypes = function() {
            var simAPI = bsfContextPath + "/simCard/getSimCardTypes";
            return (0, _OraApiUtils.get)(simAPI).then(_OraActions.default.server.loadedSimCardTypes).catch(_OraActions.default.error.getSimCardTypesError);
        };

        OraEshopAPI.validateSimCards = function(simList) {
            var simAPI = bsfContextPath + "/simCard/addSimCardsToCart";
            return (0, _OraApiUtils.postJsonObject)(simAPI, simList).then(_OraActions.default.server.validateResult);
        };

        OraEshopAPI.validateSimAndImei = function(simList, imeiList) {
            var simImeiAPI = bsfContextPath + "/MobileResources/addSimImeiToCart";
            return (0, _OraApiUtils.postJsonObject)(simImeiAPI, {
                simList: simList,
                imeiList: imeiList
            }).then(_OraActions.default.server.validateResult);
        };

        OraEshopAPI.getMsisdnList = function(number, pattern) {
            var msisdnAPI = bsfContextPath + "/resources/msisdn/getMSISDNs";
            return (0, _OraApiUtils.postJson)(msisdnAPI, {
                number: number,
                pattern: pattern
            }).then(_OraActions.default.server.loadedMsisdnList);
        };

        OraEshopAPI.checkMsisdnType = function(number) {
            var msisdnAPI = bsfContextPath + "/resources/msisdn/checkMSISDNType";
            return (0, _OraApiUtils.postJson)(msisdnAPI, {
                number: number
            }).then(_OraActions.default.server.checkedMsisdnType);
        };

        OraEshopAPI.verifyNumber = function(number, processType) {
            var msisdnAPI = bsfContextPath + "/resources/msisdn/verifyNumber";
            return (0, _OraApiUtils.postJson)(msisdnAPI, {
                number: number,
                processType: processType
            }).then(_OraActions.default.server.verifiedNumber).catch(_OraActions.default.error.verifyNumber);
        };

        OraEshopAPI.releaseMsisdnList = function(msisdnList) {
            var msisdnAPI = bsfContextPath + "/resources/msisdn/unreserve";
            if (!msisdnList || msisdnList.length === 0) return Promise.resolve();
            return (0, _OraApiUtils.post)(msisdnAPI, {
                msisdnList: msisdnList
            }).then(_OraActions.default.server.releasedMsisdnList);
        };

        OraEshopAPI.rerollMsisdnList = function(number, pattern, msisdnList) {
            return this.getMsisdnList(number, pattern).then(this.releaseMsisdnList.bind(this, msisdnList));
        };

        OraEshopAPI.searchMsisdnList = function(number, pattern, msisdnList) {
            return this.releaseMsisdnList(msisdnList).then(this.getMsisdnList.bind(this, number, pattern));
        };

        OraEshopAPI.reserveMsisdn = function(msisdn) {
            var msisdnAPI = bsfContextPath + "/resources/msisdn/reserve";
            return (0, _OraApiUtils.postJson)(msisdnAPI, {
                msisdn: msisdn
            }).then(_OraActions.default.server.reservedMsisdn).catch(_OraActions.default.error.reserveMsisdn);
        };

        OraEshopAPI.getCart = function(id) {
            var cartAPI = bsfContextPath + "/koszyk/minikoszyk";
            return (0, _OraApiUtils.get)(cartAPI, {
                id: id
            }).then(_OraActions.default.server.loadedCart);
        };

        OraEshopAPI.getTelesalesCampaignData = function() {
            var tlsCampaignAPI = bsfContextPath + "/telesales/campaign/data";
            return (0, _OraApiUtils.get)(tlsCampaignAPI).then(_OraActions.default.server.loadedCampaignData);
        };

        OraEshopAPI.addToCart = function(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData) {
            var addTocartAPI = bsfContextPath + "/koszyk/dodaj";
            return (0, _OraApiUtils.postJson)(addTocartAPI, prepareAddToCartData(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData)).then(_OraActions.default.server.addedToCart).catch(_OraActions.default.error.addToCart);
        };

        OraEshopAPI.changeOffer = function(bundleNo, plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData) {
            var addTocartAPI = bsfContextPath + "/koszyk/change/" + bundleNo;
            return (0, _OraApiUtils.postJson)(addTocartAPI, prepareAddToCartData(plan, services, products, msisdn, process, consents, deviceVariantId, numberVerificationData)).then(_OraActions.default.server.addedToCart).catch(_OraActions.default.error.addToCart);
        };

        OraEshopAPI.doCheckoutStep = function(data) {
            var checkoutStepAPI = bsfContextPath + (0, _jquery.default)('#currentCheckoutStepUrl').val();
            return (0, _OraApiUtils.postJsonObject)(checkoutStepAPI, data).then(_OraActions.default.server.checkoutStepDone).catch(_OraActions.default.error.checkoutStepError);
        };

        OraEshopAPI.saveCheckoutStep = function(data) {
            var checkoutStepAPI = bsfContextPath + (0, _jquery.default)('#currentCheckoutStepUrl').val() + "/zapisz";
            return (0, _OraApiUtils.postJsonObject)(checkoutStepAPI, data).then(_OraActions.default.server.checkoutStepSaved);
        };

        OraEshopAPI.calculatePrice = function(offer, services, products, process, deviceVariantId) {
            var calculatePriceAPI = bsfContextPath + "/koszyk/oblicz";
            return (0, _OraApiUtils.postJson)(calculatePriceAPI, prepareAddToCartData(offer, services, products, null, process, deviceVariantId, null)).then(_OraActions.default.server.priceCalculated).catch(_OraActions.default.error.calculatePrice);
        };

        OraEshopAPI.calculateCart = function() {
            var calculateCartAPI = bsfContextPath + "/koszyk/przelicz";
            return (0, _OraApiUtils.get)(calculateCartAPI).then(_OraActions.default.server.cartCalculated);
        };

        OraEshopAPI.changeDevice = function(url, offerId, from) {
            document.location.href = url + "?propositionId=" + offerId + "&from=" + encodeURIComponent(from);
        };

        OraEshopAPI.gotoDeviceDetailsPage = function(url, variantId, from) {
            document.location.href = url + "?variantId=" + variantId + "&from=" + encodeURIComponent(from);
        };

        OraEshopAPI.getConsent = function(deliveryMethods) {
            var consentAPI = bsfContextPath + "/consents";
            return (0, _OraApiUtils.get)(consentAPI, {
                deliveryMethods: deliveryMethods
            }).then(_OraActions.default.server.loadedConsents);
        };

        OraEshopAPI.getOfferDeviceFilters = function(processType) {
            var deviceOfferFilterAPI = bsfContextPath + "/device/filters";
            var params = {
                availableProductsKey: getAvailableProductsKey(),
                processType: processType
            };
            return (0, _OraApiUtils.get)(deviceOfferFilterAPI, params).then(_OraActions.default.server.loadedDeviceOfferFilter);
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
            var deviceParametersAPI = bsfContextPath + "/device/parameters";
            var params = {
                propositionId: propositionId,
                processType: processType
            };
            return (0, _OraApiUtils.get)(deviceParametersAPI, params).then(_OraActions.default.server.loadedDeviceParameterFilter);
        };

        OraEshopAPI.getConsentByType = function(serviceVariantsCodes, consentType) {
            var discountAPI = bsfContextPath + "/consents/byTypeAndServiceVariants";
            var params = {
                serviceVariantCodes: serviceVariantsCodes,
                consentType: consentType
            };
            return (0, _OraApiUtils.get)(discountAPI, params).then(_OraActions.default.server.loadedConsentsByType);
        };

        OraEshopAPI.getCartConsents = function() {
            var cartConsentAPI = bsfContextPath + "/koszyk/zgody";
            return (0, _OraApiUtils.get)(cartConsentAPI).then(_OraActions.default.server.loadedCartConsents);
        };

        OraEshopAPI.verifyBenefitConsents = function(consents) {
            var consentAPI = bsfContextPath + "/koszyk/modifyConsentsInCart";
            return (0, _OraApiUtils.postJsonObject)(consentAPI, consents).then(_OraActions.default.server.benefitConsentsVerified);
            /*        return mock("",[
                        {
                            consentCode: "MOB_CE_MOB_CONS_PHONE_CONTACT_MARKETING_MOB_CD_MOB_CONS_PHONE_CONTACT_MARKETING_B2C_MOB_CHL_WWW_ACT_B2C_MOB_CHL_WWW_ACT_POS_MOB",
                            wasModificationSuccessful: true
                        }
                    ]).then(OraActions.server.benefitConsentsVerified);*/
        };

        OraEshopAPI.getBenefits = function() {
            //TODO implement
            return (0, _OraApiUtils.mock)("", [{
                code: "1",
                checked: false
            }, {
                code: "2",
                checked: false
            }, {
                code: "3",
                checked: false
            }]).then(_OraActions.default.server.loadedBenefits);
        };

        OraEshopAPI.getAvailableDeliveryMethods = function() {
            var deliveryMethodControllerAPI = bsfContextPath + "/checkout/delivery/delivery-methods";
            return (0, _OraApiUtils.get)(deliveryMethodControllerAPI, "").then(_OraActions.default.server.availableDeliveryMethods);
        };

        OraEshopAPI.validatePostCodeCBS = function(postCode, bundleNumbers) {
            var validatePostCode = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/miasto";
            return (0, _OraApiUtils.get)(validatePostCode, {
                postcode: postCode
            }).then(function(data) {
                return _OraActions.default.server.validatedPostCodeCBS(data, bundleNumbers);
            });
        };

        OraEshopAPI.validateStreetByPostCodeAndCity = function(city, postCode, term, bundleNumbers) {
            var validatePostCode = bsfContextPath + "/telefonybezumowy/zamowienie/wiele/adresyByCodeAndCity";
            return (0, _OraApiUtils.get)(validatePostCode, {
                term: term,
                cityname: city,
                postcode: postCode
            }).then(function(data) {
                return _OraActions.default.server.getStreetsByPostCodeAntCityCBS(data, bundleNumbers);
            });
        };

        OraEshopAPI.getDeliveryData = function() {
            var deliveryDataControllerAPI = bsfContextPath + "/checkout/delivery/delivery-data";
            return (0, _OraApiUtils.get)(deliveryDataControllerAPI, "").then(_OraActions.default.server.loadDeliveryData);
        };

        OraEshopAPI.getOrderData = function() {
            var orderDataControllerAPI = bsfContextPath + "/order/placedOrderSummary";
            return (0, _OraApiUtils.get)(orderDataControllerAPI, "").then(_OraActions.default.server.loadedOrderData);
        };

        OraEshopAPI.getAvailableDeliveryData = function() {
            var availableDeliveryData = bsfContextPath + "/checkout/delivery/availableDeliveryData";
            return (0, _OraApiUtils.get)(availableDeliveryData, "").then(_OraActions.default.server.loadAvailableDeliveryData);
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
            return (0, _OraApiUtils.get)(getDocumentsForProductsAPI, reqData).then(_OraActions.default.server.loadedDocumentsList);
        };

        OraEshopAPI.getDocumentsForCart = function() {
            var getDocumentsForCartAPI = bsfContextPath + "/documents/getDocumentsForCart";
            return (0, _OraApiUtils.get)(getDocumentsForCartAPI, "").then(_OraActions.default.server.loadedDocumentsForCart);
        };

        OraEshopAPI.getDocumentForConsents = function(consents, bundleNo) {
            var getDocumentForConsentsAPI = bsfContextPath + "/documents/getDocumentForConsentEligs";
            return (0, _OraApiUtils.get)(getDocumentForConsentsAPI, prepareWZRKConsentsCodes(consents)).then(_OraActions.default.server.loadedConsentsDocument.bind(null, bundleNo));
        };

        OraEshopAPI.getDocumentsFromOrder = function(orderGuid) {
            var getDocumentsFromOrderAPI = bsfContextPath + "/documents/getDocumentsFromOrder";
            return (0, _OraApiUtils.get)(getDocumentsFromOrderAPI, {
                orderGuid: orderGuid
            }).then(_OraActions.default.server.loadedDocumentsFromOrder);
        };

        var createDocumentAsyncResultAPI = bsfContextPath + "/documents/createDocumentAsyncResult";
        var getDocumentAsyncResultAPI = bsfContextPath + "/documents/getDocumentAsyncResult";

        function checkCreateDocumentAsyncResult() {
            return (0, _OraApiUtils.poll)(createDocumentAsyncResultAPI, null, function(status) {
                return status === true;
            });
        }

        function checkGetDocumentAsyncResult(documentCode) {
            return (0, _OraApiUtils.poll)(getDocumentAsyncResultAPI, documentCode, function(status) {
                return status === true;
            });
        }

        OraEshopAPI.getOrCreateDocument = function(documentCode, bundleNo) {
            var data = {
                "documentCode": documentCode,
                bundleNo: bundleNo
            };
            var checkDocumentExistenceUrl = bsfContextPath + "/documents/checkDocumentExistence";
            return (0, _OraApiUtils.get)(checkDocumentExistenceUrl, data).then(function(result) {
                if (!result) {
                    OraEshopAPI.createDocument(documentCode, bundleNo);
                } else {
                    OraEshopAPI.getDocument(documentCode, bundleNo);
                }
            });
        };

        OraEshopAPI.createDocument = function(documentCode, bundleNo) {
            var createDocumentUrl = bsfContextPath + "/documents/createDocuments";
            return (0, _OraApiUtils.get)(createDocumentUrl, {
                documentDefinitionCodes: documentCode,
                bundleNo: bundleNo,
                factory: "MOBILE"
            }).then(checkCreateDocumentAsyncResult).then(_OraActions.default.server.createdDocument.bind(null, documentCode, bundleNo)).catch(_OraActions.default.server.loadDocumentError.bind(null, documentCode, bundleNo));
        };

        OraEshopAPI.checkManualVerificationAsyncResult = function() {
            var checkManualVerificationAsyncResultAPI = bsfContextPath + "/koszyk/danezamawiajacego/checkManualVerificationAsyncResult";
            var iterations = 60;
            var timeout = 10000;
            return (0, _OraApiUtils.poll)(checkManualVerificationAsyncResultAPI, null, function(response) {
                return response.code !== "WAITING";
            }, iterations, timeout).then(_OraActions.default.server.cvManualVerificationResult).catch(_OraActions.default.error.cvManualVerificationResultError);
        };

        OraEshopAPI.getDocument = function(documentCode, bundleNo) {
            var data = {
                "documentCodes": documentCode,
                bundleNo: bundleNo
            };
            var findInLocalStorageUrl = bsfContextPath + "/documents/findDocumentInLocalStorage";
            return (0, _OraApiUtils.get)(findInLocalStorageUrl, data).then(function(path) {
                if (path[documentCode]) {
                    _OraActions.default.server.loadedDocument(documentCode, bundleNo, path);
                } else {
                    var getDocumentUrl = bsfContextPath + "/documents/getDocuments";
                    (0, _OraApiUtils.get)(getDocumentUrl, data).then(checkGetDocumentAsyncResult.bind(null, data)).then(_OraApiUtils.get.bind(null, findInLocalStorageUrl, data)).then(_OraActions.default.server.loadedDocument.bind(null, documentCode, bundleNo)).catch(_OraActions.default.server.loadDocumentError.bind(null, documentCode, bundleNo));
                }
            });
        };

        OraEshopAPI.getDocumentFromOrder = function(documentCode, orderGuid, bundleNumber) {
            var getDocumentFromOrderUri = bsfContextPath + "/documents/getDocumentFromOrder";
            return (0, _OraApiUtils.poll)(getDocumentFromOrderUri, {
                documentCode: documentCode,
                orderGuid: orderGuid,
                bundleNumber: bundleNumber
            }, function(response) {
                return response.status !== "LOADING";
            }, 20).then(_OraActions.default.server.getDocumentFromOrderCompleted).catch(_OraActions.default.error.failedToLoadDocumentFromOrder.bind(null, documentCode, bundleNumber));
        };
        /**
         * If bundleNo is passed, function removes bundle from cart,
         * if bundleNo is null whole cart is cleaned
         */


        OraEshopAPI.removeFromCart = function(bundleNo, id) {
            var removeFromCartUrl = bsfContextPath + "/koszyk/usun" + (bundleNo != null ? "/" + bundleNo : "");
            return (0, _OraApiUtils.post)(removeFromCartUrl, {
                id: id
            }).then(_OraActions.default.server.removedFromCart);
        };

        OraEshopAPI.checkReserveStatus = function(msisdn) {
            var checkReserveStatusUrl = bsfContextPath + "/resources/msisdn/checkReserveStatus";
            return (0, _OraApiUtils.post)(checkReserveStatusUrl, {
                msisdn: msisdn
            }).then(_OraActions.default.server.checkedReserveStatus.bind(null, msisdn));
        };

        OraEshopAPI.getNearestPoses = function(location, bundleNumbers, deliveryModeCode) {
            var getNearestPoses = bsfContextPath + "/checkout/pickup/nearest";
            return (0, _OraApiUtils.get)(getNearestPoses, {
                gpsLatitude: location.lat,
                gpsLongitude: location.lng,
                deliveryModeCode: deliveryModeCode
            }).then(_OraActions.default.server.nearestPosesLoaded.bind(null, bundleNumbers));
        };

        OraEshopAPI.getAssistModeState = function() {
            var assistModeState = bsfContextPath + "/assist/state";
            return (0, _OraApiUtils.get)(assistModeState, {}).then(_OraActions.default.server.assistModeStateLoaded).catch(_OraActions.default.error.createAssistStateError);
        };

        OraEshopAPI.leaveAssistMode = function() {
            var assistModeLeave = bsfContextPath + "/assist/leave";
            return (0, _OraApiUtils.post)(assistModeLeave, {}).then(_OraActions.default.server.assistModeStateChanged).catch(_OraActions.default.error.createAssistModeLeaveError);
        };

        OraEshopAPI.enterAssistMode = function(sisId) {
            var assistModeEnter = bsfContextPath + "/assist/enter";
            return (0, _OraApiUtils.post)(assistModeEnter, {
                sisId: sisId
            }).then(_OraActions.default.server.assistModeStateChanged).catch(_OraActions.default.error.createAssistModeEnterError);
        };

        OraEshopAPI.getEmployeeList = function(filters, limit) {
            var url = bsfContextPath + "/employee/list";
            var params = {
                lastName: filters.lastName,
                name: filters.name,
                location: filters.location,
                loginOtsa: filters.loginOtsa,
                fullBscs: filters.fullBscs,
                sisId: filters.sisId,
                offset: limit.offset,
                limit: limit.limit
            };
            return (0, _OraApiUtils.get)(url, params).then(_OraActions.default.server.employeeListLoaded).catch(_OraActions.default.error.createEmployeeListSearchError);
        };

        OraEshopAPI.getPhoneContactData = function() {
            var phoneContactDataControllerAPI = bsfContextPath + "/checkout/delivery/phoneContact";
            return (0, _OraApiUtils.get)(phoneContactDataControllerAPI, "").then(_OraActions.default.server.loadPhoneContactData);
        };

        OraEshopAPI.clearCustomerSession = function() {
            var clearCustomerSessionAPI = bsfContextPath + "/koszyk/danezamawiajacego/clearCustomerSession";
            return (0, _OraApiUtils.post)(clearCustomerSessionAPI, {}).then(_OraActions.default.server.clearCustomerSession).catch(_OraActions.default.error.clearCustomerSessionError);
        }; //serio Tomek? zrobil takie o dwie funkcje i uciekl


        OraEshopAPI.getDeviceList = function(filters, limit, processType, selectedDevice) {
            var url = bsfContextPath + "/device/list";
            var params = {
                propositionId: filters.propositionId,
                offset: limit.offset,
                limit: limit.limit,
                processType: processType,
                selectedDeviceId: selectedDevice.productId,
                "manufacturers[]": filters.manufacturers
            };
            console.log('----GET---- Filters ', filters.manufacturers);
            var prevFilters = JSON.parse(JSON.stringify(filters));
            return (0, _OraApiUtils.get)(url, params).then(_OraActions.default.server.deviceListLoaded.bind(null, prevFilters)).catch(_OraActions.default.error.createDeviceListSearchError);
        };

        OraEshopAPI.getDeviceListMore = function(filters, limit, processType, selectedDevice) {
            var url = bsfContextPath + "/device/list";
            var params = {
                propositionId: filters.propositionId,
                offset: limit.offset,
                limit: limit.limit,
                processType: processType,
                selectedDeviceId: selectedDevice.productId,
                "manufacturers[]": filters.manufacturers
            };
            console.log('----GET---- Filters ', filters.manufacturers);
            var prevFilters = JSON.parse(JSON.stringify(filters));
            return (0, _OraApiUtils.get)(url, params).then(_OraActions.default.server.deviceListMoreLoaded.bind(null, prevFilters)).catch(_OraActions.default.error.createDeviceListSearchError);
        };

        OraEshopAPI.validateAndOrderItems = function(data) {
            var url = bsfContextPath + "/goodsOrders/serialNumbers";
            return (0, _OraApiUtils.postJsonObject)(url, data).then(_OraActions.default.server.sapIfsReservationDone).catch(_OraActions.default.error.checkAndOrderSerialNumbersError);
        };

        OraEshopAPI.getSapFioriCorrectiveInvoiceLink = function() {
            var url = bsfContextPath + "/goodsOrders/fioriCorrectiveInvoiceLink";
            return (0, _OraApiUtils.get)(url, '').then(_OraActions.default.server.sapFioriCorrectiveInvoiceLinkReady);
        };

        OraEshopAPI.getSapFioriLinks = function(orderId) {
            var url = bsfContextPath + "/goodsOrders/fioriLinks/" + orderId;
            return (0, _OraApiUtils.get)(url, '').then(_OraActions.default.server.sapFioriLinksReady).catch(_OraActions.default.error.sapFioriLinksError);
        };

        OraEshopAPI.unlockSaleInSap = function(orderId) {
            var url = bsfContextPath + "/goodsOrders/unlockSale/" + orderId;
            return (0, _OraApiUtils.put)(url, '').then(_OraActions.default.server.unlockSaleInSapDone).catch(_OraActions.default.error.unlockSaleInSapError);
        };

        OraEshopAPI.getPaymentAndFiscalizationDataFromSap = function(orderId) {
            var url = bsfContextPath + "/goodsOrders/paymentAndFiscalization/" + orderId;
            return (0, _OraApiUtils.get)(url, '').then(_OraActions.default.server.paymentAndFiscalizationDataLoaded).catch(_OraActions.default.error.paymentAndFiscalizationDataError);
        };

        OraEshopAPI.checkUnlockSaleInSapStatus = function(orderId) {
            var url = bsfContextPath + "/goodsOrders/unlockSale/status/" + orderId;
            return (0, _OraApiUtils.get)(url, '').then(_OraActions.default.server.unlockSaleInSapDone).catch(_OraActions.default.error.unlockSaleInSapError);
        };

        OraEshopAPI.checkPaymentStatus = function(orderId) {
            var url = bsfContextPath + '/goodsOrders/paymentStatus/' + orderId;
            return (0, _OraApiUtils.get)(url, '').then(_OraActions.default.server.paymentStatusVerificationSuccess).catch(_OraActions.default.error.createOrderPaymentValidationError);
        };

        OraEshopAPI.orderCancel = function(orderId) {
            var url = bsfContextPath + '/goodsOrders/cancelOrder/' + orderId;
            return (0, _OraApiUtils.put)(url, '').then(_OraActions.default.server.orderCancelResponse).catch(_OraActions.default.error.orderCancelError);
        };

        OraEshopAPI.printOrderNumber = function(orderId) {
            var url = bsfContextPath + '/goodsOrders/checkoutPaymentPrintout/' + orderId;
            return (0, _OraApiUtils.getPdf)(url).then(_OraActions.default.server.printOutDocumentResult).catch(_OraActions.default.error.createOrderNumberPrintError);
        };

        OraEshopAPI.printInvoiceNumber = function(orderId) {
            var url = bsfContextPath + '/goodsOrders/invoicePrintout/' + orderId;
            return (0, _OraApiUtils.getPdf)(url).then(_OraActions.default.server.printOutDocumentResult).catch(_OraActions.default.error.createInvoicePrintError);
        };

        OraEshopAPI.getMNPFormData = function() {
            var url = bsfContextPath + "/mnp/getMNPFormData";
            return (0, _OraApiUtils.get)(url, "").then(_OraActions.default.server.loadedMNPData);
        };

        OraEshopAPI.getCustomerAdditionalDocuments = function() {
            var url = bsfContextPath + "/customer/getAdditionalDocuments";
            return (0, _OraApiUtils.get)(url, "").then(_OraActions.default.server.loadedCustomerAdditionalDocuments);
        };

        function throwAddToCartError(errorData) {
            _OraActions.default.error.addToCart(errorData);

            throw errorData;
        }

        function handleErrorIn200Response(responseData) {
            var errorData = {
                responseJSON: {
                    message: responseData.message
                }
            };
            throwAddToCartError(errorData);
        }

        OraEshopAPI.addMagnumToMultiCart = function(propositionId, deviceVariantId, voipNumber, knaNumber, voiceBundleMsisdn, dataBundleMsisdn, secondaryChoiceOffer) {
            var url = bsfContextPath + "/hapi/multiCart/add";
            var data = {
                propositionId: propositionId,
                deviceVariantId: deviceVariantId,
                voipNumber: voipNumber,
                knaNumber: knaNumber,
                voiceBundleMsisdn: voiceBundleMsisdn,
                dataBundleMsisdn: dataBundleMsisdn,
                secondaryChoiceOffer: secondaryChoiceOffer
            };
            return (0, _OraApiUtils.post)(url, data).then(function(responseData) {
                if (responseData && responseData.message && typeof responseData.message === "string") {
                    handleErrorIn200Response(responseData);
                } else {
                    _OraActions.default.server.addedToCart(responseData);
                }
            }).catch(throwAddToCartError);
        };

        OraEshopAPI.removeMagnumFromMultiCart = function(bundleNos) {
            var url = bsfContextPath + "/multiCart/remove";
            return (0, _OraApiUtils.postJsonObject)(url, bundleNos).then(_OraActions.default.server.removedFromCart).catch(_OraActions.default.error.removeFromCart);
        };

        OraEshopAPI.getChannel = function() {
            var url = bsfContextPath + "/customer/channel";
            return (0, _OraApiUtils.get)(url, "").then(_OraActions.default.server.loadedChannel);
        };

        return OraEshopAPI;
    }({});

    var _default = OraEshopAPI;
    _exports.default = _default;
});
//# sourceMappingURL=OraEshopAPI.js.map