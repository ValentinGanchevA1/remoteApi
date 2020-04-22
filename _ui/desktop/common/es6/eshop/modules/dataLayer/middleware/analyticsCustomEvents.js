import {
    AFTER_WWT,
    BEFORE_WWT,
    FETCH_OFFERS,
    FORCE_AFTER_WWT,
    MIGRATION_VARIANT_SELECTED,
    MIGRATION_VARIANTS_FETCHED,
    SERVICE_DETAILS_FETCHED,
} from "../../fix/actionTypes";
import {
    getMigrationVariantContainers,
    getPageContext,
    getServiceDetails,
    getWwtAddress,
    isAfterWWT,
    marketSegment,
} from "../../fix/selectors/root";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    getAddressMain,
    getAssistModeStateData,
    getCurrentStepId,
    getFixEntries,
    getSalesChannelForSummary,
    getOrderFactoryForSummary,
} from "../../checkout/selectors";
import {
    DO_CHECKOUT_STEP_DONE,
    GET_CART_CUSTOMER_DONE,
    REGISTER_COMPONENT_PROPS_VALUE,
} from "../../checkout/actionTypes";
import {
    getFixConfigurables,
    getMiniCartData
} from "../../cart/selectors";
import {
    AnalyticsEvents,
    CategoryProduct,
    Constants,
    findCategoryTypeBasedOnProduct,
    getCheckoutStep,
    getMarket,
    getPageCategory,
    getProcessTypeName,
    PageTypes,
    stringJoiner,
} from "../dataLayerUtilities";
import {
    FETCH_FIX_CONFIGURABLES,
    FETCHED_MINI_CART
} from "../../cart/actionTypes";
import CartEntryType from "../../checkout/constants/CartEntryTypeEnum";


const mapWWTAddress = ({
    town,
    line1,
    line2,
    appartmentNo
}) => ({
    city: town,
    street: line1,
    streetNo: line2,
    flatNo: appartmentNo,
});
const mapAddressMain = ({
    town,
    streetName,
    streetNumber,
    appartmentNo
}) => ({
    city: town,
    street: streetName,
    streetNo: streetNumber,
    flatNo: appartmentNo,
});
const calculateWWTResult = offers => {
    // offer.broadband.bitrate
    // offer.broadband.bundleId
    const result = offers ?
        offers.map(offer =>
            stringJoiner([offer.broadband.code, offer.broadband.bitrate], "_")).join("|") :
        "LTE";
    return (
        result
    );
};
const getAddress = state => {
    const address = getWwtAddress(state);
    if (Object.keys(address).length) return mapWWTAddress(address);
    const serviceDetails = getServiceDetails(state);
    const {
        installationAddress
    } = serviceDetails;
    if (installationAddress && Object.keys(installationAddress).length) return mapWWTAddress(installationAddress);
    return {};
};
const encodeWithBase64 = input => {
    const objJsonStr = JSON.stringify(input);
    const objJsonB64 = Buffer.from(objJsonStr).toString("base64");
    console.log("datalayer encode", objJsonStr, objJsonB64);
    return objJsonB64;
};
const formSubmitWWT = (eventName = AnalyticsEvents.FORM_SUBMIT_WWT) => (state, action) => ({
    event: eventName + "_" + calculateSalesChannel(state),
    address: encodeWithBase64(getAddress(state)),

    // wwt_result: calculateWWTResult(getOffers(state))
    wwt_result: calculateWWTResult(action.payload.offers),
});

const calculateSellersData = state => {
    const {
        loggedEmployee,
        assistedEmployee
    } = getAssistModeStateData(state);
    const employee = assistedEmployee || loggedEmployee;
    const {
        fullBscs: fullBscs,
        salesChannelName: salesChannelName,
        loginOtsa: loginOtsa,
        location: location
    } = !!employee && employee;
    return ({
        dimension19: fullBscs || "brak danych ID sprzedawcy",
        dimension20: salesChannelName || "brak danych ID kanału",
        dimension25: loginOtsa || "brak danych ID sprzedawcy OTSA",
        dimension26: location || "brak danych ID punktu",
    });
};
const calculateSalesChannel = state => {
    return getSalesChannel(state) || getSalesChannelForSummary(state) || calculateSellersData(state).dimension20;
};

const pageViewEvent = (state, action) => ({
    pageType: PageTypes.ESHOP,
    market: getMarket(marketSegment(state)),
    channel: calculateSalesChannel(state),
    pageCategory: getPageCategory(getPageContext(state)),
    // ...transform(state, action).payload
});

const getDeviceVariantData = (modemFixProduct, decoderFixProduct) => {
    let result = modemFixProduct || decoderFixProduct;
    result = {
        ...result,
        name: (modemFixProduct && "Modem") || (decoderFixProduct && "Dekoder") || "FIXO"
    };
    return result;
};

const createProductEntry = (state, entries, totalMonthlyPrice = {}, totalCheckoutPrice = {}) => {
    const result = entries.map(entry => {
        const {
            productCode,
            processType,
            bundleType,
            bundleCode,
            totalMonthlyPrices,
            loyaltyLength,
            entryType,
            modemFixProduct,
            bundleNo,
            broadbandFixProduct,
            decoderFixProduct,
            totalFirstBillPrice
        } = entry;
        const name = broadbandFixProduct && broadbandFixProduct.name;
        const fixConfigurables = getFixConfigurables(state).find(configurable => configurable.cartBundle === entry.bundleNo);
        const deviceVariantData = getDeviceVariantData(modemFixProduct, decoderFixProduct);
        const dimension4 = deviceVariantData && deviceVariantData.price && deviceVariantData.price.oneTimeCost && deviceVariantData.price.oneTimeCost.price || 0;
        const dimension5 = totalMonthlyPrice && totalMonthlyPrice.price || 0;
        const dimension6 = deviceVariantData && deviceVariantData.price && deviceVariantData.price.monthlyCosts[0] && deviceVariantData.price.monthlyCosts[0].price || 0;
        return {

            name: stringJoiner([productCode, bundleType, bundleCode], "|"),
            id: productCode,
            price: totalMonthlyPrice && totalMonthlyPrice.price,
            brand: calculateSalesChannel(state),
            category: stringJoiner([calculateSalesChannel(state), marketSegment(state), CategoryProduct.INTERNET_DOMOWY, getProcessTypeName(processType)], "/"),
            variant: deviceVariantData && deviceVariantData.name,
            quantity: 1,
            dimension4: dimension4,
            dimension5: dimension5,
            dimension6: dimension6,
            dimension7: loyaltyLength,
            metric11: loyaltyLength * (dimension5 + dimension6) + dimension4,
        };
    });
    console.log("datalayer product entry", result);
    return (
        result
    );
};
const calculateCheckoutProducts = (state, action) => {
    const {
        entries,
        totalMonthlyPrice,
        totalCheckoutPrice
    } = getMiniCartData(state);
    return createProductEntry(state, entries, totalMonthlyPrice, totalCheckoutPrice);
};
const calculatePurchaseProducts = (state, action) => {
    const {
        entries,
        totalMonthlyPrice,
        totalCheckoutPrice
    } = action.payload.orderSummary;
    const result = createProductEntry(state, entries, totalMonthlyPrice, totalCheckoutPrice);
    return result;
};

const calculateProductsForStep = step => (state, action) => ({
    checkout: calculateCheckoutProducts(state, action),
    purchase: calculatePurchaseProducts(state, action),
})[step];

const calculateCheckoutECommerce = (state, action) => ({
    checkout: {
        actionField: {
            step: getCheckoutStep(getCurrentStepId(state)).number
        },
        products: calculateCheckoutProducts(state, action),
    },
});

const calculatePurchaseECommerce = (state, action) => ({
    purchase: {
        actionField: {
            id: action.payload.omniNumber,
            affiliation: action.payload.salesChannel,
            revenue: countRevenueMetric11(action.payload),
            shipping: action.payload.deliveryCost,
            action: AnalyticsEvents.PURCHASE,
            coupon: action.payload.orderSummary.voucherCode,
            // dimension19: "IDsprzedawcy"
        },
        products: calculatePurchaseProducts(state, action),
    },
});

const calculateECommerceForStep = step => (state, action) => ({
    "cart-contents": () => calculateCheckoutECommerce(state, action),
    "customer-data": () => calculateCheckoutECommerce(state, action),
    "delivery-payment": () => calculateCheckoutECommerce(state, action),
    "purchase": () => action.payload && calculatePurchaseECommerce(state, action),
})[step](state, action);

const countRevenueMetric11 = data => {
    const {
        tieredPrices,
        checkoutCost,
        firstBillPrice
    } = data;
    const monthlyRevenue = tieredPrices.reduce((sum, tier) => sum + tier.price * (tier.monthTo - tier.monthFrom + 1), 0);
    console.log(`dataLayer monthlyRevenue ${monthlyRevenue}, checkout cost ${checkoutCost && checkoutCost.price}, first bill ${firstBillPrice && firstBillPrice.price}`);
    const result = monthlyRevenue + (checkoutCost && checkoutCost.price);
    return result;
};

const checkoutEvent = (state, action) => ({
    event: AnalyticsEvents.CHECKOUT,
    ...calculateSellersData(state),
    dimension27: "CIM ID no such data", // CIM data is not available
    address: encodeWithBase64(mapAddressMain(getAddressMain(state))),
    ecommerce: calculateECommerceForStep(getCurrentStepId(state))(state, action),
});
const summaryEvent = (state, action) => ({
    event: AnalyticsEvents.PURCHASE,
    // ...calculateSellersData(state),
    dimension27: "CIM ID no such data",
    address: "no data",
    ecommerce: calculateECommerceForStep("purchase")(state, action),
});

const combineEvents = (...functions) => (state, action) => ({
    ...functions.map(x => x(state, action)).reduce((result, currentValue) => {
        console.log("combine ", {
            ...result,
            ...currentValue
        });
        return {
            ...result,
            ...currentValue
        };
    }, {}),
});

const checkCondition = (selector, ...f) => (state, action) => {
    console.log("checkCondition", selector(state), f, action.payload);
    if ((selector(state) && selector(state).length > 0)) {
        return combineEvents(...f)(state, action);
        // return  f.map(x=>x(state,action)).reduce((result, currentValue) => {return {...result,...currentValue}},{})
    }
};
const fetchOffersFix = (state, action, type) => {
    console.log("fetch offers checkCondition", {
        state,
        action,
        type
    });
    if (type[AFTER_WWT] && !type[SERVICE_DETAILS_FETCHED]) {
        console.log("isAfterWWT", isAfterWWT(state));
        return combineEvents(formSubmitWWT(), pageViewEvent)(state, action);
        // return  f.map(x=>x(state,action)).reduce((result, currentValue) => {return {...result,...currentValue}},{})
    }

    if (type[FORCE_AFTER_WWT] && type[SERVICE_DETAILS_FETCHED]) {
        console.log("datalayer LP offers fetch for retention");
        return combineEvents(formSubmitWWT(AnalyticsEvents.FORM_SUBMIT_WWT_RETMIG), pageViewEvent)(state, action);
    }
};
const checkIfFIXSummaryOrder = (selector, ...f) => (state, action) => {
    console.log("checkCondition", {
        selector
    }, selector(state), f);
    const condition = selector(state) === "FIX";
    if (condition) {
        return combineEvents(...f)(state, action);
    }
};

const createComplex = params => (state, action) => {
    // console.log("complex" , params[0] );
    const r = params.map(x => x(state, action)).reduce((result, currentValue) => {
        return {
            ...result,
            ...currentValue
        };
    }, {});
    console.log("complex map", r);
    return r;
};
const multicartCheckoutStep = (state, action) => {
    console.log("datalayer multicartCheckoutStep", getFixEntries(state), action, getAddressMain(state));
    return combineEvents(pageViewEvent, checkoutEvent)(state, action);
};
const multicartCheckoutStepUpdate = (state, action, type) => {
    if (type[FETCH_FIX_CONFIGURABLES]) {
        return multicartCheckoutStep(state, action)
    }
};
const fetchedMiniCart = (state, action, type) => {
    console.log("datalayer fetcheMiniCart FIX", getFixEntries(state));
    if (getCurrentStepId(state) === "customer-data" && getFixEntries(state).length) {
        return multicartCheckoutStep(state, action); // for FIX customer data
    }
    if (getCurrentStepId(state) === "delivery-payment" && getFixEntries(state).length && (type[GET_CART_CUSTOMER_DONE] === 1 && type[FETCHED_MINI_CART])) {
        return multicartCheckoutStep(state, action); // for FIX delivery and payment
    }
};
const summaryCheckoutStep = (state, action, type) => {
    const factory = getOrderFactoryForSummary(state);
    console.log("summary order factory", factory);
    if (factory === CartEntryType.FIX) {
        return summaryEvent(state, action);
    }
};

const buildListField = state => stringJoiner(["scenariusze rozprowadzające", getSalesChannel(state)], " ");

const extractProductForMigrationVariant = (state, proposal = {}, index = 0) => ({
    name: proposal.description,
    id: proposal.title,
    price: proposal.priceFrom,
    brand: Constants.ORANGE,
    category: stringJoiner([getSalesChannel(state), marketSegment(state), findCategoryTypeBasedOnProduct(proposal.offersUrl), getProcessTypeName("RETENTION")], "/"),
    variant: "",
    list: buildListField(state),
    position: index + 1,
});
const createImpressionForMigrationVariants = (state, proposal = {}, index = 0) => {
    return extractProductForMigrationVariant(state, proposal, index);
};
const buildImpressions = (state, action) => {
    let proposals = action.payload.variantContainers || [];
    proposals = proposals.reduce((all, current) => all.concat(current.variants), []);
    const result = proposals.map((proposal, index) => createImpressionForMigrationVariants(state, proposal, index));
    return (
        result
    );
};
const buildMigrationVariantsFetched = (state, action) => {
    return ({
        ecommerce: {
            currenncyCode: Constants.CURRENCY_CODE,
        },
        impressions: buildImpressions(state, action),
        ...calculateSellersData(state),
        dimension27: "CIM ID no such data", // CIM data is not available

    })
};
const migrationVariantsFetched = (state, action) => {
    console.log("datalayer migration variants fetched action");
    if (!action.payload) return null;
    return ({
        ...buildMigrationVariantsFetched(state, action),
    })
};

const createClientInfoProducts = (state, action) => {
    const {
        name,
        priceWithDiscounts,
        addons,
        leasedDevices,
        formattedEndDate
    } = action.payload;
    const market = getMarket(marketSegment(state));
    const result = {
        name: name,
        price: priceWithDiscounts,
        VAS: addons,
        EOP: formattedEndDate,
        variant: leasedDevices && stringJoiner(leasedDevices.map(device => device.name), "|"),
        market: market,
    };

    return ({
        result,
    })
};

const createClientInfo = (state, action) => {
    if (!action.payload)
        return {};
    return ({
        products: createClientInfoProducts(state, action),
    })
};

const buildServiceDetailsFetched = (state, action) => {
    return ({
        event: AnalyticsEvents.CLIENT_INFO,
        clientInfo: createClientInfo(state, action),
    });
};

const serviceDetailsFetched = (state, action) => {
    console.log("datalayer service details fetched for migration variants");
    return buildServiceDetailsFetched(state, action);
};

const createSelectedMigrationVariantProductEntry = (state, action) =>
    getMigrationVariantContainers(state).reduce((all, current) => all.concat(current.variants), [])
    .map((variant, index) => {
        return {
            ...variant,
            index: index
        }
    })
    .filter(variant => variant.migrationVariantPk === action.payload.migrationVariantPk)
    .map(variant => extractProductForMigrationVariant(state, variant, variant.index));

const buildECommerceForProductClick = (state, action) => {
    return {
        click: {
            actionField: {
                list: buildListField(state)
            },
            products: createSelectedMigrationVariantProductEntry(state, action),

        },
    }
};

const buildMigrationVariantSelected = (state, action) => ({
    event: AnalyticsEvents.PRODUCT_CLICK,
    ecommerce: buildECommerceForProductClick(state, action),
});

const migrationVariantSelected = (state, action) => {
    console.log("datalayer migration variant selected");
    return buildMigrationVariantSelected(state, action)
};
export default {

    [FETCH_OFFERS]: fetchOffersFix, // LP FBB
    [FETCH_FIX_CONFIGURABLES]: multicartCheckoutStep, // cart view FBB
    [DO_CHECKOUT_STEP_DONE]: multicartCheckoutStepUpdate, // cart modify FBB
    [FETCHED_MINI_CART]: fetchedMiniCart, // customer data and delivery FBB
    [REGISTER_COMPONENT_PROPS_VALUE]: summaryCheckoutStep,
    [MIGRATION_VARIANTS_FETCHED]: migrationVariantsFetched,
    [SERVICE_DETAILS_FETCHED]: serviceDetailsFetched,
    [MIGRATION_VARIANT_SELECTED]: migrationVariantSelected,
};