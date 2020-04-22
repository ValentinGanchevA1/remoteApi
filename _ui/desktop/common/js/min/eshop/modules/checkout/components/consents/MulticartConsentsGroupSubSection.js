define(["exports", "react", "react-redux", "./MulticartSingleConsentRow", "eshop/modules/checkout/selectors"], function(e, o, t, s, n) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function i(o) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s);
    var u = function(e) {
            babelHelpers.inherits(n, e);
            var t = i(n);

            function n(e) {
                return babelHelpers.classCallCheck(this, n), t.call(this, e)
            }
            return babelHelpers.createClass(n, [{
                key: "subsectionConsentsCodes",
                value: function() {
                    return this.props.allConsents.map(function(e) {
                        return e.consentCode
                    })
                }
            }, {
                key: "currentSubsectionConsentsStates",
                value: function() {
                    var e = this.subsectionConsentsCodes();
                    return this.props.getCurrentConsentsCheckoutData().filter(function(t) {
                        return e.find(function(e) {
                            return t.consentCode == e
                        })
                    })
                }
            }, {
                key: "checkedStatesConf",
                value: function() {
                    var e = this.subsectionConsentsCodes();
                    return this.props.consentProps.consents.filter(function(t) {
                        return e.find(function(e) {
                            return t.consentCode == e
                        })
                    }).map(function(e) {
                        return {
                            consentCode: e.consentCode,
                            state: e.states.find(function(e) {
                                return e.positive
                            })
                        }
                    })
                }
            }, {
                key: "checkIfAllConsentsOfSectionAreChecked",
                value: function() {
                    var e = this.checkedStatesConf(),
                        t = this.currentSubsectionConsentsStates().reduce(function(e, t) {
                            return c({}, e, babelHelpers.defineProperty({}, t.consentCode, t.stateCode))
                        }, {});
                    return e.every(function(e) {
                        return t[e.consentCode] == e.state.code
                    })
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    if (null == this.props.sectionWithBonus) this.props.onUpdate(e);
                    else {
                        var t = this.checkIfAllConsentsOfSectionAreChecked();
                        if (this.props.onChange(e), this.props.sectionWithBonus)
                            if (this.checkIfAllConsentsOfSectionAreChecked() != t) {
                                var o = ["bundleNo", "consentCode", "stateCode"],
                                    n = this.currentSubsectionConsentsStates().map(function(n) {
                                        return o.reduce(function(e, t) {
                                            return c({}, e, babelHelpers.defineProperty({}, t, n[t]))
                                        }, {})
                                    });
                                this.props.onUpdate(n)
                            }
                    }
                }
            }, {
                key: "preamble",
                value: function() {
                    return this.props.consents && this.props.consents[0] && this.props.preamble ? o.default.createElement("div", {
                        className: "u-padding-top-l"
                    }, o.default.createElement("blockquote", {
                        className: "opl-blockquote g-bluef-bdrc u-box-shadow--s u-no-padding-l"
                    }, o.default.createElement("div", {
                        className: "opl-msg opl-msg--box opl-msg--info g-white1-bg g-black1-c"
                    }, o.default.createElement("div", {
                        className: "o-icon-list"
                    }, o.default.createElement("div", {
                        className: "o-icon-list__item"
                    }), o.default.createElement("div", {
                        className: "u-xsmall-block u-small-padding-l o-icon-list__icon u-vertical-top u-padding-right"
                    }, o.default.createElement("div", {
                        className: "g-icon g-icon--info g-icon--before g-icon--s g-bluef-c",
                        "aria-hidden": "true"
                    })), o.default.createElement("div", {
                        class: "o-icon-list__text"
                    }, o.default.createElement("p", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.preamble
                        }
                    })))))) : null
                }
            }, {
                key: "consentsWithBonusLoading",
                value: function() {
                    return null != this.props.sectionWithBonus ? {
                        consentsWithBonusLoading: this.props.sectionWithBonus
                    } : {}
                }
            }, {
                key: "render",
                value: function() {
                    var n = this;
                    return o.default.createElement("div", {
                        className: this.props.className || ""
                    }, this.preamble(), this.props.consents.map(function(e, t) {
                        return o.default.createElement("div", {
                            className: "".concat(n.props.consents.length - 1 === t ? "" : "u-border-bottom")
                        }, o.default.createElement(s.default, babelHelpers.extends({}, n.props.getPropsForConsent(e), n.consentsWithBonusLoading(), {
                            onUpdate: n.onUpdate.bind(n),
                            descriptions: n.props.descriptions,
                            isDeliveryStep: n.props.isDeliveryStep,
                            sectionKey: "consent" + e.sectionIndex,
                            consents: n.props.consents,
                            consentStates: n.props.consentStates,
                            formInputType: n.props.formInputType
                        })))
                    }))
                }
            }]), n
        }(o.default.Component),
        a = (0, t.connect)(function() {
            return {}
        }, function(e) {
            return {
                getCurrentConsentsCheckoutData: function() {
                    return e(function(e, t) {
                        return (0, n.getConsentsCheckoutData)(t())
                    })
                }
            }
        })(u);
    e.default = a
});
//# sourceMappingURL=MulticartConsentsGroupSubSection.js.map