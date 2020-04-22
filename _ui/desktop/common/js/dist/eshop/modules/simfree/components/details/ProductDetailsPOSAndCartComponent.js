define(["exports", "react", "eshop/utils/DataLayerUtils", "eshop/components/OraCommonComponents", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "../../actions/app", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/constants", "eshop/utils/OnlineUtils", "../../../checkout/selectors", "../../../configurator/selectors/filters", "../../../cart/enum/ProcessType", "eshop/modules/simfree/components/modals/OraCashInvoiceLimitComponent", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent", "eshop/modules/magnum2/selectors", "./ProductDetailsDeliveryComponent"], function(_exports, _react, _DataLayerUtils, _OraCommonComponents, _reactRedux, _app, _selectors, _offers, _offers2, _filters, _app2, _OfferTypeEnum, _selectors2, _cart, _constants, _OnlineUtils, _selectors3, _filters2, _ProcessType, _OraCashInvoiceLimitComponent, _OraVasPacketPickerComponent, _selectors4, _ProductDetailsDeliveryComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _ProcessType = babelHelpers.interopRequireDefault(_ProcessType);
    _OraCashInvoiceLimitComponent = babelHelpers.interopRequireDefault(_OraCashInvoiceLimitComponent);
    _OraVasPacketPickerComponent = babelHelpers.interopRequireDefault(_OraVasPacketPickerComponent);
    _ProductDetailsDeliveryComponent = babelHelpers.interopRequireDefault(_ProductDetailsDeliveryComponent);

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

    var ProductDetailsPOSAndCartComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsPOSAndCartComponent, _React$Component);

        var _super = _createSuper(ProductDetailsPOSAndCartComponent);

        function ProductDetailsPOSAndCartComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsPOSAndCartComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsPOSAndCartComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.offerType === "SIMFREE") {
                    _DataLayerUtils.default.pushSimfreeProductImpression(this.findProductVariant(), this.props.deviceData.price, null, this.props.marketContext, this.props.channels.sales, {
                        loggedEmployee: this.props.assistedModeStateData,
                        assistedEmployee: this.props.assistedModeStateData
                    });
                }

                _DataLayerUtils.default.setSelectedDeviceData(this.findProductVariant()); // TODO: FIXME: remove after FUT tests finish.


                if (this.props.isFut == "false") {
                    this.props.getSogDocuments();
                }

                this.props.fetchPickupLastPos(this.props.deviceData.selectedVariant);
                OPL.UI.on(OPL.UI.EVENTS.modules.modal.closed, this.closeMapModal.bind(this));
            }
        }, {
            key: "findProductVariant",
            value: function findProductVariant() {
                for (var i = 0; i < this.props.deviceData.variantList.length; i++) {
                    if (this.props.deviceData.variantList[i].productId == this.props.selectedVariant || !this.props.selectedVariant && this.props.deviceData.variantList[i].productId == this.props.deviceData.selectedVariant) {
                        return this.props.deviceData.variantList[i];
                    }
                }
            }
        }, {
            key: "getStockLevel",
            value: function getStockLevel() {
                var productVariant = this.findProductVariant();
                var processType = _OfferTypeEnum.default.CONVERGENT === this.props.offerType ? this.props.magnumProcessType : this.props.processType;

                if (productVariant.stockLevelsPerProcess && productVariant.stockLevelsPerProcess[processType]) {
                    return productVariant.stockLevelsPerProcess[processType].stockLevel;
                }

                return this.findProductVariant().stockLevel;
            }
        }, {
            key: "saveMagnumStore",
            value: function saveMagnumStore() {
                var magnumStore = _objectSpread({}, this.props.magnumStore);

                magnumStore.possibleTransactions.salesChannel = this.props.channels.sales;

                _OnlineUtils.default.saveInSessionStorage(_constants.constants.magnumStore, JSON.stringify(magnumStore));
            }
        }, {
            key: "price",
            value: function price() {
                function getPriceFromProductPayments(product) {
                    var first = product.checkoutPrice.priceGross || 0;
                    var monthly = (product.monthlyPrices || []).map(function(mp) {
                        return (mp.monthTo - mp.monthFrom + 1) * mp.priceGross;
                    }).reduce(function(a, b) {
                        return a + b;
                    }, 0);
                    return first + monthly;
                }

                var price = 0;

                if (this.props.processType === _ProcessType.default.SALE_OF_GOODS) {
                    price = this.findProductVariant().devicePaymentsData.oneTimePayment.originalGrossPrice;
                } else {
                    price = this.props.selectedOffer.deviceData.deviceTotalPriceGross;
                }

                var currentDevicePrice = this.props.changedDevice && getPriceFromProductPayments(this.props.changedDevice) || 0;
                return price - currentDevicePrice;
            }
        }, {
            key: "handleAddToCart",
            value: function handleAddToCart(productId, bundleTemplateName, isMobileButton) {
                var _this = this;

                var addToCart = function addToCart() {
                    if (_this.props.processType === _ProcessType.default.SALE_OF_GOODS) {
                        _this.handleSimfreeAddToCart(productId, bundleTemplateName);
                    } else if ([_OfferTypeEnum.default.DATA, _OfferTypeEnum.default.VOICE, _OfferTypeEnum.default.VOICE_LDF, _OfferTypeEnum.default.DATA_LDF, _OfferTypeEnum.default.SIMFREE_INST].indexOf(_this.props.offerType) > -1) {
                        if (!!_this.props.addTerminalToOfferBundleNo) {
                            var productsToRemove = [_this.props.productCodeToRemove];
                            var productsToAdd = [_this.props.selectedVariant];
                            var cartBundle = _this.props.addTerminalToOfferBundleNo;
                            var bundle = _this.props.selectedOfferId;

                            _this.props.addTerminalToOfferToCart(bundle, null, cartBundle, productsToRemove, productsToAdd);
                        } else {
                            _this.props.selectOfferWithDevice(_this.props.selectedOfferId, _this.props.selectedOfferPosition, _this.findProductVariant().productId);
                        }
                    } else if (_OfferTypeEnum.default.CONVERGENT === _this.props.offerType) {
                        _this.saveMagnumStore();

                        if (!!_this.props.addTerminalToOfferBundleNo) {
                            var _productsToRemove = [_this.props.productCodeToRemove];
                            var _productsToAdd = [_this.props.selectedVariant];
                            var _cartBundle = _this.props.addTerminalToOfferBundleNo;
                            var _bundle = _this.props.updateMagnumBundleTemplate;

                            _this.props.addTerminalToOfferToCart(_bundle, null, _cartBundle, _productsToRemove, _productsToAdd);
                        } else {
                            _this.props.addMagnumToCart(productId);
                        }
                    }
                };

                if (this.props.cartIsFix && this.props.channels && this.props.channels.sales == "WWW") {
                    this.props.setErrorCode("fixincart");
                    return;
                }

                if (this.props.cashInvoiceLimit && this.props.cartInvoiceValue + this.price() > this.props.cashInvoiceLimit) {
                    _OraCashInvoiceLimitComponent.default.openPopup({
                        onClickConfirm: addToCart
                    });
                } else {
                    addToCart();
                }
            }
        }, {
            key: "openMapModal",
            value: function openMapModal(event) {
                event.preventDefault();
                document.getElementById('pickupPosModal').click();
            }
        }, {
            key: "closeMapModal",
            value: function closeMapModal() {
                this.props.fetchPickupLastPos(this.props.deviceData.selectedVariant);
            }
        }, {
            key: "_renderDeliveryInformation",
            value: function _renderDeliveryInformation() {
                var _this2 = this;

                var element = /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8  u-medium-padding-left-l u-medium-padding-right-l u-small-padding-all-l-xl"
                });

                if (this.getStockLevel() === 0) {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8   u-padding-left-l u-medium-padding-top-l u-medium-padding-left-l-xl u-medium-padding-right-l-xl u-small-padding-top-m u-small-padding-right-l-xl u-small-padding-left-l-xl"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--info g-icon--xs-s u-padding-right-m"
                    }), /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, "Model chwilowo niedost\u0119pny")));
                } else if (this.props.pickupPosEnabled) {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8  u-padding-left-l u-medium-padding-left-l-xl u-medium-padding-right-l-xl u-small-padding-top-m u-small-padding-left-l-xl u-small-padding-right-l-xl"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        hidden: this.isConvergentOffer()
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-font-bold u-inline-block u-medium-padding-top-l"
                    }, "Darmowy odbi\xF3r w salonie."), /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        className: "u-inline-block u-padding-left-l",
                        onClick: function onClick(event) {
                            return _this2.openMapModal(event);
                        }
                    }, this.props.lastPos.uniqueName ? 'Zmień' : 'Znajdź salon')), this.props.lastPos.uniqueName && /*#__PURE__*/ _react.default.createElement("p", null, this.props.lastPos.city, ", ", this.props.lastPos.address, " ", this.props.lastPos.address2));
                }

                return element;
            }
        }, {
            key: "handleSimfreeAddToCart",
            value: function handleSimfreeAddToCart(productId, bundleTemplateName) {
                var selectedVariant = this.findProductVariant();

                _DataLayerUtils.default.pushSimfreeAddToCart(selectedVariant, selectedVariant && selectedVariant.devicePaymentsData.oneTimePayment.price, this.props.marketContext, this.props.channels.sales, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });

                this.props.addToCartSimfree(productId, bundleTemplateName);
            }
        }, {
            key: "isConvergentOffer",
            value: function isConvergentOffer() {
                return this.props.offerType === "CONVERGENT";
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-l u-small-no-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 u-large-hide u-padding u-padding-right-l-xl u-padding-left-l-xl u-small-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                    disabled: this.props.isDisableAddToCartButton || this.getStockLevel() === 0,
                    onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName, true)
                }, "Do koszyka")), this._renderDeliveryInformation(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-hide u-padding u-medium-hide u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                    disabled: this.props.isDisableAddToCartButton || this.getStockLevel() === 0,
                    onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName, false)
                }, "Do koszyka")), /*#__PURE__*/ _react.default.createElement(_OraVasPacketPickerComponent.default, null), /*#__PURE__*/ _react.default.createElement(_ProductDetailsDeliveryComponent.default, null));
            }
        }]);
        return ProductDetailsPOSAndCartComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps() {
        var productCodeByBundleNo = (0, _selectors2.getProductCodeByBundleNo)();
        var magnumBundleTemplate = (0, _selectors2.getMagnumBundleTemplate)();
        return function(state, ownProps) {
            return {
                productName: (0, _selectors.getProductName)(state),
                selectedVariant: (0, _selectors.getSelectedVariant)(state),
                selectedOfferId: (0, _offers.getSelectedOfferId)(state),
                selectedOffer: (0, _offers.getSelectedOffer)(state),
                offerType: (0, _filters.getSelectedOfferType)(state),
                processType: (0, _filters.getSelectedProcessTypeValue)(state),
                selectedOfferPosition: (0, _offers.getSelectedOfferPosition)(state),
                isDisableAddToCartButton: (0, _selectors.getStateAddToCartButton)(state),
                lastPos: (0, _selectors.getLastPos)(state),
                pickupPosEnabled: (0, _selectors.isPickupPosEnabled)(state),
                addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
                productCodeToRemove: productCodeByBundleNo(state, ownProps.addTerminalToOfferBundleNo),
                magnumStore: state.magnum,
                updateMagnumBundleTemplate: magnumBundleTemplate(state, ownProps.addTerminalToOfferBundleNo),
                assistModeStateData: (0, _selectors3.getAssistModeStateData)(state),
                marketContext: (0, _filters2.getMarketContext)(state),
                cashInvoiceLimit: (0, _selectors.getCashInvoiceLimit)(state),
                cartInvoiceValue: (0, _selectors.getCartInvoiceValue)(state),
                changedDevice: (0, _selectors2.getChangedDevice)(state),
                magnumProcessType: (0, _selectors4.getMagnumTerminalProcess)(state)
            };
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            addToCartSimfree: function addToCartSimfree(productCode, bundleTemplateName, redirectUrl) {
                return dispatch((0, _app.addToCart)(productCode, bundleTemplateName, redirectUrl));
            },
            selectOfferWithDevice: function selectOfferWithDevice(propositionId, position, productCode) {
                return dispatch((0, _offers2.selectOffer)(propositionId, position, productCode));
            },
            getSogDocuments: function getSogDocuments() {
                return dispatch((0, _app.getSimfreeDocuments)());
            },
            fetchPickupLastPos: function fetchPickupLastPos(productCode) {
                return dispatch((0, _app.fetchPickupLastPos)(productCode));
            },
            addMagnumToCart: function addMagnumToCart(productCode) {
                return dispatch((0, _app2.addMagnumToCart)(productCode));
            },
            addTerminalToOfferToCart: function addTerminalToOfferToCart(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateTerminalToOffer)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            },
            setErrorCode: function setErrorCode(errorCode) {
                return dispatch((0, _app.setErrorCode)(errorCode));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsPOSAndCartComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsPOSAndCartComponent.js.map