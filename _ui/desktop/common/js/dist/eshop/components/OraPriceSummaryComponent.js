define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Tooltip", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers"], function(_exports, _react, _propTypes, _reactRedux, _Tooltip, _OnlineUtils, _selectors, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var OraPriceSummaryComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraPriceSummaryComponent, _React$Component);

        var _super = _createSuper(OraPriceSummaryComponent);

        function OraPriceSummaryComponent(props) {
            babelHelpers.classCallCheck(this, OraPriceSummaryComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraPriceSummaryComponent, [{
            key: "componentShouldRender",
            value: function componentShouldRender() {
                if (this.props.deviceTotalPrice != null && this.props.basePrice != null && this.props.basePrice.combinedTariffAndDevicePayments != null) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var deviceTotalPrice = this.props.priceIsNet ? this.props.deviceTotalPriceNet : this.props.deviceTotalPriceGross;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-clear-both"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console"
                }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-font-small"
                }, _OnlineUtils.default.formatPrice(deviceTotalPrice), "\xA0z\u0142"), " \u0142\u0105czna cena za telefon"), this.props.shouldShowStock && /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-font-small"
                }, this.props.stockLevel, " szt."), " dost\u0119pne"), this.props.shouldShowSum && /*#__PURE__*/ _react.default.createElement("p", null, "suma op\u0142at (abonament + telefon) ", /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    className: "u-inline",
                    maxWidth: 450,
                    direction: "bottom"
                }, this.tooltipContent()))));
            }
        }, {
            key: "isSimfreeInstallment",
            value: function isSimfreeInstallment() {
                return this.props.offerType === 'SIMFREE_INST';
            }
        }, {
            key: "tieredPriceIsEmpty",
            value: function tieredPriceIsEmpty(tieredPrice) {
                return tieredPrice.monthFrom === 0 && tieredPrice.monthTo === 0 && tieredPrice.priceNet === 0;
            }
        }, {
            key: "tooltipContent",
            value: function tooltipContent() {
                var _this = this;

                if (!this.getCombinedPrice()) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, this._renderOneTimeCharges(), /*#__PURE__*/ _react.default.createElement("hr", {
                    className: "u-padding-l"
                }), !this.isSimfreeInstallment() && this._renderOnFirstBill(), this.getCombinedPrice() ? this.getCombinedPrice().filter(function(tieredPrice) {
                    return !_this.tieredPriceIsEmpty(tieredPrice);
                }).map(function(tieredPrice) {
                    return _this._renderCombinedTerminalAndTariffPayment(tieredPrice);
                }) : "");
            }
        }, {
            key: "combinePayments",
            value: function combinePayments(tariffForPeriod, terminalForPeriod, monthFrom, monthTo) {
                var combined = {};
                combined.priceNet = (!!tariffForPeriod ? tariffForPeriod.originalNetPrice : 0) + (!!terminalForPeriod ? terminalForPeriod.priceNet : 0.0);
                combined.priceGross = (!!tariffForPeriod ? tariffForPeriod.originalGrossPrice : 0) + (!!terminalForPeriod ? terminalForPeriod.priceGross : 0.0);
                combined.monthFrom = monthFrom;
                combined.monthTo = monthTo;
                return combined;
            }
        }, {
            key: "getCombinedPrice",
            value: function getCombinedPrice() {
                var contractRolePayment = this.props.proposition && _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole);

                var tariffPayments = contractRolePayment && contractRolePayment.totalPayments ? contractRolePayment.totalPayments.monthlyPayments : [];
                var terminalPayments = this.props.basePrice && this.props.basePrice.devicePayments;
                var monthsFrom = [];
                var monthsTo = [];

                if (!!tariffPayments && tariffPayments[0]) {
                    _OnlineUtils.default.addUniqueIntoArray(tariffPayments[tariffPayments.length - 1].monthTo, monthsTo);

                    _OnlineUtils.default.addUniqueIntoArray(tariffPayments[tariffPayments.length - 1].monthTo + 1, monthsFrom);

                    for (var i = 0; i < tariffPayments.length; i++) {
                        _OnlineUtils.default.addUniqueIntoArray(tariffPayments[i].monthFrom, monthsFrom);

                        _OnlineUtils.default.addUniqueIntoArray(tariffPayments[i].monthTo, monthsTo);
                    }
                }

                if (!!terminalPayments && terminalPayments[0]) {
                    _OnlineUtils.default.addUniqueIntoArray(terminalPayments[terminalPayments.length - 1].monthTo, monthsTo);

                    _OnlineUtils.default.addUniqueIntoArray(terminalPayments[terminalPayments.length - 1].monthTo + 1, monthsFrom);

                    for (var _i = 0; _i < terminalPayments.length; _i++) {
                        _OnlineUtils.default.addUniqueIntoArray(terminalPayments[_i].monthFrom, monthsFrom);

                        _OnlineUtils.default.addUniqueIntoArray(terminalPayments[_i].monthTo, monthsTo);
                    }
                }

                monthsFrom = monthsFrom.sort(function(a, b) {
                    return a - b;
                });
                monthsTo = monthsTo.sort(function(a, b) {
                    return a - b;
                });
                var payments = [];

                for (var _i2 = 0; _i2 < monthsFrom.length - 1; _i2++) {
                    var tariffForPeriod = this.getTariffPriceForPeriod(monthsFrom[_i2], monthsTo[_i2]);
                    var terminalForPeriod = this.getTerminalPriceForPeriod(monthsFrom[_i2], monthsTo[_i2]);
                    if (!!tariffForPeriod || !!terminalForPeriod) payments.push(this.combinePayments(tariffForPeriod, terminalForPeriod, monthsFrom[_i2], monthsTo[_i2]));
                }

                return payments;
            }
        }, {
            key: "_renderOneTimeCharges",
            value: function _renderOneTimeCharges() {
                var oneTimePayment;

                if (!!this.props.basePrice) {
                    oneTimePayment = this.props.priceIsNet ? this.props.basePrice.oneTimePaymentNet : this.props.basePrice.oneTimePaymentGross;
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold " + FULL_LINE
                }, "Na start")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: LEFT_COLUMN
                }, "op\u0142aty jednorazowe"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold" + RIGHT_COLUMN
                }, _OnlineUtils.default.formatPrice(oneTimePayment), "\xA0z\u0142")));
            }
        }, {
            key: "_renderOnFirstBill",
            value: function _renderOnFirstBill() {
                var tieredPrice = this.getCombinedPrice()[0];
                var payNowPayment;
                var totalPrice;
                if (!!this.props.basePrice && !!this.props.basePrice.payNowPayment) payNowPayment = this.props.priceIsNet ? this.props.basePrice.payNowPayment.priceNet : this.props.basePrice.payNowPayment.priceGross;
                if (!!tieredPrice) totalPrice = this.props.priceIsNet ? tieredPrice.priceNet : tieredPrice.priceGross;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold " + FULL_LINE
                }, "W pierwszym miesi\u0105cu")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: LEFT_COLUMN
                }, "op\u0142aty jednorazowe"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold" + RIGHT_COLUMN
                }, _OnlineUtils.default.formatPrice(payNowPayment))), (!!this.props.basePrice && this.props.basePrice.combinedTariffAndDevicePayments) != null ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: LEFT_COLUMN
                }, "op\u0142aty miesi\u0119czne"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold" + RIGHT_COLUMN
                }, _OnlineUtils.default.formatPrice(totalPrice), "\xA0z\u0142")) : /*#__PURE__*/ _react.default.createElement("div", null));
            }
        }, {
            key: "getTerminalPriceForPeriod",
            value: function getTerminalPriceForPeriod(monthFrom, monthTo) {
                return this.props.basePrice && this.props.basePrice.devicePayments.find(function(device) {
                    return device.monthFrom <= monthFrom && device.monthTo >= monthTo;
                });
            }
        }, {
            key: "getTariffPriceForPeriod",
            value: function getTariffPriceForPeriod(monthFrom, monthTo) {
                var payments = this.props.proposition && _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole);

                return payments && payments.totalPayments.monthlyPayments.find(function(tariff) {
                    return tariff.monthFrom <= monthFrom && tariff.monthTo >= monthTo;
                });
            }
        }, {
            key: "_renderCombinedTerminalAndTariffPayment",
            value: function _renderCombinedTerminalAndTariffPayment(tieredPrice) {
                if (!tieredPrice) return null;
                var totalPrice = this.props.priceIsNet ? tieredPrice.priceNet : tieredPrice.priceGross;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: tieredPrice.monthFrom
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold" + FULL_LINE
                }, "od ", tieredPrice.monthFrom == 1 ? 2 : tieredPrice.monthFrom, " do ", tieredPrice.monthTo, " miesi\u0105ca")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: LEFT_COLUMN
                }, "op\u0142aty miesi\u0119czne"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold" + RIGHT_COLUMN
                }, _OnlineUtils.default.formatPrice(totalPrice), "\xA0z\u0142")));
            }
        }]);
        return OraPriceSummaryComponent;
    }(_react.default.Component);

    var FULL_LINE = " l-col l-col-12 u-font-small ";
    var LEFT_COLUMN = " l-col l-col-8 u-font-small ";
    var RIGHT_COLUMN = " l-col l-col-4 u-text-right g-brand1-c u-font-small ";
    OraPriceSummaryComponent.defaultProps = {
        stockLevel: "",
        tooltipContent: "",
        deviceTotalPrice: ""
    };
    _Tooltip.default.propTypes = {
        stockLevel: _propTypes.default.string
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            priceIsNet: (0, _selectors.getPriceIsNet)(state),
            contractRole: (0, _offers.getContractRole)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(OraPriceSummaryComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraPriceSummaryComponent.js.map