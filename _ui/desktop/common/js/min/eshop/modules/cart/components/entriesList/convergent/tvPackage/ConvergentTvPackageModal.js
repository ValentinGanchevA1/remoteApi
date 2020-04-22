define(["exports", "react", "../../fix/buymore/FixTvModal", "../vasModal/ConvergentAnalyzerAdapter", "../../../../analyzer/TvPackageUtils", "../../../../../checkout/constants/CartEntryTypeEnum"], function(e, i, o, s, c, a) {
    "use strict";

    function n(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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

    function l(t, e) {
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
    }), e.ConvergentTvPackageModal = void 0, i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), a = babelHelpers.interopRequireDefault(a);

    function p(t, e, r) {
        t.tvPackages = t.tvPackages.map(function(e) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, e, {
                propositionId: t.propositionId
            })
        });
        var n = [],
            i = e.entries.filter(function(e) {
                return "FIX" === e.entryType
            });
        i && i.find(function(e) {
            return e.migratedProducts
        }) && (n = i.find(function(e) {
            return e.migratedProducts
        }).migratedProducts);
        var o = n.filter(function(e) {
            return !!e.addonType
        });
        t.relations = t.relations.concat((0, c.createCustomRules)(t.tvPackages, o, r));
        var s = o.map(function(e) {
                return e.id = e.productCode, e.inputType = "MIGRATED", e
            }),
            a = s.map(function(e) {
                return e.productCode
            });
        t.tvPackages = t.tvPackages.filter(function(e) {
            return !a.includes(e.id)
        }), t.tvPackages = t.tvPackages.concat(s)
    }
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getIncludedInThePackageTitle",
            value: function() {
                return this.props.descriptions && this.props.descriptions.includedInThePackageTitle && "" !== this.props.descriptions.includedInThePackageTitle ? this.props.descriptions.includedInThePackageTitle : "<div>Pakiety TV</div><div>zawarte w Orange Love</div>"
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.descriptions ? this.props.descriptions.modalTitle : "",
                    t = this.props.descriptions ? this.props.descriptions.modalContents : "",
                    r = JSON.parse(JSON.stringify(this.props.convergentConfigurables.configurables)),
                    n = r.find(function(e) {
                        return e.factoryName === a.default.FIX
                    });
                return n && p(n, this.props.entry, this.props.customFilters), i.default.createElement("div", null, i.default.createElement(s.default, {
                    configurables: r,
                    entry: this.props.entry,
                    updateCartProducts: this.props.updateCartProducts,
                    singlePropositionId: n && n.propositionId,
                    triggerCartRecalculation: this.props.modalVisible
                }, i.default.createElement(o.default, {
                    label: this.props.header,
                    open: this.props.modalVisible,
                    services: n && n.tvPackages ? n.tvPackages : [],
                    onClose: this.props.closeModalClicked,
                    productList: this.props.inner,
                    subModalTitle: e,
                    subModalContents: t,
                    showNetPrices: this.props.showNetPrices,
                    includedInThePackageTitle: this.getIncludedInThePackageTitle(),
                    filtersVisible: !0
                })))
            }
        }]), r
    }(i.Component);
    e.ConvergentTvPackageModal = t
});
//# sourceMappingURL=ConvergentTvPackageModal.js.map