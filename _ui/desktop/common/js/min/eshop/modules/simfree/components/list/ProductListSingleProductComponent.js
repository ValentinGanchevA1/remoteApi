define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/offers", "eshop/utils/DataLayerUtils", "eshop/utils/OnlineUtils", "eshop/components/OraStockLevelStatusComponent", "eshop/components/OraPriceSummaryComponent", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/simfree/components/list/DevicePayments", "eshop/modules/configurator/constants", "eshop/modules/simfree/components/comparator/ComparatorCheckbox", "../../selectors", "../../../checkout/selectors", "../../../configurator/components/lp/offers/Sticker", "../../../cart/enum/ProcessType", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/components/modals/OraCashInvoiceLimitComponent"], function(e, i, t, r, o, s, l, n, a, c, d, p, u, f, m, h, v, g, b, C, k, O, y, P, T, _) {
    "use strict";

    function S(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

    function E(o) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), r = babelHelpers.interopRequireDefault(r), d = babelHelpers.interopRequireDefault(d), p = babelHelpers.interopRequireDefault(p), u = babelHelpers.interopRequireDefault(u), f = babelHelpers.interopRequireDefault(f), m = babelHelpers.interopRequireDefault(m), g = babelHelpers.interopRequireDefault(g), C = babelHelpers.interopRequireDefault(C), P = babelHelpers.interopRequireDefault(P), _ = babelHelpers.interopRequireDefault(_);
    var I = 0,
        D = function(e) {
            babelHelpers.inherits(o, e);
            var r = E(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).id = "react-carousel-" + I++, t.page = t.props.marketContextPrefixUrl + (window.location.pathname.includes("/sklep") ? "/sklep" : "/akcesoria"), t._salesChannelIsPos = t._salesChannelIsPos.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                    isColorChosen: !1
                }, t
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {
                    this._loadModules()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    if (this.props.addTerminalToOfferBundleNo && null == e.selectedVariant) {
                        var r = this.props.product.variantList.find(function(e) {
                            return t.props.productCodeToRemove === e.productId
                        });
                        r && this.props.setSelectedVariantOnList.bind(this, r, r.colorDefinition && r.colorDefinition[0].code, this.props.product.productId)()
                    }
                }
            }, {
                key: "componentWillUpdate",
                value: function() {
                    var t = this;
                    if (this.props.skuSearchValue) {
                        var e = this.props.product.variantList.find(function(e) {
                            return t.props.skuSearchValue === e.skuNumber
                        });
                        !e || this.props.selectedVariant && e.skuNumber === this.props.selectedVariant.skuNumber || this.props.setSelectedVariantOnList(e, e.colorDefinition && e.colorDefinition[0].code, this.props.product.productId)
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.product.variantList.length !== e.product.variantList.length && ($("#carousel_product_" + this.props.product.productId + " :button").remove(), OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.reinit, "carousel_product_" + this.props.product.productId))
                }
            }, {
                key: "findProductVariant",
                value: function() {
                    for (var e = 0; e < this.props.product.variantList.length; e++)
                        if (this.props.product.variantList[e].productId === this.props.selectedVariant || !this.props.selectedVariant && this.props.product.variantList[e].productId === this.props.product.selectedVariant) return this.props.product.variantList[e];
                    return this.props.product.variantList[0]
                }
            }, {
                key: "price",
                value: function() {
                    var t = this;

                    function e(e) {
                        return e.deviceTotalPriceGross || e.priceGross
                    }
                    var r = this.props.productCodeToRemove && this.props.products.filter(function(e) {
                        return t.props.productCodeToRemove == (e.selectedVariant || e.variantList[0].productId)
                    })[0];
                    return e(this.props.product) - (r ? e(r) : 0)
                }
            }, {
                key: "handleAddToCart",
                value: function(e) {
                    d.default.pushSimfreeProductClick(this.findProductVariant(), this.props.product && this.props.product.price, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), d.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.product && this.props.product.price, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    }), this.props.addToCart(e, "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS")
                }
            }, {
                key: "createProductUrl",
                value: function() {
                    return this.props.showCanonicalLink || !p.default.isCanonicalLink() || this.state.isColorChosen || !this.props.product.canonicalLink ? this.getUrlParameters() + "&" + this.props.filtersUrl : this.page + this.props.product.canonicalLink
                }
            }, {
                key: "createInstalmentProductUrl",
                value: function() {
                    return this.getUrlParameters() + "&offerType=SIMFREE_INST&processType=INSTALMENT_SALES_OF_GOODS"
                }
            }, {
                key: "getUrlParameters",
                value: function() {
                    var e = this.findProductVariant();
                    return this.page + e.productUrl + "?chosenDevice=" + e.productId + "&filterState=" + this.props.filterState + "&selectedCategory=" + this.props.selectedCategory + (this.props.isDuet ? "&isDuet=" + this.props.isDuet : "") + "&selectedPropositionId=" + this.props.selectedOffer
                }
            }, {
                key: "priceWrappedAsProposition",
                value: function() {
                    if (this.props.product.inOffer) return {
                        deviceData: {
                            inOffer: this.props.product.inOffer
                        }
                    }
                }
            }, {
                key: "saveMagnumStore",
                value: function() {
                    var e = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? S(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, this.props.magnumStore);
                    e.possibleTransactions.salesChannel = this.props.salesChannel, p.default.saveInSessionStorage(b.constants.magnumStore, JSON.stringify(e))
                }
            }, {
                key: "render",
                value: function() {
                    return i.default.createElement("div", {
                        className: "l-col l-col-xsmall-6 l-col-small-4 l-col-medium-3 l-col-4 l-col-xlarge-4  u-no-padding"
                    }, i.default.createElement("div", {
                        id: this.props.product.productId,
                        className: "l-row opl-product-box opl-product-box--bordered-small opl-product-box--bordered-medium u-small-no-shadow u-medium-no-shadow u-small-no-margin u-medium-no-margin u-padding-top-l u-padding-l"
                    }, this._renderProductImageSection(), this._renderProductPriceSection(), "WWW" != this.props.salesChannel && !this.props.isSalesOfGoodsPage && i.default.createElement(f.default, {
                        stockLevel: this.findProductVariant().stockLevel,
                        deviceTotalPrice: this.props.product.deviceTotalPrice,
                        deviceTotalPriceNet: this.props.product.deviceTotalPriceNet,
                        deviceTotalPriceGross: this.props.product.deviceTotalPriceGross,
                        basePrice: this.props.product.inOffer && this.props.product.inOffer.price.base,
                        proposition: this.props.selectedOfferObject,
                        shouldShowStock: !this._salesChannelIsPos(),
                        contractRole: this.props.contractRole,
                        key: this.props.product.productId,
                        shouldShowSum: m.default.CONVERGENT !== this.props.offerType,
                        offerType: this.props.offerType
                    }), this._renderAddToCartSection()))
                }
            }, {
                key: "_renderProductImageSection",
                value: function() {
                    return i.default.createElement("div", {
                        className: "l-col l-col-12  opl-product-box__section"
                    }, i.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-1"
                    }, i.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, i.default.createElement("div", {
                        className: "l-row u-display_table u-small-block u-medium-block u-no-margin"
                    }, this._renderColorComponent(), i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-display_table-cell u-small-block u-medium-block u-margin-center"
                    }, i.default.createElement(N, {
                        salesChannelIsPos: this._salesChannelIsPos(),
                        createProductUrl: this.createProductUrl(),
                        dataLayerOnClick: this._dataLayerOnClick.bind(this),
                        findProductVariant: this.findProductVariant(),
                        sticker: null !== this.props.product.sticker && (this.props.product.sticker.propositionItems && 0 === this.props.product.sticker.propositionItems.length || this.props.product.sticker.propositionItems.includes(this.props.product.bundleTemplateName)) ? this.props.product.sticker : null
                    }))))))
                }
            }, {
                key: "_renderProductPriceTag",
                value: function(e) {
                    return i.default.createElement(g.default, {
                        product: e,
                        marketIsB2B: this.props.marketIsB2B,
                        proposition: this.priceWrappedAsProposition(),
                        instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                        productVariant: this.findProductVariant(),
                        instalmentUrl: this.createInstalmentProductUrl()
                    })
                }
            }, {
                key: "_renderProductPriceSection",
                value: function() {
                    return i.default.createElement("div", {
                        className: "l-col l-col-12  opl-product-box__section u-padding-left-l u-padding-right-l u-small-no-padding u-medium-no-padding"
                    }, i.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-2"
                    }, i.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, u.default.isAvailableInStock(this.findProductVariant().stockLevelStatus) && !this._salesChannelIsPos() && i.default.createElement(u.default, {
                        stockLevelStatus: this.findProductVariant().stockLevelStatus,
                        stockLevel: this.findProductVariant().stockLevel,
                        stockLevelDate: this.findProductVariant().stockLevelDate,
                        shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                    }))), i.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-3"
                    }, i.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, i.default.createElement("a", {
                        href: this.createProductUrl(),
                        className: "u-padding-top-l u-padding-l u-block u-text-decoration-none",
                        onClick: this._dataLayerOnClick.bind(this)
                    }, this.findProductVariant().name))), i.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-4"
                    }, i.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, this._renderProductPriceTag(this.props.product))))
                }
            }, {
                key: "_renderAddToCartSection",
                value: function() {
                    function e() {
                        if (!p || d._salesChannelIsPos())
                            if (d.props.cartIsFix && "WWW" === d.props.salesChannel) d.props.setErrorCode("fixincart");
                            else if (d.props.selectedFilters.processType === P.default.SALE_OF_GOODS) d.handleAddToCart(d.findProductVariant().productId, d.props.selectedOffer);
                        else if (-1 < [m.default.DATA, m.default.VOICE, m.default.VOICE_LDF, m.default.DATA_LDF, m.default.SIMFREE_INST].indexOf(d.props.offerType))
                            if (d.props.addTerminalToOfferBundleNo) {
                                var e = [d.props.productCodeToRemove],
                                    t = [d.props.product.selectedVariant || d.props.product.variantList[0].productId],
                                    r = d.props.addTerminalToOfferBundleNo,
                                    o = d.props.selectedOffer,
                                    a = d.props.selectedOfferObject.rateplanId;
                                d.props.addTerminalToOfferToCart(o, a, r, e, t)
                            } else d.props.selectOfferWithDevice(d.findProductVariant().productId, d.props.selectedOffer, d.props.position);
                        else if (m.default.CONVERGENT === d.props.offerType)
                            if (d.saveMagnumStore(), d.props.addTerminalToOfferBundleNo) {
                                var s = [d.props.productCodeToRemove],
                                    i = [d.props.product.selectedVariant || d.props.product.variantList[0].productId],
                                    l = d.props.addTerminalToOfferBundleNo,
                                    n = d.props.updateMagnumBundleTemplate,
                                    c = d.props.updateMagnumOfferId;
                                d.props.addTerminalToOfferToCart(n, c, l, s, i)
                            } else d.props.addMagnumToCart(d.findProductVariant().productId)
                    }
                    var d = this,
                        p = 0 === this.findProductVariant().stockLevel,
                        t = !!this.props.addTerminalToOfferBundleNo && this.props.productCodeToRemove == (this.props.product.selectedVariant || this.props.product.variantList[0].productId),
                        r = p && !this._salesChannelIsPos() || this.props.isDisableAddToCartButton ? "opl-btn-disabled" : "";
                    return i.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-5"
                    }, i.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, i.default.createElement("div", null, i.default.createElement("div", {
                        className: "u-display_table opl-product-box__section u-padding-right-l u-padding-top u-large-hide"
                    }, i.default.createElement("div", {
                        className: "u-display_table-cell"
                    }, i.default.createElement(C.default, {
                        product: this.props.product
                    }))), i.default.createElement("div", {
                        className: "u-display_table   opl-product-box__section u-padding-left-l u-padding-right-l u-padding-top u-small-hide u-medium-hide"
                    }, i.default.createElement("div", {
                        className: "u-display_table-cell"
                    }, i.default.createElement(C.default, {
                        product: this.props.product
                    })), i.default.createElement("div", {
                        className: "u-display_table-cell"
                    }, i.default.createElement("button", {
                        className: "o-btn opl-btn opl-btn--secondary opl-btn--small " + r,
                        disabled: !!t,
                        onClick: function() {
                            d.props.cashInvoiceLimit && d.props.cartInvoiceValue + d.price() > d.props.cashInvoiceLimit ? _.default.openPopup({
                                onClickConfirm: e
                            }) : e()
                        }
                    }, i.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, i.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), t ? "Wybrano" : "Do koszyka"))))))
                }
            }, {
                key: "_renderColorComponent",
                value: function() {
                    var t = this;
                    return i.default.createElement("div", {
                        className: "l-col l-col-medium-3 l-col-3  u-padding-left-s u-padding-right-s u-display_table-cell u-small-hide u-medium-hide"
                    }, i.default.createElement("div", {
                        "data-js-module": "common/modules/opl-carousel",
                        className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows opl-color-chooser u-w-100",
                        id: "carousel_product_" + this.props.product.productId,
                        ref: function(e) {
                            return t.colorCarousel = e
                        }
                    }, i.default.createElement("fieldset", null, i.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, "Kolor telefonu"), i.default.createElement("div", {
                        className: "slick-list"
                    }, i.default.createElement("div", {
                        className: "slick-track"
                    }, this._renderColorChooser())))))
                }
            }, {
                key: "_renderColorChooser",
                value: function() {
                    var r = this;
                    return this.props.product.variantList.map(function(e, t) {
                        return i.default.createElement("label", {
                            className: "u-w-100 opl-color-chooser__item opl-wiking-gallery-navigation--item u-padding-top u-padding",
                            key: "color_" + t
                        }, i.default.createElement("input", {
                            type: "radio",
                            name: "color_" + r.props.product.productId,
                            value: e.productId,
                            checked: e.productId == r.findProductVariant().productId,
                            onChange: function() {
                                return r._onColorChange(e)
                            }
                        }), i.default.createElement("span", {
                            className: "opl-color-chooser__color opl-color-chooser__color--magnum u-margin-center",
                            title: e.colorDefinition[0].name + "" + (e.colorDefinition[1] ? "/" + e.colorDefinition[1].name : ""),
                            style: {
                                background: e && e.colorDefinition && e.colorDefinition[0] && e.colorDefinition[0].cssCode && e.colorDefinition[0].cssCode.replace(/\ '/g, "")
                            }
                        }, e && e.colorDefinition && e.colorDefinition[1] && e.colorDefinition[1].cssCode && i.default.createElement("span", {
                            className: "opl-color-chooser__two-color",
                            style: {
                                background: e.colorDefinition[1].cssCode.replace(/\ '/g, "")
                            }
                        })), i.default.createElement("span", {
                            className: "opl-color-chooser__label"
                        }))
                    }, this)
                }
            }, {
                key: "_onColorChange",
                value: function(e) {
                    this.setState({
                        isColorChosen: !0
                    }), this.props.setSelectedVariantOnList(e, e.colorDefinition && e.colorDefinition[0].code, this.props.product.productId)
                }
            }, {
                key: "_salesChannelIsPos",
                value: function() {
                    return "POS" === this.props.salesChannel || "AKA" === this.props.salesChannel
                }
            }, {
                key: "_dataLayerOnClick",
                value: function() {
                    this.saveMagnumStore(), d.default.pushDeviceDetailsEvent(this.findProductVariant(), this.props.product, this.props.selectedOfferObject, this.props.selectedFilters, null, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    })
                }
            }, {
                key: "_loadModules",
                value: function() {
                    OPL.UI.loadModules(this.colorCarousel, [{
                        path: "common/modules/opl-carousel",
                        options: {
                            autoplay: !1,
                            arrows: !0,
                            slide: ".opl-wiking-gallery-navigation--item",
                            vertical: !0,
                            verticalSwiping: !0,
                            focusOnSelect: !0
                        }
                    }])
                }
            }]), o
        }(i.default.Component);
    D.propTypes = {
        salesChannel: r.default.string.isRequired
    };
    var N = function(e) {
        var t = e.salesChannelIsPos,
            r = e.createProductUrl,
            o = e.dataLayerOnClick,
            a = e.findProductVariant,
            s = e.sticker;
        return !t && 0 === a.stockLevel ? i.default.createElement(L, {
            href: r,
            onClick: o,
            sticker: function() {
                return i.default.createElement(y.Sticker, {
                    sticker: s,
                    className: "u-position-absolute u-position-top u-overflow-visible"
                })
            },
            product: a,
            unavailable: function() {
                return i.default.createElement(V, null)
            }
        }) : i.default.createElement(L, {
            href: r,
            onClick: o,
            sticker: function() {
                return i.default.createElement(y.Sticker, {
                    sticker: s,
                    className: "u-position-absolute u-position-top u-overflow-visible"
                })
            },
            product: a
        })
    };
    N.propTypes = {
        salesChannelIsPos: r.default.bool,
        createProductUrl: r.default.string.isRequired,
        dataLayerOnClick: r.default.func.isRequired,
        findProductVariant: r.default.string.isRequired,
        sticker: r.default.object,
        propositionItems: r.default.arrayOf(r.default.string),
        bundleTemplateName: r.default.string
    };
    var L = function(e) {
        var t = e.href,
            r = e.onClick,
            o = e.sticker,
            a = e.product,
            s = e.unavailable;
        return i.default.createElement("div", null, i.default.createElement("div", {
            className: "opl-product-box__image-wrapper u-text-center u-no-padding"
        }, i.default.createElement("a", {
            href: t,
            className: "opl-product-box__image-content ",
            onClick: r
        }, o(), i.default.createElement("img", {
            src: a.imageUrl,
            className: "cvx opl-product-box__image",
            alt: "Zobacz szczegóły " + a.name,
            title: a.name
        })), s()))
    };
    L.defaultProps = {
        sticker: function() {},
        unavailable: function() {}
    };
    var V = function() {
            return i.default.createElement("div", {
                className: "opl-product-box__unavailable-banner"
            }, i.default.createElement("p", {
                className: "u-font-bold u-font-small u-text-center"
            }, "Produkt chwilowo niedostępny"))
        },
        B = (0, t.connect)(function() {
            var r = (0, h.getProductCodeByBundleNo)(),
                o = (0, h.getMagnumBundleTemplate)(),
                a = (0, h.getMagnumOfferId)();
            return function(e, t) {
                return {
                    clientContext: (0, n.getClientContext)(e),
                    selectedVariant: t.product.selectedVariant,
                    offerType: (0, n.getSelectedOfferType)(e),
                    selectedOffer: (0, s.getSelectedOfferId)(e),
                    selectedOfferObject: (0, s.getSelectedOffer)(e),
                    selectedFilters: (0, n.getSelectedFilters)(e),
                    isDisableAddToCartButton: (0, l.getStateAddToCartButton)(e),
                    filtersUrl: (0, n.getFiltersUrl)(e),
                    isSalesOfGoodsPage: (0, l.getIsSalesOfGoodsPage)(e),
                    addTerminalToOfferBundleNo: (0, h.getAddTerminalToOfferBundleNo)(e),
                    productCodeToRemove: r(e, t.addTerminalToOfferBundleNo),
                    marketIsB2B: "B2B" === (0, n.getMarketContext)(e),
                    showNet: (0, h.getPriceIsNet)(e),
                    skuSearchValue: (0, l.getSearchValue)(e),
                    magnumStore: e.magnum,
                    updateMagnumBundleTemplate: o(e, t.addTerminalToOfferBundleNo),
                    updateMagnumOfferId: a(e, t.addTerminalToOfferBundleNo),
                    selectedCategory: (0, k.getSelectedCategory)(e),
                    assistModeStateData: (0, O.getAssistModeStateData)(e),
                    marketContextPrefixUrl: (0, T.getMarketContextPrefixUrl)(e),
                    cashInvoiceLimit: (0, l.getCashInvoiceLimit)(e),
                    cartInvoiceValue: (0, l.getCartInvoiceValue)(e),
                    isDuet: (0, k.isDuet)(e),
                    showCanonicalLink: (0, k.showCanonicalLink)(e)
                }
            }
        }, function(s) {
            return {
                setSelectedVariantOnList: function(e, t, r) {
                    return s((0, a.setSelectedVariantOnList)(e, t, r))
                },
                addToCart: function(e, t) {
                    return s((0, a.addToCart)(e, t))
                },
                selectOfferWithDevice: function(e, t, r) {
                    return s((0, c.selectOffer)(t, r, e))
                },
                addMagnumToCart: function(e) {
                    return s((0, a.addMagnumToCart)(e))
                },
                addTerminalToOfferToCart: function(e, t, r, o, a) {
                    return s((0, v.updateTerminalToOffer)(e, t, r, o, a))
                },
                setErrorCode: function(e) {
                    return s((0, a.setErrorCode)(e))
                }
            }
        })(D);
    e.default = B
});
//# sourceMappingURL=ProductListSingleProductComponent.js.map