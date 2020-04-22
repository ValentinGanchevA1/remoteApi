define(["exports", "react", "jquery", "lodash", "eshop/modules/checkout/selectors", "eshop/modules/checkout/utils/utils", "eshop/modules/checkout/components/ScrollableComponent"], function(e, s, r, l, t, n, o) {
    "use strict";

    function a(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), r = babelHelpers.interopRequireDefault(r);
    var c = function(e) {
        babelHelpers.inherits(o, e);
        var t = a(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(o.prototype), "componentDidMount", this).call(this)
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(o.prototype), "componentWillUpdate", this).call(this), (0, r.default)("#" + this.getParentSectionId()).removeClass("hasError")
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(o.prototype), "componentDidUpdate", this).call(this)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(o.prototype), "componentWillUnmount", this).call(this)
            }
        }, {
            key: "getParentSectionId",
            value: function() {
                var e = (0, r.default)(this.ref).closest(".opl-agreements__group");
                return e ? (0, r.default)(e).attr("id") : ""
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this,
                    o = this.props.consentsErrorMsg || "Dokonaj wyboru aby przejść dalej.",
                    r = this.props.consentsErrorList;
                this.props.correspondingBa ? (e = (0, l.cloneDeep)(this.props.consent)).bundleAssignments = [this.props.correspondingBa] : e = this.props.consent;
                return r && this.props.isMandatory && !(0, n.validateConsent)(e, this.props.state) ? s.default.createElement("div", babelHelpers.defineProperty({
                    ref: function(e) {
                        return t.ref = e
                    },
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c u-padding-top-s " + this.props.className + " VALIDATION_COMPONENT" + this.state.no
                }, "ref", "errorDiv"), s.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error opl-msg--error-anchor ",
                    "data-scroll-offset": this.props.scrollOffset,
                    "data-scroll-offset-calculate-from": this.props.scrollOffsetCalculateFrom,
                    "data-scroll-offset-calculate-to": this.props.scrollOffsetCalculateTo
                }, o)) : s.default.createElement("div", {
                    ref: function(e) {
                        return t.ref = e
                    },
                    className: " VALIDATION_COMPONENT" + this.state.no
                })
            }
        }]), o
    }((o = babelHelpers.interopRequireDefault(o)).default);
    (e.default = c).defaultProps = {
        show: !0,
        className: "",
        scrollOffset: 0
    }
});
//# sourceMappingURL=MulticartConsentValidationComponent.js.map