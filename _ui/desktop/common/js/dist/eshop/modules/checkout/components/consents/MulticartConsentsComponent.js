define(["exports", "react", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "eshop/modules/core/components/ui/Expander", "./MulticartConsentsGroupSection", "./MulticartSingleConsentRow", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "lodash", "../../utils/utils", "eshop/modules/core/components/ui/ExpanderFromHtml", "../../constants/LegalFormEnum", "eshop/modules/core/components/ui/Modal", "eshop/utils/OnlineUtils", "../../../documents/actions/documents", "../../../documents/selectors", "eshop/modules/auth/selectors/authorization"], function(_exports, _react, _reactRedux, _selectors, _app, _data, _selectors2, _selectors3, _Expander, _MulticartConsentsGroupSection, _MulticartSingleConsentRow, _MulticartValidationComponent, _OraCommonComponents, _lodash, _utils, _ExpanderFromHtml, _LegalFormEnum, _Modal, _OnlineUtils, _documents, _selectors4, _authorization) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartConsentsView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartConsentsGroupSection = babelHelpers.interopRequireDefault(_MulticartConsentsGroupSection);
    _MulticartSingleConsentRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRow);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _ExpanderFromHtml = babelHelpers.interopRequireDefault(_ExpanderFromHtml);
    _LegalFormEnum = babelHelpers.interopRequireDefault(_LegalFormEnum);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var MulticartConsentsView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartConsentsView, _Component);

        var _super = _createSuper(MulticartConsentsView);

        function MulticartConsentsView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartConsentsView);
            _this = _super.call(this, props);
            _this.elementId = _this.props.cmpUid + "_loaderParent";
            _this.onUpdateForSingleConsent = _this.onUpdateForSingleConsent.bind(babelHelpers.assertThisInitialized(_this));
            _this.debouncedStateUpdate = _lodash.default.debounce(function() {
                _this.props.clearModifyConsentsInCartQueue();
            }, 1);
            _this.debouncedStateUpdate = _this.debouncedStateUpdate.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MulticartConsentsView, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.registerVerificationConsentType(null);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById(this.elementId), {
                    path: 'core/modules/loader',
                    options: '{"fadeDuration":120}'
                });
                this.props.registerNextStepCondition('consents');
                this.props.registerCmsConsentConfig(this.props.consentTypesList);
                console.warn("isNet on component mount:");
                console.warn(this.props.isNet);
                console.warn("legalForm on component mount:");
                console.warn(this.props.legalForm);
                this.props.requestCartConsentsData();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var legalFormInRequest = this.props.consentsDataInRequest.legalForm || "";

                if (this.props.isNet && this.props.legalForm && this.props.legalForm !== legalFormInRequest) {
                    console.warn("Request consents on component update: market B2B, legal form " + this.props.legalForm);
                    this.props.requestCartConsentsData();
                }

                if (prevProps.isLogged != null && prevProps.isLogged !== this.props.isLogged && this.props.isLogged) {
                    console.warn("Request consents on customer logged in", this.props.isLogged);
                    this.props.requestCartConsentsData();
                }

                if (this.printDocumentButtonIsVisible.apply(this)) {
                    this.registerConsentDocumentsCheckoutCondition.apply(this);
                } else {
                    this.unregisterConsentDocumentsCheckoutCondition.apply(this);
                }

                this.registerVerificationConsentType(prevProps);
            }
        }, {
            key: "printDocumentButtonIsVisible",
            value: function printDocumentButtonIsVisible() {
                var _this2 = this;

                if (this.props.cartContainsFixNonActivationProcess) {
                    return false;
                }

                if (!this.props.salesChannelsToShowPrintButton.includes(this.props.channels.sales)) {
                    return false;
                }

                if (this.props.consentProps.consents.length !== 0) {
                    return this.props.consentProps.consents.filter(function(consent) {
                        return consent.type === _this2.props.verificationConsentType;
                    }).length > 0;
                }

                return false;
            }
        }, {
            key: "registerConsentDocumentsCheckoutCondition",
            value: function registerConsentDocumentsCheckoutCondition() {
                if (!this.props.registeredCheckoutConditions['consentDocuments']) {
                    this.props.registerNextStepCondition('consentDocuments');
                    this.props.registerPrintConsentValidator(this.props.printConsentValidatorByConsentType);
                }
            }
        }, {
            key: "unregisterConsentDocumentsCheckoutCondition",
            value: function unregisterConsentDocumentsCheckoutCondition() {
                if (this.props.registeredCheckoutConditions['consentDocuments']) {
                    this.props.unregisterNextStepCondition('consentDocuments');
                }
            }
        }, {
            key: "registerVerificationConsentType",
            value: function registerVerificationConsentType(prevProps) {
                var verificationConsentType = prevProps ? prevProps.verificationConsentType : null;

                if (verificationConsentType !== this.props.verificationConsentType) {
                    this.props.registerVerificationConsentType(this.props.verificationConsentType);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(document.getElementById(this.elementId));
            }
        }, {
            key: "setCheckboxConsentStateWithoutRemoteCall",
            value: function setCheckboxConsentStateWithoutRemoteCall(data) {
                console.log("Locally set consents", data);
                this.changeConsentState(data);
            }
        }, {
            key: "onUpdateForSingleConsent",
            value: function onUpdateForSingleConsent(data) {
                this.props.pushToModifyConsentsInCartQueue(data);
                this.setCheckboxConsentStateWithoutRemoteCall(data);
                this.debouncedStateUpdate();
            }
        }, {
            key: "onConsentGroupExpanded",
            value: function onConsentGroupExpanded(listNo) {
                this.props.updateConsentGroupExpanded(listNo);
            }
        }, {
            key: "getPropsForConsentGroup",
            value: function getPropsForConsentGroup(consents) {
                return {
                    consents: consents,
                    consentStates: this.props.consentProps.consentStates,
                    consentsErrorList: this.props.errorList && this.props.errorList.find(function(e) {
                        return "consents" === e.type;
                    }),
                    disableInnerMargin: true,
                    readOnly: this.props.descriptions.readOnly,
                    isUpdating: this.props.consentProps.updatingAnyConsent,
                    updatingConsents: this.props.consentProps.updatingConsents,
                    onChange: this.changeConsentState.bind(this),
                    onUpdate: this.onUpdateForSingleConsent,
                    agreeAll: this.props.descriptions.selectAllLabel,
                    loaderElementId: this.elementId,
                    factoryType: this.props.factoryType,
                    selectedMethod: this.props.selectedMethod,
                    errorList: this.props.errorList,
                    onExpanded: this.onConsentGroupExpanded.bind(this),
                    onExpandedInit: this.props.updateValueConsentGroupExpanded.bind(this)
                };
            }
        }, {
            key: "getPropsForConsent",
            value: function getPropsForConsent(consentData) {
                return {
                    key: consentData.consentCode,
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
                    onUpdate: this.props.updateConsentsStates,
                    formInputType: this.props.formInputType,
                    loaderElementId: this.elementId
                };
            }
        }, {
            key: "getPropsForCheckbox",
            value: function getPropsForCheckbox() {
                return {
                    labelClassName: "o-checkbox opl-checkbox opl-checkbox--black",
                    name: "agree_all",
                    text: this.props.descriptions.selectAllLabel,
                    checked: this.isAllSelected(),
                    onChange: this.agreeAllCheckboxChange.bind(this),
                    readOnly: this.props.consentProps.updatingAnyConsent || this.props.clearingModifyConsentsInCartQueueInProgress
                };
            }
        }, {
            key: "isAnyReadOnly",
            value: function isAnyReadOnly() {
                if (this.getMatchingConsents().length === 0) {
                    return false;
                }

                var anyReadOnly = false;
                this.getMatchingConsents().forEach(function(consent) {
                    if (consent.readonly) anyReadOnly = true;
                });
                return anyReadOnly;
            }
        }, {
            key: "changeConsentState",
            value: function changeConsentState(data) {
                var _this3 = this;

                if (data.length > 0) {
                    var changableConsents = data.filter(function(consent) {
                        return !_this3.checkReadOnly(consent);
                    });

                    if (this.isConfirmationNeeded(data)) {
                        if (changableConsents.filter(function(consent) {
                                return !_this3.isConfirmationNeeded(consent);
                            }).length) {
                            this.props.changeConsentState(changableConsents.filter(function(consent) {
                                return !_this3.isConfirmationNeeded(consent);
                            }));
                        }

                        this.setState({
                            showConfirmationModal: true,
                            confirmableData: changableConsents.filter(function(consent) {
                                return _this3.isConfirmationNeeded(consent);
                            })
                        });
                    } else {
                        this.props.changeConsentState(changableConsents);
                    }
                }
            }
        }, {
            key: "confirmedChangeConsentState",
            value: function confirmedChangeConsentState() {
                var _this4 = this;

                var data = this.state.confirmableData;

                if (data.length > 0) {
                    this.props.changeConsentState(data.filter(function(consent) {
                        return !_this4.checkReadOnly(consent);
                    }));
                }
            }
        }, {
            key: "confirmationPopupProps",
            value: function confirmationPopupProps() {
                if (this.state) {
                    return {
                        title: this.props.descriptions && this.props.descriptions.warningModalTitle,
                        content: this.getConfirmationMessage(),
                        onClickConfirm: this.confirmedChangeConsentState.bind(this)
                    };
                }
            }
        }, {
            key: "getConfirmableConsentTypeList",
            value: function getConfirmableConsentTypeList() {
                var _this5 = this;

                var consentTypesLists = [];
                this.state.confirmableData.forEach(function(consent) {
                    var consentTypesList = _this5.props.consentTypesList.find(function(list) {
                        return list.confirmationRequiredConsentCodes.includes(consent.consentCode);
                    });

                    if (consentTypesList) {
                        _OnlineUtils.default.addUniqueIntoArray(consentTypesList, consentTypesLists);
                    }
                });
                return consentTypesLists;
            }
        }, {
            key: "getConfirmationMessage",
            value: function getConfirmationMessage() {
                if (this.state && this.state.confirmableData) {
                    var consentTypesLists = this.getConfirmableConsentTypeList();

                    if (consentTypesLists.length && consentTypesLists.find(function(list) {
                            return !!list.confirmationMessage;
                        })) {
                        return consentTypesLists.find(function(list) {
                            return !!list.confirmationMessage;
                        }).confirmationMessage;
                    }
                }

                return "";
            }
        }, {
            key: "renderConfirmationModal",
            value: function renderConfirmationModal() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "consent-confirmation-modal",
                    size: "narrow",
                    escapeClose: true,
                    showClose: true,
                    clickClose: true,
                    open: this.state && this.state.showConfirmationModal,
                    onClose: this.onCloseConfirmationModal.bind(this)
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.GenericPopup, babelHelpers.extends({
                    id: "consent-confirmation-in-modal"
                }, this.confirmationPopupProps())));
            }
        }, {
            key: "isConfirmationNeeded",
            value: function isConfirmationNeeded(data) {
                var _this6 = this;

                if (data) {
                    if (Array.isArray(data)) {
                        return !!data.filter(function(consent) {
                            return _this6.isConfirmationNeeded(consent);
                        }).length;
                    } else {
                        if (data.stateCode.indexOf("NO_") > -1 || data.stateCode.indexOf("_NO") > -1) {
                            return false;
                        } else {
                            var consentsList = this.props.consentTypesList.find(function(list) {
                                return list.consentsCode.includes(data.consentCode);
                            });

                            if (consentsList && consentsList.confirmationRequiredConsentCodes) {
                                if (consentsList.confirmationRequiredConsentCodes.includes(data.consentCode)) {
                                    return true;
                                }
                            }
                        }
                    }
                }

                return false;
            }
        }, {
            key: "onCloseConfirmationModal",
            value: function onCloseConfirmationModal() {
                this.setState({
                    showConfirmationModal: false
                });
            }
        }, {
            key: "checkReadOnly",
            value: function checkReadOnly(consentToCheck) {
                var result = false;
                this.getVisibleConsents().filter(function(consent) {
                    if (consent.consentCode === consentToCheck.consentCode) {
                        result = !!consent.readonly;
                    }
                });
                return result;
            }
        }, {
            key: "getMatchingConsents",
            value: function getMatchingConsents() {
                var _this7 = this;

                return this.getVisibleConsents().filter(function(consent) {
                    var matchAnyCondition = false;

                    _this7.props.consentTypesList.forEach(function(condition) {
                        matchAnyCondition = matchAnyCondition || _this7.matchCondition(consent, condition);
                    });

                    return matchAnyCondition;
                });
            }
        }, {
            key: "isAllSelected",
            value: function isAllSelected() {
                var _this8 = this;

                if (this.getMatchingConsents().length === 0) {
                    return false;
                }

                var allSelected = true;
                var state;
                var positiveState;
                var selectedPositive;
                this.getMatchingConsents().forEach(function(consent) {
                    if (!consent.readonly) {
                        positiveState = consent.states.find(function(state) {
                            return state.positive;
                        });

                        if (!!consent.bundleAssignments && consent.bundleAssignments.length > 0) {
                            consent.bundleAssignments.forEach(function(ba) {
                                state = _this8.props.consentProps.consentStates.find(function(consentState) {
                                    return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                                });
                                selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                                allSelected = allSelected && selectedPositive;
                            });
                        } else if (!!consent.msisdns && consent.msisdns.length > 0) {
                            consent.msisdns.forEach(function(ba) {
                                state = _this8.props.consentProps.consentStates.find(function(consentState) {
                                    return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                                });
                                selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                                allSelected = allSelected && selectedPositive;
                            });
                        } else {
                            state = _this8.props.consentProps.consentStates.find(function(consentState) {
                                return consent.consentCode === consentState.consentCode && !consentState.bundleNo;
                            });
                            selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                            allSelected = allSelected && selectedPositive;
                        }
                    }
                });
                return allSelected;
            }
        }, {
            key: "getConsentMapping",
            value: function getConsentMapping(relatedWithBonus, checkConsents) {
                var _this9 = this;

                var nullStateNotAllowedConsentType = ["OSW"];
                var matchingConsents = [];
                this.getMatchingConsents().filter(function(consent) {
                    return consent.isRelatedWithBonus == relatedWithBonus || _this9.isRelatedWithBonusBySubsection(consent.consentCode);
                }).forEach(function(consent) {
                    var nullStateNotAllowed = nullStateNotAllowedConsentType.indexOf(consent.type) !== -1;
                    var stateCode = null;

                    if (nullStateNotAllowed) {
                        stateCode = consent.states.find(function(state) {
                            return state.positive == checkConsents;
                        }).code;
                    } else {
                        stateCode = checkConsents ? consent.states.find(function(state) {
                            return state.positive;
                        }).code : consent.states.find(function(state) {
                            return !state.positive;
                        }).code;
                    }

                    if (!consent.bundleAssignments || consent.bundleAssignments.length === 0) {
                        if (!!consent.msisdns && consent.msisdns.length > 0) {
                            consent.msisdns.forEach(function(bundleConsent) {
                                matchingConsents.push({
                                    consentCode: consent.consentCode,
                                    bundleNo: bundleConsent.bundleNo,
                                    stateCode: stateCode
                                });
                            });
                        } else {
                            matchingConsents.push({
                                consentCode: consent.consentCode,
                                bundleNo: null,
                                stateCode: stateCode
                            });
                        }
                    } else {
                        matchingConsents = matchingConsents.concat(consent.bundleAssignments.map(function(ba) {
                            return {
                                consentCode: consent.consentCode,
                                bundleNo: ba.bundleNo,
                                stateCode: stateCode
                            };
                        }));
                    }
                });
                return matchingConsents;
            }
        }, {
            key: "isRelatedWithBonusBySubsection",
            value: function isRelatedWithBonusBySubsection(consentCode) {
                return this.props.consentProps.conf.some(function(conf) {
                    return (conf.sections || []).filter(function(s) {
                        return s.withBonus;
                    }).map(function(s) {
                        return s.consentsCode;
                    }).some(function(cCodes) {
                        return cCodes.indexOf(consentCode) > -1;
                    });
                });
            }
        }, {
            key: "acceptAllConsents",
            value: function acceptAllConsents() {
                var bonusConsents = this.getConsentMapping(true, true);
                var otherConsents = this.getConsentMapping(false, true);
                this.changeConsentState(otherConsents.concat(bonusConsents));
                this.props.updateConsentsStates(bonusConsents);
            }
        }, {
            key: "uncheckAllConsents",
            value: function uncheckAllConsents() {
                var bonusConsents = this.getConsentMapping(true, false);
                var otherConsents = this.getConsentMapping(false, false);
                this.changeConsentState(otherConsents.concat(bonusConsents));
                this.props.updateConsentsStates(bonusConsents);
            }
        }, {
            key: "agreeAllCheckboxChange",
            value: function agreeAllCheckboxChange() {
                if (this.isAllSelected()) {
                    this.uncheckAllConsents();
                } else {
                    this.acceptAllConsents();
                }
            }
        }, {
            key: "getNewGroupedConsents",
            value: function getNewGroupedConsents() {
                var _this10 = this;

                var consentsListByPriority = [];
                this.props.consentTypesList.forEach(function(group) {
                    consentsListByPriority.push({
                        listNo: group.listNumber,
                        listTitleProp: group.groupTitle,
                        code: group.code,
                        priority: group.priority,
                        preamble: group.preamble,
                        required: !!group.isRequired,
                        expandedChannels: group.expandedChannels,
                        backgroundColor: group.backgroundColor,
                        sections: group.sections,
                        description: group.description,
                        confirmationDescription: group.confirmationDescription,
                        confirmationMessage: group.confirmationMessage,
                        confirmationRequiredConsentCodes: group.confirmationRequiredConsentCodes,
                        consents: _this10.props.consentProps.consents.filter(function(consent) {
                            var exist = group.consentsCode.find(function(code) {
                                return code === consent.consentCode;
                            });
                            return !!exist;
                        })
                    });
                });
                return this.addHasAlreadyAgreedProp(consentsListByPriority.sort(function(a, b) {
                    return a.priority - b.priority;
                }));
            }
        }, {
            key: "getGroupedConsents",
            value: function getGroupedConsents() {
                var _this11 = this;

                var groupedConsents = this.getListConditions().map(function(c) {
                    return {
                        listNo: c.listNo,
                        listTitleProp: c.listTitleProp,
                        preamble: c.preamble,
                        description: c.description,
                        confirmationDescription: c.confirmationDescription,
                        confirmationMessage: c.confirmationMessage,
                        confirmationRequiredConsentCodes: c.confirmationRequiredConsentCodes,
                        sections: c.sections,
                        expandedChannels: c.expandedChannels,
                        consents: _this11.props.consentProps.consents.filter(function(consent) {
                            var matchAnyCondition = false;
                            c.conditions.forEach(function(cond) {
                                matchAnyCondition = matchAnyCondition || _this11.matchCondition(consent, cond);
                            });
                            return matchAnyCondition;
                        }).map(function(consent) {
                            //set priority
                            var condition;
                            var priority = 0;
                            c.conditions.forEach(function(cond) {
                                if (_this11.matchCondition(consent, cond)) {
                                    if (priority < cond.priority) {
                                        condition = cond;
                                        priority = cond.priority;
                                    }
                                }
                            });
                            consent.rulePriority = condition.priority;
                            return _objectSpread({}, consent);
                        })
                    };
                });
                groupedConsents = this.filterConsentsByRulePriority(groupedConsents);
                return this.addHasAlreadyAgreedProp(groupedConsents);
            }
        }, {
            key: "addHasAlreadyAgreedProp",
            value: function addHasAlreadyAgreedProp(groupedConsents) {
                var _this12 = this;

                return groupedConsents.map(function(consentGroup) {
                    return _objectSpread({}, consentGroup, {
                        hasAlreadyAgreed: !!consentGroup.consents.find(function(consent) {
                            return _this12.consentIsPermanentlyAgreed(consent);
                        })
                    });
                });
            }
        }, {
            key: "getVisibleConsents",
            value: function getVisibleConsents() {
                var groupedConsents = this.props.newConfiguration ? this.getNewGroupedConsents() : this.getGroupedConsents();
                return groupedConsents.reduce(function(previousValue, currentValue) {
                    return [].concat(babelHelpers.toConsumableArray(previousValue), babelHelpers.toConsumableArray(currentValue.consents));
                }, []);
            }
        }, {
            key: "consentIsPermanentlyAgreed",
            value: function consentIsPermanentlyAgreed(consent) {
                return (0, _utils.consentIsPermanentlyAgreed)(consent, this.props.consentProps.consentStates);
            }
        }, {
            key: "channelIsWWW",
            value: function channelIsWWW() {
                return this.props.channels.sales === 'WWW';
            }
        }, {
            key: "getHeadPreamble",
            value: function getHeadPreamble() {
                var _this13 = this;

                if (!this.props.isNet) {
                    return this.props.headPreamble;
                } else {
                    return this.props.headPreamble.filter(function(hP) {
                        return !!hP.legalFormList && hP.legalFormList.includes(_this13.props.legalForm);
                    });
                }
            }
        }, {
            key: "getFilterConfig",
            value: function getFilterConfig() {
                if (!this.props.isNet) {
                    return false;
                } else if (_LegalFormEnum.default.isSmallBusiness(this.props.legalForm)) {
                    return "1114";
                } else {
                    return "1014";
                }
            }
        }, {
            key: "handleRegulationsDownloadClick",
            value: function handleRegulationsDownloadClick(event) {
                event.preventDefault();

                if (event.target && event.target.dataset && event.target.id === "regulationsDownloadLink") {
                    var _document = this.getDocumentItemByDocumentCode(event.target.dataset.documentCode);

                    if (_document && _document.bundleNo) {
                        this.props.getOrCreateDocument(_document.documentCode, _document.bundleNo, _document.documentType);
                    }
                }
            }
        }, {
            key: "getDocumentItemByDocumentCode",
            value: function getDocumentItemByDocumentCode(documentCode) {
                return this.props.documentItems && this.props.documentItems.length && this.props.documentItems.find(function(document) {
                    return documentCode === document.documentCode;
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this14 = this;

                this.preambleStatuses = [{
                    isGroupRequired: true,
                    shown: false
                }, {
                    isGroupRequired: false,
                    shown: false
                }];
                var consentsList = this.props.newConfiguration ? this.getNewGroupedConsents() : this.getGroupedConsents();
                var isConsentErrorMessage = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                    return 'consents' === e.type;
                });
                var showMainError = isConsentErrorMessage && consentsList.find(function(cl) {
                    return cl.listNo === 0;
                }) && consentsList.find(function(cl) {
                    return cl.listNo === 0;
                }).consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, _this14.props.consentProps.consentStates);
                });
                var isDeliveryStep = this.props.currentStepId === 'delivery-payment';
                var componentVisible = this.getMatchingConsents().length > 0 && (!isDeliveryStep || this.props.agreementType);
                console.log("showMainError", showMainError);
                console.log(this.props);
                console.log(isConsentErrorMessage);
                var headPreamble = this.getHeadPreamble();
                var showSogEshopRegulationInfo = this.props.isOnlySogProcess;
                var regulationInfoMessage = this.props.descriptions && this.props.descriptions.regulationInfoMessage;
                var divClassName = componentVisible ? isDeliveryStep ? "g-gray2-bg" : "l-full-row u-padding-l-xl" : "";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: divClassName,
                    id: this.elementId,
                    key: this.elementId
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row " + (isDeliveryStep ? "" : "u-padding-top-l-xl")
                }, showSogEshopRegulationInfo && regulationInfoMessage && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col-9 l-col-medium-12 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-margin-m u-margin-top-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    onClick: this.handleRegulationsDownloadClick.bind(this),
                    dangerouslySetInnerHTML: {
                        __html: regulationInfoMessage
                    }
                }))))), componentVisible && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, !isDeliveryStep && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "h1 u-margin-l"
                }, this.props.descriptions.title)), /*#__PURE__*/ _react.default.createElement(PreambleWithExpander, {
                    value: headPreamble[0]
                })), this.renderConfirmationModal(), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    className: "opl-agreements " + (isDeliveryStep ? "g-gray2-bg u-border-bottom u-padding-l" : ""),
                    scrollToSelected: false,
                    variant: "",
                    id: "consents-component-expander"
                }, !isDeliveryStep && consentsList.map(function(list, i) {
                    return list.listNo === 0 || list.priority === 10 && _this14.props.newConfiguration ? /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-agreements__all opl-agreements__all-no-arrow u-padding-all u-large-padding-left-l u-large-margin-minus-left-l u-large-margin-minus-right-l g-yellow2-bg"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, _this14.getPropsForCheckbox())) : '';
                }), consentsList.filter(function(c) {
                    return c.code != _this14.getFilterConfig();
                }).map(function(list, i) {
                    return list.listNo === 0 ? _this14.renderSectionWithSelectAllCheckBox(list) : /*#__PURE__*/ _react.default.createElement("div", {
                        key: "consentsGroupSection" + i
                    }, _this14.renderPreambleForGroup(list), /*#__PURE__*/ _react.default.createElement(_MulticartConsentsGroupSection.default, babelHelpers.extends({
                        key: "consentsGroup" + i,
                        sectionKey: "consentsGroup" + i,
                        isDeliveryStep: isDeliveryStep,
                        consentsErrorMsg: isConsentErrorMessage
                    }, _this14.getPropsForConsentGroup(list.consents), {
                        title: _this14.props.newConfiguration ? list.listTitleProp : _this14.props.descriptions[list.listTitleProp],
                        id: list.listTitleProp
                    }, _this14.props, {
                        sequence: i,
                        listNo: list.listNo,
                        hasAlreadyAgreed: list.hasAlreadyAgreed,
                        showPrintDocumentsButton: _this14.printDocumentButtonIsVisible.apply(_this14),
                        initiallyOpen: list.expandedChannels.includes(_this14.props.channels.sales),
                        backgroundColor: list.backgroundColor,
                        sections: list.sections,
                        description: list.description,
                        confirmationDescription: list.confirmationDescription,
                        confirmationMessage: list.confirmationMessage,
                        confirmationRequiredConsentCodes: list.confirmationRequiredConsentCodes
                    })));
                }), isDeliveryStep && consentsList.map(function(list, i) {
                    return list.listNo === 0 ? /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-margin-top"
                    }, _this14.renderSelectAllCheckbox(list)) : '';
                })))), !(this.props.currentStepId === 'delivery-payment') && /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "consents",
                    show: !!showMainError,
                    className: "u-padding-l"
                })));
            }
        }, {
            key: "isPreambleShownForGroupRequirity",
            value: function isPreambleShownForGroupRequirity(isGroupRequired) {
                return this.preambleStatuses.find(function(status) {
                    return status.isGroupRequired === isGroupRequired;
                }).shown;
            }
        }, {
            key: "setPreambleShownForGroupRequirity",
            value: function setPreambleShownForGroupRequirity(isGroupRequired) {
                this.preambleStatuses = this.preambleStatuses.map(function(status) {
                    if (status.isGroupRequired !== isGroupRequired) {
                        return status;
                    }

                    return _objectSpread({}, status, {
                        shown: true
                    });
                });
            }
        }, {
            key: "renderPreambleForGroup",
            value: function renderPreambleForGroup(group) {
                var allConsentCodes = this.props.consentProps.consents ? this.props.consentProps.consents.map(function(consent) {
                    return consent.consentCode;
                }) : [];
                var consentCodesInGroup = this.getConsentCodesForGroup(group);

                if (group.preamble && _lodash.default.intersection(allConsentCodes, consentCodesInGroup).length > 0 && !this.isPreambleShownForGroupRequirity(group.required)) {
                    this.setPreambleShownForGroupRequirity(group.required);
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: group.preamble
                        }
                    });
                }

                return null;
            }
        }, {
            key: "getConsentCodesForGroup",
            value: function getConsentCodesForGroup(group) {
                if (this.channelIsWWW()) {
                    return this.getNotPermanentlyAgreedConsentCodesForGroup(group);
                }

                return group.consents ? group.consents.map(function(consent) {
                    return consent.consentCode;
                }) : [];
            }
        }, {
            key: "getNotPermanentlyAgreedConsentCodesForGroup",
            value: function getNotPermanentlyAgreedConsentCodesForGroup(group) {
                var _this15 = this;

                var permanentlyAgreedConsentCodes = this.props.consentProps.consents ? this.props.consentProps.consents.filter(function(consent) {
                    return _this15.consentIsPermanentlyAgreed(consent);
                }).map(function(consent) {
                    return consent.consentCode;
                }) : [];
                return group.consents ? group.consents.map(function(consent) {
                    return consent.consentCode;
                }).filter(function(consentCode) {
                    return !permanentlyAgreedConsentCodes.includes(consentCode);
                }) : [];
            }
        }, {
            key: "renderSectionWithSelectAllCheckBox",
            value: function renderSectionWithSelectAllCheckBox(list) {
                var _this16 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.currentStepId === 'delivery-payment' ? "g-white1-bg u-padding-all-l u-padding-top-l" : "u-margin-l"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-agreements-list u-no-margin"
                }, list.consents.map(function(consent, index) {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentRow.default, babelHelpers.extends({}, _this16.getPropsForConsent(consent), {
                        descriptions: _this16.props.descriptions,
                        isDeliveryStep: _this16.props.currentStepId === 'delivery-payment',
                        consentsErrorList: _this16.props.errorList && _this16.props.errorList.find(function(e) {
                            return "consents" === e.type;
                        })
                    }));
                })), this.props.currentStepId !== 'delivery-payment' && this.renderSelectAllCheckbox(list));
            }
        }, {
            key: "renderSelectAllCheckbox",
            value: function renderSelectAllCheckbox(list) {
                return list.consents && (list.consents.length > 1 || list.consents.length == 1 && list.consents[0].bundleAssignments && list.consents[0].bundleAssignments.length > 1) ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l u-padding-all g-yellow2-bg"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleCheckbox, this.getPropsForCheckbox())) : "";
            }
        }, {
            key: "filterConsentsByRulePriority",
            value: function filterConsentsByRulePriority(consentsList) {
                var consentsListByPriority = [];
                consentsList.forEach(function(listA) {
                    var consents = [];
                    listA.consents.forEach(function(consentA) {
                        var isUnique = true;
                        consentsList.forEach(function(listB) {
                            listB.consents.forEach(function(consentB) {
                                if (consentA.consentCode == consentB.consentCode && listA.listNo != listB.listNo) {
                                    isUnique = false;

                                    if (consentA.rulePriority >= consentB.rulePriority) {
                                        consents.push(consentA);
                                    }
                                }
                            });
                        }); //if not found

                        if (isUnique == true) {
                            consents.push(consentA);
                        }
                    });
                    consentsListByPriority.push({
                        listNo: listA.listNo,
                        listTitleProp: listA.listTitleProp,
                        preamble: listA.preamble,
                        expandedChannels: listA.expandedChannels,
                        consents: consents
                    });
                });
                return consentsListByPriority;
            }
        }, {
            key: "matchCondition",
            value: function matchCondition(consent, condition) {
                if ((condition.withBonus === null ? true : condition.withBonus === consent.isRelatedWithBonus) && (condition.isRequired === null ? true : condition.isRequired === consent.required)) {
                    if (condition.consents.length === 0) {
                        //default
                        return true;
                    } else {
                        for (var i = 0; i < condition.consents.length; i++) {
                            if (consent.type === condition.consents[i]) {
                                return true;
                            }
                        }
                    }
                }

                return false;
            }
        }, {
            key: "getListConditions",
            value: function getListConditions() {
                var _this17 = this;

                var uniqueSet = new Set();
                this.props.consentTypesList.map(function(ctl) {
                    return ctl.listNumber;
                }).forEach(function(el) {
                    return uniqueSet.add(el);
                });
                var uniqueListNo = [];
                uniqueSet.forEach(function(use) {
                    return uniqueListNo.push(use);
                });
                uniqueListNo = uniqueListNo.sort();
                return uniqueListNo.map(function(listNo) {
                    return {
                        listNo: listNo,
                        listTitleProp: "listTitle" + listNo,
                        preamble: _this17.props.consentTypesList.find(function(group) {
                            return group.listNumber === listNo;
                        }).preamble,
                        description: _this17.props.consentTypesList.find(function(group) {
                            return group.listNumber === listNo;
                        }).description,
                        expandedChannels: _this17.props.consentTypesList.find(function(group) {
                            return group.listNumber === listNo;
                        }).expandedChannels,
                        sections: _this17.props.consentTypesList.find(function(group) {
                            return group.listNumber === listNo;
                        }).sections,
                        conditions: _this17.props.consentTypesList.filter(function(ctl) {
                            return ctl.listNumber === listNo;
                        })
                    };
                });
            }
        }]);
        return MulticartConsentsView;
    }(_react.Component);

    _exports.MulticartConsentsView = MulticartConsentsView;

    var mapStateToProps = function mapStateToProps(state) {
        return {
            registeredCheckoutConditions: (0, _selectors.getRegisteredCheckoutConditions)(state),
            consentProps: (0, _selectors.getConsentsProps)(state),
            selectedMethod: (0, _selectors.getSelectedDeliveryMethod)(state),
            isPrintConsentDocumentsButtonEnabled: (0, _selectors.isPrintConsentDocumentsButtonEnabled)(state),
            customerNoEmail: (0, _selectors.getCustomerNoEmail)(state),
            clearingModifyConsentsInCartQueueInProgress: (0, _selectors.getModifyConsentsInCartQueue)(state) > 0,
            errorList: (0, _selectors.getFrontValidationMsg)(state),
            isNet: (0, _selectors3.getCartIsNet)(state),
            legalForm: (0, _selectors2.getLegalForm)(state),
            currentStepId: (0, _selectors.getCurrentStepId)(state),
            consentsDataInRequest: (0, _selectors.consentsDataInRequest)(state),
            info: "Wydrukuj zgody na weryfikację w systemach zewnętrznych (BIG, ZONK)",
            buttonText: "Drukuj",
            agreementType: (0, _selectors.getAgreementType)(state),
            isOnlySogProcess: (0, _selectors.getSalesOfGoodsProcess)(state),
            documentItems: (0, _selectors4.getDocumentItems)(state),
            isLogged: (0, _authorization.isLogged)(state)
        };
    };

    var MulticartConsentsComponent = (0, _reactRedux.connect)(mapStateToProps, {
        changeConsentState: _app.changeConsentState,
        updateConsentsStates: _data.updateConsentsStates,
        requestCartConsentsData: _data.requestCartConsentsData,
        registerCmsConsentConfig: _data.registerCmsConsentConfig,
        registerNextStepCondition: _data.registerNextStepCondition,
        registerVerificationConsentType: _data.registerVerificationConsentType,
        unregisterNextStepCondition: _data.unregisterNextStepCondition,
        printConsents: _data.printConsents,
        printMobileConsents: _data.printMobileConsents,
        registerPrintConsentValidator: _data.registerPrintConsentValidator,
        pushToModifyConsentsInCartQueue: _app.pushToModifyConsentsInCartQueue,
        clearModifyConsentsInCartQueue: _data.clearModifyConsentsInCartQueue,
        setPermanentlyAgreedConsentsVisibleForGroup: _app.setPermanentlyAgreedConsentsVisibleForGroup,
        updateConsentGroupExpanded: _data.updateConsentGroupExpanded,
        updateValueConsentGroupExpanded: _data.updateValueConsentGroupExpanded,
        getOrCreateDocument: _documents.getOrCreateDocument
    })(MulticartConsentsView);
    var _default = MulticartConsentsComponent;
    _exports.default = _default;
    var titleWithRequiredLabelIdIndex = 2;

    var TitleWithRequiredLabel = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(TitleWithRequiredLabel, _Component2);

        var _super2 = _createSuper(TitleWithRequiredLabel);

        function TitleWithRequiredLabel(props) {
            var _this18;

            babelHelpers.classCallCheck(this, TitleWithRequiredLabel);
            _this18 = _super2.call(this, props);
            _this18.index = titleWithRequiredLabelIdIndex++;
            _this18.id = "titleWithRequiredLabel-" + _this18.index;
            _this18.fixerGroup = "js-layout-fixer-group-titleWithRequiredLabel-" + _this18.index;
            return _this18;
        }

        babelHelpers.createClass(TitleWithRequiredLabel, [{
            key: "layoutFixerModule",
            value: function layoutFixerModule() {
                return {
                    path: "core/modules/layout-fixer",
                    conditions: "element:{was seen}",
                    options: {
                        selectors: ["." + this.fixerGroup]
                    }
                };
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById(this.id), [this.layoutFixerModule()]);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(document.getElementById(this.id));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.id
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 l-col-small-9"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height " + this.fixerGroup
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h2"
                }, this.props.title)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-3"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-animate-height " + this.fixerGroup
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-height-sensitive-element"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-position-bottom u-position-absolute u-position-right u-margin-right"
                }, "* " + this.props.requiredLabel))))));
            }
        }]);
        return TitleWithRequiredLabel;
    }(_react.Component);

    var PreambleWithExpander = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(PreambleWithExpander, _Component3);

        var _super3 = _createSuper(PreambleWithExpander);

        function PreambleWithExpander() {
            babelHelpers.classCallCheck(this, PreambleWithExpander);
            return _super3.apply(this, arguments);
        }

        babelHelpers.createClass(PreambleWithExpander, [{
            key: "getHtmlForExpander",
            value: function getHtmlForExpander() {
                if (this.props.value && this.props.value.header) {
                    return '<div>' + this.props.value.header + (this.props.value.more ? '<div id="EXPANDER-ID-PLACEHOLDER">' + this.props.value.more + '</div>' : '') + '</div>';
                } else {
                    return null;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var html = this.getHtmlForExpander();
                return html ? /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_ExpanderFromHtml.default, {
                    html: html
                })) : null;
            }
        }]);
        return PreambleWithExpander;
    }(_react.Component);
});
//# sourceMappingURL=MulticartConsentsComponent.js.map