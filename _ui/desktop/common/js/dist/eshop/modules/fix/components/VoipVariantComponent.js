define(["exports", "react", "react-redux", "../actions/voip", "../../core/components/ui/Modal", "./OraRadioButtonGroup", "../../core/components/ui/CmsDescription", "../../../utils/FormatUtils", "../selectors/voip", "../enum/VoipVariant"], function(_exports, _react, _reactRedux, _voip, _Modal, _OraRadioButtonGroup, _CmsDescription, FormatUtils, _voip2, _VoipVariant) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _OraRadioButtonGroup = babelHelpers.interopRequireDefault(_OraRadioButtonGroup);
    _CmsDescription = babelHelpers.interopRequireDefault(_CmsDescription);
    FormatUtils = babelHelpers.interopRequireWildcard(FormatUtils);
    _VoipVariant = babelHelpers.interopRequireDefault(_VoipVariant);

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

    var VoipVariantComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VoipVariantComponent, _Component);

        var _super = _createSuper(VoipVariantComponent);

        function VoipVariantComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, VoipVariantComponent);
            _this = _super.call(this, props);
            _this.onAccept = _this.onAccept.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                voipVariant: undefined,
                hideModal: false
            };
            return _this;
        }

        babelHelpers.createClass(VoipVariantComponent, [{
            key: "onAccept",
            value: function onAccept(e) {
                e.preventDefault();
                this.props.selectVoipVariant(this.state.voipVariant);

                if (this.state.voipVariant === _VoipVariant.default.NP_INT) {
                    this.props.selectVoipNumber(this.props.designationNumbers[0]);
                    this.props.saveSelectedVoipNumber(this.props.designationNumbers[0]);
                }

                this.onClose();
            }
        }, {
            key: "onClose",
            value: function onClose() {
                var _this2 = this;

                if (this.state.voipVariant !== _VoipVariant.default.NEW_VOIP) {
                    this.props.stopVoipSelection();
                }

                this.setState({
                    hideModal: true
                });
                setTimeout(function() {
                    _this2.props.closeModal();

                    _this2.setState({
                        voipVariant: undefined,
                        hideModal: false
                    });
                }, 400);
            }
        }, {
            key: "onValueChange",
            value: function onValueChange(_ref) {
                var value = _ref.value;
                this.setState({
                    voipVariant: value
                });
            }
        }, {
            key: "formatNumber",
            value: function formatNumber(number) {
                return FormatUtils.formatNumber(number, '## ### ## ##');
            }
        }, {
            key: "getConnectNumber",
            value: function getConnectNumber(selectedNumber) {
                return this.props.descriptions.connectNumber.replace("XXXXXXXXX", this.formatNumber(selectedNumber));
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    onClose: function onClose() {
                        return _this3.onClose();
                    },
                    open: this.props.showModal && !this.state.hideModal,
                    id: "voipVariantsModal",
                    showClose: true,
                    escapeClose: true,
                    clickClose: true,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement(_CmsDescription.default, {
                    description: this.props.descriptions['firstTitle']
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical u-padding-m u-padding-top-m u-padding-left-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraRadioButtonGroup.default, {
                    name: "option",
                    text: this.props.descriptions['newNumber'],
                    value: _VoipVariant.default.NEW_VOIP,
                    onValueChange: this.onValueChange.bind(this),
                    selectedValue: this.state.voipVariant
                }), /*#__PURE__*/ _react.default.createElement(_OraRadioButtonGroup.default, {
                    name: "option",
                    text: this.getConnectNumber(this.props.designationNumbers[0]),
                    value: _VoipVariant.default.NP_INT,
                    onValueChange: this.onValueChange.bind(this),
                    selectedValue: this.state.voipVariant
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement(_CmsDescription.default, {
                    description: this.props.descriptions['descriptionText1']
                }))), this.state.voipVariant === _VoipVariant.default.NP_INT && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement(_CmsDescription.default, {
                    description: this.props.descriptions['descriptionText2']
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--primary u-w-100",
                    onClick: this.onAccept,
                    disabled: !this.state.voipVariant
                }, "Dalej"))));
            }
        }]);
        return VoipVariantComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showModal: (0, _voip2.getShowVoipVariantModal)(state),
            designationNumbers: (0, _voip2.getDesignationNumbers)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            closeModal: function closeModal() {
                return dispatch((0, _voip.showVoipVariantModal)(false));
            },
            selectVoipVariant: function selectVoipVariant(voipVariant) {
                return dispatch((0, _voip.selectVoipVariant)(voipVariant));
            },
            stopVoipSelection: function stopVoipSelection() {
                return dispatch((0, _voip.voipSelection)(false));
            },
            selectVoipNumber: function selectVoipNumber(number) {
                return dispatch((0, _voip.selectVoipNumber)(number));
            },
            saveSelectedVoipNumber: function saveSelectedVoipNumber(number) {
                return dispatch((0, _voip.saveSelectedVoipNumber)(number));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VoipVariantComponent);

    _exports.default = _default;
});
//# sourceMappingURL=VoipVariantComponent.js.map