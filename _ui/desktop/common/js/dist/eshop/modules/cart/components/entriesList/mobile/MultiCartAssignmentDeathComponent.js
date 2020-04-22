define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../../actions/cart", "../../../selectors", "../../../../checkout/actions/data", "../../../../checkout/components/MulticartValidationComponent"], function(_exports, _react, _reactRedux, _OraCommonComponents, _cart, _selectors, _data, _MulticartValidationComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);

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

    var MultiCartAssignmentDeathComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartAssignmentDeathComponent, _Component);

        var _super = _createSuper(MultiCartAssignmentDeathComponent);

        function MultiCartAssignmentDeathComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MultiCartAssignmentDeathComponent);
            _this = _super.call(this, props);

            if (_this.props.entry.processType === 'ASSIGNMENT_DEATH') {
                _this.props.registerNextStepCondition('certificateDeathConfirm');
            }

            return _this;
        }

        babelHelpers.createClass(MultiCartAssignmentDeathComponent, [{
            key: "handleCheckboxChange",
            value: function handleCheckboxChange(event) {
                this.props.changeCertificateDeathConfimation(event.target.checked);
                this.props.checkAssignmentDeathBox();
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.entry.processType === 'ASSIGNMENT_DEATH' ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console--only u-margin-top"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "certificateDeathConfirm",
                    show: !this.props.deathCertificateConfirmed,
                    className: "u-padding-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold u-padding-all-l u-no-padding-top u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Przed z\u0142o\u017Ceniem zam\xF3wienia potwierd\u017A akt zgonu")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    checked: this.props.assignmentDeathCheckBoxState,
                    onChange: this.handleCheckboxChange.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, "Potwierdzam akt zgonu")))) : null;
            }
        }]);
        return MultiCartAssignmentDeathComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            deathCertificateConfirmed: (0, _selectors.getDeathCertificateConfirmed)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            changeCertificateDeathConfimation: function changeCertificateDeathConfimation(value) {
                return dispatch((0, _cart.changeCertificateDeathConfimation)(value));
            },
            registerNextStepCondition: function registerNextStepCondition(condition) {
                return dispatch((0, _data.registerNextStepCondition)(condition));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MultiCartAssignmentDeathComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MultiCartAssignmentDeathComponent.js.map