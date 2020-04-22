define(["exports", "react", "prop-types", "lodash", "./OraFloatingLabelWrapper", "../../../components/OraCommonComponents"], function(_exports, _react, _propTypes, _lodash, _OraFloatingLabelWrapper, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraFloatingLabelWrapper = babelHelpers.interopRequireDefault(_OraFloatingLabelWrapper);

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

    var SelectWithFloatingLabel = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(SelectWithFloatingLabel, _PureComponent);

        var _super = _createSuper(SelectWithFloatingLabel);

        function SelectWithFloatingLabel() {
            babelHelpers.classCallCheck(this, SelectWithFloatingLabel);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SelectWithFloatingLabel, [{
            key: "renderOptions",
            value: function renderOptions() {
                return this.props.options.map(function(selectOption) {
                    return /*#__PURE__*/ _react.default.createElement("option", {
                        key: selectOption.value,
                        value: selectOption.value
                    }, selectOption.label);
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this$props = this.props,
                    id = _this$props.id,
                    autocomplete = _this$props.autocomplete,
                    placeholder = _this$props.placeholder,
                    children = _this$props.children,
                    onChange = _this$props.onChange,
                    value = _this$props.value,
                    disabled = _this$props.disabled;
                return /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelWrapper.default, {
                    autoComplete: autocomplete,
                    maximumWidth: true,
                    className: "o-floating-label o-select u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("select", {
                    id: id + "Select",
                    name: "select",
                    "aria-describedby": "floating-label__placeholder1",
                    className: "opl-select-primary opl-input--size-m" + (!_lodash.default.isEmpty(this.props.options) ? " is-not-empty" : ""),
                    value: value || "",
                    onChange: onChange,
                    disabled: disabled
                }, this.renderOptions()), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-select__arrow"
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLabel, {
                    htmlFor: id,
                    className: "label o-floating-label__placeholder o-floating-label__p-2"
                }, placeholder), children);
            }
        }]);
        return SelectWithFloatingLabel;
    }(_react.PureComponent);

    babelHelpers.defineProperty(SelectWithFloatingLabel, "propTypes", {
        id: _propTypes.default.string.isRequired,
        options: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.any.isRequired,
            label: _propTypes.default.string
        })).isRequired,
        value: _propTypes.default.any,
        placeholder: _propTypes.default.string,
        autocomplete: _propTypes.default.bool,
        children: _propTypes.default.any,
        onChange: _propTypes.default.func,
        disabled: _propTypes.default.bool
    });
    var _default = SelectWithFloatingLabel;
    _exports.default = _default;
});
//# sourceMappingURL=SelectWithFloatingLable.js.map