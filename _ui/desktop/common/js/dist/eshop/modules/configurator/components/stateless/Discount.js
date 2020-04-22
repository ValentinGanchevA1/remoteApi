define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/TooltipInitializer"], function(_exports, _react, _propTypes, _OnlineUtils, _TooltipInitializer) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _TooltipInitializer = babelHelpers.interopRequireDefault(_TooltipInitializer);

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

    var Discount = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(Discount, _React$Component);

        var _super = _createSuper(Discount);

        function Discount(props) {
            babelHelpers.classCallCheck(this, Discount);
            return _super.call(this, props);
        }

        babelHelpers.createClass(Discount, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.tooltipInitializer.componentDidMountHandler();
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.tooltipInitializer.componentWillUnmountHandler();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.tooltipInitializer.componentDidMountHandler();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.tooltipInitializer.componentWillUnmountHandler();
            }
        }, {
            key: "render",
            value: function render() {
                this.tooltipInitializer = new _TooltipInitializer.default(this.props.value);
                var value = this.tooltipInitializer.render();

                if (this.props.fixer) {
                    return fixerWrapper(value, this.props.fixer, this.props.hide);
                } else {
                    return simpleWrapper(value, this.props.hide, this.props.showOnMobile, this.props.showAll, this.props.simpleWrapperClassName);
                }
            }
        }]);
        return Discount;
    }(_react.default.Component);

    _exports.default = Discount;
    Discount.defaultProps = {
        showOnMobile: false,
        showAll: false,
        simpleWrapperClassName: ""
    };

    function fixerWrapper(value, fixer, hide) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-no-spacing-bottom u-medium-no-spacing-bottom u-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-animate-height " + fixer + (hide ? " u-hide" : "")
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "js-height-sensitive-element"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-medium-table u-medium-spacing-l"
        }, value))));
    }

    function simpleWrapper(value, hide, showOnMobile, showAll, className) {
        var toFullWidth = value.props.dangerouslySetInnerHTML.__html.indexOf('<p') > -1;

        if (hide) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                className: "u-hide " + className
            }, value);
        } else {
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                className: (showAll && " " || (showOnMobile ? "u-hide u-small-block u-padding-m " : "u-small-hide u-block ")) + className
            }, value));
        }
    }
});
//# sourceMappingURL=Discount.js.map