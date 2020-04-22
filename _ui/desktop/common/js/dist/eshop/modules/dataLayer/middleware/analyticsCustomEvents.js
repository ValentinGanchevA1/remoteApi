define(["exports", "../../fix/actionTypes", "../../fix/selectors/root", "../../auth/selectors/authorization", "../../checkout/selectors", "../../checkout/actionTypes", "../../cart/selectors", "../dataLayerUtilities", "../../cart/actionTypes", "../../checkout/constants/CartEntryTypeEnum"], function(_exports, _actionTypes, _root, _authorization, _selectors, _actionTypes2, _selectors2, _dataLayerUtilities, _actionTypes3, _CartEntryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);

    var _FETCH_OFFERS$FETCH_F;

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

    var mapWWTAddress = function mapWWTAddress(_ref) {
        var town = _ref.town,
            line1 = _ref.line1,
            line2 = _ref.line2,
            appartmentNo = _ref.appartmentNo;
        return {
            city: town,
            street: line1,
            streetNo: line2,
            flatNo: appartmentNo
        };
    };

    var mapAddressMain = function mapAddressMain(_ref2) {
        var town = _ref2.town,
            streetName = _ref2.streetName,
            streetNumber = _ref2.streetNumber,
            appartmentNo = _ref2.appartmentNo;
        return {
            city: town,
            street: streetName,
            streetNo: streetNumber,
            flatNo: appartmentNo
        };
    };

    var calculateWWTResult = function calculateWWTResult(offers) {
        // offer.broadband.bitrate
        // offer.broadband.bundleId
        var result = offers ? offers.map(function(offer) {
            return (0, _dataLayerUtilities.stringJoiner)([offer.broadband.code, offer.broadband.bitrate], "_");
        }).join("|") : "LTE";
        return result;
    };

    var getAddress = function getAddress(state) {
        var address = (0, _root.getWwtAddress)(state);
        if (Object.keys(address).length) return mapWWTAddress(address);
        var serviceDetails = (0, _root.getServiceDetails)(state);
        var installationAddress = serviceDetails.installationAddress;
        if (installationAddress && Object.keys(installationAddress).length) return mapWWTAddress(installationAddress);
        return {};
    };

    var encodeWithBase64 = function encodeWithBase64(input) {
        var objJsonStr = JSON.stringify(input);
        var objJsonB64 = Buffer.from(objJsonStr).toString("base64");
        console.log("datalayer encode", objJsonStr, objJsonB64);
        return objJsonB64;
    };

    var formSubmitWWT = function formSubmitWWT() {
        var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _dataLayerUtilities.AnalyticsEvents.FORM_SUBMIT_WWT;
        return function(state, action) {
            return {
                event: eventName + "_" + calculateSalesChannel(state),
                address: encodeWithBase64(getAddress(state)),
                // wwt_result: calculateWWTResult(getOffers(state))
                wwt_result: calculateWWTResult(action.payload.offers)
            };
        };
    };

    var calculateSellersData = function calculateSellersData(state) {
        var _getAssistModeStateDa = (0, _selectors.getAssistModeStateData)(state),
            loggedEmployee = _getAssistModeStateDa.loggedEmployee,
            assistedEmployee = _getAssistModeStateDa.assistedEmployee;

        var employee = assistedEmployee || loggedEmployee;

        var _ref3 = !!employee && employee,
            fullBscs = _ref3.fullBscs,
            salesChannelName = _ref3.salesChannelName,
            loginOtsa = _ref3.loginOtsa,
            location = _ref3.location;

        return {
            dimension19: fullBscs || "brak danych ID sprzedawcy",
            dimension20: salesChannelName || "brak danych ID kanału",
            dimension25: loginOtsa || "brak danych ID sprzedawcy OTSA",
            dimension26: location || "brak danych ID punktu"
        };
    };

    var calculateSalesChannel = function calculateSalesChannel(state) {
        return (0, _authorization.getSalesChannel)(state) || (0, _selectors.getSalesChannelForSummary)(state) || calculateSellersData(state).dimension20;
    };

    var pageViewEvent = function pageViewEvent(state, action) {
        return {
            pageType: _dataLayerUtilities.PageTypes.ESHOP,
            market: (0, _dataLayerUtilities.getMarket)((0, _root.marketSegment)(state)),
            channel: calculateSalesChannel(state),
            pageCategory: (0, _dataLayerUtilities.getPageCategory)((0, _root.getPageContext)(state)) // ...transform(state, action).payload

        };
    };

    var getDeviceVariantData = function getDeviceVariantData(modemFixProduct, decoderFixProduct) {
        var result = modemFixProduct || decoderFixProduct;
        result = _objectSpread({}, result, {
            name: modemFixProduct && "Modem" || decoderFixProduct && "Dekoder" || "FIXO"
        });
        return result;
    };

    var createProductEntry = function createProductEntry(state, entries) {
        var totalMonthlyPrice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var totalCheckoutPrice = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var result = entries.map(function(entry) {
            var productCode = entry.productCode,
                processType = entry.processType,
                bundleType = entry.bundleType,
                bundleCode = entry.bundleCode,
                totalMonthlyPrices = entry.totalMonthlyPrices,
                loyaltyLength = entry.loyaltyLength,
                entryType = entry.entryType,
                modemFixProduct = entry.modemFixProduct,
                bundleNo = entry.bundleNo,
                broadbandFixProduct = entry.broadbandFixProduct,
                decoderFixProduct = entry.decoderFixProduct,
                totalFirstBillPrice = entry.totalFirstBillPrice;
            var name = broadbandFixProduct && broadbandFixProduct.name;
            var fixConfigurables = (0, _selectors2.getFixConfigurables)(state).find(function(configurable) {
                return configurable.cartBundle === entry.bundleNo;
            });
            var deviceVariantData = getDeviceVariantData(modemFixProduct, decoderFixProduct);
            var dimension4 = deviceVariantData && deviceVariantData.price && deviceVariantData.price.oneTimeCost && deviceVariantData.price.oneTimeCost.price || 0;
            var dimension5 = totalMonthlyPrice && totalMonthlyPrice.price || 0;
            var dimension6 = deviceVariantData && deviceVariantData.price && deviceVariantData.price.monthlyCosts[0] && deviceVariantData.price.monthlyCosts[0].price || 0;
            return {
                name: (0, _dataLayerUtilities.stringJoiner)([productCode, bundleType, bundleCode], "|"),
                id: productCode,
                price: totalMonthlyPrice && totalMonthlyPrice.price,
                brand: calculateSalesChannel(state),
                category: (0, _dataLayerUtilities.stringJoiner)([calculateSalesChannel(state), (0, _root.marketSegment)(state), _dataLayerUtilities.CategoryProduct.INTERNET_DOMOWY, (0, _dataLayerUtilities.getProcessTypeName)(processType)], "/"),
                variant: deviceVariantData && deviceVariantData.name,
                quantity: 1,
                dimension4: dimension4,
                dimension5: dimension5,
                dimension6: dimension6,
                dimension7: loyaltyLength,
                metric11: loyaltyLength * (dimension5 + dimension6) + dimension4
            };
        });
        console.log("datalayer product entry", result);
        return result;
    };

    var calculateCheckoutProducts = function calculateCheckoutProducts(state, action) {
        var _getMiniCartData = (0, _selectors2.getMiniCartData)(state),
            entries = _getMiniCartData.entries,
            totalMonthlyPrice = _getMiniCartData.totalMonthlyPrice,
            totalCheckoutPrice = _getMiniCartData.totalCheckoutPrice;

        return createProductEntry(state, entries, totalMonthlyPrice, totalCheckoutPrice);
    };

    var calculatePurchaseProducts = function calculatePurchaseProducts(state, action) {
        var _action$payload$order = action.payload.orderSummary,
            entries = _action$payload$order.entries,
            totalMonthlyPrice = _action$payload$order.totalMonthlyPrice,
            totalCheckoutPrice = _action$payload$order.totalCheckoutPrice;
        var result = createProductEntry(state, entries, totalMonthlyPrice, totalCheckoutPrice);
        return result;
    };

    var calculateProductsForStep = function calculateProductsForStep(step) {
        return function(state, action) {
            return {
                checkout: calculateCheckoutProducts(state, action),
                purchase: calculatePurchaseProducts(state, action)
            } [step];
        };
    };

    var calculateCheckoutECommerce = function calculateCheckoutECommerce(state, action) {
        return {
            checkout: {
                actionField: {
                    step: (0, _dataLayerUtilities.getCheckoutStep)((0, _selectors.getCurrentStepId)(state)).number
                },
                products: calculateCheckoutProducts(state, action)
            }
        };
    };

    var calculatePurchaseECommerce = function calculatePurchaseECommerce(state, action) {
        return {
            purchase: {
                actionField: {
                    id: action.payload.omniNumber,
                    affiliation: action.payload.salesChannel,
                    revenue: countRevenueMetric11(action.payload),
                    shipping: action.payload.deliveryCost,
                    action: _dataLayerUtilities.AnalyticsEvents.PURCHASE,
                    coupon: action.payload.orderSummary.voucherCode // dimension19: "IDsprzedawcy"

                },
                products: calculatePurchaseProducts(state, action)
            }
        };
    };

    var calculateECommerceForStep = function calculateECommerceForStep(step) {
        return function(state, action) {
            return {
                "cart-contents": function cartContents() {
                    return calculateCheckoutECommerce(state, action);
                },
                "customer-data": function customerData() {
                    return calculateCheckoutECommerce(state, action);
                },
                "delivery-payment": function deliveryPayment() {
                    return calculateCheckoutECommerce(state, action);
                },
                "purchase": function purchase() {
                    return action.payload && calculatePurchaseECommerce(state, action);
                }
            } [step](state, action);
        };
    };

    var countRevenueMetric11 = function countRevenueMetric11(data) {
        var tieredPrices = data.tieredPrices,
            checkoutCost = data.checkoutCost,
            firstBillPrice = data.firstBillPrice;
        var monthlyRevenue = tieredPrices.reduce(function(sum, tier) {
            return sum + tier.price * (tier.monthTo - tier.monthFrom + 1);
        }, 0);
        console.log("dataLayer monthlyRevenue ".concat(monthlyRevenue, ", checkout cost ").concat(checkoutCost && checkoutCost.price, ", first bill ").concat(firstBillPrice && firstBillPrice.price));
        var result = monthlyRevenue + (checkoutCost && checkoutCost.price);
        return result;
    };

    var checkoutEvent = function checkoutEvent(state, action) {
        return _objectSpread({
            event: _dataLayerUtilities.AnalyticsEvents.CHECKOUT
        }, calculateSellersData(state), {
            dimension27: "CIM ID no such data",
            // CIM data is not available
            address: encodeWithBase64(mapAddressMain((0, _selectors.getAddressMain)(state))),
            ecommerce: calculateECommerceForStep((0, _selectors.getCurrentStepId)(state))(state, action)
        });
    };

    var summaryEvent = function summaryEvent(state, action) {
        return {
            event: _dataLayerUtilities.AnalyticsEvents.PURCHASE,
            // ...calculateSellersData(state),
            dimension27: "CIM ID no such data",
            address: "no data",
            ecommerce: calculateECommerceForStep("purchase")(state, action)
        };
    };

    var combineEvents = function combineEvents() {
        for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
            functions[_key] = arguments[_key];
        }

        return function(state, action) {
            return _objectSpread({}, functions.map(function(x) {
                return x(state, action);
            }).reduce(function(result, currentValue) {
                console.log("combine ", _objectSpread({}, result, {}, currentValue));
                return _objectSpread({}, result, {}, currentValue);
            }, {}));
        };
    };

    var checkCondition = function checkCondition(selector) {
        for (var _len2 = arguments.length, f = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            f[_key2 - 1] = arguments[_key2];
        }

        return function(state, action) {
            console.log("checkCondition", selector(state), f, action.payload);

            if (selector(state) && selector(state).length > 0) {
                return combineEvents.apply(void 0, f)(state, action); // return  f.map(x=>x(state,action)).reduce((result, currentValue) => {return {...result,...currentValue}},{})
            }
        };
    };

    var fetchOffersFix = function fetchOffersFix(state, action, type) {
        console.log("fetch offers checkCondition", {
            state: state,
            action: action,
            type: type
        });

        if (type[_actionTypes.AFTER_WWT] && !type[_actionTypes.SERVICE_DETAILS_FETCHED]) {
            console.log("isAfterWWT", (0, _root.isAfterWWT)(state));
            return combineEvents(formSubmitWWT(), pageViewEvent)(state, action); // return  f.map(x=>x(state,action)).reduce((result, currentValue) => {return {...result,...currentValue}},{})
        }

        if (type[_actionTypes.FORCE_AFTER_WWT] && type[_actionTypes.SERVICE_DETAILS_FETCHED]) {
            console.log("datalayer LP offers fetch for retention");
            return combineEvents(formSubmitWWT(_dataLayerUtilities.AnalyticsEvents.FORM_SUBMIT_WWT_RETMIG), pageViewEvent)(state, action);
        }
    };

    var checkIfFIXSummaryOrder = function checkIfFIXSummaryOrder(selector) {
        for (var _len3 = arguments.length, f = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            f[_key3 - 1] = arguments[_key3];
        }

        return function(state, action) {
            console.log("checkCondition", {
                selector: selector
            }, selector(state), f);
            var condition = selector(state) === "FIX";

            if (condition) {
                return combineEvents.apply(void 0, f)(state, action);
            }
        };
    };

    var createComplex = function createComplex(params) {
        return function(state, action) {
            // console.log("complex" , params[0] );
            var r = params.map(function(x) {
                return x(state, action);
            }).reduce(function(result, currentValue) {
                return _objectSpread({}, result, {}, currentValue);
            }, {});
            console.log("complex map", r);
            return r;
        };
    };

    var multicartCheckoutStep = function multicartCheckoutStep(state, action) {
        console.log("datalayer multicartCheckoutStep", (0, _selectors.getFixEntries)(state), action, (0, _selectors.getAddressMain)(state));
        return combineEvents(pageViewEvent, checkoutEvent)(state, action);
    };

    var multicartCheckoutStepUpdate = function multicartCheckoutStepUpdate(state, action, type) {
        if (type[_actionTypes3.FETCH_FIX_CONFIGURABLES]) {
            return multicartCheckoutStep(state, action);
        }
    };

    var fetchedMiniCart = function fetchedMiniCart(state, action, type) {
        console.log("datalayer fetcheMiniCart FIX", (0, _selectors.getFixEntries)(state));

        if ((0, _selectors.getCurrentStepId)(state) === "customer-data" && (0, _selectors.getFixEntries)(state).length) {
            return multicartCheckoutStep(state, action); // for FIX customer data
        }

        if ((0, _selectors.getCurrentStepId)(state) === "delivery-payment" && (0, _selectors.getFixEntries)(state).length && type[_actionTypes2.GET_CART_CUSTOMER_DONE] === 1 && type[_actionTypes3.FETCHED_MINI_CART]) {
            return multicartCheckoutStep(state, action); // for FIX delivery and payment
        }
    };

    var summaryCheckoutStep = function summaryCheckoutStep(state, action, type) {
        var factory = (0, _selectors.getOrderFactoryForSummary)(state);
        console.log("summary order factory", factory);

        if (factory === _CartEntryTypeEnum.default.FIX) {
            return summaryEvent(state, action);
        }
    };

    var buildListField = function buildListField(state) {
        return (0, _dataLayerUtilities.stringJoiner)(["scenariusze rozprowadzające", (0, _authorization.getSalesChannel)(state)], " ");
    };

    var extractProductForMigrationVariant = function extractProductForMigrationVariant(state) {
        var proposal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return {
            name: proposal.description,
            id: proposal.title,
            price: proposal.priceFrom,
            brand: _dataLayerUtilities.Constants.ORANGE,
            category: (0, _dataLayerUtilities.stringJoiner)([(0, _authorization.getSalesChannel)(state), (0, _root.marketSegment)(state), (0, _dataLayerUtilities.findCategoryTypeBasedOnProduct)(proposal.offersUrl), (0, _dataLayerUtilities.getProcessTypeName)("RETENTION")], "/"),
            variant: "",
            list: buildListField(state),
            position: index + 1
        };
    };

    var createImpressionForMigrationVariants = function createImpressionForMigrationVariants(state) {
        var proposal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        return extractProductForMigrationVariant(state, proposal, index);
    };

    var buildImpressions = function buildImpressions(state, action) {
        var proposals = action.payload.variantContainers || [];
        proposals = proposals.reduce(function(all, current) {
            return all.concat(current.variants);
        }, []);
        var result = proposals.map(function(proposal, index) {
            return createImpressionForMigrationVariants(state, proposal, index);
        });
        return result;
    };

    var buildMigrationVariantsFetched = function buildMigrationVariantsFetched(state, action) {
        return _objectSpread({
            ecommerce: {
                currenncyCode: _dataLayerUtilities.Constants.CURRENCY_CODE
            },
            impressions: buildImpressions(state, action)
        }, calculateSellersData(state), {
            dimension27: "CIM ID no such data" // CIM data is not available

        });
    };

    var migrationVariantsFetched = function migrationVariantsFetched(state, action) {
        console.log("datalayer migration variants fetched action");
        if (!action.payload) return null;
        return _objectSpread({}, buildMigrationVariantsFetched(state, action));
    };

    var createClientInfoProducts = function createClientInfoProducts(state, action) {
        var _action$payload = action.payload,
            name = _action$payload.name,
            priceWithDiscounts = _action$payload.priceWithDiscounts,
            addons = _action$payload.addons,
            leasedDevices = _action$payload.leasedDevices,
            formattedEndDate = _action$payload.formattedEndDate;
        var market = (0, _dataLayerUtilities.getMarket)((0, _root.marketSegment)(state));
        var result = {
            name: name,
            price: priceWithDiscounts,
            VAS: addons,
            EOP: formattedEndDate,
            variant: leasedDevices && (0, _dataLayerUtilities.stringJoiner)(leasedDevices.map(function(device) {
                return device.name;
            }), "|"),
            market: market
        };
        return {
            result: result
        };
    };

    var createClientInfo = function createClientInfo(state, action) {
        if (!action.payload) return {};
        return {
            products: createClientInfoProducts(state, action)
        };
    };

    var buildServiceDetailsFetched = function buildServiceDetailsFetched(state, action) {
        return {
            event: _dataLayerUtilities.AnalyticsEvents.CLIENT_INFO,
            clientInfo: createClientInfo(state, action)
        };
    };

    var serviceDetailsFetched = function serviceDetailsFetched(state, action) {
        console.log("datalayer service details fetched for migration variants");
        return buildServiceDetailsFetched(state, action);
    };

    var createSelectedMigrationVariantProductEntry = function createSelectedMigrationVariantProductEntry(state, action) {
        return (0, _root.getMigrationVariantContainers)(state).reduce(function(all, current) {
            return all.concat(current.variants);
        }, []).map(function(variant, index) {
            return _objectSpread({}, variant, {
                index: index
            });
        }).filter(function(variant) {
            return variant.migrationVariantPk === action.payload.migrationVariantPk;
        }).map(function(variant) {
            return extractProductForMigrationVariant(state, variant, variant.index);
        });
    };

    var buildECommerceForProductClick = function buildECommerceForProductClick(state, action) {
        return {
            click: {
                actionField: {
                    list: buildListField(state)
                },
                products: createSelectedMigrationVariantProductEntry(state, action)
            }
        };
    };

    var buildMigrationVariantSelected = function buildMigrationVariantSelected(state, action) {
        return {
            event: _dataLayerUtilities.AnalyticsEvents.PRODUCT_CLICK,
            ecommerce: buildECommerceForProductClick(state, action)
        };
    };

    var migrationVariantSelected = function migrationVariantSelected(state, action) {
        console.log("datalayer migration variant selected");
        return buildMigrationVariantSelected(state, action);
    };

    var _default = (_FETCH_OFFERS$FETCH_F = {}, babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes.FETCH_OFFERS, fetchOffersFix), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes3.FETCH_FIX_CONFIGURABLES, multicartCheckoutStep), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes2.DO_CHECKOUT_STEP_DONE, multicartCheckoutStepUpdate), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes3.FETCHED_MINI_CART, fetchedMiniCart), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes2.REGISTER_COMPONENT_PROPS_VALUE, summaryCheckoutStep), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes.MIGRATION_VARIANTS_FETCHED, migrationVariantsFetched), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes.SERVICE_DETAILS_FETCHED, serviceDetailsFetched), babelHelpers.defineProperty(_FETCH_OFFERS$FETCH_F, _actionTypes.MIGRATION_VARIANT_SELECTED, migrationVariantSelected), _FETCH_OFFERS$FETCH_F);

    _exports.default = _default;
});
//# sourceMappingURL=analyticsCustomEvents.js.map