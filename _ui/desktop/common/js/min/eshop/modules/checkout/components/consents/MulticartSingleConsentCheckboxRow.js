define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Expander", "eshop/modules/checkout/components/MulticartConsentValidationComponent", "eshop/modules/core/constants/FactoryTypeEnum"], function(e, o, r, t, i, a) {
    "use strict";

    function l(s) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a);
    var n = function(e) {
        babelHelpers.inherits(s, e);
        var n = l(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = n.call(this, e)).state = {
                showModal: !1,
                descriptionExpanded: !1
            }, t
        }
        return babelHelpers.createClass(s, [{
            key: "isBundleAssigmentsAllSelected",
            value: function(t) {
                var e = this;
                if (0 === this.props.consents.length) return !1;
                var n, s, o, r = !0,
                    i = this.props.consents.find(function(e) {
                        return e.consentCode === t
                    });
                return i && (s = i.states.find(function(e) {
                    return e.positive
                }), i.msisdns.forEach(function(t) {
                    n = e.props.consentStates.find(function(e) {
                        return i.consentCode === e.consentCode && e.bundleNo === t.bundleNo
                    }), o = void 0 !== n && n.stateCode === s.code, r = r && o
                })), r
            }
        }, {
            key: "agreeAllBundleAssigmentsCheckboxChange",
            value: function(e) {
                this.isBundleAssigmentsAllSelected(e) ? this.uncheckBundleAssigmentsAllConsents(e) : this.acceptBundleAssigmentsAllConsents(e)
            }
        }, {
            key: "acceptBundleAssigmentsAllConsents",
            value: function(e) {
                this.onBundleAssigmentChangeCallback(this.getConsentMapping(e, !0))
            }
        }, {
            key: "uncheckBundleAssigmentsAllConsents",
            value: function(e) {
                this.onBundleAssigmentChangeCallback(this.getConsentMapping(e, !1))
            }
        }, {
            key: "getConsentMapping",
            value: function(t, e) {
                var n = [],
                    s = this.props.consents.find(function(e) {
                        return e.consentCode === t
                    });
                if (s && !s.readonly) {
                    var o = e ? s.states.find(function(e) {
                        return e.positive
                    }).code : null;
                    s.bundleAssignments && 0 !== s.bundleAssignments.length ? n = n.concat(s.bundleAssignments.map(function(e) {
                        return {
                            consentCode: s.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: o,
                            relatedWithBonus: s.isRelatedWithBonus
                        }
                    })) : s.msisdns && 0 < s.msisdns.length ? s.msisdns.forEach(function(e) {
                        n.push({
                            consentCode: s.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: o,
                            relatedWithBonus: s.isRelatedWithBonus
                        })
                    }) : n.push({
                        consentCode: s.consentCode,
                        bundleNo: null,
                        stateCode: o,
                        relatedWithBonus: s.isRelatedWithBonus
                    })
                }
                return n
            }
        }, {
            key: "getPropsForBACheckbox",
            value: function(e, t, n, s, o) {
                return {
                    checked: this.isBundleAssigmentsAllSelected(this.props.consent.consentCode),
                    onChange: this.agreeAllBundleAssigmentsCheckboxChange.bind(this, this.props.consent.consentCode),
                    labelClassName: "u-margin-top opl-checkbox o-checkbox u-w-100",
                    text: this.prepareCheckboxText(s, o)
                }
            }
        }, {
            key: "getPropsForCheckbox",
            value: function(e, t, n, s, o) {
                var r, i = n ? "_" + n.bundleNo : "";
                r = n ? this.props.state && this.props.state.find(function(e) {
                    return e.bundleNo === n.bundleNo
                }) : this.props.state && this.props.state.find(function(e) {
                    return !e.bundleNo
                });
                var a = !1;
                if (this.props.state && 0 !== this.props.state.length)
                    if (n) {
                        var l = this.props.state.find(function(e) {
                            return e.bundleNo === n.bundleNo
                        });
                        a = !!l && l.stateCode == e.code
                    } else a = this.props.state.find(function(e) {
                        return e
                    }).stateCode == e.code;
                var u = r ? r.stateCode : this.props.consent.states.find(function(e) {
                        return !e.positive
                    }).code,
                    c = this.props.consentsErrorList && this.props.isMandatory && (!this.props.state || 0 == this.props.state.length || !this.props.state[0].stateCode),
                    p = this.props.consent.title;
                return o || (p = this.props.consent.description, s = !1), {
                    name: this.props.consent.consentCode + i,
                    key: name,
                    text: this.prepareCheckboxText(n ? n.label : p, !o || this.props.consent.msisdns && 0 < this.props.consent.msisdns.length),
                    labelClassName: "opl-checkbox o-checkbox u-w-100 " + (s ? "" : "u-font-normal"),
                    readOnly: this.props.consent.readonly || this.props.consentsWithBonusLoading && this.props.isUpdating,
                    value: u,
                    checked: a,
                    onChange: this.onStateChange.bind(this, u, e, t, n),
                    inputClassName: c ? " error" : ""
                }
            }
        }, {
            key: "onStateChange",
            value: function(e, t, n, s) {
                var o = s ? s.bundleNo : null;
                this.onChangeCallback({
                    consentCode: this.props.consent.consentCode,
                    stateCode: e === n.code ? t.code : n.code,
                    bundleNo: o
                })
            }
        }, {
            key: "onChangeCallback",
            value: function(e) {
                this.props.consentsWithBonusLoading ? this.props.onUpdate([e]) : this.props.onChange([e])
            }
        }, {
            key: "onBundleAssigmentChangeCallback",
            value: function(e) {
                this.props.consentsWithBonusLoading ? this.props.onUpdate(e) : this.props.onChange(e)
            }
        }, {
            key: "defaultStateCode",
            value: function() {
                var e = this.props.consent.states.find(function(e) {
                    return e.isDefault
                });
                return !!e && e.code
            }
        }, {
            key: "formatMsisdn",
            value: function(e, t) {
                if (!e || 9 !== e.length) return e;
                switch (t) {
                    case a.default.FIX:
                        return e.substring(0, 2) + " " + e.substring(2, 5) + " " + e.substring(5, 7) + " " + e.substring(7, e.length);
                    default:
                        return e.substring(0, 3) + " " + e.substring(3, 6) + " " + e.substring(6, e.length)
                }
            }
        }, {
            key: "getMsisdnCheckBoxRow",
            value: function(e, t, n) {
                return o.default.createElement("fieldset", {
                    className: "l-row u-margin-l u-large-margin"
                }, o.default.createElement(r.OraSimpleCheckbox, this.getPropsForCheckbox(e, t, n, !1, !0)))
            }
        }, {
            key: "renderMsisdnMatrix",
            value: function(t, n) {
                var s = this;
                return this.props.consent.msisdns && 0 < this.props.consent.msisdns.length ? o.default.createElement("div", {
                    className: "u-padding-top-m u-margin-left-xxl"
                }, this.props.consent.msisdns.map(function(e) {
                    return s.getMsisdnCheckBoxRow(t, n, {
                        bundleNo: e.bundleNo,
                        label: "Zgoda dla numeru telefonu " + s.formatMsisdn(e.msisdn, e.factoryType)
                    })
                })) : ""
            }
        }, {
            key: "prepareCheckboxText",
            value: function(e, t) {
                return t ? o.default.createElement("span", null, e) : o.default.createElement("span", null, o.default.createElement("span", {
                    className: "l-col l-col-10 u-no-padding-l"
                }, e), o.default.createElement("span", {
                    className: "l-col l-col-2 u-small-hide u-right u-padding-right-l"
                }, this.prepareDescriptionExpander()))
            }
        }, {
            key: "prepareDescriptionExpander",
            value: function() {
                return o.default.createElement("a", {
                    className: "u-right js-expander__trigger__nested u-inline-block u-text-nowrapl u-small-margin-left-l-xl u-small-padding-top-l u-medium-margin-left-l u-large-margin-left-l",
                    href: "#",
                    id: this.props.consent.consentCode + this.props.id + "_control",
                    role: "tab",
                    "aria-controls": this.props.consent.consentCode + this.props.id + "_tab",
                    "aria-expanded": "true"
                }, o.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwiń"), o.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Rozwiń"))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.consent.states.find(function(e) {
                        return e.positive
                    }),
                    t = this.props.consent.states.find(function(e) {
                        return !e.positive
                    });
                return o.default.createElement("legend", {
                    className: "js-expander__container__nested u-w-100"
                }, (!this.props.consent.msisdns || null == this.props.consent.msisdns || 0 == this.props.consent.msisdns.length) && o.default.createElement(r.OraSimpleCheckbox, this.getPropsForCheckbox(e, t, null, !0, this.props.showTitle)), this.props.consent.msisdns && 0 < this.props.consent.msisdns.length && o.default.createElement(r.OraSimpleCheckbox, this.getPropsForBACheckbox(e, t, null, this.props.consent.title, !1)), o.default.createElement(i.default, babelHelpers.extends({}, this.props, {
                    className: "u-margin-left-l-xl"
                })), this.props.showTitle && o.default.createElement("span", {
                    className: "u-large-hide u-medium-hide"
                }, this.prepareDescriptionExpander()), this.props.showTitle && o.default.createElement("div", {
                    className: "js-expander__content__nested u-hide--soft u-margin-left-l-xl",
                    id: this.props.consent.consentCode + this.props.id + "_tab",
                    "aria-hidden": "false",
                    role: "tabpanel",
                    "aria-labelledby": this.props.consent.consentCode + this.props.id + "_control"
                }, o.default.createElement("div", {
                    className: "u-padding-top-l"
                }, o.default.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }), this.props.consent.msisdns && 0 < this.props.consent.msisdns.length && o.default.createElement(r.OraSimpleCheckbox, this.getPropsForBACheckbox(e, t, null, "Zgoda dla wszystkich poniższych numerów telefonów", !0)), this.renderMsisdnMatrix(e, t))))
            }
        }]), s
    }(o.default.Component);
    e.default = n
});
//# sourceMappingURL=MulticartSingleConsentCheckboxRow.js.map