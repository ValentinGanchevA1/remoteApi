define(["exports", "Reselect", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/filters", "eshop/modules/magnum2/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/cart/selectors"], function(e, r, c, t, n, a, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getShowRatingErrorModal = e.filterLabelsHardcodedAsGross = e.getCartInvoiceValue = e.getCashInvoiceLimit = e.isPickupPosEnabled = e.getLastPos = e.getStateAddToCartButton = e.addToCartInProgress = e.getProcessErrors = e.getSelectedPositiveTieredOneTimePrice = e.getSelectedMaxMonthlyPriceRange = e.getSelectedAllMaxMonthlyPricesIds = e.getSelectedOneTimePricesList = e.getSelectedMaxMonthlyPriceId = e.getSelectedMaxMonthlyPrice = e.getSelectedOneTimePrices = e.getTieredMaxMonthlyPriceForCurrentOfferType = e.getTieredOneTimePriceForCurrentOfferType = e.getTieredMaxMonthlyPriceConf = e.getTieredOneTimePriceConf = e.isSimfreeInstOfferType = e.getDefaultServicePlan = e.getDefaultProposition = e.getDefaultProcess = e.getSelectedSoftBundleGroup = e.getAvailableProductsKeys = e.getFirstAvailableProductsKey = e.getCurrentSelectedAvailableProductsKeyByUrlParameter = e.getCurrentSelectedAvailableProductsKey = e.getOfferTypesForSelect = e.getProductListHeader = e.getSelectedOfferTypeCmsConfWithMagnum = e.getSelectedOfferTypeDescriptions = e.getSelectedOfferTypeCmsConf = e.getOpenVerificationModal = e.getVerificationNeeded = e.getMiniCartData = e.getOpenFilterModal = e.getSelectedNumberFilter = e.getMainCategory = e.getMatchToFilter = e.getMatchToDataList = e.getSelectedStickerFilter = e.getSelectedFilter = e.getSortDefinition = e.getActualStickerFilters = e.getActualFilters = e.getIsSalesOfGoodsPage = e.checkTreeContainsElement = e.getErrorCode = e.getIsComparatorCategory = e.getSelectedComparatorModel = e.getSelectedComparatorProducer = e.getProducers = e.getDeviceBrands = e.getModelsForBrand = e.getComparatorDevices = e.getComparatorConfig = e.getSearchValue = e.getSelectedCategoryName = e.getSelectedCategory = e.getSelectedColor = e.getSelectedPrice = e.getSelectedProducer = e.getFilterConfiguration = e.isProductTreeEmpty = e.getProductsTrees = e.getSelectedDeviceObject = e.getProductDataForVariantId = e.getInitiallyFiltered = e.getCurrentPageData = e.getSelectedVariantOnList = e.getAllVisibility = e.getSelectedSort = e.getProductListData = e.getProductListWrapper = e.getReviewSend = e.getLogin = e.getMessage = e.getRating = e.getChosenImageIndex = e.getSelectedVariantObjectId = e.isAccessoryListPage = e.isProductListPage = e.isProductDetailsPage = e.getSelectedDeviceTab = e.getSelectedVariantObject = e.getSelectedVariant = e.getSelectedBaseDeviceCode = e.getProductImageUrl = e.getProductName = e.getMetaData = e.getProductOfferFilter = e.getStorageCapacityForProduct = e.getDeliveryAndPaymentComponentUid = e.getDeliveryAndPaymentHtml = e.getComparator = e.getProductDetails = e.getProductList = e.getProductCart = void 0, e.getProductsFilter = e.showCanonicalLink = e.isDuet = e.getFilterConfigurationFetched = void 0, c = babelHelpers.interopRequireDefault(c);

    function i(e) {
        return e.simfree
    }
    var l = (0, r.createSelector)(i, function(e) {
        return e.cart
    });
    e.getProductCart = l;
    var u = (0, r.createSelector)(i, function(e) {
        return e.list
    });
    e.getProductList = u;
    var d = (0, r.createSelector)(i, function(e) {
        return e.details
    });
    e.getProductDetails = d;
    var s = (0, r.createSelector)(i, function(e) {
        return e.comparator
    });
    e.getComparator = s;
    var f = (0, r.createSelector)(d, function(e) {
        return e.deliveryAndPaymentHtml
    });
    e.getDeliveryAndPaymentHtml = f;
    var g = (0, r.createSelector)(d, function(e) {
        return e.deliveryAndPaymentComponentUid
    });
    e.getDeliveryAndPaymentComponentUid = g;
    var S = (0, r.createSelector)(d, function(e) {
        return e.productStorageCapacity
    });
    e.getStorageCapacityForProduct = S;
    var v = (0, r.createSelector)(i, function(e) {
        return e.offerFilter
    });
    e.getProductOfferFilter = v;
    var P = (0, r.createSelector)(i, function(e) {
        return e && e.metaData
    });
    e.getMetaData = P;
    var C = (0, r.createSelector)(l, function(e) {
        return e.name
    });
    e.getProductName = C;
    var p = (0, r.createSelector)(l, function(e) {
        return e.imageUrl
    });
    e.getProductImageUrl = p;
    var m = (0, r.createSelector)(l, function(e) {
        return e.selectedBaseDeviceCode
    });
    e.getSelectedBaseDeviceCode = m;
    var y = (0, r.createSelector)(l, function(e) {
        return e.selectedVariant
    });
    e.getSelectedVariant = y;
    var O = (0, r.createSelector)(d, function(e) {
        return e.selectedVariantObject
    });
    e.getSelectedVariantObject = O;
    var T = (0, r.createSelector)(d, function(e) {
        return e.selectedDeviceTab
    });
    e.getSelectedDeviceTab = T;
    var M = (0, r.createSelector)(function() {
        return !!document.getElementById("ora-product-details-device")
    });
    e.isProductDetailsPage = M;
    var F = (0, r.createSelector)(function() {
        return !!document.getElementById("ora-product-list-header-component") && -1 < window.location.pathname.indexOf("sklep")
    });
    e.isProductListPage = F;
    var D = (0, r.createSelector)(function() {
        return !!document.getElementById("ora-product-list-header-component") && -1 < window.location.pathname.indexOf("akcesoria")
    });
    e.isAccessoryListPage = D;
    var h = (0, r.createSelector)(O, function(e) {
        return e && e.productId
    });
    e.getSelectedVariantObjectId = h;
    var I = (0, r.createSelector)(l, function(e) {
        return e.chosenImageIndex
    });
    e.getChosenImageIndex = I;
    var b = (0, r.createSelector)(l, function(e) {
        return e.rating
    });
    e.getRating = b;
    var L = (0, r.createSelector)(l, function(e) {
        return e.message
    });
    e.getMessage = L;
    var A = (0, r.createSelector)(l, function(e) {
        return e.login
    });
    e.getLogin = A;
    var E = (0, r.createSelector)(l, function(e) {
        return e.reviewSend
    });
    e.getReviewSend = E;
    var V = (0, r.createSelector)(u, function(e) {
        return e.products
    });
    e.getProductListWrapper = V;
    var x = (0, r.createSelector)(V, function(e) {
        return e.data
    });
    e.getProductListData = x;
    var B = (0, r.createSelector)(u, function(e) {
        return e.selectedSort
    });
    e.getSelectedSort = B;
    var k = (0, r.createSelector)(u, function(e) {
        return e.allVisibility
    });
    e.getAllVisibility = k;
    var N = (0, r.createSelector)(u, function(e) {
        return e.selectedVariant
    });
    e.getSelectedVariantOnList = N;
    var j = (0, r.createSelector)(u, function(e) {
        return e.currentPage
    });
    e.getCurrentPageData = j;
    var R = (0, r.createSelector)(u, function(e) {
        return e.initiallyFiltered
    });
    e.getInitiallyFiltered = R;
    e.getProductDataForVariantId = function(t) {
        return (0, r.createSelector)(x, function(e) {
            return e && e.find(function(e) {
                return e.variantList && e.variantList.find(function(e) {
                    return e.productId === t
                })
            })
        })
    };
    var w = (0, r.createSelector)([a.getSelectedDeviceId, x], function(t, e) {
        return e && e.find(function(e) {
            return e.variantList && e.variantList.find(function(e) {
                return e.productId === t
            })
        })
    });
    e.getSelectedDeviceObject = w;
    var K = (0, r.createSelector)(u, function(e) {
        return e.categories
    });
    e.getProductsTrees = K;
    var U = (0, r.createSelector)(K, function(e) {
        return !e.subCategories || 0 === e.subCategories.length
    });
    e.isProductTreeEmpty = U;
    var G = (0, r.createSelector)(u, function(e) {
        return e.filterConfiguration
    });
    e.getFilterConfiguration = G;
    var H = (0, r.createSelector)(u, function(e) {
        return e.selectedProducer
    });
    e.getSelectedProducer = H;
    var _ = (0, r.createSelector)(u, function(e) {
        return e.priceFilter
    });
    e.getSelectedPrice = _;
    var W = (0, r.createSelector)(u, function(e) {
        return e.selectedColor
    });
    e.getSelectedColor = W;
    var q = (0, r.createSelector)(u, function(e) {
        return e.selectedCategory
    });
    e.getSelectedCategory = q;
    var z = (0, r.createSelector)(u, function(e) {
        return e.selectedCategoryName
    });
    e.getSelectedCategoryName = z;
    var J = (0, r.createSelector)(u, function(e) {
        return e.searchValue
    });
    e.getSearchValue = J;
    var Q = (0, r.createSelector)(s, function(e) {
        return e.comparatorConfig
    });
    e.getComparatorConfig = Q;
    var X = (0, r.createSelector)(s, function(e) {
        return e.devices
    });
    e.getComparatorDevices = X;
    var Y = (0, r.createSelector)(s, function(e) {
        return e.modelsForBrand
    });
    e.getModelsForBrand = Y;
    var Z = (0, r.createSelector)(s, function(e) {
        return e.deviceBrands
    });
    e.getDeviceBrands = Z;
    var $ = (0, r.createSelector)(s, function(e) {
        return e.producers
    });
    e.getProducers = $;
    var ee = (0, r.createSelector)(s, function(e) {
        return e.selectedProducer
    });
    e.getSelectedComparatorProducer = ee;
    var te = (0, r.createSelector)(s, function(e) {
        return e.selectedModel
    });
    e.getSelectedComparatorModel = te;
    var re = (0, r.createSelector)(s, function(e) {
        return e.isComparatorCategory
    });
    e.getIsComparatorCategory = re;
    var ce = (0, r.createSelector)(s, function(e) {
        return e.errorCode
    });
    e.getErrorCode = ce;
    var ne = (0, r.createSelector)([q, K], function(e, t) {
        return (r = e) === (c = t).code || function r(c, e) {
            if (!e) return !1;
            if (0 == e.subCategories.length) return !1;
            var n = !1;
            return e.subCategories.map(function(e, t) {
                if (e.code === c) return n = !0;
                n = n || r(c, e)
            }), n
        }(r, c);
        var r, c
    });
    e.checkTreeContainsElement = ne;
    var ae = (0, r.createSelector)(t.getSelectedProcessTypeValue, function(e) {
        return "SALE_OF_GOODS" === e
    });
    e.getIsSalesOfGoodsPage = ae;
    var oe = (0, r.createSelector)(G, function(e) {
        return e.categoryFilter
    });
    e.getActualFilters = oe;
    var ie = (0, r.createSelector)(G, function(e) {
        return e.stickerFilter
    });
    e.getActualStickerFilters = ie;
    var le = (0, r.createSelector)([G, t.getSelectedOfferType, t.getClientContext, ae], function(e, t, r, c) {
        var n = e.sortDefinition;
        if (n) switch (t) {
            case "SIMFREE_INST":
                if (c) {
                    n = (n = n.filter(ue)).filter(de);
                    break
                }
                case "VOICE":
                case "DATA":
                case "CONVERGENT":
                default:
                    n = (n = r ? n.filter(ue) : n.filter(de)).filter(se)
        }
        return n
    });

    function ue(e, t, r) {
        return "priceInOfferDesc" != e.value && "priceInOfferAsc" != e.value
    }

    function de(e, t, r) {
        return "convergentPriceInOfferDesc" != e.value && "convergentPriceInOfferAsc" != e.value
    }

    function se(e, t, r) {
        return "priceDesc" != e.value && "priceAsc" != e.value
    }
    e.getSortDefinition = le;
    var fe = (0, r.createSelector)(u, function(e) {
        return e.actualAttrFilters
    });
    e.getSelectedFilter = fe;
    var ge = (0, r.createSelector)(u, function(e) {
        return e.actualStickerAttrFilters
    });
    e.getSelectedStickerFilter = ge;
    var Se = (0, r.createSelector)(u, function(e) {
        return e.matchToFilterData
    });
    e.getMatchToDataList = Se;
    var ve = (0, r.createSelector)(u, function(e) {
        return e.matchToFilter
    });
    e.getMatchToFilter = ve;
    var Pe = (0, r.createSelector)(u, function(e) {
        return e.mainCategory
    });
    e.getMainCategory = Pe;
    var Ce = (0, r.createSelector)(u, function(e) {
        return e.actualAttrNumberFilters
    });
    e.getSelectedNumberFilter = Ce;
    var pe = (0, r.createSelector)(u, function(e) {
        return e.filterModalOpened
    });
    e.getOpenFilterModal = pe;
    var me = (0, r.createSelector)(i, function(e) {
        return e.cart
    });
    e.getMiniCartData = me;
    var ye = (0, r.createSelector)(v, function(e) {
        return e.verificationNeeded
    });
    e.getVerificationNeeded = ye;
    var Oe = (0, r.createSelector)(v, function(e) {
        return e.openVerificationModal
    });
    e.getOpenVerificationModal = Oe;
    var Te = (0, r.createSelector)([t.getOfferTypeCmsConf, t.getSelectedOfferType], function(e, t) {
        return e[t]
    });
    e.getSelectedOfferTypeCmsConf = Te;
    var Me = (0, r.createSelector)(Te, function(e) {
        return e && e.cmsDescriptions || ""
    });
    e.getSelectedOfferTypeDescriptions = Me;
    var Fe = (0, r.createSelector)([t.getOfferTypeCmsConf, t.getSelectedOfferType, n.getMagnumType], function(e, t, r) {
        return "CONVERGENT" === t ? e[r] : e[t]
    });
    e.getSelectedOfferTypeCmsConfWithMagnum = Fe;
    var De = (0, r.createSelector)(Fe, function(e) {
        return e && e.productListHeaderText
    });
    e.getProductListHeader = De;
    var he = (0, r.createSelector)(t.getOfferTypeCmsConf, function(e) {
        return Object.values(e).sort(function(e, t) {
            return t.priority - e.priority
        }).map(function(e) {
            return {
                value: e.offerType,
                description: e.productListSelectText
            }
        })
    });
    e.getOfferTypesForSelect = he;
    var Ie = (0, r.createSelector)(Te, function(e) {
        return e && e.availableProductListPK || ""
    });
    e.getCurrentSelectedAvailableProductsKey = Ie;
    var be = (0, r.createSelector)(t.getOfferTypeCmsConf, function(e) {
        var t = c.default.getParameterValueFromUrl("offerType");
        if (t && e) return e[t] && e[t].availableProductListPK || ""
    });
    e.getCurrentSelectedAvailableProductsKeyByUrlParameter = be;
    var Le = (0, r.createSelector)(t.getOfferTypeCmsConf, function(e) {
        return e && Object.values(e) && Object.values(e)[0] && Object.values(e)[0].availableProductListPK || ""
    });
    e.getFirstAvailableProductsKey = Le;
    var Ae = (0, r.createSelector)(t.getOfferTypeCmsConf, function(e) {
        return e && Object.values(e).map(function(e) {
            return e.availableProductListPK
        })
    });
    e.getAvailableProductsKeys = Ae;
    var Ee = (0, r.createSelector)(Te, function(e) {
        return e && e.softBundleGroup
    });
    e.getSelectedSoftBundleGroup = Ee;
    var Ve = (0, r.createSelector)([Te, t.getUseDefaultProcess], function(e, t) {
        return c.default.getCookie("OPL_EMBEDDED_MODE") && e && t && e.defaultProcessForEmbeddedMode ? e.defaultProcessForEmbeddedMode : e && t && e.defaultProcess ? e.defaultProcess : ""
    });
    e.getDefaultProcess = Ve;
    var xe = (0, r.createSelector)([Te], function(e) {
        return e && e.defaultProposition
    });
    e.getDefaultProposition = xe;
    var Be = (0, r.createSelector)([Te], function(e) {
            return e && e.defaultServicePlans || []
        }),
        ke = (0, r.createSelector)([Be, a.getOffersForCurrentFilters], function(e, t) {
            if (t) {
                return e.filter(function(e) {
                    return -1 < t.map(function(e) {
                        return e.rateplanBaseProductId
                    }).indexOf(e)
                })[0] || e[0]
            }
            return e ? e[0] : null
        });
    e.getDefaultServicePlan = ke;
    var Ne = (0, r.createSelector)(t.getSelectedOfferType, function(e) {
        return "SIMFREE_INST" === e
    });
    e.isSimfreeInstOfferType = Ne;
    var je = (0, r.createSelector)(P, function(e) {
        return e && e.oneTimePriceFilterCmsConf
    });
    e.getTieredOneTimePriceConf = je;
    var Re = (0, r.createSelector)(P, function(e) {
        return e && e.maxMonthlyPriceFilterCmsConf
    });
    e.getTieredMaxMonthlyPriceConf = Re;
    var we = (0, r.createSelector)([je, t.getSelectedOfferType], function(e, t) {
        return e[t]
    });
    e.getTieredOneTimePriceForCurrentOfferType = we;
    var Ke = (0, r.createSelector)([Re, t.getSelectedOfferType], function(e, t) {
        return e[t]
    });
    e.getTieredMaxMonthlyPriceForCurrentOfferType = Ke;
    var Ue = (0, r.createSelector)(u, function(e) {
        return e.selectedOneTimePrices
    });
    e.getSelectedOneTimePrices = Ue;
    var Ge = (0, r.createSelector)(u, function(e) {
        return e.selectedMaxMonthlyPrice
    });
    e.getSelectedMaxMonthlyPrice = Ge;
    var He = (0, r.createSelector)(Ge, function(e) {
        return e && Object.keys(e)[0]
    });
    e.getSelectedMaxMonthlyPriceId = He;
    var _e = (0, r.createSelector)([we, Ue], function(e, t) {
        var r = [];
        return e && e.forEach(function(e) {
            t[e.id] && r.push(e)
        }), r
    });
    e.getSelectedOneTimePricesList = _e;
    var We = (0, r.createSelector)(Ge, function(e) {
        return e && Object.keys(e) || []
    });
    e.getSelectedAllMaxMonthlyPricesIds = We;
    var qe = (0, r.createSelector)([Ke, We], function(e, r) {
        return e && e.find(function(t) {
            return r.find(function(e) {
                return e === t.id
            })
        })
    });
    e.getSelectedMaxMonthlyPriceRange = qe;
    var ze = (0, r.createSelector)(Ue, function(e) {
        return e && e.filter(function(e) {
            return e
        })
    });
    e.getSelectedPositiveTieredOneTimePrice = ze;
    var Je = (0, r.createSelector)(l, function(e) {
        return e.errors
    });
    e.getProcessErrors = Je;
    var Qe = (0, r.createSelector)(l, function(e) {
        return e.addToCartInProgress
    });
    e.addToCartInProgress = Qe;
    var Xe = (0, r.createSelector)(i, function(e) {
        return e.cart.addToCartInProgress
    });
    e.getStateAddToCartButton = Xe;
    var Ye = (0, r.createSelector)(i, function(e) {
        return e.cart.lastPos
    });
    e.getLastPos = Ye;
    var Ze = (0, r.createSelector)(i, function(e) {
        return e.cart.pickupPosEnabled
    });
    e.isPickupPosEnabled = Ze;
    var $e = (0, r.createSelector)(i, function(e) {
        return e.cart.cashInvoiceLimit
    });
    e.getCashInvoiceLimit = $e;
    var et = (0, r.createSelector)(i, function(e) {
        return e.cart.cartInvoiceValue
    });
    e.getCartInvoiceValue = et;
    var tt = (0, r.createSelector)([t.getMarketContext, o.getPriceIsNet], function(e, t) {
        return "B2B" == e && 0 == t
    });
    e.filterLabelsHardcodedAsGross = tt;
    var rt = (0, r.createSelector)(d, function(e) {
        return e.showRatingErrorModal
    });
    e.getShowRatingErrorModal = rt;
    var ct = (0, r.createSelector)(P, function(e) {
        return e.filterConfigurationFetched
    });
    e.getFilterConfigurationFetched = ct;
    var nt = (0, r.createSelector)(d, function(e) {
        return e.isDuet
    });
    e.isDuet = nt;
    var at = (0, r.createSelector)(d, function(e) {
        return e.showCanonicalLink
    });
    e.showCanonicalLink = at;
    var ot = (0, r.createSelector)(u, function(e) {
        return e.productsFilter
    });
    e.getProductsFilter = ot
});
//# sourceMappingURL=selectors.js.map