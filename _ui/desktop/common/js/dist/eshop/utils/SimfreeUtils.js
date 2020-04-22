define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var SimfreeUtils = function(SimfreeUtils) {
        SimfreeUtils.getTerminalsFromMiniCart = function(miniCartData) {
            return miniCartData.entries ? miniCartData.entries.filter(function(entry) {
                return entry.processType === "SALE_OF_GOODS";
            }).reduce(function(a, b) {
                return a.concat(b.terminals);
            }, []) : [];
        };

        SimfreeUtils.CPO = 'MOB_CPO_SALES_OF_GOODS';
        return SimfreeUtils;
    }({});

    var _default = SimfreeUtils;
    _exports.default = _default;
});
//# sourceMappingURL=SimfreeUtils.js.map