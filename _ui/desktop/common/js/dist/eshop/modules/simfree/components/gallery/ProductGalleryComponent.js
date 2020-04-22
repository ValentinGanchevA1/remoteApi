define(["exports", "react", "react-redux", "eshop/modules/simfree/components/gallery/ProductGalleryMiniPicturesComponent", "eshop/modules/simfree/components/gallery/ProductGalleryLargePictureComponent", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers"], function(_exports, _react, _reactRedux, _ProductGalleryMiniPicturesComponent, _ProductGalleryLargePictureComponent, _filters, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductGalleryMiniPicturesComponent = babelHelpers.interopRequireDefault(_ProductGalleryMiniPicturesComponent);
    _ProductGalleryLargePictureComponent = babelHelpers.interopRequireDefault(_ProductGalleryLargePictureComponent);

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

    var ProductGalleryComponentView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductGalleryComponentView, _React$Component);

        var _super = _createSuper(ProductGalleryComponentView);

        function ProductGalleryComponentView(props) {
            babelHelpers.classCallCheck(this, ProductGalleryComponentView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductGalleryComponentView, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row opl-sticked-element"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_ProductGalleryMiniPicturesComponent.default, {
                    productVariant: this.props.productVariant
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-10 l-col-10",
                    id: "main-picture-container"
                }, /*#__PURE__*/ _react.default.createElement(_ProductGalleryLargePictureComponent.default, {
                    productVariant: this.props.productVariant,
                    sticker: this.props.sticker !== null && (this.props.sticker.propositionItems && this.props.sticker.propositionItems.length === 0 || this.props.sticker.propositionItems.includes(this.props.selectedOfferId)) ? this.props.sticker : null,
                    selectedOfferType: this.props.selectedOfferType
                })));
            }
        }]);
        return ProductGalleryComponentView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            selectedOfferId: (0, _offers.getSelectedOfferId)(state)
        };
    };

    var ProductGalleryComponent = (0, _reactRedux.connect)(mapStateToProps)(ProductGalleryComponentView);
    var _default = ProductGalleryComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductGalleryComponent.js.map