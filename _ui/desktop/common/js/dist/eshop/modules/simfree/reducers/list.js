define(["exports", "../actionTypes", "eshop/utils/OnlineUtils"], function(_exports, ACTIONS, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.productsFilter = _exports.searchValue = _exports.selectedMaxMonthlyPrice = _exports.selectedOneTimePrices = _exports.filterModalOpened = _exports.matchToFilterCounters = _exports.matchToFilter = _exports.matchToFilterData = _exports.allVisibility = _exports.priceFilter = _exports.actualAttrNumberFilters = _exports.actualStickerAttrFilters = _exports.actualAttrFilters = _exports.selectedSort = _exports.selectedColor = _exports.selectedCategoryName = _exports.selectedCategory = _exports.initiallyFiltered = _exports.currentPage = _exports.selectedProducer = _exports.filterConfiguration = _exports.categories = _exports.products = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var products = function products() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_ALL_PRODUCTS:
                return action.products;

            case ACTIONS.FILTER_ACTION_IDENTIFIER:
                return action.products;

            case ACTIONS.SET_SELECTED_VARIANT_ON_LIST:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, "data", action.products));

            default:
                return state;
        }
    };

    _exports.products = products;

    var categories = function categories() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_PRODUCTS_TREES:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.categories = categories;

    var filterConfiguration = function filterConfiguration() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_FILTER_CONFIGURATION:
                return action.filterConfiguration;

            case ACTIONS.GET_INIT_FILTERS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, "categoryFilter", action.filters));

            case ACTIONS.GET_FILTERS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, "categoryFilter", action.filters));

            case ACTIONS.SET_STICKER_FILTER:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, "stickerFilter", action.filters));

            default:
                return state;
        }
    };

    _exports.filterConfiguration = filterConfiguration;

    var selectedProducer = function selectedProducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.selectedProducer = selectedProducer;

    var currentPage = function currentPage() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_CURRENT_PAGE:
                return action.payload;

            case ACTIONS.GET_ALL_PRODUCTS:
                return action.products && action.products.currentPage ? action.products.currentPage : 1;

            default:
                return state;
        }
    };

    _exports.currentPage = currentPage;

    var initiallyFiltered = function initiallyFiltered() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_ALL_PRODUCTS:
                return true;

            default:
                return state;
        }
    };

    _exports.initiallyFiltered = initiallyFiltered;

    function checkProducer(configuration, initProducer) {
        var result = false;
        configuration.producerFilter.map(function(producer) {
            if (producer.name === initProducer) {
                result = true;
                return;
            }
        });
        return result;
    }

    function checkSort(configuration, initSort) {
        return configuration && configuration.sortDefinition && configuration.sortDefinition.length && configuration.sortDefinition.findIndex(function(sort) {
            return sort.value === initSort;
        }) !== -1;
    }

    var selectedCategory = function selectedCategory() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : decodeURI(_OnlineUtils.default.getParameterValueFromUrl("selectedCategory")) || "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_CATEGORY:
                if (action.selectedCategory) return action.selectedCategory;
                return state;

            case ACTIONS.GET_PRODUCTS_TREES:
                return action.initCategory ? action.initCategory : state;

            default:
                return state;
        }
    };

    _exports.selectedCategory = selectedCategory;

    var selectedCategoryName = function selectedCategoryName() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_CATEGORY:
                if (action.selectedCategoryName) return action.selectedCategoryName;
                return state;

            default:
                return state;
        }
    };

    _exports.selectedCategoryName = selectedCategoryName;

    var selectedColor = function selectedColor() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_COLOR:
                return action.selectedColor;

            default:
                return state;
        }
    };

    _exports.selectedColor = selectedColor;

    var selectedSort = function selectedSort() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

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
                    return state;
        }
    };

    _exports.selectedSort = selectedSort;

    var actualAttrFilters = function actualAttrFilters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_ATTR_FILTERS:
                return _objectSpread({}, action.actualAttrFilters);

            case ACTIONS.UPDATE_ATTR_FILTERS:
                return _objectSpread({}, action.actualAttrFilters);

            case ACTIONS.GET_INIT_FILTERS:
                return _objectSpread({}, action.actualAttrFilters);

            default:
                return state;
        }
    };

    _exports.actualAttrFilters = actualAttrFilters;

    var actualStickerAttrFilters = function actualStickerAttrFilters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_STICKER_ATTR_FILTERS:
                return _objectSpread({}, action.actualStickerAttrFilters);

            case ACTIONS.UPDATE_STICKER_ATTR_FILTERS:
                return _objectSpread({}, action.actualStickerAttrFilters);

            case ACTIONS.GET_INIT_FILTERS:
                return _objectSpread({}, action.actualStickerAttrFilters);

            default:
                return state;
        }
    };

    _exports.actualStickerAttrFilters = actualStickerAttrFilters;

    var actualAttrNumberFilters = function actualAttrNumberFilters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_ATTR_NUMBER_FILTERS:
                return _objectSpread({}, action.actualAttrNumberFilters);

            case ACTIONS.UPDATE_NUMBER_ATTR_FILTERS:
                return _objectSpread({}, action.actualAttrNumberFilters);

            case ACTIONS.GET_INIT_FILTERS:
                return _objectSpread({}, action.actualAttrNumberFilters);

            default:
                return state;
        }
    };

    _exports.actualAttrNumberFilters = actualAttrNumberFilters;

    var priceFilter = function priceFilter() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_PRICE_FILTERS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.priceFilterType, action.price));

            default:
                return state;
        }
    };

    _exports.priceFilter = priceFilter;

    var allVisibility = function allVisibility() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_ALL_VISIBILITY:
                return action.allVisibility;

            default:
                return state;
        }
    };

    _exports.allVisibility = allVisibility;

    var matchToFilterData = function matchToFilterData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_MATCH_TO_DATA:
                return _objectSpread({}, action.matchToFilterData);

            default:
                return state;
        }
    };

    _exports.matchToFilterData = matchToFilterData;

    var matchToFilter = function matchToFilter() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_MODEL:
                return _objectSpread({}, action.matchToFilter);

            case ACTIONS.UPDATE_MATCH_TO_FILTERS:
                return _objectSpread({}, action.matchToFilter);

            case ACTIONS.GET_INIT_FILTERS:
                return _objectSpread({}, action.matchToFilter);

            case ACTIONS.CLEAR_MATCH_TO_FILTERS:
                return _objectSpread({}, action.matchToFilter);

            default:
                return state;
        }
    };

    _exports.matchToFilter = matchToFilter;

    var matchToFilterCounters = function matchToFilterCounters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.UPDATE_MATCH_TO_FILTER_COUNTERS:
                OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, action.matchToFilterCounterData, "match-to-tree");
                return _objectSpread({}, action.matchToFilterCounterData);

            default:
                return state;
        }
    };

    _exports.matchToFilterCounters = matchToFilterCounters;

    var filterModalOpened = function filterModalOpened() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_OPENED_FILTER_MODAL:
                return action.opened;

            default:
                return state;
        }
    };

    _exports.filterModalOpened = filterModalOpened;

    var selectedOneTimePrices = function selectedOneTimePrices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_ONE_TIME_PRICE:
                var newState = {};
                newState[action.id] = !state[action.id];
                return Object.assign({}, state, newState);

            case ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF:
                var parsedParameterObjectArray = _OnlineUtils.default.parseOneTimeCostPricesUrlParameter();

                if (!parsedParameterObjectArray.length) {
                    return {};
                }

                var cmsConfFromUrl = action.cmsConf && action.cmsConf.filter(function(conf) {
                    return parsedParameterObjectArray.find(function(param) {
                        return param.to == conf.to && param.from == conf.from;
                    });
                });
                var newState2 = {};
                cmsConfFromUrl.map(function(value) {
                    return newState2[value.id] = true;
                });
                return Object.assign({}, state, newState2);

            case ACTIONS.CLEAR_ONE_TIME_PRICES:
                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("oneTimeCost", false);

                return {};

            default:
                return state;
        }
    };

    _exports.selectedOneTimePrices = selectedOneTimePrices;

    var selectedMaxMonthlyPrice = function selectedMaxMonthlyPrice() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_MAX_MONTHLY_PRICE:
                return babelHelpers.defineProperty({}, action.id, true);

            case ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
                var urlParameter = _OnlineUtils.default.getParameterValueFromUrl("maxMonthlyCost");

                var monthlyPriceArray = action.cmsConf.map(function(c) {
                    return c.to;
                });

                var selectedPriceByUrl = _OnlineUtils.default.closest(urlParameter, monthlyPriceArray);

                var selectedObject = action.cmsConf.filter(function(conf) {
                    return conf.to === selectedPriceByUrl;
                });
                var newState = {};
                selectedObject.map(function(value) {
                    return newState[value.id] = true;
                });
                return Object.assign({}, state, newState);

            case ACTIONS.CLEAR_MONTHLY_PRICES:
                _OnlineUtils.default.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", false);

                return {};

            default:
                return state;
        }
    };

    _exports.selectedMaxMonthlyPrice = selectedMaxMonthlyPrice;

    var searchValue = function searchValue() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SEARCH_DEVICE_VALUE:
                return action.searchValue;

            default:
                return state;
        }
    };

    _exports.searchValue = searchValue;

    var productsFilter = function productsFilter() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_PRODUCTS_FILTER:
                if (action.productsFilter) {
                    return action.productsFilter;
                }

                return state;

            default:
                return state;
        }
    };

    _exports.productsFilter = productsFilter;
});
//# sourceMappingURL=list.js.map