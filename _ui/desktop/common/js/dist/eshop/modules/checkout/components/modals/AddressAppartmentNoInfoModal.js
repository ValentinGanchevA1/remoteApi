define(["exports", "react", "react-redux", "../../selectors", "../../actions/app", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../assistMode/OraCheckoutAssistModeConfirmationPopup"], function(_exports, _react, _reactRedux, _selectors, _app, _Modal, _OraCommonComponents, _OraCheckoutAssistModeConfirmationPopup) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _OraCheckoutAssistModeConfirmationPopup = babelHelpers.interopRequireDefault(_OraCheckoutAssistModeConfirmationPopup);

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

    var AddressAppartmentNoInfoModalView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(AddressAppartmentNoInfoModalView, _Component);

        var _super = _createSuper(AddressAppartmentNoInfoModalView);

        function AddressAppartmentNoInfoModalView(props) {
            babelHelpers.classCallCheck(this, AddressAppartmentNoInfoModalView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(AddressAppartmentNoInfoModalView, [{
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "checkOpenModal",
            value: function checkOpenModal() {
                return this.props.errors && this.props.errors.length > 0 || this.props.isEarlierInstallationConsentNotAcceptedModalVisible;
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.props.dismiss();
            }
        }, {
            key: "onReject",
            value: function onReject() {
                if (!this.props.isEarlierInstallationConsentNotAcceptedModalVisible) {
                    this.props.dismiss();
                } else {
                    this.props.closeEarlierInstallationConsentNotAcceptedModal();
                }
            }
        }, {
            key: "onAccept",
            value: function onAccept() {
                if (!this.props.isEarlierInstallationConsentNotAcceptedModalVisible) {
                    this.props.actionNext();
                } else {
                    this.props.earlierInstallationConsentNotAcceptedModalIsAccepted();
                    this.props.closeEarlierInstallationConsentNotAcceptedModal();
                    this.props.actionOnceAgain();
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: 'multicart-appartment-no-verification-modal',
                    showClose: false,
                    open: this.checkOpenModal(),
                    size: "narrow",
                    clickClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-m u-small-padding-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-no-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg--box validation message",
                    dangerouslySetInnerHTML: this.toHTML(this.props.content)
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onReject.bind(this),
                    type: "secondary",
                    size: "medium",
                    className: "u-w-100 opl-btn--yellow"
                }, this.props.descriptions.leftButton)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onAccept.bind(this),
                    type: "green",
                    size: "medium",
                    className: "u-w-100"
                }, this.props.descriptions.rightButton)))));
            }
        }]);
        return AddressAppartmentNoInfoModalView;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            errors: (0, _selectors.getFixAppartmentNoValidation)(state),
            isEarlierInstallationConsentNotAcceptedModalVisible: (0, _selectors.isEarlierInstallationConsentNotAcceptedModalVisible)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            dismiss: function dismiss() {
                return dispatch((0, _app.dismissBackendValidationErrors)());
            },
            actionNext: function actionNext() {
                return dispatch((0, _app.gotoNextCheckoutStep)());
            },
            earlierInstallationConsentNotAcceptedModalIsAccepted: function earlierInstallationConsentNotAcceptedModalIsAccepted() {
                return dispatch((0, _app.acceptEarlierInstallationConsentNotAcceptedModal)());
            },
            closeEarlierInstallationConsentNotAcceptedModal: function closeEarlierInstallationConsentNotAcceptedModal() {
                return dispatch((0, _app.closeEarlierInstallationConsentNotAcceptedModal)());
            },
            actionOnceAgain: function actionOnceAgain() {
                return dispatch((0, _app.doCheckoutStep)());
            }
        };
    };

    var AddressAppartmentNoInfoModal = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddressAppartmentNoInfoModalView);
    var _default = AddressAppartmentNoInfoModal;
    _exports.default = _default;
});
//# sourceMappingURL=AddressAppartmentNoInfoModal.js.map