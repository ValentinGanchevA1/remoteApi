define(["exports", "react", "prop-types", "react-redux", "redux", "lodash", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/selectors/offers", "eshop/modules/simfree/selectors", "eshop/modules/magnum2/components/DeviceList/DevicesInstalmentSelector", "eshop/modules/cart/selectors", "../../actions/app", "../../../magnum2/actions/magnum", "../../../magnum2/helpers/TransactionHelper", "../../../magnum2/components/BundleTypeUtils", "../../../magnum2/selectors", "./view/MagnumOfferPropositionListItem", "./view/MagnumOfferPropositionListItemProduct", "../../constants/OfferTypeEnum", "../../../magnum2/components/SelectWithFloatingLable", "../../../core/components/hoc/LabeledInput", "./view/MagnumPropositionListPriceTag", "../../constants/PromotionType", "../../../../flux/utils/OraModalService", "eshop/modules/cart/components/entriesList/shared/productDetails/OfferDetailsModal", "eshop/utils/OnlineUtils", "eshop/components/InfoComponent"], function(e, r, t, o, a, i, s, l, n, c, p, d, u, f, m, h, b, g, v, y, P, T, E, N, O, D, C, S) {
    "use strict";

    function L(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), o.push.apply(o, a)
        }
        return o
    }

    function k(a) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), p = babelHelpers.interopRequireDefault(p), g = babelHelpers.interopRequireDefault(g), v = babelHelpers.interopRequireDefault(v), y = babelHelpers.interopRequireDefault(y), P = babelHelpers.interopRequireDefault(P), T = babelHelpers.interopRequireDefault(T), E = babelHelpers.interopRequireDefault(E), N = babelHelpers.interopRequireDefault(N), O = babelHelpers.interopRequireDefault(O), D = babelHelpers.interopRequireDefault(D), C = babelHelpers.interopRequireDefault(C), S = babelHelpers.interopRequireDefault(S);
    var V = function(e) {
        babelHelpers.inherits(a, e);
        var o = k(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = o.call(this, e)).onSelectProposition = t.onSelectProposition.bind(babelHelpers.assertThisInitialized(t)), t.renderPropositionListForShopPage = t.renderPropositionListForShopPage.bind(babelHelpers.assertThisInitialized(t)), t.renderPropositionListForProductCard = t.renderPropositionListForProductCard.bind(babelHelpers.assertThisInitialized(t)), t.isProductCard = t.isProductCard.bind(babelHelpers.assertThisInitialized(t)), t.changeSearchDeviceValue = t.changeSearchDeviceValue.bind(babelHelpers.assertThisInitialized(t)), t.renderSearchDevicesByNameOrSerialNumber = t.renderSearchDevicesByNameOrSerialNumber.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                this.registerModalServiceSelectedPropositionDetails(), this.initUIModules()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.registerModalServiceSelectedPropositionDetails(), this.initUIModules()
            }
        }, {
            key: "registerModalServiceSelectedPropositionDetails",
            value: function() {
                var t = this,
                    o = this.props.selectedProposition;
                o && O.default.add(function(e) {
                    return r.default.createElement(D.default, {
                        id: "offer_proposition_details_" + o.code,
                        header: "Szczegóły",
                        broadband: o.broadband,
                        tv: o.tvProduct,
                        tvPackages: o.tvPackages,
                        voip: o.voip,
                        voice: o.voice,
                        data: o.data,
                        transactions: t.props.transactions
                    })
                })
            }
        }, {
            key: "initUIModules",
            value: function() {
                var e = document.getElementById("magnum-filter-Component-area");
                OPL.UI.initModules(e)
            }
        }, {
            key: "openDetailsModal",
            value: function(e) {
                O.default.open("offer_proposition_details_" + e)
            }
        }, {
            key: "shouldBeVisible",
            value: function(e) {
                return e === y.default.CONVERGENT
            }
        }, {
            key: "onSelectLoyaltyPeriod",
            value: function(e) {
                this.props.setLoyaltyPeriod(e.target.value)
            }
        }, {
            key: "onSelectProposition",
            value: function(e) {
                this.props.selectProposition(e), this.props.isProductDetailsPage ? this.props.selectConvergentOffer(e.mobileVoiceBundleTemplateCode) : this.props.reloadProductList()
            }
        }, {
            key: "changeSearchDeviceValue",
            value: function(e) {
                this.props.changeSearchDeviceValue(e.value)
            }
        }, {
            key: "isProductCard",
            value: function() {
                return "" !== this.props.selectedBaseDeviceCode
            }
        }, {
            key: "renderPropositionList",
            value: function() {
                var o = this;
                if (this.props.durationList) {
                    var t = this.props.durationList.secondaryChoiceOffer,
                        e = this.props.durationList.propositions.filter(function(e) {
                            return !1 === t || t === e.availableAsSecondaryChoiceOffer
                        }),
                        a = [e.filter(function(e) {
                            return !e.promotionType
                        }), e.filter(function(e) {
                            return e.promotionType === N.default.MINI
                        }), e.filter(function(e) {
                            return e.promotionType === N.default.STANDARD
                        }), e.filter(function(e) {
                            return e.promotionType === N.default.EXTRA
                        }), e.filter(function(e) {
                            return e.promotionType === N.default.PREMIUM
                        })];
                    return r.default.createElement("div", null, a.filter(function(e) {
                        return 0 < e.length
                    }).map(function(e, t) {
                        return r.default.createElement("div", {
                            key: e[0].promotionType
                        }, 0 !== t && o.renderSeparator(), o.renderPropositions(e))
                    }))
                }
            }
        }, {
            key: "renderSeparator",
            value: function() {
                return r.default.createElement("div", {
                    className: "u-padding-bottom-m u-padding-right-m u-padding-left-m"
                }, r.default.createElement("div", {
                    className: "o-separator o-separator--m",
                    style: {
                        borderColor: "#202013"
                    }
                }))
            }
        }, {
            key: "renderPropositions",
            value: function(e) {
                var o = this;
                return e.map(function(e) {
                    var t = o.props.knaNumber ? e.priceVariants.ACTIVATION_ACTIVE_WLR : e.priceVariants.DEFAULT;
                    return r.default.createElement(g.default, {
                        selected: e.code === o.props.selectedProposition.code,
                        key: e.code,
                        offer: t,
                        offerDescription: o.resolveOfferDescription(e),
                        onChange: function() {
                            return o.onSelectProposition(e)
                        },
                        descriptions: o.props.descriptions,
                        promotionType: e.promotionType
                    })
                })
            }
        }, {
            key: "renderPropositionForProductCart",
            value: function() {
                if (!this.props.addTerminalToOfferBundleNo && this.props.durationList) {
                    var e = this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT;
                    return r.default.createElement(v.default, {
                        selected: !0,
                        selectedProposition: this.props.selectedProposition,
                        offer: e,
                        offerDescription: this.resolveOfferDescription(this.props.selectedProposition),
                        descriptions: this.props.descriptions,
                        disabled: !1,
                        transactions: this.props.transactions
                    })
                }
            }
        }, {
            key: "resolveOfferDescription",
            value: function(e) {
                return (0, h.is4U)(this.props.availableBundleTypes) || (0, h.is2U)(this.props.availableBundleTypes) ? this.getDescriptionFromFeatures(e.broadband) || "Orange Love" : (0, h.isLTE)(this.props.availableBundleTypes) ? "Orange Love " + i.default.capitalize(e.promotionType) : ""
            }
        }, {
            key: "getDescriptionFromFeatures",
            value: function(e) {
                var t = e.features;
                return t && 0 < t.length && t[0].values && 0 < t[0].values.length ? t[0].values[0] : void 0
            }
        }, {
            key: "renderDurationOptions",
            value: function() {
                var e = [];
                return this.props.durationList && (e = this.props.durationList.durations.map(function(e) {
                    return {
                        value: e.value,
                        label: e.displayName
                    }
                })), r.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, r.default.createElement(P.default, {
                    id: "loyaltyPeriodSelect",
                    options: e,
                    placeholder: this.props.descriptions.loyaltyPeriodPlaceholder,
                    value: this.props.selectedLoyaltyPeriod,
                    onChange: this.onSelectLoyaltyPeriod,
                    disabled: !0
                }))
            }
        }, {
            key: "renderPropositionListForShopPage",
            value: function() {
                var e = this,
                    t = this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT,
                    o = this.props.selectedProposition.code,
                    a = "Orange Love " + i.default.capitalize(this.props.selectedProposition.promotionType);
                return this.props.magnumType === y.default.VOICE && this.props.selectedProposition && this.props.selectedProposition.voice && (a = this.props.selectedProposition.voice.name), r.default.createElement("div", null, r.default.createElement("div", {
                    className: "u-padding-all-m u-no-padding-top"
                }, r.default.createElement(S.default, {
                    color: "blue",
                    bgColor: "none",
                    textColor: "black"
                }, r.default.createElement("b", null, this.props.descriptions.discountDescription)), this.props.magnumType === y.default.CONVERGENT && r.default.createElement("p", {
                    className: "h4 u-spacing u-padding-top-m"
                }, this.props.descriptions.smallTitle), r.default.createElement("p", {
                    className: "h5 u-spacing"
                }, a), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col"
                }, r.default.createElement("div", {
                    className: "g-brand2-c u-font-bold u-margin-s"
                }, r.default.createElement(E.default, {
                    key: "key_convergentMagnumPropositionListPriceTag",
                    clientContext: !0,
                    loyaltyLength: this.props.selectedDeviceInstalmentsCountValue,
                    mainPriceClass: "g-brand1-c",
                    alignClass: "u-left",
                    offer: this.props.knaNumber ? this.props.selectedProposition.priceVariants.ACTIVATION_ACTIVE_WLR : this.props.selectedProposition.priceVariants.DEFAULT,
                    offerDiscountInfoDescription: this.props.descriptions.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.descriptions.offerDiscountInfoConvDescription,
                    baseId: "desktop",
                    availableBundleTypes: this.props.availableBundleTypes
                })))), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col"
                }, r.default.createElement("span", {
                    className: "u-left u-small-left"
                }, r.default.createElement("span", {
                    className: "g-brand1-c u-font-bold"
                }, C.default.formatPrice(t.payNowPrice.value) + " " + t.currency + " aktywacja"))))), r.default.createElement("div", {
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-options": '{"scrollToSelected": false, "scrollTohash": true, "hideOtherElements":true,"triggerSelector":".opl-content-trigger","contentSelector":".opl-section__content","parentClass":"opl-section--togglable", "nextSelector":".opl-section__expander-next"}'
                }, r.default.createElement("div", {
                    className: "opl-section opl-section--togglable opl-section--inner-cut u-no-padding"
                }, r.default.createElement("div", {
                    className: "js-expander__container u-margin-s"
                }, r.default.createElement("div", {
                    className: "l-row u-padding-all-m u-no-padding-top u-no-padding-b"
                }, r.default.createElement("div", {
                    className: "l-col u-spacing-top-s"
                }, r.default.createElement("div", {
                    className: "u-inline-block u-spacing-right u-padding-b"
                }, r.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-spacing-right",
                    onClick: function() {
                        return e.openDetailsModal(o)
                    }
                }, this.props.descriptions.detailsLabel), r.default.createElement("span", {
                    className: "u-acc-hide"
                }, '"Szczegóły oferty"')), !this.props.addTerminalToOfferBundleNo && r.default.createElement("a", {
                    href: "#",
                    role: "tab",
                    "aria-controls": "expander-content-magnum",
                    "aria-expanded": "false",
                    className: "opl-content-trigger u-inline-block opl-section__expander-trigger-btn u-float-none"
                }, r.default.createElement("span", {
                    className: "opl-section__expander-trigger--show"
                }, "Zmień"), r.default.createElement("span", {
                    className: "opl-section__expander-trigger--hide"
                }, "Zwiń"))))), r.default.createElement("div", {
                    id: "expander-content-magnum",
                    "aria-expanded": "false",
                    className: "opl-section__content"
                }, r.default.createElement("ul", {
                    className: "opl-multicheckout-services"
                }, this.renderPropositionList())))))
            }
        }, {
            key: "renderPropositionListForProductCard",
            value: function() {
                return r.default.createElement("ul", {
                    className: "opl-switcher-list g-gray1-bg"
                }, r.default.createElement("li", {
                    className: "opl-switcher-list__item u-small-hide u-no-padding-l u-no-padding-r"
                }, r.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, r.default.createElement("div", {
                    className: "l-col l-col-1 "
                }), r.default.createElement("div", {
                    className: "l-col l-col-11 "
                }, r.default.createElement("div", {
                    className: "l-row u-display_table u-small-block u-no-margin"
                }, r.default.createElement("div", {
                    className: "l-col l-col-6  u-display_table-cell u-small-block u-vertical-top"
                }, r.default.createElement("p", {
                    className: "h4 u-spacing"
                }, this.props.descriptions.smallTitle)), r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-left"
                }, r.default.createElement("p", null, "Abonament miesięcznie")), r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-right"
                }, r.default.createElement("p", null, "Aktywacja")))))), this.renderPropositionForProductCart())
            }
        }, {
            key: "renderSearchDevicesByNameOrSerialNumber",
            value: function() {
                return r.default.createElement("div", {
                    className: "WWW" === this.props.channels.sales ? "u-hide" : "opl-console u-margin-m u-padding-right-l"
                }, r.default.createElement("label", null, this.props.descriptions.searchByValueLabel || "Wyszukaj wg nazwy lub indeksu materiałowego:"), r.default.createElement("div", {
                    className: "opl-input-with-icon"
                }, r.default.createElement(T.default, {
                    className: "g-white1-bg",
                    onChange: this.changeSearchDeviceValue,
                    value: this.props.searchValue,
                    id: "search-by-value-mobile"
                }), r.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--s g-icon--search"
                })))
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = (0, m.transactionsToSelectOptions)(this.props.fixBroadbandPossibleTransactions, this.props.descriptions),
                    o = (0, m.transactionsToSelectOptions)(this.props.fixVoipPossibleTransactions, this.props.descriptions),
                    a = (this.props.magnumType === y.default.CONVERGENT ? (0, m.transactionsToSelectOptions) : (0, m.transactionsToSelectOptionsForSimpleMobile))(this.props.mobilePossibleTransactions, this.props.descriptions),
                    i = (0, h.is4U)(this.props.availableBundleTypes) && 1 < this.props.fixVoipPossibleTransactions.length;
                return r.default.createElement("div", {
                    id: "magnum-filter-Component-area",
                    className: this.shouldBeVisible(this.props.selectedOfferType) ? "" : "u-hide"
                }, 0 === this.props.durationList.propositions.length ? r.default.createElement("p", {
                    className: "h4 u-spacing-l u-padding-all-m"
                }, this.props.descriptions.disabledInfo) : r.default.createElement("div", {
                    className: "u-spacing-l"
                }, r.default.createElement("div", {
                    className: "g-gray1-bg"
                }, r.default.createElement("div", {
                    className: "u-padding-all-m"
                }, r.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, r.default.createElement(P.default, {
                    id: "fixBroadbandOptionsSelect",
                    options: e,
                    placeholder: this.props.descriptions.fixBroadbandTransactionsPlaceholder,
                    value: this.props.selectedFixBroadbandTransactionOption,
                    disabled: !0
                })), r.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, r.default.createElement(P.default, {
                    id: "mobileOptionsSelect",
                    options: a,
                    placeholder: this.props.descriptions.mobileTransactionsPlaceholder,
                    value: this.props.selectedMobileTransactionOption,
                    disabled: !0
                })), i && r.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, r.default.createElement(P.default, {
                    id: "fixVoipOptionsSelect",
                    options: o,
                    placeholder: this.props.descriptions.fixVoipTransactionsPlaceholder,
                    value: this.props.selectedFixVoipTransactionOption,
                    disabled: !0
                })), this.renderDurationOptions(), r.default.createElement("div", {
                    className: this.isProductCard() ? "l-col l-col-small-12 l-col-medium-6 l-col-6 " : ""
                }, r.default.createElement(p.default, {
                    onChange: function(e) {
                        return t.props.reloadProductList(e.target.value)
                    }
                }))), this.isProductCard() ? this.renderPropositionListForProductCard() : this.renderPropositionListForShopPage()), this.isProductCard() ? null : this.renderSearchDevicesByNameOrSerialNumber()))
            }
        }]), a
    }(r.default.Component);
    V.propTypes = {
        descriptions: t.default.shape({}),
        durationList: t.default.shape({
            durations: t.default.arrayOf(t.default.shape({})),
            propositions: t.default.arrayOf(t.default.shape({
                broadband: t.default.object,
                tvProduct: t.default.object,
                voip: t.default.object,
                voice: t.default.object,
                data: t.default.object
            }))
        })
    };
    var I = V = (0, o.connect)(function(e) {
        return {
            selectedOfferType: (0, s.getSelectedOfferType)(e),
            availableBundleTypes: e.magnum.availableBundleTypes,
            selectedProposition: e.magnum.selectedProposition,
            durationList: e.magnum.durationList,
            selectedLoyaltyPeriod: e.magnum.selectedLoyaltyPeriod,
            fixBroadbandPossibleTransactions: (0, b.getPossibleFixBroadbandTransactions)(e),
            fixVoipPossibleTransactions: (0, b.getPossibleFixVoipTransactions)(e),
            mobilePossibleTransactions: (0, b.getPossibleMobileTransactions)(e),
            selectedFixBroadbandTransactionOption: (0, b.getSelectedFixBroadbandTransactionOption)(e),
            selectedFixVoipTransactionOption: (0, b.getSelectedFixVoipTransactionOption)(e),
            selectedMobileTransactionOption: (0, b.getSelectedMobileTransactionOption)(e),
            knaNumber: e.magnum.knaNumber,
            isProductDetailsPage: (0, c.isProductDetailsPage)(e),
            selectedDeviceInstalmentsCountValue: (0, n.getCurrentDeviceInstalmentsCountValue)(e),
            selectedBaseDeviceCode: (0, c.getSelectedBaseDeviceCode)(e),
            searchValue: (0, c.getSearchValue)(e),
            clientContext: (0, s.getClientContext)(e),
            addTerminalToOfferBundleNo: (0, d.getAddTerminalToOfferBundleNo)(e),
            magnumType: (0, b.getMagnumType)(e),
            transactions: (0, b.getTransactions)(e)
        }
    }, function(t) {
        return function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? L(Object(o), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, o[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return t
        }({}, (0, a.bindActionCreators)({
            selectProposition: f.selectProposition,
            reloadProductList: l.reloadProductList,
            setLoyaltyPeriod: f.setLoyaltyPeriod,
            selectConvergentOffer: u.selectConvergentOffer
        }, t), {
            changeSearchDeviceValue: function(e) {
                return t((0, l.changeSearchDeviceValue)(e))
            }
        })
    })(V);
    e.default = I
});
//# sourceMappingURL=MagnumFilterComponent.js.map