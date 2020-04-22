define(["exports", "react", "react-redux", "../actions/voip", "../../core/components/ui/Modal", "./OraRadioButtonGroup", "../../core/components/ui/CmsDescription", "../../../utils/FormatUtils", "../selectors/voip"], function(_exports, _react, _reactRedux, _voip, _Modal, _OraRadioButtonGroup, _CmsDescription, FormatUtils, _voip2) {
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

    var VoipNumbersComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(VoipNumbersComponent, _Component);

        var _super = _createSuper(VoipNumbersComponent);

        function VoipNumbersComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, VoipNumbersComponent);
            _this = _super.call(this, props);
            _this.onAccept = _this.onAccept.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                selectedNumber: _this.props.selectedVoipNumber
            };
            return _this;
        }

        babelHelpers.createClass(VoipNumbersComponent, [{
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                if (this.state.selectedNumber !== nextProps.selectedVoipNumber) {
                    this.setState({
                        selectedNumber: nextProps.selectedVoipNumber
                    });
                }
            }
        }, {
            key: "onAccept",
            value: function onAccept(e) {
                e.preventDefault();
                this.props.selectVoipNumber(this.state.selectedNumber);
                this.props.saveSelectedVoipNumber(this.state.selectedNumber); //TODO: onClose x2?

                this.onClose();
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.props.stopVoipSelection();
                this.props.closeModal();
            }
        }, {
            key: "onValueChange",
            value: function onValueChange(_ref) {
                var value = _ref.value;
                this.setState({
                    selectedNumber: value
                });
            }
        }, {
            key: "formatNumber",
            value: function formatNumber(number) {
                return FormatUtils.formatNumber(number, '## ### ## ##');
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    onClose: function onClose() {
                        return _this2.onClose();
                    },
                    open: this.props.showModal,
                    id: "voipNumbersModal",
                    showClose: true,
                    escapeClose: true,
                    clickClose: true,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement(_CmsDescription.default, {
                    description: this.props.descriptions['secondTitle']
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement(_CmsDescription.default, {
                    description: this.props.descriptions['yourNewNumber']
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h2 u-spacing-xl"
                }, " ", this.formatNumber(this.state.selectedNumber), " "))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical g-gray2-bg u-padding-m u-padding-top-m u-padding-left-m"
                }, this.props.voipNumbers.map(function(item) {
                    return /*#__PURE__*/ _react.default.createElement(_OraRadioButtonGroup.default, {
                        name: "selectedNumber",
                        text: _this2.formatNumber(item),
                        value: item,
                        onValueChange: _this2.onValueChange.bind(_this2),
                        selectedValue: _this2.state.selectedNumber
                    });
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--primary u-w-100",
                    onClick: this.onAccept
                }, "Dalej")))));
            }
        }]);
        return VoipNumbersComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showModal: (0, _voip2.getShowVoipNumbersModal)(state),
            voipNumbers: (0, _voip2.getVoipNumbers)(state),
            selectedVoipNumber: (0, _voip2.getSelectedVoipNumber)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            closeModal: function closeModal() {
                return dispatch((0, _voip.showVoipNumbersModal)(false));
            },
            selectVoipNumber: function selectVoipNumber(number) {
                return dispatch((0, _voip.selectVoipNumber)(number));
            },
            saveSelectedVoipNumber: function saveSelectedVoipNumber(number) {
                return dispatch((0, _voip.saveSelectedVoipNumber)(number));
            },
            stopVoipSelection: function stopVoipSelection() {
                return dispatch((0, _voip.voipSelection)(false));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VoipNumbersComponent);

    _exports.default = _default;
});
//# sourceMappingURL=VoipNumbersComponent.js.map