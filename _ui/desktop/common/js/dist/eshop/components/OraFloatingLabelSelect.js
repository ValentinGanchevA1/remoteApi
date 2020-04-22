define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.OraFloatingLabelSelect = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var floatingLabelSelectId = 0;

    var OraFloatingLabelSelect = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraFloatingLabelSelect, _Component);

        var _super = _createSuper(OraFloatingLabelSelect);

        function OraFloatingLabelSelect(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraFloatingLabelSelect);
            _this = _super.call(this, props);
            _this.handleChange = _this.handleChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleChangeIe8 = _this.handleChangeIe8.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(OraFloatingLabelSelect, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.floating) {
                    this.loadModule();
                }

                if (_OnlineUtils.default.ifIe8) {
                    var select = document.getElementById(this.props.id);
                    select.attachEvent("onchange", this.handleChangeIe8.bind(this));
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.isFeedbackParam) {
                    if (typeof Feedback !== 'undefined') {
                        Feedback.showHideFeedback();
                    }
                }
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                OPL.UI.loadModules(this.ref, [{
                    path: 'core/modules/floating-label',
                    options: {}
                }]);
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
                var index = this.props.index;
                var _event$target = event.target,
                    id = _event$target.id,
                    name = _event$target.name,
                    value = _event$target.value;

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
        }, {
            key: "getError",
            value: function getError() {
                if (this.props.errors && this.props.errors.length > 0) {
                    return this.props.errors[0];
                }

                return null;
            }
        }, {
            key: "getSelectClasses",
            value: function getSelectClasses() {
                var disabled = this.props.disabled || this.props.options.length === 1;
                var disabledClass = disabled ? ' g-gray6-c' : '';
                var selectedClass = !!this.props.selected ? ' is-not-empty success' : '';
                var primaryClass = this.props.isPrimary ? ' opl-select-primary' : '';
                return 'u-padding-right-xl is-not-empty ' + this.props.className + selectedClass + primaryClass + disabledClass;
            }
        }, {
            key: "getSelectArrowClasses",
            value: function getSelectArrowClasses() {
                return 'o-select__arrow ' + this.getBackgroundColorFromClassName();
            }
        }, {
            key: "getBackgroundColorFromClassName",
            value: function getBackgroundColorFromClassName() {
                var className = this.props.className;
                var regex = /\S*-bg/g;
                var resultColor = className.match(regex);
                return resultColor && resultColor.length === 1 ? resultColor : "g-white1-bg";
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var error = this.getError.apply(this);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: ""
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this2.ref = _ref;
                    },
                    className: "o-floating-label o-select"
                }, /*#__PURE__*/ _react.default.createElement("select", {
                    onChange: this.handleChange,
                    name: this.props.name,
                    value: this.props.selected,
                    id: this.props.id,
                    disabled: this.props.disabled || this.props.options.length === 1,
                    "data-feedback-param": this.props.isFeedbackParam,
                    className: this.getSelectClasses.apply(this),
                    style: this.props.style,
                    "aria-describedby": "floating-label__placeholder_" + this.props.id
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
                })), !this.props.disabled && /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.getSelectArrowClasses.apply(this)
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    id: "floating-label__placeholder_" + this.props.id,
                    className: "label o-floating-label__placeholder u-padding-right-l"
                }, this.props.label)), error && /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id,
                    className: 'opl-msg opl-msg--context u-margin-top-s opl-msg--' + error.level
                }, /*#__PURE__*/ _react.default.createElement("p", null, error.message)));
            }
        }]);
        return OraFloatingLabelSelect;
    }(_react.Component);

    _exports.OraFloatingLabelSelect = OraFloatingLabelSelect;
    OraFloatingLabelSelect.propTypes = {
        id: _propTypes.default.string.isRequired,
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
            description: _propTypes.default.string,
            hidden: _propTypes.default.bool,
            disabled: _propTypes.default.bool
        }),
        withEmptyOption: _propTypes.default.bool,
        singleDataText: _propTypes.default.string,
        floating: _propTypes.default.bool,
        isPrimary: _propTypes.default.bool
    };
    OraFloatingLabelSelect.defaultProps = {
        emptyOption: {
            value: "",
            description: "Wybierz..."
        },
        withEmptyOption: false,
        floating: false,
        isPrimary: true
    };
});
//# sourceMappingURL=OraFloatingLabelSelect.js.map