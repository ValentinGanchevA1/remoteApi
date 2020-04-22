define(["exports", "react", "../../../analyzer/CartInfoUtils", "./UniversalEntryComponent", "../fix/BoxFragments"], function(e, l, s, u, d) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function f(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), u = babelHelpers.interopRequireDefault(u);

    function t(c) {
        var e = c.sectionConf,
            i = c.sections,
            t = e ? e.productSections : [];

        function a(e, t, n) {
            return e.relatedDevices && e.relatedDevices.map(function(e) {
                return l.default.createElement("div", {
                    key: "".concat(t, "-").concat(e.entryNo)
                }, l.default.createElement("div", {
                    className: "u-padding-left-m u-padding-right-m"
                }, l.default.createElement("div", {
                    className: "o-separator"
                })), l.default.createElement(u.default, {
                    borderTop: !0,
                    sectionConf: n,
                    entry: f({}, e, {
                        productType: t
                    }),
                    onChange: function() {
                        return i[t].onChange({
                            section: n,
                            vas: e
                        })
                    },
                    showNetPrices: c.showNetPrices,
                    forFreeLabel: c.forFreeLabel,
                    serviceFreeLabel: c.serviceFreeLabel
                }))
            })
        }
        return l.default.createElement("div", null, t.map(function(n, r) {
            var o = n.entryType,
                e = n.productList;
            return i[o] && i[o].entries ? e && e.innerLists && 0 < e.innerLists.length ? e.innerLists.map(function(t) {
                var e = (0, s.Filters)()[t.productFilter](i[o].entries);
                return e.sort((0, s.compareByProductCodeListAndMandatoryAndTitle)(t.productCodes)), e.map(function(e) {
                    return l.default.createElement(p, {
                        hidden: !1 === e.visible,
                        key: "WRAPPER" + e.entryNo
                    }, l.default.createElement(d.FloatingBox, null, l.default.createElement(u.default, {
                        key: "".concat(t.productFilter, "-").concat(e.entryNo, "-").concat(r),
                        sectionConf: n,
                        entry: f({}, e, {
                            productType: t.productFilter
                        }),
                        onChange: function() {
                            return i[o].onChange({
                                section: n,
                                selectedSection: t.productFilter
                            })
                        },
                        onRemove: i[o].onRemove,
                        showNetPrices: c.showNetPrices,
                        descriptions: c.descriptions,
                        lowerInstallmentsClicked: i[o].lowerInstallmentsClicked
                    }), a(e, o, n)))
                })
            }) : i[o].entries.map(function(e) {
                return l.default.createElement(d.FloatingBox, null, l.default.createElement(u.default, {
                    key: "".concat(o, "-").concat(e.entryNo, "-").concat(r),
                    sectionConf: n,
                    entry: f({}, e, {
                        productType: o
                    }),
                    onChange: function() {
                        return i[o].onChange({
                            section: n,
                            vas: e
                        })
                    },
                    onRemove: i[o].onRemove,
                    showNetPrices: c.showNetPrices,
                    descriptions: c.descriptions,
                    lowerInstallmentsClicked: i[o].lowerInstallmentsClicked
                }), a(e, o, n))
            }) : null
        }))
    }
    var p = function(e) {
        return e.hidden ? l.default.createElement("div", {
            className: "u-hide"
        }) : l.default.createElement("div", null, e.children)
    };
    e.default = t
});
//# sourceMappingURL=CommonProductEntries.js.map