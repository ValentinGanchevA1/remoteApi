define(["exports", "react"], function(t, e) {
    "use strict";

    function i(n) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(n);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (t) {
                        return
                    }
                }()) {
                var o = babelHelpers.getPrototypeOf(this).constructor;
                t = Reflect.construct(e, arguments, o)
            } else t = e.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, e = babelHelpers.interopRequireWildcard(e), window.validationComponents = window.validationComponents || {}, window.validationComponents.list = window.validationComponents.list || [];
    var o = function(t) {
        babelHelpers.inherits(n, t);
        var o = i(n);

        function n(t) {
            var e;
            return babelHelpers.classCallCheck(this, n), (e = o.call(this, t)).state = {
                no: 0
            }, e.scrollToValidationComponent = e.scrollToValidationComponent.bind(babelHelpers.assertThisInitialized(e)), e
        }
        return babelHelpers.createClass(n, [{
            key: "componentDidMount",
            value: function() {
                validationComponents.counter ? window.validationComponents.counter++ : window.validationComponents.counter = 1, this.setState({
                    no: window.validationComponents.counter - 1
                }), this.setInList("registered")
            }
        }, {
            key: "setInList",
            value: function(t) {
                window.validationComponents.list[this.state.no] = t
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.setInList("ready")
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.setInList("validated");
                var t = this;
                setTimeout(function() {
                    t.scrollToValidationComponent()
                }, 450)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.validationComponents.list[this.state.no] = "removed"
            }
        }, {
            key: "areAllElementsValidated",
            value: function() {
                return window.validationComponents.list.filter(function(t) {
                    return "validated" == t || "removed" == t
                }).length == window.validationComponents.list.length
            }
        }, {
            key: "scrollToValidationComponent",
            value: function() {
                if ((this.props.errorList && this.props.errorList.length && this.props.errorList[0].afterValidation || this.props.consentsErrorList && this.props.consentsErrorList.length && this.props.consentsErrorList[0].afterValidation) && this.areAllElementsValidated()) {
                    var t = this.getFirstValidationErrorOffset();
                    t && $("html, body").animate({
                        scrollTop: t
                    }, "50")
                }
            }
        }, {
            key: "calculateAdditionalScrollOffset",
            value: function(t) {
                var e = $("#" + $(t).data("scroll-offset-calculate-to")),
                    o = $("#" + $(t).data("scroll-offset-calculate-from"));
                return $(e).offset() && $(o).offset() ? $(e).offset().top - $(o).offset().top : 0
            }
        }, {
            key: "getFirstValidationErrorOffset",
            value: function() {
                var n, i = 9999999999,
                    r = 9999999999;
                $(".opl-msg--error-anchor").each(function() {
                    var t = this,
                        e = $(t).offset().top,
                        o = $(t).offset().left;
                    if ($(t).hasClass("opl-msg-scrollToParent")) e = $(t).parent().offset().top - 100, o = $(t).parent().offset().left;
                    $(this).parent().find("input").length && (t = $(this).parent().find("input"), e = $(t).offset().top), e < i && t && o < r && (r = o, n = t), i = e < i ? e : i
                }), n && (i += $(n).data("scroll-offset"), $(n).data("scroll-offset-calculate-from") && $(n).data("scroll-offset-calculate-to") && (i += this.calculateAdditionalScrollOffset(n)));
                var t = $(".opl-header__main").outerHeight() || $(".opl-navBar").outerHeight() || 100;
                return (i = parseInt(i - parseInt(t))) - 80
            }
        }]), n
    }(e.Component);
    t.default = o
});
//# sourceMappingURL=ScrollableComponent.js.map