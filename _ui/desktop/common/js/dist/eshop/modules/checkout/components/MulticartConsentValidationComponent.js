define(["exports", "react", "jquery", "lodash", "eshop/modules/checkout/selectors", "eshop/modules/checkout/utils/utils", "eshop/modules/checkout/components/ScrollableComponent"], function(_exports, _react, _jquery, _lodash, _selectors, _utils, _ScrollableComponent2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
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

    var MulticartConsentValidationComponent = /*#__PURE__*/ function(_ScrollableComponent) {
        babelHelpers.inherits(MulticartConsentValidationComponent, _ScrollableComponent);

        var _super = _createSuper(MulticartConsentValidationComponent);

        function MulticartConsentValidationComponent(props) {
            babelHelpers.classCallCheck(this, MulticartConsentValidationComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartConsentValidationComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartConsentValidationComponent.prototype), "componentDidMount", this).call(this);
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartConsentValidationComponent.prototype), "componentWillUpdate", this).call(this);
                (0, _jquery.default)("#" + this.getParentSectionId()).removeClass("hasError");
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartConsentValidationComponent.prototype), "componentDidUpdate", this).call(this);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                babelHelpers.get(babelHelpers.getPrototypeOf(MulticartConsentValidationComponent.prototype), "componentWillUnmount", this).call(this);
            }
        }, {
            key: "getParentSectionId",
            value: function getParentSectionId() {
                var parent = (0, _jquery.default)(this.ref).closest(".opl-agreements__group");

                if (parent) {
                    return (0, _jquery.default)(parent).attr("id");
                }

                return "";
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var consentsErrorMsg = this.props.consentsErrorMsg || "Dokonaj wyboru aby przejść dalej.";
                var errorElem = this.props.consentsErrorList;
                var consent;

                if (!!this.props.correspondingBa) {
                    consent = (0, _lodash.cloneDeep)(this.props.consent);
                    consent.bundleAssignments = [this.props.correspondingBa];
                } else {
                    consent = this.props.consent;
                }

                var error = errorElem && this.props.isMandatory && !(0, _utils.validateConsent)(consent, this.props.state); //const error=(errorElem && errorElem.afterValidation) &&!validateConsent(consent, this.props.state);

                var offset = 0;
                return !error ? /*#__PURE__*/ _react.default.createElement("div", {
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    },
                    className: " VALIDATION_COMPONENT" + this.state.no
                }) : /*#__PURE__*/ _react.default.createElement("div", babelHelpers.defineProperty({
                    ref: function ref(_ref2) {
                        return _this.ref = _ref2;
                    },
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c u-padding-top-s " + this.props.className + " VALIDATION_COMPONENT" + this.state.no
                }, "ref", "errorDiv"), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error opl-msg--error-anchor ",
                    "data-scroll-offset": this.props.scrollOffset,
                    "data-scroll-offset-calculate-from": this.props.scrollOffsetCalculateFrom,
                    "data-scroll-offset-calculate-to": this.props.scrollOffsetCalculateTo
                }, consentsErrorMsg));
            }
        }]);
        return MulticartConsentValidationComponent;
    }(_ScrollableComponent2.default);

    _exports.default = MulticartConsentValidationComponent;
    MulticartConsentValidationComponent.defaultProps = {
        show: true,
        className: "",
        scrollOffset: 0
    };
});
//# sourceMappingURL=MulticartConsentValidationComponent.js.map