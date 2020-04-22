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

    var FixClientExistsErrorView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(FixClientExistsErrorView, _Component);

        var _super = _createSuper(FixClientExistsErrorView);

        function FixClientExistsErrorView() {
            babelHelpers.classCallCheck(this, FixClientExistsErrorView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(FixClientExistsErrorView, [{
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "renderInfo",
            value: function renderInfo(isExistingCustomer) {
                return /*#__PURE__*/ _react.default.createElement("div", null, isExistingCustomer ? /*#__PURE__*/ _react.default.createElement("span", null, "Dane niemo\u017Cliwe do poprawy na etapie rejestracji zam\xF3wienia. Popraw dane w Konsoli i ponownie rozpocznij rejestracj\u0119.") : /*#__PURE__*/ _react.default.createElement("span", null, "Podany numer PESEL nale\u017Cy do istniej\u0105cego Klienta. Prosz\u0119 o powr\xF3t do strony oferty i wyszukanie Klienta."));
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
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo(!!this.props.isExistingCustomer)))));
            }
        }]);
        return FixClientExistsErrorView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getFixClientExistsCheckoutErrors)(state),
            customerData: (0, _selectors.getCustomerData)(state),
            cartCode: (0, _selectors2.getCartCode)(state),
            isExistingCustomer: (0, _selectors.isExistingCustomer)(state)
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

    var FixClientExistsErrorModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FixClientExistsErrorView);
    var _default = FixClientExistsErrorModal;
    _exports.default = _default;
});
//# sourceMappingURL=FixClientExistsErrorModal.js.map