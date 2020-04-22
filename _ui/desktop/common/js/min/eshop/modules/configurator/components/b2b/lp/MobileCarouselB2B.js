define(["exports", "react", "./MobilePropositionB2B", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/utils/OnlineUtils", "eshop/modules/configurator/components/lp/offers/FakeOfferBox", "../../../../core/components/ui/TooltipFromHtml", "eshop/modules/configurator/components/DiscountInfo"], function(e, r, i, o, n, l, p, a) {
    "use strict";

    function u(s) {
        return function() {
            var e, o = babelHelpers.getPrototypeOf(s);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(o, arguments, t)
            } else e = o.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), n = babelHelpers.interopRequireDefault(n), p = babelHelpers.interopRequireDefault(p), a = babelHelpers.interopRequireDefault(a);
    var t = function(e) {
        babelHelpers.inherits(s, e);
        var t = u(s);

        function s(e) {
            var o;
            return babelHelpers.classCallCheck(this, s), o = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(o), "getDescriptionValueForSelectedOfferType", function(e, o) {
                var t = e.descriptions,
                    s = e.selectedOfferType;
                return t[[o, s].filter(Boolean).join(".")] || "No value found. Missing configuration for ".concat(o, ".").concat(s)
            }), o.onClickPickDevice = o.onClickPickDevice.bind(babelHelpers.assertThisInitialized(o)), o.state = {
                isUpdating: !1
            }, n.default.setAsLastViewedOfferPage(), o
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {
                var o = this;
                this.loadModulesInsideCarousel(), OPL.UI.on("module.started", function(e) {
                    "common/modules/opl-carousel" === e.module && o.carouselReady()
                })
            }
        }, {
            key: "carouselReady",
            value: function() {
                this.props.carouselReady()
            }
        }, {
            key: "getDefaultPropositionCarouselIndex",
            value: function() {
                var o = this;
                if (this.props.selectedBaseRatePlanId && this.props.offers) {
                    var e = this.props.offers,
                        t = e.find(function(e) {
                            return e.rateplanBaseProductId === o.props.selectedBaseRatePlanId
                        });
                    return e.indexOf(t)
                }
            }
        }, {
            key: "layoutFixer",
            value: function() {
                return {
                    path: "core/modules/layout-fixer",
                    options: {
                        selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2", ".js-layout-fixer-group-3", ".js-layout-fixer-group-4", ".js-layout-fixer-group-5", ".js-layout-fixer-group-6"]
                    }
                }
            }
        }, {
            key: "updateDimensions",
            value: function() {
                this.carouselRef && OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, this.carouselRef)
            }
        }, {
            key: "oplCarousel",
            value: function(e, o) {
                return {
                    path: "common/modules/opl-carousel",
                    options: {
                        arrows: !1,
                        dots: !0,
                        centerMode: !1,
                        slidesToShow: 1,
                        initialSlide: e,
                        mobileFirst: !0,
                        centerPadding: "5px",
                        responsive: [{
                            breakpoint: 567,
                            settings: {
                                slidesToShow: 2,
                                dots: !0
                            }
                        }, {
                            breakpoint: 1259,
                            settings: {
                                slidesToShow: o
                            }
                        }]
                    }
                }
            }
        }, {
            key: "jsModules",
            value: function(e) {
                return [this.oplCarousel(this.getDefaultPropositionCarouselIndex(), e), this.layoutFixer()]
            }
        }, {
            key: "loadModulesInsideCarousel",
            value: function(e) {
                var o = 0 < arguments.length && void 0 !== e ? e : 3;
                (1 === o || 3 < o) && (o = n.default.isAssignment(this.props.processType) || n.default.isMnpApplication(this.props.processType) ? 1 : 4), this.carouselRef && OPL.UI.loadModules(this.carouselRef, this.jsModules(o))
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e) {
                return !(this.state.isUpdating || e.isPropositionListCountSetMode && e.isPropositionListCountSetMode === this.props.isPropositionListCountSetMode) && !(this.props.propositionListCount !== e.propositionListCount || 0 === this.props.propositionListCount)
            }
        }, {
            key: "componentWillUpdate",
            value: function(e) {
                var o = "";
                e.offers && e.offers[0] && (o = e.offers[0].offerType + "_" + e.offers[0].processType + "_" + e.offers[0].loyaltyLength), !e.offers || this.props.offers && e.offers.length === this.props.offers.length && e.offers[0].processType === this.props.offers[0].processType && e.offers[0].loyaltyLength === this.props.offers[0].loyaltyLength && e.offers[0].offerType === this.props.offers[0].offerType && o == this.state.plotCombo && e.propositionListCount === this.props.propositionListCount || (this.setState({
                    isUpdating: !0
                }), document.getElementById("mobilePropositionCarouselContainer") && OPL.UI.stopModules(document.getElementById("mobilePropositionCarouselContainer")))
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                if (this.state.isUpdating) {
                    var e = "";
                    this.props.offers && this.props.offers[0] && (e = this.props.offers[0].offerType + "_" + this.props.offers[0].processType + "_" + this.props.offers[0].loyaltyLength), this.loadModulesInsideCarousel(this.props.offers && this.props.offers.length), this.setState({
                        isUpdating: !1,
                        plotCombo: e
                    })
                }
                this.updateDimensions()
            }
        }, {
            key: "onClickPickDevice",
            value: function(e) {
                e.preventDefault(), this.props.setPropositionListSoftBundleGroup();
                var o = this.props.marketContextPrefixUrl + this.props.productListUrl;
                window.location = o
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                if (0 === this.props.propositionListCount) return null;
                var e = this.props.descriptions[["offerDisclaimer", this.props.selectedOfferType, this.props.processType].filter(Boolean).join(".")];
                return this.props.offers && this.props.offers[0] ? r.default.createElement("div", null, [!n.default.isAssignment(t.props.processType) && !n.default.isMnpApplication(t.props.processType) && r.default.createElement("div", {
                    className: "u-border-top u-no-margin u-padding-s u-padding-top-m",
                    key: "mobileCarouselB2bHeader"
                }, r.default.createElement("h3", null, t.props.descriptions.header), r.default.createElement("div", {
                    className: "u-padding-top-m u-padding-l u-small-padding-s "
                }, r.default.createElement(o.default, {
                    tooltip: t.getDescriptionValueForSelectedOfferType(t.props, "clientContextTooltip"),
                    label: t.props.descriptions.clientContextLabel,
                    channels: t.props.channels,
                    position: "left",
                    key: "clientContextCheckBox"
                }))), e ? r.default.createElement("div", {
                    className: "g-black1-bg g-white1-c u-margin-l u-margin-top-l",
                    key: "disclaimer"
                }, p.default.conditionalRender(e)) : null, t.props.isB2B ? null : r.default.createElement(a.default, {
                    key: "discountInfo",
                    className: "u-padding-top-m",
                    descriptions: t.props.descriptions,
                    contractRole: t.props.contractRole,
                    offerType: t.props.selectedOfferType
                }), r.default.createElement("div", {
                    ref: function(e) {
                        return t.ref = e
                    },
                    id: "mobilePropositionCarouselContainer",
                    key: "carouselContainer"
                }, r.default.createElement("div", {
                    id: "offerB2Bcarousel",
                    ref: function(e) {
                        return t.carouselRef = e
                    },
                    className: "opl-carousel opl-carousel--brand-dots l-row u-padding-top-l u-small-padding-top-l-xl",
                    key: "carouselBody"
                }, n.default.isAssignment(t.props.processType) || n.default.isMnpApplication(t.props.processType) ? r.default.createElement(l.FakeOfferBox, babelHelpers.extends({
                    proposition: t.props.offers[0],
                    propositionTitle: n.default.isMnpApplication(t.props.processType) ? "Przeniesienie numeru bez umowy" : "Przekazanie usług"
                }, t.props)) : t.props.offers.map(function(e, o) {
                    return r.default.createElement(i.MobilePropositionB2B, babelHelpers.extends({
                        key: "proposition_" + e.id + "_" + o,
                        id: "proposition_" + e.id,
                        offer: e,
                        selected: e.id === t.props.selectedOfferId
                    }, t.props, {
                        index: o,
                        selectOfferCallback: t.props.selectOffer
                    }))
                })))]) : null
            }
        }]), s
    }(r.default.PureComponent);
    e.default = t
});
//# sourceMappingURL=MobileCarouselB2B.js.map