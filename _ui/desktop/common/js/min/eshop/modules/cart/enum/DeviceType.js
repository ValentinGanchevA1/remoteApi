define(["exports", "lodash"], function(e, T) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, T = babelHelpers.interopRequireDefault(T);
    var t = {
        LB: "LB",
        STB: "STB",
        KVA: "KVA",
        STBMUL: "STBMUL",
        KVAMUL: "KVAMUL",
        PVR: "PVR",
        SAT: "SAT",
        WIFIEXT: "WIFIEXT",
        SMART_WIFI_BOX: "SMART_WIFI_BOX",
        LP: "LP",
        ONT: "ONT",
        OTHER: "OTHER",
        isTVDeviceNoMUL: function(e) {
            return T.default.includes(["STB", "KVA", "PVR", "SAT"], e)
        }
    };
    e.default = t
});
//# sourceMappingURL=DeviceType.js.map