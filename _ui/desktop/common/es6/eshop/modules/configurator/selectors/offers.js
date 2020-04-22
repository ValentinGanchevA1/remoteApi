import {
    createSelector
} from "Reselect";
import {
    getOffers
} from "./root";
import {
    hashFilters,
    mapRateplanIdsToJsonObject
} from "../utils";
import {
    getCheckMsisdnResult,
    getClientContext,
    getClientContextRole,
    getSelectedFilters,
    getSelectedFiltersB2B,
    getSelectedOfferType,
    getSelectedProcessTypeValue,
} from "./filters";
import {
    getAddTerminalToOfferBundleNo,
    getCartEntries,
    getContractRoleByBundleNo
} from "eshop/modules/cart/selectors";
import {
    getSalesChannel,
    isLogged
} from "eshop/modules/auth/selectors/authorization";
import OnlineUtils from "eshop/utils/OnlineUtils";

export const getOffersData = createSelector(getOffers, offers => offers && offers.data);
export const getOffersDocuments = createSelector(getOffers, offers => offers.documents);

export const getCalculatedContractRole = createSelector([getOffers, getSelectedProcessTypeValue, getCheckMsisdnResult, getSalesChannel], (offers, processType, msisdnCheckResult, salesChannel) => {
    let isWWW = salesChannel === "WWW";
    if ("RETENTION" === processType) {
        if (isWWW || (msisdnCheckResult && msisdnCheckResult.isPositive)) {
            return offers.contractRoleForRetention;
        } else {
            return [];
        }
    } else {
        return offers.contractRole;
    }
});

export const getNextContractRole = createSelector([getCalculatedContractRole, getClientContext, getClientContextRole, isLogged, getCartEntries, getSalesChannel], (calculatedContractRole, clientContext, clientContextRole, isLogged, cartEntries, salesChannel) => {
    let cartNotEmpty = (cartEntries || [])[0];
    let isWWW = salesChannel === "WWW";

    if (!isWWW || (isWWW && (isLogged || cartNotEmpty))) {
        return calculatedContractRole;
    } else if (clientContext) {
        return [clientContextRole];
    } else {
        return [];
    }
});

export const getContractRole = createSelector([getNextContractRole, getContractRoleByBundleNo, getAddTerminalToOfferBundleNo],
    (nextContractRole, existingContractRoleByBundleNo, addChangeTerminalForBundleNo) => {
        if (addChangeTerminalForBundleNo) {
            let existingRole = existingContractRoleByBundleNo[parseInt(addChangeTerminalForBundleNo)];
            return existingRole ? [existingRole] : [];
        } else {
            return nextContractRole;
        }
    });

export const getContractRoleInProgress = createSelector(getOffers, offers => offers.getContractRoleInProgress);

export const getFirstOfferFromProductFilter = createSelector(getOffers, offers => offers && offers.firstOfferFromProductFilter);

export const getOffersForCurrentFilters = createSelector([getOffersData, getSelectedFilters], (data, currentFilters) => data && data[hashFilters(currentFilters)]);
export const getOffersForCurrentFiltersB2B = createSelector([getOffersData, getSelectedFiltersB2B], (data, currentFilters) => currentFilters.map(singleFilter => data[hashFilters(singleFilter)]));

export const checkOffersForCurrentFilters = createSelector([getOffersData, getSelectedFiltersB2B], (data, currentFilters) => currentFilters.find(singleFilter => data[hashFilters(singleFilter)]));
export const checkOffersForCurrentIndexedFiltersB2B = index => createSelector([getOffersData, getSelectedFiltersB2B], (data, currentFilters) => data[hashFilters(currentFilters[index])]);
export const sortedOffersByBasePrice = createSelector(getOffersForCurrentFilters, data => data && data.sort((a, b) => a.payments.basePrice.originalGrossPrice - b.payments.basePrice.originalGrossPrice));
export const getOffersByCurrentFiltersForSelect = createSelector(sortedOffersByBasePrice, data => data && data.map(offer => ({
    value: offer.id,
    description: offer.rateplanName,
})) || []);

export const getRateplanIds = createSelector(getOffersForCurrentFilters, data => data && data.map(function(offer) {
    return offer.rateplanId;
}) || []);
export const getAvailableBaseRateplanIds = createSelector(getOffersForCurrentFilters, data => data && data.map(offer => offer.rateplanBaseProductId) || []);
export const getRateplanIdsObj = createSelector(getRateplanIds, data => mapRateplanIdsToJsonObject(data));
export const getBaseRatePlanIdByPropositionId = (propositionId) => createSelector(getOffersForCurrentFilters, data => {
    let selectedOffer = data.find(offer => offer.id === propositionId);
    return selectedOffer && selectedOffer.rateplanBaseProductId || "";
});

export const getOfferByPropositonIdForCurrentFilters = propositionId => createSelector(getOffersForCurrentFilters, offers => offers.find(offer => offer.id === propositionId));

export const getPropositionIdByRatePlanId = (rateplanBaseProductId, data) => {
    let selectedOffer = data && data.find(offer => offer.rateplanBaseProductId == rateplanBaseProductId);
    return selectedOffer && selectedOffer.rateplanBaseProductId && selectedOffer.id || ""
};
export const getPropositionIdsByRatePlanId = (rateplanBaseProductId, data) => {
    console.log("getPropositionIdsByRatePlanId ", rateplanBaseProductId, data);
    let selectedOffers = data && data.filter(offer => offer.rateplanBaseProductId == rateplanBaseProductId).map(offer => offer.id);
    return selectedOffers
};

export const getSelectedBaseRatePlanId = createSelector(getOffers, offers => offers.selectedRateplanBaseProductId);

export const getSelectedOfferId = createSelector(getOffers, offers => offers.selected);

export const getSelectedDeviceId = createSelector(getOffers, offers => offers.selectedDevice);

export const getSelectedDeviceInstalmentsCountValue = createSelector(getOffers, offers => offers.selectedDeviceInstalmentsCount);

export const getDeviceInstalmentsConfiguration = createSelector(getOffers, offers => offers.deviceInstalmentsConfiguration);

export const getDeviceInstalmentsCountValueByPropositionId = (propositionId) => createSelector(getOffersForCurrentFilters, data => {
    let selectedOffer = data.find(offer => offer.id === propositionId);
    return (selectedOffer && selectedOffer.physicalGoodsInPropositionData && selectedOffer.physicalGoodsInPropositionData.deviceInstalmentsCount) || "";
});

export const getDeviceInstalmentsConfigurationInContext = createSelector([getDeviceInstalmentsConfiguration, getSelectedOfferType, getSelectedProcessTypeValue], matchDeviceInstalmentsConfiguration);

export const getSelectedOffer = createSelector([getOffersForCurrentFilters, getSelectedOfferId, getSelectedBaseRatePlanId], (offers, offerId, servicePlanId) => {
    if ((offerId == undefined || offerId == null || offerId == "undefined" || offerId == "" || offerId == "null") && !!servicePlanId) {
        return offers && offers.find(o => o.rateplanBaseProductId == servicePlanId);
        //match offerId from servicePlan
    }
    return offers && offers.find(o => o.id === offerId);
});

export const getInstallmentCount = createSelector(getSelectedOffer, selectedOffer => {
    if (selectedOffer &&
        selectedOffer.deviceData &&
        selectedOffer.deviceData.inOffer &&
        selectedOffer.deviceData.inOffer.price) {
        return selectedOffer.deviceData.inOffer.price.base.devicePayments[0].monthTo;
    }
    return 0;
});
export const getSelectedOffersDeviceName = createSelector(getSelectedOffer, selectedOffer =>
    selectedOffer && selectedOffer.deviceData && selectedOffer.deviceData);

export const getPhysicalGoodsInPropositionData = createSelector(getSelectedOffer,
    offer => offer && offer.physicalGoodsInPropositionData
);

export const getDeviceInstalmentsCount = createSelector(getPhysicalGoodsInPropositionData, data => data && data.deviceInstalmentsCount || []);

export const getDeviceInstalmentsCountForSelect = createSelector([getDeviceInstalmentsCount, getDeviceInstalmentsConfigurationInContext], deviceInstallmentCountForSelect);

export const getDefaultDeviceInstalmentsCountValue = createSelector([getDeviceInstalmentsCount, getDeviceInstalmentsConfigurationInContext], defaultDeviceInstalmentsCountValue);

export const getCurrentDeviceInstalmentsCountValue = createSelector([getSelectedDeviceInstalmentsCountValue, getDefaultDeviceInstalmentsCountValue], (selected, def) => selected || def);

export const getSelectedOfferRatePlanName = createSelector(getSelectedOffer, offer => offer && offer.rateplanName || "");

export const getSelectedOfferPosition = createSelector(getOffers, offers => offers && typeof offers.selectedPosition === "number" && parseInt(offers.selectedPosition));

export const getNameForSelectedOffer = createSelector(getSelectedOffer, offer => offer && offer.rateplanName);

export const getOffersDataInContext = createSelector([getOffersForCurrentFilters, getClientContext, getSelectedProcessTypeValue, getContractRole], createOffersDataInContext);

export const getOffersInContext = createSelector(getOffersDataInContext, data => data && data.offers || []);

export const getOfferDataInContextForPropositionId = propositionId => createSelector(getOffersInContext, data => data.find(offer => offer.id === propositionId));
export const getSelectedOfferDataInContext = createSelector([getOffersInContext, getSelectedOfferId], (data, propositionId) => data.find(offer => offer.id === propositionId));

export const getLongDescriptionTableForSelectedOffer = createSelector(getSelectedOfferDataInContext,
    offer => offer && offer.longDescriptionTable
);

export const getMnpPriceDescriptionForSelectedOffer = createSelector(getSelectedOffer,
    offer => {
        let mnpDesc = offer && offer.features.featureGroups.mnpFeatures && offer.features.featureGroups.mnpFeatures[0].featureValues[0].value;
        mnpDesc = mnpDesc || (offer && offer.features.featureGroups.boxFeatures || [])
            .filter(x => x.code.indexOf("mnp_price_desc") > -1)
            .map(x => x.featureValues[0].value)[0];
        return mnpDesc;
    }
);

export const getSelectedVases = createSelector(getOffers, offers => offers.selectedVases);
export const getGratisPackagesForPropositionId = propositionId => createSelector(getOfferDataInContextForPropositionId(propositionId), data =>
    data &&
    data.addons &&
    data.addons.categorizedBonuses["GratisPackageBonuses"] &&
    data.addons.categorizedBonuses["GratisPackageBonuses"].services || []);

function matchDeviceInstalmentsConfiguration(conf, offerType, process) {
    let matchingConf = conf
        .filter(c => c.process == null || c.process == process)
        .filter(c => c.offerType == null || c.offerType == offerType);

    function accuracy(c) {
        return (c.process != null ? 1 : 0) + (c.offertType != null ? 1 : 0);
    }

    matchingConf.sort((c1, c2) => accuracy(c2) - accuracy(c1));

    return matchingConf[0];
}

function deviceInstallmentCountForSelect(data, conf) {
    let defaultSelectConf = [{
        "value": -1,
        "description": "Wszystkie"
    }, {
        "value": 12,
        "description": "12 rat"
    }, {
        "value": 24,
        "description": "24 raty"
    }, {
        "value": 36,
        "description": "36 rat"
    }, {
        "value": 48,
        "description": "48 rat"
    }, ];

    let selectTemplate = conf && conf.presentation || defaultSelectConf;

    let installmentsAccordingToTemplate = selectTemplate.filter(v => data.indexOf(v.value) > -1 || v.value == -1);
    let installmentsAccordingToTemplateWithoutAllOption = installmentsAccordingToTemplate.filter(v => v.value != -1);

    if (installmentsAccordingToTemplateWithoutAllOption.length == 1) {
        return installmentsAccordingToTemplateWithoutAllOption
    } else {
        return installmentsAccordingToTemplate
    }
}

function defaultDeviceInstalmentsCountValue(data, conf) {
    let defaultValue = conf && conf["default"];
    if (defaultValue && data.indexOf(defaultValue) > -1) {
        //default
        return defaultValue
    } else if (conf && conf.presentation) {
        //first from conf
        let selectTemplate = conf && conf.presentation;
        let firstFromConf = selectTemplate.filter(sc => data.indexOf(defaultValue) > -1)[0];
        return (firstFromConf && firstFromConf.value) || -1;
    } else {
        return -1;
    }
}

function createOffersDataInContext(offers, clientContext, process, contractRole) {
    contractRole = contractRole ? contractRole[0] : null;
    console.log("## createOffersDataInContext", {
        offers
    }, {
        clientContext
    }, {
        process
    }, {
        contractRole
    }, "##");


    let groupNames = ["boxFeatures", "badgeFeatures", "promotionFeatures", "mobileFeatures"];

    let visibleAttributes = groupNames.reduce((obj, item) => ({
        ...obj,
        [item]: []
    }), {});
    let allAttributes = groupNames.reduce((obj, item) => ({
        ...obj,
        [item]: []
    }), {});
    let bonusPriceApplied = false;

    function offerMetric(o) {
        if (o && o.payments && o.payments.basePrice && o.payments.basePrice.price)
            return parseFloat(o.payments.basePrice.price.replace(",", "."));
        return null;
    }

    function offerComparator(o1, o2) {
        return offerMetric(o1) - offerMetric(o2);
    }

    function markAsPresent(key, attribute) {
        uniq(allAttributes, key, attribute);
    }

    function markAsVisible(key, attribute) {
        uniq(visibleAttributes, key, attribute);
    }

    function uniq(obj, key, val) {
        if (!obj[key].find(a => a === val)) {
            obj[key].push(val);
        }
    }

    function matchClientContext(attr, clientContext) {
        if (attr.clientContext != null) {
            return attr.clientContext == clientContext;
        } else {
            return true;
        }
    }

    function matchProcess(attr, process) {
        if (process && attr.processes && attr.processes[0]) {
            if (attr.processes.find(p => p == process)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    function newAttributes(attributes) {

        function markAsHide(attr) {
            return {
                ...attr,
                hide: true
            };
        }

        function toCanonical(f) {
            const codePrefix = "businessDescriptions/1.0/Offer_Descriptions.";
            return {
                ...f,
                attribute: f.code ? f.code.replace(codePrefix, "") : f.attribute,
                value: (f.featureValues && f.featureValues.length > 0) ? f.featureValues[0]["value"] : f.value,
            };
        }

        if (attributes) {
            return attributes
                .map(toCanonical)
                .map(attr => !matchProcess(attr, process) ? markAsHide(attr) : attr)
                .map(attr => !matchClientContext(attr, clientContext) ? markAsHide(attr) : attr);
        }
        return [];
    }

    function newFeatureGroups(featureGroups) {
        let newFeatureGroups = {};
        groupNames.forEach(gName => newFeatureGroups[gName] = newAttributes(featureGroups[gName]));
        groupNames.forEach(gName => newFeatureGroups[gName] && newFeatureGroups[gName].forEach(attr => {
            markAsPresent(gName, attr.attribute);
            if (!attr.hide) {
                markAsVisible(gName, attr.attribute);
            }
        }));
        return newFeatureGroups;
    }

    function newFeatures(features) {
        function extractValueFor(attrName, def) {
            let attr = this.featureGroups.mobileFeatures.find(f => f.attribute === attrName);
            if (attr && !attr.hide) {
                return {
                    value: attr.value,
                    icon: attr.icon && attr.icon.toLowerCase().replace("_", "-")
                };
            } else {
                return def ? {
                    value: def
                } : def;
            }
        }

        if (!features) {
            return null;
        }
        return {
            featureGroups: newFeatureGroups(features.featureGroups),
            getMobileDataDesc: function() {
                return extractValueFor.call(this, "data_desc_short2", "BD");
            },
            getMobileRetentionDesc: function() {
                return extractValueFor.call(this, "retention_desc_short2");
            },
        };
    }

    function newOffer(offer) {

        function getDescriptionsWithRoles() {
            let descriptionFeatures = offer &&
                offer.features &&
                offer.features.featureGroups &&
                offer.features.featureGroups.descriptionFeatures;

            return (descriptionFeatures || []).map(df => ({
                roles: df.roles,
                value: df.featureValues && df.featureValues[0] && df.featureValues[0].value,
            }));
        }

        function getDefaultDescription() {
            let descriptions = getDescriptionsWithRoles();
            // DEFAULT or empty or first
            let description = descriptions.filter(d => d.roles.indexOf("DEFAULT") > -1)[0];
            description = description || descriptions.filter(d => d.roles.length === 0)[0];
            description = description || descriptions[0];
            console.log("getDefaultDescription", description);
            return description && description.value
        }

        function getBonusDescription() {
            let descriptions = getDescriptionsWithRoles();
            let description = descriptions.filter(d => contractRole && d.roles.indexOf(contractRole) > -1)[0];
            console.log("getBonusDescription", description);
            return description && description.value
        }

        function longDescriptionTable() {
            // descriptionAttributes filtered by contract role
            let toParse = getBonusDescription() || getDefaultDescription() || '[{"key":"brak", "value":"danych"}]';
            console.log("descriptionAttributes filtered by contract role", toParse);
            let details = null;

            try {
                details = JSON.parse(toParse);
            } catch (e) {
                console.error("Details parsing error: " + toParse + " " + e);
                details = [{
                    key: "brak",
                    value: "danych"
                }];
            }

            return {
                longDescriptionTable: details
            };
        }

        function price() {
            if (!offer.payments) {
                return "888";
            }

            let plainPrice = OnlineUtils.getPaymentsForRole(offer.payments, "").basePrice.price;
            let bonusPrice = OnlineUtils.getPaymentsForRole(offer.payments, contractRole).basePrice.price;

            if (clientContext && bonusPrice !== plainPrice) {
                bonusPriceApplied = true;
                return {
                    price: bonusPrice,
                    oldPrice: plainPrice,
                };
            } else {
                return {
                    price: plainPrice,
                };
            }
        }

        return {
            ...offer,
            ...price(),
            ...longDescriptionTable(),
            features: newFeatures(offer.features)
        };
    }

    if (offers) {
        console.log("processing", {
            offers
        });

        // offers.slice(1,2).forEach( (offer,id)=> offer.payments['basePriceWithBonuses'] = {'price' : "10,00"}) //mocks

        let newOffers = offers.map(newOffer);
        newOffers.sort(offerComparator);

        return {
            offers: newOffers,
            visibleAttributes: visibleAttributes,
            allAttributes: allAttributes,
            bonusPriceApplied: bonusPriceApplied,
        };
    }
}