define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/components/lp/offers/OfferBox", "eshop/modules/configurator/utils", "eshop/utils/OnlineUtils", "eshop/components/OraCommonComponents", "eshop/modules/auth/actions/authorization"], function(e, s, t, r, o, n, i, a, l, u, f, p) {
    "use strict";

    function c(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), u = babelHelpers.interopRequireDefault(u);

    function d() {
        OPL.UI.fire(OPL.UI.EVENTS.modules.layoutFixer.recalculate, v())
    }

    function h() {
        return "carousel-parent-container"
    }

    function g() {
        return document.getElementById(h())
    }

    function m(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : 4;
        4 < t && (t = 4), OPL.UI.loadModules(document.getElementById(v()), [{
            path: "core/modules/layout-fixer",
            options: {
                selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2", ".js-layout-fixer-group-3", ".js-layout-fixer-group-4", ".js-layout-fixer-group-5", ".js-layout-fixer-group-6", ".js-layout-fixer-group-7", ".js-layout-fixer-group-classification-attribute", ".js-layout-rateplan-name-fixer"]
            }
        }, {
            path: "common/modules/opl-carousel",
            options: {
                arrows: !1,
                dots: !0,
                slidesToShow: 1,
                mobileFirst: !0,
                infinite: !1,
                centerMode: !0,
                centerPadding: "40px",
                responsive: [{
                    breakpoint: 200,
                    settings: {
                        slidesToShow: 1,
                        centerMode: !0,
                        centerPadding: "18px"
                    }
                }, {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2,
                        centerMode: !1
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        centerMode: !1
                    }
                }, {
                    breakpoint: 1259,
                    settings: {
                        slidesToShow: t,
                        centerMode: !1
                    }
                }]
            }
        }]), d()
    }

    function y() {
        OPL.UI.stopModules(g())
    }
    var v = function() {
            return "carousel-container"
        },
        b = function(e) {
            babelHelpers.inherits(r, e);
            var o = c(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = o.call(this, e)).state = {
                    isUpdating: !1
                }, t
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    u.default.setAsLastViewedOfferPage()
                }
            }, {
                key: "compareFilters",
                value: function(e, t) {
                    var o = e.selectedFilters,
                        r = t.selectedFilters;
                    return o.offerType == r.offerType && o.processType == r.processType && o.verifiedMsisdn == r.verifiedMsisdn && o.loyaltyLength[o.processType] == r.loyaltyLength[r.processType]
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    var t = this;
                    this.compareFilters(this.props, e) || (this.setState({
                        isUpdating: !0
                    }), setTimeout(function() {
                        return t.setState({
                            isUpdating: !1
                        })
                    }, 0))
                }
            }, {
                key: "render",
                value: function() {
                    return !this.state.isUpdating && this.props.propositionsInContext && this.props.propositionsInContext.offers[0] ? s.default.createElement(x, this.props) : null
                }
            }]), r
        }(s.Component),
        x = function(e) {
            babelHelpers.inherits(r, e);
            var o = c(r);

            function r(e) {
                var t;
                return babelHelpers.classCallCheck(this, r), (t = o.call(this, e)).state = {
                    reloadModules: !0
                }, t
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("resize", d), this.handleDefault(), m(this.props.propositionsInContext.offers.length), this.setState({
                        reloadModules: !1
                    })
                }
            }, {
                key: "handleDefault",
                value: function() {
                    var t = this;
                    OPL.UI.on("module.started", function(e) {
                        "common/modules/opl-carousel" == e.module && setTimeout(t.goToDefault.bind(t), 300)
                    })
                }
            }, {
                key: "goToDefault",
                value: function() {
                    var t = this;
                    if (this.props.selectedBaseRatePlanId) {
                        var e = this.props.propositionsInContext && this.props.propositionsInContext.offers,
                            o = e.find(function(e) {
                                return e.rateplanBaseProductId == t.props.selectedBaseRatePlanId
                            }),
                            r = e.indexOf(o);
                        OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.goTo, r, v())
                    }
                }
            }, {
                key: "componentWillUpdate",
                value: function(e) {
                    e.propositionsInContext.offers.length != this.props.propositionsInContext.offers.length && (y(), this.setState({
                        reloadModules: !0
                    }))
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.state.reloadModules && m(this.props.propositionsInContext.offers.length), this.props.selectedOffer && this.goToDefault(), d()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    y()
                }
            }, {
                key: "getFeaturesPositions",
                value: function() {
                    var e = this.props.propositionsInContext.offers;
                    if (e.length) {
                        var t = e[e.length - 1];
                        if (t.features && t.features.featureGroups && t.features.featureGroups.promotionFeatures) {
                            var o = t.features.featureGroups.promotionFeatures,
                                r = [];
                            return o.forEach(function(e) {
                                r.push(e.code)
                            }), r
                        }
                    }
                    return []
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.props.propositionsInContext.offers;
                    return s.default.createElement("div", {
                        id: h(),
                        className: "u-small-no-padding"
                    }, s.default.createElement("div", {
                        id: v(),
                        className: "l-row opl-carousel opl-carousel--brand-dots"
                    }, e.map(function(e) {
                        return s.default.createElement(a.OfferBox, babelHelpers.extends({}, t.props.selectedOffer, {
                            key: e.id,
                            proposition: e,
                            featuresPositions: t.getFeaturesPositions()
                        }, t.props))
                    })))
                }
            }]), r
        }(s.Component),
        C = (0, t.connect)(function(e) {
            return {
                selectedBaseRatePlanId: (0, o.getSelectedBaseRatePlanId)(e),
                selectedOfferId: (0, o.getSelectedOfferId)(e),
                selectedOffer: (0, o.getSelectedOffer)(e),
                propositionsInContext: (0, o.getOffersDataInContext)(e),
                offersLoading: (0, n.getOffersLoading)(e),
                disableAddToCart: (0, i.getDisableAddToCart)(e),
                clientContext: (0, i.getClientContext)(e),
                selectedFilters: (0, i.getSelectedFilters)(e)
            }
        }, function(o) {
            return {
                selectOfferNoPhone: function(e) {
                    return o((0, r.selectOffer)(e))
                },
                pickDevice: function(e, t) {
                    return o((0, r.pickDevice)(e, t))
                },
                showError: function(e) {
                    return o((0, p.showError)(e))
                }
            }
        })(b);
    e.default = C
});
//# sourceMappingURL=OraPropositionCarousel.js.map