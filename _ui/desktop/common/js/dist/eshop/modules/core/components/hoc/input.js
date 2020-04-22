define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(_exports, _react, _propTypes, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mapDisplayValue = _exports.maskField = _exports.addLabelToInputKna = _exports.addLabelToInputIdNumber = _exports.addLabelToInputCensoredIdNumber = _exports.addLabelToInputPesel = _exports.addLabelToInputNip = _exports.addLabelToInputPhone = _exports.addLabelToInput = _exports.enhanceInput = _exports.appendErrorsNotTimeouted = _exports.appendErrors = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    // Higher order components for inputs

    /*
     * Higher order component for appending error messages to a field
     * Usage:
     *   ComponentWithErrors = appendErrors(ErrorComponent)(FieldComponent);
     *   <ComponentWithErrors {...propsForFieldComponent} errors={[propsForErrorComponents]}/>
     *
     *   FieldComponent will be rendered with and given all props
     *   an ErrorComponent will be rendered for every object in 'errors' prop
     */
    var appendErrors = function appendErrors(ErrorComponent, ErrorWrapperComponent) {
        return function(FieldComponent) {
            var FieldWithErrors = /*#__PURE__*/ function(_Component) {
                babelHelpers.inherits(FieldWithErrors, _Component);

                var _super = _createSuper(FieldWithErrors);

                function FieldWithErrors() {
                    babelHelpers.classCallCheck(this, FieldWithErrors);
                    return _super.apply(this, arguments);
                }

                babelHelpers.createClass(FieldWithErrors, [{
                    key: "componentWillMount",
                    value: function componentWillMount() {
                        this.state = {
                            waiting: false
                        };
                    }
                }, {
                    key: "delay",
                    value: function delay() {
                        var _this = this;

                        this.timeout = setTimeout(function() {
                            _this.setState({
                                waiting: false
                            });
                        }, 2000);
                        return;
                    }
                }, {
                    key: "handleChange",
                    value: function handleChange(event) {
                        this.setState({
                            waiting: true
                        });
                        this.props.onChange(event);
                        clearTimeout(this.timeout);
                        this.delay();
                    }
                }, {
                    key: "render",
                    value: function render() {
                        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(FieldComponent, babelHelpers.extends({}, (0, _ui.excludeProps)(this.props, ["errors"]), {
                            onChange: this.handleChange.bind(this)
                        })), !this.state.waiting && this.props.errors && this.props.errors.slice(0, 1).map(ErrorComponent));
                    }
                }]);
                return FieldWithErrors;
            }(_react.Component);

            FieldWithErrors.displayName = "WithErrors(".concat(FieldComponent.displayName || FieldComponent.name, ")");
            FieldWithErrors.propTypes = _objectSpread({}, FieldComponent.propTypes, {
                errors: _propTypes.default.array
            });
            FieldWithErrors.defaultProps = _objectSpread({}, FieldComponent.defaultProps);
            return FieldWithErrors;
        };
    };

    _exports.appendErrors = appendErrors;

    var appendErrorsNotTimeouted = function appendErrorsNotTimeouted(ErrorComponent, ErrorWrapperComponent) {
        return function(FieldComponent) {
            var OWN_PROPS = ["errors"];

            var FieldWithErrors = function FieldWithErrors(props) {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(FieldComponent, (0, _ui.excludeProps)(props, OWN_PROPS)), !props.errors ? null : props.errors.map(ErrorComponent));
            };

            FieldWithErrors.displayName = "WithErrors(".concat(FieldComponent.displayName || FieldComponent.name, ")");
            FieldWithErrors.propTypes = _objectSpread({}, FieldComponent.propTypes, {
                errors: _propTypes.default.array
            });
            FieldWithErrors.defaultProps = _objectSpread({}, FieldComponent.defaultProps);
            return FieldWithErrors;
        };
    };
    /*
     * Higher order component for enhancing inputs with UX labels and validation marks
     * Usage:
     *   EnhancedInput = enhanceInput({labelType: "floating|sliding", validationMark: true|false})(Input);
     *   <EnhancedInput label="Label..." valid={false} ...inputProps/>
     */


    _exports.appendErrorsNotTimeouted = appendErrorsNotTimeouted;

    var enhanceInput = function enhanceInput(_ref) {
        var labelType = _ref.labelType,
            validationMark = _ref.validationMark,
            mask = _ref.mask,
            placeholder = _ref.placeholder;
        return function(InputComponent) {
            var OWN_PROPS = ["wrapperClassName"];
            if (labelType) OWN_PROPS = OWN_PROPS.concat(["labelClassName", "label"]);
            if (validationMark) OWN_PROPS = OWN_PROPS.concat(["markClassName", "valid"]);

            var EnhancedInputComponent = /*#__PURE__*/ function(_Component2) {
                babelHelpers.inherits(EnhancedInputComponent, _Component2);

                var _super2 = _createSuper(EnhancedInputComponent);

                function EnhancedInputComponent() {
                    babelHelpers.classCallCheck(this, EnhancedInputComponent);
                    return _super2.apply(this, arguments);
                }

                babelHelpers.createClass(EnhancedInputComponent, [{
                    key: "componentDidMount",
                    value: function componentDidMount() {
                        if (labelType) this.initUiLabel(labelType);
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function componentDidUpdate(prevProps) {
                        if (labelType && !prevProps.value && this.props.value) {
                            if (labelType !== "floating") {
                                // TODO Stopping all modules is inefficient, but we can't stop a specific module now - see issue NOR-56126
                                OPL.UI.stopModules(this.refs.wrapper);
                                OPL.UI.initModules(this.refs.wrapper);
                            } else {
                                // TODO checkvalue event for sliding label is not available
                                OPL.UI.fire(OPL.UI.EVENTS.modules.floatinglabels.checkvalue, this.refs.input, this.refs.wrapper);
                            }
                        }
                    }
                }, {
                    key: "initUiLabel",
                    value: function initUiLabel(type) {
                        (0, _ui.loadModule)(this.refs.wrapper, {
                            path: "core/modules/" + type + "-label"
                        });
                    }
                }, {
                    key: "render",
                    value: function render() {
                        var wrapperClassName = (this.props.wrapperClassName || "") + (0, _ui.styleVariant)(" o-", labelType, "-label");
                        var labelClassName = (this.props.labelClassName || "") + (0, _ui.styleVariant)(" o-", labelType, "-label__placeholder");
                        var markClassName = (this.props.markClassName || "") + " o-validation-mark";
                        var inputClassName = this.props.className || "";
                        if (labelType && this.props.value) inputClassName += " is-not-empty";

                        if (validationMark && (this.props.value || this.props.validateEmpty)) {
                            if (this.props.valid === true) {
                                inputClassName += " success";
                                markClassName += " o-validation-mark--success";
                            } else if (this.props.valid === false) {
                                inputClassName += " error";
                                markClassName += " o-validation-mark--error";
                            } else if (this.props.validateEmpty && !this.props.value) {
                                inputClassName += " error";
                                markClassName += " o-validation-mark--error";
                            }
                        }

                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: wrapperClassName,
                            ref: "wrapper"
                        }, /*#__PURE__*/ _react.default.createElement(InputComponent, babelHelpers.extends({}, (0, _ui.excludeProps)(this.props, OWN_PROPS), {
                            className: inputClassName,
                            ref: "input",
                            autoComplete: "off",
                            "aria-describedby": this.props.id + "__placeholder",
                            "data-js-module": mask && placeholder ? "common/modules/opl-input-mask" : "",
                            "data-js-options": mask && placeholder ? '{"mask":"' + mask + '", "placeholder":"' + placeholder + '"}' : ''
                        })), validationMark && /*#__PURE__*/ _react.default.createElement("span", {
                            className: markClassName
                        }), labelType && /*#__PURE__*/ _react.default.createElement("p", {
                            id: this.props.id + "__placeholder",
                            className: labelClassName
                        }, this.props.label));
                    }
                }]);
                return EnhancedInputComponent;
            }(_react.Component);

            EnhancedInputComponent.displayName = "Enhanced(".concat(InputComponent.displayName || InputComponent.name, ")");
            EnhancedInputComponent.propTypes = _objectSpread({}, InputComponent.propTypes, {
                wrapperClassName: _propTypes.default.string
            }, labelType && {
                labelClassName: _propTypes.default.string,
                label: _propTypes.default.string
            }, {}, validationMark && {
                markClassName: _propTypes.default.string,
                valid: _propTypes.default.bool
            });
            EnhancedInputComponent.defaultProps = _objectSpread({}, InputComponent.defaultProps, {
                wrapperClassName: ""
            }, labelType && {
                labelClassName: "label"
            });
            return EnhancedInputComponent;
        };
    };

    _exports.enhanceInput = enhanceInput;
    var addLabelToInput = enhanceInput({
        labelType: "floating",
        validationMark: true
    });
    _exports.addLabelToInput = addLabelToInput;
    var addLabelToInputPhone = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "(+48) 999-999-999",
        placeholder: "(+48) ___-___-___"
    });
    _exports.addLabelToInputPhone = addLabelToInputPhone;
    var addLabelToInputNip = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "(999-999-99-99",
        placeholder: "___-___-__-__"
    });
    _exports.addLabelToInputNip = addLabelToInputNip;
    var addLabelToInputPesel = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "99999999999",
        placeholder: "___________"
    });
    _exports.addLabelToInputPesel = addLabelToInputPesel;
    var addLabelToInputCensoredIdNumber = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "*********",
        placeholder: "______"
    });
    _exports.addLabelToInputCensoredIdNumber = addLabelToInputCensoredIdNumber;
    var addLabelToInputIdNumber = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "aaa999999",
        placeholder: "______"
    });
    _exports.addLabelToInputIdNumber = addLabelToInputIdNumber;
    var addLabelToInputKna = enhanceInput({
        labelType: "floating",
        validationMark: true,
        mask: "99-999-99-99",
        placeholder: "__-___-__-__"
    });
    /*
     * Higher order component that enables masking component's value (doesn't update if the new value doesn't fit the mask function
     * Usage:
     *   MaskedInput = maskField(value => condition(value) || regex.test(value))(Input)
     *   <MaskedInput ...inputProps/>
     */

    _exports.addLabelToInputKna = addLabelToInputKna;

    var maskField = function maskField(mask) {
        return function(InputComponent) {
            var MaskedDisplay = /*#__PURE__*/ function(_Component3) {
                babelHelpers.inherits(MaskedDisplay, _Component3);

                var _super3 = _createSuper(MaskedDisplay);

                function MaskedDisplay() {
                    babelHelpers.classCallCheck(this, MaskedDisplay);
                    return _super3.apply(this, arguments);
                }

                babelHelpers.createClass(MaskedDisplay, [{
                    key: "handleChange",
                    value: function handleChange(event) {
                        if (mask(event.value)) this.props.onChange(event);
                    }
                }, {
                    key: "render",
                    value: function render() {
                        return /*#__PURE__*/ _react.default.createElement(InputComponent, babelHelpers.extends({}, this.props, {
                            onChange: this.handleChange.bind(this)
                        }));
                    }
                }]);
                return MaskedDisplay;
            }(_react.Component);

            MaskedDisplay.displayName = "MaskedDisplay(".concat(InputComponent.displayName || InputComponent.name, ")");
            MaskedDisplay.propTypes = InputComponent.propTypes;
            return MaskedDisplay;
        };
    };
    /*
     * Higher order component that enables disconnecting displayed and real value
     * Usage:
     *   MappedInput = mapDisplayValue({mapToDisplay: (value) => displayValue, mapToValue: (display) => realValue})(Input)
     *   <MappedInput name={...} value={...} onChange={...}/>
     * mapToDisplay and mapToValue should be inverses of each other, that is:
     *   mapToDisplay(mapToValue(x)) === x && mapToValue(mapToDisplay(x)) === x
     */


    _exports.maskField = maskField;

    var mapDisplayValue = function mapDisplayValue(_ref2) {
        var mapToDisplay = _ref2.mapToDisplay,
            mapToValue = _ref2.mapToValue;
        return function(InputComponent) {
            var MappedDisplay = /*#__PURE__*/ function(_Component4) {
                babelHelpers.inherits(MappedDisplay, _Component4);

                var _super4 = _createSuper(MappedDisplay);

                function MappedDisplay() {
                    babelHelpers.classCallCheck(this, MappedDisplay);
                    return _super4.apply(this, arguments);
                }

                babelHelpers.createClass(MappedDisplay, [{
                    key: "componentWillMount",
                    value: function componentWillMount() {
                        this.setState({
                            displayValue: mapToDisplay(this.props.value)
                        });
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function componentWillReceiveProps(_ref3) {
                        var value = _ref3.value;
                        if (mapToValue(this.state.displayValue) !== value) this.setState({
                            displayValue: mapToDisplay(value)
                        });
                    }
                }, {
                    key: "handleChange",
                    value: function handleChange(event) {
                        this.setState({
                            displayValue: event.value
                        });
                        this.props.onChange(_objectSpread({}, event, {
                            value: mapToValue(event.value)
                        }));
                    }
                }, {
                    key: "render",
                    value: function render() {
                        return /*#__PURE__*/ _react.default.createElement(InputComponent, babelHelpers.extends({}, this.props, {
                            value: this.state.displayValue,
                            onChange: this.handleChange.bind(this)
                        }));
                    }
                }]);
                return MappedDisplay;
            }(_react.Component);

            MappedDisplay.displayName = "MappedDisplay(".concat(InputComponent.displayName || InputComponent.name, ")");
            MappedDisplay.propTypes = InputComponent.propTypes;
            return MappedDisplay;
        };
    };

    _exports.mapDisplayValue = mapDisplayValue;
});
//# sourceMappingURL=input.js.map