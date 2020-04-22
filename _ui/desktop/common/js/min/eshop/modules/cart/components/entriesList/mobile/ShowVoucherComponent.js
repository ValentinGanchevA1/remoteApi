define(["exports", "react", "prop-types", "react-redux", "eshop/modules/cart/actions/cart", "../VoucherSubType", "../../../actions/cart"], function(e, o, t, r, n, l, s) {
    "use strict";

    function u(o) {
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
    }), e.default = e.ShowVoucherComponent = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);
    var c = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "removeVoucher",
            value: function(e) {
                e.preventDefault(), this.props.removeVoucher(this.props.entry.entryNo, this.props.entry.bundleNo, this.props.voucherSubType), this.props.lowerInstallmentsVisible && this.props.postLowerInstallments(this.props.entry.bundleNo, 0, "")
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--info u-padding-all u-margin-l"
                }, o.default.createElement("p", {
                    className: "u-padding-left u-font-bold g-black1-c u-inline-block"
                }, this.props.voucherName), o.default.createElement("a", {
                    href: "#",
                    onClick: this.removeVoucher.bind(this),
                    className: "u-right g-black1-c"
                }, "Usuń"))
            }
        }]), r
    }(o.Component);
    (e.ShowVoucherComponent = c).propTypes = {
        voucherName: t.default.string,
        voucherSubType: t.default.oneOf(Object.keys(l.default))
    };
    var a = (0, r.connect)(null, function(o) {
        return {
            removeVoucher: function(e, t, r) {
                return o((0, n.removeVoucher)(e, t, r))
            },
            postLowerInstallments: function(e, t, r) {
                return o((0, s.postLowerInstallments)(e, t, r))
            }
        }
    })(c);
    e.default = a
});
//# sourceMappingURL=ShowVoucherComponent.js.map