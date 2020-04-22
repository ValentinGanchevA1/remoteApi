define(["exports", "react", "prop-types", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "eshop/modules/checkout/components/customer/MulticartCustomerBusinessDetailsDataComponent", "eshop/modules/checkout/components/customer/MulticartCustomerPersonalDetailsDataComponent", "eshop/modules/documents/selectors", "../../../core/enum/SalesChannel", "../../utils/utils"], function(e, s, t, r, a, i, l, o, n, u, p, c) {
    "use strict";

    function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }

    function f(s) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartCustomerDataView = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), n = babelHelpers.interopRequireDefault(n), p = babelHelpers.interopRequireDefault(p);
    var m = 0,
        h = function(e) {
            babelHelpers.inherits(r, e);
            var t = f(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    this.props.requestCartCustomerData(), this.props.registerNextStepCondition("customerData"), this.componentId = "react-data-" + m++, this.props.initialNationality && this.props.setInitialNationality(this.props.initialNationality), this.props.foreginerIsAvailable && this.props.setForeignerAvailable(this.props.foreginerIsAvailable)
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return !this.props || this.props.show !== e.shown || this.props.isBusinessClient !== e.isBusinessClient || this.props.isSalesOfGoodsOnly !== e.isSalesOfGoodsOnly
                }
            }, {
                key: "getTitle",
                value: function() {
                    return this.props.isBusinessClient ? this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "" : this.props.descriptions.title || ""
                }
            }, {
                key: "toggleForeigner",
                value: function() {
                    var e = !this.props.foreigner;
                    if (this.props.changeCustomerDataFormFieldNoValidations({
                            name: "foreigner",
                            value: e
                        }), this.props.noPesel && this.props.requestRecalculateConsentsForForeigner(e), e) {
                        var t = (0, c.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap).find(function(e) {
                            return "RESIDENCE_CARD" === e.value
                        });
                        this.props.changeCustomerDataFormFieldNoValidations({
                            name: "identification",
                            value: t.value
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.getTitle(),
                        t = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? d(Object(r), !0).forEach(function(e) {
                                    babelHelpers.defineProperty(t, e, r[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                })
                            }
                            return t
                        }({}, this.props);
                    return this.props.legalFormArray && 0 === this.props.legalFormArray.length && (t.legalFormArray = void 0), this.props.show ? s.default.createElement("div", {
                        className: "opl-form l-table-row__wrapper",
                        id: this.componentId,
                        key: this.componentId
                    }, s.default.createElement("div", {
                        className: "l-table-row__wrapper"
                    }, this.props.isSalesOfGoodsOnly ? this.renderBusinessHeader(e) : this.renderPersonalHeader(e), s.default.createElement("div", {
                        className: "l-row u-no-margin-top u-spacing-top-xs u-spacing-l l-col l-col-12",
                        hidden: !this.props.foreginerIsAvailable || this.props.isBusinessClient || this.props.isB2B
                    }, s.default.createElement("label", {
                        className: "o-checkbox opl-checkbox"
                    }, s.default.createElement("input", {
                        type: "checkbox",
                        onChange: this.toggleForeigner.bind(this),
                        disabled: this.props.existing && "POL" !== this.props.initialNationality || this.props.isBzuOnlyAvailableOptionForFix && (this.props.channels.sales === p.default.TLS || this.props.channels.sales === p.default.IDG),
                        checked: this.props.foreigner
                    }), s.default.createElement("span", {
                        className: "o-ci"
                    }), s.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.props.descriptions.foreigner))), this.props.isBusinessClient || this.props.isB2B ? s.default.createElement(o.default, babelHelpers.extends({
                        key: "businessDataCmp"
                    }, t)) : s.default.createElement(n.default, babelHelpers.extends({
                        key: "personalDataCmp"
                    }, this.props)))) : s.default.createElement("div", null)
                }
            }, {
                key: "renderPersonalHeader",
                value: function(e) {
                    return s.default.createElement("div", {
                        className: "u-spacing-top-l u-large-spacing-xs u-medium-spacing-s u-small-spacing-s l-row l-table-row"
                    }, s.default.createElement("div", {
                        key: "personalHeader",
                        className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                    }, s.default.createElement("p", {
                        className: "h3",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })))
                }
            }, {
                key: "renderBusinessHeader",
                value: function(e) {
                    return s.default.createElement("div", {
                        key: "businessHeader",
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-6 l-col-medium-6 l-col-small-12 u-margin-top"
                    }, s.default.createElement("p", {
                        className: "h3",
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    })))
                }
            }]), r
        }(s.Component);
    (e.MulticartCustomerDataView = h).propTypes = {
        firstName: t.default.string,
        lastName: t.default.string,
        readOnly: t.default.bool,
        companyName: t.default.string,
        nip: t.default.string,
        regon: t.default.string,
        isBusinessClient: t.default.bool,
        locked: t.default.bool,
        requestCartCustomerData: t.default.func,
        changeCustomerDataFormField: t.default.func,
        reloadSummaryOnCart: t.default.func,
        switchForeignerMode: t.default.func,
        foreignerIdentificationMap: t.default.oneOfType([t.default.shape({
            value: t.default.string,
            description: t.default.string
        }), t.default.arrayOf(t.default.shape({
            value: t.default.string,
            description: t.default.string
        }))])
    }, h.defaultProps = {
        defaultBusinessTitle: "Dane firmy"
    };
    var g = (0, r.connect)(a.getCustomerDataForm, {
        changeCustomerDataFormField: i.changeCustomerDataFormField,
        changeCustomerDataFormFieldNoValidations: i.changeCustomerDataFormFieldNoValidations,
        requestCartCustomerData: l.requestCartCustomerData,
        reloadSummaryOnCart: i.reloadSummaryOnCart,
        registerNextStepCondition: l.registerNextStepCondition,
        setInitialNationality: l.setInitialNationality,
        setForeignerAvailable: l.setForeignerAvailable
    })(h);
    e.default = g
});
//# sourceMappingURL=MulticartCustomerDataComponent.js.map