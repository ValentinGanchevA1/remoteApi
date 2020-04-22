define(["exports", "lodash", "../../cart/components/entriesList/BundleTypeEnum"], function(_exports, _lodash, _BundleTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.is2UCartEntry = is2UCartEntry;
    _exports.is4UCartEntry = is4UCartEntry;
    _exports.cartContainsEsim = _exports.entryContainsReservableSimCard = _exports.cartEntriesContainsReservableItems = _exports.isVoiceCartEntry = _exports.getAllCartEntries = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);

    var getAllCartEntries = function getAllCartEntries(miniCartData) {
        return _lodash.default.flatMap(miniCartData.entries, function(entry) {
            if (entry.entryType === "CONVERGENT") {
                return entry.entries;
            } else {
                return [entry];
            }
        });
    };

    _exports.getAllCartEntries = getAllCartEntries;

    function is2UCartEntry(cartEntry) {
        var bundleTypes_2U = [_BundleTypeEnum.default._1P_PRE, _BundleTypeEnum.default.VOICE].sort();
        return _lodash.default.isEqual(bundleTypes_2U, getCartBundleTypes(cartEntry));
    }

    function is4UCartEntry(cartEntry) {
        var bundleTypes_4U = [_BundleTypeEnum.default._3P_PRE, _BundleTypeEnum.default.VOICE].sort();
        return _lodash.default.isEqual(bundleTypes_4U, getCartBundleTypes(cartEntry));
    }

    function getCartBundleTypes(cartEntry) {
        if (cartEntry.entryType !== "CONVERGENT") {
            return [cartEntry.bundleType];
        } else {
            return _lodash.default.uniq(cartEntry.entries.map(function(entry) {
                return entry.bundleType;
            })).sort();
        }
    }

    var isVoiceCartEntry = function isVoiceCartEntry(cartEntry) {
        return getCartBundleTypes(cartEntry).indexOf(_BundleTypeEnum.default.VOICE) > -1;
    };

    _exports.isVoiceCartEntry = isVoiceCartEntry;

    var cartEntriesContainsReservableItems = function cartEntriesContainsReservableItems(entries) {
        return entries.filter(function(entry) {
            return entryContainsReservableSimCard(entry) || entryContainsReservableTerminals(entry) || entryContainsEurosets(entry) || entryContainsBroadbandFixProducts(entry) || entryContainsTvFixProducts(entry);
        }).length > 0;
    };

    _exports.cartEntriesContainsReservableItems = cartEntriesContainsReservableItems;

    var entryContainsReservableSimCard = function entryContainsReservableSimCard(entry) {
        return entry.isSim && entry.msisdn && entry.simCard && entry.simCard.reservable;
    };

    _exports.entryContainsReservableSimCard = entryContainsReservableSimCard;

    var cartContainsEsim = function cartContainsEsim(entries) {
        return entries.filter(function(entry) {
            return entry.isSim && entry.simCard;
        }).length > 0;
    };

    _exports.cartContainsEsim = cartContainsEsim;

    var entryContainsReservableTerminals = function entryContainsReservableTerminals(entry) {
        if (!entry.terminals) {
            return false;
        }

        return entry.terminals.filter(function(terminal) {
            return !terminal.migrated && terminal.isSerialNumberRequired || entry.entryType === 'MOBILE' || entry.entryType === 'SIMFREE';
        }).length > 0;
    };

    var entryContainsEurosets = function entryContainsEurosets(entry) {
        if (!entry.euroSets) {
            return false;
        }

        return entry.euroSets.filter(function(euroSet) {
            return euroSet.setElements && euroSet.setElements.length > 0;
        }).length > 0;
    };

    var entryContainsBroadbandFixProducts = function entryContainsBroadbandFixProducts(entry) {
        if (!entry.broadbandFixProduct || !entry.broadbandFixProduct.devices) {
            return false;
        }

        return entry.broadbandFixProduct.devices.filter(function(device) {
            return !device.migrated && device.isSerialNumberRequired;
        }).length > 0;
    };

    var entryContainsTvFixProducts = function entryContainsTvFixProducts(entry) {
        if (!entry.tvFixProduct || !entry.tvFixProduct.devices) {
            return false;
        }

        return entry.tvFixProduct.devices.filter(function(device) {
            return !device.migrated && device.isSerialNumberRequired;
        }).length > 0;
    };
});
//# sourceMappingURL=MiniCartUtils.js.map