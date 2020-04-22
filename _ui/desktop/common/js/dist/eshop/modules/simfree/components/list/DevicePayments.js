define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/modules/simfree/components/ProductOfferInstalmentPriceTooltipComponent"], function(_exports, _react, _reactRedux, _OnlineUtils, _selectors, _ProductOfferInstalmentPriceTooltipComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ProductOfferInstalmentPriceTooltipComponent = babelHelpers.interopRequireDefault(_ProductOfferInstalmentPriceTooltipComponent);

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

    var DeviceInstalmentPeriod = function DeviceInstalmentPeriod(props) {
        var from = props.monthFrom || 0;
        var to = props.monthTo || props.maxInstalment;
        var instalmentPeriodLength = to - from + 1.0;
        var test = "";

        var price = _OnlineUtils.default.getPriceFromPaymentsObject(props, props.showNet);

        return /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-block"
        }, _OnlineUtils.default.formatPrice(price), " z\u0142 x ", instalmentPeriodLength, " ", _OnlineUtils.default.odmienRaty(instalmentPeriodLength));
    };

    var DevicePayments = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(DevicePayments, _React$Component);

        var _super = _createSuper(DevicePayments);

        function DevicePayments() {
            babelHelpers.classCallCheck(this, DevicePayments);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DevicePayments, [{
            key: "render",
            value: function render() {
                var _this = this;

                var useCartPrices = this.props.deviceToChange && !!this.props.product.variantList.find(function(variant) {
                    return _this.props.deviceToChange.productCode == variant.productId;
                });

                if (this.props.product.inOffer != null) {
                    var instalmentPayments = this.props.product.inOffer.price.base.devicePayments;

                    var oneTimePayment = _OnlineUtils.default.formatPrice(this.props.showNet ? this.props.product.inOffer.price.base.oneTimePaymentNet : this.props.product.inOffer.price.base.oneTimePaymentGross);

                    if (useCartPrices) {
                        instalmentPayments = this.props.deviceToChange.monthlyPrices;
                        oneTimePayment = _OnlineUtils.default.formatPrice(this.props.showNet ? this.props.deviceToChange.checkoutPrice.net : this.props.deviceToChange.checkoutPrice.gross);
                    }

                    console.log("DEVICE FROM CART TO CHANGE", this.props.deviceToChange);
                    return /*#__PURE__*/ _react.default.createElement(DeviceInstalmentPayments, {
                        product: this.props.product,
                        marketIsB2B: this.props.marketIsB2B,
                        showNet: this.props.showNet,
                        proposition: this.props.proposition,
                        instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                        instalmentPayments: instalmentPayments,
                        oneTimePayment: oneTimePayment
                    });
                } else return /*#__PURE__*/ _react.default.createElement(DeviceSimfreePayments, {
                    product: this.props.product,
                    productVariant: this.props.productVariant,
                    instalmentUrl: this.props.instalmentUrl,
                    showNet: this.props.showNet,
                    marketIsB2B: this.props.marketIsB2B
                });
            }
        }]);
        return DevicePayments;
    }(_react.default.Component);

    var DeviceSimfreePayments = /*#__PURE__*/ function(_React$Component2) {
        babelHelpers.inherits(DeviceSimfreePayments, _React$Component2);

        var _super2 = _createSuper(DeviceSimfreePayments);

        function DeviceSimfreePayments() {
            babelHelpers.classCallCheck(this, DeviceSimfreePayments);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(DeviceSimfreePayments, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-brand1-c u-font-bold"
                }, _OnlineUtils.default.formatPrice(this.props.showNet ? this.props.product.priceNet : this.props.product.priceGross), " z\u0142"), this.props.productVariant.isInstalmentAvailable && !this.props.marketIsB2B && /*#__PURE__*/ _react.default.createElement("a", {
                    href: this.props.instalmentUrl,
                    className: "u-padding-top-s" + " u-padding-s u-block u-font-bold"
                }, "lub sprawd\u017A ofert\u0119 raty 0%"));
            }
        }]);
        return DeviceSimfreePayments;
    }(_react.default.Component);

    var DeviceInstalmentPayments = /*#__PURE__*/ function(_React$Component3) {
        babelHelpers.inherits(DeviceInstalmentPayments, _React$Component3);

        var _super3 = _createSuper(DeviceInstalmentPayments);

        function DeviceInstalmentPayments() {
            babelHelpers.classCallCheck(this, DeviceInstalmentPayments);
            return _super3.apply(this, arguments);
        }

        babelHelpers.createClass(DeviceInstalmentPayments, [{
            key: "render",
            value: function render() {
                var _this2 = this;

                var instalmentPayments = this.props.instalmentPayments;
                var oneTimePayment = this.props.oneTimePayment;
                return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-brand1-c u-font-bold"
                }, instalmentPayments.map(function(instalmentPeriod) {
                    return /*#__PURE__*/ _react.default.createElement(DeviceInstalmentPeriod, babelHelpers.extends({
                        key: "from_" + instalmentPeriod.monthFrom,
                        showNet: _this2.props.showNet
                    }, instalmentPeriod));
                }), /*#__PURE__*/ _react.default.createElement(_ProductOfferInstalmentPriceTooltipComponent.default, {
                    instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                    proposition: this.props.proposition
                })), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-gray7-c u-font-small"
                }, oneTimePayment, " z\u0142 na\xA0start "));
            }
        }]);
        return DeviceInstalmentPayments;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            deviceToChange: (0, _selectors.getChangedDevice)(state),
            showNet: (0, _selectors.getPriceIsNet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, {})(DevicePayments);

    _exports.default = _default;
});
//# sourceMappingURL=DevicePayments.js.map