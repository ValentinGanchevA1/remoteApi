define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.stringJoiner = _exports.getCheckoutStep = _exports.getProcessTypeName = _exports.findCategoryTypeBasedOnProduct = _exports.getPageCategory = _exports.offerTypeToCommitmentMap = _exports.offerTypeToCategoryMap = _exports.CategoryProduct = _exports.AnalyticsActions = _exports.AnalyticsEvents = _exports.getMarket = _exports.PageTypes = _exports.Constants = void 0;
    var Constants = {
        CURRENCY_CODE: "PLN",
        ORANGE: "Orange"
    };
    _exports.Constants = Constants;
    var PageTypes = {
        ESHOP: "eshop"
    };
    _exports.PageTypes = PageTypes;

    var getMarket = function getMarket(market) {
        return {
            "B2C": "mass",
            "B2B_SOHO": "business"
        } [market];
    };

    _exports.getMarket = getMarket;
    var AnalyticsEvents = {
        FORM_SUBMIT_WWT: "formSubmitWWT",
        FORM_SUBMIT_WWT_RETMIG: "formSubmitWWT_RETMIG",
        CHECKOUT: "checkout",
        PURCHASE: "purchase",
        CLIENT_INFO: "clientInfo",
        PRODUCT_CLICK: "productClick",
        PACKAGE_B2B: "pakiet_B2B"
    };
    _exports.AnalyticsEvents = AnalyticsEvents;
    var AnalyticsActions = {
        CHANGED_PACKAGE: "Zmieniony pakiet",
        CHANGE_PACKAGE: "Zmień pakiet"
    };
    _exports.AnalyticsActions = AnalyticsActions;
    var CategoryProduct = {
        INTERNET_DOMOWY: "Internet domowy",
        INTERNET_DOMOWY_3P: "Internet domowy 3P"
    };
    _exports.CategoryProduct = CategoryProduct;

    var offerTypeToCategoryMap = function offerTypeToCategoryMap(offerType) {
        return {
            VOICE: "Usługi głosowe",
            DATA: "Internet mobilny",
            SIMFREE_INST: "Telefony",
            VOICE_LDF: "Usługi głosowe",
            DATA_LDF: "Internet",
            VOICE_ODF: "Usługi głosowe",
            DATA_ODF: "Internet"
        } [offerType];
    };

    _exports.offerTypeToCategoryMap = offerTypeToCategoryMap;

    var offerTypeToCommitmentMap = function offerTypeToCommitmentMap(offerType) {
        return {
            VOICE: "Abonament",
            DATA: "Abonament",
            SIMFREE_INST: "Sklep",
            VOICE_LDF: "Abonament",
            DATA_LDF: "Abonament",
            VOICE_ODF: "Abonament",
            DATA_ODF: "Abonament"
        } [offerType];
    };

    _exports.offerTypeToCommitmentMap = offerTypeToCommitmentMap;

    var getPageCategory = function getPageCategory(pageCategory) {
        return {
            "1P": CategoryProduct.INTERNET_DOMOWY,
            "3P": CategoryProduct.INTERNET_DOMOWY_3P
        } [pageCategory];
    };

    _exports.getPageCategory = getPageCategory;

    var findCategoryTypeBasedOnProduct = function findCategoryTypeBasedOnProduct() {
        var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        if (input.includes("3P")) return getPageCategory("3P");
        if (input.includes("1P")) return getPageCategory("1P");
        return "inny produkt";
    };

    _exports.findCategoryTypeBasedOnProduct = findCategoryTypeBasedOnProduct;

    var getProcessTypeName = function getProcessTypeName(processType) {
        return {
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
            RETENTION_ACTIVE_WLR: "Przedłużenie"
        } [processType];
    };

    _exports.getProcessTypeName = getProcessTypeName;

    var getCheckoutStep = function getCheckoutStep(step) {
        return {
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
        } [step];
    };

    _exports.getCheckoutStep = getCheckoutStep;

    var stringJoiner = function stringJoiner(elements, separator) {
        // ...elements.reduce((previousValue, currentValue) => previousValue.concat(currentValue))
        return elements.map(function(value) {
            return value;
        }).join(separator);
    };

    _exports.stringJoiner = stringJoiner;
});
//# sourceMappingURL=dataLayerUtilities.js.map