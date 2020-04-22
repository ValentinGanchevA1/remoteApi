define(["exports", "react", "react-redux", "../../actions/app", "../../selectors", "../../actions/data", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "./RepresentationMode", "./Representatives", "./Grantors", "../../../core/components/ui/Tooltip"], function(e, n, t, o, a, r, i, s, l, p, d, u) {
    "use strict";

    function c(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), p = babelHelpers.interopRequireDefault(p), d = babelHelpers.interopRequireDefault(d), u = babelHelpers.interopRequireDefault(u);
    var m = function(e) {
        babelHelpers.inherits(r, e);
        var t = c(r);

        function r(e) {
            var a;
            return babelHelpers.classCallCheck(this, r), a = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(a), "calculateComponentHeader", function(e) {
                var t = !(-1 === ["JP", "WP"].indexOf(a.props.representationMode));
                return "WWW" === e && t ? n.default.createElement(u.default, {
                    label: a.props.descriptions.title
                }, "Przy podpisywaniu umowy przez pełnomocnika niezbędne jest posiadanie oryginału pełnomocnictwa\n                            w formie aktu notarialnego lub pełnomocnictwa z notarialnie poświadczonym podpisem.\n                            Pełnomocnictwo powinno zawierać datę udzielenia pełnomocnictwa.") : a.props.descriptions.title
            }), a.addRepresentative = a.addRepresentative.bind(babelHelpers.assertThisInitialized(a)), a.addGrantor = a.addGrantor.bind(babelHelpers.assertThisInitialized(a)), a
        }
        return babelHelpers.createClass(r, [{
            key: "modesConfig",
            value: function() {
                return [{
                    mode: "JR",
                    minRC: 1,
                    maxRC: 1,
                    minRMC: 0,
                    maxRMC: 0
                }, {
                    mode: "WR",
                    minRC: 2,
                    maxRC: this.props.maxRepresentativesCount,
                    minRMC: 0,
                    maxRMC: 0
                }, {
                    mode: "JP",
                    minRC: 1,
                    maxRC: 1,
                    minRMC: 1,
                    maxRMC: this.props.maxGrantorsCount
                }, {
                    mode: "WP",
                    minRC: 2,
                    maxRC: this.props.maxRepresentativesCount,
                    minRMC: 1,
                    maxRMC: this.props.maxGrantorsCount
                }]
            }
        }, {
            key: "modeConfig",
            value: function() {
                var t = this;
                return this.modesConfig().filter(function(e) {
                    return e.mode === t.props.representationMode
                })[0]
            }
        }, {
            key: "legalForm",
            value: function() {
                var e = this.props.customer && this.props.customer.legalForm;
                return function(e) {
                    if (e) return e.length <= 4 ? e : {
                        ONE_PERSON_ENTERPRISE: "JDG",
                        PRIVATE_LIMITED_COMPANY: "SZOO",
                        CIVIL_PARTNERSHIP: "SC",
                        FOUNDATION: "FUN",
                        JOINT_STOCK_COMPANY: "SA",
                        GENERAL_PARTNERSHIP: "SJ",
                        COMANCIATE_COMPANY: "SK",
                        CANTEEN_JOINT_STOCK_COMPANY: "SKA",
                        PARTNERSHIP: "SP",
                        ASSOCIATION: "STOW"
                    } [e]
                }(e)
            }
        }, {
            key: "validRepresentationMethods",
            value: function() {
                if (this.legalForm()) {
                    var e = this.props.validRepresentationModes[this.legalForm()];
                    return e || []
                }
                return []
            }
        }, {
            key: "addRepresentative",
            value: function() {
                var e = this.props.representativesFormData.length;
                this.props.setRepresentativeData({
                    index: e
                })
            }
        }, {
            key: "addGrantor",
            value: function() {
                var e = this.props.grantorsFormData.length;
                this.props.setGrantorData({
                    index: e
                })
            }
        }, {
            key: "representationModeOptions",
            value: function() {
                var t = this,
                    e = this.props.representationModeOptions[0] ? this.props.representationModeOptions : v;
                return e.filter(function(e) {
                    return -1 < t.validRepresentationMethods().indexOf(e.value)
                })
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.props.registerValidation(), this.props.requestCartRepresentativeData()
            }
        }, {
            key: "getRepresentativeLabel",
            value: function() {
                return {
                    JR: this.props.descriptions.representativeLabel,
                    WR: this.props.descriptions.representativeLabelPlural,
                    JP: this.props.descriptions.representativeLabelForProxy,
                    WP: this.props.descriptions.representativeLabelForProxyPlural
                } [this.props.representationMode]
            }
        }, {
            key: "render",
            value: function() {
                return this.legalForm() ? n.default.createElement("div", {
                    className: "opl-form u-padding-top-xl"
                }, n.default.createElement("div", {
                    className: "h2"
                }, this.calculateComponentHeader(this.props.channels.sales)), !this.props.isValid && n.default.createElement(i.default, {
                    messageType: "representativeData"
                }), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4"
                }, this.getRepresentativeLabel() ? n.default.createElement("div", {
                    className: "h4"
                }, this.getRepresentativeLabel()) : null, n.default.createElement(l.default, {
                    defaultMode: this.props.descriptions.defaultMode,
                    options: this.representationModeOptions(),
                    onChange: this.props.setRepresentationMode,
                    selected: this.props.representationMode,
                    modesConfig: this.modesConfig()
                }), n.default.createElement(p.default, babelHelpers.extends({}, this.props, {
                    data: this.props.representativesFormData,
                    representationMode: this.props.representationMode,
                    onChange: this.props.setRepresentativeData,
                    remove: this.props.removeRepresentative,
                    minCount: this.modeConfig() && this.modeConfig().minRC
                }))), n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-spacing-top-l"
                }, n.default.createElement(d.default, {
                    title: this.props.descriptions.grantorLabel,
                    titlePlural: this.props.descriptions.grantorPluralLabel,
                    data: this.props.grantorsFormData,
                    onChange: this.props.setGrantorData,
                    remove: this.props.removeGrantor,
                    minCount: this.modeConfig() && this.modeConfig().minRMC,
                    grantingDate: this.props.grantingDate,
                    grantingDateErrors: this.props.grantingDateErrors,
                    setGrantingDate: this.props.setGrantingDate
                }))), this.modeConfig() && this.props.representativesFormData.length < this.modeConfig().maxRC ? n.default.createElement(s.OraAddBar, {
                    label: this.getRepresentativeLabel(),
                    id: "add_representative",
                    onAddClick: this.addRepresentative.bind(this),
                    className: "u-spacing-top-l u-box-shadow--s"
                }) : null, this.modeConfig() && this.props.grantorsFormData.length < this.modeConfig().maxRMC ? n.default.createElement(s.OraAddBar, {
                    label: "Dodaj kolejną osobę udzielającą pełnomocnictwa",
                    id: "add_grantor",
                    onAddClick: this.addGrantor.bind(this),
                    className: "u-spacing-top-l u-box-shadow--s"
                }) : null) : null
            }
        }]), r
    }(n.Component);
    var v = [{
        value: "JR",
        description: "Reprezentant"
    }, {
        value: "WR",
        description: "Kilku reprezentantów"
    }, {
        value: "JP",
        description: "Pełnomocnik"
    }, {
        value: "WP",
        description: "Kilku pełnomocników"
    }];
    m.defaultProps = {
        descriptions: {
            title: "Dane reprezentanta",
            representativeLabel: "Dane reprezentanta",
            representativeLabelPlural: "Dane reprezentantów",
            representativeLabelForProxy: "Dane pełnomocnika",
            representativeLabelForProxyPlural: "Dane pełnomocników",
            grantorLabel: "Dane osoby udzielającej pełnomocnictwa",
            grantorPluralLabel: "Dane osób udzielających pełnomocnictwa"
        },
        representationModeOptions: v,
        validRepresentationModes: {
            JDG: ["JR", "JP", "WP"],
            SC: ["JR", "WR", "JP", "WP"]
        },
        maxRepresentativesCount: 5,
        maxGrantorsCount: 5
    };
    var f = (0, t.connect)(function(e) {
        return {
            representativesFormData: (0, a.getRepresentativesFormData)(e),
            grantorsFormData: (0, a.getGrantorsFormData)(e),
            representationMode: (0, a.getRepresentationMode)(e),
            isValid: (0, a.isRepresentativeDataValid)(e),
            isFilled: (0, a.isRepresentativeDataFilled)(e),
            grantingDate: (0, a.getGrantingDate)(e),
            grantingDateErrors: (0, a.getGrantingDateErrors)(e),
            customer: (0, a.getCustomerData)(e)
        }
    }, function(i) {
        return {
            setRepresentativeData: function(e) {
                var t = e.name,
                    a = e.value,
                    r = e.index,
                    n = e.validate;
                return i((0, o.changeRepresentativeFormField)({
                    name: t,
                    value: a,
                    index: r,
                    validate: n
                }))
            },
            setRepresentativeDataNoValidations: function(e) {
                var t = e.name,
                    a = e.value,
                    r = e.index;
                return i((0, o.changeRepresentativeFormFieldNoValidations)({
                    name: t,
                    value: a,
                    index: r
                }))
            },
            setGrantorData: function(e) {
                var t = e.name,
                    a = e.value,
                    r = e.index,
                    n = e.validate;
                return i((0, o.changeGrantorFormField)({
                    name: t,
                    value: a,
                    index: r,
                    validate: n
                }))
            },
            setRepresentationMode: function(e, t) {
                return i((0, o.setRepresentationMode)(e, t))
            },
            removeGrantor: function(e) {
                return i((0, o.removeGrantor)(e))
            },
            removeRepresentative: function(e) {
                return i((0, o.removeRepresentative)(e))
            },
            setGrantingDate: function(e) {
                return i((0, o.setGrantingDate)(e))
            },
            registerValidation: function() {
                return i((0, r.registerNextStepCondition)("representativeData"))
            },
            requestCartRepresentativeData: function() {
                return i((0, r.requestCartRepresentativeData)())
            },
            changeRepresentativeCountry: function(e) {
                var t = e.id,
                    a = e.name,
                    r = e.value,
                    n = e.index;
                return i((0, o.changeRepresentativeCountry)({
                    id: t,
                    name: a,
                    value: r,
                    index: n
                }))
            }
        }
    })(m);
    e.default = f
});
//# sourceMappingURL=RepresentativeDataComponent.js.map