define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/core/components/ui/OraHtmlText"], function(_exports, _react, _propTypes, _Tooltip, _OraHtmlText) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);
    _OraHtmlText = babelHelpers.interopRequireDefault(_OraHtmlText);

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

    var InfoWithTooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(InfoWithTooltip, _Component);

        var _super = _createSuper(InfoWithTooltip);

        function InfoWithTooltip() {
            babelHelpers.classCallCheck(this, InfoWithTooltip);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(InfoWithTooltip, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-font-small"
                }, /*#__PURE__*/ _react.default.createElement(_OraHtmlText.default, null, this.props.label), this.props.tooltip && /*#__PURE__*/ _react.default.createElement(_Tooltip.default, null, /*#__PURE__*/ _react.default.createElement(_OraHtmlText.default, null, this.props.tooltip))));
            }
        }]);
        return InfoWithTooltip;
    }(_react.Component);

    _exports.default = InfoWithTooltip;
    InfoWithTooltip.propTypes = {
        label: _propTypes.default.string,
        tooltip: _propTypes.default.string
    };
});
//# sourceMappingURL=InfoWithTooltip.js.map