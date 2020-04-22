define(["exports", "../enum/DeviceType", "../../checkout/constants/RuleTypeEnum", "../../core/utils/CmsUtils"], function(_exports, _DeviceType, _RuleTypeEnum, _CmsUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getDevicesWithAdjustedDeviceType = _exports.prepareDevices = _exports.createCustomRules = _exports.restoreMigratedTVDevicesOnNewSTBRemoval = _exports.findDeviceByType = _exports.findSTB = _exports.findTVDevicesNoMUL = void 0;
    _DeviceType = babelHelpers.interopRequireDefault(_DeviceType);
    _RuleTypeEnum = babelHelpers.interopRequireDefault(_RuleTypeEnum);

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

    var findTVDevicesNoMUL = function findTVDevicesNoMUL(devices) {
        return devices.filter(function(d) {
            return !!d.deviceType && _DeviceType.default.isTVDeviceNoMUL(d.deviceType);
        });
    };

    _exports.findTVDevicesNoMUL = findTVDevicesNoMUL;

    var findSTB = function findSTB(devices) {
        return devices.filter(function(d) {
            return !!d.deviceType && _DeviceType.default.STB === d.deviceType;
        });
    };

    _exports.findSTB = findSTB;

    var findDeviceByType = function findDeviceByType(devices, deviceType) {
        return devices.filter(function(d) {
            return d.deviceType === deviceType;
        });
    };

    _exports.findDeviceByType = findDeviceByType;

    var restoreMigratedTVDevicesOnNewSTBRemoval = function restoreMigratedTVDevicesOnNewSTBRemoval(availableSTBs, migratedTVDevicesNoMUL) {
        return {
            ruleType: _RuleTypeEnum.default.NONE,
            sourceVases: availableSTBs.map(function(d) {
                return d.id || d.productCode;
            }),
            targetVases: migratedTVDevicesNoMUL.map(function(d) {
                return d.id || d.productCode;
            }),
            type: _RuleTypeEnum.default.REQUIRE_SOME
        };
    };

    _exports.restoreMigratedTVDevicesOnNewSTBRemoval = restoreMigratedTVDevicesOnNewSTBRemoval;

    var createCustomRules = function createCustomRules(presentable, migratedDevices) {
        var customRules = [];
        var migratedTVDevicesNoMUL = migratedDevices ? findTVDevicesNoMUL(migratedDevices) : [];
        var presentableSTB = presentable ? findSTB(presentable) : [];
        var availableSTBs = presentableSTB.concat(findSTB(migratedTVDevicesNoMUL));

        if (migratedTVDevicesNoMUL.length > 0 && presentableSTB.length > 0) {
            customRules.push(restoreMigratedTVDevicesOnNewSTBRemoval(availableSTBs, migratedTVDevicesNoMUL));
        }

        return customRules;
    };

    _exports.createCustomRules = createCustomRules;

    var prepareDevices = function prepareDevices(devices, descriptions, migratedProducts) {
        var migratedSTBs = migratedProducts && findSTB(migratedProducts).map(function(d) {
            return d.id || d.productCode;
        });

        if (!devices) {
            return [];
        }

        if (!descriptions || migratedSTBs.length === 0) {
            return devices;
        }

        return devices.map(function(d) {
            if (_DeviceType.default.STB === d.deviceType && !d.mandatory && !migratedSTBs.some(function(s) {
                    return s === d.id || s === d.productCode;
                })) {
                d.warningMessage = descriptions['optionalSTBWarning'];
                d.onRemoveWarning = (0, _CmsUtils.createCMSDescriptionWithParams)(descriptions['onRemoveRestoreDevicesWarning'], [d.title]);
            }

            return d;
        });
    };

    _exports.prepareDevices = prepareDevices;

    var getDevicesWithAdjustedDeviceType = function getDevicesWithAdjustedDeviceType(devices) {
        return (devices || []).map(function(d) {
            return _objectSpread({}, d, {
                productType: d.deviceType === _DeviceType.default.STBMUL ? "ADDON" : d.productType
            });
        });
    };

    _exports.getDevicesWithAdjustedDeviceType = getDevicesWithAdjustedDeviceType;
});
//# sourceMappingURL=DeviceUtils.js.map