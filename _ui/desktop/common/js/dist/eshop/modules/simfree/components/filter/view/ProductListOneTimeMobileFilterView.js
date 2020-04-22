define(["exports", "react", "./ProductListPriceFilterRowView", "eshop/utils/OnlineUtils"], function(_exports, _react, _ProductListPriceFilterRowView, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductListPriceFilterRowView = babelHelpers.interopRequireDefault(_ProductListPriceFilterRowView);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var ProductListOneTimeMobileFilterView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListOneTimeMobileFilterView, _React$Component);

        var _super = _createSuper(ProductListOneTimeMobileFilterView);

        function ProductListOneTimeMobileFilterView() {
            babelHelpers.classCallCheck(this, ProductListOneTimeMobileFilterView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ProductListOneTimeMobileFilterView, [{
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.showComponent ? /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.header), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-margin",
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": JSON.stringify({
                        'coverClass': '.cover',
                        'triggerHideName': 'Zwiń',
                        'triggerShowName': 'Rozwiń',
                        'maxHeight': 300,
                        'showFirst': this.props.showExpanderNumber,
                        'scrollTop': false,
                        'scrollSet': 0
                    })
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-gradient-fade--wrapper"
                }, this.props.tieredPrices && this.props.tieredPrices.map(function(price, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ProductListPriceFilterRowView.default, {
                        key: "Price_" + price + "_" + index,
                        type: _this.props.type,
                        checked: _this.props.selectedTieredPrices[price.id],
                        onClick: function onClick() {
                            return _this.props.onClick(price.id);
                        },
                        text: _this.props.labelFormatter(price)
                    });
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-text-left u-spacing-m u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Rozwi\u0144")))) : null);
            }
        }]);
        return ProductListOneTimeMobileFilterView;
    }(_react.default.Component);

    var _default = ProductListOneTimeMobileFilterView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListOneTimeMobileFilterView.js.map