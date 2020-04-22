define(["exports", "react", "react-redux", "eshop/utils/DataLayerUtils", "../../actions/app", "../../../fix/components/OraFullPageLoaderComponent", "../../selectors"], function(_exports, _react, _reactRedux, _DataLayerUtils, _app, _OraFullPageLoaderComponent, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    _OraFullPageLoaderComponent = babelHelpers.interopRequireDefault(_OraFullPageLoaderComponent);

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

    var MulticartCheckoutProgressComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCheckoutProgressComponent, _Component);

        var _super = _createSuper(MulticartCheckoutProgressComponent);

        function MulticartCheckoutProgressComponent(props) {
            babelHelpers.classCallCheck(this, MulticartCheckoutProgressComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartCheckoutProgressComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.registerCurrentStepId(this.props.progressBarId);
            }
        }, {
            key: "getStepView",
            value: function getStepView(step, currentStepNumber) {
                var stepDescriptionId = "checkoutStepTitle" + step.stepNumber;
                var description = this.props.descriptions[stepDescriptionId];
                return /*#__PURE__*/ _react.default.createElement("li", {
                    key: stepDescriptionId,
                    className: "o-steps__li" + this.getStepItemClass(currentStepNumber, step.stepNumber)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-steps__item"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-steps__content"
                }, description)));
            }
        }, {
            key: "getStepItemClass",
            value: function getStepItemClass(currentStepNumber, stepNumber) {
                if (currentStepNumber === stepNumber) {
                    return " o-steps__li--active";
                } else if (currentStepNumber === stepNumber - 1) {
                    return " o-steps__li--prev-active";
                } else {
                    return "";
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var currentStep = this.props.checkoutSteps.find(function(step) {
                    return step.progressBarId === _this.props.progressBarId;
                });
                var selected = currentStep ? currentStep.stepNumber : 1;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "common/modules/opl-steps",
                    className: "o-steps opl-steps u-padding-top-l u-small-no-padding-t " + (selected == 3 ? "u-padding-l-xl" : "u-padding-l")
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "o-steps__list"
                }, this.props.checkoutSteps.map(function(step, index, options) {
                    return _this.getStepView(step, selected);
                })), /*#__PURE__*/ _react.default.createElement(_OraFullPageLoaderComponent.default, {
                    isShow: this.props.showFullPageLoader
                }));
            }
        }]);
        return MulticartCheckoutProgressComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showFullPageLoader: (0, _selectors.isFullPageLoader)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            registerCurrentStepId: function registerCurrentStepId(value) {
                return dispatch((0, _app.registerCurrentStepId)(value));
            }
        };
    };

    var _default = MulticartCheckoutProgressComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartCheckoutProgressComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartCheckoutProgressComponent.js.map