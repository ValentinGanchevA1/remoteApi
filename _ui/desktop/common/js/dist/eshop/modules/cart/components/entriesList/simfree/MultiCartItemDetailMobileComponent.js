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

    var MultiCartItemDetailMobileComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemDetailMobileComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemDetailMobileComponent);

        function MultiCartItemDetailMobileComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemDetailMobileComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemDetailMobileComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.className
                }, this.props.price ? this.props.title.replace('%1', this.getPartsOfPrice(this.props.price.price).join(',') + ' ' + this.props.price.currency) : this.props.title);
            }
        }]);
        return MultiCartItemDetailMobileComponent;
    }(_MultiCartItemAttributeComponent.default);

    _exports.default = MultiCartItemDetailMobileComponent;
});
//# sourceMappingURL=MultiCartItemDetailMobileComponent.js.map