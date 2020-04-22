define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "../checkout/constants/CartEntryTypeEnum"], function(e, a, r, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i);

    function c(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var s = (0, r.default)("#propositionCarouselId").val(),
        t = (0, r.default)("#migrationVariantsId").val(),
        u = (0, r.default)("#filterId").val(),
        d = (0, r.default)("#filterComponentId").val(),
        n = (0, r.default)("#documentsComponentId").val(),
        o = (0, r.default)("#customerServicesComponentId").val(),
        f = (0, r.default)("#voipModalComponentId").val();

    function l(e) {
        var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        return t && decodeURIComponent(t[1].replace(/\+/g, " "))
    }
    var p = {
        getDocuments: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : [];
            return (0, a.post)(c("/documents/getDocumentsByFilterAndComponent"), {
                filterId: u,
                componentId: n,
                templates: t
            })
        },
        getOffers: function(e, t, n, o) {
            var r = 2 < arguments.length && void 0 !== n ? n : null,
                i = 3 < arguments.length && void 0 !== o && o;
            return (0, a.postJsonObject)(c("/fix/offer/offers"), {
                loyalty: t,
                filterPk: u,
                filterComponentPk: d,
                componentPk: s,
                addressData: e,
                customerServicesHashCode: r,
                reset: i
            })
        },
        declareKna: function(e) {
            return (0, a.get)(c("/fix/kna/declare/" + e))
        },
        getMigrationMode: function(e) {
            return (0, a.post)(c("/fix/migration/migration-mode?bundleTypes=" + e), {})
        },
        checkWwtAdditionalData: function(e) {
            return (0, a.postJsonObject)(c("/wwtData/additionalData"), e)
        },
        getCustomerServiceList: function() {
            return (0, a.post)(c("/customer/services"), {
                componentPk: o
            })
        },
        fetchVoipNumbers: function(e) {
            return (0, a.get)(c("/fix/voip/fetchNumbers"), {
                cmpId: f,
                cityId: e
            })
        },
        saveSelectedVoipNumber: function(e) {
            return (0, a.post)(c("/fix/voip/select?selectedNumber=" + e))
        },
        addOfferToCart: function(e, t) {
            return (0, a.post)(c("/fix/cart/add?propositionId=" + e + "&secondaryChoiceOffer=" + t), {})
        },
        removeFromCart: function() {
            return (0, a.get)(c("/fix/cart/remove"), {})
        },
        getTvPackages: function(e) {
            return (0, a.get)(c("/fix/cart/data/tvPackages?propositionId=" + e), {})
        },
        isCartEmpty: function() {
            return (0, a.get)(c("/fix/cart/empty"))
        },
        getServiceDetails: function(e, t) {
            return (0, a.get)(c("/customer/serviceDetails"), {
                cimId: l("cimId"),
                des: l("des"),
                serviceInstanceId: e,
                forceReload: t
            })
        },
        getMigrationVariants: function(e) {
            return (0, a.postJsonObject)(c("/fix/migration/migration-variants"), {
                componentPk: t,
                addressData: e
            })
        },
        clearMigrationData: function() {
            return (0, a.post)(c("/fix/migration/clear"), {})
        },
        selectMigrationVariant: function(e, t) {
            return (0, a.postJsonObject)(c("/fix/migration/migration"), {
                migrationVariantPk: e,
                url: t
            })
        },
        redirectToMigration: function(e, t, n, o) {
            t === i.default.CONVERGENT && (o = "/oferty-migracyjne"), r.default.ajax({
                url: "/konsola-konsultanta/showMigrationVariants",
                type: "GET",
                contentType: "application/json; charset=UTF-8",
                headers: {
                    CSRFToken: (0, r.default)("#CSRFToken").val()
                },
                data: {
                    redirectUrl: o,
                    designationNumber: e,
                    factoryName: t,
                    convergentProductId: n
                },
                success: function(e) {
                    window.location.assign(e)
                }
            })
        },
        getDuplicateOrders: function(e) {
            return (0, a.postJsonObject)(c("/fix/orders/verification/ordersExist"), e)
        },
        getDuplicateOrdersNoCache: function(e) {
            return (0, a.postJsonObject)(c("/fix/orders/verification/ordersExistNoCache"), e)
        }
    };
    e.default = p
});
//# sourceMappingURL=remoteApi.js.map