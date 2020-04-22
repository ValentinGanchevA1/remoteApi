define(["exports", "react", "eshop/utils/OnlineUtils"], function(_exports, _react, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
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

    var Price = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(Price, _React$Component);

        var _super = _createSuper(Price);

        function Price() {
            babelHelpers.classCallCheck(this, Price);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(Price, [{
            key: "render",
            value: function render() {
                var price = this.props.bonusPrice && this.props.bonusPrice != this.props.basePrice ? this.props.bonusPrice : this.props.basePrice;
                var oldPrice = this.props.bonusPrice && this.props.bonusPrice != this.props.basePrice ? this.props.basePrice : "";
                price = _OnlineUtils.default.formatPrice(price);
                oldPrice = oldPrice ? _OnlineUtils.default.formatPrice(oldPrice) : '';
                if (price == oldPrice || !oldPrice) oldPrice = '';
                price = price && price.split(',');
                var integerPricePart = price && price[0];
                var fractionPricePart = price && price[1];
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2 opl-price-v2--l",
                    "data-price": price
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__whole  g-brand1-c"
                }, integerPricePart)), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__decimal g-brand1-c"
                }, fractionPricePart), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, "z\u0142/mies."))), oldPrice && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-top u-font-bold g-gray5-c u-text-line-through"
                }, oldPrice + " zł/mies."));
            }
        }]);
        return Price;
    }(_react.default.Component);

    _exports.default = Price;
});
//# sourceMappingURL=Price.js.map