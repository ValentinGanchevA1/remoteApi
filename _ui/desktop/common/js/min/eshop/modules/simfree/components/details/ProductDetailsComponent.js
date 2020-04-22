define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/gallery/ProductGalleryComponent", "eshop/modules/simfree/components/details/ProductDetailsNavigationComponent", "eshop/modules/simfree/components/details/ProductDetailsProductDescription", "eshop/modules/simfree/components/details/ProductDetailsProductSpecification", "eshop/modules/simfree/components/details/ProductRecomendation", "eshop/modules/simfree/components/details/ProductCartProductReviewComponent", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/components/list/ProductListHeaderComponent", "eshop/components/OraStockLevelStatusComponent", "./ProductDetailsProductPromotion", "../../../checkout/selectors", "../../../configurator/selectors/filters"], function(e, l, t, i, a, s, o, d, n, r, c, u, m, p, f, h, g, v) {
    "use strict";

    function b(l) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d), n = babelHelpers.interopRequireDefault(n), r = babelHelpers.interopRequireDefault(r), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u), m = babelHelpers.interopRequireDefault(m), p = babelHelpers.interopRequireDefault(p), f = babelHelpers.interopRequireDefault(f), h = babelHelpers.interopRequireDefault(h);
    var E = function(e) {
            babelHelpers.inherits(a, e);
            var t = b(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    this.props.setSelectedVariant({
                        productId: this.props.deviceData.selectedVariant
                    }), this._loadModules(), m.default.pushPageCategoryDimension("TelefonyBezUmowy"), m.default.pushSimfreeProductImpression(this.findProductVariant(), this.props.deviceData.price, null, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    })
                }
            }, {
                key: "findProductVariant",
                value: function() {
                    for (var e = 0; e < this.props.deviceData.variantList.length; e++)
                        if (this.props.deviceData.variantList[e].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[e].productId == this.props.deviceData.selectedVariant) return this.props.deviceData.variantList[e]
                }
            }, {
                key: "handleSelectVariant",
                value: function(e, t) {
                    this.props.setSelectedVariant(e, t), this.props.setChosenImageIndex(0)
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        className: "opl-product-page"
                    }, l.default.createElement("div", {
                        className: "kss-layout-coloring kss-resolution-large"
                    }, l.default.createElement("div", {
                        className: "l-full-row"
                    }, l.default.createElement("div", {
                        className: "l-page-row u-small-no-padding u-medium-no-padding"
                    }, l.default.createElement("div", {
                        className: "u-spacing-top-xl u-spacing-xl u-small-spacing-l"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12  u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("h2", {
                        "data-skiplinks": "Podstawowe informacje o produkcie",
                        className: "h1 u-medium-no-spacing",
                        tabIndex: "-1",
                        id: "skiplinks831"
                    }, this.props.deviceData.name)), l.default.createElement("div", {
                        className: "l-row u-small-no-spacing u-medium-no-spacing"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-6  u-text-center u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l u-position-static"
                    }, l.default.createElement(o.default, {
                        productVariant: this.findProductVariant(),
                        sticker: this.props.deviceData.sticker
                    })), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-6 ",
                        id: "product-basic-information"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-medium-12 l-col-12  u-small-hide u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("h1", {
                        className: "h1 u-spacing"
                    }, this.props.deviceData.name)), l.default.createElement("div", {
                        className: "l-col l-col-medium-6 l-col-8  u-small-hide u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "opl-rating"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("div", {
                        style: {
                            width: this.props.deviceData.percentageRating
                        },
                        className: "opl-rating-bar"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }), l.default.createElement("span", {
                        className: "g-icon g-icon--star g-icon--s"
                    }))), l.default.createElement("p", {
                        className: "small g-gray3-c u-padding-left-s u-inline-block"
                    }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"), l.default.createElement("p", {
                        className: "u-acc-hide"
                    }, this.props.deviceData.numberOfReviewsCustomers, " opini")), l.default.createElement(p.default, null), this._renderSeparator(), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-12  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "l-row u-display_table"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-3  u-display_table-cell"
                    }, "Kolor: ", l.default.createElement("span", {
                        className: "u-font-bold"
                    }, this.findProductVariant().colorDefinition[0].name)), l.default.createElement("div", {
                        className: "l-col l-col-9  u-display_table-cell"
                    }, l.default.createElement("div", {
                        className: "opl-color-chooser"
                    }, l.default.createElement("fieldset", null, l.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Kolor telefonu"), this._renderColorChooserOptions()))))), this._renderSeparator(), l.default.createElement("div", {
                        className: "l-col l-col-12  u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("p", {
                        className: "opl-box__price"
                    }, l.default.createElement("span", {
                        className: "opl-box__header"
                    }, this.findProductVariant().devicePaymentsData.oneTimePayment.price), l.default.createElement("span", {
                        className: "h5"
                    }, "zł"))), this._renderSeparator(), this._renderDeliveryInformation(), this._renderMobileButton(), this._renderNonMobileButton()))))))), l.default.createElement("div", {
                        className: "l-full-row"
                    }, l.default.createElement(d.default, null), l.default.createElement("div", {
                        className: "l-page-row"
                    }, l.default.createElement("div", {
                        id: "opl-expander-product-details",
                        "data-js-module": "common/modules/opl-expander",
                        role: "tablist",
                        "aria-multiselectable": !1
                    }, l.default.createElement(h.default, {
                        promotion: this.props.deviceData.promotion
                    }), l.default.createElement(n.default, {
                        description: this.props.deviceData.description
                    }), l.default.createElement(r.default, {
                        deviceData: this.props.deviceData
                    }), l.default.createElement(c.default, {
                        products: this.props.recomendedProducts,
                        productId: this.props.deviceData.productId
                    }), l.default.createElement(u.default, {
                        deviceData: this.props.deviceData
                    })))))
                }
            }, {
                key: "_renderColorChooserOptions",
                value: function() {
                    var t = this;
                    return this.props.deviceData.variantList.map(function(e) {
                        return l.default.createElement("label", {
                            className: "opl-color-chooser__item",
                            key: "color-chooser-" + e.productId
                        }, l.default.createElement("input", {
                            type: "radio",
                            name: "color_" + t.props.deviceData.productId,
                            value: e.productId,
                            checked: e.productId == t.findProductVariant().productId,
                            onChange: t.handleSelectVariant.bind(t, e, e.colorUrl)
                        }), l.default.createElement("span", {
                            className: "opl-color-chooser__color",
                            style: {
                                background: e && e.colorDefinition && e.colorDefinition[0] && e.colorDefinition[0].cssCode && e.colorDefinition[0].cssCode.replace(/\'/g, "")
                            }
                        }), l.default.createElement("span", {
                            className: "opl-color-chooser__label"
                        }, e && e.colorUrl))
                    }, this)
                }
            }, {
                key: "_renderSeparator",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "o-separator u-padding-top-l"
                    }))
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
                    }]), OPL.UI.loadModules(document.getElementById("zoom-container-image"), [{
                        path: "common/modules/opl-image-zoom",
                        conditions: "media:{gt-medium}",
                        options: {
                            zoomWindowOffsetY: 70,
                            zIndex: 3,
                            zoomContainerAppendTo: ".opl-product-page",
                            zoomWindowOffsetXAlignContainer: "#product-basic-information",
                            zoomWindowWidthAlignContainer: "#product-basic-information"
                        }
                    }])
                }
            }, {
                key: "_renderDeliveryInformation",
                value: function() {
                    return f.default.isAvailableInStock(this.findProductVariant().stockLevelStatus) ? l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-medium-padding-left-l u-medium-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, l.default.createElement(f.default, {
                        stockLevelStatus: this.findProductVariant().stockLevelStatus,
                        stockLevel: this.findProductVariant().stockLevel,
                        stockLevelDate: this.findProductVariant().stockLevelDate,
                        shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                    })), l.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, l.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--boutique g-icon--s u-padding-right-l"
                    }), l.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, l.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, this.props.descriptions.deliveryLabel, " "), l.default.createElement("span", {
                        className: "u-padding-left-s"
                    }, this.props.descriptions.deliveryValue)))) : l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6 u-medium-padding-left-l u-medium-padding-right-l"
                    }, l.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, l.default.createElement(f.default, {
                        stockLevelStatus: this.findProductVariant().stockLevelStatus,
                        stockLevel: this.findProductVariant().stockLevel,
                        stockLevelDate: this.findProductVariant().stockLevelDate,
                        shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                    })), l.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s u-padding-top-l"
                    }, l.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--delivery2 g-icon--s u-padding-right-m"
                    }), l.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, l.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, this.props.descriptions.deliveryLabel, " "), l.default.createElement("span", {
                        className: "u-padding-left-s u-font-bold"
                    }, "niedostępne"))))
                }
            }, {
                key: "_renderMobileButton",
                value: function() {
                    return f.default.isAvailableInStock(this.findProductVariant().stockLevelStatus) ? l.default.createElement("div", {
                        className: "l-col l-col-small-12 u-large-hide u-small-padding-all-l"
                    }, l.default.createElement(s.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: !f.default.isAvailableInStock(this.findProductVariant().stockLevelStatus),
                        onClick: this.handleAddToCartMobileUX.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName)
                    }, "Do koszyka")) : ""
                }
            }, {
                key: "_renderNonMobileButton",
                value: function() {
                    return f.default.isAvailableInStock(this.findProductVariant().stockLevelStatus) ? l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4  u-medium-padding-left-l u-medium-hide u-small-hide"
                    }, l.default.createElement(s.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: !f.default.isAvailableInStock(this.findProductVariant().stockLevelStatus),
                        onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName)
                    }, "Do koszyka")) : ""
                }
            }, {
                key: "_renderAvailabilityModal",
                value: function() {
                    return l.default.createElement("div", {
                        id: "availability-modal",
                        className: "u-hide--soft"
                    }, l.default.createElement("p", {
                        className: "h3 u-spacing-xl"
                    }, this.props.deviceData.name), l.default.createElement("div", {
                        className: "opl-product-availability-modal__picture"
                    }, l.default.createElement("img", {
                        src: this.findProductVariant().imageUrl
                    }), l.default.createElement("div", {
                        className: "opl-product-box__unavailable-banner u-no-bg"
                    }, l.default.createElement("p", {
                        className: "u-font-bold u-font-small u-text-center"
                    }, "Produkt chwilowo niedostępny"))), l.default.createElement("p", {
                        className: "u-spacing-top-l u-spacing-l u-font-bold"
                    }, "Podaj adres email, na który powiadomimy Cię o dostępności produktu"), l.default.createElement("input", {
                        type: "text",
                        placeholder: "Adres email",
                        className: "opl-input--size-m u-spacing-l"
                    }), l.default.createElement("label", {
                        className: "o-checkbox opl-checkbox u-spacing-l"
                    }, l.default.createElement("input", {
                        type: "checkbox"
                    }), l.default.createElement("span", {
                        className: "o-ci"
                    }), l.default.createElement("span", {
                        className: "o-ci-label u-font-normal"
                    }, "Wyrażam zgodę na przesyłanie informacji handlowych środkami komunikacji elektronicznej (sms, email)")), l.default.createElement("a", {
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-right u-padding-right-xxl u-padding-left-xxl u-spacing-l",
                        rel: "modal:close"
                    }, "Wyślij"))
                }
            }, {
                key: "handleAddToCart",
                value: function(e, t) {
                    m.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.deviceData.price, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), this.props.addToCart(e, t)
                }
            }, {
                key: "handleAddToCartMobileUX",
                value: function(e, t) {
                    m.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.deviceData.price, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), this.props.addToCart(e, t, this.props.multicartUrl)
                }
            }]), a
        }(l.default.Component),
        y = (0, t.connect)(function(e) {
            return {
                productName: (0, a.getProductName)(e),
                selectedVariant: (0, a.getSelectedVariant)(e),
                imageUrl: (0, a.getProductImageUrl)(e),
                assistModeStateData: (0, g.getAssistModeStateData)(e),
                marketContext: (0, v.getMarketContext)(e)
            }
        }, function(l, a) {
            return {
                setSelectedVariant: function(e, t) {
                    return l((0, i.setSelectedVariant)(e, t, a.filterState))
                },
                addToCart: function(e, t, a) {
                    return l((0, i.addToCart)(e, t, a))
                },
                setChosenImageIndex: function(e) {
                    return l((0, i.setChosenImageIndex)(e))
                }
            }
        })(E);
    e.default = y
});
//# sourceMappingURL=ProductDetailsComponent.js.map