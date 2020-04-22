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

    var MulticartSingleConsentRadioButtonRow = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartSingleConsentRadioButtonRow, _React$Component);

        var _super = _createSuper(MulticartSingleConsentRadioButtonRow);

        function MulticartSingleConsentRadioButtonRow(props) {
            babelHelpers.classCallCheck(this, MulticartSingleConsentRadioButtonRow);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartSingleConsentRadioButtonRow, [{
            key: "getPropsForRadio",
            value: function getPropsForRadio(state, bundleAssignment) {
                var nameSuffix = !!bundleAssignment ? "_" + bundleAssignment.bundleNo : "";
                var checked = false;

                if (!!this.props.state && this.props.state.length !== 0) {
                    if (!!bundleAssignment) {
                        var bundleState = this.props.state.find(function(s) {
                            return s.bundleNo === bundleAssignment.bundleNo;
                        });
                        checked = !!bundleState && bundleState.stateCode == state.code;
                    } else {
                        checked = this.props.state.find(function(a) {
                            return a;
                        }).stateCode == state.code;
                    }
                }

                return {
                    name: this.props.consent.consentCode + nameSuffix,
                    text: state.description,
                    value: state.code,
                    labelClassName: "o-radio opl-radio",
                    //readOnly: (this.props.readOnly || (this.props.consentsWithBonusLoading && this.props.isUpdating)),
                    readOnly: this.props.consent.readonly,
                    checked: checked,
                    onChange: this.props.onStateChange.bind(this, bundleAssignment)
                };
            }
        }, {
            key: "endsWith",
            value: function endsWith(str, suffix) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }
        }, {
            key: "getHeader",
            value: function getHeader() {
                return /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "l-col l-col-8 l-col-small-12 l-col-medium-12"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-font-bold u-block"
                }, this.props.consent.title), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-block u-padding-top-l u-medium-padding-l u-small-padding-l",
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }));
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
            key: "getTitle",
            value: function getTitle() {
                return this.props.consent.title;
            }
        }, {
            key: "getRadioRow",
            value: function getRadioRow(consentPositiveState, consentNegativeState, ba, businessImplicationsElement, index, lastRow) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: index == 0 && this.props.isDeliveryStep ? "l-row" : "l-row u-border-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: (lastRow ? "u-small-padding-l u-medium-padding-l " : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-12 l-col-8 u-padding-top-l " + (index === 0 ? "u-small-no-padding-t u-medium-no-padding-t" : "")
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-spacing-right",
                    dangerouslySetInnerHTML: {
                        __html: ba.label
                    }
                }), businessImplicationsElement), /*#__PURE__*/ _react.default.createElement("div", {
                    className: (lastRow ? "u-small-padding-l " : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-4 l-col-2 u-padding-top-l u-medium-no-padding-t u-small-no-padding-t"
                }, consentPositiveState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentPositiveState, ba))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: (lastRow ? "" : "u-padding-l ") + "l-col l-col-small-12 l-col-medium-4 l-col-2 u-padding-top-l u-medium-no-padding-t u-small-no-padding-t"
                }, consentNegativeState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentNegativeState, ba))), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "consent-error-message" + index,
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-8"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartConsentValidationComponent.default, babelHelpers.extends({
                    className: lastRow ? "u-padding-top-l" : "u-padding-l",
                    scrollOffsetCalculateFrom: "consent-error-message" + index,
                    scrollOffsetCalculateTo: "consent-section",
                    consentsErrorMsg: this.props.consent.wariningMessage
                }, this.props, {
                    correspondingBa: ba
                }))));
            }
        }, {
            key: "getMsisdnRadioRow",
            value: function getMsisdnRadioRow(consentPositiveState, consentNegativeState, ba, businessImplicationsElement) {
                return /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "l-row u-margin-l u-large-margin"
                }, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "l-col l-col-8 l-col-small-12 l-col-medium-4 u-font-bold"
                }, ba.label), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-top"
                }, consentPositiveState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentPositiveState, ba))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-top"
                }, consentNegativeState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentNegativeState, ba))));
            }
        }, {
            key: "renderMsisdnMatrix",
            value: function renderMsisdnMatrix(consentPositiveState, consentNegativeState) {
                var _this = this;

                return this.props.consent.msisdns && this.props.consent.msisdns.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-m"
                }, this.props.consent.msisdns.map(function(entry) {
                    return _this.getMsisdnRadioRow(consentPositiveState, consentNegativeState, {
                        bundleNo: entry.bundleNo,
                        label: "numer telefonu " + _this.formatMsisdn(entry.msisdn, entry.factoryType)
                    });
                })) : "";
            }
        }, {
            key: "getRadioRows",
            value: function getRadioRows(consentPositiveState, consentNegativeState, singleRadio) {
                var _this2 = this;

                if (!singleRadio) {
                    var bundleAssignmentsLastIndex = this.props.consent.bundleAssignments.length - 1;
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.props.consent.bundleAssignments.map(function(ba, index) {
                        var state = "";
                        var lastRow = index === bundleAssignmentsLastIndex;

                        if (!!_this2.props.state && _this2.props.state.length > 0) {
                            state = _this2.props.state.find(function(s) {
                                return s.bundleNo === ba.bundleNo;
                            }) || "";
                        }

                        var businessImplications = _this2.props.consent.states.filter(function(st) {
                            return st.code === state.stateCode;
                        }).map(function(s) {
                            return s.businessImplicationsDescr;
                        }).find(function(bi) {
                            return bi;
                        });

                        var businessImplicationsElement = !!businessImplications ? /*#__PURE__*/ _react.default.createElement("div", {
                            className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                        }, /*#__PURE__*/ _react.default.createElement("p", {
                            className: "o-icon-text__text g-black1-c"
                        }, businessImplications)) : null;
                        return _this2.getRadioRow(consentPositiveState, consentNegativeState, ba, businessImplicationsElement, index, lastRow);
                    }));
                } else {
                    if (!this.props.consent.msisdns || this.props.consent.msisdns.length === 0) {
                        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                            className: "l-col l-col-small-12 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-l"
                        }, consentPositiveState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentPositiveState))), /*#__PURE__*/ _react.default.createElement("div", {
                            className: "l-col l-col-small-12 l-col-medium-4 l-col-2  u-large-text-right u-small-padding-l"
                        }, consentNegativeState && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(consentNegativeState)))), /*#__PURE__*/ _react.default.createElement("div", {
                            id: "single-error-message",
                            className: "l-col l-col-small-12 l-col-medium-12 l-col-8"
                        }, /*#__PURE__*/ _react.default.createElement(_MulticartConsentValidationComponent.default, babelHelpers.extends({
                            className: "u-large-padding-top-l u-medium-padding-top-l",
                            scrollOffsetCalculateFrom: "single-error-message",
                            scrollOffsetCalculateTo: "consent-section",
                            consentsErrorMsg: this.props.consent.wariningMessage
                        }, this.props))));
                    }
                }
            }
        }, {
            key: "getViewExpander",
            value: function getViewExpander(consentPositiveState, consentNegativeState) {
                var _this3 = this;

                //TODO: Tymczasowe usunięcie komunikatu na stronie dostawa i płatność dla fix do czasu rozdzielenia komunikatów.
                var NotFixOnDiP = !(this.props.factoryType == "FIX" && !!this.props.selectedMethod);
                var condition = !!this.props.state && !!this.props.consent.states && NotFixOnDiP;
                var singleState = !!this.props.state && this.props.state.length > 0 ? this.props.state.find(function(st) {
                    return st;
                }) : "";
                var singleRadio = !this.props.consent.bundleAssignments || this.props.consent.bundleAssignments.length === 0;
                var singleBusinessImplications = condition ? this.props.consent.states.filter(function(state) {
                    return state.code === singleState.stateCode;
                }).map(function(s) {
                    return s.businessImplicationsDescr;
                }).find(function(d) {
                    return d;
                }) : "";
                var colStyle = !!this.props.consent.msisdns ? "l-col-12" : "l-col-8";

                if (!this.props.consent.msisdns || this.props.consent.msisdns.length === 0) {
                    return /*#__PURE__*/ _react.default.createElement("fieldset", {
                        className: "l-row",
                        ref: function ref(_ref) {
                            _this3.ref = _ref;
                        }
                    }, this.getHeader(), this.getRadioRows(consentPositiveState, consentNegativeState, singleRadio));
                } else {
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        className: "u-font-bold"
                    }, this.props.consent.title);
                }
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
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "consent-section"
                }, this.getViewExpander(consentPositiveState, consentNegativeState), this.props.consent.msisdns && this.props.consent.msisdns.length !== 0 && /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-block u-padding-top-l u-medium-padding-l u-small-padding-l",
                    dangerouslySetInnerHTML: {
                        __html: this.props.consent.description
                    }
                }), this.renderMsisdnMatrix(consentPositiveState, consentNegativeState), this.getBusinessImplications());
            }
        }, {
            key: "getBusinessImplications",
            value: function getBusinessImplications() {
                var NotFixOnDiP = !(this.props.factoryType == "FIX" && !!this.props.selectedMethod);
                var condition = !!this.props.state && !!this.props.consent.states && NotFixOnDiP;
                var singleState = !!this.props.state && this.props.state.length > 0 ? this.props.state.find(function(st) {
                    return st;
                }) : "";
                var singleRadio = !this.props.consent.bundleAssignments || this.props.consent.bundleAssignments.length === 0;
                var singleBusinessImplicationsState = condition ? this.props.consent.states.filter(function(state) {
                    return state.code === singleState.stateCode;
                }).map(function(s) {
                    return s.businessImplicationsDescr;
                }).find(function(d) {
                    return d;
                }) : "";
                var singleBusinessImplications = this.props.consent.isRelatedWithBonus && (this.props.state.length === 0 || !singleState.stateCode) ? this.props.descriptions.bonusSingleBusinessImplications : singleBusinessImplicationsState;
                var singleBusinessImplicationsWarning = this.props.consent.wariningMessage ? this.props.consent.wariningMessage : singleBusinessImplications;
                var finalCondition = singleRadio && !!singleBusinessImplicationsState || singleBusinessImplicationsWarning && (this.props.state.length === 0 || !singleState.stateCode);
                return finalCondition && !this._hasError() && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text g-black1-c"
                }, (this.props.state.length === 0 || !singleState.stateCode) && singleBusinessImplicationsWarning || singleBusinessImplicationsState));
            }
        }, {
            key: "_hasError",
            value: function _hasError() {
                var errorElem = this.props.consentsErrorList;
                return errorElem && this.props.isMandatory && (!this.props.state || this.props.state.length == 0 || !this.props.state[0].stateCode);
            }
        }]);
        return MulticartSingleConsentRadioButtonRow;
    }(_react.default.Component);

    _exports.default = MulticartSingleConsentRadioButtonRow;
});
//# sourceMappingURL=MulticartSingleConsentRadioButtonRow.js.map