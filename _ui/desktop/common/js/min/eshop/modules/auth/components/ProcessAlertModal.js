define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/auth/actions/authorization", "eshop/modules/auth/selectors/authorization"], function(e, o, t, r, l, s) {
    "use strict";

    function n(o) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r);
    var a = function(e) {
            babelHelpers.inherits(l, e);
            var t = n(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "onSubmit",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "onClose",
                value: function() {
                    this.props.hideProcessAlertModal()
                }
            }, {
                key: "getModalProps",
                value: function() {
                    return {
                        size: "narrow",
                        escapeClose: !1,
                        clickClose: !1
                    }
                }
            }, {
                key: "getTitle",
                value: function() {
                    return this.props.showRetentionAlertModal && this.props.descriptions && this.props.descriptions.retentionAlertTitle || "Komunikat"
                }
            }, {
                key: "getInfo",
                value: function() {
                    return this.props.showRetentionAlertModal ? this.props.descriptions && this.props.descriptions.retentionAlertBody || "W koszyku znajduje się usługa utrzymania. Nie można zmienić konta bilingowego! " : "Nie można zmienić konta bilingowego dla tego procesu!"
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement(r.default, babelHelpers.extends({}, this.getModalProps(), {
                        showClose: !0,
                        open: this.props.showProcessAlertModal,
                        onClose: this.onClose.bind(this),
                        id: "process-alert-modal"
                    }), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, o.default.createElement("h2", null, this.getTitle()))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.getInfo())), o.default.createElement("form", {
                        id: "processAlertForm",
                        onSubmit: this.onSubmit.bind(this)
                    }, o.default.createElement("div", {
                        className: "l-row "
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12 "
                    }, o.default.createElement("div", {
                        className: "o-separator o-separator--s u-spacing-top-l"
                    }))), o.default.createElement("div", {
                        className: "l-row "
                    }, o.default.createElement("div", {
                        className: "l-col l-col-8 l-col-small-12"
                    }), o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                    }, o.default.createElement("button", {
                        id: "cancelLogout",
                        type: "button",
                        onClick: this.onClose.bind(this),
                        className: "o-btn opl-btn opl-btn--primary u-w-100"
                    }, this.props.descriptions.processAlertCancel || "Zamknij")))))
                }
            }]), l
        }(o.default.Component),
        i = (0, t.connect)(function(e) {
            return {
                showRetentionAlertModal: (0, s.getRetentionAlertModalVisibility)(e),
                showProcessAlertModal: (0, s.getRetentionAlertModalVisibility)(e)
            }
        }, function(e) {
            return {
                hideProcessAlertModal: function() {
                    return e((0, l.hideProcessAlertModal)())
                }
            }
        })(a);
    e.default = i
});
//# sourceMappingURL=ProcessAlertModal.js.map