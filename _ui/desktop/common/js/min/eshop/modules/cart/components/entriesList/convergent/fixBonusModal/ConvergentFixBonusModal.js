define(["exports", "react", "../vasModal/ConvergentAnalyzerAdapter", "../../../../analyzer/DeviceUtils", "../../fix/buymore/ConvergentSecondaryChoiceBonusModal"], function(e, s, n, i, p) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

    function o(o) {
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
    }), e.ConvergentFixBonusModal = void 0, s = babelHelpers.interopRequireWildcard(s), n = babelHelpers.interopRequireDefault(n), p = babelHelpers.interopRequireDefault(p);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var t = this,
                    e = JSON.parse(JSON.stringify(this.props.convergentConfigurables.configurables)),
                    r = e.find(function(e) {
                        return t.props.isSecondaryConfigurable(e)
                    }),
                    o = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? c(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, this.props.bonus, {
                        propositionId: r.propositionId
                    });
                return s.default.createElement("div", null, s.default.createElement(n.default, {
                    configurables: e,
                    entry: this.props.entry,
                    updateCartProducts: this.props.updateCartProducts,
                    customRules: this.props.customRules || (0, i.createCustomRules)(this.props.services, this.props.migrated),
                    ref: function(e) {
                        t.adapter = e
                    }
                }, s.default.createElement(p.default, {
                    uid: this.props.uid,
                    label: this.props.label,
                    open: this.props.fixBonusModalVisible,
                    services: this.props.services,
                    bonus: o,
                    onClose: this.props.onClose,
                    descriptions: this.props.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    factory: r.factoryName,
                    configurables: e,
                    migratedProducts: this.props.migratedProducts
                })))
            }
        }]), r
    }(s.Component);
    e.ConvergentFixBonusModal = t
});
//# sourceMappingURL=ConvergentFixBonusModal.js.map