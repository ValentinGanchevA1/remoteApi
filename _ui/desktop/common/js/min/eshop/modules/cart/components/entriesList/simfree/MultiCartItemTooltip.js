define(["exports", "react", "eshop/modules/core/utils/ui"], function(e, r, n) {
    "use strict";

    function i(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
        var t = i(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.expanderPromise = (0, n.loadModule)(this.priceTooltip, {
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: ".o-tooltip__trigger",
                        contentSelector: ".o-tooltip__content",
                        triggerEvent: "mouseover"
                    }
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.stopModules(this.priceTooltip)
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return r.default.createElement("span", {
                    ref: function(e) {
                        return t.priceTooltip = e
                    }
                }, r.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s"
                }), r.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.children))
            }
        }]), o
    }((r = babelHelpers.interopRequireWildcard(r)).Component);
    e.default = t
});
//# sourceMappingURL=MultiCartItemTooltip.js.map