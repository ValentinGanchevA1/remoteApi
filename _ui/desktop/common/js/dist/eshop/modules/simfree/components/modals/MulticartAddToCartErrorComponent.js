define(["exports", "react-redux", "lodash", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../../selectors", "../../actions/app", "../../../configurator/utils"], function(_exports, _reactRedux, _lodash, _react, _OraCommonComponents, _Modal, _selectors, _app, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
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

    var MulticartAddToCartErrorComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartAddToCartErrorComponent, _Component);

        var _super = _createSuper(MulticartAddToCartErrorComponent);

        function MulticartAddToCartErrorComponent(props) {
            babelHelpers.classCallCheck(this, MulticartAddToCartErrorComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartAddToCartErrorComponent, [{
            key: "checkOpenModal",
            value: function checkOpenModal() {
                return this.props.errors && this.props.errors.length > 0;
            }
        }, {
            key: "getErrorMessage",
            value: function getErrorMessage() {
                var errorMsg = this.props.descriptions[this.props.errors[0]];
                return _lodash.default.isNil(errorMsg) ? this.props.errors[0] : errorMsg;
            }
        }, {
            key: "renderError",
            value: function renderError() {
                var errorMessage = this.getErrorMessage();

                if ((0, _utils.isHtml)(errorMessage)) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: errorMessage
                        }
                    });
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-letter-spacing-xs"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, errorMessage)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.clearErrors.bind(this),
                    className: "u-w-100 "
                }, this.props.descriptions.confirmationButton))));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "add-to-cart-error",
                    showClose: true,
                    open: this.checkOpenModal(),
                    onClose: this.props.clearErrors.bind(this),
                    size: "narrow",
                    clickClose: false
                }, this.renderError());
            }
        }]);
        return MulticartAddToCartErrorComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getProcessErrors)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearErrors: function clearErrors() {
                return dispatch((0, _app.clearErrors)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartAddToCartErrorComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartAddToCartErrorComponent.js.map