define(["exports", "react", "prop-types", "../hoc/input", "eshop/modules/core/utils/ui"], function(_exports, _react, _propTypes, _input, _ui) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.LabeledAutocomplete = _exports.default = _exports.Autocomplete = _exports.AutocompleteInput = void 0;
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

    var moduleId = 0; // Raw autocomplete input component - needs to be wrapped with an element with 'opl-autocomplete' class to be styled properly.

    var AutocompleteInput = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AutocompleteInput, _Component);

        var _super = _createSuper(AutocompleteInput);

        function AutocompleteInput(props) {
            var _this;

            babelHelpers.classCallCheck(this, AutocompleteInput);
            _this = _super.call(this, props);
            _this.id = props.id || "react-autocomplete-" + moduleId++;
            return _this;
        }

        babelHelpers.createClass(AutocompleteInput, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.modulePromise = (0, _ui.loadModule)(this.ref, {
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
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (prevProps.suggestions !== this.props.suggestions) {
                    this.updateSuggestions();
                }
            }
        }, {
            key: "updateSuggestions",
            value: function updateSuggestions() {
                //TODO: use the promise when OPL.UI.off is fixed and doesn't recognize a handler only by its source code
                //this.modulePromise = this.modulePromise.then(() => {
                if (!this.props.suggestions) return;
                var suggestions = this.props.suggestions.map(this.props.mapSuggestion);
                OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.arrayData, suggestions, this.id); //});
            }
        }, {
            key: "onSelect",
            value: function onSelect() {
                if (this.props.onChange) {
                    var _this$ref = this.ref,
                        id = _this$ref.id,
                        name = _this$ref.name,
                        value = _this$ref.value;
                    this.props.onChange({
                        id: id,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "onChangeValue",
            value: function onChangeValue(event) {
                if (this.props.onChange) {
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
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("input", babelHelpers.extends({
                    type: "text"
                }, (0, _ui.excludeProps)(this.props, AutocompleteInput.OWN_PROPS), {
                    id: this.id,
                    onChange: this.onChangeValue.bind(this),
                    ref: function ref(_ref) {
                        return _this2.ref = _ref;
                    }
                }));
            }
        }]);
        return AutocompleteInput;
    }(_react.Component);

    _exports.AutocompleteInput = AutocompleteInput;
    AutocompleteInput.OWN_PROPS = ["suggestions", "mapSuggestion", "minLength", "maxResults", "errors", "labelType"];
    AutocompleteInput.propTypes = {
        suggestions: _propTypes.default.array,
        mapSuggestion: _propTypes.default.func.isRequired,
        minLength: _propTypes.default.number,
        maxResults: _propTypes.default.number,
        value: _propTypes.default.string.isRequired,
        onChange: _propTypes.default.func.isRequired
    };
    AutocompleteInput.defaultProps = {
        minLength: 3,
        mapSuggestion: function mapSuggestion(suggestion) {
            return {
                value: suggestion,
                label: suggestion
            };
        }
    }; // Full autocomplete component, for use without higher order components that work on inputs

    var Autocomplete = function Autocomplete(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-autocomplete"
        }, /*#__PURE__*/ _react.default.createElement(AutocompleteInput, props));
    };

    _exports.Autocomplete = Autocomplete;
    var _default = Autocomplete;
    _exports.default = _default;
    var LabeledAutocomplete = (0, _input.addLabelToInput)(AutocompleteInput);
    _exports.LabeledAutocomplete = LabeledAutocomplete;
    LabeledAutocomplete.defaultProps = _objectSpread({}, LabeledAutocomplete.defaultProps, {}, AutocompleteInput.defaultProps, {
        wrapperClassName: "opl-autocomplete"
    });
});
//# sourceMappingURL=Autocomplete.js.map