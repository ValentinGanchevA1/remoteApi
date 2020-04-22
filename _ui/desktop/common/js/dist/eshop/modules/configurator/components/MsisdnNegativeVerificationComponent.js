define(["exports", "react", "eshop/components/OraCommonComponents", "../../checkout/components/serialNumber/MulticartCancelOrderPopup"], function(_exports, _react, _OraCommonComponents, _MulticartCancelOrderPopup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MulticartCancelOrderPopup = babelHelpers.interopRequireDefault(_MulticartCancelOrderPopup);

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

    var MsisdnNegativeVerificationComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MsisdnNegativeVerificationComponent, _React$Component);

        var _super = _createSuper(MsisdnNegativeVerificationComponent);

        function MsisdnNegativeVerificationComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MsisdnNegativeVerificationComponent);
            _this = _super.call(this, props);
            _this.state = {
                openConfirmModal: false
            };
            return _this;
        }

        babelHelpers.createClass(MsisdnNegativeVerificationComponent, [{
            key: "removeByOmniCode",
            value: function removeByOmniCode() {
                this.setState({
                    openConfirmModal: false
                });
                this.props.removeCartByOmni(this.props.cartToRemove);
            }
        }, {
            key: "openCancelOrderPopup",
            value: function openCancelOrderPopup() {
                this.setState({
                    openConfirmModal: true
                });
            }
        }, {
            key: "onConfirmModalClose",
            value: function onConfirmModalClose() {
                this.setState({
                    openConfirmModal: false
                });
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                    type: "error",
                    className: "g-redf-c"
                }, " ", /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.description
                    }
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    modal: false,
                    type: "text",
                    size: "medium",
                    onClick: this.props.reset
                }, "Zweryfikuj inny numer")), this.props.cartToRemove && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    modal: false,
                    type: "text",
                    size: "medium",
                    onClick: this.openCancelOrderPopup.bind(this)
                }, "Usu\u0144 koszyk"))), /*#__PURE__*/ _react.default.createElement(_MulticartCancelOrderPopup.default, babelHelpers.extends({}, this.props, {
                    cancelOrderQuestion: "Czy na pewno chcesz usunąć istniejący koszyk dla msisdn: " + this.props.msisdn + " ?",
                    onConfirm: this.removeByOmniCode.bind(this),
                    onClose: this.onConfirmModalClose.bind(this),
                    openPopup: this.state.openConfirmModal,
                    id: "remove-order-cart-popup"
                })));
            }
        }]);
        return MsisdnNegativeVerificationComponent;
    }(_react.default.Component);

    _exports.default = MsisdnNegativeVerificationComponent;;
});
//# sourceMappingURL=MsisdnNegativeVerificationComponent.js.map