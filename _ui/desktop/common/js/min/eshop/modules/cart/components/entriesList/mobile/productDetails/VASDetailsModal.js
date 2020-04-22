define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/RWDUtils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes", "eshop/utils/OnlineUtils"], function(e, r, t, a, l, n, s) {
    "use strict";

    function o(a) {
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
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), s = babelHelpers.interopRequireDefault(s);
    var c = function(e) {
        babelHelpers.inherits(l, e);
        var t = o(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "renderSimple",
            value: function() {
                var e = {
                    __html: this.props.details
                };
                return this.props.details && r.default.createElement("div", {
                    dangerouslySetInnerHTML: e
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.renderSimple();
                return r.default.createElement(a.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0
                }, r.default.createElement("div", null, r.default.createElement(i, {
                    icon: this.props.icon,
                    header: this.props.header,
                    productName: this.props.productName,
                    slogan: this.props.slogan,
                    prices: this.props.prices
                }), r.default.createElement("div", {
                    className: "l-full-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2 u-small-margin-top u-margin"
                }, r.default.createElement("div", {
                    className: "o-separator"
                }))), r.default.createElement("div", {
                    className: "l-full-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-10 l-col-medium-12 l-col-small-12 large-offset-by-2"
                }, e))))
            }
        }]), l
    }(r.Component);
    c.defaultProps = {
        id: "",
        details: "",
        slogan: "",
        header: "default: Szczegóły usługi"
    }, c.propTypes = {
        id: t.PropTypes.string,
        icon: t.PropTypes.string,
        details: t.PropTypes.string,
        slogan: t.PropTypes.string,
        productName: t.PropTypes.string,
        header: t.PropTypes.string,
        prices: t.PropTypes.arrayOf(t.PropTypes.object)
    };
    var i = function(e) {
            var t = e.icon ? e.icon : "funpack-2",
                l = " g-icon--l",
                a = e.prices.map(function(e) {
                    var t = s.default.formatPrice(e.price);
                    return {
                        integer: t.split(",")[0],
                        fraction: t.split(",")[1],
                        currency: e.currency,
                        start: e.monthFrom,
                        end: e.monthTo
                    }
                });
            return r.default.createElement("div", null, r.default.createElement("p", {
                className: "h3 u-spacing-l"
            }, e.header), r.default.createElement(u, {
                icon: t,
                iconSize: l,
                productName: e.productName,
                slogan: e.slogan,
                prices: a
            }), r.default.createElement(p, {
                icon: t,
                iconSize: l,
                productName: e.productName,
                slogan: e.slogan,
                prices: a
            }))
        },
        u = function(e) {
            return r.default.createElement(l.ResponsiveVisibility, {
                mobile: !1
            }, r.default.createElement("div", {
                className: "l-full-row"
            }, r.default.createElement("div", {
                className: "l-col l-col-2"
            }, r.default.createElement("span", {
                className: "u-padding-top-l u-padding-m u-large-left u-medium-left g-icon g-icon--only g-icon--" + e.icon + e.iconSize
            })), r.default.createElement("div", {
                className: "l-col l-col-6"
            }, r.default.createElement("p", {
                className: "h5 u-spacing-top-l"
            }, e.productName), e.slogan && r.default.createElement("p", {
                className: "u-margin",
                dangerouslySetInnerHTML: {
                    __html: e.slogan
                }
            })), r.default.createElement("div", {
                className: "l-col l-col-4"
            }, r.default.createElement(n.DesktopPriceBox, {
                prices: e.prices
            }))))
        },
        p = function(e) {
            return r.default.createElement(l.ResponsiveVisibility, {
                desktop: !1,
                mobile: !0
            }, r.default.createElement("div", {
                className: "l-full-row"
            }, r.default.createElement("div", {
                className: "l-col l-col-5"
            }, r.default.createElement("span", {
                className: "g-icon g-icon--only g-icon--" + e.icon + e.iconSize
            })), r.default.createElement("div", {
                className: "l-col l-col-7"
            }, r.default.createElement(n.MobilePriceBox, {
                prices: e.prices
            })), r.default.createElement("div", {
                className: "l-col l-col-12"
            }, r.default.createElement("p", {
                className: "h5 u-spacing-top-m"
            }, e.productName), e.slogan && r.default.createElement("p", {
                className: "u-margin",
                dangerouslySetInnerHTML: {
                    __html: e.slogan
                }
            }))))
        },
        d = c;
    e.default = d
});
//# sourceMappingURL=VASDetailsModal.js.map