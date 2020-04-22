define(["exports", "../cart/components/entriesList/BundleTypeEnum", "./constants/ProcessTypeEnum"], function(_exports, _BundleTypeEnum, _ProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getProcessType = getProcessType;
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);
    _ProcessTypeEnum = babelHelpers.interopRequireDefault(_ProcessTypeEnum);

    function getProcessType(entries) {
        var bundleTypes = entries.map(function(subEntry) {
            return subEntry.bundleType;
        });

        if (_.difference(bundleTypes, [_BundleTypeEnum.default._3P_PRE, _BundleTypeEnum.default.VOICE]).length === 0) {
            return _ProcessTypeEnum.default._4U;
        } else if (_.difference(bundleTypes, [_BundleTypeEnum.default._1P_PRE, _BundleTypeEnum.default.VOICE]).length === 0) {
            return _ProcessTypeEnum.default._2U;
        } else if (_.difference(bundleTypes, [_BundleTypeEnum.default.VOICE, _BundleTypeEnum.default.DATA]).length === 0) {
            return _ProcessTypeEnum.default._2ULTE;
        } else if (_.difference(bundleTypes, [_BundleTypeEnum.default.VOICE, _BundleTypeEnum.default.DATA, _BundleTypeEnum.default.VIDEO]).length === 0) {
            return _ProcessTypeEnum.default._3ULTE;
        }

        return _ProcessTypeEnum.default.UNKNOWN;
    }
});
//# sourceMappingURL=utils.js.map