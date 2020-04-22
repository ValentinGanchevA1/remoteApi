define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/core/components/forms", "eshop/modules/core/components/ui/Autocomplete"], function(_exports, _react, _propTypes, _OraCommonComponents, _reactRedux, _forms, _Autocomplete) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
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

    var MulticartMnpBusinessAddressComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMnpBusinessAddressComponent, _Component);

        var _super = _createSuper(MulticartMnpBusinessAddressComponent);

        function MulticartMnpBusinessAddressComponent(props) {
            babelHelpers.classCallCheck(this, MulticartMnpBusinessAddressComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartMnpBusinessAddressComponent, [{
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                return {
                    name: name,
                    value: this.props.entry[name] || "",
                    errors: this.props.entry.errors && this.props.entry.errors[name],
                    onChange: this.onValueChange.bind(this)
                };
            }
        }, {
            key: "onValueChange",
            value: function onValueChange(target) {
                this.props.changeCustomerMnpDataFormField(_objectSpread({}, target, {
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                }));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledPostalCodeInputWithErrors, babelHelpers.extends({
                    label: "Kod pocztowy"
                }, this.getPropsForInput("postalCode"), {
                    labelType: "floating"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Miejscowo\u015B\u0107"
                }, this.getPropsForInput("city"), {
                    labelType: "floating"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l "
                }), /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Ulica"
                }, this.getPropsForInput("street"), {
                    labelType: "floating"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l "
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Nr domu"
                }, this.getPropsForInput("houseNumber"), {
                    labelType: "floating"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({
                    label: "Nr lokalu"
                }, this.getPropsForInput("flatNumber"), {
                    labelType: "floating"
                }))));
            }
        }]);
        return MulticartMnpBusinessAddressComponent;
    }(_react.Component);

    _exports.default = MulticartMnpBusinessAddressComponent;
});
//# sourceMappingURL=MulticartMnpBusinessAddressComponent.js.map