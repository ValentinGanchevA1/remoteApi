import * as ACTIONS from "../actionTypes";
import * as ACTIONSCONF from "eshop/modules/configurator/actionTypes";
import RemoteApi from "../remoteApi";
import RemoteApiConf from "eshop/modules/configurator/remoteApi";
import FilterUtils from "../filterUtils";
import {
    getSelectedMaxMonthlyPriceRange,
    getTieredMaxMonthlyPriceForCurrentOfferType,
    getSelectedOneTimePricesList,
    getCurrentSelectedAvailableProductsKey,
    checkTreeContainsElement,
    isProductTreeEmpty,
    getFilterConfigurationFetched,
} from "eshop/modules/simfree/selectors";
import {
    getClientContext,
    getSelectedOfferType,
    getSelectedFilters,
    getSelectedProcess
} from "eshop/modules/configurator/selectors/filters";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    getCurrentDeviceInstalmentsCountValue,
    getSelectedOfferDataInContext,
    getSelectedDeviceId,
} from "eshop/modules/configurator/selectors/offers";
import {
    addToCart
} from "eshop/modules/configurator/actions/cart";
import {
    clearCheckMsisdn,
    setProcessForMsisdn
} from "eshop/modules/configurator/actions/filters";
import OfferType from "../constants/OfferTypeEnum";
import {
    getProductCodeByBundleNo
} from "eshop/modules/cart/selectors";
import {
    getMarketContext
} from "../../configurator/selectors/filters";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    getAssistModeStateData
} from "../../checkout/selectors";
import {
    isAccessoryListPage
} from "../selectors";

export function fetchFilterConfiguration(initProducer, initCategory, initFilters) {
    return (dispatch, getState) => {
        if (getFilterConfigurationFetched(getState())) {
            return;
        }
        if (getSelectedOfferType(getState()) === OfferType.CONVERGENT && !getState().magnum.selectedProposition) {
            return;
        }
        RemoteApi.fetchFilterConfiguration(getSelectedOfferAndCategory(getState()))
            .then(response =>
                dispatch({
                    type: ACTIONS.FETCH_FILTER_CONFIGURATION,
                    filterConfiguration: response,
                    initProducer: initProducer,
                    initSort: initFilters.sortMode ? initFilters.sortMode : ''
                }),
                error => console.error("fetchFilterConfiguration error", error))
            .then(() => dispatch(getProductsTree(initCategory, initFilters)),
                error => console.error("fetchFilterConfiguration getProductsTree error", error))
    }
}

export function getProductsTree(initCategory, initFilters) {
    let result = {
        category: ""
    };
    return (dispatch, getState) => {
        RemoteApi.getProductsTree(getSelectedOfferAndCategory(getState()))
            .then(response => {
                result.category = checkCategory(response, initCategory) ? initCategory : "";
                return dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response,
                    initCategory: result.category,
                })
            })
            .then(response => (result.category !== "" ? RemoteApi.getFiltersList(initCategory) : response))
            .then(response => {
                if (result.category === "") {
                    return response;
                }
                return dispatch({
                    type: ACTIONS.GET_INIT_FILTERS,
                    filters: response,
                    actualAttrFilters: findInitFilters(response, initFilters),
                    actualAttrNumberFilters: findInitNumberFilters(response, initFilters),
                })
            })

    }
}

function checkCategory(node, initCategory) {
    if (!initCategory || initCategory === "") {
        return false;
    }

    let result = false;

    if (node.code === initCategory) {
        return true;
    }

    if (!node.subCategories) {
        return false;
    }

    node.subCategories.map(pos => {
        if (pos.code === initCategory) {
            result = true;
            return true;
        }

        result = result || checkCategory(pos, initCategory);
    });

    return result;
}

export function changeCurrentPageProps(page) {
    return dispatch => {
        dispatch({
            type: ACTIONS.CHANGE_CURRENT_PAGE,
            payload: page,
        })
    }
}

function findInitFilters(filterConfiguration, initFilters) {
    let filters = {};

    filterConfiguration.map(filter => {
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
    let valueToCheckSplit = valuesToCheck.split(',');
    return availableValues && availableValues.length && valueToCheckSplit.every(value => availableValues.includes(value));
}

function findInitNumberFilters(filterConfiguration, initFilters) {
    let filters = {};

    filterConfiguration.map(filter => {
        if (filter.type === "number" && initFilters[filter.code + "_to"]) {
            filters[filter.code + "_to"] = initFilters[filter.code + "_to"];
        }
        if (filter.type === "number" && initFilters[filter.code + "_from"]) {
            filters[filter.code + "_from"] = initFilters[filter.code + "_from"];
        }
    });

    return filters;
}

export function changeEsimFilterAttributeIfAvailable(valuesToCheck, initCategory) {
    return (dispatch, getState) => {
        RemoteApi.getFiltersList(initCategory).then(response => {
            let eSimFilter = response.find(filter => filter.code === "esim");
            if (eSimFilter && eSimFilter.availableValues && checkifEnumAvailable(valuesToCheck, eSimFilter.availableValues)) {
                dispatch(changeEsimFilterAttribute(valuesToCheck));
            }
        });
    };
}

export function getFilters(categoryCode) {
    return (dispatch, getState) => {
        RemoteApi.getFiltersList(categoryCode).then(response =>
            dispatch({
                type: ACTIONS.GET_FILTERS,
                filters: response,
            })).then(response => {
            if (response && response.filters) {
                updateAttrsFilter(FilterUtils.clearActualFilterAfterCategoryChange(response.filters, getState().simfree.list.actualAttrFilters))(dispatch);
                updateNumberAttrsFilter(FilterUtils.clearActualFilterAfterCategoryChange(response.filters, getState().simfree.list.actualAttrNumberFilters))(dispatch);
            }
        })
    }
}

export function setSelectedProducer(selectedProducer) {
    if (selectedProducer != null) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("producer", selectedProducer);
    }
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_SELECTED_PRODUCER,
            selectedProducer: selectedProducer,
        })
    }
}

export function setSelectedModel(selectedModel, checked) {
    return (dispatch, getState) => {
        const store = getState();
        const filter = FilterUtils.manageMatchToData(selectedModel, checked, store.simfree.list.matchToFilterData, store.simfree.list.matchToFilter);
        dispatch({
            type: ACTIONS.SET_SELECTED_MODEL,
            matchToFilter: filter,
        })
    }
}

export function setSelectedRecomendedProducer(selectedProducer, checked) {
    return dispatch => {
        const filter = FilterUtils.manageMatchToData(selectedProducer, checked, {});
        dispatch({
            type: ACTIONS.SET_SELECTED_MODEL,
            matchToFilter: filter,
        })
    }
}

export function setSelectedSort(selectedSort) {
    if (selectedSort) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("sortMode", selectedSort);
    }
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_SELECTED_SORT,
            selectedSort: selectedSort,
        })
    }
}

export function setSelectedColor(selectedColor) {
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_SELECTED_COLOR,
            selectedColor: selectedColor,
        })
    }
}

export function setAllVisibilityProduct(value) {
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_SELECTED_ALL_VISIBILITY,
            allVisibility: value,
        })
    }
}

export function setOpenFilterModal(opened) {
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_OPENED_FILTER_MODAL,
            opened: opened,
        })
    }
}

export function changeSearchDeviceValue(searchValue) {
    return dispatch => {
        dispatch({
            type: ACTIONS.SET_SEARCH_DEVICE_VALUE,
            searchValue: searchValue || "",
        });

        if (searchValue.length === 0 || searchValue.length > 1)
            dispatch(getFilteredProductList(1));
    }
}

export function getFilteredProductList(page) {
    return (dispatch, getState) => {
        const state = getState();
        let filters = {};

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
        filters["isChangeProductMode"] = !!state.cart.addTerminalToOfferBundleNo && !!getProductCodeByBundleNo()(getState());
        if (state.cart.addTerminalToOfferBundleNo) {
            filters["code"] = getProductCodeByBundleNo()(getState());
        }
        if (state.simfree.list.productsFilter && Object.entries(state.simfree.list.productsFilter).length > 0) {
            filters["products"] = state.simfree.list.productsFilter;
        }
        dispatch(populateFilterWithOfferData(filters));

        if (page) {
            filters["start"] = page;
        }
        console.log("Filters for product list", filters);
        RemoteApi.getFilteredProductList(filters)
            .then(response => {
                filters["offerType"] = getSelectedOfferType(state);
                filters["selectedOffer"] = getSelectedOfferDataInContext(state);
                filters["clientContext"] = getClientContext(state);
                filters["marketContext"] = getMarketContext(state);
                filters["salesChannel"] = getSalesChannel(state);
                filters = {
                    ...filters,
                    ...getAssistModeStateData(state)
                };
                DataLayerUtils.pushProductListImpressions(response, filters);
                dispatch({
                    type: ACTIONS.GET_ALL_PRODUCTS,
                    products: response,
                })
            }, error => console.error("Filter List error occurred", error));
    }
}

export function getFilteredProductTree(page) {
    return (dispatch, getState) => {
        let filters = buildFilters(getState());
        dispatch(populateFilterWithOfferData(filters));

        if (page) {
            filters["start"] = page;
        }
        RemoteApi.getFilteredProductTree(filters).then(response =>
                dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response,
                }), error => console.log("Reload tree with filter error occured")
            )
            .then(() => {
                RemoteApi.fetchStickerConfiguration(fixCategoryForStickers(filters))
                    .then(response =>
                        dispatch({
                            type: ACTIONS.SET_STICKER_FILTER,
                            filters: response,
                        }))
            })
            .then(() => {
                if (!isProductTreeEmpty(getState()) && !checkTreeContainsElement(getState()) ||
                    isInitialCategoryNotSet(getState())) {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_CATEGORY,
                        selectedCategory: isAccessoryListPage() ? "accesories" : "Phones and Devices",
                    })
                }
                getFilteredProductList(page)(dispatch, getState);
            })
    }
}

export function getFilteredProductTreeWithoutReloadStickers(page) {
    return (dispatch, getState) => {
        let filters = buildFilters(getState());
        dispatch(populateFilterWithOfferData(filters));

        if (page) {
            filters["start"] = page;
        }
        RemoteApi.getFilteredProductTree(filters)
            .then(response => dispatch({
                    type: ACTIONS.GET_PRODUCTS_TREES,
                    payload: response,
                }),
                error => console.error("Reload tree with filter error occured", error))
            .then(() => {
                if (!isProductTreeEmpty(getState()) && !checkTreeContainsElement(getState())) {
                    dispatch({
                        type: ACTIONS.SET_SELECTED_CATEGORY,
                        selectedCategory: "Phones and Devices",
                    })
                }
                getFilteredProductList(page)(dispatch, getState);
            })
    }
}

function buildFilters(store) {
    let {
        selectedCategory,
        selectedProducer,
        selectedSort,
        allVisibility,
        actualAttrFilters,
        actualStickerAttrFilters,
        priceFilter,
        actualAttrNumberFilters,
        matchToFilter,
        productsFilter
    } = store.simfree.list;

    let filters = {};
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
    let {
        selectedCategory
    } = store.simfree.list;
    return selectedCategory && selectedCategory === "0";
}

export const reloadProductList = page => (dispatch, getState) => {
    getFilteredProductTree(page)(dispatch, getState);
};

export function changeEsimFilterAttribute(value) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_ATTR_FILTERS,
            actualAttrFilters: {
                esim: value
            },
        })
    };
}

export function changeFilterAttribute(element, parent, multiValue, operation) {
    return (dispatch, getState) => {
        const store = getState();
        const filter = FilterUtils.manageFilter(store.simfree.list.actualAttrFilters, element, parent, multiValue, operation, store.simfree.list.filterConfiguration.categoryFilter);
        dispatch({
            type: ACTIONS.SET_ATTR_FILTERS,
            actualAttrFilters: filter,
        })
    }
}

export function changeStickerFilterAttribute(element, parent, multiValue, operation) {
    return (dispatch, getState) => {
        const store = getState();
        const filter = FilterUtils.manageStickerFilter(store.simfree.list.actualStickerAttrFilters, element, parent, multiValue, operation, store.simfree.list.filterConfiguration.stickerFilter);
        dispatch({
            type: ACTIONS.SET_STICKER_ATTR_FILTERS,
            actualStickerAttrFilters: filter,
        })
    }
}

export function changeStickerFilter(value) {
    return (dispatch, getState) => {
        const store = getState();
        const filters = buildFilters(getState());
        if (!store.simfree.list.filterConfiguration.stickerFilter) {
            RemoteApi.fetchStickerConfiguration(fixCategoryForStickers(filters))
                .then(response => {
                    const newFilters = FilterUtils.getStickerFilters(response, value);
                    dispatch({
                        type: ACTIONS.SET_STICKER_ATTR_FILTERS,
                        actualStickerAttrFilters: newFilters
                    });
                });
        }
    };
}

export function changeFilterNumberAttribute(type, value, element) {
    return (dispatch, getState) => {
        const store = getState();
        const filter = FilterUtils.manageNumberFilter(store.simfree.list.actualAttrNumberFilters, type, value, element, store.simfree.list.filterConfiguration.categoryFilter);
        dispatch({
            type: ACTIONS.SET_ATTR_NUMBER_FILTERS,
            actualAttrNumberFilters: filter,
        })
    }
}

export function changePriceFilter(type, price) {
    if (type && !isNaN(price)) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(preparePriceUrlParameter(type), price);
    }
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_PRICE_FILTERS,
            priceFilterType: type,
            price: price,
        })
    }
}

export function clearAttrsFilters() {
    return (dispatch, getState) => {
        let store = getState();
        store.simfree.list.actualAttrFilters = {};
        store.simfree.list.actualStickerAttrFilters = {};
        store.simfree.list.actualAttrNumberFilters = {};

        dispatch({
            type: ACTIONS.CLEAR_ATTR_FILTERS,
        })
    }
}
export function clearMatchToFilters() {
    return (dispatch, getState) => {
        const store = getState();
        Object.keys(store.simfree.list.matchToFilter).forEach((key, index) => {
            $("[data-id=" + key + "] :input").prop("checked", false)
        });
        store.simfree.list.matchToFilter = {};
        dispatch({
            type: ACTIONS.CLEAR_MATCH_TO_FILTERS,
        });
        dispatch(reloadProductList(1));
    }
}

export function updateAttrsFilter(actualAttrFilters) {
    return dispatch => {
        dispatch({
            type: ACTIONS.UPDATE_ATTR_FILTERS,
            actualAttrFilters: actualAttrFilters,
        })
    }
}

export function updateStickerAttrsFilter(actualStickerAttrFilters) {
    return dispatch => {
        dispatch({
            type: ACTIONS.UPDATE_STICKER_ATTR_FILTERS,
            actualStickerAttrFilters: actualStickerAttrFilters,
        })
    }
}

export function updateMatchToFilters(matchToFilter) {
    return dispatch => {
        dispatch({
            type: ACTIONS.UPDATE_MATCH_TO_FILTERS,
            matchToFilter: matchToFilter
        })
    }
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
    return (dispatch, getState) => {
        let offerType = getSelectedOfferType(getState());
        const store = getState();
        calculateFilterProcessType(filters, getState());
        calculateOfferFilterPropositionId(filters, getState());
        if ([OfferType.DATA, OfferType.VOICE, OfferType.CONVERGENT, OfferType.SIMFREE_INST, OfferType.VOICE_LDF, OfferType.DATA_LDF].indexOf(offerType) > -1) {
            //tak, wiem, chujowe jak siemano ale nie wiem czemu selektory tutaj sie jebia, brakuje tylko wkleic tutaj mema z it graduate
            const selectedOneTimeConfiguration = store.simfree.metaData.oneTimePriceFilterCmsConf[store.configurator.filters.selected.offerType];
            const selectedOneTimePricesObject = store.simfree.list.selectedOneTimePrices;
            const selectedTieredPricesForCurrentOfferType = (Object.keys(selectedOneTimePricesObject).map(a => ({
                id: a,
                value: selectedOneTimePricesObject[a],
            }))).filter(a => a.value).map(selected => selectedOneTimeConfiguration && selectedOneTimeConfiguration.find(a => a.id === selected.id)).filter(a => a)
            filters["oneTimePriceInOfferFilters"] = selectedTieredPricesForCurrentOfferType.map(r => ({
                to: r.to,
                from: r.from,
            }));

            let maxMonthly = getSelectedMaxMonthlyPriceRange(getState());
            if (maxMonthly && maxMonthly.to) {
                //filter field is different than selector. Its intentional.
                filters["deviceInOfferPriceFilter"] = {
                    "to": maxMonthly.to
                }
            }

            let instalmentsCount = getCurrentDeviceInstalmentsCountValue(store);
            if (instalmentsCount > 0) {
                filters["deviceInstallmentsCount"] = instalmentsCount
            }
        }
    }
}

function calculateOfferFilterPropositionId(filters, store) {
    let offerType = getSelectedOfferType(store);

    if (offerType === OfferType.CONVERGENT) {
        filters["propositionItemId"] = store.magnum.selectedProposition && store.magnum.selectedProposition.mobileVoiceBundleTemplateCode;
    } else {
        filters["propositionItemId"] = store.configurator.offers.selected;
    }
}

function calculateFilterProcessType(filters, store) {
    let offerType = getSelectedOfferType(store);
    if (offerType === OfferType.CONVERGENT) {
        if (store.magnum.selectedProposition && store.magnum.selectedProposition.voice &&
            store.magnum.selectedProposition.mobileVoiceBundleTemplateCode &&
            store.magnum.selectedProposition.mobileVoiceBundleTemplateCode.includes(store.magnum.selectedProposition.voice.code)) {
            if ("POS" === store.magnum.possibleTransactions.salesChannel && "MNP" === store.magnum.selectedMobileTransaction.process) {
                filters["process"] = "MNP_TWOSTEP";
            } else {
                filters["process"] = store.magnum.selectedMobileTransaction.process;
            }
        } else {
            filters["process"] = store.magnum.selectedFixBroadbandTransaction.process;
        }
    } else {
        filters["process"] = getSelectedProcess(store);
    }
}

export function updateNumberAttrsFilter(actualAttrFilters) {
    return dispatch => {
        dispatch({
            type: ACTIONS.UPDATE_NUMBER_ATTR_FILTERS,
            actualAttrNumberFilters: actualAttrFilters,
        })
    }
}

export function getMatchToData() {
    return (dispatch, getState) => {
        const store = getState();
        let filters = {};
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
        RemoteApi.getMatchToData(filters).then(response =>
            dispatch({
                type: ACTIONS.GET_MATCH_TO_DATA,
                matchToFilterData: response,
            }));
    }
}

export const selectOneTimePrice = id => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SELECT_ONE_TIME_PRICE,
        id,
    });
    OnlineUtils.processOneTimeCostPricesUrlParameter(getSelectedOneTimePricesList(getState()));
    dispatch(reloadProductList());
};

export const clearOneTimePrices = () => dispatch => {
    dispatch({
        type: ACTIONS.CLEAR_ONE_TIME_PRICES,
    })
};

export const clearMonthlyPrices = () => dispatch => {
    dispatch({
        type: ACTIONS.CLEAR_MONTHLY_PRICES,
    })
};

export const selectMaxMonthlyPrice = id => (dispatch, getState) => {
    const cmsConf = getTieredMaxMonthlyPriceForCurrentOfferType(getState());
    const selectedConf = cmsConf && cmsConf.find(conf => conf.id == id)
    if (selectedConf) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", selectedConf.to);
    }
    dispatch({
        type: ACTIONS.SELECT_MAX_MONTHLY_PRICE,
        id,
    });
    dispatch(reloadProductList());
};

export function reloadMatchToFilter() {
    return (dispatch, getState) => {
        const store = getState();
        let filters = {};
        filters["category"] = store.simfree.list.selectedCategory;
        filters["producer"] = store.simfree.list.selectedProducer;
        filters["sortMode"] = store.simfree.list.selectedSort;
        filters["showAll"] = store.simfree.list.allVisibility;
        filters["attrFilter"] = store.simfree.list.actualAttrFilters;
        filters["priceFilter"] = store.simfree.list.priceFilter;
        filters["attrNumberFilter"] = store.simfree.list.actualAttrNumberFilters;
        filters["matchToFilter"] = store.simfree.list.matchToFilter;
        RemoteApi.reloadMatchToData(filters).then(response =>
            dispatch({
                type: ACTIONS.UPDATE_MATCH_TO_FILTER_COUNTERS,
                matchToFilterCounterData: response,
            })).then(response => {
            OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, response, "match-to-tree")
        });
    }
}

function getSelectedOfferAndCategory(store) {
    let filters = {};
    filters["category"] = store.simfree.list.selectedCategory;
    filters["producer"] = store.simfree.list.selectedProducer;
    calculateFilterProcessType(filters, store);
    calculateOfferFilterPropositionId(filters, store);
    return filters;
}

export const verificationNeeded = {
    type: ACTIONS.VERIFICATION_NEEDED
};
export const doCloseVerificationModal = {
    type: ACTIONS.CLOSE_VERIFICATION_MODAL
};
export const checkMsisdnAndGetOffersAndAddToCart = msisdn => (dispatch, getState) => {
    dispatch({
        type: ACTIONSCONF.CHECK_MSISDN
    });
    const deviceCode = getSelectedDeviceId(getState());
    const selectedFilters = getSelectedFilters(getState());
    const marketContext = getMarketContext(getState());
    const availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());
    RemoteApiConf.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode).then(response => {
        dispatch({
            type: ACTIONSCONF.CHECK_MSISDN_RESULT,
            payload: {
                response: response,
                process: selectedFilters.processType,
                offer: selectedFilters.offerType,
                market: marketContext,
            },
            data: response,
        });
        if (response.isPositive) {
            console.log("Check Msisdn Positive");
            dispatch({
                type: ACTIONSCONF.FETCH_OFFERS,
                payload: response.offers,
                selectedFilters: getSelectedFilters(getState()),
                data: response,
            });
            dispatch(setProcessForMsisdn(msisdn, selectedFilters.processType, response.process));
            dispatch(doCloseVerificationModal);
            dispatch(addToCart());
            dispatch(clearCheckMsisdn());
        }
    }).catch(response => {
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

export const doOpenVerificationModal = () => dispatch => {
    dispatch({
        type: ACTIONS.OPEN_VERIFICATION_MODAL,
    })
};

export const setProductsFilter = (value) => dispatch => {
    dispatch({
        type: ACTIONS.SET_PRODUCTS_FILTER,
        productsFilter: value
    })
}