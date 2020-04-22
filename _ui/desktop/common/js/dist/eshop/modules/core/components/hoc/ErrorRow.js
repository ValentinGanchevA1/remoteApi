define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
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

    var ErrorRow = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ErrorRow, _Component);

        var _super = _createSuper(ErrorRow);

        function ErrorRow(props) {
            babelHelpers.classCallCheck(this, ErrorRow);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ErrorRow, [{
            key: "getMessageProps",
            value: function getMessageProps() {
                if (this.props.showErrors && this.props.errors && this.props.errors.length > 0) {
                    return {
                        className: "u-margin-top-s",
                        type: this.props.errors[0].level,
                        text: this.props.errors[0].message
                    };
                } else {
                    return {
                        className: "u-margin-top-s",
                        type: "info"
                    };
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.className
                }, this.props.children, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, this.getMessageProps()));
            }
        }]);
        return ErrorRow;
    }(_react.Component);

    ErrorRow.defaultProps = {
        showErrors: true
    };
    var _default = ErrorRow;
    _exports.default = _default;
});
//# sourceMappingURL=ErrorRow.js.map