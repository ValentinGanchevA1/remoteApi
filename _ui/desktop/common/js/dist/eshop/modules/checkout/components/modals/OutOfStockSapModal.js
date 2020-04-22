define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(_exports, _reactRedux, _react, _Modal, _OraCommonComponents, _selectors, _selectors2, _app) {
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

    var OutOfStockSapModalViewComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OutOfStockSapModalViewComponent, _Component);

        var _super = _createSuper(OutOfStockSapModalViewComponent);

        function OutOfStockSapModalViewComponent() {
            babelHelpers.classCallCheck(this, OutOfStockSapModalViewComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OutOfStockSapModalViewComponent, [{
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", null, "Niekt\xF3re z zam\xF3wionych produkt\xF3w nie s\u0105 ju\u017C dost\u0119pne.", /*#__PURE__*/ _react.default.createElement("br", null), " Mo\u017Cesz wr\xF3ci\u0107 do koszyka i zmieni\u0107 sw\xF3j wyb\xF3r, albo poczeka\u0107 kilka dni, a\u017C produkt b\u0119dzie znowu dost\u0119pny.", /*#__PURE__*/ _react.default.createElement("br", null), " Koszyk zostanie zapisany i b\u0119dzie mo\u017Cna do niego wr\xF3ci\u0107.");
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
                }, /*#__PURE__*/ _react.default.createElement("h4", null, "Zamówienie nr " + this.props.cartCode + " nie może być zrealizowane"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo())), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h5", null, "Nie mo\u017Cesz zam\xF3wi\u0107")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12 l-col-medium-4"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Zamawiane urz\u0105dzenie")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 l-col-small-12 l-col-medium-8"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.errors.map(function(error, i) {
                    return error.description;
                })))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-m u-padding-m u-padding-left u-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("hr", null)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, !this.props.action ? null : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.action,
                    className: "u-w-100 "
                }, "Wr\xF3\u0107 do koszyka")))));
            }
        }]);
        return OutOfStockSapModalViewComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getOutOfStockCheckoutErrors)(state),
            cartCode: (0, _selectors2.getCartCode)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissBackendValidationErrors)());
            },
            action: function action() {
                return dispatch((0, _app.gotoCartSummary)());
            }
        };
    };

    var OutOfStockSapModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OutOfStockSapModalViewComponent);
    var _default = OutOfStockSapModal;
    _exports.default = _default;
});
//# sourceMappingURL=OutOfStockSapModal.js.map