define(["exports", "react", "react-redux", "../../selectors", "../../actions/app", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../assistMode/OraCheckoutAssistModeConfirmationPopup"], function(e, n, t, o, l, s, a, r) {
    "use strict";

    function i(n) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), s = babelHelpers.interopRequireDefault(s), r = babelHelpers.interopRequireDefault(r);
    var c = function(e) {
            babelHelpers.inherits(o, e);
            var t = i(o);

            function o(e) {
                return babelHelpers.classCallCheck(this, o), t.call(this, e)
            }
            return babelHelpers.createClass(o, [{
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "checkOpenModal",
                value: function() {
                    return this.props.errors && 0 < this.props.errors.length || this.props.isEarlierInstallationConsentNotAcceptedModalVisible
                }
            }, {
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "onReject",
                value: function() {
                    this.props.isEarlierInstallationConsentNotAcceptedModalVisible ? this.props.closeEarlierInstallationConsentNotAcceptedModal() : this.props.dismiss()
                }
            }, {
                key: "onAccept",
                value: function() {
                    this.props.isEarlierInstallationConsentNotAcceptedModalVisible ? (this.props.earlierInstallationConsentNotAcceptedModalIsAccepted(), this.props.closeEarlierInstallationConsentNotAcceptedModal(), this.props.actionOnceAgain()) : this.props.actionNext()
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement(s.default, {
                        id: "multicart-appartment-no-verification-modal",
                        showClose: !1,
                        open: this.checkOpenModal(),
                        size: "narrow",
                        clickClose: !1
                    }, n.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, n.default.createElement("div", {
                        className: "l-row"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-12 u-no-spacing"
                    }, n.default.createElement("div", {
                        className: "opl-msg--box validation message",
                        dangerouslySetInnerHTML: this.toHTML(this.props.content)
                    }))), n.default.createElement("div", {
                        className: "l-row u-spacing-top-l"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                    }, n.default.createElement(a.OraButton, {
                        onClick: this.onReject.bind(this),
                        type: "secondary",
                        size: "medium",
                        className: "u-w-100 opl-btn--yellow"
                    }, this.props.descriptions.leftButton)), n.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                    }, n.default.createElement(a.OraButton, {
                        onClick: this.onAccept.bind(this),
                        type: "green",
                        size: "medium",
                        className: "u-w-100"
                    }, this.props.descriptions.rightButton)))))
                }
            }]), o
        }(n.Component),
        p = (0, t.connect)(function(e) {
            return {
                errors: (0, o.getFixAppartmentNoValidation)(e),
                isEarlierInstallationConsentNotAcceptedModalVisible: (0, o.isEarlierInstallationConsentNotAcceptedModalVisible)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, l.dismissBackendValidationErrors)())
                },
                actionNext: function() {
                    return e((0, l.gotoNextCheckoutStep)())
                },
                earlierInstallationConsentNotAcceptedModalIsAccepted: function() {
                    return e((0, l.acceptEarlierInstallationConsentNotAcceptedModal)())
                },
                closeEarlierInstallationConsentNotAcceptedModal: function() {
                    return e((0, l.closeEarlierInstallationConsentNotAcceptedModal)())
                },
                actionOnceAgain: function() {
                    return e((0, l.doCheckoutStep)())
                }
            }
        })(c);
    e.default = p
});
//# sourceMappingURL=AddressAppartmentNoInfoModal.js.map