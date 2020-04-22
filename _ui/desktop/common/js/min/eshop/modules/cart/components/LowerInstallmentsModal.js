define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources", "./SliderComponent", "../actions/cart"], function(e, o, t, r, n, s, l, i, a) {
    "use strict";

    function p(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i);
    var u = function(e) {
            babelHelpers.inherits(r, e);
            var t = p(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "renderInfo",
                value: function() {
                    return o.default.createElement("div", null, !!this.props.descriptions && this.props.descriptions.switchToNetModalMsg || "Aby obniżyć ratę zostaniesz przekierowany na zakładkę netto.")
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement(n.default, {
                        id: "LowerInstallmentsModal",
                        key: "LowerInstallmentsModal",
                        open: this.props.open,
                        onClose: this.props.onClose.bind(this, this.props.bundleNo),
                        size: "narrow",
                        showClose: !0
                    }, o.default.createElement(i.default, {
                        entry: this.props.entry,
                        bundleNo: this.props.bundleNo,
                        postLowerInstallments: this.props.postLowerInstallments,
                        showNetPrices: this.props.showNetPrices,
                        cartIsNet: this.props.cartIsNet,
                        descriptions: this.props.descriptions,
                        open: this.props.open,
                        key: "SLIDER"
                    }))
                }
            }]), r
        }(o.Component),
        c = (0, r.connect)(function(e) {
            return {
                open: (0, s.isLowerInstallmentsModalVisible)(e),
                bundleNo: (0, s.getLowerInstallmentsBundleNo)(e),
                entry: (0, s.getEntryForLowerInstallmentsModal)(e)
            }
        }, function(o) {
            return {
                onClose: function(e) {
                    return o((0, l.lowerInstallmentsModaClose)(e))
                },
                postLowerInstallments: function(e, t, r) {
                    return o((0, a.postLowerInstallments)(e, t, r))
                }
            }
        })(u);
    e.default = c
});
//# sourceMappingURL=LowerInstallmentsModal.js.map