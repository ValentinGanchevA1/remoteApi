define(["exports", "react", "./MulticartSingleConsentRow", "./MulticartConsentsGroupSubSection", "eshop/modules/core/components/ui/Expander", "../../selectors", "../../utils/utils", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/ExpanderFromHtml"], function(e, i, t, l, o, n, r, a, c, u) {
    "use strict";

    function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, s)
        }
        return n
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function d(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u);
    var h = 0,
        f = function(e) {
            babelHelpers.inherits(s, e);
            var n = d(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = n.call(this, e)).state = {
                    expanded: t.props.initiallyOpen
                }, t
            }
            return babelHelpers.createClass(s, [{
                key: "componentDidMount",
                value: function() {
                    this.props.onExpandedInit(this.props.listNo, this.props.initiallyOpen)
                }
            }, {
                key: "getPropsForConsent",
                value: function(t) {
                    return {
                        key: t.consentCode,
                        readOnly: this.props.readonly,
                        consentsWithBonusLoading: t.isRelatedWithBonus,
                        isUpdating: this.props.isUpdating,
                        isMandatory: t.required,
                        consent: t,
                        consentsErrorList: this.props.consentsErrorList,
                        state: this.props.consentStates.filter(function(e) {
                            return e.consentCode === t.consentCode
                        }),
                        updating: this.props.updatingConsents[t.consentCode],
                        onChange: this.props.onChange,
                        onUpdate: this.props.onUpdate,
                        loaderElementId: this.props.loaderElementId,
                        factoryType: this.props.factoryType,
                        selectedMethod: this.props.selectedMethod
                    }
                }
            }, {
                key: "allConsentsAreReadOnly",
                value: function() {
                    return this.props.consents.every(function(e) {
                        return e.readonly
                    })
                }
            }, {
                key: "isAllSelected",
                value: function() {
                    var e = this;
                    if (0 === this.props.consents.length) return !1;
                    var s, o, r, i = !0;
                    return this.props.consents.forEach(function(n) {
                        o = n.states.find(function(e) {
                            return e.positive
                        }), n.bundleAssignments && 0 < n.bundleAssignments.length ? n.bundleAssignments.forEach(function(t) {
                            s = e.props.consentStates.find(function(e) {
                                return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                            }), r = void 0 !== s && s.stateCode === o.code, i = i && r
                        }) : n.msisdns && 0 < n.msisdns.length ? n.msisdns.forEach(function(t) {
                            s = e.props.consentStates.find(function(e) {
                                return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                            }), r = void 0 !== s && s.stateCode === o.code, i = i && r
                        }) : (s = e.props.consentStates.find(function(e) {
                            return n.consentCode === e.consentCode && !e.bundleNo
                        }), r = void 0 !== s && s.stateCode === o.code, i = i && r)
                    }), i
                }
            }, {
                key: "isAllChecked",
                value: function() {
                    var e = this;
                    if (0 === this.props.consents.length) return !1;
                    var s, o = !0;
                    return this.props.consents.forEach(function(n) {
                        n.readonly || (n.bundleAssignments && 0 < n.bundleAssignments.length ? n.bundleAssignments.forEach(function(t) {
                            s = e.props.consentStates.find(function(e) {
                                return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                            }), o = o && void 0 !== s && s.stateCode
                        }) : n.msisdns && 0 < n.msisdns.length ? n.msisdns.forEach(function(t) {
                            s = e.props.consentStates.find(function(e) {
                                return n.consentCode === e.consentCode && e.bundleNo === t.bundleNo && e.stateCode
                            }), o = o && void 0 !== s && s.stateCode
                        }) : (s = e.props.consentStates.find(function(e) {
                            return n.consentCode === e.consentCode && !e.bundleNo
                        }), o = o && void 0 !== s && s.stateCode))
                    }), o
                }
            }, {
                key: "acceptAllConsents",
                value: function() {
                    this.onChangeCallback(this.getConsentMapping(!0))
                }
            }, {
                key: "uncheckAllConsents",
                value: function() {
                    this.onChangeCallback(this.getConsentMapping(!1))
                }
            }, {
                key: "agreeAllCheckboxChange",
                value: function() {
                    this.isAllSelected() ? this.uncheckAllConsents() : this.acceptAllConsents()
                }
            }, {
                key: "isSectionWithPrintDocument",
                value: function(e) {
                    return 1 === e || 11 === e
                }
            }, {
                key: "getConsentMapping",
                value: function(e) {
                    var t = this,
                        s = [];
                    return this.props.consents.forEach(function(t) {
                        if (!t.readonly) {
                            var n = e ? t.states.find(function(e) {
                                return e.positive
                            }).code : t.states.find(function(e) {
                                return !e.positive
                            }).code;
                            t.bundleAssignments && 0 !== t.bundleAssignments.length ? s = s.concat(t.bundleAssignments.map(function(e) {
                                return {
                                    consentCode: t.consentCode,
                                    bundleNo: e.bundleNo,
                                    stateCode: n,
                                    relatedWithBonus: t.isRelatedWithBonus
                                }
                            })) : t.msisdns && 0 < t.msisdns.length ? t.msisdns.forEach(function(e) {
                                s.push({
                                    consentCode: t.consentCode,
                                    bundleNo: e.bundleNo,
                                    stateCode: n,
                                    relatedWithBonus: t.isRelatedWithBonus
                                })
                            }) : s.push({
                                consentCode: t.consentCode,
                                bundleNo: null,
                                stateCode: n,
                                relatedWithBonus: t.isRelatedWithBonus
                            })
                        }
                    }), s = s.map(function(e) {
                        return p({}, e, {
                            relatedWithBonus: e.relatedWithBonus || t.isRelatedWithBonusBySubsection(e.consentCode)
                        })
                    })
                }
            }, {
                key: "onChangeCallback",
                value: function(e) {
                    this.props.onUpdate(e.filter(function(e) {
                        return e.relatedWithBonus
                    })), this.props.onChange(e.filter(function(e) {
                        return !e.relatedWithBonus
                    }))
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        manualOpen: !1,
                        expanded: this.props.initiallyOpen,
                        style: {
                            display: "none"
                        }
                    })
                }
            }, {
                key: "componentWillUpdate",
                value: function(t) {
                    var n = this,
                        e = this.props.consentsErrorMsg && this.props.consents.find(function(e) {
                            return !(0, r.validateConsent)(e, n.props.consentStates)
                        }),
                        s = t.consentsErrorMsg && t.consents.find(function(e) {
                            return !(0, r.validateConsent)(e, t.consentStates)
                        });
                    !s || !!s == !!e && this.state.expanded || this.setState({
                        manualOpen: !1,
                        expanded: !0
                    })
                }
            }, {
                key: "onClicked",
                value: function() {
                    this.state.expanded ? this.setState({
                        manualOpen: !0,
                        expanded: !1
                    }) : this.setState({
                        manualOpen: !0,
                        expanded: !0
                    })
                }
            }, {
                key: "getHeader",
                value: function(e) {
                    var t = this,
                        n = this.props.consentsErrorMsg && this.props.consents.find(function(e) {
                            return !(0, r.validateConsent)(e, t.props.consentStates)
                        }),
                        s = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                            return "consentDocuments" === e.type
                        }) && this.isSectionWithPrintDocument(e) && this.props.showPrintDocumentsButton;
                    return (this.getNotPermanentlyAgreedConsents() && 0 < this.getNotPermanentlyAgreedConsents().length || this.props.hasAlreadyAgreed && "WWW" !== this.props.channels.sales) && i.default.createElement("div", {
                        className: "opl-agreements__item opl-agreements__item--master u-padding-right-xl ".concat(this.props.backgroundColor) + (0 != this.props.sequence ? " u-border-top" : "")
                    }, i.default.createElement("div", {
                        className: "l-row"
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12 u-padding-l u-padding-top-l"
                    }, i.default.createElement("label", {
                        className: "opl-checkbox u-margin-right o-checkbox"
                    }, i.default.createElement("input", {
                        type: "checkbox",
                        id: "selectAllConsents-a-" + this.props.id,
                        checked: this.isAllSelected(),
                        onChange: this.agreeAllCheckboxChange.bind(this),
                        disabled: this.allConsentsAreReadOnly() || this.props.isUpdating && this.containsRelatedWithBonusConsent(),
                        hidden: this.selectAllConsentsCheckboxIsHidden(),
                        className: n || s ? " error" : ""
                    }), i.default.createElement("span", {
                        className: "o-ci"
                    }), i.default.createElement("span", {
                        className: "h5 o-ci-label",
                        dangerouslySetInnerHTML: {
                            __html: this.props.title
                        }
                    })), this.props.description && i.default.createElement("span", null, i.default.createElement(u.default, {
                        className: "l-col-small-12 l-col-medium-12 l-col-9 u-margin-left-l-xl l-padding-top-l",
                        html: this.props.description,
                        labelShow: "[więcej]",
                        labelHide: "[mniej]"
                    })), this.showConfirmationRequiredDescription() && i.default.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.confirmationDescription
                        }
                    }), i.default.createElement(o.Trigger, {
                        className: "opl-agreements__group__trigger opl-agreements__group__trigger-arrow js-expander__trigger u-inline u-text-nowrap",
                        onClick: this.onClicked.bind(this),
                        expanded: this.state.expanded
                    }, i.default.createElement("span", {
                        className: "js-expander__trigger--show"
                    }), i.default.createElement("span", {
                        className: "js-expander__trigger--hide"
                    })), i.default.createElement("div", null, i.default.createElement(a.default, {
                        messageType: n ? "consents" : "consentDocuments",
                        show: !!n || !!s,
                        className: " u-margin-left-l-xl u-margin-top-s "
                    }), this.getInfoForBonusConsentSection()))))
                }
            }, {
                key: "getInfoForBonusConsentSection",
                value: function() {
                    var t = this,
                        e = this.props.consentsErrorMsg && this.props.consents.find(function(e) {
                            return !(0, r.validateConsent)(e, t.props.consentStates)
                        });
                    return !this.containsRelatedWithBonusConsent() || this.sectionExpanded() || e || this.isAllChecked() || !this.props.descriptions.bonusGroupBusinessImplications ? "" : i.default.createElement("div", {
                        className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                    }, i.default.createElement("p", {
                        className: "o-icon-text__text g-black1-c"
                    }, this.props.descriptions.bonusGroupBusinessImplications))
                }
            }, {
                key: "showConfirmationRequiredDescription",
                value: function() {
                    var t = this;
                    return this.props.confirmationDescription && this.props.consents && this.props.confirmationRequiredConsentCodes && 0 < this.props.consents.filter(function(e) {
                        return -1 !== t.props.confirmationRequiredConsentCodes.indexOf(e.consentCode)
                    }).length
                }
            }, {
                key: "containsRelatedWithBonusConsent",
                value: function() {
                    return this.props.consents && 0 < this.props.consents.filter(function(e) {
                        return e.isRelatedWithBonus
                    }).length
                }
            }, {
                key: "sectionExpanded",
                value: function() {
                    return this.state.expanded
                }
            }, {
                key: "consentIsPermanentlyAgreed",
                value: function(e) {
                    return (0, r.consentIsPermanentlyAgreed)(e, this.props.consentProps.consentStates)
                }
            }, {
                key: "getNotPermanentlyAgreedConsents",
                value: function() {
                    var t = this;
                    return this.props.consents.filter(function(e) {
                        return !t.consentIsPermanentlyAgreed(e)
                    })
                }
            }, {
                key: "getPermanentlyAgreedConsents",
                value: function() {
                    var t = this;
                    return this.props.consents.filter(function(e) {
                        return t.consentIsPermanentlyAgreed(e)
                    })
                }
            }, {
                key: "permanentlyAgreedAreVisible",
                value: function() {
                    var e = this.props.listNo;
                    return !!this.props.consentProps.permanentlyAgreedVisibleForGroup[e]
                }
            }, {
                key: "togglePermanentlyAgreedVisibility",
                value: function(e) {
                    e.preventDefault();
                    var t = this.props.listNo,
                        n = !!this.props.consentProps.permanentlyAgreedVisibleForGroup[t];
                    this.props.setPermanentlyAgreedConsentsVisibleForGroup(t, !n)
                }
            }, {
                key: "selectAllConsentsCheckboxIsHidden",
                value: function() {
                    return this.isTheOnlyOneConsent() || 0 === this.getNotPermanentlyAgreedConsents().length && !this.permanentlyAgreedAreVisible()
                }
            }, {
                key: "isRelatedWithBonusBySubsection",
                value: function(t) {
                    return (this.props.sections || []).filter(function(e) {
                        return e.withBonus
                    }).map(function(e) {
                        return e.consentsCode
                    }).some(function(e) {
                        return -1 < e.indexOf(t)
                    })
                }
            }, {
                key: "getConsentsInSubsections",
                value: function(e, n, s) {
                    var o = this,
                        t = 0;
                    if (e = e.map(function(e) {
                            return p({}, e, {
                                sectionIndex: t++
                            })
                        }), this.props.sections[0]) {
                        var r = function(e, t) {
                            return !!e.consentsCode.filter(function(e) {
                                return e === t.consentCode
                            })[0]
                        };
                        return this.props.sections.map(function(t) {
                            return {
                                consents: e.filter(function(e) {
                                    return r(t, e)
                                }),
                                allConsents: n.filter(function(e) {
                                    return r(t, e)
                                }),
                                preamble: s ? t.preamble : null,
                                sectionWithBonus: t.withBonus
                            }
                        }).map(function(e, t) {
                            return i.default.createElement(l.default, babelHelpers.extends({
                                className: "".concat(o.props.sections.length - 1 === t ? "" : "u-border-bottom u-margin-l")
                            }, o.props, e, {
                                getPropsForConsent: o.getPropsForConsent.bind(o)
                            }))
                        })
                    }
                    return i.default.createElement(l.default, babelHelpers.extends({}, this.props, {
                        consents: e,
                        getPropsForConsent: this.getPropsForConsent.bind(this)
                    }))
                }
            }, {
                key: "getViewExpander",
                value: function() {
                    var t = this,
                        e = this.getPermanentlyAgreedConsents(),
                        n = this.getNotPermanentlyAgreedConsents(),
                        s = e.concat(n);
                    this.props.consentsErrorMsg && this.props.consents.find(function(e) {
                        return !(0, r.validateConsent)(e, t.props.consentStates)
                    });
                    return i.default.createElement(o.Section, {
                        header: this.getHeader(this.props.listNo),
                        variant: "",
                        className: "opl-agreements__group js-expander__container",
                        expanded: this.state.expanded,
                        styleObject: this.props.styleObject,
                        renderCount: ++h,
                        ref: function(e) {
                            return t.ref = e
                        },
                        contentClassName: "u-float-none l-col l-col-small-12 l-col-medium-12 l-col-9 opl-agreements__group__content js-expander__content u-hide--soft u-padding-left-xl u-medium-padding-left-l-xl u-small-padding-left-l-xl ".concat(this.props.backgroundColor),
                        id: this.props.sectionKey,
                        key: this.props.id + "_section"
                    }, this.getConsentsInSubsections(n, s, !0), this.props.hasAlreadyAgreed && !this.permanentlyAgreedAreVisible() && "WWW" !== this.props.channels.sales && i.default.createElement("p", {
                        className: "u-padding-l u-padding-top-l"
                    }, i.default.createElement("span", {
                        "aria-hidden": "true",
                        className: "g-icon g-icon--xs-s g-icon--info u-margin-right-s g-gray7-c"
                    }), i.default.createElement("span", null, "Powyższe zgody obejmują tylko te, które nie zostały wyrażone i wypełnione przy wcześniejszych zakupach.  ", i.default.createElement("a", {
                        href: "#",
                        onClick: this.togglePermanentlyAgreedVisibility.bind(this)
                    }, "Pokaż wszystkie zgody"))), e && 0 < e.length && this.permanentlyAgreedAreVisible() && [i.default.createElement("p", {
                        className: "opl-agreements-list__recentHeader u-font-bold u-margin-top-l"
                    }, "Zgody wyrażone przy wcześniejszych zakupach ", i.default.createElement("a", {
                        href: "#",
                        onClick: this.togglePermanentlyAgreedVisibility.bind(this)
                    }, "Ukryj")), this.getConsentsInSubsections(e, s, !1)], this.renderConsentDocumentsButton(this.props.listNo))
                }
            }, {
                key: "renderConsentDocumentsButton",
                value: function(e) {
                    var t = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                        return "consentDocuments" === e.type
                    });
                    return i.default.createElement("div", null, this.isSectionWithPrintDocument(e) && this.props.showPrintDocumentsButton && i.default.createElement("div", {
                        className: "u-padding-l"
                    }, i.default.createElement("div", {
                        id: "consents-console",
                        className: "l-row opl-console u-no-margin " + ("WWW" != this.props.channels.sales && "delivery-payment" === this.props.currentStepId ? "g-white1-bg" : "g-gray2-bg")
                    }, i.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, i.default.createElement(a.default, {
                        messageType: "consentDocuments",
                        show: !!t,
                        className: "u-padding-l"
                    })), i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-padding-left-l u-padding-right-l"
                    }, i.default.createElement(c.OraButton, {
                        onClick: "MOBILE" == this.props.factoryType ? this.props.printMobileConsents : this.props.printConsents,
                        customClasses: "o-btn opl-btn opl-btn--green u-w-100",
                        type: "green",
                        disabled: !this.props.isPrintConsentDocumentsButtonEnabled
                    }, i.default.createElement("span", {
                        className: "opl-ripple-box"
                    }, i.default.createElement("span", {
                        className: "opl-ripple-circle"
                    })), this.props.buttonText)), i.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-9 l-col-10  u-padding-left-l u-padding-right-l u-small-padding-top"
                    }, i.default.createElement("p", {
                        className: "u-font-standard"
                    }, this.props.info)))))
                }
            }, {
                key: "render",
                value: function() {
                    return i.default.createElement("div", null, this.getViewExpander())
                }
            }, {
                key: "isTheOnlyOneConsent",
                value: function() {
                    return this.props.consents && 1 === this.props.consents.length
                }
            }]), s
        }(i.default.Component);
    e.default = f
});
//# sourceMappingURL=MulticartConsentsGroupSection.js.map