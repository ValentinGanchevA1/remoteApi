define(["exports", "react", "react-redux", "eshop/modules/simfree/components/details/ProductDetailsNavigationComponent", "eshop/modules/simfree/components/details/ProductDetailsProductDescription", "eshop/modules/simfree/components/details/ProductDetailsProductPromotion", "eshop/modules/simfree/components/details/ProductDetailsProductSpecification", "eshop/modules/simfree/components/details/ProductRecomendation", "eshop/modules/simfree/components/details/ProductCartProductReviewComponent", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/app"], function(e, s, t, l, o, r, n, i, c, a, d) {
    "use strict";

    function u(l) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c);
    var p = function(e) {
            babelHelpers.inherits(a, e);
            var t = u(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    if (this._loadModules(), this.props.deviceData.setOf) {
                        var e = Object.keys(this.props.deviceData.setOf);
                        this.setDeviceTab(e[0])
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.killModules()
                }
            }, {
                key: "_loadModules",
                value: function() {
                    OPL.UI.loadModules(document.getElementById("opl-expander-product-details"), [{
                        path: "common/modules/opl-expander",
                        options: {
                            scrollToSelected: !0,
                            hideOtherElements: !0
                        },
                        conditions: "media:{(max-width:767px)}"
                    }]), OPL.UI.initModules(document.getElementById("opl-expander-product-details-container"))
                }
            }, {
                key: "killModules",
                value: function() {
                    OPL.UX.stopModules(document.getElementById("opl-expander-product-details-container"))
                }
            }, {
                key: "setDeviceTab",
                value: function(e) {
                    this.props.setSelectedDeviceTab(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.deviceData;
                    if (e.setOf)
                        if (this.props.selectedDeviceTab) e = e.setOf[this.props.selectedDeviceTab];
                        else {
                            var t = Object.keys(e.setOf);
                            e = e.setOf[t[0]]
                        } return s.default.createElement("div", {
                        className: "l-full-row"
                    }, s.default.createElement(m, {
                        deviceData: this.props.deviceData,
                        selectedDeviceTab: this.props.selectedDeviceTab,
                        onClickHandler: this.setDeviceTab.bind(this)
                    }), s.default.createElement(l.default, {
                        deviceData: e,
                        noShadow: !!this.props.selectedDeviceTab,
                        recommendedProducts: this.props.recomendedProducts,
                        recommendedProductsLabel: this.props.recommendedProductsNavigationLabel,
                        promotionNavigationLabel: this.props.promotionNavigationLabel
                    }), s.default.createElement("div", {
                        className: "l-page-row u-small-padding-left-l u-small-padding-right-l",
                        id: "opl-expander-product-details-container"
                    }, s.default.createElement("div", {
                        id: "opl-expander-product-details",
                        "data-js-module": "common/modules/opl-expander",
                        role: "tablist",
                        "aria-multiselectable": !1
                    }, s.default.createElement(r.default, {
                        promotion: e.promotion,
                        promotionLabel: this.props.promotionLabel
                    }), s.default.createElement(o.default, {
                        description: e.description
                    }), s.default.createElement(n.default, {
                        deviceData: e
                    }), s.default.createElement(i.default, {
                        products: this.props.recomendedProducts,
                        label: this.props.recommendedProductsLabel,
                        productId: this.props.deviceData.productId
                    }), s.default.createElement(c.default, {
                        deviceData: e
                    }))))
                }
            }]), a
        }(s.default.Component),
        m = function(a) {
            if (a.deviceData && !a.deviceData.setOf) return null;
            var l = a.deviceData,
                o = (a.selectedDevice, []);
            return Object.keys(l.setOf).forEach(function(e) {
                var t = l.setOf[e];
                o.push(s.default.createElement("li", {
                    onClick: function() {
                        return a.onClickHandler(t.productId)
                    },
                    key: "#set-item-" + t.name,
                    className: "opl-tabs__nav-item"
                }, s.default.createElement("div", {
                    className: "opl-tabs__nav-item__content"
                }, s.default.createElement("a", {
                    href: "#tab_content-" + t.productId,
                    className: "opl-tabs__nav-link"
                }, s.default.createElement("span", {
                    className: "opl-tabs__nav-link-inner"
                }, s.default.createElement("span", null, t.name))))))
            }), s.default.createElement("div", {
                className: "js-stop-sticking u-padding-top-l"
            }, s.default.createElement("div", {
                className: "l-page-row"
            }, s.default.createElement("div", {
                className: "opl-tabs defailt"
            }, s.default.createElement("div", {
                className: "opl-tabs__nav-wrapper"
            }, s.default.createElement("div", {
                className: "opl-tabs__nav-wrapper-inner"
            }, s.default.createElement("ul", {
                className: "opl-tabs__nav js-tablist",
                "data-js-module": "common/modules/opl-tabs"
            }, o))))))
        },
        f = (0, t.connect)(function(e) {
            return {
                selectedDeviceTab: (0, a.getSelectedDeviceTab)(e)
            }
        }, function(t) {
            return {
                setSelectedDeviceTab: function(e) {
                    return t((0, d.setSelectedDeviceTab)(e))
                }
            }
        })(p);
    e.default = f
});
//# sourceMappingURL=ProductDetailsNavigatedComponent.js.map