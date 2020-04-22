define(["exports"], function(e) {
    "use strict";
    var t, r, n;

    function o(e, t, n) {
        var r = {
            action: e,
            product: t
        };
        n && (r.cartBundle = n), window._gt = window._gt || [];
        var o = ["event", "portalCartChange", {
            data: r
        }];
        window._gt.push(o)
    }

    function u(e, t) {
        var n = {};
        return e && (n.COMPOSITE_PROD_OFFR_ID = e), t && (n.PROPOSITION_PROD_OFFR_ID = t.split("$")[0]), n
    }

    function a(e) {
        return e.entryType === r ? n : e.bundleCode
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var d = (r = "SIMFREE", n = "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS", (t = {}).pushAddToCartEvent = function(e, t, n) {
        o("add", [u(e, t)], n)
    }, t.pushDeleteFromCartEvent = function(e, t, n) {
        o("delete", [u(e, t)], n)
    }, t.deleteAllFromCartEvent = function(e) {
        o("deleteAll", e.reduce(function(e, t) {
            return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(function(t) {
                var n = [];
                return t.entryType !== r && n.push(u(t.productCode, t.bundleCode)), t.terminals.forEach(function(e) {
                    return n.push(u(e.productCode, a(t)))
                }), t.vases.forEach(function(e) {
                    return n.push(u(e.productCode, a(t)))
                }), n
            }(t)))
        }, []))
    }, t.pushAddVasToCartEvent = function(e, t, n) {
        o("addVas", [u(e, t)], n)
    }, t.pushDeleteVasFromCartEvent = function(e, t, n) {
        o("deleteVas", [u(e, t)], n)
    }, t);
    e.default = d
});
//# sourceMappingURL=GenesysWebEngagementUtils.js.map