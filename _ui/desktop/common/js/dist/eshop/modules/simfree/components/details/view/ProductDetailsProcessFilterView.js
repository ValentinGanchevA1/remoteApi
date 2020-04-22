define(["exports", "react", "eshop/components/OraFloatingLabelSelect", "eshop/modules/configurator/components/ClientContextCheckbox", "eshop/modules/configurator/components/InfoWithTooltip", "prop-types", "eshop/modules/cart/components/entriesList/mobile/MultiCartMnpBenefitComponent", "eshop/modules/simfree/components/OfferDisclaimerComponent", "eshop/modules/simfree/constants/OfferTypeEnum", "../../../../../components/common/OraLoader", "../../../../configurator/components/DiscountInfo"], function(_exports, _react, _OraFloatingLabelSelect, _ClientContextCheckbox, _InfoWithTooltip, _propTypes, _MultiCartMnpBenefitComponent, _OfferDisclaimerComponent, _OfferTypeEnum, _OraLoader, _DiscountInfo) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ClientContextCheckbox = babelHelpers.interopRequireDefault(_ClientContextCheckbox);
    _InfoWithTooltip = babelHelpers.interopRequireDefault(_InfoWithTooltip);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _MultiCartMnpBenefitComponent = babelHelpers.interopRequireDefault(_MultiCartMnpBenefitComponent);
    _OfferDisclaimerComponent = babelHelpers.interopRequireDefault(_OfferDisclaimerComponent);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _DiscountInfo = babelHelpers.interopRequireDefault(_DiscountInfo);

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

    var propTypes = {
        selectedProcessValue: _propTypes.default.string,
        processTypeData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        })),
        selectProcessCallback: _propTypes.default.func,
        selectedLoyaltyLengthValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        loyaltyLengthData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string
        })),
        selectLoyaltyLengthCallback: _propTypes.default.func,
        isB2B: _propTypes.default.bool,
        contractRole: _propTypes.default.string
    };

    var ProductDetailsProcessFilterView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsProcessFilterView, _Component);

        var _super = _createSuper(ProductDetailsProcessFilterView);

        function ProductDetailsProcessFilterView() {
            babelHelpers.classCallCheck(this, ProductDetailsProcessFilterView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ProductDetailsProcessFilterView, [{
            key: "createExtOfferSelect",
            value: function createExtOfferSelect() {
                var selectedExtOfferSelectIndexes = this.props.getSelectedExtProcessSelectIndexes();

                if (!selectedExtOfferSelectIndexes) {
                    return null;
                }

                var lastLevel = selectedExtOfferSelectIndexes.length - 1;
                var extProcessSelect = this.props.getExtProcessSelectForLevel(lastLevel);
                var selectedOption = extProcessSelect.options[selectedExtOfferSelectIndexes[lastLevel]];
                return [this.createExtProcessSelects(selectedExtOfferSelectIndexes), this.createLoyaltySelect(selectedOption), this.createInstallmentSelect(selectedOption)];
            }
        }, {
            key: "createExtProcessSelects",
            value: function createExtProcessSelects(selectedExtOfferSelectIndexes) {
                var _this = this;

                return selectedExtOfferSelectIndexes.map(function(selectedExtOfferSelectIndex, level) {
                    var extProcessSelect = _this.props.getExtProcessSelectForLevel(level);

                    return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                    }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                        id: "extProcessSelectLevel-".concat(level),
                        options: _this.props.createOptionsForExtProcessSelect(extProcessSelect),
                        onChange: _this.props.selectProcessForExtProcessSelect(extProcessSelect),
                        selected: selectedExtOfferSelectIndex,
                        className: "opl-input--size-m",
                        label: extProcessSelect.label,
                        disabled: _this.props.isDuet
                    })), _this.isNotLastLevel(level, selectedExtOfferSelectIndexes) && /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col u-medium-hide"
                    }));
                });
            }
        }, {
            key: "isNotLastLevel",
            value: function isNotLastLevel(level, selectedExtOfferSelectIndexes) {
                return level !== selectedExtOfferSelectIndexes.length - 1;
            }
        }, {
            key: "createLoyaltySelect",
            value: function createLoyaltySelect(selectedOption) {
                if (selectedOption.showLoyalty) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                    }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                        id: "loyaltyLengthFilter",
                        options: this.props.loyaltyLengthData,
                        selected: this.props.selectedLoyaltyLengthValue,
                        onChange: this.props.selectLoyaltyLengthCallback,
                        className: "opl-input--size-m",
                        singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                        label: "Umowa",
                        disabled: !!this.props.addTerminalToOfferBundleNo || this.props.isDuet
                    }));
                }

                return null;
            }
        }, {
            key: "createInstallmentSelect",
            value: function createInstallmentSelect(selectedOption) {
                if (selectedOption.showInstallments) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-6 u-spacing-l"
                    }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                        id: "deviceInstallmentsCountFilter",
                        options: this.props.installmentOptions,
                        selected: this.props.installmentCount,
                        className: "opl-input--size-m",
                        singleOptionClassName: "u-spacing-l u-medium-inline-block u-medium-padding-left-xxl",
                        label: "Liczba rat za telefon lub urz\u0105dzenie",
                        disabled: true
                    }));
                }

                return null;
            }
        }, {
            key: "isInstalmentProcess",
            value: function isInstalmentProcess() {
                return this.props.selectedProcessValue === 'INSTALMENT_SALES_OF_GOODS' || this.props.selectedProcessValue === 'INSTALMENT_SALES_OF_GOODS_NC';
            }
        }, {
            key: "hasExtProcessSelectConfig",
            value: function hasExtProcessSelectConfig() {
                return this.props.extProcessSelectConfig && this.props.extProcessSelectConfig.options && this.props.extProcessSelectConfig.options.length !== 0;
            }
        }, {
            key: "render",
            value: function render() {
                var info = {
                    label: this.props.descriptions["infoDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)],
                    tooltip: this.props.descriptions["infoTooltipDescription.".concat(this.props.marketContext, ".").concat(this.props.selectedProcessValue)]
                };
                var isSimfreeInst = this.props.selectedOfferType === "SIMFREE_INST";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 g-gray1-bg u-large-no-bg u-medium-padding-left-l u-medium-padding-right-l u-no-padding-bottom" + (isSimfreeInst ? ' u-spacing-l-xl' : '')
                }, /*#__PURE__*/ _react.default.createElement(_OraLoader.OraLoader, {
                    id: "offer-filters-loader-component",
                    loading: this.props.offerFiltersLoading,
                    parentId: "offer-filters-loader"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg u-medium-no-bg g-small-no-bg u-padding-all-l u-small-padding-left u-small-padding-right u-medium-no-padding-left u-medium-no-padding-right" + (this.isInstalmentProcess() ? " u-no-padding-b" : "")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, !this.props.offerFiltersLoading && this.hasExtProcessSelectConfig() && this.createExtOfferSelect(), !this.props.offerFiltersLoading && !this.hasExtProcessSelectConfig() && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                    options: this.props.processTypeData,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    isFeedbackParam: "true",
                    label: this.props.processLabel,
                    className: "opl-input--size-m",
                    disabled: !!this.props.isAddTerminalToOfferBundleNo || this.props.isDuet
                })), !isSimfreeInst && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, {
                    options: this.props.loyaltyLengthData,
                    id: "loyaltyFilter",
                    selected: this.props.selectedLoyaltyLengthValue,
                    onChange: this.props.selectLoyaltyLengthCallback,
                    singleOptionClassName: "u-padding-all",
                    isFeedbackParam: "true",
                    label: "Umowa",
                    className: "opl-input--size-m",
                    disabled: !!this.props.isAddTerminalToOfferBundleNo || this.props.isDuet
                }))), !this.props.offerFiltersLoading && info.label && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_InfoWithTooltip.default, info)), !isSimfreeInst && this.props.channels.sales === "WWW" && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_ClientContextCheckbox.default, babelHelpers.extends({
                    key: this.props.selectedProcessValue,
                    channels: this.props.channels,
                    tooltip: true
                }, this.props.clientContextCheckboxConfig, {
                    addTerminalToOfferBundleNo: !!this.props.isAddTerminalToOfferBundleNo ? true : undefined
                })))), this.props.selectedOffer && /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.isInstalmentProcess() ? "" : "l-row u-padding-top-l"
                }, !isSimfreeInst && !this.props.isB2B && [_OfferTypeEnum.default.DATA].indexOf(this.props.selectedOfferType) === -1 && /*#__PURE__*/ _react.default.createElement(_OfferDisclaimerComponent.default, {
                    descriptions: this.props.descriptions,
                    processType: this.props.selectedProcessValue,
                    className: "u-spacing-s"
                }), /*#__PURE__*/ _react.default.createElement(_MultiCartMnpBenefitComponent.default, {
                    processType: this.props.selectedProcessValue,
                    monthlyPrices: this.props.selectedOffer.payments.plain.totalPayments.monthlyPayments
                })), !isSimfreeInst && !this.props.isB2B && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_DiscountInfo.default, {
                    descriptions: this.props.descriptions,
                    contractRole: this.props.contractRole,
                    offerType: this.props.selectedOfferType
                })))));
            }
        }]);
        return ProductDetailsProcessFilterView;
    }(_react.Component);

    _exports.default = ProductDetailsProcessFilterView;
    ProductDetailsProcessFilterView.propTypes = propTypes;
});
//# sourceMappingURL=ProductDetailsProcessFilterView.js.map