define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/selectors", "eshop/modules/auth/components/LoggedCustomerBarComponent", "../../../core/components/ui/Switch", "../../../cart/selectors", "../../../cart/actions/cart"], function(_exports, _react, _reactRedux, _DataLayerUtils, _app, _selectors, _LoggedCustomerBarComponent, _Switch, _selectors2, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCustomerDataPageHeader = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _LoggedCustomerBarComponent = babelHelpers.interopRequireDefault(_LoggedCustomerBarComponent);
    _Switch = babelHelpers.interopRequireDefault(_Switch);

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

    var MulticartCustomerDataPageHeader = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCustomerDataPageHeader, _Component);

        var _super = _createSuper(MulticartCustomerDataPageHeader);

        function MulticartCustomerDataPageHeader() {
            babelHelpers.classCallCheck(this, MulticartCustomerDataPageHeader);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartCustomerDataPageHeader, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                _DataLayerUtils.default.pushPageCategoryDimension('TelefonyBezUmowy');
            }
        }, {
            key: "handleSwitchEditIdNumberMode",
            value: function handleSwitchEditIdNumberMode(event) {
                event.preventDefault();
                this.props.switchEditIdNumberMode();
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var renderLogin = /*#__PURE__*/ _react.default.createElement(_LoggedCustomerBarComponent.default, {
                    channels: this.props.channels
                });

                var netLabel = this.props.descriptions['netSwitchValue'] || "Opłaty netto";
                var grossLabel = this.props.descriptions['grossSwitchValue'] || "Opłaty brutto";
                var lCol = this.props.showNetSwitch ? '10' : '12';
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-".concat(lCol, " l-col-small-12")
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h1",
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.title
                    }
                })), this.props.showNetSwitch && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2"
                }, /*#__PURE__*/ _react.default.createElement(_Switch.default, {
                    id: "switch-net",
                    labelLeft: netLabel,
                    labelRight: grossLabel,
                    checked: this.props.showNetPrices,
                    onSwitchLeft: function onSwitchLeft() {
                        return _this.props.setPriceIsNet(true);
                    },
                    onSwitchRight: function onSwitchRight() {
                        return _this.props.setPriceIsNet(false);
                    },
                    className: "u-font-small u-right"
                })));
            }
        }]);
        return MulticartCustomerDataPageHeader;
    }(_react.Component);

    _exports.MulticartCustomerDataPageHeader = MulticartCustomerDataPageHeader;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isDisabledIdNumber: (0, _selectors.isDisabledIdNumber)(state),
            showNetPrices: (0, _selectors2.getPriceIsNet)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            switchEditIdNumberMode: function switchEditIdNumberMode() {
                return dispatch((0, _app.switchEditIdNumberMode)());
            },
            setPriceIsNet: function setPriceIsNet(showNet) {
                return dispatch((0, _cart.setPriceIsNet)(showNet));
            }
        };
    };

    var MulticartCustomerDataPageHeaderComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartCustomerDataPageHeader);
    var _default = MulticartCustomerDataPageHeaderComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerDataPageHeaderComponent.js.map