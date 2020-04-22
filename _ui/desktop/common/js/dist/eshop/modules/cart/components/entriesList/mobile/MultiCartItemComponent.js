define(["exports", "react", "react-redux", "./MultiCartItemHeaderComponent", "./MultiCartItemErrorComponent", "./MultiCartItemHeaderMobileComponent", "./MultiCartItemDetailComponent", "./MultiCartItemDetailMobileComponent", "./MultiCartItemMainPriceMobileComponent", "./MultiCartItemAttributeComponent", "../shared/MultiCartRemovePopup", "eshop/flux/utils/OraModalService", "eshop/modules/configurator/components/stateless/Discount", "eshop/components/OraStockLevelStatusComponent", "eshop/modules/cart/actions/cart", "eshop/modules/core/components/ui/RWDUtils", "./ShowVoucherComponent", "./ShowVoucherMobileComponent", "eshop/utils/OnlineUtils", "../VoucherSubType"], function(_exports, _react, _reactRedux, _MultiCartItemHeaderComponent, _MultiCartItemErrorComponent, _MultiCartItemHeaderMobileComponent, _MultiCartItemDetailComponent, _MultiCartItemDetailMobileComponent, _MultiCartItemMainPriceMobileComponent, _MultiCartItemAttributeComponent, _MultiCartRemovePopup, _OraModalService, _Discount, _OraStockLevelStatusComponent, _cart, _RWDUtils, _ShowVoucherComponent, _ShowVoucherMobileComponent, _OnlineUtils, _VoucherSubType) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MultiCartItemHeaderComponent = babelHelpers.interopRequireDefault(_MultiCartItemHeaderComponent);
    _MultiCartItemErrorComponent = babelHelpers.interopRequireDefault(_MultiCartItemErrorComponent);
    _MultiCartItemHeaderMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemHeaderMobileComponent);
    _MultiCartItemDetailComponent = babelHelpers.interopRequireDefault(_MultiCartItemDetailComponent);
    _MultiCartItemDetailMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemDetailMobileComponent);
    _MultiCartItemMainPriceMobileComponent = babelHelpers.interopRequireDefault(_MultiCartItemMainPriceMobileComponent);
    _MultiCartItemAttributeComponent = babelHelpers.interopRequireDefault(_MultiCartItemAttributeComponent);
    _MultiCartRemovePopup = babelHelpers.interopRequireDefault(_MultiCartRemovePopup);
    _OraModalService = babelHelpers.interopRequireDefault(_OraModalService);
    _Discount = babelHelpers.interopRequireDefault(_Discount);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _ShowVoucherComponent = babelHelpers.interopRequireDefault(_ShowVoucherComponent);
    _ShowVoucherMobileComponent = babelHelpers.interopRequireDefault(_ShowVoucherMobileComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _VoucherSubType = babelHelpers.interopRequireDefault(_VoucherSubType);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var MultiCartItemView = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemView, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemView);

        function MultiCartItemView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MultiCartItemView);
            _this = _super.call(this, props);
            _this.name = _this.props.entry.bundleNo + "_" + _this.props.entry.entryNo;
            return _this;
        }

        babelHelpers.createClass(MultiCartItemView, [{
            key: "openTerminalRemovePopup",
            value: function openTerminalRemovePopup(entry) {
                _OraModalService.default.open("remove-terminal-from-cart-bundle-modal-" + entry.entryNo);
            }
        }, {
            key: "registerTerminalRemovePopup",
            value: function registerTerminalRemovePopup(entry) {
                var _this2 = this;

                _OraModalService.default.add(function(data) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartRemovePopup.default, babelHelpers.extends({}, _this2.props.removeModalTexts, {
                        id: "remove-terminal-from-cart-bundle-modal-" + entry.entryNo,
                        onClickRemove: _this2.props.removeTerminalFromCartBundle.bind(_this2, null, entry.entryNo),
                        textRepresentation: entry.name
                    }));
                });
            }
        }, {
            key: "getPricePresentationMode",
            value: function getPricePresentationMode(type) {
                var stepMode = ["TERMINAL", "VAS"];
                var discountMode = ["SIM", "DATA", "GADGET"];

                if (stepMode.indexOf(type) !== -1) {
                    return "HIGHEST_MONTHLY_PRICE";
                } else if (discountMode.indexOf(type) !== -1) {
                    return "DISCOUNTED_PRICE";
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
            key: "getColorName",
            value: function getColorName(entry) {
                console.log("COLOR NAME:");
                console.log(entry);

                if (entry.setElements && entry.setElements.length) {
                    var colorName = "(";
                    entry.setElements.forEach(function(element) {
                        return colorName = colorName + element.color + ",";
                    }); //colorName=colorName[colorName.length-1]=')';

                    console.log(colorName);
                    return " " + colorName.replace(/,$/, ")");
                }

                var colorDefinition = entry.colorDefinition ? " (" + entry.colorDefinition.name + ")" : "";
                return colorDefinition;
            }
        }, {
            key: "getEntryName",
            value: function getEntryName(type, entry) {
                switch (type) {
                    case "SIM":
                        return entry.planName;

                    case "TERMINAL":
                        return entry.name + (entry.productCode.indexOf(MultiCartItemView.couponDistinctiveCodePart) === -1 ? this.getColorName(entry) : "");

                    case "VAS":
                        return entry.name;

                    default:
                        return entry.planName || entry.name;
                }
            }
        }, {
            key: "getPricePresentation",
            value: function getPricePresentation(entry, type, monthlyPrices, discountedPrice, tooltipCmsContent, voucherNames) {
                console.warn("getPricePresentation************************************************************");
                console.warn(entry);
                var presentation = {
                        mobile: {},
                        desktop: {}
                    },
                    firstNotNullPrice = this.getFirstNotNullPrice(monthlyPrices),
                    highestMonthlyPrice;
                var isBonus = !!discountedPrice && discountedPrice.price > firstNotNullPrice.price;
                var voucherInfo = "noVoucher";
                var basicTooltipContent = isBonus && !!this.props.tooltipValues && this.props.tooltipValues["convergent"] || !!this.props.tooltipValues && this.props.tooltipValues["notConvergent"];
                var additionalInfo = [];

                if (_OnlineUtils.default.isMnp(this.props.entry.processType) && !!this.props.entry.mnpDescription) {
                    additionalInfo.push(_OnlineUtils.default.stripStringFromHTML(this.props.entry.mnpDescription));
                }

                if (!_OnlineUtils.default.isAssignment(this.props.entry.processType)) {
                    additionalInfo.push(basicTooltipContent);
                } else {
                    firstNotNullPrice = monthlyPrices && monthlyPrices.length > 0 ? monthlyPrices[0] : firstNotNullPrice;
                }

                var voucherName = voucherNames && voucherNames[_VoucherSubType.default.SUBSCRIPTION];

                if (voucherName && !!this.props.tooltipValues) {
                    additionalInfo.push(this.props.tooltipValues["voucherDiscountInfo"]);
                    voucherInfo = "voucherPresent";
                }

                var monthlyPriceVoucherEligible = voucherName && monthlyPrices.filter(function(priceTier) {
                    return priceTier.netPriceWithoutVouchers !== priceTier.netPrice;
                }).length > 0;

                if (["SIM", "DATA"].indexOf(type) !== -1) {
                    presentation = {
                        main: firstNotNullPrice,
                        crossedOut: isBonus && /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(discountedPrice.price).join(","), "\xA0", discountedPrice.currency),
                        subtitle: null,
                        tooltip: {
                            id: entry.entryType + "_" + entry.bundleType + "_" + entry.bundleNo + "_" + entry.entryNo + "_" + voucherInfo,
                            additionalInfo: additionalInfo,
                            monthlyPayments: isBonus ? entry.monthlyOldPrices : entry.monthlyPrices,
                            monthlyPaymentsWithBonuses: isBonus ? entry.monthlyPrices : null,
                            isBonus: isBonus,
                            baseId: "cart_" + entry.bundleNo + "_" + entry.entryNo
                        }
                    };
                } else if (type === "TERMINAL" && (monthlyPriceVoucherEligible || monthlyPrices.length >= 1)) {
                    var isDiscount = monthlyPrices.filter(function(priceTier) {
                        return priceTier.netPriceWithoutVouchers > priceTier.netPrice;
                    }).length > 0;
                    presentation = {
                        main: firstNotNullPrice,
                        tooltip: {
                            id: "terminalTooltip" + "_" + entry.entryNo,
                            additionalInfo: monthlyPriceVoucherEligible && ["opłata miesięczna uwzględnia rabat wynikający z użytego kuponu"],
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
                            monthlyPaymentsWithBonuses: entry.monthlyPrices,
                            isBonus: !!monthlyPriceVoucherEligible || isDiscount
                        }
                    };

                    if (monthlyPriceVoucherEligible || isDiscount) {
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
                            subtitle: /*#__PURE__*/ _react.default.createElement("span", null, " ", this.getPriceSpelling(monthlyPrices[0]), ",", /*#__PURE__*/ _react.default.createElement("br", null), "potem ", this.getPartsOfPrice(monthlyPrices[1].price).join(","), "\xA0", monthlyPrices[1].currency)
                        };
                    } else if (monthlyPrices && monthlyPrices.length > 0) {
                        highestMonthlyPrice = this.getHighestMonthlyPrice(monthlyPrices);
                        presentation = {
                            main: firstNotNullPrice,
                            tooltip: this.getPricesTooltip(monthlyPrices),
                            crossedOut: /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(highestMonthlyPrice.price).join(","), "&nbsp", highestMonthlyPrice.currency),
                            subtitle: null
                        };
                    }
                }

                if (_OnlineUtils.default.isMnpApplication(this.props.entry.processType)) {
                    presentation = {
                        main: false,
                        tooltip: null,
                        crossedOut: null,
                        subtitle: null
                    };
                }

                return presentation;
            }
        }, {
            key: "prepareOneTimePrice",
            value: function prepareOneTimePrice(entry, type, startPricePropertyName) {
                var oneTimePriceVoucherEligible = type === "TERMINAL" && entry[startPricePropertyName] && entry[startPricePropertyName].netPriceWithoutVouchers !== entry[startPricePropertyName].netPrice;
                console.warn("**oneTimePriceVoucher**");
                console.warn(oneTimePriceVoucherEligible);
                var crossedOut = _OnlineUtils.default.formatPrice(entry[startPricePropertyName].priceWithoutVouchers) + " " + entry[startPricePropertyName].currency;
                console.warn(crossedOut);
                if (oneTimePriceVoucherEligible && (entry.voucherNames || startPricePropertyName === "checkoutPrice")) return _objectSpread({}, entry[startPricePropertyName], {
                    crossedOut: crossedOut
                });

                if (["SIM", "DATA"].indexOf(type) !== -1 && (startPricePropertyName === "firstBillPrice" || _OnlineUtils.default.isAssignment(this.props.entry.processType))) {
                    return this.fillOneTimeCrossedOutPrice(entry);
                }

                return entry[startPricePropertyName];
            }
        }, {
            key: "fillOneTimeCrossedOutPrice",
            value: function fillOneTimeCrossedOutPrice(entry) {
                if (entry.oneTimeOldPrice && entry.firstBillPrice && entry.firstBillPrice.price < entry.oneTimeOldPrice.price) {
                    return _objectSpread({}, entry.firstBillPrice, {
                        crossedOut: _OnlineUtils.default.formatPrice(entry.oneTimeOldPrice.price) + " " + entry.oneTimeOldPrice.currency
                    });
                } else {
                    return entry.firstBillPrice;
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.type === "TERMINAL") {
                    this.registerTerminalRemovePopup(this.props.entry);
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var monthlyPricePresentation = this.getPricePresentation(this.props.entry, this.props.type, this.props.entry.monthlyPrices, this.props.entry.monthlyOldPrice, this.props.entry.tooltipCmsContent, this.props.entry.voucherNames);
                var tableClass = this.props.topBorder ? "u-table-fixed u-border-top" : "u-table-fixed";
                var instalmentLength = this.props.entry.monthlyPrices && this.props.entry.monthlyPrices.length > 0 && this.props.entry.monthlyPrices[this.props.entry.monthlyPrices.length - 1].monthTo;
                var instalmentLengthDescription = instalmentLength && this.props.type === "TERMINAL" && "Liczba rat za urządzenie: " + instalmentLength;
                console.log("############MultiCartItemView ##############");
                console.log(this.props);
                console.log("############ MultiCartItemView##############");
                var oneTimePrice = this.props.showStartPriceAsActivation || _OnlineUtils.default.isMnpApplication(this.props.entry.processType) ? false : this.prepareOneTimePrice(this.props.entry, this.props.type, this.props.startPricePropertyName);
                var vTypes = [_VoucherSubType.default.SUBSCRIPTION, _VoucherSubType.default.INSTALLMENT_ONE_TIME];
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
                    mobile: false,
                    key: "desktopView" + this.props.type + this.props.entry.entryNo + this.props.entry.bundleNo
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: tableClass
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemHeaderComponent.default, {
                    key: "desktopViewItemHeader",
                    title: this.getEntryName(this.props.type, this.props.entry),
                    monthlyPricePresentation: monthlyPricePresentation,
                    oneTimePrice: oneTimePrice,
                    description: this.props.entry.description,
                    msisdn: this.props.entry.msisdn,
                    processType: this.props.entry.processType,
                    mnpData: this.props.entry.mnpData,
                    imageUrl: this.props.entry.imageUrl,
                    type: this.props.type,
                    onMsisdnChangeClicked: this.props.onMsisdnChangeClicked,
                    lowerInstallmentsClicked: this.props.lowerInstallmentsClicked,
                    descriptions: this.props.descriptions,
                    onChangeClicked: this.props.editable && this.props.onChangeClicked,
                    onRemoveClicked: this.props.editable && this.props.onRemoveClicked,
                    onDetailsClicked: this.props.editable && this.props.onDetailsClicked,
                    icon: this.props.icon ? this.props.icon : this.props.entry.thumbnailIcon,
                    simCard: this.props.entry.simCard,
                    msisdnVerificationData: this.props.entry.msisdnVerificationData,
                    loyaltyLengthDescription: _OnlineUtils.default.isMnpApplication(this.props.entry.processType) ? null : this.props.entry.loyaltyLengthDescription,
                    instalmentLengthDescription: instalmentLengthDescription,
                    stockLevelStatus: this.props.entry.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                    editable: this.props.editable,
                    processName: this.props.processName,
                    vases: this.props.entry.vases,
                    bundleCode: this.props.entry.bundleCode,
                    changePackages: this.props.changePackages
                }), this.props.entry.rejectionReason && this.props.entry.rejectionReason.length > 0 && /*#__PURE__*/ _react.default.createElement(_MultiCartItemErrorComponent.default, {
                    rejectionReasons: this.props.entry.rejectionReason
                }), this.props.editable && this.props.entry.kdrDescription && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    hideBorder: true,
                    removeTopPadding: true,
                    priceless: true
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.kdrDescription,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-white1-c g-black1-bg"
                })), this.props.editable && this.props.entry.mnpDescription && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    hideBorder: true,
                    removeTopPadding: true,
                    priceless: true
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.mnpDescription,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg"
                })), this.props.entry.voucherNames && vTypes.some(function(v) {
                    return _this3.props.entry.voucherNames[v];
                }) && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    priceless: true,
                    hideBorder: true,
                    removeDownPadding: true,
                    removeTopPadding: true,
                    removeRightPadding: true
                }, vTypes.filter(function(vType) {
                    return _this3.props.entry.voucherNames[vType];
                }).map(function(vType) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        key: vType
                    }, /*#__PURE__*/ _react.default.createElement(_ShowVoucherComponent.default, {
                        entry: _this3.props.entry,
                        voucherName: _this3.props.entry.voucherNames[vType],
                        voucherSubType: vType,
                        lowerInstallmentsVisible: !!_this3.props.lowerInstallmentsClicked && _this3.props.type === "TERMINAL"
                    }));
                })), this.props.showStartPriceAsActivation && this.props.entry[this.props.startPricePropertyName] && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    key: "desktopViewItemDetail",
                    title: this.props.entry.processType === "RETENTION" ? "Opłata za realizację oferty utrzymaniowej" : "Opłata aktywacyjna/instalacyjna",
                    oneTimePrice: this.props.startPricePropertyName === "firstBillPrice" || _OnlineUtils.default.isAssignment(this.props.entry.processType) ? this.fillOneTimeCrossedOutPrice(this.props.entry) : this.props.entry[this.props.startPricePropertyName],
                    captionClassName: "u-font-bold",
                    priceless: false
                }), this.props.entry.voucherNames && this.props.entry.voucherNames[_VoucherSubType.default.ACTIVATION] && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    key: "desktopViewItemDetailVoucher",
                    priceless: true,
                    hideBorder: true,
                    removeDownPadding: true,
                    removeTopPadding: true,
                    removeRightPadding: true
                }, /*#__PURE__*/ _react.default.createElement(_ShowVoucherComponent.default, {
                    entry: this.props.entry,
                    voucherName: this.props.entry.voucherNames[_VoucherSubType.default.ACTIVATION],
                    voucherSubType: _VoucherSubType.default.ACTIVATION
                })), this.props.editable && this.props.entry.orangeLoveDiscountDesc && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailComponent.default, {
                    key: "desktopViewItemDiscount",
                    priceless: true
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.orangeLoveDiscountDesc
                })))))), /*#__PURE__*/ _react.default.createElement(_RWDUtils.ResponsiveVisibility, {
                    desktop: false,
                    mobile: true,
                    key: "mobileView" + this.props.type + this.props.entry.entryNo + this.props.entry.bundleNo
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l" + (this.props.bottomBorder ? " u-small-border-bottom" : "")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l ".concat(_OraStockLevelStatusComponent.default.getStockCssClass(this.props.entry.stockLevelStatus))
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MultiCartItemMainPriceMobileComponent.default, {
                    price: monthlyPricePresentation.main,
                    tooltip: monthlyPricePresentation.tooltip
                })), monthlyPricePresentation.subtitle && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top u-font-small g-gray5-c"
                }, monthlyPricePresentation.subtitle), monthlyPricePresentation.crossedOut && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-s u-font-small g-gray5-c u-text-line-through"
                }, monthlyPricePresentation.crossedOut), this.props.startPricePropertyName && this.props.entry[this.props.startPricePropertyName] && !!parseFloat(this.props.entry[this.props.startPricePropertyName].price) && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    key: "mobileViewItemHeader",
                    title: "+ %1" + (["SIM", "DATA"].indexOf(this.props.type) !== -1 ? this.props.entry.processType === "RETENTION" ? "/za utrzymanie" : "/aktywacja" : " na start"),
                    price: this.prepareOneTimePrice(this.props.entry, this.props.type, this.props.startPricePropertyName),
                    className: "u-spacing-top-s u-font-small",
                    priceless: false
                })), this.props.entry.orangeLoveDiscountDesc && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    key: "mobileViewItemDetail",
                    className: "u-padding-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.orangeLoveDiscountDesc,
                    showOnMobile: true
                })), this.props.entry.kdrDescription && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    key: "mobileViewItemDetailKDR"
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.kdrDescription,
                    showOnMobile: true,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-white1-c g-black1-bg"
                })), this.props.entry.mnpDescription && /*#__PURE__*/ _react.default.createElement(_MultiCartItemDetailMobileComponent.default, {
                    key: "mobileViewItemDetailMNP"
                }, /*#__PURE__*/ _react.default.createElement(_Discount.default, {
                    value: this.props.entry.mnpDescription,
                    showOnMobile: true,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-margin"
                })), this.props.entry.voucherNames && Object.entries(this.props.entry.voucherNames).map(function(_ref) {
                    var _ref2 = babelHelpers.slicedToArray(_ref, 2),
                        voucherSubType = _ref2[0],
                        voucherName = _ref2[1];

                    return /*#__PURE__*/ _react.default.createElement(_ShowVoucherMobileComponent.default, {
                        key: voucherSubType,
                        entry: _this3.props.entry,
                        voucherSubType: voucherSubType,
                        lowerInstallmentsVisible: !!_this3.props.lowerInstallmentsClicked && _this3.props.type === "TERMINAL",
                        voucherName: voucherName
                    });
                }), /*#__PURE__*/ _react.default.createElement(_MultiCartItemHeaderMobileComponent.default, {
                    key: "mobileViewItemHeader",
                    title: this.getEntryName(this.props.type, this.props.entry),
                    description: this.props.entry.description,
                    msisdn: this.props.entry.msisdn,
                    imageUrl: this.props.entry.imageUrl,
                    type: this.props.type,
                    processType: this.props.entry.processType,
                    mnpData: this.props.entry.mnpData,
                    onMsisdnChangeClicked: this.props.onMsisdnChangeClicked,
                    lowerInstallmentsClicked: this.props.type === "TERMINAL" ? this.props.lowerInstallmentsClicked : undefined,
                    monthlyPricePresentation: monthlyPricePresentation,
                    descriptions: this.props.descriptions,
                    onChangeClicked: this.props.onChangeClicked,
                    onRemoveClicked: this.props.onRemoveClicked,
                    onDetailsClicked: this.props.onDetailsClicked,
                    simCard: this.props.entry.simCard,
                    msisdnVerificationData: this.props.entry.msisdnVerificationData,
                    loyaltyLengthDescription: this.props.entry.loyaltyLengthDescription,
                    instalmentLengthDescription: instalmentLengthDescription,
                    icon: this.props.icon ? this.props.icon : this.props.entry.thumbnailIcon,
                    stockLevelStatus: this.props.entry.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                    editable: this.props.editable,
                    changeAllowed: this.props.entry.bundleType !== "DATA" && this.props.entry.processType !== "MNP",
                    vases: this.props.entry.vases,
                    bundleCode: this.props.entry.bundleCode,
                    changePackages: this.props.changePackages
                }))), this.props.editable && /*#__PURE__*/ _react.default.createElement("a", {
                    className: "opl-checkout__item__remove u-hide u-small-block",
                    onClick: this.props.onRemoveClicked
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")));
            }
        }]);
        return MultiCartItemView;
    }(_MultiCartItemAttributeComponent.default);

    babelHelpers.defineProperty(MultiCartItemView, "couponDistinctiveCodePart", "DEV_KUPON");
    MultiCartItemView.defaultProps = {
        editable: true
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            removeTerminalFromCartBundle: function removeTerminalFromCartBundle(data, id) {
                return dispatch((0, _cart.removeTerminalFromCartBundle)(data, id));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(MultiCartItemView);

    _exports.default = _default;
});
//# sourceMappingURL=MultiCartItemComponent.js.map