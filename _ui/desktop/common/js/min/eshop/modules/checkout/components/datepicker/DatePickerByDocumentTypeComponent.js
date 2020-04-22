define(["exports", "react", "eshop/modules/core/components/ui/Datepicker", "../../utils/utils"], function(e, a, r, n) {
    "use strict";

    function s(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var i = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, i)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(i, e);
        var t = s(i);

        function i() {
            return babelHelpers.classCallCheck(this, i), t.apply(this, arguments)
        }
        return babelHelpers.createClass(i, [{
            key: "render",
            value: function() {
                return a.default.createElement("div", null, a.default.createElement("div", {
                    style: "UE_CERTIFICATE" !== this.props.identification ? {
                        display: "none"
                    } : {
                        display: "block"
                    }
                }, a.default.createElement(r.DatePicker, babelHelpers.extends({
                    id: this.props.startDateName,
                    name: this.props.startDateName,
                    onChange: this.handleDateChange.bind(this, this.props.startDateName),
                    onBlur: this.handleDateBlur.bind(this, this.props.startDateName),
                    value: this.getIdentificationDate(this.props.identificationRegistrationDate),
                    options: {
                        monthYearSelect: !0,
                        defaultDate: new Date,
                        minDate: this.props.descriptions.minIdentificationRegistrationDate ? new Date(this.props.descriptions.minIdentificationRegistrationDate) : new Date,
                        maxDate: new Date
                    },
                    floatingLabel: this.resolveDescription(this.props.startDateName, "Data rejestracji dokumentu"),
                    errors: this.props.errors && this.props.errors[this.props.startDateName]
                }, this.getInputValidationParams(this.props.startDateName, this.props)))), a.default.createElement("div", {
                    style: "RESIDENCE_CARD" !== this.props.identification ? {
                        display: "none"
                    } : {
                        display: "block"
                    }
                }, a.default.createElement(r.DatePicker, babelHelpers.extends({
                    id: this.props.endDateName,
                    name: this.props.endDateName,
                    onChange: this.handleDateChange.bind(this, this.props.endDateName),
                    onBlur: this.handleDateBlur.bind(this, this.props.endDateName),
                    value: this.getIdentificationDate(this.props.identificationExpirationDate),
                    options: {
                        monthYearSelect: !0,
                        defaultDate: this.getMinIdentificationExpirationDate(),
                        minDate: this.getMinIdentificationExpirationDate(),
                        maxDate: this.getMaxIdentificationExpirationDate(),
                        yearStart: this.getStartDataPickerYear(),
                        yearEnd: this.getEndDataPickerYear()
                    },
                    floatingLabel: "Data ważności dokumentu",
                    errors: this.props.errors && this.props.errors[this.props.endDateName]
                }, this.getInputValidationParams(this.props.endDateName, this.props)))))
            }
        }, {
            key: "handleDateChange",
            value: function(e, t) {
                var i = t.value,
                    a = this.props.index;
                void 0 !== a ? this.props.onChange({
                    id: e,
                    name: e,
                    value: i,
                    index: a
                }) : this.props.onChange({
                    id: e,
                    name: e,
                    value: i
                })
            }
        }, {
            key: "handleDateBlur",
            value: function(e, t) {
                var i = t.value,
                    a = "";
                /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/.test(i) && !isNaN(Date.parse(i)) && (a = new Date(Date.parse(i)).toISOString().split("T")[0]);
                var r = this.props.index;
                void 0 !== r ? this.props.onChange({
                    id: e,
                    name: e,
                    value: i,
                    index: r
                }) : this.props.onChange({
                    id: e,
                    name: e,
                    value: a
                })
            }
        }, {
            key: "getIdentificationDate",
            value: function(e) {
                var t = "";
                return /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/.test(e) && !isNaN(Date.parse(e)) ? t = new Date(Date.parse(e)).toISOString().split("T")[0] : e && !isNaN(e) && (t = new Date(e).toISOString().split("T")[0]), t
            }
        }, {
            key: "resolveDescription",
            value: function(e, t) {
                return this.props.descriptions[e] ? this.props.descriptions[e] : t
            }
        }, {
            key: "getInputValidationParams",
            value: function(e) {
                var t = (0, n.isFieldDisabledForValidation)(this.props, e),
                    i = (0, n.isFieldDisabled)(this.props, e),
                    a = {
                        disabled: i
                    },
                    r = !this.props.errors && "" !== this.props[e] || this.props.errors && this.props.errors[e] && 0 === this.props.errors[e].length;
                return i && (t || r) || (a.valid = r), a
            }
        }, {
            key: "getMinIdentificationExpirationDate",
            value: function() {
                var e = new Date,
                    t = this.props.descriptions.minIdentificationExpirationDate,
                    i = new Date(e);
                return i.setDate(i.getDate() + Number(t)), i
            }
        }, {
            key: "getMaxIdentificationExpirationDate",
            value: function() {
                var e = new Date,
                    t = this.props.descriptions.maxIdentificationExpirationDate;
                return new Date(e.setFullYear(e.getFullYear() + Number(t)))
            }
        }, {
            key: "getStartDataPickerYear",
            value: function() {
                return this.getMinIdentificationExpirationDate().getFullYear()
            }
        }, {
            key: "getEndDataPickerYear",
            value: function() {
                return this.getMaxIdentificationExpirationDate().getFullYear()
            }
        }]), i
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    e.default = t
});
//# sourceMappingURL=DatePickerByDocumentTypeComponent.js.map