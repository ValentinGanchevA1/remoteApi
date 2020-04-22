import * as ACTIONS from "../actionTypes";
import OnlineUtils from "eshop/utils/OnlineUtils";

export const products = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_PRODUCTS:
            return action.products;
        case ACTIONS.FILTER_ACTION_IDENTIFIER:
            return action.products;
        case ACTIONS.SET_SELECTED_VARIANT_ON_LIST:
            return {
                ...state, ["data"]: action.products
            };
        default:
            return state
    }
};

export const categories = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCTS_TREES:
            return action.payload;
        default:
            return state
    }
};

export const filterConfiguration = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_FILTER_CONFIGURATION:
            return action.filterConfiguration;
        case ACTIONS.GET_INIT_FILTERS:
            return {
                ...state, ["categoryFilter"]: action.filters
            };
        case ACTIONS.GET_FILTERS:
            return {
                ...state, ["categoryFilter"]: action.filters
            };
        case ACTIONS.SET_STICKER_FILTER:
            return {
                ...state, ["stickerFilter"]: action.filters
            };
        default:
            return state
    }
};

export const selectedProducer = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_PRODUCER:
            return action.selectedProducer;
        case ACTIONS.FETCH_FILTER_CONFIGURATION:
            if (checkProducer(action.filterConfiguration, action.initProducer)) {
                return action.initProducer;
            } else {
                return "";
            }
            default:
                return state;
    }
};

export const currentPage = (state = 1, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CURRENT_PAGE:
            return action.payload;
        case ACTIONS.GET_ALL_PRODUCTS:
            return (action.products && action.products.currentPage) ? action.products.currentPage : 1;
        default:
            return state
    }
};

export const initiallyFiltered = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_PRODUCTS:
            return true;
        default:
            return state
    }
};

function checkProducer(configuration, initProducer) {
    let result = false;

    configuration.producerFilter.map(producer => {
        if (producer.name === initProducer) {
            result = true;
            return;
        }
    });

    return result;
}

function checkSort(configuration, initSort) {
    return configuration && configuration.sortDefinition && configuration.sortDefinition.length &&
        configuration.sortDefinition.findIndex(sort => sort.value === initSort) !== -1;
}

export const selectedCategory = (state = decodeURI(OnlineUtils.getParameterValueFromUrl("selectedCategory")) || "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_CATEGORY:
            if (action.selectedCategory)
                return action.selectedCategory;
            return state;
        case ACTIONS.GET_PRODUCTS_TREES:
            return action.initCategory ? action.initCategory : state;
        default:
            return state
    }
};

export const selectedCategoryName = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_CATEGORY:
            if (action.selectedCategoryName)
                return action.selectedCategoryName;
            return state;
        default:
            return state
    }
};

export const selectedColor = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_COLOR:
            return action.selectedColor;
        default:
            return state
    }
};

export const selectedSort = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_SORT:
            return action.selectedSort;
        case ACTIONS.FETCH_FILTER_CONFIGURATION:
            if (checkSort(action.filterConfiguration, action.initSort)) {
                return action.initSort;
            } else {
                return "";
            }
            default:
                return state
    }
};

export const actualAttrFilters = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_ATTR_FILTERS:
            return {
                ...action.actualAttrFilters
            };
        case ACTIONS.UPDATE_ATTR_FILTERS:
            return {
                ...action.actualAttrFilters
            };
        case ACTIONS.GET_INIT_FILTERS:
            return {
                ...action.actualAttrFilters
            };
        default:
            return state
    }
};

export const actualStickerAttrFilters = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_STICKER_ATTR_FILTERS:
            return {
                ...action.actualStickerAttrFilters
            };
        case ACTIONS.UPDATE_STICKER_ATTR_FILTERS:
            return {
                ...action.actualStickerAttrFilters
            };
        case ACTIONS.GET_INIT_FILTERS:
            return {
                ...action.actualStickerAttrFilters
            };
        default:
            return state
    }
};

export const actualAttrNumberFilters = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_ATTR_NUMBER_FILTERS:
            return {
                ...action.actualAttrNumberFilters
            };
        case ACTIONS.UPDATE_NUMBER_ATTR_FILTERS:
            return {
                ...action.actualAttrNumberFilters
            };
        case ACTIONS.GET_INIT_FILTERS:
            return {
                ...action.actualAttrNumberFilters
            };
        default:
            return state
    }
};

export const priceFilter = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_PRICE_FILTERS:
            return {
                ...state, [action.priceFilterType]: action.price
            };
        default:
            return state
    }
};

export const allVisibility = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_ALL_VISIBILITY:
            return action.allVisibility;
        default:
            return state;
    }
};

export const matchToFilterData = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_MATCH_TO_DATA:
            return {
                ...action.matchToFilterData
            };
        default:
            return state;
    }
};

export const matchToFilter = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_MODEL:
            return {
                ...action.matchToFilter
            };
        case ACTIONS.UPDATE_MATCH_TO_FILTERS:
            return {
                ...action.matchToFilter
            };
        case ACTIONS.GET_INIT_FILTERS:
            return {
                ...action.matchToFilter
            };
        case ACTIONS.CLEAR_MATCH_TO_FILTERS:
            return {
                ...action.matchToFilter
            };
        default:
            return state;
    }
};

export const matchToFilterCounters = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_MATCH_TO_FILTER_COUNTERS:
            OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, action.matchToFilterCounterData, "match-to-tree");
            return {
                ...action.matchToFilterCounterData
            };
        default:
            return state;
    }
};


export const filterModalOpened = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_OPENED_FILTER_MODAL:
            return action.opened;
        default:
            return state;
    }
};

export const selectedOneTimePrices = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_ONE_TIME_PRICE:
            let newState = {};
            newState[action.id] = !state[action.id];
            return Object.assign({}, state, newState);
        case ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF:
            const parsedParameterObjectArray = OnlineUtils.parseOneTimeCostPricesUrlParameter();
            if (!parsedParameterObjectArray.length) {
                return {};
            }
            const cmsConfFromUrl = action.cmsConf && action.cmsConf.filter(conf => parsedParameterObjectArray.find(param => param.to == conf.to && param.from == conf.from));
            const newState2 = {};
            cmsConfFromUrl.map(value => newState2[value.id] = true);
            return Object.assign({}, state, newState2);
        case ACTIONS.CLEAR_ONE_TIME_PRICES:
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("oneTimeCost", false)
            return {};
        default:
            return state;
    }
};

export const selectedMaxMonthlyPrice = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_MAX_MONTHLY_PRICE:
            return {
                [action.id]: true
            };
        case ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
            const urlParameter = OnlineUtils.getParameterValueFromUrl("maxMonthlyCost");
            const monthlyPriceArray = action.cmsConf.map(c => c.to);
            const selectedPriceByUrl = OnlineUtils.closest(urlParameter, monthlyPriceArray);
            const selectedObject = action.cmsConf.filter(conf => conf.to === selectedPriceByUrl);
            const newState = {};

            selectedObject.map(value => newState[value.id] = true);
            return Object.assign({}, state, newState);
        case ACTIONS.CLEAR_MONTHLY_PRICES:
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", false);
            return {};
        default:
            return state;
    }
};

export const searchValue = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SEARCH_DEVICE_VALUE:
            return action.searchValue;
        default:
            return state
    }
};

export const productsFilter = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_PRODUCTS_FILTER:
            if (action.productsFilter) {
                return action.productsFilter;
            }
            return state;
        default:
            return state
    }
};