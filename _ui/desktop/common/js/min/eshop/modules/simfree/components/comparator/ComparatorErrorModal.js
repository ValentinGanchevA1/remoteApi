define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors", "eshop/modules/core/components/ui/Modal"], function(e, o, r, t, a, l) {
    "use strict";

    function s(o) {
        return function() {
            var e, r = babelHelpers.getPrototypeOf(o);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(r, arguments, t)
            } else e = r.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), l = babelHelpers.interopRequireDefault(l);
    var n = function(e) {
            babelHelpers.inherits(t, e);
            var r = s(t);

            function t(e) {
                return babelHelpers.classCallCheck(this, t), r.call(this, e)
            }
            return babelHelpers.createClass(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return o.default.createElement(l.default, {
                        id: "comparator-error-modal",
                        open: 0 < this.props.errorCode,
                        onClose: this.props.clearErrorCode,
                        showClose: !0,
                        escapeClose: !0,
                        clickClose: !0,
                        size: "medium"
                    }, 1 === this.props.errorCode && o.default.createElement("h5", {
                        className: "u-small-margin-right-m"
                    }, this.props.modalCategoryErrorMessage), 2 === this.props.errorCode && o.default.createElement("h5", {
                        className: "u-small-margin-right-m"
                    }, this.props.modalDevicesLimitErrorMessage), o.default.createElement("div", {
                        className: "u-padding-top-m"
                    }, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12  u-right u-text-right"
                    }, o.default.createElement("button", {
                        className: "opl-btn o-btn",
                        onClick: function() {
                            return e.props.clearDevicesList()
                        }
                    }, o.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, o.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), this.props.modalLeftButtonText), o.default.createElement("button", {
                        className: "opl-btn opl-btn--primary o-btn u-margin-left u-small-margin-top u-small-no-margin-l",
                        disabled: this.props.comparatorDevices.length < 2,
                        onClick: function() {
                            return e.props.redirectToComparator(e.props.comparatorPageUrl)
                        }
                    }, o.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, o.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), this.props.modalRightButtonText)))))
                }
            }]), t
        }(o.Component),
        c = (0, r.connect)(function(e) {
            return {
                comparatorDevices: (0, a.getComparatorDevices)(e),
                errorCode: (0, a.getErrorCode)(e)
            }
        }, function(r) {
            return {
                clearDevicesList: function() {
                    return r((0, t.clearDevicesList)())
                },
                redirectToComparator: function(e) {
                    return r((0, t.redirectToComparator)(e))
                },
                clearErrorCode: function() {
                    return r((0, t.clearErrorCode)())
                }
            }
        })(n);
    e.default = c
});
//# sourceMappingURL=ComparatorErrorModal.js.map