import BundleTypeEnum from "../../cart/components/entriesList/BundleTypeEnum";

export function isLTE(availableBundleTypes) {
    return availableBundleTypes && availableBundleTypes.some(element => [BundleTypeEnum._2ULTE, BundleTypeEnum._3ULTE].indexOf(element) > -1);
}

export function is2ULTE(availableBundleTypes) {
    return availableBundleTypes && availableBundleTypes.some(element => [BundleTypeEnum._2ULTE].indexOf(element) > -1);
}

export function is2U(availableBundleTypes) {
    return availableBundleTypes && availableBundleTypes.some(element => [BundleTypeEnum._2U].indexOf(element) > -1);
}

export function is4U(availableBundleTypes) {
    return availableBundleTypes && availableBundleTypes.some(element => [BundleTypeEnum._4U].indexOf(element) > -1);
}