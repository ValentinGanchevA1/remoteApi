define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, o, r) {
    "use strict";

    function s(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = s(n);

        function n(e) {
            return babelHelpers.classCallCheck(this, n), t.call(this, e)
        }
        return babelHelpers.createClass(n, [{
            key: "defaultMode",
            value: function() {
                return this.props.defaultMode && -1 < this.props.options.map(function(e) {
                    return e.value
                }).indexOf(this.props.defaultMode) ? this.props.defaultMode : this.props.options[0].value
            }
        }, {
            key: "getConfigForMode",
            value: function(t) {
                return this.props.modesConfig.filter(function(e) {
                    return e.mode == t
                })[0]
            }
        }, {
            key: "reset",
            value: function() {
                var e = this.defaultMode();
                this.props.onChange(e, this.getConfigForMode(e))
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.reset()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                -1 == this.props.options.map(function(e) {
                    return e.value
                }).indexOf(this.props.selected) && this.reset()
            }
        }, {
            key: "getPropsForSelect",
            value: function(e) {
                return {
                    name: e,
                    id: e,
                    onChange: this.onSelectChange.bind(this),
                    withEmptyOption: !1,
                    label: "Forma reprezentacji",
                    disabled: !1,
                    className: "u-w-100",
                    value: this.props.selected
                }
            }
        }, {
            key: "onSelectChange",
            value: function(e) {
                this.props.onChange(e.value, this.getConfigForMode(e.value))
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement(r.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect("representationMode"), {
                    options: this.props.options
                }))
            }
        }]), n
    }((o = babelHelpers.interopRequireWildcard(o)).Component);
    e.default = t
});
//# sourceMappingURL=RepresentationMode.js.map