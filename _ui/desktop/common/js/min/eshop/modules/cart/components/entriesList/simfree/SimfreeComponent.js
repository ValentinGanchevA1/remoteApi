define(["exports", "react", "./MultiCartItemComponent", "../simfree/MultiCartExpandingSectionComponent", "./MultiCartCollapsedItemComponent", "eshop/utils/DataLayerUtils", "../mobile/productModals/VasBuyMoreComponent", "../mobile/productEntries/VasEntriesListComponent", "react-redux", "../../../selectors"], function(e, p, u, c, d, s, f, b, t, r) {
    "use strict";

    function n(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, p = babelHelpers.interopRequireWildcard(p), u = babelHelpers.interopRequireDefault(u), c = babelHelpers.interopRequireDefault(c), d = babelHelpers.interopRequireDefault(d), s = babelHelpers.interopRequireDefault(s), f = babelHelpers.interopRequireDefault(f), b = babelHelpers.interopRequireDefault(b);
    var o = function(e) {
            babelHelpers.inherits(r, e);
            var t = n(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    s.default.pushPageCategoryDimension("TelefonyBezUmowy")
                }
            }, {
                key: "getVasesForBundle",
                value: function(t) {
                    return this.props.vases && this.props.vases.find(function(e) {
                        return e.bundle == t
                    })
                }
            }, {
                key: "hasVasesInServices",
                value: function(e, t) {
                    var r = this.getVasesForBundle(t);
                    if (!r || !r.services) return !1;
                    var s = r.services,
                        n = [];
                    return s.forEach(function(t) {
                        e.forEach(function(e) {
                            t.id == e.productCode && n.push(e)
                        })
                    }), !!n.length
                }
            }, {
                key: "render",
                value: function() {
                    var n = this,
                        r = this.props.entry,
                        e = this.props.titleConf,
                        t = e ? e.icon : "sim-3",
                        s = this.props.sectionConf && this.props.sectionConf.sectionTitle || "Urządzenia bez abonamentu",
                        o = "ocst",
                        a = this.props.idx,
                        l = this.props.sectionConf && this.props.sectionConf.productSections,
                        i = [].concat(babelHelpers.toConsumableArray(r.terminals), babelHelpers.toConsumableArray(r.euroSets));
                    return p.default.createElement(c.default, {
                        title: s,
                        key: a,
                        entry: r,
                        sapReservation: this.props.sapReservation,
                        sapErrorMessage: this.props.sapErrorMessage,
                        trigger: o
                    }, p.default.createElement("div", {
                        className: "l-full-row"
                    }, p.default.createElement("div", {
                        className: "l-page-row u-small-padding-left u-small-padding-right"
                    }, p.default.createElement("div", {
                        className: "u-padding-top u-padding"
                    }, p.default.createElement("div", {
                        className: "g-white1-bg u-box-shadow--s"
                    }, i && i.map(function(e, t) {
                        return e.processType || (e.processType = r.processType), p.default.createElement(u.default, {
                            key: "TERMINAL" + t + "_" + a,
                            entry: e,
                            type: "TERMINAL",
                            rejectionReason: r.rejectionReason,
                            sapReservation: n.props.sapReservation,
                            sapErrorMessage: n.props.sapErrorMessage,
                            descriptions: n.props.descriptions,
                            lowerInstallmentsActive: n.props.lowerInstallmentsActive,
                            noBorder: 0 === t
                        })
                    })), l && l.map(function(e, t) {
                        switch (e.entryType) {
                            case "VAS":
                                var r = !n.props.entry.vases || e.limitForBuyMoreButton >= n.props.entry.vases.length ? e.buyMoreLabel : null,
                                    s = n.props.entry.vases.length && n.hasVasesInServices(n.props.entry.vases, n.props.entry.productCode) ? e.sectionTitle : null;
                                return p.default.createElement("div", null, p.default.createElement(m, {
                                    key: "productSectionWrapper_" + a,
                                    entry: n.props.entry,
                                    sectionTitle: s,
                                    className: "u-box-shadow--s"
                                }, p.default.createElement(b.default, {
                                    key: "VAS_" + a,
                                    idx: a,
                                    entries: n.props.entry.vases,
                                    detailsHeader: e.detailsLabel,
                                    cartBundle: "" + n.props.entry.bundleNo,
                                    bundle: n.props.entry.productCode,
                                    propositionId: n.props.entry.bundleCode
                                })), r && p.default.createElement(f.default, {
                                    idx: a,
                                    buyMoreLabel: r,
                                    icon: e.icon,
                                    entry: n.props.entry
                                }));
                            default:
                                return null
                        }
                    })))), p.default.createElement(d.default, {
                        key: "collapsed_" + a,
                        icon: t,
                        entry: r,
                        trigger: o
                    }))
                }
            }]), r
        }(p.Component),
        m = function(e) {
            e.icon && e.icon.split("_").join("-");
            return p.default.createElement("div", {
                className: "g-white1-bg u-margin-top-l" + (e.className ? " " + e.className : "")
            }, e.sectionTitle && p.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        },
        a = (0, t.connect)(function(e) {
            return {
                vases: (0, r.getMobileVases)(e)
            }
        }, null)(o);
    e.default = a
});
//# sourceMappingURL=SimfreeComponent.js.map