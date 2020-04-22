define(["exports", "react", "eshop/modules/simfree/actions/app", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/ProductRecomendationOneProduct"], function(e, n, t, o, l) {
    "use strict";

    function s(n) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l);
    var r = function(e) {
        babelHelpers.inherits(o, e);
        var t = s(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.loadModules()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.killModules()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.loadModules()
            }
        }, {
            key: "render",
            value: function() {
                var o = this;
                return this.props.products && null != this.props.products && 0 !== this.props.products.length ? n.default.createElement("div", {
                    id: "product-recommended-anchor" + this.props.productId,
                    className: "js-expander__container opl-wiking-expander__container"
                }, n.default.createElement("p", {
                    "data-skiplinks": this.props.label,
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, this.props.label), n.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwiń")), n.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content"
                }, n.default.createElement("div", {
                    className: "u-small-padding-top-l u-spacing-xl u-small-no-spacing-bottom"
                }, n.default.createElement("div", {
                    ref: function(e) {
                        return o.ref = e
                    },
                    className: "l-row opl-carousel opl-wiking-gallery-single u-padding-left u-padding-right"
                }, this.props.products.map(function(e, t) {
                    return n.default.createElement(l.default, {
                        phone: e,
                        index: t,
                        key: "recomendation" + t,
                        products: o.props.products
                    })
                }))))) : null
            }
        }, {
            key: "killModules",
            value: function() {
                var e = document.getElementById("recommendation-carousel");
                e && OPL.UI.stopModules(e)
            }
        }, {
            key: "loadModules",
            value: function() {
                this.ref && OPL.UI.loadModules(this.ref, [{
                    path: "core/modules/layout-fixer",
                    conditions: "element:{seen}",
                    options: {
                        selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2"]
                    }
                }, {
                    path: "common/modules/opl-carousel",
                    conditions: "element:{was seen}",
                    options: {
                        navAdditionalClass: "o-btn-arrow--rounded",
                        slide: ".opl-carousel__recomended-item",
                        slidesToShow: 4,
                        autoplay: !1,
                        arrows: !1,
                        dots: !0,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                dots: !0
                            }
                        }, {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3
                            }
                        }]
                    }
                }, {
                    path: "common/modules/opl-width-fixer"
                }])
            }
        }]), o
    }(n.default.Component);
    e.default = r
});
//# sourceMappingURL=ProductRecomendation.js.map