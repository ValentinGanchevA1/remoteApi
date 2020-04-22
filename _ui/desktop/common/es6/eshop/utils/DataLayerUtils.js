import AgreementType from "eshop/modules/checkout/constants/AgreementType";

const DataLayerUtils = function(DataLayerUtils) {
    //Jest tu spory jebnik, moze sie uda kiedys posprzatac ale watpie :(
    DataLayerUtils.pushPageCategoryDimension = function(categoryName) {
        DataLayerUtils.push({
            "pageType": categoryName
        });
    };

    DataLayerUtils.selectedDeviceData = {};

    DataLayerUtils.setSelectedDeviceData = deviceData => {
        DataLayerUtils.selectedDeviceData = deviceData;
    };

    DataLayerUtils.pushProductDetailsView = (offerData, offerType, clientContext, selectedId, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => {
        if (offerType === "SIMFREE") {
            const device = DataLayerUtils.selectedDeviceData;
            DataLayerUtils.pushSimfreeProductImpression(device, device.devicePaymentsData.oneTimePayment.price, selectedId, marketContext, salesChannel, loggedEmployee, assistedEmployee)
        } else {
            const devicePayments = clientContext ? offerData.deviceData.inOffer.price.convergent : offerData.deviceData.inOffer.price.base;
            const event = {
                id: offerData.id + "^" + selectedId,
                name: "Dla Ciebie - " + offerData.rateplanName,
                price: devicePayments.summaryPayment,
                brand: salesChannel,
                category: DataLayerUtils.createCategoryField({
                    offerType,
                    processType: offerData.processType,
                    marketContext,
                    salesChannel
                }),
                variant: offerData.deviceData.name,
                dimension4: devicePayments.oneTimePayment,
                dimension5: devicePayments.summaryPayment,
                dimension6: devicePayments.devicePayments[0].price,
                dimension7: offerType !== "INSTALMENT_SALES_OF_GOODS" || offerType !== "INSTALMENT_SALES_OF_GOODS_NC" ? offerData.loyaltyLength : DataLayerUtils.findInstalmentLoyaltyLength(offerData)
            };
            DataLayerUtils.push({
                ...{
                    event: "productDetail",
                    ecommerce: {
                        detail: {
                            actionField: {
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    salesChannel,
                                    offerType,
                                    processType: offerData.processType,
                                    marketContext,
                                }),
                            }, // 'detail' actions have an optional list property.
                            products: [event],
                        },
                    },
                },
                ...DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee),
            });
        }
    };

    DataLayerUtils.pushSimfreeProductImpression = function(productVariant, price, selectedId, marketContext, salesChannel, loggedEmployee, assistedEmployee) {
        const productData = {
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
                        "variant": (productVariant.colorDefinition && productVariant.colorDefinition.length) ? productVariant.colorDefinition[0].name : "set"
                    }],
                },
            },
            "pageType": "TelefonyBezUmowy",
            ...DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee)
        };
        console.warn("dataLayer pushSimfreeProductImpression", JSON.stringify(productData));
        DataLayerUtils.push(productData);
    };

    DataLayerUtils.pushSimfreeAddToCart = function(productVariant, price, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) {
        let addToCartEventRecord;
        let productDescription = {
            'name': productVariant.name,
            'id': productVariant.productId,
            'price': price,
            'brand': productVariant.manufacturer,
            'category': 'Telefony/Sklep',
            'variant': (productVariant.colorDefinition && productVariant.colorDefinition.length) ? productVariant.colorDefinition[0].name : "set",
            'quantity': 1
        };
        addToCartEventRecord = DataLayerUtils.getAddToCartEventRecord();
        if (addToCartEventRecord) {
            let productDescriptionInProductData = DataLayerUtils.getProductDescription(addToCartEventRecord, productVariant.productId);
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
            addToCartEventRecord = {
                ...addToCartEventRecord,
                ...(DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee))
            };
            console.log(JSON.stringify(addToCartEventRecord));
            DataLayerUtils.push(addToCartEventRecord);
        }
    };

    DataLayerUtils.pushSimfreeProductList = function(products) {
        let productData = {
            'ecommerce': {
                'currencyCode': 'PLN',
                'impressions': products.data.map((product, index) => {
                    let variant = product.variantList[0];
                    return {
                        'name': variant.name,
                        'id': variant.productId,
                        'price': product.price,
                        'brand': variant.manufacturer,
                        'category': 'Telefony/Sklep',
                        'variant': (variant.colorDefinition && variant.colorDefinition.length) ? variant.colorDefinition[0].name : "set",
                        'list': 'Wybierz-telefon',
                        'position': ((products.currentPage - 1) * products.data.length) + index + 1
                    };
                })
            },
            'pageType': 'TelefonyBezUmowy'
        };
        console.log(JSON.stringify(productData));
        DataLayerUtils.push(productData);
    };

    DataLayerUtils.pushSimfreeProductClick = function(productVariant, price, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) {
        let productData = {
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
                        'variant': (productVariant.colorDefinition && productVariant.colorDefinition.length) ? productVariant.colorDefinition[0].name : "set"
                    }]
                }
            },
            'pageType': 'TelefonyBezUmowy',
            ...DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee)
        };
        console.log(JSON.stringify(productData));
        DataLayerUtils.push(productData);
    };

    DataLayerUtils.pushSimfreeCheckoutStep = function(stepNumber, terminals, checkoutStep) {
        if (!terminals) {
            return;
        }

        let productData = {
            'event': 'checkout',
            'ecommerce': {
                'checkout': {
                    'actionField': {
                        'step': stepNumber,
                        'option': ''
                    },
                    'products': prepareConcatedTerminals(terminals, "productId").map(terminal => {
                        return {
                            'name': terminal.name,
                            'id': terminal.productId,
                            'price': terminal.checkoutPrice && terminal.checkoutPrice.price,
                            'brand': terminal.manufacturer,
                            'category': 'Telefony/Sklep',
                            'variant': terminal.colorDefinition && terminal.colorDefinition.name,
                            'quantity': terminals.filter(elem => elem.productId === terminal.productId).length
                        }
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
        let productData = {
            'ecommerce': {
                'event': 'purchase',
                'purchase': {
                    'actionField': {
                        'id': orderId,
                        'affiliation': 'Sklep',
                        'revenue': revenue,
                        //'tax':'0',                            // opcjonalnie
                        //'shipping': '0',                      // w zalezności od dostawy
                    },
                    'products': terminals.map(terminal => {
                        return {
                            'name': terminal.name,
                            'id': terminal.productId,
                            'price': terminal.checkoutPrice && terminal.checkoutPrice.price,
                            'brand': terminal.manufacturer,
                            'category': 'Telefony/Sklep',
                            'variant': terminal.colorDefinition && terminal.colorDefinition.name,
                            'quantity': terminals.filter(elem => elem.productId === terminal.productId).length
                        }
                    })
                }
            },
            'pageType': 'TelefonyBezUmowy'
        };
        console.log("pushSimfreeSummaryStep", JSON.stringify(productData));
        DataLayerUtils.push(productData);
    };

    DataLayerUtils.getAddToCartEventRecord = function() {
        let dataLayer = window.dataLayer || [];
        let addToCartEventRecords = dataLayer.filter(elem => elem.event === "addToCart");
        if (addToCartEventRecords) return addToCartEventRecords[0];
        return null;
    };

    DataLayerUtils.getProductDescription = function(addToCartEventRecord, productId) {
        let productDescriptions = addToCartEventRecord.ecommerce.add.products.filter(product => product.id === productId);
        if (productDescriptions) return productDescriptions[0];
        return null;
    };

    DataLayerUtils.push = function(data) {
        let dataLayer = window.dataLayer || [];
        dataLayer.push(data)
    };

    function prepareConcatedTerminals(x, n = 0) {
        if (n === 0)
            n = "elem";
        else
            n = "elem." + n;
        var uval = [];
        var unic = x.filter(function(elem, index, self) {
            if (uval.indexOf(eval(n)) < 0) {
                uval.push(eval(n));
                return index == self.indexOf(elem);
            }
        })
        return unic;
    }

    //zapewne te mapy gdzies do cmsa trzeba przeniesc
    DataLayerUtils.processTypeToCategoryMap = {
        ACTIVATION: "Nowy",
        MIGRATION_PRE_POST: "Migracja",
        MIGRATION_NJU_POST_TO_POST: "Migracja",
        MIGRATION_NJU_PRE_TO_POST: "Migracja",
        RETENTION: "Przedłużenie",
        MNP: "Przeniesienie",
        MNP_TWOSTEP: "Przeniesienie",
        INSTALMENT_SALES_OF_GOODS: "Na raty",
        INSTALMENT_SALES_OF_GOODS_NC: "Na raty/nieOrange",
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
        MNP_APPLICATION_SECOND_STEP: "przenoszę numer: ",
    };

    DataLayerUtils.offerTypeToCategoryMap = {
        VOICE: "Usługi głosowe",
        DATA: "Internet mobilny",
        SIMFREE_INST: "Telefony",
        VOICE_LDF: "Usługi głosowe",
        DATA_LDF: "Internet",
        VOICE_ODF: "Usługi głosowe",
        DATA_ODF: "Internet",
    };

    DataLayerUtils.offerTypeToCommitmentMap = {
        VOICE: "/Abonament/",
        DATA: "/Abonament/",
        SIMFREE_INST: "/Sklep/",
        VOICE_LDF: "/Abonament/",
        DATA_LDF: "/Abonament/",
        VOICE_ODF: "/Abonament/",
        DATA_ODF: "/Abonament/",
    };

    DataLayerUtils.contractTypeToCategoryMap = {
        B2C: "B2C",
        B2B: "B2B",
        true: "B2B",
    };
    DataLayerUtils.marketContextToMarketMap = {
        B2C: "mass",
        B2B: "business",
    };

    DataLayerUtils.pageToListField = {
        landingPage: "wybór oferty",
    };

    DataLayerUtils.checkoutStepMap = {
        "cart-contents": {
            name: "offer-configuration",
            number: 1,
        },
        "customer-data": {
            name: "customer-info",
            number: 2,
        },
        "delivery-payment": {
            name: "payment-delivery",
            number: 3,
        },
    };

    DataLayerUtils.checkoutStepPushed = false;

    DataLayerUtils.createCategoryField = ({
            offerType,
            processType,
            marketContext,
            salesChannel
        }) =>
        salesChannel + "/" + DataLayerUtils.contractTypeToCategoryMap[marketContext] + "/" + DataLayerUtils.offerTypeToCategoryMap[offerType] + DataLayerUtils.offerTypeToCommitmentMap[offerType] + DataLayerUtils.processTypeToCategoryMap[processType];
    DataLayerUtils.createListField = (selectedFilters, page) =>
        DataLayerUtils.createCategoryField(selectedFilters) + " - " + DataLayerUtils.pageToListField[page];
    DataLayerUtils.createListFieldForLandingPage = selectedFilters =>
        DataLayerUtils.createListField(selectedFilters, "landingPage");

    DataLayerUtils.createProductMetaItem = ({
        id,
        name,
        price,
        dimension4,
        dimension5,
        dimension6,
        dimension7,
        brand = "Orange",
        category,
        deviceId = "none",
        list = true,
        loyaltyLength,
        position = 0,
        offerSwitchType = "Dla Ciebie",
    }, {
        offerType,
        processType
    }, deviceData, {
        marketContext
    }, salesChannel = "") => ({
        id: id + "_" + (deviceData && deviceData.description || deviceData && deviceData.productCode || deviceId),
        name: offerSwitchType + " - " + name,
        price,
        brand: salesChannel,
        category: DataLayerUtils.createCategoryField({
            offerType,
            processType,
            marketContext,
            salesChannel
        }),
        variant: deviceData && (deviceData.name || deviceData.description) || "SIMO",
        list: list && DataLayerUtils.createListFieldForLandingPage({
            offerType,
            processType,
            marketContext,
            salesChannel
        }) || undefined,
        position: position + 1,
        dimension4: dimension4 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.summaryPayment,
        dimension5: dimension5 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.devicePayments[0].price,
        dimension6: dimension6 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.oneTimePayment,
        dimension7: dimension7 || loyaltyLength + "",
    });

    //To trzeba zamienic na te mappery co tam na dole robilem
    DataLayerUtils.createSummaryItem = ({
        bundleCode: id,
        price,
        loyaltyLength,
        position,
        planName,
        list,
        deviceId,
        totalMonthlyPrices: monthlyCosts
    }, selectedFilters, deviceData) => DataLayerUtils.createProductMetaItem({
        id,
        price,
        loyaltyLength,
        position,
        planName,
        deviceId,
        monthlyCosts,
        list
    }, selectedFilters, deviceData);
    DataLayerUtils.createCommonElements = (marketContext, salesChannel, loggedEmployee, assistedEmployee) => ({
        market: DataLayerUtils.marketContextToMarketMap[marketContext],
        channel: salesChannel || "",
        dimension19: loggedEmployee && loggedEmployee.fullBscs || assistedEmployee || "",
        dimension20: loggedEmployee && loggedEmployee.salesChannelName || assistedEmployee || "",
        dimension25: loggedEmployee && loggedEmployee.loginOtsa || assistedEmployee || "",
        dimension26: loggedEmployee && loggedEmployee.location || assistedEmployee || "",
        dimension27: "GlobalID"
    });

    DataLayerUtils.createSIMOImpressionEvent = (offers = [], {
        loyaltyLength,
        offerType,
        processType
    }, deviceData, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => {
        let result = {
            event: "impressions",
            ecommerce: {
                "currencyCode": "PLN",
                "impressions": offers.map((offer, index) => DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                    position: index
                })), {
                    loyaltyLength,
                    offerType,
                    processType,
                }, deviceData, {
                    marketContext
                }, salesChannel)),
            },
            pageType: "eshop",
            pageCategory: DataLayerUtils.offerTypeToCategoryMap[offerType],
            contractDuration: loyaltyLength[processType],
            phonePriceMonthly: "", // nie mamy jeszcze telefonów więc zostawiamy puste
            subscriptionMonthly: "", // jest kilka elementów, więc zostawiamy puste

        };
        result = {
            ...result,
            ...DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee)
        };
        return (result);
    };
    DataLayerUtils.createAddToCartSIMOEvent = (offer = {}, {
        loyaltyLength,
        offerType,
        processType
    }, deviceData, variantId, position, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => ({
        event: "addToCart",
        ecommerce: {
            currencyCode: "PLN",
            add: {
                products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                    index: position
                }, {
                    deviceId: variantId
                })), {
                    loyaltyLength,
                    offerType,
                    processType
                }, deviceData, {
                    marketContext
                }, salesChannel)],
            },
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
    });

    DataLayerUtils.createAddToCartProductClickEvent = (offer = {}, {
        loyaltyLength,
        offerType,
        processType
    }, deviceData, variantId, position, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => ({
        event: "productClick",
        ecommerce: {
            click: {
                actionField: {
                    list: DataLayerUtils.createListFieldForLandingPage({
                        offerType,
                        processType,
                        marketContext
                    })
                }, // musi być taka jak w impressions
                products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                    index: position
                }, {
                    deviceId: variantId
                })), {
                    loyaltyLength,
                    offerType,
                    processType
                }, deviceData, {
                    marketContext
                }, salesChannel)],
            },
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
    });

    DataLayerUtils.createCheckoutStepEvent = (checkoutData, {
        loyaltyLength,
        offerType,
        processType
    }, stepId, position) => {
        return {
            event: "checkout",
            ecommerce: {
                checkout: {
                    actionField: {
                        "step": DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].number
                    }, // musi być liczbą
                    products: checkoutData && checkoutData.map(data => DataLayerUtils.createProductMetaItem(data, {
                        loyaltyLength,
                        offerType,
                        processType,
                    }, data.deviceData)),
                },
            },
            pageType: "eshop",
            market: "mass",
            contractDuration: checkoutData && checkoutData[0] && checkoutData[0].loyaltyLength,
            phonePriceMonthly: "",
            subscriptionMonthly: checkoutData && checkoutData[0] && checkoutData[0].price,
            checkoutStep: DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].name,
        };
    };


    DataLayerUtils.createUniversalCheckoutStepEvent = (checkoutData, stepId, {
        salesChannel,
        loggedEmployee,
        assistedEmployee
    }) => {
        const marketContext = checkoutData.net ? "B2B" : "B2C";
        const employee = assistedEmployee || loggedEmployee;
        return {
            event: "checkout",
            ecommerce: {
                checkout: {
                    actionField: {
                        "step": DataLayerUtils.checkoutStepMap[stepId] && DataLayerUtils.checkoutStepMap[stepId].number
                    },
                    products: checkoutData && checkoutData.entries && DataLayerUtils.createProductCheckoutItem({
                        ...checkoutData,
                        salesChannel
                    }),
                },
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
            dimension27: "GlobalID",
        };
    };

    DataLayerUtils.createProductCheckoutItem = ({
        entries,
        net: marketContext,
        salesChannel: salesChannel = ""
    }, showMetric = false) => {
        console.warn("dataLayer createProductCheckoutItem", {
            entries
        }, {
            marketContext
        }, marketContext ? "B2B" : "B2C", showMetric, salesChannel);
        let result = [];
        entries.map(data => {
            if (data.entryType === "MOBILE") {
                let variant = "SIMO";
                let id = data.bundleOmniCode + "^" + data.bundleCode;
                const price = data.totalMonthlyPrices && data.totalMonthlyPrices[0] && data.totalMonthlyPrices[0].price;
                let oovResult = {
                    name: "Dla Ciebie - " + data.planName,
                    price: price,
                    brand: salesChannel,
                    quantity: 1, //DO poprawy
                    category: DataLayerUtils.createCategoryField({
                        offerType: data.bundleType,
                        processType: data.processType,
                        marketContext: marketContext ? "B2B" : "B2C",
                        salesChannel: salesChannel
                    }),
                    dimension5: price,
                    dimension7: DataLayerUtils.findLoyaltyLengthInEntry(data),
                };
                if (showMetric && data.totalMonthlyPrices) {
                    oovResult.metric11 = data.totalMonthlyPrices.reduce((previousValue, tieredPrice) => previousValue + tieredPrice.price * ((tieredPrice.monthTo || data.loyaltyLength) - tieredPrice.monthFrom + 1), 0)
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
                data.terminals.map(terminalData => {
                    if (!result.find(elem => elem.id === terminalData.productId)) {
                        const quantity = data.terminals.filter(elem => elem.productId === terminalData.productId).length
                        const simfreeResult = {
                            name: terminalData.name,
                            id: data.bundleOmniCode + "^" + terminalData.productId,
                            price: terminalData.checkoutPrice && terminalData.checkoutPrice.price,
                            brand: terminalData.manufacturer,
                            category: 'Telefony/Sklep',
                            variant: terminalData.colorDefinition && terminalData.colorDefinition.name,
                            quantity: quantity
                        };
                        if (showMetric) {
                            simfreeResult.metric11 = terminalData.checkoutPrice.price * quantity
                        }
                        result.push(simfreeResult)

                    }
                })

            }
        });
        return result;
    };

    //FIXME to samo co ta funkcja ponizej
    DataLayerUtils.createPickDeviceProductClickEvent = (offer = {}, {
        loyaltyLength,
        offerType,
        processType
    }, position, deviceData, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => ({
        event: "productClick",
        ecommerce: {
            click: {
                actionField: {
                    list: DataLayerUtils.createListFieldForLandingPage({
                        offerType,
                        processType,
                        marketContext,
                        salesChannel
                    })
                }, // musi być taka jak w impressions
                products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(offer, {
                    position
                })), {
                    loyaltyLength,
                    offerType,
                    processType
                }, deviceData, {
                    marketContext
                }, salesChannel)],
            },
        },
        pageType: "eshop",
        market: "mass",
        contractDuration: offer.loyaltyLength,
        phonePriceMonthly: "",
        subscriptionMonthly: offer.price,
        ...DataLayerUtils.createCommonElements(marketContext, salesChannel, loggedEmployee, assistedEmployee)
    });

    DataLayerUtils.createProductClickEvent = (offer = {}, {
        loyaltyLength,
        offerType,
        processType
    }, position, deviceData) => ({
        event: "productClick",
        ecommerce: {
            click: {
                actionField: {
                    list: DataLayerUtils.createListFieldForLandingPage({
                        offerType,
                        processType,
                        net: offer.net
                    })
                }, // musi być taka jak w impressions
                products: [DataLayerUtils.createProductMetaItem(Object.assign(offer, {
                    position
                }), {
                    loyaltyLength,
                    offerType,
                    processType
                }, deviceData)],
            },
        },
        pageType: "eshop",
        market: "mass",
        contractDuration: offer.loyaltyLength,
        phonePriceMonthly: "",
        subscriptionMonthly: offer.price,
    });


    DataLayerUtils.createPurchaseEvent = (omniId, {
        loyaltyLength,
        offerType,
        processType
    }, checkoutCost, deliveryCost, summary, salesChannel, loggedEmployee, assistedEmployee) => {
        const oov = summary && summary.entries && summary.entries.find(offer => offer.entryType === "MOBILE");
        const result = {
            event: "purchase",
            ecommerce: {
                purchase: {
                    actionField: {
                        id: omniId, // identyfikator transakcji
                        affiliation: oov ? "eshop - abonament" : "sklep",
                        revenue: DataLayerUtils.countRevenue(summary, checkoutCost), //    Wartość abonamentu np. 49,99 zł na start za aktywcję + 39,99*24 miesiące =  1009,75 zł
                        //tax:'0',
                        shipping: deliveryCost,
                        coupon: summary.voucherCode,
                    },
                    products: DataLayerUtils.createProductCheckoutItem({
                        entries: summary.entries,
                        net: summary.net,
                        salesChannel: salesChannel,
                    }, true),
                },
            },
            pageType: "eshop",
            market: "mass",
            checkoutStep: "summary",
            ...DataLayerUtils.createCommonElements(summary.net ? "B2B" : "B2C", salesChannel, loggedEmployee, assistedEmployee),
        };
        if (oov) {
            if (oov.terminals && oov.terminals.length > 0) {
                result.phonePriceMonthly = oov.terminals && oov.terminals[0] && oov.terminals[0].monthlyPrices && oov.terminals[0].monthlyPrices[0] && oov.terminals[0].monthlyPrices[0].price || (oov.terminals ? 0 : undefined)
            }
            result.contractDuration = summary.entries && summary.entries[0] && summary.entries[0].loyaltyLength;
            result.subscriptionMonthly = summary.entries && summary.entries[0] && summary.entries[0].monthlyPrices && summary.entries[0].monthlyPrices[0].price
        }

        return result;
    };

    DataLayerUtils.countRevenue = (offers, checkoutCost) => {
        let result = (checkoutCost && checkoutCost.price || 0) + (offers.totalFirstBillPrice && offers.totalFirstBillPrice.price || 0);
        const oov = offers && offers.entries && offers.entries.filter(offer => offer.entryType === "MOBILE");
        const tariffPayments = oov && oov.map(bundle =>
            bundle.totalMonthlyPrices &&
            bundle.totalMonthlyPrices.reduce((previousValue, tieredPrice) =>
                previousValue + tieredPrice.price * ((tieredPrice.monthTo || bundle.loyaltyLength) - tieredPrice.monthFrom + 1), 0)) || [];
        if (tariffPayments.length > 0) {
            const summaryTariffPayments = tariffPayments.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
            result += summaryTariffPayments;
        }
        return result;
    };

    DataLayerUtils.createSummaryItemsArray = (offers, {
        offerType
    }) => {
        let result = [];
        const oov = offers && offers.entries && offers.entries.find(offer => offer.entryType === "MOBILE");
        const wiking = offers && offers.entries && offers.entries.find(offer => offer.entryType === "SIMFREE");
        if (oov) {
            let variant = "";
            let variantCode = "";
            if (oov.terminals.length > 0) {
                variant = (oov.terminals.reduce((prev, next) => prev + next.name + "^", ""));
                variant = variant.substring(0, variant.length - 1);
                variantCode = (oov.terminals.reduce((prev, next) => prev + "^" + next.productCode, ""))
            } else if (oov.euroSets.length > 0) {
                variant = (oov.euroSets.reduce((prev, next) => prev + next.name + "^", ""));
                variant = variant.substring(0, variant.length - 1);
                variantCode = (oov.euroSets.reduce((prev, next) => prev + "^" + next.productCode, ""))
            } else {
                variant = "SIMO";
                variantCode = "^none"
            }
            const oovDLObject = {
                name: "Dla Ciebie - " + oov && oov.planName,
                id: oov.bundleCode + variantCode,
                price: oov.monthlyPrices && oov.monthlyPrices[0] && oov.monthlyPrices[0].price,
                brand: "Orange",
                category: DataLayerUtils.createCategoryField({
                    offerType,
                    processType: oov.processType,
                    net: offers.net,
                }),
                variant: variant,
                quantity: 1,
                dimension5: oov.monthlyPrices && oov.monthlyPrices[0] && oov.monthlyPrices[0].price, // abonament
                dimension7: DataLayerUtils.findLoyaltyLengthInEntry(oov), // czas trwania umowy w msc
            };
            if (oov.terminals && oov.terminals.length > 0) {
                oovDLObject.dimension4 = oov.terminals[0] && oov.terminals[0].checkoutPrice && oov.terminals[0].checkoutPrice.price;
                oovDLObject.dimension6 = oov.terminals && oov.terminals[0] && oov.terminals[0].monthlyPrices && oov.terminals[0].monthlyPrices[0] && oov.terminals[0].monthlyPrices[0].price || (oov.terminals ? 0 : undefined) // miesiecznie za telefon powinnismy zliczac kazdy terminal
            } else if (oov.euroSets && oov.euroSets.length > 0) {
                oovDLObject.dimension4 = oov.euroSets[0] && oov.euroSets[0].checkoutPrice && oov.euroSets[0].checkoutPrice.price;
                oovDLObject.dimension6 = oov.euroSets && oov.euroSets[0] && oov.euroSets[0].monthlyPrices && oov.euroSets[0].monthlyPrices[0] && oov.euroSets[0].monthlyPrices[0].price || (oov.euroSets ? 0 : undefined) // miesiecznie za telefon powinnismy zliczac kazdy terminal
            }
            result.push(oovDLObject)
        }
        if (wiking) {
            wiking.terminals.map((terminal, i, array) => {
                if (!result.find(elem => elem.id === terminal.productId)) {
                    result.push({
                        "name": terminal.name,
                        "id": terminal.productId,
                        "price": terminal.checkoutPrice && terminal.checkoutPrice.price,
                        "brand": terminal.manufacturer,
                        "category": "Telefony/Sklep",
                        "variant": terminal.colorDefinition && terminal.colorDefinition.name,
                        "quantity": array.filter(elem => elem.productId === terminal.productId).length
                    })
                }
            })
        }
        return result;
    };

    DataLayerUtils.createProductListImpressions = (deviceList, filters) => {
        let result = {
            event: "impressions",
            ecommerce: {
                "currencyCode": "PLN",
                "impressions": deviceList.data.map((device, index) => {
                    if (filters.offerType === "SIMFREE") {
                        let variant = device.variantList[0];
                        return {
                            name: variant.name,
                            id: variant.productId,
                            price: device.price,
                            brand: variant.manufacturer,
                            category: "Telefony/Sklep",
                            variant: (variant.colorDefinition && variant.colorDefinition.length) ? variant.colorDefinition[0].name : "set",
                            list: "Wybierz-telefon",
                            position: ((deviceList.currentPage - 1) * deviceList.data.length) + index + 1,
                        }
                    } else if (filters.selectedOffer) {
                        if (!device.inOffer)
                            return {};
                        const selectedOffer = filters.selectedOffer;
                        const devicePayments = filters.clientContext ? device.inOffer.price.convergent : device.inOffer.price.base;
                        return {
                            id: filters.propositionItemId + "^" + device.productId,
                            name: "Dla Ciebie - " + selectedOffer.rateplanName,
                            price: devicePayments.summaryPayment,
                            brand: filters.salesChannel,
                            category: DataLayerUtils.createCategoryField({
                                offerType: filters.offerType,
                                processType: filters.process,
                                marketContext: filters.marketContext,
                                salesChannel: filters.salesChannel,
                            }), //DataLayerUtils.createCategoryField({offerType,processType}),
                            variant: device.name, //deviceData && (deviceData.name || deviceData.description ) || "SIMO",
                            list: DataLayerUtils.createListFieldForLandingPage({
                                offerType: filters.offerType,
                                processType: filters.process,
                                marketContext: filters.marketContext,
                                salesChannel: filters.salesChannel,
                            }), //list && DataLayerUtils.createListFieldForLandingPage({offerType,processType}) || undefined,
                            position: ((deviceList.currentPage - 1) * deviceList.data.length) + index + 1, //position + 1,
                            dimension4: devicePayments.oneTimePayment, //dimension4 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.summaryPayment,
                            dimension5: devicePayments.summaryPayment, //dimension5 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.devicePayments[0].price,
                            dimension6: devicePayments.devicePayments[0].price, //dimension6 || deviceData && deviceData.inOffer && deviceData.inOffer.price.base.oneTimePayment,
                            dimension7: selectedOffer.processType !== "INSTALMENT_SALES_OF_GOODS" || selectedOffer.processType !== "INSTALMENT_SALES_OF_GOODS_NC" ? selectedOffer.loyaltyLength : devicePayments.devicePayments[0].monthTo
                        }
                    }
                }),
            },
            pageType: "eshop",
            market: "mass",
        };
        result = {
            ...result,
            ...DataLayerUtils.createCommonElements(filters.marketContext, filters.salesChannel, filters.loggedEmployee, filters.assistedEmployee)
        };
        return result;
    };

    DataLayerUtils.pushSIMOImpressionEvent = (offers, selectedFilters, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }, deviceData = null) => {
        DataLayerUtils.push(DataLayerUtils.createSIMOImpressionEvent(offers, selectedFilters, {
            deviceData
        }, {
            marketContext
        }, salesChannel, {
            loggedEmployee,
            assistedEmployee,
        }));
    };
    DataLayerUtils.pushAddToCartOfferEvent = (offer, selectedFilters, deviceData = null, variantId, position, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => DataLayerUtils.push(DataLayerUtils.createAddToCartSIMOEvent(offer, selectedFilters, deviceData, variantId, position, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee,
    }));
    DataLayerUtils.pushAddToCartProductClickOfferEvent = (offer, selectedFilters, deviceData = null, variantId, position, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => {
        DataLayerUtils.push(DataLayerUtils.createAddToCartProductClickEvent(offer, selectedFilters, deviceData, variantId, position, {
            marketContext
        }, salesChannel, {
            loggedEmployee,
            assistedEmployee,
        }));
    };
    DataLayerUtils.pushProductClickEvent = (offer, selectedFilters, position, product = null, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => DataLayerUtils.push(DataLayerUtils.createPickDeviceProductClickEvent(offer, selectedFilters, position, product, {
        marketContext
    }, salesChannel, {
        loggedEmployee,
        assistedEmployee,
    }));
    DataLayerUtils.pushPurchaseEvent = (summary, omniId, filters, checkoutCost, deliveryCost, salesChannel, loggedEmployee, assistedEmployee) => DataLayerUtils.push(DataLayerUtils.createPurchaseEvent(omniId, filters, checkoutCost, deliveryCost, summary, salesChannel, loggedEmployee, assistedEmployee));
    DataLayerUtils.pushCheckoutStepEvent = (checkoutData, selectedFilters, stepId, propositionId, position, {
        salesChannel,
        loggedEmployee,
        assistedEmployee
    }) => {
        DataLayerUtils.push(DataLayerUtils.createUniversalCheckoutStepEvent(checkoutData, stepId, {
            salesChannel,
            loggedEmployee,
            assistedEmployee,
        }));
    }; // DataLayerUtils.createCheckoutStepEvent(checkoutData/*DataLayerUtils.cartResponseToOfferDataMapper(checkoutData)*/,selectedFilters,stepId,position))
    DataLayerUtils.pushProductListClickEvent = (offer, selectedFilters, position, product) => DataLayerUtils.push(DataLayerUtils.createProductClickEvent(DataLayerUtils.offerFieldsNameMapper(offer), selectedFilters, position, product));
    DataLayerUtils.pushProductListImpressions = (deviceList, filters) => DataLayerUtils.push(DataLayerUtils.createProductListImpressions(deviceList, filters));

    DataLayerUtils.createProductItemMapper = ({
        id,
        price,
        loyaltyLength,
        position,
        rateplanName: name,
        deviceId
    }) => ({
        id,
        price,
        loyaltyLength,
        position,
        name,
        deviceId
    });

    DataLayerUtils.offerFieldsNameMapper = ({
        id,
        rateplanName: name,
        loyaltyLength,
        price,
        payments
    }) => ({
        id,
        name,
        loyaltyLength,
        price: payments.basePrice.originalGrossPrice
    });

    DataLayerUtils.cartResponseToOfferDataMapper = ({
        entries
    }) => entries && entries.map(offer => ({
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
    }));

    DataLayerUtils.findInstalmentLoyaltyLength = data => {
        if (data && data.deviceData && data.deviceData.inOffer && data.deviceData.inOffer && data.deviceData.inOffer.price.base.devicePayments) {
            return data.deviceData.inOffer && data.deviceData.inOffer.price.base.devicePayments[0].monthTo;
        }
        return "0";
    };

    DataLayerUtils.findLoyaltyLengthInEntry = entry => {
        if (entry.bundleType !== "SIMFREE_INST") {
            return entry.loyaltyLength;
        }
        return entry.totalMonthlyPrices[0].monthTo;
    };

    DataLayerUtils.pushCheckoutStepOneTime = (data, selectedFilters, stepId, propositionId, position, {
        salesChannel,
        loggedEmployee,
        assistedEmployee
    }) => {
        if (!DataLayerUtils.checkoutStepPushed) {
            DataLayerUtils.pushCheckoutStepEvent(data, selectedFilters, stepId, propositionId, position, {
                salesChannel,
                loggedEmployee,
                assistedEmployee,
            });
            DataLayerUtils.checkoutStepPushed = true;
        }
    };

    DataLayerUtils.pushDeviceDetailsEvent = (productVariant, product, offer, selectedFilters, position, marketContext, salesChannel, {
        loggedEmployee,
        assistedEmployee
    }) => {
        if (!offer) { //Wiking
            DataLayerUtils.pushSimfreeProductClick(productVariant, product.price, marketContext, salesChannel, {
                loggedEmployee,
                assistedEmployee
            });
        } else { //Nie wiking
            DataLayerUtils.pushProductClickEvent(offer, selectedFilters, position, product, marketContext, salesChannel, {
                loggedEmployee,
                assistedEmployee
            });
        }
    };

    DataLayerUtils.pushVisitComparatorPage = products => {
        let productNames = createNames(products);
        let url = window.location.href.split('?')[0];
        let creative = 'porównywarka';
        let promotions = [];
        products.map(function(product, i) {
            let promotion = {
                'id': url,
                'name': product.name,
                'creative': creative,
                'position': i + 1
            };
            promotions.push(promotion);

        });

        let eventPhoneCompare = {
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
        let names = "";
        products.map(function(product, i) {
            names += product.name;
            if (products.length > i + 1) {
                names += "|"
            }
        });

        return names;
    }

    DataLayerUtils.pushComparatorDeviceDetails = (device, products) => {
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
                        'position': findDevicePosition(device, products),
                    }]
                }
            }
        };
    }

    function findDevicePosition(device, products) {
        let position = 0;
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

    DataLayerUtils.pushAddDeviceToCompare = (device, products) => {
        let productNames = createNames(products);
        let promotions = [];
        let creative = 'porównywarka';
        let url = window.location.href.split('?')[0];
        products.map(function(product, i) {
            let promotion = {
                'id': url,
                'name': product.name,
                'creative': creative,
                'position': i + 1
            };
            promotions.push(promotion);

        });

        let selectedDevice = findDevice(device, products);
        let eventPhoneCompare = {
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
        let selectedDevice = null;
        products.map(function(product) {
            if (device === product.productId) {
                selectedDevice = product;
            }
        });
        return selectedDevice;
    }

    DataLayerUtils.pushRemoveDeviceFromList = products => {
        const productNames = createNames(products);
        const promotions = [];
        const eventPhoneCompare = {
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

    DataLayerUtils.pushAndLogData = data => {
        console.log("dataLayer ", JSON.stringify(data));
        DataLayerUtils.push(data);
    };

    DataLayerUtils.pushSelectedAgreementType = selectedAgreementType => {
        switch (selectedAgreementType) {
            case AgreementType.DIGITAL:
                DataLayerUtils.pushAndLogData({
                    'event': 'eumowa_button'
                });
                break;
            case AgreementType.PAPER:
                DataLayerUtils.pushAndLogData({
                    'event': 'papierowa_umowa_button'
                });
                break;
        }
    };

    DataLayerUtils.pushDocumentsRead = () => {
        DataLayerUtils.pushAndLogData({
            'event': 'zapoznaj_button'
        });
    };

    DataLayerUtils.pushAgreementAccepted = () => {
        DataLayerUtils.pushAndLogData({
            'event': 'akceptuj_eumowa_button'
        });
    };

    DataLayerUtils.pushOrderResigned = agreementType => {
        switch (agreementType) {
            case AgreementType.DIGITAL:
                DataLayerUtils.pushAndLogData({
                    'event': 'rezygnacja_eumowa_button'
                });
                break;
        }
    };

    DataLayerUtils.pushFinalizeOrder = agreementType => {
        switch (agreementType) {
            case AgreementType.DIGITAL:
                DataLayerUtils.pushAndLogData({
                    'event': 'zawieram_place_button'
                });
                break;
            case AgreementType.PAPER:
                DataLayerUtils.pushAndLogData({
                    'event': 'zamawiam_button'
                });
                break;
        }
    };

    DataLayerUtils.pushAgreementVisibilityEvent = agreementType => {
        switch (agreementType) {
            case AgreementType.DIGITAL:
                DataLayerUtils.pushAndLogData({
                    'event': 'eumowa_show_action'
                });
                break;
            case AgreementType.PAPER:
                DataLayerUtils.pushAndLogData({
                    'event': 'umowapapierowa_show_action'
                });
                break;
        }
    };

    return DataLayerUtils;
}({});



export default DataLayerUtils;