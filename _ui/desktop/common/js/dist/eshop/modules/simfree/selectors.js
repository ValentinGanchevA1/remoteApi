define(["exports", "Reselect", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/filters", "eshop/modules/magnum2/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/cart/selectors"], function(_exports, _Reselect, _OnlineUtils, _filters, _selectors, _offers, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getShowRatingErrorModal = _exports.filterLabelsHardcodedAsGross = _exports.getCartInvoiceValue = _exports.getCashInvoiceLimit = _exports.isPickupPosEnabled = _exports.getLastPos = _exports.getStateAddToCartButton = _exports.addToCartInProgress = _exports.getProcessErrors = _exports.getSelectedPositiveTieredOneTimePrice = _exports.getSelectedMaxMonthlyPriceRange = _exports.getSelectedAllMaxMonthlyPricesIds = _exports.getSelectedOneTimePricesList = _exports.getSelectedMaxMonthlyPriceId = _exports.getSelectedMaxMonthlyPrice = _exports.getSelectedOneTimePrices = _exports.getTieredMaxMonthlyPriceForCurrentOfferType = _exports.getTieredOneTimePriceForCurrentOfferType = _exports.getTieredMaxMonthlyPriceConf = _exports.getTieredOneTimePriceConf = _exports.isSimfreeInstOfferType = _exports.getDefaultServicePlan = _exports.getDefaultProposition = _exports.getDefaultProcess = _exports.getSelectedSoftBundleGroup = _exports.getAvailableProductsKeys = _exports.getFirstAvailableProductsKey = _exports.getCurrentSelectedAvailableProductsKeyByUrlParameter = _exports.getCurrentSelectedAvailableProductsKey = _exports.getOfferTypesForSelect = _exports.getProductListHeader = _exports.getSelectedOfferTypeCmsConfWithMagnum = _exports.getSelectedOfferTypeDescriptions = _exports.getSelectedOfferTypeCmsConf = _exports.getOpenVerificationModal = _exports.getVerificationNeeded = _exports.getMiniCartData = _exports.getOpenFilterModal = _exports.getSelectedNumberFilter = _exports.getMainCategory = _exports.getMatchToFilter = _exports.getMatchToDataList = _exports.getSelectedStickerFilter = _exports.getSelectedFilter = _exports.getSortDefinition = _exports.getActualStickerFilters = _exports.getActualFilters = _exports.getIsSalesOfGoodsPage = _exports.checkTreeContainsElement = _exports.getErrorCode = _exports.getIsComparatorCategory = _exports.getSelectedComparatorModel = _exports.getSelectedComparatorProducer = _exports.getProducers = _exports.getDeviceBrands = _exports.getModelsForBrand = _exports.getComparatorDevices = _exports.getComparatorConfig = _exports.getSearchValue = _exports.getSelectedCategoryName = _exports.getSelectedCategory = _exports.getSelectedColor = _exports.getSelectedPrice = _exports.getSelectedProducer = _exports.getFilterConfiguration = _exports.isProductTreeEmpty = _exports.getProductsTrees = _exports.getSelectedDeviceObject = _exports.getProductDataForVariantId = _exports.getInitiallyFiltered = _exports.getCurrentPageData = _exports.getSelectedVariantOnList = _exports.getAllVisibility = _exports.getSelectedSort = _exports.getProductListData = _exports.getProductListWrapper = _exports.getReviewSend = _exports.getLogin = _exports.getMessage = _exports.getRating = _exports.getChosenImageIndex = _exports.getSelectedVariantObjectId = _exports.isAccessoryListPage = _exports.isProductListPage = _exports.isProductDetailsPage = _exports.getSelectedDeviceTab = _exports.getSelectedVariantObject = _exports.getSelectedVariant = _exports.getSelectedBaseDeviceCode = _exports.getProductImageUrl = _exports.getProductName = _exports.getMetaData = _exports.getProductOfferFilter = _exports.getStorageCapacityForProduct = _exports.getDeliveryAndPaymentComponentUid = _exports.getDeliveryAndPaymentHtml = _exports.getComparator = _exports.getProductDetails = _exports.getProductList = _exports.getProductCart = void 0;
    _exports.isSelectedProductInStock = _exports.getSelectedProductStockLevel = _exports.getDeliveryMethods = _exports.getProductsFilter = _exports.showCanonicalLink = _exports.isDuet = _exports.getFilterConfigurationFetched = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var getSimfreeState = function getSimfreeState(state) {
        return state["simfree"];
    };

    var getProductCart = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart;
    });
    _exports.getProductCart = getProductCart;
    var getProductList = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.list;
    });
    _exports.getProductList = getProductList;
    var getProductDetails = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.details;
    });
    _exports.getProductDetails = getProductDetails;
    var getComparator = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.comparator;
    });
    _exports.getComparator = getComparator;
    var getDeliveryAndPaymentHtml = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.deliveryAndPaymentHtml;
    });
    _exports.getDeliveryAndPaymentHtml = getDeliveryAndPaymentHtml;
    var getDeliveryAndPaymentComponentUid = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.deliveryAndPaymentComponentUid;
    });
    _exports.getDeliveryAndPaymentComponentUid = getDeliveryAndPaymentComponentUid;
    var getStorageCapacityForProduct = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.productStorageCapacity;
    });
    _exports.getStorageCapacityForProduct = getStorageCapacityForProduct;
    var getProductOfferFilter = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.offerFilter;
    });
    _exports.getProductOfferFilter = getProductOfferFilter;
    var getMetaData = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree && simfree.metaData;
    }); // selectors for product cart

    _exports.getMetaData = getMetaData;
    var getProductName = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.name;
    });
    _exports.getProductName = getProductName;
    var getProductImageUrl = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.imageUrl;
    });
    _exports.getProductImageUrl = getProductImageUrl;
    var getSelectedBaseDeviceCode = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.selectedBaseDeviceCode;
    });
    _exports.getSelectedBaseDeviceCode = getSelectedBaseDeviceCode;
    var getSelectedVariant = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.selectedVariant;
    });
    _exports.getSelectedVariant = getSelectedVariant;
    var getSelectedVariantObject = (0, _Reselect.createSelector)(getProductDetails, function(product) {
        return product.selectedVariantObject;
    });
    _exports.getSelectedVariantObject = getSelectedVariantObject;
    var getSelectedDeviceTab = (0, _Reselect.createSelector)(getProductDetails, function(product) {
        return product.selectedDeviceTab;
    });
    _exports.getSelectedDeviceTab = getSelectedDeviceTab;
    var isProductDetailsPage = (0, _Reselect.createSelector)(function() {
        return !!document.getElementById('ora-product-details-device');
    });
    _exports.isProductDetailsPage = isProductDetailsPage;
    var isProductListPage = (0, _Reselect.createSelector)(function() {
        return !!document.getElementById('ora-product-list-header-component') && window.location.pathname.indexOf('sklep') > -1;
    });
    _exports.isProductListPage = isProductListPage;
    var isAccessoryListPage = (0, _Reselect.createSelector)(function() {
        return !!document.getElementById('ora-product-list-header-component') && window.location.pathname.indexOf('akcesoria') > -1;
    });
    _exports.isAccessoryListPage = isAccessoryListPage;
    var getSelectedVariantObjectId = (0, _Reselect.createSelector)(getSelectedVariantObject, function(selectedVariant) {
        return selectedVariant && selectedVariant.productId;
    });
    _exports.getSelectedVariantObjectId = getSelectedVariantObjectId;
    var getChosenImageIndex = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.chosenImageIndex;
    });
    _exports.getChosenImageIndex = getChosenImageIndex;
    var getRating = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.rating;
    });
    _exports.getRating = getRating;
    var getMessage = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.message;
    });
    _exports.getMessage = getMessage;
    var getLogin = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.login;
    });
    _exports.getLogin = getLogin;
    var getReviewSend = (0, _Reselect.createSelector)(getProductCart, function(product) {
        return product.reviewSend;
    }); // selectors for products list

    _exports.getReviewSend = getReviewSend;
    var getProductListWrapper = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.products;
    });
    _exports.getProductListWrapper = getProductListWrapper;
    var getProductListData = (0, _Reselect.createSelector)(getProductListWrapper, function(wrapper) {
        return wrapper.data;
    });
    _exports.getProductListData = getProductListData;
    var getSelectedSort = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedSort;
    });
    _exports.getSelectedSort = getSelectedSort;
    var getAllVisibility = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.allVisibility;
    });
    _exports.getAllVisibility = getAllVisibility;
    var getSelectedVariantOnList = (0, _Reselect.createSelector)(getProductList, function(product) {
        return product.selectedVariant;
    });
    _exports.getSelectedVariantOnList = getSelectedVariantOnList;
    var getCurrentPageData = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.currentPage;
    });
    _exports.getCurrentPageData = getCurrentPageData;
    var getInitiallyFiltered = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.initiallyFiltered;
    });
    _exports.getInitiallyFiltered = getInitiallyFiltered;

    var getProductDataForVariantId = function getProductDataForVariantId(id) {
        return (0, _Reselect.createSelector)(getProductListData, function(data) {
            return data && data.find(function(device) {
                return device.variantList && device.variantList.find(function(variant) {
                    return variant.productId === id;
                });
            });
        });
    };

    _exports.getProductDataForVariantId = getProductDataForVariantId;
    var getSelectedDeviceObject = (0, _Reselect.createSelector)([_offers.getSelectedDeviceId, getProductListData], function(selectedDeviceId, productListData) {
        return productListData && productListData.find(function(device) {
            return device.variantList && device.variantList.find(function(variant) {
                return variant.productId === selectedDeviceId;
            });
        });
    }); // selectors for tree

    _exports.getSelectedDeviceObject = getSelectedDeviceObject;
    var getProductsTrees = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.categories;
    });
    _exports.getProductsTrees = getProductsTrees;
    var isProductTreeEmpty = (0, _Reselect.createSelector)(getProductsTrees, function(tree) {
        return !tree.subCategories || tree.subCategories.length === 0;
    });
    _exports.isProductTreeEmpty = isProductTreeEmpty;
    var getFilterConfiguration = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.filterConfiguration;
    });
    _exports.getFilterConfiguration = getFilterConfiguration;
    var getSelectedProducer = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedProducer;
    });
    _exports.getSelectedProducer = getSelectedProducer;
    var getSelectedPrice = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.priceFilter;
    });
    _exports.getSelectedPrice = getSelectedPrice;
    var getSelectedColor = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedColor;
    });
    _exports.getSelectedColor = getSelectedColor;
    var getSelectedCategory = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedCategory;
    });
    _exports.getSelectedCategory = getSelectedCategory;
    var getSelectedCategoryName = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedCategoryName;
    });
    _exports.getSelectedCategoryName = getSelectedCategoryName;
    var getSearchValue = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.searchValue;
    }); //selectors for comparator

    _exports.getSearchValue = getSearchValue;
    var getComparatorConfig = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.comparatorConfig;
    });
    _exports.getComparatorConfig = getComparatorConfig;
    var getComparatorDevices = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.devices;
    });
    _exports.getComparatorDevices = getComparatorDevices;
    var getModelsForBrand = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.modelsForBrand;
    });
    _exports.getModelsForBrand = getModelsForBrand;
    var getDeviceBrands = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.deviceBrands;
    });
    _exports.getDeviceBrands = getDeviceBrands;
    var getProducers = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.producers;
    });
    _exports.getProducers = getProducers;
    var getSelectedComparatorProducer = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.selectedProducer;
    });
    _exports.getSelectedComparatorProducer = getSelectedComparatorProducer;
    var getSelectedComparatorModel = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.selectedModel;
    });
    _exports.getSelectedComparatorModel = getSelectedComparatorModel;
    var getIsComparatorCategory = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.isComparatorCategory;
    });
    _exports.getIsComparatorCategory = getIsComparatorCategory;
    var getErrorCode = (0, _Reselect.createSelector)(getComparator, function(comparator) {
        return comparator.errorCode;
    });
    _exports.getErrorCode = getErrorCode;
    var checkTreeContainsElement = (0, _Reselect.createSelector)([getSelectedCategory, getProductsTrees], function(selectedCategory, productsTree) {
        return checkSelectedCategory(selectedCategory, productsTree);
    });
    _exports.checkTreeContainsElement = checkTreeContainsElement;

    function checkSelectedCategory(selectedCategory, element) {
        if (selectedCategory === element.code) {
            return true;
        }

        return checkSubcategory(selectedCategory, element);
    }

    function checkSubcategory(selectedCategory, element) {
        if (!element) return false;
        if (element.subCategories.length == 0) return false;
        var result = false;
        element.subCategories.map(function(pos, index) {
            if (pos.code === selectedCategory) {
                result = true;
                return true;
            }

            result = result || checkSubcategory(selectedCategory, pos);
        });
        return result;
    } // selector for banner's


    var getIsSalesOfGoodsPage = (0, _Reselect.createSelector)(_filters.getSelectedProcessTypeValue, function(process) {
        return process === 'SALE_OF_GOODS';
    }); // filter section

    _exports.getIsSalesOfGoodsPage = getIsSalesOfGoodsPage;
    var getActualFilters = (0, _Reselect.createSelector)(getFilterConfiguration, function(filterConfiguration) {
        return filterConfiguration.categoryFilter;
    });
    _exports.getActualFilters = getActualFilters;
    var getActualStickerFilters = (0, _Reselect.createSelector)(getFilterConfiguration, function(filterConfiguration) {
        return filterConfiguration.stickerFilter;
    });
    _exports.getActualStickerFilters = getActualStickerFilters;
    var getSortDefinition = (0, _Reselect.createSelector)([getFilterConfiguration, _filters.getSelectedOfferType, _filters.getClientContext, getIsSalesOfGoodsPage], function(filterConfiguration, offerType, clientContext, isSalesOfGoodsPage) {
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
    });
    _exports.getSortDefinition = getSortDefinition;

    function filterSortVoiceConvergent(element, index, array) {
        if (element.value == "priceInOfferDesc" || element.value == "priceInOfferAsc") return false;
        return true;
    }

    function filterSortVoice(element, index, array) {
        if (element.value == "convergentPriceInOfferDesc" || element.value == "convergentPriceInOfferAsc") return false;
        return true;
    }

    function filterSortNoSimfree(element, index, array) {
        if (element.value == "priceDesc" || element.value == "priceAsc") return false;
        return true;
    }

    var getSelectedFilter = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.actualAttrFilters;
    });
    _exports.getSelectedFilter = getSelectedFilter;
    var getSelectedStickerFilter = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.actualStickerAttrFilters;
    });
    _exports.getSelectedStickerFilter = getSelectedStickerFilter;
    var getMatchToDataList = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.matchToFilterData;
    });
    _exports.getMatchToDataList = getMatchToDataList;
    var getMatchToFilter = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.matchToFilter;
    });
    _exports.getMatchToFilter = getMatchToFilter;
    var getMainCategory = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.mainCategory;
    });
    _exports.getMainCategory = getMainCategory;
    var getSelectedNumberFilter = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.actualAttrNumberFilters;
    });
    _exports.getSelectedNumberFilter = getSelectedNumberFilter;
    var getOpenFilterModal = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.filterModalOpened;
    });
    _exports.getOpenFilterModal = getOpenFilterModal;
    var getMiniCartData = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart;
    }); // offer type filters

    _exports.getMiniCartData = getMiniCartData;
    var getVerificationNeeded = (0, _Reselect.createSelector)(getProductOfferFilter, function(offerFilter) {
        return offerFilter.verificationNeeded;
    });
    _exports.getVerificationNeeded = getVerificationNeeded;
    var getOpenVerificationModal = (0, _Reselect.createSelector)(getProductOfferFilter, function(offerFilter) {
        return offerFilter.openVerificationModal;
    });
    _exports.getOpenVerificationModal = getOpenVerificationModal;
    var getSelectedOfferTypeCmsConf = (0, _Reselect.createSelector)([_filters.getOfferTypeCmsConf, _filters.getSelectedOfferType], function(cms, offerType) {
        return cms[offerType];
    });
    _exports.getSelectedOfferTypeCmsConf = getSelectedOfferTypeCmsConf;
    var getSelectedOfferTypeDescriptions = (0, _Reselect.createSelector)(getSelectedOfferTypeCmsConf, function(selectedOffer) {
        return selectedOffer && selectedOffer.cmsDescriptions || "";
    });
    _exports.getSelectedOfferTypeDescriptions = getSelectedOfferTypeDescriptions;
    var getSelectedOfferTypeCmsConfWithMagnum = (0, _Reselect.createSelector)([_filters.getOfferTypeCmsConf, _filters.getSelectedOfferType, _selectors.getMagnumType], function(cms, offerType, magnumType) {
        if (offerType === 'CONVERGENT') {
            return cms[magnumType];
        }

        return cms[offerType];
    });
    _exports.getSelectedOfferTypeCmsConfWithMagnum = getSelectedOfferTypeCmsConfWithMagnum;
    var getProductListHeader = (0, _Reselect.createSelector)(getSelectedOfferTypeCmsConfWithMagnum, function(selectedOffer) {
        return selectedOffer && selectedOffer.productListHeaderText;
    });
    _exports.getProductListHeader = getProductListHeader;
    var getOfferTypesForSelect = (0, _Reselect.createSelector)(_filters.getOfferTypeCmsConf, function(cms) {
        return Object.values(cms).sort(function(offer1, offer2) {
            return offer2.priority - offer1.priority;
        }).map(function(offer) {
            return {
                value: offer.offerType,
                description: offer.productListSelectText
            };
        });
    });
    _exports.getOfferTypesForSelect = getOfferTypesForSelect;
    var getCurrentSelectedAvailableProductsKey = (0, _Reselect.createSelector)(getSelectedOfferTypeCmsConf, function(cms) {
        return cms && cms.availableProductListPK || "";
    });
    _exports.getCurrentSelectedAvailableProductsKey = getCurrentSelectedAvailableProductsKey;
    var getCurrentSelectedAvailableProductsKeyByUrlParameter = (0, _Reselect.createSelector)(_filters.getOfferTypeCmsConf, function(cms) {
        var offerType = _OnlineUtils.default.getParameterValueFromUrl("offerType");

        if (offerType && cms) {
            return cms[offerType] && cms[offerType].availableProductListPK || "";
        }
    }); //ask me if you dont agree

    _exports.getCurrentSelectedAvailableProductsKeyByUrlParameter = getCurrentSelectedAvailableProductsKeyByUrlParameter;
    var getFirstAvailableProductsKey = (0, _Reselect.createSelector)(_filters.getOfferTypeCmsConf, function(cmsConf) {
        return cmsConf && Object.values(cmsConf) && Object.values(cmsConf)[0] && Object.values(cmsConf)[0].availableProductListPK || "";
    });
    _exports.getFirstAvailableProductsKey = getFirstAvailableProductsKey;
    var getAvailableProductsKeys = (0, _Reselect.createSelector)(_filters.getOfferTypeCmsConf, function(cmsConf) {
        return cmsConf && Object.values(cmsConf).map(function(cmsConf) {
            return cmsConf.availableProductListPK;
        });
    });
    _exports.getAvailableProductsKeys = getAvailableProductsKeys;
    var getSelectedSoftBundleGroup = (0, _Reselect.createSelector)(getSelectedOfferTypeCmsConf, function(cmsConf) {
        return cmsConf && cmsConf.softBundleGroup;
    });
    _exports.getSelectedSoftBundleGroup = getSelectedSoftBundleGroup;
    var getDefaultProcess = (0, _Reselect.createSelector)([getSelectedOfferTypeCmsConf, _filters.getUseDefaultProcess], function(cms, use) {
        var isEmbeddedMode = _OnlineUtils.default.getCookie('OPL_EMBEDDED_MODE');

        if (isEmbeddedMode && cms && use && cms.defaultProcessForEmbeddedMode) {
            return cms.defaultProcessForEmbeddedMode;
        }

        return cms && use && cms.defaultProcess ? cms.defaultProcess : "";
    });
    _exports.getDefaultProcess = getDefaultProcess;
    var getDefaultProposition = (0, _Reselect.createSelector)([getSelectedOfferTypeCmsConf], function(cms) {
        return cms && cms.defaultProposition;
    });
    _exports.getDefaultProposition = getDefaultProposition;
    var getDefaultServicePlans = (0, _Reselect.createSelector)([getSelectedOfferTypeCmsConf], function(cms) {
        return cms && cms.defaultServicePlans || [];
    });
    var getDefaultServicePlan = (0, _Reselect.createSelector)([getDefaultServicePlans, _offers.getOffersForCurrentFilters], function(defaultPlans, currentOffers) {
        if (currentOffers) {
            var isInCurrentOffers = function isInCurrentOffers(sp) {
                return currentOffers.map(function(o) {
                    return o.rateplanBaseProductId;
                }).indexOf(sp) > -1;
            };

            return defaultPlans.filter(isInCurrentOffers)[0] || defaultPlans[0];
        } else {
            return defaultPlans ? defaultPlans[0] : null;
        }
    });
    _exports.getDefaultServicePlan = getDefaultServicePlan;
    var isSimfreeInstOfferType = (0, _Reselect.createSelector)(_filters.getSelectedOfferType, function(offerType) {
        return offerType === 'SIMFREE_INST';
    }); //Tiered one time price

    _exports.isSimfreeInstOfferType = isSimfreeInstOfferType;
    var getTieredOneTimePriceConf = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData && metaData.oneTimePriceFilterCmsConf;
    });
    _exports.getTieredOneTimePriceConf = getTieredOneTimePriceConf;
    var getTieredMaxMonthlyPriceConf = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData && metaData.maxMonthlyPriceFilterCmsConf;
    });
    _exports.getTieredMaxMonthlyPriceConf = getTieredMaxMonthlyPriceConf;
    var getTieredOneTimePriceForCurrentOfferType = (0, _Reselect.createSelector)([getTieredOneTimePriceConf, _filters.getSelectedOfferType], function(conf, selectedOfferType) {
        return conf[selectedOfferType];
    });
    _exports.getTieredOneTimePriceForCurrentOfferType = getTieredOneTimePriceForCurrentOfferType;
    var getTieredMaxMonthlyPriceForCurrentOfferType = (0, _Reselect.createSelector)([getTieredMaxMonthlyPriceConf, _filters.getSelectedOfferType], function(conf, selectedOfferType) {
        return conf[selectedOfferType];
    });
    _exports.getTieredMaxMonthlyPriceForCurrentOfferType = getTieredMaxMonthlyPriceForCurrentOfferType;
    var getSelectedOneTimePrices = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedOneTimePrices;
    });
    _exports.getSelectedOneTimePrices = getSelectedOneTimePrices;
    var getSelectedMaxMonthlyPrice = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.selectedMaxMonthlyPrice;
    }); //FIXME zwraca pierwszy element a nie dla konkretnie wybranej oferty

    _exports.getSelectedMaxMonthlyPrice = getSelectedMaxMonthlyPrice;
    var getSelectedMaxMonthlyPriceId = (0, _Reselect.createSelector)(getSelectedMaxMonthlyPrice, function(list) {
        return list && Object.keys(list)[0];
    });
    _exports.getSelectedMaxMonthlyPriceId = getSelectedMaxMonthlyPriceId;
    var getSelectedOneTimePricesList = (0, _Reselect.createSelector)([getTieredOneTimePriceForCurrentOfferType, getSelectedOneTimePrices], function(ranges, selected) {
        var ret = [];
        if (ranges) ranges.forEach(function(r) {
            if (selected[r.id]) ret.push(r);
        });
        return ret;
    });
    _exports.getSelectedOneTimePricesList = getSelectedOneTimePricesList;
    var getSelectedAllMaxMonthlyPricesIds = (0, _Reselect.createSelector)(getSelectedMaxMonthlyPrice, function(list) {
        return list && Object.keys(list) || [];
    });
    _exports.getSelectedAllMaxMonthlyPricesIds = getSelectedAllMaxMonthlyPricesIds;
    var getSelectedMaxMonthlyPriceRange = (0, _Reselect.createSelector)([getTieredMaxMonthlyPriceForCurrentOfferType, getSelectedAllMaxMonthlyPricesIds], function(options, selected) {
        return options && options.find(function(o) {
            return selected.find(function(sel) {
                return sel === o.id;
            });
        });
    });
    _exports.getSelectedMaxMonthlyPriceRange = getSelectedMaxMonthlyPriceRange;
    var getSelectedPositiveTieredOneTimePrice = (0, _Reselect.createSelector)(getSelectedOneTimePrices, function(selected) {
        return selected && selected.filter(function(a) {
            return a;
        });
    });
    _exports.getSelectedPositiveTieredOneTimePrice = getSelectedPositiveTieredOneTimePrice;
    var getProcessErrors = (0, _Reselect.createSelector)(getProductCart, function(cart) {
        return cart.errors;
    });
    _exports.getProcessErrors = getProcessErrors;
    var addToCartInProgress = (0, _Reselect.createSelector)(getProductCart, function(cart) {
        return cart.addToCartInProgress;
    });
    _exports.addToCartInProgress = addToCartInProgress;
    var getStateAddToCartButton = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart.addToCartInProgress;
    });
    _exports.getStateAddToCartButton = getStateAddToCartButton;
    var getLastPos = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart.lastPos;
    });
    _exports.getLastPos = getLastPos;
    var isPickupPosEnabled = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart.pickupPosEnabled;
    });
    _exports.isPickupPosEnabled = isPickupPosEnabled;
    var getCashInvoiceLimit = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart.cashInvoiceLimit;
    });
    _exports.getCashInvoiceLimit = getCashInvoiceLimit;
    var getCartInvoiceValue = (0, _Reselect.createSelector)(getSimfreeState, function(simfree) {
        return simfree.cart.cartInvoiceValue;
    });
    _exports.getCartInvoiceValue = getCartInvoiceValue;
    var filterLabelsHardcodedAsGross = (0, _Reselect.createSelector)([_filters.getMarketContext, _selectors2.getPriceIsNet], function(market, showNet) {
        return market == "B2B" && showNet == false;
    });
    _exports.filterLabelsHardcodedAsGross = filterLabelsHardcodedAsGross;
    var getShowRatingErrorModal = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.showRatingErrorModal;
    });
    _exports.getShowRatingErrorModal = getShowRatingErrorModal;
    var getFilterConfigurationFetched = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.filterConfigurationFetched;
    });
    _exports.getFilterConfigurationFetched = getFilterConfigurationFetched;
    var isDuet = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.isDuet;
    });
    _exports.isDuet = isDuet;
    var showCanonicalLink = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.showCanonicalLink;
    });
    _exports.showCanonicalLink = showCanonicalLink;
    var getProductsFilter = (0, _Reselect.createSelector)(getProductList, function(list) {
        return list.productsFilter;
    });
    _exports.getProductsFilter = getProductsFilter;
    var getDeliveryMethods = (0, _Reselect.createSelector)(getProductDetails, function(details) {
        return details.deliveryMethods;
    });
    _exports.getDeliveryMethods = getDeliveryMethods;
    var getSelectedProductStockLevel = (0, _Reselect.createSelector)([getSelectedVariantObject, _filters.getSelectedProcessTypeValue], function(productVariant, processType) {
        if (productVariant && processType) {
            if (productVariant.stockLevelsPerProcess && productVariant.stockLevelsPerProcess[processType]) {
                return productVariant.stockLevelsPerProcess[processType].stockLevel;
            }

            return productVariant.stockLevel;
        }

        return null;
    });
    _exports.getSelectedProductStockLevel = getSelectedProductStockLevel;
    var isSelectedProductInStock = (0, _Reselect.createSelector)(getSelectedProductStockLevel, function(stockLevel) {
        return !!stockLevel && stockLevel > 0;
    });
    _exports.isSelectedProductInStock = isSelectedProductInStock;
});
//# sourceMappingURL=selectors.js.map