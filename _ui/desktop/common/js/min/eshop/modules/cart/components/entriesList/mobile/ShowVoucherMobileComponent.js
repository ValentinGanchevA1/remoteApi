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
    }), e.default = e.ShowVoucherMobileComponent = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);
    var a = function(e) {
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
                    className: "u-padding-left u-font-bold g-black1-c"
                }, this.props.voucherName), o.default.createElement("br", null), this.props.removable && o.default.createElement("a", {
                    href: "#",
                    onClick: this.removeVoucher.bind(this),
                    className: "u-padding-left g-black1-c"
                }, "Usuń"))
            }
        }]), r
    }(o.Component);
    (e.ShowVoucherMobileComponent = a).propTypes = {
        removable: t.default.bool,
        voucherName: t.default.string,
        voucherSubType: t.default.oneOf(Object.keys(l.default))
    }, a.defaultProps = {
        removable: !0,
        voucherName: ""
    };
    var c = (0, r.connect)(null, function(o) {
        return {
            removeVoucher: function(e, t, r) {
                return o((0, n.removeVoucher)(e, t, r))
            },
            postLowerInstallments: function(e, t, r) {
                return o((0, s.postLowerInstallments)(e, t, r))
            }
        }
    })(a);
    e.default = c
});
//# sourceMappingURL=ShowVoucherMobileComponent.js.map