define(["exports", "../../cart/components/entriesList/BundleTypeEnum"], function(_exports, _BundleTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isLTE = isLTE;
    _exports.is2ULTE = is2ULTE;
    _exports.is2U = is2U;
    _exports.is4U = is4U;
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);

    function isLTE(availableBundleTypes) {
        return availableBundleTypes && availableBundleTypes.some(function(element) {
            return [_BundleTypeEnum.default._2ULTE, _BundleTypeEnum.default._3ULTE].indexOf(element) > -1;
        });
    }

    function is2ULTE(availableBundleTypes) {
        return availableBundleTypes && availableBundleTypes.some(function(element) {
            return [_BundleTypeEnum.default._2ULTE].indexOf(element) > -1;
        });
    }

    function is2U(availableBundleTypes) {
        return availableBundleTypes && availableBundleTypes.some(function(element) {
            return [_BundleTypeEnum.default._2U].indexOf(element) > -1;
        });
    }

    function is4U(availableBundleTypes) {
        return availableBundleTypes && availableBundleTypes.some(function(element) {
            return [_BundleTypeEnum.default._4U].indexOf(element) > -1;
        });
    }
});
//# sourceMappingURL=BundleTypeUtils.js.map