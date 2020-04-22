define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/components/lp/offers/PickDevicePopup", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/components/InfoComponent", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/components/AddMoreB2B"], function(e, t, o, i, r, n, s, l, a, c, u, p, d, f, h) {
    "use strict";

    function m(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), p = babelHelpers.interopRequireDefault(p), h = babelHelpers.interopRequireDefault(h);
    var g = function(e) {
            babelHelpers.inherits(i, e);
            var o = m(i);

            function i(e) {
                var t;
                return babelHelpers.classCallCheck(this, i), (t = o.call(this, e)).selectOfferNoPhoneAction = t.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(t)), t.pickDeviceAction = t.pickDeviceAction.bind(babelHelpers.assertThisInitialized(t)), t.showPickDeviceModal = t.showPickDeviceModal.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(i, [{
                key: "componentWillMount",
                value: function() {
                    this.props.fetchContractRole(), l.default.initialize(a.default.extractObject(this.props.descriptions, "label.popup.")), this.props.clearAddTerminalToOfferFromSessionStorage()
                }
            }, {
                key: "selectOfferNoPhoneAction",
                value: function(e) {
                    e && e.preventDefault(), this.props.addToCartWithCounter()
                }
            }, {
                key: "pickDeviceAction",
                value: function(e) {
                    e && e.preventDefault(), this.props.setPropositionListSoftBundleGroup(), this.props.pickDevice(this.props.descriptions.deviceListAddress)
                }
            }, {
                key: "showPickDeviceModal",
                value: function(e) {
                    e.preventDefault(), l.default.open({
                        onClickConfirm: this.pickDeviceAction,
                        onClickDecline: this.selectOfferNoPhoneAction
                    })
                }
            }, {
                key: "onClick",
                value: function() {
                    0 < this.props.propositionListCount && this.props.isMsisdndVerificationRequired && this.props.checkMsisdnResult && !this.props.checkMsisdnResult.isPositive ? (this.props.warningOn(), a.default.scrollToComponent("msisdn-verification-container-row", "header")) : (this.props.setPropositionListSoftBundleGroup(), this.props.addToCartWithCounter())
                }
            }, {
                key: "addMorePrice",
                value: function() {
                    if (this.props.firstOfferFromProductFilter && this.props.firstOfferFromProductFilter.payments) {
                        var e = a.default.getPaymentsForRole(this.props.firstOfferFromProductFilter.payments, this.props.contractRole);
                        return a.default.formatPrice(e.basePrice.originalNetPrice)
                    }
                    return ""
                }
            }, {
                key: "render",
                value: function() {
                    if (this.props.isPropositionListCountSetMode || this.props.offersLoading || !this.props.selectedLoyaltyLengthValue && 0 !== this.props.propositionListCount) return null;
                    var e = this.addMorePrice();
                    return t.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, this.props.addToCartButtonEnabled && t.default.createElement("div", {
                        className: "l-page-row u-padding-top"
                    }, t.default.createElement("div", {
                        className: "g-white1-bg"
                    }, t.default.createElement("div", {
                        className: "u-position-relative"
                    }, t.default.createElement("div", {
                        className: "u-padding-left-l u-padding-right-l "
                    }, t.default.createElement("table", {
                        className: "u-table-fixed"
                    }, t.default.createElement("tbody", null, t.default.createElement("tr", null, t.default.createElement("td", {
                        className: "opl-checkout__icon__cell"
                    }, t.default.createElement("span", {
                        className: "g-icon g-icon--only  g-icon g-icon--device-smartphone"
                    })), t.default.createElement("td", {
                        className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                    }, "Dobierz " + ("VOICE" == this.props.selectedOfferType ? "telefon" : "terminal") + " do oferty"), t.default.createElement("td", {
                        className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                    }, t.default.createElement("a", {
                        href: "#",
                        "aria-label": "Dobierz telefon do oferty",
                        className: "opl-product-addlink u-right u-small-right",
                        onClick: this.pickDeviceAction
                    }))))))))), t.default.createElement("div", {
                        className: "l-page-row u-medium-no-padding u-small-no-padding u-small-padding-m  "
                    }, t.default.createElement("div", {
                        className: "l-row u-padding-top-l u-padding-left-l u-padding-right-l u-padding-s"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-9 u-left u-spacing-l"
                    }, 0 < this.props.propositionListCount && t.default.createElement(p.default, {
                        color: "grey",
                        bgColor: "grey"
                    }, "Przechodząc do następnej karty bez wybranego urządzenia, dodasz do koszyka tylko kartę SIM ")), t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-3 u-right u-spacing-l "
                    }, t.default.createElement("button", {
                        className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100",
                        onClick: this.onClick.bind(this),
                        disabled: !this.props.addToCartButtonEnabled && 0 < this.props.propositionListCount
                    }, 1 < this.props.propositionListCount ? "Przejdź do kolejnej karty" : 1 === this.props.propositionListCount ? "Dodaj do koszyka" : "Przejdź do koszyka")))), 0 === this.props.propositionListCount && e && t.default.createElement(h.default, {
                        onClick: this.props.increment,
                        price: e
                    }))
                }
            }]), i
        }(t.Component),
        b = (0, o.connect)(function(e) {
            return {
                selectedLoyaltyLengthValue: (0, c.getSelectedLoyaltyLengthValue)(e),
                isPropositionListCountSetMode: (0, c.getPropositionListCountSetMode)(e),
                propositionListCount: (0, c.getPropositionListCount)(e),
                addToCartButtonEnabled: !!(0, s.getSelectedBaseRatePlanId)(e),
                offersLoading: (0, u.getOffersLoading)(e),
                checkMsisdnResult: (0, c.getCheckMsisdnResult)(e),
                isMsisdndVerificationRequired: (0, c.isMsisdndVerificationRequired)(e),
                firstOfferFromProductFilter: (0, s.getFirstOfferFromProductFilter)(e),
                contractRole: (0, s.getContractRole)(e),
                selectedOfferType: (0, c.getSelectedOfferType)(e)
            }
        }, function(t) {
            return {
                addToCartWithCounter: function() {
                    return t((0, n.addToCartWithCounter)())
                },
                pickDevice: function(e) {
                    return t((0, r.pickDeviceB2B)(e))
                },
                increment: function() {
                    return t((0, i.propositionListCountIncrement)())
                },
                gotoCartSummary: function() {
                    return t((0, d.gotoCartSummary)())
                },
                warningOn: function() {
                    return t((0, i.requiredMsisdnVerificationOn)())
                },
                clearAddTerminalToOfferFromSessionStorage: function() {
                    return t((0, f.clearAddTerminalToOfferFromSessionStorage)())
                },
                setPropositionListSoftBundleGroup: function() {
                    return t((0, i.setPropositionListSoftBundleGroup)())
                },
                fetchContractRole: function() {
                    return t((0, r.fetchContractRole)())
                }
            }
        })(g);
    e.default = b
});
//# sourceMappingURL=AddToCartComponent.js.map