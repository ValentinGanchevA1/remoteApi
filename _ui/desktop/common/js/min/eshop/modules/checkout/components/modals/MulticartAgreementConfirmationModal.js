define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/errors", "eshop/modules/checkout/actions/data", "eshop/components/OraCommonComponents", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/consents/MulticartSingleConsentRow", "eshop/modules/checkout/actions/validation"], function(e, s, t, a, n, o, i, r, l, c, u) {
    "use strict";

    function p(o) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), a = babelHelpers.interopRequireDefault(a), c = babelHelpers.interopRequireDefault(c);
    var d = function(e) {
            babelHelpers.inherits(o, e);
            var n = p(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = n.call(this, e)).state = t.getCleanStateObject(), t
            }
            return babelHelpers.createClass(o, [{
                key: "getCleanStateObject",
                value: function() {
                    return {
                        wasConfirmed: !1,
                        originalConsentStates: [],
                        shouldPreserveVisibleState: !1
                    }
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.registerAgreementConfirmationComponent()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.handleValidationAfterConfirmationAndConsentsUpdate()
                }
            }, {
                key: "onReturn",
                value: function() {
                    this.handleConsentsUpdateAndCartRecalculation(), this.setState({
                        shouldPreserveVisibleState: !0
                    }), this.props.closeAgreementConfirmationModal(this.props.modalVariant)
                }
            }, {
                key: "onConfirm",
                value: function() {
                    this.handleConsentsUpdateAndCartRecalculation(), this.setState({
                        wasConfirmed: !0,
                        shouldPreserveVisibleState: !0
                    })
                }
            }, {
                key: "onClose",
                value: function() {
                    this.handleRevertConsentChanges(), this.setState(this.getCleanStateObject()), this.props.closeAgreementConfirmationModal(this.props.modalVariant)
                }
            }, {
                key: "handleRevertConsentChanges",
                value: function() {
                    !this.state.shouldPreserveVisibleState && 0 < this.state.originalConsentStates.length && this.props.changeConsentState(this.state.originalConsentStates)
                }
            }, {
                key: "handleValidationAfterConfirmationAndConsentsUpdate",
                value: function() {
                    this.state.wasConfirmed && !this.props.consentProps.updatingAnyConsent && (this.setState({
                        wasConfirmed: !1
                    }), this.props.closeAgreementConfirmationModal(this.props.modalVariant, !0), this.props.validateData())
                }
            }, {
                key: "handleConsentsUpdateAndCartRecalculation",
                value: function() {
                    "BONUS" === this.props.modalVariant && this.props.updateConsentsStates(this.props.consentProps.consentStates)
                }
            }, {
                key: "changeConsentState",
                value: function(e) {
                    0 < e.length && (this.backupConsentState(e), this.props.changeConsentState(e))
                }
            }, {
                key: "backupConsentState",
                value: function(e) {
                    var n = this;
                    e.map(function(t) {
                        n.state.originalConsentStates.find(function(e) {
                            return e.consentCode === t.consentCode
                        }) || n.state.originalConsentStates.push(n.props.consentProps.consentStates.find(function(e) {
                            return e.consentCode === t.consentCode
                        }))
                    })
                }
            }, {
                key: "setCheckboxConsentStateWithoutRemoteCall",
                value: function(e) {
                    this.changeConsentState(e)
                }
            }, {
                key: "onUpdateForSingleConsent",
                value: function(e) {
                    this.setCheckboxConsentStateWithoutRemoteCall(e)
                }
            }, {
                key: "getPropsForConsent",
                value: function(t) {
                    return {
                        key: t.consentCode + "AGR_CONF",
                        readOnly: this.props.descriptions.readOnly,
                        consentsWithBonusLoading: t.isRelatedWithBonus,
                        isUpdating: this.props.consentProps.updatingAnyConsent,
                        isMandatory: t.required,
                        consent: t,
                        state: this.props.consentProps.consentStates.filter(function(e) {
                            return e.consentCode === t.consentCode
                        }),
                        updating: this.props.consentProps.updatingConsents[t.consentCode],
                        onChange: this.changeConsentState.bind(this),
                        onUpdate: this.onUpdateForSingleConsent.bind(this),
                        formInputType: "CHECKBOX",
                        id: "AGR_CONF"
                    }
                }
            }, {
                key: "renderConsentsSection",
                value: function(e) {
                    var t = this;
                    return e && 0 < e.length ? s.default.createElement("div", null, s.default.createElement("ul", {
                        className: "opl-agreements-list u-no-margin"
                    }, e.map(function(e) {
                        return s.default.createElement(c.default, babelHelpers.extends({}, t.getPropsForConsent(e), {
                            descriptions: t.props.descriptions,
                            isDeliveryStep: "false",
                            consents: t.props.consentProps.consents,
                            consentStates: t.props.consentProps.consentStates
                        }))
                    }))) : ""
                }
            }, {
                key: "getConsentListToRender",
                value: function() {
                    switch (this.props.modalVariant) {
                        case "BONUS":
                            return this.props.consentProps.consents.filter(function(e) {
                                return e.isRelatedWithBonus
                            });
                        case "BIGZONK":
                            return this.props.bigAndZonkConsents;
                        default:
                            return []
                    }
                }
            }, {
                key: "getTitle",
                value: function() {
                    switch (this.props.modalVariant) {
                        case "BONUS":
                            return this.props.descriptions.titleBonus;
                        case "BIGZONK":
                            return this.props.descriptions.titleBigZonk;
                        default:
                            return ""
                    }
                }
            }, {
                key: "getDescription",
                value: function() {
                    switch (this.props.modalVariant) {
                        case "BONUS":
                            return this.getInvoiceDescription();
                        case "BIGZONK":
                            return this.props.descriptions.descriptionBigZonk;
                        default:
                            return ""
                    }
                }
            }, {
                key: "getInvoiceDescription",
                value: function() {
                    var e = "descriptionBonus" + ("invoiceEmail" !== this.props.invoiceMapping || this.props.invoiceEmail && 0 < this.props.invoiceEmail.length ? "FilledEmail" : "");
                    return this.props.descriptions[e]
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(a.default, {
                        onClose: this.onClose.bind(this),
                        open: this.props.showAgreementConfirmationModal,
                        id: "agreementConfirmationModal",
                        showClose: !0,
                        escapeClose: !1,
                        clickClose: !1,
                        size: "narrow"
                    }, s.default.createElement("div", {
                        className: "u-padding-left-m"
                    }, s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-12 u-no-spacing u-padding-top-l"
                    }, s.default.createElement("div", {
                        className: "opl-msg--box validation message",
                        dangerouslySetInnerHTML: {
                            __html: this.getTitle()
                        }
                    }))), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-12 u-no-spacing u-padding-l"
                    }, s.default.createElement("div", {
                        className: "opl-msg--box validation message",
                        dangerouslySetInnerHTML: {
                            __html: this.getDescription()
                        }
                    }))), this.renderConsentsSection(this.getConsentListToRender()), s.default.createElement("div", {
                        className: "l-row u-padding-l"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-4 medium-offset-by-4 large-offset-by-4"
                    }, s.default.createElement(r.OraButton, {
                        onClick: this.onReturn.bind(this),
                        type: "secondary",
                        size: "medium",
                        className: "u-w-100"
                    }, "Wróć")), s.default.createElement("div", {
                        className: "l-col l-col-small-6 l-col-4 "
                    }, s.default.createElement(r.OraButton, {
                        onClick: this.onConfirm.bind(this),
                        type: "primary",
                        size: "medium",
                        className: "u-w-100"
                    }, "Potwierdź")))))
                }
            }]), o
        }(s.Component),
        h = (0, t.connect)(function(e) {
            return {
                showAgreementConfirmationModal: (0, n.getShowAgreementConfirmationModal)(e),
                modalVariant: (0, n.getAgreementConfirmationModalVariant)(e),
                consentProps: (0, n.getConsentsProps)(e),
                bigAndZonkConsents: (0, n.getBigAndZonkConsents)(e),
                invoiceEmail: (0, n.getInvoiceEmail)(e),
                invoiceMapping: (0, n.getInvoiceEmailMapping)(e)
            }
        }, function(n) {
            return {
                closeAgreementConfirmationModal: function(e, t) {
                    return n((0, o.closeAgreementConfirmationModal)(e, t))
                },
                registerAgreementConfirmationComponent: function() {
                    return n((0, i.registerAgreementConfirmationComponent)())
                },
                updateConsentsStates: function(e) {
                    return n((0, i.updateConsentsStates)(e))
                },
                changeConsentState: function(e) {
                    return n((0, l.changeConsentState)(e))
                },
                validateData: function() {
                    return n((0, u.validateData)())
                }
            }
        })(d);
    e.default = h
});
//# sourceMappingURL=MulticartAgreementConfirmationModal.js.map