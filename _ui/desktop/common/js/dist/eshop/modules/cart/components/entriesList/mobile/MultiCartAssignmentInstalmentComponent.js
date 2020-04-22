define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../../actions/cart", "../../../selectors", "eshop/utils/OnlineUtils"], function(_exports, _react, _reactRedux, _OraCommonComponents, _cart, _selectors, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var MultiCartAssignmentInstalmentComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartAssignmentInstalmentComponent, _Component);

        var _super = _createSuper(MultiCartAssignmentInstalmentComponent);

        function MultiCartAssignmentInstalmentComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MultiCartAssignmentInstalmentComponent);
            _this = _super.call(this, props);

            if (_OnlineUtils.default.isAssignment(_this.props.entry.processType)) {
                _this.props.setPaymentPlanAssignValue(!!_this.props.entry.isPaymentPlanMigrated && _this.props.entry.hasPaymentPlanToAssign, _this.props.entry.bundleNo, false);
            }

            return _this;
        }

        babelHelpers.createClass(MultiCartAssignmentInstalmentComponent, [{
            key: "render",
            value: function render() {
                return _OnlineUtils.default.isAssignment(this.props.entry.processType) ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console--only u-padding-all-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.assignmentDescription || "Usługa jest przenoszona 1:1 ze wszystkimi usługami aktywnymi.")), this.props.entry.bundleType !== 'TRANSFER' ? /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("fieldset", null, this.props.entry.hasPaymentPlanToAssign && this._renderOption(this.props.entry.processType === 'ASSIGNMENT_DEATH' || !!this.props.paymentPlanAssignValue[this.props.entry.bundleNo], true, "with_instalment" + this.props.entry.bundleNo, this.props.descriptions.withInstalment || "Przekazuję z ratami za telefon"), this.props.entry.processType !== 'ASSIGNMENT_DEATH' && this._renderOption(!this.props.paymentPlanAssignValue[this.props.entry.bundleNo], false, "without_instalment" + this.props.entry.bundleNo, this.props.descriptions.withoutInstalment || "Przekazuję bez rat"))) : null) : null;
            }
        }, {
            key: "_renderOption",
            value: function _renderOption(checked, value, id, description) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-font-bold u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-radio o-radio u-block u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "radio",
                    name: "assignment-option-" + id,
                    checked: checked,
                    onClick: this.setPaymentPlanAssignValue.bind(this, value)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label u-table"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-table-cell u-vertical-top u-padding-left"
                }, description))));
            }
        }, {
            key: "setPaymentPlanAssignValue",
            value: function setPaymentPlanAssignValue(value) {
                console.log("setting payment plan assignment " + value);
                this.props.setPaymentPlanAssignValue(value, this.props.entry.bundleNo, true);
            }
        }]);
        return MultiCartAssignmentInstalmentComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            paymentPlanAssignValue: (0, _selectors.getPaymentPlanAssignValue)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setPaymentPlanAssignValue: function setPaymentPlanAssignValue(value, bundleNo, withRecalculate) {
                return dispatch((0, _cart.setPaymentPlanAssignValue)(value, bundleNo, withRecalculate));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MultiCartAssignmentInstalmentComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MultiCartAssignmentInstalmentComponent.js.map