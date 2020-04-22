define(["exports", "react", "prop-types", "redux", "react-redux", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/magnum2/components/SelectWithFloatingLable"], function(_exports, _react, _propTypes, _redux, _reactRedux, _offers, _selectors, _offers2, _SelectWithFloatingLable) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _SelectWithFloatingLable = babelHelpers.interopRequireDefault(_SelectWithFloatingLable);

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

    var DevicesInstalmentSelector = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(DevicesInstalmentSelector, _Component);

        var _super = _createSuper(DevicesInstalmentSelector);

        function DevicesInstalmentSelector(props) {
            var _this;

            babelHelpers.classCallCheck(this, DevicesInstalmentSelector);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "prepareInstalments", function() {
                var installmentsAccordingToTemplate = _this.state.defaultSelectDictionary.filter(function(v) {
                    return _this.props.selectedProposition.deviceInstalmentsCount && _this.props.selectedProposition.deviceInstalmentsCount.indexOf(v.value) > -1 || v.value == -1;
                });

                var installmentsAccordingToTemplateWithoutAllOption = installmentsAccordingToTemplate.filter(function(v) {
                    return v.value != -1;
                });

                if (installmentsAccordingToTemplateWithoutAllOption.length == 1) {
                    return installmentsAccordingToTemplateWithoutAllOption;
                } else {
                    return installmentsAccordingToTemplate;
                }
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "selectDeviceInstalmentsCountChangeHandler", function(option) {
                _this.props.selectDeviceInstalmentsCount(option.target.value);

                _this.props.onChange && _this.props.onChange(option);
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "isDisable", function() {
                var installmentsAccordingToTemplate = _this.state.defaultSelectDictionary.filter(function(v) {
                    return _this.props.selectedProposition.deviceInstalmentsCount && _this.props.selectedProposition.deviceInstalmentsCount.indexOf(v.value) > -1 || v.value === -1;
                });

                var installmentsAccordingToTemplateWithoutAllOption = installmentsAccordingToTemplate.filter(function(v) {
                    return v.value !== -1;
                });
                return installmentsAccordingToTemplateWithoutAllOption.length === 1;
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "isProductCard", function() {
                return _this.props.selectedBaseDeviceCode !== "";
            });
            _this.state = {
                defaultSelectDictionary: [{
                    "value": -1,
                    "label": "Wszystkie"
                }, {
                    "value": 12,
                    "label": "12 rat"
                }, {
                    "value": 24,
                    "label": "24 raty"
                }, {
                    "value": 36,
                    "label": "36 rat"
                }, {
                    "value": 48,
                    "label": "48 rat"
                }]
            };
            return _this;
        }

        babelHelpers.createClass(DevicesInstalmentSelector, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_SelectWithFloatingLable.default, {
                    id: this.props.elementId,
                    options: this.prepareInstalments(),
                    placeholder: this.props.floatingLabel,
                    value: this.props.selectedDeviceInstalmentsCountValue,
                    disabled: this.isDisable(),
                    onChange: this.selectDeviceInstalmentsCountChangeHandler
                });
            }
        }]);
        return DevicesInstalmentSelector;
    }(_react.Component);

    babelHelpers.defineProperty(DevicesInstalmentSelector, "propTypes", {
        floatingLabel: _propTypes.default.string,
        selectedProposition: _propTypes.default.object,
        onChange: _propTypes.default.func,
        width: _propTypes.default.number
    });

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedProposition: state.magnum.selectedProposition,
            selectedDeviceInstalmentsCountValue: (0, _offers2.getCurrentDeviceInstalmentsCountValue)(state),
            selectedBaseDeviceCode: (0, _selectors.getSelectedBaseDeviceCode)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectDeviceInstalmentsCount: function selectDeviceInstalmentsCount(value) {
                return dispatch((0, _offers.setDeviceInstallmentsInSessionForMagnum)(parseInt(value)));
            }
        };
    };

    DevicesInstalmentSelector.defaultProps = {
        floatingLabel: "Liczba rat za telefon lub urządzenie",
        elementId: "deviceInstallmentsCountFilterMagnum"
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DevicesInstalmentSelector);

    _exports.default = _default;
});
//# sourceMappingURL=DevicesInstalmentSelector.js.map