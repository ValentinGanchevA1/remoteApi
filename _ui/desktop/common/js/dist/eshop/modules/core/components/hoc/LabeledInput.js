define(["exports", "react", "./ErrorRow", "eshop/modules/core/utils/ui"], function(_exports, _react, _ErrorRow, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ErrorRow = babelHelpers.interopRequireDefault(_ErrorRow);

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

    var moduleId = 0; //All forms with autocomplete should be in one bundle!

    var LabeledInput = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(LabeledInput, _Component);

        var _super = _createSuper(LabeledInput);

        function LabeledInput(props) {
            var _this;

            babelHelpers.classCallCheck(this, LabeledInput);
            _this = _super.call(this, props); //props that should not be passed to input

            _this.OWN_PROPS = ["showMaskOnHover", "virtualKeyboard", "wrapperClassName", "virtualKeyboardWrapperClass", "onChange", "onBlur", "placeholder", "mask", "errors", "validateEmpty", "valid", "labelType", "labelClassName", "validationMark", "mapSuggestion", "markClassName", "locked", "labelElement", "customInputClass"];

            if (props.autoComplete) {
                _this.OWN_PROPS = _this.OWN_PROPS.concat(["maxResults", "minLength", "mapSuggestion", "suggestions"]);
                _this.id = props.id || "react-autocomplete-" + moduleId++;
            } else {
                _this.id = props.id;
            } //initializing validation sign display


            _this.showValidationSign = !!props.defaultValue || !!props.value || !!props.errors && props.errors.length > 0;
            _this.forceHideSign = false; //initializing state

            _this.state = {
                switchState: true
            };
            _this.handleVirtualKeyboardChange = _this.handleVirtualKeyboardChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.virtualKeyboardId = 'LabeledInput-virtualKeyboard' + moduleId++;
            return _this;
        }

        babelHelpers.createClass(LabeledInput, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                //start label module
                if (this.props.labelType) this.initUiLabel(this.props.labelType);
                if (this.props.labelType) this.OWN_PROPS = this.OWN_PROPS.concat(["labelClassName", "label"]); //start mask module

                if (this.props.mask && this.props.placeholder !== undefined) {
                    this.initMaskModule();
                }

                if (this.isVirtualKeyboardEnabled()) {
                    this.initVirtualKeyboardModule();
                } //start autocomplete module


                if (this.props.autoComplete) {
                    this.modulePromise = (0, _ui.loadModule)(this.refs.input, {
                        path: "common/modules/opl-autocomplete",
                        options: {
                            noWrap: true,
                            arrayData: true,
                            minLength: this.props.minLength,
                            maxResults: this.props.maxResults,
                            completecallback: this.onSelect.bind(this)
                        }
                    });
                    this.updateSuggestions();
                }
            }
        }, {
            key: "handleVirtualKeyboardChange",
            value: function handleVirtualKeyboardChange(value) {
                var name = this.props.name;
                var id = "";
                this.handleValueChange(id, name, value);
                this.handleBlur(id, name, value);
                this.refs.input.focus();
            }
        }, {
            key: "initVirtualKeyboardModule",
            value: function initVirtualKeyboardModule() {
                (0, _ui.loadModule)(this.refs.virtualKeyboardWrapper, {
                    path: 'common/modules/opl-keyboard'
                });
                OPL.UI.on(OPL.UI.EVENTS.modules.virtualKeyboard.valueChanged, this.handleVirtualKeyboardChange, this.virtualKeyboardId);
            }
        }, {
            key: "isVirtualKeyboardEnabled",
            value: function isVirtualKeyboardEnabled() {
                return this.props.virtualKeyboard && !(this.props.autoSelect || this.props.disabled);
            }
        }, {
            key: "updateSuggestions",
            value: function updateSuggestions() {
                //TODO: use the promise when OPL.UI.off is fixed and doesn't recognize a handler only by its source code
                //this.modulePromise = this.modulePromise.then(() => {
                if (!this.props.suggestions) return;
                var suggestions = this.props.suggestions.map(this.props.mapSuggestion);
                OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.arrayData, suggestions, this.id); //});
            } //Method to select suggestion - autocomplete only

        }, {
            key: "onSelect",
            value: function onSelect() {
                if (this.props.onChange) {
                    this.showValidationSign = true;
                    this.forceHideSign = false;
                    var _this$refs$input = this.refs.input,
                        id = _this$refs$input.id,
                        name = _this$refs$input.name,
                        value = _this$refs$input.value;
                    this.props.onChange({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            } //Update component despite of state changing

        }, {
            key: "switchState",
            value: function switchState() {
                this.setState({
                    switchState: !this.state.switchState
                });
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                var nextPropsErrors = !!nextProps.errors && nextProps.errors.length > 0 && !nextProps.disabled;
                var prevPropsErrors = !!this.props.errors && this.props.errors.length > 0 && !this.props.disabled;

                if (nextPropsErrors || !this.props.value && nextProps.value) {
                    this.showValidationSign = true;
                } else if (prevPropsErrors && !nextPropsErrors && nextProps.value !== undefined && !nextProps.value) {
                    //Undefined means uncontrolled.
                    this.showValidationSign = false;
                } //Hide validation sign when clear input


                if (this.props.value && !nextProps.value) {
                    this.showValidationSign = false;
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                //update label module
                if (this.props.labelType && !prevProps.value && this.props.value) {
                    if (this.props.labelType !== "floating") {
                        // TODO Stopping all modules is inefficient, but we can't stop a specific module now - see issue NOR-56126
                        OPL.UI.stopModules(this.refs.wrapper);
                        OPL.UI.initModules(this.refs.wrapper);
                    } else {
                        // TODO checkvalue event for sliding label is not available
                        OPL.UI.fire(OPL.UI.EVENTS.modules.floatinglabels.checkvalue, this.refs.input, this.refs.wrapper);
                    }
                } //update suggestions - autocomplete only


                if (this.props.autoComplete && prevProps.suggestions !== this.props.suggestions) {
                    this.updateSuggestions();
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
            key: "initMaskModule",
            value: function initMaskModule() {
                (0, _ui.loadModule)(this.refs.input, {
                    path: 'common/modules/opl-input-mask',
                    options: {
                        "mask": this.props.mask,
                        "placeholder": this.props.placeholder,
                        "showMaskOnHover": this.props.showMaskOnHover
                    }
                });
            }
        }, {
            key: "isVirtualKeyboardEnabled",
            value: function isVirtualKeyboardEnabled() {
                return this.props.virtualKeyboard && !(this.props.autoSelect || this.props.disabled);
            }
        }, {
            key: "handleChangeEvent",
            value: function handleChangeEvent(event) {
                this.handleValueChange(event.target.id, event.target.name, event.target.value);
            }
        }, {
            key: "handleValueChange",
            value: function handleValueChange(id, name, value) {
                var index = this.props.index;

                if (!this.forceHideSign) {
                    this.switchState();
                }

                this.forceHideSign = true;

                if (this.props.onChange) {
                    if (index !== undefined) {
                        this.props.onChange({
                            id: id,
                            name: name,
                            value: value,
                            index: index
                        });
                    } else {
                        this.props.onChange({
                            id: id,
                            name: name,
                            value: value
                        });
                    }
                }
            }
        }, {
            key: "clearFocus",
            value: function clearFocus() {
                this.refs.input.blur();
            }
        }, {
            key: "handleBlurEvent",
            value: function handleBlurEvent(event) {
                this.handleBlur(event.target.id, event.target.name, event.target.value);
            }
        }, {
            key: "handleBlur",
            value: function handleBlur(id, name, value) {
                var index = this.props.index;
                this.forceHideSign = false;
                this.showValidationSign = true;
                this.switchState();

                if (this.props.onBlur) {
                    if (index !== undefined) {
                        this.props.onBlur({
                            id: id,
                            name: name,
                            value: value,
                            index: index
                        });
                    } else {
                        this.props.onBlur({
                            id: id,
                            name: name,
                            value: value
                        });
                    }
                }
            }
        }, {
            key: "render",
            value: function render() {
                var renderValidation = !this.forceHideSign && this.showValidationSign; //Input, validation sign and label wrapper

                var virtualKeyboardWrapperClass = "";
                var wrapperClassName = (0, _ui.styleVariant)("o-", this.props.labelType, "-label ") + (this.props.wrapperClassName || ""); //Label

                var labelClassName = (this.props.labelClassName || "") + (0, _ui.styleVariant)(" o-", this.props.labelType, "-label__placeholder"); //input

                var inputClassName = this.props.className || ""; //Validation sign

                var markClassName = (this.props.markClassName || "") + " o-validation-mark";
                if (this.props.labelType && (renderValidation || !!this.props.value)) inputClassName += " is-not-empty";

                if (this.props.validationMark && renderValidation) {
                    if (this.props.valid === true) {
                        inputClassName += " success";
                        markClassName += " o-validation-mark--success";
                    } else if (this.props.valid === false) {
                        inputClassName += " error";
                        markClassName += " o-validation-mark--error";
                    } else if (this.props.validateEmpty && this.props.value !== undefined && !this.props.value) {
                        inputClassName += " error";
                        markClassName += " o-validation-mark--error";
                    }
                } //autocomplete hints styling


                if (this.props.autoComplete && wrapperClassName.indexOf("opl-autocomplete") < 0) {
                    wrapperClassName += " opl-autocomplete";
                }

                if (this.isVirtualKeyboardEnabled()) {
                    virtualKeyboardWrapperClass += " opl-keyboard";
                    inputClassName += " opl-keyboard-input-value";
                }

                return /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    showErrors: renderValidation,
                    errors: this.props.errors,
                    className: this.props.errorWrapperClassName || ""
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: virtualKeyboardWrapperClass,
                    ref: "virtualKeyboardWrapper",
                    id: this.virtualKeyboardId
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: wrapperClassName,
                    ref: "wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-floating-label"
                }, /*#__PURE__*/ _react.default.createElement("input", babelHelpers.extends({}, (0, _ui.excludeProps)(this.props, this.OWN_PROPS), {
                    autoComplete: "off",
                    ref: "input",
                    id: this.id,
                    className: inputClassName,
                    "aria-describedby": (this.props.id || this.props.label) + "__placeholder",
                    disabled: this.props.autoSelect || this.props.disabled,
                    onBlur: this.handleBlurEvent.bind(this),
                    onChange: this.handleChangeEvent.bind(this)
                })), this.props.validationMark && /*#__PURE__*/ _react.default.createElement("span", {
                    className: markClassName
                }), this.props.labelType && /*#__PURE__*/ _react.default.createElement("p", {
                    id: (this.props.id || this.props.label) + "__placeholder",
                    className: labelClassName
                }, this.props.label), !!this.props.labelElement && this.props.labelElement))));
            }
        }]);
        return LabeledInput;
    }(_react.Component);

    LabeledInput.defaultProps = {
        labelType: "floating",
        labelClassName: "label",
        validationMark: true,
        minLength: 3,
        mapSuggestion: function mapSuggestion(suggestion) {
            return {
                value: suggestion,
                label: suggestion
            };
        },
        showMaskOnHover: false,
        virtualKeyboard: false
    };
    var _default = LabeledInput;
    _exports.default = _default;
});
//# sourceMappingURL=LabeledInput.js.map