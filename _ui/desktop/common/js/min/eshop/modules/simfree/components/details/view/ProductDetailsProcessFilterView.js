define(["exports", "react", "eshop/components/OraFloatingLabelSelect", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/modules/configurator/components/InfoWithTooltip", "prop-types", "eshop/modules/cart/components/entriesList/mobile/MultiCartMnpBenefitComponent", "eshop/modules/simfree/components/OfferDisclaimerComponent", "eshop/modules/simfree/constants/OfferTypeEnum", "../../../../../components/common/OraLoader", "../../../../configurator/components/DiscountInfo"], function(e, o, r, s, a, t, n, i, c, p, u) {
    "use strict";

    function d(s) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s), a = babelHelpers.interopRequireDefault(a), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u);
    var l = {
            selectedProcessValue: t.default.string,
            processTypeData: t.default.arrayOf(t.default.shape({
                value: t.default.string,
                description: t.default.string
            })),
            selectProcessCallback: t.default.func,
            selectedLoyaltyLengthValue: t.default.oneOfType([t.default.string, t.default.number]),
            loyaltyLengthData: t.default.arrayOf(t.default.shape({
                value: t.default.oneOfType([t.default.string, t.default.number]),
                description: t.default.string
            })),
            selectLoyaltyLengthCallback: t.default.func,
            isB2B: t.default.bool,
            contractRole: t.default.string
        },
        f = function(e) {
            babelHelpers.inherits(l, e);
            var t = d(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
                key: "createExtOfferSelect",
                value: function() {
                    var e = this.props.getSelectedExtProcessSelectIndexes();
                    if (!e) return null;
                    var t = e.length - 1,
                        l = this.props.getExtProcessSelectForLevel(t).options[e[t]];
                    return [this.createExtProcessSelects(e), this.createLoyaltySelect(l), this.createInstallmentSelect(l)]
                }
            }, {
                key: "createExtProcessSelects",
                value: function(s) {
                    var a = this;
                    return s.map(function(e, t) {
                        var l = a.props.getExtProcessSelectForLevel(t);
                        return o.default.createElement("div", null, o.default.createElement("div", {
                            className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                        }, o.default.createElement(r.OraFloatingLabelSelect, {
                            id: "extProcessSelectLevel-".concat(t),
                            options: a.props.createOptionsForExtProcessSelect(l),
                            onChange: a.props.selectProcessForExtProcessSelect(l),
                            selected: e,
                            className: "opl-input--size-m",
                            label: l.label,
                            disabled: a.props.isDuet
                        })), a.isNotLastLevel(t, s) && o.default.createElement("div", {
                            className: "l-col u-medium-hide"
                        }))
                    })
                }
            }, {
                key: "isNotLastLevel",
                value: function(e, t) {
                    return e !== t.length - 1
                }
            }, {
                key: "createLoyaltySelect",
                value: function(e) {
                    return e.showLoyalty ? o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                    }, o.default.createElement(r.OraFloatingLabelSelect, {
                        id: "loyaltyLengthFilter",
                        options: this.props.loyaltyLengthData,
                        selected: this.props.selectedLoyaltyLengthValue,
                        onChange: this.props.selectLoyaltyLengthCallback,
                        className: "opl-input--size-m",
                        singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                        label: "Umowa",
                        disabled: !!this.props.addTerminalToOfferBundleNo || this.props.isDuet
                    })) : null
                }
            }, {
                key: "createInstallmentSelect",
                value: function(e) {
                    return e.showInstallments ? o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                    }, o.default.createElement(r.OraFloatingLabelSelect, {
                        id: "deviceInstallmentsCountFilter",
                        options: this.props.installmentOptions,
                        selected: this.props.installmentCount,
                        className: "opl-input--size-m",
                        singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                        label: "Liczba rat za telefon lub urządzenie",
                        disabled: !0
                    })) : null
                }
            }, {
                key: "isInstalmentProcess",
                value: function() {
                    return "INSTALMENT_SALES_OF_GOODS" === this.props.selectedProcessValue || "INSTALMENT_SALES_OF_GOODS_NC" === this.props.selectedProcessValue
                }
            }, {
                key: "hasExtProcessSelectConfig",
                value: function() {
                    return this.props.extProcessSelectConfig && this.props.extProcessSelectConfig.options && 0 !== this.props.extProcessSelectConfig.options.length
                }
            }, {
                key: "render",
                value: function() {
                    var e = {
                            label: this.props.descriptions["infoDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)],
                            tooltip: this.props.descriptions["infoTooltipDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)]
                        },
                        t = "SIMFREE_INST" === this.props.selectedOfferType;
                    return o.default.createElement("div", {
                        className: "l-col l-col-12 g-gray1-bg u-large-no-bg u-medium-padding-left-l u-medium-padding-right-l u-no-padding-bottom" + (t ? " u-spacing-l-xl" : "")
                    }, o.default.createElement(p.OraLoader, {
                        id: "offer-filters-loader-component",
                        loading: this.props.offerFiltersLoading,
                        parentId: "offer-filters-loader"
                    }, o.default.createElement("div", {
                        className: "g-gray1-bg u-medium-no-bg g-small-no-bg u-padding-all-l u-small-padding-left u-small-padding-right u-medium-no-padding-left u-medium-no-padding-right" + (this.isInstalmentProcess() ? " u-no-padding-b" : "")
                    }, o.default.createElement("div", {
                        className: "l-row "
                    }, !this.props.offerFiltersLoading && this.hasExtProcessSelectConfig() && this.createExtOfferSelect(), !this.props.offerFiltersLoading && !this.hasExtProcessSelectConfig() && o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-spacing-l"
                    }, o.default.createElement(r.OraFloatingLabelSelect, {
                        options: this.props.processTypeData,
                        id: "processTypeFilter",
                        selected: this.props.selectedProcessValue,
                        onChange: this.props.selectProcessCallback,
                        isFeedbackParam: "true",
                        label: this.props.processLabel,
                        className: "opl-input--size-m",
                        disabled: !!this.props.isAddTerminalToOfferBundleNo || this.props.isDuet
                    })), !t && o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-spacing-l"
                    }, o.default.createElement(r.OraFloatingLabelSelect, {
                        options: this.props.loyaltyLengthData,
                        id: "loyaltyFilter",
                        selected: this.props.selectedLoyaltyLengthValue,
                        onChange: this.props.selectLoyaltyLengthCallback,
                        singleOptionClassName: "u-padding-all",
                        isFeedbackParam: "true",
                        label: "Umowa",
                        className: "opl-input--size-m",
                        disabled: !!this.props.isAddTerminalToOfferBundleNo || this.props.isDuet
                    }))), !this.props.offerFiltersLoading && e.label && o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, o.default.createElement(a.default, e)), !t && "WWW" === this.props.channels.sales && o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                    }, o.default.createElement(s.default, babelHelpers.extends({
                        key: this.props.selectedProcessValue,
                        channels: this.props.channels,
                        tooltip: !0
                    }, this.props.clientContextCheckboxConfig, {
                        addTerminalToOfferBundleNo: !!this.props.isAddTerminalToOfferBundleNo || void 0
                    })))), this.props.selectedOffer && o.default.createElement("div", {
                        className: this.isInstalmentProcess() ? "" : "l-row u-padding-top-l"
                    }, !t && !this.props.isB2B && -1 === [c.default.DATA].indexOf(this.props.selectedOfferType) && o.default.createElement(i.default, {
                        descriptions: this.props.descriptions,
                        processType: this.props.selectedProcessValue,
                        className: "u-spacing-s"
                    }), o.default.createElement(n.default, {
                        processType: this.props.selectedProcessValue,
                        monthlyPrices: this.props.selectedOffer.payments.plain.totalPayments.monthlyPayments
                    })), !t && !this.props.isB2B && o.default.createElement("div", {
                        className: "u-padding-top-m"
                    }, o.default.createElement(u.default, {
                        descriptions: this.props.descriptions,
                        contractRole: this.props.contractRole,
                        offerType: this.props.selectedOfferType
                    })))))
                }
            }]), l
        }(o.Component);
    (e.default = f).propTypes = l
});
//# sourceMappingURL=ProductDetailsProcessFilterView.js.map