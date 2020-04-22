define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/errors", "eshop/modules/checkout/actions/data", "eshop/components/OraCommonComponents", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/consents/MulticartSingleConsentRow", "eshop/modules/checkout/actions/validation"], function(_exports, _react, _reactRedux, _Modal, _selectors, _errors, _data, _OraCommonComponents, _app, _MulticartSingleConsentRow, _validation) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _MulticartSingleConsentRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRow);

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

    var MulticartAgreementConfirmationModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartAgreementConfirmationModal, _Component);

        var _super = _createSuper(MulticartAgreementConfirmationModal);

        function MulticartAgreementConfirmationModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartAgreementConfirmationModal);
            _this = _super.call(this, props);
            _this.state = _this.getCleanStateObject();
            return _this;
        }

        babelHelpers.createClass(MulticartAgreementConfirmationModal, [{
            key: "getCleanStateObject",
            value: function getCleanStateObject() {
                return {
                    wasConfirmed: false,
                    originalConsentStates: [],
                    shouldPreserveVisibleState: false
                };
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.registerAgreementConfirmationComponent();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.handleValidationAfterConfirmationAndConsentsUpdate();
            }
        }, {
            key: "onReturn",
            value: function onReturn() {
                this.handleConsentsUpdateAndCartRecalculation();
                this.setState({
                    shouldPreserveVisibleState: true
                });
                this.props.closeAgreementConfirmationModal(this.props.modalVariant);
            }
        }, {
            key: "onConfirm",
            value: function onConfirm() {
                this.handleConsentsUpdateAndCartRecalculation();
                this.setState({
                    wasConfirmed: true,
                    shouldPreserveVisibleState: true
                });
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.handleRevertConsentChanges();
                this.setState(this.getCleanStateObject());
                this.props.closeAgreementConfirmationModal(this.props.modalVariant);
            }
        }, {
            key: "handleRevertConsentChanges",
            value: function handleRevertConsentChanges() {
                if (!this.state.shouldPreserveVisibleState && this.state.originalConsentStates.length > 0) {
                    this.props.changeConsentState(this.state.originalConsentStates);
                }
            }
        }, {
            key: "handleValidationAfterConfirmationAndConsentsUpdate",
            value: function handleValidationAfterConfirmationAndConsentsUpdate() {
                if (this.state.wasConfirmed && !this.props.consentProps.updatingAnyConsent) {
                    this.setState({
                        wasConfirmed: false
                    });
                    this.props.closeAgreementConfirmationModal(this.props.modalVariant, true);
                    this.props.validateData();
                }
            }
        }, {
            key: "handleConsentsUpdateAndCartRecalculation",
            value: function handleConsentsUpdateAndCartRecalculation() {
                if (this.props.modalVariant === "BONUS") {
                    this.props.updateConsentsStates(this.props.consentProps.consentStates);
                }
            }
        }, {
            key: "changeConsentState",
            value: function changeConsentState(data) {
                if (data.length > 0) {
                    this.backupConsentState(data);
                    this.props.changeConsentState(data);
                }
            }
        }, {
            key: "backupConsentState",
            value: function backupConsentState(data) {
                var _this2 = this;

                data.map(function(consentData) {
                    if (!_this2.state.originalConsentStates.find(function(state) {
                            return state.consentCode === consentData.consentCode;
                        })) {
                        _this2.state.originalConsentStates.push(_this2.props.consentProps.consentStates.find(function(state) {
                            return state.consentCode === consentData.consentCode;
                        }));
                    }
                });
            }
        }, {
            key: "setCheckboxConsentStateWithoutRemoteCall",
            value: function setCheckboxConsentStateWithoutRemoteCall(data) {
                console.log("Locally set consents");
                this.changeConsentState(data);
            }
        }, {
            key: "onUpdateForSingleConsent",
            value: function onUpdateForSingleConsent(data) {
                this.setCheckboxConsentStateWithoutRemoteCall(data);
            }
        }, {
            key: "getPropsForConsent",
            value: function getPropsForConsent(consentData) {
                return {
                    key: consentData.consentCode + "AGR_CONF",
                    readOnly: this.props.descriptions.readOnly,
                    consentsWithBonusLoading: consentData.isRelatedWithBonus,
                    isUpdating: this.props.consentProps.updatingAnyConsent,
                    isMandatory: consentData.required,
                    consent: consentData,
                    state: this.props.consentProps.consentStates.filter(function(consentState) {
                        return consentState.consentCode === consentData.consentCode;
                    }),
                    updating: this.props.consentProps.updatingConsents[consentData.consentCode],
                    onChange: this.changeConsentState.bind(this),
                    onUpdate: this.onUpdateForSingleConsent.bind(this),
                    formInputType: "CHECKBOX",
                    id: "AGR_CONF"
                };
            }
        }, {
            key: "renderConsentsSection",
            value: function renderConsentsSection(list) {
                var _this3 = this;

                return !!list && list.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-agreements-list u-no-margin"
                }, list.map(function(consent) {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentRow.default, babelHelpers.extends({}, _this3.getPropsForConsent(consent), {
                        descriptions: _this3.props.descriptions,
                        isDeliveryStep: "false",
                        consents: _this3.props.consentProps.consents,
                        consentStates: _this3.props.consentProps.consentStates
                    }));
                }))) : "";
            }
        }, {
            key: "getConsentListToRender",
            value: function getConsentListToRender() {
                switch (this.props.modalVariant) {
                    case "BONUS":
                        return this.props.consentProps.consents.filter(function(consent) {
                            return consent.isRelatedWithBonus;
                        });

                    case "BIGZONK":
                        return this.props.bigAndZonkConsents;

                    default:
                        return [];
                }
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                switch (this.props.modalVariant) {
                    case "BONUS":
                        return this.props.descriptions.titleBonus;

                    case "BIGZONK":
                        return this.props.descriptions.titleBigZonk;

                    default:
                        return "";
                }
            }
        }, {
            key: "getDescription",
            value: function getDescription() {
                switch (this.props.modalVariant) {
                    case "BONUS":
                        return this.getInvoiceDescription();

                    case "BIGZONK":
                        return this.props.descriptions.descriptionBigZonk;

                    default:
                        return "";
                }
            }
        }, {
            key: "getInvoiceDescription",
            value: function getInvoiceDescription() {
                var emailPrefix = this.props.invoiceMapping !== 'invoiceEmail' || this.props.invoiceEmail && this.props.invoiceEmail.length > 0 ? 'FilledEmail' : '';
                var key = 'descriptionBonus' + emailPrefix;
                return this.props.descriptions[key];
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    onClose: this.onClose.bind(this),
                    open: this.props.showAgreementConfirmationModal,
                    id: "agreementConfirmationModal",
                    showClose: true,
                    escapeClose: false,
                    clickClose: false,
                    size: "narrow"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-no-spacing u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg--box validation message",
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-no-spacing u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg--box validation message",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription()
                    }
                }))), this.renderConsentsSection(this.getConsentListToRender()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-4 medium-offset-by-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onReturn.bind(this),
                    type: "secondary",
                    size: "medium",
                    className: "u-w-100"
                }, "Wr\xF3\u0107")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onConfirm.bind(this),
                    type: "primary",
                    size: "medium",
                    className: "u-w-100"
                }, "Potwierd\u017A")))));
            }
        }]);
        return MulticartAgreementConfirmationModal;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showAgreementConfirmationModal: (0, _selectors.getShowAgreementConfirmationModal)(state),
            modalVariant: (0, _selectors.getAgreementConfirmationModalVariant)(state),
            consentProps: (0, _selectors.getConsentsProps)(state),
            bigAndZonkConsents: (0, _selectors.getBigAndZonkConsents)(state),
            invoiceEmail: (0, _selectors.getInvoiceEmail)(state),
            invoiceMapping: (0, _selectors.getInvoiceEmailMapping)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            closeAgreementConfirmationModal: function closeAgreementConfirmationModal(modalVariant, wasConfirmed) {
                return dispatch((0, _errors.closeAgreementConfirmationModal)(modalVariant, wasConfirmed));
            },
            registerAgreementConfirmationComponent: function registerAgreementConfirmationComponent() {
                return dispatch((0, _data.registerAgreementConfirmationComponent)());
            },
            updateConsentsStates: function updateConsentsStates(data) {
                return dispatch((0, _data.updateConsentsStates)(data));
            },
            changeConsentState: function changeConsentState(data) {
                return dispatch((0, _app.changeConsentState)(data));
            },
            validateData: function validateData() {
                return dispatch((0, _validation.validateData)());
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartAgreementConfirmationModal);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartAgreementConfirmationModal.js.map