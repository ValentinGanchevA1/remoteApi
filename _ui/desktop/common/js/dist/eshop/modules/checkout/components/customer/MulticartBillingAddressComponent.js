define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../MulticartCommonAddressFormComponent"], function(_exports, _react, _propTypes, _OraCommonComponents, _reactRedux, _selectors, _app, _data, _MulticartCommonAddressFormComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartBillingAddressView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MulticartCommonAddressFormComponent = babelHelpers.interopRequireDefault(_MulticartCommonAddressFormComponent);

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

    /* Presentational Component - accepts props from container component like MulticartCommonAddressFormView Component and uses them for render
     * */
    var MulticartBillingAddressView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBillingAddressView, _Component);

        var _super = _createSuper(MulticartBillingAddressView);

        function MulticartBillingAddressView() {
            babelHelpers.classCallCheck(this, MulticartBillingAddressView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartBillingAddressView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                if (this.props.isBusinessClient) {
                    return this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "";
                } else if (this.props.foreigner) {
                    return this.props.descriptions.titleForeigner;
                } else {
                    return this.props.descriptions.title || "";
                }
            }
        }, {
            key: "handleChange",
            value: function handleChange(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value,
                    cbsId = _ref.cbsId;
                this.props.changeCustomerMainAddressFormField({
                    id: id,
                    name: name,
                    value: value,
                    cbsId: cbsId
                }, false);
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.show ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form u-spacing-l u-clearfix"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l ".concat(this.props.isForeignerCheckboxAvailable ? 'u-large-spacing-xl u-medium-spacing-s u-small-spacing-s' : '', " l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding")
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                })), /*#__PURE__*/ _react.default.createElement(_MulticartCommonAddressFormComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.handleChange.bind(this),
                    onBlur: this.props.changeCustomerMainAddressFormField,
                    id: "main"
                }))) : /*#__PURE__*/ _react.default.createElement("div", null);
            }
        }]);
        return MulticartBillingAddressView;
    }(_react.Component);

    _exports.MulticartBillingAddressView = MulticartBillingAddressView;
    MulticartBillingAddressView.propTypes = {
        postalCode: _propTypes.default.string,
        town: _propTypes.default.string,
        streetName: _propTypes.default.string,
        streetNumber: _propTypes.default.string,
        appartmentNo: _propTypes.default.string,
        citySuggestions: _propTypes.default.array,
        streetSuggestions: _propTypes.default.array,
        foreigner: _propTypes.default.bool,
        readOnly: _propTypes.default.bool,
        requestCartCustomerData: _propTypes.default.func,
        changeCorrespondenceAddressFormField: _propTypes.default.func
    };
    MulticartBillingAddressView.defaultProps = {
        defaultBusinessTitle: "Adres siedziby firmy"
    };
    var MulticartBillingAddressComponent = (0, _reactRedux.connect)(_selectors.getCustomerMainAddressForm, {
        changeCustomerMainAddressFormField: _app.changeCustomerMainAddressFormField,
        requestCartCustomerData: _data.requestCartCustomerData
    })(MulticartBillingAddressView);
    var _default = MulticartBillingAddressComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartBillingAddressComponent.js.map