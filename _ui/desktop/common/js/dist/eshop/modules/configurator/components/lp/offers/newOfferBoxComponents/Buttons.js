define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Buttons = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var Buttons = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Buttons, _Component);

        var _super = _createSuper(Buttons);

        function Buttons() {
            babelHelpers.classCallCheck(this, Buttons);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(Buttons, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("button", {
                    hidden: this.props.pickDeviceShouldBeHidden,
                    onClick: this.props.pickDeviceAction,
                    className: this.props.pickDeviceShouldBeHidden ? "" : "opl-btn opl-btn--medium opl-btn--primary u-spacing-l o-btn u-block u-w-100"
                }, this.props.labels.pickDevice), /*#__PURE__*/ _react.default.createElement("button", {
                    disabled: this.props.disabled,
                    onClick: this.props.selectOfferNoPhoneAction,
                    className: "opl-btn opl-btn--medium o-btn u-block u-w-100 u-no-padding-l u-no-padding-r"
                }, this.props.labels.selectOffer));
            }
        }]);
        return Buttons;
    }(_react.Component);

    _exports.Buttons = Buttons;
});
//# sourceMappingURL=Buttons.js.map