import {
    createSelector
} from "Reselect";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    getSelectedOfferType,
    getClientContext,
    getMarketContext,
    getOfferTypeCmsConf,
    getSelectedProcessTypeValue
} from "eshop/modules/configurator/selectors/filters";
import {
    getMagnumType
} from "eshop/modules/magnum2/selectors"

import {
    getOffersForCurrentFilters,
    getSelectedDeviceId,
} from "eshop/modules/configurator/selectors/offers";
import {
    getPriceIsNet
} from "eshop/modules/cart/selectors";
import {
    getUseDefaultProcess
} from "eshop/modules/configurator/selectors/filters"
const getSimfreeState = state => state["simfree"];

export const getProductCart = createSelector(getSimfreeState, simfree => simfree.cart)
export const getProductList = createSelector(getSimfreeState, simfree => simfree.list)
export const getProductDetails = createSelector(getSimfreeState, simfree => simfree.details)
export const getComparator = createSelector(getSimfreeState, simfree => simfree.comparator)
export const getDeliveryAndPaymentHtml = createSelector(getProductDetails, details => details.deliveryAndPaymentHtml)
export const getDeliveryAndPaymentComponentUid = createSelector(getProductDetails, details => details.deliveryAndPaymentComponentUid)
export const getStorageCapacityForProduct = createSelector(getProductDetails, details => details.productStorageCapacity)

export const getProductOfferFilter = createSelector(getSimfreeState, simfree => simfree.offerFilter)
export const getMetaData = createSelector(getSimfreeState, simfree => simfree && simfree.metaData)

// selectors for product cart
export const getProductName = createSelector(getProductCart, product => product.name)
export const getProductImageUrl = createSelector(getProductCart, product => product.imageUrl)
export const getSelectedBaseDeviceCode = createSelector(getProductCart, product => product.selectedBaseDeviceCode)
export const getSelectedVariant = createSelector(getProductCart, product => product.selectedVariant)
export const getSelectedVariantObject = createSelector(getProductDetails, product => product.selectedVariantObject)
export const getSelectedDeviceTab = createSelector(getProductDetails, product => product.selectedDeviceTab)
export const isProductDetailsPage = createSelector(() => !!document.getElementById('ora-product-details-device'));
export const isProductListPage = createSelector(() => !!document.getElementById('ora-product-list-header-component') && window.location.pathname.indexOf('sklep') > -1);
export const isAccessoryListPage = createSelector(() => !!document.getElementById('ora-product-list-header-component') && window.location.pathname.indexOf('akcesoria') > -1);
export const getSelectedVariantObjectId = createSelector(getSelectedVariantObject, selectedVariant => selectedVariant && selectedVariant.productId)

export const getChosenImageIndex = createSelector(getProductCart, product => product.chosenImageIndex)
export const getRating = createSelector(getProductCart, product => product.rating)
export const getMessage = createSelector(getProductCart, product => product.message)
export const getLogin = createSelector(getProductCart, product => product.login)
export const getReviewSend = createSelector(getProductCart, product => product.reviewSend)

// selectors for products list
export const getProductListWrapper = createSelector(getProductList, list => list.products)
export const getProductListData = createSelector(getProductListWrapper, wrapper => wrapper.data)
export const getSelectedSort = createSelector(getProductList, list => list.selectedSort)
export const getAllVisibility = createSelector(getProductList, list => list.allVisibility)
export const getSelectedVariantOnList = createSelector(getProductList, product => product.selectedVariant)
export const getCurrentPageData = createSelector(getProductList, list => list.currentPage);
export const getInitiallyFiltered = createSelector(getProductList, list => list.initiallyFiltered);
export const getProductDataForVariantId = (id) => createSelector(getProductListData, data => data && data.find(device => device.variantList && device.variantList.find(variant => variant.productId === id)));

export const getSelectedDeviceObject = createSelector([getSelectedDeviceId, getProductListData], (selectedDeviceId, productListData) =>
    productListData && productListData.find(device => device.variantList && device.variantList.find(variant => variant.productId === selectedDeviceId)));

// selectors for tree
export const getProductsTrees = createSelector(getProductList, list => list.categories)
export const isProductTreeEmpty = createSelector(getProductsTrees, tree => !tree.subCategories || tree.subCategories.length === 0);
export const getFilterConfiguration = createSelector(getProductList, list => list.filterConfiguration)
export const getSelectedProducer = createSelector(getProductList, list => list.selectedProducer)
export const getSelectedPrice = createSelector(getProductList, list => list.priceFilter)
export const getSelectedColor = createSelector(getProductList, list => list.selectedColor)
export const getSelectedCategory = createSelector(getProductList, list => list.selectedCategory)
export const getSelectedCategoryName = createSelector(getProductList, list => list.selectedCategoryName)
export const getSearchValue = createSelector(getProductList, list => list.searchValue)

//selectors for comparator
export const getComparatorConfig = createSelector(getComparator, comparator => comparator.comparatorConfig)
export const getComparatorDevices = createSelector(getComparator, comparator => comparator.devices)
export const getModelsForBrand = createSelector(getComparator, comparator => comparator.modelsForBrand)
export const getDeviceBrands = createSelector(getComparator, comparator => comparator.deviceBrands)
export const getProducers = createSelector(getComparator, comparator => comparator.producers)
export const getSelectedComparatorProducer = createSelector(getComparator, comparator => comparator.selectedProducer)
export const getSelectedComparatorModel = createSelector(getComparator, comparator => comparator.selectedModel)
export const getIsComparatorCategory = createSelector(getComparator, comparator => comparator.isComparatorCategory)
export const getErrorCode = createSelector(getComparator, comparator => comparator.errorCode)



export const checkTreeContainsElement = createSelector([getSelectedCategory, getProductsTrees], (selectedCategory, productsTree) => {
    return checkSelectedCategory(selectedCategory, productsTree);
})

function checkSelectedCategory(selectedCategory, element) {
    if (selectedCategory === element.code) {
        return true;
    }
    return checkSubcategory(selectedCategory, element);
}

function checkSubcategory(selectedCategory, element) {
    if (!element)
        return false;
    if (element.subCategories.length == 0)
        return false;

    var result = false;

    element.subCategories.map((pos, index) => {
        if (pos.code === selectedCategory) {
            result = true;
            return true;
        }

        result = result || checkSubcategory(selectedCategory, pos);
    });

    return result;
}
// selector for banner's
export const getIsSalesOfGoodsPage = createSelector(getSelectedProcessTypeValue, process => {
    return process === 'SALE_OF_GOODS';
});

// filter section
export const getActualFilters = createSelector(getFilterConfiguration, filterConfiguration => filterConfiguration.categoryFilter)
export const getActualStickerFilters = createSelector(getFilterConfiguration, filterConfiguration => filterConfiguration.stickerFilter)
export const getSortDefinition = createSelector([getFilterConfiguration, getSelectedOfferType, getClientContext, getIsSalesOfGoodsPage], (filterConfiguration, offerType, clientContext, isSalesOfGoodsPage) => {
        var sortDefinition = filterConfiguration.sortDefinition;
        console.log("sortDefinition log");
        console.log(sortDefinition);
        console.log(clientContext);
        console.log(offerType);
        if (sortDefinition) {
            switch (offerType) {
                case "SIMFREE_INST":
                    if (isSalesOfGoodsPage) {
                        sortDefinition = sortDefinition.filter(filterSortVoiceConvergent);
                        sortDefinition = sortDefinition.filter(filterSortVoice);
                        break;
                    }
                    case 'VOICE':
                    case 'DATA':
                    case 'CONVERGENT':

                    default:
                        console.log("Entering default sortDefinition for offerType case");
                        if (clientContext) {
                            sortDefinition = sortDefinition.filter(filterSortVoiceConvergent);
                        } else {
                            sortDefinition = sortDefinition.filter(filterSortVoice);
                        }
                        sortDefinition = sortDefinition.filter(filterSortNoSimfree);
                        break;
            }
        }
        console.log(sortDefinition);
        return sortDefinition;
    }

);

function filterSortVoiceConvergent(element, index, array) {
    if (element.value == "priceInOfferDesc" || element.value == "priceInOfferAsc")
        return false;
    return true;
}

function filterSortVoice(element, index, array) {
    if (element.value == "convergentPriceInOfferDesc" || element.value == "convergentPriceInOfferAsc")
        return false;
    return true;

}

function filterSortNoSimfree(element, index, array) {
    if (element.value == "priceDesc" || element.value == "priceAsc")
        return false;
    return true;

}
export const getSelectedFilter = createSelector(getProductList, list => list.actualAttrFilters)
export const getSelectedStickerFilter = createSelector(getProductList, list => list.actualStickerAttrFilters)
export const getMatchToDataList = createSelector(getProductList, list => list.matchToFilterData)
export const getMatchToFilter = createSelector(getProductList, list => list.matchToFilter)
export const getMainCategory = createSelector(getProductList, list => list.mainCategory)
export const getSelectedNumberFilter = createSelector(getProductList, list => list.actualAttrNumberFilters)
export const getOpenFilterModal = createSelector(getProductList, list => list.filterModalOpened)
export const getMiniCartData = createSelector(getSimfreeState, simfree => simfree.cart)

// offer type filters
export const getVerificationNeeded = createSelector(getProductOfferFilter, offerFilter => offerFilter.verificationNeeded);
export const getOpenVerificationModal = createSelector(getProductOfferFilter, offerFilter => offerFilter.openVerificationModal);

export const getSelectedOfferTypeCmsConf = createSelector([getOfferTypeCmsConf, getSelectedOfferType], (cms, offerType) => cms[offerType]);
export const getSelectedOfferTypeDescriptions = createSelector(getSelectedOfferTypeCmsConf, selectedOffer => selectedOffer && selectedOffer.cmsDescriptions || "");
export const getSelectedOfferTypeCmsConfWithMagnum = createSelector([getOfferTypeCmsConf, getSelectedOfferType, getMagnumType], (cms, offerType, magnumType) => {
    if (offerType === 'CONVERGENT') {
        return cms[magnumType];
    }
    return cms[offerType];
});
export const getProductListHeader = createSelector(getSelectedOfferTypeCmsConfWithMagnum, selectedOffer => selectedOffer && selectedOffer.productListHeaderText);


export const getOfferTypesForSelect = createSelector(getOfferTypeCmsConf, cms => Object.values(cms)
    .sort((offer1, offer2) => offer2.priority - offer1.priority)
    .map(offer => ({
        value: offer.offerType,
        description: offer.productListSelectText
    }))
);
export const getCurrentSelectedAvailableProductsKey = createSelector(getSelectedOfferTypeCmsConf, cms => cms && cms.availableProductListPK || "");
export const getCurrentSelectedAvailableProductsKeyByUrlParameter = createSelector(getOfferTypeCmsConf, (cms) => {
    let offerType = OnlineUtils.getParameterValueFromUrl("offerType")
    if (offerType && cms) {
        return (cms[offerType] && cms[offerType].availableProductListPK) || ""
    }
}); //ask me if you dont agree

export const getFirstAvailableProductsKey = createSelector(getOfferTypeCmsConf, cmsConf => cmsConf && Object.values(cmsConf) && Object.values(cmsConf)[0] && Object.values(cmsConf)[0].availableProductListPK || "");
export const getAvailableProductsKeys = createSelector(getOfferTypeCmsConf, cmsConf => cmsConf && Object.values(cmsConf).map(cmsConf => cmsConf.availableProductListPK));
export const getSelectedSoftBundleGroup = createSelector(getSelectedOfferTypeCmsConf, cmsConf => cmsConf && cmsConf.softBundleGroup);

export const getDefaultProcess = createSelector([getSelectedOfferTypeCmsConf, getUseDefaultProcess], (cms, use) => {
    let isEmbeddedMode = OnlineUtils.getCookie('OPL_EMBEDDED_MODE');
    if (isEmbeddedMode && cms && use && cms.defaultProcessForEmbeddedMode) {
        return cms.defaultProcessForEmbeddedMode;
    }
    return cms && use && cms.defaultProcess ? cms.defaultProcess : ""
});
export const getDefaultProposition = createSelector([getSelectedOfferTypeCmsConf], cms => cms && cms.defaultProposition)
const getDefaultServicePlans = createSelector([getSelectedOfferTypeCmsConf], cms => cms && cms.defaultServicePlans || [])
export const getDefaultServicePlan = createSelector([getDefaultServicePlans, getOffersForCurrentFilters], (defaultPlans, currentOffers) => {

    if (currentOffers) {
        let isInCurrentOffers = (sp) => currentOffers.map(o => o.rateplanBaseProductId).indexOf(sp) > -1
        return defaultPlans.filter(isInCurrentOffers)[0] || defaultPlans[0]
    } else {
        return defaultPlans ? defaultPlans[0] : null
    }
})



export const isSimfreeInstOfferType = createSelector(getSelectedOfferType, offerType => {
    return offerType === 'SIMFREE_INST';
});

//Tiered one time price
export const getTieredOneTimePriceConf = createSelector(getMetaData, metaData => metaData && metaData.oneTimePriceFilterCmsConf);
export const getTieredMaxMonthlyPriceConf = createSelector(getMetaData, metaData => metaData && metaData.maxMonthlyPriceFilterCmsConf);

export const getTieredOneTimePriceForCurrentOfferType = createSelector([getTieredOneTimePriceConf, getSelectedOfferType], (conf, selectedOfferType) => conf[selectedOfferType]);
export const getTieredMaxMonthlyPriceForCurrentOfferType = createSelector([getTieredMaxMonthlyPriceConf, getSelectedOfferType], (conf, selectedOfferType) => conf[selectedOfferType]);

export const getSelectedOneTimePrices = createSelector(getProductList, list => list.selectedOneTimePrices);
export const getSelectedMaxMonthlyPrice = createSelector(getProductList, list => list.selectedMaxMonthlyPrice);


//FIXME zwraca pierwszy element a nie dla konkretnie wybranej oferty
export const getSelectedMaxMonthlyPriceId = createSelector(getSelectedMaxMonthlyPrice, list => {
    return list && Object.keys(list)[0]
});
export const getSelectedOneTimePricesList = createSelector([getTieredOneTimePriceForCurrentOfferType, getSelectedOneTimePrices],
    (ranges, selected) => {
        var ret = [];
        if (ranges)
            ranges.forEach(r => {
                if (selected[r.id]) ret.push(r)
            });
        return ret;
    }
);



export const getSelectedAllMaxMonthlyPricesIds = createSelector(getSelectedMaxMonthlyPrice, list => list && Object.keys(list) || []);

export const getSelectedMaxMonthlyPriceRange = createSelector([getTieredMaxMonthlyPriceForCurrentOfferType, getSelectedAllMaxMonthlyPricesIds],
    (options, selected) => {
        return options && options.find(o => selected.find(sel => sel === o.id))
    }
);


export const getSelectedPositiveTieredOneTimePrice = createSelector(getSelectedOneTimePrices, selected => selected && selected.filter(a => a));

export const getProcessErrors = createSelector(getProductCart, cart => cart.errors);

export const addToCartInProgress = createSelector(getProductCart, cart => cart.addToCartInProgress);
export const getStateAddToCartButton = createSelector(getSimfreeState, simfree => simfree.cart.addToCartInProgress);
export const getLastPos = createSelector(getSimfreeState, simfree => simfree.cart.lastPos);
export const isPickupPosEnabled = createSelector(getSimfreeState, simfree => simfree.cart.pickupPosEnabled);
export const getCashInvoiceLimit = createSelector(getSimfreeState, simfree => simfree.cart.cashInvoiceLimit);
export const getCartInvoiceValue = createSelector(getSimfreeState, simfree => simfree.cart.cartInvoiceValue);

export const filterLabelsHardcodedAsGross = createSelector([getMarketContext, getPriceIsNet], (market, showNet) => market == "B2B" && showNet == false);

export const getShowRatingErrorModal = createSelector(getProductDetails, details => details.showRatingErrorModal);

export const getFilterConfigurationFetched = createSelector(getMetaData, metaData => metaData.filterConfigurationFetched);

export const isDuet = createSelector(getProductDetails, details => details.isDuet);
export const showCanonicalLink = createSelector(getProductDetails, details => details.showCanonicalLink);

export const getProductsFilter = createSelector(getProductList, list => list.productsFilter);

export const getDeliveryMethods = createSelector(getProductDetails, details => details.deliveryMethods);
export const getSelectedProductStockLevel = createSelector([getSelectedVariantObject, getSelectedProcessTypeValue], (productVariant, processType) => {
    if (productVariant && processType) {
        if (productVariant.stockLevelsPerProcess && productVariant.stockLevelsPerProcess[processType]) {
            return productVariant.stockLevelsPerProcess[processType].stockLevel;
        }
        return productVariant.stockLevel;
    }
    return null;
});
export const isSelectedProductInStock = createSelector(getSelectedProductStockLevel, stockLevel => !!stockLevel && stockLevel > 0);