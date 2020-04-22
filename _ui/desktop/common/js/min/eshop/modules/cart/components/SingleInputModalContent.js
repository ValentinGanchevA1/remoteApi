define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../core/components/hoc/LabeledInput"], function(e, n, t, o, a) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = s(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "onButtonClick",
            value: function(e) {
                this.props.onButtonClick(e)
            }
        }, {
            key: "setInputValue",
            value: function(e) {
                var t = e.id,
                    r = e.name,
                    n = e.value;
                this.props.setInputValue({
                    id: t,
                    name: r,
                    value: n
                })
            }
        }, {
            key: "getPropsForInput",
            value: function() {
                return {
                    id: this.props.id,
                    name: this.props.id,
                    type: "text",
                    labelType: "floating",
                    label: this.props.inputPlaceHolder,
                    mask: this.props.mask,
                    placeholder: this.props.placeholder,
                    value: this.props.inputValue || "",
                    errors: this.props.error && 0 < Object.keys(this.props.error).length ? [this.props.error] : [],
                    autoComplete: !1,
                    errorWrapperClassName: "u-spacing-l",
                    onChange: this.setInputValue.bind(this),
                    valid: !(this.props.error && 0 < Object.keys(this.props.error).length) && void 0,
                    validateEmpty: !1,
                    showMaskOnHover: !0
                }
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement("h1", {
                    className: "u-font-standard u-no-margin u-padding-l"
                }, n.default.createElement("span", {
                    className: "h3"
                }, this.props.modalHeader)), n.default.createElement("p", {
                    className: "u-padding-l"
                }, this.props.modalMainText), n.default.createElement(a.default, this.getPropsForInput()), n.default.createElement(o.OraButton, {
                    type: "primary",
                    size: "medium",
                    onClick: this.onButtonClick.bind(this),
                    className: "u-w-100"
                }, this.props.modalBtnText))
            }
        }]), r
    }(n.Component);
    e.default = r
});
//# sourceMappingURL=SingleInputModalContent.js.map