define(["exports", "react", "./MultiCartItemAttributeComponent"], function(e, s, t) {
    "use strict";

    function i(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = i(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: this.props.className
                }, this.props.price ? this.props.title.replace("%1", this.getPartsOfPrice(this.props.price.price).join(",") + " " + this.props.price.currency) : this.props.title)
            }
        }]), r
    }((t = babelHelpers.interopRequireDefault(t)).default);
    e.default = r
});
//# sourceMappingURL=MultiCartItemDetailMobileComponent.js.map