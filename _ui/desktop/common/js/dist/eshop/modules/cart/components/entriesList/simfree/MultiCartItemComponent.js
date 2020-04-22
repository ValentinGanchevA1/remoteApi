define(["exports", "react", "./MultiCartItemHeaderComponent", "./MultiCartItemErrorComponent", "./MultiCartItemHeaderMobileComponent", "./MultiCartItemDetailComponent", "./MultiCartItemDetailMobileComponent", "./MultiCartItemMainPriceMobileComponent", "./MultiCartItemAttributeComponent", "./MultiCartItemTooltip", "../../CartDetailsModal", "./MultiCartMnpBenefitComponent", "eshop/flux/utils/OraModalService", "eshop/components/OraStockLevelStatusComponent", "eshop/modules/cart/actions/cart", "../../../selectors", "react-redux", "../BundleTypeEnum", "../VoucherSubType", "eshop/modules/cart/components/entriesList/mobile/ShowVoucherComponent", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/resources"], function(_exports, _react, _MultiCartItemHeaderComponent, _MultiCartItemErrorComponent, _MultiCartItemHeaderMobileComponent, _MultiCartItemDetailComponent, _MultiCartItemDetailMobileComponent, _MultiCartItemMainPriceMobileComponent, _MultiCartItemAttributeComponent, _MultiCartItemTooltip, _CartDetailsModal, _MultiCartMnpBenefitComponent, _OraModalService, _OraStockLevelStatusComponent, _cart, _selectors, _reactRedux, _BundleTypeEnum, _VoucherSubType, _ShowVoucherComponent, _OnlineUtils, _resources) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartItemHeaderComponent = babelHelpers.interopRequireDefault(_MultiCartItemHeaderComponent);
    _MultiCartItemErrorComponent = babelHelpers.interopRequireDefault(_MultiCartItemErrorComponent);
    _MultiCartItemHeaderMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemHeaderMobileComponent);
    _MultiCartItemDetailComponent = babelHelpers.interopRequireDefault(_MultiCartItemDetailComponent);
    _MultiCartItemDetailMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemDetailMobileComponent);
    _MultiCartItemMainPriceMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemMainPriceMobileComponent);
    _MultiCartItemAttributeComponent = babelHelpers.interopRequireDefault(_MultiCartItemAttributeComponent);
    _MultiCartItemTooltip = babelHelpers.interopRequireDefault(_MultiCartItemTooltip);
    _CartDetailsModal = babelHelpers.interopRequireDefault(_CartDetailsModal);
    _MultiCartMnpBenefitComponent = babelHelpers.interopRequireDefault(_MultiCartMnpBenefitComponent);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _BundleTypeEnum = babelHelpers.interopRequireDefault(_BundleTypeEnum);
    _VoucherSubType = babelHelpers.interopRequireDefault(_VoucherSubType);
    _ShowVoucherComponent = babelHelpers.interopRequireDefault(_ShowVoucherComponent);
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

    var MultiCartItemComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemComponent);

        function MultiCartItemComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MultiCartItemComponent);
            _this = _super.call(this, props);
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            return _this;
        }

        babelHelpers.createClass(MultiCartItemComponent, [{
            key: "onChangeClicked",
            value: function onChangeClicked() {
                if (typeof this.props.onChange === 'function') {
                    this.props.onChangeClicked();
                    return;
                }

                throw 'onChangeClicked should be a function!';
            }
        }, {
            key: "onDetailsClicked",
            value: function onDetailsClicked() {
                _OraModalService.default.open("productDetails-" + this.name);
            }
        }, {
            key: "onMsisdnChangeClicked",
            value: function onMsisdnChangeClicked() {
                console.log('onMsisdnChangeClicked'); // @TODO logic of MSISDN change
            }
        }, {
            key: "onRemoveClicked",
            value: function onRemoveClicked() {
                var _this2 = this;

                if (this.props.sapReservation !== '') {
                    this.props.showErrorMessage(this.props.sapErrorMessage);
                } else {
                    var simFreeItemsOnCart = 0;
                    this.props.entries.map(function(entry, idx) {
                        if (entry.bundleNo === _this2.props.entry.bundleNo) {
                            if (entry.bundleType === _BundleTypeEnum.default.SIMFREE) {
                                simFreeItemsOnCart = entry.terminals.length;
                            } else if (entry.bundleType === _BundleTypeEnum.default.SIMFREE_INST) {
                                simFreeItemsOnCart = 1;
                            }
                        }
                    });
                    this.props.removeDeviceFromSimfreeBundle(this.props.entry.bundleNo, this.props.entry.entryNo, simFreeItemsOnCart == 1);
                }
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var _this3 = this;

                var header = "def:Szczegóły oferty";
                var details;

                try {
                    details = this.props.entry.details ? JSON.parse(this.props.entry.details) : "";
                } catch (e) {
                    details = this.props.entry.details;
                }

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_CartDetailsModal.default, {
                        id: "productDetails-" + _this3.name,
                        header: header,
                        proposition: _this3.props.entry,
                        details: details
                    });
                });
            }
        }, {
            key: "calculateInstallmentLength",
            value: function calculateInstallmentLength() {
                var terminal = this.props.entry;

                if (terminal && this.props.type === "TERMINAL") {
                    var instalmentLength = terminal.monthlyPrices && terminal.monthlyPrices.length > 0 && terminal.monthlyPrices[terminal.monthlyPrices.length - 1].monthTo;
                    var instalmentLengthDescription = instalmentLength && "Liczba rat za urządzenie: " + instalmentLength;
                    return instalmentLengthDescription;
                }

                return "";
            }
        }, {
            key: "getPricePresentationMode",
            value: function getPricePresentationMode(type) {
                var stepMode = ['TERMINAL', 'VAS'],
                    discountMode = ['SIM', 'DATA', 'GADGET'];

                if (stepMode.indexOf(type) !== -1) {
                    return 'HIGHEST_MONTHLY_PRICE';
                } else if (discountMode.indexOf(type) !== -1) {
                    return 'DISCOUNTED_PRICE';
                }
            }
        }, {
            key: "getFirstNotNullPrice",
            value: function getFirstNotNullPrice(prices) {
                var sortedPrices;

                if (!prices || prices.length === 0) {
                    return false;
                }

                sortedPrices = prices.slice().sort(function(a, b) {
                    return a.price - b.price;
                }).filter(function(el) {
                    return el.price > 0;
                });

                if (sortedPrices.length > 0) {
                    return sortedPrices[0];
                }

                return prices[0];
            }
        }, {
            key: "getPricePresentation",
            value: function getPricePresentation(type, monthlyPrices, discountedPrice, tooltipCmsContent, voucherNames) {
                var voucherName = voucherNames && voucherNames[_VoucherSubType.default.SUBSCRIPTION];
                var presentation = {
                        mobile: {},
                        desktop: {}
                    },
                    firstNotNullPrice = this.getFirstNotNullPrice(monthlyPrices),
                    highestMonthlyPrice;

                if (['SIM', 'DATA'].indexOf(type) !== -1) {
                    presentation = {
                        main: firstNotNullPrice,
                        tooltip: /*#__PURE__*/ _react.default.createElement(_MultiCartItemTooltip.default, null, tooltipCmsContent),
                        crossedOut: discountedPrice && /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(discountedPrice.price).join(','), "\xA0", discountedPrice.currency),
                        subtitle: null
                    };
                } else if (type === 'TERMINAL' && (voucherName || monthlyPrices.length >= 1)) {
                    var isDiscount = monthlyPrices.filter(function(priceTier) {
                        return priceTier.netPriceWithoutVouchers > priceTier.netPrice;
                    }).length > 0;
                    presentation = {
                        main: firstNotNullPrice,
                        tooltip: {
                            id: "terminalTooltip" + "_" + this.props.entry.entryNo,
                            additionalInfo: voucherName && ["opłata miesięczna uwzględnia rabat wynikający z użytego kuponu"],
                            monthlyPayments: monthlyPrices.map(function(price) {
                                return {
                                    monthFrom: price.monthFrom,
                                    monthTo: price.monthTo,
                                    gross: String(price.priceWithoutVouchers),
                                    price: price.priceWithoutVouchers,
                                    priceGross: price.grossPriceWithoutVouchers,
                                    priceNet: price.netPriceWithoutVouchers,
                                    currency: price.currency
                                };
                            }),
                            monthlyPaymentsWithBonuses: monthlyPrices,
                            isBonus: !!voucherName || isDiscount
                        }
                    };

                    if (voucherName || isDiscount) {
                        presentation.crossedOut = _OnlineUtils.default.formatPrice(firstNotNullPrice.priceWithoutVouchers) + " " + firstNotNullPrice.currency;
                    }
                } else {
                    if (monthlyPrices && monthlyPrices.length === 1) {
                        presentation = {
                            main: firstNotNullPrice,
                            tooltip: null,
                            crossedOut: null,
                            subtitle: null
                        };
                    } else if (monthlyPrices && monthlyPrices.length === 2) {
                        presentation = {
                            main: monthlyPrices[0],
                            tooltip: null,
                            crossedOut: null,
                            subtitle: /*#__PURE__*/ _react.default.createElement("span", null, this.getPriceSpelling(monthlyPrices[0]), ", potem ", this.getPartsOfPrice(monthlyPrices[1].price).join(','), "\xA0", monthlyPrices[1].currency)
                        };
                    } else if (monthlyPrices && monthlyPrices.length > 0) {
                        highestMonthlyPrice = this.getHighestMonthlyPrice(monthlyPrices);
                        presentation = {
                            main: firstNotNullPrice,
                            tooltip: this.getPricesTooltip(monthlyPrices),
                            crossedOut: /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(highestMonthlyPrice.price).join(','), "&nbsp", highestMonthlyPrice.currency),
                            subtitle: null
                        };
                    }
                }

                return presentation;
            }
        }, {
            key: "isSimfreeInstallmentProcess",
            value: function isSimfreeInstallmentProcess() {
                return ['INSTALMENT_SALES_OF_GOODS', 'INSTALMENT_SALES_OF_GOODS_NC'].includes(this.props.entry.processType);
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function lowerInstallmentsClicked(bundleNo) {
                this.props.lowerInstallmentsModalOpen(bundleNo);
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                var entryName = this.props.entry.planName || this.props.entry.name;
                var color = this.props.entry.colorDefinition && this.props.entry.colorDefinition.name;
                return entryName + (color ? " (".concat(color, ")") : '');
            }
        }, {
            key: "render",
            value: function render() {
                var _this4 = this;

                var monthlyPricePresentation = this.getPricePresentation(this.props.type, this.props.entry.monthlyPrices, this.props.entry.monthlyOldPrice, this.props.entry.tooltipCmsContent, this.props.entry.voucherNames);
                var vTypes = [_VoucherSubType.default.SUBSCRIPTION, _VoucherSubType.default.INSTALLMENT_ONE_TIME];
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed" + (this.props.noBorder ? " u-no-border-top" : " u-border-top")
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemHeaderComponent.default, {
                    title: this.getTitle(),
                    monthlyPricePresentation: monthlyPricePresentation,
                    oneTimePrice: false,
                    entryType: this.props.type,
                    simFreeOneTimePrice: this.props.entry.checkoutPrice,
                    description: this.props.entry.description,
                    msisdn: this.props.entry.msisdn,
                    processType: this.props.entry.processType,
                    mnpData: this.props.entry.mnpData,
                    imageUrl: this.props.entry.imageUrl,
                    type: this.props.type,
                    onMsisdnChangeClicked: this.onMsisdnChangeClicked.bind(this),
                    onChangeClicked: this.onChangeClicked.bind(this),
                    onRemoveClicked: this.onRemoveClicked.bind(this),
                    onDetailsClicked: this.onDetailsClicked.bind(this),
                    icon: this.props.icon,
                    msisdnVerificationData: this.props.entry.msisdnVerificationData,
                    stockLevelStatus: this.props.entry.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                    lowerInstallmentsClicked: !!this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : undefined,
                    descriptions: this.props.descriptions,
                    installmentDescription: this.calculateInstallmentLength()
                }), /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "3"
                }, this.props.entry.voucherNames && vTypes.some(function(v) {
                    return _this4.props.entry.voucherNames[v];
                }) && vTypes.filter(function(vType) {
                    return _this4.props.entry.voucherNames[vType];
                }).map(function(vType) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: vType
                    }, /*#__PURE__*/ _react.default.createElement(_ShowVoucherComponent.default, {
                        entry: _this4.props.entry,
                        voucherName: _this4.props.entry.voucherNames[vType],
                        voucherSubType: vType
                    }));
                }))), /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "3"
                }, this.props.entry.voucherNames && this.props.entry.voucherNames[_VoucherSubType.default.ACTIVATION] && /*#__PURE__*/ _react.default.createElement(_ShowVoucherComponent.default, {
                    entry: this.props.entry,
                    voucherName: this.props.entry.voucherNames[_VoucherSubType.default.ACTIVATION],
                    voucherSubType: _VoucherSubType.default.ACTIVATION
                }))), this.props.rejectionReason && this.props.rejectionReason.length > 0 && /*#__PURE__*/ _react.default.createElement(_MultiCartItemErrorComponent.default, {
                    rejectionReasons: this.props.rejectionReason
                }), ['SIM', 'DATA'].indexOf(this.props.type) !== -1 && this.props.entry.firstBillPrice && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    title: "Op\u0142ata aktywacyjna/instalacyjna",
                    oneTimePrice: this.props.entry.firstBillPrice,
                    captionClassName: "u-font-bold",
                    priceless: false
                }), this.props.hasOrangeLoveDiscount && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    title: "Rabat specjalnie dla Ciebie - za\xA0posiadanie Orange LOVE!",
                    priceless: true
                }), /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    colSpan: "3"
                }, /*#__PURE__*/ _react.default.createElement(_MultiCartMnpBenefitComponent.default, {
                    mnpData: this.props.entry.mnpData,
                    processType: this.props.entry.processType,
                    monthlyPrices: this.props.entry.monthlyPrices,
                    tooltip: this.props.entry.tooltipMnpBenefitContent
                })))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-hide u-small-block u-padding-top-l" + (this.props.noBorder ? " u-no-border" : " u-border-top")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "".concat(_OraStockLevelStatusComponent.default.getStockCssClass(this.props.entry.stockLevelStatus))
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, !this.isSimfreeInstallmentProcess() && /*#__PURE__*/ _react.default.createElement(_MultiCartItemMainPriceMobileComponent.default, {
                    price: this.props.entry.checkoutPrice.price,
                    currency: this.props.entry.checkoutPrice.currency,
                    tooltip: monthlyPricePresentation.tooltip
                }), this.isSimfreeInstallmentProcess() && /*#__PURE__*/ _react.default.createElement(_MultiCartItemMainPriceMobileComponent.default, {
                    price: this.props.entry.monthlyPrices[0].gross,
                    currency: this.props.entry.monthlyPrices[0].currency + '/mc'
                }), monthlyPricePresentation.subtitle && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top u-font-small g-gray5-c"
                }, monthlyPricePresentation.subtitle), monthlyPricePresentation.crossedOut && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-s u-font-small g-gray5-c u-text-line-through"
                }, monthlyPricePresentation.crossedOut), this.prepareCrossedOneTimePrice(this.props.entry.checkoutPrice), !this.isSimfreeInstallmentProcess() && this.props.entry.firstBillPrice && !!parseFloat(this.props.entry.firstBillPrice.price) && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    title: '+ %1 ' + (['SIM', 'DATA'].indexOf(this.props.type) !== -1 ? 'aktywacja' : 'na start'),
                    price: this.props.entry.firstBillPrice,
                    className: "u-spacing-top-s u-font-small",
                    priceless: false
                }), this.isSimfreeInstallmentProcess() && this.props.entry.checkoutPrice && this.props.entry.checkoutPrice.gross && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-s u-font-small"
                }, "+ ", this.props.entry.checkoutPrice.gross, " na start")), /*#__PURE__*/ _react.default.createElement(_MultiCartItemHeaderMobileComponent.default, {
                    type: this.props.type,
                    imageUrl: this.props.entry.imageUrl,
                    title: this.props.entry.name,
                    description: this.calculateInstallmentLength(),
                    monthlyPricePresentation: monthlyPricePresentation,
                    lowerInstallmentsClicked: !!this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : undefined
                })), this.props.hasOrangeLoveDiscount && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    title: "Rabat specjalnie dla Ciebie - za\xA0posiadanie Orange LOVE!",
                    className: "u-padding-left-l u-padding-right-l u-padding-l",
                    boldTitle: false,
                    priceless: true
                }), /*#__PURE__*/ _react.default.createElement(_MultiCartMnpBenefitComponent.default, {
                    mnpData: this.props.entry.mnpData,
                    processType: this.props.entry.processType,
                    monthlyPrices: this.props.entry.monthlyPrices,
                    tooltip: this.props.entry.tooltipMnpBenefitContent
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-checkout__item__remove u-hide u-small-block",
                    onClick: this.onRemoveClicked.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144"))), /*#__PURE__*/ _react.default.createElement("a", {
                    className: "opl-checkout__item__remove u-hide u-small-hide",
                    onClick: this.onRemoveClicked.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")));
            }
        }]);
        return MultiCartItemComponent;
    }(_MultiCartItemAttributeComponent.default);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeDeviceFromSimfreeBundle: function removeDeviceFromSimfreeBundle(bundleNo, entryNumber, lastOne) {
                return dispatch((0, _cart.removeDeviceFromSimfreeBundle)(bundleNo, entryNumber, lastOne));
            },
            showErrorMessage: function showErrorMessage(message) {
                return dispatch((0, _cart.showErrorMessage)(message));
            },
            lowerInstallmentsModalOpen: function lowerInstallmentsModalOpen(bundleNo) {
                return dispatch((0, _resources.lowerInstallmentsModalOpen)(bundleNo));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            entries: (0, _selectors.getCartEntries)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MultiCartItemComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MultiCartItemComponent.js.map