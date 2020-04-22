define(["exports", "react", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/PriceBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/ClassificationAttributesBox", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/DetailsButtons", "eshop/modules/configurator/components/lp/offers/newOfferBoxComponents/Buttons", "eshop/modules/configurator/components/lp/offers/Sticker", "eshop/utils/OnlineUtils"], function(e, l, t, o, s, r, i, n) {
    "use strict";

    function a(s) {
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
    }), e.FakeOfferBox = void 0, l = babelHelpers.interopRequireWildcard(l), n = babelHelpers.interopRequireDefault(n);
    var c = function(e) {
        babelHelpers.inherits(s, e);
        var o = a(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = o.call(this, e)).selectOfferNoPhoneAction = t.selectOfferNoPhoneAction.bind(babelHelpers.assertThisInitialized(t)), t.pickDeviceAction = t.pickDeviceAction.bind(babelHelpers.assertThisInitialized(t)), t.props.selectOffer(t.props.proposition.id), t
        }
        return babelHelpers.createClass(s, [{
            key: "selectOfferNoPhoneAction",
            value: function(e) {
                e && e.preventDefault(), this.props.selectOfferNoPhone(this.props.proposition.id)
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
                        selectOffer: this.props.descriptions["select.offer.button.label.for.ASSIGNMENT"] || "Przekaż usługę",
                        pickDevice: this.props.selectButtonLabel,
                        "details.open": this.props.detailsLabel,
                        "details.close": p(this.props.descriptions).close
                    };
                return l.default.createElement("div", {
                    className: "l-col l-col-xsmall-12 l-col-small-6 l-col-medium-4 l-col-3 l-col-xlarge-3  opl-carousel__item u-padding-l u-padding-top-l u-xsmall-no-padding-l u-xsmall-no-padding-r u-xsmall-transform-scale-09 u-xsmall-transform-scale-1-slick"
                }, l.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow u-padding-all-l u-large-padding-all-l-xl"
                }, l.default.createElement(i.Sticker, {
                    sticker: e.sticker,
                    renderMobileVersion: !1
                }), l.default.createElement("span", null, l.default.createElement("p", {
                    className: "h3"
                }, this.props.propositionTitle)), l.default.createElement("div", {
                    className: "o-separator"
                }), l.default.createElement("span", null, l.default.createElement("p", {
                    className: "u-font-bold",
                    dangerouslySetInnerHTML: {
                        __html: this.props.proposition.longDescription
                    }
                })), n.default.isAssignment(this.props.processType) && l.default.createElement("div", null, l.default.createElement("div", {
                    className: "o-separator"
                }), l.default.createElement(r.Buttons, {
                    selectOfferNoPhoneAction: this.selectOfferNoPhoneAction,
                    pickDeviceAction: this.pickDeviceAction,
                    labels: t,
                    disabled: this.props.disableAddToCart,
                    pickDeviceShouldBeHidden: !0
                }))))
            }
        }]), s
    }(l.Component);
    e.FakeOfferBox = c;
    var p = function(e) {
        return {
            close: e["details.close"] || "def:Zamknij",
            header: e["details.header"] || "def:Szczegóły oferty",
            select: e["details.select"] || "def:Wybieram ofertę bez telefonu"
        }
    }
});
//# sourceMappingURL=FakeOfferBox.js.map