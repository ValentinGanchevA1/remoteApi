define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(_exports, _react, _TooltipFromHtml) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Feature = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _TooltipFromHtml = babelHelpers.interopRequireDefault(_TooltipFromHtml);

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

    var Feature = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Feature, _Component);

        var _super = _createSuper(Feature);

        function Feature() {
            babelHelpers.classCallCheck(this, Feature);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(Feature, [{
            key: "render",
            value: function render() {
                var _this = this;

                if ((this.props.feature.processes.length === 0 || this.props.feature.processes.find(function(process) {
                        return process === _this.props.processType;
                    })) && (!this.props.feature.clientContext || this.props.convergence === this.props.feature.clientContext)) {
                    var innerHtml = {
                        __html: this.props.feature.value
                    };
                    var className = this.props.removeClassFromLast ? this.props.length - 1 === this.props.index ? "" : this.props.className : this.props.className; //return <p className={className} dangerouslySetInnerHTML={innerHtml}></p>

                    return _TooltipFromHtml.default.conditionalRenderWithClassName(this.props.feature.value, className);
                } else {
                    return null;
                }
            }
        }]);
        return Feature;
    }(_react.Component);

    _exports.Feature = Feature;
});
//# sourceMappingURL=Feature.js.map