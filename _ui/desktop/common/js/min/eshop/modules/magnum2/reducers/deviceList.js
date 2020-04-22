define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(e, s, n) {
    "use strict";

    function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(t);
            e && (c = c.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, c)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : i,
            c = 1 < arguments.length ? t : void 0;
        switch (c.type) {
            case n.fetchDeviceList.start:
                return {
                    requestState: s.RequestState.Waiting, devices: []
                };
            case n.fetchDeviceList.success:
                return {
                    requestState: s.RequestState.Success, devices: babelHelpers.toConsumableArray(c.payload)
                };
            case n.fetchDeviceList.error:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, {
                    requestState: s.RequestState.Error,
                    devices: []
                });
            default:
                return r
        }
    }
    var i = {
        requestState: s.RequestState.None,
        devices: []
    };
    e.default = t
});
//# sourceMappingURL=deviceList.js.map