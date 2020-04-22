define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/OraSwitcherSelect", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/selectors"], function(e, r, t, s, l, n) {
    "use strict";

    function a(r) {
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
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), s = babelHelpers.interopRequireDefault(s);
    var o = function(e) {
            babelHelpers.inherits(l, e);
            var t = a(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
                key: "onChange",
                value: function(e) {
                    this.props.onChange(e.value)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.isB2B && !this.props.isCartMobile && "WWW" === this.props.channels.sales ? null : r.default.createElement("div", {
                        className: "l-full-row g-gray1-bg"
                    }, r.default.createElement("div", {
                        className: "l-page-row u-padding-l"
                    }, r.default.createElement("div", {
                        className: "l-row "
                    }, r.default.createElement("div", {
                        className: "l-col l-col-12  u-padding-top-s u-padding-m"
                    }, r.default.createElement(s.default, {
                        options: this.props.options,
                        id: "offerTypeFilter",
                        selected: this.props.selectedOfferType,
                        onChange: this.onChange.bind(this),
                        className: " u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                        selectClassName: "opl-input--size-m",
                        singleOptionClassName: "u-small-no-padding-left"
                    })))))
                }
            }]), l
        }(r.default.PureComponent),
        u = (0, t.connect)(function(e) {
            return {
                isCartMobile: (0, n.isCartMobile)(e),
                isB2B: "B2B" === (0, l.getMarketContext)(e)
            }
        }, function() {
            return {}
        })(o);
    e.default = u
});
//# sourceMappingURL=ProductSwitcherHeaderView.js.map