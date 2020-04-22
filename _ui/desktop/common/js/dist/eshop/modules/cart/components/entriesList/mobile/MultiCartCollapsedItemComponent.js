define(["exports", "react"], function(_exports, _react) {
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

    var MultiCartCollapsedItemComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartCollapsedItemComponent, _Component);

        var _super = _createSuper(MultiCartCollapsedItemComponent);

        function MultiCartCollapsedItemComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartCollapsedItemComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartCollapsedItemComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }))));
            }
        }]);
        return MultiCartCollapsedItemComponent;
    }(_react.Component);

    _exports.default = MultiCartCollapsedItemComponent;
});
//# sourceMappingURL=MultiCartCollapsedItemComponent.js.map