define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Expander", "eshop/modules/checkout/components/MulticartConsentValidationComponent", "eshop/modules/core/constants/FactoryTypeEnum"], function(_exports, _react, _OraCommonComponents, _Expander, _MulticartConsentValidationComponent, _FactoryTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MulticartConsentValidationComponent = babelHelpers.interopRequireDefault(_MulticartConsentValidationComponent);
    _FactoryTypeEnum = babelHelpers.interopRequireDefault(_FactoryTypeEnum);

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

    var renderCount = 0;

    var MulticartSingleConsentCheckboxRow = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartSingleConsentCheckboxRow, _React$Component);

        var _super = _createSuper(MulticartSingleConsentCheckboxRow);

        function MulticartSingleConsentCheckboxRow(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartSingleConsentCheckboxRow);
            _this = _super.call(this, props);
            _this.state = {
                showModal: false,
                descriptionExpanded: false
            };
            return _this;
        }

        babelHelpers.createClass(MulticartSingleConsentCheckboxRow, [{
            key: "isBundleAssigmentsAllSelected",
            value: function isBundleAssigmentsAllSelected(selectedConsentCode) {
                var _this2 = this;

                if (this.props.consents.length === 0) {
                    return false;
                }

                var allSelected = true;
                var state;
                var positiveState;
                var selectedPositive;
                var selectedConsent = this.props.consents.find(function(con) {
                    return con.consentCode === selectedConsentCode;
                });

                if (selectedConsent) {
                    positiveState = selectedConsent.states.find(function(state) {
                        return state.positive;
                    });
                    selectedConsent.msisdns.forEach(function(ba) {
                        state = _this2.props.consentStates.find(function(consentState) {
                            return selectedConsent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                        });
                        selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                        allSelected = allSelected && selectedPositive;
                    });
                }

                return allSelected;
            }
        }, {
            key: "agreeAllBundleAssigmentsCheckboxChange",
            value: function agreeAllBundleAssigmentsCheckboxChange(consentCode) {
                if (this.isBundleAssigmentsAllSelected(consentCode)) {
                    this.uncheckBundleAssigmentsAllConsents(consentCode);
                } else {
                    this.acceptBundleAssigmentsAllConsents(consentCode);
                }
            }
        }, {
            key: "acceptBundleAssigmentsAllConsents",
            value: function acceptBundleAssigmentsAllConsents(consentCode) {
                this.onBundleAssigmentChangeCallback(this.getConsentMapping(consentCode, true));
            }
        }, {
            key: "uncheckBundleAssigmentsAllConsents",
            value: function uncheckBundleAssigmentsAllConsents(consentCode) {
                this.onBundleAssigmentChangeCallback(this.getConsentMapping(consentCode, false));
            }
        }, {
            key: "getConsentMapping",
            value: function getConsentMapping(consentCode, checkConsents) {
                var matchingConsents = [];
                var consent = this.props.consents.find(function(con) {
                    return con.consentCode === consentCode;
                });

                if (consent) {
                    if (!consent.readonly) {
                        var stateCode = checkConsents ? consent.states.find(function(state) {
                            return state.positive;
                        }).code : null;

                        if (!consent.bundleAssignments || consent.bundleAssignments.length === 0) {
                            if (!!consent.msisdns && consent.msisdns.length > 0) {
                                consent.msisdns.forEach(function(bundleConsent) {
                                    matchingConsents.push({
                                        consentCode: consent.consentCode,
                                        bundleNo: bundleConsent.bundleNo,
                                        stateCode: stateCode,
                                        relatedWithBonus: consent.isRelatedWithBonus
                                    });
                                });
                            } else {
                                matchingConsents.push({
                                    consentCode: consent.consentCode,
                                    bundleNo: null,
                                    stateCode: stateCode,
                                    relatedWithBonus: consent.isRelatedWithBonus
                                });
                            }
                        } else {
                            matchingConsents = matchingConsents.concat(consent.bundleAssignments.map(function(ba) {
                                return {
                                    consentCode: consent.consentCode,
                                    bundleNo: ba.bundleNo,
                                    stateCode: stateCode,
                                    relatedWithBonus: consent.isRelatedWithBonus
                                };
                            }));
                        }
                    }
                }

                return matchingConsents;
            }
        }, {
            key: "getPropsForBACheckbox",
            value: function getPropsForBACheckbox(consentPositiveState, consentNegativeState, bundleAssignment, title, shouldNotAddExpander) {
                var isChecked = this.isBundleAssigmentsAllSelected(this.props.consent.consentCode);
                return {
                    checked: isChecked,
                    onChange: this.agreeAllBundleAssigmentsCheckboxChange.bind(this, this.props.consent.consentCode),
                    labelClassName: "u-margin-top opl-checkbox o-checkbox u-w-100",
                    text: this.prepareCheckboxText(title, shouldNotAddExpander)
                };
            }
        }, {
            key: "getPropsForCheckbox",
            value: function getPropsForCheckbox(consentPositiveState, consentNegativeState, bundleAssignment, boldLabel, showTitle) {
                var nameSuffix = !!bundleAssignment ? "_" + bundleAssignment.bundleNo : "";
                var consentState;

                if (!!bundleAssignment) {
                    consentState = this.props.state && this.props.state.find(function(s) {
                        return s.bundleNo === bundleAssignment.bundleNo;
                    });
                } else {
                    consentState = this.props.state && this.props.state.find(function(s) {
                        return !s.bundleNo;
                    });
                }

                var checked = false;

                if (!!this.props.state && this.props.state.length !== 0) {
                    if (!!bundleAssignment) {
                        var bundleState = this.props.state.find(function(s) {
                            return s.bundleNo === bundleAssignment.bundleNo;
                        });
                        checked = !!bundleState && bundleState.stateCode == consentPositiveState.code;
                    } else {
                        checked = this.props.state.find(function(a) {
                            return a;
                        }).stateCode == consentPositiveState.code;
                    }
                }

                var actualConsentValue = consentState ? consentState.stateCode : this.props.consent.states.find(function(state) {
                    return !state.positive;
                }).code;
                var errorInput = this.props.consentsErrorList && this.props.isMandatory && (!this.props.state || this.props.state.length == 0 || !this.props.state[0].stateCode);
                var title = this.props.consent.title;

                if (!showTitle) {
                    title = this.props.consent.description;
                    boldLabel = false;
                }

                return {
                    name: this.props.consent.consentCode + nameSuffix,
                    key: name,
                    text: this.prepareCheckboxText(!!bundleAssignment ? bundleAssignment.label : title, !showTitle || this.props.consent.msisdns && this.props.consent.msisdns.length > 0),
                    labelClassName: "opl-checkbox o-checkbox u-w-100 " + (boldLabel ? "" : "u-font-normal"),
                    readOnly: this.props.consent.readonly || this.props.consentsWithBonusLoading && this.props.isUpdating,
                    value: actualConsentValue,
                    checked: checked,
                    onChange: this.onStateChange.bind(this, actualConsentValue, consentPositiveState, consentNegativeState, bundleAssignment),
                    inputClassName: !!errorInput ? " error" : ""
                };
            }
        }, {
            key: "onStateChange",
            value: function onStateChange(actualConsentValue, consentPositiveState, consentNegativeState, bundleAssignment) {
                var bundleNo = !!bundleAssignment ? bundleAssignment.bundleNo : null;
                this.onChangeCallback({
                    consentCode: this.props.consent.consentCode,
                    stateCode: actualConsentValue === consentNegativeState.code ? consentPositiveState.code : consentNegativeState.code,
                    bundleNo: bundleNo
                });
            }
        }, {
            key: "onChangeCallback",
            value: function onChangeCallback(data) {
                if (this.props.consentsWithBonusLoading) {
                    this.props.onUpdate([data]);
                } else {
                    this.props.onChange([data]);
                }
            }
        }, {
            key: "onBundleAssigmentChangeCallback",
            value: function onBundleAssigmentChangeCallback(data) {
                if (this.props.consentsWithBonusLoading) {
                    this.props.onUpdate(data);
                } else {
                    this.props.onChange(data);
                }
            }
        }, {
            key: "defaultStateCode",
            value: function defaultStateCode() {
                var defaultState = this.props.consent.states.find(function(state) {
                    return state.isDefault;
                });
                return defaultState ? defaultState.code : false;
            }
        }, {
            key: "formatMsisdn",
            value: function formatMsisdn(msisdn, factoryType) {
                if (!!msisdn && msisdn.length === 9) {
                    switch (factoryType) {
                        case _FactoryTypeEnum.default.FIX:
                            return msisdn.substring(0, 2) + " " + msisdn.substring(2, 5) + " " + msisdn.substring(5, 7) + " " + msisdn.substring(7, msisdn.length);

                        default:
                            return msisdn.substring(0, 3) + ' ' + msisdn.substring(3, 6) + ' ' + msisdn.substring(6, msisdn.length);
                    }
                } else {
                    return msisdn;
                }
            }
        }, {
            key: "getMsisdnCheckBoxRow",
            value: function getMsisdnCheckBoxRow(consentPositiveState, consentNegativeState, ba, businessImplicationsElement) {
                return /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "l-row u-margin-l u-large-margin"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, this.getPropsForCheckbox(consentPositiveState, consentNegativeState, ba, false, true)));
            }
        }, {
            key: "renderMsisdnMatrix",
            value: function renderMsisdnMatrix(consentPositiveState, consentNegativeState) {
                var _this3 = this;

                return this.props.consent.msisdns && this.props.consent.msisdns.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m u-margin-left-xxl"
                }, this.props.consent.msisdns.map(function(entry) {
                    return _this3.getMsisdnCheckBoxRow(consentPositiveState, consentNegativeState, {
                        bundleNo: entry.bundleNo,
                        label: "Zgoda dla numeru telefonu " + _this3.formatMsisdn(entry.msisdn, entry.factoryType)
                    });
                })) : "";
            }
        }, {
            key: "prepareCheckboxText",
            value: function prepareCheckboxText(text, showNotAddExpander) {
                if (showNotAddExpander) {
                    return /*#__PURE__*/ _react.default.createElement("span", null, text);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "l-col l-col-10 u-no-padding-l"
                    }, text), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "l-col l-col-2 u-small-hide u-right u-padding-right-l"
                    }, this.prepareDescriptionExpander()));
                }
            }
        }, {
            key: "prepareDescriptionExpander",
            value: function prepareDescriptionExpander() {
                var smallPaddings = " u-small-margin-left-l-xl u-small-padding-top-l";
                var mediumPaddings = " u-medium-margin-left-l";
                var largePaddings = " u-large-margin-left-l";
                return /*#__PURE__*/ _react.default.createElement("a", {
                    className: "u-right js-expander__trigger__nested u-inline-block u-text-nowrapl" + smallPaddings + mediumPaddings + largePaddings,
                    href: "#",
                    id: this.props.consent.consentCode + this.props.id + "_control",
                    role: "tab",
                    "aria-controls": this.props.consent.consentCode + this.props.id + "_tab",
                    "aria-expanded": "true"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, "Zwi\u0144"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, "Rozwi\u0144"));
            }
        }, {
            key: "render",
            value: function render() {
                var consentPositiveState = this.props.consent.states.find(function(state) {
                    return state.positive;
                });
                var consentNegativeState = this.props.consent.states.find(function(state) {
                    return !state.positive;
                });
                return /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "js-expander__container__nested u-w-100"
                }, (!this.props.consent.msisdns || this.props.consent.msisdns == null || this.props.consent.msisdns.length == 0) && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, this.getPropsForCheckbox(consentPositiveState, consentNegativeState, null, true, this.props.showTitle)), this.props.consent.msisdns && this.props.consent.msisdns.length > 0 && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, this.getPropsForBACheckbox(consentPositiveState, consentNegativeState, null, this.props.consent.title, false)), /*#__PURE__*/ _react.default.createElement(_MulticartConsentValidationComponent.default, babelHelpers.extends({}, this.props, {
                    className: "u-margin-left-l-xl"
                })), this.props.showTitle && /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-large-hide u-medium-hide"
                }, this.prepareDescriptionExpander()), this.props.showTitle && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__content__nested u-hide--soft u-margin-left-l-xl",
                    id: this.props.consent.consentCode + this.props.id + "_tab",
                    "aria-hidden": "false",
                    role: "tabpanel",
                    "aria-labelledby": this.props.consent.consentCode + this.props.id + "_control"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }), this.props.consent.msisdns && this.props.consent.msisdns.length > 0 && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, this.getPropsForBACheckbox(consentPositiveState, consentNegativeState, null, "Zgoda dla wszystkich poniższych numerów telefonów", true)), this.renderMsisdnMatrix(consentPositiveState, consentNegativeState))));
            }
        }]);
        return MulticartSingleConsentCheckboxRow;
    }(_react.default.Component);

    _exports.default = MulticartSingleConsentCheckboxRow;
});
//# sourceMappingURL=MulticartSingleConsentCheckboxRow.js.map