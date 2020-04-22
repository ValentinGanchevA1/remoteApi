define(["exports", "react", "react-redux", "../../../configurator/components/lp/offers/Sticker"], function(_exports, _react, _reactRedux, _Sticker) {
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

    var ProductGalleryLargePictureComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductGalleryLargePictureComponent, _React$Component);

        var _super = _createSuper(ProductGalleryLargePictureComponent);

        function ProductGalleryLargePictureComponent(props) {
            babelHelpers.classCallCheck(this, ProductGalleryLargePictureComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductGalleryLargePictureComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModules();
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                ProductGalleryLargePictureComponent.killModules();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadModules();
            }
        }, {
            key: "loadModules",
            value: function loadModules() {
                OPL.UI.loadModules(this.ref, [{
                    path: 'common/modules/opl-width-fixer',
                    options: {
                        item: ".opl-wiking-gallery-single--item",
                        extendHeight: 20
                    }
                }, {
                    path: 'common/modules/opl-carousel',
                    options: {
                        asNavFor: ".opl-sticked-element .opl-wiking-gallery-navigation",
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        arrows: false,
                        slide: ".opl-wiking-gallery-single--item",
                        dots: false,
                        fade: true,
                        responsive: [{
                            breakpoint: 767,
                            settings: {
                                dots: true
                            }
                        }]
                    }
                }, {
                    path: "common/modules/opl-image-zoom",
                    conditions: "media:{gt-medium}",
                    options: {
                        zoomWindowOffsetY: 70,
                        zoomContainerAppendTo: ".opl-product-page",
                        zoomWindowOffsetXAlignContainer: "#product-basic-information",
                        zoomWindowWidthAlignContainer: "#product-basic-information"
                    }
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    },
                    className: "opl-wiking-gallery-single u-margin"
                }, this.props.productVariant.mediaContent.map(function(element, index) {
                    return /*#__PURE__*/ _react.default.createElement(CarouselItem, {
                        url: element.mediaImageUrl,
                        alt: element.altText,
                        key: index,
                        sticker: _this.props.sticker,
                        selectedOfferType: _this.props.selectedOfferType
                    });
                }));
            }
        }], [{
            key: "killModules",
            value: function killModules() {
                OPL.UI.stopModules(document.getElementById("main-picture-container"));
            }
        }]);
        return ProductGalleryLargePictureComponent;
    }(_react.default.Component);

    _exports.default = ProductGalleryLargePictureComponent;

    var CarouselItem = function CarouselItem(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            "data-image-large": props.url,
            className: "opl-wiking-gallery-single--item u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-wiking-gallery-single--wrapper u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement(_Sticker.Sticker, {
            sticker: props.sticker,
            className: "u-position-absolute"
        }), /*#__PURE__*/ _react.default.createElement("img", {
            src: props.url,
            alt: props.alt,
            "data-zoom-image": props.url,
            className: "image-zoom-item"
        })));
    };
});
//# sourceMappingURL=ProductGalleryLargePictureComponent.js.map