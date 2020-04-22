define(["exports", "react", "react-dom", "prop-types", "lodash", "../utils/OnlineUtils", "../modules/core/utils/ui", "./common/OraMessage", "./common/OraLoader"], function(_exports, _react, _reactDom, _propTypes, _lodash, _OnlineUtils, _ui, _OraMessage, _OraLoader) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    Object.defineProperty(_exports, "OraMessage", {
        enumerable: true,
        get: function get() {
            return _OraMessage.default;
        }
    });
    Object.defineProperty(_exports, "OraLoader", {
        enumerable: true,
        get: function get() {
            return _OraLoader.OraLoader;
        }
    });
    Object.defineProperty(_exports, "OraLoaderChildren", {
        enumerable: true,
        get: function get() {
            return _OraLoader.OraLoaderChildren;
        }
    });
    Object.defineProperty(_exports, "OraParentLoader", {
        enumerable: true,
        get: function get() {
            return _OraLoader.OraParentLoader;
        }
    });
    _exports.OraAddBar = _exports.SwitchButtons = _exports.FloatingLabelForDatePicker = _exports.OraDatePicker = _exports.OraTieredPrice = _exports.OraPrice = _exports.GenericPopup = _exports.OraModal = _exports.OraButton = _exports.OraSpinner = _exports.OraInputWithLabel = _exports.OraSimpleCheckbox = _exports.OraSimpleRadio = _exports.OraComplexRadio = _exports.OraInput = _exports.OraLabel = _exports.OraFloatingTextArea = _exports.OraFloatingSelect = _exports.OraMulticartSelect = _exports.OraCmpSelect = _exports.OraSelect = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _reactDom = babelHelpers.interopRequireDefault(_reactDom);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OraMessage = babelHelpers.interopRequireDefault(_OraMessage);

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

    var OraSelect = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraSelect, _Component);

        var _super = _createSuper(OraSelect);

        function OraSelect(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraSelect);
            _this = _super.call(this, props);
            _this.handleChange = _this.handleChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleChangeIe8 = _this.handleChangeIe8.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleClick = _this.handleClick.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(OraSelect, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (_OnlineUtils.default.ifIe8) {
                    //IE8 hack, IE8 cant handle onChange on select properly
                    var select = document.getElementById(this.props.id);
                    select.attachEvent("onchange", this.handleChangeIe8.bind(this));
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.isFeedbackParam) {
                    //TEGO TUTAJ NIE POWINNO BYC to jest ogolny komponent widoku!!! takie rzeczy powinny byc obslugiwane w akcjach po kliknieciu!!! ogolnie to cos jest konkretnie spierdolone jak musisz wywolywac po zmianie ponownie event na zmiane
                    if (typeof Feedback !== 'undefined') {
                        Feedback.showHideFeedback();
                    }
                }
            }
        }, {
            key: "handleChangeIe8",
            value: function handleChangeIe8(e) {
                var _e$srcElement = e.srcElement,
                    id = _e$srcElement.id,
                    name = _e$srcElement.name,
                    value = _e$srcElement.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                var _event$target = event.target,
                    id = _event$target.id,
                    name = _event$target.name,
                    value = _event$target.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "handleClick",
            value: function handleClick(event) {
                var _event$currentTarget$ = event.currentTarget.dataset,
                    id = _event$currentTarget$.id,
                    value = _event$currentTarget$.value;
                this.props.onChange({
                    id: id,
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                if (this.props.options.length === 1 && this.props.options[0]) {
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-padding-top-m u-padding-left-m " + this.props.singleOptionClassName
                    }, this.props.singleDataText ? this.props.singleDataText : null, this.props.options[0].description);
                } else {
                    if (this.props.selectionType === "TAB") {
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-tabs opl-tabs--small opl-tabs--secondary opl-tabs--arrows"
                        }, this.props.options.length > 1 ? /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-tabs__nav-wrapper"
                        }, /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-tabs__nav-wrapper-inner opl-tabs__arrows opl-tabs__gradient-right"
                        }, /*#__PURE__*/ _react.default.createElement("ul", {
                            className: "opl-tabs__nav",
                            "data-js-module": "common/modules/opl-tabs",
                            "data-js-options": "{\"tabNavLinkInnerCor\": 30, \"arrows\": true, \"tabArrows\": true, \"draggable\": false}"
                        }, this.props.options.map(function(option, index) {
                            return /*#__PURE__*/ _react.default.createElement("li", {
                                className: "opl-tabs__nav-item"
                            }, /*#__PURE__*/ _react.default.createElement("div", {
                                className: "opl-tabs__nav-item__content"
                            }, /*#__PURE__*/ _react.default.createElement("a", {
                                href: "#",
                                onClick: _this2.handleClick,
                                "data-id": _this2.props.id + option.value,
                                "data-value": option.value,
                                className: "opl-tabs__nav-link " + (option.value === _this2.props.selected ? "is-active" : ""),
                                "data-selected": option.description === _this2.props.selectedName ? "1" : "0",
                                "aria-selected": option.value === _this2.props.selected
                            }, /*#__PURE__*/ _react.default.createElement("span", {
                                className: "opl-tabs__nav-link-inner"
                            }, /*#__PURE__*/ _react.default.createElement("span", null, option.description)))));
                        })))) : null);
                    } else {
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: "o-select " + this.props.className
                        }, this.props.label ? /*#__PURE__*/ _react.default.createElement("label", {
                            htmlFor: this.props.id,
                            className: "u-acc-hide"
                        }, this.props.label) : null, /*#__PURE__*/ _react.default.createElement("select", {
                            onChange: this.handleChange,
                            name: this.props.name,
                            value: this.props.selected,
                            id: this.props.id,
                            disabled: this.props.disabled,
                            "aria-label": this.props.ariaLabel,
                            "data-feedback-param": this.props.isFeedbackParam,
                            className: this.props.selectClassName
                        }, this.props.withEmptyOption ? /*#__PURE__*/ _react.default.createElement("option", {
                            key: this.props.emptyOption.value,
                            value: this.props.emptyOption.value
                        }, this.props.emptyOption.description) : null, this.props.options.map(function(option) {
                            return /*#__PURE__*/ _react.default.createElement("option", {
                                key: option.value,
                                value: option.value,
                                hidden: option.hidden,
                                disabled: option.disabled
                            }, option.description);
                        })), /*#__PURE__*/ _react.default.createElement("span", {
                            className: "o-select__arrow"
                        }));
                    }
                }
            }
        }]);
        return OraSelect;
    }(_react.Component);

    _exports.OraSelect = OraSelect;
    OraSelect.propTypes = {
        label: _propTypes.default.string,
        id: _propTypes.default.string.isRequired,
        isFeedbackParam: _propTypes.default.any,
        name: _propTypes.default.string,
        options: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string
        })),
        selected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        disabled: _propTypes.default.bool,
        className: _propTypes.default.string,
        onChange: _propTypes.default.func,
        emptyOption: _propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }),
        withEmptyOption: _propTypes.default.bool,
        singleDataText: _propTypes.default.string,
        selectClassName: _propTypes.default.string,
        singleOptionClassName: _propTypes.default.string,
        selectionType: _propTypes.default.string,
        ariaLabel: _propTypes.default.string
    };
    OraSelect.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: false,
        selectClassName: "",
        singleOptionClassName: "",
        selectionType: "DROPDOWN",
        ariaLabel: "wybierz z listy"
    };

    var OraCmpSelect = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(OraCmpSelect, _Component2);

        var _super2 = _createSuper(OraCmpSelect);

        function OraCmpSelect(props) {
            var _this3;

            babelHelpers.classCallCheck(this, OraCmpSelect);
            _this3 = _super2.call(this, props);
            _this3.handleChange = _this3.handleChange.bind(babelHelpers.assertThisInitialized(_this3));
            _this3.handleChangeIe8 = _this3.handleChangeIe8.bind(babelHelpers.assertThisInitialized(_this3));
            _this3.handleClick = _this3.handleClick.bind(babelHelpers.assertThisInitialized(_this3));
            return _this3;
        }

        babelHelpers.createClass(OraCmpSelect, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (_OnlineUtils.default.ifIe8) {
                    //IE8 hack, IE8 cant handle onChange on select properly
                    var select = document.getElementById(this.props.id);
                    select.attachEvent("onchange", this.handleChangeIe8.bind(this));
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.isFeedbackParam) {
                    //TEGO TUTAJ NIE POWINNO BYC to jest ogolny komponent widoku!!! takie rzeczy powinny byc obslugiwane w akcjach po kliknieciu!!! ogolnie to cos jest konkretnie spierdolone jak musisz wywolywac po zmianie ponownie event na zmiane
                    if (typeof Feedback !== 'undefined') {
                        Feedback.showHideFeedback();
                    }
                }
            }
        }, {
            key: "handleChangeIe8",
            value: function handleChangeIe8(e) {
                var _e$srcElement2 = e.srcElement,
                    id = _e$srcElement2.id,
                    name = _e$srcElement2.name,
                    value = _e$srcElement2.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                var _event$target2 = event.target,
                    id = _event$target2.id,
                    name = _event$target2.name,
                    value = _event$target2.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "handleClick",
            value: function handleClick(event) {
                var _event$currentTarget$2 = event.currentTarget.dataset,
                    id = _event$currentTarget$2.id,
                    value = _event$currentTarget$2.value;
                this.props.onChange({
                    id: id,
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                if (this.props.selectionType === "TAB") {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-tabs opl-tabs--small opl-tabs--secondary opl-tabs--arrows"
                    }, this.props.options.length > 1 ? /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-tabs__nav-wrapper"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-tabs__nav-wrapper-inner opl-tabs__arrows opl-tabs__gradient-right"
                    }, /*#__PURE__*/ _react.default.createElement("ul", {
                        className: "opl-tabs__nav",
                        "data-js-module": "common/modules/opl-tabs",
                        "data-js-options": "{\"tabNavLinkInnerCor\": 30, \"arrows\": true, \"tabArrows\": true, \"draggable\": false}"
                    }, this.props.options.map(function(option, index) {
                        return /*#__PURE__*/ _react.default.createElement("li", {
                            className: "opl-tabs__nav-item"
                        }, /*#__PURE__*/ _react.default.createElement("div", {
                            className: "opl-tabs__nav-item__content"
                        }, /*#__PURE__*/ _react.default.createElement("a", {
                            href: "#",
                            onClick: _this4.handleClick,
                            "data-id": _this4.props.id + option.value,
                            "data-value": option.value,
                            className: "opl-tabs__nav-link " + (option.value === _this4.props.selected ? "is-active" : ""),
                            "data-selected": option.description === _this4.props.selectedName ? "1" : "0",
                            "aria-selected": option.value === _this4.props.selected
                        }, /*#__PURE__*/ _react.default.createElement("span", {
                            className: "opl-tabs__nav-link-inner"
                        }, /*#__PURE__*/ _react.default.createElement("span", null, option.description)))));
                    })))) : null);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-select " + this.props.className
                    }, this.props.label ? /*#__PURE__*/ _react.default.createElement("label", {
                        htmlFor: this.props.id,
                        className: "u-acc-hide"
                    }, this.props.label) : null, /*#__PURE__*/ _react.default.createElement("select", {
                        onChange: this.handleChange,
                        name: this.props.name,
                        value: this.props.selected,
                        id: this.props.id,
                        disabled: this.props.disabled,
                        "aria-label": this.props.ariaLabel,
                        "data-feedback-param": this.props.isFeedbackParam,
                        className: this.props.selectClassName
                    }, this.props.withEmptyOption ? /*#__PURE__*/ _react.default.createElement("option", {
                        key: this.props.emptyOption.value,
                        value: this.props.emptyOption.value
                    }, this.props.emptyOption.description) : null, this.props.options.map(function(option) {
                        return /*#__PURE__*/ _react.default.createElement("option", {
                            key: option.value,
                            value: option.value,
                            hidden: option.hidden,
                            disabled: option.disabled
                        }, option.description);
                    })), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-select__arrow"
                    }));
                }
            }
        }]);
        return OraCmpSelect;
    }(_react.Component);

    _exports.OraCmpSelect = OraCmpSelect;
    var multicartSelectId = 0;

    var OraMulticartSelect = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(OraMulticartSelect, _Component3);

        var _super3 = _createSuper(OraMulticartSelect);

        function OraMulticartSelect(props) {
            var _this5;

            babelHelpers.classCallCheck(this, OraMulticartSelect);
            _this5 = _super3.call(this, props);
            _this5.handleChange = _this5.handleChange.bind(babelHelpers.assertThisInitialized(_this5));
            _this5.containerId = "multicartSelect_" + multicartSelectId++;
            _this5.optionsChange = false;
            return _this5;
        }

        babelHelpers.createClass(OraMulticartSelect, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.options.length > 1) {
                    this.loadModule();
                }
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.withEmptyOption) {
                    this.props.options.unshift(this.props.emptyOption);
                }
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                OPL.UI.loadModules(this.ref, [{
                    path: 'common/modules/opl-dropdown-select',
                    options: this.getSelectOptions()
                }]);
            }
        }, {
            key: "killModule",
            value: function killModule() {
                OPL.UI.stopModules(document.getElementById(this.containerId));
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                if (nextProps.withEmptyOption) {
                    nextProps.options.unshift(nextProps.emptyOption);
                }

                if (!this.compareOptionsArrays(this.props.options, nextProps.options)) {
                    this.optionsChange = true;
                    this.killModule();
                }

                this.props = nextProps;
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.optionsChange && this.props.options.length > 1) {
                    this.loadModule();
                }

                this.optionsChange = false;
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.killModule();
            }
        }, {
            key: "compareOptionsArrays",
            value: function compareOptionsArrays(oldOptions, newOptions) {
                var _this6 = this;

                if (oldOptions.length !== newOptions.length) {
                    return false;
                }

                if (oldOptions.length === 0) {
                    return false;
                }

                return oldOptions.map(function(oldOption, index) {
                    return _this6.compareOptions(oldOption, newOptions[index]);
                }).reduce(function(a, b) {
                    return a && b;
                });
            }
        }, {
            key: "compareOptions",
            value: function compareOptions(oldOption, newOption) {
                for (var propName in oldOption) {
                    if (!newOption.hasOwnProperty(propName)) {
                        return false;
                    }

                    if (newOption[propName] !== oldOption[propName]) {
                        return false;
                    }
                }

                return true;
            }
        }, {
            key: "getSelectOptions",
            value: function getSelectOptions() {
                return {
                    inputValue: '.opl-dropdown-select--value',
                    triggerClass: '.opl-dropdown-select--btn',
                    contentClass: '.opl-dropdown-select--list',
                    forceDown: this.props.forceDown ? this.props.forceDown : false
                };
            }
        }, {
            key: "handleChange",
            value: function handleChange(_ref) {
                var value = _ref.value;
                this.props.onChange({
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this7 = this;

                if (this.props.options.length === 1 && this.props.options[0]) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: this.props.className
                    }, this.props.singleDataText ? this.props.singleDataText : null, this.props.options[0].description);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: this.containerId
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        ref: function ref(_ref2) {
                            return _this7.ref = _ref2;
                        },
                        "aria-label": "",
                        className: "opl-dropdown-select " + (this.props.className ? this.props.className : ""),
                        id: this.props.id
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "hidden",
                        name: "select_offer",
                        className: "opl-dropdown-select--value",
                        value: this.props.selected
                    }), /*#__PURE__*/ _react.default.createElement("button", {
                        className: "opl-dropdown-select--btn " + this.props.btnClassName,
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                        disabled: this.props.disabled,
                        name: this.props.name
                    }, this.props.options[0] ? this.props.options[0].description : ""), /*#__PURE__*/ _react.default.createElement("ul", {
                        role: "menu",
                        className: "opl-dropdown-select--list"
                    }, this.props.options.map(function(option, index) {
                        return /*#__PURE__*/ _react.default.createElement("li", {
                            role: "menuitem",
                            key: index,
                            hidden: option.hidden,
                            disabled: option.disabled
                        }, /*#__PURE__*/ _react.default.createElement("a", {
                            href: "#",
                            "data-option": option.value,
                            onClick: _this7.handleChange.bind(_this7, option)
                        }, option.description));
                    }))));
                }
            }
        }]);
        return OraMulticartSelect;
    }(_react.Component);

    _exports.OraMulticartSelect = OraMulticartSelect;
    OraMulticartSelect.propTypes = {
        id: _propTypes.default.string.isRequired,
        name: _propTypes.default.string,
        options: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string
        })),
        selected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        disabled: _propTypes.default.bool,
        className: _propTypes.default.string,
        btnClassName: _propTypes.default.string,
        onChange: _propTypes.default.func,
        emptyOption: _propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }),
        withEmptyOption: _propTypes.default.bool,
        singleDataText: _propTypes.default.string
    };
    OraMulticartSelect.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: false
    };

    var OraFloatingSelect = /*#__PURE__*/ function(_Component4) {
        babelHelpers.inherits(OraFloatingSelect, _Component4);

        var _super4 = _createSuper(OraFloatingSelect);

        function OraFloatingSelect() {
            babelHelpers.classCallCheck(this, OraFloatingSelect);
            return _super4.apply(this, arguments);
        }

        babelHelpers.createClass(OraFloatingSelect, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                (0, _ui.loadModule)(this.refs.wrapper, {
                    path: "core/modules/floating-label"
                });
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                var _event$target3 = event.target,
                    id = _event$target3.id,
                    name = _event$target3.name,
                    value = _event$target3.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this8 = this;

                var finalOptions = this.props.withEmptyOption ? [this.props.emptyOption].concat(this.props.options) : this.props.options.slice();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-floating-label o-select " + this.props.className,
                    ref: "wrapper"
                }, /*#__PURE__*/ _react.default.createElement("select", {
                    className: this.props.btnClassName + (!!this.props.value ? " is-not-empty" : ""),
                    value: this.props.value || "",
                    id: this.props.id,
                    name: this.props.name,
                    onChange: this.handleChange.bind(this),
                    "aria-describedby": "floating-label__placeholder",
                    disabled: this.props.disabled
                }, finalOptions.map(function(o) {
                    return /*#__PURE__*/ _react.default.createElement("option", {
                        key: _this8.props.id + "_" + o.value,
                        value: o.value,
                        disabled: o.disabled,
                        hidden: o.hidden
                    }, o.description);
                })), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-select__arrow"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "label o-floating-label__placeholder",
                    id: "floating-label__placeholder"
                }, this.props.label));
            }
        }]);
        return OraFloatingSelect;
    }(_react.Component);

    _exports.OraFloatingSelect = OraFloatingSelect;

    var OraFloatingTextArea = /*#__PURE__*/ function(_Component5) {
        babelHelpers.inherits(OraFloatingTextArea, _Component5);

        var _super5 = _createSuper(OraFloatingTextArea);

        function OraFloatingTextArea() {
            babelHelpers.classCallCheck(this, OraFloatingTextArea);
            return _super5.apply(this, arguments);
        }

        babelHelpers.createClass(OraFloatingTextArea, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                (0, _ui.loadModule)(this.refs.wrapper, {
                    path: "core/modules/floating-label"
                });
            }
        }, {
            key: "handleChange",
            value: function handleChange(event) {
                var _event$target4 = event.target,
                    id = _event$target4.id,
                    name = _event$target4.name,
                    value = _event$target4.value;
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-floating-label " + this.props.className,
                    ref: "wrapper"
                }, /*#__PURE__*/ _react.default.createElement("textarea", {
                    id: this.props.id,
                    name: this.props.name,
                    className: this.props.txtAreaClassName,
                    style: this.props.txtAreaStyle,
                    "aria-describedby": "floating-label__textarea",
                    disabled: this.props.disabled,
                    onChange: this.handleChange.bind(this),
                    maxLength: this.props.maxlength
                }, this.props.value), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-select__arrow"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "label o-floating-label__placeholder",
                    id: "floating-label__placeholder"
                }, this.props.label));
            }
        }]);
        return OraFloatingTextArea;
    }(_react.Component);

    _exports.OraFloatingTextArea = OraFloatingTextArea;
    OraFloatingSelect.propTypes = {
        id: _propTypes.default.string.isRequired,
        name: _propTypes.default.string.isRequired,
        options: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string,
            hidden: _propTypes.default.bool,
            disabled: _propTypes.default.bool
        })).isRequired,
        selected: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        className: _propTypes.default.string,
        btnClassName: _propTypes.default.string,
        onChange: _propTypes.default.func,
        emptyOption: _propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string,
            hidden: _propTypes.default.bool,
            disabled: _propTypes.default.bool
        }),
        withEmptyOption: _propTypes.default.bool,
        disabled: _propTypes.default.bool,
        label: _propTypes.default.string
    };
    OraFloatingSelect.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz...",
            hidden: false,
            disabled: false
        },
        disabled: false,
        withEmptyOption: false
    };

    var OraLabel = function OraLabel(props) {
        var label = /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: props.htmlFor,
            className: props.className
        }, props.children);

        return !props.wrapperClassName ? label : /*#__PURE__*/ _react.default.createElement("div", {
            className: props.wrapperClassName
        }, label);
    };

    _exports.OraLabel = OraLabel;
    OraLabel.propTypes = {
        value: _propTypes.default.string,
        className: _propTypes.default.string,
        wrapperClassName: _propTypes.default.string,
        htmlFor: _propTypes.default.string,
        children: _propTypes.default.any
    };
    OraLabel.defaultProps = {
        value: "",
        className: "",
        wrapperClassName: "",
        htmlFor: ""
    };

    var OraInput = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(OraInput, _PureComponent);

        var _super6 = _createSuper(OraInput);

        function OraInput(props) {
            var _this9;

            babelHelpers.classCallCheck(this, OraInput);
            _this9 = _super6.call(this, props);
            _this9.state = {
                value: ""
            };
            _this9.handleChange = _this9.handleChange.bind(babelHelpers.assertThisInitialized(_this9));
            _this9.handleBlur = _this9.handleBlur.bind(babelHelpers.assertThisInitialized(_this9));
            return _this9;
        }

        babelHelpers.createClass(OraInput, [{
            key: "handleChange",
            value: function handleChange(event) {
                this.setState({
                    value: event.target.value
                });

                if (!!this.props.onChange) {
                    var _event$target5 = event.target,
                        id = _event$target5.id,
                        name = _event$target5.name,
                        value = _event$target5.value;
                    this.props.onChange({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "handleBlur",
            value: function handleBlur(event) {
                if (!!this.props.onBlur) {
                    var _event$target6 = event.target,
                        id = _event$target6.id,
                        name = _event$target6.name,
                        value = _event$target6.value;
                    this.props.onBlur({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (!prevProps.focusOnMount && this.props.focusOnMount) {
                    $(this.refs.inputRef).focus();
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                //Very ugly workaround... Do not duplicate!
                if (!!this.props.browserAutocomplete) {
                    _reactDom.default.findDOMNode(this.refs.inputRef).setAttribute('browserautocomplete', this.props.browserAutocomplete);
                }

                console.log("INPUT MOUNTED ", this.props.id);

                if (this.props.focusOnMount) {
                    var that = this;
                    setTimeout(function() {
                        if (that.refs.inputRef) {
                            that.refs.inputRef.focus();
                        }
                    }, 500);
                }

                if (this.props.autocomplete) {
                    OPL.UI.loadModules(this.refs.inputRef, {
                        path: "common/modules/opl-autocomplete",
                        options: {
                            sortElements: false,
                            url: this.props.autocompleteUrl,
                            type: 'POST',
                            responsdatavalue: 'id',
                            responsdatalabel: 'name',
                            noWrap: true,
                            completecallback: this.props.onPick,
                            data: this.props.data
                        }
                    });
                    OPL.UI.on('module.started', function(data) {
                        if (data.module === 'common/modules/opl-autocomplete') {
                            console.log("Autocomplete ready ", data);

                            if (!!data.element.getAttribute('browserautocomplete')) {
                                data.element.autocomplete = data.element.getAttribute('browserautocomplete');
                            }
                        }
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var classNames = this.props.className;

                if (this.props.value && this.props.value.length > 0) {
                    classNames += ' is-not-empty';
                }

                var input = /*#__PURE__*/ _react.default.createElement("input", babelHelpers.extends({}, (0, _ui.excludeProps)(this.props, ["wrapperClassName", "labelType", "validateEmpty", "browserAutocomplete", "focusOnMount", "autocompleteUrl", "onPick", "autocomplete"]), {
                    className: classNames,
                    ref: "inputRef",
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    onFocus: this.props.onFocus,
                    autoComplete: this.props.browserAutocomplete,
                    onKeyUp: this.props.onKeyUp
                }));

                return !this.props.wrapperClassName ? input : /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.wrapperClassName
                }, input);
            }
        }]);
        return OraInput;
    }(_react.PureComponent);

    _exports.OraInput = OraInput;
    OraInput.propTypes = {
        id: _propTypes.default.string,
        name: _propTypes.default.string,
        className: _propTypes.default.string,
        wrapperClassName: _propTypes.default.string,
        placeholder: _propTypes.default.string,
        value: _propTypes.default.string,
        type: _propTypes.default.string,
        maxLength: _propTypes.default.string,
        onChange: _propTypes.default.func,
        onBlur: _propTypes.default.func,
        browserAutocomplete: _propTypes.default.string
    };
    OraInput.defaultProps = {
        className: "",
        wrapperClassName: "",
        placeholder: "",
        type: "text",
        browserAutocomplete: "on"
    };

    var OraComplexRadio = /*#__PURE__*/ function(_Component6) {
        babelHelpers.inherits(OraComplexRadio, _Component6);

        var _super7 = _createSuper(OraComplexRadio);

        function OraComplexRadio() {
            babelHelpers.classCallCheck(this, OraComplexRadio);
            return _super7.apply(this, arguments);
        }

        babelHelpers.createClass(OraComplexRadio, [{
            key: "handleChange",
            value: function handleChange(event) {
                this.props.onChange(event);
            }
        }, {
            key: "render",
            value: function render() {
                console.log("OraComplexRadio");
                console.log(this.props);
                return /*#__PURE__*/ _react.default.createElement("label", {
                    className: this.props.labelClassName && this.props.labelClassName
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-ci-label " + this.props.textSpanClassName && this.props.textSpanClassName
                }, this.props.children));
            }
        }]);
        return OraComplexRadio;
    }(_react.Component);

    _exports.OraComplexRadio = OraComplexRadio;

    var OraSimpleRadio = /*#__PURE__*/ function(_Component7) {
        babelHelpers.inherits(OraSimpleRadio, _Component7);

        var _super8 = _createSuper(OraSimpleRadio);

        function OraSimpleRadio() {
            babelHelpers.classCallCheck(this, OraSimpleRadio);
            return _super8.apply(this, arguments);
        }

        babelHelpers.createClass(OraSimpleRadio, [{
            key: "handleChange",
            value: function handleChange(event) {
                this.props.onChange(event);
            }
        }, {
            key: "handleClick",
            value: function handleClick(event) {
                this.props.onClick(event);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("label", {
                    className: this.props.labelClassName
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci " + this.props.spanClassName
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label " + this.props.textSpanClassName
                }, this.props.text));
            }
        }]);
        return OraSimpleRadio;
    }(_react.Component);

    _exports.OraSimpleRadio = OraSimpleRadio;
    OraSimpleRadio.propTypes = {
        name: _propTypes.default.string,
        text: _propTypes.default.string,
        value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
        readOnly: _propTypes.default.bool,
        checked: _propTypes.default.bool,
        onChange: _propTypes.default.func,
        inputClassName: _propTypes.default.string,
        labelClassName: _propTypes.default.string,
        textSpanClassName: _propTypes.default.string,
        spanClassName: _propTypes.default.string
    };
    OraSimpleRadio.defaultProps = {
        labelClassName: "o-radio opl-radio",
        readOnly: false,
        checked: false,
        spanClassName: "",
        onChange: function onChange(e) {}
    };

    var OraSimpleCheckbox = /*#__PURE__*/ function(_Component8) {
        babelHelpers.inherits(OraSimpleCheckbox, _Component8);

        var _super9 = _createSuper(OraSimpleCheckbox);

        function OraSimpleCheckbox() {
            babelHelpers.classCallCheck(this, OraSimpleCheckbox);
            return _super9.apply(this, arguments);
        }

        babelHelpers.createClass(OraSimpleCheckbox, [{
            key: "handleChange",
            value: function handleChange(event) {
                this.props.onChange(event);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("label", {
                    className: this.props.labelClassName
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    name: this.props.name,
                    value: this.props.value,
                    disabled: this.props.readOnly,
                    checked: this.props.checked,
                    onChange: this.handleChange.bind(this),
                    className: this.props.inputClassName
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.text));
            }
        }]);
        return OraSimpleCheckbox;
    }(_react.Component);

    _exports.OraSimpleCheckbox = OraSimpleCheckbox;
    OraSimpleCheckbox.propTypes = {
        name: _propTypes.default.string,
        text: _propTypes.default.string,
        value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
        readOnly: _propTypes.default.bool,
        checked: _propTypes.default.bool,
        onChange: _propTypes.default.func,
        labelClassName: _propTypes.default.string,
        inputClassName: _propTypes.default.string
    };
    OraSimpleCheckbox.defaultProps = {
        text: "",
        labelClassName: "o-checkbox opl-checkbox",
        readOnly: false,
        checked: false,
        onChange: function onChange(e) {}
    };

    var OraInputWithLabel = /*#__PURE__*/ function(_Component9) {
        babelHelpers.inherits(OraInputWithLabel, _Component9);

        var _super10 = _createSuper(OraInputWithLabel);

        function OraInputWithLabel() {
            babelHelpers.classCallCheck(this, OraInputWithLabel);
            return _super10.apply(this, arguments);
        }

        babelHelpers.createClass(OraInputWithLabel, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(OraLabel, {
                    htmlFor: this.props.inputId,
                    wrapperClassName: this.props.labelWrapperClass,
                    className: this.props.labelClass
                }, this.props.label), /*#__PURE__*/ _react.default.createElement(OraInput, {
                    id: this.props.inputId,
                    name: this.props.inputName,
                    placeholder: this.props.inputPlaceholder,
                    wrapperClassName: this.props.inputWrapperClass,
                    className: this.props.inputClass,
                    onChange: this.props.inputOnChange,
                    value: this.props.inputValue
                }));
            }
        }]);
        return OraInputWithLabel;
    }(_react.Component);

    _exports.OraInputWithLabel = OraInputWithLabel;
    OraInputWithLabel.propTypes = {
        label: _propTypes.default.string,
        labelClass: _propTypes.default.string,
        labelWrapperClass: _propTypes.default.string,
        inputClass: _propTypes.default.string,
        inputWrapperClass: _propTypes.default.string,
        inputPlaceholder: _propTypes.default.string,
        inputId: _propTypes.default.string,
        inputName: _propTypes.default.string,
        inputOnChange: _propTypes.default.func,
        inputValue: _propTypes.default.string
    };
    OraInputWithLabel.defaultProps = {
        labelClass: "",
        labelWrapperClass: "",
        inputClass: "",
        inputWrapperClass: "",
        inputPlaceholder: "",
        inputOnChange: function inputOnChange(_ref3) {
            var id = _ref3.id,
                name = _ref3.name,
                value = _ref3.value;
        },
        inputValue: ""
    };

    var OraSpinner = /*#__PURE__*/ function(_Component10) {
        babelHelpers.inherits(OraSpinner, _Component10);

        var _super11 = _createSuper(OraSpinner);

        function OraSpinner() {
            babelHelpers.classCallCheck(this, OraSpinner);
            return _super11.apply(this, arguments);
        }

        babelHelpers.createClass(OraSpinner, [{
            key: "render",
            value: function render() {
                return !this.props.show ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "spinner-containing-div"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "spinner-wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "spinner"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "dot1"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "dot2"
                }))));
            }
        }]);
        return OraSpinner;
    }(_react.Component);

    _exports.OraSpinner = OraSpinner;
    OraSpinner.propTypes = {
        show: _propTypes.default.bool
    };
    var ORABUTTON_OWN_PROPS = ["type", "size", "modal", "description", "className", "customClasses"];

    var OraButton = /*#__PURE__*/ function(_Component11) {
        babelHelpers.inherits(OraButton, _Component11);

        var _super12 = _createSuper(OraButton);

        function OraButton() {
            babelHelpers.classCallCheck(this, OraButton);
            return _super12.apply(this, arguments);
        }

        babelHelpers.createClass(OraButton, [{
            key: "getClassName",
            value: function getClassName() {
                return this.props.customClasses ? this.props.customClasses : "o-btn opl-btn" + (0, _ui.styleVariant)(" opl-btn--", this.props.type) + (0, _ui.styleVariant)(" opl-btn--", this.props.size) + (0, _ui.styleVariant)(" ", this.props.className);
            }
        }, {
            key: "getDescription",
            value: function getDescription() {
                if (this.props.description) {
                    return /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, this.props.description);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var button = /*#__PURE__*/ _react.default.createElement("button", babelHelpers.extends({}, (0, _ui.excludeProps)(this.props, ORABUTTON_OWN_PROPS), {
                    disabled: this.props.disabled,
                    className: this.getClassName()
                }), this.props.children, this.getDescription());

                return this.props.modal ? /*#__PURE__*/ _react.default.createElement("a", {
                    rel: "modal:close"
                }, button) : button;
            }
        }]);
        return OraButton;
    }(_react.Component);

    _exports.OraButton = OraButton;
    OraButton.propTypes = {
        type: _propTypes.default.oneOf(["primary", "secondary", "transparent", "text", "green"]),
        size: _propTypes.default.oneOf(["small", "medium", "large"]),
        className: _propTypes.default.string,
        onClick: _propTypes.default.func,
        modal: _propTypes.default.bool,
        description: _propTypes.default.string,
        children: _propTypes.default.any,
        customClasses: _propTypes.default.string // Also accepts all the attributes viable for a button element

    };
    OraButton.defaultProps = {
        type: "primary",
        size: "medium",
        modal: false
    }; // IMPORTANT! PLEASE USE eshop/components/modules/core/ui/Modal INSTEAD!

    var OraModal = /*#__PURE__*/ function(_Component12) {
        babelHelpers.inherits(OraModal, _Component12);

        var _super13 = _createSuper(OraModal);

        function OraModal() {
            babelHelpers.classCallCheck(this, OraModal);
            return _super13.apply(this, arguments);
        }

        babelHelpers.createClass(OraModal, [{
            key: "getModalOptions",
            value: function getModalOptions() {
                var options = {};
                options.modalClass = "o-modal" + (this.props.narrow ? " o-modal--narrow" : "") + (!this.props.narrow && this.props.medium ? " o-modal--medium" : "");
                if (this.props.showClose !== null) options.showClose = this.props.showClose;
                if (this.props.escapeClose !== null) options.escapeClose = this.props.escapeClose;
                if (this.props.clickClose !== null) options.clickClose = this.props.clickClose;

                if (this.props.closeText !== null) {
                    options.showCloseText = true;
                    options.closeText = this.props.closeText;
                }

                if (this.props.contentHeight !== null) options.contentHeight = this.props.contentHeight;
                return options;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#" + this.props.id,
                    id: this.props.id + "-trigger",
                    className: "o-modal__trigger u-hide",
                    "data-type": "modal:custom",
                    "data-js-module": "core/modules/modal",
                    "data-js-options": JSON.stringify(this.getModalOptions())
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    className: "u-hide--soft"
                }, this.props.children));
            }
        }]);
        return OraModal;
    }(_react.Component);

    _exports.OraModal = OraModal;
    OraModal.propTypes = {
        id: _propTypes.default.string.isRequired,
        narrow: _propTypes.default.bool,
        showClose: _propTypes.default.bool,
        escapeClose: _propTypes.default.bool,
        clickClose: _propTypes.default.bool,
        closeText: _propTypes.default.string,
        contentHeight: _propTypes.default.number,
        children: _propTypes.default.any,
        onClose: _propTypes.default.func,
        fallback: _propTypes.default.func // fallback function for browsers that don't fully support modals (looking at you, IE8...)

    };
    OraModal.defaultProps = {
        narrow: false,
        showClose: null,
        closeText: null,
        contentHeight: null,
        escapeClose: null,
        clickClose: null
    };

    var GenericPopup = /*#__PURE__*/ function(_Component13) {
        babelHelpers.inherits(GenericPopup, _Component13);

        var _super14 = _createSuper(GenericPopup);

        function GenericPopup(props) {
            babelHelpers.classCallCheck(this, GenericPopup);
            return _super14.call(this, props);
        }

        babelHelpers.createClass(GenericPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.props.title))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.content))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 u-margin-s"
                }, /*#__PURE__*/ _react.default.createElement(OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.confirm)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 "
                }, /*#__PURE__*/ _react.default.createElement(OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true
                }, this.props.decline))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(OraButton, {
                    onClick: this.props.onClickConfirm,
                    className: "u-w-100",
                    modal: true
                }, this.props.confirm)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-4 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(OraButton, {
                    onClick: this.props.onClickDecline,
                    className: "u-w-100",
                    modal: true,
                    type: "secondary"
                }, this.props.decline)))));
            }
        }]);
        return GenericPopup;
    }(_react.Component);

    _exports.GenericPopup = GenericPopup;
    GenericPopup.defaultProps = {
        title: "GenericPopup.title",
        content: "GenericPopup.content",
        confirm: "Tak",
        decline: "Nie",
        onClickDecline: function onClickDecline() {
            return console.log("GenericPopup.onClickDecline");
        },
        onClickConfirm: function onClickConfirm() {
            return console.log("GenericPopup.onClickConfirm");
        }
    };

    var PriceType = _propTypes.default.shape({
        currency: _propTypes.default.string,
        gross: _propTypes.default.string,
        net: _propTypes.default.string,
        monthFrom: _propTypes.default.number,
        monthTo: _propTypes.default.number
    });

    var priceNotEmptyRE = /[1-9]/;

    var OraPrice = /*#__PURE__*/ function(_Component14) {
        babelHelpers.inherits(OraPrice, _Component14);

        var _super15 = _createSuper(OraPrice);

        function OraPrice() {
            babelHelpers.classCallCheck(this, OraPrice);
            return _super15.apply(this, arguments);
        }

        babelHelpers.createClass(OraPrice, [{
            key: "isEmpty",
            value: function isEmpty() {
                return !this.props.price || !this.props.price.gross || !priceNotEmptyRE.test(this.props.price.gross);
            }
        }, {
            key: "getPrice",
            value: function getPrice(price) {
                return price + (this.props.price.currency && this.props.price.currency !== "" ? " " + this.props.price.currency : "");
            }
        }, {
            key: "render",
            value: function render() {
                var empty = this.isEmpty(),
                    className = [this.props.className, empty ? this.props.classEmpty : this.props.classFilled].join(" ");
                return /*#__PURE__*/ _react.default.createElement("span", {
                    className: className
                }, !empty ? this.getPrice(this.props.price.gross) : this.props.filler, empty || !this.props.showNet ? null : /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.props.classNet
                }, "(", this.getPrice(this.props.price.net), " netto)"));
            }
        }]);
        return OraPrice;
    }(_react.Component);

    _exports.OraPrice = OraPrice;
    OraPrice.propTypes = {
        price: PriceType,
        className: _propTypes.default.string,
        classFilled: _propTypes.default.string,
        classEmpty: _propTypes.default.string,
        filler: _propTypes.default.string,
        showNet: _propTypes.default.bool,
        classNet: _propTypes.default.string
    };
    OraPrice.defaultProps = {
        className: "",
        classFilled: "",
        classEmpty: "",
        filler: "—",
        showNet: false,
        classNet: ""
    };

    var OraTieredPrice = /*#__PURE__*/ function(_Component15) {
        babelHelpers.inherits(OraTieredPrice, _Component15);

        var _super16 = _createSuper(OraTieredPrice);

        function OraTieredPrice() {
            babelHelpers.classCallCheck(this, OraTieredPrice);
            return _super16.apply(this, arguments);
        }

        babelHelpers.createClass(OraTieredPrice, [{
            key: "isTiered",
            value: function isTiered() {
                return this.props.price && (this.props.price.length > 1 || this.props.price.length === 1 && _lodash.default.first(this.props.price).monthTo < this.props.loyaltyLength);
            }
        }, {
            key: "getMonthDesc",
            value: function getMonthDesc(price) {
                return price.monthTo ? this.getMonthDescWithEndCycle(price) : this.getMonthDescUndefinedEndCycle(price);
            }
        }, {
            key: "getMonthDescWithEndCycle",
            value: function getMonthDescWithEndCycle(price) {
                return this.props.monthDesc + " " + price.monthFrom + (price.monthTo !== price.monthFrom ? "-" + price.monthTo : "") + ":";
            }
        }, {
            key: "getMonthDescUndefinedEndCycle",
            value: function getMonthDescUndefinedEndCycle(price) {
                return this.props.mothFromDesc.replace(/%MONTH%/g, price.monthFrom);
            }
        }, {
            key: "render",
            value: function render() {
                var _this10 = this;

                return !this.isTiered() ? /*#__PURE__*/ _react.default.createElement(OraPrice, babelHelpers.extends({}, this.props, {
                    price: this.props.price && this.props.price[0]
                })) : /*#__PURE__*/ _react.default.createElement("ul", null, this.props.price.map(function(price) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        key: price.monthFrom + "-" + price.monthTo,
                        className: "opl-table__list-item"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: _this10.props.classMonth
                    }, _this10.getMonthDesc(price)), /*#__PURE__*/ _react.default.createElement(OraPrice, babelHelpers.extends({}, _this10.props, {
                        price: price
                    })));
                }));
            }
        }]);
        return OraTieredPrice;
    }(_react.Component);

    _exports.OraTieredPrice = OraTieredPrice;
    OraTieredPrice.propTypes = {
        price: _propTypes.default.arrayOf(PriceType),
        className: _propTypes.default.string,
        classMonth: _propTypes.default.string,
        monthDesc: _propTypes.default.string,
        mothFromDesc: _propTypes.default.string,
        loyaltyLength: _propTypes.default.number // Also accepts all valid props for OraPrice

    };
    OraTieredPrice.defaultProps = {
        className: "",
        classMonth: "",
        monthDesc: "Miesiąc",
        mothFromDesc: "Od %MONTH% miesiąca:"
    }; //todo refactor to Component - createClass is deprecated

    var OraDatePicker = _react.default.createClass({
        displayName: "OraDatePicker",
        propTypes: {
            id: _propTypes.default.string.isRequired,
            value: _propTypes.default.string,
            onChange: _propTypes.default.func,
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
                scrollInput: _propTypes.default.bool
            })
        },
        getDefaultProps: function getDefaultProps() {
            return {
                icon: "calendar3",
                floatingLabel: false,
                options: {}
            };
        },
        getDatepickerOptions: function getDatepickerOptions(props) {
            // overriding hasIcon because it's modifying DOM, we'd rather do that ourselves
            return Object.assign({
                hasIcon: false
            }, props.options);
        },
        componentDidMount: function componentDidMount() {
            OPL.UI.on(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id);
            OPL.UI.loadModules(this.refs.datepicker, [{
                path: 'common/modules/opl-datepicker',
                options: this.getDatepickerOptions(this.props)
            }]);
        },
        componentWillUnmount: function componentWillUnmount() {
            OPL.UI.off(OPL.UI.EVENTS.modules.datepicker.selectedDate, this.onChangeDate, this.props.id);
        },
        componentWillReceiveProps: function componentWillReceiveProps(newProps) {
            for (var opt in newProps.options) {
                if (this.props.options[opt] !== newProps.options[opt]) {
                    OPL.UI.fire(OPL.UI.EVENTS.modules.datepicker.loaddata, this.getDatepickerOptions(newProps), this.props.id);
                    break;
                }
            }
        },
        onChangeDate: function onChangeDate(date) {
            if (this.props.onChange) {
                this.props.onChange({
                    id: this.props.id,
                    name: this.props.name,
                    value: this.refs.datepicker.value
                });
            }
        },
        onChangeValue: function onChangeValue(event) {
            var _event$target7 = event.target,
                id = _event$target7.id,
                name = _event$target7.name,
                value = _event$target7.value;

            if (this.props.onChange) {
                this.props.onChange({
                    id: id,
                    name: name,
                    value: value
                });
            }
        },
        renderContent: function renderContent() {
            return [ /*#__PURE__*/ _react.default.createElement("input", {
                type: "text",
                id: this.props.id,
                value: this.props.value,
                ref: "datepicker",
                onChange: this.onChangeValue,
                className: this.props.inputClassName
            }), !this.props.icon || /*#__PURE__*/ _react.default.createElement("label", {
                htmlFor: this.props.id,
                className: "calendar-icon g-icon g-icon--" + this.props.icon
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "u-acc-hide"
            }, "Poka\u017C kalendarz"))];
        },
        render: function render() {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "opl-datepicker"
            }, this.props.floatingLabel ? /*#__PURE__*/ _react.default.createElement(FloatingLabelForDatePicker, this.props, this.renderContent()) : this.renderContent());
        }
    });

    _exports.OraDatePicker = OraDatePicker;

    var FloatingLabelForDatePicker = _react.default.createClass({
        displayName: "FloatingLabelForDatePicker",
        componentDidMount: function componentDidMount() {
            OPL.UI.loadModules(this.refs.labelModule, [{
                path: 'core/modules/floating-label',
                options: {}
            }]);
        },
        render: function render() {
            return /*#__PURE__*/ _react.default.createElement("div", {
                ref: "labelModule",
                className: "o-floating-label"
            }, this.props.children, /*#__PURE__*/ _react.default.createElement("p", {
                className: "label o-floating-label__placeholder"
            }, this.props.floatingLabel));
        }
    });

    _exports.FloatingLabelForDatePicker = FloatingLabelForDatePicker;

    var SwitchButtons = _react.default.createClass({
        displayName: "SwitchButtons",
        propTypes: {
            options: _propTypes.default.arrayOf(_propTypes.default.shape({
                value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
                description: _propTypes.default.string
            })),
            onClick: _propTypes.default.func,
            buttonClassName: _propTypes.default.string,
            switchType: _propTypes.default.string
        },
        getDefaultProps: function getDefaultProps() {
            return {
                options: [{
                    value: "",
                    description: "Dla Ciebie",
                    selected: true
                }, {
                    value: "https://www.orange.pl/view/duety",
                    description: "Dla Duetu",
                    selected: false
                }, {
                    value: "https://www.orange.pl/view/duety#rodzina",
                    description: "Dla Rodziny",
                    selected: false
                }],
                buttonClassName: "u-cursor-pointer",
                switchType: "SWITCH"
            };
        },
        render: function render() {
            var _this11 = this;

            if (this.props.switchType === "TAB") {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs opl-tabs--large opl-tabs--secondary"
                }, this.props.options.length > 1 ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-tabs__nav-wrapper-inner"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-tabs__nav",
                    "data-js-module": "common/modules/opl-tabs"
                }, this.props.options.map(function(option, index) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        key: _this11.props.switchType + "_" + index + "_" + option.value,
                        className: "opl-tabs__nav-item"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-tabs__nav-item__content" + (index === 0 ? " u-no-padding-left" : "")
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        href: option.value,
                        className: "opl-tabs__nav-link u-padding-left-l u-padding-right-l u-padding-top-l-xl" + (option.active ? " is-active" : "")
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-tabs__nav-link-inner"
                    }, option.description))));
                })))) : null);
            } else {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-link-switcher"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-link-switcher__link-list",
                    onClick: this.onClick
                }, this.props.options.map(function(option) {
                    return /*#__PURE__*/ _react.default.createElement("a", {
                        key: option.description,
                        onClick: function onClick() {
                            return _this11.props.onClick(option.value);
                        },
                        className: "opl-link-switcher__link " + _this11.props.buttonClassName + " " + (option.selected ? "active" : "")
                    }, option.description);
                })));
            }
        }
    });

    _exports.SwitchButtons = SwitchButtons;

    var OraAddBar = /*#__PURE__*/ function(_Component16) {
        babelHelpers.inherits(OraAddBar, _Component16);

        var _super17 = _createSuper(OraAddBar);

        function OraAddBar() {
            babelHelpers.classCallCheck(this, OraAddBar);
            return _super17.apply(this, arguments);
        }

        babelHelpers.createClass(OraAddBar, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.tooltipBtnText && this.props.tooltipContent) {
                    (0, _ui.loadModule)(this.tooltipRef, {
                        path: "core/modules/tooltips",
                        options: {
                            maxWidth: '320',
                            side: 'top',
                            trigger: 'hover'
                        }
                    });
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.props.tooltipBtnText && this.props.tooltipContent) {
                    OPL.UI.stopModules(this.tooltipRef);
                }
            }
        }, {
            key: "onAddClick",
            value: function onAddClick(e) {
                e.preventDefault();
                this.props.onAddClick(e);
            }
        }, {
            key: "render",
            value: function render() {
                var _this12 = this;

                var showTooltip = !!this.props.tooltipBtnText && !!this.props.tooltipContent;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right g-white1-bg u-box-shadow " + this.props.className
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, this.props.icon && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__icon__cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--" + this.props.icon
                })), /*#__PURE__*/ _react.default.createElement("td", {
                    ref: function ref(_ref4) {
                        return _this12.tooltipRef = _ref4;
                    },
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold u-small-padding-right " + this.props.labelClassName
                }, this.props.label, showTooltip && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: function onClick(e) {
                        return e.preventDefault();
                    },
                    className: "o-tooltip__trigger u-padding-left-s tooltipstered",
                    "aria-describedby": "tooltip_" + this.props.id
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.tooltipBtnText)), showTooltip && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-tooltip__content",
                    id: "tooltip_" + this.props.id,
                    role: "tooltip"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin"
                }, this.props.tooltipContent))), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "aria-label": this.props.addBtnText,
                    onClick: this.onAddClick.bind(this),
                    className: "opl-product-addlink u-right u-small-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.addBtnText)))))));
            }
        }]);
        return OraAddBar;
    }(_react.Component);

    _exports.OraAddBar = OraAddBar;
    OraAddBar.propTypes = {
        icon: _propTypes.default.string,
        id: _propTypes.default.string.isRequired,
        tooltipBtnText: _propTypes.default.string,
        tooltipContent: _propTypes.default.string,
        addBtnText: _propTypes.default.string,
        label: _propTypes.default.string.isRequired,
        onAddClick: _propTypes.default.func.isRequired,
        className: _propTypes.default.string,
        labelClassName: _propTypes.default.string
    };
    OraAddBar.defaultProps = {
        addBtnText: "Dodaj"
    };
});
//# sourceMappingURL=OraCommonComponents.js.map