define(["exports", "eshop/flux/utils/OraApiUtils"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;

    function c(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var t = "/sklep",
        r = t + "/tree/reloadCategoriesTree",
        o = {
            getFiltersList: function(e) {
                return (0, n.get)(c("/sklep/tree/getFilters?selectedCategory=" + e))
            },
            getDeviceByCode: function(e) {
                return (0, n.get)(c("/device?productCode=" + e))
            },
            addToCart: function(e, t) {
                return (0, n.postJson)(c("/sklep/dodaj"), {
                    productCodePost: e,
                    bundleNo: 0,
                    bundleTemplateId: t
                })
            },
            getProductsTree: function(e) {
                return (0, n.postJsonObject)(c(r), e)
            },
            fetchFilterConfiguration: function(e) {
                return (0, n.postJsonObject)(c("/sklep/filterconfiguration"), e)
            },
            fetchStickerConfiguration: function(e) {
                return (0, n.postJsonObject)(c("/sklep/fetchStickerConfiguration"), e)
            },
            getProductList: function(e, t) {
                return (0, n.get)(c("/sklep/getAll?page=" + e + (t ? "&showAll=" + t : "")))
            },
            sendReview: function(e, t, r, o) {
                return (0, n.postJsonObject)(c("/sklep/recenzja/" + e), {
                    rating: t,
                    login: r,
                    message: o
                })
            },
            getFilteredProductList: function(e) {
                return (0, n.postJsonObject)(c("/sklep/getFiltered"), e)
            },
            getFilteredProductTree: function(e) {
                return (0, n.postJsonObject)(c(r), e)
            },
            getMatchToData: function(e) {
                return (0, n.postJsonObject)(c("/sklep/tree/matchToFilterData"), e)
            },
            reloadMatchToData: function(e) {
                return (0, n.postJsonObject)(c("/sklep/tree/reloadMatchToFilterData"), e)
            },
            getDocumentsForDevice: function(e, t) {
                return (0, n.get)(c("/documents/getDocumentsForProducts"), {
                    productIds: [e],
                    processType: t
                })
            },
            getLastSelectedPos: function() {
                return (0, n.get)(c("/pickup/lastSelectedPos"))
            },
            checkIfActivePickupFromShelf: function(e, t, r, o) {
                return (0, n.get)(c("/pickup/fromShelf/active?offerType=" + e + "&process=" + t + "&market=" + r + "&product=" + o))
            },
            getOplHtmlContentForOfferAndProcess: function(e, t, r) {
                return (0, n.get)(c("/sklep/getDeliveryHtmlForProcess"), {
                    offerType: e,
                    processType: t,
                    uID: r
                })
            },
            getComparatorConfig: function(e, t) {
                return (0, n.get)(c("/comparator/comparatorConfiguration?device=" + e + "&componentPk=" + t))
            },
            updateComparatorDevicesList: function(e) {
                return (0, n.postJsonObject)(c("/comparator/updateDevicesList"), e)
            },
            updateComparatorDevicesListByUid: function(e) {
                return (0, n.post)(c("/comparator/updateDevicesListByUid"), {
                    deviceUid: e
                })
            },
            fetchComparatorDevicesList: function() {
                return (0, n.get)(c("/comparator/fetchDevicesList"), {})
            },
            fetchProducers: function() {
                return (0, n.get)(c("/comparator/findProducers"))
            },
            fetchModelsForProducers: function(e) {
                return (0, n.get)(c("/comparator/modelsForBrand?brand=" + e))
            },
            clearDevicesList: function() {
                return (0, n.post)(c("/comparator/clearDevicesList"), {})
            },
            getStorageCapacityForProduct: function(e) {
                return (0, n.get)(c("/sklep/getStorageCapacityForProduct?baseId=" + e))
            }
        };
    e.default = o
});
//# sourceMappingURL=remoteApi.js.map