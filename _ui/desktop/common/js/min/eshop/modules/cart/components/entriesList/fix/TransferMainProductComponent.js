define(["exports", "react", "react-redux", "lodash", "../shared/CommonPropositionEntry"], function(e, o, t, r, s) {
    "use strict";

    function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function p(n) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r), s = babelHelpers.interopRequireDefault(s);
    var n = function(e) {
            babelHelpers.inherits(n, e);
            var r = p(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t
            }
            return babelHelpers.createClass(n, [{
                key: "prepareFixEntry",
                value: function() {
                    var e, t;
                    this.props.entry.installationAddress && (e = this.props.descriptions.assignmentAddressLabel + " " + this.props.entry.installationAddress), this.props.entry.potsNumber && (t = this.props.descriptions.assignmentPOTSLabel + " " + this.props.entry.potsNumber);
                    var r = o.default.createElement("div", null, o.default.createElement("p", {
                        className: "u-small-padding-top-s"
                    }, e), o.default.createElement("p", {
                        className: "u-small-padding-top-s"
                    }, t));
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? i(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, this.props.entry.broadbandFixProduct, {
                        additionalContent: r
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = [];
                    this.props.entry.broadbandFixProduct && e.push(this.prepareFixEntry()), this.props.entry.priceForMainFixProducts.oneTimeCost = this.props.entry.totalCheckoutPrice;
                    return o.default.createElement(s.default, {
                        mainEntries: e,
                        offerPrice: this.props.entry.priceForMainFixProducts,
                        loyaltyLength: this.props.entry.loyaltyLength,
                        bundleNo: this.props.entry.bundleNo,
                        entryNo: this.props.entry.entryNo,
                        descriptions: {},
                        showNetPrices: this.props.showNetPrices,
                        rejectionReason: this.props.entry.rejectionReason,
                        showButtons: !1
                    })
                }
            }]), n
        }(o.Component),
        a = (0, t.connect)(null, null)(n);
    e.default = a
});
//# sourceMappingURL=TransferMainProductComponent.js.map