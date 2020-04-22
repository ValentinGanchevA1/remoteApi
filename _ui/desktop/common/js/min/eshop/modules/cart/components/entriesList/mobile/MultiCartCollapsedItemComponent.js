define(["exports", "react"], function(e, l) {
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
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    className: "l-full-row"
                }, l.default.createElement("div", {
                    className: "l-page-row"
                }, l.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, l.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }))))
            }
        }]), r
    }((l = babelHelpers.interopRequireWildcard(l)).Component);
    e.default = t
});
//# sourceMappingURL=MultiCartCollapsedItemComponent.js.map