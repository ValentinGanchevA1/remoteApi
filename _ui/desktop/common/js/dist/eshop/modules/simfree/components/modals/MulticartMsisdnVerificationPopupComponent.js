define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "eshop/modules/configurator/components/MsisdnVerificationComponent", "eshop/modules/configurator/components/MsisdnNegativeVerificationComponent", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "../../../configurator/selectors/metaData"], function(_exports, _reactRedux, _react, _Modal, _OraCommonComponents, _MsisdnVerificationComponent, _MsisdnNegativeVerificationComponent, _filter, _filters, _filters2, _selectors, _metaData) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _MsisdnVerificationComponent = babelHelpers.interopRequireDefault(_MsisdnVerificationComponent);
    _MsisdnNegativeVerificationComponent = babelHelpers.interopRequireDefault(_MsisdnNegativeVerificationComponent);

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

    var MulticartMsisdnVerificationPopupComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMsisdnVerificationPopupComponent, _Component);

        var _super = _createSuper(MulticartMsisdnVerificationPopupComponent);

        function MulticartMsisdnVerificationPopupComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartMsisdnVerificationPopupComponent);
            _this = _super.call(this, props);
            _this.state = {
                msisdn: "",
                valid: true
            };
            _this.handleMsisdnChange = _this.handleMsisdnChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.validate = _this.validate.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleKeyPress = _this.handleKeyPress.bind(babelHelpers.assertThisInitialized(_this));
            _this.reset = _this.reset.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MulticartMsisdnVerificationPopupComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.verificationNeeded();
            }
        }, {
            key: "handleMsisdnChange",
            value: function handleMsisdnChange(event) {
                this.setState({
                    msisdn: event.target.value
                });
                this.props.changeMsisdnInput(event.target.value, this.props.msisdnInput.valid);
            }
        }, {
            key: "handleKeyPress",
            value: function handleKeyPress(target) {
                if (target.key === 'Enter') {
                    this.validate();
                }
            }
        }, {
            key: "validate",
            value: function validate() {
                if (this.state.msisdn == "undefined" || !this.state.msisdn) {
                    this.setState({
                        valid: false
                    });
                    return;
                }

                var validMsisdnPatternRE = new RegExp(this.props.descriptions.regexpForNumberValidation);
                var msisdnWithoutSpace = this.state.msisdn.replace(/\s/g, "");

                if (validMsisdnPatternRE.test(msisdnWithoutSpace)) {
                    this.setState({
                        valid: true
                    });
                    this.props.checkMsisdnAndGetOffersAndAddToCart(msisdnWithoutSpace);
                } else {
                    this.setState({
                        valid: false
                    });
                }
            }
        }, {
            key: "reset",
            value: function reset() {
                this.setState({
                    valid: true
                });
                this.props.clearCheckMsisdn();
            }
        }, {
            key: "onCloseModal",
            value: function onCloseModal() {
                console.log('Close modal!!!');
                this.props.closeModal();
                this.reset();
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.isEmpty(this.props.checkMsisdnResult) ? /*#__PURE__*/ _react.default.createElement(_MsisdnVerificationComponent.default, {
                    inputFieldDesc: this.props.descriptions.inputFieldDesc,
                    invalidNumberDesc: this.props.descriptions.invalidNumberDesc,
                    msisdn: this.props.msisdnInput.msisdn,
                    handleMsisdnChange: this.handleMsisdnChange,
                    valid: this.state.valid,
                    handleKeyPress: this.handleKeyPress,
                    validate: this.validate,
                    isMsisdnChecking: this.props.isMsisdnChecking,
                    isCustomerSelected: this.props.isCustomerSelected
                }) : "", !this.isEmpty(this.props.checkMsisdnResult) && this.props.checkMsisdnResult.isPositive === false ? /*#__PURE__*/ _react.default.createElement(_MsisdnNegativeVerificationComponent.default, {
                    description: this.props.checkMsisdnResult.description,
                    reset: this.reset
                }) : "");
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "verificationModalWrapper"
                }, /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "verification-modal",
                    showClose: true,
                    open: this.props.openModal,
                    onClose: this.onCloseModal.bind(this),
                    size: "medium",
                    clickClose: false,
                    escapeClose: false
                }, this.getModalContent()));
            }
        }, {
            key: "isEmpty",
            value: function isEmpty(obj) {
                if (obj == null) return true;
                if (obj.length > 0) return false;
                if (obj.length === 0) return true;
                if (babelHelpers.typeof(obj) !== "object") return true;

                for (var key in obj) {
                    if (hasOwnProperty.call(obj, key)) return false;
                }

                return true;
            }
        }]);
        return MulticartMsisdnVerificationPopupComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            checkMsisdnResult: (0, _filters.getCheckMsisdnResult)(state),
            openModal: (0, _selectors.getOpenVerificationModal)(state),
            isMsisdnChecking: (0, _filters.getIsMsisdnChecking)(state),
            msisdnInput: (0, _filters.getMsisdnInput)(state),
            isCustomerSelected: (0, _metaData.isCustomerSelected)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearCheckMsisdn: function clearCheckMsisdn() {
                return dispatch((0, _filters2.clearCheckMsisdn)());
            },
            checkMsisdnAndGetOffersAndAddToCart: function checkMsisdnAndGetOffersAndAddToCart(msisdn) {
                return dispatch((0, _filter.checkMsisdnAndGetOffersAndAddToCart)(msisdn));
            },
            verificationNeeded: function verificationNeeded() {
                return dispatch(_filter.verificationNeeded);
            },
            closeModal: function closeModal() {
                return dispatch(_filter.doCloseVerificationModal);
            },
            changeMsisdnInput: function changeMsisdnInput(msisdn, valid) {
                return dispatch((0, _filters2.changeMsisdnInput)(msisdn, valid));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartMsisdnVerificationPopupComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartMsisdnVerificationPopupComponent.js.map