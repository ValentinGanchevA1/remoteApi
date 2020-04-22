define(["exports", "jquery"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t);
    var o = {
        setSelectedDeviceVariant: function(e) {
            (0, t.default)('input[type=radio][name=phoneColorDesktop][value="'.concat(e, '"]')).click(), (0, t.default)('input[type=radio][name=phoneColorMobile][value="'.concat(e, '"]')).click()
        }
    };
    e.default = o
});
//# sourceMappingURL=PickupPosMapUtils.js.map