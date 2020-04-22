define(["exports", "react", "react-redux", "../FixTvModal", "../AnalyzerAdapter", "../../BoxFragments", "../../Utils", "../../../../../actions/cart", "../../../../../selectors", "../../../../../analyzer/TvPackageUtils"], function(e, s, t, a, n, o, c, i, l, u) {
    "use strict";

    function r(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
                var i = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, i)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), a = babelHelpers.interopRequireDefault(a);
    var d = function(e) {
            babelHelpers.inherits(l, e);
            var i = r(l);

            function l(e) {
                var t;
                return babelHelpers.classCallCheck(this, l), (t = i.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t.closeModalClicked = t.closeModalClicked.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(l, [{
                key: "addButtonClicked",
                value: function() {
                    this.props.changeTvModalVisibility(!0)
                }
            }, {
                key: "removeButtonClicked",
                value: function(e) {
                    this.adapter && this.adapter.removeProduct && this.adapter.removeProduct(e)
                }
            }, {
                key: "closeModalClicked",
                value: function() {
                    this.props.changeTvModalVisibility(!1)
                }
            }, {
                key: "getIncludedInThePackageTitle",
                value: function() {
                    return this.props.descriptions && this.props.descriptions.includedInThePackageTitle && "" !== this.props.descriptions.includedInThePackageTitle ? this.props.descriptions.includedInThePackageTitle : "W cenie pakietu"
                }
            }, {
                key: "render",
                value: function() {
                    var t, i = this,
                        e = this.props.descriptions ? this.props.descriptions.modalTitle : "",
                        l = this.props.descriptions ? this.props.descriptions.modalContents : "",
                        r = this.props.migratedTvPacks ? this.props.migratedTvPacks : [];
                    return s.default.createElement("div", null, s.default.createElement(o.FloatingBox, {
                        boxClassName: "u-padding-left-l u-padding-right-l u-box-shadow--s u-box-shadow-hover"
                    }, s.default.createElement("a", {
                        href: "#",
                        onClick: (t = this.addButtonClicked, function(e) {
                            e.preventDefault(), t(e)
                        })
                    }, s.default.createElement("table", {
                        className: "u-table-fixed"
                    }, s.default.createElement("tbody", null, s.default.createElement("tr", null, s.default.createElement(c.GraphicCell, {
                        icon: this.props.icon
                    }), s.default.createElement(o.LabelCell, {
                        label: this.props.label
                    }), s.default.createElement(o.ButtonCell, {
                        icon: "plus",
                        link: "#"
                    })))))), s.default.createElement(n.FixAnalyzerAdapter, {
                        configurables: this.props.configurables,
                        entry: this.props.entry,
                        customRules: (0, u.createCustomRules)(this.props.presentable, r, this.props.customFilters),
                        ref: function(e) {
                            return i.adapter = e
                        },
                        triggerCartRecalculation: this.props.tvModalVisibility
                    }, s.default.createElement(a.default, {
                        label: this.props.header,
                        open: this.props.tvModalVisibility,
                        services: this.props.presentable,
                        migratedServices: this.props.configurables.migratedProducts,
                        onClose: this.closeModalClicked,
                        productList: this.props.inner,
                        subModalTitle: e,
                        subModalContents: l,
                        showNetPrices: this.props.showNetPrices,
                        includedInThePackageTitle: this.getIncludedInThePackageTitle(),
                        filtersVisible: !0
                    })))
                }
            }]), l
        }(s.Component),
        p = (0, t.connect)(function(e) {
            return {
                tvModalVisibility: (0, l.getTvModalVisibility)(e),
                customFilters: (0, l.getCustomFilters)(e)
            }
        }, function(t) {
            return {
                changeTvModalVisibility: function(e) {
                    return t((0, i.changeTvModalVisibility)(e))
                }
            }
        }, null, {
            withRef: !0
        })(d);
    e.default = p
});
//# sourceMappingURL=AddTVButton.js.map