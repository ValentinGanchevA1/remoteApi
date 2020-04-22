define(["exports", "react", "eshop/modules/simfree/actions/app", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/ProductRecomendationOneProduct"], function(_exports, _react, _app, _OraCommonComponents, _ProductRecomendationOneProduct) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductRecomendationOneProduct = babelHelpers.interopRequireDefault(_ProductRecomendationOneProduct);

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

    var ProductRecomendationView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductRecomendationView, _React$Component);

        var _super = _createSuper(ProductRecomendationView);

        function ProductRecomendationView(props) {
            babelHelpers.classCallCheck(this, ProductRecomendationView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductRecomendationView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModules();
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.killModules();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadModules();
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                if (!this.props.products || this.props.products == null || this.props.products.length === 0) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "product-recommended-anchor" + this.props.productId,
                    className: "js-expander__container opl-wiking-expander__container"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    "data-skiplinks": this.props.label,
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, this.props.label), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwi\u0144")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-padding-top-l u-spacing-xl u-small-no-spacing-bottom"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    },
                    className: "l-row opl-carousel opl-wiking-gallery-single u-padding-left u-padding-right"
                }, this.props.products.map(function(phone, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ProductRecomendationOneProduct.default, {
                        phone: phone,
                        index: index,
                        key: "recomendation" + index,
                        products: _this.props.products
                    });
                })))));
            }
        }, {
            key: "killModules",
            value: function killModules() {
                var element = document.getElementById("recommendation-carousel");

                if (element) {
                    OPL.UI.stopModules(element);
                }
            }
        }, {
            key: "loadModules",
            value: function loadModules() {
                if (this.ref) {
                    OPL.UI.loadModules(this.ref, [{
                        path: "core/modules/layout-fixer",
                        conditions: "element:{seen}",
                        options: {
                            selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2"]
                        }
                    }, {
                        path: "common/modules/opl-carousel",
                        conditions: "element:{was seen}",
                        options: {
                            navAdditionalClass: "o-btn-arrow--rounded",
                            slide: ".opl-carousel__recomended-item",
                            slidesToShow: 4,
                            autoplay: false,
                            arrows: false,
                            dots: true,
                            responsive: [{
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    dots: true
                                }
                            }, {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3
                                }
                            }]
                        }
                    }, {
                        path: "common/modules/opl-width-fixer"
                    }]);
                }
            }
        }]);
        return ProductRecomendationView;
    }(_react.default.Component);

    var _default = ProductRecomendationView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductRecomendation.js.map