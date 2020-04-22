import _ from "lodash";

const Technology = {
    ADSL: 'ADSL',
    FTTH: 'FTTH',
    IPTV: 'IPTV',
    RFOG: 'RFOG',
    RFTV: 'RFTV',
    SAT: 'SAT',
    VIDSAT: 'VIDSAT',
    VDSL: 'VDSL',
    OTHER: 'OTHER',
    isXDSL: (technology) => _.includes(['ADSL', 'VDSL'], technology)
};

export default Technology;