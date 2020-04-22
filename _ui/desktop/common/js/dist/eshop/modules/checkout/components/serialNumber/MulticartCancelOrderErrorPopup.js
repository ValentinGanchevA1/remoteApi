define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(_exports, _react, _OraCommonComponents, _Modal) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCancelOrderErrorPopup = void 0;
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

    var MulticartCancelOrderErrorPopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCancelOrderErrorPopup, _Component);

        var _super = _createSuper(MulticartCancelOrderErrorPopup);

        function MulticartCancelOrderErrorPopup(props) {
            babelHelpers.classCallCheck(this, MulticartCancelOrderErrorPopup);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartCancelOrderErrorPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: this.props.id,
                    open: this.props.reservation.cancelOrderError,
                    narrow: true,
                    showClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text g-black1-c"
                }, "Anulowanie zam\xF3wienia nie powiod\u0142o si\u0119.")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: this.props.autoClose,
                    onClick: this.props.onConfirm
                }, this.props.okButtonText)))));
            }
        }]);
        return MulticartCancelOrderErrorPopup;
    }(_react.Component);

    _exports.MulticartCancelOrderErrorPopup = MulticartCancelOrderErrorPopup;
    MulticartCancelOrderErrorPopup.defaultProps = {
        autoClose: true,
        onConfirm: function onConfirm(event) {},
        okButtonText: "OK"
    };
    var _default = MulticartCancelOrderErrorPopup;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCancelOrderErrorPopup.js.map