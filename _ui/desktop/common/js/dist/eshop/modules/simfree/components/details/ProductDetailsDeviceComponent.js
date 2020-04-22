define(["exports", "react", "react-redux", "eshop/modules/simfree/components/gallery/ProductGalleryComponent", "eshop/modules/simfree/components/comparator/ComparatorCheckbox", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "../../actions/app"], function(_exports, _react, _reactRedux, _ProductGalleryComponent, _ComparatorCheckbox, _app, _selectors, _filters, _app2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductGalleryComponent = babelHelpers.interopRequireDefault(_ProductGalleryComponent);
    _ComparatorCheckbox = babelHelpers.interopRequireDefault(_ComparatorCheckbox);

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

    var ProductDetailsDeviceComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsDeviceComponent, _React$Component);

        var _super = _createSuper(ProductDetailsDeviceComponent);

        function ProductDetailsDeviceComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsDeviceComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsDeviceComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {}
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
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setSelectedBaseDeviceCode(this.props.deviceData.productId);
                OPL.UI.loadModules(document.getElementById('sticked-container'), [{
                    path: "common/modules/opl-sticker",
                    options: {
                        stayDown: true
                    },
                    conditions: "media:{gt-medium}"
                }]);
                this.props.changeCategory({
                    code: this.props.deviceData.deviceCategory
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12  u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    "data-skiplinks": "Podstawowe informacje o produkcie",
                    className: "h1 u-medium-no-spacing",
                    tabIndex: "-1",
                    id: "skiplinks831"
                }, this.props.deviceData.name)), this._renderRatingStars(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6  u-text-center u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l u-position-static"
                }, /*#__PURE__*/ _react.default.createElement(_ProductGalleryComponent.default, {
                    productVariant: this.findProductVariant(),
                    sticker: this.getStickerForSelectedProcess()
                })));
            }
        }, {
            key: "getStickerForSelectedProcess",
            value: function getStickerForSelectedProcess() {
                if (this.props.deviceData.sticker && this.props.deviceData.sticker.availableProcesses.includes(this.props.selectedProcess)) {
                    return this.props.deviceData.sticker;
                }

                return null;
            }
        }, {
            key: "_renderRatingStars",
            value: function _renderRatingStars() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-8"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 u-large-hide u-padding-m u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
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
                    className: "small g-gray3-c u-inline-block"
                }, "(", this.props.deviceData.numberOfReviewsCustomers, ")")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 u-small-padding-top-s u-medium-padding-top-s u-large-hide u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_ComparatorCheckbox.default, {
                    product: this.props.deviceData
                })));
            }
        }]);
        return ProductDetailsDeviceComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedVariant: (0, _selectors.getSelectedVariant)(state),
            imageUrl: (0, _selectors.getProductImageUrl)(state),
            selectedProcess: (0, _filters.getSelectedProcessTypeValue)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setSelectedBaseDeviceCode: function setSelectedBaseDeviceCode(deviceCode) {
                return dispatch((0, _app.setSelectedBaseDeviceCode)(deviceCode));
            },
            changeCategory: function changeCategory(category) {
                return dispatch((0, _app2.changeCategory)(category));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsDeviceComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsDeviceComponent.js.map