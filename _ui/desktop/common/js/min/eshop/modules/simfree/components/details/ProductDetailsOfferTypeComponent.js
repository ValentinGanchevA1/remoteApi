define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/components/OraCommonComponents", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/components/entriesList/StayLoveMsisdnHeader", "../../../../components/InfoComponent", "../../../configurator/selectors/offers", "../../../auth/selectors/authorization", "prop-types", "../../selectors", "../../../core/enum/SalesChannel", "../../../core/enum/SoftBundleGroup", "../../../core/enum/MarketSegment", "../../../cart/components/entriesList/BundleTypeEnum"], function(e, n, t, r, o, s, l, i, a, f, p, u, c, d, m, y, h, b, O, T) {
    "use strict";

    function v(o) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a), p = babelHelpers.interopRequireDefault(p), m = babelHelpers.interopRequireWildcard(m), h = babelHelpers.interopRequireDefault(h), b = babelHelpers.interopRequireDefault(b), O = babelHelpers.interopRequireDefault(O), T = babelHelpers.interopRequireDefault(T);
    var C = function(e) {
        babelHelpers.inherits(s, e);
        var o = v(s);

        function s(e) {
            var t;
            babelHelpers.classCallCheck(this, s), t = o.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "renderConditionalInfo", function(e) {
                var t = e.channels,
                    r = e.selectedOfferType,
                    o = e.softBundleGroup,
                    s = e.hasLove;
                if (t.sales === h.default.WWW && r === a.default.VOICE_LDF && o === b.default.LDF) return n.default.createElement(u.ConditionalInfoComponent, {
                    condition: s,
                    type: "blueInfo",
                    color: "black",
                    bgColor: "white",
                    title: "Pamiętaj!",
                    padding: "noPadding",
                    text: "Jesteś w Love dla Firm - dzięki temu korzystasz ze specjalnych rabatów. Jeśli chcesz korzystać z nich dalej - musisz mieć aktywną umowę na internet dla biura.",
                    altText: "Love dla firm to pakiet obejmujący abonament komórkowy i internet stacjonarny w Orange dzięki czemu koszt pierwszej karty jest od 35,00 zł + VAT, a drugą kartę dostaniesz za 0 zł."
                })
            });
            var r = t.props.cmsConf;
            return t.props.registerCmsConfiguration(r), 1 === t.props.cmsConf.length && t.props.selectedOfferType !== r.offerType && t.props.setOfferType(r[0].offerType), t.props.selectedOfferType === a.default.SIMFREE && t.props.setOfferType(t.props.selectedOfferType), t.selectOfferType = t.selectOfferType.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "selectOfferType",
            value: function(e) {
                this.props.getParamsFromUrl(), this.props.setOfferType(e.value)
            }
        }, {
            key: "filterVisible",
            value: function(e) {
                var t = this.props.cmsConf;
                return t[a.default.VOICE_LDF] && this.props.stayLoveRetentionMSISDN && (t[a.default.VOICE_LDF].visible = !0), e.filter(function(e) {
                    return t[e.value] && t[e.value].visible
                })
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.props.selectedOfferType,
                    r = this.props.cmsConf[t] ? this.props.cmsConf[t].productListSelectText : a.default.SIMFREE;
                return t !== a.default.CONVERGENT ? (e = this.filterOutNotAvailableOfferTypes(this.props.selectValues.filter(function(e) {
                    return a.default.CONVERGENT !== e.value
                })), t = this.doesContainOfferType(this.props.selectedVariantObject.availableOfferTypes, t) ? t : this.changeOfferType()) : e = this.props.selectValues.filter(function(e) {
                    return a.default.CONVERGENT === e.value
                }), e = this.filterVisible(e), 0 < this.props.propositionListCount && this.props.isPropositionListCountLoop && !this.props.isB2B || this.props.isDuet ? null : n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l u-padding-top-l"
                }, !this.props.addTerminalToOfferBundleNo && n.default.createElement(i.OraSelect, {
                    onChange: this.selectOfferType,
                    className: "o-select opl-select-light u-inline-block u-small-block u-margin-l u-small-no-margin ",
                    id: "offerTypeFilter",
                    options: e,
                    withEmptyOption: !1,
                    selected: t,
                    selectedName: r,
                    selectionType: this.props.selectionType,
                    singleOptionClassName: "u-font-bold u-no-padding-left"
                }), this.renderConditionalInfo(this.props), n.default.createElement(p.default, null))
            }
        }, {
            key: "filterOutNotAvailableOfferTypes",
            value: function(e) {
                var t = this;
                return e.filter(function(e) {
                    return t.doesContainOfferType(t.props.selectedVariantObject.availableOfferTypes, e.value)
                })
            }
        }, {
            key: "changeOfferType",
            value: function() {
                var t = this,
                    r = "",
                    o = "";
                return this.props.selectedVariantObject.availableOfferTypes.map(function(e) {
                    return t.props.cmsConf[e] ? (r = e, void(o = t.props.cmsConf[e].defaultProcess)) : e === T.default.SIMFREE && t.props.cmsConf[a.default.SIMFREE] ? (r = a.default.SIMFREE, void(o = t.props.cmsConf[e].defaultProcess)) : void 0
                }), this.props.setOfferType(r), o && "" !== o && this.props.setProcessType(o), r
            }
        }, {
            key: "doesContainOfferType",
            value: function(e, t) {
                if (t !== a.default.SIMFREE && t !== a.default.SIMFREE_INST) return !0;
                var r = !1;
                return e.map(function(e) {
                    (e === t || t === a.default.SIMFREE_INST && e === T.default.SIMFREE) && (r = !0)
                }), r
            }
        }]), s
    }(n.Component);
    C.PropTypes = {
        softBundleGroup: m.string,
        hasLove: m.bool,
        hasODF: m.bool
    };
    var g = (0, t.connect)(function(e) {
        return {
            selectValues: (0, s.getOfferTypesForSelect)(e),
            selectedOfferType: (0, l.getSelectedOfferType)(e),
            addTerminalToOfferBundleNo: (0, f.getAddTerminalToOfferBundleNo)(e),
            selectedVariantObject: (0, s.getSelectedVariantObject)(e),
            isPropositionListCountLoop: (0, l.getPropositionListOfferType)(e) && (0, l.getPropositionListOfferType)(e) === (0, l.getSelectedOfferType)(e),
            propositionListCount: (0, l.getPropositionListCount)(e),
            isB2B: (0, l.getMarketContext)(e) === O.default.B2B,
            softBundleGroup: (0, s.getSelectedSoftBundleGroup)(e),
            hasLove: (0, d.hasLove)(e),
            hasODF: (0, d.hasODF)(e),
            stayLoveRetentionMSISDN: (0, d.getStayLoveRetentionMSISDN)(e),
            isDuet: (0, y.isDuet)(e)
        }
    }, function(t) {
        return {
            registerCmsConfiguration: function(e) {
                return t((0, r.setOfferTypeCmsConf)(e))
            },
            getParamsFromUrl: function() {
                return t((0, r.getParamsFromUrl)())
            },
            setOfferType: function(e) {
                return t((0, r.setOfferType)(e))
            },
            setProcessType: function(e) {
                return t((0, o.selectProductDetailsProcessType)(e))
            },
            getDocuments: function() {
                return t((0, r.getDocuments)())
            }
        }
    })(C);
    e.default = g
});
//# sourceMappingURL=ProductDetailsOfferTypeComponent.js.map