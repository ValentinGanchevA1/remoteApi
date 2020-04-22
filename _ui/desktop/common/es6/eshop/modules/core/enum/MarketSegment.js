import _ from "lodash";

const MarketSegment = {
    B2C: 'B2C',
    B2B: 'B2B',
    B2B_SOHO: 'B2B_SOHO',
    isB2B: (marketSegment) => _.includes(['B2B', 'B2B_SOHO'], marketSegment)
};

export default MarketSegment;