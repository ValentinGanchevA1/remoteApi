define(["exports", "react", "react-redux", "prop-types"], function(_exports, _react, _reactRedux, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    var ProductGalleryMiniPicturesComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductGalleryMiniPicturesComponent, _React$Component);

        var _super = _createSuper(ProductGalleryMiniPicturesComponent);

        function ProductGalleryMiniPicturesComponent(props) {
            babelHelpers.classCallCheck(this, ProductGalleryMiniPicturesComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductGalleryMiniPicturesComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadCarousel();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.killModules();
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.killModules();
            }
        }, {
            key: "killModules",
            value: function killModules() {
                OPL.UI.stopModules(document.getElementById("mini-carousel"));
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadCarousel();
            }
        }, {
            key: "loadCarousel",
            value: function loadCarousel() {
                OPL.UI.loadModules(this.ref, [{
                    path: 'common/modules/opl-carousel',
                    options: {
                        asNavFor: ".opl-sticked-element .opl-wiking-gallery-single",
                        slidesToShow: 5,
                        arrows: true,
                        slide: ".opl-wiking-gallery-navigation--item",
                        dots: false,
                        vertical: true,
                        verticalSwiping: true,
                        focusOnSelect: true
                    }
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "mini-carousel"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "common/modules/opl-carousel",
                    className: "opl-wiking-gallery-navigation opl-carousel-vertical-arrows u-w-100 u-spacing-top",
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    }
                }, this.props.productVariant.mediaContent.map(function(element, index) {
                    return /*#__PURE__*/ _react.default.createElement(MiniCarouselItem, {
                        url: element.mediaImageUrl,
                        alt: element.altText,
                        key: index
                    });
                })));
            } //

        }]);
        return ProductGalleryMiniPicturesComponent;
    }(_react.default.Component);

    _exports.default = ProductGalleryMiniPicturesComponent;

    var MiniCarouselItem = function MiniCarouselItem(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-wiking-gallery-navigation--item "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-feature-object opl-feature-object--zoom-in-zoom-out  opl-feature-object--wiking u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-feature-object__content"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-feature-object__inner-wrapper"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-feature-object__inner"
        }, /*#__PURE__*/ _react.default.createElement("img", {
            src: props.url,
            alt: props.alt
        }))))));
    };
});
//# sourceMappingURL=ProductGalleryMiniPicturesComponent.js.map