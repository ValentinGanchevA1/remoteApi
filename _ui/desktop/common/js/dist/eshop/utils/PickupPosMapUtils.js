define(["exports", "jquery"], function(_exports, _jquery) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);

    var setSelectedDeviceVariant = function setSelectedDeviceVariant(deviceVariantId) {
        (0, _jquery.default)("input[type=radio][name=phoneColorDesktop][value=\"".concat(deviceVariantId, "\"]")).click();
        (0, _jquery.default)("input[type=radio][name=phoneColorMobile][value=\"".concat(deviceVariantId, "\"]")).click();
    };

    var _default = {
        setSelectedDeviceVariant: setSelectedDeviceVariant
    };
    _exports.default = _default;
});
//# sourceMappingURL=PickupPosMapUtils.js.map