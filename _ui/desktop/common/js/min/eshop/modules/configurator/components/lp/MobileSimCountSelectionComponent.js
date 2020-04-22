define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/metaData", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "../../../cart/components/entriesList/BundleTypeEnum", "eshop/modules/cart/actions/cart", "eshop/components/OraCommonComponents", "eshop/modules/simfree/selectors", "../../../core/enum/MarketSegment", "../../../core/enum/SalesChannel"], function(e, l, t, n, s, i, o, a, r, u, p, c, d, m, h) {
    "use strict";

    function f(i) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), n = babelHelpers.interopRequireDefault(n), a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u), m = babelHelpers.interopRequireDefault(m), h = babelHelpers.interopRequireDefault(h);
    var g = function(e) {
            babelHelpers.inherits(s, e);
            var t = f(s);

            function s(e) {
                return babelHelpers.classCallCheck(this, s), t.call(this, e)
            }
            return babelHelpers.createClass(s, [{
                key: "componentWillMount",
                value: function() {
                    this.props.channels.sales !== h.default.WWW && m.default.isB2B(this.props.marketContext) && this.props.propositionListCountSetMode(!0)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.setMaxSimCount(this.props.maxSimCount), this.props.isProductDetailsPage || this.props.isProductListPage || a.default.setAsLastViewedOfferPage()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    (this.props.isCartMobile && this.props.cartIsNet || !m.default.isB2B(this.props.marketContext)) && this.propositionListCountSetMode(), this.cardsCountRef && (OPL.UI.loadModules(this.cardsCountRef, this.oplLayoutFixerModule()), this.updateDimensions())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.cardsCountWrapperRef && OPL.UI.stopModules(this.cardsCountWrapperRef)
                }
            }, {
                key: "oplLayoutFixerModule",
                value: function() {
                    return {
                        path: "core/modules/layout-fixer",
                        options: {
                            selectors: [".js-layout-fixer-group-sim-count-select"]
                        }
                    }
                }
            }, {
                key: "updateDimensions",
                value: function() {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.cardsCountRef)
                }
            }, {
                key: "propositionListCountSetMode",
                value: function() {
                    this.props.propositionListCountSetMode(!1)
                }
            }, {
                key: "setSimCount",
                value: function(e) {
                    this.props.setSIMCount(e), this.props.isB2B || this.propositionListCountSetMode()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    if (this.props.isProductListPage || this.props.isProductDetailsPage || this.props.isAccessoryListPage) return l.default.createElement(C, this.props);
                    var e = this.props.entries && this.props.entries.filter(function(e) {
                        return e.bundleType === u.default.VOICE || e.bundleType === u.default.DATA
                    });
                    if (e && e.length || this.props.propositionListSoftBundleGroup && this.props.selectedSoftBundleGroup != this.props.propositionListSoftBundleGroup) return null;
                    var s = parseInt(this.props.descriptions.simBoxCount) - 1 || 3,
                        i = [],
                        n = 3,
                        o = 3;
                    5 <= s && (o = n = 2);
                    for (var a = 1; a <= s; a++) i.push(l.default.createElement(v, {
                        key: "simCountBox" + a,
                        boxClassName: " u-small-margin-l u-medium-margin-l  l-col l-col-small-6 l-col-medium-" + n + " l-col-" + o,
                        index: a,
                        propositionListCount: this.props.propositionListCount,
                        setSimCount: this.setSimCount.bind(this)
                    }));
                    var r = (!e || 0 === e.length) && (!this.props.isB2B || this.props.channels.sales === h.default.WWW && this.props.isB2B) || this.props.isPropositionListCountSetMode && this.props.isB2B;
                    return l.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, l.default.createElement("div", {
                        className: "l-page-row u-padding-l u-padding-top-l"
                    }, !r && this.props.descriptions.legalSimCountSelectionNotVisible && l.default.createElement("div", null, l.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.legalSimCountSelectionNotVisible
                        }
                    })), r && l.default.createElement("div", {
                        ref: function(e) {
                            return t.cardsCountWrapperRef = e
                        }
                    }, this.props.descriptions.title && l.default.createElement("h2", null, this.props.descriptions.title), this.props.descriptions.mainInfo && l.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.mainInfo
                        }
                    }), l.default.createElement("ul", {
                        className: "l-row u-padding-l",
                        ref: function(e) {
                            return t.cardsCountRef = e
                        }
                    }, i, l.default.createElement(b, babelHelpers.extends({
                        key: "simCountInput",
                        boxClassName: " u-small-margin-l u-medium-margin-l l-col l-col-small-6 l-col-medium-" + n + " l-col-" + o
                    }, this.props, {
                        countOverflow: s,
                        setSimCount: this.setSimCount.bind(this)
                    }))), this.props.descriptions.legalSimCountSelectionVisible && l.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.legalSimCountSelectionVisible
                        }
                    }), this.props.isB2B && this.props.channels.sales !== h.default.WWW && l.default.createElement("div", {
                        className: "l-page-row u-padding-l-xl u-small-padding-l u-medium-padding-s u-padding-s"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-3 u-padding-top-l u-padding-l u-right"
                    }, l.default.createElement("button", {
                        className: "opl-btn opl-btn--medium opl-btn--primary o-btn u-w-100",
                        onClick: this.propositionListCountSetMode.bind(this)
                    }, "Dalej")))))))
                }
            }]), s
        }(l.Component),
        C = function(e) {
            babelHelpers.inherits(s, e);
            var t = f(s);

            function s() {
                return babelHelpers.classCallCheck(this, s), t.apply(this, arguments)
            }
            return babelHelpers.createClass(s, [{
                key: "render",
                value: function() {
                    return this.props.simCountSelected < 2 ? null : l.default.createElement("div", {
                        className: "l-full-row g-white1-bg ",
                        id: "simCountLoopMonitor"
                    }, l.default.createElement("div", {
                        className: "l-page-row u-padding-l "
                    }, l.default.createElement("div", {
                        className: "u-padding-all-l u-box-shadow--s "
                    }, l.default.createElement("div", {
                        className: "l-row "
                    }, l.default.createElement("div", {
                        className: "l-col l-col-6 l-col-medium-12 l-col-small-12 "
                    }, l.default.createElement("h3", null, this.props.descriptions.header || "Tworzysz ofertę złożoną z", l.default.createElement("span", {
                        className: "g-brand1-c"
                    }, " ", this.props.simCountSelected, " ", 1 < this.props.simCountSelected ? "kart" : "karty", " SIM")), l.default.createElement("p", null, "Skonfigurowane abonamenty komórkowe - ", this.props.simCountSelected - this.props.propositionListCount, ". Pozostało do konfiguracji - ", this.props.propositionListCount), l.default.createElement("p", null, l.default.createElement("a", {
                        href: "#",
                        onClick: this.props.removeFromCart
                    }, (this.props.channels.sales === h.default.WWW ? this.props.descriptions.removeCartButtonWWW : this.props.descriptions.removeCartButton) || "Wyczyść koszyk"))), l.default.createElement("div", {
                        className: "l-col l-col-6 l-col-medium-12 l-col-small-12 u-small-padding-top-l"
                    }, l.default.createElement(c.OraButton, {
                        className: "u-right",
                        type: "primary",
                        onClick: this.props.redirectToLastViewedOfferPage
                    }, (this.props.channels.sales === h.default.WWW ? this.props.descriptions.continueConfigurationLabelWWW : this.props.descriptions.continueConfigurationLabel) || "Dokończ konfigurację"))))))
                }
            }]), s
        }(l.default.Component),
        b = function(e) {
            babelHelpers.inherits(i, e);
            var s = f(i);

            function i(e) {
                var t;
                return babelHelpers.classCallCheck(this, i), (t = s.call(this, e)).state = {
                    count: t.props.countOverflow + 1
                }, t
            }
            return babelHelpers.createClass(i, [{
                key: "componentDidMount",
                value: function() {
                    OPL.UI.loadModules(this.refInput, [{
                        path: "common/modules/opl-input-mask",
                        options: {
                            mask: "99",
                            condition: "seen"
                        }
                    }])
                }
            }, {
                key: "setSimCount",
                value: function(e) {
                    if (e) return parseInt(e) > this.props.maxSimCount ? (this.props.setSIMCount(this.props.maxSimCount), this.setState({
                        count: this.props.maxSimCount
                    }), e = this.props.maxSimCount) : (this.props.setSIMCount(e), this.setState({
                        count: e
                    }), e)
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    13 == e.keyCode && (this.refInput.value = this.setSimCount(e.currentTarget.value), this.refInput.blur())
                }
            }, {
                key: "onChange",
                value: function(e) {
                    e.currentTarget.value = this.setSimCount(e.currentTarget.value)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    parseInt(this.props.countOverflow) >= parseInt(this.props.propositionListCount) ? this.hideInput() : this.showInput()
                }
            }, {
                key: "hideInput",
                value: function() {
                    var e = $("#addCard__link"),
                        t = $("#addCard__input");
                    e.removeClass("u-hide"), t.addClass("u-hide")
                }
            }, {
                key: "showInput",
                value: function() {
                    var e = $("#addCard__link"),
                        t = $("#addCard__input");
                    e.addClass("u-hide"), t.removeClass("u-hide")
                }
            }, {
                key: "onClick",
                value: function(e) {
                    this.showInput(), e.preventDefault(), e.stopPropagation();
                    var t = this;
                    this.props.propositionListCount < this.props.countOverflow && (this.refInput.value = this.props.countOverflow + 1), this.props.setSimCount(this.refInput.value), setTimeout(function() {
                        t.refInput.select()
                    }, 200)
                }
            }, {
                key: "onInputClick",
                value: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.refInput.select()
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return l.default.createElement(n.default, {
                        className: this.props.boxClassName,
                        onChangeHandler: this.onClick.bind(this),
                        isSelected: this.props.propositionListCount > this.props.countOverflow,
                        switcherClassName: "switcher"
                    }, l.default.createElement("div", {
                        className: "u-position-relative u-small-no-margin u-medium-no-margin u-no-margin u-text-center g-white1-bg u-box-shadow--s u-cursor-pointer"
                    }, l.default.createElement("div", {
                        className: "opl-selection-layer",
                        "aria-hidden": "true"
                    }, l.default.createElement("div", {
                        className: "opl-selection-layer__border"
                    }), l.default.createElement("div", {
                        className: "opl-selection-layer__checkmark"
                    })), l.default.createElement("div", null, l.default.createElement("label", {
                        htmlFor: "switcher_trigger-input",
                        className: "u-small-no-padding u-medium-no-padding-right u-medium-no-padding-left u-medium-padding-top-l u-medium-padding-l u-padding-all-xxl u-w-50 u-text-center"
                    }, l.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-sim-count-select"
                    }, l.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, l.default.createElement("div", {
                        id: "addCard__link",
                        className: this.state.inputVisible ? "u-hide" : ""
                    }, l.default.createElement("a", {
                        className: "opl-product-ghostlink--number u-margin u-padding-top-l",
                        href: "#",
                        "data-number": "+"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--sim g-icon--only"
                    }), l.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Więcej")), l.default.createElement("p", {
                        className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin u-small-hide u-medium-hide",
                        "aria-hidden": "true"
                    }, "Więcej kart"), l.default.createElement("p", {
                        className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin u-large-hide",
                        "aria-hidden": "true"
                    }, "Więcej")), l.default.createElement("div", {
                        id: "addCard__input",
                        className: this.state.inputVisible ? "" : "u-hide"
                    }, l.default.createElement("label", {
                        className: "u-font-bold g-white1-bg u-small-padding-top-s u-small-padding-s u-padding-top-l u-padding-l-xl"
                    }, l.default.createElement("p", {
                        className: "h5 u-block u-small-margin-top-s u-margin"
                    }, "Wpisz liczbę"), l.default.createElement("input", {
                        className: "opl-input--size-m h1 u-text-center u-no-margin",
                        type: "text",
                        defaultValue: this.props.propositionListCount,
                        onClick: this.onInputClick.bind(this),
                        autoComplete: "off",
                        ref: function(e) {
                            return t.refInput = e
                        },
                        onBlur: this.onChange.bind(this),
                        onKeyDown: this.onKeyDown.bind(this)
                    })))))))))
                }
            }]), i
        }(l.default.Component),
        v = function(e) {
            babelHelpers.inherits(s, e);
            var t = f(s);

            function s() {
                return babelHelpers.classCallCheck(this, s), t.apply(this, arguments)
            }
            return babelHelpers.createClass(s, [{
                key: "onClick",
                value: function() {
                    this.props.setSimCount(this.props.index)
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement(n.default, {
                        className: this.props.boxClassName,
                        onChangeHandler: this.onClick.bind(this),
                        isSelected: this.props.propositionListCount == this.props.index,
                        switcherClassName: "switcher"
                    }, l.default.createElement("div", {
                        className: "u-position-relative u-small-no-margin u-medium-no-margin u-no-margin u-text-center g-white1-bg u-box-shadow--s u-cursor-pointer"
                    }, l.default.createElement("div", {
                        className: "opl-selection-layer",
                        "aria-hidden": "true"
                    }, l.default.createElement("div", {
                        className: "opl-selection-layer__border"
                    }), l.default.createElement("div", {
                        className: "opl-selection-layer__checkmark"
                    })), l.default.createElement("label", {
                        className: "u-small-no-padding u-medium-no-padding-right u-medium-no-padding-left u-medium-padding-top-l u-medium-padding-l u-padding-all-xxl u-w-50 u-text-center",
                        htmlFor: "switcher_trigger-" + this.props.index
                    }, l.default.createElement("div", {
                        className: "u-animate-height js-layout-fixer-group-sim-count-select"
                    }, l.default.createElement("div", {
                        className: "js-height-sensitive-element"
                    }, l.default.createElement("a", {
                        className: "switcher-subtrigger opl-product-ghostlink--number u-margin u-padding-top-l",
                        "data-number": this.props.index
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--sim g-icon--only"
                    })), l.default.createElement("p", {
                        className: "u-font-bold h3 u-padding-top-s u-padding-m u-letter-spacing-s u-no-margin"
                    }, this.props.index, l.default.createElement("span", null, " ", function(e) {
                        switch (e) {
                            case 1:
                                return "karta";
                            case 2:
                            case 3:
                            case 4:
                                return "karty";
                            case 5:
                                return "kart"
                        }
                    }(this.props.index))))))))
                }
            }]), s
        }(l.default.Component);
    var y = (0, t.connect)(function(e) {
        return {
            propositionListCount: (0, s.getPropositionListCount)(e),
            simCountSelected: (0, s.getSimCountSelected)(e),
            isPropositionListCountSetMode: (0, s.getPropositionListCountSetMode)(e),
            cartIsNet: (0, r.getCartIsNet)(e),
            entries: (0, r.getCartEntries)(e),
            isCartMobile: (0, r.isCartMobile)(e),
            isB2B: "B2B" === (0, s.getMarketContext)(e),
            verifiedMsisdn: (0, s.getVerifiedMsisdnB2B)(e),
            verifyMsisdnLoading: (0, o.getVerifyMsisdnLoading)(e),
            isProductListPage: (0, d.isProductListPage)(e),
            isAccessoryListPage: (0, d.isAccessoryListPage)(e),
            isProductDetailsPage: (0, d.isProductDetailsPage)(e),
            selectedSoftBundleGroup: (0, d.getSelectedSoftBundleGroup)(e),
            propositionListSoftBundleGroup: (0, s.getPropositionListSoftBundleGroup)(e)
        }
    }, function(s) {
        return {
            setSIMCount: function(e) {
                return s((0, i.propositionListCountSet)(e))
            },
            propositionListCountSetMode: function(e) {
                return s((0, i.propositionListCountSetMode)(e))
            },
            increment: function() {
                return s((0, i.propositionListCountIncrement)())
            },
            decrement: function() {
                return s((0, i.propositionListCountDecrement)())
            },
            setMaxSimCount: function(e) {
                return s((0, i.setMaxSimCount)(e))
            },
            selectProcessType: function(e, t) {
                return s((0, i.selectProcessTypeB2B)(e, t))
            },
            selectLoyaltyLength: function(e, t) {
                return s((0, i.selectLoyaltyLengthB2B)(e, t))
            },
            verifyMsisdn: function(e, t) {
                return s((0, i.checkMsisdnAndGetOffersB2B)(e, t))
            },
            clearCheckMsisdn: function(e) {
                return s((0, i.clearCheckMsisdnB2B)(e))
            },
            removeFromCart: function() {
                return s((0, p.removeFromCart)(null))
            },
            redirectToLastViewedOfferPage: function() {
                return s((0, p.redirectToLastViewedOfferPage)())
            }
        }
    })(g);
    e.default = y
});
//# sourceMappingURL=MobileSimCountSelectionComponent.js.map