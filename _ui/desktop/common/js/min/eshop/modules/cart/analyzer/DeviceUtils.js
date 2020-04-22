define(["exports", "../enum/DeviceType", "../../checkout/constants/RuleTypeEnum", "../../core/utils/CmsUtils"], function(e, i, r, c) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getDevicesWithAdjustedDeviceType = e.prepareDevices = e.createCustomRules = e.restoreMigratedTVDevicesOnNewSTBRemoval = e.findDeviceByType = e.findSTB = e.findTVDevicesNoMUL = void 0, i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r);

    function o(e) {
        return e.filter(function(e) {
            return !!e.deviceType && i.default.isTVDeviceNoMUL(e.deviceType)
        })
    }
    e.findTVDevicesNoMUL = o;

    function u(e) {
        return e.filter(function(e) {
            return !!e.deviceType && i.default.STB === e.deviceType
        })
    }
    e.findSTB = u;
    e.findDeviceByType = function(e, t) {
        return e.filter(function(e) {
            return e.deviceType === t
        })
    };

    function p(e, t) {
        return {
            ruleType: r.default.NONE,
            sourceVases: e.map(function(e) {
                return e.id || e.productCode
            }),
            targetVases: t.map(function(e) {
                return e.id || e.productCode
            }),
            type: r.default.REQUIRE_SOME
        }
    }
    e.restoreMigratedTVDevicesOnNewSTBRemoval = p;
    e.createCustomRules = function(e, t) {
        var r = [],
            n = t ? o(t) : [],
            i = e ? u(e) : [],
            c = i.concat(u(n));
        return 0 < n.length && 0 < i.length && r.push(p(c, n)), r
    };
    e.prepareDevices = function(e, r, t) {
        var n = t && u(t).map(function(e) {
            return e.id || e.productCode
        });
        return e ? r && 0 !== n.length ? e.map(function(t) {
            return i.default.STB !== t.deviceType || t.mandatory || n.some(function(e) {
                return e === t.id || e === t.productCode
            }) || (t.warningMessage = r.optionalSTBWarning, t.onRemoveWarning = (0, c.createCMSDescriptionWithParams)(r.onRemoveRestoreDevicesWarning, [t.title])), t
        }) : e : []
    };
    e.getDevicesWithAdjustedDeviceType = function(e) {
        return (e || []).map(function(e) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, e, {
                productType: e.deviceType === i.default.STBMUL ? "ADDON" : e.productType
            })
        })
    }
});
//# sourceMappingURL=DeviceUtils.js.map