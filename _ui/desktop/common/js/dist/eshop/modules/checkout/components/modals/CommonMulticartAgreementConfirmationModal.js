define(["exports", "react", "react-redux", "eshop/modules/core/components/ui/Modal", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/errors", "eshop/modules/checkout/actions/data", "eshop/components/OraCommonComponents", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/consents/MulticartSingleConsentRow", "eshop/modules/checkout/actions/validation", "eshop/utils/OnlineUtils", "../../../cart/selectors", "../../selectors", "../../constants/LegalFormEnum"], function(_exports, _react, _reactRedux, _Modal, _selectors, _errors, _data, _OraCommonComponents, _app, _MulticartSingleConsentRow, _validation, _OnlineUtils, _selectors2, _selectors3, _LegalFormEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _MulticartSingleConsentRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRow);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _LegalFormEnum = babelHelpers.interopRequireDefault(_LegalFormEnum);

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

    var CommonMulticartAgreementConfirmationModal = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(CommonMulticartAgreementConfirmationModal, _Component);

        var _super = _createSuper(CommonMulticartAgreementConfirmationModal);

        function CommonMulticartAgreementConfirmationModal(props) {
            var _this;

            babelHelpers.classCallCheck(this, CommonMulticartAgreementConfirmationModal);
            _this = _super.call(this, props);
            _this.state = _this.getCleanStateObject();
            _this.isConsentUnderChange = _this.isConsentUnderChange.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(CommonMulticartAgreementConfirmationModal, [{
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
                this.props.closeAgreementConfirmationModal("COMMON");
            }
        }, {
            key: "onConfirm",
            value: function onConfirm() {
                var _this2 = this;

                var promise = this.handleConsentsUpdateAndCartRecalculation();

                if (promise) {
                    this.props.closeAgreementConfirmationModal("COMMON", true);
                    this.setState({
                        wasConfirmed: true,
                        shouldPreserveVisibleState: true
                    }); //??

                    promise.then(function() {
                        return _this2.props.validateData();
                    });
                } else {
                    console.warn("missing promise from consent update request");
                }
            }
        }, {
            key: "onClose",
            value: function onClose() {
                this.handleRevertConsentChanges();
                this.setState(this.getCleanStateObject());
                this.props.closeAgreementConfirmationModal("COMMON");
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
                    this.props.closeAgreementConfirmationModal("COMMON", true);
                    this.props.validateData();
                }
            }
        }, {
            key: "handleConsentsUpdateAndCartRecalculation",
            value: function handleConsentsUpdateAndCartRecalculation() {
                //TODO check if necessary, maybe only bigzonk
                return this.props.updateConsentsStates(this.props.consentProps.consentStates);
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
                var _this3 = this;

                data.map(function(consentData) {
                    if (!_this3.state.originalConsentStates.find(function(state) {
                            return state.consentCode === consentData.consentCode;
                        })) {
                        _this3.state.originalConsentStates.push(_this3.props.consentProps.consentStates.find(function(state) {
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
                var _this4 = this;

                return !!list && list.length > 0 ? /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-agreements-list u-no-margin"
                }, list.map(function(consent, i) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "".concat(list.length - 1 === i ? '' : 'u-border-bottom')
                    }, /*#__PURE__*/ _react.default.createElement(_MulticartSingleConsentRow.default, babelHelpers.extends({}, _this4.getPropsForConsent(consent), {
                        descriptions: _this4.props.descriptions,
                        isDeliveryStep: "false",
                        consents: _this4.props.consentProps.consents,
                        consentStates: _this4.props.consentProps.consentStates
                    })));
                }))) : "";
            }
        }, {
            key: "getDescription",
            value: function getDescription() {
                var descriptions = _OnlineUtils.default.extractObject(this.props.descriptions, "description");

                var descriptionsArray = Object.keys(descriptions).map(function(k) {
                    return {
                        key: k,
                        value: descriptions[k]
                    };
                });
                var defDescription = descriptions[""];
                var state = [];
                state.push({
                    key: "B",
                    present: this.getNonFilledBigZonkSection() ? true : false
                });
                var nonFilledSections = this.getNonFilledBonusSections();
                state.push({
                    key: "F",
                    present: nonFilledSections.find(function(s) {
                        return s.name == "EFV_SUBSECTION";
                    }) ? true : false
                });
                state.push({
                    key: "M",
                    present: nonFilledSections.find(function(s) {
                        return s.name == "MKT_SUBSECTION";
                    }) ? true : false
                });
                var matchedDescription = descriptionsArray.find(function(d) {
                    return state.every(function(s) {
                        return s.present ? d.key.indexOf(s.key) > -1 : d.key.indexOf(s.key) == -1;
                    });
                });
                return matchedDescription && matchedDescription.value || defDescription;
            }
        }, {
            key: "isConsentUnderChange",
            value: function isConsentUnderChange(c) {
                return this.state.originalConsentStates.find(function(state) {
                    return state.consentCode === c.consentCode;
                });
            }
        }, {
            key: "getNonFilledBonusSections",
            value: function getNonFilledBonusSections() {
                var _this5 = this;

                return this.getBonusSections().filter(function(s) {
                    return s.consents.length > s.positiveStatesCount || s.consents.some(_this5.isConsentUnderChange);
                });
            }
        }, {
            key: "getConsentWithState",
            value: function getConsentWithState(consent) {
                var positiveState = consent.states.filter(function(s) {
                    return s.positive;
                }).map(function(s) {
                    return s.code;
                })[0];
                return _objectSpread({}, consent, {
                    isPositive: this.props.consentProps.consentStates.find(function(cs) {
                        return cs.consentCode == consent.consentCode && cs.stateCode == positiveState;
                    })
                });
            }
        }, {
            key: "getBonusSections",
            value: function getBonusSections() {
                var _this6 = this;

                var subsections;
                var bonusSectionCode;
                var DFT_SUBSECTION = "0";

                if (this.props.isNet && _LegalFormEnum.default.isSmallBusiness(this.props.legalForm)) {
                    bonusSectionCode = "1114";
                    subsections = [{
                        code: "103",
                        name: "EFV_SUBSECTION",
                        description: this.getInvoiceDescription(this.props.isNet),
                        consents: []
                    }, {
                        code: "104",
                        name: "MKT_SUBSECTION",
                        description: this.props.descriptions.reduceCostSectionSubtitleMb2b,
                        consents: []
                    }, {
                        code: DFT_SUBSECTION,
                        consents: []
                    }];
                } else {
                    bonusSectionCode = "1014";
                    subsections = [{
                        code: "101",
                        name: "EFV_SUBSECTION",
                        description: this.getInvoiceDescription(this.props.isNet),
                        consents: []
                    }, {
                        code: "102",
                        name: "MKT_SUBSECTION",
                        description: this.props.isNet ? this.props.descriptions.reduceCostSectionSubtitleMb2b : this.props.descriptions.reduceCostSectionSubtitleM,
                        consents: []
                    }, {
                        code: DFT_SUBSECTION,
                        consents: []
                    }];
                }

                var bonusSection = this.props.consentProps.conf.find(function(c) {
                    return c.code == bonusSectionCode;
                });
                var defaultSubsection = subsections.find(function(s) {
                    return s.code == DFT_SUBSECTION;
                });
                this.props.bonusesConsents.forEach(function(consent) {
                    var matchedBonusSubsectionCode = bonusSection.sections.filter(function(sectionConf) {
                        return sectionConf.consentsCode.find(function(c) {
                            return c == consent.consentCode;
                        });
                    }).map(function(sectionConf) {
                        return sectionConf.code;
                    })[0];

                    var consentWithState = _this6.getConsentWithState(consent);

                    var subsection = (subsections.find(function(s) {
                        return s.code == matchedBonusSubsectionCode;
                    }) || defaultSubsection).consents.push(consentWithState);
                });
                subsections.forEach(function(s) {
                    return s.positiveStatesCount = s.consents.filter(function(c) {
                        return c.isPositive;
                    }).length;
                });
                var mktgSubsection = subsections.find(function(s) {
                    return s.name == "MKT_SUBSECTION";
                });
                mktgSubsection.description = mktgSubsection.description.replace("{N}", mktgSubsection.positiveStatesCount);
                mktgSubsection.description = mktgSubsection.description.replace("{X}", mktgSubsection.consents.length);
                return subsections;
            }
        }, {
            key: "getInvoiceDescription",
            value: function getInvoiceDescription(isNet) {
                var emailPrefix = this.props.invoiceMapping !== 'invoiceEmail' || this.props.invoiceEmail && this.props.invoiceEmail.length > 0 ? 'fillEmail' : '';
                var marketPrefix = isNet ? 'b2b' : '';
                var key = 'reduceCostSectionSubtitleF' + emailPrefix + marketPrefix;
                return this.props.descriptions[key];
            }
        }, {
            key: "getNonFilledBigZonkSection",
            value: function getNonFilledBigZonkSection() {
                var consents = this.props.bigAndZonkConsents.map(this.getConsentWithState.bind(this));
                var positiveStatesCount = consents.filter(function(consent) {
                    return consent.isPositive;
                }).length;

                if (consents.length > positiveStatesCount || consents.some(this.isConsentUnderChange)) {
                    return {
                        consents: consents,
                        description: this.props.descriptions.bigZonkSectionSubtitle
                    };
                } else {
                    return null;
                }
            }
        }, {
            key: "renderBigZonkSection",
            value: function renderBigZonkSection() {
                var section = this.getNonFilledBigZonkSection();
                var anyBonusSection = this.getNonFilledBonusSections()[0];
                return section ? [this.renderSection(section, anyBonusSection ? "u-border-bottom" : "")] : [];
            }
        }, {
            key: "renderBonusSection",
            value: function renderBonusSection() {
                var nonFilledBigZonkSection = this.getNonFilledBigZonkSection();
                var nonFilledSections = this.getNonFilledBonusSections();
                var efvSection = nonFilledSections.find(function(s) {
                    return s.name == "EFV_SUBSECTION";
                });
                var mktSection = nonFilledSections.find(function(s) {
                    return s.name == "MKT_SUBSECTION";
                });
                var ret = [];

                if (efvSection) {
                    ret.push(this.renderSection(efvSection, ""));
                }

                if (mktSection) {
                    ret.push(this.renderSection(mktSection, efvSection ? "u-border-top" : ""));
                }

                return ret;
            }
        }, {
            key: "renderSection",
            value: function renderSection(section) {
                var _this7 = this;

                var classSuffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var consents = section && section.consents.filter(function(c) {
                    return !c.isPositive || _this7.isConsentUnderChange(c);
                }) || [];

                if (consents[0]) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-top-l " + classSuffix
                    }, /*#__PURE__*/ _react.default.createElement("p", null, section.description), this.renderConsentsSection(consents));
                } else {
                    return null;
                }
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
                    size: "medium"
                }, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-no-spacing u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg--box validation message",
                    dangerouslySetInnerHTML: {
                        __html: this.props.descriptions.title
                    }
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-no-spacing u-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg--box validation message",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription()
                    }
                }))), /*#__PURE__*/ _react.default.createElement(Section, {
                    title: this.props.descriptions.bigZonkSectionTitle
                }, this.renderBigZonkSection()), /*#__PURE__*/ _react.default.createElement(Section, {
                    title: this.props.descriptions.reduceCostSectionTitle
                }, this.renderBonusSection()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-l u-small-padding-top-l u-medium-padding-top-l u-large-padding-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-4 large-offset-by-4"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onReturn.bind(this),
                    type: "secondary",
                    size: "medium",
                    className: "u-w-100"
                }, "Wr\xF3\u0107")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-small-padding-top"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.onConfirm.bind(this),
                    type: "primary",
                    size: "medium",
                    className: "u-w-100"
                }, "Dalej")))));
            }
        }]);
        return CommonMulticartAgreementConfirmationModal;
    }(_react.Component);

    var Section = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(Section, _Component2);

        var _super2 = _createSuper(Section);

        function Section() {
            babelHelpers.classCallCheck(this, Section);
            return _super2.apply(this, arguments);
        }

        babelHelpers.createClass(Section, [{
            key: "render",
            value: function render() {
                if (this.props.children[0]) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-padding-top"
                    }, /*#__PURE__*/ _react.default.createElement("h5", null, this.props.title), this.props.children);
                } else {
                    return null;
                }
            }
        }]);
        return Section;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showAgreementConfirmationModal: (0, _selectors.getShowAgreementConfirmationModal)(state),
            consentProps: (0, _selectors.getConsentsProps)(state),
            bonusesConsents: (0, _selectors.getBonusesConsents)(state),
            isNet: (0, _selectors2.getCartIsNet)(state),
            legalForm: (0, _selectors3.getLegalForm)(state),
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

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CommonMulticartAgreementConfirmationModal);

    _exports.default = _default;
});
//# sourceMappingURL=CommonMulticartAgreementConfirmationModal.js.map