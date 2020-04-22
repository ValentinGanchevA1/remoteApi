define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/modules/cart/components/entriesList/fix/buymore/Utils"], function(e, a, t, r, l, n, c) {
    "use strict";

    function s(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0;
    var o = function(e) {
        babelHelpers.inherits(l, e);
        var t = s(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "renderSimple",
            value: function() {
                var e = {
                    __html: this.props.details
                };
                return this.props.details && a.default.createElement("div", {
                    dangerouslySetInnerHTML: e
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.renderSimple();
                return a.default.createElement(r.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0
                }, a.default.createElement("div", null, a.default.createElement(i, this.props), a.default.createElement("div", {
                    className: "l-full-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2 u-small-margin-top u-margin"
                }, a.default.createElement("div", {
                    className: "o-separator"
                }))), a.default.createElement("div", {
                    className: "l-full-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-10 large-offset-by-2"
                }, e))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    o.defaultProps = {
        id: "",
        details: "",
        header: "default: Szczegóły usługi"
    }, o.propTypes = {
        id: t.PropTypes.string,
        icon: t.PropTypes.string,
        details: t.PropTypes.string,
        productName: t.PropTypes.string,
        header: t.PropTypes.string,
        prices: t.PropTypes.arrayOf(t.PropTypes.object)
    };
    var i = function(e) {
            var t = e.icon ? e.icon : "funpack-2",
                l = e.icon && -1 < e.icon.indexOf(" ") ? "" : " g-icon--l";
            return a.default.createElement("div", null, a.default.createElement("p", {
                className: "h3 u-spacing-l"
            }, e.header), a.default.createElement(u, {
                icon: t,
                iconSize: l,
                productName: e.productName,
                vas: e.vas,
                net: e.net
            }), a.default.createElement(m, {
                icon: t,
                iconSize: l,
                productName: e.productName,
                vas: e.vas,
                net: e.net
            }))
        },
        u = function(e) {
            return a.default.createElement(l.ResponsiveVisibility, {
                mobile: !1
            }, a.default.createElement("div", {
                className: "l-full-row"
            }, a.default.createElement("div", {
                className: "l-col l-col-2"
            }, a.default.createElement("span", {
                className: "u-padding-top-l u-padding-m u-large-left u-medium-left g-icon g-icon--only g-icon--" + e.icon + e.iconSize
            })), a.default.createElement("div", {
                className: "l-col l-col-6"
            }, a.default.createElement("p", {
                className: "h5 u-spacing-top-l"
            }, e.productName), e.vas && e.vas.slogan && a.default.createElement("p", {
                className: "u-margin",
                dangerouslySetInnerHTML: {
                    __html: e.vas.slogan
                }
            })), a.default.createElement("div", {
                className: "l-col l-col-4"
            }, e.vas && a.default.createElement(n.RwdPriceBox, {
                prices: (0, c.transformPriceInfo)(e.vas.monthlyPrices, e.net),
                oneTimePrice: (0, c.transformOneTimePriceInfo)(e.vas.firstBillPrice, e.net),
                checkoutPrice: (0, c.transformOneTimePriceInfo)(e.vas.checkoutPrice, e.net)
            }))))
        },
        m = function(e) {
            return a.default.createElement(l.ResponsiveVisibility, {
                desktop: !1,
                mobile: !0
            }, a.default.createElement("div", {
                className: "l-full-row"
            }, a.default.createElement("div", {
                className: "l-col l-col-5"
            }, a.default.createElement("span", {
                className: "g-icon g-icon--only g-icon--" + e.icon + e.iconSize
            })), a.default.createElement("div", {
                className: "l-col l-col-7"
            }, e.vas && a.default.createElement(n.RwdPriceBox, {
                prices: (0, c.transformPriceInfo)(e.vas.monthlyPrices, e.net),
                oneTimePrice: (0, c.transformOneTimePriceInfo)(e.vas.firstBillPrice, e.net),
                checkoutPrice: (0, c.transformOneTimePriceInfo)(e.vas.checkoutPrice, e.net)
            })), a.default.createElement("div", {
                className: "l-col l-col-12"
            }, a.default.createElement("p", {
                className: "h5 u-spacing-top-m"
            }, e.productName), e.vas && e.vas.slogan && a.default.createElement("p", {
                className: "u-margin",
                dangerouslySetInnerHTML: {
                    __html: e.vas.slogan
                }
            }))))
        },
        d = o;
    e.default = d
});
//# sourceMappingURL=FixDetailsModal.js.map