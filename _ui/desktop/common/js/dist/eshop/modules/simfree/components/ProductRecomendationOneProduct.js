define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/components/OraCommonComponents"], function(_exports, _react, _reactRedux, _app, _OraCommonComponents) {
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

    var ProductRecomendationOneProductView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductRecomendationOneProductView, _React$Component);

        var _super = _createSuper(ProductRecomendationOneProductView);

        function ProductRecomendationOneProductView(props) {
            babelHelpers.classCallCheck(this, ProductRecomendationOneProductView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductRecomendationOneProductView, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                this._loadModules();
            }
        }, {
            key: "_renderColorComponent",
            value: function _renderColorComponent(phone) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows opl-color-chooser u-w-100"
                }, this._renderColorChooser(phone, this.props.products));
            }
        }, {
            key: "_renderColorChooser",
            value: function _renderColorChooser(phone, products) {
                var _this = this;

                return phone.variantList.map(function(variant, index) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: "opl-color-chooser__item opl-wiking__color-item u-block",
                        key: "colorChooser" + index
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "radio",
                        name: "rec_color_" + phone.productId,
                        value: variant.productId,
                        checked: variant.productId == _this.findProductVariant(phone).productId,
                        onClick: _this.props.setSelectedVariantOnRecommended.bind(_this, variant, variant.colorDefinition[0].code, phone.productId, _this.props.products)
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "opl-color-chooser__color opl-color-chooser__color--magnum u-margin-center",
                        style: {
                            background: variant && variant.colorDefinition && variant.colorDefinition[0] && variant.colorDefinition[0].cssCode && variant.colorDefinition[0].cssCode.replace(/\'/g, "")
                        }
                    }));
                }, this);
            }
        }, {
            key: "findProductVariant",
            value: function findProductVariant(product) {
                for (var i = 0; i < product.variantList.length; i++) {
                    if (product.variantList[i].productId == this.props.selectedVariant || !this.props.selectedVariant && product.variantList[i].productId == this.props.selectedVariant) {
                        return product.variantList[i];
                    }
                }

                return product.variantList[0];
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var phone = this.props.phone;
                var index = this.props.index;

                if (!phone.variantList || phone.variantList == null || phone.variantList.length == 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", null);
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-carousel__recomended-item u-spacing-all",
                    "data-slick-index": index,
                    "aria-hidden": "false"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: '/sklep/' + phone.manufacturerURL + '/' + phone.productURL + '/' + this.findProductVariant(phone).colorDefinition[0].name,
                    className: "opl-product-box u-small-no-shadow u-padding-all u-small-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-all-l u-small-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-12 l-col-12  opl-product-box__section"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-1"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-medium-3 l-col-3  u-padding-left-s u-padding-right-s u-small-hide u-medium-hide"
                }, this._renderColorComponent(phone)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-small-block u-medium-block u-margin-center"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-product-box__image-wrapper u-text-center"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-product-box__image-content"
                }, /*#__PURE__*/ _react.default.createElement("img", {
                    src: this.findProductVariant(phone).imageUrl,
                    alt: "phone",
                    className: "cvx opl-product-box__image"
                })))))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-12 l-col-12  opl-product-box__section"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height js-layout-fixer-group-2"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-padding-top-l"
                }, phone.name), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-brand1-c u-font-bold"
                }, this.findProductVariant(phone).devicePaymentsData.oneTimePayment.price, " z\u0142")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-9  u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--small u-w-100 u-small-w-auto",
                    onClick: function onClick(e) {
                        e.preventDefault();

                        _this2.props.addToCart(_this2.findProductVariant(phone).productId, phone.bundleTemplateName);
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), "Do koszyka")))))))));
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {}
        }]);
        return ProductRecomendationOneProductView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            selectedVariant: ownProps.phone.selectedVariant
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            addToCart: function addToCart(productCode, bundleTemplateName) {
                return dispatch((0, _app.addToCart)(productCode, bundleTemplateName));
            },
            setSelectedVariantOnRecommended: function setSelectedVariantOnRecommended(selectedVariantCode, colorCode, productCode, products) {
                return dispatch((0, _app.setSelectedVariantOnRecommended)(selectedVariantCode, colorCode, productCode, products));
            }
        };
    };

    var ProductRecomendationOneProduct = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductRecomendationOneProductView);
    var _default = ProductRecomendationOneProduct;
    _exports.default = _default;
});
//# sourceMappingURL=ProductRecomendationOneProduct.js.map