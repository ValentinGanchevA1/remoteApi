define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/PriceBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/ClassificationAttributesBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Buttons", "./Sticker", "./FakeOfferBox", "eshop/utils/OnlineUtils"], function(e, i, r, n, l, a, c, p, t) {
    "use strict";

    function f(s) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.OfferBox = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t);
    var o = function(e) {
        babelHelpers.inherits(s, e);
        var o = f(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = o.call(this, e)).selectOfferNoPhoneAction = t.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(t)), t.pickDeviceAction = t.pickDeviceAction.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(s, [{
            key: "selectOfferNoPhoneAction",
            value: function(e) {
                if (e && e.preventDefault(), this.props.cartIsFix) {
                    var t = this.props.descriptions && this.props.descriptions.fixincartmsg || "W koszyku jest już oferta stacjonarna";
                    this.props.showError(t)
                } else this.props.selectOfferNoPhone(this.props.proposition.id)
            }
        }, {
            key: "pickDeviceAction",
            value: function(e) {
                e && e.preventDefault(), this.props.pickDevice(this.props.proposition.id, this.props.deviceListAddress)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.proposition,
                    t = {
                        selectOffer: this.props.alternativeSelectLabel,
                        pickDevice: this.props.selectButtonLabel,
                        "details.open": this.props.detailsLabel,
                        "details.close": u(this.props.descriptions).close
                    };
                return this.isAssignment() ? i.default.createElement(p.FakeOfferBox, babelHelpers.extends({
                    propositionTitle: "Przekazanie usług"
                }, this.props)) : i.default.createElement("div", {
                    className: "l-col l-col-xsmall-12 l-col-small-6 l-col-medium-4 l-col-3 l-col-xlarge-3  opl-carousel__item u-padding-l u-padding-top-l u-xsmall-no-padding-l u-xsmall-no-padding-r u-xsmall-transform-scale-09 u-xsmall-transform-scale-1-slick"
                }, i.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow u-padding-all-l u-large-padding-all-l-xl"
                }, i.default.createElement(c.Sticker, {
                    sticker: e.sticker,
                    renderMobileVersion: !1
                }), i.default.createElement(r.PriceBox, {
                    key: "PriceBox_" + e.rateplanId,
                    priceLabel: this.props.priceLabel,
                    name: e.rateplanName,
                    id: e.rateplanId,
                    price: e.price,
                    oldPrice: e.oldPrice,
                    mobileDataDesc: e.features.getMobileDataDesc(),
                    mobileRetentionDesc: e.features.getMobileRetentionDesc(),
                    tooltipValues: d(this.props.descriptions),
                    featuresGroup: e.features.featureGroups.promotionFeatures,
                    featuresPositions: this.props.featuresPositions,
                    processType: e.processType,
                    convergence: this.props.clientContext
                }), i.default.createElement("div", {
                    className: "o-separator"
                }), i.default.createElement(n.ClassificationAttributesBox, {
                    featuresGroup: e.features.featureGroups.boxFeatures,
                    config: h(this.props.descriptions),
                    processType: e.processType,
                    id: e.rateplanId,
                    convergence: this.props.clientContext
                }), i.default.createElement("div", {
                    className: "o-separator"
                }), i.default.createElement(l.DetailsButtons, {
                    proposition: e,
                    descriptions: this.props.descriptions,
                    clientContext: this.props.clientContext
                }), i.default.createElement(a.Buttons, {
                    selectOfferNoPhoneAction: this.selectOfferNoPhoneAction,
                    pickDeviceAction: this.pickDeviceAction,
                    labels: t,
                    disabled: this.props.disableAddToCart,
                    pickDeviceShouldBeHidden: !1
                })))
            }
        }, {
            key: "isAssignment",
            value: function() {
                return t.default.isAssignment(this.props.proposition.processType)
            }
        }]), s
    }(i.Component);
    e.OfferBox = o;
    var u = function(e) {
            return {
                close: e["details.close"] || "def:Zamknij",
                header: e["details.header"] || "def:Szczegóły oferty",
                select: e["details.select"] || "def:Wybieram ofertę bez telefonu"
            }
        },
        d = function(e) {
            return {
                noConvergent: e["tooltip.priceDiscount"] || '<div id="TOOLTIP-ID-PLACEHOLDER"><span class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer"/><span class="o-tooltip__content o-tooltip__content--focusable">def: Brak treści</span></div>',
                convergent: e["tooltip.convergentPriceDiscount"] || '<div id="TOOLTIP-ID-PLACEHOLDER"><span class="o-tooltip__trigger g-icon g-icon--info g-icon--xs-s u-spacing-left-s u-cursor-pointer"/><span class="o-tooltip__content o-tooltip__content--focusable">def: Brak treści</span></div>'
            }
        },
        h = function(e) {
            return {
                dataBarDescription: e["features.dataBarDescription"] || "def:Internet w telefonie"
            }
        }
});
//# sourceMappingURL=OfferBox.js.map