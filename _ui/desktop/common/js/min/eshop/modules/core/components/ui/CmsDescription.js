define(["exports", "react", "prop-types"], function(e, n, t) {
    "use strict";

    function s(n) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = s(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                if (!this.props.description) return null;
                var r = this.props.description;
                return this.props.params && this.props.params.map(function(e, t) {
                    r = r.replace(new RegExp("\\{" + t + "\\}", "g"), e)
                }), n.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: r
                    }
                })
            }
        }]), r
    }(n.Component);
    r.propTypes = {
        description: t.default.string.isRequired,
        params: t.default.arrayOf(t.default.string)
    };
    var a = r;
    e.default = a
});
//# sourceMappingURL=CmsDescription.js.map