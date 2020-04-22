define(["exports", "react", "prop-types"], function(e, o, t) {
    "use strict";

    function n(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.FloatingLabelForDatePicker = e.DatePicker = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t);
    var a = function(e) {
        babelHelpers.inherits(l, e);
        var a = n(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = a.call(this, e)).onChangeDate = t.onChangeDate.bind(babelHelpers.assertThisInitialized(t)), t.onChangeTime = t.onChangeTime.bind(babelHelpers.assertThisInitialized(t)), t.onChangeValue = t.onChangeValue.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "getDatepickerOptions",
            value: function(e) {
                return Object.assign({
                    hasIcon: !1
                }, e.options)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id), OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedTime, this.onChangeTime, this.props.id);
                var e = [{
                    path: "common/modules/opl-datepicker",
                    options: this.getDatepickerOptions(this.props)
                }];
                this.props.mask && void 0 !== this.props.placeholder && e.push({
                    path: "common/modules/opl-input-mask",
                    options: {
                        mask: this.props.mask,
                        placeholder: this.props.placeholder,
                        showMaskOnHover: this.props.showMaskOnHover
                    }
                }), OPL.UI.loadModules(this.refs.datepicker, e)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id), OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedTime, this.onChangeTime, this.props.id)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                for (var t in e.options)
                    if (this.props.options[t] !== e.options[t]) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.datepicker.loaddata, this.getDatepickerOptions(e), this.props.id);
                        break
                    }
            }
        }, {
            key: "onChangeDate",
            value: function(e) {
                this.props.onChange && this.props.onChange({
                    id: this.props.id,
                    name: this.props.name,
                    value: this.refs.datepicker.value,
                    date: e
                })
            }
        }, {
            key: "onChangeTime",
            value: function(e) {
                this.props.onChange && this.props.onChange({
                    id: this.props.id,
                    name: this.props.name,
                    value: this.refs.datepicker.value,
                    date: e
                })
            }
        }, {
            key: "onChangeValue",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    o = t.value;
                this.props.onChange && this.props.onChange({
                    id: a,
                    name: l,
                    value: o
                })
            }
        }, {
            key: "onBlurValue",
            value: function(e) {
                var t = e.target,
                    a = t.id,
                    l = t.name,
                    o = t.value;
                this.props.onBlur && this.props.onBlur({
                    id: a,
                    name: l,
                    value: o
                })
            }
        }, {
            key: "getError",
            value: function() {
                return this.props.errors && 0 < this.props.errors.length ? this.props.errors[0] : null
            }
        }, {
            key: "renderContent",
            value: function() {
                return [o.default.createElement("input", {
                    type: "text",
                    id: this.props.id,
                    value: this.props.value,
                    ref: "datepicker",
                    onChange: this.onChangeValue,
                    onBlur: this.onBlurValue.bind(this),
                    className: this.props.inputClassName,
                    disabled: this.props.disabled
                }), !this.props.icon || o.default.createElement("label", {
                    htmlFor: this.props.id,
                    className: "calendar-icon g-icon g-icon--" + this.props.icon
                }, o.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Pokaż kalendarz"))]
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getError.apply(this);
                return o.default.createElement("div", {
                    className: "opl-datepicker"
                }, this.props.floatingLabel ? o.default.createElement(r, this.props, this.renderContent()) : this.renderContent(), e && o.default.createElement("div", {
                    id: this.props.id,
                    className: "opl-msg opl-msg--context u-margin-top-s opl-msg--" + e.level
                }, o.default.createElement("p", null, e.message)))
            }
        }]), l
    }(o.Component);
    (e.DatePicker = a).propTypes = {
        id: t.default.string.isRequired,
        value: t.default.string,
        onChange: t.default.func,
        onBlur: t.default.func,
        icon: t.default.string,
        floatingLabel: t.default.oneOfType([t.default.bool, t.default.string]),
        inputClassName: t.default.string,
        options: t.default.shape({
            disabledDates: t.default.array,
            datepicker: t.default.bool,
            timepicker: t.default.bool,
            minDate: t.default.oneOfType([t.default.bool, t.default.string]),
            maxDate: t.default.oneOfType([t.default.bool, t.default.string]),
            format: t.default.string,
            formatDate: t.default.string,
            step: t.default.number,
            startDate: t.default.oneOfType([t.default.bool, t.default.string]),
            defaultDate: t.default.oneOfType([t.default.bool, t.default.string]),
            defaultTime: t.default.oneOfType([t.default.bool, t.default.string]),
            disabledWeekDays: t.default.arrayOf(t.default.number),
            allowDates: t.default.arrayOf(t.default.string),
            allowTimes: t.default.arrayOf(t.default.string),
            hideOtherMonth: t.default.bool,
            scrollInput: t.default.bool,
            yearStart: t.default.number,
            yearEnd: t.default.number
        })
    }, a.defaultProps = {
        icon: "calendar3",
        floatingLabel: !1,
        options: {},
        showMaskOnHover: !1
    };
    var r = function(e) {
        babelHelpers.inherits(a, e);
        var t = n(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                OPL.UI.loadModules(this.refs.labelModule, [{
                    path: "core/modules/floating-label",
                    options: {}
                }])
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement("div", {
                    ref: "labelModule",
                    className: "o-floating-label"
                }, this.props.children, o.default.createElement("p", {
                    className: "label o-floating-label__placeholder"
                }, this.props.floatingLabel))
            }
        }]), a
    }(o.Component);
    e.FloatingLabelForDatePicker = r
});
//# sourceMappingURL=Datepicker.js.map