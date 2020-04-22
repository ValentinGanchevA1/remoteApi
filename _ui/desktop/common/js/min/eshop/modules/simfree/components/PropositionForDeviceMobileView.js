define(["exports", "react", "react-redux", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/modules/configurator/components/lp/offers/VasPackages", "eshop/modules/simfree/components/PropositionDetailsForDevice", "eshop/modules/simfree/components/PropositionFeatureForDevice", "../selectors"], function(e, t, l, a, i, r, s, n) {
    "use strict";

    function u(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r), s = babelHelpers.interopRequireDefault(s), window.propositionCheckoutInputCount = 0;
    var o = function(e) {
            babelHelpers.inherits(o, e);
            var n = u(o);

            function o(e) {
                var t;
                babelHelpers.classCallCheck(this, o);
                var l = (t = n.call(this, e)).props.offer;
                return window.propositionCheckoutInputCount++, t.state = {
                    inputId: (t.props.inputName ? t.props.inputName + "-" : "offerPlans-") + l.id + "-mobile" + window.propositionCheckoutInputCount
                }, t
            }
            return babelHelpers.createClass(o, [{
                key: "isClientContext",
                value: function() {
                    return this.props.clientContext || !!this.props.contractRole
                }
            }, {
                key: "getOptionalDetails",
                value: function() {
                    if (this.props.entryUnderChange) {
                        var e;
                        try {
                            e = JSON.parse(this.props.entryUnderChange.details)
                        } catch (e) {}
                        return {
                            data: e
                        }
                    }
                    return {}
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.offer;
                    return t.default.createElement("div", {
                        className: "l-row u-no-margin  "
                    }, t.default.createElement("div", {
                        className: "o-radio opl-radio u-w-100 u-box-sizing u-padding-m"
                    }, t.default.createElement("input", {
                        id: this.state.inputId,
                        key: this.state.inputId,
                        type: "radio",
                        name: this.state.inputId,
                        checked: this.props.isSelected,
                        className: "switcher-trigger"
                    }), t.default.createElement("span", {
                        className: "o-ci"
                    }), t.default.createElement("div", null, t.default.createElement("div", {
                        className: "l-row u-display_table u-block u-no-margin "
                    }, t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left"
                    }, t.default.createElement("label", {
                        className: "o-ci-label u-font-normal g-black1-c u-no-padding",
                        htmlFor: this.state.inputId
                    }, t.default.createElement("p", null, this.props.offer.rateplanName)))))), t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding"
                    }, t.default.createElement("p", null, "Opłata abonamentowa:")), t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left"
                    }, t.default.createElement(a.default, {
                        proposition: e,
                        clientContext: this.props.clientContext,
                        contractRole: this.props.contractRole,
                        loyaltyLength: this.props.loyaltyLength,
                        alignClass: "u-left",
                        mainPriceClass: "",
                        monthlyString: "mies.",
                        offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                        offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                        baseId: "mobile",
                        key: "mobile_" + (this.props.clientContext ? "clientContextOn" : "clientContextOff")
                    })), t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding-top-m u-padding"
                    }, t.default.createElement("p", {
                        className: "u-medium-hide u-inline-block"
                    }, "DATA" == this.props.selectedOfferType ? "Pakiet danych na konto:" : "Internet w telefonie:")), t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left "
                    }, e.features && t.default.createElement(s.default, {
                        proposition: e
                    })), t.default.createElement("div", {
                        className: "l-col l-col-12  u-clearfix u-display_table-cell  u-no-padding-r u-block u-no-padding-left u-padding-top-s u-padding"
                    }, t.default.createElement(i.default, {
                        offer: e
                    })), !!this.props.isProductDetailsPage && t.default.createElement(r.default, babelHelpers.extends({}, e, {
                        proposition: this.props.entryUnderChange || e,
                        clientContext: this.isClientContext()
                    }, this.getOptionalDetails())))
                }
            }]), o
        }(t.default.Component),
        c = (0, l.connect)(function(e) {
            return {
                isProductDetailsPage: (0, n.isProductDetailsPage)(e)
            }
        }, function() {
            return {}
        })(o);
    e.default = c
});
//# sourceMappingURL=PropositionForDeviceMobileView.js.map