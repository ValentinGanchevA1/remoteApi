import {
    get,
    getPdf,
    post,
    postJsonObject,
    postJsonObjectNoResult,
    put
} from "eshop/flux/utils/OraApiUtils";
import $ from "jquery";
import {
    prepareUrl
} from "../checkout/remoteApi";

const MAGNUM_PATH = "/magnum2";

const documentsComponent = $('#documentsComponentId').val();
const convergentMigrationVariantsComponent = $('#convergentMigrationVariantsId').val();

export default {
    getOrangeLoveDevices: (deviceListComponentPk, propositionCode, installmentsOption) => {
        const data = {
            deviceListComponentPk: deviceListComponentPk,
            propositionCode: propositionCode,
            installmentsOption: installmentsOption
        };
        return get(MAGNUM_PATH + "/getRecommendedDevices", data);
    },

    getOrangeLovePropositions: (propositionComponentPk, preZipCode, postalCode, cityId, cityName, streetId, streetName, estateNumber, apartmentNumber, selectedFixTransaction, selectedMobileTransaction, selectedLoyaltyPeriod) => {
        const url = MAGNUM_PATH + "/getPropositions?propositionComponentPk=" + propositionComponentPk;
        const offerSelectionData = {
            loyaltyDuration: selectedLoyaltyPeriod,
            transactions: [
                selectedFixTransaction, selectedMobileTransaction
            ]
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

        return postJsonObject(url, offerSelectionData);
    },


    getPossibleTransactions: (addressData, availableBundleTypes, transactionComponentPk) => {
        const transactionData = {
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
        return postJsonObject(MAGNUM_PATH + "/getPossibleTransactions?transactionComponentPk=" + transactionComponentPk, transactionData);
    },


    fetchDocuments: (templatesIds = []) => {
        return post(prepareUrl(MAGNUM_PATH + "/getLandingPageDocuments"), {
            componentId: documentsComponent,
            templates: templatesIds
        });
    },

    getMigrationOffers: () => {
        return get(prepareUrl("/magnum/migration/offers"), {
            componentPk: convergentMigrationVariantsComponent
        });
    },

    getNextMigrationOffer: () => {
        return get(prepareUrl("/magnum/migration/nextOffer"), {
            componentPk: convergentMigrationVariantsComponent
        });
    },

    selectMigrationOffer: (offerType) => {
        return postJsonObject(prepareUrl("/magnum/migration/select"), offerType);
    }
};