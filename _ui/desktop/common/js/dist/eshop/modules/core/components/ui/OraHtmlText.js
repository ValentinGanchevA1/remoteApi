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

    var OraHtmlText = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraHtmlText, _Component);

        var _super = _createSuper(OraHtmlText);

        function OraHtmlText(props) {
            babelHelpers.classCallCheck(this, OraHtmlText);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraHtmlText, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.children
                    }
                });
            }
        }]);
        return OraHtmlText;
    }(_react.Component);

    _exports.default = OraHtmlText;;
});
//# sourceMappingURL=OraHtmlText.js.map