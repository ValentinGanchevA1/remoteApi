define(["exports", "eshop/modules/checkout/constants/AgreementType"], function(_exports, _AgreementType) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _AgreementType = babelHelpers.interopRequireDefault(_AgreementType);

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

    var DataLayerUtils = function(DataLayerUtils) {
        //Jest tu spory jebnik, moze sie uda kiedys posprzatac ale watpie :(
        DataLayerUtils.pushPageCategoryDimension = function(categoryName) {
            DataLayerUtils.push({
                "pageType": categoryName
            });
        };

        DataLayerUtils.selectedDeviceData = {};

        DataLayerUtils.setSelectedDeviceData = function(deviceData) {
            DataLayerUtils.selectedDeviceData = deviceData;
        };

        DataLayerUtils.pushProductDetailsView = function(offerData, offerType, clientContext, selectedId, marketContext, salesChannel, _ref) {
            var loggedEmployee = _ref.loggedEmployee,
                assistedEmployee = _ref.assistedEmployee;

            if (offerType === "SIMFREE") {
                var device = DataLayerUtils.selectedDeviceData;
                DataLayerUtils.pushSimfreeProductImpression(device, device.devicePaymentsData.oneTimePayment.price, selectedId, marketContext, salesChannel, loggedEmployee, assistedEmployee);
            } else {
                var devicePayments = clientContext ? offerData.deviceData.inOffer.price.convergent : offerData.deviceData.inOffer.price.base;
                var event = {
                    id: offerData.id + "^" + selectedId,
                    name: "Dla Ciebie - " + offerData.rateplanName,
                    price: devicePayments.summaryPayment,
                    brand: salesChannel,
                    category: DataLayerUtils.createCategoryField({
                        offerType: offerType,
                        processType: offerData.processType,
                        marketContext: marketContext,
                        salesChannel: salesChannel
                    }),
                    variant: offerData.deviceData.name,
                    dimension4: devicePayments.oneTimePayment,
                    dimension5: devicePayments.summaryPayment,
                    dimension6: devicePayments.devicePayments[0].price,
                    dimension7: offerType !== "INSTALMENT_SALES_OF_GOODS" || offerType !== "INSTALMENT_SALES_OF_GOODS_NC" ? offerData.loyaltyLength : DataLayerUtils.findInstalmentLoyaltyLength(offerData)
                };
                DataLayerUtils.push(_objectSpread({}, {
                    event: "productDetail",
                    ecommerce: {
                        detail: {
                            actionField: {
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    salesChannel: salesChannel,
                                    offerType: offerType,
                                    processType: offerData.processType,
                                    marketContext: marketContext
                                })
                            },
                            // 'detail' actions have an optional list property.
                            products: [event]
                        }
                    }
                }, {}, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee)));
            }
        };

        DataLayerUtils.pushSimfreeProductImpression = function(productVariant, price, selectedId, marketContext, salesChannel, loggedEmployee, assistedEmployee) {
            var productData = _objectSpread({
                "ecommerce": {
                    "detail": {
                        "actionField": {
                            "list": "Szczegóły Telefonu"
                        },
                        "products": [{
                            "name": productVariant.name,
                            "id": selectedId,
                            "price": productVariant.devicePaymentsData && productVariant.devicePaymentsData.oneTimePayment && productVariant.devicePaymentsData.oneTimePayment.price,
                            "brand": productVariant.manufacturer,
                            "category": "Telefony/Sklep",
                            "variant": productVariant.colorDefinition && productVariant.colorDefinition.length ? productVariant.colorDefinition[0].name : "set"
                        }]
                    }
                },
                "pageType": "TelefonyBezUmowy"
            }, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee));

            console.warn("dataLayer pushSimfreeProductImpression", JSON.stringify(productData));
            DataLayerUtils.push(productData);
        };

        DataLayerUtils.pushSimfreeAddToCart = function(productVariant, price, marketContext, salesChannel, _ref2) {
            var loggedEmployee = _ref2.loggedEmployee,
                assistedEmployee = _ref2.assistedEmployee;
            var addToCartEventRecord;
            var productDescription = {
                'name': productVariant.name,
                'id': productVariant.productId,
                'price': price,
                'brand': productVariant.manufacturer,
                'category': 'Telefony/Sklep',
                'variant': productVariant.colorDefinition && productVariant.colorDefinition.length ? productVariant.colorDefinition[0].name : "set",
                'quantity': 1
            };
            addToCartEventRecord = DataLayerUtils.getAddToCartEventRecord();

            if (addToCartEventRecord) {
                var productDescriptionInProductData = DataLayerUtils.getProductDescription(addToCartEventRecord, productVariant.productId);

                if (productDescriptionInProductData) {
                    productDescriptionInProductData.quantity++;
                } else {
                    console.log(JSON.stringify(addToCartEventRecord));
                    addToCartEventRecord.ecommerce.add.products.push(productDescription);
                }
            } else {
                addToCartEventRecord = {
                    'event': 'addToCart',
                    'ecommerce': {
                        'currencyCode': 'PLN',
                        'add': {
                            'products': [productDescription]
                        }
                    },
                    'pageType': 'TelefonyBezUmowy'
                };
                addToCartEventRecord = _objectSpread({}, addToCartEventRecord, {}, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee));
                console.log(JSON.stringify(addToCartEventRecord));
                DataLayerUtils.push(addToCartEventRecord);
            }
        };

        DataLayerUtils.pushSimfreeProductList = function(products) {
            var productData = {
                'ecommerce': {
                    'currencyCode': 'PLN',
                    'impressions': products.data.map(function(product, index) {
                        var variant = product.variantList[0];
                        return {
                            'name': variant.name,
                            'id': variant.productId,
                            'price': product.price,
                            'brand': variant.manufacturer,
                            'category': 'Telefony/Sklep',
                            'variant': variant.colorDefinition && variant.colorDefinition.length ? variant.colorDefinition[0].name : "set",
                            'list': 'Wybierz-telefon',
                            'position': (products.currentPage - 1) * products.data.length + index + 1
                        };
                    })
                },
                'pageType': 'TelefonyBezUmowy'
            };
            console.log(JSON.stringify(productData));
            DataLayerUtils.push(productData);
        };

        DataLayerUtils.pushSimfreeProductClick = function(productVariant, price, marketContext, salesChannel, _ref3) {
            var loggedEmployee = _ref3.loggedEmployee,
                assistedEmployee = _ref3.assistedEmployee;

            var productData = _objectSpread({
                'event': 'productClick',
                'ecommerce': {
                    'click': {
                        'actionField': {
                            'list': 'Wybierz-telefon'
                        },
                        'products': [{
                            'name': productVariant.name,
                            'id': productVariant.productId,
                            'price': price,
                            'brand': productVariant.manufacturer,
                            'category': 'Telefony/Sklep',
                            'variant': productVariant.colorDefinition && productVariant.colorDefinition.length ? productVariant.colorDefinition[0].name : "set"
                        }]
                    }
                },
                'pageType': 'TelefonyBezUmowy'
            }, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee));

            console.log(JSON.stringify(productData));
            DataLayerUtils.push(productData);
        };

        DataLayerUtils.pushSimfreeCheckoutStep = function(stepNumber, terminals, checkoutStep) {
            if (!terminals) {
                return;
            }

            var productData = {
                'event': 'checkout',
                'ecommerce': {
                    'checkout': {
                        'actionField': {
                            'step': stepNumber,
                            'option': ''
                        },
                        'products': prepareConcatedTerminals(terminals, "productId").map(function(terminal) {
                            return {
                                'name': terminal.name,
                                'id': terminal.productId,
                                'price': terminal.checkoutPrice && terminal.checkoutPrice.price,
                                'brand': terminal.manufacturer,
                                'category': 'Telefony/Sklep',
                                'variant': terminal.colorDefinition && terminal.colorDefinition.name,
                                'quantity': terminals.filter(function(elem) {
                                    return elem.productId === terminal.productId;
                                }).length
                            };
                        })
                    }
                },
                'pageType': 'TelefonyBezUmowy',
                'checkoutStep': checkoutStep
            };
            console.log(JSON.stringify(productData));
            DataLayerUtils.push(productData);
        };

        DataLayerUtils.pushSimfreeSummaryStep = function(orderId, terminals, revenue) {
            var productData = {
                'ecommerce': {
                    'event': 'purchase',
                    'purchase': {
                        'actionField': {
                            'id': orderId,
                            'affiliation': 'Sklep',
                            'revenue': revenue //'tax':'0',                            // opcjonalnie
                            //'shipping': '0',                      // w zalezności od dostawy

                        },
                        'products': terminals.map(function(terminal) {
                            return {
                                'name': terminal.name,
                                'id': terminal.productId,
                                'price': terminal.checkoutPrice && terminal.checkoutPrice.price,
                                'brand': terminal.manufacturer,
                                'category': 'Telefony/Sklep',
                                'variant': terminal.colorDefinition && terminal.colorDefinition.name,
                                'quantity': terminals.filter(function(elem) {
                                    return elem.productId === terminal.productId;
                                }).length
                            };
                        })
                    }
                },
                'pageType': 'TelefonyBezUmowy'
            };
            console.log("pushSimfreeSummaryStep", JSON.stringify(productData));
            DataLayerUtils.push(productData);
        };

        DataLayerUtils.getAddToCartEventRecord = function() {
            var dataLayer = window.dataLayer || [];
            var addToCartEventRecords = dataLayer.filter(function(elem) {
                return elem.event === "addToCart";
            });
            if (addToCartEventRecords) return addToCartEventRecords[0];
            return null;
        };

        DataLayerUtils.getProductDescription = function(addToCartEventRecord, productId) {
            var productDescriptions = addToCartEventRecord.ecommerce.add.products.filter(function(product) {
                return product.id === productId;
            });
            if (productDescriptions) return productDescriptions[0];
            return null;
        };

        DataLayerUtils.push = function(data) {
            var dataLayer = window.dataLayer || [];
            dataLayer.push(data);
        };

        function prepareConcatedTerminals(x) {
            var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            if (n === 0) n = "elem";
            else n = "elem." + n;
            var uval = [];
            var unic = x.filter(function(elem, index, self) {
                if (uval.indexOf(eval(n)) < 0) {
                    uval.push(eval(n));
                    return index == self.indexOf(elem);
                }
            });
            return unic;
        } //zapewne te mapy gdzies do cmsa trzeba przeniesc


        DataLayerUtils.processTypeToCategoryMap = {
            ACTIVATION: "Nowy",
            MIGRATION_PRE_POST: "Migracja",
            MIGRATION_NJU_POST_TO_POST: "Migracja",
            MIGRATION_NJU_PRE_TO_POST: "Migracja",
            RETENTION: "Przedłużenie",
            MNP: "Przeniesienie",
            MNP_TWOSTEP: "Przeniesienie",
            INSTALMENT_SALES_OF_GOODS: "Na raty",
            INSTALMENT_SALES_OF_GOODS_NC: "Na raty/nieOrange"
        };
        DataLayerUtils.processTypeToMsisdnDescriptionMap = {
            ACTIVATION: "nowy" + '\xa0' + "numer:" + '\xa0',
            MIGRATION_PRE_POST: "zmieniam kartę na abonament dla numeru: ",
            RETENTION: "przedłużam umowę dla numeru: ",
            MNP: "przenoszę numer: ",
            MNP_TWOSTEP: "przenoszę numer: ",
            MIGRATION_ZETAFON_POST: "zmieniam zetafon na abonament dla numeru: ",
            MIGRATION_NJU_POST_TO_POST: "przenoszę numer z nju: ",
            MIGRATION_NJU_PRE_TO_POST: "przenoszę numer z nju: ",
            ASSIGNMENT: "przekazywany numer: ",
            ASSIGNMENT_DEATH: "przekazywany numer: ",
            ASSIGNMENT_B2C_B2B: "przekazywany numer: ",
            ASSIGNMENT_B2C_JDG: "przekazywany numer: ",
            MNP_APPLICATION: "Numer przenoszony: ",
            MNP_APPLICATION_SECOND_STEP: "przenoszę numer: "
        };
        DataLayerUtils.offerTypeToCategoryMap = {
            VOICE: "Usługi głosowe",
            DATA: "Internet mobilny",
            SIMFREE_INST: "Telefony",
            VOICE_LDF: "Usługi głosowe",
            DATA_LDF: "Internet",
            VOICE_ODF: "Usługi głosowe",
            DATA_ODF: "Internet"
        };
        DataLayerUtils.offerTypeToCommitmentMap = {
            VOICE: "/Abonament/",
            DATA: "/Abonament/",
            SIMFREE_INST: "/Sklep/",
            VOICE_LDF: "/Abonament/",
            DATA_LDF: "/Abonament/",
            VOICE_ODF: "/Abonament/",
            DATA_ODF: "/Abonament/"
        };
        DataLayerUtils.contractTypeToCategoryMap = {
            B2C: "B2C",
            B2B: "B2B",
            true: "B2B"
        };
        DataLayerUtils.marketContextToMarketMap = {
            B2C: "mass",
            B2B: "business"
        };
        DataLayerUtils.pageToListField = {
            landingPage: "wybór oferty"
        };
        DataLayerUtils.checkoutStepMap = {
            "cart-contents": {
                name: "offer-configuration",
                number: 1
            },
            "customer-data": {
                name: "customer-info",
                number: 2
            },
            "delivery-payment": {
                name: "payment-delivery",
                number: 3
            }
        };
        DataLayerUtils.checkoutStepPushed = false;

        DataLayerUtils.createCategoryField = function(_ref4) {
            var offerType = _ref4.offerType,
                processType = _ref4.processType,
                marketContext = _ref4.marketContext,
                salesChannel = _ref4.salesChannel;
            return salesChannel + "/" + DataLayerUtils.contractTypeToCategoryMap[marketContext] + "/" + DataLayerUtils.offerTypeToCategoryMap[offerType] + DataLayerUtils.offerTypeToCommitmentMap[offerType] + DataLayerUtils.processTypeToCategoryMap[processType];
        };

        DataLayerUtils.createListField = function(selectedFilters, page) {
            return DataLayerUtils.createCategoryField(selectedFilters) + " - " + DataLayerUtils.pageToListField[page];
        };

        DataLayerUtils.createListFieldForLandingPage = function(selectedFilters) {
            return DataLayerUtils.createListField(selectedFilters, "landingPage");
        };

        DataLayerUtils.createProductMetaItem = function(_ref5, _ref6, deviceData, _ref7) {
            var id = _ref5.id,
                name = _ref5.name,
                price = _ref5.price,
                dimension4 = _ref5.dimension4,
                dimension5 = _ref5.dimension5,
                dimension6 = _ref5.dimension6,
                dimension7 = _ref5.dimension7,
                _ref5$brand = _ref5.brand,
                brand = _ref5$brand === void 0 ? "Orange" : _ref5$brand,
                category = _ref5.category,
                _ref5$deviceId = _ref5.deviceId,
                deviceId = _ref5$deviceId === void 0 ? "none" : _ref5$deviceId,
                _ref5$list = _ref5.list,
                list = _ref5$list === void 0 ? true : _ref5$list,
                loyaltyLength = _ref5.loyaltyLength,
                _ref5$position = _ref5.position,
                position = _ref5$position === void 0 ? 0 : _ref5$position,
                _ref5$offerSwitchType = _ref5.offerSwitchType,
                offerSwitchType = _ref5$offerSwitchType === void 0 ? "Dla Ciebie" : _ref5$offerSwitchType;
            var offerType = _ref6.offerType,
                processType = _ref6.processType;
            var marketContext = _ref7.marketContext;
            var salesChannel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            return {
                id: id + "_" + (deviceData && deviceData.description || deviceData && deviceData.productCode || deviceId),
                name: offerSwitchType + " - " + name,
                price: price,
                brand: salesChannel,
                category: DataLayerUtils.createCategoryField({
                    offerType: offerType,
                    processType: processType,
                    marketContext: marketContext,
                    salesChannel: salesChannel
                }),
                variant: deviceData && (deviceData.name || deviceData.description) || "SIMO",
                list: list && DataLayerUtils.createListFieldForLandingPage({
                    offerType: offerType,
                    processType: processType,
                    marketContext: marketContext,
                    salesChannel: salesChannel
                }) || undefined,
                position: position + 1,
                dimension4: dimension4 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.summaryPayment,
                dimension5: dimension5 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.devicePayments[0].price,
                dimension6: dimension6 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.oneTimePayment,
                dimension7: dimension7 || loyaltyLength + ""
            };
        }; //To trzeba zamienic na te mappery co tam na dole robilem


        DataLayerUtils.createSummaryItem = function(_ref8, selectedFilters, deviceData) {
            var id = _ref8.bundleCode,
                price = _ref8.price,
                loyaltyLength = _ref8.loyaltyLength,
                position = _ref8.position,
                planName = _ref8.planName,
                list = _ref8.list,
                deviceId = _ref8.deviceId,
                monthlyCosts = _ref8.totalMonthlyPrices;
            return DataLayerUtils.createProductMetaItem({
                id: id,
                price: price,
                loyaltyLength: loyaltyLength,
                position: position,
                planName: planName,
                deviceId: deviceId,
                monthlyCosts: monthlyCosts,
                list: list
            }, selectedFilters, deviceData);
        };

        DataLayerUtils.createCommonElements = function(marketContext, salesChannel, loggedEmployee, assistedEmployee) {
            return {
                market: DataLayerUtils.marketContextToMarketMap[marketContext],
                channel: salesChannel || "",
                dimension19: loggedEmployee && loggedEmployee.fullBscs || assistedEmployee || "",
                dimension20: loggedEmployee && loggedEmployee.salesChannelName || assistedEmployee || "",
                dimension25: loggedEmployee && loggedEmployee.loginOtsa || assistedEmployee || "",
                dimension26: loggedEmployee && loggedEmployee.location || assistedEmployee || "",
                dimension27: "GlobalID"
            };
        };

        DataLayerUtils.createSIMOImpressionEvent = function() {
            var offers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var _ref9 = arguments.length > 1 ? arguments[1] : undefined,
                loyaltyLength = _ref9.loyaltyLength,
                offerType = _ref9.offerType,
                processType = _ref9.processType;

            var deviceData = arguments.length > 2 ? arguments[2] : undefined;

            var _ref10 = arguments.length > 3 ? arguments[3] : undefined,
                marketContext = _ref10.marketContext;

            var salesChannel = arguments.length > 4 ? arguments[4] : undefined;

            var _ref11 = arguments.length > 5 ? arguments[5] : undefined,
                loggedEmployee = _ref11.loggedEmployee,
                assistedEmployee = _ref11.assistedEmployee;

            var result = {
                event: "impressions",
                ecommerce: {
                    "currencyCode": "PLN",
                    "impressions": offers.map(function(offer, index) {
                        return DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                            position: index
                        })), {
                            loyaltyLength: loyaltyLength,
                            offerType: offerType,
                            processType: processType
                        }, deviceData, {
                            marketContext: marketContext
                        }, salesChannel);
                    })
                },
                pageType: "eshop",
                pageCategory: DataLayerUtils.offerTypeToCategoryMap[offerType],
                contractDuration: loyaltyLength[processType],
                phonePriceMonthly: "",
                // nie mamy jeszcze telefonów więc zostawiamy puste
                subscriptionMonthly: "" // jest kilka elementów, więc zostawiamy puste

            };
            result = _objectSpread({}, result, {}, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee));
            return result;
        };

        DataLayerUtils.createAddToCartSIMOEvent = function() {
            var offer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref12 = arguments.length > 1 ? arguments[1] : undefined,
                loyaltyLength = _ref12.loyaltyLength,
                offerType = _ref12.offerType,
                processType = _ref12.processType;

            var deviceData = arguments.length > 2 ? arguments[2] : undefined;
            var variantId = arguments.length > 3 ? arguments[3] : undefined;
            var position = arguments.length > 4 ? arguments[4] : undefined;

            var _ref13 = arguments.length > 5 ? arguments[5] : undefined,
                marketContext = _ref13.marketContext;

            var salesChannel = arguments.length > 6 ? arguments[6] : undefined;

            var _ref14 = arguments.length > 7 ? arguments[7] : undefined,
                loggedEmployee = _ref14.loggedEmployee,
                assistedEmployee = _ref14.assistedEmployee;

            return {
                event: "addToCart",
                ecommerce: {
                    currencyCode: "PLN",
                    add: {
                        products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                            index: position
                        }, {
                            deviceId: variantId
                        })), {
                            loyaltyLength: loyaltyLength,
                            offerType: offerType,
                            processType: processType
                        }, deviceData, {
                            marketContext: marketContext
                        }, salesChannel)]
                    }
                },
                pageType: "eshop",
                market: DataLayerUtils.marketContextToMarketMap[marketContext],
                channel: salesChannel || "",
                pageCategory: DataLayerUtils.offerTypeToCategoryMap[offerType],
                contractDuration: offer.loyaltyLength,
                phonePriceMonthly: deviceData && deviceData.inOffer.price.base.devicePayments[0].price || "",
                subscriptionMonthly: offer.price,
                dimension19: loggedEmployee && loggedEmployee.fullBscs || assistedEmployee || "",
                dimension20: loggedEmployee && loggedEmployee.salesChannelName || assistedEmployee || "",
                dimension25: loggedEmployee && loggedEmployee.loginOtsa || assistedEmployee || "",
                dimension26: loggedEmployee && loggedEmployee.location || assistedEmployee || "",
                dimension27: "GlobalID"
            };
        };

        DataLayerUtils.createAddToCartProductClickEvent = function() {
            var offer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref15 = arguments.length > 1 ? arguments[1] : undefined,
                loyaltyLength = _ref15.loyaltyLength,
                offerType = _ref15.offerType,
                processType = _ref15.processType;

            var deviceData = arguments.length > 2 ? arguments[2] : undefined;
            var variantId = arguments.length > 3 ? arguments[3] : undefined;
            var position = arguments.length > 4 ? arguments[4] : undefined;

            var _ref16 = arguments.length > 5 ? arguments[5] : undefined,
                marketContext = _ref16.marketContext;

            var salesChannel = arguments.length > 6 ? arguments[6] : undefined;

            var _ref17 = arguments.length > 7 ? arguments[7] : undefined,
                loggedEmployee = _ref17.loggedEmployee,
                assistedEmployee = _ref17.assistedEmployee;

            return {
                event: "productClick",
                ecommerce: {
                    click: {
                        actionField: {
                            list: DataLayerUtils.createListFieldForLandingPage({
                                offerType: offerType,
                                processType: processType,
                                marketContext: marketContext
                            })
                        },
                        // musi być taka jak w impressions
                        products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                            index: position
                        }, {
                            deviceId: variantId
                        })), {
                            loyaltyLength: loyaltyLength,
                            offerType: offerType,
                            processType: processType
                        }, deviceData, {
                            marketContext: marketContext
                        }, salesChannel)]
                    }
                },
                pageType: "eshop",
                market: DataLayerUtils.marketContextToMarketMap[marketContext],
                channel: salesChannel || "",
                pageCategory: DataLayerUtils.offerTypeToCategoryMap[offerType],
                contractDuration: offer.loyaltyLength,
                phonePriceMonthly: deviceData && deviceData.inOffer.price.base.devicePayments[0].price || "",
                subscriptionMonthly: offer.price,
                dimension19: loggedEmployee && loggedEmployee.fullBscs || assistedEmployee || "",
                dimension20: loggedEmployee && loggedEmployee.salesChannelName || assistedEmployee || "",
                dimension25: loggedEmployee && loggedEmployee.loginOtsa || assistedEmployee || "",
                dimension26: loggedEmployee && loggedEmployee.location || assistedEmployee || "",
                dimension27: "GlobalID"
            };
        };

        DataLayerUtils.createCheckoutStepEvent = function(checkoutData, _ref18, stepId, position) {
            var loyaltyLength = _ref18.loyaltyLength,
                offerType = _ref18.offerType,
                processType = _ref18.processType;
            return {
                event: "checkout",
                ecommerce: {
                    checkout: {
                        actionField: {
                            "step": DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].number
                        },
                        // musi być liczbą
                        products: checkoutData && checkoutData.map(function(data) {
                            return DataLayerUtils.createProductMetaItem(data, {
                                loyaltyLength: loyaltyLength,
                                offerType: offerType,
                                processType: processType
                            }, data.deviceData);
                        })
                    }
                },
                pageType: "eshop",
                market: "mass",
                contractDuration: checkoutData && checkoutData[0] && checkoutData[0].loyaltyLength,
                phonePriceMonthly: "",
                subscriptionMonthly: checkoutData && checkoutData[0] && checkoutData[0].price,
                checkoutStep: DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].name
            };
        };

        DataLayerUtils.createUniversalCheckoutStepEvent = function(checkoutData, stepId, _ref19) {
            var salesChannel = _ref19.salesChannel,
                loggedEmployee = _ref19.loggedEmployee,
                assistedEmployee = _ref19.assistedEmployee;
            var marketContext = checkoutData.net ? "B2B" : "B2C";
            var employee = assistedEmployee || loggedEmployee;
            return {
                event: "checkout",
                ecommerce: {
                    checkout: {
                        actionField: {
                            "step": DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].number
                        },
                        products: checkoutData && checkoutData.entries && DataLayerUtils.createProductCheckoutItem(_objectSpread({}, checkoutData, {
                            salesChannel: salesChannel
                        }))
                    }
                },
                checkoutStep: DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].name,
                pageType: "eshop",
                market: DataLayerUtils.marketContextToMarketMap[marketContext],
                channel: employee && employee.salesChannelName || salesChannel || "",
                pageCategory: "no data",
                dimension19: employee && employee.fullBscs || "",
                dimension20: employee && employee.salesChannelName || "",
                dimension25: employee && employee.loginOtsa || "",
                dimension26: employee && employee.location || "",
                dimension27: "GlobalID"
            };
        };

        DataLayerUtils.createProductCheckoutItem = function(_ref20) {
            var entries = _ref20.entries,
                marketContext = _ref20.net,
                _ref20$salesChannel = _ref20.salesChannel,
                salesChannel = _ref20$salesChannel === void 0 ? "" : _ref20$salesChannel;
            var showMetric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            console.warn("dataLayer createProductCheckoutItem", {
                entries: entries
            }, {
                marketContext: marketContext
            }, marketContext ? "B2B" : "B2C", showMetric, salesChannel);
            var result = [];
            entries.map(function(data) {
                if (data.entryType === "MOBILE") {
                    var variant = "SIMO";
                    var id = data.bundleOmniCode + "^" + data.bundleCode;
                    var price = data.totalMonthlyPrices && data.totalMonthlyPrices[0] && data.totalMonthlyPrices[0].price;
                    var oovResult = {
                        name: "Dla Ciebie - " + data.planName,
                        price: price,
                        brand: salesChannel,
                        quantity: 1,
                        //DO poprawy
                        category: DataLayerUtils.createCategoryField({
                            offerType: data.bundleType,
                            processType: data.processType,
                            marketContext: marketContext ? "B2B" : "B2C",
                            salesChannel: salesChannel
                        }),
                        dimension5: price,
                        dimension7: DataLayerUtils.findLoyaltyLengthInEntry(data)
                    };

                    if (showMetric && data.totalMonthlyPrices) {
                        oovResult.metric11 = data.totalMonthlyPrices.reduce(function(previousValue, tieredPrice) {
                            return previousValue + tieredPrice.price * ((tieredPrice.monthTo || data.loyaltyLength) - tieredPrice.monthFrom + 1);
                        }, 0);
                    }

                    if (data.terminals && data.terminals.length > 0) {
                        oovResult.dimension4 = data.terminals[0].checkoutPrice && data.terminals[0].checkoutPrice.price;
                        oovResult.dimension6 = data.terminals[0].monthlyPrices && data.terminals[0].monthlyPrices[0] && data.terminals[0].monthlyPrices[0].price || (data.terminals ? 0 : undefined);

                        if (showMetric) {
                            oovResult.metric11 = oovResult.metric11 + (data.terminals[0].checkoutPrice && data.terminals[0].checkoutPrice.price || 0);
                        }

                        variant = data.terminals[0].name;
                        id = id + "^" + data.terminals[0].productCode;
                    } else if (data.euroSets && data.euroSets.length > 0) {
                        oovResult.dimension4 = data.euroSets[0].checkoutPrice && data.euroSets[0].checkoutPrice.price;
                        oovResult.dimension6 = data.euroSets[0].monthlyPrices && data.euroSets[0].monthlyPrices[0] && data.euroSets[0].monthlyPrices[0].price || (data.euroSets ? 0 : undefined);

                        if (showMetric) {
                            oovResult.metric11 = oovResult.metric11 + (data.euroSets[0].checkoutPrice && data.euroSets[0].checkoutPrice.price || 0);
                        }

                        variant = data.euroSets[0].name;
                        id = id + "^" + data.euroSets[0].productCode;
                    } else {
                        id = id + "^none";
                    }

                    oovResult.variant = variant;
                    oovResult.id = id;
                    result.push(oovResult);
                } else if (data.entryType === "SIMFREE") {
                    data.terminals.map(function(terminalData) {
                        if (!result.find(function(elem) {
                                return elem.id === terminalData.productId;
                            })) {
                            var quantity = data.terminals.filter(function(elem) {
                                return elem.productId === terminalData.productId;
                            }).length;
                            var simfreeResult = {
                                name: terminalData.name,
                                id: data.bundleOmniCode + "^" + terminalData.productId,
                                price: terminalData.checkoutPrice && terminalData.checkoutPrice.price,
                                brand: terminalData.manufacturer,
                                category: 'Telefony/Sklep',
                                variant: terminalData.colorDefinition && terminalData.colorDefinition.name,
                                quantity: quantity
                            };

                            if (showMetric) {
                                simfreeResult.metric11 = terminalData.checkoutPrice.price * quantity;
                            }

                            result.push(simfreeResult);
                        }
                    });
                }
            });
            return result;
        }; //FIXME to samo co ta funkcja ponizej


        DataLayerUtils.createPickDeviceProductClickEvent = function() {
            var offer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref21 = arguments.length > 1 ? arguments[1] : undefined,
                loyaltyLength = _ref21.loyaltyLength,
                offerType = _ref21.offerType,
                processType = _ref21.processType;

            var position = arguments.length > 2 ? arguments[2] : undefined;
            var deviceData = arguments.length > 3 ? arguments[3] : undefined;

            var _ref22 = arguments.length > 4 ? arguments[4] : undefined,
                marketContext = _ref22.marketContext;

            var salesChannel = arguments.length > 5 ? arguments[5] : undefined;

            var _ref23 = arguments.length > 6 ? arguments[6] : undefined,
                loggedEmployee = _ref23.loggedEmployee,
                assistedEmployee = _ref23.assistedEmployee;

            return _objectSpread({
                event: "productClick",
                ecommerce: {
                    click: {
                        actionField: {
                            list: DataLayerUtils.createListFieldForLandingPage({
                                offerType: offerType,
                                processType: processType,
                                marketContext: marketContext,
                                salesChannel: salesChannel
                            })
                        },
                        // musi być taka jak w impressions
                        products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                            position: position
                        })), {
                            loyaltyLength: loyaltyLength,
                            offerType: offerType,
                            processType: processType
                        }, deviceData, {
                            marketContext: marketContext
                        }, salesChannel)]
                    }
                },
                pageType: "eshop",
                market: "mass",
                contractDuration: offer.loyaltyLength,
                phonePriceMonthly: "",
                subscriptionMonthly: offer.price
            }, DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee));
        };

        DataLayerUtils.createProductClickEvent = function() {
            var offer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var _ref24 = arguments.length > 1 ? arguments[1] : undefined,
                loyaltyLength = _ref24.loyaltyLength,
                offerType = _ref24.offerType,
                processType = _ref24.processType;

            var position = arguments.length > 2 ? arguments[2] : undefined;
            var deviceData = arguments.length > 3 ? arguments[3] : undefined;
            return {
                event: "productClick",
                ecommerce: {
                    click: {
                        actionField: {
                            list: DataLayerUtils.createListFieldForLandingPage({
                                offerType: offerType,
                                processType: processType,
                                net: offer.net
                            })
                        },
                        // musi być taka jak w impressions
                        products: [DataLayerUtils.createProductMetaItem(Object.assign(offer, {
                            position: position
                        }), {
                            loyaltyLength: loyaltyLength,
                            offerType: offerType,
                            processType: processType
                        }, deviceData)]
                    }
                },
                pageType: "eshop",
                market: "mass",
                contractDuration: offer.loyaltyLength,
                phonePriceMonthly: "",
                subscriptionMonthly: offer.price
            };
        };

        DataLayerUtils.createPurchaseEvent = function(omniId, _ref25, checkoutCost, deliveryCost, summary, salesChannel, loggedEmployee, assistedEmployee) {
            var loyaltyLength = _ref25.loyaltyLength,
                offerType = _ref25.offerType,
                processType = _ref25.processType;
            var oov = summary && summary.entries && summary.entries.find(function(offer) {
                return offer.entryType === "MOBILE";
            });

            var result = _objectSpread({
                event: "purchase",
                ecommerce: {
                    purchase: {
                        actionField: {
                            id: omniId,
                            // identyfikator transakcji
                            affiliation: oov ? "eshop - abonament" : "sklep",
                            revenue: DataLayerUtils.countRevenue(summary, checkoutCost),
                            //    Wartość abonamentu np. 49,99 zł na start za aktywcję + 39,99*24 miesiące =  1009,75 zł
                            //tax:'0',
                            shipping: deliveryCost,
                            coupon: summary.voucherCode
                        },
                        products: DataLayerUtils.createProductCheckoutItem({
                            entries: summary.entries,
                            net: summary.net,
                            salesChannel: salesChannel
                        }, true)
                    }
                },
                pageType: "eshop",
                market: "mass",
                checkoutStep: "summary"
            }, DataLayerUtils.createCommonElements(summary.net ? "B2B" : "B2C", salesChannel, loggedEmployee, assistedEmployee));

            if (oov) {
                if (oov.terminals && oov.terminals.length > 0) {
                    result.phonePriceMonthly = oov.terminals && oov.terminals[0] && oov.terminals[0].monthlyPrices && oov.terminals[0].monthlyPrices[0] && oov.terminals[0].monthlyPrices[0].price || (oov.terminals ? 0 : undefined);
                }

                result.contractDuration = summary.entries && summary.entries[0] && summary.entries[0].loyaltyLength;
                result.subscriptionMonthly = summary.entries && summary.entries[0] && summary.entries[0].monthlyPrices && summary.entries[0].monthlyPrices[0].price;
            }

            return result;
        };

        DataLayerUtils.countRevenue = function(offers, checkoutCost) {
            var result = (checkoutCost && checkoutCost.price || 0) + (offers.totalFirstBillPrice && offers.totalFirstBillPrice.price || 0);
            var oov = offers && offers.entries && offers.entries.filter(function(offer) {
                return offer.entryType === "MOBILE";
            });
            var tariffPayments = oov && oov.map(function(bundle) {
                return bundle.totalMonthlyPrices && bundle.totalMonthlyPrices.reduce(function(previousValue, tieredPrice) {
                    return previousValue + tieredPrice.price * ((tieredPrice.monthTo || bundle.loyaltyLength) - tieredPrice.monthFrom + 1);
                }, 0);
            }) || [];

            if (tariffPayments.length > 0) {
                var summaryTariffPayments = tariffPayments.reduce(function(prevValue, nextValue) {
                    return prevValue + nextValue;
                }, 0);
                result += summaryTariffPayments;
            }

            return result;
        };

        DataLayerUtils.createSummaryItemsArray = function(offers, _ref26) {
            var offerType = _ref26.offerType;
            var result = [];
            var oov = offers && offers.entries && offers.entries.find(function(offer) {
                return offer.entryType === "MOBILE";
            });
            var wiking = offers && offers.entries && offers.entries.find(function(offer) {
                return offer.entryType === "SIMFREE";
            });

            if (oov) {
                var variant = "";
                var variantCode = "";

                if (oov.terminals.length > 0) {
                    variant = oov.terminals.reduce(function(prev, next) {
                        return prev + next.name + "^";
                    }, "");
                    variant = variant.substring(0, variant.length - 1);
                    variantCode = oov.terminals.reduce(function(prev, next) {
                        return prev + "^" + next.productCode;
                    }, "");
                } else if (oov.euroSets.length > 0) {
                    variant = oov.euroSets.reduce(function(prev, next) {
                        return prev + next.name + "^";
                    }, "");
                    variant = variant.substring(0, variant.length - 1);
                    variantCode = oov.euroSets.reduce(function(prev, next) {
                        return prev + "^" + next.productCode;
                    }, "");
                } else {
                    variant = "SIMO";
                    variantCode = "^none";
                }

                var oovDLObject = {
                    name: "Dla Ciebie - " + oov && oov.planName,
                    id: oov.bundleCode + variantCode,
                    price: oov.monthlyPrices && oov.monthlyPrices[0] && oov.monthlyPrices[0].price,
                    brand: "Orange",
                    category: DataLayerUtils.createCategoryField({
                        offerType: offerType,
                        processType: oov.processType,
                        net: offers.net
                    }),
                    variant: variant,
                    quantity: 1,
                    dimension5: oov.monthlyPrices && oov.monthlyPrices[0] && oov.monthlyPrices[0].price,
                    // abonament
                    dimension7: DataLayerUtils.findLoyaltyLengthInEntry(oov) // czas trwania umowy w msc

                };

                if (oov.terminals && oov.terminals.length > 0) {
                    oovDLObject.dimension4 = oov.terminals[0] && oov.terminals[0].checkoutPrice && oov.terminals[0].checkoutPrice.price;
                    oovDLObject.dimension6 = oov.terminals && oov.terminals[0] && oov.terminals[0].monthlyPrices && oov.terminals[0].monthlyPrices[0] && oov.terminals[0].monthlyPrices[0].price || (oov.terminals ? 0 : undefined); // miesiecznie za telefon powinnismy zliczac kazdy terminal
                } else if (oov.euroSets && oov.euroSets.length > 0) {
                    oovDLObject.dimension4 = oov.euroSets[0] && oov.euroSets[0].checkoutPrice && oov.euroSets[0].checkoutPrice.price;
                    oovDLObject.dimension6 = oov.euroSets && oov.euroSets[0] && oov.euroSets[0].monthlyPrices && oov.euroSets[0].monthlyPrices[0] && oov.euroSets[0].monthlyPrices[0].price || (oov.euroSets ? 0 : undefined); // miesiecznie za telefon powinnismy zliczac kazdy terminal
                }

                result.push(oovDLObject);
            }

            if (wiking) {
                wiking.terminals.map(function(terminal, i, array) {
                    if (!result.find(function(elem) {
                            return elem.id === terminal.productId;
                        })) {
                        result.push({
                            "name": terminal.name,
                            "id": terminal.productId,
                            "price": terminal.checkoutPrice && terminal.checkoutPrice.price,
                            "brand": terminal.manufacturer,
                            "category": "Telefony/Sklep",
                            "variant": terminal.colorDefinition && terminal.colorDefinition.name,
                            "quantity": array.filter(function(elem) {
                                return elem.productId === terminal.productId;
                            }).length
                        });
                    }
                });
            }

            return result;
        };

        DataLayerUtils.createProductListImpressions = function(deviceList, filters) {
            var result = {
                event: "impressions",
                ecommerce: {
                    "currencyCode": "PLN",
                    "impressions": deviceList.data.map(function(device, index) {
                        if (filters.offerType === "SIMFREE") {
                            var variant = device.variantList[0];
                            return {
                                name: variant.name,
                                id: variant.productId,
                                price: device.price,
                                brand: variant.manufacturer,
                                category: "Telefony/Sklep",
                                variant: variant.colorDefinition && variant.colorDefinition.length ? variant.colorDefinition[0].name : "set",
                                list: "Wybierz-telefon",
                                position: (deviceList.currentPage - 1) * deviceList.data.length + index + 1
                            };
                        } else if (filters.selectedOffer) {
                            if (!device.inOffer) return {};
                            var selectedOffer = filters.selectedOffer;
                            var devicePayments = filters.clientContext ? device.inOffer.price.convergent : device.inOffer.price.base;
                            return {
                                id: filters.propositionItemId + "^" + device.productId,
                                name: "Dla Ciebie - " + selectedOffer.rateplanName,
                                price: devicePayments.summaryPayment,
                                brand: filters.salesChannel,
                                category: DataLayerUtils.createCategoryField({
                                    offerType: filters.offerType,
                                    processType: filters.process,
                                    marketContext: filters.marketContext,
                                    salesChannel: filters.salesChannel
                                }),
                                //DataLayerUtils.createCategoryField({offerType,processType}),
                                variant: device.name,
                                //deviceData && (deviceData.name || deviceData.description ) || "SIMO",
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    offerType: filters.offerType,
                                    processType: filters.process,
                                    marketContext: filters.marketContext,
                                    salesChannel: filters.salesChannel
                                }),
                                //list && DataLayerUtils.createListFieldForLandingPage({offerType,processType}) || undefined,
                                position: (deviceList.currentPage - 1) * deviceList.data.length + index + 1,
                                //position + 1,
                                dimension4: devicePayments.oneTimePayment,
                                //dimension4 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.summaryPayment,
                                dimension5: devicePayments.summaryPayment,
                                //dimension5 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.devicePayments[0].price,
                                dimension6: devicePayments.devicePayments[0].price,
                                //dimension6 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.oneTimePayment,
                                dimension7: selectedOffer.processType !== "INSTALMENT_SALES_OF_GOODS" || selectedOffer.processType !== "INSTALMENT_SALES_OF_GOODS_NC" ? selectedOffer.loyaltyLength : devicePayments.devicePayments[0].monthTo
                            };
                        }
                    })
                },
                pageType: "eshop",
                market: "mass"
            };
            result = _objectSpread({}, result, {}, DataLayerUtils.createCommonElements(filters.marketContext, filters.salesChannel, filters.loggedEmployee, filters.assistedEmployee));
            return result;
        };

        DataLayerUtils.pushSIMOImpressionEvent = function(offers, selectedFilters, marketContext, salesChannel, _ref27) {
            var loggedEmployee = _ref27.loggedEmployee,
                assistedEmployee = _ref27.assistedEmployee;
            var deviceData = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
            DataLayerUtils.push(DataLayerUtils.createSIMOImpressionEvent(offers, selectedFilters, {
                deviceData: deviceData
            }, {
                marketContext: marketContext
            }, salesChannel, {
                loggedEmployee: loggedEmployee,
                assistedEmployee: assistedEmployee
            }));
        };

        DataLayerUtils.pushAddToCartOfferEvent = function(offer, selectedFilters) {
            var deviceData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var variantId = arguments.length > 3 ? arguments[3] : undefined;
            var position = arguments.length > 4 ? arguments[4] : undefined;
            var marketContext = arguments.length > 5 ? arguments[5] : undefined;
            var salesChannel = arguments.length > 6 ? arguments[6] : undefined;

            var _ref28 = arguments.length > 7 ? arguments[7] : undefined,
                loggedEmployee = _ref28.loggedEmployee,
                assistedEmployee = _ref28.assistedEmployee;

            return DataLayerUtils.push(DataLayerUtils.createAddToCartSIMOEvent(offer, selectedFilters, deviceData, variantId, position, {
                marketContext: marketContext
            }, salesChannel, {
                loggedEmployee: loggedEmployee,
                assistedEmployee: assistedEmployee
            }));
        };

        DataLayerUtils.pushAddToCartProductClickOfferEvent = function(offer, selectedFilters) {
            var deviceData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var variantId = arguments.length > 3 ? arguments[3] : undefined;
            var position = arguments.length > 4 ? arguments[4] : undefined;
            var marketContext = arguments.length > 5 ? arguments[5] : undefined;
            var salesChannel = arguments.length > 6 ? arguments[6] : undefined;

            var _ref29 = arguments.length > 7 ? arguments[7] : undefined,
                loggedEmployee = _ref29.loggedEmployee,
                assistedEmployee = _ref29.assistedEmployee;

            DataLayerUtils.push(DataLayerUtils.createAddToCartProductClickEvent(offer, selectedFilters, deviceData, variantId, position, {
                marketContext: marketContext
            }, salesChannel, {
                loggedEmployee: loggedEmployee,
                assistedEmployee: assistedEmployee
            }));
        };

        DataLayerUtils.pushProductClickEvent = function(offer, selectedFilters, position) {
            var product = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var marketContext = arguments.length > 4 ? arguments[4] : undefined;
            var salesChannel = arguments.length > 5 ? arguments[5] : undefined;

            var _ref30 = arguments.length > 6 ? arguments[6] : undefined,
                loggedEmployee = _ref30.loggedEmployee,
                assistedEmployee = _ref30.assistedEmployee;

            return DataLayerUtils.push(DataLayerUtils.createPickDeviceProductClickEvent(offer, selectedFilters, position, product, {
                marketContext: marketContext
            }, salesChannel, {
                loggedEmployee: loggedEmployee,
                assistedEmployee: assistedEmployee
            }));
        };

        DataLayerUtils.pushPurchaseEvent = function(summary, omniId, filters, checkoutCost, deliveryCost, salesChannel, loggedEmployee, assistedEmployee) {
            return DataLayerUtils.push(DataLayerUtils.createPurchaseEvent(omniId, filters, checkoutCost, deliveryCost, summary, salesChannel, loggedEmployee, assistedEmployee));
        };

        DataLayerUtils.pushCheckoutStepEvent = function(checkoutData, selectedFilters, stepId, propositionId, position, _ref31) {
            var salesChannel = _ref31.salesChannel,
                loggedEmployee = _ref31.loggedEmployee,
                assistedEmployee = _ref31.assistedEmployee;
            DataLayerUtils.push(DataLayerUtils.createUniversalCheckoutStepEvent(checkoutData, stepId, {
                salesChannel: salesChannel,
                loggedEmployee: loggedEmployee,
                assistedEmployee: assistedEmployee
            }));
        }; // DataLayerUtils.createCheckoutStepEvent(checkoutData/*DataLayerUtils.cartResponseToOfferDataMapper(checkoutData)*/,selectedFilters,stepId,position))


        DataLayerUtils.pushProductListClickEvent = function(offer, selectedFilters, position, product) {
            return DataLayerUtils.push(DataLayerUtils.createProductClickEvent(DataLayerUtils.offerFieldsNameMapper(offer), selectedFilters, position, product));
        };

        DataLayerUtils.pushProductListImpressions = function(deviceList, filters) {
            return DataLayerUtils.push(DataLayerUtils.createProductListImpressions(deviceList, filters));
        };

        DataLayerUtils.createProductItemMapper = function(_ref32) {
            var id = _ref32.id,
                price = _ref32.price,
                loyaltyLength = _ref32.loyaltyLength,
                position = _ref32.position,
                name = _ref32.rateplanName,
                deviceId = _ref32.deviceId;
            return {
                id: id,
                price: price,
                loyaltyLength: loyaltyLength,
                position: position,
                name: name,
                deviceId: deviceId
            };
        };

        DataLayerUtils.offerFieldsNameMapper = function(_ref33) {
            var id = _ref33.id,
                name = _ref33.rateplanName,
                loyaltyLength = _ref33.loyaltyLength,
                price = _ref33.price,
                payments = _ref33.payments;
            return {
                id: id,
                name: name,
                loyaltyLength: loyaltyLength,
                price: payments.basePrice.originalGrossPrice
            };
        };

        DataLayerUtils.cartResponseToOfferDataMapper = function(_ref34) {
            var entries = _ref34.entries;
            return entries && entries.map(function(offer) {
                return {
                    dimension4: offer && offer.terminals && offer.terminals[0] && offer.terminals[0].checkoutPrice && offer.terminals[0].checkoutPrice.price,
                    dimension5: offer && offer.totalMonthlyPrices && offer.totalMonthlyPrices[0] && offer.totalMonthlyPrices[0].price,
                    dimension6: offer && offer.terminals && offer.terminals[0] && offer.terminals[0].monthlyPrices && offer.terminals[0].monthlyPrices[0] && offer.terminals[0].monthlyPrices[0].price || (offer.terminals ? 0 : undefined),
                    dimension7: offer && DataLayerUtils.findLoyaltyLengthInEntry(offer),
                    deviceData: offer && offer.terminals && offer.terminals[0],
                    name: offer && offer.planName,
                    id: offer && offer.bundleCode,
                    price: offer && offer.totalMonthlyPrices && offer.totalMonthlyPrices[0] && offer.totalMonthlyPrices[0].price,
                    loyaltyLength: offer && offer.loyaltyLength,
                    list: false
                };
            });
        };

        DataLayerUtils.findInstalmentLoyaltyLength = function(data) {
            if (data && data.deviceData && data.deviceData.inOffer && data.deviceData.inOffer && data.deviceData.inOffer.price.base.devicePayments) {
                return data.deviceData.inOffer && data.deviceData.inOffer.price.base.devicePayments[0].monthTo;
            }

            return "0";
        };

        DataLayerUtils.findLoyaltyLengthInEntry = function(entry) {
            if (entry.bundleType !== "SIMFREE_INST") {
                return entry.loyaltyLength;
            }

            return entry.totalMonthlyPrices[0].monthTo;
        };

        DataLayerUtils.pushCheckoutStepOneTime = function(data, selectedFilters, stepId, propositionId, position, _ref35) {
            var salesChannel = _ref35.salesChannel,
                loggedEmployee = _ref35.loggedEmployee,
                assistedEmployee = _ref35.assistedEmployee;

            if (!DataLayerUtils.checkoutStepPushed) {
                DataLayerUtils.pushCheckoutStepEvent(data, selectedFilters, stepId, propositionId, position, {
                    salesChannel: salesChannel,
                    loggedEmployee: loggedEmployee,
                    assistedEmployee: assistedEmployee
                });
                DataLayerUtils.checkoutStepPushed = true;
            }
        };

        DataLayerUtils.pushDeviceDetailsEvent = function(productVariant, product, offer, selectedFilters, position, marketContext, salesChannel, _ref36) {
            var loggedEmployee = _ref36.loggedEmployee,
                assistedEmployee = _ref36.assistedEmployee;

            if (!offer) {
                //Wiking
                DataLayerUtils.pushSimfreeProductClick(productVariant, product.price, marketContext, salesChannel, {
                    loggedEmployee: loggedEmployee,
                    assistedEmployee: assistedEmployee
                });
            } else {
                //Nie wiking
                DataLayerUtils.pushProductClickEvent(offer, selectedFilters, position, product, marketContext, salesChannel, {
                    loggedEmployee: loggedEmployee,
                    assistedEmployee: assistedEmployee
                });
            }
        };

        DataLayerUtils.pushVisitComparatorPage = function(products) {
            var productNames = createNames(products);
            var url = window.location.href.split('?')[0];
            var creative = 'porównywarka';
            var promotions = [];
            products.map(function(product, i) {
                var promotion = {
                    'id': url,
                    'name': product.name,
                    'creative': creative,
                    'position': i + 1
                };
                promotions.push(promotion);
            });
            var eventPhoneCompare = {
                'event': 'phoneCompare',
                'phones': productNames,
                'ecommerce': {
                    'promoView': {
                        'promotions': promotions
                    }
                }
            };
            DataLayerUtils.push(eventPhoneCompare);
        };

        function createNames(products) {
            var names = "";
            products.map(function(product, i) {
                names += product.name;

                if (products.length > i + 1) {
                    names += "|";
                }
            });
            return names;
        }

        DataLayerUtils.pushComparatorDeviceDetails = function(device, products) {
            DataLayerUtils.push(createEventPhoneDetails(device));
            DataLayerUtils.push(createEventPhoneAddToCart(device, products));
        };

        function createEventPhoneAddToCart(device, products) {
            return {
                'event': 'promotionClick',
                'ecommerce': {
                    'promoClick': {
                        'promotions': [{
                            'id': window.location.href.split('?')[0],
                            'name': device.name,
                            'creative': 'porównywarka',
                            'position': findDevicePosition(device, products)
                        }]
                    }
                }
            };
        }

        function findDevicePosition(device, products) {
            var position = 0;
            products.map(function(product, i) {
                if (device.name === product.name) {
                    position = i;
                }
            });
            return position + 1;
        }

        function createEventPhoneDetails(device) {
            return {
                'event': 'phoneDetail',
                'phones': device.name
            };
        }

        DataLayerUtils.pushAddDeviceToCompare = function(device, products) {
            var productNames = createNames(products);
            var promotions = [];
            var creative = 'porównywarka';
            var url = window.location.href.split('?')[0];
            products.map(function(product, i) {
                var promotion = {
                    'id': url,
                    'name': product.name,
                    'creative': creative,
                    'position': i + 1
                };
                promotions.push(promotion);
            });
            var selectedDevice = findDevice(device, products);
            var eventPhoneCompare = {
                'event': 'phoneCompare',
                'phones': productNames,
                'ecommerce': {
                    'promoView': {
                        'id': url,
                        'creative': creative,
                        'name': selectedDevice.name,
                        'position': findDevicePosition(selectedDevice, products)
                    }
                }
            };
            DataLayerUtils.push(eventPhoneCompare);
        };

        function findDevice(device, products) {
            var selectedDevice = null;
            products.map(function(product) {
                if (device === product.productId) {
                    selectedDevice = product;
                }
            });
            return selectedDevice;
        }

        DataLayerUtils.pushRemoveDeviceFromList = function(products) {
            var productNames = createNames(products);
            var promotions = [];
            var eventPhoneCompare = {
                'event': 'phoneCompare',
                'phones': productNames,
                'ecommerce': {
                    'promoView': {
                        'promotions': promotions
                    }
                }
            };
            DataLayerUtils.push(eventPhoneCompare);
        };

        DataLayerUtils.pushAndLogData = function(data) {
            console.log("dataLayer ", JSON.stringify(data));
            DataLayerUtils.push(data);
        };

        DataLayerUtils.pushSelectedAgreementType = function(selectedAgreementType) {
            switch (selectedAgreementType) {
                case _AgreementType.default.DIGITAL:
                    DataLayerUtils.pushAndLogData({
                        'event': 'eumowa_button'
                    });
                    break;

                case _AgreementType.default.PAPER:
                    DataLayerUtils.pushAndLogData({
                        'event': 'papierowa_umowa_button'
                    });
                    break;
            }
        };

        DataLayerUtils.pushDocumentsRead = function() {
            DataLayerUtils.pushAndLogData({
                'event': 'zapoznaj_button'
            });
        };

        DataLayerUtils.pushAgreementAccepted = function() {
            DataLayerUtils.pushAndLogData({
                'event': 'akceptuj_eumowa_button'
            });
        };

        DataLayerUtils.pushOrderResigned = function(agreementType) {
            switch (agreementType) {
                case _AgreementType.default.DIGITAL:
                    DataLayerUtils.pushAndLogData({
                        'event': 'rezygnacja_eumowa_button'
                    });
                    break;
            }
        };

        DataLayerUtils.pushFinalizeOrder = function(agreementType) {
            switch (agreementType) {
                case _AgreementType.default.DIGITAL:
                    DataLayerUtils.pushAndLogData({
                        'event': 'zawieram_place_button'
                    });
                    break;

                case _AgreementType.default.PAPER:
                    DataLayerUtils.pushAndLogData({
                        'event': 'zamawiam_button'
                    });
                    break;
            }
        };

        DataLayerUtils.pushAgreementVisibilityEvent = function(agreementType) {
            switch (agreementType) {
                case _AgreementType.default.DIGITAL:
                    DataLayerUtils.pushAndLogData({
                        'event': 'eumowa_show_action'
                    });
                    break;

                case _AgreementType.default.PAPER:
                    DataLayerUtils.pushAndLogData({
                        'event': 'umowapapierowa_show_action'
                    });
                    break;
            }
        };

        return DataLayerUtils;
    }({});

    var _default = DataLayerUtils;
    _exports.default = _default;
});
//# sourceMappingURL=DataLayerUtils.js.map