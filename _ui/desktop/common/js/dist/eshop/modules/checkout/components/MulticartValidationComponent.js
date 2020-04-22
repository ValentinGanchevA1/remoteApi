define(["exports", "react", "react-redux", "../selectors", "eshop/modules/checkout/components/ScrollableComponent"], function(_exports, _react, _reactRedux, _selectors, _ScrollableComponent2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ScrollableComponent2 = babelHelpers.interopRequireDefault(_ScrollableComponent2);

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

    var MulticartValidationComponent = /*#__PURE__*/ function(_ScrollableComponent) {
        babelHelpers.inherits(MulticartValidationComponent, _ScrollableComponent);

        var _super = _createSuper(MulticartValidationComponent);

        function MulticartValidationComponent(props) {
            babelHelpers.classCallCheck(this, MulticartValidationComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartValidationComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartValidationComponent.prototype), "componentDidMount", this).call(this);
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartValidationComponent.prototype), "componentWillUpdate", this).call(this);
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartValidationComponent.prototype), "componentDidUpdate", this).call(this);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartValidationComponent.prototype), "componentWillUnmount", this).call(this);
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var error = this.props.show && this.props.errorList && this.props.errorList.find(function(e) {
                    return _this.props.messageType === e.type;
                });

                if (!error) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "VALIDATION_COMPONENT" + this.state.no
                    });
                }

                var icon = "g-icon--" + this.props.iconType;
                var errorMessage = this.props.messageText || error.message;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-text g-icon  g-icon--before g-icon--xs-s g-redf-c u-padding-top-s  " + icon + " VALIDATION_COMPONENT" + this.state.no + this.props.className,
                    ref: "errorDiv"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error opl-msg--error-anchor " + (this.props.scrollToParent && "opl-msg-scrollToParent"),
                    "data-scroll-offset": this.props.scrollOffset
                }, errorMessage));
            }
        }]);
        return MulticartValidationComponent;
    }(_ScrollableComponent2.default);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errorList: (0, _selectors.getFrontValidationMsg)(state),
            isDeliveryAndPaymentStep: (0, _selectors.getDeliveryAndPaymentStep)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return { //dummy
        };
    };

    MulticartValidationComponent.defaultProps = {
        show: true,
        className: "",
        scrollOffset: 0,
        iconType: "error"
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartValidationComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartValidationComponent.js.map