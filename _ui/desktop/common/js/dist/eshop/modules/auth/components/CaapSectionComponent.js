define(["exports", "react", "./AddressSectionComponent"], function(_exports, _react, _AddressSectionComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _AddressSectionComponent = babelHelpers.interopRequireDefault(_AddressSectionComponent);

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

    var CaapSectionComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(CaapSectionComponent, _React$Component);

        var _super = _createSuper(CaapSectionComponent);

        function CaapSectionComponent(props) {
            babelHelpers.classCallCheck(this, CaapSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(CaapSectionComponent, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                var that = this;
                console.log("msisdn", this.props.msisdn);
                console.log("isPesel", this.isPesel());
                console.log("isPhoneNumber", this.isPhoneNumber());

                if (this.isPesel()) { // no external handler
                } else if (this.isPhoneNumber()) {
                    UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
                        PubSub.subscribe("UXEvent.CAAP.PhoneVerification.Completed", that.smsVerificationCompletedHandlerWithMarketCheck.bind(that));
                        PubSub.subscribe("UXEvent.CAAP.PhoneVerification.Back", function() {
                            that.props.setShowSection("MSISDN");
                        });
                    });
                } else {
                    UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
                        PubSub.subscribe("UXEvent.CAAP.PortalLoginVerification.Completed", that.caapVerificationCompletedHandlerWithMarketCheck.bind(that));
                    });
                }

                $('#authBack').on('click', function() {
                    that.props.setShowSection("MSISDN");
                });
                this.startCaapSectionBodyObserver();
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.isPesel()) {} else if (this.isPhoneNumber()) {
                    UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
                        PubSub.unsubscribe("UXEvent.CAAP.PhoneVerification.Completed");
                        PubSub.unsubscribe("UXEvent.CAAP.PhoneVerification.Back");
                    });
                } else {
                    UX.require(['grants/pubsubevents', 'grants/utils'], function(pubsubevents, utils) {
                        PubSub.unsubscribe("UXEvent.CAAP.PortalLoginVerification.Completed");
                    });
                }
            }
        }, {
            key: "startCaapSectionBodyObserver",
            value: function startCaapSectionBodyObserver() {
                var smsCaapSectionBody = document.getElementById('smsVerificationCaapSectionBody');
                var observerConfig = {
                    childList: true
                };
                var caapSectionBodyObserver = new MutationObserver(this.hideIfTwoBackButtons);
                caapSectionBodyObserver.observe(smsCaapSectionBody, observerConfig);
            }
        }, {
            key: "smsVerificationCompletedHandlerWithMarketCheck",
            value: function smsVerificationCompletedHandlerWithMarketCheck() {
                var _this = this;

                this.props.setIsLoading(true);
                this.props.showMessage("Trwa weryfikacja rynku.");
                this.props.checkMarketCompatibility(this.props.msisdn).then(function(ret) {
                    if (!!ret) {
                        console.log("RYNEK ZGODNY STRZAL PO KONTA");

                        _this.smsVerificationCompletedHandler();
                    } else {
                        console.log("RYNEK NIEZGODNY");

                        _this.props.setIsLoading(false);
                    }
                });
            }
        }, {
            key: "smsVerificationCompletedHandler",
            value: function smsVerificationCompletedHandler() {
                console.log("STRZAL KONTA");
                var msisdn = this.props.msisdn;
                var processType = this.props.processType;
                var chosenExistingAccount = this.props.chosenExistingAccount;
                console.log("STRZAL KONTA2");

                if (this.props.isCartFix || this.props.isFixLP || this.props.isFixPreLP) {
                    console.log("is FIX");
                    this.props.setCimByMsisdn(msisdn);
                    return;
                }

                if (this.props.isCustomerDataStep) {
                    chosenExistingAccount = false;
                }

                if (this.props.isB2B && this.props.channels.sales === "WWW") {
                    chosenExistingAccount = true;
                }

                if (this.props.showModalForAccountIdentify && !this.props.showModalForProcess && !this.props.wwwCimIdBasedOfferSelectorProcesses.includes(processType)) {
                    //for account msisdn
                    this.props.showMessage("Trwa wyszukiwanie konta.");
                    this.props.getAccount(msisdn, chosenExistingAccount);
                } else {
                    //for processs msisdn
                    var propositionId = this.props.propositionId;
                    var selectedDeviceId = this.props.selectedDeviceId;
                    console.log('Authorization completed - verifing');
                    this.props.showMessage("Trwa weryfikacja numeru.");
                    var nextSection = null;
                    console.log("Logged customer data");
                    var isAccountSelected = this.props.loggedCustomerData && this.props.loggedCustomerData.accountCode;
                    var isOnlineCookie = this.props.loggedCustomerData && this.props.loggedCustomerData.isOnlineCookie;
                    if (!isAccountSelected && isOnlineCookie) nextSection = "ACCOUNT";
                    this.props.pushVerifiedMsisdn(msisdn, processType, propositionId, nextSection, selectedDeviceId);
                }
            }
        }, {
            key: "caapVerificationCompletedHandlerWithMarketCheck",
            value: function caapVerificationCompletedHandlerWithMarketCheck() {
                var _this2 = this;

                this.props.setIsLoading(true);
                this.props.checkMarketCompatibility(null).then(function(ret) {
                    if (!!ret) {
                        console.log("RYNEK ZGODNY STRZAL PO KONTA CAAP");

                        _this2.caapVerificationCompletedHandler();
                    } else {
                        console.log("RYNEK NIEZGODNY CAAP");

                        _this2.props.setIsLoading(false);
                    }
                });
            }
        }, {
            key: "caapVerificationCompletedHandler",
            value: function caapVerificationCompletedHandler() {
                var _this3 = this;

                var login = this.props.msisdn;
                this.props.requestLoggedCustomerData();
                var processType = this.props.processType;
                var propositionId = this.props.propositionId;
                var selectedDeviceId = this.props.selectedDeviceId;

                if (this.props.isCartFix || this.props.isFixLP || this.props.isFixPreLP) {
                    console.log("is FIX ");
                    this.props.setCimByLogin(login);
                    return;
                }

                if (this.props.wwwCimIdBasedOfferSelectorProcesses.includes(processType)) {
                    this.props.checkOfferSelector(processType, propositionId, selectedDeviceId).then(function(response) {
                        _this3.showBillingAccountSelectModal();
                    });
                } else {
                    this.showBillingAccountSelectModal();
                }
            }
        }, {
            key: "showBillingAccountSelectModal",
            value: function showBillingAccountSelectModal() {
                if (this.props.showModalForAccountIdentify && !this.props.showModalForProcess) {
                    this.props.showMessage("Trwa wyszukiwanie kont.");
                    this.props.showMobileAccountSelection();
                }
            }
        }, {
            key: "overrideAuthorize",
            value: function overrideAuthorize() {
                if (this.isPesel()) {} else if (this.isPhoneNumber()) {
                    PubSub.publish("UXEvent.CAAP.PhoneVerification.Completed");
                } else {
                    PubSub.publish("UXEvent.CAAP.PortalLoginVerification.Completed");
                }
            }
        }, {
            key: "renderForLocalAuth",
            value: function renderForLocalAuth() {
                if (document.location.href.search('localhost') > 0 || document.location.href.search('10.8.0.66') > 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row u-padding-top-s u-spacing-top-m"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                    }, /*#__PURE__*/ _react.default.createElement("button", {
                        id: "authorize",
                        className: "o-btn opl-btn opl-btn--primary",
                        onClick: this.overrideAuthorize.bind(this)
                    }, "zautoryzowany TEST")));
                } else {
                    return null;
                }
            }
        }, {
            key: "isPesel",
            value: function isPesel() {
                return !!this.props.msisdn && this.props.msisdn.length == 11 && jQuery.isNumeric(this.props.msisdn); //TO DO validate PESEL
            }
        }, {
            key: "isPhoneNumber",
            value: function isPhoneNumber() {
                return !!this.props.msisdn && this.props.msisdn.length == 9 && jQuery.isNumeric(this.props.msisdn);
            }
        }, {
            key: "hideIfTwoBackButtons",
            value: function hideIfTwoBackButtons(mutationsList) {
                if (mutationsList.length > 0) {
                    var buttonInCaapResponse = $('#smsVerificationCaapSectionBody').find('button');

                    if (buttonInCaapResponse.length > 0 && buttonInCaapResponse.get(0).innerText === 'Wstecz') {
                        $('#authBack').addClass("u-acc-hide");
                    }
                }
            }
        }, {
            key: "renderChangePesel",
            value: function renderChangePesel() {
                return /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    id: "authBack"
                }, "zmie\u0144");
            }
        }, {
            key: "renderPeselInfo",
            value: function renderPeselInfo() {
                return /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("h5", null, "PESEL"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h6"
                }, " ", this.props.msisdn, " "), " \xA0\xA0", this.renderChangePesel());
            }
        }, {
            key: "renderSmsCaapInfo",
            value: function renderSmsCaapInfo() {
                return /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.statement, " ", this.props.msisdn);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "",
                    id: "smsVerificationCaapSection"
                }, this.isPesel() && this.renderPeselInfo(), !this.isPesel() && this.renderSmsCaapInfo(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-m u-spacing-m",
                    id: "smsVerificationCaapSectionBody"
                }, this.isPesel() && /*#__PURE__*/ _react.default.createElement(_AddressSectionComponent.default, this.props)), !this.isPesel() && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "authBack",
                    className: "o-btn opl-btn u-w-100"
                }, this.props.descriptions.back))), this.renderForLocalAuth());
            }
        }]);
        return CaapSectionComponent;
    }(_react.default.Component);

    _exports.default = CaapSectionComponent;
});
//# sourceMappingURL=CaapSectionComponent.js.map