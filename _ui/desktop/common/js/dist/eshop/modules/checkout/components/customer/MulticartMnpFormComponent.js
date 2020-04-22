define(["exports", "react", "prop-types", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "./MulticartMnpSectionComponent", "eshop/modules/core/components/ui/Expander", "../MulticartValidationComponent"], function(_exports, _react, _propTypes, _reactRedux, _selectors, _app, _data, _MulticartMnpSectionComponent, _Expander, _MulticartValidationComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MulticartMnpSectionComponent = babelHelpers.interopRequireDefault(_MulticartMnpSectionComponent);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);

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

    var MulticartMnpFormView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMnpFormView, _Component);

        var _super = _createSuper(MulticartMnpFormView);

        function MulticartMnpFormView(props) {
            babelHelpers.classCallCheck(this, MulticartMnpFormView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartMnpFormView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartMnpData({
                    migrationMode: this.getDefaultMigrationMode(),
                    contactMethod: this.props.getMnpContactMethods(this.props.mnpFormData.contactMethods)[0].value,
                    isHeadquartersAddressSame: true,
                    identifier: 'NIP',
                    agreementType: '1'
                });
            }
        }, {
            key: "getDefaultMigrationMode",
            value: function getDefaultMigrationMode() {
                var sorted = this.props.mnpFormData.migrationModes.sort(function(a, b) {
                    return a.priority - b.priority;
                });
                return sorted.filter(function(a) {
                    return a.value == 'EOP';
                }) ? sorted.filter(function(a) {
                    return a.value == 'EOP';
                })[0].value : sorted[0].value;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-l u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("h2", null, this.props.descriptions.title || this.props.title), /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "mnpData"
                }), this.props.mnpData instanceof Array && this.props.mnpData.map(function(entry, idx) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: idx + "_view"
                    }, /*#__PURE__*/ _react.default.createElement(_MulticartMnpSectionComponent.default, babelHelpers.extends({}, _this.props, {
                        entry: entry,
                        entryIndex: idx,
                        key: idx + "_section"
                    })));
                }));
            }
        }]);
        return MulticartMnpFormView;
    }(_react.Component);

    MulticartMnpFormView.defaultProps = {
        title: "Dane do przeniesienia numeru"
    };

    var mapStateToProps = function mapStateToProps(state) {
        return _objectSpread({}, (0, _selectors.getCheckoutMnpProps)(state), {
            getMnpContactMethods: function getMnpContactMethods(contactMethods) {
                return (0, _selectors.getMnpContactMethods)(contactMethods)(state);
            }
        });
    };

    var actions = {
        saveDefaultCartData: _data.saveDefaultCartData,
        changeCustomerMnpDataFormField: _app.changeCustomerMnpDataFormField,
        changeBusinessMnpAddressFormField: _app.changeBusinessMnpAddressFormField,
        requestCartMnpData: _data.requestCartMnpData
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, actions)(MulticartMnpFormView);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartMnpFormComponent.js.map