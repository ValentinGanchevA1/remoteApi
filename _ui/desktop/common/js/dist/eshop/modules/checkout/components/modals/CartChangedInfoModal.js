define(["exports", "react-redux", "react", "prop-types", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/modules/cart/actions/cart", "eshop/components/OraCommonComponents"], function(_exports, _reactRedux, _react, _propTypes, _authorization, _selectors, _app, _cart, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var CartChangedInfoModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CartChangedInfoModal, _Component);

        var _super = _createSuper(CartChangedInfoModal);

        function CartChangedInfoModal() {
            babelHelpers.classCallCheck(this, CartChangedInfoModal);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(CartChangedInfoModal, [{
            key: "renderInfo",
            value: function renderInfo() {
                return /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.text || this.props.defaultText
                    }
                });
            }
        }, {
            key: "getPrimaryButtonText",
            value: function getPrimaryButtonText() {
                return this.props.buttonText || this.props.defaultButtonText;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.renderInfo()))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-8"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.buttonClick,
                    className: "u-w-100"
                }, this.getPrimaryButtonText()))));
            }
        }]);
        return CartChangedInfoModal;
    }(_react.Component);

    CartChangedInfoModal.defaultProps = {
        defaultText: "<span>Ceny oferty zostały zaktualizowane.</span>",
        defaultButtonText: "Zamknij"
    };
    CartChangedInfoModal.propTypes = {
        text: _propTypes.default.string,
        buttonText: _propTypes.default.string,
        buttonClick: _propTypes.default.func
    };
    var _default = CartChangedInfoModal;
    _exports.default = _default;
});
//# sourceMappingURL=CartChangedInfoModal.js.map