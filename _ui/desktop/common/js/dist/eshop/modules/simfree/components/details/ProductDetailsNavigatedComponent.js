define(["exports", "react", "react-redux", "eshop/modules/simfree/components/details/ProductDetailsNavigationComponent", "eshop/modules/simfree/components/details/ProductDetailsProductDescription", "eshop/modules/simfree/components/details/ProductDetailsProductPromotion", "eshop/modules/simfree/components/details/ProductDetailsProductSpecification", "eshop/modules/simfree/components/details/ProductRecomendation", "eshop/modules/simfree/components/details/ProductCartProductReviewComponent", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/app"], function(_exports, _react, _reactRedux, _ProductDetailsNavigationComponent, _ProductDetailsProductDescription, _ProductDetailsProductPromotion, _ProductDetailsProductSpecification, _ProductRecomendation, _ProductCartProductReviewComponent, _selectors, _app) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductDetailsNavigationComponent = babelHelpers.interopRequireDefault(_ProductDetailsNavigationComponent);
    _ProductDetailsProductDescription = babelHelpers.interopRequireDefault(_ProductDetailsProductDescription);
    _ProductDetailsProductPromotion = babelHelpers.interopRequireDefault(_ProductDetailsProductPromotion);
    _ProductDetailsProductSpecification = babelHelpers.interopRequireDefault(_ProductDetailsProductSpecification);
    _ProductRecomendation = babelHelpers.interopRequireDefault(_ProductRecomendation);
    _ProductCartProductReviewComponent = babelHelpers.interopRequireDefault(_ProductCartProductReviewComponent);

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

    var ProductDetailsNavigated = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsNavigated, _React$Component);

        var _super = _createSuper(ProductDetailsNavigated);

        function ProductDetailsNavigated(props) {
            babelHelpers.classCallCheck(this, ProductDetailsNavigated);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsNavigated, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this._loadModules();

                if (this.props.deviceData.setOf) {
                    var keys = Object.keys(this.props.deviceData.setOf);
                    this.setDeviceTab(keys[0]);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.killModules();
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
                OPL.UI.initModules(document.getElementById("opl-expander-product-details-container"));
            }
        }, {
            key: "killModules",
            value: function killModules() {
                OPL.UX.stopModules(document.getElementById("opl-expander-product-details-container"));
            }
        }, {
            key: "setDeviceTab",
            value: function setDeviceTab(tab) {
                this.props.setSelectedDeviceTab(tab);
            }
        }, {
            key: "render",
            value: function render() {
                var deviceData = this.props.deviceData;
                console.log(deviceData.setOf);
                console.log(this.props.selectedDeviceTab);

                if (deviceData.setOf) {
                    if (this.props.selectedDeviceTab) deviceData = deviceData.setOf[this.props.selectedDeviceTab];
                    else {
                        var keys = Object.keys(deviceData.setOf);
                        deviceData = deviceData.setOf[keys[0]];
                    }
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement(SetElementTab, {
                    deviceData: this.props.deviceData,
                    selectedDeviceTab: this.props.selectedDeviceTab,
                    onClickHandler: this.setDeviceTab.bind(this)
                }), /*#__PURE__*/ _react.default.createElement(_ProductDetailsNavigationComponent.default, {
                    deviceData: deviceData,
                    noShadow: this.props.selectedDeviceTab ? true : false,
                    recommendedProducts: this.props.recomendedProducts,
                    recommendedProductsLabel: this.props.recommendedProductsNavigationLabel,
                    promotionNavigationLabel: this.props.promotionNavigationLabel
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-small-padding-left-l u-small-padding-right-l",
                    id: "opl-expander-product-details-container"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-expander-product-details",
                    "data-js-module": 'common/modules/opl-expander',
                    role: 'tablist',
                    "aria-multiselectable": false
                }, /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductPromotion.default, {
                    promotion: deviceData.promotion,
                    promotionLabel: this.props.promotionLabel
                }), /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductDescription.default, {
                    description: deviceData.description
                }), /*#__PURE__*/ _react.default.createElement(_ProductDetailsProductSpecification.default, {
                    deviceData: deviceData
                }), /*#__PURE__*/ _react.default.createElement(_ProductRecomendation.default, {
                    products: this.props.recomendedProducts,
                    label: this.props.recommendedProductsLabel,
                    productId: this.props.deviceData.productId
                }), /*#__PURE__*/ _react.default.createElement(_ProductCartProductReviewComponent.default, {
                    deviceData: deviceData
                }))));
            }
        }]);
        return ProductDetailsNavigated;
    }(_react.default.Component);

    var SetElementTab = function SetElementTab(props) {
        if (props.deviceData && !props.deviceData.setOf) return null;
        var deviceData = props.deviceData;
        var selectedDevice = props.selectedDevice;
        var tabs = [];
        var contents = [];
        Object.keys(deviceData.setOf).forEach(function(deviceCode) {
            var device = deviceData.setOf[deviceCode];
            tabs.push( /*#__PURE__*/ _react.default.createElement("li", {
                onClick: function onClick() {
                    return props.onClickHandler(device.productId);
                },
                key: "#set-item-" + device.name,
                className: "opl-tabs__nav-item"
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "opl-tabs__nav-item__content"
            }, /*#__PURE__*/ _react.default.createElement("a", {
                href: "#tab_content-" + device.productId,
                className: "opl-tabs__nav-link"
            }, /*#__PURE__*/ _react.default.createElement("span", {
                className: "opl-tabs__nav-link-inner"
            }, /*#__PURE__*/ _react.default.createElement("span", null, device.name))))));
        });
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-stop-sticking u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs defailt"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs__nav-wrapper"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-tabs__nav-wrapper-inner"
        }, /*#__PURE__*/ _react.default.createElement("ul", {
            className: "opl-tabs__nav js-tablist",
            "data-js-module": "common/modules/opl-tabs"
        }, tabs))))));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedDeviceTab: (0, _selectors.getSelectedDeviceTab)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
        return {
            setSelectedDeviceTab: function setSelectedDeviceTab(selectedDeviceTab) {
                return dispatch((0, _app.setSelectedDeviceTab)(selectedDeviceTab));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsNavigated);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsNavigatedComponent.js.map