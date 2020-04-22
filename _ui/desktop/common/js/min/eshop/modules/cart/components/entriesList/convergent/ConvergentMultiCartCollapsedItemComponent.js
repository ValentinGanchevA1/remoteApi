define(["exports", "react", "../../../../magnum2/components/Utils", "./prices/CheckoutPrice", "./prices/CheckoutPriceMobile", "./prices/MonthlyPrices", "./prices/MonthlyPricesMobile"], function(e, r, t, a, n, i, u) {
    "use strict";

    function c(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), u = babelHelpers.interopRequireDefault(u);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = c(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "l-full-row is-expanded-hide is-expanding-hide"
                }, r.default.createElement("div", {
                    className: "l-page-row"
                }, r.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, r.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }, this._renderDesktopView(), this._renderMobileView()))))
            }
        }, {
            key: "_renderDesktopView",
            value: function() {
                return r.default.createElement("div", {
                    className: "u-small-hide u-padding-left-l u-padding-right-l"
                }, r.default.createElement("table", {
                    className: "u-table-fixed"
                }, r.default.createElement("tbody", null, r.default.createElement("tr", null, r.default.createElement("td", {
                    className: "u-padding-l-xl u-padding-top-l-xl u-padding-right-l"
                }, this._renderIcons()), r.default.createElement("td", {
                    className: "u-padding-right l-col-2 u-small-hide u-padding-l u-padding-top-l u-text-right"
                }, r.default.createElement(a.default, {
                    checkoutPrice: this.props.entry.totalCheckoutPrice
                })), r.default.createElement("td", {
                    className: "u-padding-left l-col-2 u-small-hide u-padding-l u-padding-top-l u-text-right"
                }, r.default.createElement(i.default, {
                    monthlyPrices: this.props.entry.totalMonthlyPrices,
                    onlyFirst: !0
                }))))))
            }
        }, {
            key: "_renderMobileView",
            value: function() {
                return r.default.createElement("div", {
                    className: "u-hide u-small-block u-padding-top-l"
                }, r.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, r.default.createElement("table", {
                    className: "u-table-fixed"
                }, r.default.createElement("tbody", null, r.default.createElement("tr", null, r.default.createElement("td", {
                    className: "opl-checkout__image__cell u-vertical-middle"
                }, r.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.entry.planName), r.default.createElement("img", {
                    src: "../../assets/images/articles/glorious-grid/orange-love.png",
                    alt: ""
                })), r.default.createElement("td", null, r.default.createElement(u.default, {
                    monthlyPrices: this.props.entry.totalMonthlyPrices
                }), r.default.createElement(n.default, {
                    checkoutPrice: this.props.entry.totalCheckoutPrice
                }))))), r.default.createElement("div", {
                    className: "u-padding-top-l"
                }, r.default.createElement("a", {
                    href: "#",
                    className: "opl-checkout__section__trigger " + this.props.trigger,
                    id: "mod-core/modules/expander-3-control-0",
                    role: "tab",
                    "aria-controls": "mod-core/modules/expander-3-tab-0",
                    "aria-expanded": "true"
                }, "Rozwiń"))))
            }
        }, {
            key: "_renderIcons",
            value: function() {
                var a = this;
                if (!this.props.entry.entries) return null;
                var e = this.props.entry.entries.map(function(t, e) {
                    var l = a.props.sectionConf.productSections.find(function(e) {
                        return e.entryType === t.subEntryType
                    });
                    return a._renderIcon(t, l, e !== a.props.entry.entries.length - 1)
                });
                return r.default.createElement("div", {
                    className: "l-group"
                }, e)
            }
        }, {
            key: "_renderIcon",
            value: function(e, t, l) {
                return r.default.createElement("div", {
                    key: e.subEntryType + "_" + e.productCode,
                    style: {
                        float: "left"
                    }
                }, r.default.createElement("div", {
                    className: "l-group__element u-vertical-middle"
                }, r.default.createElement("span", {
                    className: "u-acc-hide"
                }, e.planName), r.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--" + t.icon
                })), l && this._renderPlusIcon())
            }
        }, {
            key: "_renderPlusIcon",
            value: function() {
                return r.default.createElement("div", {
                    className: "l-group__element u-vertical-middle u-padding-left-l u-padding-right-l"
                }, r.default.createElement("span", {
                    className: "g-icon g-icon--plus-slim g-icon--xs-s g-icon--only g-brand2-c"
                }))
            }
        }]), l
    }(r.Component);
    e.default = l
});
//# sourceMappingURL=ConvergentMultiCartCollapsedItemComponent.js.map