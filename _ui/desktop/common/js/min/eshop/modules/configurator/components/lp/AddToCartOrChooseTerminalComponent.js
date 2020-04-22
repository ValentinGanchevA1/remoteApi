define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/cart/selectors", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/components/lp/offers/PickDevicePopup", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/metaData", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/offers", "../../../cart/components/entriesList/mobile/SimCartIndexHeader", "eshop/modules/core/enum/MarketSegment", "eshop/modules/configurator/components/AddMoreB2B", "eshop/modules/configurator/components/AddMoreB2C", "eshop/modules/auth/actions/authorization", "eshop/modules/simfree/selectors"], function(e, n, t, s, i, o, l, r, a, c, d, u, p, m, f, h, g, b, v, y, E) {
    "use strict";

    function N(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), i.push.apply(i, s)
        }
        return i
    }

    function C(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
                var i = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, i)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a), c = babelHelpers.interopRequireDefault(c), h = babelHelpers.interopRequireDefault(h), g = babelHelpers.interopRequireDefault(g), b = babelHelpers.interopRequireDefault(b), v = babelHelpers.interopRequireDefault(v);
    var k = function(e) {
            babelHelpers.inherits(s, e);
            var i = C(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = i.call(this, e)).selectOfferNoPhoneAction = t.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(t)), t.pickDeviceAction = t.pickDeviceAction.bind(babelHelpers.assertThisInitialized(t)), t.showPickDeviceModal = t.showPickDeviceModal.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(s, [{
                key: "componentWillMount",
                value: function() {
                    a.default.initialize(c.default.extractObject(this.props.descriptions, "label.popup.")), this.props.clearAddTerminalToOfferFromSessionStorage()
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.propositionListCount < 1 && e.selectedSoftBundleGroup && e.propositionListSoftBundleGroup && e.propositionListSoftBundleGroup !== e.selectedSoftBundleGroup && this.props.setPropositionListCount(1)
                }
            }, {
                key: "selectOfferNoPhoneAction",
                value: function(e) {
                    this.props.setPropositionListSoftBundleGroup(), e && e.preventDefault(), this.props.addToCartWithCounter()
                }
            }, {
                key: "pickDeviceAction",
                value: function(e) {
                    this.props.setPropositionListSoftBundleGroup(), e && e.preventDefault(), this.props.pickDevice(this.props.selectedOfferId, this.props.descriptions.deviceListAddress + "?")
                }
            }, {
                key: "showPickDeviceModal",
                value: function(e) {
                    e.preventDefault(), a.default.open({
                        onClickConfirm: this.pickDeviceAction,
                        onClickDecline: this.selectOfferNoPhoneAction
                    })
                }
            }, {
                key: "onClickAdd",
                value: function() {
                    if (this.props.cartIsFix) {
                        var e = this.props.descriptions && this.props.descriptions.fixincartmsg || "W koszyku jest już oferta stacjonarna";
                        this.props.showError(e)
                    } else 0 < this.props.propositionListCount && this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive && "WWW" != this.props.channels.sales ? (this.props.warningOn(), c.default.scrollToComponent("msisdn-verification-container-row", "header")) : this.props.selectOfferNoPhone(this.props.selectedOfferId)
                }
            }, {
                key: "addMorePrice",
                value: function() {
                    if (this.props.firstOfferFromProductFilter && this.props.firstOfferFromProductFilter.payments) {
                        var e = c.default.getPaymentsForRole(this.props.firstOfferFromProductFilter.payments, this.props.contractRole);
                        return c.default.formatPrice(e.basePrice.originalNetPrice)
                    }
                    return ""
                }
            }, {
                key: "noScroll",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "increment",
                value: function() {
                    this.props.increment(), this.props.setOfferType(this.props.selectedOfferType)
                }
            }, {
                key: "isAssignment",
                value: function() {
                    return c.default.isAssignment(this.props.processType)
                }
            }, {
                key: "render",
                value: function() {
                    if (this.props.isPropositionListCountSetMode || c.default.isAssignment(this.props.processType)) return null;
                    var e = [],
                        t = this.props.entries ? this.props.entries.length : 0,
                        i = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? N(Object(i), !0).forEach(function(e) {
                                    babelHelpers.defineProperty(t, e, i[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : N(Object(i)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                })
                            }
                            return t
                        }({}, this.props.descriptions),
                        s = i.stepDescriptionLabel,
                        o = i.priceDescriptionLabel;
                    if (!this.props.propositionListSoftBundleGroup || this.props.propositionListSoftBundleGroup === this.props.selectedSoftBundleGroup)
                        for (var l = t + 1; l < this.props.simCountSelected; l++) e.push(n.default.createElement(P, babelHelpers.extends({
                            key: "simQueueElement" + l,
                            index: l
                        }, {
                            stepDescriptionLabel: s,
                            priceDescriptionLabel: o
                        })));
                    var r = this.props.isB2B ? n.default.createElement(b.default, {
                            onClick: this.increment.bind(this),
                            price: this.addMorePrice()
                        }) : n.default.createElement(v.default, {
                            onClick: this.increment.bind(this)
                        }),
                        a = 0 < this.props.propositionListCount && (this.props.selectedLoyaltyLengthValue || 0 === this.props.selectedLoyaltyLengthValue);
                    return n.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, a && !c.default.isMnpApplication(this.props.processType) && n.default.createElement("div", {
                        className: "l-page-row u-padding-xl u-padding-top-l "
                    }, n.default.createElement("div", {
                        className: " u-border-top u-margin-left-s u-margin-right-s u-padding-m"
                    }), n.default.createElement("h4", {
                        className: "h3 u-small-text-center u-small-hide"
                    }, this.props.descriptions.header), n.default.createElement("h4", {
                        className: "h2 u-small-text-center u-padding-m u-large-hide u-medium-hide"
                    }, this.props.descriptions.header), n.default.createElement("ul", {
                        className: "l-row u-text-center"
                    }, n.default.createElement("li", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                    }, n.default.createElement("div", {
                        className: "u-position-relative"
                    }, n.default.createElement("button", {
                        onClick: this.pickDeviceAction.bind(this),
                        disabled: !this.props.addToCartButtonEnabled,
                        className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                    }, n.default.createElement("p", {
                        className: "h5 u-no-margin " + (!this.props.addToCartButtonEnabled && "g-gray5-c")
                    }, this.props.descriptions.labelAddWithTerminal || "Dobierz urządzenie")))), n.default.createElement("li", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-6 "
                    }, n.default.createElement("div", {
                        className: "u-position-relative"
                    }, n.default.createElement("button", {
                        onClick: this.onClickAdd.bind(this),
                        disabled: !this.props.addToCartButtonEnabled,
                        className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                    }, n.default.createElement("p", {
                        className: "h5 u-no-margin " + (!this.props.addToCartButtonEnabled && "g-gray5-c")
                    }, this.props.descriptions.labelAdd || "Wybierz bez urządzenia")))))), a && c.default.isMnpApplication(this.props.processType) && n.default.createElement("div", {
                        className: "l-page-row u-padding-xl"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6"
                    }, n.default.createElement("div", {
                        className: "u-position-relative"
                    }, n.default.createElement("button", {
                        onClick: this.onClickAdd.bind(this),
                        disabled: this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive,
                        className: " o-btn opl-btn opl-btn--secondary u-w-100 u-no-border u-padding-all-l u-box-shadow u-box-shadow--s u-small-margin-l g-white1-bg"
                    }, n.default.createElement("p", {
                        className: "h5 u-no-margin " + (this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive && "g-gray5-c")
                    }, this.props.descriptions.labelAddMnp || "Złóż wniosek na przeniesienie numeru"))))), e, t < this.props.maxSimCount && 0 === this.props.propositionListCount && r, 0 == this.props.propositionListCount && n.default.createElement(O, this.props))
                }
            }]), s
        }(n.Component),
        O = function(e) {
            babelHelpers.inherits(i, e);
            var t = C(i);

            function i(e) {
                return babelHelpers.classCallCheck(this, i), t.call(this, e)
            }
            return babelHelpers.createClass(i, [{
                key: "goToCart",
                value: function(e) {
                    e.preventDefault(), this.props.gotoCartSummary()
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement("div", {
                        className: "l-page-row u-padding-l-xl u-padding-top-l"
                    }, n.default.createElement("div", {
                        className: "l-row"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3  medium-offset-by-6 large-offset-by-9"
                    }, n.default.createElement("button", {
                        className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100",
                        onClick: this.goToCart.bind(this),
                        disabled: !this.props.addToCartButtonEnabled && 0 < this.props.propositionListCount
                    }, "Przejdź do koszyka"))))
                }
            }]), i
        }(n.Component),
        P = function(e) {
            var t = e.index,
                i = e.stepDescriptionLabel,
                s = void 0 === i ? "Zacznij od wybrania planu komórkowego dla pierwszej karty SIM" : i,
                o = e.priceDescriptionLabel,
                l = void 0 === o ? "20 zł taniej" : o;
            return n.default.createElement("div", {
                className: "l-page-row u-padding-l"
            }, n.default.createElement("div", {
                className: "g-white1-bg u-padding-all-l"
            }, n.default.createElement("div", {
                className: "l-row u-medium-hide"
            }, n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-3 l-col-3 "
            }, n.default.createElement("div", {
                className: "o-icon-list g-gray6-c"
            }, n.default.createElement("div", {
                className: "o-icon-list__item"
            }, n.default.createElement("div", {
                className: "o-icon-list__icon "
            }, n.default.createElement("span", {
                className: "g-icon g-icon--only g-icon--sim"
            })), n.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, n.default.createElement(h.default, {
                simIndex: t,
                className: "g-gray6-c u-no-margin"
            }))))), n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-5 l-col-5 u-large-padding-top"
            }, n.default.createElement("div", {
                className: "u-medium-hide",
                style: {
                    marginLeft: "45px"
                }
            }, n.default.createElement("div", {
                className: "o-icon-list g-gray6-c"
            }, n.default.createElement("div", {
                className: "o-icon-list__item"
            }, n.default.createElement("div", {
                className: "o-icon-list__icon u-small-padding-right-s u-small-no-padding-top"
            }, n.default.createElement("div", {
                className: "g-icon g-icon--info g-icon--before g-icon--xs-s",
                "aria-hidden": "true"
            })), n.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, n.default.createElement("p", null, s)))))), n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-4 l-col-4  u-small-text-left u-text-right u-padding-top-s"
            }, n.default.createElement("div", {
                className: "",
                style: {
                    marginLeft: "45px"
                }
            }, n.default.createElement("div", {
                className: "o-icon-list g-brand2-c"
            }, n.default.createElement("div", {
                className: "o-icon-list__item"
            }, n.default.createElement("div", {
                className: "o-icon-list__icon"
            }), n.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, n.default.createElement("p", {
                className: "h3 g-brand2-c u-no-margin"
            }, l, " "))))))), n.default.createElement("div", {
                className: "l-row u-small-hide u-large-hide"
            }, n.default.createElement("div", {
                className: "l-col l-col-6 "
            }, n.default.createElement("div", {
                className: "o-icon-list g-gray6-c"
            }, n.default.createElement("div", {
                className: "o-icon-list__item"
            }, n.default.createElement("div", {
                className: "o-icon-list__icon u-vertical-middle"
            }, n.default.createElement("span", {
                className: "g-icon g-icon--only g-icon--sim "
            })), n.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, n.default.createElement(h.default, {
                simIndex: t,
                className: "g-gray6-c u-no-margin"
            }))))), n.default.createElement("div", {
                className: "l-col l-col-6  u-small-hide u-large-hide u-text-right"
            }, n.default.createElement("div", {
                className: "u-padding-top-s",
                style: {
                    marginLeft: "45px"
                }
            }, n.default.createElement("p", {
                className: "h3 g-brand2-c u-no-margin"
            }, l)))), n.default.createElement("div", {
                className: "l-row u-small-hide u-large-hide"
            }, n.default.createElement("div", {
                className: "l-col l-col-9 "
            }, n.default.createElement("div", {
                className: "u-margin-top u-small-hide u-large-hide"
            }, n.default.createElement("div", {
                className: "o-icon-list g-gray6-c"
            }, n.default.createElement("div", {
                className: "o-icon-list__item"
            }, n.default.createElement("div", {
                className: "o-icon-list__icon u-padding-right u-no-padding-top"
            }, n.default.createElement("div", {
                className: "g-icon g-icon--info g-icon--before g-icon--xs-s",
                "aria-hidden": "true"
            })), n.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, n.default.createElement("p", null, s)))))))))
        },
        S = (0, t.connect)(function(e) {
            return {
                selectedLoyaltyLengthValue: (0, r.getSelectedLoyaltyLengthValue)(e),
                isPropositionListCountSetMode: (0, r.getPropositionListCountSetMode)(e),
                propositionListCount: (0, r.getPropositionListCount)(e),
                addToCartButtonEnabled: !!(0, l.getSelectedBaseRatePlanId)(e) && !!(0, l.getSelectedOfferId)(e),
                offersLoading: (0, d.getOffersLoading)(e),
                checkMsisdnResult: (0, r.getCheckMsisdnResult)(e),
                isMsisdndVerificationRequired: (0, r.isMsisdndVerificationRequired)(e),
                firstOfferFromProductFilter: (0, l.getFirstOfferFromProductFilter)(e),
                contractRole: (0, l.getContractRole)(e),
                selectedOfferId: (0, l.getSelectedOfferId)(e),
                entries: (0, i.getCartEntries)(e),
                isCarouselReady: (0, d.getCarouselReady)(e),
                selectedOfferType: (0, r.getSelectedOfferType)(e),
                maxSimCount: (0, r.getMaxSimCount)(e),
                simCountSelected: (0, r.getSimCountSelected)(e),
                isB2B: g.default.isB2B((0, r.getOfferTypeCmsConfMarket)(e) || (0, r.getMarketContext)(e)),
                processType: (0, r.getSelectedProcessTypeValue)(e),
                selectedSoftBundleGroup: (0, E.getSelectedSoftBundleGroup)(e),
                propositionListSoftBundleGroup: (0, r.getPropositionListSoftBundleGroup)(e)
            }
        }, function(i) {
            return {
                addToCartWithCounter: function() {
                    return i((0, o.addToCartWithCounter)())
                },
                increment: function() {
                    return i((0, s.propositionListCountIncrement)())
                },
                gotoCartSummary: function() {
                    return i((0, u.gotoCartSummary)())
                },
                warningOn: function() {
                    return i((0, s.requiredMsisdnVerificationOn)())
                },
                clearAddTerminalToOfferFromSessionStorage: function() {
                    return i((0, p.clearAddTerminalToOfferFromSessionStorage)())
                },
                showError: function(e) {
                    return i((0, y.showError)(e))
                },
                setPropositionListSoftBundleGroup: function() {
                    return i((0, s.setPropositionListSoftBundleGroup)())
                },
                setOfferType: function(e) {
                    return i((0, m.setOfferType)(e))
                },
                selectOfferNoPhone: function(e) {
                    return i((0, f.selectOffer)(e))
                },
                pickDevice: function(e, t) {
                    return i((0, f.pickDevice)(e, t))
                },
                setPropositionListCount: function(e) {
                    return i((0, s.propositionListCountSet)(e))
                }
            }
        })(k);
    e.default = S
});
//# sourceMappingURL=AddToCartOrChooseTerminalComponent.js.map