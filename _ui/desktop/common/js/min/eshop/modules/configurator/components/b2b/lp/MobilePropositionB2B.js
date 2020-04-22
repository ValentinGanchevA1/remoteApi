define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "../../lp/offers/Sticker", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "../../../../core/components/ui/OraHtmlText", "eshop/modules/configurator/components/lp/offers/VasPackages"], function(e, i, o, s, n, r, l, c, a) {
    "use strict";

    function t(a) {
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
    }), e.MobilePropositionB2B = void 0, i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c), a = babelHelpers.interopRequireDefault(a);
    var u = function(e) {
        babelHelpers.inherits(a, e);
        var l = t(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = l.call(this, e)).onClick = t.onClick.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(a, [{
            key: "onClick",
            value: function() {
                this.props.selectOfferCallback(this.props.offer.id)
            }
        }, {
            key: "price",
            value: function() {
                return n.default.getPaymentsForRole(this.props.offer.payments, this.props.contractRole)
            }
        }, {
            key: "oldPrice",
            value: function() {
                return n.default.getPaymentsForRole(this.props.offer.payments, "")
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = this.price(),
                    l = this.oldPrice();
                return i.default.createElement("div", {
                    className: "opl-carousel__item opl-packet-box l-col l-col-3 u-margin-l u-large-margin-xl slick-slide slick-active" + (this.props.selected ? " is-selected" : " ")
                }, i.default.createElement(p, {
                    key: "carouselItem_" + this.props.offer.id + "_" + this.props.index,
                    index: this.props.index,
                    selected: this.props.selected,
                    onClick: this.onClick,
                    showNet: this.props.showNet,
                    isB2B: this.props.isB2B,
                    priceObj: t,
                    oldPriceObj: l,
                    customPrice: this.props.contractRole,
                    offer: this.props.offer,
                    tooltipValues: m(this.props.descriptions),
                    renderMobileSticker: null !== this.props.offer.sticker && Array.isArray(this.props.offer.sticker.products) && 0 === this.props.offer.sticker.products.length ? function() {
                        return i.default.createElement(r.Sticker, {
                            sticker: e.props.offer.sticker,
                            renderMobileVersion: !1
                        })
                    } : null
                }, i.default.createElement(f, null)))
            }
        }]), a
    }(i.default.PureComponent);
    e.MobilePropositionB2B = u;
    var d = 0,
        p = function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {};
            return i.default.createElement("div", {
                className: "u-position-relative u-cursor-pointer ",
                onClick: t.onClick
            }, i.default.createElement("div", {
                className: "opl-selection-layer",
                "aria-hidden": "true"
            }, i.default.createElement("div", {
                className: "opl-selection-layer__border"
            }), i.default.createElement("div", {
                className: "opl-selection-layer__checkmark"
            })), i.default.createElement("div", {
                className: "g-white1-bgc u-padding-all-l u-box-shadow--s"
            }, i.default.createElement("div", {
                className: "u-animate-height js-layout-fixer-group-2"
            }, i.default.createElement("p", {
                className: "u-margin-m js-height-sensitive-element"
            }, t.offer.rateplanName)), t.renderMobileSticker && i.default.createElement("div", {
                className: "u-position-absolute u-position-right u-padding-right u-padding-top u-position-top"
            }, t.renderMobileSticker()), i.default.createElement("div", {
                className: "u-animate-height js-layout-fixer-group-3"
            }, i.default.createElement("div", {
                className: "u-margin-m js-height-sensitive-element"
            }, i.default.createElement(g, {
                priceObj: t.priceObj,
                oldPriceObj: t.oldPriceObj,
                isB2B: t.isB2B,
                showNet: t.showNet,
                offer: t.offer,
                customPrice: t.customPrice,
                tooltipValues: t.tooltipValues,
                renderMobileSticker: t.renderMobileSticker
            }))), i.default.createElement("div", {
                className: "o-separator u-margin-l"
            }), i.default.createElement("div", {
                className: "u-animate-height js-layout-fixer-group-4"
            }, i.default.createElement("div", {
                className: "js-height-sensitive-element u-padding-xl"
            }, i.default.createElement(h, t))), i.default.createElement("div", {
                className: "u-animate-height js-layout-fixer-group-5"
            }, i.default.createElement("div", {
                className: "js-height-sensitive-element"
            }, i.default.createElement(a.default, t))), i.default.createElement("div", {
                className: "u-animate-height js-layout-fixer-group-6"
            }, i.default.createElement("div", {
                className: "js-height-sensitive-element"
            }, i.default.createElement(l.DetailsButtons, {
                key: "detailsButton_" + d++,
                index: t.index,
                proposition: t.offer,
                descriptions: t.offer.descriptions,
                clientContext: t.clientContext,
                contractRole: t.customPrice
            }))), t.children))
        },
        f = function() {
            return i.default.createElement("label", {
                className: "u-w-100 u-large-hide u-medium-hide",
                htmlFor: "love1"
            }, i.default.createElement("div", {
                className: "u-acc-txt--show"
            }, i.default.createElement("button", {
                className: "opl-btn o-btn u-block u-w-100 "
            }, "Wybierz")), i.default.createElement("div", {
                className: "u-acc-txt--hide"
            }, i.default.createElement("button", {
                className: "opl-btn o-btn u-block u-w-100 g-white1-bg g-white1-bdrc g-brand2-c",
                disabled: "disabled"
            }, "Wybrany")))
        },
        m = function(e) {
            return {
                noConvergent: e["tooltip.priceDiscount"] || '<div id="TOOLTIP-ID-PLACEHOLDER"><span class="o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s u-spacing-left-s u-cursor-pointer"/><span class="o-tooltip__content o-tooltip__content--focusable">def: Brak treści dla tooltip.priceDiscount</span></div>',
                convergent: e["tooltip.convergentPriceDiscount"] || '<div id="TOOLTIP-ID-PLACEHOLDER"><span class="o-tooltip__trigger g-icon g-icon--hint g-icon--xs-s u-spacing-left-s u-cursor-pointer"/><span class="o-tooltip__content o-tooltip__content--focusable">def: Brak treści dla tooltip.convergentPriceDiscount</span></div>',
                discountText: e["discount.text"] || '<div class="l-row u-padding-top-s" style="margin-bottom: -15px "><p class="u-margin-left-m u-small-margin u-font-bold h4">z rabatami</p></div>'
            }
        },
        g = function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                l = t.priceObj && (t.showNet ? t.priceObj.basePrice.netPrice : t.priceObj.basePrice.originalGrossPrice),
                a = n.default.formatPrice(l).split(","),
                r = t.oldPriceObj && t.oldPriceObj.basePrice && t.priceObj.basePrice && Number(t.oldPriceObj.basePrice.netPrice.replace(",", ".")) > Number(t.priceObj.basePrice.netPrice.replace(",", ".")) && (t.showNet ? n.default.formatPrice(t.oldPriceObj.basePrice.netPrice) : n.default.formatPrice(t.oldPriceObj.basePrice.originalGrossPrice));
            return i.default.createElement("div", {
                className: "u-w-100"
            }, i.default.createElement("div", {
                className: "l-row"
            }, t.isB2B && t.customPrice && i.default.createElement("p", {
                className: "u-margin-l u-margin-left-m u-font-normal"
            }, "Cena dla Ciebie"), i.default.createElement("div", {
                style: {
                    zIndex: 2
                },
                className: t.isB2B ? "l-col l-col-12 u-padding-l u-large-no-padding-right u-large-padding-left" : "l-col l-col-12 u-padding-l u-no-padding-right u-no-padding-bottom u-padding-left"
            }, i.default.createElement("div", {
                className: "u-clearfix"
            }, i.default.createElement("div", {
                className: "u-right u-small-right u-text-left u-text-nowrap",
                style: {
                    minWidth: "100%"
                }
            }, i.default.createElement("div", {
                className: "u-table u-margin-minus-right-l u-small-margin-minus-right"
            }, i.default.createElement("div", {
                className: "u-table-cell"
            }, i.default.createElement("span", {
                className: "opl-price-v2 opl-medium-price-v2--l",
                "data-price": t.offer.discountedCommitment
            }, i.default.createElement("span", {
                className: "opl-price-v2__part"
            }, i.default.createElement("span", {
                className: "opl-price-v2__whole"
            }, a[0])), i.default.createElement("span", {
                className: "opl-price-v2__part"
            }, i.default.createElement("span", {
                className: "opl-price-v2__separator"
            }, ","), i.default.createElement("span", {
                className: "opl-price-v2__decimal"
            }, a[1]), i.default.createElement("span", {
                className: "opl-price-v2__suffix u-padding-s"
            }, "zł/mies.", t.showNet && " + VAT"))), !t.isB2B && i.default.createElement(c.default, null, t.tooltipValues && t.tooltipValues.discountText), r && i.default.createElement("div", {
                className: "l-row u-padding-top-l"
            }, i.default.createElement("div", {
                className: "u-margin-left-m u-small-margin"
            }, i.default.createElement("p", {
                className: "u-font-bold g-gray5-c u-text-line-through"
            }, r, " zł/mies.", t.showNet && " + VAT")))), i.default.createElement("div", {
                className: "u-table-cell u-vertical-top"
            }, r && t.tooltipValues ? o.default.conditionalRender(t.tooltipValues.convergent) : o.default.conditionalRender(t.tooltipValues.noConvergent))))))), i.default.createElement("div", {
                className: "l-row"
            }, i.default.createElement("div", {
                className: "l-col l-col-3"
            }, i.default.createElement(s.OraLoader, {
                loading: t.getContractRoleInProgress,
                size: "m",
                id: "contract-role-loader-" + t.offer.id.replace("$", "-"),
                parentId: "offerb2b-filter-loader"
            }))))
        },
        h = function(a) {
            return i.default.createElement("div", null, a.offer.features.featureGroups.boxFeatures.map(function(e, t, l) {
                return i.default.createElement(b, {
                    key: e.code + "_" + a.offer.id + "_" + t,
                    removeClassFromLast: !0,
                    feature: e,
                    className: "u-padding-l",
                    length: l.length,
                    index: t,
                    processType: a.offer.processType,
                    convergence: a.offer.convergence
                })
            }))
        },
        b = function(t) {
            if (0 !== t.feature.processes.length && !t.feature.processes.find(function(e) {
                    return e === t.processType
                }) || t.feature.clientContext && t.convergence !== t.feature.clientContext) return null;
            t.feature.featureValues[0].value;
            var e = t.removeClassFromLast && t.length - 1 === t.index ? "" : t.className;
            return o.default.conditionalRenderWithClassName(t.feature.featureValues[0].value, e)
        }
});
//# sourceMappingURL=MobilePropositionB2B.js.map