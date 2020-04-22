define(["exports", "react"], function(_exports, _react) {
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

    var ProductDetailsNavigationComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsNavigationComponent, _React$Component);

        var _super = _createSuper(ProductDetailsNavigationComponent);

        function ProductDetailsNavigationComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsNavigationComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsNavigationComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this._loadModules();
            }
        }, {
            key: "render",
            value: function render() {
                console.log("*******************************************");
                console.log(this.props.deviceData);
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide u-spacing-xl js-stop-sticking u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: 'opl-scroll-to-element',
                    "data-js-module": 'core/modules/opl-scroll-to-element',
                    className: this.props.noShadow ? "opl-wiking-product-menu u-spacing-xl u-no-shadow" : "opl-wiking-product-menu u-spacing-xl "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("ul", null, this.createPromotionLi(), this.props.deviceData.description ? /*#__PURE__*/ _react.default.createElement("li", {
                    className: !this.props.deviceData.promotion ? "active" : ""
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#product-description",
                    className: "opl-scroll-to-element-item"
                }, "Opis")) : null, this.props.deviceData.classification && this.props.deviceData.classification.length > 0 ? /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#product-details",
                    className: "opl-scroll-to-element-item"
                }, "Specyfikacja")) : null, this._createRecommendedProductsLi(), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#product-comments",
                    className: "opl-scroll-to-element-item"
                }, "Recenzje")), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#product-delivery",
                    className: "opl-scroll-to-element-item"
                }, "Dostawa i p\u0142atno\u015B\u0107"))))));
            }
        }, {
            key: "createPromotionLi",
            value: function createPromotionLi() {
                if (!(this.props.deviceData.promotion === 0 || this.props.deviceData.promotion == null || !this.props.deviceData.promotion)) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        className: "active"
                    }, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#product-promotion",
                        className: "opl-scroll-to-element-item"
                    }, this.props.promotionNavigationLabel ? this.props.promotionNavigationLabel : ''));
                }

                return null;
            }
        }, {
            key: "_createRecommendedProductsLi",
            value: function _createRecommendedProductsLi() {
                if (!(this.props.recommendedProducts.length === 0 || this.props.recommendedProducts == null || !this.props.recommendedProducts)) {
                    return /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#product-recommended-anchor" + this.props.deviceData.productId,
                        className: "opl-scroll-to-element-item"
                    }, this.props.recommendedProductsLabel ? this.props.recommendedProductsLabel : ''));
                }

                return null;
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                OPL.UI.loadModules(document.getElementById("opl-scroll-to-element"), [{
                    path: 'common/modules/opl-scroll-to-element',
                    options: ''
                }]);
            }
        }]);
        return ProductDetailsNavigationComponent;
    }(_react.default.Component);

    _exports.default = ProductDetailsNavigationComponent;
});
//# sourceMappingURL=ProductDetailsNavigationComponent.js.map