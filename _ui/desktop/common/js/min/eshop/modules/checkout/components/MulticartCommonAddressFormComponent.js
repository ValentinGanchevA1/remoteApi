define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "../../core/components/hoc/LabeledInput", "../../magnum2/components/InputWithFloatingLabel", "../utils/utils", "../actions/data"], function(e, t, s, r, o, a, i, l, n) {
    "use strict";

    function p(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), s.push.apply(s, r)
        }
        return s
    }

    function u(r) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a), i = babelHelpers.interopRequireDefault(i);
    var d = function(e) {
        babelHelpers.inherits(r, e);
        var s = u(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = s.call(this, e)).handlePostalCode = t.handlePostalCode.bind(babelHelpers.assertThisInitialized(t)), t.getPropsForInput = t.getPropsForInput.bind(babelHelpers.assertThisInitialized(t)), t.validateAppartmentNoAndStreetNumber = t.validateAppartmentNoAndStreetNumber.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                hasCitySuggestions: t.props.citySuggestions && 0 < t.props.citySuggestions.length,
                zipValidated: !1,
                autoSelect: !1
            }, t
        }
        return babelHelpers.createClass(r, [{
            key: "compareArrays",
            value: function(t, s) {
                return !!t && !!s && 0 === t.filter(function(e) {
                    return s.indexOf(e) < 0
                }).length && 0 === s.filter(function(e) {
                    return t.indexOf(e) < 0
                }).length
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.props.town || this.compareArrays(e.citySuggestions, this.props.citySuggestions) || this.setState({
                    hasCitySuggestions: this.props.citySuggestions && 0 < this.props.citySuggestions.length
                }), this.props.streetNumber && this.props.validation.streetName && this.props.validation.town && this.props.townId && !this.state.zipValidated && (this.props.validateZipCode({
                    addressType: this.props.id,
                    zip: this.props.postalCode,
                    townId: this.props.townId,
                    streetId: this.props.streetId,
                    streetNumber: this.props.streetNumber
                }), this.setState({
                    zipValidated: !0
                }), this.validateAppartmentNoAndStreetNumber()), this.isAddressWithOnlyOneStreet(e) ? (this.setState({
                    autoSelect: !0
                }), this.props.onChange({
                    id: "",
                    name: "streetName",
                    value: this.props.streetSuggestions[0],
                    cbsId: ""
                })) : !this.isAddressWithMultipleStreets(e) && e.postalCode == this.props.postalCode && e.town == this.props.town || this.setState({
                    autoSelect: !1
                })
            }
        }, {
            key: "isAddressWithOnlyOneStreet",
            value: function(e) {
                return e.streetSuggestions && 0 == e.streetSuggestions.length && this.props.streetSuggestions && 1 == this.props.streetSuggestions.length
            }
        }, {
            key: "isAddressWithMultipleStreets",
            value: function(e) {
                return e.streetSuggestions != this.props.streetSuggestions && this.props.streetSuggestions && 1 < this.props.streetSuggestions.length
            }
        }, {
            key: "validateAppartmentNoAndStreetNumber",
            value: function() {
                this.props.onBlur({
                    id: null,
                    name: "appartmentNo",
                    value: this.props.appartmentNo || ""
                }), this.props.onBlur({
                    id: null,
                    name: "streetNumber",
                    value: this.props.streetNumber || ""
                })
            }
        }, {
            key: "getPropsForInput",
            value: function(e) {
                var t = {
                    name: e,
                    value: this.props[e] || "",
                    errors: this.props.errors && this.props.errors[e],
                    valid: this.props.validation[e],
                    label: this.props.descriptions[e],
                    labelType: "floating",
                    disabled: (0, l.isFieldDisabled)(this.props, e) || !this.props.addressMapping && !this.props.existing && this.props.wwtaddress || this.props.existing && !this.props.hasFixAddress && this.props.wwtaddress,
                    onChange: this.props.onChange,
                    onBlur: this.onBlur.bind(this),
                    className: this.props.customInputClass
                };
                return this.props.wwtaddress && "appartmentNo" === e && !(0, l.isFieldDisabled)(this.props, e) && (t.disabled = !1), t
            }
        }, {
            key: "mapToPostalCode",
            value: function(e) {
                return e && "string" == typeof e && 5 === e.length ? e.substring(0, 2) + "-" + e.substring(2, 5) : e
            }
        }, {
            key: "onBlur",
            value: function(e) {
                var t = e.id,
                    s = e.name,
                    r = e.value;
                this.props.onBlur && this.props.onBlur({
                    id: t,
                    name: s,
                    value: r
                }), this.setState({
                    zipValidated: !1
                })
            }
        }, {
            key: "getPropsForPostalInput",
            value: function(e) {
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? p(Object(s), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, s[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
                        })
                    }
                    return t
                }({}, this.getPropsForInput(e), {
                    value: this.mapToPostalCode(this.props[e]),
                    onChange: this.handleChangePostalCode.bind(this),
                    onBlur: this.handleBlurPostalCode.bind(this),
                    mask: "99-999",
                    placeholder: "__-___",
                    customInputClass: this.props.customInputClass
                })
            }
        }, {
            key: "handlePostalCode",
            value: function(e, t) {
                var s = e.id,
                    r = e.name,
                    o = e.value;
                t({
                    id: s,
                    name: r,
                    value: o = o ? o.split("-").join("") : ""
                }), this.setState({
                    hasCitySuggestions: this.props.citySuggestions && 0 < this.props.citySuggestions.length
                })
            }
        }, {
            key: "handleChangePostalCode",
            value: function(e) {
                var t = e.id,
                    s = e.name,
                    r = e.value;
                this.handlePostalCode({
                    id: t,
                    name: s,
                    value: r
                }, this.props.onChange)
            }
        }, {
            key: "handleBlurPostalCode",
            value: function(e) {
                var t = e.id,
                    s = e.name,
                    r = e.value;
                this.props.onBlur && this.handlePostalCode({
                    id: t,
                    name: s,
                    value: r
                }, this.props.onBlur)
            }
        }, {
            key: "handleAutoCompleteBlur",
            value: function(e) {
                var t = e.id,
                    s = e.value,
                    r = "city_id" === t ? "town" : "location_street" === t ? "streetName" : "";
                this.props.onBlur && this.props.onBlur({
                    id: t,
                    name: r,
                    value: s,
                    cbsId: "city_id" === t ? this.props.townId : "location_street" === t ? this.props.streetId : ""
                }), this.setState({
                    zipValidated: !1
                })
            }
        }, {
            key: "handleAutoCompleteChange",
            value: function(e) {
                var t = e.id,
                    s = e.value,
                    r = "city_id" === t ? "town" : "location_street" === t ? "streetName" : "";
                this.props.onChange && this.props.onChange({
                    id: t,
                    name: r,
                    value: s,
                    cbsId: ""
                })
            }
        }, {
            key: "onCitySelect",
            value: function(e) {
                var t = e.item,
                    s = t.id,
                    r = t.label,
                    o = void 0 === r ? "" : r,
                    a = t.value;
                this.props.onChange && this.props.onChange({
                    id: s,
                    name: "town",
                    value: o.toUpperCase(),
                    cbsId: a
                }), OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.querydata, {
                    city_id: e.item.value
                }, "location_street")
            }
        }, {
            key: "onStreetSelect",
            value: function(e) {
                var t = e.item,
                    s = t.id,
                    r = t.label,
                    o = void 0 === r ? "" : r,
                    a = t.value;
                this.props.onChange && this.props.onChange({
                    id: s,
                    name: "streetName",
                    value: o.toUpperCase(),
                    cbsId: a
                })
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("div", {
                    className: "opl-form"
                }, t.default.createElement("div", {
                    className: "l-row"
                }, t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
                }, t.default.createElement(a.default, babelHelpers.extends({}, this.getPropsForPostalInput("postalCode"), {
                    className: this.props.className
                }))), t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
                }, t.default.createElement("div", {
                    className: "u-spacing-l u-medium-hide u-large-hide"
                }), this.state.hasCitySuggestions ? t.default.createElement(a.default, babelHelpers.extends({}, this.getPropsForInput("town"), {
                    autoComplete: !0,
                    suggestions: this.props.citySuggestions,
                    className: this.props.className
                })) : t.default.createElement(i.default, babelHelpers.extends({}, this.getPropsForInput("town"), {
                    id: "city_id",
                    required: !0,
                    placeholder: "Miejscowość",
                    autocomplete: !0,
                    autocompleteUrl: "/hapi/cbs/cityauto",
                    onChange: this.handleAutoCompleteChange.bind(this),
                    onSelect: this.onCitySelect.bind(this),
                    onBlur: this.handleAutoCompleteBlur.bind(this),
                    overrideClass: "o-floating-label",
                    showValidation: !0,
                    showErrors: !0,
                    customInputClass: this.props.customInputClass
                }))), t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, t.default.createElement("div", {
                    className: "u-spacing-l "
                }), this.state.hasCitySuggestions ? t.default.createElement(a.default, babelHelpers.extends({}, this.getPropsForInput("streetName"), {
                    autoComplete: !0,
                    suggestions: this.props.streetSuggestions,
                    className: this.props.className,
                    autoSelect: this.state.autoSelect
                })) : t.default.createElement(i.default, babelHelpers.extends({}, this.getPropsForInput("streetName"), {
                    id: "location_street",
                    required: !0,
                    placeholder: "Ulica",
                    autocomplete: !0,
                    autocompleteUrl: "/hapi/cbs/streetauto",
                    onChange: this.handleAutoCompleteChange.bind(this),
                    onSelect: this.onStreetSelect.bind(this),
                    onBlur: this.handleAutoCompleteBlur.bind(this),
                    overrideClass: "o-floating-label",
                    showValidation: !0,
                    showErrors: !0,
                    data: {
                        city_id: this.props.townId
                    },
                    customInputClass: this.props.customInputClass,
                    autoSelect: this.state.autoSelect
                })), t.default.createElement("div", {
                    className: "u-spacing-l "
                })), t.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, t.default.createElement(a.default, babelHelpers.extends({}, this.getPropsForInput("streetNumber"), {
                    valid: !this.props.errors && "" !== this.props.streetNumber || this.props.errors && this.props.errors.streetNumber && 0 === this.props.errors.streetNumber.length,
                    className: this.props.className
                }))), t.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, t.default.createElement(a.default, babelHelpers.extends({}, this.getPropsForInput("appartmentNo"), {
                    valid: !this.props.errors && "" !== this.props.appartmentNo || this.props.errors && this.props.errors.appartmentNo && 0 === this.props.errors.appartmentNo.length,
                    className: this.props.className
                })))))
            }
        }]), r
    }(t.Component);
    d.propTypes = {
        postalCode: r.default.string.isRequired,
        town: r.default.string.isRequired,
        streetName: r.default.string.isRequired,
        streetNumber: r.default.string.isRequired,
        appartmentNo: r.default.string.isRequired,
        citySuggestions: r.default.array,
        streetSuggestions: r.default.array,
        readOnly: r.default.bool,
        onChange: r.default.func.isRequired,
        customInputClass: r.default.string
    };
    var c = (0, s.connect)(function(e) {
        return {}
    }, function(t) {
        return {
            validateZipCode: function(e) {
                return t((0, n.validateZipCode)(e))
            }
        }
    })(d);
    e.default = c
});
//# sourceMappingURL=MulticartCommonAddressFormComponent.js.map