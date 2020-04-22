define(["exports", "react", "react-redux"], function(e, l, t) {
    "use strict";

    function a(l) {
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
    var r = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "render",
                value: function() {
                    return l.default.createElement("div", {
                        "data-js-module": "core/modules/loader"
                    }, this.props.isShow && l.default.createElement("div", {
                        className: "opl-loader opl-body-loader",
                        style: {
                            display: "block",
                            opacity: 1
                        }
                    }, l.default.createElement("div", {
                        className: "opl-loader__cover opl-loader__cover-opacity-70 g-black1-bg"
                    }), l.default.createElement("div", {
                        className: "opl-loader__spinner"
                    }, l.default.createElement("div", {
                        className: "opl-loader__animation-element-1"
                    }, l.default.createElement("div", {
                        className: "opl-loader__animation-element-2"
                    })))))
                }
            }]), r
        }((l = babelHelpers.interopRequireWildcard(l)).Component),
        n = (0, t.connect)(function() {
            return {}
        }, function() {
            return {}
        })(r);
    e.default = n
});
//# sourceMappingURL=OraFullPageLoaderComponent.js.map