import BundleTypeEnum from "../cart/components/entriesList/BundleTypeEnum";
import ProcessType from "./constants/ProcessTypeEnum";

export function getProcessType(entries) {
    let bundleTypes = entries.map(subEntry => subEntry.bundleType);
    if (_.difference(bundleTypes, [BundleTypeEnum._3P_PRE, BundleTypeEnum.VOICE]).length === 0) {
        return ProcessType._4U;
    } else if (_.difference(bundleTypes, [BundleTypeEnum._1P_PRE, BundleTypeEnum.VOICE]).length === 0) {
        return ProcessType._2U;
    } else if (_.difference(bundleTypes, [BundleTypeEnum.VOICE, BundleTypeEnum.DATA]).length === 0) {
        return ProcessType._2ULTE;
    } else if (_.difference(bundleTypes, [BundleTypeEnum.VOICE, BundleTypeEnum.DATA, BundleTypeEnum.VIDEO]).length === 0) {
        return ProcessType._3ULTE;
    }
    return ProcessType.UNKNOWN;



}