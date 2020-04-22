define(["exports", "react", "../../magnum2/components/InputWithFloatingLabel", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum"], function(_exports, _react, _InputWithFloatingLabel, _TransactionProcessTypeEnum, _ShowSectionNameEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _InputWithFloatingLabel = babelHelpers.interopRequireDefault(_InputWithFloatingLabel);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _ShowSectionNameEnum = babelHelpers.interopRequireDefault(_ShowSectionNameEnum);

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

    var MsisdnSelectionSectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MsisdnSelectionSectionComponent, _Component);

        var _super = _createSuper(MsisdnSelectionSectionComponent);

        function MsisdnSelectionSectionComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MsisdnSelectionSectionComponent);
            _this = _super.call(this, props);
            _this.state = {
                msisdn: ""
            };
            return _this;
        }

        babelHelpers.createClass(MsisdnSelectionSectionComponent, [{
            key: "inputLabel",
            value: function inputLabel() {
                if (this.props.isFix && this.props.enablePeselAuth) {
                    return this.props.descriptions.inputLabelWithPesel || "Podaj swój nr telefonu, login lub PESEL";
                }

                if (this.props.showModalForProcess) {
                    return this.props.descriptions.inputLabelPhoneOnly || "Podaj numer telefonu";
                } else {
                    return this.props.descriptions.inputLabel;
                }
            }
        }, {
            key: "toHTML",
            value: function toHTML(content) {
                return {
                    __html: content
                };
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(document.getElementById("smsVerificationMsisdnSection"));
                console.log("unmount sms");
            }
        }, {
            key: "ommitAccountAuth",
            value: function ommitAccountAuth() {
                this.props.ommitAccountAuth();
            }
        }, {
            key: "validatePesel",
            value: function validatePesel(pesel) {
                var reg = /^[0-9]{11}$/;

                if (reg.test(pesel) === false) {
                    return false;
                } else {
                    var digits = ("" + pesel).split("");

                    if (parseInt(pesel.substring(4, 6)) > 31 || parseInt(pesel.substring(2, 4) % 20) > 12) {
                        return false;
                    }

                    var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;

                    if (checksum === 0) {
                        checksum = 10;
                    }

                    checksum = 10 - checksum;
                    return parseInt(digits[10]) === checksum;
                }
            }
        }, {
            key: "validateMsisdn",
            value: function validateMsisdn() {
                console.log("VALIDATE MSISDN FIELD");
                var msisdn = this.getMsisdnInputVal();
                if (!msisdn) return true;
                console.log(this.getMsisdnInputVal());
                if (msisdn.length === 9 && jQuery.isNumeric(msisdn)) return true;

                if (!this.props.showModalForProcess) {
                    if (this.props.enablePeselAuth && msisdn.length === 11 && jQuery.isNumeric(msisdn)) return this.validatePesel(msisdn);
                    else return !msisdn || msisdn && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(msisdn);
                }
            }
        }, {
            key: "getMsisdnInputVal",
            value: function getMsisdnInputVal() {
                return this.state && this.state.msisdn && this.state.msisdn.replace(/-/g, "");
            }
        }, {
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                return {
                    name: name,
                    value: this.props[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    valid: this._validate.bind(this)(name),
                    validateEmpty: this.props.isExistingCustomer,
                    disabled: this.props.readOnly,
                    onChange: this.props.changeCustomerContactFormField
                };
            }
        }, {
            key: "onSubmit",
            value: function onSubmit(event) {
                event.preventDefault();
                console.log("OnSubmit login token");

                if (!this.validateMsisdn()) {
                    if (this.props.isFix && this.props.enablePeselAuth) this.props.showError("Wpisz poprawny numer, login lub pesel!");
                    else if (this.props.showModalForProcess) this.props.showError("Wpisz poprawny numer!");
                    else this.props.showError("Wpisz poprawny numer lub login!");
                    this.refInput.focus();
                    return;
                }

                var msisdn = this.getMsisdnInputVal();
                this.props.clearMessage();
                this.props.setMSISDN(msisdn);
                console.log("getting msisdn from field= " + msisdn);

                if (this.props.msisdnVerificationIsNotRequired()) {
                    console.log("msisdn holder verification is not required");
                    this.props.showMessage("Trwa weryfikacja numeru.");
                    this.props.pushVerifiedMsisdn(msisdn, this.props.processType, this.props.propositionId, !this.props.accountSelectionInNotRequired() && "ACCOUNT", this.props.selectedDeviceId);
                } else {
                    this.props.setShowSection(_ShowSectionNameEnum.default.CAAP);
                    this.props.showMessage("Trwa weryfikacja numeru.");
                    this.props.setMsisdn(msisdn, this.props.processType);
                }
            }
        }, {
            key: "onMsisdnFieldChange",
            value: function onMsisdnFieldChange(valiObj) {
                this.setState({
                    msisdn: valiObj.value
                });
            }
        }, {
            key: "isTanto",
            value: function isTanto() {
                return _TransactionProcessTypeEnum.default.isTanto(this.props.processType);
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var processType = this.props.processType;
                var text = this.props.descriptions[["mainLabel", processType].filter(Boolean).join(".")];
                var accountIndentify = this.props.showModalForAccountIdentify && !this.props.showModalForProcess;

                if (accountIndentify) {
                    text = this.props.descriptions[["mainLabel", "accountIdentify", processType].filter(Boolean).join(".")];
                }

                if (this.props.isCustomerDataStep && this.props.isAuthNeeded) {
                    text = this.props.descriptions["mainLabel.customerExists"];
                }

                var showOmmit = !!(this.props.clientContext && this.props.showModalForAccountIdentify && !this.props.showModalForProcess && !this.isTanto());
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "smsVerificationMsisdnSection"
                }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
                    id: "opl-sms-modal-main-content",
                    "aria-atomic": "true",
                    className: "u-spacing-right-s",
                    "aria-live": "assertive",
                    dangerouslySetInnerHTML: this.toHTML(text)
                })), /*#__PURE__*/ _react.default.createElement(MessageContainer, {
                    content: this.toHTML(getDesc('infoMessage', this.props.descriptions, this.props.processType))
                }), /*#__PURE__*/ _react.default.createElement("form", {
                    id: "msisdnForm",
                    onSubmit: this.onSubmit.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 u-small-padding"
                }, /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, {
                    id: "msisdn",
                    value: this.state.msisdn,
                    required: true,
                    onChange: this.onMsisdnFieldChange.bind(this),
                    placeholder: this.inputLabel(),
                    focusOnMount: true,
                    showValidation: true,
                    showErrors: true,
                    valid: this.validateMsisdn(),
                    errors: !this.validateMsisdn(),
                    overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    id: "sms",
                    type: "submit",
                    className: "o-btn opl-btn opl-btn--primary u-w-100"
                }, this.props.descriptions.next)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-m"
                }, this.props.showModalForAccountIdentify && !this.props.showModalForProcess && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col  l-col-small-12 u-text-left u-left " + (showOmmit ? " l-col-6" : " l-col-12")
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.registerLabel
                    }
                })), showOmmit && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6  l-col-small-12  u-text-right u-right"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    id: "ommit",
                    href: "#",
                    onClick: function onClick() {
                        return _this2.ommitAccountAuth();
                    },
                    className: ""
                }, this.props.descriptions.ommit || "Dodaj do koszyka bez logowania"))));
            }
        }]);
        return MsisdnSelectionSectionComponent;
    }(_react.Component);

    var MessageContainer = function MessageContainer(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-msg opl-msg--box opl-msg--info u_margin-l u-margin-top-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__item"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__icon u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            "aria-hidden": "true",
            className: "g-icon g-icon--info g-icon--before g-icon--s"
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-icon-list__text u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            dangerouslySetInnerHTML: props.content
        })))));
    };

    var getDesc = function getDesc(name, values, filter) {
        var desc = values[[name, filter].filter(Boolean).join(".")];
        return desc || values[name] || "This is default message for smsVerificationComponent based on \"infoMessage\" CMSDescriptionItem.";
    };

    var _default = MsisdnSelectionSectionComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MsisdnSelectionSectionComponent.js.map