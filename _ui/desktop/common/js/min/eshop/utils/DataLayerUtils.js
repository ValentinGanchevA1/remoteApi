define(["exports", "eshop/modules/checkout/constants/AgreementType"], function(_exports, _AgreementType) {
    "use strict";

    function ownKeys(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, n)
        }
        return a
    }

    function _objectSpread(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ownKeys(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }
    Object.defineProperty(_exports, "__esModule", {
        value: !0
    }), _exports.default = void 0, _AgreementType = babelHelpers.interopRequireDefault(_AgreementType);
    var DataLayerUtils = function(DataLayerUtils) {
            function prepareConcatedTerminals(x) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                n = 0 === n ? "elem" : "elem." + n;
                var uval = [],
                    unic = x.filter(function(elem, index, self) {
                        if (uval.indexOf(eval(n)) < 0) return uval.push(eval(n)), index == self.indexOf(elem)
                    });
                return unic
            }

            function createNames(a) {
                var n = "";
                return a.map(function(e, t) {
                    n += e.name, a.length > t + 1 && (n += "|")
                }), n
            }

            function createEventPhoneAddToCart(e, t) {
                return {
                    event: "promotionClick",
                    ecommerce: {
                        promoClick: {
                            promotions: [{
                                id: window.location.href.split("?")[0],
                                name: e.name,
                                creative: "porównywarka",
                                position: findDevicePosition(e, t)
                            }]
                        }
                    }
                }
            }

            function findDevicePosition(a, e) {
                var n = 0;
                return e.map(function(e, t) {
                    a.name === e.name && (n = t)
                }), n + 1
            }

            function createEventPhoneDetails(e) {
                return {
                    event: "phoneDetail",
                    phones: e.name
                }
            }

            function findDevice(t, e) {
                var a = null;
                return e.map(function(e) {
                    t === e.productId && (a = e)
                }), a
            }
            return DataLayerUtils.pushPageCategoryDimension = function(e) {
                DataLayerUtils.push({
                    pageType: e
                })
            }, DataLayerUtils.selectedDeviceData = {}, DataLayerUtils.setSelectedDeviceData = function(e) {
                DataLayerUtils.selectedDeviceData = e
            }, DataLayerUtils.pushProductDetailsView = function(e, t, a, n, r, i, o) {
                var s = o.loggedEmployee,
                    c = o.assistedEmployee;
                if ("SIMFREE" === t) {
                    var l = DataLayerUtils.selectedDeviceData;
                    DataLayerUtils.pushSimfreeProductImpression(l, l.devicePaymentsData.oneTimePayment.price, n, r, i, s, c)
                } else {
                    var p = a ? e.deviceData.inOffer.price.convergent : e.deviceData.inOffer.price.base,
                        y = {
                            id: e.id + "^" + n,
                            name: "Dla Ciebie - " + e.rateplanName,
                            price: p.summaryPayment,
                            brand: i,
                            category: DataLayerUtils.createCategoryField({
                                offerType: t,
                                processType: e.processType,
                                marketContext: r,
                                salesChannel: i
                            }),
                            variant: e.deviceData.name,
                            dimension4: p.oneTimePayment,
                            dimension5: p.summaryPayment,
                            dimension6: p.devicePayments[0].price,
                            dimension7: "INSTALMENT_SALES_OF_GOODS" !== t || "INSTALMENT_SALES_OF_GOODS_NC" !== t ? e.loyaltyLength : DataLayerUtils.findInstalmentLoyaltyLength(e)
                        };
                    DataLayerUtils.push(_objectSpread({}, {
                        event: "productDetail",
                        ecommerce: {
                            detail: {
                                actionField: {
                                    list: DataLayerUtils.createListFieldForLandingPage({
                                        salesChannel: i,
                                        offerType: t,
                                        processType: e.processType,
                                        marketContext: r
                                    })
                                },
                                products: [y]
                            }
                        }
                    }, {}, DataLayerUtils.createCommonElements(r, i, s, c)))
                }
            }, DataLayerUtils.pushSimfreeProductImpression = function(e, t, a, n, r, i, o) {
                var s = _objectSpread({
                    ecommerce: {
                        detail: {
                            actionField: {
                                list: "Szczegóły Telefonu"
                            },
                            products: [{
                                name: e.name,
                                id: a,
                                price: e.devicePaymentsData && e.devicePaymentsData.oneTimePayment && e.devicePaymentsData.oneTimePayment.price,
                                brand: e.manufacturer,
                                category: "Telefony/Sklep",
                                variant: e.colorDefinition && e.colorDefinition.length ? e.colorDefinition[0].name : "set"
                            }]
                        }
                    },
                    pageType: "TelefonyBezUmowy"
                }, DataLayerUtils.createCommonElements(n, r, i, o));
                DataLayerUtils.push(s)
            }, DataLayerUtils.pushSimfreeAddToCart = function(e, t, a, n, r) {
                var i, o = r.loggedEmployee,
                    s = r.assistedEmployee,
                    c = {
                        name: e.name,
                        id: e.productId,
                        price: t,
                        brand: e.manufacturer,
                        category: "Telefony/Sklep",
                        variant: e.colorDefinition && e.colorDefinition.length ? e.colorDefinition[0].name : "set",
                        quantity: 1
                    };
                if (i = DataLayerUtils.getAddToCartEventRecord()) {
                    var l = DataLayerUtils.getProductDescription(i, e.productId);
                    l ? l.quantity++ : i.ecommerce.add.products.push(c)
                } else i = _objectSpread({}, i = {
                    event: "addToCart",
                    ecommerce: {
                        currencyCode: "PLN",
                        add: {
                            products: [c]
                        }
                    },
                    pageType: "TelefonyBezUmowy"
                }, {}, DataLayerUtils.createCommonElements(a, n, o, s)), DataLayerUtils.push(i)
            }, DataLayerUtils.pushSimfreeProductList = function(n) {
                var e = {
                    ecommerce: {
                        currencyCode: "PLN",
                        impressions: n.data.map(function(e, t) {
                            var a = e.variantList[0];
                            return {
                                name: a.name,
                                id: a.productId,
                                price: e.price,
                                brand: a.manufacturer,
                                category: "Telefony/Sklep",
                                variant: a.colorDefinition && a.colorDefinition.length ? a.colorDefinition[0].name : "set",
                                list: "Wybierz-telefon",
                                position: (n.currentPage - 1) * n.data.length + t + 1
                            }
                        })
                    },
                    pageType: "TelefonyBezUmowy"
                };
                DataLayerUtils.push(e)
            }, DataLayerUtils.pushSimfreeProductClick = function(e, t, a, n, r) {
                var i = r.loggedEmployee,
                    o = r.assistedEmployee,
                    s = _objectSpread({
                        event: "productClick",
                        ecommerce: {
                            click: {
                                actionField: {
                                    list: "Wybierz-telefon"
                                },
                                products: [{
                                    name: e.name,
                                    id: e.productId,
                                    price: t,
                                    brand: e.manufacturer,
                                    category: "Telefony/Sklep",
                                    variant: e.colorDefinition && e.colorDefinition.length ? e.colorDefinition[0].name : "set"
                                }]
                            }
                        },
                        pageType: "TelefonyBezUmowy"
                    }, DataLayerUtils.createCommonElements(a, n, i, o));
                DataLayerUtils.push(s)
            }, DataLayerUtils.pushSimfreeCheckoutStep = function(e, a, t) {
                if (a) {
                    var n = {
                        event: "checkout",
                        ecommerce: {
                            checkout: {
                                actionField: {
                                    step: e,
                                    option: ""
                                },
                                products: prepareConcatedTerminals(a, "productId").map(function(t) {
                                    return {
                                        name: t.name,
                                        id: t.productId,
                                        price: t.checkoutPrice && t.checkoutPrice.price,
                                        brand: t.manufacturer,
                                        category: "Telefony/Sklep",
                                        variant: t.colorDefinition && t.colorDefinition.name,
                                        quantity: a.filter(function(e) {
                                            return e.productId === t.productId
                                        }).length
                                    }
                                })
                            }
                        },
                        pageType: "TelefonyBezUmowy",
                        checkoutStep: t
                    };
                    DataLayerUtils.push(n)
                }
            }, DataLayerUtils.pushSimfreeSummaryStep = function(e, a, t) {
                var n = {
                    ecommerce: {
                        event: "purchase",
                        purchase: {
                            actionField: {
                                id: e,
                                affiliation: "Sklep",
                                revenue: t
                            },
                            products: a.map(function(t) {
                                return {
                                    name: t.name,
                                    id: t.productId,
                                    price: t.checkoutPrice && t.checkoutPrice.price,
                                    brand: t.manufacturer,
                                    category: "Telefony/Sklep",
                                    variant: t.colorDefinition && t.colorDefinition.name,
                                    quantity: a.filter(function(e) {
                                        return e.productId === t.productId
                                    }).length
                                }
                            })
                        }
                    },
                    pageType: "TelefonyBezUmowy"
                };
                DataLayerUtils.push(n)
            }, DataLayerUtils.getAddToCartEventRecord = function() {
                var e = (window.dataLayer || []).filter(function(e) {
                    return "addToCart" === e.event
                });
                return e ? e[0] : null
            }, DataLayerUtils.getProductDescription = function(e, t) {
                var a = e.ecommerce.add.products.filter(function(e) {
                    return e.id === t
                });
                return a ? a[0] : null
            }, DataLayerUtils.push = function(e) {
                (window.dataLayer || []).push(e)
            }, DataLayerUtils.processTypeToCategoryMap = {
                ACTIVATION: "Nowy",
                MIGRATION_PRE_POST: "Migracja",
                MIGRATION_NJU_POST_TO_POST: "Migracja",
                MIGRATION_NJU_PRE_TO_POST: "Migracja",
                RETENTION: "Przedłużenie",
                MNP: "Przeniesienie",
                MNP_TWOSTEP: "Przeniesienie",
                INSTALMENT_SALES_OF_GOODS: "Na raty",
                INSTALMENT_SALES_OF_GOODS_NC: "Na raty/nieOrange"
            }, DataLayerUtils.processTypeToMsisdnDescriptionMap = {
                ACTIVATION: "nowy numer: ",
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
            }, DataLayerUtils.offerTypeToCategoryMap = {
                VOICE: "Usługi głosowe",
                DATA: "Internet mobilny",
                SIMFREE_INST: "Telefony",
                VOICE_LDF: "Usługi głosowe",
                DATA_LDF: "Internet",
                VOICE_ODF: "Usługi głosowe",
                DATA_ODF: "Internet"
            }, DataLayerUtils.offerTypeToCommitmentMap = {
                VOICE: "/Abonament/",
                DATA: "/Abonament/",
                SIMFREE_INST: "/Sklep/",
                VOICE_LDF: "/Abonament/",
                DATA_LDF: "/Abonament/",
                VOICE_ODF: "/Abonament/",
                DATA_ODF: "/Abonament/"
            }, DataLayerUtils.contractTypeToCategoryMap = {
                B2C: "B2C",
                B2B: "B2B",
                true: "B2B"
            }, DataLayerUtils.marketContextToMarketMap = {
                B2C: "mass",
                B2B: "business"
            }, DataLayerUtils.pageToListField = {
                landingPage: "wybór oferty"
            }, DataLayerUtils.checkoutStepMap = {
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
            }, DataLayerUtils.checkoutStepPushed = !1, DataLayerUtils.createCategoryField = function(e) {
                var t = e.offerType,
                    a = e.processType,
                    n = e.marketContext;
                return e.salesChannel + "/" + DataLayerUtils.contractTypeToCategoryMap[n] + "/" + DataLayerUtils.offerTypeToCategoryMap[t] + DataLayerUtils.offerTypeToCommitmentMap[t] + DataLayerUtils.processTypeToCategoryMap[a]
            }, DataLayerUtils.createListField = function(e, t) {
                return DataLayerUtils.createCategoryField(e) + " - " + DataLayerUtils.pageToListField[t]
            }, DataLayerUtils.createListFieldForLandingPage = function(e) {
                return DataLayerUtils.createListField(e, "landingPage")
            }, DataLayerUtils.createProductMetaItem = function(e, t, a, n) {
                var r = e.id,
                    i = e.name,
                    o = e.price,
                    s = e.dimension4,
                    c = e.dimension5,
                    l = e.dimension6,
                    p = e.dimension7,
                    y = (e.brand, e.category, e.deviceId),
                    m = void 0 === y ? "none" : y,
                    u = e.list,
                    d = void 0 === u || u,
                    h = e.loyaltyLength,
                    f = e.position,
                    g = void 0 === f ? 0 : f,
                    D = e.offerSwitchType,
                    L = void 0 === D ? "Dla Ciebie" : D,
                    v = t.offerType,
                    T = t.processType,
                    P = n.marketContext,
                    U = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "";
                return {
                    id: r + "_" + (a && a.description || a && a.productCode || m),
                    name: L + " - " + i,
                    price: o,
                    brand: U,
                    category: DataLayerUtils.createCategoryField({
                        offerType: v,
                        processType: T,
                        marketContext: P,
                        salesChannel: U
                    }),
                    variant: a && (a.name || a.description) || "SIMO",
                    list: d && DataLayerUtils.createListFieldForLandingPage({
                        offerType: v,
                        processType: T,
                        marketContext: P,
                        salesChannel: U
                    }) || void 0,
                    position: g + 1,
                    dimension4: s || a && a.inOffer && a.inOffer.price.base.summaryPayment,
                    dimension5: c || a && a.inOffer && a.inOffer.price.base.devicePayments[0].price,
                    dimension6: l || a && a.inOffer && a.inOffer.price.base.oneTimePayment,
                    dimension7: p || h + ""
                }
            }, DataLayerUtils.createSummaryItem = function(e, t, a) {
                var n = e.bundleCode,
                    r = e.price,
                    i = e.loyaltyLength,
                    o = e.position,
                    s = e.planName,
                    c = e.list,
                    l = e.deviceId,
                    p = e.totalMonthlyPrices;
                return DataLayerUtils.createProductMetaItem({
                    id: n,
                    price: r,
                    loyaltyLength: i,
                    position: o,
                    planName: s,
                    deviceId: l,
                    monthlyCosts: p,
                    list: c
                }, t, a)
            }, DataLayerUtils.createCommonElements = function(e, t, a, n) {
                return {
                    market: DataLayerUtils.marketContextToMarketMap[e],
                    channel: t || "",
                    dimension19: a && a.fullBscs || n || "",
                    dimension20: a && a.salesChannelName || n || "",
                    dimension25: a && a.loginOtsa || n || "",
                    dimension26: a && a.location || n || "",
                    dimension27: "GlobalID"
                }
            }, DataLayerUtils.createSIMOImpressionEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    a = t.loyaltyLength,
                    n = t.offerType,
                    r = t.processType,
                    i = 2 < arguments.length ? arguments[2] : void 0,
                    o = (3 < arguments.length ? arguments[3] : void 0).marketContext,
                    s = 4 < arguments.length ? arguments[4] : void 0,
                    c = 5 < arguments.length ? arguments[5] : void 0,
                    l = c.loggedEmployee,
                    p = c.assistedEmployee,
                    y = {
                        event: "impressions",
                        ecommerce: {
                            currencyCode: "PLN",
                            impressions: e.map(function(e, t) {
                                return DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(e, {
                                    position: t
                                })), {
                                    loyaltyLength: a,
                                    offerType: n,
                                    processType: r
                                }, i, {
                                    marketContext: o
                                }, s)
                            })
                        },
                        pageType: "eshop",
                        pageCategory: DataLayerUtils.offerTypeToCategoryMap[n],
                        contractDuration: a[r],
                        phonePriceMonthly: "",
                        subscriptionMonthly: ""
                    };
                return y = _objectSpread({}, y, {}, DataLayerUtils.createCommonElements(o, s, l, p))
            }, DataLayerUtils.createAddToCartSIMOEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    a = t.loyaltyLength,
                    n = t.offerType,
                    r = t.processType,
                    i = 2 < arguments.length ? arguments[2] : void 0,
                    o = 3 < arguments.length ? arguments[3] : void 0,
                    s = 4 < arguments.length ? arguments[4] : void 0,
                    c = (5 < arguments.length ? arguments[5] : void 0).marketContext,
                    l = 6 < arguments.length ? arguments[6] : void 0,
                    p = 7 < arguments.length ? arguments[7] : void 0,
                    y = p.loggedEmployee,
                    m = p.assistedEmployee;
                return {
                    event: "addToCart",
                    ecommerce: {
                        currencyCode: "PLN",
                        add: {
                            products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(e, {
                                index: s
                            }, {
                                deviceId: o
                            })), {
                                loyaltyLength: a,
                                offerType: n,
                                processType: r
                            }, i, {
                                marketContext: c
                            }, l)]
                        }
                    },
                    pageType: "eshop",
                    market: DataLayerUtils.marketContextToMarketMap[c],
                    channel: l || "",
                    pageCategory: DataLayerUtils.offerTypeToCategoryMap[n],
                    contractDuration: e.loyaltyLength,
                    phonePriceMonthly: i && i.inOffer.price.base.devicePayments[0].price || "",
                    subscriptionMonthly: e.price,
                    dimension19: y && y.fullBscs || m || "",
                    dimension20: y && y.salesChannelName || m || "",
                    dimension25: y && y.loginOtsa || m || "",
                    dimension26: y && y.location || m || "",
                    dimension27: "GlobalID"
                }
            }, DataLayerUtils.createAddToCartProductClickEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    a = t.loyaltyLength,
                    n = t.offerType,
                    r = t.processType,
                    i = 2 < arguments.length ? arguments[2] : void 0,
                    o = 3 < arguments.length ? arguments[3] : void 0,
                    s = 4 < arguments.length ? arguments[4] : void 0,
                    c = (5 < arguments.length ? arguments[5] : void 0).marketContext,
                    l = 6 < arguments.length ? arguments[6] : void 0,
                    p = 7 < arguments.length ? arguments[7] : void 0,
                    y = p.loggedEmployee,
                    m = p.assistedEmployee;
                return {
                    event: "productClick",
                    ecommerce: {
                        click: {
                            actionField: {
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    offerType: n,
                                    processType: r,
                                    marketContext: c
                                })
                            },
                            products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(e, {
                                index: s
                            }, {
                                deviceId: o
                            })), {
                                loyaltyLength: a,
                                offerType: n,
                                processType: r
                            }, i, {
                                marketContext: c
                            }, l)]
                        }
                    },
                    pageType: "eshop",
                    market: DataLayerUtils.marketContextToMarketMap[c],
                    channel: l || "",
                    pageCategory: DataLayerUtils.offerTypeToCategoryMap[n],
                    contractDuration: e.loyaltyLength,
                    phonePriceMonthly: i && i.inOffer.price.base.devicePayments[0].price || "",
                    subscriptionMonthly: e.price,
                    dimension19: y && y.fullBscs || m || "",
                    dimension20: y && y.salesChannelName || m || "",
                    dimension25: y && y.loginOtsa || m || "",
                    dimension26: y && y.location || m || "",
                    dimension27: "GlobalID"
                }
            }, DataLayerUtils.createCheckoutStepEvent = function(e, t, a, n) {
                var r = t.loyaltyLength,
                    i = t.offerType,
                    o = t.processType;
                return {
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: DataLayerUtils.checkoutStepMap[a] && DataLayerUtils.checkoutStepMap[a].number
                            },
                            products: e && e.map(function(e) {
                                return DataLayerUtils.createProductMetaItem(e, {
                                    loyaltyLength: r,
                                    offerType: i,
                                    processType: o
                                }, e.deviceData)
                            })
                        }
                    },
                    pageType: "eshop",
                    market: "mass",
                    contractDuration: e && e[0] && e[0].loyaltyLength,
                    phonePriceMonthly: "",
                    subscriptionMonthly: e && e[0] && e[0].price,
                    checkoutStep: DataLayerUtils.checkoutStepMap[a] && DataLayerUtils.checkoutStepMap[a].name
                }
            }, DataLayerUtils.createUniversalCheckoutStepEvent = function(e, t, a) {
                var n = a.salesChannel,
                    r = a.loggedEmployee,
                    i = a.assistedEmployee,
                    o = e.net ? "B2B" : "B2C",
                    s = i || r;
                return {
                    event: "checkout",
                    ecommerce: {
                        checkout: {
                            actionField: {
                                step: DataLayerUtils.checkoutStepMap[t] && DataLayerUtils.checkoutStepMap[t].number
                            },
                            products: e && e.entries && DataLayerUtils.createProductCheckoutItem(_objectSpread({}, e, {
                                salesChannel: n
                            }))
                        }
                    },
                    checkoutStep: DataLayerUtils.checkoutStepMap[t] && DataLayerUtils.checkoutStepMap[t].name,
                    pageType: "eshop",
                    market: DataLayerUtils.marketContextToMarketMap[o],
                    channel: s && s.salesChannelName || n || "",
                    pageCategory: "no data",
                    dimension19: s && s.fullBscs || "",
                    dimension20: s && s.salesChannelName || "",
                    dimension25: s && s.loginOtsa || "",
                    dimension26: s && s.location || "",
                    dimension27: "GlobalID"
                }
            }, DataLayerUtils.createProductCheckoutItem = function(e) {
                var t = e.entries,
                    i = e.net,
                    a = e.salesChannel,
                    o = void 0 === a ? "" : a,
                    s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    c = [];
                return t.map(function(n) {
                    if ("MOBILE" === n.entryType) {
                        var e = "SIMO",
                            t = n.bundleOmniCode + "^" + n.bundleCode,
                            a = n.totalMonthlyPrices && n.totalMonthlyPrices[0] && n.totalMonthlyPrices[0].price,
                            r = {
                                name: "Dla Ciebie - " + n.planName,
                                price: a,
                                brand: o,
                                quantity: 1,
                                category: DataLayerUtils.createCategoryField({
                                    offerType: n.bundleType,
                                    processType: n.processType,
                                    marketContext: i ? "B2B" : "B2C",
                                    salesChannel: o
                                }),
                                dimension5: a,
                                dimension7: DataLayerUtils.findLoyaltyLengthInEntry(n)
                            };
                        s && n.totalMonthlyPrices && (r.metric11 = n.totalMonthlyPrices.reduce(function(e, t) {
                            return e + t.price * ((t.monthTo || n.loyaltyLength) - t.monthFrom + 1)
                        }, 0)), n.terminals && 0 < n.terminals.length ? (r.dimension4 = n.terminals[0].checkoutPrice && n.terminals[0].checkoutPrice.price, r.dimension6 = n.terminals[0].monthlyPrices && n.terminals[0].monthlyPrices[0] && n.terminals[0].monthlyPrices[0].price || (n.terminals ? 0 : void 0), s && (r.metric11 = r.metric11 + (n.terminals[0].checkoutPrice && n.terminals[0].checkoutPrice.price || 0)), e = n.terminals[0].name, t = t + "^" + n.terminals[0].productCode) : n.euroSets && 0 < n.euroSets.length ? (r.dimension4 = n.euroSets[0].checkoutPrice && n.euroSets[0].checkoutPrice.price, r.dimension6 = n.euroSets[0].monthlyPrices && n.euroSets[0].monthlyPrices[0] && n.euroSets[0].monthlyPrices[0].price || (n.euroSets ? 0 : void 0), s && (r.metric11 = r.metric11 + (n.euroSets[0].checkoutPrice && n.euroSets[0].checkoutPrice.price || 0)), e = n.euroSets[0].name, t = t + "^" + n.euroSets[0].productCode) : t += "^none", r.variant = e, r.id = t, c.push(r)
                    } else "SIMFREE" === n.entryType && n.terminals.map(function(t) {
                        if (!c.find(function(e) {
                                return e.id === t.productId
                            })) {
                            var e = n.terminals.filter(function(e) {
                                    return e.productId === t.productId
                                }).length,
                                a = {
                                    name: t.name,
                                    id: n.bundleOmniCode + "^" + t.productId,
                                    price: t.checkoutPrice && t.checkoutPrice.price,
                                    brand: t.manufacturer,
                                    category: "Telefony/Sklep",
                                    variant: t.colorDefinition && t.colorDefinition.name,
                                    quantity: e
                                };
                            s && (a.metric11 = t.checkoutPrice.price * e), c.push(a)
                        }
                    })
                }), c
            }, DataLayerUtils.createPickDeviceProductClickEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    a = t.loyaltyLength,
                    n = t.offerType,
                    r = t.processType,
                    i = 2 < arguments.length ? arguments[2] : void 0,
                    o = 3 < arguments.length ? arguments[3] : void 0,
                    s = (4 < arguments.length ? arguments[4] : void 0).marketContext,
                    c = 5 < arguments.length ? arguments[5] : void 0,
                    l = 6 < arguments.length ? arguments[6] : void 0,
                    p = l.loggedEmployee,
                    y = l.assistedEmployee;
                return _objectSpread({
                    event: "productClick",
                    ecommerce: {
                        click: {
                            actionField: {
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    offerType: n,
                                    processType: r,
                                    marketContext: s,
                                    salesChannel: c
                                })
                            },
                            products: [DataLayerUtils.createProductMetaItem(DataLayerUtils.createProductItemMapper(Object.assign(e, {
                                position: i
                            })), {
                                loyaltyLength: a,
                                offerType: n,
                                processType: r
                            }, o, {
                                marketContext: s
                            }, c)]
                        }
                    },
                    pageType: "eshop",
                    market: "mass",
                    contractDuration: e.loyaltyLength,
                    phonePriceMonthly: "",
                    subscriptionMonthly: e.price
                }, DataLayerUtils.createCommonElements(s, c, p, y))
            }, DataLayerUtils.createProductClickEvent = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    a = t.loyaltyLength,
                    n = t.offerType,
                    r = t.processType,
                    i = 2 < arguments.length ? arguments[2] : void 0,
                    o = 3 < arguments.length ? arguments[3] : void 0;
                return {
                    event: "productClick",
                    ecommerce: {
                        click: {
                            actionField: {
                                list: DataLayerUtils.createListFieldForLandingPage({
                                    offerType: n,
                                    processType: r,
                                    net: e.net
                                })
                            },
                            products: [DataLayerUtils.createProductMetaItem(Object.assign(e, {
                                position: i
                            }), {
                                loyaltyLength: a,
                                offerType: n,
                                processType: r
                            }, o)]
                        }
                    },
                    pageType: "eshop",
                    market: "mass",
                    contractDuration: e.loyaltyLength,
                    phonePriceMonthly: "",
                    subscriptionMonthly: e.price
                }
            }, DataLayerUtils.createPurchaseEvent = function(e, t, a, n, r, i, o, s) {
                t.loyaltyLength, t.offerType, t.processType;
                var c = r && r.entries && r.entries.find(function(e) {
                        return "MOBILE" === e.entryType
                    }),
                    l = _objectSpread({
                        event: "purchase",
                        ecommerce: {
                            purchase: {
                                actionField: {
                                    id: e,
                                    affiliation: c ? "eshop - abonament" : "sklep",
                                    revenue: DataLayerUtils.countRevenue(r, a),
                                    shipping: n,
                                    coupon: r.voucherCode
                                },
                                products: DataLayerUtils.createProductCheckoutItem({
                                    entries: r.entries,
                                    net: r.net,
                                    salesChannel: i
                                }, !0)
                            }
                        },
                        pageType: "eshop",
                        market: "mass",
                        checkoutStep: "summary"
                    }, DataLayerUtils.createCommonElements(r.net ? "B2B" : "B2C", i, o, s));
                return c && (c.terminals && 0 < c.terminals.length && (l.phonePriceMonthly = c.terminals && c.terminals[0] && c.terminals[0].monthlyPrices && c.terminals[0].monthlyPrices[0] && c.terminals[0].monthlyPrices[0].price || (c.terminals ? 0 : void 0)), l.contractDuration = r.entries && r.entries[0] && r.entries[0].loyaltyLength, l.subscriptionMonthly = r.entries && r.entries[0] && r.entries[0].monthlyPrices && r.entries[0].monthlyPrices[0].price), l
            }, DataLayerUtils.countRevenue = function(e, t) {
                var a = (t && t.price || 0) + (e.totalFirstBillPrice && e.totalFirstBillPrice.price || 0),
                    n = e && e.entries && e.entries.filter(function(e) {
                        return "MOBILE" === e.entryType
                    }),
                    r = n && n.map(function(a) {
                        return a.totalMonthlyPrices && a.totalMonthlyPrices.reduce(function(e, t) {
                            return e + t.price * ((t.monthTo || a.loyaltyLength) - t.monthFrom + 1)
                        }, 0)
                    }) || [];
                0 < r.length && (a += r.reduce(function(e, t) {
                    return e + t
                }, 0));
                return a
            }, DataLayerUtils.createSummaryItemsArray = function(e, t) {
                var a = t.offerType,
                    n = [],
                    r = e && e.entries && e.entries.find(function(e) {
                        return "MOBILE" === e.entryType
                    }),
                    i = e && e.entries && e.entries.find(function(e) {
                        return "SIMFREE" === e.entryType
                    });
                if (r) {
                    var o = "",
                        s = "";
                    s = 0 < r.terminals.length ? (o = (o = r.terminals.reduce(function(e, t) {
                        return e + t.name + "^"
                    }, "")).substring(0, o.length - 1), r.terminals.reduce(function(e, t) {
                        return e + "^" + t.productCode
                    }, "")) : 0 < r.euroSets.length ? (o = (o = r.euroSets.reduce(function(e, t) {
                        return e + t.name + "^"
                    }, "")).substring(0, o.length - 1), r.euroSets.reduce(function(e, t) {
                        return e + "^" + t.productCode
                    }, "")) : (o = "SIMO", "^none");
                    var c = {
                        name: "Dla Ciebie - " + r && r.planName,
                        id: r.bundleCode + s,
                        price: r.monthlyPrices && r.monthlyPrices[0] && r.monthlyPrices[0].price,
                        brand: "Orange",
                        category: DataLayerUtils.createCategoryField({
                            offerType: a,
                            processType: r.processType,
                            net: e.net
                        }),
                        variant: o,
                        quantity: 1,
                        dimension5: r.monthlyPrices && r.monthlyPrices[0] && r.monthlyPrices[0].price,
                        dimension7: DataLayerUtils.findLoyaltyLengthInEntry(r)
                    };
                    r.terminals && 0 < r.terminals.length ? (c.dimension4 = r.terminals[0] && r.terminals[0].checkoutPrice && r.terminals[0].checkoutPrice.price, c.dimension6 = r.terminals && r.terminals[0] && r.terminals[0].monthlyPrices && r.terminals[0].monthlyPrices[0] && r.terminals[0].monthlyPrices[0].price || (r.terminals ? 0 : void 0)) : r.euroSets && 0 < r.euroSets.length && (c.dimension4 = r.euroSets[0] && r.euroSets[0].checkoutPrice && r.euroSets[0].checkoutPrice.price, c.dimension6 = r.euroSets && r.euroSets[0] && r.euroSets[0].monthlyPrices && r.euroSets[0].monthlyPrices[0] && r.euroSets[0].monthlyPrices[0].price || (r.euroSets ? 0 : void 0)), n.push(c)
                }
                return i && i.terminals.map(function(t, e, a) {
                    n.find(function(e) {
                        return e.id === t.productId
                    }) || n.push({
                        name: t.name,
                        id: t.productId,
                        price: t.checkoutPrice && t.checkoutPrice.price,
                        brand: t.manufacturer,
                        category: "Telefony/Sklep",
                        variant: t.colorDefinition && t.colorDefinition.name,
                        quantity: a.filter(function(e) {
                            return e.productId === t.productId
                        }).length
                    })
                }), n
            }, DataLayerUtils.createProductListImpressions = function(i, o) {
                var e = {
                    event: "impressions",
                    ecommerce: {
                        currencyCode: "PLN",
                        impressions: i.data.map(function(e, t) {
                            if ("SIMFREE" === o.offerType) {
                                var a = e.variantList[0];
                                return {
                                    name: a.name,
                                    id: a.productId,
                                    price: e.price,
                                    brand: a.manufacturer,
                                    category: "Telefony/Sklep",
                                    variant: a.colorDefinition && a.colorDefinition.length ? a.colorDefinition[0].name : "set",
                                    list: "Wybierz-telefon",
                                    position: (i.currentPage - 1) * i.data.length + t + 1
                                }
                            }
                            if (o.selectedOffer) {
                                if (!e.inOffer) return {};
                                var n = o.selectedOffer,
                                    r = o.clientContext ? e.inOffer.price.convergent : e.inOffer.price.base;
                                return {
                                    id: o.propositionItemId + "^" + e.productId,
                                    name: "Dla Ciebie - " + n.rateplanName,
                                    price: r.summaryPayment,
                                    brand: o.salesChannel,
                                    category: DataLayerUtils.createCategoryField({
                                        offerType: o.offerType,
                                        processType: o.process,
                                        marketContext: o.marketContext,
                                        salesChannel: o.salesChannel
                                    }),
                                    variant: e.name,
                                    list: DataLayerUtils.createListFieldForLandingPage({
                                        offerType: o.offerType,
                                        processType: o.process,
                                        marketContext: o.marketContext,
                                        salesChannel: o.salesChannel
                                    }),
                                    position: (i.currentPage - 1) * i.data.length + t + 1,
                                    dimension4: r.oneTimePayment,
                                    dimension5: r.summaryPayment,
                                    dimension6: r.devicePayments[0].price,
                                    dimension7: "INSTALMENT_SALES_OF_GOODS" !== n.processType || "INSTALMENT_SALES_OF_GOODS_NC" !== n.processType ? n.loyaltyLength : r.devicePayments[0].monthTo
                                }
                            }
                        })
                    },
                    pageType: "eshop",
                    market: "mass"
                };
                return e = _objectSpread({}, e, {}, DataLayerUtils.createCommonElements(o.marketContext, o.salesChannel, o.loggedEmployee, o.assistedEmployee))
            }, DataLayerUtils.pushSIMOImpressionEvent = function(e, t, a, n, r) {
                var i = r.loggedEmployee,
                    o = r.assistedEmployee,
                    s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
                DataLayerUtils.push(DataLayerUtils.createSIMOImpressionEvent(e, t, {
                    deviceData: s
                }, {
                    marketContext: a
                }, n, {
                    loggedEmployee: i,
                    assistedEmployee: o
                }))
            }, DataLayerUtils.pushAddToCartOfferEvent = function(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    n = 3 < arguments.length ? arguments[3] : void 0,
                    r = 4 < arguments.length ? arguments[4] : void 0,
                    i = 5 < arguments.length ? arguments[5] : void 0,
                    o = 6 < arguments.length ? arguments[6] : void 0,
                    s = 7 < arguments.length ? arguments[7] : void 0,
                    c = s.loggedEmployee,
                    l = s.assistedEmployee;
                return DataLayerUtils.push(DataLayerUtils.createAddToCartSIMOEvent(e, t, a, n, r, {
                    marketContext: i
                }, o, {
                    loggedEmployee: c,
                    assistedEmployee: l
                }))
            }, DataLayerUtils.pushAddToCartProductClickOfferEvent = function(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                    n = 3 < arguments.length ? arguments[3] : void 0,
                    r = 4 < arguments.length ? arguments[4] : void 0,
                    i = 5 < arguments.length ? arguments[5] : void 0,
                    o = 6 < arguments.length ? arguments[6] : void 0,
                    s = 7 < arguments.length ? arguments[7] : void 0,
                    c = s.loggedEmployee,
                    l = s.assistedEmployee;
                DataLayerUtils.push(DataLayerUtils.createAddToCartProductClickEvent(e, t, a, n, r, {
                    marketContext: i
                }, o, {
                    loggedEmployee: c,
                    assistedEmployee: l
                }))
            }, DataLayerUtils.pushProductClickEvent = function(e, t, a) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    r = 4 < arguments.length ? arguments[4] : void 0,
                    i = 5 < arguments.length ? arguments[5] : void 0,
                    o = 6 < arguments.length ? arguments[6] : void 0,
                    s = o.loggedEmployee,
                    c = o.assistedEmployee;
                return DataLayerUtils.push(DataLayerUtils.createPickDeviceProductClickEvent(e, t, a, n, {
                    marketContext: r
                }, i, {
                    loggedEmployee: s,
                    assistedEmployee: c
                }))
            }, DataLayerUtils.pushPurchaseEvent = function(e, t, a, n, r, i, o, s) {
                return DataLayerUtils.push(DataLayerUtils.createPurchaseEvent(t, a, n, r, e, i, o, s))
            }, DataLayerUtils.pushCheckoutStepEvent = function(e, t, a, n, r, i) {
                var o = i.salesChannel,
                    s = i.loggedEmployee,
                    c = i.assistedEmployee;
                DataLayerUtils.push(DataLayerUtils.createUniversalCheckoutStepEvent(e, a, {
                    salesChannel: o,
                    loggedEmployee: s,
                    assistedEmployee: c
                }))
            }, DataLayerUtils.pushProductListClickEvent = function(e, t, a, n) {
                return DataLayerUtils.push(DataLayerUtils.createProductClickEvent(DataLayerUtils.offerFieldsNameMapper(e), t, a, n))
            }, DataLayerUtils.pushProductListImpressions = function(e, t) {
                return DataLayerUtils.push(DataLayerUtils.createProductListImpressions(e, t))
            }, DataLayerUtils.createProductItemMapper = function(e) {
                return {
                    id: e.id,
                    price: e.price,
                    loyaltyLength: e.loyaltyLength,
                    position: e.position,
                    name: e.rateplanName,
                    deviceId: e.deviceId
                }
            }, DataLayerUtils.offerFieldsNameMapper = function(e) {
                var t = e.id,
                    a = e.rateplanName,
                    n = e.loyaltyLength;
                e.price;
                return {
                    id: t,
                    name: a,
                    loyaltyLength: n,
                    price: e.payments.basePrice.originalGrossPrice
                }
            }, DataLayerUtils.cartResponseToOfferDataMapper = function(e) {
                var t = e.entries;
                return t && t.map(function(e) {
                    return {
                        dimension4: e && e.terminals && e.terminals[0] && e.terminals[0].checkoutPrice && e.terminals[0].checkoutPrice.price,
                        dimension5: e && e.totalMonthlyPrices && e.totalMonthlyPrices[0] && e.totalMonthlyPrices[0].price,
                        dimension6: e && e.terminals && e.terminals[0] && e.terminals[0].monthlyPrices && e.terminals[0].monthlyPrices[0] && e.terminals[0].monthlyPrices[0].price || (e.terminals ? 0 : void 0),
                        dimension7: e && DataLayerUtils.findLoyaltyLengthInEntry(e),
                        deviceData: e && e.terminals && e.terminals[0],
                        name: e && e.planName,
                        id: e && e.bundleCode,
                        price: e && e.totalMonthlyPrices && e.totalMonthlyPrices[0] && e.totalMonthlyPrices[0].price,
                        loyaltyLength: e && e.loyaltyLength,
                        list: !1
                    }
                })
            }, DataLayerUtils.findInstalmentLoyaltyLength = function(e) {
                return e && e.deviceData && e.deviceData.inOffer && e.deviceData.inOffer && e.deviceData.inOffer.price.base.devicePayments ? e.deviceData.inOffer && e.deviceData.inOffer.price.base.devicePayments[0].monthTo : "0"
            }, DataLayerUtils.findLoyaltyLengthInEntry = function(e) {
                return "SIMFREE_INST" !== e.bundleType ? e.loyaltyLength : e.totalMonthlyPrices[0].monthTo
            }, DataLayerUtils.pushCheckoutStepOneTime = function(e, t, a, n, r, i) {
                var o = i.salesChannel,
                    s = i.loggedEmployee,
                    c = i.assistedEmployee;
                DataLayerUtils.checkoutStepPushed || (DataLayerUtils.pushCheckoutStepEvent(e, t, a, n, r, {
                    salesChannel: o,
                    loggedEmployee: s,
                    assistedEmployee: c
                }), DataLayerUtils.checkoutStepPushed = !0)
            }, DataLayerUtils.pushDeviceDetailsEvent = function(e, t, a, n, r, i, o, s) {
                var c = s.loggedEmployee,
                    l = s.assistedEmployee;
                a ? DataLayerUtils.pushProductClickEvent(a, n, r, t, i, o, {
                    loggedEmployee: c,
                    assistedEmployee: l
                }) : DataLayerUtils.pushSimfreeProductClick(e, t.price, i, o, {
                    loggedEmployee: c,
                    assistedEmployee: l
                })
            }, DataLayerUtils.pushVisitComparatorPage = function(e) {
                var t = createNames(e),
                    n = window.location.href.split("?")[0],
                    r = [];
                e.map(function(e, t) {
                    var a = {
                        id: n,
                        name: e.name,
                        creative: "porównywarka",
                        position: t + 1
                    };
                    r.push(a)
                });
                var a = {
                    event: "phoneCompare",
                    phones: t,
                    ecommerce: {
                        promoView: {
                            promotions: r
                        }
                    }
                };
                DataLayerUtils.push(a)
            }, DataLayerUtils.pushComparatorDeviceDetails = function(e, t) {
                DataLayerUtils.push(createEventPhoneDetails(e)), DataLayerUtils.push(createEventPhoneAddToCart(e, t))
            }, DataLayerUtils.pushAddDeviceToCompare = function(e, t) {
                var a = createNames(t),
                    n = [],
                    r = "porównywarka",
                    i = window.location.href.split("?")[0];
                t.map(function(e, t) {
                    var a = {
                        id: i,
                        name: e.name,
                        creative: r,
                        position: t + 1
                    };
                    n.push(a)
                });
                var o = findDevice(e, t),
                    s = {
                        event: "phoneCompare",
                        phones: a,
                        ecommerce: {
                            promoView: {
                                id: i,
                                creative: r,
                                name: o.name,
                                position: findDevicePosition(o, t)
                            }
                        }
                    };
                DataLayerUtils.push(s)
            }, DataLayerUtils.pushRemoveDeviceFromList = function(e) {
                var t = {
                    event: "phoneCompare",
                    phones: createNames(e),
                    ecommerce: {
                        promoView: {
                            promotions: []
                        }
                    }
                };
                DataLayerUtils.push(t)
            }, DataLayerUtils.pushAndLogData = function(e) {
                DataLayerUtils.push(e)
            }, DataLayerUtils.pushSelectedAgreementType = function(e) {
                switch (e) {
                    case _AgreementType.default.DIGITAL:
                        DataLayerUtils.pushAndLogData({
                            event: "eumowa_button"
                        });
                        break;
                    case _AgreementType.default.PAPER:
                        DataLayerUtils.pushAndLogData({
                            event: "papierowa_umowa_button"
                        })
                }
            }, DataLayerUtils.pushDocumentsRead = function() {
                DataLayerUtils.pushAndLogData({
                    event: "zapoznaj_button"
                })
            }, DataLayerUtils.pushAgreementAccepted = function() {
                DataLayerUtils.pushAndLogData({
                    event: "akceptuj_eumowa_button"
                })
            }, DataLayerUtils.pushOrderResigned = function(e) {
                switch (e) {
                    case _AgreementType.default.DIGITAL:
                        DataLayerUtils.pushAndLogData({
                            event: "rezygnacja_eumowa_button"
                        })
                }
            }, DataLayerUtils.pushFinalizeOrder = function(e) {
                switch (e) {
                    case _AgreementType.default.DIGITAL:
                        DataLayerUtils.pushAndLogData({
                            event: "zawieram_place_button"
                        });
                        break;
                    case _AgreementType.default.PAPER:
                        DataLayerUtils.pushAndLogData({
                            event: "zamawiam_button"
                        })
                }
            }, DataLayerUtils.pushAgreementVisibilityEvent = function(e) {
                switch (e) {
                    case _AgreementType.default.DIGITAL:
                        DataLayerUtils.pushAndLogData({
                            event: "eumowa_show_action"
                        });
                        break;
                    case _AgreementType.default.PAPER:
                        DataLayerUtils.pushAndLogData({
                            event: "umowapapierowa_show_action"
                        })
                }
            }, DataLayerUtils
        }({}),
        _default = DataLayerUtils;
    _exports.default = _default
});
//# sourceMappingURL=DataLayerUtils.js.map