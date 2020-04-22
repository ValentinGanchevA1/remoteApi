define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
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

    var ProductDetailsProductDescription = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductDetailsProductDescription, _React$Component);

        var _super = _createSuper(ProductDetailsProductDescription);

        function ProductDetailsProductDescription(props) {
            babelHelpers.classCallCheck(this, ProductDetailsProductDescription);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsProductDescription, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("product details - mounting component");
            }
        }, {
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.props.description) return null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: 'product-description-expander',
                    className: "js-expander__container opl-wiking-expander__container is-expanded"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    id: 'product-description',
                    "data-skiplinks": 'Opis produktu',
                    className: "h2 u-padding-l u-small-no-padding-b u-small-padding-left-xl u-no-spacing"
                }, "Opis"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger opl-wiking-expander__trigger"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--arrow-down-slim"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "rozwi\u0144 opis")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content opl-wiking-expander__content u-spacing-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: 'product-details-gradient',
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": "{\"hideTrigger\": false, \"triggerHideName\": \"Zwi\u0144\", \"triggerShowName\": \"Wi\u0119cej\", \"showFirst\": 0, \"scrollSet\": 80, \"loadAll\": true }",
                    "data-js-conditions": "element:{was seen}",
                    className: "opl-gradient-fade"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--cover"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--item",
                    dangerouslySetInnerHTML: this.toHTML(this.props.description)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Wi\u0119cej"))))));
            }
        }]);
        return ProductDetailsProductDescription;
    }(_react.default.Component);

    _exports.default = ProductDetailsProductDescription;
    ProductDetailsProductDescription.propTypes = {
        description: _propTypes.default.string.isRequired
    };
});
//# sourceMappingURL=ProductDetailsProductDescription.js.map