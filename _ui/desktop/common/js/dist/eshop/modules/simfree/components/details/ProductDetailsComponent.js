define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/gallery/ProductGalleryComponent", "eshop/modules/simfree/components/details/ProductDetailsNavigationComponent", "eshop/modules/simfree/components/details/ProductDetailsProductDescription", "eshop/modules/simfree/components/details/ProductDetailsProductSpecification", "eshop/modules/simfree/components/details/ProductRecomendation", "eshop/modules/simfree/components/details/ProductCartProductReviewComponent", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/components/list/ProductListHeaderComponent", "eshop/components/OraStockLevelStatusComponent", "./ProductDetailsProductPromotion", "../../../checkout/selectors", "../../../configurator/selectors/filters"], function(_exports, _react, _reactRedux, _app, _selectors, _OraCommonComponents, _ProductGalleryComponent, _ProductDetailsNavigationComponent, _ProductDetailsProductDescription, _ProductDetailsProductSpecification, _ProductRecomendation, _ProductCartProductReviewComponent, _DataLayerUtils, _ProductListHeaderComponent, _OraStockLevelStatusComponent, _ProductDetailsProductPromotion, _selectors2, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductGalleryComponent = babelHelpers.interopRequireDefault(_ProductGalleryComponent);
    _ProductDetailsNavigationComponent = babelHelpers.interopRequireDefault(_ProductDetailsNavigationComponent);
    _ProductDetailsProductDescription = babelHelpers.interopRequireDefault(_ProductDetailsProductDescription);
    _ProductDetailsProductSpecification = babelHelpers.interopRequireDefault(_ProductDetailsProductSpecification);
    _ProductRecomendation = babelHelpers.interopRequireDefault(_ProductRecomendation);
    _ProductCartProductReviewComponent = babelHelpers.interopRequireDefault(_ProductCartProductReviewComponent);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _ProductListHeaderComponent = babelHelpers.interopRequireDefault(_ProductListHeaderComponent);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
    _ProductDetailsProductPromotion = babelHelpers.interopRequireDefault(_ProductDetailsProductPromotion);

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

    var ProductDetailsView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsView, _React$Component);

        var _super = _createSuper(ProductDetailsView);

        function ProductDetailsView(props) {
            babelHelpers.classCallCheck(this, ProductDetailsView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setSelectedVariant({
                    productId: this.props.deviceData.selectedVariant
                });

                this._loadModules();

                _DataLayerUtils.default.pushPageCategoryDimension('TelefonyBezUmowy');

                _DataLayerUtils.default.pushSimfreeProductImpression(this.findProductVariant(), this.props.deviceData.price, null, this.props.marketContext, this.props.channels.sales, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });
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
            key: "handleSelectVariant",
            value: function handleSelectVariant(variant, color) {
                this.props.setSelectedVariant(variant, color);
                this.props.setChosenImageIndex(0);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-page"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "kss-layout-coloring kss-resolution-large"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-no-padding u-medium-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-xl u-spacing-xl u-small-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12  u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    "data-skiplinks": "Podstawowe informacje o produkcie",
                    className: "h1 u-medium-no-spacing",
                    tabIndex: "-1",
                    id: "skiplinks831"
                }, this.props.deviceData.name)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-small-no-spacing u-medium-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6  u-text-center u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l u-position-static"
                }, /*#__PURE__*/ _react.default.createElement(_ProductGalleryComponent.default, {
                    productVariant: this.findProductVariant(),
                    sticker: this.props.deviceData.sticker
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6 ",
                    id: "product-basic-information"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-12 l-col-12  u-small-hide u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "h1 u-spacing"
                }, this.props.deviceData.name)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-6 l-col-8  u-small-hide u-medium-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-rating"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        width: this.props.deviceData.percentageRating
                    },
                    className: "opl-rating-bar"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--star g-icon--s"
                }))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "small g-gray3-c u-padding-left-s u-inline-block"
                }, "(", this.props.deviceData.numberOfReviewsCustomers, ")"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-acc-hide"
                }, this.props.deviceData.numberOfReviewsCustomers, " opini")), /*#__PURE__*/ _react.default.createElement(_ProductListHeaderComponent.default, null), this._renderSeparator(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-12  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-display_table"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3  u-display_table-cell"
                }, "Kolor: ", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold"
                }, this.findProductVariant().colorDefinition[0].name)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9  u-display_table-cell"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-color-chooser"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Kolor telefonu"), this._renderColorChooserOptions()))))), this._renderSeparator(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "opl-box__price"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-box__header"
                }, this.findProductVariant().devicePaymentsData.oneTimePayment.price), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5"
                }, "z\u0142"))), this._renderSeparator(), this._renderDeliveryInformation(), this._renderMobileButton(), this._renderNonMobileButton()))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement(_ProductDetailsNavigationComponent.default, null), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-expander-product-details",
                    "data-js-module": 'common/modules/opl-expander',
                    role: 'tablist',
                    "aria-multiselectable": false
                }, /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductPromotion.default, {
                    promotion: this.props.deviceData.promotion
                }), /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductDescription.default, {
                    description: this.props.deviceData.description
                }), /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductSpecification.default, {
                    deviceData: this.props.deviceData
                }), /*#__PURE__*/ _react.default.createElement(_ProductRecomendation.default, {
                    products: this.props.recomendedProducts,
                    productId: this.props.deviceData.productId
                }), /*#__PURE__*/ _react.default.createElement(_ProductCartProductReviewComponent.default, {
                    deviceData: this.props.deviceData
                })))));
            }
        }, {
            key: "_renderColorChooserOptions",
            value: function _renderColorChooserOptions() {
                var _this = this;

                return this.props.deviceData.variantList.map(function(variant) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: "opl-color-chooser__item",
                        key: "color-chooser-" + variant.productId
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "radio",
                        name: "color_" + _this.props.deviceData.productId,
                        value: variant.productId,
                        checked: variant.productId == _this.findProductVariant().productId,
                        onChange: _this.handleSelectVariant.bind(_this, variant, variant.colorUrl)
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__color",
                        style: {
                            background: variant && variant.colorDefinition && variant.colorDefinition[0] && variant.colorDefinition[0].cssCode && variant.colorDefinition[0].cssCode.replace(/\'/g, "")
                        }
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__label"
                    }, variant && variant.colorUrl));
                }, this);
            }
        }, {
            key: "_renderSeparator",
            value: function _renderSeparator() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-padding-top-l"
                }));
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                OPL.UI.loadModules(document.getElementById("opl-expander-product-details"), [{
                    path: 'common/modules/opl-expander',
                    options: {
                        'scrollToSelected': true,
                        'hideOtherElements': true
                    },
                    conditions: 'media:{(max-width:767px)}'
                }]);
                OPL.UI.loadModules(document.getElementById("zoom-container-image"), [{
                    path: 'common/modules/opl-image-zoom',
                    conditions: 'media:{gt-medium}',
                    options: {
                        zoomWindowOffsetY: 70,
                        zIndex: 3,
                        zoomContainerAppendTo: '.opl-product-page',
                        zoomWindowOffsetXAlignContainer: '#product-basic-information',
                        zoomWindowWidthAlignContainer: '#product-basic-information'
                    }
                }]);
            }
        }, {
            key: "_renderDeliveryInformation",
            value: function _renderDeliveryInformation() {
                var element = null;

                if (!_OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus)) {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6 u-medium-padding-left-l u-medium-padding-right-l"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                        stockLevelStatus: this.findProductVariant().stockLevelStatus,
                        stockLevel: this.findProductVariant().stockLevel,
                        stockLevelDate: this.findProductVariant().stockLevelDate,
                        shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s u-padding-top-l"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--delivery2 g-icon--s u-padding-right-m"
                    }), /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, this.props.descriptions.deliveryLabel, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-padding-left-s u-font-bold"
                    }, "niedost\u0119pne"))));
                } else {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-medium-padding-left-l u-medium-padding-right-l"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, /*#__PURE__*/ _react.default.createElement(_OraStockLevelStatusComponent.default, {
                        stockLevelStatus: this.findProductVariant().stockLevelStatus,
                        stockLevel: this.findProductVariant().stockLevel,
                        stockLevelDate: this.findProductVariant().stockLevelDate,
                        shouldStockLevelBeVisible: this.findProductVariant().shouldStockLevelBeVisible
                    })), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-display_table u-w-auto u-padding-s"
                    }, /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell g-icon g-icon--boutique g-icon--s u-padding-right-l"
                    }), /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-display_table-cell"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-padding-right-s"
                    }, this.props.descriptions.deliveryLabel, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-padding-left-s"
                    }, this.props.descriptions.deliveryValue))));
                }

                return element;
            }
        }, {
            key: "_renderMobileButton",
            value: function _renderMobileButton() {
                var element = null;

                if (!_OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus)) {
                    //element = <div className="l-col l-col-small-12 u-large-hide u-medium-hide u-small-padding-all-l">
                    //    <a className="o-btn opl-btn opl-btn--medium u-w-100 o-modal__trigger"
                    //       href="#availability-modal"
                    //       data-js-module="core/modules/modal"
                    //       data-js-options={JSON.stringify({"modalClass": "o-modal o-modal--small u-padding-all-l"})}>
                    //        Poinformuj o dostępności
                    //    </a>
                    //    {this._renderAvailabilityModal()}
                    //</div>
                    element = "";
                } else {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 u-large-hide u-small-padding-all-l"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: !_OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus),
                        onClick: this.handleAddToCartMobileUX.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName)
                    }, "Do koszyka"));
                }

                return element;
            }
        }, {
            key: "_renderNonMobileButton",
            value: function _renderNonMobileButton() {
                var element = null;

                if (!_OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus)) {
                    //element = <div className="l-col l-col-small-12 l-col-medium-4 l-col-6 u-medium-padding-left-l u-medium-padding-right-l u-small-hide">
                    //    <a className="o-btn opl-btn opl-btn--medium u-w-100 o-modal__trigger"
                    //       href="#availability-modal"
                    //       data-js-module="core/modules/modal"
                    //       data-js-options={JSON.stringify({"modalClass": "o-modal o-modal--small u-padding-all-l"})}>
                    //        Poinformuj o dostępności
                    //    </a>
                    //    {this._renderAvailabilityModal()}
                    //</div>
                    element = "";
                } else {
                    element = /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4  u-medium-padding-left-l u-medium-hide u-small-hide"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                        type: "primary",
                        className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-w-100",
                        disabled: !_OraStockLevelStatusComponent.default.isAvailableInStock(this.findProductVariant().stockLevelStatus),
                        onClick: this.handleAddToCart.bind(this, this.findProductVariant().productId, this.props.deviceData.bundleTemplateName)
                    }, "Do koszyka"));
                }

                return element;
            }
        }, {
            key: "_renderAvailabilityModal",
            value: function _renderAvailabilityModal() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "availability-modal",
                    className: "u-hide--soft"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 u-spacing-xl"
                }, this.props.deviceData.name), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-availability-modal__picture"
                }, /*#__PURE__*/ _react.default.createElement("img", {
                    src: this.findProductVariant().imageUrl
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-box__unavailable-banner u-no-bg"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-font-small u-text-center"
                }, "Produkt chwilowo niedost\u0119pny"))), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-spacing-top-l u-spacing-l u-font-bold"
                }, "Podaj adres email, na kt\xF3ry powiadomimy Ci\u0119 o dost\u0119pno\u015Bci produktu"), /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    placeholder: "Adres email",
                    className: "opl-input--size-m u-spacing-l"
                }), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, "Wyra\u017Cam zgod\u0119 na przesy\u0142anie informacji handlowych \u015Brodkami komunikacji elektronicznej (sms, email)")), /*#__PURE__*/ _react.default.createElement("a", {
                    className: "o-btn opl-btn opl-btn--primary opl-btn--medium u-right u-padding-right-xxl u-padding-left-xxl u-spacing-l",
                    rel: "modal:close"
                }, "Wy\u015Blij"));
            }
        }, {
            key: "handleAddToCart",
            value: function handleAddToCart(productId, bundleTemplateName) {
                _DataLayerUtils.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.deviceData.price, this.props.marketContext, this.props.channels.sales, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });

                this.props.addToCart(productId, bundleTemplateName);
            }
        }, {
            key: "handleAddToCartMobileUX",
            value: function handleAddToCartMobileUX(productId, bundleTemplateName) {
                _DataLayerUtils.default.pushSimfreeAddToCart(this.findProductVariant(), this.props.deviceData.price, this.props.marketContext, this.props.channels.sales, {
                    loggedEmployee: this.props.assistedModeStateData,
                    assistedEmployee: this.props.assistedModeStateData
                });

                this.props.addToCart(productId, bundleTemplateName, this.props.multicartUrl);
            }
        }]);
        return ProductDetailsView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            productName: (0, _selectors.getProductName)(state),
            selectedVariant: (0, _selectors.getSelectedVariant)(state),
            imageUrl: (0, _selectors.getProductImageUrl)(state),
            assistModeStateData: (0, _selectors2.getAssistModeStateData)(state),
            marketContext: (0, _filters.getMarketContext)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
        return {
            setSelectedVariant: function setSelectedVariant(selectedVariantCode, colorCode) {
                return dispatch((0, _app.setSelectedVariant)(selectedVariantCode, colorCode, props.filterState));
            },
            addToCart: function addToCart(productCode, bundleTemplateName, redirectUrl) {
                return dispatch((0, _app.addToCart)(productCode, bundleTemplateName, redirectUrl));
            },
            setChosenImageIndex: function setChosenImageIndex(index) {
                return dispatch((0, _app.setChosenImageIndex)(index));
            }
        };
    };

    var ProductDetailsComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsView);
    var _default = ProductDetailsComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsComponent.js.map