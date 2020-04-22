const SimfreeUtils = function(SimfreeUtils) {

    SimfreeUtils.getTerminalsFromMiniCart = function(miniCartData) {
        return miniCartData.entries ? miniCartData.entries.filter(entry => entry.processType === "SALE_OF_GOODS").reduce((a, b) => a.concat(b.terminals), []) : [];
    };

    SimfreeUtils.CPO = 'MOB_CPO_SALES_OF_GOODS';

    return SimfreeUtils;
}({});

export default SimfreeUtils;