define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/components/OraCommonComponents"], function(e, o, t, r, l) {
    "use strict";

    function a(a) {
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
    }), e.default = void 0;
    var n = function(e) {
            babelHelpers.inherits(l, e);
            var t = a(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "componentDidUpdate",
                value: function() {
                    this._loadModules()
                }
            }, {
                key: "_renderColorComponent",
                value: function(e) {
                    return o.default.createElement("div", {
                        className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows opl-color-chooser u-w-100"
                    }, this._renderColorChooser(e, this.props.products))
                }
            }, {
                key: "_renderColorChooser",
                value: function(l) {
                    var a = this;
                    return l.variantList.map(function(e, t) {
                        return o.default.createElement("label", {
                            className: "opl-color-chooser__item opl-wiking__color-item u-block",
                            key: "colorChooser" + t
                        }, o.default.createElement("input", {
                            type: "radio",
                            name: "rec_color_" + l.productId,
                            value: e.productId,
                            checked: e.productId == a.findProductVariant(l).productId,
                            onClick: a.props.setSelectedVariantOnRecommended.bind(a, e, e.colorDefinition[0].code, l.productId, a.props.products)
                        }), o.default.createElement("span", {
                            className: "opl-color-chooser__color opl-color-chooser__color--magnum u-margin-center",
                            style: {
                                background: e && e.colorDefinition && e.colorDefinition[0] && e.colorDefinition[0].cssCode && e.colorDefinition[0].cssCode.replace(/\'/g, "")
                            }
                        }))
                    }, this)
                }
            }, {
                key: "findProductVariant",
                value: function(e) {
                    for (var t = 0; t < e.variantList.length; t++)
                        if (e.variantList[t].productId == this.props.selectedVariant || !this.props.selectedVariant && e.variantList[t].productId == this.props.selectedVariant) return e.variantList[t];
                    return e.variantList[0]
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        l = this.props.phone,
                        e = this.props.index;
                    return l.variantList && null != l.variantList && 0 != l.variantList.length ? o.default.createElement("div", {
                        className: "opl-carousel__recomended-item u-spacing-all",
                        "data-slick-index": e,
                        "aria-hidden": "false"
                    }, o.default.createElement("a", {
                        href: "/sklep/" + l.manufacturerURL + "/" + l.productURL + "/" + this.findProductVariant(l).colorDefinition[0].name,
                        className: "opl-product-box u-small-no-shadow u-padding-all u-small-no-margin"
                    }, o.default.createElement("div", {
                        className: "l-row u-padding-all-l u-small-no-padding"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-medium-12 l-col-12  opl-product-box__section"
                    }, o.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-1"
                    }, o.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-medium-3 l-col-3  u-padding-left-s u-padding-right-s u-small-hide u-medium-hide"
                    }, this._renderColorComponent(l)), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-small-block u-medium-block u-margin-center"
                    }, o.default.createElement("div", {
                        className: "opl-product-box__image-wrapper u-text-center"
                    }, o.default.createElement("span", {
                        className: "opl-product-box__image-content"
                    }, o.default.createElement("img", {
                        src: this.findProductVariant(l).imageUrl,
                        alt: "phone",
                        className: "cvx opl-product-box__image"
                    })))))))), o.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-medium-12 l-col-12  opl-product-box__section"
                    }, o.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-2"
                    }, o.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, o.default.createElement("div", {
                        className: "l-row u-no-margin"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, o.default.createElement("p", {
                        className: "u-font-bold u-padding-top-l"
                    }, l.name), o.default.createElement("p", {
                        className: "g-brand1-c u-font-bold"
                    }, this.findProductVariant(l).devicePaymentsData.oneTimePayment.price, " zł")), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-padding-top"
                    }, o.default.createElement("button", {
                        className: "o-btn opl-btn opl-btn--small u-w-100 u-small-w-auto",
                        onClick: function(e) {
                            e.preventDefault(), t.props.addToCart(t.findProductVariant(l).productId, l.bundleTemplateName)
                        }
                    }, o.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, o.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), "Do koszyka"))))))))) : o.default.createElement("div", null)
                }
            }, {
                key: "_loadModules",
                value: function() {}
            }]), l
        }((o = babelHelpers.interopRequireDefault(o)).default.Component),
        c = (0, t.connect)(function(e, t) {
            return {
                selectedVariant: t.phone.selectedVariant
            }
        }, function(o) {
            return {
                addToCart: function(e, t) {
                    return o((0, r.addToCart)(e, t))
                },
                setSelectedVariantOnRecommended: function(e, t, l, a) {
                    return o((0, r.setSelectedVariantOnRecommended)(e, t, l, a))
                }
            }
        })(n);
    e.default = c
});
//# sourceMappingURL=ProductRecomendationOneProduct.js.map