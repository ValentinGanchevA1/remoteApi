define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(_exports, _react, _OraCommonComponents, _Modal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

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

    var OraCheckoutAssistModeConfirmationPopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraCheckoutAssistModeConfirmationPopup, _Component);

        var _super = _createSuper(OraCheckoutAssistModeConfirmationPopup);

        function OraCheckoutAssistModeConfirmationPopup(props) {
            babelHelpers.classCallCheck(this, OraCheckoutAssistModeConfirmationPopup);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraCheckoutAssistModeConfirmationPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: this.props.id,
                    size: "narrow",
                    open: this.props.open,
                    showClose: false,
                    escapeClose: false,
                    clickClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.descriptions.messageText)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    onClick: this.props.onReject.bind(this)
                }, this.props.descriptions.noButtonText)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    onClick: this.props.onConfirm.bind(this)
                }, this.props.descriptions.yesButtonText)))));
            }
        }]);
        return OraCheckoutAssistModeConfirmationPopup;
    }(_react.Component);

    _exports.default = OraCheckoutAssistModeConfirmationPopup;
    OraCheckoutAssistModeConfirmationPopup.defaultProps = {
        open: false,
        onConfirm: function onConfirm(event) {},
        onReject: function onReject(event) {}
    };
});
//# sourceMappingURL=OraCheckoutAssistModeConfirmationPopup.js.map