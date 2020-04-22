define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/errors", "eshop/modules/checkout/actions/data", "eshop/components/OraCommonComponents", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/consents/MulticartSingleConsentRow", "eshop/modules/checkout/actions/validation", "eshop/utils/OnlineUtils", "../../../cart/selectors", "../../selectors", "../../constants/LegalFormEnum"], function(e, i, t, s, n, o, r, a, l, c, u, p, d, f, h) {
    "use strict";

    function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function C(o) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c), p = babelHelpers.interopRequireDefault(p), h = babelHelpers.interopRequireDefault(h);
    var g = function(e) {
            babelHelpers.inherits(o, e);
            var n = C(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = n.call(this, e)).state = t.getCleanStateObject(), t.isConsentUnderChange = t.isConsentUnderChange.bind(babelHelpers.assertThisInitialized(t)), t
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
                    }), this.props.closeAgreementConfirmationModal("COMMON")
                }
            }, {
                key: "onConfirm",
                value: function() {
                    var e = this,
                        t = this.handleConsentsUpdateAndCartRecalculation();
                    t && (this.props.closeAgreementConfirmationModal("COMMON", !0), this.setState({
                        wasConfirmed: !0,
                        shouldPreserveVisibleState: !0
                    }), t.then(function() {
                        return e.props.validateData()
                    }))
                }
            }, {
                key: "onClose",
                value: function() {
                    this.handleRevertConsentChanges(), this.setState(this.getCleanStateObject()), this.props.closeAgreementConfirmationModal("COMMON")
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
                    }), this.props.closeAgreementConfirmationModal("COMMON", !0), this.props.validateData())
                }
            }, {
                key: "handleConsentsUpdateAndCartRecalculation",
                value: function() {
                    return this.props.updateConsentsStates(this.props.consentProps.consentStates)
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
                value: function(n) {
                    var o = this;
                    return n && 0 < n.length ? i.default.createElement("div", null, i.default.createElement("ul", {
                        className: "opl-agreements-list u-no-margin"
                    }, n.map(function(e, t) {
                        return i.default.createElement("div", {
                            className: "".concat(n.length - 1 === t ? "" : "u-border-bottom")
                        }, i.default.createElement(c.default, babelHelpers.extends({}, o.getPropsForConsent(e), {
                            descriptions: o.props.descriptions,
                            isDeliveryStep: "false",
                            consents: o.props.consentProps.consents,
                            consentStates: o.props.consentProps.consentStates
                        })))
                    }))) : ""
                }
            }, {
                key: "getDescription",
                value: function() {
                    var t = p.default.extractObject(this.props.descriptions, "description"),
                        e = Object.keys(t).map(function(e) {
                            return {
                                key: e,
                                value: t[e]
                            }
                        }),
                        n = t[""],
                        o = [];
                    o.push({
                        key: "B",
                        present: !!this.getNonFilledBigZonkSection()
                    });
                    var s = this.getNonFilledBonusSections();
                    o.push({
                        key: "F",
                        present: !!s.find(function(e) {
                            return "EFV_SUBSECTION" == e.name
                        })
                    }), o.push({
                        key: "M",
                        present: !!s.find(function(e) {
                            return "MKT_SUBSECTION" == e.name
                        })
                    });
                    var i = e.find(function(t) {
                        return o.every(function(e) {
                            return e.present ? -1 < t.key.indexOf(e.key) : -1 == t.key.indexOf(e.key)
                        })
                    });
                    return i && i.value || n
                }
            }, {
                key: "isConsentUnderChange",
                value: function(t) {
                    return this.state.originalConsentStates.find(function(e) {
                        return e.consentCode === t.consentCode
                    })
                }
            }, {
                key: "getNonFilledBonusSections",
                value: function() {
                    var t = this;
                    return this.getBonusSections().filter(function(e) {
                        return e.consents.length > e.positiveStatesCount || e.consents.some(t.isConsentUnderChange)
                    })
                }
            }, {
                key: "getConsentWithState",
                value: function(t) {
                    var n = t.states.filter(function(e) {
                        return e.positive
                    }).map(function(e) {
                        return e.code
                    })[0];
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? m(Object(n), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, t, {
                        isPositive: this.props.consentProps.consentStates.find(function(e) {
                            return e.consentCode == t.consentCode && e.stateCode == n
                        })
                    })
                }
            }, {
                key: "getBonusSections",
                value: function() {
                    var o, t, s = this;
                    o = this.props.isNet && h.default.isSmallBusiness(this.props.legalForm) ? (t = "1114", [{
                        code: "103",
                        name: "EFV_SUBSECTION",
                        description: this.getInvoiceDescription(this.props.isNet),
                        consents: []
                    }, {
                        code: "104",
                        name: "MKT_SUBSECTION",
                        description: this.props.descriptions.reduceCostSectionSubtitleMb2b,
                        consents: []
                    }, {
                        code: "0",
                        consents: []
                    }]) : (t = "1014", [{
                        code: "101",
                        name: "EFV_SUBSECTION",
                        description: this.getInvoiceDescription(this.props.isNet),
                        consents: []
                    }, {
                        code: "102",
                        name: "MKT_SUBSECTION",
                        description: this.props.isNet ? this.props.descriptions.reduceCostSectionSubtitleMb2b : this.props.descriptions.reduceCostSectionSubtitleM,
                        consents: []
                    }, {
                        code: "0",
                        consents: []
                    }]);
                    var i = this.props.consentProps.conf.find(function(e) {
                            return e.code == t
                        }),
                        r = o.find(function(e) {
                            return "0" == e.code
                        });
                    this.props.bonusesConsents.forEach(function(t) {
                        var n = i.sections.filter(function(e) {
                                return e.consentsCode.find(function(e) {
                                    return e == t.consentCode
                                })
                            }).map(function(e) {
                                return e.code
                            })[0],
                            e = s.getConsentWithState(t);
                        (o.find(function(e) {
                            return e.code == n
                        }) || r).consents.push(e)
                    }), o.forEach(function(e) {
                        return e.positiveStatesCount = e.consents.filter(function(e) {
                            return e.isPositive
                        }).length
                    });
                    var e = o.find(function(e) {
                        return "MKT_SUBSECTION" == e.name
                    });
                    return e.description = e.description.replace("{N}", e.positiveStatesCount), e.description = e.description.replace("{X}", e.consents.length), o
                }
            }, {
                key: "getInvoiceDescription",
                value: function(e) {
                    var t = "reduceCostSectionSubtitleF" + ("invoiceEmail" !== this.props.invoiceMapping || this.props.invoiceEmail && 0 < this.props.invoiceEmail.length ? "fillEmail" : "") + (e ? "b2b" : "");
                    return this.props.descriptions[t]
                }
            }, {
                key: "getNonFilledBigZonkSection",
                value: function() {
                    var e = this.props.bigAndZonkConsents.map(this.getConsentWithState.bind(this)),
                        t = e.filter(function(e) {
                            return e.isPositive
                        }).length;
                    return e.length > t || e.some(this.isConsentUnderChange) ? {
                        consents: e,
                        description: this.props.descriptions.bigZonkSectionSubtitle
                    } : null
                }
            }, {
                key: "renderBigZonkSection",
                value: function() {
                    var e = this.getNonFilledBigZonkSection(),
                        t = this.getNonFilledBonusSections()[0];
                    return e ? [this.renderSection(e, t ? "u-border-bottom" : "")] : []
                }
            }, {
                key: "renderBonusSection",
                value: function() {
                    this.getNonFilledBigZonkSection();
                    var e = this.getNonFilledBonusSections(),
                        t = e.find(function(e) {
                            return "EFV_SUBSECTION" == e.name
                        }),
                        n = e.find(function(e) {
                            return "MKT_SUBSECTION" == e.name
                        }),
                        o = [];
                    return t && o.push(this.renderSection(t, "")), n && o.push(this.renderSection(n, t ? "u-border-top" : "")), o
                }
            }, {
                key: "renderSection",
                value: function(e, t) {
                    var n = this,
                        o = 1 < arguments.length && void 0 !== t ? t : "",
                        s = e && e.consents.filter(function(e) {
                            return !e.isPositive || n.isConsentUnderChange(e)
                        }) || [];
                    return s[0] ? i.default.createElement("div", {
                        className: "u-padding-top-l " + o
                    }, i.default.createElement("p", null, e.description), this.renderConsentsSection(s)) : null
                }
            }, {
                key: "render",
                value: function() {
                    return i.default.createElement(s.default, {
                        onClose: this.onClose.bind(this),
                        open: this.props.showAgreementConfirmationModal,
                        id: "agreementConfirmationModal",
                        showClose: !0,
                        escapeClose: !1,
                        clickClose: !1,
                        size: "medium"
                    }, i.default.createElement("div", null, i.default.createElement("div", {
                        className: "l-row"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-no-spacing u-padding-top-l"
                    }, i.default.createElement("div", {
                        className: "opl-msg--box validation message",
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.title
                        }
                    }))), i.default.createElement("div", {
                        className: "l-row"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-no-spacing u-padding"
                    }, i.default.createElement("div", {
                        className: "opl-msg--box validation message",
                        dangerouslySetInnerHTML: {
                            __html: this.getDescription()
                        }
                    }))), i.default.createElement(v, {
                        title: this.props.descriptions.bigZonkSectionTitle
                    }, this.renderBigZonkSection()), i.default.createElement(v, {
                        title: this.props.descriptions.reduceCostSectionTitle
                    }, this.renderBonusSection()), i.default.createElement("div", {
                        className: "l-row u-padding-l u-small-padding-top-l u-medium-padding-top-l u-large-padding-top-xl"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-4 large-offset-by-4"
                    }, i.default.createElement(a.OraButton, {
                        onClick: this.onReturn.bind(this),
                        type: "secondary",
                        size: "medium",
                        className: "u-w-100"
                    }, "Wróć")), i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-padding-top"
                    }, i.default.createElement(a.OraButton, {
                        onClick: this.onConfirm.bind(this),
                        type: "primary",
                        size: "medium",
                        className: "u-w-100"
                    }, "Dalej")))))
                }
            }]), o
        }(i.Component),
        v = function(e) {
            babelHelpers.inherits(n, e);
            var t = C(n);

            function n() {
                return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
            }
            return babelHelpers.createClass(n, [{
                key: "render",
                value: function() {
                    return this.props.children[0] ? i.default.createElement("div", {
                        className: "u-padding-top"
                    }, i.default.createElement("h5", null, this.props.title), this.props.children) : null
                }
            }]), n
        }(i.Component),
        S = (0, t.connect)(function(e) {
            return {
                showAgreementConfirmationModal: (0, n.getShowAgreementConfirmationModal)(e),
                consentProps: (0, n.getConsentsProps)(e),
                bonusesConsents: (0, n.getBonusesConsents)(e),
                isNet: (0, d.getCartIsNet)(e),
                legalForm: (0, f.getLegalForm)(e),
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
                    return n((0, r.registerAgreementConfirmationComponent)())
                },
                updateConsentsStates: function(e) {
                    return n((0, r.updateConsentsStates)(e))
                },
                changeConsentState: function(e) {
                    return n((0, l.changeConsentState)(e))
                },
                validateData: function() {
                    return n((0, u.validateData)())
                }
            }
        })(g);
    e.default = S
});
//# sourceMappingURL=CommonMulticartAgreementConfirmationModal.js.map