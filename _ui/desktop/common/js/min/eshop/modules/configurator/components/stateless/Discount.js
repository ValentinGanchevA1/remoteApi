define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/TooltipInitializer"], function(e, o, t, l, n) {
    "use strict";

    function i(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n);
    var r = function(e) {
        babelHelpers.inherits(l, e);
        var t = i(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidUpdate",
            value: function() {
                this.tooltipInitializer.componentDidMountHandler()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.tooltipInitializer.componentWillUnmountHandler()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.tooltipInitializer.componentDidMountHandler()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.tooltipInitializer.componentWillUnmountHandler()
            }
        }, {
            key: "render",
            value: function() {
                this.tooltipInitializer = new n.default(this.props.value);
                var e, t, l, i = this.tooltipInitializer.render();
                return this.props.fixer ? (e = i, t = this.props.fixer, l = this.props.hide, o.default.createElement("div", {
                    className: "u-small-no-spacing-bottom u-medium-no-spacing-bottom u-spacing-l"
                }, o.default.createElement("div", {
                    className: "u-animate-height " + t + (l ? " u-hide" : "")
                }, o.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, o.default.createElement("div", {
                    className: "u-medium-table u-medium-spacing-l"
                }, e))))) : function(e, t, l, i, n) {
                    e.props.dangerouslySetInnerHTML.__html.indexOf("<p");
                    return t ? o.default.createElement("div", {
                        className: "u-hide " + n
                    }, e) : o.default.createElement("div", null, o.default.createElement("div", {
                        className: (i ? " " : l ? "u-hide u-small-block u-padding-m " : "u-small-hide u-block ") + n
                    }, e))
                }(i, this.props.hide, this.props.showOnMobile, this.props.showAll, this.props.simpleWrapperClassName)
            }
        }]), l
    }(o.default.Component);
    (e.default = r).defaultProps = {
        showOnMobile: !1,
        showAll: !1,
        simpleWrapperClassName: ""
    }
});
//# sourceMappingURL=Discount.js.map