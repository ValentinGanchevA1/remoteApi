define(["exports", "react", "lodash", "eshop/flux/utils/OraModalService", "../fix/productDetails/FixDetailsModal", "./CommonProductEntry", "../ProductTypeEnum"], function(e, o, t, i, s, l, a) {
    "use strict";

    function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function c(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a);
    var r = function(e) {
        babelHelpers.inherits(n, e);
        var r = c(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), t = r.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "onRemove", function(e) {
                e.preventDefault(), t.props.onRemove(t.props.entry.productCode, t.props.entry.bundleNo)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "lowerInstallmentsClicked", function(e) {
                e.preventDefault(), t.props.lowerInstallmentsClicked(t.props.entry.bundleNo)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "onChange", function(e) {
                e.preventDefault(), t.props.onChange()
            }), t.onDetails = t.onDetails.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(n, [{
            key: "componentWillMount",
            value: function() {
                var t = this;
                i.default.add(function(e) {
                    return o.default.createElement(s.default, {
                        id: t.getDetailsModalId(),
                        header: t.props.sectionConf && t.props.sectionConf.detailsLabel || "Szczegóły usługi",
                        details: t.parseDetails(t.props.entry.details),
                        icon: t.props.entry.thumbnailIcon,
                        productName: t.props.entry.name,
                        vas: t.props.entry,
                        net: t.props.showNetPrices
                    })
                })
            }
        }, {
            key: "onDetails",
            value: function(e) {
                e.preventDefault(), i.default.open(this.getDetailsModalId())
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.entry,
                    t = {
                        price: {
                            oneTimeCost: function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? p(Object(r), !0).forEach(function(e) {
                                        babelHelpers.defineProperty(t, e, r[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    })
                                }
                                return t
                            }({}, e.firstBillPrice && 0 != e.firstBillPrice.price ? e.firstBillPrice : e.checkoutPrice),
                            monthlyCosts: e.monthlyPrices,
                            installments: this.isMobileDevice()
                        },
                        code: e.productCode || e.code,
                        name: e.name,
                        thumbnailIcon: e.thumbnailIcon || "international-globe",
                        imageUrl: e.imageUrl,
                        description: this._getDescriptionDesktop(),
                        changeable: !e.unchangeable,
                        removable: !e.mandatory
                    };
                return o.default.createElement(l.default, {
                    borderTop: this.props.borderTop,
                    product: t,
                    onDetails: !this.isMobileDevice() && this.onDetails,
                    onRemove: this.props.onRemove && this.onRemove.bind(this),
                    onChange: this.props.onChange && this.onChange.bind(this),
                    lowerInstallmentsClicked: this.props.entry && this.props.entry.productType === a.default.TERMINAL ? this.props.lowerInstallmentsClicked && this.lowerInstallmentsClicked.bind(this) : void 0,
                    descriptions: this.props.descriptions,
                    net: this.props.showNetPrices,
                    forFreeLabel: this.props.forFreeLabel,
                    serviceFreeLabel: this.props.serviceFreeLabel
                })
            }
        }, {
            key: "getDetailsModalId",
            value: function() {
                return "productEntryDetails-".concat(this.props.entry.productType, "-").concat(this.props.entry.entryNo)
            }
        }, {
            key: "parseDetails",
            value: function(t) {
                try {
                    return t ? JSON.parse(t) : ""
                } catch (e) {
                    return t
                }
            }
        }, {
            key: "isMobileDevice",
            value: function() {
                return t.default.includes([a.default.TERMINAL, a.default.EURO_SET], this.props.entry.productType)
            }
        }, {
            key: "_getDescriptionDesktop",
            value: function() {
                return this.props.entry.productType === a.default.TERMINAL ? this.props.entry.colorDefinition.name : this.props.entry.description
            }
        }]), n
    }(o.Component);
    e.default = r
});
//# sourceMappingURL=UniversalEntryComponent.js.map