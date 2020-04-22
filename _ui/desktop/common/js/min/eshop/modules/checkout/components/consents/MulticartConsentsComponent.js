define(["exports", "react", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "eshop/modules/core/components/ui/Expander", "./MulticartConsentsGroupSection", "./MulticartSingleConsentRow", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "lodash", "../../utils/utils", "eshop/modules/core/components/ui/ExpanderFromHtml", "../../constants/LegalFormEnum", "eshop/modules/core/components/ui/Modal", "eshop/utils/OnlineUtils", "../../../documents/actions/documents", "../../../documents/selectors", "eshop/modules/auth/selectors/authorization"], function(e, c, t, n, o, s, r, i, p, d, a, f, h, l, C, u, m, g, y, b, v, k) {
    "use strict";

    function P(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function S(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? P(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function N(o) {
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
    }), e.default = e.MulticartConsentsView = void 0, c = babelHelpers.interopRequireWildcard(c), d = babelHelpers.interopRequireDefault(d), a = babelHelpers.interopRequireDefault(a), f = babelHelpers.interopRequireDefault(f), l = babelHelpers.interopRequireDefault(l), u = babelHelpers.interopRequireDefault(u), m = babelHelpers.interopRequireDefault(m), g = babelHelpers.interopRequireDefault(g), y = babelHelpers.interopRequireDefault(y);
    var E = function(e) {
        babelHelpers.inherits(o, e);
        var n = N(o);

        function o(e) {
            var t;
            return babelHelpers.classCallCheck(this, o), (t = n.call(this, e)).elementId = t.props.cmpUid + "_loaderParent", t.onUpdateForSingleConsent = t.onUpdateForSingleConsent.bind(babelHelpers.assertThisInitialized(t)), t.debouncedStateUpdate = l.default.debounce(function() {
                t.props.clearModifyConsentsInCartQueue()
            }, 1), t.debouncedStateUpdate = t.debouncedStateUpdate.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(o, [{
            key: "componentWillMount",
            value: function() {
                this.registerVerificationConsentType(null)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                OPL.UI.loadModules(document.getElementById(this.elementId), {
                    path: "core/modules/loader",
                    options: '{"fadeDuration":120}'
                }), this.props.registerNextStepCondition("consents"), this.props.registerCmsConsentConfig(this.props.consentTypesList), this.props.requestCartConsentsData()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props.consentsDataInRequest.legalForm || "";
                this.props.isNet && this.props.legalForm && this.props.legalForm !== t && this.props.requestCartConsentsData(), null != e.isLogged && e.isLogged !== this.props.isLogged && this.props.isLogged && this.props.requestCartConsentsData(), this.printDocumentButtonIsVisible.apply(this) ? this.registerConsentDocumentsCheckoutCondition.apply(this) : this.unregisterConsentDocumentsCheckoutCondition.apply(this), this.registerVerificationConsentType(e)
            }
        }, {
            key: "printDocumentButtonIsVisible",
            value: function() {
                var t = this;
                return !this.props.cartContainsFixNonActivationProcess && (!!this.props.salesChannelsToShowPrintButton.includes(this.props.channels.sales) && (0 !== this.props.consentProps.consents.length && 0 < this.props.consentProps.consents.filter(function(e) {
                    return e.type === t.props.verificationConsentType
                }).length))
            }
        }, {
            key: "registerConsentDocumentsCheckoutCondition",
            value: function() {
                this.props.registeredCheckoutConditions.consentDocuments || (this.props.registerNextStepCondition("consentDocuments"), this.props.registerPrintConsentValidator(this.props.printConsentValidatorByConsentType))
            }
        }, {
            key: "unregisterConsentDocumentsCheckoutCondition",
            value: function() {
                this.props.registeredCheckoutConditions.consentDocuments && this.props.unregisterNextStepCondition("consentDocuments")
            }
        }, {
            key: "registerVerificationConsentType",
            value: function(e) {
                (e ? e.verificationConsentType : null) !== this.props.verificationConsentType && this.props.registerVerificationConsentType(this.props.verificationConsentType)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.stopModules(document.getElementById(this.elementId))
            }
        }, {
            key: "setCheckboxConsentStateWithoutRemoteCall",
            value: function(e) {
                this.changeConsentState(e)
            }
        }, {
            key: "onUpdateForSingleConsent",
            value: function(e) {
                this.props.pushToModifyConsentsInCartQueue(e), this.setCheckboxConsentStateWithoutRemoteCall(e), this.debouncedStateUpdate()
            }
        }, {
            key: "onConsentGroupExpanded",
            value: function(e) {
                this.props.updateConsentGroupExpanded(e)
            }
        }, {
            key: "getPropsForConsentGroup",
            value: function(e) {
                return {
                    consents: e,
                    consentStates: this.props.consentProps.consentStates,
                    consentsErrorList: this.props.errorList && this.props.errorList.find(function(e) {
                        return "consents" === e.type
                    }),
                    disableInnerMargin: !0,
                    readOnly: this.props.descriptions.readOnly,
                    isUpdating: this.props.consentProps.updatingAnyConsent,
                    updatingConsents: this.props.consentProps.updatingConsents,
                    onChange: this.changeConsentState.bind(this),
                    onUpdate: this.onUpdateForSingleConsent,
                    agreeAll: this.props.descriptions.selectAllLabel,
                    loaderElementId: this.elementId,
                    factoryType: this.props.factoryType,
                    selectedMethod: this.props.selectedMethod,
                    errorList: this.props.errorList,
                    onExpanded: this.onConsentGroupExpanded.bind(this),
                    onExpandedInit: this.props.updateValueConsentGroupExpanded.bind(this)
                }
            }
        }, {
            key: "getPropsForConsent",
            value: function(t) {
                return {
                    key: t.consentCode,
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
                    onUpdate: this.props.updateConsentsStates,
                    formInputType: this.props.formInputType,
                    loaderElementId: this.elementId
                }
            }
        }, {
            key: "getPropsForCheckbox",
            value: function() {
                return {
                    labelClassName: "o-checkbox opl-checkbox opl-checkbox--black",
                    name: "agree_all",
                    text: this.props.descriptions.selectAllLabel,
                    checked: this.isAllSelected(),
                    onChange: this.agreeAllCheckboxChange.bind(this),
                    readOnly: this.props.consentProps.updatingAnyConsent || this.props.clearingModifyConsentsInCartQueueInProgress
                }
            }
        }, {
            key: "isAnyReadOnly",
            value: function() {
                if (0 === this.getMatchingConsents().length) return !1;
                var t = !1;
                return this.getMatchingConsents().forEach(function(e) {
                    e.readonly && (t = !0)
                }), t
            }
        }, {
            key: "changeConsentState",
            value: function(e) {
                var t = this;
                if (0 < e.length) {
                    var n = e.filter(function(e) {
                        return !t.checkReadOnly(e)
                    });
                    this.isConfirmationNeeded(e) ? (n.filter(function(e) {
                        return !t.isConfirmationNeeded(e)
                    }).length && this.props.changeConsentState(n.filter(function(e) {
                        return !t.isConfirmationNeeded(e)
                    })), this.setState({
                        showConfirmationModal: !0,
                        confirmableData: n.filter(function(e) {
                            return t.isConfirmationNeeded(e)
                        })
                    })) : this.props.changeConsentState(n)
                }
            }
        }, {
            key: "confirmedChangeConsentState",
            value: function() {
                var t = this,
                    e = this.state.confirmableData;
                0 < e.length && this.props.changeConsentState(e.filter(function(e) {
                    return !t.checkReadOnly(e)
                }))
            }
        }, {
            key: "confirmationPopupProps",
            value: function() {
                if (this.state) return {
                    title: this.props.descriptions && this.props.descriptions.warningModalTitle,
                    content: this.getConfirmationMessage(),
                    onClickConfirm: this.confirmedChangeConsentState.bind(this)
                }
            }
        }, {
            key: "getConfirmableConsentTypeList",
            value: function() {
                var n = this,
                    o = [];
                return this.state.confirmableData.forEach(function(t) {
                    var e = n.props.consentTypesList.find(function(e) {
                        return e.confirmationRequiredConsentCodes.includes(t.consentCode)
                    });
                    e && y.default.addUniqueIntoArray(e, o)
                }), o
            }
        }, {
            key: "getConfirmationMessage",
            value: function() {
                if (this.state && this.state.confirmableData) {
                    var e = this.getConfirmableConsentTypeList();
                    if (e.length && e.find(function(e) {
                            return !!e.confirmationMessage
                        })) return e.find(function(e) {
                        return !!e.confirmationMessage
                    }).confirmationMessage
                }
                return ""
            }
        }, {
            key: "renderConfirmationModal",
            value: function() {
                return c.default.createElement(g.default, {
                    id: "consent-confirmation-modal",
                    size: "narrow",
                    escapeClose: !0,
                    showClose: !0,
                    clickClose: !0,
                    open: this.state && this.state.showConfirmationModal,
                    onClose: this.onCloseConfirmationModal.bind(this)
                }, c.default.createElement(h.GenericPopup, babelHelpers.extends({
                    id: "consent-confirmation-in-modal"
                }, this.confirmationPopupProps())))
            }
        }, {
            key: "isConfirmationNeeded",
            value: function(t) {
                var n = this;
                if (t) {
                    if (Array.isArray(t)) return !!t.filter(function(e) {
                        return n.isConfirmationNeeded(e)
                    }).length;
                    if (-1 < t.stateCode.indexOf("NO_") || -1 < t.stateCode.indexOf("_NO")) return !1;
                    var e = this.props.consentTypesList.find(function(e) {
                        return e.consentsCode.includes(t.consentCode)
                    });
                    if (e && e.confirmationRequiredConsentCodes && e.confirmationRequiredConsentCodes.includes(t.consentCode)) return !0
                }
                return !1
            }
        }, {
            key: "onCloseConfirmationModal",
            value: function() {
                this.setState({
                    showConfirmationModal: !1
                })
            }
        }, {
            key: "checkReadOnly",
            value: function(t) {
                var n = !1;
                return this.getVisibleConsents().filter(function(e) {
                    e.consentCode === t.consentCode && (n = !!e.readonly)
                }), n
            }
        }, {
            key: "getMatchingConsents",
            value: function() {
                var o = this;
                return this.getVisibleConsents().filter(function(t) {
                    var n = !1;
                    return o.props.consentTypesList.forEach(function(e) {
                        n = n || o.matchCondition(t, e)
                    }), n
                })
            }
        }, {
            key: "isAllSelected",
            value: function() {
                var e = this;
                if (0 === this.getMatchingConsents().length) return !1;
                var o, s, r, i = !0;
                return this.getMatchingConsents().forEach(function(n) {
                    n.readonly || (s = n.states.find(function(e) {
                        return e.positive
                    }), n.bundleAssignments && 0 < n.bundleAssignments.length ? n.bundleAssignments.forEach(function(t) {
                        o = e.props.consentProps.consentStates.find(function(e) {
                            return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                        }), r = void 0 !== o && o.stateCode === s.code, i = i && r
                    }) : n.msisdns && 0 < n.msisdns.length ? n.msisdns.forEach(function(t) {
                        o = e.props.consentProps.consentStates.find(function(e) {
                            return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                        }), r = void 0 !== o && o.stateCode === s.code, i = i && r
                    }) : (o = e.props.consentProps.consentStates.find(function(e) {
                        return n.consentCode === e.consentCode && !e.bundleNo
                    }), r = void 0 !== o && o.stateCode === s.code, i = i && r))
                }), i
            }
        }, {
            key: "getConsentMapping",
            value: function(t, o) {
                var n = this,
                    s = ["OSW"],
                    r = [];
                return this.getMatchingConsents().filter(function(e) {
                    return e.isRelatedWithBonus == t || n.isRelatedWithBonusBySubsection(e.consentCode)
                }).forEach(function(t) {
                    var e = -1 !== s.indexOf(t.type),
                        n = null;
                    n = e ? t.states.find(function(e) {
                        return e.positive == o
                    }).code : o ? t.states.find(function(e) {
                        return e.positive
                    }).code : t.states.find(function(e) {
                        return !e.positive
                    }).code, t.bundleAssignments && 0 !== t.bundleAssignments.length ? r = r.concat(t.bundleAssignments.map(function(e) {
                        return {
                            consentCode: t.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: n
                        }
                    })) : t.msisdns && 0 < t.msisdns.length ? t.msisdns.forEach(function(e) {
                        r.push({
                            consentCode: t.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: n
                        })
                    }) : r.push({
                        consentCode: t.consentCode,
                        bundleNo: null,
                        stateCode: n
                    })
                }), r
            }
        }, {
            key: "isRelatedWithBonusBySubsection",
            value: function(t) {
                return this.props.consentProps.conf.some(function(e) {
                    return (e.sections || []).filter(function(e) {
                        return e.withBonus
                    }).map(function(e) {
                        return e.consentsCode
                    }).some(function(e) {
                        return -1 < e.indexOf(t)
                    })
                })
            }
        }, {
            key: "acceptAllConsents",
            value: function() {
                var e = this.getConsentMapping(!0, !0),
                    t = this.getConsentMapping(!1, !0);
                this.changeConsentState(t.concat(e)), this.props.updateConsentsStates(e)
            }
        }, {
            key: "uncheckAllConsents",
            value: function() {
                var e = this.getConsentMapping(!0, !1),
                    t = this.getConsentMapping(!1, !1);
                this.changeConsentState(t.concat(e)), this.props.updateConsentsStates(e)
            }
        }, {
            key: "agreeAllCheckboxChange",
            value: function() {
                this.isAllSelected() ? this.uncheckAllConsents() : this.acceptAllConsents()
            }
        }, {
            key: "getNewGroupedConsents",
            value: function() {
                var t = this,
                    n = [];
                return this.props.consentTypesList.forEach(function(e) {
                    n.push({
                        listNo: e.listNumber,
                        listTitleProp: e.groupTitle,
                        code: e.code,
                        priority: e.priority,
                        preamble: e.preamble,
                        required: !!e.isRequired,
                        expandedChannels: e.expandedChannels,
                        backgroundColor: e.backgroundColor,
                        sections: e.sections,
                        description: e.description,
                        confirmationDescription: e.confirmationDescription,
                        confirmationMessage: e.confirmationMessage,
                        confirmationRequiredConsentCodes: e.confirmationRequiredConsentCodes,
                        consents: t.props.consentProps.consents.filter(function(t) {
                            return !!e.consentsCode.find(function(e) {
                                return e === t.consentCode
                            })
                        })
                    })
                }), this.addHasAlreadyAgreedProp(n.sort(function(e, t) {
                    return e.priority - t.priority
                }))
            }
        }, {
            key: "getGroupedConsents",
            value: function() {
                var s = this,
                    e = this.getListConditions().map(function(e) {
                        return {
                            listNo: e.listNo,
                            listTitleProp: e.listTitleProp,
                            preamble: e.preamble,
                            description: e.description,
                            confirmationDescription: e.confirmationDescription,
                            confirmationMessage: e.confirmationMessage,
                            confirmationRequiredConsentCodes: e.confirmationRequiredConsentCodes,
                            sections: e.sections,
                            expandedChannels: e.expandedChannels,
                            consents: s.props.consentProps.consents.filter(function(t) {
                                var n = !1;
                                return e.conditions.forEach(function(e) {
                                    n = n || s.matchCondition(t, e)
                                }), n
                            }).map(function(t) {
                                var n, o = 0;
                                return e.conditions.forEach(function(e) {
                                    s.matchCondition(t, e) && o < e.priority && (o = (n = e).priority)
                                }), t.rulePriority = n.priority, S({}, t)
                            })
                        }
                    });
                return e = this.filterConsentsByRulePriority(e), this.addHasAlreadyAgreedProp(e)
            }
        }, {
            key: "addHasAlreadyAgreedProp",
            value: function(e) {
                var t = this;
                return e.map(function(e) {
                    return S({}, e, {
                        hasAlreadyAgreed: !!e.consents.find(function(e) {
                            return t.consentIsPermanentlyAgreed(e)
                        })
                    })
                })
            }
        }, {
            key: "getVisibleConsents",
            value: function() {
                return (this.props.newConfiguration ? this.getNewGroupedConsents() : this.getGroupedConsents()).reduce(function(e, t) {
                    return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(t.consents))
                }, [])
            }
        }, {
            key: "consentIsPermanentlyAgreed",
            value: function(e) {
                return (0, C.consentIsPermanentlyAgreed)(e, this.props.consentProps.consentStates)
            }
        }, {
            key: "channelIsWWW",
            value: function() {
                return "WWW" === this.props.channels.sales
            }
        }, {
            key: "getHeadPreamble",
            value: function() {
                var t = this;
                return this.props.isNet ? this.props.headPreamble.filter(function(e) {
                    return !!e.legalFormList && e.legalFormList.includes(t.props.legalForm)
                }) : this.props.headPreamble
            }
        }, {
            key: "getFilterConfig",
            value: function() {
                return !!this.props.isNet && (m.default.isSmallBusiness(this.props.legalForm) ? "1114" : "1014")
            }
        }, {
            key: "handleRegulationsDownloadClick",
            value: function(e) {
                if (e.preventDefault(), e.target && e.target.dataset && "regulationsDownloadLink" === e.target.id) {
                    var t = this.getDocumentItemByDocumentCode(e.target.dataset.documentCode);
                    t && t.bundleNo && this.props.getOrCreateDocument(t.documentCode, t.bundleNo, t.documentType)
                }
            }
        }, {
            key: "getDocumentItemByDocumentCode",
            value: function(t) {
                return this.props.documentItems && this.props.documentItems.length && this.props.documentItems.find(function(e) {
                    return t === e.documentCode
                })
            }
        }, {
            key: "render",
            value: function() {
                var n = this;
                this.preambleStatuses = [{
                    isGroupRequired: !0,
                    shown: !1
                }, {
                    isGroupRequired: !1,
                    shown: !1
                }];
                var e = this.props.newConfiguration ? this.getNewGroupedConsents() : this.getGroupedConsents(),
                    o = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                        return "consents" === e.type
                    }),
                    t = o && e.find(function(e) {
                        return 0 === e.listNo
                    }) && e.find(function(e) {
                        return 0 === e.listNo
                    }).consents.find(function(e) {
                        return !(0, C.validateConsent)(e, n.props.consentProps.consentStates)
                    }),
                    s = "delivery-payment" === this.props.currentStepId,
                    r = 0 < this.getMatchingConsents().length && (!s || this.props.agreementType),
                    i = this.getHeadPreamble(),
                    a = this.props.isOnlySogProcess,
                    l = this.props.descriptions && this.props.descriptions.regulationInfoMessage,
                    u = r ? s ? "g-gray2-bg" : "l-full-row u-padding-l-xl" : "";
                return c.default.createElement("div", {
                    className: u,
                    id: this.elementId,
                    key: this.elementId
                }, c.default.createElement("div", {
                    className: "l-page-row " + (s ? "" : "u-padding-top-l-xl")
                }, a && l && c.default.createElement("div", {
                    className: "l-row u-padding-l-xl"
                }, c.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, c.default.createElement("div", {
                    className: "l-col-9 l-col-medium-12 l-col-small-12"
                }, c.default.createElement("p", {
                    className: "u-margin-m u-margin-top-l"
                }, c.default.createElement("span", {
                    onClick: this.handleRegulationsDownloadClick.bind(this),
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                }))))), r && c.default.createElement("div", {
                    className: "l-row"
                }, c.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, !s && c.default.createElement("div", null, c.default.createElement("div", {
                    className: "u-position-relative"
                }, c.default.createElement("h1", {
                    className: "h1 u-margin-l"
                }, this.props.descriptions.title)), c.default.createElement(M, {
                    value: i[0]
                })), this.renderConfirmationModal(), c.default.createElement(p.Expander, {
                    className: "opl-agreements " + (s ? "g-gray2-bg u-border-bottom u-padding-l" : ""),
                    scrollToSelected: !1,
                    variant: "",
                    id: "consents-component-expander"
                }, !s && e.map(function(e, t) {
                    return 0 === e.listNo || 10 === e.priority && n.props.newConfiguration ? c.default.createElement("div", {
                        className: "opl-agreements__all opl-agreements__all-no-arrow u-padding-all u-large-padding-left-l u-large-margin-minus-left-l u-large-margin-minus-right-l g-yellow2-bg"
                    }, c.default.createElement(h.OraSimpleCheckbox, n.getPropsForCheckbox())) : ""
                }), e.filter(function(e) {
                    return e.code != n.getFilterConfig()
                }).map(function(e, t) {
                    return 0 === e.listNo ? n.renderSectionWithSelectAllCheckBox(e) : c.default.createElement("div", {
                        key: "consentsGroupSection" + t
                    }, n.renderPreambleForGroup(e), c.default.createElement(d.default, babelHelpers.extends({
                        key: "consentsGroup" + t,
                        sectionKey: "consentsGroup" + t,
                        isDeliveryStep: s,
                        consentsErrorMsg: o
                    }, n.getPropsForConsentGroup(e.consents), {
                        title: n.props.newConfiguration ? e.listTitleProp : n.props.descriptions[e.listTitleProp],
                        id: e.listTitleProp
                    }, n.props, {
                        sequence: t,
                        listNo: e.listNo,
                        hasAlreadyAgreed: e.hasAlreadyAgreed,
                        showPrintDocumentsButton: n.printDocumentButtonIsVisible.apply(n),
                        initiallyOpen: e.expandedChannels.includes(n.props.channels.sales),
                        backgroundColor: e.backgroundColor,
                        sections: e.sections,
                        description: e.description,
                        confirmationDescription: e.confirmationDescription,
                        confirmationMessage: e.confirmationMessage,
                        confirmationRequiredConsentCodes: e.confirmationRequiredConsentCodes
                    })))
                }), s && e.map(function(e, t) {
                    return 0 === e.listNo ? c.default.createElement("div", {
                        className: "u-margin-top"
                    }, n.renderSelectAllCheckbox(e)) : ""
                })))), !("delivery-payment" === this.props.currentStepId) && c.default.createElement(f.default, {
                    messageType: "consents",
                    show: !!t,
                    className: "u-padding-l"
                })))
            }
        }, {
            key: "isPreambleShownForGroupRequirity",
            value: function(t) {
                return this.preambleStatuses.find(function(e) {
                    return e.isGroupRequired === t
                }).shown
            }
        }, {
            key: "setPreambleShownForGroupRequirity",
            value: function(t) {
                this.preambleStatuses = this.preambleStatuses.map(function(e) {
                    return e.isGroupRequired !== t ? e : S({}, e, {
                        shown: !0
                    })
                })
            }
        }, {
            key: "renderPreambleForGroup",
            value: function(e) {
                var t = this.props.consentProps.consents ? this.props.consentProps.consents.map(function(e) {
                        return e.consentCode
                    }) : [],
                    n = this.getConsentCodesForGroup(e);
                return e.preamble && 0 < l.default.intersection(t, n).length && !this.isPreambleShownForGroupRequirity(e.required) ? (this.setPreambleShownForGroupRequirity(e.required), c.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: e.preamble
                    }
                })) : null
            }
        }, {
            key: "getConsentCodesForGroup",
            value: function(e) {
                return this.channelIsWWW() ? this.getNotPermanentlyAgreedConsentCodesForGroup(e) : e.consents ? e.consents.map(function(e) {
                    return e.consentCode
                }) : []
            }
        }, {
            key: "getNotPermanentlyAgreedConsentCodesForGroup",
            value: function(e) {
                var t = this,
                    n = this.props.consentProps.consents ? this.props.consentProps.consents.filter(function(e) {
                        return t.consentIsPermanentlyAgreed(e)
                    }).map(function(e) {
                        return e.consentCode
                    }) : [];
                return e.consents ? e.consents.map(function(e) {
                    return e.consentCode
                }).filter(function(e) {
                    return !n.includes(e)
                }) : []
            }
        }, {
            key: "renderSectionWithSelectAllCheckBox",
            value: function(e) {
                var n = this;
                return c.default.createElement("div", {
                    className: "delivery-payment" === this.props.currentStepId ? "g-white1-bg u-padding-all-l u-padding-top-l" : "u-margin-l"
                }, c.default.createElement("ul", {
                    className: "opl-agreements-list u-no-margin"
                }, e.consents.map(function(e, t) {
                    return c.default.createElement(a.default, babelHelpers.extends({}, n.getPropsForConsent(e), {
                        descriptions: n.props.descriptions,
                        isDeliveryStep: "delivery-payment" === n.props.currentStepId,
                        consentsErrorList: n.props.errorList && n.props.errorList.find(function(e) {
                            return "consents" === e.type
                        })
                    }))
                })), "delivery-payment" !== this.props.currentStepId && this.renderSelectAllCheckbox(e))
            }
        }, {
            key: "renderSelectAllCheckbox",
            value: function(e) {
                return e.consents && (1 < e.consents.length || 1 == e.consents.length && e.consents[0].bundleAssignments && 1 < e.consents[0].bundleAssignments.length) ? c.default.createElement("div", {
                    className: "u-spacing-l u-padding-all g-yellow2-bg"
                }, c.default.createElement(h.OraSimpleCheckbox, this.getPropsForCheckbox())) : ""
            }
        }, {
            key: "filterConsentsByRulePriority",
            value: function(e) {
                var t = [];
                return e.forEach(function(s) {
                    var r = [];
                    s.consents.forEach(function(n) {
                        var o = !0;
                        e.forEach(function(t) {
                            t.consents.forEach(function(e) {
                                n.consentCode == e.consentCode && s.listNo != t.listNo && (o = !1, n.rulePriority >= e.rulePriority && r.push(n))
                            })
                        }), 1 == o && r.push(n)
                    }), t.push({
                        listNo: s.listNo,
                        listTitleProp: s.listTitleProp,
                        preamble: s.preamble,
                        expandedChannels: s.expandedChannels,
                        consents: r
                    })
                }), t
            }
        }, {
            key: "matchCondition",
            value: function(e, t) {
                if (!(null !== t.withBonus && t.withBonus !== e.isRelatedWithBonus || null !== t.isRequired && t.isRequired !== e.required)) {
                    if (0 === t.consents.length) return !0;
                    for (var n = 0; n < t.consents.length; n++)
                        if (e.type === t.consents[n]) return !0
                }
                return !1
            }
        }, {
            key: "getListConditions",
            value: function() {
                var e = this,
                    t = new Set;
                this.props.consentTypesList.map(function(e) {
                    return e.listNumber
                }).forEach(function(e) {
                    return t.add(e)
                });
                var n = [];
                return t.forEach(function(e) {
                    return n.push(e)
                }), (n = n.sort()).map(function(t) {
                    return {
                        listNo: t,
                        listTitleProp: "listTitle" + t,
                        preamble: e.props.consentTypesList.find(function(e) {
                            return e.listNumber === t
                        }).preamble,
                        description: e.props.consentTypesList.find(function(e) {
                            return e.listNumber === t
                        }).description,
                        expandedChannels: e.props.consentTypesList.find(function(e) {
                            return e.listNumber === t
                        }).expandedChannels,
                        sections: e.props.consentTypesList.find(function(e) {
                            return e.listNumber === t
                        }).sections,
                        conditions: e.props.consentTypesList.filter(function(e) {
                            return e.listNumber === t
                        })
                    }
                })
            }
        }]), o
    }(c.Component);
    e.MulticartConsentsView = E;
    var D = (0, t.connect)(function(e) {
        return {
            registeredCheckoutConditions: (0, n.getRegisteredCheckoutConditions)(e),
            consentProps: (0, n.getConsentsProps)(e),
            selectedMethod: (0, n.getSelectedDeliveryMethod)(e),
            isPrintConsentDocumentsButtonEnabled: (0, n.isPrintConsentDocumentsButtonEnabled)(e),
            customerNoEmail: (0, n.getCustomerNoEmail)(e),
            clearingModifyConsentsInCartQueueInProgress: 0 < (0, n.getModifyConsentsInCartQueue)(e),
            errorList: (0, n.getFrontValidationMsg)(e),
            isNet: (0, i.getCartIsNet)(e),
            legalForm: (0, r.getLegalForm)(e),
            currentStepId: (0, n.getCurrentStepId)(e),
            consentsDataInRequest: (0, n.consentsDataInRequest)(e),
            info: "Wydrukuj zgody na weryfikację w systemach zewnętrznych (BIG, ZONK)",
            buttonText: "Drukuj",
            agreementType: (0, n.getAgreementType)(e),
            isOnlySogProcess: (0, n.getSalesOfGoodsProcess)(e),
            documentItems: (0, v.getDocumentItems)(e),
            isLogged: (0, k.isLogged)(e)
        }
    }, {
        changeConsentState: o.changeConsentState,
        updateConsentsStates: s.updateConsentsStates,
        requestCartConsentsData: s.requestCartConsentsData,
        registerCmsConsentConfig: s.registerCmsConsentConfig,
        registerNextStepCondition: s.registerNextStepCondition,
        registerVerificationConsentType: s.registerVerificationConsentType,
        unregisterNextStepCondition: s.unregisterNextStepCondition,
        printConsents: s.printConsents,
        printMobileConsents: s.printMobileConsents,
        registerPrintConsentValidator: s.registerPrintConsentValidator,
        pushToModifyConsentsInCartQueue: o.pushToModifyConsentsInCartQueue,
        clearModifyConsentsInCartQueue: s.clearModifyConsentsInCartQueue,
        setPermanentlyAgreedConsentsVisibleForGroup: o.setPermanentlyAgreedConsentsVisibleForGroup,
        updateConsentGroupExpanded: s.updateConsentGroupExpanded,
        updateValueConsentGroupExpanded: s.updateValueConsentGroupExpanded,
        getOrCreateDocument: b.getOrCreateDocument
    })(E);
    e.default = D;
    var x = 2,
        M = (c.Component, function(e) {
            babelHelpers.inherits(n, e);
            var t = N(n);

            function n() {
                return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
            }
            return babelHelpers.createClass(n, [{
                key: "getHtmlForExpander",
                value: function() {
                    return this.props.value && this.props.value.header ? "<div>" + this.props.value.header + (this.props.value.more ? '<div id="EXPANDER-ID-PLACEHOLDER">' + this.props.value.more + "</div>" : "") + "</div>" : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getHtmlForExpander();
                    return e ? c.default.createElement("p", {
                        className: "u-padding-l"
                    }, c.default.createElement(u.default, {
                        html: e
                    })) : null
                }
            }]), n
        }(c.Component))
});
//# sourceMappingURL=MulticartConsentsComponent.js.map