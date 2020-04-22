define(["exports", "react", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/filters"], function(e, r, t, s, n, l) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c = function(e) {
            babelHelpers.inherits(s, e);
            var t = a(s);

            function s() {
                return babelHelpers.classCallCheck(this, s), t.apply(this, arguments)
            }
            return babelHelpers.createClass(s, [{
                key: "isNet",
                value: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.props.setPriceIsNet(!0)
                }
            }, {
                key: "isGross",
                value: function(e) {
                    e.preventDefault(), e.stopPropagation(), this.props.setPriceIsNet(!1)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.isB2B ? r.default.createElement("div", {
                        className: "opl-switch-btn u-right u-small-spacing-top-m"
                    }, r.default.createElement("input", {
                        className: "opl-switch-btn--left",
                        type: "radio",
                        id: "switch_left",
                        name: "switch",
                        value: "Opłaty netto",
                        checked: this.props.showNet,
                        onChange: function() {}
                    }), r.default.createElement("label", {
                        htmlFor: "switch_left"
                    }, r.default.createElement("span", {
                        className: "opl-switch-btn--text opl-switch-btn--text-l",
                        onClick: this.isNet.bind(this)
                    }, r.default.createElement("span", {
                        className: "u-vertical-middle"
                    }, "Opłaty netto"))), r.default.createElement("input", {
                        className: "opl-switch-btn--right",
                        type: "radio",
                        id: "switch_right",
                        name: "switch",
                        value: "Opłaty brutto",
                        checked: !this.props.showNet,
                        onChange: function() {}
                    }), r.default.createElement("label", {
                        htmlFor: "switch_right"
                    }, r.default.createElement("span", {
                        className: "opl-switch-btn--text opl-switch-btn--text-r",
                        onClick: this.isGross.bind(this)
                    }, r.default.createElement("span", {
                        className: "u-vertical-middle"
                    }, "Opłaty brutto"))), r.default.createElement("span", {
                        className: "opl-switch-btn--bg"
                    })) : null
                }
            }]), s
        }((r = babelHelpers.interopRequireDefault(r)).default.Component),
        i = (0, t.connect)(function(e) {
            return {
                showNet: (0, n.getPriceIsNet)(e),
                isB2B: "B2B" === (0, l.getMarketContext)(e)
            }
        }, function(t) {
            return {
                setPriceIsNet: function(e) {
                    return t((0, s.setPriceIsNet)(e))
                }
            }
        })(c);
    e.default = i
});
//# sourceMappingURL=MarketContextCheckboxView.js.map