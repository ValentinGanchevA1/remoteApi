define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var DeviceType = {
        LB: 'LB',
        STB: 'STB',
        KVA: 'KVA',
        STBMUL: 'STBMUL',
        KVAMUL: 'KVAMUL',
        PVR: 'PVR',
        SAT: 'SAT',
        WIFIEXT: 'WIFIEXT',
        SMART_WIFI_BOX: 'SMART_WIFI_BOX',
        LP: 'LP',
        ONT: 'ONT',
        OTHER: 'OTHER',
        isTVDeviceNoMUL: function isTVDeviceNoMUL(deviceType) {
            return _lodash.default.includes(['STB', 'KVA', 'PVR', 'SAT'], deviceType);
        }
    };
    var _default = DeviceType;
    _exports.default = _default;
});
//# sourceMappingURL=DeviceType.js.map