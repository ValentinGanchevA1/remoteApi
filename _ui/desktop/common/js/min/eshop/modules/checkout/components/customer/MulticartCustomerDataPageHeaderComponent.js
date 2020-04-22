define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/selectors", "eshop/modules/auth/components/LoggedCustomerBarComponent", "../../../core/components/ui/Switch", "../../../cart/selectors", "../../../cart/actions/cart"], function(e, o, t, s, r, l, n, c, i, a) {
    "use strict";

    function u(s) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartCustomerDataPageHeader = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c);
    var p = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                s.default.pushPageCategoryDimension("TelefonyBezUmowy")
            }
        }, {
            key: "handleSwitchEditIdNumberMode",
            value: function(e) {
                e.preventDefault(), this.props.switchEditIdNumberMode()
            }
        }, {
            key: "render",
            value: function() {
                var e = this,
                    t = (n.default, this.props.channels, this.props.descriptions.netSwitchValue || "Opłaty netto"),
                    r = this.props.descriptions.grossSwitchValue || "Opłaty brutto",
                    s = this.props.showNetSwitch ? "10" : "12";
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "l-col l-col-".concat(s, " l-col-small-12")
                }, o.default.createElement("h2", {
                    className: "h1",
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.title
                    }
                })), this.props.showNetSwitch && o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2"
                }, o.default.createElement(c.default, {
                    id: "switch-net",
                    labelLeft: t,
                    labelRight: r,
                    checked: this.props.showNetPrices,
                    onSwitchLeft: function() {
                        return e.props.setPriceIsNet(!0)
                    },
                    onSwitchRight: function() {
                        return e.props.setPriceIsNet(!1)
                    },
                    className: "u-font-small u-right"
                })))
            }
        }]), r
    }(o.Component);
    e.MulticartCustomerDataPageHeader = p;
    var d = (0, t.connect)(function(e) {
        return {
            isDisabledIdNumber: (0, l.isDisabledIdNumber)(e),
            showNetPrices: (0, i.getPriceIsNet)(e)
        }
    }, function(t) {
        return {
            switchEditIdNumberMode: function() {
                return t((0, r.switchEditIdNumberMode)())
            },
            setPriceIsNet: function(e) {
                return t((0, a.setPriceIsNet)(e))
            }
        }
    })(p);
    e.default = d
});
//# sourceMappingURL=MulticartCustomerDataPageHeaderComponent.js.map