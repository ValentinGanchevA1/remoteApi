define(["exports", "react"], function(e, o) {
    "use strict";

    function r(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                this._loadModules()
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement("div", {
                    className: "u-small-hide u-spacing-xl js-stop-sticking u-padding-top-l"
                }, o.default.createElement("div", {
                    id: "opl-scroll-to-element",
                    "data-js-module": "core/modules/opl-scroll-to-element",
                    className: this.props.noShadow ? "opl-wiking-product-menu u-spacing-xl u-no-shadow" : "opl-wiking-product-menu u-spacing-xl "
                }, o.default.createElement("div", {
                    className: "l-page-row"
                }, o.default.createElement("ul", null, this.createPromotionLi(), this.props.deviceData.description ? o.default.createElement("li", {
                    className: this.props.deviceData.promotion ? "" : "active"
                }, o.default.createElement("a", {
                    href: "#product-description",
                    className: "opl-scroll-to-element-item"
                }, "Opis")) : null, this.props.deviceData.classification && 0 < this.props.deviceData.classification.length ? o.default.createElement("li", null, o.default.createElement("a", {
                    href: "#product-details",
                    className: "opl-scroll-to-element-item"
                }, "Specyfikacja")) : null, this._createRecommendedProductsLi(), o.default.createElement("li", null, o.default.createElement("a", {
                    href: "#product-comments",
                    className: "opl-scroll-to-element-item"
                }, "Recenzje")), o.default.createElement("li", null, o.default.createElement("a", {
                    href: "#product-delivery",
                    className: "opl-scroll-to-element-item"
                }, "Dostawa i płatność"))))))
            }
        }, {
            key: "createPromotionLi",
            value: function() {
                return 0 !== this.props.deviceData.promotion && null != this.props.deviceData.promotion && this.props.deviceData.promotion ? o.default.createElement("li", {
                    className: "active"
                }, o.default.createElement("a", {
                    href: "#product-promotion",
                    className: "opl-scroll-to-element-item"
                }, this.props.promotionNavigationLabel ? this.props.promotionNavigationLabel : "")) : null
            }
        }, {
            key: "_createRecommendedProductsLi",
            value: function() {
                return 0 !== this.props.recommendedProducts.length && null != this.props.recommendedProducts && this.props.recommendedProducts ? o.default.createElement("li", null, o.default.createElement("a", {
                    href: "#product-recommended-anchor" + this.props.deviceData.productId,
                    className: "opl-scroll-to-element-item"
                }, this.props.recommendedProductsLabel ? this.props.recommendedProductsLabel : "")) : null
            }
        }, {
            key: "_loadModules",
            value: function() {
                OPL.UI.loadModules(document.getElementById("opl-scroll-to-element"), [{
                    path: "common/modules/opl-scroll-to-element",
                    options: ""
                }])
            }
        }]), l
    }((o = babelHelpers.interopRequireDefault(o)).default.Component);
    e.default = t
});
//# sourceMappingURL=ProductDetailsNavigationComponent.js.map