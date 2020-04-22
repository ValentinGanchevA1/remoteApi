define(["exports", "react", "react-redux", "prop-types", "eshop/modules/simfree/selectors"], function(_exports, _react, _reactRedux, _propTypes, _selectors) {
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

    var ProductDetailsProductSpecification = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsProductSpecification, _React$Component);

        var _super = _createSuper(ProductDetailsProductSpecification);

        function ProductDetailsProductSpecification(props) {
            babelHelpers.classCallCheck(this, ProductDetailsProductSpecification);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsProductSpecification, [{
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "renderValue",
            value: function renderValue(element) {
                if (element.value === 'true') {
                    return "Tak";
                }

                if (element.value === 'false') {
                    return "Nie";
                }

                return element.value;
            }
        }, {
            key: "renderUnit",
            value: function renderUnit(element, i) {
                if (!element.featureUnit) {
                    return '';
                }

                return element.featureUnit.symbol;
            }
        }, {
            key: "renderOneRow",
            value: function renderOneRow(element) {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "key_" + element.name
                }, /*#__PURE__*/ _react.default.createElement("td", null, element.name != null ? element.name : element.code), /*#__PURE__*/ _react.default.createElement("td", null, element.featureValues.map(function(feat, i) {
                    return _this.renderValue(feat) + " " + _this.renderUnit(element, i);
                })));
            }
        }, {
            key: "renderOneColumn",
            value: function renderOneColumn(element, key) {
                var _this2 = this;

                if (!element) return '';
                return /*#__PURE__*/ _react.default.createElement("table", {
                    className: "opl-table opl-details-table opl-table--width__50-50 u-small-spacing-l u-medium-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", {
                    key: "tr" + key
                }, /*#__PURE__*/ _react.default.createElement("th", {
                    colSpan: "2",
                    className: "u-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "h4 u-text-left"
                }, element.name != null ? element.name : element.code)))), /*#__PURE__*/ _react.default.createElement("tbody", null, element.features.map(function(feature, i) {
                    return _this2.renderOneRow(feature);
                })));
            }
        }, {
            key: "renderDoubleColumnClassification",
            value: function renderDoubleColumnClassification(classifications, i) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    key: "classification-" + i,
                    className: i === 0 ? "opl-gradient-fade--item" : "opl-gradient-fade--item u-spacing-top-xl" + " u-medium-no-spacing u-small-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                }, this.renderOneColumn(classifications[i], i)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-6 "
                }, this.renderOneColumn(classifications[i + 1], i + 1))));
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var classification = this.props.deviceData.classification;

                if (classification && classification.length) {
                    var selectedVariant = this.props.deviceData.variantList.filter(function(variant) {
                        return variant.productId === _this3.props.selectedVariant;
                    })[0];
                    var eanCode = !!selectedVariant && selectedVariant.ean;
                    var index = classification.map(function(item) {
                        return item.code;
                    }).indexOf('ean');

                    if (eanCode) {
                        var eanObject = {
                            features: [{
                                code: "ean",
                                name: "Ean",
                                featureValues: [{
                                    value: eanCode
                                }]
                            }],
                            code: "ean",
                            name: "Inne informacje"
                        };
                        index > 0 ? classification[index] = eanObject : classification.push(eanObject);
                    } else {
                        classification = index > 0 ? classification.filter(function(item) {
                            return item.code !== 'ean';
                        }) : classification;
                    }
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__container opl-wiking-expander__container",
                    hidden: !classification || classification.length === 0
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    id: 'product-details',
                    "data-skiplinks": 'Specyfikacja produktu',
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, "Specyfikacja"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwi\u0144")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-padding-top-l u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: 'product-specification-expander',
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": "{\"hideTrigger\": false, \"triggerHideName\": \"Zwi\u0144\", \"triggerShowName\": \"Wi\u0119cej\", \"showFirst\": 0, \"scrollSet\": 80 }",
                    "data-js-conditions": "element:{was seen}",
                    className: "opl-gradient-fade"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--cover"
                }), classification && classification.map(function(element, i) {
                    return i % 2 == 0 ? _this3.renderDoubleColumnClassification(classification, i) : '';
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Wi\u0119cej"))))));
            }
        }]);
        return ProductDetailsProductSpecification;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedVariant: (0, _selectors.getSelectedVariant)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsProductSpecification);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsProductSpecification.js.map