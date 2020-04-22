define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, s, o) {
    "use strict";

    function n(s) {
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
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getMessageProps",
            value: function() {
                return this.props.showErrors && this.props.errors && 0 < this.props.errors.length ? {
                    className: "u-margin-top-s",
                    type: this.props.errors[0].level,
                    text: this.props.errors[0].message
                } : {
                    className: "u-margin-top-s",
                    type: "info"
                }
            }
        }, {
            key: "render",
            value: function() {
                return s.default.createElement("div", {
                    className: this.props.className
                }, this.props.children, s.default.createElement(o.OraMessage, this.getMessageProps()))
            }
        }]), r
    }((s = babelHelpers.interopRequireWildcard(s)).Component);
    t.defaultProps = {
        showErrors: !0
    };
    var r = t;
    e.default = r
});
//# sourceMappingURL=ErrorRow.js.map