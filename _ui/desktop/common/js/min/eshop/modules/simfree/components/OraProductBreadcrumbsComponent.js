define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/filter", "../../configurator/selectors/filters"], function(e, l, t, n, r, c, i) {
    "use strict";

    function o(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var s = function(e) {
            babelHelpers.inherits(r, e);
            var t = o(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "clearAllFilters",
                value: function() {
                    this.clearSelectedFilters(), this.props.changeCategory({
                        code: "Phones and Devices",
                        name: "Telefony i Urządzenia"
                    })
                }
            }, {
                key: "clearSelectedFilters",
                value: function() {
                    this.props.changePriceFilter("from", ""), this.props.changePriceFilter("to", ""), this.props.clearMonthlyPrices(), this.props.clearOneTimePrices(), this.props.setSelectedProducer(""), this.props.clearAttrFilters(), this.props.clearMatchToFilters()
                }
            }, {
                key: "renderElement",
                value: function(e, t) {
                    return null != t.url ? l.default.createElement("li", {
                        itemProp: "itemListElement",
                        itemScope: !0,
                        itemType: "http://schema.org/ListItem"
                    }, l.default.createElement("a", {
                        itemProp: "item",
                        href: t.url ? window.location.origin + t.url : window.location.origin + "/sklep"
                    }, l.default.createElement("span", {
                        itemProp: "name"
                    }, t.name)), l.default.createElement("meta", {
                        itemProp: "position",
                        content: e
                    })) : l.default.createElement("li", {
                        itemProp: "itemListElement",
                        itemScope: !0,
                        itemType: "http://schema.org/ListItem"
                    }, l.default.createElement("span", {
                        itemProp: "name"
                    }, t.name), l.default.createElement("meta", {
                        itemProp: "position",
                        content: e
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var r = this,
                        e = this.buildBreadcrumbJson();
                    return l.default.createElement("div", {
                        className: "l-full-row opl-breadcrumbs u-small-hide u-medium-hide"
                    }, l.default.createElement("div", {
                        className: "l-page-row"
                    }, l.default.createElement("ul", {
                        itemScope: !0,
                        itemType: "http://schema.org/BreadcrumbList"
                    }, void 0 !== e.length || 0 < e.length ? e.map(function(e, t) {
                        return r.renderElement(t, e)
                    }) : null)))
                }
            }, {
                key: "buildBreadcrumbJson",
                value: function() {
                    var e = this.props.isB2B ? babelHelpers.toConsumableArray(this.props.b2bBreadcrumb) : babelHelpers.toConsumableArray(this.props.b2cBreadcrumb),
                        t = this.createShopElement();
                    return t && e.push(t), e
                }
            }, {
                key: "createShopElement",
                value: function() {
                    return this.props.selectedProductListHeader ? this.props.selectedProductListHeader ? {
                        name: "Sklep " + this.props.selectedProductListHeader.toLowerCase(),
                        url: null
                    } : void 0 : {
                        name: "Sklep",
                        url: null
                    }
                }
            }]), r
        }((l = babelHelpers.interopRequireWildcard(l)).Component),
        a = (0, t.connect)(function(e) {
            return {
                selectedOfferType: (0, i.getSelectedOfferType)(e),
                selectedProducer: (0, r.getSelectedProducer)(e),
                selectedProductListHeader: (0, r.getProductListHeader)(e),
                selectedCategoryName: (0, r.getSelectedCategoryName)(e),
                selectedCategory: (0, r.getSelectedCategory)(e),
                isB2B: "B2B" === (0, i.getMarketContext)(e)
            }
        }, function(r) {
            return {
                clearMatchToFilters: function() {
                    return r((0, c.clearMatchToFilters)())
                },
                clearAttrFilters: function() {
                    return r((0, c.clearAttrsFilters)())
                },
                changePriceFilter: function(e, t) {
                    return r((0, c.changePriceFilter)(e, t))
                },
                clearMonthlyPrices: function() {
                    return r((0, c.clearMonthlyPrices)())
                },
                clearOneTimePrices: function() {
                    return r((0, c.clearOneTimePrices)())
                },
                setSelectedProducer: function(e) {
                    return r((0, c.setSelectedProducer)(e))
                },
                changeCategory: function(e) {
                    return r((0, n.changeCategory)(e))
                }
            }
        })(s);
    e.default = a
});
//# sourceMappingURL=OraProductBreadcrumbsComponent.js.map