define(["exports", "react-redux", "react", "eshop/modules/simfree/actions/comparator", "eshop/modules/simfree/selectors"], function(_exports, _reactRedux, _react, _comparator, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var ComparatorCheckbox = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ComparatorCheckbox, _Component);

        var _super = _createSuper(ComparatorCheckbox);

        function ComparatorCheckbox(props) {
            babelHelpers.classCallCheck(this, ComparatorCheckbox);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ComparatorCheckbox, [{
            key: "handleCheckboxChange",
            value: function handleCheckboxChange(event) {
                this.props.updateComparatorDevices({
                    name: this.props.product.name,
                    productId: this.props.product.productId,
                    imageUrl: this.props.product.variantList[0].imageUrl,
                    productPageUrl: this.getProductUrl(),
                    category: this.props.selectedCategory
                });
            }
        }, {
            key: "getProductUrl",
            value: function getProductUrl() {
                if (this.props.product.variantList[0].productUrl != null) {
                    return this.props.product.variantList[0].productUrl;
                } else {
                    return window.location.pathname;
                }
            }
        }, {
            key: "isProductSet",
            value: function isProductSet() {
                return this.props.product.productId && this.props.product.productId.includes("PROD_SET");
            }
        }, {
            key: "deviceAdded",
            value: function deviceAdded() {
                var _this = this;

                return this.props.comparatorDevices.filter(function(device) {
                    return device.productId === _this.props.product.productId;
                }).length > 0;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                if (this.props.isComparatorCategory && !this.isProductSet()) {
                    return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("label", {
                        className: "o-checkbox opl-checkbox u-small-hide"
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "checkbox",
                        disabled: !this.deviceAdded() && this.props.comparatorDevices.length > 2,
                        checked: this.deviceAdded(),
                        onChange: function onChange(event) {
                            _this2.handleCheckboxChange(event);
                        }
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci"
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Por\xF3wnaj")), /*#__PURE__*/ _react.default.createElement("label", {
                        className: "o-checkbox opl-checkbox u-medium-hide u-large-hide"
                    }, /*#__PURE__*/ _react.default.createElement("input", {
                        type: "checkbox",
                        disabled: !this.deviceAdded() && this.props.comparatorDevices.length > 1,
                        checked: this.deviceAdded(),
                        onChange: function onChange(event) {
                            _this2.handleCheckboxChange(event);
                        }
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci"
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Por\xF3wnaj")));
                } else {
                    return null;
                }
            }
        }]);
        return ComparatorCheckbox;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            comparatorDevices: (0, _selectors.getComparatorDevices)(state),
            categories: (0, _selectors.getProductsTrees)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            isComparatorCategory: (0, _selectors.getIsComparatorCategory)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
        return {
            updateComparatorDevices: function updateComparatorDevices(device) {
                return dispatch((0, _comparator.updateComparatorDevicesList)(device));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ComparatorCheckbox);

    _exports.default = _default;
});
//# sourceMappingURL=ComparatorCheckbox.js.map