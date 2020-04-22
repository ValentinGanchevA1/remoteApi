define(["exports", "lodash", "../../checkout/constants/AddonTypeEnum"], function(e, n, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isVasATvPack = function(e, n) {
        return o(e).map(function(e) {
            return e.id
        }).includes(n.productCode)
    }, e.getGadgets = function(e) {
        return a(e, "gadgets")
    }, e.getServices = u, e.getTvPackages = o, e.getDevices = i, e.getNumberOfTerminals = function(e) {
        return c(e, "devices")
    }, e.getNumberOfGadgets = function(e) {
        return c(e, "gadgets")
    }, e.getConfigurables = function(e) {
        return e && 0 < e.length && e[r] ? e[r] : null
    }, e.getServicesRelatedToBonus = function(e) {
        var n = {};
        return e.map(function(e) {
            n[e.propositionId] = [].concat(babelHelpers.toConsumableArray(u(e)), babelHelpers.toConsumableArray(o(e)), babelHelpers.toConsumableArray(i(e))).filter(function(e) {
                return !!e.linkedWithSecondaryChoice
            })
        }), n
    }, e.getSecondaryChoiceDiscountServicesRelated = function(e) {
        var n = {};
        return e.map(function(e) {
            n[e.propositionId] = babelHelpers.toConsumableArray(u(e)).filter(function(e) {
                return e.productType !== t.default.SECONDARY_CHOICE_DISCOUNT
            })
        }), n
    }, n = babelHelpers.interopRequireDefault(n), t = babelHelpers.interopRequireDefault(t);
    var r = 0;

    function u(e) {
        return a(e, "services")
    }

    function o(e) {
        return a(e, "tvPackages")
    }

    function i(e) {
        return a(e, "devices")
    }

    function c(e, n) {
        return e && e[n] ? e[n].length : 0
    }

    function a(e, n) {
        return 0 < c(e, n) ? e[n].slice() : []
    }
});
//# sourceMappingURL=ProductInfoUtils.js.map