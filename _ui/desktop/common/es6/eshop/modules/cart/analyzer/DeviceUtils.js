import DeviceType from '../enum/DeviceType';
import RuleType from '../../checkout/constants/RuleTypeEnum';
import {
    createCMSDescriptionWithParams
} from '../../core/utils/CmsUtils';

export const findTVDevicesNoMUL = (devices) => {
    return devices.filter(d => !!d.deviceType && DeviceType.isTVDeviceNoMUL(d.deviceType));
};

export const findSTB = (devices) => {
    return devices.filter(d => !!d.deviceType && DeviceType.STB === d.deviceType);
};

export const findDeviceByType = (devices, deviceType) => {
    return devices.filter(d => d.deviceType === deviceType);
};

export const restoreMigratedTVDevicesOnNewSTBRemoval = (availableSTBs, migratedTVDevicesNoMUL) => {
    return {
        ruleType: RuleType.NONE,
        sourceVases: availableSTBs.map(d => d.id || d.productCode),
        targetVases: migratedTVDevicesNoMUL.map(d => d.id || d.productCode),
        type: RuleType.REQUIRE_SOME
    };
};

export const createCustomRules = (presentable, migratedDevices) => {
    const customRules = [];
    const migratedTVDevicesNoMUL = migratedDevices ? findTVDevicesNoMUL(migratedDevices) : [];
    const presentableSTB = presentable ? findSTB(presentable) : [];
    const availableSTBs = presentableSTB.concat(findSTB(migratedTVDevicesNoMUL));
    if (migratedTVDevicesNoMUL.length > 0 && presentableSTB.length > 0) {
        customRules.push(restoreMigratedTVDevicesOnNewSTBRemoval(availableSTBs, migratedTVDevicesNoMUL));
    }
    return customRules;
};

export const prepareDevices = (devices, descriptions, migratedProducts) => {
    const migratedSTBs = migratedProducts && findSTB(migratedProducts).map(d => d.id || d.productCode);
    if (!devices) {
        return [];
    }
    if (!descriptions || migratedSTBs.length === 0) {
        return devices;
    }

    return devices.map(d => {
        if (DeviceType.STB === d.deviceType && !d.mandatory && !migratedSTBs.some(s => s === d.id || s === d.productCode)) {
            d.warningMessage = descriptions['optionalSTBWarning'];
            d.onRemoveWarning = createCMSDescriptionWithParams(descriptions['onRemoveRestoreDevicesWarning'], [d.title]);
        }
        return d;
    });
};

export const getDevicesWithAdjustedDeviceType = (devices) => {
    return (devices || []).map(d => ({
        ...d,
        productType: d.deviceType === DeviceType.STBMUL ? "ADDON" : d.productType
    }));
};