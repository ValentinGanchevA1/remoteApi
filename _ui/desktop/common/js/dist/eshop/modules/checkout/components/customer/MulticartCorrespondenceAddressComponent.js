define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Expander", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../MulticartCommonAddressFormComponent"], function(_exports, _react, _propTypes, _OraCommonComponents, _Expander, _reactRedux, _selectors, _app, _data, _MulticartCommonAddressFormComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCorrespondenceAddressView = void 0;
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
    var MulticartCorrespondenceAddressView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCorrespondenceAddressView, _Component);

        var _super = _createSuper(MulticartCorrespondenceAddressView);

        function MulticartCorrespondenceAddressView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartCorrespondenceAddressView);
            _this = _super.call(this, props);
            _this.pickAddress = _this.pickAddress.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleChange = _this.handleChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.afterInit = true;
            return _this;
        }

        babelHelpers.createClass(MulticartCorrespondenceAddressView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "pickAddress",
            value: function pickAddress(_ref) {
                var name = _ref.name;
                this.afterInit = false;
                this.props.changeAddressMapping("correspondence", name);
            }
        }, {
            key: "renderAddressPicker",
            value: function renderAddressPicker() {
                return /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "opl-inputgroup--vertical"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    type: "radio",
                    id: "switch_right4",
                    name: "main",
                    value: "close",
                    checked: this.props.addressMapping === "main",
                    onChange: this.pickAddress
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.sameAddressRadio)), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    type: "radio",
                    id: "switch_left3",
                    name: "correspondence",
                    value: "open",
                    checked: this.props.addressMapping === "correspondence",
                    onChange: this.pickAddress
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.newAddressRadio))));
            }
        }, {
            key: "handleChange",
            value: function handleChange(_ref2) {
                var id = _ref2.id,
                    name = _ref2.name,
                    value = _ref2.value,
                    cbsId = _ref2.cbsId;
                this.props.changeCorrespondenceAddressFormField({
                    id: id,
                    name: name,
                    value: value,
                    cbsId: cbsId
                }, false);
            }
        }, {
            key: "render",
            value: function render() {
                var styleObject = this.afterInit && this.props.addressMapping === "correspondence" ? {
                    display: "block"
                } : null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, this.props.descriptions.title)), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    className: "l-col l-col-12 u-padding-l",
                    switchTrigger: true,
                    switchTriggerVal: ["open", "close"],
                    scrollToSelected: false
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.renderAddressPicker(),
                    triggerHeader: true,
                    styleObject: styleObject,
                    expanded: !!styleObject
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartCommonAddressFormComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.handleChange,
                    onBlur: this.props.changeCorrespondenceAddressFormField,
                    id: "correspondence"
                }))))));
            }
        }]);
        return MulticartCorrespondenceAddressView;
    }(_react.Component);

    _exports.MulticartCorrespondenceAddressView = MulticartCorrespondenceAddressView;
    MulticartCorrespondenceAddressView.propTypes = {
        postalCode: _propTypes.default.string,
        town: _propTypes.default.string,
        streetName: _propTypes.default.string,
        streetNumber: _propTypes.default.string,
        appartmentNo: _propTypes.default.string,
        requestCartCustomerData: _propTypes.default.func,
        streetSuggestions: _propTypes.default.array,
        addressMapping: _propTypes.default.string,
        readOnly: _propTypes.default.bool,
        changeCorrespondenceAddressFormField: _propTypes.default.func
    };
    var MulticartCorrespondenceAddressComponent = (0, _reactRedux.connect)(_selectors.getCustomerCorrespondenceAddressForm, {
        changeCorrespondenceAddressFormField: _app.changeCorrespondenceAddressFormField,
        requestCartCustomerData: _data.requestCartCustomerData,
        changeAddressMapping: _app.changeAddressMapping
    })(MulticartCorrespondenceAddressView);
    var _default = MulticartCorrespondenceAddressComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCorrespondenceAddressComponent.js.map