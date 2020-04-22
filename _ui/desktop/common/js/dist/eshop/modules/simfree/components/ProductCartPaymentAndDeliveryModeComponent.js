define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/app"], function(_exports, _react, _reactRedux, _selectors, _app) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

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

    var ProductCartPaymentAndDeliveryModeComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCartPaymentAndDeliveryModeComponent, _React$Component);

        var _super = _createSuper(ProductCartPaymentAndDeliveryModeComponent);

        function ProductCartPaymentAndDeliveryModeComponent(props) {
            babelHelpers.classCallCheck(this, ProductCartPaymentAndDeliveryModeComponent);
            console.log(props);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductCartPaymentAndDeliveryModeComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("delivery and payment - mounting component");
                this.props.setDeliveryAndPaymentComponentUid(this.props.uid);
                this.props.fetchDeliveryAndPaymentHtml(this.props.uid);
            }
        }, {
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "delivery-payment-method"
                }, this.props.channels.sales !== 'POS' && this.props.deliveryAndPaymentHtml != null && this.props.deliveryAndPaymentHtml !== "" && /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.toHTML(this.props.deliveryAndPaymentHtml)
                }));
            }
        }]);
        return ProductCartPaymentAndDeliveryModeComponent;
    }(_react.default.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setDeliveryAndPaymentComponentUid: function setDeliveryAndPaymentComponentUid(uid) {
                return dispatch((0, _app.setDeliveryAndPaymentComponentUid)(uid));
            },
            fetchDeliveryAndPaymentHtml: function fetchDeliveryAndPaymentHtml(uid) {
                return dispatch((0, _app.fetchDeliveryAndPaymentHtml)(uid));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            deliveryAndPaymentHtml: (0, _selectors.getDeliveryAndPaymentHtml)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductCartPaymentAndDeliveryModeComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductCartPaymentAndDeliveryModeComponent.js.map