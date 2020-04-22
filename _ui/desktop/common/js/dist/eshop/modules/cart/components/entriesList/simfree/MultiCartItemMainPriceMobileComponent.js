define(["exports", "react", "./MultiCartItemAttributeComponent"], function(_exports, _react, _MultiCartItemAttributeComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MultiCartItemAttributeComponent = babelHelpers.interopRequireDefault(_MultiCartItemAttributeComponent);

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

    var MultiCartItemMainPriceMobileComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemMainPriceMobileComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemMainPriceMobileComponent);

        function MultiCartItemMainPriceMobileComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemMainPriceMobileComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemMainPriceMobileComponent, [{
            key: "render",
            value: function render() {
                return this.props.price ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-table-cell"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(this.props.price)[0])), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(this.props.price)[1]), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, "\xA0", this.props.currency)))), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-table-cell u-vertical-top"
                }, this.props.tooltip)) : null;
            }
        }]);
        return MultiCartItemMainPriceMobileComponent;
    }(_MultiCartItemAttributeComponent.default);

    _exports.default = MultiCartItemMainPriceMobileComponent;
});
//# sourceMappingURL=MultiCartItemMainPriceMobileComponent.js.map