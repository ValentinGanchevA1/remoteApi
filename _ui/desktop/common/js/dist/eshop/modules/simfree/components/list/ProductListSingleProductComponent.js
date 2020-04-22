define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/modules/configurator/actions/offers", "eshop/utils/DataLayerUtils", "eshop/utils/OnlineUtils", "eshop/components/OraStockLevelStatusComponent", "eshop/components/OraPriceSummaryComponent", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/cart", "eshop/modules/simfree/components/list/DevicePayments", "eshop/modules/configurator/constants", "eshop/modules/simfree/components/comparator/ComparatorCheckbox", "../../selectors", "../../../checkout/selectors", "../../../configurator/components/lp/offers/Sticker", "../../../cart/enum/ProcessType", "eshop/modules/configurator/selectors/metaData", "eshop/modules/simfree/components/modals/OraCashInvoiceLimitComponent"], function(_exports, _react, _reactRedux, _propTypes, _OraCommonComponents, _offers, _selectors, _filters, _app, _offers2, _DataLayerUtils, _OnlineUtils, _OraStockLevelStatusComponent, _OraPriceSummaryComponent, _OfferTypeEnum, _selectors2, _cart, _DevicePayments, _constants, _ComparatorCheckbox, _selectors3, _selectors4, _Sticker, _ProcessType, _metaData, _OraCashInvoiceLimitComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _OraPriceSummaryComponent = babelHelpers.interopRequireDefault(_OraPriceSummaryComponent);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _DevicePayments = babelHelpers.interopRequireDefault(_DevicePayments);
    _ComparatorCheckbox = babelHelpers.interopRequireDefault(_ComparatorCheckbox);
    _ProcessType = babelHelpers.interopRequireDefault(_ProcessType);
    _OraCashInvoiceLimitComponent = babelHelpers.interopRequireDefault(_OraCashInvoiceLimitComponent);

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

    var carouselId = 0;

    var ProductListSingleProductComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListSingleProductComponent, _React$Component);

        var _super = _createSuper(ProductListSingleProductComponent);

        function ProductListSingleProductComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListSingleProductComponent);
            _this = _super.call(this, props);
            _this.id = "react-carousel-" + carouselId++;
            _this.page = _this.props.marketContextPrefixUrl + (window.location.pathname.includes("/sklep") ? "/sklep" : "/akcesoria");
            _this._salesChannelIsPos = _this._salesChannelIsPos.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                isColorChosen: false
            };
            return _this;
        }

        babelHelpers.createClass(ProductListSingleProductComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this._loadModules();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                var _this2 = this;

                if (!!this.props.addTerminalToOfferBundleNo && nextProps.selectedVariant == null) {
                    var variant = this.props.product.variantList.find(function(v) {
                        return _this2.props.productCodeToRemove === v.productId;
                    });
                    variant && this.props.setSelectedVariantOnList.bind(this, variant, variant.colorDefinition && variant.colorDefinition[0].code, this.props.product.productId)();
                }
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                var _this3 = this;

                console.log("ProductListSingleProductComponent constr");

                if (this.props.skuSearchValue) {
                    console.log("ProductListSingleProductComponent his.props.skuSearchValue");
                    var variant = this.props.product.variantList.find(function(v) {
                        return _this3.props.skuSearchValue === v.skuNumber;
                    });

                    if (variant && (!this.props.selectedVariant || variant.skuNumber !== this.props.selectedVariant.skuNumber)) {
                        console.log("ProductListSingleProductComponent his.props.variant");
                        this.props.setSelectedVariantOnList(variant, variant.colorDefinition && variant.colorDefinition[0].code, this.props.product.productId);
                    }
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (this.props.product.variantList.length !== prevProps.product.variantList.length) {
                    $("#carousel_product_" + this.props.product.productId + " :button").remove();
                    OPL.UI.fire(OPL.UI.EVENTS.modules.carousel.reinit, "carousel_product_" + this.props.product.productId);
                }
            }
        }, {
            key: "findProductVariant",
            value: function findProductVariant() {
                for (var i = 0; i < this.props.product.variantList.length; i++) {
                    if (this.props.product.variantList[i].productId === this.props.selectedVariant || !this.props.selectedVariant && this.props.product.variantList[i].productId === this.props.product.selectedVariant) {
                        return this.props.product.variantList[i];
                    }
                }

                return this.props.product.variantList[0];
            }
        }, {
            key: "price",
            value: function price() {
                var _this4 = this;

                function priceFormProduct(product) {
                    return product.deviceTotalPriceGross || product.priceGross;
                }

                var productUnderChange = this.props.productCodeToRemove && this.props.products.filter(function(product) {
                    return _this4.props.productCodeToRemove == (product.selectedVariant || product.variantList[0].productId);
                })[0];
                return priceFormProduct(this.props.product) - (productUnderChange ? priceFormProduct(productUnderChange) : 0);
            }
        }, {
            key: "handleAddToCart",
            value: function handleAddToCart(productId) {
                _DataLayerUtils.default.pushSimfreeProductClick(this.findProductVariant(), this.props.product && this.props.product.price, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });

                _DataLayerUtils.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.product && this.props.product.price, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                }); //todo refactor


                this.props.addToCart(productId, "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS");
            }
        }, {
            key: "createProductUrl",
            value: function createProductUrl() {
                if (this.props.showCanonicalLink || !_OnlineUtils.default.isCanonicalLink() || this.state.isColorChosen || !this.props.product.canonicalLink) {
                    return this.getUrlParameters() + '&' + this.props.filtersUrl;
                } else {
                    return this.page + this.props.product.canonicalLink;
                }
            }
        }, {
            key: "createInstalmentProductUrl",
            value: function createInstalmentProductUrl() {
                return this.getUrlParameters() + '&offerType=SIMFREE_INST&processType=INSTALMENT_SALES_OF_GOODS';
            }
        }, {
            key: "getUrlParameters",
            value: function getUrlParameters() {
                var productVariant = this.findProductVariant();
                return this.page + productVariant.productUrl + '?chosenDevice=' + productVariant.productId + '&filterState=' + this.props.filterState + '&selectedCategory=' + this.props.selectedCategory + (this.props.isDuet ? "&isDuet=" + this.props.isDuet : "") + "&selectedPropositionId=" + this.props.selectedOffer;
            }
        }, {
            key: "priceWrappedAsProposition",
            value: function priceWrappedAsProposition() {
                if (this.props.product.inOffer) {
                    return {
                        deviceData: {
                            inOffer: this.props.product.inOffer
                        }
                    };
                }
            }
        }, {
            key: "saveMagnumStore",
            value: function saveMagnumStore() {
                var magnumStore = _objectSpread({}, this.props.magnumStore);

                magnumStore.possibleTransactions.salesChannel = this.props.salesChannel;

                _OnlineUtils.default.saveInSessionStorage(_constants.constants.magnumStore, JSON.stringify(magnumStore));
            }
        }, {
            key: "render",
            value: function render() {
                console.log('### this.props.product.productId = ', this.props.product.productId);
                console.log('### this.props.product.code = ', this.props.product.code);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-xsmall-6 l-col-small-4 l-col-medium-3 l-col-4 l-col-xlarge-4  u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.product.productId,
                    className: "l-row opl-product-box opl-product-box--bordered-small opl-product-box--bordered-medium u-small-no-shadow u-medium-no-shadow u-small-no-margin u-medium-no-margin u-padding-top-l u-padding-l"
                }, this._renderProductImageSection(), this._renderProductPriceSection(), this.props.salesChannel != 'WWW' && !this.props.isSalesOfGoodsPage && /*#__PURE__*/ _react.default.createElement(_OraPriceSummaryComponent.default, {
                    stockLevel: this.findProductVariant().stockLevel,
                    deviceTotalPrice: this.props.product.deviceTotalPrice,
                    deviceTotalPriceNet: this.props.product.deviceTotalPriceNet,
                    deviceTotalPriceGross: this.props.product.deviceTotalPriceGross,
                    basePrice: this.props.product.inOffer && this.props.product.inOffer.price.base,
                    proposition: this.props.selectedOfferObject,
                    shouldShowStock: !this._salesChannelIsPos(),
                    contractRole: this.props.contractRole,
                    key: this.props.product.productId,
                    shouldShowSum: _OfferTypeEnum.default.CONVERGENT !== this.props.offerType,
                    offerType: this.props.offerType
                }), this._renderAddToCartSection()));
            }
        }, {
            key: "_renderProductImageSection",
            value: function _renderProductImageSection() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  opl-product-box__section"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-1"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-display_table u-small-block u-medium-block u-no-margin"
                }, this._renderColorComponent(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-display_table-cell u-small-block u-medium-block u-margin-center"
                }, /*#__PURE__*/ _react.default.createElement(ProductImage, {
                    salesChannelIsPos: this._salesChannelIsPos(),
                    createProductUrl: this.createProductUrl(),
                    dataLayerOnClick: this._dataLayerOnClick.bind(this),
                    findProductVariant: this.findProductVariant(),
                    sticker: this.props.product.sticker !== null && (this.props.product.sticker.propositionItems && this.props.product.sticker.propositionItems.length === 0 || this.props.product.sticker.propositionItems.includes(this.props.product.bundleTemplateName)) ? this.props.product.sticker : null
                }))))));
            }
        }, {
            key: "_renderProductPriceTag",
            value: function _renderProductPriceTag(product) {
                return /*#__PURE__*/ _react.default.createElement(_DevicePayments.default, {
                    product: product,
                    marketIsB2B: this.props.marketIsB2B,
                    proposition: this.priceWrappedAsProposition(),
                    instalmentTooltipDescription: this.props.instalmentTooltipDescription,
                    productVariant: this.findProductVariant(),
                    instalmentUrl: this.createInstalmentProductUrl()
                });
            }
        }, {
            key: "_renderProductPriceSection",
            value: function _renderProductPriceSection() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  opl-product-box__section u-padding-left-l u-padding-right-l u-small-no-padding u-medium-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, _OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus) && !this._salesChannelIsPos() && /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                    stockLevelStatus: this.findProductVariant().stockLevelStatus,
                    stockLevel: this.findProductVariant().stockLevel,
                    stockLevelDate: this.findProductVariant().stockLevelDate,
                    shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-3"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: this.createProductUrl(),
                    className: "u-padding-top-l u-padding-l u-block u-text-decoration-none",
                    onClick: this._dataLayerOnClick.bind(this)
                }, this.findProductVariant().name))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-4"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, this._renderProductPriceTag(this.props.product))));
            }
        }, {
            key: "_renderAddToCartSection",
            value: function _renderAddToCartSection() {
                var _this5 = this;

                var nonActive = this.findProductVariant().stockLevel === 0;

                var addToCartClick = function addToCartClick() {
                    if (nonActive && !_this5._salesChannelIsPos()) {
                        return;
                    }

                    if (_this5.props.cartIsFix && _this5.props.salesChannel === "WWW") {
                        _this5.props.setErrorCode("fixincart");

                        return;
                    }

                    if (_this5.props.selectedFilters.processType === _ProcessType.default.SALE_OF_GOODS) {
                        _this5.handleAddToCart(_this5.findProductVariant().productId, _this5.props.selectedOffer);
                    } else if ([_OfferTypeEnum.default.DATA, _OfferTypeEnum.default.VOICE, _OfferTypeEnum.default.VOICE_LDF, _OfferTypeEnum.default.DATA_LDF, _OfferTypeEnum.default.SIMFREE_INST].indexOf(_this5.props.offerType) > -1) {
                        if (!!_this5.props.addTerminalToOfferBundleNo) {
                            var productsToRemove = [_this5.props.productCodeToRemove];
                            var productsToAdd = [_this5.props.product.selectedVariant || _this5.props.product.variantList[0].productId];
                            var cartBundle = _this5.props.addTerminalToOfferBundleNo;
                            var bundle = _this5.props.selectedOffer; //this.props.product.bundleTemplateName

                            var offer = _this5.props.selectedOfferObject.rateplanId;

                            _this5.props.addTerminalToOfferToCart(bundle, offer, cartBundle, productsToRemove, productsToAdd);
                        } else {
                            _this5.props.selectOfferWithDevice(_this5.findProductVariant().productId, _this5.props.selectedOffer, _this5.props.position);
                        }
                    } else if (_OfferTypeEnum.default.CONVERGENT === _this5.props.offerType) {
                        _this5.saveMagnumStore();

                        if (!!_this5.props.addTerminalToOfferBundleNo) {
                            var _productsToRemove = [_this5.props.productCodeToRemove];
                            var _productsToAdd = [_this5.props.product.selectedVariant || _this5.props.product.variantList[0].productId];
                            var _cartBundle = _this5.props.addTerminalToOfferBundleNo;
                            var _bundle = _this5.props.updateMagnumBundleTemplate;
                            var _offer = _this5.props.updateMagnumOfferId;

                            _this5.props.addTerminalToOfferToCart(_bundle, _offer, _cartBundle, _productsToRemove, _productsToAdd);
                        } else {
                            _this5.props.addMagnumToCart(_this5.findProductVariant().productId);
                        }
                    }
                };

                var addToCartClickCheckPrice = function addToCartClickCheckPrice() {
                    if (_this5.props.cashInvoiceLimit && _this5.props.cartInvoiceValue + _this5.price() > _this5.props.cashInvoiceLimit) {
                        _OraCashInvoiceLimitComponent.default.openPopup({
                            onClickConfirm: addToCartClick
                        });
                    } else {
                        addToCartClick();
                    }
                };

                var isCurrentDevice = !!this.props.addTerminalToOfferBundleNo && this.props.productCodeToRemove == (this.props.product.selectedVariant || this.props.product.variantList[0].productId);
                var isDisabledClass = nonActive && !this._salesChannelIsPos() || this.props.isDisableAddToCartButton ? "opl-btn-disabled" : "";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-5"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table opl-product-box__section u-padding-right-l u-padding-top u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table-cell"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorCheckbox.default, {
                    product: this.props.product
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table   opl-product-box__section u-padding-left-l u-padding-right-l u-padding-top u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table-cell"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorCheckbox.default, {
                    product: this.props.product
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-display_table-cell"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--secondary opl-btn--small " + isDisabledClass,
                    disabled: !!isCurrentDevice,
                    onClick: addToCartClickCheckPrice
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), isCurrentDevice ? 'Wybrano' : 'Do koszyka'))))));
            }
        }, {
            key: "_renderColorComponent",
            value: function _renderColorComponent() {
                var _this6 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-3 l-col-3  u-padding-left-s u-padding-right-s u-display_table-cell u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": 'common/modules/opl-carousel',
                    className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows opl-color-chooser u-w-100",
                    id: "carousel_product_" + this.props.product.productId,
                    ref: function ref(_ref) {
                        return _this6.colorCarousel = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Kolor telefonu"), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "slick-list"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "slick-track"
                }, this._renderColorChooser())))));
            }
        }, {
            key: "_renderColorChooser",
            value: function _renderColorChooser() {
                var _this7 = this;

                return this.props.product.variantList.map(function(variant, index) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: "u-w-100 opl-color-chooser__item opl-wiking-gallery-navigation--item u-padding-top u-padding",
                        key: "color_" + index
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "radio",
                        name: "color_" + _this7.props.product.productId,
                        value: variant.productId,
                        checked: variant.productId == _this7.findProductVariant().productId,
                        onChange: function onChange() {
                            return _this7._onColorChange(variant);
                        }
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__color opl-color-chooser__color--magnum u-margin-center",
                        title: variant.colorDefinition[0].name + "" + (variant.colorDefinition[1] ? "/" + variant.colorDefinition[1].name : ""),
                        style: {
                            background: variant && variant.colorDefinition && variant.colorDefinition[0] && variant.colorDefinition[0].cssCode && variant.colorDefinition[0].cssCode.replace(/\ '/g, "")
                        }
                    }, variant && variant.colorDefinition && variant.colorDefinition[1] && variant.colorDefinition[1].cssCode && /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__two-color",
                        style: {
                            background: variant.colorDefinition[1].cssCode.replace(/\ '/g, "")
                        }
                    })), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__label"
                    }));
                }, this);
            }
        }, {
            key: "_onColorChange",
            value: function _onColorChange(variant) {
                this.setState({
                    isColorChosen: true
                });
                this.props.setSelectedVariantOnList(variant, variant.colorDefinition && variant.colorDefinition[0].code, this.props.product.productId);
            }
        }, {
            key: "_salesChannelIsPos",
            value: function _salesChannelIsPos() {
                return this.props.salesChannel === 'POS' || this.props.salesChannel === 'AKA';
            }
        }, {
            key: "_dataLayerOnClick",
            value: function _dataLayerOnClick() {
                this.saveMagnumStore();

                _DataLayerUtils.default.pushDeviceDetailsEvent(this.findProductVariant(), this.props.product, this.props.selectedOfferObject, this.props.selectedFilters, null, this.props.marketIsB2B ? "B2B" : "B2C", this.props.salesChannel, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                OPL.UI.loadModules(this.colorCarousel, [{
                    path: 'common/modules/opl-carousel',
                    options: {
                        autoplay: false,
                        arrows: true,
                        slide: '.opl-wiking-gallery-navigation--item',
                        vertical: true,
                        verticalSwiping: true,
                        focusOnSelect: true
                    }
                }]);
            }
        }]);
        return ProductListSingleProductComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps() {
        var productCodeByBundleNo = (0, _selectors2.getProductCodeByBundleNo)();
        var magnumBundleTemplate = (0, _selectors2.getMagnumBundleTemplate)();
        var magnumOfferId = (0, _selectors2.getMagnumOfferId)();
        return function(state, ownProps) {
            return {
                clientContext: (0, _filters.getClientContext)(state),
                selectedVariant: ownProps.product.selectedVariant,
                offerType: (0, _filters.getSelectedOfferType)(state),
                selectedOffer: (0, _offers.getSelectedOfferId)(state),
                selectedOfferObject: (0, _offers.getSelectedOffer)(state),
                selectedFilters: (0, _filters.getSelectedFilters)(state),
                isDisableAddToCartButton: (0, _selectors.getStateAddToCartButton)(state),
                filtersUrl: (0, _filters.getFiltersUrl)(state),
                isSalesOfGoodsPage: (0, _selectors.getIsSalesOfGoodsPage)(state),
                addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
                productCodeToRemove: productCodeByBundleNo(state, ownProps.addTerminalToOfferBundleNo),
                marketIsB2B: (0, _filters.getMarketContext)(state) === "B2B",
                showNet: (0, _selectors2.getPriceIsNet)(state),
                skuSearchValue: (0, _selectors.getSearchValue)(state),
                magnumStore: state.magnum,
                updateMagnumBundleTemplate: magnumBundleTemplate(state, ownProps.addTerminalToOfferBundleNo),
                updateMagnumOfferId: magnumOfferId(state, ownProps.addTerminalToOfferBundleNo),
                selectedCategory: (0, _selectors3.getSelectedCategory)(state),
                assistModeStateData: (0, _selectors4.getAssistModeStateData)(state),
                marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state),
                cashInvoiceLimit: (0, _selectors.getCashInvoiceLimit)(state),
                cartInvoiceValue: (0, _selectors.getCartInvoiceValue)(state),
                isDuet: (0, _selectors3.isDuet)(state),
                showCanonicalLink: (0, _selectors3.showCanonicalLink)(state)
            };
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSelectedVariantOnList: function setSelectedVariantOnList(selectedVariantCode, colorCode, productCode) {
                return dispatch((0, _app.setSelectedVariantOnList)(selectedVariantCode, colorCode, productCode));
            },
            addToCart: function addToCart(productCode, bundleTemplateName) {
                return dispatch((0, _app.addToCart)(productCode, bundleTemplateName));
            },
            selectOfferWithDevice: function selectOfferWithDevice(productCode, bundleTemplateName, position) {
                return dispatch((0, _offers2.selectOffer)(bundleTemplateName, position, productCode));
            },
            addMagnumToCart: function addMagnumToCart(productCode) {
                return dispatch((0, _app.addMagnumToCart)(productCode));
            },
            addTerminalToOfferToCart: function addTerminalToOfferToCart(bundle, offer, cartBundle, productsToRemove, productsToAdd) {
                return dispatch((0, _cart.updateTerminalToOffer)(bundle, offer, cartBundle, productsToRemove, productsToAdd));
            },
            setErrorCode: function setErrorCode(errorCode) {
                return dispatch((0, _app.setErrorCode)(errorCode));
            }
        };
    };

    ProductListSingleProductComponent.propTypes = {
        salesChannel: _propTypes.default.string.isRequired
    };

    var ProductImage = function ProductImage(_ref2) {
        var salesChannelIsPos = _ref2.salesChannelIsPos,
            createProductUrl = _ref2.createProductUrl,
            dataLayerOnClick = _ref2.dataLayerOnClick,
            findProductVariant = _ref2.findProductVariant,
            _sticker = _ref2.sticker;

        if (salesChannelIsPos) {
            return /*#__PURE__*/ _react.default.createElement(ProductThumbnail, {
                href: createProductUrl,
                onClick: dataLayerOnClick,
                sticker: function sticker() {
                    return /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                        sticker: _sticker,
                        className: "u-position-absolute u-position-top u-overflow-visible"
                    });
                },
                product: findProductVariant
            });
        }

        return findProductVariant.stockLevel === 0 ? /*#__PURE__*/ _react.default.createElement(ProductThumbnail, {
            href: createProductUrl,
            onClick: dataLayerOnClick,
            sticker: function sticker() {
                return /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                    sticker: _sticker,
                    className: "u-position-absolute u-position-top u-overflow-visible"
                });
            },
            product: findProductVariant,
            unavailable: function unavailable() {
                return /*#__PURE__*/ _react.default.createElement(UnavailableProduct, null);
            }
        }) : /*#__PURE__*/ _react.default.createElement(ProductThumbnail, {
            href: createProductUrl,
            onClick: dataLayerOnClick,
            sticker: function sticker() {
                return /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
                    sticker: _sticker,
                    className: "u-position-absolute u-position-top u-overflow-visible"
                });
            },
            product: findProductVariant
        });
    };

    ProductImage.propTypes = {
        salesChannelIsPos: _propTypes.default.bool,
        createProductUrl: _propTypes.default.string.isRequired,
        dataLayerOnClick: _propTypes.default.func.isRequired,
        findProductVariant: _propTypes.default.string.isRequired,
        sticker: _propTypes.default.object,
        propositionItems: _propTypes.default.arrayOf(_propTypes.default.string),
        bundleTemplateName: _propTypes.default.string
    };

    var ProductThumbnail = function ProductThumbnail(_ref3) {
        var href = _ref3.href,
            onClick = _ref3.onClick,
            sticker = _ref3.sticker,
            product = _ref3.product,
            unavailable = _ref3.unavailable;
        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-product-box__image-wrapper u-text-center u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: href,
            className: "opl-product-box__image-content ",
            onClick: onClick
        }, sticker(), /*#__PURE__*/ _react.default.createElement("img", {
            src: product.imageUrl,
            className: "cvx opl-product-box__image",
            alt: "Zobacz szczegóły " + product.name,
            title: product.name
        })), unavailable()));
    };

    ProductThumbnail.defaultProps = {
        sticker: function sticker() {},
        unavailable: function unavailable() {}
    };

    var UnavailableProduct = function UnavailableProduct() {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-product-box__unavailable-banner"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold u-font-small u-text-center"
        }, "Produkt chwilowo niedost\u0119pny"));
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListSingleProductComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductListSingleProductComponent.js.map