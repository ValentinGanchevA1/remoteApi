define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "eshop/modules/core/components/ui/Expander", "./MulticartSingleConsentCheckboxRow", "./MulticartSingleConsentRadioButtonRow", "eshop/modules/core/utils/ui"], function(e, o, t, a, n, l, r, i) {
    "use strict";

    function c(s) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), r = babelHelpers.interopRequireDefault(r);
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var n = c(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = n.call(this, e)).state = {
                showModal: !1
            }, t
        }
        return babelHelpers.createClass(s, [{
            key: "getModalProps",
            value: function() {
                return {
                    open: this.state.showModal,
                    size: "narrow",
                    showClose: !0,
                    escapeClose: !1,
                    clickClose: !1,
                    onClose: this.setShowModal.bind(this, !1)
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.loadExpander()
            }
        }, {
            key: "loadExpander",
            value: function() {
                this.expanderPromise = (0, i.loadModule)(this.expander, {
                    path: "common/modules/opl-expander",
                    options: {
                        parentClass: "js-expander__container__nested",
                        contentSelector: ".js-expander__content__nested",
                        triggerSelector: ".js-expander__trigger__nested",
                        scrollToSelected: !1
                    }
                })
            }
        }, {
            key: "setShowModal",
            value: function(e) {
                this.setState({
                    showModal: e
                })
            }
        }, {
            key: "agreeConsentChange",
            value: function(e) {
                if (this.setShowModal(!1), e) {
                    var t = this.bundleAssignment ? this.bundleAssignment.bundleNo : null;
                    this.bundleAssignment = null, this.onChangeCallback({
                        consentCode: this.props.consent.consentCode,
                        stateCode: this.props.consent.states.find(function(e) {
                            return !e.positive
                        }).code,
                        bundleNo: t
                    })
                }
            }
        }, {
            key: "onStateChange",
            value: function(e, t) {
                var n = this.props.consent.states.find(function(e) {
                    return e.code === t.target.value
                });
                if (this.hasBonus() && n.businessImplicationsDescr) this.bundleAssignment = e, this.setShowModal(!0), this.modalContent = n.businessImplicationsDescr;
                else {
                    var s = e ? e.bundleNo : null;
                    this.onChangeCallback({
                        consentCode: this.props.consent.consentCode,
                        stateCode: t.target.value,
                        bundleNo: s
                    })
                }
            }
        }, {
            key: "onChangeCallback",
            value: function(e) {
                this.props.consentsWithBonusLoading ? this.props.onUpdate([e]) : this.props.onChange([e])
            }
        }, {
            key: "getButtonProps",
            value: function(e) {
                return {
                    className: "u-w-100",
                    accept: e,
                    onClick: this.agreeConsentChange.bind(this, !e),
                    type: e ? "primary" : "secondary"
                }
            }
        }, {
            key: "hasBusinessImplications",
            value: function() {
                return this.props.consent.states.map(function(e) {
                    return e.businessImplicationsDescr
                }).find(function(e) {
                    return e
                })
            }
        }, {
            key: "hasBonus",
            value: function() {
                return !!this.props.consent.bonuses && 0 < this.props.consent.bonuses.length
            }
        }, {
            key: "getModalContent",
            value: function() {
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "l-page-row u-font-bold u-small-no-spacing"
                }, o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, o.default.createElement("h2", {
                    className: "u-no-spacing"
                }, "Uwaga!"))), o.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12"
                }, o.default.createElement("p", {
                    className: "u-font-normal u-font-small"
                }, this.modalContent))), o.default.createElement("div", {
                    className: "o-separator o-separator--m u-spacing-top-l u-small-visible-hide"
                }), o.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4"
                }, o.default.createElement(t.OraButton, this.getButtonProps(!0), "Wróć do zgód")), o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-padding-top-l"
                }, o.default.createElement(t.OraButton, this.getButtonProps(!1), "Dalej")))))
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = (this.props.consent.states.find(function(e) {
                        return e.positive
                    }), this.props.consent.states.find(function(e) {
                        return !e.positive
                    }), !(this.props.consent && "OSW" === this.props.consent.type));
                return o.default.createElement("fieldset", {
                    ref: function(e) {
                        return t.expander = e
                    },
                    className: "u-padding-top-l opl-agreements__item opl-agreements__item--slave true u-padding-right ",
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-conditions": "element:{was seen}"
                }, o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col " + (e ? "l-col-12" : "l-col-10") + " u-padding-l"
                }, this.hasBonus() && this.hasBusinessImplications() ? o.default.createElement(a.default, this.getModalProps(), this.getModalContent()) : "", this.props.formInputType && "CHECKBOX" === this.props.formInputType || this.props.consent && "OSW" === this.props.consent.type ? o.default.createElement(l.default, babelHelpers.extends({
                    key: this.props.name
                }, this.props, {
                    onStateChange: this.onStateChange.bind(this),
                    onChangeCallback: this.onChangeCallback.bind(this),
                    showTitle: e
                })) : o.default.createElement(r.default, babelHelpers.extends({}, this.props, {
                    onStateChange: this.onStateChange.bind(this),
                    onChangeCallback: this.onChangeCallback.bind(this)
                })))))
            }
        }]), s
    }(o.default.Component);
    e.default = s
});
//# sourceMappingURL=MulticartSingleConsentRow.js.map