import _ from "lodash";
import BundleTypeEnum from "../../cart/components/entriesList/BundleTypeEnum";

export const getAllCartEntries = (miniCartData) => {
    return _.flatMap(miniCartData.entries, entry => {
        if (entry.entryType === "CONVERGENT") {
            return entry.entries;
        } else {
            return [entry];
        }
    });
};

export function is2UCartEntry(cartEntry) {
    const bundleTypes_2U = [BundleTypeEnum._1P_PRE, BundleTypeEnum.VOICE].sort();
    return _.isEqual(bundleTypes_2U, getCartBundleTypes(cartEntry));
}

export function is4UCartEntry(cartEntry) {
    const bundleTypes_4U = [BundleTypeEnum._3P_PRE, BundleTypeEnum.VOICE].sort();
    return _.isEqual(bundleTypes_4U, getCartBundleTypes(cartEntry));
}

function getCartBundleTypes(cartEntry) {
    if (cartEntry.entryType !== "CONVERGENT") {
        return [cartEntry.bundleType];
    } else {
        return _.uniq(cartEntry.entries.map(entry => entry.bundleType)).sort();
    }
}
export const isVoiceCartEntry = cartEntry => {
    return getCartBundleTypes(cartEntry).indexOf(BundleTypeEnum.VOICE) > -1;
};
export const cartEntriesContainsReservableItems = entries => {
    return entries.filter(entry => entryContainsReservableSimCard(entry) ||
        entryContainsReservableTerminals(entry) ||
        entryContainsEurosets(entry) ||
        entryContainsBroadbandFixProducts(entry) ||
        entryContainsTvFixProducts(entry)
    ).length > 0;
};

export const entryContainsReservableSimCard = entry => entry.isSim && entry.msisdn && entry.simCard && entry.simCard.reservable;

export const cartContainsEsim = entries => {
    return entries.filter(entry => entry.isSim && entry.simCard).length > 0;
};

const entryContainsReservableTerminals = entry => {
    if (!entry.terminals) {
        return false;
    }
    return entry.terminals.filter(terminal => (!terminal.migrated && terminal.isSerialNumberRequired) || entry.entryType === 'MOBILE' || entry.entryType === 'SIMFREE').length > 0;
};

const entryContainsEurosets = entry => {
    if (!entry.euroSets) {
        return false;
    }
    return entry.euroSets.filter(euroSet => euroSet.setElements && euroSet.setElements.length > 0).length > 0;
};

const entryContainsBroadbandFixProducts = entry => {
    if (!entry.broadbandFixProduct || !entry.broadbandFixProduct.devices) {
        return false;
    }
    return entry.broadbandFixProduct.devices.filter(device => !device.migrated && device.isSerialNumberRequired).length > 0;
};

const entryContainsTvFixProducts = entry => {
    if (!entry.tvFixProduct || !entry.tvFixProduct.devices) {
        return false;
    }
    return entry.tvFixProduct.devices.filter((device) => !device.migrated && device.isSerialNumberRequired).length > 0;
};