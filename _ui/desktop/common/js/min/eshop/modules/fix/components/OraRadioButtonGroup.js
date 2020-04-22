define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents"], function(e, n, t, a) {
    "use strict";

    function o(n) {
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
    }), e.default = void 0;
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "handleChange",
            value: function(e) {
                this.props.onChange(e)
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, n.default.createElement(a.OraInput, {
                    type: "radio",
                    name: this.props.name,
                    checked: this.props.selectedValue === this.props.value,
                    value: this.props.value,
                    onChange: this.props.onValueChange.bind(this)
                }), n.default.createElement("span", {
                    className: "o-ci"
                }), n.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.text))
            }
        }]), r
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.default = r
});
//# sourceMappingURL=OraRadioButtonGroup.js.map