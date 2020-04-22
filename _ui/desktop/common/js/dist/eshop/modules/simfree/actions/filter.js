define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "../remoteApi", "eshop/modules/configurator/remoteApi", "../filterUtils", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/utils/DataLayerUtils", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/actions/filters", "../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../configurator/selectors/filters", "../../auth/selectors/authorization", "../../checkout/selectors", "../selectors"], function(_exports, ACTIONS, ACTIONSCONF, _remoteApi, _remoteApi2, _filterUtils, _selectors, _filters, _DataLayerUtils, _OnlineUtils, _offers, _cart, _filters2, _OfferTypeEnum, _selectors2, _filters3, _authorization, _selectors3, _selectors4) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.fetchFilterConfiguration = fetchFilterConfiguration;
    _exports.getProductsTree = getProductsTree;
    _exports.changeCurrentPageProps = changeCurrentPageProps;
    _exports.changeEsimFilterAttributeIfAvailable = changeEsimFilterAttributeIfAvailable;
    _exports.getFilters = getFilters;
    _exports.setSelectedProducer = setSelectedProducer;
    _exports.setSelectedModel = setSelectedModel;
    _exports.setSelectedRecomendedProducer = setSelectedRecomendedProducer;
    _exports.setSelectedSort = setSelectedSort;
    _exports.setSelectedColor = setSelectedColor;
    _exports.setAllVisibilityProduct = setAllVisibilityProduct;
    _exports.setOpenFilterModal = setOpenFilterModal;
    _exports.changeSearchDeviceValue = changeSearchDeviceValue;
    _exports.getFilteredProductList = getFilteredProductList;
    _exports.getFilteredProductTree = getFilteredProductTree;
    _exports.getFilteredProductTreeWithoutReloadStickers = getFilteredProductTreeWithoutReloadStickers;
    _exports.changeEsimFilterAttribute = changeEsimFilterAttribute;
    _exports.changeFilterAttribute = changeFilterAttribute;
    _exports.changeStickerFilterAttribute = changeStickerFilterAttribute;
    _exports.changeStickerFilter = changeStickerFilter;
    _exports.changeFilterNumberAttribute = changeFilterNumberAttribute;
    _exports.changePriceFilter = changePriceFilter;
    _exports.clearAttrsFilters = clearAttrsFilters;
    _exports.clearMatchToFilters = clearMatchToFilters;
    _exports.updateAttrsFilter = updateAttrsFilter;
    _exports.updateStickerAttrsFilter = updateStickerAttrsFilter;
    _exports.updateMatchToFilters = updateMatchToFilters;
    _exports.updateNumberAttrsFilter = updateNumberAttrsFilter;
    _exports.getMatchToData = getMatchToData;
    _exports.reloadMatchToFilter = reloadMatchToFilter;
    _exports.setProductsFilter = _exports.doOpenVerificationModal = _exports.checkMsisdnAndGetOffersAndAddToCart = _exports.doCloseVerificationModal = _exports.verificationNeeded = _exports.selectMaxMonthlyPrice = _exports.clearMonthlyPrices = _exports.clearOneTimePrices = _exports.selectOneTimePrice = _exports.reloadProductList = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    ACTIONSCONF = babelHelpers.interopRequireWildcard(ACTIONSCONF);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _remoteApi2 = babelHelpers.interopRequireDefault(_remoteApi2);
    _filterUtils = babelHelpers.interopRequireDefault(_filterUtils);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    function fetchFilterConfiguration(initProducer, initCategory, initFilters) {
        return function(dispatch, getState) {
            if ((0, _selectors.getFilterConfigurationFetched)(getState())) {
                return;
            }

            if ((0, _filters.getSelectedOfferType)(getState()) === _OfferTypeEnum.default.CONVERGENT && !getState().magnum.selectedProposition) {
                return;
            }

            _remoteApi.default.fetchFilterConfiguration(getSelectedOfferAndCategory(getState())).then(function(response) {
                return dispatch({
                    type: ACTIONS.FETCH_FILTER_CONFIGURATION,
                    filterConfiguration: response,
                    initProducer: initProducer,
                    initSort: initFilters.sortMode ? initFilters.sortMode : ''
                });
            }, function(error) {
                return console.error("fetchFilterConfiguration error", error);
            }).then(function() {
                return dispatch(getProductsTree(initCategory, initFilters));
            }, function(error) {
                return console.error("fetchFilterConfiguration getProductsTree error", error);
            });
        };
    }

    function getProductsTree(initCategory, initFilters) {
        var result = {
            category: ""
        };
        return function(dispatch, getState) {
            _remoteApi.default.getProductsTree(getSelectedOfferAndCategory(getState())).then(function(response) {
                result.category = checkCategory(response, initCategory) ? initCategory : "";
                return dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response,
                    initCategory: result.category
                });
            }).then(function(response) {
                return result.category !== "" ? _remoteApi.default.getFiltersList(initCategory) : response;
            }).then(function(response) {
                if (result.category === "") {
                    return response;
                }

                return dispatch({
                    type: ACTIONS.GET_INIT_FILTERS,
                    filters: response,
                    actualAttrFilters: findInitFilters(response, initFilters),
                    actualAttrNumberFilters: findInitNumberFilters(response, initFilters)
                });
            });
        };
    }

    function checkCategory(node, initCategory) {
        if (!initCategory || initCategory === "") {
            return false;
        }

        var result = false;

        if (node.code === initCategory) {
            return true;
        }

        if (!node.subCategories) {
            return false;
        }

        node.subCategories.map(function(pos) {
            if (pos.code === initCategory) {
                result = true;
                return true;
            }

            result = result || checkCategory(pos, initCategory);
        });
        return result;
    }

    function changeCurrentPageProps(page) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CHANGE_CURRENT_PAGE,
                payload: page
            });
        };
    }

    function findInitFilters(filterConfiguration, initFilters) {
        var filters = {};
        filterConfiguration.map(function(filter) {
            if (initFilters[filter.code] && filter.type !== "number" && filter.type !== "enum") {
                filters[filter.code] = initFilters[filter.code];
            }

            if (initFilters[filter.code] && filter.type === "enum" && checkifEnumAvailable(initFilters[filter.code], filter.availableValues)) {
                filters[filter.code] = initFilters[filter.code];
            }
        });
        return filters;
    }

    function checkifEnumAvailable(valuesToCheck, availableValues) {
        var valueToCheckSplit = valuesToCheck.split(',');
        return availableValues && availableValues.length && valueToCheckSplit.every(function(value) {
            return availableValues.includes(value);
        });
    }

    function findInitNumberFilters(filterConfiguration, initFilters) {
        var filters = {};
        filterConfiguration.map(function(filter) {
            if (filter.type === "number" && initFilters[filter.code + "_to"]) {
                filters[filter.code + "_to"] = initFilters[filter.code + "_to"];
            }

            if (filter.type === "number" && initFilters[filter.code + "_from"]) {
                filters[filter.code + "_from"] = initFilters[filter.code + "_from"];
            }
        });
        return filters;
    }

    function changeEsimFilterAttributeIfAvailable(valuesToCheck, initCategory) {
        return function(dispatch, getState) {
            _remoteApi.default.getFiltersList(initCategory).then(function(response) {
                var eSimFilter = response.find(function(filter) {
                    return filter.code === "esim";
                });

                if (eSimFilter && eSimFilter.availableValues && checkifEnumAvailable(valuesToCheck, eSimFilter.availableValues)) {
                    dispatch(changeEsimFilterAttribute(valuesToCheck));
                }
            });
        };
    }

    function getFilters(categoryCode) {
        return function(dispatch, getState) {
            _remoteApi.default.getFiltersList(categoryCode).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_FILTERS,
                    filters: response
                });
            }).then(function(response) {
                if (response && response.filters) {
                    updateAttrsFilter(_filterUtils.default.clearActualFilterAfterCategoryChange(response.filters, getState().simfree.list.actualAttrFilters))(dispatch);
                    updateNumberAttrsFilter(_filterUtils.default.clearActualFilterAfterCategoryChange(response.filters, getState().simfree.list.actualAttrNumberFilters))(dispatch);
                }
            });
        };
    }

    function setSelectedProducer(selectedProducer) {
        if (selectedProducer != null) {
            _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("producer", selectedProducer);
        }

        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_PRODUCER,
                selectedProducer: selectedProducer
            });
        };
    }

    function setSelectedModel(selectedModel, checked) {
        return function(dispatch, getState) {
            var store = getState();

            var filter = _filterUtils.default.manageMatchToData(selectedModel, checked, store.simfree.list.matchToFilterData, store.simfree.list.matchToFilter);

            dispatch({
                type: ACTIONS.SET_SELECTED_MODEL,
                matchToFilter: filter
            });
        };
    }

    function setSelectedRecomendedProducer(selectedProducer, checked) {
        return function(dispatch) {
            var filter = _filterUtils.default.manageMatchToData(selectedProducer, checked, {});

            dispatch({
                type: ACTIONS.SET_SELECTED_MODEL,
                matchToFilter: filter
            });
        };
    }

    function setSelectedSort(selectedSort) {
        if (selectedSort) {
            _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("sortMode", selectedSort);
        }

        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_SORT,
                selectedSort: selectedSort
            });
        };
    }

    function setSelectedColor(selectedColor) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_COLOR,
                selectedColor: selectedColor
            });
        };
    }

    function setAllVisibilityProduct(value) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SELECTED_ALL_VISIBILITY,
                allVisibility: value
            });
        };
    }

    function setOpenFilterModal(opened) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_OPENED_FILTER_MODAL,
                opened: opened
            });
        };
    }

    function changeSearchDeviceValue(searchValue) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_SEARCH_DEVICE_VALUE,
                searchValue: searchValue || ""
            });
            if (searchValue.length === 0 || searchValue.length > 1) dispatch(getFilteredProductList(1));
        };
    }

    function getFilteredProductList(page) {
        return function(dispatch, getState) {
            var state = getState();
            var filters = {};
            filters["category"] = state.simfree.list.selectedCategory;
            filters["producer"] = state.simfree.list.selectedProducer;
            filters["start"] = state.simfree.list.currentPage;
            filters["sortMode"] = state.simfree.list.selectedSort;

            if (state.simfree.list.allVisibility) {
                filters["showAll"] = state.simfree.list.allVisibility;
            }

            filters["attrFilter"] = state.simfree.list.actualAttrFilters;
            filters["attrStickerFilter"] = state.simfree.list.actualStickerAttrFilters;
            filters["attrNumberFilter"] = state.simfree.list.actualAttrNumberFilters;
            filters["priceFilter"] = state.simfree.list.priceFilter;
            filters["matchToFilter"] = state.simfree.list.matchToFilter;
            filters["searchValue"] = state.simfree.list.searchValue;
            filters["isChangeProductMode"] = !!state.cart.addTerminalToOfferBundleNo && !!(0, _selectors2.getProductCodeByBundleNo)()(getState());

            if (state.cart.addTerminalToOfferBundleNo) {
                filters["code"] = (0, _selectors2.getProductCodeByBundleNo)()(getState());
            }

            if (state.simfree.list.productsFilter && Object.entries(state.simfree.list.productsFilter).length > 0) {
                filters["products"] = state.simfree.list.productsFilter;
            }

            dispatch(populateFilterWithOfferData(filters));

            if (page) {
                filters["start"] = page;
            }

            console.log("Filters for product list", filters);

            _remoteApi.default.getFilteredProductList(filters).then(function(response) {
                filters["offerType"] = (0, _filters.getSelectedOfferType)(state);
                filters["selectedOffer"] = (0, _offers.getSelectedOfferDataInContext)(state);
                filters["clientContext"] = (0, _filters.getClientContext)(state);
                filters["marketContext"] = (0, _filters3.getMarketContext)(state);
                filters["salesChannel"] = (0, _authorization.getSalesChannel)(state);
                filters = _objectSpread({}, filters, {}, (0, _selectors3.getAssistModeStateData)(state));

                _DataLayerUtils.default.pushProductListImpressions(response, filters);

                dispatch({
                    type: ACTIONS.GET_ALL_PRODUCTS,
                    products: response
                });
            }, function(error) {
                return console.error("Filter List error occurred", error);
            });
        };
    }

    function getFilteredProductTree(page) {
        return function(dispatch, getState) {
            var filters = buildFilters(getState());
            dispatch(populateFilterWithOfferData(filters));

            if (page) {
                filters["start"] = page;
            }

            _remoteApi.default.getFilteredProductTree(filters).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response
                });
            }, function(error) {
                return console.log("Reload tree with filter error occured");
            }).then(function() {
                _remoteApi.default.fetchStickerConfiguration(fixCategoryForStickers(filters)).then(function(response) {
                    return dispatch({
                        type: ACTIONS.SET_STICKER_FILTER,
                        filters: response
                    });
                });
            }).then(function() {
                if (!(0, _selectors.isProductTreeEmpty)(getState()) && !(0, _selectors.checkTreeContainsElement)(getState()) || isInitialCategoryNotSet(getState())) {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_CATEGORY,
                        selectedCategory: (0, _selectors4.isAccessoryListPage)() ? "accesories" : "Phones and Devices"
                    });
                }

                getFilteredProductList(page)(dispatch, getState);
            });
        };
    }

    function getFilteredProductTreeWithoutReloadStickers(page) {
        return function(dispatch, getState) {
            var filters = buildFilters(getState());
            dispatch(populateFilterWithOfferData(filters));

            if (page) {
                filters["start"] = page;
            }

            _remoteApi.default.getFilteredProductTree(filters).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response
                });
            }, function(error) {
                return console.error("Reload tree with filter error occured", error);
            }).then(function() {
                if (!(0, _selectors.isProductTreeEmpty)(getState()) && !(0, _selectors.checkTreeContainsElement)(getState())) {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_CATEGORY,
                        selectedCategory: "Phones and Devices"
                    });
                }

                getFilteredProductList(page)(dispatch, getState);
            });
        };
    }

    function buildFilters(store) {
        var _store$simfree$list = store.simfree.list,
            selectedCategory = _store$simfree$list.selectedCategory,
            selectedProducer = _store$simfree$list.selectedProducer,
            selectedSort = _store$simfree$list.selectedSort,
            allVisibility = _store$simfree$list.allVisibility,
            actualAttrFilters = _store$simfree$list.actualAttrFilters,
            actualStickerAttrFilters = _store$simfree$list.actualStickerAttrFilters,
            priceFilter = _store$simfree$list.priceFilter,
            actualAttrNumberFilters = _store$simfree$list.actualAttrNumberFilters,
            matchToFilter = _store$simfree$list.matchToFilter,
            productsFilter = _store$simfree$list.productsFilter;
        var filters = {};
        filters["category"] = selectedCategory;
        filters["producer"] = selectedProducer;
        filters["sortMode"] = selectedSort;
        filters["showAll"] = allVisibility;
        filters["attrFilter"] = actualAttrFilters;
        filters["attrStickerFilter"] = actualStickerAttrFilters;
        filters["priceFilter"] = priceFilter;
        filters["attrNumberFilter"] = actualAttrNumberFilters;
        filters["matchToFilter"] = matchToFilter;

        if (productsFilter && Object.entries(productsFilter).length > 0) {
            filters["products"] = productsFilter;
        }

        return filters;
    }

    function fixCategoryForStickers(filters) {
        filters.category = filters.category === "0" ? "" : filters.category;
        return filters;
    }

    function isInitialCategoryNotSet(store) {
        var selectedCategory = store.simfree.list.selectedCategory;
        return selectedCategory && selectedCategory === "0";
    }

    var reloadProductList = function reloadProductList(page) {
        return function(dispatch, getState) {
            getFilteredProductTree(page)(dispatch, getState);
        };
    };

    _exports.reloadProductList = reloadProductList;

    function changeEsimFilterAttribute(value) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_ATTR_FILTERS,
                actualAttrFilters: {
                    esim: value
                }
            });
        };
    }

    function changeFilterAttribute(element, parent, multiValue, operation) {
        return function(dispatch, getState) {
            var store = getState();

            var filter = _filterUtils.default.manageFilter(store.simfree.list.actualAttrFilters, element, parent, multiValue, operation, store.simfree.list.filterConfiguration.categoryFilter);

            dispatch({
                type: ACTIONS.SET_ATTR_FILTERS,
                actualAttrFilters: filter
            });
        };
    }

    function changeStickerFilterAttribute(element, parent, multiValue, operation) {
        return function(dispatch, getState) {
            var store = getState();

            var filter = _filterUtils.default.manageStickerFilter(store.simfree.list.actualStickerAttrFilters, element, parent, multiValue, operation, store.simfree.list.filterConfiguration.stickerFilter);

            dispatch({
                type: ACTIONS.SET_STICKER_ATTR_FILTERS,
                actualStickerAttrFilters: filter
            });
        };
    }

    function changeStickerFilter(value) {
        return function(dispatch, getState) {
            var store = getState();
            var filters = buildFilters(getState());

            if (!store.simfree.list.filterConfiguration.stickerFilter) {
                _remoteApi.default.fetchStickerConfiguration(fixCategoryForStickers(filters)).then(function(response) {
                    var newFilters = _filterUtils.default.getStickerFilters(response, value);

                    dispatch({
                        type: ACTIONS.SET_STICKER_ATTR_FILTERS,
                        actualStickerAttrFilters: newFilters
                    });
                });
            }
        };
    }

    function changeFilterNumberAttribute(type, value, element) {
        return function(dispatch, getState) {
            var store = getState();

            var filter = _filterUtils.default.manageNumberFilter(store.simfree.list.actualAttrNumberFilters, type, value, element, store.simfree.list.filterConfiguration.categoryFilter);

            dispatch({
                type: ACTIONS.SET_ATTR_NUMBER_FILTERS,
                actualAttrNumberFilters: filter
            });
        };
    }

    function changePriceFilter(type, price) {
        if (type && !isNaN(price)) {
            _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout(preparePriceUrlParameter(type), price);
        }

        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SET_PRICE_FILTERS,
                priceFilterType: type,
                price: price
            });
        };
    }

    function clearAttrsFilters() {
        return function(dispatch, getState) {
            var store = getState();
            store.simfree.list.actualAttrFilters = {};
            store.simfree.list.actualStickerAttrFilters = {};
            store.simfree.list.actualAttrNumberFilters = {};
            dispatch({
                type: ACTIONS.CLEAR_ATTR_FILTERS
            });
        };
    }

    function clearMatchToFilters() {
        return function(dispatch, getState) {
            var store = getState();
            Object.keys(store.simfree.list.matchToFilter).forEach(function(key, index) {
                $("[data-id=" + key + "] :input").prop("checked", false);
            });
            store.simfree.list.matchToFilter = {};
            dispatch({
                type: ACTIONS.CLEAR_MATCH_TO_FILTERS
            });
            dispatch(reloadProductList(1));
        };
    }

    function updateAttrsFilter(actualAttrFilters) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_ATTR_FILTERS,
                actualAttrFilters: actualAttrFilters
            });
        };
    }

    function updateStickerAttrsFilter(actualStickerAttrFilters) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_STICKER_ATTR_FILTERS,
                actualStickerAttrFilters: actualStickerAttrFilters
            });
        };
    }

    function updateMatchToFilters(matchToFilter) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_MATCH_TO_FILTERS,
                matchToFilter: matchToFilter
            });
        };
    }

    function preparePriceUrlParameter(type) {
        switch (type) {
            case "to":
                return "priceTo";

            case "from":
                return "priceFrom";

            default:
                return "incorrectPriceTypeParameter";
        }
    }

    function populateFilterWithOfferData(filters) {
        return function(dispatch, getState) {
            var offerType = (0, _filters.getSelectedOfferType)(getState());
            var store = getState();
            calculateFilterProcessType(filters, getState());
            calculateOfferFilterPropositionId(filters, getState());

            if ([_OfferTypeEnum.default.DATA, _OfferTypeEnum.default.VOICE, _OfferTypeEnum.default.CONVERGENT, _OfferTypeEnum.default.SIMFREE_INST, _OfferTypeEnum.default.VOICE_LDF, _OfferTypeEnum.default.DATA_LDF].indexOf(offerType) > -1) {
                //tak, wiem, chujowe jak siemano ale nie wiem czemu selektory tutaj sie jebia, brakuje tylko wkleic tutaj mema z it graduate
                var selectedOneTimeConfiguration = store.simfree.metaData.oneTimePriceFilterCmsConf[store.configurator.filters.selected.offerType];
                var selectedOneTimePricesObject = store.simfree.list.selectedOneTimePrices;
                var selectedTieredPricesForCurrentOfferType = Object.keys(selectedOneTimePricesObject).map(function(a) {
                    return {
                        id: a,
                        value: selectedOneTimePricesObject[a]
                    };
                }).filter(function(a) {
                    return a.value;
                }).map(function(selected) {
                    return selectedOneTimeConfiguration && selectedOneTimeConfiguration.find(function(a) {
                        return a.id === selected.id;
                    });
                }).filter(function(a) {
                    return a;
                });
                filters["oneTimePriceInOfferFilters"] = selectedTieredPricesForCurrentOfferType.map(function(r) {
                    return {
                        to: r.to,
                        from: r.from
                    };
                });
                var maxMonthly = (0, _selectors.getSelectedMaxMonthlyPriceRange)(getState());

                if (maxMonthly && maxMonthly.to) {
                    //filter field is different than selector. Its intentional.
                    filters["deviceInOfferPriceFilter"] = {
                        "to": maxMonthly.to
                    };
                }

                var instalmentsCount = (0, _offers.getCurrentDeviceInstalmentsCountValue)(store);

                if (instalmentsCount > 0) {
                    filters["deviceInstallmentsCount"] = instalmentsCount;
                }
            }
        };
    }

    function calculateOfferFilterPropositionId(filters, store) {
        var offerType = (0, _filters.getSelectedOfferType)(store);

        if (offerType === _OfferTypeEnum.default.CONVERGENT) {
            filters["propositionItemId"] = store.magnum.selectedProposition && store.magnum.selectedProposition.mobileVoiceBundleTemplateCode;
        } else {
            filters["propositionItemId"] = store.configurator.offers.selected;
        }
    }

    function calculateFilterProcessType(filters, store) {
        var offerType = (0, _filters.getSelectedOfferType)(store);

        if (offerType === _OfferTypeEnum.default.CONVERGENT) {
            if (store.magnum.selectedProposition && store.magnum.selectedProposition.voice && store.magnum.selectedProposition.mobileVoiceBundleTemplateCode && store.magnum.selectedProposition.mobileVoiceBundleTemplateCode.includes(store.magnum.selectedProposition.voice.code)) {
                if ("POS" === store.magnum.possibleTransactions.salesChannel && "MNP" === store.magnum.selectedMobileTransaction.process) {
                    filters["process"] = "MNP_TWOSTEP";
                } else {
                    filters["process"] = store.magnum.selectedMobileTransaction.process;
                }
            } else {
                filters["process"] = store.magnum.selectedFixBroadbandTransaction.process;
            }
        } else {
            filters["process"] = (0, _filters.getSelectedProcess)(store);
        }
    }

    function updateNumberAttrsFilter(actualAttrFilters) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.UPDATE_NUMBER_ATTR_FILTERS,
                actualAttrNumberFilters: actualAttrFilters
            });
        };
    }

    function getMatchToData() {
        return function(dispatch, getState) {
            var store = getState();
            var filters = {};
            filters["category"] = "accesories";
            filters["producer"] = store.simfree.list.selectedProducer;
            filters["sortMode"] = store.simfree.list.selectedSort;
            filters["showAll"] = store.simfree.list.allVisibility;
            filters["attrFilter"] = store.simfree.list.actualAttrFilters;
            filters["attrStickerFilter"] = store.simfree.list.actualStickerAttrFilters;
            filters["priceFilter"] = store.simfree.list.priceFilter;
            filters["attrNumberFilter"] = store.simfree.list.actualAttrNumberFilters;
            filters["matchToFilter"] = store.simfree.list.matchToFilter;

            if (store.simfree.list.productsFilter && Object.entries(store.simfree.list.productsFilter).length > 0) {
                filters["products"] = store.simfree.list.productsFilter;
            }

            _remoteApi.default.getMatchToData(filters).then(function(response) {
                return dispatch({
                    type: ACTIONS.GET_MATCH_TO_DATA,
                    matchToFilterData: response
                });
            });
        };
    }

    var selectOneTimePrice = function selectOneTimePrice(id) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONS.SELECT_ONE_TIME_PRICE,
                id: id
            });

            _OnlineUtils.default.processOneTimeCostPricesUrlParameter((0, _selectors.getSelectedOneTimePricesList)(getState()));

            dispatch(reloadProductList());
        };
    };

    _exports.selectOneTimePrice = selectOneTimePrice;

    var clearOneTimePrices = function clearOneTimePrices() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_ONE_TIME_PRICES
            });
        };
    };

    _exports.clearOneTimePrices = clearOneTimePrices;

    var clearMonthlyPrices = function clearMonthlyPrices() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLEAR_MONTHLY_PRICES
            });
        };
    };

    _exports.clearMonthlyPrices = clearMonthlyPrices;

    var selectMaxMonthlyPrice = function selectMaxMonthlyPrice(id) {
        return function(dispatch, getState) {
            var cmsConf = (0, _selectors.getTieredMaxMonthlyPriceForCurrentOfferType)(getState());
            var selectedConf = cmsConf && cmsConf.find(function(conf) {
                return conf.id == id;
            });

            if (selectedConf) {
                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", selectedConf.to);
            }

            dispatch({
                type: ACTIONS.SELECT_MAX_MONTHLY_PRICE,
                id: id
            });
            dispatch(reloadProductList());
        };
    };

    _exports.selectMaxMonthlyPrice = selectMaxMonthlyPrice;

    function reloadMatchToFilter() {
        return function(dispatch, getState) {
            var store = getState();
            var filters = {};
            filters["category"] = store.simfree.list.selectedCategory;
            filters["producer"] = store.simfree.list.selectedProducer;
            filters["sortMode"] = store.simfree.list.selectedSort;
            filters["showAll"] = store.simfree.list.allVisibility;
            filters["attrFilter"] = store.simfree.list.actualAttrFilters;
            filters["priceFilter"] = store.simfree.list.priceFilter;
            filters["attrNumberFilter"] = store.simfree.list.actualAttrNumberFilters;
            filters["matchToFilter"] = store.simfree.list.matchToFilter;

            _remoteApi.default.reloadMatchToData(filters).then(function(response) {
                return dispatch({
                    type: ACTIONS.UPDATE_MATCH_TO_FILTER_COUNTERS,
                    matchToFilterCounterData: response
                });
            }).then(function(response) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, response, "match-to-tree");
            });
        };
    }

    function getSelectedOfferAndCategory(store) {
        var filters = {};
        filters["category"] = store.simfree.list.selectedCategory;
        filters["producer"] = store.simfree.list.selectedProducer;
        calculateFilterProcessType(filters, store);
        calculateOfferFilterPropositionId(filters, store);
        return filters;
    }

    var verificationNeeded = {
        type: ACTIONS.VERIFICATION_NEEDED
    };
    _exports.verificationNeeded = verificationNeeded;
    var doCloseVerificationModal = {
        type: ACTIONS.CLOSE_VERIFICATION_MODAL
    };
    _exports.doCloseVerificationModal = doCloseVerificationModal;

    var checkMsisdnAndGetOffersAndAddToCart = function checkMsisdnAndGetOffersAndAddToCart(msisdn) {
        return function(dispatch, getState) {
            dispatch({
                type: ACTIONSCONF.CHECK_MSISDN
            });
            var deviceCode = (0, _offers.getSelectedDeviceId)(getState());
            var selectedFilters = (0, _filters.getSelectedFilters)(getState());
            var marketContext = (0, _filters3.getMarketContext)(getState());
            var availableProductsKey = (0, _selectors.getCurrentSelectedAvailableProductsKey)(getState());

            _remoteApi2.default.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode).then(function(response) {
                dispatch({
                    type: ACTIONSCONF.CHECK_MSISDN_RESULT,
                    payload: {
                        response: response,
                        process: selectedFilters.processType,
                        offer: selectedFilters.offerType,
                        market: marketContext
                    },
                    data: response
                });

                if (response.isPositive) {
                    console.log("Check Msisdn Positive");
                    dispatch({
                        type: ACTIONSCONF.FETCH_OFFERS,
                        payload: response.offers,
                        selectedFilters: (0, _filters.getSelectedFilters)(getState()),
                        data: response
                    });
                    dispatch((0, _filters2.setProcessForMsisdn)(msisdn, selectedFilters.processType, response.process));
                    dispatch(doCloseVerificationModal);
                    dispatch((0, _cart.addToCart)());
                    dispatch((0, _filters2.clearCheckMsisdn)());
                }
            }).catch(function(response) {
                console.log("checkMsisdnAndGetOffersAndAddToCart error");
                dispatch({
                    type: ACTIONSCONF.CHECK_MSISDN_ERROR,
                    message: response.responseText,
                    payload: {
                        response: {
                            msisdn: msisdn
                        },
                        process: selectedFilters.processType,
                        offer: selectedFilters.offerType,
                        market: marketContext
                    }
                });
            });
        };
    };

    _exports.checkMsisdnAndGetOffersAndAddToCart = checkMsisdnAndGetOffersAndAddToCart;

    var doOpenVerificationModal = function doOpenVerificationModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_VERIFICATION_MODAL
            });
        };
    };

    _exports.doOpenVerificationModal = doOpenVerificationModal;

    var setProductsFilter = function setProductsFilter(value) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SET_PRODUCTS_FILTER,
                productsFilter: value
            });
        };
    };

    _exports.setProductsFilter = setProductsFilter;
});
//# sourceMappingURL=filter.js.map