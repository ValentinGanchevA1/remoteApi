import {
    get,
    mock,
    mockRandomError,
    post,
    postJsonObject
} from "eshop/flux/utils/OraApiUtils";
import $ from "jquery";
import CartEntryType from "../checkout/constants/CartEntryTypeEnum";

const CUSTOMER_SERVICES_PATH = "/customer/services";
const CUSTOMER_SERVICE_DETAILS_PATH = "/customer/serviceDetails";
const MIGRATION_MODE_PATH = "/fix/migration/migration-mode";
const CHECK_WWT_DATA_PATH = "/wwtData/additionalData";
const DECLARE_KNA_PATH = "/fix/kna/declare/";
const FETCH_VOIP_NUMBERS = "/fix/voip/fetchNumbers";
const SELECT_VOIP_NUMBER = "/fix/voip/select";
const FIX_ADD_TO_CART = "/fix/cart/add";
const FIX_REMOVE_CART = "/fix/cart/remove";
const IS_CART_EMPTY = "/fix/cart/empty";
const MIGRATION_VARIANTS_PATH = "/fix/migration/migration-variants";
const CLEAR_MIGRATION_DATA_PATH = "/fix/migration/clear";
const SELECT_MIGRATION_VARIANT_PATH = "/fix/migration/migration";
const REDIRECT_TO_MIGRATION_MAGNUM = "/oferty-migracyjne";
const DUPLICATE_ORDER_PATH = "/fix/orders/verification/ordersExist";
const DUPLICATE_ORDER_PATH_NO_CACHE = "/fix/orders/verification/ordersExistNoCache";
const TV_PACKAGES_PATH = "/fix/cart/data/tvPackages";


const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url //to trzeba do jakiegos shared folderu przerzucic


const component = $('#propositionCarouselId').val();
const migrationVariantsComponent = $('#migrationVariantsId').val();
const filterId = $('#filterId').val();
const filterComponentId = $('#filterComponentId').val();
const documentsComponent = $('#documentsComponentId').val();
const customerServicesComponent = $('#customerServicesComponentId').val();
const voipModalComponent = $('#voipModalComponentId').val();

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

export default {
    getDocuments: (templatesIds = []) => {
        return post(prepareUrl("/documents/getDocumentsByFilterAndComponent"), {
            filterId: filterId,
            componentId: documentsComponent,
            templates: templatesIds
        });
    },
    getOffers: (addressObject, loyalty, customerServicesHashCode = null, reset = false) => {
        return postJsonObject(prepareUrl("/fix/offer/offers"), {
            loyalty: loyalty,
            filterPk: filterId,
            filterComponentPk: filterComponentId,
            componentPk: component,
            addressData: addressObject,
            customerServicesHashCode: customerServicesHashCode,
            reset: reset
        });
    },
    declareKna: (knaNumber) => get(prepareUrl(DECLARE_KNA_PATH + knaNumber)),
    getMigrationMode: (bundleTypes) => {
        return post(prepareUrl(MIGRATION_MODE_PATH + "?bundleTypes=" + bundleTypes), {});
    },
    checkWwtAdditionalData: (addressObject) => {
        return postJsonObject(prepareUrl(CHECK_WWT_DATA_PATH), addressObject);
    },
    getCustomerServiceList: () => {
        return post(prepareUrl(CUSTOMER_SERVICES_PATH), {
            componentPk: customerServicesComponent
        });
    },
    fetchVoipNumbers: (cityId) => get(
        prepareUrl(FETCH_VOIP_NUMBERS), {
            cmpId: voipModalComponent,
            cityId
        }
    ),
    saveSelectedVoipNumber: (number) => {
        return post(prepareUrl(SELECT_VOIP_NUMBER + "?selectedNumber=" + number));
    },
    addOfferToCart: (id, secondaryChoiceOffer) => {
        return post(prepareUrl(FIX_ADD_TO_CART + "?propositionId=" + id + "&secondaryChoiceOffer=" + secondaryChoiceOffer), {});
    },
    removeFromCart: () => {
        return get(prepareUrl(FIX_REMOVE_CART), {});
    },
    getTvPackages: (propositionId) => {
        return get(prepareUrl(TV_PACKAGES_PATH + "?propositionId=" + propositionId), {});
    },
    isCartEmpty: () => {
        return get(prepareUrl(IS_CART_EMPTY));
    },
    getServiceDetails: (serviceInstanceId, forceReload) => {
        return get(prepareUrl(CUSTOMER_SERVICE_DETAILS_PATH), {
            cimId: getParameterByName("cimId"),
            des: getParameterByName("des"),
            serviceInstanceId: serviceInstanceId,
            forceReload: forceReload
        });
    },
    getMigrationVariants: (addressObject) => {
        return postJsonObject(prepareUrl(MIGRATION_VARIANTS_PATH), {
            componentPk: migrationVariantsComponent,
            addressData: addressObject
        });
    },
    clearMigrationData: () => {
        return post(prepareUrl(CLEAR_MIGRATION_DATA_PATH), {});
    },
    selectMigrationVariant: (migrationVariantPk, url) => {
        return postJsonObject(prepareUrl(SELECT_MIGRATION_VARIANT_PATH), {
            migrationVariantPk: migrationVariantPk,
            url: url
        });
    },
    redirectToMigration: (designationNumber, factoryName, convergentProductId, redirectUrl) => {
        if (factoryName === CartEntryType.CONVERGENT) {
            redirectUrl = REDIRECT_TO_MIGRATION_MAGNUM;
        }
        $.ajax({
            url: "/konsola-konsultanta/showMigrationVariants",
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            headers: {
                'CSRFToken': $("#CSRFToken").val()
            },
            data: {
                redirectUrl: redirectUrl,
                designationNumber: designationNumber,
                factoryName: factoryName,
                convergentProductId: convergentProductId
            },
            success: function(result) {
                window.location.assign(result);
            }
        });
    },
    getDuplicateOrders: (oraFixOrderVerificationForm) => {
        return postJsonObject(prepareUrl(DUPLICATE_ORDER_PATH), oraFixOrderVerificationForm);
    },
    getDuplicateOrdersNoCache: (oraFixOrderVerificationForm) => {
        return postJsonObject(prepareUrl(DUPLICATE_ORDER_PATH_NO_CACHE), oraFixOrderVerificationForm);
    }
};