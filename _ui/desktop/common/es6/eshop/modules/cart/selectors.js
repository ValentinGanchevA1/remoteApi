import {
    createSelector
} from "Reselect";
import SectionEntryType from "./components/entriesList/SectionEntryTypeEnum";
import Technology from "../core/enum/Technology";
import {
    getAllCartEntries,
    isVoiceCartEntry
} from "../checkout/utils/MiniCartUtils";
import CartEntryType from "../checkout/constants/CartEntryTypeEnum";
import OnlineUtils from "eshop/utils/OnlineUtils";
import NetGrossUtils from "eshop/utils/NetGrossUtils";
import TransactionProcessType from "eshop/modules/core/constants/TransactionProcessTypeEnum";
import FactoryType from "../core/constants/FactoryTypeEnum";
import {
    convertToCartOmniCode
} from "./components/entriesList/utils/CartUtils";
import VasUpdateStatus from "../core/enum/VasUpdateStatus";

export const getFixState = state => state.fix;
export const getVoipState = createSelector(getFixState, fix => fix.voip);
export const getSelectedVoipNumber = createSelector(getVoipState, voip => voip.selectedVoipNumber);

const getCartData = state => state.cart.cartData;
export const getMiniCartData = state => state.cart.miniCartData;
const getCartMetadata = state => state.cart.metadata;
export const getManualVerificationStatus = state => state.cart.manualVerificationStatus;
export const getAddTerminalToOfferBundleNo = state => state.cart.addTerminalToOfferBundleNo;

export const getAssignmnetData = state => state.cart.assignment;

export const getProductCodeByBundleNo = () => {
    return createSelector(
        [allCartEntries, getAddTerminalToOfferBundleNo],
        (entries = [], bundleNo) => {
            let entry = entries.find(o => o.bundleNo == bundleNo);
            return entry && takeDeviceCode(entry);
        }
    )
}



export const getMagnumBundleTemplate = () => {
    return createSelector(
        [allCartEntries, getAddTerminalToOfferBundleNo],
        (entries = [], bundleNo) => {
            let entry = entries.find(o => o.bundleNo == bundleNo);
            return entry && entry.propositionId;
        }
    )
}

export const getMagnumOfferId = () => {
    return createSelector(
        [allCartEntries, getAddTerminalToOfferBundleNo],
        (entries = [], bundleNo) => {
            let entry = entries.find(o => o.bundleNo == bundleNo);
            return entry && entry.productCode;
        }
    )
}

const takeDeviceCode = (entry) => {
    if (entry && entry.terminals.length > 0) {
        return entry.terminals[0].productCode;
    } else if (entry && entry.euroSets.length > 0) {
        return entry.euroSets[0].productCode;
    } else {
        return
    }
}
const takeDevice = (entry) => {
    if (entry && entry.terminals.length > 0) {
        return entry.terminals[0];
    } else if (entry && entry.euroSets.length > 0) {
        return entry.euroSets[0];
    } else {
        return
    }
}
export const getBaseProductIdForBundle = () => {
    return createSelector(
        [
            getCartOffers, (_, bundleNoFromProps) => ({
                bundleNo: bundleNoFromProps,
            })
        ],
        (offers = [], bundleNo) => {
            let offer = offers.filter(o => o.bundleNo == bundleNo.bundleNo);
            return offer[0] && offer[0].baseProductId;
        }
    )
}

export const getFixConfigurables = (state) => {
    if (state.cart.convergentConfigurables.configurables && state.cart.convergentConfigurables.configurables.length > 0) {
        return state.cart.convergentConfigurables.configurables.filter(configurables => configurables.factoryName === FactoryType.FIX);
    } else {
        return state.cart.fixConfigurables;
    }
}

export const getTvPackages = createSelector(getFixConfigurables, configurables => configurables && configurables[0] && configurables[0].tvPackages);
export const shouldDisplayLoyaltyDurationChoice = createSelector(getTvPackages, tvPackages => {
    if (tvPackages) {
        const availableLoyaltyDuration = tvPackages.filter((tvPackage) => tvPackage.provider === 'NC').map((tvPackage) => tvPackage.loyaltyDuration);
        return [12, 24].every(duration => availableLoyaltyDuration.includes(duration));
    }
    return false;
});
export const getBundlesProcessType = state => state.cart.bundlesProcessType;
export const getCartIsNet = createSelector(getMiniCartData, miniCart => miniCart && miniCart.net);
export const getPriceIsNet = state => state.cart.priceViewIsNet;

export const isCartFix = createSelector(getMiniCartData, miniCart => miniCart.entries && !!miniCart.entries.find(entry => entry.entryType == CartEntryType.FIX));
export const isCartMobile = createSelector(getMiniCartData, miniCart => miniCart.entries && !!miniCart.entries.find(entry => entry.entryType == CartEntryType.MOBILE));
export const isMnpInCart = createSelector(getMiniCartData, miniCart => miniCart.entries && !!miniCart.entries.find(entry => entry.processType == 'MNP'));
export const getMobileVasesRaw = state => state.cart.mobileVas;
export const getMobileVases = createSelector([getMobileVasesRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForVases);

export const getCartEntriesRaw = createSelector(getMiniCartData, miniCart => miniCart && miniCart.entries);
export const getCartEntries = createSelector([getCartEntriesRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPrice);
export const getMobileCartEntries = createSelector([getCartEntries], entries => (entries || []).filter(e => e.entryType === "MOBILE"));
export const hasVoiceCartEntry = createSelector([getMobileCartEntries], entries => (entries || []).filter(entry => isVoiceCartEntry(entry)).length > 0);
export const getMiniCart = createSelector(getMiniCartData, miniCart => miniCart);
export const getOfferCount = createSelector(getMiniCartData, miniCart => miniCart.offerCount);
export const allCartEntries = createSelector(getMiniCart, miniCart => {
    if (!miniCart || !miniCart.entries) {
        return [];
    }
    return getAllCartEntries(miniCart);
});

export const getCartOmniCode = createSelector(allCartEntries, entries => entries.map(entry => convertToCartOmniCode(entry.bundleOmniCode)).reduce((result, code) => code || result, 'OMNI'));

export const getConvergentEntries = createSelector(getMiniCart, miniCart => {
    return miniCart.entries ? miniCart.entries.filter(cartEntry => cartEntry.entryType === CartEntryType.CONVERGENT) : [];
});

export const hasEntries = createSelector(getCartEntries, entries => {
    return entries && entries.length > 0
});

export const getCartCheckoutCostRaw = createSelector(getCartData, cart => cart.checkoutCost);
export const getCartCheckoutCost = createSelector([getCartCheckoutCostRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForCheckoutCost);
export const getCartOneTimeCostRaw = createSelector(getCartData, cart => cart.oneTimeCost);
export const getCartOneTimeCost = createSelector([getCartOneTimeCostRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForCartOneTimeCost);
export const getCartMonthlyCostsRaw = createSelector(getCartData, cart => cart.monthlyCosts);
export const getCartMonthlyCosts = createSelector([getCartMonthlyCostsRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForCartMonthlyCosts);
export const getCartServicesRaw = createSelector(getCartData, cart => cart.services);
export const getCartServices = createSelector([getCartServicesRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForServices);
export const getCartOffersRaw = createSelector(getCartData, cart => cart.offers);
export const getCartOffers = createSelector([getCartOffersRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForOffers);
export const getCartFirstOffer = createSelector(getCartData, cart => (cart.offers && cart.offers[0]) ? cart.offers[0] : {});


export const getCartDevicesRaw = createSelector(getCartData, cart => cart.devices);
export const getCartDevices = createSelector([getCartDevicesRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForDevices);
export const getMobileCartDevices = createSelector(getCartDevices, (devices = []) => devices.filter(device => device.entryType !== CartEntryType.FIX));
export const cartHasMobileDevices = createSelector(getMobileCartDevices, devices => devices && devices.length > 0);
export const getCartDiscountsRaw = createSelector(getCartData, cart => cart.bonuses);
export const getCartDiscounts = createSelector([getCartDiscountsRaw, getPriceIsNet], NetGrossUtils.chooseNetOrGrossPriceForDevices);
export const getEntryType = createSelector(getCartData, cart => cart.entryType);

export const getNumberOfCartEntries = createSelector(getCartEntries, entries => entries ? entries.length : 0);

const getSaleOfAddonsEntry = createSelector(getCartEntriesRaw, entries => entries ? entries.filter(entry => entry.processType === 'SALE_OF_ADDONS').pop() : null);

const getSaleOfAddonsProducts = createSelector(getSaleOfAddonsEntry, entry => {
    return entry ? entry.vases : [];
});

export const containsEmptySaleOfAddonsEntry = createSelector([getSaleOfAddonsEntry, getSaleOfAddonsProducts], (entry, products) => {
    if (!entry) {
        return false;
    }
    return products ? products.length === 0 : true;
});

export const getHasMiniCartData = createSelector(getCartMetadata, metadata => metadata.hasMiniCartData);
export const getHasCartData = createSelector(getCartMetadata, metadata => metadata.hasCartData);
export const getMobileVasUpdatingStatus = createSelector(getCartMetadata, metadata => metadata.mobileVasUpdating);
export const isAnyMobileVasUpdating = createSelector(getMobileVasUpdatingStatus, updating => {
    let ret = false;
    console.log(updating);
    if (updating)
        for (var i = 0; i < updating.length; i++) {
            console.log("isAnyMobileVasUpdating", updating[i]);
            if (updating[i]) {
                var values = Object.values(updating[i]);
                console.log("isAnyMobileVasUpdating", values);
                for (var j = 0; j < values.length; j++) {
                    console.log("isAnyMobileVasUpdating", values[j] == VasUpdateStatus.UPDATING);
                    if (values[j] == VasUpdateStatus.UPDATING) return true;

                }
            }
        }
    console.log("isAnyMobileVasUpdating", false);
    return false;
});

export const hasRetention = createSelector(getCartEntries, entries => !!(entries && entries.filter(e => e.processType == 'RETENTION').length));
export const hasWakizashi = createSelector(getCartEntries, entries => !!(entries && entries.filter(e => e.processType == 'INSTALMENT_SALES_OF_GOODS').length));

export const getCartMobileMetadata = createSelector(getCartMetadata, metadata => metadata.mobile);
export const getMobileVasMetadata = createSelector(getCartMobileMetadata, mobile => mobile.mobileVasMetadata);

export const getCartFixMetadata = createSelector(getCartMetadata, metadata => metadata.fix);
export const getFixConfigurablesMetadata = createSelector(getCartFixMetadata, fix => fix.fixConfigurablesMetadata);
export const getTvModalVisibility = createSelector(getCartFixMetadata, fix => fix.tvModalVisibility);
export const getTvFilteredModalVisibility = createSelector(getCartFixMetadata, fix => fix.tvFilteredModalVisibility);

export const getCartB2BMetadata = createSelector(getCartMetadata, metadata => metadata.b2b);
export const getB2BVasesModalVisibility = createSelector(getCartB2BMetadata, b2b => b2b.b2bVasesModalVisibility);

export const getResourceModal = state => state.cart.resourcesModal;
export const getResourceModalBundleNo = createSelector(getResourceModal, resMod => resMod.bundleNo);


export const getMsisdns = createSelector(getResourceModal, resMod => resMod.msisdnComponent.msisdns);
export const getSimCards = createSelector([getResourceModal, getResourceModalBundleNo],
    (resMod, bundleNo) => resMod.simCardComponent.simCards[bundleNo] || []);
export const getMsisdn = createSelector(getResourceModal, resMod => resMod.msisdnComponent.msisdn);
export const getSimCard = createSelector(getResourceModal, resMod => resMod.simCardComponent.simCard);
export const getResourcesMsg = createSelector(getResourceModal, resMod => resMod.resourcesMsg);
export const isResourceModalVisible = createSelector(getResourceModal, resMod => resMod.visible);
export const getEntryForResourceModal = createSelector([getResourceModalBundleNo, allCartEntries],
    (bundleNo, entries = []) => {
        const [entry = {}] = entries.filter(entry => entry.bundleNo === bundleNo);
        return entry;
    });



export const changingMsisdn = createSelector(getResourceModal, resMod => resMod.msisdnComponent.changingMsisdn);
export const changingSimCard = createSelector(getResourceModal, resMod => resMod.simCardComponent.changingSimCard);

export const getLowerInstallments = state => state.cart.lowerInstallments;
export const getLowerInstallmentsBundleNo = createSelector(getLowerInstallments, lowerInstallments => lowerInstallments.bundleNo);
export const getEntryForLowerInstallmentsModal = createSelector([getLowerInstallmentsBundleNo, allCartEntries],
    (bundleNo, entries = []) => {
        const [entry = {}] = entries.filter(entry => entry.bundleNo === bundleNo);
        return entry;
    });
export const isLowerInstallmentsModalVisible = createSelector(getLowerInstallments, lowerInstallments => lowerInstallments.visibleModal);

export const getContractRoleByBundleNo = createSelector(allCartEntries, allEntries => {
    return (allEntries || []).reduce(
        (prev, current) => {
            prev[current.bundleNo] = current.contractRole
            return prev
        }, {}
    )
});

export const getProcessTypesIncludeAssignment = createSelector(getBundlesProcessType, processType => {
    return processType.length !== 0 && !processType.includes("ASSIGNMENT_DEATH") && OnlineUtils.isAnyAssignmentFromList(processType);
});

export const getCartMonthlyRows = createSelector(
    [getCartOneTimeCost, getCartMonthlyCosts],
    (oneTimeCost, monthlyCosts) => {
        const entries = [];

        if (monthlyCosts) {
            monthlyCosts.map((mc, index) => {
                let otp = "";

                if (index === 0 && oneTimeCost.price) {

                    entries.push({
                        monthlyPrice: mc.price,
                        oneTimePrice: OnlineUtils.formatPrice(oneTimeCost.price) + " " + oneTimeCost.currency,
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
                        })
                    }
                } else {
                    entries.push({
                        monthlyPrice: mc.price,
                        oneTimePrice: otp,
                        monthFrom: mc.monthFrom,
                        monthTo: mc.monthTo,
                        highlighted: false,
                        currency: mc.currency
                    })
                }
            });
        }

        return entries;
    }
);
export const getCartCode = createSelector(getCartData,
    cartData => cartData.code
);
export const getCartSummaryTableRows = createSelector(
    [getCartCheckoutCost, getCartMonthlyRows, getPriceIsNet],
    (checkoutCost, rows, priceIsNet) => {
        const entries = [];

        if (checkoutCost) {
            let oneTimeCostVal = OnlineUtils.formatPrice(checkoutCost.priceGross) + " " + checkoutCost.currency;

            if (isBusinessClient(checkoutCost) || priceIsNet) {
                oneTimeCostVal = OnlineUtils.formatPrice(checkoutCost.priceNet) + " " + checkoutCost.currency + (isBusinessClient(checkoutCost) ? " + VAT" : "");
            }

            entries.push({
                monthlyPrice: 0,
                oneTimePrice: oneTimeCostVal,
                highlighted: true
            });
        }

        rows.map(r => entries.push(r));

        return entries;
    }
);

export const getOfferDescription = createSelector(
    [getCartDevices, getCartOffers],
    (devices = [], offers = []) => {
        let offerDescriptions = [];
        let deviceDescriptions = [];

        offers.map((offer) => offerDescriptions.push(offer.planName));
        devices.map((device) => deviceDescriptions.push(device.description));
        return offerDescriptions.join(", ") + (deviceDescriptions.length ? " + " + deviceDescriptions.join(", ") : "");
    }
);
export const getOfferMsisdn = createSelector(getCartEntries,
    entries => (entries) && entries.length > 0 ? entries[0].msisdn : ""
);
export const getOfferLoyaltyLength = createSelector(getCartEntries,
    entries => (entries) && entries.length > 0 ? entries[0].loyaltyLength : ""
);

export const isSatTechnologyEntry = createSelector(
    getCartEntries,
    entries => {
        return entries && entries.some(
            entry => entry.entries && entry.entries.some(
                subEntry => subEntry.technology === Technology.SAT
            )
        );
    }
);

export const isDslTechnologyEntry = createSelector(
    getCartEntries,
    entries => {
        return entries && entries.some(
            entry => entry.entries && entry.entries.some(
                subEntry => Technology.isXDSL(subEntry.technology)
            )
        );
    }
);

export const isTvSubEntry = createSelector(
    getCartEntries,
    entries => {
        return entries && entries.some(
            entry => entry.entries && entry.entries.some(
                subEntry => subEntry.subEntryType === SectionEntryType.TV
            )
        );
    }
);

export const createGetPricesForPeriodSelector = () => {

    function fixDevicePrecondition(device) {
        return device.entryType === "FIX" && (fixDeviceMonthlyCostsPrecondition(device) || fixDevicePayPrecondition(device));
    }

    function fixDeviceMonthlyCostsPrecondition(device) {
        return device.monthlyCosts && device.monthlyCosts.length > 0;
    }

    function fixDevicePayPrecondition(device) {
        return device.fixPayOnFirstBill && device.payNowCost && device.payNowCost.price > 0;
    }

    return createSelector(
        [getCartCheckoutCost, getCartServices, getCartOffers, getCartDevices, getCartDiscounts, (_, props) => ({
            monthFrom: props.entry.monthFrom,
            monthTo: props.entry.monthTo
        }), getPriceIsNet],
        (checkoutCost, services = [], offers = [], devices = [], discounts = [], period, getPriceIsNet) => {
            let pricesForPeriod = [];
            let isBusinessClient = false;

            if (checkoutCost) {
                isBusinessClient = checkoutCost.isBusinessClient;
            }

            let priceIsNet = isBusinessClient || getPriceIsNet

            if (!period.monthFrom) {
                offers.map((offer) => {
                    if (offer.payNowCost)
                        pricesForPeriod.push(getPayNowPrice(offer.payNowCost, offer.description, isBusinessClient, priceIsNet))
                });
                services.map((service) => {
                    if (service.payNowCost)
                        pricesForPeriod.push(getPayNowPrice(service.payNowCost, service.description, isBusinessClient, priceIsNet))
                });
                devices.filter(device => !(device.fixPayOnFirstBill && device.payNowCost && device.payNowCost.price > 0)).map((device) => {
                    if (device.payNowCost)
                        pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet))
                });
            } else {
                const loyaltyLength = offers.reduce((max, offer) => Math.max(max, offer.loyaltyLength), 0);
                const isPeriodInLoyalty = period.monthTo <= loyaltyLength || loyaltyLength === 0;
                if (isPeriodInLoyalty) {
                    offers.map((offer) => pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(offer, period, "Opłata aktywacyjna za ", "Abonament za ")));
                    services.map((service) => pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(service, period, "Opłata aktywacyjna za ", "Abonament za ")));
                    devices.filter(device => fixDevicePrecondition(device))
                        .forEach(fixDevice => pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(fixDevice, period, "", "")));
                }
                devices.filter(device => device.entryType !== "FIX").forEach(device => {
                    pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(device, period, "", "Rata za "));
                });
                if (isPeriodInLoyalty) {
                    discounts.map((discount) => pricesForPeriod = pricesForPeriod.concat(extractDetailedPrices(discount, period, "", "")));
                }
            }

            return pricesForPeriod;
        }
    );
};

function extractDetailedPrices(entry, period, oneTimeText, monthlyText) {
    let result = [];
    if ((entry.entryType === "SIMFREE" && period.monthFrom !== null) || (entry.description === null && entry.oneTimeCost === null)) {
        // NOR-94276 - hide in summary table viking terminal in sections "W pierwszym miesiacu", "Oplaty od 2 do 24 miesiaca"...
        return result;
    }
    if ((period.monthFrom === 1 || entry.oneTimeCost.monthFrom + 1 === period.monthFrom) && entry.oneTimeCost && entry.oneTimeCost.price > 0) {
        result.push({
            monthlyPrice: "",
            oneTimeCost: OnlineUtils.formatPrice(entry.oneTimeCost.price) + " " + entry.oneTimeCost.currency,
            description: period.processType === "RETENTION" ? "Opłata za realizację oferty utrzymaniowej" : oneTimeText + entry.description
        });
    }
    if (entry.fixPayOnFirstBill && (period.monthFrom === 1 || period.monthFrom === entry.payNowCost.monthFrom) && entry.payNowCost && entry.payNowCost.price > 0) {
        result.push({
            monthlyPrice: "",
            oneTimeCost: OnlineUtils.formatPrice(entry.payNowCost.price) + " " + entry.payNowCost.currency,
            description: oneTimeText + entry.description
        });
    }

    let monthlyCost = entry.monthlyCosts.find((cost) => {
        return period.monthFrom >= cost.monthFrom && ((cost.monthTo === null || (period.monthTo !== null && cost.monthTo >= period.monthTo)) ||
            (cost.monthTo != null && period.monthTo === null && cost.monthTo > period.monthFrom));
    });

    if (monthlyCost) {
        result.push({
            monthlyPrice: OnlineUtils.formatPrice(monthlyCost.price) + " " + monthlyCost.currency,
            oneTimeCost: "",
            description: monthlyText + entry.description
        });
    }

    return result;
}

function getPayNowPrice(payNowCost, description, isBusinessClientParam, priceIsNet) {
    let oneTimeCostVal = OnlineUtils.formatPrice(payNowCost.priceGross) + " " + payNowCost.currency;
    let isBusinessClient = isBusinessClientParam !== undefined && isBusinessClientParam !== null && isBusinessClientParam === true

    if (priceIsNet) {
        oneTimeCostVal = OnlineUtils.formatPrice(payNowCost.priceNet) + " " + payNowCost.currency + (isBusinessClient ? " + VAT" : "");
    }

    return {
        oneTimeCost: oneTimeCostVal,
        description: description
    };
}


/*
    New Summary Details
*/

export const getMaxBundleNo = createSelector(getCartEntries, entries => entries && entries.length > 0 ? Math.max(...entries.map(entry => entry.bundleNo)) : 0)

export const getCartMonthlyRowsAll = createSelector(
    [getCartEntries, getCartOneTimeCost, getCartMonthlyCosts],
    (minicartEntries, oneTimeCost, monthlyCosts) => {
        const entries = [];

        if (minicartEntries) {
            minicartEntries.map((mE, i) => {
                if (mE.totalMonthlyPrices) {
                    mE.totalMonthlyPrices.map((mc) => {
                        let otp = "";
                        //"Logic" equal to pl.orange.opl.ecare.orderinfocomponentaddon.services.impl.DispositionsPaymentGroupingService - change both files.
                        if (mc.monthFrom === 1 && mE.totalFirstBillPrice.price) {
                            entries.push({
                                monthlyPrice: mc.price,
                                oneTimePrice: OnlineUtils.formatPrice(mE.totalFirstBillPrice.price) + " " + minicartEntries[0].totalFirstBillPrice.currency,
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
    }
);

const getCartPeriodsForBundles = createSelector(
    [getCartEntries, getCartServices, getCartOffers, getCartDiscounts],
    (minicartEntries = [], services = [], offers = [], discounts = []) => {

        let monthlyCosts = minicartEntries.concat(services).concat(offers).concat(discounts)
            .map(o => o.monthlyPrices ? {
                ...o,
                monthlyCosts: o.monthlyPrices
            } : o);

        let periods = {}

        monthlyCosts
            .filter(o => o.bundleNo)
            .forEach(o => {
                if (!periods[o.bundleNo]) {
                    periods[o.bundleNo] = []
                }
                let arr = periods[o.bundleNo]
                if (o.monthlyCosts) {
                    o.monthlyCosts.forEach(mc => {
                        [mc.monthTo, mc.monthFrom]
                        .filter(notnull => notnull)
                            .filter(p => arr.indexOf(p) == -1)
                            .forEach(p => arr.push(p))
                    })
                }
                arr.sort((a, b) => a - b)
            })

        return periods
    }
)


export const getCartSummaryTableDetailsRows = createSelector(
    [getCartEntries, getCartCheckoutCost, getCartMonthlyRows, getCartMonthlyRowsAll, getCartPeriodsForBundles, getPriceIsNet],
    (minicartEntries, checkoutCost, rowsOld, rows, periods, getPriceIsNet) => {

        const entries = [];
        let oneTimeCostVal;
        let oneTimePrice;

        if (checkoutCost && minicartEntries) {
            for (let i = 0; i < minicartEntries.length; i++) {

                if (minicartEntries[i].processType === "SALE_OF_GOODS") {
                    oneTimeCostVal = OnlineUtils.formatPrice(minicartEntries[i].totalCheckoutPrice.priceGross) + " " + checkoutCost.currency

                    if (isBusinessClient(checkoutCost) || getPriceIsNet) {
                        oneTimeCostVal = OnlineUtils.formatPrice(minicartEntries[i].totalCheckoutPrice.priceNet) + " " + checkoutCost.currency + (isBusinessClient(checkoutCost) ? " + VAT" : "");
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

        rows.map(r => entries.push(r));

        return reproduceRowsAccordingToMandatoryPeriods(entries, periods)
    }
);

const cartEntryConsiderMigrationProcess = cartEntry => {
    return TransactionProcessType.isMigration(cartEntry.processType) &&
        cartEntry.msisdnVerificationData &&
        cartEntry.msisdnVerificationData.msisdn;
};
const fillMigrationProcessMsisdns = (cartEntries, msisdns) => {
    const migrationMsisdns = cartEntries
        .filter(cartEntry => cartEntryConsiderMigrationProcess(cartEntry))
        .map(cartEntry => cartEntry.msisdnVerificationData.msisdn)
        .map(msisdn => formatMsisdn(msisdn));
    migrationMsisdns.forEach(msisdn => {
        msisdns.push(msisdn);
    });
};
const getUniqueValues = array => {
    return array.filter((element, index, self) => {
        return self.indexOf(element) === index;
    })
};

export const getOfferDescriptionForBundles = createSelector(
    [getCartDevices, getCartOffers, getMaxBundleNo, getCartEntries],
    (devices = [], offers = [], maxBundleNo, cartEntries) => {
        let offerDescriptions = [];
        let deviceDescriptions = [];
        let msisdn = [];
        const bundleNoAndDesc = [];
        let bundleSimfreeNo;
        let entries;
        let bundleType;

        if (cartEntries) {
            entries = cartEntries.filter(entry => entry.processType === "SALE_OF_GOODS");
            if (entries.length > 0) {
                bundleSimfreeNo = entries[0].terminals[0].bundleNo
            }
            devices.filter(device => device.entryType === "SIMFREE").map((device) => deviceDescriptions.push(device.description))
            if (bundleSimfreeNo && deviceDescriptions) {
                bundleNoAndDesc.push(
                    [bundleSimfreeNo,
                        (deviceDescriptions.length ? deviceDescriptions.join(", ") : ""),
                        ("Urządzenia bez umowy")
                    ]
                );
                offerDescriptions = [];
                deviceDescriptions = [];
                msisdn = [];
            }

            for (let bundleNo = 1; bundleNo <= maxBundleNo; bundleNo++) {
                entries = cartEntries.filter(entry => entry.bundleNo === bundleNo);
                if (entries.length > 0) {
                    bundleType = entries[0].bundleType;
                    fillMigrationProcessMsisdns(entries, msisdn);
                }
                offers.filter(offer => offer.bundleNo === bundleNo).map((offer) => {
                    offerDescriptions.push(offer.planName);
                    !!offer.msisdn && offer.msisdn.length === 9 && msisdn.push(formatMsisdn(offer.msisdn))
                });
                devices.filter(device => device.entryType !== "SIMFREE").filter(device => device.bundleNo === bundleNo).map((device) => deviceDescriptions.push(device.description));
                msisdn = getUniqueValues(msisdn);
                bundleNoAndDesc.push(
                    [bundleNo,
                        (offerDescriptions.join(", ") + (deviceDescriptions.length ? " + " + deviceDescriptions.join(", ") : "")),
                        (offerDescriptions.length && deviceDescriptions.length ? (getTitleForBundleType(bundleType, msisdn, true)) : (getTitleForBundleType(bundleType, msisdn, false)))
                    ]
                );

                offerDescriptions = [];
                deviceDescriptions = [];
                msisdn = [];
            }
        }

        return bundleNoAndDesc;
    }
);

const formatMsisdn = (msisdn) => {
    return msisdn.substring(0, 3) + '\u00a0' + msisdn.substring(3, 6) + '\u00a0' + msisdn.substring(6, msisdn.length);
}

const getTitleForBundleType = (bundleType, msisdn, isDevice) => {
    let title;
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

export const getPricesForPeriodSelectorForBundles = () => {
    return createSelector(
        [getCartEntries, getCartCheckoutCost, getCartServices, getCartOffers, getCartDevices, getCartDiscounts, (_, props) => ({
            monthFrom: props.entry.monthFrom,
            monthTo: props.entry.monthTo,
            bundleNo: props.bundleNo,
            processType: props.entry.processType
        }), getPriceIsNet],
        (minicartEntries, checkoutCost, services = [], offers = [], devices = [], discounts = [], period, getPriceIsNet) => {
            let pricesForPeriod = [];
            let isBusinessClient = false;
            let mobileDevice;

            if (checkoutCost) {
                isBusinessClient = checkoutCost.isBusinessClient;
            }

            let priceIsNet = getPriceIsNet || isBusinessClient

            if (!period.monthFrom) {
                offers.filter(o => o.bundleNo === period.bundleNo).map((offer) => {
                    if (offer.payNowCost && (offer.payNowCost.priceNet || offer.payNowCost.priceGross))
                        pricesForPeriod.push(getPayNowPrice(offer.payNowCost, offer.description, isBusinessClient, priceIsNet))
                });

                services.filter(s => s.bundleNo === period.bundleNo).map((service) => {
                    if (service.payNowCost)
                        pricesForPeriod.push(getPayNowPrice(service.payNowCost, service.description, isBusinessClient, priceIsNet))
                });

                mobileDevice = devices.filter(d => d.entryType !== "SIMFREE").filter(d => d.bundleNo === period.bundleNo);
                if (mobileDevice.length > 0) {
                    mobileDevice.map((device) => {
                        if (device.payNowCost)
                            pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet))
                    });
                } else {
                    devices.filter(d => d.entryType === "SIMFREE").map((device) => {
                        if (device.payNowCost)
                            pricesForPeriod.push(getPayNowPrice(device.payNowCost, device.description, isBusinessClient, priceIsNet))
                    });
                }

            } else {
                offers.filter(o => o.bundleNo === period.bundleNo)
                    .map((offer) => pricesForPeriod = pricesForPeriod
                        .concat(extractDetailedPrices(offer, period, "Opłata aktywacyjna za ", "Abonament za ")));
                discounts.filter(disc => disc.bundleNo === period.bundleNo)
                    .map((discount) => pricesForPeriod = pricesForPeriod
                        .concat(extractDetailedPrices(discount.monthlyCosts[discount.monthlyCosts.length - 1].monthTo === null ?
                            changePeriod(discount, period.bundleNo, minicartEntries) : discount, period, "", "")));
                services.filter(s => s.bundleNo === period.bundleNo)
                    .map((service) => pricesForPeriod = pricesForPeriod
                        .concat(extractDetailedPrices(([...service.monthlyCosts].pop() || {}).monthTo === null ?
                            changePeriod(service, period.bundleNo, minicartEntries) : service, period, "Opłata aktywacyjna za ", "Abonament za ")));
                devices.filter(d => d.entryType !== "SIMFREE").filter(d => d.bundleNo === period.bundleNo)
                    .map((device) => pricesForPeriod = pricesForPeriod
                        .concat(extractDetailedPrices(device.monthlyCosts[device.monthlyCosts.length - 1].monthTo === null ?
                            changePeriod(device, period.bundleNo, minicartEntries) : device, period, "", device.entryType === "FIX" ? "" : "Rata za ")));
                devices.filter(d => d.entryType === "SIMFREE")
                    .map((device) => pricesForPeriod = pricesForPeriod
                        .concat(extractDetailedPrices(device, period, "", device.entryType === "FIX" ? "" : "Rata za ")));
            }
            return pricesForPeriod;
        }
    );
};

function changePeriod(entry, bundleNo, minicartEntries) {
    const loyaltyLengthForBundle = minicartEntries.find(mE => mE.bundleNo === bundleNo).loyaltyLength;
    if (loyaltyLengthForBundle > 0)
        entry.monthlyCosts[entry.monthlyCosts.length - 1].monthTo = loyaltyLengthForBundle;

    return entry;
}

function isBusinessClient(checkoutCost) {
    return checkoutCost.isBusinessClient !== undefined && checkoutCost.isBusinessClient !== null && checkoutCost.isBusinessClient === true
}

function reproduceRowsAccordingToMandatoryPeriods(rows, mandatoryPeriodsForBundle) {
    function containsPeriod(rows, period) {
        return rows.filter(r => r.monthTo == period || r.monthFrom == period)[0] != undefined
    }

    function splitInPeriod(rows, period) {
        let ret = []
        rows.forEach(r => {
            if (r.monthTo < period) {
                ret.push(r)
            } else if (r.monthFrom > period) {
                ret.push(r)
            } else {
                //reproduce
                let r1 = {
                    ...r
                }
                let r2 = {
                    ...r
                }
                r1.monthTo = period
                r2.monthFrom = period + 1
                ret.push(r1)
                ret.push(r2)
            }
        })
        return ret
    }

    let bundles = []
    rows.forEach(row => {
        if (bundles.indexOf(row.bundleNo) == -1) {
            bundles.push(row.bundleNo)
        }
    })

    let ret = []
    bundles.forEach(bundleNo => {
        let rowsForBundle = rows.filter(r => r.bundleNo == bundleNo);
        let periods = mandatoryPeriodsForBundle[bundleNo];
        periods.forEach(period => {
            if (!containsPeriod(rowsForBundle, period)) {
                rowsForBundle = splitInPeriod(rowsForBundle, period)
            }
        })

        ret = ret.concat(rowsForBundle)
    })
    return ret
}

export const getCartState = state => state["cart"];
export const getVoucherData = createSelector(getCartState, cart => cart.voucher);
export const getVoucherCode = createSelector(getVoucherData, voucher => voucher.voucherCode);
export const getVoucherError = createSelector(getVoucherData, voucher => voucher.error);
export const getVoucherMetadata = createSelector(getVoucherData, voucher => voucher.metadata);
export const getVoucherApplicableProductsRequested = createSelector(getVoucherMetadata, metadata => metadata.loading);
export const getVoucherApplicableProducts = createSelector(getVoucherData, voucher => voucher.applicableProducts);
export const getVoucherName = createSelector(getVoucherData, voucher => voucher.voucherName);
export const getDepositCost = createSelector(getCartData, cart => cart.checkoutCost ? cart.checkoutCost.deposit : 0);

export const getTerminalForBundleAndEntryNumber = (bundleNumber, entryNumber) => createSelector(getCartEntries, cartEntries => cartEntries
    .reduce((terminals, cartEntry) => [...terminals, ...cartEntry.terminals], [])
    .find(terminal => terminal.bundleNo === bundleNumber && terminal.entryNo === entryNumber)
);
export const getCartEntryById = id => createSelector(getCartEntries, cartEntries => cartEntries.find(cartEntry => cartEntry.bundleNo = id));

export const isVasModalOpen = createSelector(getCartState, cart => cart.vasModalStatus);
export const isBonusModalOpen = createSelector(getCartState, cart => cart.bonusModalStatus);

export const getBonusEntry = createSelector(getCartData, cart => cart.bonuses || []);

export const getPaymentPlanAssignValue = createSelector(getAssignmnetData, assignment => assignment.isPaymentPlanAssigned);

export const getDeathCertificateConfirmed = createSelector(getAssignmnetData, assignment => assignment.isDeathCertificateConfirmed);

export const getEntryUnderChange = createSelector([getCartEntries, getAddTerminalToOfferBundleNo], (cartEntries, addTerminalToOfferBundleNo) => {
    if (addTerminalToOfferBundleNo && cartEntries) {
        return cartEntries.find(e => e.bundleNo == addTerminalToOfferBundleNo);
    }
});
export const getChangedDevice = createSelector(getEntryUnderChange, entry => takeDevice(entry));
export const getKdrData = createSelector(getCartState, cart => cart.kdrData);
export const getKdrNumber = createSelector(getKdrData, kdr => kdr.kdrNumber || "");
export const getKdrSource = createSelector(getKdrData, kdr => kdr.kdrSource || "");
export const getKdrErrors = createSelector(getKdrData, kdr => kdr.error);
export const getKdrSaving = createSelector(getKdrData, kdr => kdr.saving);
export const getKdrAccepted = createSelector(getKdrData, kdr => !!kdr.accepted);
export const getKdrCheckoutData = createSelector([getKdrNumber, getKdrSource], (number, source) => ({
    number,
    source
}));

export const hasOnlyAssignment = createSelector(getCartEntriesRaw, entries => {
    return entries && entries.length && entries.every(entry => TransactionProcessType.isAssignment(entry.processType));
});

export const getCustomFilters = createSelector(getCartState, cart => cart.tvPackagesFilters);
export const isWwwChannel = createSelector(getMiniCart, miniCart => miniCart.isWwwChannel);
export const getLeadId = createSelector(getMiniCart, miniCart => miniCart.leadId);

export const getInvoiceData = createSelector(getCartState, cart => cart.invoiceData);

export const getChangePackagesModalInitData = createSelector(getMobileVases, getCartEntries, (vases, entries) => {
    if (vases.length === 0) {
        return {};
    }
    let VAS_PACKAGE_CATEGORY = "GratisPackageBonuses"
    const vasByPropositionId = (vases || []).reduce((a, b) => ({
        ...a,
        [b.propositionId]: b
    }), {});
    let ret = (entries || []).map(entry => {
        //FROM ENTRY
        const v = vasByPropositionId[entry.bundleCode];
        if (!v) return;

        let cartPackagesCodes = ((entry && entry.vases) || [])
            .filter(v => (v.categories || []).includes(VAS_PACKAGE_CATEGORY))
            .map(v => v.productCode);
        let cartVases = ((entry && entry.vases) || [])
            .filter(v => !(v.categories || []).includes(VAS_PACKAGE_CATEGORY))

        //FORM AVAILABLE VASES
        let gratisPackageBonuses = v.categorizedBonuses && v.categorizedBonuses[VAS_PACKAGE_CATEGORY];
        let groups = (gratisPackageBonuses && gratisPackageBonuses.groups) || [];
        let services = (gratisPackageBonuses && gratisPackageBonuses.services) || [];

        let exclusions = calculatePackagesExclusions(services, cartVases, v.relations);
        console.log("exclusions: ")
        console.log(exclusions)

        let packets = services.map(p => ({
            ...p.longDescriptionInJsonFormat,
            id: p.id,
            title: p.title,
            weight: p.weight || 1,
            warning: exclusions.filter(e => e.packets.includes(p.id)).map(e => e.warning)[0]
        }));

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

    }).filter(notNull => notNull).reduce((a, b) => ({
        ...a,
        [b.bundleNo]: b.data
    }), {});

    return ret;
});

function calculatePackagesExclusions(packages, cartVases, relations) {
    let availablePacketsCodes = packages.map(s => s.id);

    return (relations || [])
        .filter(r => r.type == "EXCLUDE")
        .map(r => ({
            warnings: cartVases.filter(v => [...r.sourceVases, ...r.targetVases].includes(v.productCode))
                .map(v => ({
                    id: v.productCode,
                    name: v.name
                })),
            packets: [...r.sourceVases, ...r.targetVases].filter(value => availablePacketsCodes.includes(value))
        }))
        .filter(r => r.warnings[0] && r.packets[0])
        .map(r => {
            if (r.warnings.length > 1) {
                console.error("More than one conflict with vases in cart is not supported. Warnings: " + JSON.stringify(r.warnings) + ". Packets: " + JSON.stringify(r.packets))
            }
            return {
                warning: r.warnings[0],
                packets: r.packets
            }
        });
}

function calculatePackageCapacity(services, groups) {
    if (groups.length == 0) {
        console.error("Cannot find any group")
        return 0;
    } else if (groups.length == 1) {
        return groups[0].min || 0;
    }

    let packageBonusCodesJoined = services
        .filter(p => p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code)
        .map(p => p.bonuses && p.bonuses.length === 1 && p.bonuses[0].code)
        .sort()
        .join();

    let capacityGroup = groups.filter(
        g => (g.targetProducts || []).sort().join() == packageBonusCodesJoined
    )[0]

    return (capacityGroup && capacityGroup.min) || 0;
}