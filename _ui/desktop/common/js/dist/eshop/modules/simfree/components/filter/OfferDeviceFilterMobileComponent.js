define(["exports", "react", "./OfferDeviceFilterComponent", "./view/OfferDeviceFilterMobileView"], function(_exports, _react, _OfferDeviceFilterComponent, _OfferDeviceFilterMobileView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OfferDeviceFilterComponent = babelHelpers.interopRequireDefault(_OfferDeviceFilterComponent);
    _OfferDeviceFilterMobileView = babelHelpers.interopRequireDefault(_OfferDeviceFilterMobileView);

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

    var OfferDeviceFilterMobileComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OfferDeviceFilterMobileComponent, _React$Component);

        var _super = _createSuper(OfferDeviceFilterMobileComponent);

        function OfferDeviceFilterMobileComponent() {
            babelHelpers.classCallCheck(this, OfferDeviceFilterMobileComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OfferDeviceFilterMobileComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OfferDeviceFilterComponent.default, {
                    descriptions: this.props.descriptions,
                    channels: this.props.channels
                }, /*#__PURE__*/ _react.default.createElement(_OfferDeviceFilterMobileView.default, {
                    key: "ofdfv"
                }));
            }
        }]);
        return OfferDeviceFilterMobileComponent;
    }(_react.default.Component);

    _exports.default = OfferDeviceFilterMobileComponent;
    OfferDeviceFilterMobileComponent.defaultProps = {
        descriptions: {
            detailsPopupHeader: "Szczegóły oferty",
            detailLabelText: "Szczegóły"
        }
    };
});
//# sourceMappingURL=OfferDeviceFilterMobileComponent.js.map