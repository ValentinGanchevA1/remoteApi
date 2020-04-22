define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.stringJoiner = e.getCheckoutStep = e.getProcessTypeName = e.findCategoryTypeBasedOnProduct = e.getPageCategory = e.offerTypeToCommitmentMap = e.offerTypeToCategoryMap = e.CategoryProduct = e.AnalyticsActions = e.AnalyticsEvents = e.getMarket = e.PageTypes = e.Constants = void 0;
    e.Constants = {
        CURRENCY_CODE: "PLN",
        ORANGE: "Orange"
    };
    e.PageTypes = {
        ESHOP: "eshop"
    };
    e.getMarket = function(e) {
        return {
            B2C: "mass",
            B2B_SOHO: "business"
        } [e]
    };
    e.AnalyticsEvents = {
        FORM_SUBMIT_WWT: "formSubmitWWT",
        FORM_SUBMIT_WWT_RETMIG: "formSubmitWWT_RETMIG",
        CHECKOUT: "checkout",
        PURCHASE: "purchase",
        CLIENT_INFO: "clientInfo",
        PRODUCT_CLICK: "productClick",
        PACKAGE_B2B: "pakiet_B2B"
    };
    e.AnalyticsActions = {
        CHANGED_PACKAGE: "Zmieniony pakiet",
        CHANGE_PACKAGE: "Zmień pakiet"
    };
    var n = {
        INTERNET_DOMOWY: "Internet domowy",
        INTERNET_DOMOWY_3P: "Internet domowy 3P"
    };
    e.CategoryProduct = n;
    e.offerTypeToCategoryMap = function(e) {
        return {
            VOICE: "Usługi głosowe",
            DATA: "Internet mobilny",
            SIMFREE_INST: "Telefony",
            VOICE_LDF: "Usługi głosowe",
            DATA_LDF: "Internet",
            VOICE_ODF: "Usługi głosowe",
            DATA_ODF: "Internet"
        } [e]
    };
    e.offerTypeToCommitmentMap = function(e) {
        return {
            VOICE: "Abonament",
            DATA: "Abonament",
            SIMFREE_INST: "Sklep",
            VOICE_LDF: "Abonament",
            DATA_LDF: "Abonament",
            VOICE_ODF: "Abonament",
            DATA_ODF: "Abonament"
        } [e]
    };

    function t(e) {
        return {
            "1P": n.INTERNET_DOMOWY,
            "3P": n.INTERNET_DOMOWY_3P
        } [e]
    }
    e.getPageCategory = t;
    e.findCategoryTypeBasedOnProduct = function(e) {
        var n = 0 < arguments.length && void 0 !== e ? e : "";
        return n.includes("3P") ? t("3P") : n.includes("1P") ? t("1P") : "inny produkt"
    };
    e.getProcessTypeName = function(e) {
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
        } [e]
    };
    e.getCheckoutStep = function(e) {
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
        } [e]
    };
    e.stringJoiner = function(e, n) {
        return e.map(function(e) {
            return e
        }).join(n)
    }
});
//# sourceMappingURL=dataLayerUtilities.js.map