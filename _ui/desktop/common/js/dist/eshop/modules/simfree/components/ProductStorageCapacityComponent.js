define(["exports", "react", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "react-redux"], function(_exports, _react, _app, _selectors, _reactRedux) {
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

    var ProductStorageCapacityComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductStorageCapacityComponent, _React$Component);

        var _super = _createSuper(ProductStorageCapacityComponent);

        function ProductStorageCapacityComponent(props) {
            babelHelpers.classCallCheck(this, ProductStorageCapacityComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductStorageCapacityComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.fetchStorageCapacityForProduct();
            }
        }, {
            key: "setUrlOnClickAction",
            value: function setUrlOnClickAction(url) {
                if (url) {
                    window.location = url;
                }
            }
        }, {
            key: "isProductChosen",
            value: function isProductChosen(id) {
                return id === this.props.selectedBaseDeviceCode;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return this.props.productStorageCapacity && this.props.productStorageCapacity.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-6  u-small-padding-l u-medium-padding-left-l u-small-padding-left-l u-medium-padding-right-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Pojemno\u015B\u0107:"), /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-chooser"
                }, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "Pojemno\u015B\u0107 telefonu"), this.props.productStorageCapacity.map(function(item) {
                    return /*#__PURE__*/ _react.default.createElement("label", {
                        className: "opl-chooser__item"
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "radio",
                        name: "capacity",
                        value: item.storageCapacity,
                        key: item.id,
                        onClick: function onClick() {
                            return _this.setUrlOnClickAction(item.url);
                        },
                        defaultChecked: _this.isProductChosen(item.id)
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "o-ci u-box-shadow"
                    }, /*#__PURE__*/ _react.default.createElement("span", null, item.storageCapacity)));
                }))), /*#__PURE__*/ _react.default.createElement("p", null)) : null;
            }
        }]);
        return ProductStorageCapacityComponent;
    }(_react.default.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchStorageCapacityForProduct: function fetchStorageCapacityForProduct() {
                return dispatch((0, _app.fetchStorageCapacityForProduct)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            productStorageCapacity: (0, _selectors.getStorageCapacityForProduct)(state),
            selectedBaseDeviceCode: (0, _selectors.getSelectedBaseDeviceCode)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductStorageCapacityComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductStorageCapacityComponent.js.map