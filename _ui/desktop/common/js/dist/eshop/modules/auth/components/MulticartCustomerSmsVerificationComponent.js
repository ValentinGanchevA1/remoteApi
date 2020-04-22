define(["exports", "react", "prop-types", "react-redux", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "./BillingAccountSelectionSectionComponent", "./MsisdnSelectionSectionComponent", "./CaapSectionComponent", "eshop/modules/core/components/ui/Modal", "eshop/modules/configurator/actions/offers", "./LoggedCustomerBarComponent", "eshop/modules/fix/selectors/root", "../selectors/authorization", "../actions/api", "../actions/authorization", "eshop/modules/auth/actions/api", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/MulticartModificationModalComponent", "eshop/modules/cart/selectors", "eshop/modules/checkout/components/modals/CartChangedInfoModal", "../../cart/actions/cart", "../../checkout/components/modals/IncompatibleMarketModal", "eshop/modules/auth/components/StayLoveSectionComponent", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum", "./CheckIsExistingLoveCustomerComponent", "./LeadFormComponent", "../../simfree/selectors", "../../configurator/selectors/filters", "../../configurator/selectors/offers", "../../configurator/utils"], function(_exports, _react, _propTypes, _reactRedux, _filters, _offers, _BillingAccountSelectionSectionComponent, _MsisdnSelectionSectionComponent, _CaapSectionComponent, _Modal, _offers2, _LoggedCustomerBarComponent, _root, _authorization, _api, _authorization2, _api2, _OraCommonComponents, _selectors, _app, _MulticartModificationModalComponent, _selectors2, _CartChangedInfoModal, _cart, _IncompatibleMarketModal, _StayLoveSectionComponent, _TransactionProcessTypeEnum, _ShowSectionNameEnum, _CheckIsExistingLoveCustomerComponent, _LeadFormComponent, _selectors3, _filters2, _offers3, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _BillingAccountSelectionSectionComponent = babelHelpers.interopRequireDefault(_BillingAccountSelectionSectionComponent);
    _MsisdnSelectionSectionComponent = babelHelpers.interopRequireDefault(_MsisdnSelectionSectionComponent);
    _CaapSectionComponent = babelHelpers.interopRequireDefault(_CaapSectionComponent);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _LoggedCustomerBarComponent = babelHelpers.interopRequireDefault(_LoggedCustomerBarComponent);
    _MulticartModificationModalComponent = babelHelpers.interopRequireDefault(_MulticartModificationModalComponent);
    _CartChangedInfoModal = babelHelpers.interopRequireDefault(_CartChangedInfoModal);
    _IncompatibleMarketModal = babelHelpers.interopRequireDefault(_IncompatibleMarketModal);
    _StayLoveSectionComponent = babelHelpers.interopRequireDefault(_StayLoveSectionComponent);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _ShowSectionNameEnum = babelHelpers.interopRequireDefault(_ShowSectionNameEnum);
    _CheckIsExistingLoveCustomerComponent = babelHelpers.interopRequireDefault(_CheckIsExistingLoveCustomerComponent);
    _LeadFormComponent = babelHelpers.interopRequireDefault(_LeadFormComponent);

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

    var MulticartCustomerSmsVerificationComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartCustomerSmsVerificationComponent, _React$Component);

        var _super = _createSuper(MulticartCustomerSmsVerificationComponent);

        function MulticartCustomerSmsVerificationComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartCustomerSmsVerificationComponent);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "renderModalComponent", function(_ref) {
                var setShowSection = _ref.setShowSection,
                    showSection = _ref.showSection,
                    closeAuthModal = _ref.closeAuthModal,
                    selectedPropositionName = _ref.selectedPropositionName,
                    selectedDeviceName = _ref.selectedDeviceName,
                    selectedProcessName = _ref.selectedProcessName;

                switch (showSection) {
                    case _ShowSectionNameEnum.default.CHECK_IS_CUSTOMER: {
                        return /*#__PURE__*/ _react.default.createElement(_CheckIsExistingLoveCustomerComponent.default, {
                            logIn: function logIn() {
                                return setShowSection(_ShowSectionNameEnum.default.MSISDN);
                            },
                            hasNoAccount: function hasNoAccount() {
                                return setShowSection(_ShowSectionNameEnum.default.LEAD_FORM);
                            }
                        });
                    }

                    case _ShowSectionNameEnum.default.LEAD_FORM: {
                        return /*#__PURE__*/ _react.default.createElement(_LeadFormComponent.default, {
                            closeModal: function closeModal() {
                                return closeAuthModal();
                            },
                            selectedPropositionName: selectedPropositionName,
                            selectedDeviceName: selectedDeviceName,
                            selectedProcessName: selectedProcessName
                        });
                    }

                    default:
                        break;
                }
            });
            console.warn("MulticartCustomerSmsVerificationComponent");
            return _this;
        }

        babelHelpers.createClass(MulticartCustomerSmsVerificationComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setCartConfigurationFromUrl();

                if (this.props.descriptions.isPeselAndAddresVerificationEnabled === "true") {
                    this.props.setPeselAndAddressVerificationEnabled(true);
                }

                if (this.props.channels && this.props.channels.sales) {
                    this.props.setSalesChannel(this.props.channels.sales);
                }

                if (this.props.channels && this.props.channels.sales !== "WWW") {
                    this.props.registerBillingAccountPopupToPubSub();
                }

                var height = this.getMyHeight();
                if (height < 100) height = 100;
                this.setState({
                    minHeight: height
                });
                var that = this;
                $("#showAuthModalTrigger").on("click", function() {
                    that.props.logIn();
                });
            }
        }, {
            key: "getMyHeight",
            value: function getMyHeight() {
                var elem = document.getElementById("smsAuthLoader");

                if (!elem) {
                    return 0;
                }

                var height = $(elem).outerHeight();

                if (height < 100) {
                    height = 100;
                }

                console.log("myHeight=", height);
                return height;
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prvProps) {
                if (this.props.isAuthNeeded && !prvProps.isAuthNeeded) {
                    this.props.setShowSection(_ShowSectionNameEnum.default.MSISDN);
                }

                if (this.props.isCallbackNeeded) this.requestCallbackModal(this.props.customerContactMsisdn);

                if (0 && !this.props.isLoading && this.getMyHeight() != this.state.minHeight) {
                    var height = this.getMyHeight();
                    if (height < 100) height = 100;
                    this.setState({
                        minHeight: height
                    });
                }
            }
        }, {
            key: "requestCallbackModal",
            value: function requestCallbackModal(msisdn) {
                this.props.dismissCallbackErrors();
                console.warn("RZUCAM MODALKA PO CALLBACK");
                window._gt = window._gt || [];
                var data = {
                    "cmb_profile": this.props.descriptions.cmbQueueName || "SALES_C_OMNI_CALLBACK",
                    "cmbPhoneNumber": msisdn
                };

                window._gt.push(["event", "portalCmbStart", {
                    data: data
                }]);
            }
        }, {
            key: "renderSeparator",
            value: function renderSeparator() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--s o-separator--full-width u-spacing-top-xl"
                });
            }
        }, {
            key: "renderMessage",
            value: function renderMessage() {
                if (!this.props.msg) {
                    return null;
                }

                var separator = "";
                var onlyMessage = !(this.props.showModalForAccountIdentify || this.props.showModalForProcess);
                var messageType = this.props.msg.type;
                var text = this.props.msg.text;
                var descriptionName = this.props.msg.descriptionName;

                if (!!descriptionName && !!this.props.descriptions && !!this.props.descriptions[descriptionName]) {
                    text = this.props.descriptions[descriptionName];
                }

                if (!onlyMessage) {
                    separator = this.renderSeparator();

                    if (messageType === "progress") {
                        messageType = "info";
                    }
                }

                if (this.props.msg != null && !!text && text !== "") {
                    if ((0, _utils.isHtml)(this.props.msg.text)) {
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: this.props.msg.text
                            }
                        });
                    }

                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: "smsVerificationMessageSection",
                        className: "u-padding-top-m"
                    }, separator, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraMessage, {
                        text: text,
                        type: messageType
                    }));
                }
            }
        }, {
            key: "isCaapAuthenticatedAndInProcess",
            value: function isCaapAuthenticatedAndInProcess(processes) {
                var isUserCaapAuthenticated = this.props.loggedCustomerData && this.props.loggedCustomerData.isOnlineCookie;
                return isUserCaapAuthenticated && processes.indexOf(this.props.processType) !== -1;
            }
        }, {
            key: "msisdnVerificationIsNotRequired",
            value: function msisdnVerificationIsNotRequired() {
                return this.isCaapAuthenticatedAndInProcess([_TransactionProcessTypeEnum.default.RETENTION, _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST, _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS]);
            }
        }, {
            key: "accountSelectionInNotRequired",
            value: function accountSelectionInNotRequired() {
                return this.isCaapAuthenticatedAndInProcess([_TransactionProcessTypeEnum.default.RETENTION, _TransactionProcessTypeEnum.default.INSTALMENT_SALES_OF_GOODS]) || this.accountAlreadyChosen();
            }
        }, {
            key: "accountAlreadyChosen",
            value: function accountAlreadyChosen() {
                return this.props.loggedCustomerData.accountCode || this.props.loggedCustomerData.isMobileCart;
            }
        }, {
            key: "title",
            value: function title(_ref2) {
                var showSection = _ref2.showSection,
                    descriptions = _ref2.descriptions;
                var accountSelectHeader = "Zdecyduj czy zamówienie ma być rozliczane w ramach faktury dla posiadanego już konta, czy nowego.";

                switch (showSection) {
                    case _ShowSectionNameEnum.default.MSISDN:
                        if (this.msisdnVerificationIsNotRequired()) {
                            return "Numer telefonu";
                        } else {
                            return descriptions.title;
                        }

                        case _ShowSectionNameEnum.default.ACCOUNT:
                            return accountSelectHeader;

                        case _ShowSectionNameEnum.default.FIX_PROCESS_CHANGED:
                        case _ShowSectionNameEnum.default.CART_WAS_CHANGED:
                            return "Uwaga!";

                        case _ShowSectionNameEnum.default.INCOMPATIBLE_MARKET_MODAL:
                            return "";

                        case _ShowSectionNameEnum.default.STAY_LOVE:
                            return "Masz ofertę Love dla Firm z rabatami";

                        case _ShowSectionNameEnum.default.CHECK_IS_CUSTOMER:
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                className: "u-inline u-font-small"
                            }, "Czy masz ju\u017C abonament kom\xF3rkowy w Orange?");

                        case _ShowSectionNameEnum.default.LEAD_FORM: {
                            return /*#__PURE__*/ _react.default.createElement("div", {
                                className: "u-inline"
                            }, "Nie masz jeszcze pakietu Love dla Firm -", /*#__PURE__*/ _react.default.createElement("br", {
                                className: "u-small-hide"
                            }), " co dalej");
                        }

                        default:
                            return descriptions.title;
                }
            }
        }, {
            key: "getPropsForBillingAccountComponent",
            value: function getPropsForBillingAccountComponent() {
                return {
                    accountByMsisdn: this.props.accountByMsisdn,
                    billingAccounts: this.props.billingAccounts,
                    isBillingAccountContractLimitExceeded: this.props.isBillingAccountContractLimitExceeded,
                    channels: this.props.channels,
                    isB2B: this.props.isB2B,
                    descriptions: this.props.descriptions,
                    getAccount: this.props.getAccount,
                    getAccountByCode: this.props.getAccountByCode,
                    requestMobileBillingAccountsAndChooseDefault: this.props.requestMobileBillingAccountsAndChooseDefault,
                    requestMobileBillingAccounts: this.props.requestMobileBillingAccounts,
                    selectAccount: this.props.selectAccount,
                    selectedBillingAccountId: this.props.selectedBillingAccountId,
                    showModal: this.props.showModal
                };
            }
        }, {
            key: "getModalContent",
            value: function getModalContent() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.isLoading,
                    id: "smsAuthLoader",
                    parentId: "verification-loader",
                    useHeightFixing: false
                }, this.props.showSection.length > 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        minHeight: this.props.offersLoading ? this.state.minHeight : 100
                    }
                }, this.props.channels.sales === "WWW" && /*#__PURE__*/ _react.default.createElement("h3", {
                    className: "u-no-padding-bottom"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    id: "opl-sms-modal-main-label",
                    "aria-atomic": "true",
                    className: "u-spacing-right-s",
                    "aria-live": "assertive"
                }, " ", this.title(this.props))), this.props.showSection === _ShowSectionNameEnum.default.MSISDN && /*#__PURE__*/ _react.default.createElement(_MsisdnSelectionSectionComponent.default, babelHelpers.extends({}, this.props, {
                    msisdnVerificationIsNotRequired: function msisdnVerificationIsNotRequired() {
                        return _this2.msisdnVerificationIsNotRequired();
                    },
                    accountSelectionInNotRequired: function accountSelectionInNotRequired() {
                        return _this2.accountSelectionInNotRequired();
                    }
                })), this.props.showSection === _ShowSectionNameEnum.default.CAAP && /*#__PURE__*/ _react.default.createElement(_CaapSectionComponent.default, this.props), this.props.showSection === _ShowSectionNameEnum.default.ACCOUNT && /*#__PURE__*/ _react.default.createElement(_BillingAccountSelectionSectionComponent.default, this.getPropsForBillingAccountComponent()), this.props.showSection === _ShowSectionNameEnum.default.FIX_PROCESS_CHANGED && /*#__PURE__*/ _react.default.createElement(_MulticartModificationModalComponent.default, this.props), this.props.showSection === _ShowSectionNameEnum.default.CART_WAS_CHANGED && /*#__PURE__*/ _react.default.createElement(_CartChangedInfoModal.default, {
                    text: this.props.descriptions.cartChangedInfoContent,
                    buttonText: this.props.descriptions.cartChangedInfoButtonText,
                    buttonClick: function buttonClick() {
                        return _this2.onClose();
                    }
                }), this.props.showSection === _ShowSectionNameEnum.default.STAY_LOVE && /*#__PURE__*/ _react.default.createElement(_StayLoveSectionComponent.default, this.props), this.props.showSection === _ShowSectionNameEnum.default.INCOMPATIBLE_MARKET_MODAL && /*#__PURE__*/ _react.default.createElement(_IncompatibleMarketModal.default, babelHelpers.extends({}, this.props, {
                    id: "incompatible-market-modal",
                    onClickLightLogout: this.props.onClickLightLogout,
                    removeFromCart: this.props.onClickRemove
                })), this.renderModalComponent(this.props))), this.renderMessage());
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.props.dismissAuthErrors();

                if (this.props.showSection === _ShowSectionNameEnum.default.CART_WAS_CHANGED) {
                    this.props.clearCartChangedFlag();
                }

                this.props.setShowSection("");
                $("#msisdn").val("");
                $("#smsVerificationCaapSectionBody").html("");

                if (this.props.showModal) {
                    this.props.clearMessage();
                    this.props.authorizationFailure();
                }
            }
        }, {
            key: "getModalProps",
            value: function getModalProps() {
                return {
                    size: "narrow",
                    escapeClose: true,
                    showClose: true,
                    clickClose: true
                };
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "authModalWrapper"
                }, /*#__PURE__*/ _react.default.createElement(_LoggedCustomerBarComponent.default, this.props), /*#__PURE__*/ _react.default.createElement("button", {
                    id: "showAuthModalTrigger",
                    className: "u-hide"
                }), /*#__PURE__*/ _react.default.createElement(_Modal.default, babelHelpers.extends({
                    id: "auth-modal"
                }, this.getModalProps(), {
                    open: this.props.showModal,
                    onClose: function onClose() {
                        return _this3.onClose();
                    }
                }), this.getModalContent()), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "smsVerificationSection"
                }));
            }
        }]);
        return MulticartCustomerSmsVerificationComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            propositionId: (0, _offers.getSelectedOfferId)(state),
            selectedDeviceId: (0, _offers.getSelectedDeviceId)(state),
            clientContext: (0, _filters.getClientContext)(state),
            isLoading: (0, _authorization.getIsLoading)(state),
            processType: (0, _filters.getSelectedProcessTypeValue)(state),
            msg: (0, _authorization.getAuthMessage)(state),
            showModal: (0, _authorization.getAccountSelectionModalVisibility)(state) || (0, _authorization.getAuthorizationForProcessModalVisibility)(state) || (0, _authorization.getAuthorizationForAccountIdentifyModalVisibility)(state) || (0, _authorization.getAuthMessage)(state) != '' && (0, _authorization.getAuthMessage)(state) != null,
            showModalForProcess: (0, _authorization.getAuthorizationForProcessModalVisibility)(state),
            showModalForAccountIdentify: (0, _authorization.getAuthorizationForAccountIdentifyModalVisibility)(state),
            billingAccountChangeOn: (0, _authorization.getBillingAccountChangeVisibility)(state),
            showSection: (0, _authorization.getShowSection)(state),
            showAccountSelection: (0, _authorization.getAccountSelectionModalVisibility)(state),
            isBillingAccountContractLimitExceeded: (0, _authorization.getBillingAccountContractLimitExceeded)(state),
            billingAccounts: (0, _authorization.getBillingAccountsForSelection)(state),
            selectedBillingAccountId: (0, _authorization.getSelectedBillingAccountId)(state),
            errors: (0, _selectors.getAuthCheckoutErrors)(state),
            isAuthNeeded: (0, _selectors.isAuthNeeded)(state),
            isCallbackNeeded: (0, _selectors.isCallbackNeeded)(state),
            chosenExistingAccount: (0, _authorization.getChosenExistingAccount)(state),
            msisdn: (0, _authorization.getMSISDN)(state),
            isExistingCustomer: (0, _selectors.isExistingCustomer)(state),
            isCustomerDataStep: (0, _selectors.getIsCustomerDataStep)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            loggedCustomerData: (0, _authorization.getLoggedCustomerData)(state),
            customerContactMsisdn: (0, _selectors.getCustomerContactMsisdn)(state),
            showLogoutConfirmationModal: (0, _authorization.getShowLogoutConfirmationModal)(state),
            isCartFix: (0, _selectors2.isCartFix)(state),
            isOnlineCookie: (0, _authorization.getIsOnlineCookie)(state),
            accountByMsisdn: (0, _authorization.getAccountByMsisdn)(state),
            isFixLP: (0, _root.isLandingPage)(state),
            isFixPreLP: (0, _root.isPreLandingPage)(state),
            isFix: (0, _root.isLandingPage)(state) || (0, _root.isPreLandingPage)(state) || (0, _selectors2.isCartFix)(state),
            marketIncompatibility: (0, _authorization.getMarketIncompatible)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B" || (0, _authorization.getLoggedCustomerData)(state) && (0, _authorization.getLoggedCustomerData)(state).market === "B2B",
            wwwCimIdBasedOfferSelectorProcesses: (0, _authorization.getWwwCimIdBasedOfferSelectorProcesses)(),
            isPeselAndAddressVerified: (0, _authorization.isPeselAndAddressVerified)(state),
            enablePeselAuth: (0, _authorization.isPeselAndAddressVerificationEnabled)(state),
            selectedPropositionName: (0, _offers.getNameForSelectedOffer)(state) || "",
            selectedDeviceName: (0, _selectors3.getSelectedDeviceObject)(state) && (0, _selectors3.getSelectedDeviceObject)(state).name || (0, _offers3.getSelectedOffersDeviceName)(state) && (0, _offers3.getSelectedOffersDeviceName)(state).name || "",
            selectedProcessName: (0, _filters2.getSelectedProcessTypeObject)(state) && (0, _filters2.getSelectedProcessTypeObject)(state).description || ""
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setMSISDN: function setMSISDN(msisdn) {
                return dispatch((0, _authorization2.setMSISDN)(msisdn));
            },
            authorizationSuccess: function authorizationSuccess(continueWithODF, account) {
                return dispatch((0, _authorization2.authorizationSuccess)(continueWithODF, account));
            },
            stayLove: function stayLove() {
                return dispatch((0, _authorization2.stayLove)());
            },
            authorizationFailure: function authorizationFailure() {
                return dispatch((0, _authorization2.authorizationFailure)());
            },
            closeAuthModal: function closeAuthModal() {
                return dispatch((0, _authorization2.closeAuthModal)());
            },
            setMsisdn: function setMsisdn(msisdn, propositionId) {
                return dispatch((0, _api.setMsisdn)(msisdn, propositionId));
            },
            getAccount: function getAccount(msisdn, useExisting) {
                return dispatch((0, _api.getAccount)(msisdn, useExisting));
            },
            getAccountByCode: function getAccountByCode(accountCode) {
                return dispatch((0, _api.getAccountByCode)(accountCode));
            },
            checkMarketCompatibility: function checkMarketCompatibility(msisdn) {
                return dispatch((0, _api.checkMarketCompatibility)(msisdn));
            },
            setCimByMsisdn: function setCimByMsisdn(msisdn) {
                return dispatch((0, _api.setCimByMsisdn)(msisdn));
            },
            requestMobileBillingAccounts: function requestMobileBillingAccounts() {
                return dispatch((0, _api.requestMobileBillingAccounts)());
            },
            pushVerifiedMsisdn: function pushVerifiedMsisdn(msisdn, processType, propositionId, nextSection, selectedDeviceId) {
                return dispatch((0, _api.pushVerifiedMsisdn)(msisdn, processType, propositionId, nextSection, selectedDeviceId));
            },
            pushAccount: function pushAccount(msisdn, useExisting) {
                return dispatch((0, _api.pushAccount)(msisdn, useExisting));
            },
            showMessage: function showMessage(msg) {
                return dispatch((0, _authorization2.showMessage)(msg));
            },
            setShowSection: function setShowSection(section) {
                return dispatch((0, _authorization2.setShowSection)(section));
            },
            showError: function showError(msg) {
                return dispatch((0, _authorization2.showError)(msg));
            },
            logIn: function logIn() {
                return dispatch((0, _authorization2.logIn)());
            },
            safeLogOut: function safeLogOut() {
                return dispatch((0, _authorization2.safeLogOut)());
            },
            selectAccount: function selectAccount(accountId, accountCode) {
                return dispatch((0, _api.selectAccount)(accountId, accountCode));
            },
            clearMessage: function clearMessage() {
                return dispatch((0, _authorization2.clearMessage)());
            },
            setIsLoading: function setIsLoading(isLoading) {
                return dispatch((0, _authorization2.setIsLoading)(isLoading));
            },
            setSalesChannel: function setSalesChannel(channel) {
                return dispatch((0, _authorization2.setSalesChannel)(channel));
            },
            registerBillingAccountPopupToPubSub: function registerBillingAccountPopupToPubSub() {
                return dispatch((0, _authorization2.registerBillingAccountPopupToPubSub)());
            },
            requestMobileBillingAccountsAndChooseDefault: function requestMobileBillingAccountsAndChooseDefault() {
                return dispatch((0, _api2.requestMobileBillingAccountsAndChooseDefault)());
            },
            onClickLightLogout: function onClickLightLogout() {
                return dispatch((0, _api.lightLogout)());
            },
            onClickRemove: function onClickRemove() {
                dispatch((0, _cart.removeFromCart)(null));
                dispatch((0, _api.requestLoggedCustomerData)());
            },
            requestLoggedCustomerData: function requestLoggedCustomerData() {
                return dispatch((0, _api.requestLoggedCustomerData)());
            },
            showMobileAccountSelection: function showMobileAccountSelection() {
                return dispatch((0, _authorization2.showMobileAccountSelection)());
            },
            dismissCallbackErrors: function dismissCallbackErrors() {
                return dispatch((0, _app.dismissCallbackErrors)());
            },
            dismissAuthErrors: function dismissAuthErrors() {
                return dispatch((0, _app.dismissAuthErrors)());
            },
            ommitAccountAuth: function ommitAccountAuth() {
                return dispatch((0, _authorization2.ommitAccountAuth)());
            },
            setCartConfigurationFromUrl: function setCartConfigurationFromUrl(propositionId, deviceId) {
                return dispatch((0, _offers2.setCartConfigurationFromUrl)(propositionId, deviceId));
            },
            hideLogoutConfirmationModal: function hideLogoutConfirmationModal() {
                return dispatch((0, _authorization2.hideLogoutConfirmationModal)());
            },
            setCimByLogin: function setCimByLogin(login) {
                return dispatch((0, _api.setCimByLogin)(login));
            },
            clearCartChangedFlag: function clearCartChangedFlag() {
                return dispatch((0, _api.clearCartChangedFlag)());
            },
            checkOfferSelector: function checkOfferSelector(processType, propositionId, selectedDeviceId) {
                return dispatch((0, _api.checkOfferSelector)(processType, propositionId, selectedDeviceId));
            },
            requestPeselAndAddressAuth: function requestPeselAndAddressAuth(simpleAddress, pesel, timeout) {
                return dispatch((0, _api.requestPeselAndAddressAuth)(simpleAddress, pesel, timeout));
            },
            setPeselAndAddressVerificationEnabled: function setPeselAndAddressVerificationEnabled(enabled) {
                return dispatch((0, _authorization2.setPeselAndAddressVerificationEnabled)(enabled));
            }
        };
    };

    MulticartCustomerSmsVerificationComponent.propTypes = {
        showSection: _propTypes.default.string
    };
    var SmsVerification = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartCustomerSmsVerificationComponent);
    var _default = SmsVerification;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerSmsVerificationComponent.js.map