define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app", "eshop/modules/cart/actions/cart"], function(_exports, _reactRedux, _react, _Modal, _OraCommonComponents, _selectors, _selectors2, _app, _cart) {
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

    var CimCartConsistentErrorModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CimCartConsistentErrorModalView, _Component);

        var _super = _createSuper(CimCartConsistentErrorModalView);

        function CimCartConsistentErrorModalView() {
            babelHelpers.classCallCheck(this, CimCartConsistentErrorModalView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(CimCartConsistentErrorModalView, [{
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "onRemoveAllFromCart",
            value: function onRemoveAllFromCart() {
                if (!this.props.sapReservationNumber || this.props.sapReservationNumber.length === 0) {
                    this.props.removeFromCartAndRedirect();
                } else {
                    this.props.cancelOrderWithRedirect();
                }
            }
        }, {
            key: "onCloseModal",
            value: function onCloseModal() {
                this.props.closeCimConsistentErrorModal();
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", null, this.props.errors && this.props.errors.length > 0 ? this.props.textInfo : ""));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    showClose: true,
                    open: this.props.errors && this.props.errors.length > 0,
                    onClose: this.onClose.bind(this),
                    size: "medium",
                    id: 'cim-consistent-error-modal'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onRemoveAllFromCart.bind(this),
                    className: "u-w-100"
                }, "Usu\u0144 koszyk")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-spacing"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onCloseModal.bind(this),
                    className: "u-w-100",
                    type: "secondary"
                }, "Dalej"))));
            }
        }]);
        return CimCartConsistentErrorModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getCimConsistentCheckoutErrors)(state),
            sapReservationNumber: (0, _selectors.getSapReservationNumber)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissBackendValidationErrors)());
            },
            action: function action() {
                return dispatch((0, _app.gotoCartSummary)());
            },
            cancelOrderWithRedirect: function cancelOrderWithRedirect() {
                return dispatch((0, _app.cancelOrderWithRedirect)());
            },
            closeCimConsistentErrorModal: function closeCimConsistentErrorModal() {
                return dispatch((0, _app.closeCimConsistentErrorModal)());
            },
            removeFromCartAndRedirect: function removeFromCartAndRedirect() {
                return dispatch((0, _cart.removeFromCartAndRedirect)());
            }
        };
    };

    var CimCartConsistentErrorModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CimCartConsistentErrorModalView);
    var _default = CimCartConsistentErrorModal;
    _exports.default = _default;
});
//# sourceMappingURL=CimCartConsistentErrorModal.js.map