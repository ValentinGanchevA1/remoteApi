define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/components/ProductOfferInstalmentPriceTooltipComponent", "eshop/utils/OnlineUtils", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../../cart/enum/ProcessType"], function(_exports, _react, _reactRedux, _selectors, _offers, _filters, _app, _ProductOfferInstalmentPriceTooltipComponent, _OnlineUtils, _OfferTypeEnum, _selectors2, _ProcessType) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductOfferInstalmentPriceTooltipComponent = babelHelpers.interopRequireDefault(_ProductOfferInstalmentPriceTooltipComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _ProcessType = babelHelpers.interopRequireDefault(_ProcessType);

    var _this2 = void 0;

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

    var ProductDetailsDevicePriceComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsDevicePriceComponent, _React$Component);

        var _super = _createSuper(ProductDetailsDevicePriceComponent);

        function ProductDetailsDevicePriceComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsDevicePriceComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsDevicePriceComponent, [{
            key: "render",
            value: function render() {
                var _this = this;

                console.log("ProductDetailsDevicePriceComponent");
                console.log(this.props);

                if (_ProcessType.default.SALE_OF_GOODS === this.props.selectedProcess) {
                    return /*#__PURE__*/ _react.default.createElement(SimfreePrice, this.props);
                }

                var proposition = this.props.selectedOffer;
                if (!proposition || !proposition.deviceData) return null;
                var instalmentPayments = proposition.deviceData.inOffer.price.base.devicePayments;
                var oneTimePayment = this.props.showNet ? proposition.deviceData.inOffer.price.base.oneTimePaymentNet : proposition.deviceData.inOffer.price.base.oneTimePaymentGross;
                var useCartPrices = this.props.deviceToChange && !!this.props.deviceData.variantList.find(function(variant) {
                    return _this.props.deviceToChange.productCode == variant.productId;
                });

                if (useCartPrices) {
                    instalmentPayments = this.props.deviceToChange.monthlyPrices;
                    oneTimePayment = _OnlineUtils.default.formatPrice(this.props.showNet ? this.props.deviceToChange.checkoutPrice.net : this.props.deviceToChange.checkoutPrice.gross);
                }

                var instalmentLength = instalmentPayments[0].monthTo;

                var instalmentValue = _OnlineUtils.default.getPriceFromPaymentsObject(instalmentPayments[0], this.props.showNet);

                return /*#__PURE__*/ _react.default.createElement("div", {
                    key: this.props.selectedOfferId,
                    className: "l-col l-col-12  u-padding-l u-small-no-padding-bottom"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-7  l-col-small-6 u-large-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4"
                }, "Cena"), this.props.selectedOfferType !== "SIMFREE_INST" && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-small-hide"
                }, "Cena abonamentu nie jest zawarta w cenie telefonu")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-5  l-col-small-6 u-text-right u-large-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h2"
                }, _OnlineUtils.default.formatPriceAbsolute(instalmentValue)), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h4"
                }, ",", _OnlineUtils.default.formatPriceDecimals(instalmentValue), " z\u0142 x ", instalmentLength, " ", _OnlineUtils.default.odmienRaty(instalmentLength)), _OnlineUtils.default.updateOgTag('product:original_price:device_installment_price', _OnlineUtils.default.formatPrice(instalmentValue)), _OnlineUtils.default.updateOgTag('product:device_installment_loyalyty', instalmentLength), /*#__PURE__*/ _react.default.createElement(_ProductOfferInstalmentPriceTooltipComponent.default, {
                    instalmentTooltipDescription: this.props.descriptions.instalmentTooltipDescription,
                    proposition: proposition
                })), instalmentPayments.length > 1 && instalmentPayments.map(function(instalmentPeriod, index) {
                    if (index == 0) return null;
                    return /*#__PURE__*/ _react.default.createElement(DeviceInstalmentPeriod, babelHelpers.extends({
                        key: "from_" + instalmentPeriod.monthFrom
                    }, instalmentPeriod));
                }), /*#__PURE__*/ _react.default.createElement("p", null, "+ ", _OnlineUtils.default.formatPrice(oneTimePayment), " z\u0142 na start"), _OnlineUtils.default.updateOgTag('product:original_price:device_start_price', _OnlineUtils.default.formatPrice(oneTimePayment)))));
            }
        }]);
        return ProductDetailsDevicePriceComponent;
    }(_react.default.Component);

    var DeviceInstalmentPeriod = function DeviceInstalmentPeriod(props) {
        var from = props.monthFrom || 0;
        var to = props.monthTo || props.maxInstalment;
        var instalmentPeriodLength = to - from + 1.0;
        var test = "";
        return /*#__PURE__*/ _react.default.createElement("h5", {
            className: "u-no-margin u-padding-top-s"
        }, _OnlineUtils.default.formatPrice(props.price), " z\u0142 x ", instalmentPeriodLength, " ", _OnlineUtils.default.odmienRaty(instalmentPeriodLength));
    };

    var SimfreePrice = function SimfreePrice(props) {
        if (!props.selectedVariantObject.devicePaymentsData) {
            return null;
        }

        var instalmentValue = props.selectedVariantObject.devicePaymentsData.oneTimePayment.price;
        if (props.showNet) instalmentValue = props.selectedVariantObject.devicePaymentsData.oneTimePayment.originalNetPrice;
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12  u-padding-l u-small-no-padding-bottom"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-no-spacing"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-7  l-col-small-6 u-large-no-padding-left"
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "h4"
        }, "Cena")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-5  l-col-small-6 u-text-right u-large-no-padding-right"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            style: {
                textAlign: "right"
            },
            className: "u-font-bold"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "h1"
        }, _OnlineUtils.default.formatPriceAbsolute(instalmentValue)), /*#__PURE__*/ _react.default.createElement("span", {
            className: "h3"
        }, ",", _OnlineUtils.default.formatPriceDecimals(instalmentValue), " z\u0142"), _OnlineUtils.default.updateOgTag('product:original_price:device_full_price', _OnlineUtils.default.formatPrice(instalmentValue))), /*#__PURE__*/ _react.default.createElement("div", {
            style: {
                textAlign: "right"
            }
        }, props.offerTypesForSelect && props.offerTypesForSelect.filter(function(o) {
            return o.value === _OfferTypeEnum.default.SIMFREE_INST;
        }).length > 0 && !props.marketIsB2B && /*#__PURE__*/ _react.default.createElement("a", {
            className: "u-cursor-pointer",
            onClick: props.setOfferType.bind(_this2, _OfferTypeEnum.default.SIMFREE_INST)
        }, " lub sprawd\u017A ofert\u0119 raty\xA00%"))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12  u-padding-l u-padding-top-l u-medium-padding-left-l u-medium-padding-right-l u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-separator"
        })));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            selectedOffer: (0, _offers.getSelectedOffer)(state),
            selectedVariantObject: (0, _selectors.getSelectedVariantObject)(state),
            selectedOfferId: (0, _offers.getSelectedOfferId)(state),
            offerTypesForSelect: (0, _selectors.getOfferTypesForSelect)(state),
            marketIsB2B: (0, _filters.getMarketContext)(state) == "B2B",
            showNet: (0, _selectors2.getPriceIsNet)(state),
            selectedProcess: (0, _filters.getSelectedProcessTypeValue)(state),
            deviceToChange: (0, _selectors2.getChangedDevice)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setOfferType: function setOfferType(offerType) {
                return dispatch((0, _app.setOfferType)(offerType));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsDevicePriceComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsDevicePriceComponent.js.map