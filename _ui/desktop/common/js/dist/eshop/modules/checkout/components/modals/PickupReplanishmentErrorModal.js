define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(_exports, _reactRedux, _react, _Modal, _OraCommonComponents, _selectors, _selectors2, _app) {
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

    var PickupReplanishmentErrorView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(PickupReplanishmentErrorView, _Component);

        var _super = _createSuper(PickupReplanishmentErrorView);

        function PickupReplanishmentErrorView() {
            babelHelpers.classCallCheck(this, PickupReplanishmentErrorView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(PickupReplanishmentErrorView, [{
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-cms"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold"
                }, "Niestety zam\xF3wiony przez Ciebie sprz\u0119t nie jest dost\u0119pny w wybranym salonie."), /*#__PURE__*/ _react.default.createElement("ul", null, /*#__PURE__*/ _react.default.createElement("li", null, "Mo\u017Cesz zmieni\u0107 salon do obioru sprz\u0119tu"), /*#__PURE__*/ _react.default.createElement("li", null, "Mo\u017Cesz wr\xF3ci\u0107 do koszyka i zmieni\u0107 sw\xF3j wyb\xF3r"), /*#__PURE__*/ _react.default.createElement("li", null, "Mo\u017Cesz kontynuowa\u0107 zam\xF3wienie i poczeka\u0107 kilka dni, a\u017C zam\xF3wienie zostanie skompletowane w wybranym salonie")));
            }
        }, {
            key: "confirmReplanishment",
            value: function confirmReplanishment() {
                this.props.confirm();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    showClose: true,
                    open: this.props.errors && this.props.errors.length > 0,
                    onClose: this.onClose.bind(this),
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-letter-spacing-xs"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, "Zamówienie nr " + this.props.cartCode + " wymaga zatowarowania"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo())), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-m u-padding-m u-padding-left u-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("hr", null)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, !this.props.dismiss ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide l-col l-col-medium-2 l-col-3 u-spacing-m u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "text",
                    onClick: this.props.dismiss
                }, "Zmie\u0144 salon")), !this.props.goToCart ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-5 u-spacing-m u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "secondary",
                    onClick: this.props.goToCart
                }, "Wr\xF3\u0107 do koszyka")), !this.props.confirm ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-text-right u-spacing-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.confirmReplanishment.bind(this)
                }, "Kontynuuj zam\xF3wienie")), !this.props.dismiss ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-hide u-medium-hide l-col l-col-small-12 u-spacing-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "text",
                    onClick: this.props.dismiss
                }, "Zmie\u0144 salon")))));
            }
        }]);
        return PickupReplanishmentErrorView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getPickupReplanishmentRequiredErrors)(state),
            cartCode: (0, _selectors2.getCartCode)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissBackendValidationErrors)());
            },
            goToCart: function goToCart() {
                return dispatch((0, _app.gotoCartSummary)());
            },
            confirm: function confirm() {
                return dispatch((0, _app.confirmReplanishment)());
            }
        };
    };

    var PickupReplanishmentErrorModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PickupReplanishmentErrorView);
    var _default = PickupReplanishmentErrorModal;
    _exports.default = _default;
});
//# sourceMappingURL=PickupReplanishmentErrorModal.js.map