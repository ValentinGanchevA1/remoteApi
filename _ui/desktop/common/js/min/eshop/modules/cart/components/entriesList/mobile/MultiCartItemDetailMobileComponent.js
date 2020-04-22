define(["exports", "react", "./MultiCartItemAttributeComponent"], function(e, l, t) {
    "use strict";

    function n(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "renderTitle",
            value: function(e, t) {
                return [l.default.createElement("div", {
                    key: "pricePresentation"
                }, e.replace("%1", this.getPartsOfPrice(t.price).join(",") + " " + t.currency)), l.default.createElement("del", {
                    key: "alternatePrice",
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, t.crossedOut)]
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: this.props.className,
                    key: "mobileItem"
                }, this.props.title ? this.props.price ? this.renderTitle(this.props.title, this.props.price) : this.props.title : this.props.children)
            }
        }]), r
    }((t = babelHelpers.interopRequireDefault(t)).default);
    e.default = r
});
//# sourceMappingURL=MultiCartItemDetailMobileComponent.js.map