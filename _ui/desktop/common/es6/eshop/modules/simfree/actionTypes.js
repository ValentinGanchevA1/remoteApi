export const FILTER_ACTION_IDENTIFIER = "filterSelect";


export const GET_DEVICE_DATA_BY_CODE = "simfree/deviceData/get";
export const GET_ALL_PRODUCTS = "simfree/productList/getAll";
export const GET_LAST_PICKUP_POS = "simfree/pickup/pos/last";
export const CHECK_IF_ACTIVE_PICKUP_FORM_SHELF = "simfree/pickup/fromShelf/active";
export const SET_SELECTED_BASE_DEVICE_CODE = "simfree/selectedBaseDeviceCode/set";
export const SET_SELECTED_VARIANT = "simfree/selectedVariant/set";
export const SET_SELECTED_VARIANT_OBJECT = "simfree/selectedVariantObject/set";
export const SET_SELECTED_DEVICE_TAB = "simfree/selectedDeviceTab/set";
export const SET_SELECTED_VARIANT_ON_LIST = "simfree/selectedVariantOnList/set";
export const SET_CHOSEN_IMAGE_INDEX = "simfree/chosenImageIndex/set";
export const GET_PRODUCTS_TREES = "simfree/productTree/get";
export const SET_REVIEW_RATING = "simfree/review/rating/set";
export const SET_REVIEW_LOGIN = "simfree/review/login/set";
export const SET_REVIEW_MESSAGE = "simfree/review/message/set";
export const SEND_REVIEW = "simfree/review/send";
export const FETCH_FILTER_CONFIGURATION = "simfree/filterConfiguration/get";
export const GET_FILTERS = "simfree/filters/get";
export const SET_SELECTED_PRODUCER = "simfree/" + FILTER_ACTION_IDENTIFIER + "Producer/set";
export const SET_SELECTED_COLOR = "simfree/" + FILTER_ACTION_IDENTIFIER + "Color/set";
export const SET_SELECTED_CATEGORY = "simfree/" + FILTER_ACTION_IDENTIFIER + "/Category/set";
export const SET_SELECTED_SORT = "simfree/" + FILTER_ACTION_IDENTIFIER + "/Sort/set";
export const SET_SELECTED_ALL_VISIBILITY = "simfree/" + FILTER_ACTION_IDENTIFIER + "/AllVisibility/set";
export const SET_OPENED_FILTER_MODAL = "simfree/" + FILTER_ACTION_IDENTIFIER + "/openedFilterModal/set";
export const SET_SEARCH_DEVICE_VALUE = "simfree/" + FILTER_ACTION_IDENTIFIER + "/searchDeviceValue/set";
export const SET_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrFilters/set";
export const CLEAR_MATCH_TO_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/matchToFilters/clear";
export const SET_ATTR_NUMBER_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrNumberFilters/set";
export const SET_PRICE_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/priceFilters/set";
export const CLEAR_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrFilters/clear";
export const ADD_TO_CART = "simfree/cart/add";
export const UPDATE_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrFilters/update";
export const UPDATE_NUMBER_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrNumberFilters/update";
export const UPDATE_MATCH_TO_FILTER_COUNTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/matchToFiltersCounter/update";
export const UPDATE_MATCH_TO_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/matchToFilters/update";
export const GET_INIT_FILTERS = "simfree/init/filters/get";
export const REGISTER_OFFER_TYPES_CMS_CONF = "simfree/productList/cms/register";
export const SELECT_OFFER_TYPE = "simfree/productList/offerType/select";
export const GET_MATCH_TO_DATA = "simfree/" + FILTER_ACTION_IDENTIFIER + "/matchToFilter/get";
export const SET_SELECTED_VARIANT_ON_RECOMMENDED = "simfree/selectedVariantOnRecommended/set";
export const SELECT_ONE_TIME_PRICE = "simfree/productList/oneTimePrice/select";
export const SELECT_MAX_MONTHLY_PRICE = "simfree/productList/oneMaxMonthlyPrice/select";
export const REGISTER_ONE_TIME_PRICE_CMS_CONF = "simfree/productList/oneTimePrice/cms/register";
export const REGISTER_MAX_MONTHLY_PRICE_CMS_CONF = "simfree/productList/maxMonthlyPrice/cms/register";
export const SET_SELECTED_MODEL = "simfree/" + FILTER_ACTION_IDENTIFIER + "/Model/set";
export const CHANGE_CURRENT_PAGE = "simfree/changeCurrentPage/listing";
export const VERIFICATION_NEEDED = "simfree/verificationNeeded";
export const OPEN_VERIFICATION_MODAL = "simfree/openVerificationModal";
export const CLOSE_VERIFICATION_MODAL = "simfree/closeVerificationModal";

export const SET_STICKER_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrStickerFilters/set";
export const UPDATE_STICKER_ATTR_FILTERS = "simfree/" + FILTER_ACTION_IDENTIFIER + "/attrStickerFilters/update";
export const SET_STICKER_FILTER = "simfree/" + FILTER_ACTION_IDENTIFIER + "/stickerFilters/set";
export const UPDATE_ADD_TO_CART_ERROR = "simfree/change/errors";
export const ADD_TO_CART_START = "simfree/cart/post";
export const ADD_TO_CART_SUCCESS = "simfree/cart/post_success";
export const CLEAR_ONE_TIME_PRICES = "simfree/oneTimePrices/clear";
export const CLEAR_MONTHLY_PRICES = "simfree/monthlyPrices/clear";
export const SET_DELIVERY_AND_PAYMENT_COMPONENT_UID = "simfree/uid/set";
export const GET_DELIVERY_AND_PAYMENT_HTML = "simfree/html/get";

export const UPDATE_COMPARATOR_DEVICES = "simfree/comparator/updateComparatorDevices";
export const FETCH_COMPARATOR_CONFIG = "simfree/comparator/fetchComparatorConfig";
export const FETCH_MODELS_FOR_BRAND = "simfree/comparator/fetchModelsForBrand";
export const FETCH_DEVICE_BRANDS = "simfree/comparator/fetchDeviceBrands";
export const FETCH_PRODUCERS = "simfree/comparator/getProducers";
export const GET_SELECTED_MODEL = "simfree/comparator/getSelectedModel";
export const GET_SELECTED_PRODUCER = "simfree/comparator/getSelectedProducer";
export const DELETE_DEVICE = "simfree/comparator/deleteDevice";
export const SET_IS_COMPARATOR_CATEGORY = "simfree/comparator/setIsComparatorCategory";
export const SET_COMPARATOR_ERROR_CODE = "simfree/comparator/setComparatorErrorCode";
export const CLEAR_MODELS_FOR_BRAND = "simfree/comparator/clearModelsForBrand";

export const SHOW_RATING_MESSAGE = "simfree/details/showRatingMessage";

export const GET_PRODUCT_STORAGE_CAPACITY = "simfree/getStorageCapacity";

export const SET_CASH_INVOICE_LIMIT = "simfree/setCashInvoiceLimit";
export const SET_CART_INVOICE_VALUE = "simfree/setCartInvoiceValue";

export const SET_PRODUCTS_FILTER = "simfree/" + FILTER_ACTION_IDENTIFIER + "/productsFilter/set";
export const SET_DELIVERY_METHODS = "simfree/deliveryMethods/set";