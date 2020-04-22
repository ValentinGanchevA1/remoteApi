define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "../checkout/remoteApi"], function(_exports, _OraApiUtils, _jquery, _remoteApi) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    var MAGNUM_PATH = "/magnum2";
    var documentsComponent = (0, _jquery.default)('#documentsComponentId').val();
    var convergentMigrationVariantsComponent = (0, _jquery.default)('#convergentMigrationVariantsId').val();
    var _default = {
        getOrangeLoveDevices: function getOrangeLoveDevices(deviceListComponentPk, propositionCode, installmentsOption) {
            var data = {
                deviceListComponentPk: deviceListComponentPk,
                propositionCode: propositionCode,
                installmentsOption: installmentsOption
            };
            return (0, _OraApiUtils.get)(MAGNUM_PATH + "/getRecommendedDevices", data);
        },
        getOrangeLovePropositions: function getOrangeLovePropositions(propositionComponentPk, preZipCode, postalCode, cityId, cityName, streetId, streetName, estateNumber, apartmentNumber, selectedFixTransaction, selectedMobileTransaction, selectedLoyaltyPeriod) {
            var url = MAGNUM_PATH + "/getPropositions?propositionComponentPk=" + propositionComponentPk;
            var offerSelectionData = {
                loyaltyDuration: selectedLoyaltyPeriod,
                transactions: [selectedFixTransaction, selectedMobileTransaction]
            };

            if (cityId) {
                offerSelectionData.addressData = {
                    preZipCode: preZipCode,
                    postalCode: postalCode,
                    cityId: cityId,
                    town: cityName,
                    streetId: streetId,
                    line1: streetName,
                    line2: estateNumber,
                    appartmentNo: apartmentNumber
                };
            }

            return (0, _OraApiUtils.postJsonObject)(url, offerSelectionData);
        },
        getPossibleTransactions: function getPossibleTransactions(addressData, availableBundleTypes, transactionComponentPk) {
            var transactionData = {
                addressData: {
                    preZipCode: addressData.preZipCode,
                    postalCode: addressData.postalCode,
                    cityId: addressData.cityId,
                    town: addressData.cityName,
                    streetId: addressData.streetId,
                    line1: addressData.streetName,
                    line2: addressData.estateNumber,
                    appartmentNo: addressData.apartmentNumber
                },
                bundleTypes: availableBundleTypes
            };
            return (0, _OraApiUtils.postJsonObject)(MAGNUM_PATH + "/getPossibleTransactions?transactionComponentPk=" + transactionComponentPk, transactionData);
        },
        fetchDocuments: function fetchDocuments() {
            var templatesIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return (0, _OraApiUtils.post)((0, _remoteApi.prepareUrl)(MAGNUM_PATH + "/getLandingPageDocuments"), {
                componentId: documentsComponent,
                templates: templatesIds
            });
        },
        getMigrationOffers: function getMigrationOffers() {
            return (0, _OraApiUtils.get)((0, _remoteApi.prepareUrl)("/magnum/migration/offers"), {
                componentPk: convergentMigrationVariantsComponent
            });
        },
        getNextMigrationOffer: function getNextMigrationOffer() {
            return (0, _OraApiUtils.get)((0, _remoteApi.prepareUrl)("/magnum/migration/nextOffer"), {
                componentPk: convergentMigrationVariantsComponent
            });
        },
        selectMigrationOffer: function selectMigrationOffer(offerType) {
            return (0, _OraApiUtils.postJsonObject)((0, _remoteApi.prepareUrl)("/magnum/migration/select"), offerType);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map