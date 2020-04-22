export const Constants = {
    CURRENCY_CODE: "PLN",
    ORANGE: "Orange",
};
export const PageTypes = {
    ESHOP: "eshop",
};

export const getMarket = market => ({
    "B2C": "mass",
    "B2B_SOHO": "business",
})[market];

export const AnalyticsEvents = {
    FORM_SUBMIT_WWT: "formSubmitWWT",
    FORM_SUBMIT_WWT_RETMIG: "formSubmitWWT_RETMIG",
    CHECKOUT: "checkout",
    PURCHASE: "purchase",
    CLIENT_INFO: "clientInfo",
    PRODUCT_CLICK: "productClick",
    PACKAGE_B2B: "pakiet_B2B",
};
export const AnalyticsActions = {
    CHANGED_PACKAGE: "Zmieniony pakiet",
    CHANGE_PACKAGE: "Zmień pakiet",
};

export const CategoryProduct = {
    INTERNET_DOMOWY: "Internet domowy",
    INTERNET_DOMOWY_3P: "Internet domowy 3P",
};
export const offerTypeToCategoryMap = offerType => ({
    VOICE: "Usługi głosowe",
    DATA: "Internet mobilny",
    SIMFREE_INST: "Telefony",
    VOICE_LDF: "Usługi głosowe",
    DATA_LDF: "Internet",
    VOICE_ODF: "Usługi głosowe",
    DATA_ODF: "Internet",
})[offerType];

export const offerTypeToCommitmentMap = offerType => ({
    VOICE: "Abonament",
    DATA: "Abonament",
    SIMFREE_INST: "Sklep",
    VOICE_LDF: "Abonament",
    DATA_LDF: "Abonament",
    VOICE_ODF: "Abonament",
    DATA_ODF: "Abonament",
})[offerType];
export const getPageCategory = pageCategory => ({
    "1P": CategoryProduct.INTERNET_DOMOWY,
    "3P": CategoryProduct.INTERNET_DOMOWY_3P,
})[pageCategory];

export const findCategoryTypeBasedOnProduct = (input = "") => {
    if (input.includes("3P"))
        return getPageCategory("3P");
    if (input.includes("1P"))
        return getPageCategory("1P");
    return "inny produkt"
};

export const getProcessTypeName = processType => ({
    MIGRATION_PRE_POST: "Migracja",
    MNP: "Przeniesienie",
    MNP_TWOSTEP: "Przeniesienie",
    INSTALMENT_SALES_OF_GOODS: "Na raty",
    INSTALMENT_SALES_OF_GOODS_NC: "Na raty",
    ACTIVATION: "Nowy",
    ACTIVATION_NNAKED: "Nowy",
    ACTIVATION_WITH_NP_INT: "Nowy",
    ACTIVATION_ACTIVE_WLR: "Nowy",
    MIGRATION_MOD_TECH: "Migracja",
    MIGRATION_MOD_TECH_NNAKED: "Migracja",
    MIGRATION_MOD_TECH_ACTIVE_WLR: "Migracja",
    MIGRATION_1P_3P: "Migracja",
    MIGRATION_1P_3P_NNAKED: "Migracja",
    MIGRATION_1P_3P_WITH_NP_INT: "Migracja",
    MIGRATION_1P_3P_ACTIVE_WLR: "Migracja",
    MIGRATION_2P_3P: "Migracja",
    MIGRATION_2P_3P_NNAKED: "Migracja",
    MIGRATION_2P_3P_ACTIVE_WLR: "Migracja",
    MIGRATION_2W_3P: "Migracja",
    MIGRATION_2W_3P_NNAKED: "Migracja",
    MIGRATION_2W_3P_WITH_NP_INT: "Migracja",
    MIGRATION_2W_3P_ACTIVE_WLR: "Migracja",
    RETENTION: "Przedłużenie",
    RETENTION_NNAKED: "Przedłużenie",
    RETENTION_ACTIVE_WLR: "Przedłużenie",
})[processType];


export const getCheckoutStep = step => ({
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
})[step];

export const stringJoiner = (elements, separator) => {
    // ...elements.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
    return elements.map(value => value).join(separator);
};