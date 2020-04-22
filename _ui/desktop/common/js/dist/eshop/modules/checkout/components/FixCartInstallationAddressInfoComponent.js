define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
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

    var FixCartInstallationAddressInfoComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixCartInstallationAddressInfoComponent, _Component);

        var _super = _createSuper(FixCartInstallationAddressInfoComponent);

        function FixCartInstallationAddressInfoComponent() {
            babelHelpers.classCallCheck(this, FixCartInstallationAddressInfoComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(FixCartInstallationAddressInfoComponent, [{
            key: "render",
            value: function render() {
                return this.props.installationAddress && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--valid h3 opl-msg--context",
                    "aria-hidden": "true"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-no-margin"
                }, this.props.descriptions.text || this.props.defaultText, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-small-no-padding u-padding-left-s u-font-bold u-xsmall-block g-brand2-c"
                }, this.props.installationAddress)))));
            }
        }]);
        return FixCartInstallationAddressInfoComponent;
    }(_react.Component);

    _exports.default = FixCartInstallationAddressInfoComponent;
    FixCartInstallationAddressInfoComponent.defaultProps = {
        defaultText: "Oferta dostępna pod Twoim adresem:"
    };
});
//# sourceMappingURL=FixCartInstallationAddressInfoComponent.js.map