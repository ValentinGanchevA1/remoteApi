define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var MsisdnPositiveVerificationComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MsisdnPositiveVerificationComponent, _React$Component);

        var _super = _createSuper(MsisdnPositiveVerificationComponent);

        function MsisdnPositiveVerificationComponent() {
            babelHelpers.classCallCheck(this, MsisdnPositiveVerificationComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MsisdnPositiveVerificationComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "kss-icon-preview g-icon g-icon--only g-icon--valid g-greenf-c"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-spacing-left-l"
                }, this.props.description)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    modal: false,
                    type: "text",
                    size: "medium",
                    onClick: this.props.reset
                }, "Zweryfikuj inny numer"))));
            }
        }]);
        return MsisdnPositiveVerificationComponent;
    }(_react.default.Component);

    _exports.default = MsisdnPositiveVerificationComponent;;
});
//# sourceMappingURL=MsisdnPositiveVerificationComponent.js.map