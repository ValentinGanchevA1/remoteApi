define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/CartInfoUtils", "../../../../core/enum/Technology"], function(e, t, l, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.FinePrintForADSLModem = e.FinePrintForSatteliteTV = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n);

    function a(e) {
        return t.default.createElement("div", {
            className: "l-full-row"
        }, t.default.createElement("div", {
            className: "l-page-row"
        }, t.default.createElement("div", {
            className: "u-padding-top u-padding"
        }, t.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: e.label
            }
        }))))
    }
    a.propTypes = {
        label: l.default.string.isRequired
    };
    e.FinePrintForSatteliteTV = function(e) {
        return e.entry.tvFixProduct && e.entry.tvFixProduct.technology === n.default.SAT ? t.default.createElement(a, {
            label: e.label
        }) : null
    };
    e.FinePrintForADSLModem = function(e) {
        return e.entry.broadbandFixProduct && e.entry.broadbandFixProduct.technology === n.default.ADSL && "1P_PRE" === e.entry.bundleType ? t.default.createElement(a, {
            label: e.label
        }) : null
    }
});
//# sourceMappingURL=ProductsFinePrintInfo.js.map