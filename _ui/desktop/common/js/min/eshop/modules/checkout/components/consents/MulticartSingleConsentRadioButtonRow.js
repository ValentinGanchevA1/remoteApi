define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Expander", "eshop/modules/checkout/components/MulticartConsentValidationComponent", "eshop/modules/core/constants/FactoryTypeEnum"], function(e, d, u, t, p, n) {
    "use strict";

    function l(n) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, d = babelHelpers.interopRequireDefault(d), p = babelHelpers.interopRequireDefault(p), n = babelHelpers.interopRequireDefault(n);
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = l(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "getPropsForRadio",
            value: function(e, t) {
                var s = t ? "_" + t.bundleNo : "",
                    n = !1;
                if (this.props.state && 0 !== this.props.state.length)
                    if (t) {
                        var l = this.props.state.find(function(e) {
                            return e.bundleNo === t.bundleNo
                        });
                        n = !!l && l.stateCode == e.code
                    } else n = this.props.state.find(function(e) {
                        return e
                    }).stateCode == e.code;
                return {
                    name: this.props.consent.consentCode + s,
                    text: e.description,
                    value: e.code,
                    labelClassName: "o-radio opl-radio",
                    readOnly: this.props.consent.readonly,
                    checked: n,
                    onChange: this.props.onStateChange.bind(this, t)
                }
            }
        }, {
            key: "endsWith",
            value: function(e, t) {
                return -1 !== e.indexOf(t, e.length - t.length)
            }
        }, {
            key: "getHeader",
            value: function() {
                return d.default.createElement("legend", {
                    className: "l-col l-col-8 l-col-small-12 l-col-medium-12"
                }, d.default.createElement("span", {
                    className: "u-font-bold u-block"
                }, this.props.consent.title), d.default.createElement("span", {
                    className: "u-block u-padding-top-l u-medium-padding-l u-small-padding-l",
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }))
            }
        }, {
            key: "formatMsisdn",
            value: function(e, t) {
                if (!e || 9 !== e.length) return e;
                switch (t) {
                    case n.default.FIX:
                        return e.substring(0, 2) + " " + e.substring(2, 5) + " " + e.substring(5, 7) + " " + e.substring(7, e.length);
                    default:
                        return e.substring(0, 3) + " " + e.substring(3, 6) + " " + e.substring(6, e.length)
                }
            }
        }, {
            key: "getTitle",
            value: function() {
                return this.props.consent.title
            }
        }, {
            key: "getRadioRow",
            value: function(e, t, s, n, l, o) {
                return d.default.createElement("div", {
                    className: 0 == l && this.props.isDeliveryStep ? "l-row" : "l-row u-border-top"
                }, d.default.createElement("div", {
                    className: (o ? "u-small-padding-l u-medium-padding-l " : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-12 l-col-8 u-padding-top-l " + (0 === l ? "u-small-no-padding-t u-medium-no-padding-t" : "")
                }, d.default.createElement("span", {
                    className: "u-spacing-right",
                    dangerouslySetInnerHTML: {
                        __html: s.label
                    }
                }), n), d.default.createElement("div", {
                    className: (o ? "u-small-padding-l " : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-4 l-col-2 u-padding-top-l u-medium-no-padding-t u-small-no-padding-t"
                }, e && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(e, s))), d.default.createElement("div", {
                    className: (o ? "" : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-4 l-col-2 u-padding-top-l u-medium-no-padding-t u-small-no-padding-t"
                }, t && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(t, s))), d.default.createElement("div", {
                    id: "consent-error-message" + l,
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-8"
                }, d.default.createElement(p.default, babelHelpers.extends({
                    className: o ? "u-padding-top-l" : "u-padding-l",
                    scrollOffsetCalculateFrom: "consent-error-message" + l,
                    scrollOffsetCalculateTo: "consent-section",
                    consentsErrorMsg: this.props.consent.wariningMessage
                }, this.props, {
                    correspondingBa: s
                }))))
            }
        }, {
            key: "getMsisdnRadioRow",
            value: function(e, t, s) {
                return d.default.createElement("fieldset", {
                    className: "l-row u-margin-l u-large-margin"
                }, d.default.createElement("legend", {
                    className: "l-col l-col-8 l-col-small-12 l-col-medium-4 u-font-bold"
                }, s.label), d.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-top"
                }, e && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(e, s))), d.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-top"
                }, t && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(t, s))))
            }
        }, {
            key: "renderMsisdnMatrix",
            value: function(t, s) {
                var n = this;
                return this.props.consent.msisdns && 0 < this.props.consent.msisdns.length ? d.default.createElement("div", {
                    className: "u-padding-top-m"
                }, this.props.consent.msisdns.map(function(e) {
                    return n.getMsisdnRadioRow(t, s, {
                        bundleNo: e.bundleNo,
                        label: "numer telefonu " + n.formatMsisdn(e.msisdn, e.factoryType)
                    })
                })) : ""
            }
        }, {
            key: "getRadioRows",
            value: function(a, i, e) {
                var r = this;
                if (!e) {
                    var c = this.props.consent.bundleAssignments.length - 1;
                    return d.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.props.consent.bundleAssignments.map(function(t, e) {
                        var s = "",
                            n = e === c;
                        r.props.state && 0 < r.props.state.length && (s = r.props.state.find(function(e) {
                            return e.bundleNo === t.bundleNo
                        }) || "");
                        var l = r.props.consent.states.filter(function(e) {
                                return e.code === s.stateCode
                            }).map(function(e) {
                                return e.businessImplicationsDescr
                            }).find(function(e) {
                                return e
                            }),
                            o = l ? d.default.createElement("div", {
                                className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                            }, d.default.createElement("p", {
                                className: "o-icon-text__text g-black1-c"
                            }, l)) : null;
                        return r.getRadioRow(a, i, t, o, e, n)
                    }))
                }
                if (!this.props.consent.msisdns || 0 === this.props.consent.msisdns.length) return d.default.createElement("div", null, d.default.createElement("div", null, d.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-l"
                }, a && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(a))), d.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-l"
                }, i && d.default.createElement(u.OraSimpleRadio, this.getPropsForRadio(i)))), d.default.createElement("div", {
                    id: "single-error-message",
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-8"
                }, d.default.createElement(p.default, babelHelpers.extends({
                    className: "u-large-padding-top-l u-medium-padding-top-l",
                    scrollOffsetCalculateFrom: "single-error-message",
                    scrollOffsetCalculateTo: "consent-section",
                    consentsErrorMsg: this.props.consent.wariningMessage
                }, this.props))))
            }
        }, {
            key: "getViewExpander",
            value: function(e, t) {
                var s = this,
                    n = !("FIX" == this.props.factoryType && this.props.selectedMethod),
                    l = !!this.props.state && !!this.props.consent.states && n,
                    o = this.props.state && 0 < this.props.state.length ? this.props.state.find(function(e) {
                        return e
                    }) : "",
                    a = !this.props.consent.bundleAssignments || 0 === this.props.consent.bundleAssignments.length;
                l && this.props.consent.states.filter(function(e) {
                    return e.code === o.stateCode
                }).map(function(e) {
                    return e.businessImplicationsDescr
                }).find(function(e) {
                    return e
                }), this.props.consent.msisdns;
                return this.props.consent.msisdns && 0 !== this.props.consent.msisdns.length ? d.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.consent.title) : d.default.createElement("fieldset", {
                    className: "l-row",
                    ref: function(e) {
                        s.ref = e
                    }
                }, this.getHeader(), this.getRadioRows(e, t, a))
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
                return d.default.createElement("div", {
                    id: "consent-section"
                }, this.getViewExpander(e, t), this.props.consent.msisdns && 0 !== this.props.consent.msisdns.length && d.default.createElement("span", {
                    className: "u-block u-padding-top-l u-medium-padding-l u-small-padding-l",
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }), this.renderMsisdnMatrix(e, t), this.getBusinessImplications())
            }
        }, {
            key: "getBusinessImplications",
            value: function() {
                var e = !("FIX" == this.props.factoryType && this.props.selectedMethod),
                    t = !!this.props.state && !!this.props.consent.states && e,
                    s = this.props.state && 0 < this.props.state.length ? this.props.state.find(function(e) {
                        return e
                    }) : "",
                    n = !this.props.consent.bundleAssignments || 0 === this.props.consent.bundleAssignments.length,
                    l = t ? this.props.consent.states.filter(function(e) {
                        return e.code === s.stateCode
                    }).map(function(e) {
                        return e.businessImplicationsDescr
                    }).find(function(e) {
                        return e
                    }) : "",
                    o = !this.props.consent.isRelatedWithBonus || 0 !== this.props.state.length && s.stateCode ? l : this.props.descriptions.bonusSingleBusinessImplications,
                    a = this.props.consent.wariningMessage ? this.props.consent.wariningMessage : o;
                return (n && !!l || a && (0 === this.props.state.length || !s.stateCode)) && !this._hasError() && d.default.createElement("div", {
                    className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                }, d.default.createElement("p", {
                    className: "o-icon-text__text g-black1-c"
                }, (0 === this.props.state.length || !s.stateCode) && a || l))
            }
        }, {
            key: "_hasError",
            value: function() {
                return this.props.consentsErrorList && this.props.isMandatory && (!this.props.state || 0 == this.props.state.length || !this.props.state[0].stateCode)
            }
        }]), s
    }(d.default.Component);
    e.default = s
});
//# sourceMappingURL=MulticartSingleConsentRadioButtonRow.js.map