define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.FloatingLabelForDatePicker = _exports.DatePicker = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var DatePicker = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(DatePicker, _Component);

        var _super = _createSuper(DatePicker);

        function DatePicker(props) {
            var _this;

            babelHelpers.classCallCheck(this, DatePicker);
            _this = _super.call(this, props);
            _this.onChangeDate = _this.onChangeDate.bind(babelHelpers.assertThisInitialized(_this));
            _this.onChangeTime = _this.onChangeTime.bind(babelHelpers.assertThisInitialized(_this));
            _this.onChangeValue = _this.onChangeValue.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(DatePicker, [{
            key: "getDatepickerOptions",
            value: function getDatepickerOptions(props) {
                // overriding hasIcon because it's modifying DOM, we'd rather do that ourselves
                return Object.assign({
                    hasIcon: false
                }, props.options);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id);
                OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedTime, this.onChangeTime, this.props.id);
                var modulesToLoad = [{
                    path: 'common/modules/opl-datepicker',
                    options: this.getDatepickerOptions(this.props)
                }];

                if (this.props.mask && this.props.placeholder !== undefined) {
                    modulesToLoad.push({
                        path: 'common/modules/opl-input-mask',
                        options: {
                            "mask": this.props.mask,
                            "placeholder": this.props.placeholder,
                            "showMaskOnHover": this.props.showMaskOnHover
                        }
                    });
                }

                OPL.UI.loadModules(this.refs.datepicker, modulesToLoad);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id);
                OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedTime, this.onChangeTime, this.props.id);
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(newProps) {
                for (var opt in newProps.options) {
                    if (this.props.options[opt] !== newProps.options[opt]) {
                        OPL.UI.fire(OPL.UI.EVENTS.modules.datepicker.loaddata, this.getDatepickerOptions(newProps), this.props.id);
                        break;
                    }
                }
            }
        }, {
            key: "onChangeDate",
            value: function onChangeDate(date) {
                if (this.props.onChange) {
                    this.props.onChange({
                        id: this.props.id,
                        name: this.props.name,
                        value: this.refs.datepicker.value,
                        date: date
                    });
                }
            }
        }, {
            key: "onChangeTime",
            value: function onChangeTime(date) {
                if (this.props.onChange) {
                    this.props.onChange({
                        id: this.props.id,
                        name: this.props.name,
                        value: this.refs.datepicker.value,
                        date: date
                    });
                }
            }
        }, {
            key: "onChangeValue",
            value: function onChangeValue(event) {
                var _event$target = event.target,
                    id = _event$target.id,
                    name = _event$target.name,
                    value = _event$target.value;

                if (this.props.onChange) {
                    this.props.onChange({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "onBlurValue",
            value: function onBlurValue(event) {
                var _event$target2 = event.target,
                    id = _event$target2.id,
                    name = _event$target2.name,
                    value = _event$target2.value;

                if (this.props.onBlur) {
                    this.props.onBlur({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "getError",
            value: function getError() {
                if (this.props.errors && this.props.errors.length > 0) {
                    return this.props.errors[0];
                }

                return null;
            }
        }, {
            key: "renderContent",
            value: function renderContent() {
                return [ /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    id: this.props.id,
                    value: this.props.value,
                    ref: "datepicker",
                    onChange: this.onChangeValue,
                    onBlur: this.onBlurValue.bind(this),
                    className: this.props.inputClassName,
                    disabled: this.props.disabled
                }), !this.props.icon || /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: this.props.id,
                    className: "calendar-icon g-icon g-icon--" + this.props.icon
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Poka\u017C kalendarz"))];
            }
        }, {
            key: "render",
            value: function render() {
                var error = this.getError.apply(this);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-datepicker"
                }, this.props.floatingLabel ? /*#__PURE__*/ _react.default.createElement(FloatingLabelForDatePicker, this.props, this.renderContent()) : this.renderContent(), error && /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    className: 'opl-msg opl-msg--context u-margin-top-s opl-msg--' + error.level
                }, /*#__PURE__*/ _react.default.createElement("p", null, error.message)));
            }
        }]);
        return DatePicker;
    }(_react.Component);

    _exports.DatePicker = DatePicker;
    DatePicker.propTypes = {
        id: _propTypes.default.string.isRequired,
        value: _propTypes.default.string,
        onChange: _propTypes.default.func,
        onBlur: _propTypes.default.func,
        icon: _propTypes.default.string,
        floatingLabel: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
        inputClassName: _propTypes.default.string,
        // opl-datepicker options
        options: _propTypes.default.shape({
            disabledDates: _propTypes.default.array,
            datepicker: _propTypes.default.bool,
            timepicker: _propTypes.default.bool,
            minDate: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
            maxDate: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
            format: _propTypes.default.string,
            formatDate: _propTypes.default.string,
            step: _propTypes.default.number,
            startDate: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
            defaultDate: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
            defaultTime: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
            disabledWeekDays: _propTypes.default.arrayOf(_propTypes.default.number),
            allowDates: _propTypes.default.arrayOf(_propTypes.default.string),
            allowTimes: _propTypes.default.arrayOf(_propTypes.default.string),
            hideOtherMonth: _propTypes.default.bool,
            scrollInput: _propTypes.default.bool,
            yearStart: _propTypes.default.number,
            yearEnd: _propTypes.default.number
        })
    };
    DatePicker.defaultProps = {
        icon: "calendar3",
        floatingLabel: false,
        options: {},
        showMaskOnHover: false
    };

    var FloatingLabelForDatePicker = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(FloatingLabelForDatePicker, _Component2);

        var _super2 = _createSuper(FloatingLabelForDatePicker);

        function FloatingLabelForDatePicker() {
            babelHelpers.classCallCheck(this, FloatingLabelForDatePicker);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(FloatingLabelForDatePicker, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(this.refs.labelModule, [{
                    path: 'core/modules/floating-label',
                    options: {}
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: "labelModule",
                    className: "o-floating-label"
                }, this.props.children, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "label o-floating-label__placeholder"
                }, this.props.floatingLabel));
            }
        }]);
        return FloatingLabelForDatePicker;
    }(_react.Component);

    _exports.FloatingLabelForDatePicker = FloatingLabelForDatePicker;
});
//# sourceMappingURL=Datepicker.js.map