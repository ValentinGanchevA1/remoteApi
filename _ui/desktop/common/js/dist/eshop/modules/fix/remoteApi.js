define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "../checkout/constants/CartEntryTypeEnum"], function(_exports, _OraApiUtils, _jquery, _CartEntryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    var CUSTOMER_SERVICES_PATH = "/customer/services";
    var CUSTOMER_SERVICE_DETAILS_PATH = "/customer/serviceDetails";
    var MIGRATION_MODE_PATH = "/fix/migration/migration-mode";
    var CHECK_WWT_DATA_PATH = "/wwtData/additionalData";
    var DECLARE_KNA_PATH = "/fix/kna/declare/";
    var FETCH_VOIP_NUMBERS = "/fix/voip/fetchNumbers";
    var SELECT_VOIP_NUMBER = "/fix/voip/select";
    var FIX_ADD_TO_CART = "/fix/cart/add";
    var FIX_REMOVE_CART = "/fix/cart/remove";
    var IS_CART_EMPTY = "/fix/cart/empty";
    var MIGRATION_VARIANTS_PATH = "/fix/migration/migration-variants";
    var CLEAR_MIGRATION_DATA_PATH = "/fix/migration/clear";
    var SELECT_MIGRATION_VARIANT_PATH = "/fix/migration/migration";
    var REDIRECT_TO_MIGRATION_MAGNUM = "/oferty-migracyjne";
    var DUPLICATE_ORDER_PATH = "/fix/orders/verification/ordersExist";
    var DUPLICATE_ORDER_PATH_NO_CACHE = "/fix/orders/verification/ordersExistNoCache";
    var TV_PACKAGES_PATH = "/fix/cart/data/tvPackages";

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    }; //to trzeba do jakiegos shared folderu przerzucic


    var component = (0, _jquery.default)('#propositionCarouselId').val();
    var migrationVariantsComponent = (0, _jquery.default)('#migrationVariantsId').val();
    var filterId = (0, _jquery.default)('#filterId').val();
    var filterComponentId = (0, _jquery.default)('#filterComponentId').val();
    var documentsComponent = (0, _jquery.default)('#documentsComponentId').val();
    var customerServicesComponent = (0, _jquery.default)('#customerServicesComponentId').val();
    var voipModalComponent = (0, _jquery.default)('#voipModalComponentId').val();

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    var _default = {
        getDocuments: function getDocuments() {
            var templatesIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return (0, _OraApiUtils.post)(prepareUrl("/documents/getDocumentsByFilterAndComponent"), {
                filterId: filterId,
                componentId: documentsComponent,
                templates: templatesIds
            });
        },
        getOffers: function getOffers(addressObject, loyalty) {
            var customerServicesHashCode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var reset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/fix/offer/offers"), {
                loyalty: loyalty,
                filterPk: filterId,
                filterComponentPk: filterComponentId,
                componentPk: component,
                addressData: addressObject,
                customerServicesHashCode: customerServicesHashCode,
                reset: reset
            });
        },
        declareKna: function declareKna(knaNumber) {
            return (0, _OraApiUtils.get)(prepareUrl(DECLARE_KNA_PATH + knaNumber));
        },
        getMigrationMode: function getMigrationMode(bundleTypes) {
            return (0, _OraApiUtils.post)(prepareUrl(MIGRATION_MODE_PATH + "?bundleTypes=" + bundleTypes), {});
        },
        checkWwtAdditionalData: function checkWwtAdditionalData(addressObject) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(CHECK_WWT_DATA_PATH), addressObject);
        },
        getCustomerServiceList: function getCustomerServiceList() {
            return (0, _OraApiUtils.post)(prepareUrl(CUSTOMER_SERVICES_PATH), {
                componentPk: customerServicesComponent
            });
        },
        fetchVoipNumbers: function fetchVoipNumbers(cityId) {
            return (0, _OraApiUtils.get)(prepareUrl(FETCH_VOIP_NUMBERS), {
                cmpId: voipModalComponent,
                cityId: cityId
            });
        },
        saveSelectedVoipNumber: function saveSelectedVoipNumber(number) {
            return (0, _OraApiUtils.post)(prepareUrl(SELECT_VOIP_NUMBER + "?selectedNumber=" + number));
        },
        addOfferToCart: function addOfferToCart(id, secondaryChoiceOffer) {
            return (0, _OraApiUtils.post)(prepareUrl(FIX_ADD_TO_CART + "?propositionId=" + id + "&secondaryChoiceOffer=" + secondaryChoiceOffer), {});
        },
        removeFromCart: function removeFromCart() {
            return (0, _OraApiUtils.get)(prepareUrl(FIX_REMOVE_CART), {});
        },
        getTvPackages: function getTvPackages(propositionId) {
            return (0, _OraApiUtils.get)(prepareUrl(TV_PACKAGES_PATH + "?propositionId=" + propositionId), {});
        },
        isCartEmpty: function isCartEmpty() {
            return (0, _OraApiUtils.get)(prepareUrl(IS_CART_EMPTY));
        },
        getServiceDetails: function getServiceDetails(serviceInstanceId, forceReload) {
            return (0, _OraApiUtils.get)(prepareUrl(CUSTOMER_SERVICE_DETAILS_PATH), {
                cimId: getParameterByName("cimId"),
                des: getParameterByName("des"),
                serviceInstanceId: serviceInstanceId,
                forceReload: forceReload
            });
        },
        getMigrationVariants: function getMigrationVariants(addressObject) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(MIGRATION_VARIANTS_PATH), {
                componentPk: migrationVariantsComponent,
                addressData: addressObject
            });
        },
        clearMigrationData: function clearMigrationData() {
            return (0, _OraApiUtils.post)(prepareUrl(CLEAR_MIGRATION_DATA_PATH), {});
        },
        selectMigrationVariant: function selectMigrationVariant(migrationVariantPk, url) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(SELECT_MIGRATION_VARIANT_PATH), {
                migrationVariantPk: migrationVariantPk,
                url: url
            });
        },
        redirectToMigration: function redirectToMigration(designationNumber, factoryName, convergentProductId, redirectUrl) {
            if (factoryName === _CartEntryTypeEnum.default.CONVERGENT) {
                redirectUrl = REDIRECT_TO_MIGRATION_MAGNUM;
            }

            _jquery.default.ajax({
                url: "/konsola-konsultanta/showMigrationVariants",
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                headers: {
                    'CSRFToken': (0, _jquery.default)("#CSRFToken").val()
                },
                data: {
                    redirectUrl: redirectUrl,
                    designationNumber: designationNumber,
                    factoryName: factoryName,
                    convergentProductId: convergentProductId
                },
                success: function success(result) {
                    window.location.assign(result);
                }
            });
        },
        getDuplicateOrders: function getDuplicateOrders(oraFixOrderVerificationForm) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DUPLICATE_ORDER_PATH), oraFixOrderVerificationForm);
        },
        getDuplicateOrdersNoCache: function getDuplicateOrdersNoCache(oraFixOrderVerificationForm) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DUPLICATE_ORDER_PATH_NO_CACHE), oraFixOrderVerificationForm);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map