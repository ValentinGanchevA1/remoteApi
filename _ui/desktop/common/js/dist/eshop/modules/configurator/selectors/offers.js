define(["exports", "Reselect", "./root", "../utils", "./filters", "eshop/modules/cart/selectors", "eshop/modules/auth/selectors/authorization", "eshop/utils/OnlineUtils"], function(_exports, _Reselect, _root, _utils, _filters, _selectors, _authorization, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getGratisPackagesForPropositionId = _exports.getSelectedVases = _exports.getMnpPriceDescriptionForSelectedOffer = _exports.getLongDescriptionTableForSelectedOffer = _exports.getSelectedOfferDataInContext = _exports.getOfferDataInContextForPropositionId = _exports.getOffersInContext = _exports.getOffersDataInContext = _exports.getNameForSelectedOffer = _exports.getSelectedOfferPosition = _exports.getSelectedOfferRatePlanName = _exports.getCurrentDeviceInstalmentsCountValue = _exports.getDefaultDeviceInstalmentsCountValue = _exports.getDeviceInstalmentsCountForSelect = _exports.getDeviceInstalmentsCount = _exports.getPhysicalGoodsInPropositionData = _exports.getSelectedOffersDeviceName = _exports.getInstallmentCount = _exports.getSelectedOffer = _exports.getDeviceInstalmentsConfigurationInContext = _exports.getDeviceInstalmentsCountValueByPropositionId = _exports.getDeviceInstalmentsConfiguration = _exports.getSelectedDeviceInstalmentsCountValue = _exports.getSelectedDeviceId = _exports.getSelectedOfferId = _exports.getSelectedBaseRatePlanId = _exports.getPropositionIdsByRatePlanId = _exports.getPropositionIdByRatePlanId = _exports.getOfferByPropositonIdForCurrentFilters = _exports.getBaseRatePlanIdByPropositionId = _exports.getRateplanIdsObj = _exports.getAvailableBaseRateplanIds = _exports.getRateplanIds = _exports.getOffersByCurrentFiltersForSelect = _exports.sortedOffersByBasePrice = _exports.checkOffersForCurrentIndexedFiltersB2B = _exports.checkOffersForCurrentFilters = _exports.getOffersForCurrentFiltersB2B = _exports.getOffersForCurrentFilters = _exports.getFirstOfferFromProductFilter = _exports.getContractRoleInProgress = _exports.getContractRole = _exports.getNextContractRole = _exports.getCalculatedContractRole = _exports.getOffersDocuments = _exports.getOffersData = void 0;
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

    var getOffersData = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers && offers.data;
    });
    _exports.getOffersData = getOffersData;
    var getOffersDocuments = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.documents;
    });
    _exports.getOffersDocuments = getOffersDocuments;
    var getCalculatedContractRole = (0, _Reselect.createSelector)([_root.getOffers, _filters.getSelectedProcessTypeValue, _filters.getCheckMsisdnResult, _authorization.getSalesChannel], function(offers, processType, msisdnCheckResult, salesChannel) {
        var isWWW = salesChannel === "WWW";

        if ("RETENTION" === processType) {
            if (isWWW || msisdnCheckResult && msisdnCheckResult.isPositive) {
                return offers.contractRoleForRetention;
            } else {
                return [];
            }
        } else {
            return offers.contractRole;
        }
    });
    _exports.getCalculatedContractRole = getCalculatedContractRole;
    var getNextContractRole = (0, _Reselect.createSelector)([getCalculatedContractRole, _filters.getClientContext, _filters.getClientContextRole, _authorization.isLogged, _selectors.getCartEntries, _authorization.getSalesChannel], function(calculatedContractRole, clientContext, clientContextRole, isLogged, cartEntries, salesChannel) {
        var cartNotEmpty = (cartEntries || [])[0];
        var isWWW = salesChannel === "WWW";

        if (!isWWW || isWWW && (isLogged || cartNotEmpty)) {
            return calculatedContractRole;
        } else if (clientContext) {
            return [clientContextRole];
        } else {
            return [];
        }
    });
    _exports.getNextContractRole = getNextContractRole;
    var getContractRole = (0, _Reselect.createSelector)([getNextContractRole, _selectors.getContractRoleByBundleNo, _selectors.getAddTerminalToOfferBundleNo], function(nextContractRole, existingContractRoleByBundleNo, addChangeTerminalForBundleNo) {
        if (addChangeTerminalForBundleNo) {
            var existingRole = existingContractRoleByBundleNo[parseInt(addChangeTerminalForBundleNo)];
            return existingRole ? [existingRole] : [];
        } else {
            return nextContractRole;
        }
    });
    _exports.getContractRole = getContractRole;
    var getContractRoleInProgress = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.getContractRoleInProgress;
    });
    _exports.getContractRoleInProgress = getContractRoleInProgress;
    var getFirstOfferFromProductFilter = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers && offers.firstOfferFromProductFilter;
    });
    _exports.getFirstOfferFromProductFilter = getFirstOfferFromProductFilter;
    var getOffersForCurrentFilters = (0, _Reselect.createSelector)([getOffersData, _filters.getSelectedFilters], function(data, currentFilters) {
        return data && data[(0, _utils.hashFilters)(currentFilters)];
    });
    _exports.getOffersForCurrentFilters = getOffersForCurrentFilters;
    var getOffersForCurrentFiltersB2B = (0, _Reselect.createSelector)([getOffersData, _filters.getSelectedFiltersB2B], function(data, currentFilters) {
        return currentFilters.map(function(singleFilter) {
            return data[(0, _utils.hashFilters)(singleFilter)];
        });
    });
    _exports.getOffersForCurrentFiltersB2B = getOffersForCurrentFiltersB2B;
    var checkOffersForCurrentFilters = (0, _Reselect.createSelector)([getOffersData, _filters.getSelectedFiltersB2B], function(data, currentFilters) {
        return currentFilters.find(function(singleFilter) {
            return data[(0, _utils.hashFilters)(singleFilter)];
        });
    });
    _exports.checkOffersForCurrentFilters = checkOffersForCurrentFilters;

    var checkOffersForCurrentIndexedFiltersB2B = function checkOffersForCurrentIndexedFiltersB2B(index) {
        return (0, _Reselect.createSelector)([getOffersData, _filters.getSelectedFiltersB2B], function(data, currentFilters) {
            return data[(0, _utils.hashFilters)(currentFilters[index])];
        });
    };

    _exports.checkOffersForCurrentIndexedFiltersB2B = checkOffersForCurrentIndexedFiltersB2B;
    var sortedOffersByBasePrice = (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(data) {
        return data && data.sort(function(a, b) {
            return a.payments.basePrice.originalGrossPrice - b.payments.basePrice.originalGrossPrice;
        });
    });
    _exports.sortedOffersByBasePrice = sortedOffersByBasePrice;
    var getOffersByCurrentFiltersForSelect = (0, _Reselect.createSelector)(sortedOffersByBasePrice, function(data) {
        return data && data.map(function(offer) {
            return {
                value: offer.id,
                description: offer.rateplanName
            };
        }) || [];
    });
    _exports.getOffersByCurrentFiltersForSelect = getOffersByCurrentFiltersForSelect;
    var getRateplanIds = (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(data) {
        return data && data.map(function(offer) {
            return offer.rateplanId;
        }) || [];
    });
    _exports.getRateplanIds = getRateplanIds;
    var getAvailableBaseRateplanIds = (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(data) {
        return data && data.map(function(offer) {
            return offer.rateplanBaseProductId;
        }) || [];
    });
    _exports.getAvailableBaseRateplanIds = getAvailableBaseRateplanIds;
    var getRateplanIdsObj = (0, _Reselect.createSelector)(getRateplanIds, function(data) {
        return (0, _utils.mapRateplanIdsToJsonObject)(data);
    });
    _exports.getRateplanIdsObj = getRateplanIdsObj;

    var getBaseRatePlanIdByPropositionId = function getBaseRatePlanIdByPropositionId(propositionId) {
        return (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(data) {
            var selectedOffer = data.find(function(offer) {
                return offer.id === propositionId;
            });
            return selectedOffer && selectedOffer.rateplanBaseProductId || "";
        });
    };

    _exports.getBaseRatePlanIdByPropositionId = getBaseRatePlanIdByPropositionId;

    var getOfferByPropositonIdForCurrentFilters = function getOfferByPropositonIdForCurrentFilters(propositionId) {
        return (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(offers) {
            return offers.find(function(offer) {
                return offer.id === propositionId;
            });
        });
    };

    _exports.getOfferByPropositonIdForCurrentFilters = getOfferByPropositonIdForCurrentFilters;

    var getPropositionIdByRatePlanId = function getPropositionIdByRatePlanId(rateplanBaseProductId, data) {
        var selectedOffer = data && data.find(function(offer) {
            return offer.rateplanBaseProductId == rateplanBaseProductId;
        });
        return selectedOffer && selectedOffer.rateplanBaseProductId && selectedOffer.id || "";
    };

    _exports.getPropositionIdByRatePlanId = getPropositionIdByRatePlanId;

    var getPropositionIdsByRatePlanId = function getPropositionIdsByRatePlanId(rateplanBaseProductId, data) {
        console.log("getPropositionIdsByRatePlanId ", rateplanBaseProductId, data);
        var selectedOffers = data && data.filter(function(offer) {
            return offer.rateplanBaseProductId == rateplanBaseProductId;
        }).map(function(offer) {
            return offer.id;
        });
        return selectedOffers;
    };

    _exports.getPropositionIdsByRatePlanId = getPropositionIdsByRatePlanId;
    var getSelectedBaseRatePlanId = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selectedRateplanBaseProductId;
    });
    _exports.getSelectedBaseRatePlanId = getSelectedBaseRatePlanId;
    var getSelectedOfferId = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selected;
    });
    _exports.getSelectedOfferId = getSelectedOfferId;
    var getSelectedDeviceId = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selectedDevice;
    });
    _exports.getSelectedDeviceId = getSelectedDeviceId;
    var getSelectedDeviceInstalmentsCountValue = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selectedDeviceInstalmentsCount;
    });
    _exports.getSelectedDeviceInstalmentsCountValue = getSelectedDeviceInstalmentsCountValue;
    var getDeviceInstalmentsConfiguration = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.deviceInstalmentsConfiguration;
    });
    _exports.getDeviceInstalmentsConfiguration = getDeviceInstalmentsConfiguration;

    var getDeviceInstalmentsCountValueByPropositionId = function getDeviceInstalmentsCountValueByPropositionId(propositionId) {
        return (0, _Reselect.createSelector)(getOffersForCurrentFilters, function(data) {
            var selectedOffer = data.find(function(offer) {
                return offer.id === propositionId;
            });
            return selectedOffer && selectedOffer.physicalGoodsInPropositionData && selectedOffer.physicalGoodsInPropositionData.deviceInstalmentsCount || "";
        });
    };

    _exports.getDeviceInstalmentsCountValueByPropositionId = getDeviceInstalmentsCountValueByPropositionId;
    var getDeviceInstalmentsConfigurationInContext = (0, _Reselect.createSelector)([getDeviceInstalmentsConfiguration, _filters.getSelectedOfferType, _filters.getSelectedProcessTypeValue], matchDeviceInstalmentsConfiguration);
    _exports.getDeviceInstalmentsConfigurationInContext = getDeviceInstalmentsConfigurationInContext;
    var getSelectedOffer = (0, _Reselect.createSelector)([getOffersForCurrentFilters, getSelectedOfferId, getSelectedBaseRatePlanId], function(offers, offerId, servicePlanId) {
        if ((offerId == undefined || offerId == null || offerId == "undefined" || offerId == "" || offerId == "null") && !!servicePlanId) {
            return offers && offers.find(function(o) {
                return o.rateplanBaseProductId == servicePlanId;
            }); //match offerId from servicePlan
        }

        return offers && offers.find(function(o) {
            return o.id === offerId;
        });
    });
    _exports.getSelectedOffer = getSelectedOffer;
    var getInstallmentCount = (0, _Reselect.createSelector)(getSelectedOffer, function(selectedOffer) {
        if (selectedOffer && selectedOffer.deviceData && selectedOffer.deviceData.inOffer && selectedOffer.deviceData.inOffer.price) {
            return selectedOffer.deviceData.inOffer.price.base.devicePayments[0].monthTo;
        }

        return 0;
    });
    _exports.getInstallmentCount = getInstallmentCount;
    var getSelectedOffersDeviceName = (0, _Reselect.createSelector)(getSelectedOffer, function(selectedOffer) {
        return selectedOffer && selectedOffer.deviceData && selectedOffer.deviceData;
    });
    _exports.getSelectedOffersDeviceName = getSelectedOffersDeviceName;
    var getPhysicalGoodsInPropositionData = (0, _Reselect.createSelector)(getSelectedOffer, function(offer) {
        return offer && offer.physicalGoodsInPropositionData;
    });
    _exports.getPhysicalGoodsInPropositionData = getPhysicalGoodsInPropositionData;
    var getDeviceInstalmentsCount = (0, _Reselect.createSelector)(getPhysicalGoodsInPropositionData, function(data) {
        return data && data.deviceInstalmentsCount || [];
    });
    _exports.getDeviceInstalmentsCount = getDeviceInstalmentsCount;
    var getDeviceInstalmentsCountForSelect = (0, _Reselect.createSelector)([getDeviceInstalmentsCount, getDeviceInstalmentsConfigurationInContext], deviceInstallmentCountForSelect);
    _exports.getDeviceInstalmentsCountForSelect = getDeviceInstalmentsCountForSelect;
    var getDefaultDeviceInstalmentsCountValue = (0, _Reselect.createSelector)([getDeviceInstalmentsCount, getDeviceInstalmentsConfigurationInContext], defaultDeviceInstalmentsCountValue);
    _exports.getDefaultDeviceInstalmentsCountValue = getDefaultDeviceInstalmentsCountValue;
    var getCurrentDeviceInstalmentsCountValue = (0, _Reselect.createSelector)([getSelectedDeviceInstalmentsCountValue, getDefaultDeviceInstalmentsCountValue], function(selected, def) {
        return selected || def;
    });
    _exports.getCurrentDeviceInstalmentsCountValue = getCurrentDeviceInstalmentsCountValue;
    var getSelectedOfferRatePlanName = (0, _Reselect.createSelector)(getSelectedOffer, function(offer) {
        return offer && offer.rateplanName || "";
    });
    _exports.getSelectedOfferRatePlanName = getSelectedOfferRatePlanName;
    var getSelectedOfferPosition = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers && typeof offers.selectedPosition === "number" && parseInt(offers.selectedPosition);
    });
    _exports.getSelectedOfferPosition = getSelectedOfferPosition;
    var getNameForSelectedOffer = (0, _Reselect.createSelector)(getSelectedOffer, function(offer) {
        return offer && offer.rateplanName;
    });
    _exports.getNameForSelectedOffer = getNameForSelectedOffer;
    var getOffersDataInContext = (0, _Reselect.createSelector)([getOffersForCurrentFilters, _filters.getClientContext, _filters.getSelectedProcessTypeValue, getContractRole], createOffersDataInContext);
    _exports.getOffersDataInContext = getOffersDataInContext;
    var getOffersInContext = (0, _Reselect.createSelector)(getOffersDataInContext, function(data) {
        return data && data.offers || [];
    });
    _exports.getOffersInContext = getOffersInContext;

    var getOfferDataInContextForPropositionId = function getOfferDataInContextForPropositionId(propositionId) {
        return (0, _Reselect.createSelector)(getOffersInContext, function(data) {
            return data.find(function(offer) {
                return offer.id === propositionId;
            });
        });
    };

    _exports.getOfferDataInContextForPropositionId = getOfferDataInContextForPropositionId;
    var getSelectedOfferDataInContext = (0, _Reselect.createSelector)([getOffersInContext, getSelectedOfferId], function(data, propositionId) {
        return data.find(function(offer) {
            return offer.id === propositionId;
        });
    });
    _exports.getSelectedOfferDataInContext = getSelectedOfferDataInContext;
    var getLongDescriptionTableForSelectedOffer = (0, _Reselect.createSelector)(getSelectedOfferDataInContext, function(offer) {
        return offer && offer.longDescriptionTable;
    });
    _exports.getLongDescriptionTableForSelectedOffer = getLongDescriptionTableForSelectedOffer;
    var getMnpPriceDescriptionForSelectedOffer = (0, _Reselect.createSelector)(getSelectedOffer, function(offer) {
        var mnpDesc = offer && offer.features.featureGroups.mnpFeatures && offer.features.featureGroups.mnpFeatures[0].featureValues[0].value;
        mnpDesc = mnpDesc || (offer && offer.features.featureGroups.boxFeatures || []).filter(function(x) {
            return x.code.indexOf("mnp_price_desc") > -1;
        }).map(function(x) {
            return x.featureValues[0].value;
        })[0];
        return mnpDesc;
    });
    _exports.getMnpPriceDescriptionForSelectedOffer = getMnpPriceDescriptionForSelectedOffer;
    var getSelectedVases = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selectedVases;
    });
    _exports.getSelectedVases = getSelectedVases;

    var getGratisPackagesForPropositionId = function getGratisPackagesForPropositionId(propositionId) {
        return (0, _Reselect.createSelector)(getOfferDataInContextForPropositionId(propositionId), function(data) {
            return data && data.addons && data.addons.categorizedBonuses["GratisPackageBonuses"] && data.addons.categorizedBonuses["GratisPackageBonuses"].services || [];
        });
    };

    _exports.getGratisPackagesForPropositionId = getGratisPackagesForPropositionId;

    function matchDeviceInstalmentsConfiguration(conf, offerType, process) {
        var matchingConf = conf.filter(function(c) {
            return c.process == null || c.process == process;
        }).filter(function(c) {
            return c.offerType == null || c.offerType == offerType;
        });

        function accuracy(c) {
            return (c.process != null ? 1 : 0) + (c.offertType != null ? 1 : 0);
        }

        matchingConf.sort(function(c1, c2) {
            return accuracy(c2) - accuracy(c1);
        });
        return matchingConf[0];
    }

    function deviceInstallmentCountForSelect(data, conf) {
        var defaultSelectConf = [{
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
        }];
        var selectTemplate = conf && conf.presentation || defaultSelectConf;
        var installmentsAccordingToTemplate = selectTemplate.filter(function(v) {
            return data.indexOf(v.value) > -1 || v.value == -1;
        });
        var installmentsAccordingToTemplateWithoutAllOption = installmentsAccordingToTemplate.filter(function(v) {
            return v.value != -1;
        });

        if (installmentsAccordingToTemplateWithoutAllOption.length == 1) {
            return installmentsAccordingToTemplateWithoutAllOption;
        } else {
            return installmentsAccordingToTemplate;
        }
    }

    function defaultDeviceInstalmentsCountValue(data, conf) {
        var defaultValue = conf && conf["default"];

        if (defaultValue && data.indexOf(defaultValue) > -1) {
            //default
            return defaultValue;
        } else if (conf && conf.presentation) {
            //first from conf
            var selectTemplate = conf && conf.presentation;
            var firstFromConf = selectTemplate.filter(function(sc) {
                return data.indexOf(defaultValue) > -1;
            })[0];
            return firstFromConf && firstFromConf.value || -1;
        } else {
            return -1;
        }
    }

    function createOffersDataInContext(offers, clientContext, process, contractRole) {
        contractRole = contractRole ? contractRole[0] : null;
        console.log("## createOffersDataInContext", {
            offers: offers
        }, {
            clientContext: clientContext
        }, {
            process: process
        }, {
            contractRole: contractRole
        }, "##");
        var groupNames = ["boxFeatures", "badgeFeatures", "promotionFeatures", "mobileFeatures"];
        var visibleAttributes = groupNames.reduce(function(obj, item) {
            return _objectSpread({}, obj, babelHelpers.defineProperty({}, item, []));
        }, {});
        var allAttributes = groupNames.reduce(function(obj, item) {
            return _objectSpread({}, obj, babelHelpers.defineProperty({}, item, []));
        }, {});
        var bonusPriceApplied = false;

        function offerMetric(o) {
            if (o && o.payments && o.payments.basePrice && o.payments.basePrice.price) return parseFloat(o.payments.basePrice.price.replace(",", "."));
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
            if (!obj[key].find(function(a) {
                    return a === val;
                })) {
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
                if (attr.processes.find(function(p) {
                        return p == process;
                    })) {
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
                return _objectSpread({}, attr, {
                    hide: true
                });
            }

            function toCanonical(f) {
                var codePrefix = "businessDescriptions/1.0/Offer_Descriptions.";
                return _objectSpread({}, f, {
                    attribute: f.code ? f.code.replace(codePrefix, "") : f.attribute,
                    value: f.featureValues && f.featureValues.length > 0 ? f.featureValues[0]["value"] : f.value
                });
            }

            if (attributes) {
                return attributes.map(toCanonical).map(function(attr) {
                    return !matchProcess(attr, process) ? markAsHide(attr) : attr;
                }).map(function(attr) {
                    return !matchClientContext(attr, clientContext) ? markAsHide(attr) : attr;
                });
            }

            return [];
        }

        function newFeatureGroups(featureGroups) {
            var newFeatureGroups = {};
            groupNames.forEach(function(gName) {
                return newFeatureGroups[gName] = newAttributes(featureGroups[gName]);
            });
            groupNames.forEach(function(gName) {
                return newFeatureGroups[gName] && newFeatureGroups[gName].forEach(function(attr) {
                    markAsPresent(gName, attr.attribute);

                    if (!attr.hide) {
                        markAsVisible(gName, attr.attribute);
                    }
                });
            });
            return newFeatureGroups;
        }

        function newFeatures(features) {
            function extractValueFor(attrName, def) {
                var attr = this.featureGroups.mobileFeatures.find(function(f) {
                    return f.attribute === attrName;
                });

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
                getMobileDataDesc: function getMobileDataDesc() {
                    return extractValueFor.call(this, "data_desc_short2", "BD");
                },
                getMobileRetentionDesc: function getMobileRetentionDesc() {
                    return extractValueFor.call(this, "retention_desc_short2");
                }
            };
        }

        function newOffer(offer) {
            function getDescriptionsWithRoles() {
                var descriptionFeatures = offer && offer.features && offer.features.featureGroups && offer.features.featureGroups.descriptionFeatures;
                return (descriptionFeatures || []).map(function(df) {
                    return {
                        roles: df.roles,
                        value: df.featureValues && df.featureValues[0] && df.featureValues[0].value
                    };
                });
            }

            function getDefaultDescription() {
                var descriptions = getDescriptionsWithRoles(); // DEFAULT or empty or first

                var description = descriptions.filter(function(d) {
                    return d.roles.indexOf("DEFAULT") > -1;
                })[0];
                description = description || descriptions.filter(function(d) {
                    return d.roles.length === 0;
                })[0];
                description = description || descriptions[0];
                console.log("getDefaultDescription", description);
                return description && description.value;
            }

            function getBonusDescription() {
                var descriptions = getDescriptionsWithRoles();
                var description = descriptions.filter(function(d) {
                    return contractRole && d.roles.indexOf(contractRole) > -1;
                })[0];
                console.log("getBonusDescription", description);
                return description && description.value;
            }

            function longDescriptionTable() {
                // descriptionAttributes filtered by contract role
                var toParse = getBonusDescription() || getDefaultDescription() || '[{"key":"brak", "value":"danych"}]';
                console.log("descriptionAttributes filtered by contract role", toParse);
                var details = null;

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

                var plainPrice = _OnlineUtils.default.getPaymentsForRole(offer.payments, "").basePrice.price;

                var bonusPrice = _OnlineUtils.default.getPaymentsForRole(offer.payments, contractRole).basePrice.price;

                if (clientContext && bonusPrice !== plainPrice) {
                    bonusPriceApplied = true;
                    return {
                        price: bonusPrice,
                        oldPrice: plainPrice
                    };
                } else {
                    return {
                        price: plainPrice
                    };
                }
            }

            return _objectSpread({}, offer, {}, price(), {}, longDescriptionTable(), {
                features: newFeatures(offer.features)
            });
        }

        if (offers) {
            console.log("processing", {
                offers: offers
            }); // offers.slice(1,2).forEach( (offer,id)=> offer.payments['basePriceWithBonuses'] = {'price' : "10,00"}) //mocks

            var newOffers = offers.map(newOffer);
            newOffers.sort(offerComparator);
            return {
                offers: newOffers,
                visibleAttributes: visibleAttributes,
                allAttributes: allAttributes,
                bonusPriceApplied: bonusPriceApplied
            };
        }
    }
});
//# sourceMappingURL=offers.js.map