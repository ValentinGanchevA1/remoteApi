define(["exports", "Reselect", "./components/entriesList/SectionEntryTypeEnum", "../core/enum/Technology", "../checkout/utils/MiniCartUtils", "../checkout/constants/CartEntryTypeEnum", "eshop/utils/OnlineUtils", "eshop/utils/NetGrossUtils", "eshop/modules/core/constants/TransactionProcessTypeEnum", "../core/constants/FactoryTypeEnum", "./components/entriesList/utils/CartUtils", "../core/enum/VasUpdateStatus"], function(_exports, _Reselect, _SectionEntryTypeEnum, _Technology, _MiniCartUtils, _CartEntryTypeEnum, _OnlineUtils, _NetGrossUtils, _TransactionProcessTypeEnum, _FactoryTypeEnum, _CartUtils, _VasUpdateStatus) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getVoucherData = _exports.getCartState = _exports.getPricesForPeriodSelectorForBundles = _exports.getOfferDescriptionForBundles = _exports.getCartSummaryTableDetailsRows = _exports.getCartMonthlyRowsAll = _exports.getMaxBundleNo = _exports.createGetPricesForPeriodSelector = _exports.isTvSubEntry = _exports.isDslTechnologyEntry = _exports.isSatTechnologyEntry = _exports.getOfferLoyaltyLength = _exports.getOfferMsisdn = _exports.getOfferDescription = _exports.getCartSummaryTableRows = _exports.getCartCode = _exports.getCartMonthlyRows = _exports.getProcessTypesIncludeAssignment = _exports.getContractRoleByBundleNo = _exports.isLowerInstallmentsModalVisible = _exports.getEntryForLowerInstallmentsModal = _exports.getLowerInstallmentsBundleNo = _exports.getLowerInstallments = _exports.changingSimCard = _exports.changingMsisdn = _exports.getEntryForResourceModal = _exports.isResourceModalVisible = _exports.getResourcesMsg = _exports.getSimCard = _exports.getMsisdn = _exports.getSimCards = _exports.getMsisdns = _exports.getResourceModalBundleNo = _exports.getResourceModal = _exports.getB2BVasesModalVisibility = _exports.getCartB2BMetadata = _exports.getTvFilteredModalVisibility = _exports.getTvModalVisibility = _exports.getFixConfigurablesMetadata = _exports.getCartFixMetadata = _exports.getMobileVasMetadata = _exports.getCartMobileMetadata = _exports.hasWakizashi = _exports.hasRetention = _exports.isAnyMobileVasUpdating = _exports.getMobileVasUpdatingStatus = _exports.getHasCartData = _exports.getHasMiniCartData = _exports.containsEmptySaleOfAddonsEntry = _exports.getNumberOfCartEntries = _exports.getEntryType = _exports.getCartDiscounts = _exports.getCartDiscountsRaw = _exports.cartHasMobileDevices = _exports.getMobileCartDevices = _exports.getCartDevices = _exports.getCartDevicesRaw = _exports.getCartFirstOffer = _exports.getCartOffers = _exports.getCartOffersRaw = _exports.getCartServices = _exports.getCartServicesRaw = _exports.getCartMonthlyCosts = _exports.getCartMonthlyCostsRaw = _exports.getCartOneTimeCost = _exports.getCartOneTimeCostRaw = _exports.getCartCheckoutCost = _exports.getCartCheckoutCostRaw = _exports.hasEntries = _exports.getConvergentEntries = _exports.getCartOmniCode = _exports.allCartEntries = _exports.getOfferCount = _exports.getMiniCart = _exports.hasVoiceCartEntry = _exports.getMobileCartEntries = _exports.getCartEntries = _exports.getCartEntriesRaw = _exports.getMobileVases = _exports.getMobileVasesRaw = _exports.isMnpInCart = _exports.isCartMobile = _exports.isCartFix = _exports.getPriceIsNet = _exports.getCartIsNet = _exports.getBundlesProcessType = _exports.shouldDisplayLoyaltyDurationChoice = _exports.getTvPackages = _exports.getFixConfigurables = _exports.getBaseProductIdForBundle = _exports.getMagnumOfferId = _exports.getMagnumBundleTemplate = _exports.getProductCodeByBundleNo = _exports.getAssignmnetData = _exports.getAddTerminalToOfferBundleNo = _exports.getManualVerificationStatus = _exports.getMiniCartData = _exports.getSelectedVoipNumber = _exports.getVoipState = _exports.getFixState = void 0;
    _exports.getChangePackagesModalInitData = _exports.getInvoiceData = _exports.getLeadId = _exports.isWwwChannel = _exports.getCustomFilters = _exports.hasOnlyAssignment = _exports.getKdrCheckoutData = _exports.getKdrAccepted = _exports.getKdrSaving = _exports.getKdrErrors = _exports.getKdrSource = _exports.getKdrNumber = _exports.getKdrData = _exports.getChangedDevice = _exports.getEntryUnderChange = _exports.getDeathCertificateConfirmed = _exports.getPaymentPlanAssignValue = _exports.getBonusEntry = _exports.isBonusModalOpen = _exports.isVasModalOpen = _exports.getCartEntryById = _exports.getTerminalForBundleAndEntryNumber = _exports.getDepositCost = _exports.getVoucherName = _exports.getVoucherApplicableProducts = _exports.getVoucherApplicableProductsRequested = _exports.getVoucherMetadata = _exports.getVoucherError = _exports.getVoucherCode = void 0;
    _SectionEntryTypeEnum = babelHelpers.interopRequireDefault(_SectionEntryTypeEnum);
    _Technology = babelHelpers.interopRequireDefault(_Technology);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _NetGrossUtils = babelHelpers.interopRequireDefault(_NetGrossUtils);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _FactoryTypeEnum = babelHelpers.interopRequireDefault(_FactoryTypeEnum);
    _VasUpdateStatus = babelHelpers.interopRequireDefault(_VasUpdateStatus);

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

    var getFixState = function getFixState(state) {
        return state.fix;
    };

    _exports.getFixState = getFixState;
    var getVoipState = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.voip;
    });
    _exports.getVoipState = getVoipState;
    var getSelectedVoipNumber = (0, _Reselect.createSelector)(getVoipState, function(voip) {
        return voip.selectedVoipNumber;
    });
    _exports.getSelectedVoipNumber = getSelectedVoipNumber;

    var getCartData = function getCartData(state) {
        return state.cart.cartData;
    };

    var getMiniCartData = function getMiniCartData(state) {
        return state.cart.miniCartData;
    };

    _exports.getMiniCartData = getMiniCartData;

    var getCartMetadata = function getCartMetadata(state) {
        return state.cart.metadata;
    };

    var getManualVerificationStatus = function getManualVerificationStatus(state) {
        return state.cart.manualVerificationStatus;
    };

    _exports.getManualVerificationStatus = getManualVerificationStatus;

    var getAddTerminalToOfferBundleNo = function getAddTerminalToOfferBundleNo(state) {
        return state.cart.addTerminalToOfferBundleNo;
    };

    _exports.getAddTerminalToOfferBundleNo = getAddTerminalToOfferBundleNo;

    var getAssignmnetData = function getAssignmnetData(state) {
        return state.cart.assignment;
    };

    _exports.getAssignmnetData = getAssignmnetData;

    var getProductCodeByBundleNo = function getProductCodeByBundleNo() {
        return (0, _Reselect.createSelector)([allCartEntries, getAddTerminalToOfferBundleNo], function() {
            var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var bundleNo = arguments.length > 1 ? arguments[1] : undefined;
            var entry = entries.find(function(o) {
                return o.bundleNo == bundleNo;
            });
            return entry && takeDeviceCode(entry);
        });
    };

    _exports.getProductCodeByBundleNo = getProductCodeByBundleNo;

    var getMagnumBundleTemplate = function getMagnumBundleTemplate() {
        return (0, _Reselect.createSelector)([allCartEntries, getAddTerminalToOfferBundleNo], function() {
            var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var bundleNo = arguments.length > 1 ? arguments[1] : undefined;
            var entry = entries.find(function(o) {
                return o.bundleNo == bundleNo;
            });
            return entry && entry.propositionId;
        });
    };

    _exports.getMagnumBundleTemplate = getMagnumBundleTemplate;

    var getMagnumOfferId = function getMagnumOfferId() {
        return (0, _Reselect.createSelector)([allCartEntries, getAddTerminalToOfferBundleNo], function() {
            var entries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var bundleNo = arguments.length > 1 ? arguments[1] : undefined;
            var entry = entries.find(function(o) {
                return o.bundleNo == bundleNo;
            });
            return entry && entry.productCode;
        });
    };

    _exports.getMagnumOfferId = getMagnumOfferId;

    var takeDeviceCode = function takeDeviceCode(entry) {
        if (entry && entry.terminals.length > 0) {
            return entry.terminals[0].productCode;
        } else if (entry && entry.euroSets.length > 0) {
            return entry.euroSets[0].productCode;
        } else {
            return;
        }
    };

    var takeDevice = function takeDevice(entry) {
        if (entry && entry.terminals.length > 0) {
            return entry.terminals[0];
        } else if (entry && entry.euroSets.length > 0) {
            return entry.euroSets[0];
        } else {
            return;
        }
    };

    var getBaseProductIdForBundle = function getBaseProductIdForBundle() {
        return (0, _Reselect.createSelector)([getCartOffers, function(_, bundleNoFromProps) {
            return {
                bundleNo: bundleNoFromProps
            };
        }], function() {
            var offers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var bundleNo = arguments.length > 1 ? arguments[1] : undefined;
            var offer = offers.filter(function(o) {
                return o.bundleNo == bundleNo.bundleNo;
            });
            return offer[0] && offer[0].baseProductId;
        });
    };

    _exports.getBaseProductIdForBundle = getBaseProductIdForBundle;

    var getFixConfigurables = function getFixConfigurables(state) {
        if (state.cart.convergentConfigurables.configurables && state.cart.convergentConfigurables.configurables.length > 0) {
            return state.cart.convergentConfigurables.configurables.filter(function(configurables) {
                return configurables.factoryName === _FactoryTypeEnum.default.FIX;
            });
        } else {
            return state.cart.fixConfigurables;
        }
    };

    _exports.getFixConfigurables = getFixConfigurables;
    var getTvPackages = (0, _Reselect.createSelector)(getFixConfigurables, function(configurables) {
        return configurables && configurables[0] && configurables[0].tvPackages;
    });
    _exports.getTvPackages = getTvPackages;
    var shouldDisplayLoyaltyDurationChoice = (0, _Reselect.createSelector)(getTvPackages, function(tvPackages) {
        if (tvPackages) {
            var availableLoyaltyDuration = tvPackages.filter(function(tvPackage) {
                return tvPackage.provider === 'NC';
            }).map(function(tvPackage) {
                return tvPackage.loyaltyDuration;
            });
            return [12, 24].every(function(duration) {
                return availableLoyaltyDuration.includes(duration);
            });
        }

        return false;
    });
    _exports.shouldDisplayLoyaltyDurationChoice = shouldDisplayLoyaltyDurationChoice;

    var getBundlesProcessType = function getBundlesProcessType(state) {
        return state.cart.bundlesProcessType;
    };

    _exports.getBundlesProcessType = getBundlesProcessType;
    var getCartIsNet = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart && miniCart.net;
    });
    _exports.getCartIsNet = getCartIsNet;

    var getPriceIsNet = function getPriceIsNet(state) {
        return state.cart.priceViewIsNet;
    };

    _exports.getPriceIsNet = getPriceIsNet;
    var isCartFix = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart.entries && !!miniCart.entries.find(function(entry) {
            return entry.entryType == _CartEntryTypeEnum.default.FIX;
        });
    });
    _exports.isCartFix = isCartFix;
    var isCartMobile = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart.entries && !!miniCart.entries.find(function(entry) {
            return entry.entryType == _CartEntryTypeEnum.default.MOBILE;
        });
    });
    _exports.isCartMobile = isCartMobile;
    var isMnpInCart = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart.entries && !!miniCart.entries.find(function(entry) {
            return entry.processType == 'MNP';
        });
    });
    _exports.isMnpInCart = isMnpInCart;

    var getMobileVasesRaw = function getMobileVasesRaw(state) {
        return state.cart.mobileVas;
    };

    _exports.getMobileVasesRaw = getMobileVasesRaw;
    var getMobileVases = (0, _Reselect.createSelector)([getMobileVasesRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForVases);
    _exports.getMobileVases = getMobileVases;
    var getCartEntriesRaw = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart && miniCart.entries;
    });
    _exports.getCartEntriesRaw = getCartEntriesRaw;
    var getCartEntries = (0, _Reselect.createSelector)([getCartEntriesRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPrice);
    _exports.getCartEntries = getCartEntries;
    var getMobileCartEntries = (0, _Reselect.createSelector)([getCartEntries], function(entries) {
        return (entries || []).filter(function(e) {
            return e.entryType === "MOBILE";
        });
    });
    _exports.getMobileCartEntries = getMobileCartEntries;
    var hasVoiceCartEntry = (0, _Reselect.createSelector)([getMobileCartEntries], function(entries) {
        return (entries || []).filter(function(entry) {
            return (0, _MiniCartUtils.isVoiceCartEntry)(entry);
        }).length > 0;
    });
    _exports.hasVoiceCartEntry = hasVoiceCartEntry;
    var getMiniCart = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart;
    });
    _exports.getMiniCart = getMiniCart;
    var getOfferCount = (0, _Reselect.createSelector)(getMiniCartData, function(miniCart) {
        return miniCart.offerCount;
    });
    _exports.getOfferCount = getOfferCount;
    var allCartEntries = (0, _Reselect.createSelector)(getMiniCart, function(miniCart) {
        if (!miniCart || !miniCart.entries) {
            return [];
        }

        return (0, _MiniCartUtils.getAllCartEntries)(miniCart);
    });
    _exports.allCartEntries = allCartEntries;
    var getCartOmniCode = (0, _Reselect.createSelector)(allCartEntries, function(entries) {
        return entries.map(function(entry) {
            return (0, _CartUtils.convertToCartOmniCode)(entry.bundleOmniCode);
        }).reduce(function(result, code) {
            return code || result;
        }, 'OMNI');
    });
    _exports.getCartOmniCode = getCartOmniCode;
    var getConvergentEntries = (0, _Reselect.createSelector)(getMiniCart, function(miniCart) {
        return miniCart.entries ? miniCart.entries.filter(function(cartEntry) {
            return cartEntry.entryType === _CartEntryTypeEnum.default.CONVERGENT;
        }) : [];
    });
    _exports.getConvergentEntries = getConvergentEntries;
    var hasEntries = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.length > 0;
    });
    _exports.hasEntries = hasEntries;
    var getCartCheckoutCostRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.checkoutCost;
    });
    _exports.getCartCheckoutCostRaw = getCartCheckoutCostRaw;
    var getCartCheckoutCost = (0, _Reselect.createSelector)([getCartCheckoutCostRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForCheckoutCost);
    _exports.getCartCheckoutCost = getCartCheckoutCost;
    var getCartOneTimeCostRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.oneTimeCost;
    });
    _exports.getCartOneTimeCostRaw = getCartOneTimeCostRaw;
    var getCartOneTimeCost = (0, _Reselect.createSelector)([getCartOneTimeCostRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForCartOneTimeCost);
    _exports.getCartOneTimeCost = getCartOneTimeCost;
    var getCartMonthlyCostsRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.monthlyCosts;
    });
    _exports.getCartMonthlyCostsRaw = getCartMonthlyCostsRaw;
    var getCartMonthlyCosts = (0, _Reselect.createSelector)([getCartMonthlyCostsRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForCartMonthlyCosts);
    _exports.getCartMonthlyCosts = getCartMonthlyCosts;
    var getCartServicesRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.services;
    });
    _exports.getCartServicesRaw = getCartServicesRaw;
    var getCartServices = (0, _Reselect.createSelector)([getCartServicesRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForServices);
    _exports.getCartServices = getCartServices;
    var getCartOffersRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.offers;
    });
    _exports.getCartOffersRaw = getCartOffersRaw;
    var getCartOffers = (0, _Reselect.createSelector)([getCartOffersRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForOffers);
    _exports.getCartOffers = getCartOffers;
    var getCartFirstOffer = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.offers && cart.offers[0] ? cart.offers[0] : {};
    });
    _exports.getCartFirstOffer = getCartFirstOffer;
    var getCartDevicesRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.devices;
    });
    _exports.getCartDevicesRaw = getCartDevicesRaw;
    var getCartDevices = (0, _Reselect.createSelector)([getCartDevicesRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForDevices);
    _exports.getCartDevices = getCartDevices;
    var getMobileCartDevices = (0, _Reselect.createSelector)(getCartDevices, function() {
        var devices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        return devices.filter(function(device) {
            return device.entryType !== _CartEntryTypeEnum.default.FIX;
        });
    });
    _exports.getMobileCartDevices = getMobileCartDevices;
    var cartHasMobileDevices = (0, _Reselect.createSelector)(getMobileCartDevices, function(devices) {
        return devices && devices.length > 0;
    });
    _exports.cartHasMobileDevices = cartHasMobileDevices;
    var getCartDiscountsRaw = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.bonuses;
    });
    _exports.getCartDiscountsRaw = getCartDiscountsRaw;
    var getCartDiscounts = (0, _Reselect.createSelector)([getCartDiscountsRaw, getPriceIsNet], _NetGrossUtils.default.chooseNetOrGrossPriceForDevices);
    _exports.getCartDiscounts = getCartDiscounts;
    var getEntryType = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.entryType;
    });
    _exports.getEntryType = getEntryType;
    var getNumberOfCartEntries = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries ? entries.length : 0;
    });
    _exports.getNumberOfCartEntries = getNumberOfCartEntries;
    var getSaleOfAddonsEntry = (0, _Reselect.createSelector)(getCartEntriesRaw, function(entries) {
        return entries ? entries.filter(function(entry) {
            return entry.processType === 'SALE_OF_ADDONS';
        }).pop() : null;
    });
    var getSaleOfAddonsProducts = (0, _Reselect.createSelector)(getSaleOfAddonsEntry, function(entry) {
        return entry ? entry.vases : [];
    });
    var containsEmptySaleOfAddonsEntry = (0, _Reselect.createSelector)([getSaleOfAddonsEntry, getSaleOfAddonsProducts], function(entry, products) {
        if (!entry) {
            return false;
        }

        return products ? products.length === 0 : true;
    });
    _exports.containsEmptySaleOfAddonsEntry = containsEmptySaleOfAddonsEntry;
    var getHasMiniCartData = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.hasMiniCartData;
    });
    _exports.getHasMiniCartData = getHasMiniCartData;
    var getHasCartData = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.hasCartData;
    });
    _exports.getHasCartData = getHasCartData;
    var getMobileVasUpdatingStatus = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.mobileVasUpdating;
    });
    _exports.getMobileVasUpdatingStatus = getMobileVasUpdatingStatus;
    var isAnyMobileVasUpdating = (0, _Reselect.createSelector)(getMobileVasUpdatingStatus, function(updating) {
        var ret = false;
        console.log(updating);
        if (updating)
            for (var i = 0; i < updating.length; i++) {
                console.log("isAnyMobileVasUpdating", updating[i]);

                if (updating[i]) {
                    var values = Object.values(updating[i]);
                    console.log("isAnyMobileVasUpdating", values);

                    for (var j = 0; j < values.length; j++) {
                        console.log("isAnyMobileVasUpdating", values[j] == _VasUpdateStatus.default.UPDATING);
                        if (values[j] == _VasUpdateStatus.default.UPDATING) return true;
                    }
                }
            }
        console.log("isAnyMobileVasUpdating", false);
        return false;
    });
    _exports.isAnyMobileVasUpdating = isAnyMobileVasUpdating;
    var hasRetention = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return !!(entries && entries.filter(function(e) {
            return e.processType == 'RETENTION';
        }).length);
    });
    _exports.hasRetention = hasRetention;
    var hasWakizashi = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return !!(entries && entries.filter(function(e) {
            return e.processType == 'INSTALMENT_SALES_OF_GOODS';
        }).length);
    });
    _exports.hasWakizashi = hasWakizashi;
    var getCartMobileMetadata = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.mobile;
    });
    _exports.getCartMobileMetadata = getCartMobileMetadata;
    var getMobileVasMetadata = (0, _Reselect.createSelector)(getCartMobileMetadata, function(mobile) {
        return mobile.mobileVasMetadata;
    });
    _exports.getMobileVasMetadata = getMobileVasMetadata;
    var getCartFixMetadata = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.fix;
    });
    _exports.getCartFixMetadata = getCartFixMetadata;
    var getFixConfigurablesMetadata = (0, _Reselect.createSelector)(getCartFixMetadata, function(fix) {
        return fix.fixConfigurablesMetadata;
    });
    _exports.getFixConfigurablesMetadata = getFixConfigurablesMetadata;
    var getTvModalVisibility = (0, _Reselect.createSelector)(getCartFixMetadata, function(fix) {
        return fix.tvModalVisibility;
    });
    _exports.getTvModalVisibility = getTvModalVisibility;
    var getTvFilteredModalVisibility = (0, _Reselect.createSelector)(getCartFixMetadata, function(fix) {
        return fix.tvFilteredModalVisibility;
    });
    _exports.getTvFilteredModalVisibility = getTvFilteredModalVisibility;
    var getCartB2BMetadata = (0, _Reselect.createSelector)(getCartMetadata, function(metadata) {
        return metadata.b2b;
    });
    _exports.getCartB2BMetadata = getCartB2BMetadata;
    var getB2BVasesModalVisibility = (0, _Reselect.createSelector)(getCartB2BMetadata, function(b2b) {
        return b2b.b2bVasesModalVisibility;
    });
    _exports.getB2BVasesModalVisibility = getB2BVasesModalVisibility;

    var getResourceModal = function getResourceModal(state) {
        return state.cart.resourcesModal;
    };

    _exports.getResourceModal = getResourceModal;
    var getResourceModalBundleNo = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.bundleNo;
    });
    _exports.getResourceModalBundleNo = getResourceModalBundleNo;
    var getMsisdns = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.msisdnComponent.msisdns;
    });
    _exports.getMsisdns = getMsisdns;
    var getSimCards = (0, _Reselect.createSelector)([getResourceModal, getResourceModalBundleNo], function(resMod, bundleNo) {
        return resMod.simCardComponent.simCards[bundleNo] || [];
    });
    _exports.getSimCards = getSimCards;
    var getMsisdn = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.msisdnComponent.msisdn;
    });
    _exports.getMsisdn = getMsisdn;
    var getSimCard = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.simCardComponent.simCard;
    });
    _exports.getSimCard = getSimCard;
    var getResourcesMsg = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.resourcesMsg;
    });
    _exports.getResourcesMsg = getResourcesMsg;
    var isResourceModalVisible = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.visible;
    });
    _exports.isResourceModalVisible = isResourceModalVisible;
    var getEntryForResourceModal = (0, _Reselect.createSelector)([getResourceModalBundleNo, allCartEntries], function(bundleNo) {
        var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _entries$filter = entries.filter(function(entry) {
                return entry.bundleNo === bundleNo;
            }),
            _entries$filter2 = babelHelpers.slicedToArray(_entries$filter, 1),
            _entries$filter2$ = _entries$filter2[0],
            entry = _entries$filter2$ === void 0 ? {} : _entries$filter2$;

        return entry;
    });
    _exports.getEntryForResourceModal = getEntryForResourceModal;
    var changingMsisdn = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.msisdnComponent.changingMsisdn;
    });
    _exports.changingMsisdn = changingMsisdn;
    var changingSimCard = (0, _Reselect.createSelector)(getResourceModal, function(resMod) {
        return resMod.simCardComponent.changingSimCard;
    });
    _exports.changingSimCard = changingSimCard;

    var getLowerInstallments = function getLowerInstallments(state) {
        return state.cart.lowerInstallments;
    };

    _exports.getLowerInstallments = getLowerInstallments;
    var getLowerInstallmentsBundleNo = (0, _Reselect.createSelector)(getLowerInstallments, function(lowerInstallments) {
        return lowerInstallments.bundleNo;
    });
    _exports.getLowerInstallmentsBundleNo = getLowerInstallmentsBundleNo;
    var getEntryForLowerInstallmentsModal = (0, _Reselect.createSelector)([getLowerInstallmentsBundleNo, allCartEntries], function(bundleNo) {
        var entries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _entries$filter3 = entries.filter(function(entry) {
                return entry.bundleNo === bundleNo;
            }),
            _entries$filter4 = babelHelpers.slicedToArray(_entries$filter3, 1),
            _entries$filter4$ = _entries$filter4[0],
            entry = _entries$filter4$ === void 0 ? {} : _entries$filter4$;

        return entry;
    });
    _exports.getEntryForLowerInstallmentsModal = getEntryForLowerInstallmentsModal;
    var isLowerInstallmentsModalVisible = (0, _Reselect.createSelector)(getLowerInstallments, function(lowerInstallments) {
        return lowerInstallments.visibleModal;
    });
    _exports.isLowerInstallmentsModalVisible = isLowerInstallmentsModalVisible;
    var getContractRoleByBundleNo = (0, _Reselect.createSelector)(allCartEntries, function(allEntries) {
        return (allEntries || []).reduce(function(prev, current) {
            prev[current.bundleNo] = current.contractRole;
            return prev;
        }, {});
    });
    _exports.getContractRoleByBundleNo = getContractRoleByBundleNo;
    var getProcessTypesIncludeAssignment = (0, _Reselect.createSelector)(getBundlesProcessType, function(processType) {
        return processType.length !== 0 && !processType.includes("ASSIGNMENT_DEATH") && _OnlineUtils.default.isAnyAssignmentFromList(processType);
    });
    _exports.getProcessTypesIncludeAssignment = getProcessTypesIncludeAssignment;
    var getCartMonthlyRows = (0, _Reselect.createSelector)([getCartOneTimeCost, getCartMonthlyCosts], function(oneTimeCost, monthlyCosts) {
        var entries = [];

        if (monthlyCosts) {
            monthlyCosts.map(function(mc, index) {
                var otp = "";

                if (index === 0 && oneTimeCost.price) {
                    entries.push({
                        monthlyPrice: mc.price,
                        oneTimePrice: _OnlineUtils.default.formatPrice(oneTimeCost.price) + " " + oneTimeCost.currency,
                        monthFrom: mc.monthFrom ? mc.monthFrom : 1,
                        monthTo: mc.monthFrom ? mc.monthFrom : 1,
                        highlighted: true,
                        currency: mc.currency
                    });

                    if (!(mc.monthTo === 1)) {
                        entries.push({
                            monthlyPrice: mc.price,
                            oneTimePrice: otp,
                            monthFrom: mc.monthFrom + 1,
                            monthTo: mc.monthTo,
                            highlighted: false,
                            currency: mc.currency
                        });
                    }
                } else {
                    entries.push({
                        monthlyPrice: mc.price,
                        oneTimePrice: otp,
                        monthFrom: mc.monthFrom,
                        monthTo: mc.monthTo,
                        highlighted: false,
                        currency: mc.currency
                    });
                }
            });
        }

        return entries;
    });
    _exports.getCartMonthlyRows = getCartMonthlyRows;
    var getCartCode = (0, _Reselect.createSelector)(getCartData, function(cartData) {
        return cartData.code;
    });
    _exports.getCartCode = getCartCode;
    var getCartSummaryTableRows = (0, _Reselect.createSelector)([getCartCheckoutCost, getCartMonthlyRows, getPriceIsNet], function(checkoutCost, rows, priceIsNet) {
        var entries = [];

        if (checkoutCost) {
            var oneTimeCostVal = _OnlineUtils.default.formatPrice(checkoutCost.priceGross) + " " + checkoutCost.currency;

            if (isBusinessClient(checkoutCost) || priceIsNet) {
                oneTimeCostVal = _OnlineUtils.default.formatPrice(checkoutCost.priceNet) + " " + checkoutCost.currency + (isBusinessClient(checkoutCost) ? " + VAT" : "");
            }

            entries.push({
                monthlyPrice: 0,
                oneTimePrice: oneTimeCostVal,
                highlighted: true
            });
        }

        rows.map(function(r) {
            return entries.push(r);
        });
        return entries;
    });
    _exports.getCartSummaryTableRows = getCartSummaryTableRows;
    var getOfferDescription = (0, _Reselect.createSelector)([getCartDevices, getCartOffers], function() {
        var devices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var offerDescriptions = [];
        var deviceDescriptions = [];
        offers.map(function(offer) {
            return offerDescriptions.push(offer.planName);
        });
        devices.map(function(device) {
            return deviceDescriptions.push(device.description);
        });
        return offerDescriptions.join(", ") + (deviceDescriptions.length ? " + " + deviceDescriptions.join(", ") : "");
    });
    _exports.getOfferDescription = getOfferDescription;
    var getOfferMsisdn = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.length > 0 ? entries[0].msisdn : "";
    });
    _exports.getOfferMsisdn = getOfferMsisdn;
    var getOfferLoyaltyLength = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.length > 0 ? entries[0].loyaltyLength : "";
    });
    _exports.getOfferLoyaltyLength = getOfferLoyaltyLength;
    var isSatTechnologyEntry = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.some(function(entry) {
            return entry.entries && entry.entries.some(function(subEntry) {
                return subEntry.technology === _Technology.default.SAT;
            });
        });
    });
    _exports.isSatTechnologyEntry = isSatTechnologyEntry;
    var isDslTechnologyEntry = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.some(function(entry) {
            return entry.entries && entry.entries.some(function(subEntry) {
                return _Technology.default.isXDSL(subEntry.technology);
            });
        });
    });
    _exports.isDslTechnologyEntry = isDslTechnologyEntry;
    var isTvSubEntry = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.some(function(entry) {
            return entry.entries && entry.entries.some(function(subEntry) {
                return subEntry.subEntryType === _SectionEntryTypeEnum.default.TV;
            });
        });
    });
    _exports.isTvSubEntry = isTvSubEntry;

    var createGetPricesForPeriodSelector = function createGetPricesForPeriodSelector() {
        function fixDevicePrecondition(device) {
            return device.entryType === "FIX" && (fixDeviceMonthlyCostsPrecondition(device) || fixDevicePayPrecondition(device));
        }

        function fixDeviceMonthlyCostsPrecondition(device) {
            return device.monthlyCosts && device.monthlyCosts.length > 0;
        }

        function fixDevicePayPrecondition(device) {
            return device.fixPayOnFirstBill && device.payNowCost && device.payNowCost.price > 0;
        }

        return (0, _Reselect.createSelector)([getCartCheckoutCost, getCartServices, getCartOffers, getCartDevices, getCartDiscounts, function(_, props) {
            return {
                monthFrom: props.entry.monthFrom,
                monthTo: props.entry.monthTo
            };
        }, getPriceIsNet], function(checkoutCost) {
            var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var offers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var devices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var discounts = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var period = arguments.length > 5 ? arguments[5] : undefined;
            var getPriceIsNet = arguments.length > 6 ? arguments[6] : undefined;
            var pricesForPeriod = [];
            var isBusinessClient = false;

            if (checkoutCost) {
                isBusinessClient = checkoutCost.isBusinessClient;
            }

            var priceIsNet = isBusinessClient || getPriceIsNet;

            if (!period.monthFrom) {
                offers.map(function(offer) {
                    if (offer.payNowCost) pricesForPeriod.push(getPayNowPrice(offer.payNowCost, offer.description, isBusinessClient, priceIsNet));
                });
                services.map(function(service) {
                    if (service.payNowCost) pricesForPeriod.push(getPayNowPrice(service.payNowCost, service.description, isBusinessClient, priceIsNet));
                });
                devices.filter(function(device) {
                    return !(device.fixPayOnFirstBill && device.payNowCost && device.payNowCost.price > 0);
                }).map(function(device) {
                    if (device.payNowCost) pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet));
                });
            } else {
                var loyaltyLength = offers.reduce(function(max, offer) {
                    return Math.max(max, offer.loyaltyLength);
                }, 0);
                var isPeriodInLoyalty = period.monthTo <= loyaltyLength || loyaltyLength === 0;

                if (isPeriodInLoyalty) {
                    offers.map(function(offer) {
                        return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(offer, period, "Opłata aktywacyjna za ", "Abonament za "));
                    });
                    services.map(function(service) {
                        return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(service, period, "Opłata aktywacyjna za ", "Abonament za "));
                    });
                    devices.filter(function(device) {
                        return fixDevicePrecondition(device);
                    }).forEach(function(fixDevice) {
                        return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(fixDevice, period, "", ""));
                    });
                }

                devices.filter(function(device) {
                    return device.entryType !== "FIX";
                }).forEach(function(device) {
                    pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(device, period, "", "Rata za "));
                });

                if (isPeriodInLoyalty) {
                    discounts.map(function(discount) {
                        return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(discount, period, "", ""));
                    });
                }
            }

            return pricesForPeriod;
        });
    };

    _exports.createGetPricesForPeriodSelector = createGetPricesForPeriodSelector;

    function extractDetailedPrices(entry, period, oneTimeText, monthlyText) {
        var result = [];

        if (entry.entryType === "SIMFREE" && period.monthFrom !== null || entry.description === null && entry.oneTimeCost === null) {
            // NOR-94276 - hide in summary table viking terminal in sections "W pierwszym miesiacu", "Oplaty od 2 do 24 miesiaca"...
            return result;
        }

        if ((period.monthFrom === 1 || entry.oneTimeCost.monthFrom + 1 === period.monthFrom) && entry.oneTimeCost && entry.oneTimeCost.price > 0) {
            result.push({
                monthlyPrice: "",
                oneTimeCost: _OnlineUtils.default.formatPrice(entry.oneTimeCost.price) + " " + entry.oneTimeCost.currency,
                description: period.processType === "RETENTION" ? "Opłata za realizację oferty utrzymaniowej" : oneTimeText + entry.description
            });
        }

        if (entry.fixPayOnFirstBill && (period.monthFrom === 1 || period.monthFrom === entry.payNowCost.monthFrom) && entry.payNowCost && entry.payNowCost.price > 0) {
            result.push({
                monthlyPrice: "",
                oneTimeCost: _OnlineUtils.default.formatPrice(entry.payNowCost.price) + " " + entry.payNowCost.currency,
                description: oneTimeText + entry.description
            });
        }

        var monthlyCost = entry.monthlyCosts.find(function(cost) {
            return period.monthFrom >= cost.monthFrom && (cost.monthTo === null || period.monthTo !== null && cost.monthTo >= period.monthTo || cost.monthTo != null && period.monthTo === null && cost.monthTo > period.monthFrom);
        });

        if (monthlyCost) {
            result.push({
                monthlyPrice: _OnlineUtils.default.formatPrice(monthlyCost.price) + " " + monthlyCost.currency,
                oneTimeCost: "",
                description: monthlyText + entry.description
            });
        }

        return result;
    }

    function getPayNowPrice(payNowCost, description, isBusinessClientParam, priceIsNet) {
        var oneTimeCostVal = _OnlineUtils.default.formatPrice(payNowCost.priceGross) + " " + payNowCost.currency;
        var isBusinessClient = isBusinessClientParam !== undefined && isBusinessClientParam !== null && isBusinessClientParam === true;

        if (priceIsNet) {
            oneTimeCostVal = _OnlineUtils.default.formatPrice(payNowCost.priceNet) + " " + payNowCost.currency + (isBusinessClient ? " + VAT" : "");
        }

        return {
            oneTimeCost: oneTimeCostVal,
            description: description
        };
    }
    /*
        New Summary Details
    */


    var getMaxBundleNo = (0, _Reselect.createSelector)(getCartEntries, function(entries) {
        return entries && entries.length > 0 ? Math.max.apply(Math, babelHelpers.toConsumableArray(entries.map(function(entry) {
            return entry.bundleNo;
        }))) : 0;
    });
    _exports.getMaxBundleNo = getMaxBundleNo;
    var getCartMonthlyRowsAll = (0, _Reselect.createSelector)([getCartEntries, getCartOneTimeCost, getCartMonthlyCosts], function(minicartEntries, oneTimeCost, monthlyCosts) {
        var entries = [];

        if (minicartEntries) {
            minicartEntries.map(function(mE, i) {
                if (mE.totalMonthlyPrices) {
                    mE.totalMonthlyPrices.map(function(mc) {
                        var otp = ""; //"Logic" equal to pl.orange.opl.ecare.orderinfocomponentaddon.services.impl.DispositionsPaymentGroupingService - change both files.

                        if (mc.monthFrom === 1 && mE.totalFirstBillPrice.price) {
                            entries.push({
                                monthlyPrice: mc.price,
                                oneTimePrice: _OnlineUtils.default.formatPrice(mE.totalFirstBillPrice.price) + " " + minicartEntries[0].totalFirstBillPrice.currency,
                                monthFrom: mc.monthFrom,
                                monthTo: mc.monthFrom,
                                highlighted: true,
                                currency: mc.currency,
                                bundleNo: mE.bundleNo,
                                processType: mE.processType
                            });

                            if (!(mc.monthTo === 1)) {
                                entries.push({
                                    monthlyPrice: mc.price,
                                    oneTimePrice: otp,
                                    monthFrom: mc.monthFrom + 1,
                                    monthTo: mc.monthTo,
                                    highlighted: false,
                                    currency: mc.currency,
                                    bundleNo: mE.bundleNo,
                                    processType: mE.processType
                                });
                            }
                        } else {
                            entries.push({
                                monthlyPrice: mc.price,
                                oneTimePrice: otp,
                                monthFrom: mc.monthFrom,
                                monthTo: mc.monthTo,
                                highlighted: false,
                                currency: mc.currency,
                                bundleNo: mE.bundleNo,
                                processType: mE.processType
                            });
                        }
                    });
                }
            });
        }

        return entries;
    });
    _exports.getCartMonthlyRowsAll = getCartMonthlyRowsAll;
    var getCartPeriodsForBundles = (0, _Reselect.createSelector)([getCartEntries, getCartServices, getCartOffers, getCartDiscounts], function() {
        var minicartEntries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var offers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var discounts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        var monthlyCosts = minicartEntries.concat(services).concat(offers).concat(discounts).map(function(o) {
            return o.monthlyPrices ? _objectSpread({}, o, {
                monthlyCosts: o.monthlyPrices
            }) : o;
        });
        var periods = {};
        monthlyCosts.filter(function(o) {
            return o.bundleNo;
        }).forEach(function(o) {
            if (!periods[o.bundleNo]) {
                periods[o.bundleNo] = [];
            }

            var arr = periods[o.bundleNo];

            if (o.monthlyCosts) {
                o.monthlyCosts.forEach(function(mc) {
                    [mc.monthTo, mc.monthFrom].filter(function(notnull) {
                        return notnull;
                    }).filter(function(p) {
                        return arr.indexOf(p) == -1;
                    }).forEach(function(p) {
                        return arr.push(p);
                    });
                });
            }

            arr.sort(function(a, b) {
                return a - b;
            });
        });
        return periods;
    });
    var getCartSummaryTableDetailsRows = (0, _Reselect.createSelector)([getCartEntries, getCartCheckoutCost, getCartMonthlyRows, getCartMonthlyRowsAll, getCartPeriodsForBundles, getPriceIsNet], function(minicartEntries, checkoutCost, rowsOld, rows, periods, getPriceIsNet) {
        var entries = [];
        var oneTimeCostVal;
        var oneTimePrice;

        if (checkoutCost && minicartEntries) {
            for (var i = 0; i < minicartEntries.length; i++) {
                if (minicartEntries[i].processType === "SALE_OF_GOODS") {
                    oneTimeCostVal = _OnlineUtils.default.formatPrice(minicartEntries[i].totalCheckoutPrice.priceGross) + " " + checkoutCost.currency;

                    if (isBusinessClient(checkoutCost) || getPriceIsNet) {
                        oneTimeCostVal = _OnlineUtils.default.formatPrice(minicartEntries[i].totalCheckoutPrice.priceNet) + " " + checkoutCost.currency + (isBusinessClient(checkoutCost) ? " + VAT" : "");
                    }

                    entries.push({
                        monthlyPrice: 0,
                        oneTimePrice: oneTimeCostVal,
                        highlighted: true,
                        bundleNo: minicartEntries[i].terminals[0].bundleNo
                    });
                } else if (!!minicartEntries[i].terminals.length || !!minicartEntries[i].euroSets.length) {
                    oneTimePrice = minicartEntries[i].totalCheckoutPrice.price - minicartEntries[i].totalFirstBillPrice.price;
                    oneTimePrice = oneTimePrice.toFixed(2) || "0,00";
                    oneTimePrice = oneTimePrice + '';
                    oneTimePrice = oneTimePrice.replace('.', ',');
                    oneTimeCostVal = oneTimePrice + " " + checkoutCost.currency;
                    entries.push({
                        monthlyPrice: 0,
                        oneTimePrice: oneTimeCostVal,
                        highlighted: true,
                        bundleNo: minicartEntries[i].bundleNo
                    });
                }
            }
        }

        rows.map(function(r) {
            return entries.push(r);
        });
        return reproduceRowsAccordingToMandatoryPeriods(entries, periods);
    });
    _exports.getCartSummaryTableDetailsRows = getCartSummaryTableDetailsRows;

    var cartEntryConsiderMigrationProcess = function cartEntryConsiderMigrationProcess(cartEntry) {
        return _TransactionProcessTypeEnum.default.isMigration(cartEntry.processType) && cartEntry.msisdnVerificationData && cartEntry.msisdnVerificationData.msisdn;
    };

    var fillMigrationProcessMsisdns = function fillMigrationProcessMsisdns(cartEntries, msisdns) {
        var migrationMsisdns = cartEntries.filter(function(cartEntry) {
            return cartEntryConsiderMigrationProcess(cartEntry);
        }).map(function(cartEntry) {
            return cartEntry.msisdnVerificationData.msisdn;
        }).map(function(msisdn) {
            return formatMsisdn(msisdn);
        });
        migrationMsisdns.forEach(function(msisdn) {
            msisdns.push(msisdn);
        });
    };

    var getUniqueValues = function getUniqueValues(array) {
        return array.filter(function(element, index, self) {
            return self.indexOf(element) === index;
        });
    };

    var getOfferDescriptionForBundles = (0, _Reselect.createSelector)([getCartDevices, getCartOffers, getMaxBundleNo, getCartEntries], function() {
        var devices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var offers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var maxBundleNo = arguments.length > 2 ? arguments[2] : undefined;
        var cartEntries = arguments.length > 3 ? arguments[3] : undefined;
        var offerDescriptions = [];
        var deviceDescriptions = [];
        var msisdn = [];
        var bundleNoAndDesc = [];
        var bundleSimfreeNo;
        var entries;
        var bundleType;

        if (cartEntries) {
            entries = cartEntries.filter(function(entry) {
                return entry.processType === "SALE_OF_GOODS";
            });

            if (entries.length > 0) {
                bundleSimfreeNo = entries[0].terminals[0].bundleNo;
            }

            devices.filter(function(device) {
                return device.entryType === "SIMFREE";
            }).map(function(device) {
                return deviceDescriptions.push(device.description);
            });

            if (bundleSimfreeNo && deviceDescriptions) {
                bundleNoAndDesc.push([bundleSimfreeNo, deviceDescriptions.length ? deviceDescriptions.join(", ") : "", "Urządzenia bez umowy"]);
                offerDescriptions = [];
                deviceDescriptions = [];
                msisdn = [];
            }

            var _loop = function _loop(bundleNo) {
                entries = cartEntries.filter(function(entry) {
                    return entry.bundleNo === bundleNo;
                });

                if (entries.length > 0) {
                    bundleType = entries[0].bundleType;
                    fillMigrationProcessMsisdns(entries, msisdn);
                }

                offers.filter(function(offer) {
                    return offer.bundleNo === bundleNo;
                }).map(function(offer) {
                    offerDescriptions.push(offer.planName);
                    !!offer.msisdn && offer.msisdn.length === 9 && msisdn.push(formatMsisdn(offer.msisdn));
                });
                devices.filter(function(device) {
                    return device.entryType !== "SIMFREE";
                }).filter(function(device) {
                    return device.bundleNo === bundleNo;
                }).map(function(device) {
                    return deviceDescriptions.push(device.description);
                });
                msisdn = getUniqueValues(msisdn);
                bundleNoAndDesc.push([bundleNo, offerDescriptions.join(", ") + (deviceDescriptions.length ? " + " + deviceDescriptions.join(", ") : ""), offerDescriptions.length && deviceDescriptions.length ? getTitleForBundleType(bundleType, msisdn, true) : getTitleForBundleType(bundleType, msisdn, false)]);
                offerDescriptions = [];
                deviceDescriptions = [];
                msisdn = [];
            };

            for (var bundleNo = 1; bundleNo <= maxBundleNo; bundleNo++) {
                _loop(bundleNo);
            }
        }

        return bundleNoAndDesc;
    });
    _exports.getOfferDescriptionForBundles = getOfferDescriptionForBundles;

    var formatMsisdn = function formatMsisdn(msisdn) {
        return msisdn.substring(0, 3) + "\xA0" + msisdn.substring(3, 6) + "\xA0" + msisdn.substring(6, msisdn.length);
    };

    var getTitleForBundleType = function getTitleForBundleType(bundleType, msisdn, isDevice) {
        var title;

        switch (bundleType) {
            case 'VOICE': {
                title = isDevice ? "Abonament komórkowy z telefonem" : "Abonament komórkowy";
                break;
            }

            case 'DATA': {
                title = isDevice ? "Internet mobilny z urządzeniem" : "Internet mobilny";
                break;
            }

            case 'SIMFREE_INST': {
                title = 'Urządzenia bez abonamentu na raty';
                break;
            }

            default: {
                title = isDevice ? "Abonament z telefonem" : "Abonament";
                break;
            }
        }

        return msisdn.length > 0 ? title.concat(" (" + msisdn + ")") : title;
    };

    var getPricesForPeriodSelectorForBundles = function getPricesForPeriodSelectorForBundles() {
        return (0, _Reselect.createSelector)([getCartEntries, getCartCheckoutCost, getCartServices, getCartOffers, getCartDevices, getCartDiscounts, function(_, props) {
            return {
                monthFrom: props.entry.monthFrom,
                monthTo: props.entry.monthTo,
                bundleNo: props.bundleNo,
                processType: props.entry.processType
            };
        }, getPriceIsNet], function(minicartEntries, checkoutCost) {
            var services = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var offers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var devices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
            var discounts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
            var period = arguments.length > 6 ? arguments[6] : undefined;
            var getPriceIsNet = arguments.length > 7 ? arguments[7] : undefined;
            var pricesForPeriod = [];
            var isBusinessClient = false;
            var mobileDevice;

            if (checkoutCost) {
                isBusinessClient = checkoutCost.isBusinessClient;
            }

            var priceIsNet = getPriceIsNet || isBusinessClient;

            if (!period.monthFrom) {
                offers.filter(function(o) {
                    return o.bundleNo === period.bundleNo;
                }).map(function(offer) {
                    if (offer.payNowCost && (offer.payNowCost.priceNet || offer.payNowCost.priceGross)) pricesForPeriod.push(getPayNowPrice(offer.payNowCost, offer.description, isBusinessClient, priceIsNet));
                });
                services.filter(function(s) {
                    return s.bundleNo === period.bundleNo;
                }).map(function(service) {
                    if (service.payNowCost) pricesForPeriod.push(getPayNowPrice(service.payNowCost, service.description, isBusinessClient, priceIsNet));
                });
                mobileDevice = devices.filter(function(d) {
                    return d.entryType !== "SIMFREE";
                }).filter(function(d) {
                    return d.bundleNo === period.bundleNo;
                });

                if (mobileDevice.length > 0) {
                    mobileDevice.map(function(device) {
                        if (device.payNowCost) pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet));
                    });
                } else {
                    devices.filter(function(d) {
                        return d.entryType === "SIMFREE";
                    }).map(function(device) {
                        if (device.payNowCost) pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet));
                    });
                }
            } else {
                offers.filter(function(o) {
                    return o.bundleNo === period.bundleNo;
                }).map(function(offer) {
                    return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(offer, period, "Opłata aktywacyjna za ", "Abonament za "));
                });
                discounts.filter(function(disc) {
                    return disc.bundleNo === period.bundleNo;
                }).map(function(discount) {
                    return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(discount.monthlyCosts[discount.monthlyCosts.length - 1].monthTo === null ? changePeriod(discount, period.bundleNo, minicartEntries) : discount, period, "", ""));
                });
                services.filter(function(s) {
                    return s.bundleNo === period.bundleNo;
                }).map(function(service) {
                    return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices((babelHelpers.toConsumableArray(service.monthlyCosts).pop() || {}).monthTo === null ? changePeriod(service, period.bundleNo, minicartEntries) : service, period, "Opłata aktywacyjna za ", "Abonament za "));
                });
                devices.filter(function(d) {
                    return d.entryType !== "SIMFREE";
                }).filter(function(d) {
                    return d.bundleNo === period.bundleNo;
                }).map(function(device) {
                    return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(device.monthlyCosts[device.monthlyCosts.length - 1].monthTo === null ? changePeriod(device, period.bundleNo, minicartEntries) : device, period, "", device.entryType === "FIX" ? "" : "Rata za "));
                });
                devices.filter(function(d) {
                    return d.entryType === "SIMFREE";
                }).map(function(device) {
                    return pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(device, period, "", device.entryType === "FIX" ? "" : "Rata za "));
                });
            }

            return pricesForPeriod;
        });
    };

    _exports.getPricesForPeriodSelectorForBundles = getPricesForPeriodSelectorForBundles;

    function changePeriod(entry, bundleNo, minicartEntries) {
        var loyaltyLengthForBundle = minicartEntries.find(function(mE) {
            return mE.bundleNo === bundleNo;
        }).loyaltyLength;
        if (loyaltyLengthForBundle > 0) entry.monthlyCosts[entry.monthlyCosts.length - 1].monthTo = loyaltyLengthForBundle;
        return entry;
    }

    function isBusinessClient(checkoutCost) {
        return checkoutCost.isBusinessClient !== undefined && checkoutCost.isBusinessClient !== null && checkoutCost.isBusinessClient === true;
    }

    function reproduceRowsAccordingToMandatoryPeriods(rows, mandatoryPeriodsForBundle) {
        function containsPeriod(rows, period) {
            return rows.filter(function(r) {
                return r.monthTo == period || r.monthFrom == period;
            })[0] != undefined;
        }

        function splitInPeriod(rows, period) {
            var ret = [];
            rows.forEach(function(r) {
                if (r.monthTo < period) {
                    ret.push(r);
                } else if (r.monthFrom > period) {
                    ret.push(r);
                } else {
                    //reproduce
                    var r1 = _objectSpread({}, r);

                    var r2 = _objectSpread({}, r);

                    r1.monthTo = period;
                    r2.monthFrom = period + 1;
                    ret.push(r1);
                    ret.push(r2);
                }
            });
            return ret;
        }

        var bundles = [];
        rows.forEach(function(row) {
            if (bundles.indexOf(row.bundleNo) == -1) {
                bundles.push(row.bundleNo);
            }
        });
        var ret = [];
        bundles.forEach(function(bundleNo) {
            var rowsForBundle = rows.filter(function(r) {
                return r.bundleNo == bundleNo;
            });
            var periods = mandatoryPeriodsForBundle[bundleNo];
            periods.forEach(function(period) {
                if (!containsPeriod(rowsForBundle, period)) {
                    rowsForBundle = splitInPeriod(rowsForBundle, period);
                }
            });
            ret = ret.concat(rowsForBundle);
        });
        return ret;
    }

    var getCartState = function getCartState(state) {
        return state["cart"];
    };

    _exports.getCartState = getCartState;
    var getVoucherData = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.voucher;
    });
    _exports.getVoucherData = getVoucherData;
    var getVoucherCode = (0, _Reselect.createSelector)(getVoucherData, function(voucher) {
        return voucher.voucherCode;
    });
    _exports.getVoucherCode = getVoucherCode;
    var getVoucherError = (0, _Reselect.createSelector)(getVoucherData, function(voucher) {
        return voucher.error;
    });
    _exports.getVoucherError = getVoucherError;
    var getVoucherMetadata = (0, _Reselect.createSelector)(getVoucherData, function(voucher) {
        return voucher.metadata;
    });
    _exports.getVoucherMetadata = getVoucherMetadata;
    var getVoucherApplicableProductsRequested = (0, _Reselect.createSelector)(getVoucherMetadata, function(metadata) {
        return metadata.loading;
    });
    _exports.getVoucherApplicableProductsRequested = getVoucherApplicableProductsRequested;
    var getVoucherApplicableProducts = (0, _Reselect.createSelector)(getVoucherData, function(voucher) {
        return voucher.applicableProducts;
    });
    _exports.getVoucherApplicableProducts = getVoucherApplicableProducts;
    var getVoucherName = (0, _Reselect.createSelector)(getVoucherData, function(voucher) {
        return voucher.voucherName;
    });
    _exports.getVoucherName = getVoucherName;
    var getDepositCost = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.checkoutCost ? cart.checkoutCost.deposit : 0;
    });
    _exports.getDepositCost = getDepositCost;

    var getTerminalForBundleAndEntryNumber = function getTerminalForBundleAndEntryNumber(bundleNumber, entryNumber) {
        return (0, _Reselect.createSelector)(getCartEntries, function(cartEntries) {
            return cartEntries.reduce(function(terminals, cartEntry) {
                return [].concat(babelHelpers.toConsumableArray(terminals), babelHelpers.toConsumableArray(cartEntry.terminals));
            }, []).find(function(terminal) {
                return terminal.bundleNo === bundleNumber && terminal.entryNo === entryNumber;
            });
        });
    };

    _exports.getTerminalForBundleAndEntryNumber = getTerminalForBundleAndEntryNumber;

    var getCartEntryById = function getCartEntryById(id) {
        return (0, _Reselect.createSelector)(getCartEntries, function(cartEntries) {
            return cartEntries.find(function(cartEntry) {
                return cartEntry.bundleNo = id;
            });
        });
    };

    _exports.getCartEntryById = getCartEntryById;
    var isVasModalOpen = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.vasModalStatus;
    });
    _exports.isVasModalOpen = isVasModalOpen;
    var isBonusModalOpen = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.bonusModalStatus;
    });
    _exports.isBonusModalOpen = isBonusModalOpen;
    var getBonusEntry = (0, _Reselect.createSelector)(getCartData, function(cart) {
        return cart.bonuses || [];
    });
    _exports.getBonusEntry = getBonusEntry;
    var getPaymentPlanAssignValue = (0, _Reselect.createSelector)(getAssignmnetData, function(assignment) {
        return assignment.isPaymentPlanAssigned;
    });
    _exports.getPaymentPlanAssignValue = getPaymentPlanAssignValue;
    var getDeathCertificateConfirmed = (0, _Reselect.createSelector)(getAssignmnetData, function(assignment) {
        return assignment.isDeathCertificateConfirmed;
    });
    _exports.getDeathCertificateConfirmed = getDeathCertificateConfirmed;
    var getEntryUnderChange = (0, _Reselect.createSelector)([getCartEntries, getAddTerminalToOfferBundleNo], function(cartEntries, addTerminalToOfferBundleNo) {
        if (addTerminalToOfferBundleNo && cartEntries) {
            return cartEntries.find(function(e) {
                return e.bundleNo == addTerminalToOfferBundleNo;
            });
        }
    });
    _exports.getEntryUnderChange = getEntryUnderChange;
    var getChangedDevice = (0, _Reselect.createSelector)(getEntryUnderChange, function(entry) {
        return takeDevice(entry);
    });
    _exports.getChangedDevice = getChangedDevice;
    var getKdrData = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.kdrData;
    });
    _exports.getKdrData = getKdrData;
    var getKdrNumber = (0, _Reselect.createSelector)(getKdrData, function(kdr) {
        return kdr.kdrNumber || "";
    });
    _exports.getKdrNumber = getKdrNumber;
    var getKdrSource = (0, _Reselect.createSelector)(getKdrData, function(kdr) {
        return kdr.kdrSource || "";
    });
    _exports.getKdrSource = getKdrSource;
    var getKdrErrors = (0, _Reselect.createSelector)(getKdrData, function(kdr) {
        return kdr.error;
    });
    _exports.getKdrErrors = getKdrErrors;
    var getKdrSaving = (0, _Reselect.createSelector)(getKdrData, function(kdr) {
        return kdr.saving;
    });
    _exports.getKdrSaving = getKdrSaving;
    var getKdrAccepted = (0, _Reselect.createSelector)(getKdrData, function(kdr) {
        return !!kdr.accepted;
    });
    _exports.getKdrAccepted = getKdrAccepted;
    var getKdrCheckoutData = (0, _Reselect.createSelector)([getKdrNumber, getKdrSource], function(number, source) {
        return {
            number: number,
            source: source
        };
    });
    _exports.getKdrCheckoutData = getKdrCheckoutData;
    var hasOnlyAssignment = (0, _Reselect.createSelector)(getCartEntriesRaw, function(entries) {
        return entries && entries.length && entries.every(function(entry) {
            return _TransactionProcessTypeEnum.default.isAssignment(entry.processType);
        });
    });
    _exports.hasOnlyAssignment = hasOnlyAssignment;
    var getCustomFilters = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.tvPackagesFilters;
    });
    _exports.getCustomFilters = getCustomFilters;
    var isWwwChannel = (0, _Reselect.createSelector)(getMiniCart, function(miniCart) {
        return miniCart.isWwwChannel;
    });
    _exports.isWwwChannel = isWwwChannel;
    var getLeadId = (0, _Reselect.createSelector)(getMiniCart, function(miniCart) {
        return miniCart.leadId;
    });
    _exports.getLeadId = getLeadId;
    var getInvoiceData = (0, _Reselect.createSelector)(getCartState, function(cart) {
        return cart.invoiceData;
    });
    _exports.getInvoiceData = getInvoiceData;
    var getChangePackagesModalInitData = (0, _Reselect.createSelector)(getMobileVases, getCartEntries, function(vases, entries) {
        if (vases.length === 0) {
            return {};
        }

        var VAS_PACKAGE_CATEGORY = "GratisPackageBonuses";
        var vasByPropositionId = (vases || []).reduce(function(a, b) {
            return _objectSpread({}, a, babelHelpers.defineProperty({}, b.propositionId, b));
        }, {});
        var ret = (entries || []).map(function(entry) {
            //FROM ENTRY
            var v = vasByPropositionId[entry.bundleCode];
            if (!v) return;
            var cartPackagesCodes = (entry && entry.vases || []).filter(function(v) {
                return (v.categories || []).includes(VAS_PACKAGE_CATEGORY);
            }).map(function(v) {
                return v.productCode;
            });
            var cartVases = (entry && entry.vases || []).filter(function(v) {
                return !(v.categories || []).includes(VAS_PACKAGE_CATEGORY);
            }); //FORM AVAILABLE VASES

            var gratisPackageBonuses = v.categorizedBonuses && v.categorizedBonuses[VAS_PACKAGE_CATEGORY];
            var groups = gratisPackageBonuses && gratisPackageBonuses.groups || [];
            var services = gratisPackageBonuses && gratisPackageBonuses.services || [];
            var exclusions = calculatePackagesExclusions(services, cartVases, v.relations);
            console.log("exclusions: ");
            console.log(exclusions);
            var packets = services.map(function(p) {
                return _objectSpread({}, p.longDescriptionInJsonFormat, {
                    id: p.id,
                    title: p.title,
                    weight: p.weight || 1,
                    warning: exclusions.filter(function(e) {
                        return e.packets.includes(p.id);
                    }).map(function(e) {
                        return e.warning;
                    })[0]
                });
            });
            return {
                bundleNo: entry.bundleNo,
                data: {
                    plan: {
                        name: entry && entry.planName,
                        capacity: calculatePackageCapacity(services, groups)
                    },
                    packets: packets,
                    selected: cartPackagesCodes
                }
            };
        }).filter(function(notNull) {
            return notNull;
        }).reduce(function(a, b) {
            return _objectSpread({}, a, babelHelpers.defineProperty({}, b.bundleNo, b.data));
        }, {});
        return ret;
    });
    _exports.getChangePackagesModalInitData = getChangePackagesModalInitData;

    function calculatePackagesExclusions(packages, cartVases, relations) {
        var availablePacketsCodes = packages.map(function(s) {
            return s.id;
        });
        return (relations || []).filter(function(r) {
            return r.type == "EXCLUDE";
        }).map(function(r) {
            return {
                warnings: cartVases.filter(function(v) {
                    return [].concat(babelHelpers.toConsumableArray(r.sourceVases), babelHelpers.toConsumableArray(r.targetVases)).includes(v.productCode);
                }).map(function(v) {
                    return {
                        id: v.productCode,
                        name: v.name
                    };
                }),
                packets: [].concat(babelHelpers.toConsumableArray(r.sourceVases), babelHelpers.toConsumableArray(r.targetVases)).filter(function(value) {
                    return availablePacketsCodes.includes(value);
                })
            };
        }).filter(function(r) {
            return r.warnings[0] && r.packets[0];
        }).map(function(r) {
            if (r.warnings.length > 1) {
                console.error("More than one conflict with vases in cart is not supported. Warnings: " + JSON.stringify(r.warnings) + ". Packets: " + JSON.stringify(r.packets));
            }

            return {
                warning: r.warnings[0],
                packets: r.packets
            };
        });
    }

    function calculatePackageCapacity(services, groups) {
        if (groups.length == 0) {
            console.error("Cannot find any group");
            return 0;
        } else if (groups.length == 1) {
            return groups[0].min || 0;
        }

        var packageBonusCodesJoined = services.filter(function(p) {
            return p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code;
        }).map(function(p) {
            return p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code;
        }).sort().join();
        var capacityGroup = groups.filter(function(g) {
            return (g.targetProducts || []).sort().join() == packageBonusCodesJoined;
        })[0];
        return capacityGroup && capacityGroup.min || 0;
    }
});
//# sourceMappingURL=selectors.js.map