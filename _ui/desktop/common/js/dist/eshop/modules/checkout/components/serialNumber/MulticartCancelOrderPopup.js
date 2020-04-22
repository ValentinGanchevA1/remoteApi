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

    var MulticartCancelOrderPopup = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCancelOrderPopup, _Component);

        var _super = _createSuper(MulticartCancelOrderPopup);

        function MulticartCancelOrderPopup(props) {
            babelHelpers.classCallCheck(this, MulticartCancelOrderPopup);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartCancelOrderPopup, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: this.props.id,
                    open: this.props.openPopup,
                    narrow: true,
                    showClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l",
                    hidden: !(this.props.reservation && this.props.reservation.paymentStatus) || !this.props.showWarning
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.cancelOrderWarning, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "g-green3-c",
                    type: "text",
                    size: "small",
                    modal: false,
                    onClick: this.props.onCorrectiveInvoiceButtonClick
                }, this.props.cancelOrderWarningLink), ".")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.cancelOrderQuestion, " ", this.props.autoClose)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: this.props.autoClose,
                    onClick: this.handleClosePopup.bind(this)
                }, this.props.noButtonText)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-w-100 g-green3-bg",
                    type: "primary",
                    modal: this.props.autoClose,
                    onClick: this.handleOnConfirm.bind(this)
                }, this.props.yesButtonText)))));
            }
        }, {
            key: "handleClosePopup",
            value: function handleClosePopup() {
                this.props.onClose(false);
            }
        }, {
            key: "handleOnConfirm",
            value: function handleOnConfirm() {
                this.props.onClose(false);
                this.props.onConfirm();
            }
        }, {
            key: "openInNewWindow",
            value: function openInNewWindow(data) {
                window.open(data, '_blank', 'toolbar=0,location=0,menubar=0,fullscreen=yes');
            }
        }]);
        return MulticartCancelOrderPopup;
    }(_react.Component);

    _exports.default = MulticartCancelOrderPopup;
    MulticartCancelOrderPopup.defaultProps = {
        cancelOrderWarning: "Chcesz anulować zamówienie, które opłacił Klient. Pamiętaj aby dokonać korekty tego zamówienia. Przejdź do Fiori klikając ten ",
        cancelOrderWarningLink: "link",
        cancelOrderQuestion: "Czy na pewno chcesz anulować zamówienie?",
        orderPayed: false,
        autoClose: true,
        onConfirm: function onConfirm(event) {},
        onReject: function onReject(event) {},
        onCorrectiveInvoiceButtonClick: function onCorrectiveInvoiceButtonClick(event) {},
        noButtonText: "Nie",
        yesButtonText: "Tak",
        openPopup: false,
        showWarning: true
    };
});
//# sourceMappingURL=MulticartCancelOrderPopup.js.map