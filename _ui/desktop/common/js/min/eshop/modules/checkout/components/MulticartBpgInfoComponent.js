define(["exports", "react", "react-redux", "../selectors"], function(e, n, t, r) {
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
    }), e.default = void 0;
    var s = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return "bpg" === this.props.businessDataSource && n.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--info u-padding-all u-margin-top-l"
                }, n.default.createElement("p", {
                    className: "u-padding-left u-font-bold g-black1-c u-inline-block"
                }, this.props.descriptions.text || this.props.defaultText))
            }
        }]), r
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    s.defaultProps = {
        defaultText: "Twoje dane zostały pobrane z bazy. Sprawdź ich poprawność."
    };
    var a = (0, t.connect)(function(e) {
        return {
            businessDataSource: (0, r.getBusinessDataSource)(e)
        }
    }, function() {
        return {}
    })(s);
    e.default = a
});
//# sourceMappingURL=MulticartBpgInfoComponent.js.map