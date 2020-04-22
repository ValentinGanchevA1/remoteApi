define(["exports", "react", "prop-types", "react-redux", "./BuyMoreProductsComponent", "./VasModal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/entriesList/mobile/productEntries/VasEntryComponent", "eshop/modules/checkout/selectors", "eshop/modules/checkout/components/MulticartValidationComponent", "../../../../../core/constants/TransactionProcessTypeEnum"], function(e, o, t, s, r, i, n, a, l, u, c, p) {
    "use strict";

    function d(n) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c), p = babelHelpers.interopRequireDefault(p);
    var f = function(e) {
            babelHelpers.inherits(n, e);
            var s = d(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = s.call(this, e)).state = {
                    modalVisible: !1
                }, t.addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(n, [{
                key: "componentWillMount",
                value: function() {
                    this.props.entry.bundleCode && this.props.entry.productCode && this.props.entry.processType && this.props.fetchMobileVases(this.props.entry.bundleCode, this.props.entry.productCode, this.props.entry.processType)
                }
            }, {
                key: "addButtonClicked",
                value: function() {
                    this.setState({
                        modalVisible: !0
                    }, function() {}.bind(this))
                }
            }, {
                key: "closeModalClicked",
                value: function() {
                    this.setState({
                        modalVisible: !1
                    }, function() {}.bind(this))
                }
            }, {
                key: "containsVases",
                value: function() {
                    var t = this,
                        e = (this.props.vases || []).filter(function(e) {
                            return e.propositionId == t.props.entry.bundleCode
                        });
                    return 0 < e.length && e.categorizedBonuses, 0 < e.length && e[0].categorizedBonuses && e[0].categorizedBonuses.RetentionBonuses && e[0].categorizedBonuses.RetentionBonuses.services && 0 < e[0].categorizedBonuses.RetentionBonuses.services.length
                }
            }, {
                key: "getVasesForBundle",
                value: function(t) {
                    return this.props.vases && this.props.vases.find(function(e) {
                        return e.bundle == t
                    })
                }
            }, {
                key: "getRetentionBonuses",
                value: function() {
                    var e = this.props.vases.find(function(e) {
                        return e.process == p.default.RETENTION
                    });
                    return e && e.categorizedBonuses && e.categorizedBonuses.RetentionBonuses ? e.categorizedBonuses.RetentionBonuses.services : []
                }
            }, {
                key: "isVasInBonuses",
                value: function(t) {
                    var e = this.getRetentionBonuses();
                    if (!e) return !1;
                    var s = [];
                    return e.forEach(function(e) {
                        e.id == t.productCode && s.push(t)
                    }), !!s.length
                }
            }, {
                key: "getSelectedBonus",
                value: function() {
                    var t = this,
                        s = null;
                    return this.props.entry.vases.forEach(function(e) {
                        return t.isVasInBonuses(e) ? s = e : ""
                    }), s
                }
            }, {
                key: "isRetentionBonusSelected",
                value: function() {
                    var e = !0,
                        s = this.props.entry;
                    if (this.props.vases && this.props.vases.find(function(e) {
                            return "RETENTION" == e.process
                        })) {
                        var t = this.getRetentionBonuses();
                        if (0 < t.length) {
                            if (0 == this.props.entry.vases.length) return !1;
                            e = !1, t.forEach(function(t) {
                                s.vases.find(function(e) {
                                    return e.productCode == t.id
                                }) && (e = !0)
                            })
                        }
                    }
                    return e
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.detailsHeader ? this.props.detailsHeader : "Szczegóły",
                        t = this.getSelectedBonus();
                    return this.containsVases() ? o.default.createElement("div", null, o.default.createElement(h, {
                        key: "productSectionWrapper_" + this.props.index,
                        entry: this.props.entry,
                        sectionTitle: this.props.sectionTitle,
                        className: "u-box-shadow--s"
                    }, t ? o.default.createElement(l.default, {
                        key: "VAS" + t.productCode + "_bonus",
                        detailsHeader: this.props.detailsHeader,
                        showDetails: !1,
                        entry: t,
                        cartBundle: this.props.cartBundle,
                        bundle: this.props.bundle,
                        propositionId: this.props.propositionId,
                        topBorder: !0,
                        onChangeClicked: this.addButtonClicked
                    }) : o.default.createElement(r.default, {
                        addButtonClicked: this.addButtonClicked,
                        icon: this.props.icon,
                        buyMoreLabel: this.props.buyMoreLabel,
                        className: "g-brand2-c"
                    }), o.default.createElement(i.default, {
                        title: "Wybierz bonus za przedłużenie umowy",
                        cartVases: this.props.entry.vases,
                        vases: this.props.vases,
                        viewAsRetentionBonuses: !0,
                        multiChoice: !1,
                        header: e,
                        cartBundle: "" + this.props.entry.bundleNo,
                        bundle: this.props.entry.productCode,
                        propositionId: this.props.entry.bundleCode,
                        open: this.state.modalVisible,
                        onClose: this.closeModalClicked,
                        idx: this.props.idx
                    })), o.default.createElement(c.default, {
                        messageType: "retentionBonuses",
                        iconType: "warn",
                        className: "u-padding-top-m",
                        scrollToParent: !0,
                        show: !this.isRetentionBonusSelected()
                    })) : null
                }
            }]), n
        }(o.Component),
        h = function(e) {
            e.icon && e.icon.split("_").join("-");
            return o.default.createElement("div", {
                className: "g-white1-bg u-margin-top-l" + (e.className ? " " + e.className : "")
            }, e.sectionTitle && o.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        };
    f.propTypes = {
        idx: t.default.number,
        entry: t.default.object,
        fetchMobileVases: t.default.func,
        vases: t.default.array
    }, f.defaultProps = {
        buyMoreLabel: "Dziękujemy, że jesteś z nami. Wybierz bonus za przedłużenie umowy."
    };
    var b = (0, s.connect)(function(e) {
        return {
            vases: (0, n.getMobileVases)(e),
            validationMsg: (0, u.getFrontValidationMsg)(e)
        }
    }, function(n) {
        return {
            fetchMobileVases: function(e, t, s) {
                return n((0, a.fetchMobileVases)(e, t, s))
            }
        }
    })(f);
    e.default = b
});
//# sourceMappingURL=SelectRetentionBonusComponent.js.map