define(["exports", "react", "./OfferDeviceFilterComponent", "./view/OfferDeviceFilterView"], function(e, n, l, i) {
    "use strict";

    function o(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return n.default.createElement(l.default, {
                    descriptions: this.props.descriptions,
                    deviceInstalmentsConfiguration: this.props.deviceInstalmentsConfiguration,
                    channels: this.props.channels
                }, n.default.createElement(i.default, {
                    key: "offv"
                }))
            }
        }]), r
    }(n.default.Component);
    (e.default = t).defaultProps = {
        descriptions: {
            detailsPopupHeader: "Szczegóły oferty",
            detailLabelText: "Szczegóły"
        }
    }
});
//# sourceMappingURL=OfferDeviceFilterDesktopComponent.js.map