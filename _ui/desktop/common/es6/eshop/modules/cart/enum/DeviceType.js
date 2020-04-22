import _ from "lodash";

const DeviceType = {
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
    isTVDeviceNoMUL: (deviceType) => _.includes(['STB', 'KVA', 'PVR', 'SAT'], deviceType)
};


export default DeviceType;