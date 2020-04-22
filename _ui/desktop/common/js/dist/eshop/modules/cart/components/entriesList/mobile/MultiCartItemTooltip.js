define(["exports", "react", "eshop/modules/core/utils/ui"], function(_exports, _react, _ui) {
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

    var MultiCartItemTooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartItemTooltip, _Component);

        var _super = _createSuper(MultiCartItemTooltip);

        function MultiCartItemTooltip(props) {
            babelHelpers.classCallCheck(this, MultiCartItemTooltip);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemTooltip, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.expanderPromise = (0, _ui.loadModule)(this.priceTooltip, {
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: '.o-tooltip__trigger',
                        contentSelector: '.o-tooltip__content',
                        triggerEvent: 'mouseover',
                        maxWidth: '400'
                    }
                });
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(this.priceTooltip);
            }
        }, {
            key: "optionalSmallClass",
            value: function optionalSmallClass() {
                return this.props.small ? " g-icon--font" : "";
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("span", {
                    ref: function ref(_ref) {
                        return _this.priceTooltip = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s" + this.optionalSmallClass()
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.children));
            }
        }]);
        return MultiCartItemTooltip;
    }(_react.Component);

    _exports.default = MultiCartItemTooltip;
});
//# sourceMappingURL=MultiCartItemTooltip.js.map