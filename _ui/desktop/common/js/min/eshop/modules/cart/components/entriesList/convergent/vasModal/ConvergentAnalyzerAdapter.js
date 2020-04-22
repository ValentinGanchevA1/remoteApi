define(["exports", "react", "prop-types", "../../../../analyzer/CartInfoUtils", "./AnalyzerAdapter"], function(e, n, t, s, i) {
    "use strict";

    function a(o) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    var r = function(e) {
        babelHelpers.inherits(o, e);
        var r = a(o);

        function o(e) {
            var t;
            return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).getCartProducts = t.getCartProducts.bind(babelHelpers.assertThisInitialized(t)), t.getPresentableProducts = t.getPresentableProducts.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(o, [{
            key: "removeButtonClicked",
            value: function(e, t) {
                this.convergentAdapter && this.convergentAdapter.onRemove && this.convergentAdapter.onRemove(e, t)
            }
        }, {
            key: "getCartProducts",
            value: function() {
                var t = {};
                return this.props.entry.entries.forEach(function(e) {
                    t[e.propositionId] || (t[e.propositionId] = []), t[e.propositionId] = t[e.propositionId].concat((0, s.getCartProductsFromEntry)(e)), t[e.propositionId] = t[e.propositionId].concat(e.previouslySelectedInvisible)
                }), t
            }
        }, {
            key: "getPresentableProducts",
            value: function() {
                var t = {};
                return this.props.configurables.forEach(function(e) {
                    t[e.propositionId] = (0, s.getPresentableProductsFromConfigurables)(e)
                }), t
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.getCartProducts(),
                    r = this.getPresentableProducts(),
                    o = Object.assign([], this.props.configurables);
                return this.props.customRules && 0 < this.props.customRules.length && o.filter(function(e) {
                    return "FIX" === e.factoryName && !!e.relations
                }).forEach(function(e) {
                    e.relations = e.relations.concat(t.props.customRules)
                }), n.default.createElement(i.default, {
                    entry: this.props.entry,
                    configurables: o,
                    cartProducts: e,
                    presentableProducts: r,
                    children: this.props.children,
                    unselectable: this.props.unselectable,
                    updateCartProducts: this.props.updateCartProducts,
                    singlePropositionId: this.props.singlePropositionId,
                    ref: function(e) {
                        t.convergentAdapter = e
                    },
                    triggerCartRecalculation: this.props.triggerCartRecalculation
                })
            }
        }]), o
    }(n.Component);
    babelHelpers.defineProperty(r, "propTypes", {
        entry: t.default.object.isRequired,
        configurables: t.default.array.isRequired,
        updateCartProducts: t.default.func
    }), babelHelpers.defineProperty(r, "defaultProps", {
        unselectable: !0
    });
    var o = r;
    e.default = o
});
//# sourceMappingURL=ConvergentAnalyzerAdapter.js.map