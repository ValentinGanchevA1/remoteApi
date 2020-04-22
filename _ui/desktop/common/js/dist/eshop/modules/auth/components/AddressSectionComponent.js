define(["exports", "react", "eshop/modules/magnum2/components/wwt/WWTForm", "../actions/api"], function(_exports, _react, _WWTForm, _api) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _WWTForm = babelHelpers.interopRequireDefault(_WWTForm);

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

    var AddresSectionComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(AddresSectionComponent, _React$Component);

        var _super = _createSuper(AddresSectionComponent);

        function AddresSectionComponent(props) {
            babelHelpers.classCallCheck(this, AddresSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddresSectionComponent, [{
            key: "verifyCustomerSearched",
            value: function verifyCustomerSearched(cityId, streetId, streetNo, appartmentNo, cityName, streetName) {
                this.props.requestPeselAndAddressAuth({
                    townId: cityId,
                    streetId: streetId,
                    streetNumber: streetNo,
                    appartmentNo: appartmentNo,
                    town: cityName,
                    streetName: streetName
                }, this.props.msisdn, this.props.descriptions && this.props.descriptions.peselAndAddressVerificationTimeout || 30000);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_WWTForm.default, babelHelpers.extends({}, this.props, {
                    wwt: {},
                    isModal: true,
                    isNarrow: true,
                    focusCityOnMount: true,
                    onSubmit: this.verifyCustomerSearched.bind(this)
                })));
            }
        }]);
        return AddresSectionComponent;
    }(_react.default.Component);

    _exports.default = AddresSectionComponent;
});
//# sourceMappingURL=AddressSectionComponent.js.map