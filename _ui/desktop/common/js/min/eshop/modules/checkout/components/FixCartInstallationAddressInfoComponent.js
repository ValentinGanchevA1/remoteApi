define(["exports", "react"], function(e, a) {
    "use strict";

    function l(a) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return this.props.installationAddress && a.default.createElement("div", {
                    className: "l-page-row"
                }, a.default.createElement("div", {
                    className: "u-padding-top-l"
                }, a.default.createElement("div", {
                    className: "opl-msg opl-msg--valid h3 opl-msg--context",
                    "aria-hidden": "true"
                }, a.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.descriptions.text || this.props.defaultText, a.default.createElement("span", {
                    className: "u-small-no-padding u-padding-left-s u-font-bold u-xsmall-block g-brand2-c"
                }, this.props.installationAddress)))))
            }
        }]), r
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    (e.default = t).defaultProps = {
        defaultText: "Oferta dostępna pod Twoim adresem:"
    }
});
//# sourceMappingURL=FixCartInstallationAddressInfoComponent.js.map