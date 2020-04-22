define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/auth/selectors/authorization", "eshop/modules/auth/actions/api", "eshop/modules/auth/actions/authorization"], function(e, l, t, a, o, n, r) {
    "use strict";

    function s(l) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a);
    var i = function(e) {
            babelHelpers.inherits(o, e);
            var t = s(o);

            function o() {
                return babelHelpers.classCallCheck(this, o), t.apply(this, arguments)
            }
            return babelHelpers.createClass(o, [{
                key: "onSubmit",
                value: function(e) {
                    e.preventDefault(), this.props.doLogOut()
                }
            }, {
                key: "onClose",
                value: function() {
                    this.props.hideLogoutConfirmationModal()
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
                key: "render",
                value: function() {
                    return l.default.createElement(a.default, babelHelpers.extends({}, this.getModalProps(), {
                        showClose: !0,
                        open: this.props.showLogoutConfirmationModal,
                        onClose: this.onClose.bind(this),
                        id: "logout-confirmation-modal"
                    }), l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, l.default.createElement("h2", null, this.props.descriptions.logoutConfirmationTitle || "Uwaga"))), l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.props.descriptions.logoutConfirmationBody || "Czy na pewno chcesz się wylogować? To spowoduje usunięcie wszystkich produktów i usług z koszyka.")), l.default.createElement("form", {
                        id: "msisdnForm",
                        onSubmit: this.onSubmit.bind(this)
                    }, l.default.createElement("div", {
                        className: "l-row "
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12 "
                    }, l.default.createElement("div", {
                        className: "o-separator o-separator--s u-spacing-top-l"
                    }))), l.default.createElement("div", {
                        className: "l-row "
                    }, l.default.createElement("div", {
                        className: "l-col l-col-4 l-col-small-12"
                    }), l.default.createElement("div", {
                        className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                    }, l.default.createElement("button", {
                        id: "doLogout",
                        type: "submit",
                        className: "o-btn opl-btn u-w-100"
                    }, l.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, l.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), "Wyloguj")), l.default.createElement("div", {
                        className: "l-col l-col-4 l-col-small-12 u-padding-top-l"
                    }, l.default.createElement("button", {
                        id: "cancelLogout",
                        type: "button",
                        onClick: this.onClose.bind(this),
                        className: "o-btn opl-btn opl-btn--primary u-w-100"
                    }, "Anuluj")))))
                }
            }]), o
        }(l.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                showLogoutConfirmationModal: (0, o.getShowLogoutConfirmationModal)(e)
            }
        }, function(e) {
            return {
                hideLogoutConfirmationModal: function() {
                    return e((0, r.hideLogoutConfirmationModal)())
                },
                doLogOut: function() {
                    return e((0, n.doLogOut)())
                }
            }
        })(i);
    e.default = u
});
//# sourceMappingURL=LogoutConfirmationModal.js.map