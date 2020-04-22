define(["exports", "react", "./MulticartSingleConsentRow", "./MulticartConsentsGroupSubSection", "eshop/modules/core/components/ui/Expander", "../../selectors", "../../utils/utils", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/ExpanderFromHtml"], function(_exports, _react, _MulticartSingleConsentRow, _MulticartConsentsGroupSubSection, _Expander, _selectors, _utils, _MulticartValidationComponent, _OraCommonComponents, _ExpanderFromHtml) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _MulticartSingleConsentRow = babelHelpers.interopRequireDefault(_MulticartSingleConsentRow);
    _MulticartConsentsGroupSubSection = babelHelpers.interopRequireDefault(_MulticartConsentsGroupSubSection);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);
    _ExpanderFromHtml = babelHelpers.interopRequireDefault(_ExpanderFromHtml);

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

    var renderCount = 0;

    var MulticartConsentsGroupSection = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(MulticartConsentsGroupSection, _React$Component);

        var _super = _createSuper(MulticartConsentsGroupSection);

        function MulticartConsentsGroupSection(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartConsentsGroupSection);
            _this = _super.call(this, props);
            _this.state = {
                expanded: _this.props.initiallyOpen
            };
            return _this;
        }

        babelHelpers.createClass(MulticartConsentsGroupSection, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.onExpandedInit(this.props.listNo, this.props.initiallyOpen);
            }
        }, {
            key: "getPropsForConsent",
            value: function getPropsForConsent(consentData) {
                return {
                    key: consentData.consentCode,
                    readOnly: this.props.readonly,
                    consentsWithBonusLoading: consentData.isRelatedWithBonus,
                    isUpdating: this.props.isUpdating,
                    isMandatory: consentData.required,
                    consent: consentData,
                    consentsErrorList: this.props.consentsErrorList,
                    state: this.props.consentStates.filter(function(consentState) {
                        return consentState.consentCode === consentData.consentCode;
                    }),
                    updating: this.props.updatingConsents[consentData.consentCode],
                    onChange: this.props.onChange,
                    onUpdate: this.props.onUpdate,
                    loaderElementId: this.props.loaderElementId,
                    factoryType: this.props.factoryType,
                    selectedMethod: this.props.selectedMethod
                };
            }
        }, {
            key: "allConsentsAreReadOnly",
            value: function allConsentsAreReadOnly() {
                return this.props.consents.every(function(con) {
                    return con.readonly;
                });
            }
        }, {
            key: "isAllSelected",
            value: function isAllSelected() {
                var _this2 = this;

                if (this.props.consents.length === 0) {
                    return false;
                }

                var allSelected = true;
                var state;
                var positiveState;
                var selectedPositive;
                this.props.consents.forEach(function(consent) {
                    positiveState = consent.states.find(function(state) {
                        return state.positive;
                    });

                    if (!!consent.bundleAssignments && consent.bundleAssignments.length > 0) {
                        consent.bundleAssignments.forEach(function(ba) {
                            state = _this2.props.consentStates.find(function(consentState) {
                                return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                            });
                            selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                            allSelected = allSelected && selectedPositive;
                        });
                    } else if (!!consent.msisdns && consent.msisdns.length > 0) {
                        consent.msisdns.forEach(function(ba) {
                            state = _this2.props.consentStates.find(function(consentState) {
                                return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                            });
                            selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                            allSelected = allSelected && selectedPositive;
                        });
                    } else {
                        state = _this2.props.consentStates.find(function(consentState) {
                            return consent.consentCode === consentState.consentCode && !consentState.bundleNo;
                        });
                        selectedPositive = state !== undefined && state.stateCode === positiveState.code;
                        allSelected = allSelected && selectedPositive;
                    }
                });
                return allSelected;
            }
        }, {
            key: "isAllChecked",
            value: function isAllChecked() {
                var _this3 = this;

                if (this.props.consents.length === 0) {
                    return false;
                }

                var allSelected = true;
                var state;
                this.props.consents.forEach(function(consent) {
                    if (!consent.readonly) {
                        if (!!consent.bundleAssignments && consent.bundleAssignments.length > 0) {
                            consent.bundleAssignments.forEach(function(ba) {
                                state = _this3.props.consentStates.find(function(consentState) {
                                    return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo;
                                });
                                allSelected = allSelected && state !== undefined && state.stateCode;
                            });
                        } else if (!!consent.msisdns && consent.msisdns.length > 0) {
                            consent.msisdns.forEach(function(ba) {
                                state = _this3.props.consentStates.find(function(consentState) {
                                    return consent.consentCode === consentState.consentCode && consentState.bundleNo === ba.bundleNo && consentState.stateCode;
                                });
                                allSelected = allSelected && state !== undefined && state.stateCode;
                            });
                        } else {
                            state = _this3.props.consentStates.find(function(consentState) {
                                return consent.consentCode === consentState.consentCode && !consentState.bundleNo;
                            });
                            allSelected = allSelected && state !== undefined && state.stateCode;
                        }
                    }
                });
                return allSelected;
            }
        }, {
            key: "acceptAllConsents",
            value: function acceptAllConsents() {
                this.onChangeCallback(this.getConsentMapping(true));
            }
        }, {
            key: "uncheckAllConsents",
            value: function uncheckAllConsents() {
                this.onChangeCallback(this.getConsentMapping(false));
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
            key: "isSectionWithPrintDocument",
            value: function isSectionWithPrintDocument(listNumber) {
                return listNumber === 1 || listNumber === 11;
            }
        }, {
            key: "getConsentMapping",
            value: function getConsentMapping(checkConsents) {
                var _this4 = this;

                var matchingConsents = [];
                this.props.consents.forEach(function(consent) {
                    if (!consent.readonly) {
                        var stateCode = checkConsents ? consent.states.find(function(state) {
                            return state.positive;
                        }).code : consent.states.find(function(state) {
                            return !state.positive;
                        }).code;

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
                });
                matchingConsents = matchingConsents.map(function(mc) {
                    return _objectSpread({}, mc, {
                        relatedWithBonus: mc.relatedWithBonus || _this4.isRelatedWithBonusBySubsection(mc.consentCode)
                    });
                });
                return matchingConsents;
            }
        }, {
            key: "onChangeCallback",
            value: function onChangeCallback(data) {
                this.props.onUpdate(data.filter(function(cd) {
                    return cd.relatedWithBonus;
                }));
                this.props.onChange(data.filter(function(cd) {
                    return !cd.relatedWithBonus;
                }));
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.setState({
                    manualOpen: false,
                    expanded: this.props.initiallyOpen,
                    style: {
                        display: "none"
                    }
                });
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate(newProps) {
                var _this5 = this;

                var showErrorOld = this.props.consentsErrorMsg && this.props.consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, _this5.props.consentStates);
                });
                var showErrorNew = newProps.consentsErrorMsg && newProps.consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, newProps.consentStates);
                });

                if (!!showErrorNew && (!!showErrorNew != !!showErrorOld || !this.state.expanded)) {
                    console.log("CONSENTS GROUP set state to expanded true");
                    this.setState({
                        manualOpen: false,
                        expanded: true
                    });
                } //if(this.state.manualOpen && !!showError!=this.state.expanded)
                //   this.setState({manualOpen:false,expanded:!!showError})

            }
        }, {
            key: "onClicked",
            value: function onClicked(event) {
                if (this.state.expanded) {
                    //aria-expanded already changed
                    console.log("ZMIANA STANU na false");
                    this.setState({
                        manualOpen: true,
                        expanded: false
                    });
                } else {
                    console.log("ZMIANA STANU na true");
                    this.setState({
                        manualOpen: true,
                        expanded: true
                    });
                }
            }
        }, {
            key: "getHeader",
            value: function getHeader(listNumber) {
                var _this6 = this;

                var showError = this.props.consentsErrorMsg && this.props.consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, _this6.props.consentStates);
                });
                var consentDocumentsShowError = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                    return 'consentDocuments' === e.type;
                }) && this.isSectionWithPrintDocument(listNumber) && this.props.showPrintDocumentsButton;
                return (this.getNotPermanentlyAgreedConsents() && this.getNotPermanentlyAgreedConsents().length > 0 || this.props.hasAlreadyAgreed && this.props.channels.sales !== 'WWW') && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-agreements__item opl-agreements__item--master u-padding-right-xl ".concat(this.props.backgroundColor) + (this.props.sequence != 0 ? " u-border-top" : "")
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-l u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "opl-checkbox u-margin-right o-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    id: "selectAllConsents-a-" + this.props.id,
                    checked: this.isAllSelected(),
                    onChange: this.agreeAllCheckboxChange.bind(this),
                    disabled: this.allConsentsAreReadOnly() || this.props.isUpdating && this.containsRelatedWithBonusConsent(),
                    hidden: this.selectAllConsentsCheckboxIsHidden(),
                    className: !!showError || !!consentDocumentsShowError ? " error" : ""
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h5 o-ci-label",
                    dangerouslySetInnerHTML: {
                        __html: this.props.title
                    }
                })), this.props.description && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement(_ExpanderFromHtml.default, {
                    className: "l-col-small-12 l-col-medium-12 l-col-9 u-margin-left-l-xl l-padding-top-l",
                    html: this.props.description,
                    labelShow: "[wi\u0119cej]",
                    labelHide: "[mniej]"
                })), this.showConfirmationRequiredDescription() && /*#__PURE__*/ _react.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.confirmationDescription
                    }
                }), /*#__PURE__*/ _react.default.createElement(_Expander.Trigger, {
                    className: "opl-agreements__group__trigger opl-agreements__group__trigger-arrow js-expander__trigger u-inline u-text-nowrap",
                    onClick: this.onClicked.bind(this),
                    expanded: this.state.expanded
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                })), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: !!showError ? "consents" : "consentDocuments",
                    show: !!showError || !!consentDocumentsShowError,
                    className: " u-margin-left-l-xl u-margin-top-s "
                }), this.getInfoForBonusConsentSection()))));
            }
        }, {
            key: "getInfoForBonusConsentSection",
            value: function getInfoForBonusConsentSection() {
                var _this7 = this;

                var showError = this.props.consentsErrorMsg && this.props.consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, _this7.props.consentStates);
                });
                return this.containsRelatedWithBonusConsent() && !this.sectionExpanded() && !showError && !this.isAllChecked() && !!this.props.descriptions.bonusGroupBusinessImplications ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-m u-padding-top-m o-icon-text g-icon g-icon--info g-icon--before g-icon--xs-s g-blue2-c"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-icon-text__text g-black1-c"
                }, this.props.descriptions.bonusGroupBusinessImplications)) : "";
            }
        }, {
            key: "showConfirmationRequiredDescription",
            value: function showConfirmationRequiredDescription() {
                var _this8 = this;

                return this.props.confirmationDescription && this.props.consents && this.props.confirmationRequiredConsentCodes && this.props.consents.filter(function(c) {
                    return _this8.props.confirmationRequiredConsentCodes.indexOf(c.consentCode) !== -1;
                }).length > 0;
            }
        }, {
            key: "containsRelatedWithBonusConsent",
            value: function containsRelatedWithBonusConsent() {
                return this.props.consents && this.props.consents.filter(function(consent) {
                    return consent.isRelatedWithBonus;
                }).length > 0;
            }
        }, {
            key: "sectionExpanded",
            value: function sectionExpanded() {
                return this.state.expanded;
            }
        }, {
            key: "consentIsPermanentlyAgreed",
            value: function consentIsPermanentlyAgreed(consent) {
                return (0, _utils.consentIsPermanentlyAgreed)(consent, this.props.consentProps.consentStates);
            }
        }, {
            key: "getNotPermanentlyAgreedConsents",
            value: function getNotPermanentlyAgreedConsents() {
                var _this9 = this;

                return this.props.consents.filter(function(consent) {
                    return !_this9.consentIsPermanentlyAgreed(consent);
                });
            }
        }, {
            key: "getPermanentlyAgreedConsents",
            value: function getPermanentlyAgreedConsents() {
                var _this10 = this;

                return this.props.consents.filter(function(consent) {
                    return _this10.consentIsPermanentlyAgreed(consent);
                });
            }
        }, {
            key: "permanentlyAgreedAreVisible",
            value: function permanentlyAgreedAreVisible() {
                var groupNumber = this.props.listNo;
                return !!this.props.consentProps.permanentlyAgreedVisibleForGroup[groupNumber];
            }
        }, {
            key: "togglePermanentlyAgreedVisibility",
            value: function togglePermanentlyAgreedVisibility(evt) {
                evt.preventDefault();
                var groupNumber = this.props.listNo;
                var visible = !!this.props.consentProps.permanentlyAgreedVisibleForGroup[groupNumber];
                this.props.setPermanentlyAgreedConsentsVisibleForGroup(groupNumber, !visible);
            }
        }, {
            key: "selectAllConsentsCheckboxIsHidden",
            value: function selectAllConsentsCheckboxIsHidden() {
                return this.isTheOnlyOneConsent() || this.getNotPermanentlyAgreedConsents().length === 0 && !this.permanentlyAgreedAreVisible();
            }
        }, {
            key: "isRelatedWithBonusBySubsection",
            value: function isRelatedWithBonusBySubsection(consentCode) {
                return (this.props.sections || []).filter(function(s) {
                    return s.withBonus;
                }).map(function(s) {
                    return s.consentsCode;
                }).some(function(cCodes) {
                    return cCodes.indexOf(consentCode) > -1;
                });
            }
        }, {
            key: "getConsentsInSubsections",
            value: function getConsentsInSubsections(consentsToShow, allConsentsForSection, showSubSectionPreamble) {
                var _this11 = this;

                var sectionIndex = 0;
                consentsToShow = consentsToShow.map(function(c) {
                    return _objectSpread({}, c, {
                        sectionIndex: sectionIndex++
                    });
                });

                if (this.props.sections[0]) {
                    var consentBelongToSubSection = function consentBelongToSubSection(subSection, consent) {
                        return !!subSection.consentsCode.filter(function(c) {
                            return c === consent.consentCode;
                        })[0];
                    };

                    return this.props.sections.map(function(subSection) {
                        return {
                            consents: consentsToShow.filter(function(c) {
                                return consentBelongToSubSection(subSection, c);
                            }),
                            allConsents: allConsentsForSection.filter(function(c) {
                                return consentBelongToSubSection(subSection, c);
                            }),
                            preamble: showSubSectionPreamble ? subSection.preamble : null,
                            sectionWithBonus: subSection.withBonus
                        };
                    }).map(function(sectionProps, i) {
                        return /*#__PURE__*/ _react.default.createElement(_MulticartConsentsGroupSubSection.default, babelHelpers.extends({
                            className: "".concat(_this11.props.sections.length - 1 === i ? '' : 'u-border-bottom u-margin-l')
                        }, _this11.props, sectionProps, {
                            getPropsForConsent: _this11.getPropsForConsent.bind(_this11)
                        }));
                    });
                } else {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartConsentsGroupSubSection.default, babelHelpers.extends({}, this.props, {
                        consents: consentsToShow,
                        getPropsForConsent: this.getPropsForConsent.bind(this)
                    }));
                }
            }
        }, {
            key: "getViewExpander",
            value: function getViewExpander() {
                var _this12 = this;

                var permanentlyAgreedConsents = this.getPermanentlyAgreedConsents();
                var notPermanentlyAgreedConsents = this.getNotPermanentlyAgreedConsents();
                var allConsents = permanentlyAgreedConsents.concat(notPermanentlyAgreedConsents);
                var showError = this.props.consentsErrorMsg && !!this.props.consents.find(function(consent) {
                    return !(0, _utils.validateConsent)(consent, _this12.props.consentStates);
                });
                return /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.getHeader(this.props.listNo),
                    variant: "",
                    className: "opl-agreements__group js-expander__container",
                    expanded: this.state.expanded,
                    styleObject: this.props.styleObject,
                    renderCount: ++renderCount,
                    ref: function ref(_ref) {
                        return _this12.ref = _ref;
                    },
                    contentClassName: "u-float-none l-col l-col-small-12 l-col-medium-12 l-col-9 opl-agreements__group__content js-expander__content u-hide--soft u-padding-left-xl u-medium-padding-left-l-xl u-small-padding-left-l-xl ".concat(this.props.backgroundColor),
                    id: this.props.sectionKey,
                    key: this.props.id + "_section"
                }, this.getConsentsInSubsections(notPermanentlyAgreedConsents, allConsents, true), this.props.hasAlreadyAgreed && !this.permanentlyAgreedAreVisible() && this.props.channels.sales !== 'WWW' && /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-l u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--xs-s g-icon--info u-margin-right-s g-gray7-c"
                }), /*#__PURE__*/ _react.default.createElement("span", null, "Powy\u017Csze zgody obejmuj\u0105 tylko te, kt\xF3re nie zosta\u0142y wyra\u017Cone i wype\u0142nione przy wcze\u015Bniejszych zakupach. \xA0", /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.togglePermanentlyAgreedVisibility.bind(this)
                }, "Poka\u017C wszystkie zgody"))), permanentlyAgreedConsents && permanentlyAgreedConsents.length > 0 && this.permanentlyAgreedAreVisible() && [ /*#__PURE__*/ _react.default.createElement("p", {
                    className: "opl-agreements-list__recentHeader u-font-bold u-margin-top-l"
                }, "Zgody wyra\u017Cone przy wcze\u015Bniejszych zakupach\xA0", /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.togglePermanentlyAgreedVisibility.bind(this)
                }, "Ukryj")), this.getConsentsInSubsections(permanentlyAgreedConsents, allConsents, false)], this.renderConsentDocumentsButton(this.props.listNo));
            }
        }, {
            key: "renderConsentDocumentsButton",
            value: function renderConsentDocumentsButton(listNumber) {
                var consentDocumentsShowError = !!this.props.errorList && !!this.props.errorList.find(function(e) {
                    return 'consentDocuments' === e.type;
                });
                return /*#__PURE__*/ _react.default.createElement("div", null, this.isSectionWithPrintDocument(listNumber) && this.props.showPrintDocumentsButton && /*#__PURE__*/ _react.default.createElement("div", {
                    className: 'u-padding-l'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "consents-console",
                    className: 'l-row opl-console u-no-margin ' + (this.props.channels.sales != 'WWW' && this.props.currentStepId === 'delivery-payment' ? 'g-white1-bg' : 'g-gray2-bg')
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "consentDocuments",
                    show: !!consentDocumentsShowError,
                    className: "u-padding-l"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.props.factoryType == "MOBILE" ? this.props.printMobileConsents : this.props.printConsents,
                    customClasses: "o-btn opl-btn opl-btn--green u-w-100",
                    type: "green",
                    disabled: !this.props.isPrintConsentDocumentsButtonEnabled
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), this.props.buttonText)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-9 l-col-10  u-padding-left-l u-padding-right-l u-small-padding-top"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-standard"
                }, this.props.info)))));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.getViewExpander());
            }
        }, {
            key: "isTheOnlyOneConsent",
            value: function isTheOnlyOneConsent() {
                return this.props.consents && this.props.consents.length === 1;
            }
        }]);
        return MulticartConsentsGroupSection;
    }(_react.default.Component);

    _exports.default = MulticartConsentsGroupSection;
});
//# sourceMappingURL=MulticartConsentsGroupSection.js.map