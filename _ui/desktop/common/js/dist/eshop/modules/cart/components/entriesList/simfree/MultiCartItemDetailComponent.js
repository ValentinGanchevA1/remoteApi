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

    var MultiCartItemDetailComponent = /*#__PURE__*/ function(_MultiCartItemAttribu) {
        babelHelpers.inherits(MultiCartItemDetailComponent, _MultiCartItemAttribu);

        var _super = _createSuper(MultiCartItemDetailComponent);

        function MultiCartItemDetailComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemDetailComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemDetailComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-l u-padding-top-l u-padding-right-l",
                    colSpan: this.props.priceless && '3'
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.props.captionClassName
                }, this.props.title)), !this.props.priceless && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty miesi\u0119czne"), this.props.monthlyPrices && this.props.monthlyPrices[0] ? this.renderPriceDesktop(this.props.monthlyPrices[0]) : this.renderVoidDesktop()), !this.props.priceless && /*#__PURE__*/ _react.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-left u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Op\u0142aty na start"), this.props.oneTimePrice ? this.renderPriceDesktop(this.props.oneTimePrice) : this.renderVoidDesktop()));
            }
        }]);
        return MultiCartItemDetailComponent;
    }(_MultiCartItemAttributeComponent.default);

    _exports.default = MultiCartItemDetailComponent;
});
//# sourceMappingURL=MultiCartItemDetailComponent.js.map