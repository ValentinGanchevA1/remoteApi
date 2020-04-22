define(["exports", "react", "eshop/modules/checkout/components/representative/Representative"], function(e, o, i) {
    "use strict";

    function t(n) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), i = babelHelpers.interopRequireDefault(i);
    var r = function(e) {
        babelHelpers.inherits(n, e);
        var r = t(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).removeFactory = t.removeFactory.bind(babelHelpers.assertThisInitialized(t)), t.ordinals = ["Pierwszy", "Drugi", "Trzeci", "Czwarty", "Piąty", "Szósty", "Siódmy", "Ósmy", "Dziewiąty", "Dziesiąty"], t
        }
        return babelHelpers.createClass(n, [{
            key: "removeFactory",
            value: function() {
                if (this.props.minCount && this.props.data.length > this.props.minCount) return this.props.remove
            }
        }, {
            key: "getLabel",
            value: function(e) {
                if (1 < this.props.data.length) {
                    var t = "";
                    return "WR" == this.props.representationMode && (t = "reprezentant"), "WP" == this.props.representationMode && (t = "pełnomocnik"), this.ordinals[e] + " " + t
                }
                return null
            }
        }, {
            key: "render",
            value: function() {
                var r = this;
                return o.default.createElement("div", null, this.props.data.map(function(e, t) {
                    return o.default.createElement(i.default, babelHelpers.extends({}, r.props, e, {
                        key: t,
                        index: t,
                        onChange: r.props.onChange,
                        remove: r.removeFactory(),
                        label: r.getLabel(t)
                    }))
                }))
            }
        }]), n
    }(o.Component);
    e.default = r
});
//# sourceMappingURL=Representatives.js.map