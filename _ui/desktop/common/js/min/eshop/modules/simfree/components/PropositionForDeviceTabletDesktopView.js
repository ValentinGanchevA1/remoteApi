define(["exports", "react", "react-redux", "eshop/modules/simfree/components/filter/view/ProductListOfferPriceTag", "eshop/modules/configurator/components/lp/offers/VasPackages", "eshop/modules/simfree/components/PropositionDetailsForDevice", "eshop/modules/simfree/components/PropositionFeatureForDevice", "../selectors"], function(e, r, t, o, n, a, s, l) {
    "use strict";

    function i(r) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), n = babelHelpers.interopRequireDefault(n), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s);
    var c = function(e) {
            babelHelpers.inherits(l, e);
            var t = i(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
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
                key: "isClientContext",
                value: function() {
                    return this.props.clientContext || !!this.props.contractRole
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.offer;
                    return r.default.createElement("div", {
                        className: "l-row u-no-margin"
                    }, !this.props.addTerminalToOfferBundleNo && r.default.createElement("div", {
                        className: "l-col l-col-1 u-no-padding-left"
                    }, r.default.createElement("label", {
                        className: "o-radio opl-radio u-small-hide",
                        onClick: function(e) {
                            return e.preventDefault()
                        }
                    }, r.default.createElement("input", {
                        type: "radio",
                        name: this.props.inputName || "offerPlans",
                        className: "switcher-trigger",
                        checked: this.props.isSelected,
                        value: e.id
                    }), r.default.createElement("span", {
                        className: "o-ci"
                    }), r.default.createElement("span", {
                        className: "o-ci-label"
                    }))), r.default.createElement("div", {
                        className: "l-col l-col-4    u-small-no-padding-r u-no-padding-left"
                    }, r.default.createElement("p", null, e.rateplanName), !!this.props.isProductDetailsPage && r.default.createElement(a.default, babelHelpers.extends({}, e, {
                        proposition: this.props.entryUnderChange || e,
                        clientContext: this.isClientContext()
                    }, this.getOptionalDetails()))), r.default.createElement("div", {
                        className: "l-col " + (this.props.addTerminalToOfferBundleNo ? " l-col-5" : "l-col-4") + " u-small-no-padding-r"
                    }, r.default.createElement("div", {
                        className: "l-row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, e.features && r.default.createElement(s.default, {
                        proposition: e
                    })), r.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, r.default.createElement(n.default, {
                        offer: e,
                        key: "vasPackagesLargeMedium",
                        changable: !this.props.addTerminalToOfferBundleNo
                    })))), r.default.createElement("div", {
                        className: "l-col  l-col-3  u-block u-no-padding-r"
                    }, r.default.createElement(o.default, {
                        proposition: this.props.offer,
                        clientContext: this.props.clientContext,
                        contractRole: this.props.contractRole,
                        loyaltyLength: this.props.loyaltyLength,
                        alignClass: "u-right",
                        mainPriceClass: "",
                        monthlyString: "mies.",
                        offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                        offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                        baseId: "desktop",
                        key: "desktop_" + (this.props.clientContext ? "clientContextOn" : "clientContextOff")
                    })))
                }
            }]), l
        }(r.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                isProductDetailsPage: (0, l.isProductDetailsPage)(e)
            }
        }, function() {
            return {}
        })(c);
    e.default = u
});
//# sourceMappingURL=PropositionForDeviceTabletDesktopView.js.map