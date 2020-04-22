define(["exports", "react", "eshop/modules/core/utils/ui"], function(e, n, r) {
    "use strict";

    function l(n) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(o, e);
        var t = l(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.expanderPromise = (0, r.loadModule)(this.priceTooltip, {
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: ".o-tooltip__trigger",
                        contentSelector: ".o-tooltip__content",
                        triggerEvent: "mouseover",
                        maxWidth: "400"
                    }
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.stopModules(this.priceTooltip)
            }
        }, {
            key: "optionalSmallClass",
            value: function() {
                return this.props.small ? " g-icon--font" : ""
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return n.default.createElement("span", {
                    ref: function(e) {
                        return t.priceTooltip = e
                    }
                }, n.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s" + this.optionalSmallClass()
                }), n.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.children))
            }
        }]), o
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.default = t
});
//# sourceMappingURL=MultiCartItemTooltip.js.map