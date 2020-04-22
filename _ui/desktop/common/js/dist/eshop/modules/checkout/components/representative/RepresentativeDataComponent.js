define(["exports", "react", "react-redux", "../../actions/app", "../../selectors", "../../actions/data", "../MulticartValidationComponent", "eshop/components/OraCommonComponents", "./RepresentationMode", "./Representatives", "./Grantors", "../../../core/components/ui/Tooltip"], function(_exports, _react, _reactRedux, _app, _selectors, _data, _MulticartValidationComponent, _OraCommonComponents, _RepresentationMode, _Representatives, _Grantors, _Tooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartValidationComponent = babelHelpers.interopRequireDefault(_MulticartValidationComponent);
    _RepresentationMode = babelHelpers.interopRequireDefault(_RepresentationMode);
    _Representatives = babelHelpers.interopRequireDefault(_Representatives);
    _Grantors = babelHelpers.interopRequireDefault(_Grantors);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

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

    // minRC: minRepresentativeCount
    // maxRC: maxRepresentativeCount
    // minRMC: minGrantorCount
    // maxRMC: maxGrantorCount
    var RepresentativeDataComponentView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(RepresentativeDataComponentView, _Component);

        var _super = _createSuper(RepresentativeDataComponentView);

        function RepresentativeDataComponentView(props) {
            var _this;

            babelHelpers.classCallCheck(this, RepresentativeDataComponentView);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "calculateComponentHeader", function(channel) {
                var tooltipText = "Przy podpisywaniu umowy przez pe\u0142nomocnika niezb\u0119dne jest posiadanie orygina\u0142u pe\u0142nomocnictwa\n                            w formie aktu notarialnego lub pe\u0142nomocnictwa z notarialnie po\u015Bwiadczonym podpisem.\n                            Pe\u0142nomocnictwo powinno zawiera\u0107 dat\u0119 udzielenia pe\u0142nomocnictwa.";
                var isProxy = !(["JP", "WP"].indexOf(_this.props.representationMode) === -1);
                if (channel === 'WWW' && isProxy) return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    label: _this.props.descriptions.title
                }, tooltipText);
                else return _this.props.descriptions.title;
            });
            _this.addRepresentative = _this.addRepresentative.bind(babelHelpers.assertThisInitialized(_this));
            _this.addGrantor = _this.addGrantor.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(RepresentativeDataComponentView, [{
            key: "modesConfig",
            value: function modesConfig() {
                return [{
                    mode: "JR",
                    minRC: 1,
                    maxRC: 1,
                    minRMC: 0,
                    maxRMC: 0
                }, {
                    mode: "WR",
                    minRC: 2,
                    maxRC: this.props.maxRepresentativesCount,
                    minRMC: 0,
                    maxRMC: 0
                }, {
                    mode: "JP",
                    minRC: 1,
                    maxRC: 1,
                    minRMC: 1,
                    maxRMC: this.props.maxGrantorsCount
                }, {
                    mode: "WP",
                    minRC: 2,
                    maxRC: this.props.maxRepresentativesCount,
                    minRMC: 1,
                    maxRMC: this.props.maxGrantorsCount
                }];
            }
        }, {
            key: "modeConfig",
            value: function modeConfig() {
                var _this2 = this;

                return this.modesConfig().filter(function(c) {
                    return c.mode === _this2.props.representationMode;
                })[0];
            }
        }, {
            key: "legalForm",
            value: function legalForm() {
                var legalForm = this.props.customer && this.props.customer.legalForm;
                return legalFormTranslator(legalForm);
            }
        }, {
            key: "validRepresentationMethods",
            value: function validRepresentationMethods() {
                if (!this.legalForm()) {
                    return [];
                } else {
                    var ret = this.props.validRepresentationModes[this.legalForm()];

                    if (ret) {
                        return ret;
                    } else {
                        console.error("validRepresentationModes is not available for legalForm: " + this.legalForm());
                        return [];
                    }
                }
            }
        }, {
            key: "addRepresentative",
            value: function addRepresentative() {
                var nextMaxIndex = this.props.representativesFormData.length;
                this.props.setRepresentativeData({
                    index: nextMaxIndex
                });
            }
        }, {
            key: "addGrantor",
            value: function addGrantor() {
                var nextMaxIndex = this.props.grantorsFormData.length;
                this.props.setGrantorData({
                    index: nextMaxIndex
                });
            }
        }, {
            key: "representationModeOptions",
            value: function representationModeOptions() {
                var _this3 = this;

                var representationModeOptions = this.props.representationModeOptions[0] ? this.props.representationModeOptions : mockRepresentationModeOptions;
                return representationModeOptions.filter(function(opt) {
                    return _this3.validRepresentationMethods().indexOf(opt.value) > -1;
                });
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.props.registerValidation();
                this.props.requestCartRepresentativeData();
            }
        }, {
            key: "getRepresentativeLabel",
            value: function getRepresentativeLabel() {
                return {
                    "JR": this.props.descriptions.representativeLabel,
                    "WR": this.props.descriptions.representativeLabelPlural,
                    "JP": this.props.descriptions.representativeLabelForProxy,
                    "WP": this.props.descriptions.representativeLabelForProxyPlural
                } [this.props.representationMode];
            }
        }, {
            key: "render",
            value: function render() {
                if (!this.legalForm()) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form u-padding-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "h2"
                }, this.calculateComponentHeader(this.props.channels.sales)), !this.props.isValid && /*#__PURE__*/ _react.default.createElement(_MulticartValidationComponent.default, {
                    messageType: "representativeData"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4"
                }, this.getRepresentativeLabel() ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "h4"
                }, this.getRepresentativeLabel()) : null, /*#__PURE__*/ _react.default.createElement(_RepresentationMode.default, {
                    defaultMode: this.props.descriptions.defaultMode,
                    options: this.representationModeOptions(),
                    onChange: this.props.setRepresentationMode,
                    selected: this.props.representationMode,
                    modesConfig: this.modesConfig()
                }), /*#__PURE__*/ _react.default.createElement(_Representatives.default, babelHelpers.extends({}, this.props, {
                    data: this.props.representativesFormData,
                    representationMode: this.props.representationMode,
                    onChange: this.props.setRepresentativeData,
                    remove: this.props.removeRepresentative,
                    minCount: this.modeConfig() && this.modeConfig().minRC
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_Grantors.default, {
                    title: this.props.descriptions.grantorLabel,
                    titlePlural: this.props.descriptions.grantorPluralLabel,
                    data: this.props.grantorsFormData,
                    onChange: this.props.setGrantorData,
                    remove: this.props.removeGrantor,
                    minCount: this.modeConfig() && this.modeConfig().minRMC,
                    grantingDate: this.props.grantingDate,
                    grantingDateErrors: this.props.grantingDateErrors,
                    setGrantingDate: this.props.setGrantingDate
                }))), this.modeConfig() && this.props.representativesFormData.length < this.modeConfig().maxRC ? /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraAddBar, {
                    label: this.getRepresentativeLabel(),
                    id: "add_representative",
                    onAddClick: this.addRepresentative.bind(this),
                    className: "u-spacing-top-l u-box-shadow--s"
                }) : null, this.modeConfig() && this.props.grantorsFormData.length < this.modeConfig().maxRMC ? /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraAddBar, {
                    label: "Dodaj kolejn\u0105 osob\u0119 udzielaj\u0105c\u0105 pe\u0142nomocnictwa",
                    id: "add_grantor",
                    onAddClick: this.addGrantor.bind(this),
                    className: "u-spacing-top-l u-box-shadow--s"
                }) : null);
            }
        }]);
        return RepresentativeDataComponentView;
    }(_react.Component); //needed until canonical legalForm codes are established


    function legalFormTranslator(legalForm) {
        if (legalForm) {
            if (legalForm.length <= 4) {
                return legalForm;
            } else {
                return {
                    ONE_PERSON_ENTERPRISE: "JDG",
                    PRIVATE_LIMITED_COMPANY: "SZOO",
                    CIVIL_PARTNERSHIP: "SC",
                    FOUNDATION: "FUN",
                    JOINT_STOCK_COMPANY: "SA",
                    GENERAL_PARTNERSHIP: "SJ",
                    COMANCIATE_COMPANY: "SK",
                    CANTEEN_JOINT_STOCK_COMPANY: "SKA",
                    PARTNERSHIP: "SP",
                    ASSOCIATION: "STOW"
                } [legalForm];
            }
        }
    }

    var mockRepresentationModeOptions = [{
        value: "JR",
        description: "Reprezentant"
    }, {
        value: "WR",
        description: "Kilku reprezentantów"
    }, {
        value: "JP",
        description: "Pełnomocnik"
    }, {
        value: "WP",
        description: "Kilku pełnomocników"
    }];
    var mockValidRepresentationModes = {
        JDG: ["JR", "JP", "WP"],
        SC: ["JR", "WR", "JP", "WP"]
    };
    RepresentativeDataComponentView.defaultProps = {
        descriptions: {
            title: "Dane reprezentanta",
            representativeLabel: "Dane reprezentanta",
            representativeLabelPlural: "Dane reprezentantów",
            representativeLabelForProxy: "Dane pełnomocnika",
            representativeLabelForProxyPlural: "Dane pełnomocników",
            grantorLabel: "Dane osoby udzielającej pełnomocnictwa",
            grantorPluralLabel: "Dane osób udzielających pełnomocnictwa"
        },
        representationModeOptions: mockRepresentationModeOptions,
        validRepresentationModes: mockValidRepresentationModes,
        maxRepresentativesCount: 5,
        maxGrantorsCount: 5
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            representativesFormData: (0, _selectors.getRepresentativesFormData)(state),
            grantorsFormData: (0, _selectors.getGrantorsFormData)(state),
            representationMode: (0, _selectors.getRepresentationMode)(state),
            isValid: (0, _selectors.isRepresentativeDataValid)(state),
            isFilled: (0, _selectors.isRepresentativeDataFilled)(state),
            grantingDate: (0, _selectors.getGrantingDate)(state),
            grantingDateErrors: (0, _selectors.getGrantingDateErrors)(state),
            customer: (0, _selectors.getCustomerData)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            setRepresentativeData: function setRepresentativeData(_ref) {
                var name = _ref.name,
                    value = _ref.value,
                    index = _ref.index,
                    validate = _ref.validate;
                return dispatch((0, _app.changeRepresentativeFormField)({
                    name: name,
                    value: value,
                    index: index,
                    validate: validate
                }));
            },
            setRepresentativeDataNoValidations: function setRepresentativeDataNoValidations(_ref2) {
                var name = _ref2.name,
                    value = _ref2.value,
                    index = _ref2.index;
                return dispatch((0, _app.changeRepresentativeFormFieldNoValidations)({
                    name: name,
                    value: value,
                    index: index
                }));
            },
            setGrantorData: function setGrantorData(_ref3) {
                var name = _ref3.name,
                    value = _ref3.value,
                    index = _ref3.index,
                    validate = _ref3.validate;
                return dispatch((0, _app.changeGrantorFormField)({
                    name: name,
                    value: value,
                    index: index,
                    validate: validate
                }));
            },
            setRepresentationMode: function setRepresentationMode(mode, modeConfig) {
                return dispatch((0, _app.setRepresentationMode)(mode, modeConfig));
            },
            removeGrantor: function removeGrantor(index) {
                return dispatch((0, _app.removeGrantor)(index));
            },
            removeRepresentative: function removeRepresentative(index) {
                return dispatch((0, _app.removeRepresentative)(index));
            },
            setGrantingDate: function setGrantingDate(date) {
                return dispatch((0, _app.setGrantingDate)(date));
            },
            registerValidation: function registerValidation() {
                return dispatch((0, _data.registerNextStepCondition)("representativeData"));
            },
            requestCartRepresentativeData: function requestCartRepresentativeData() {
                return dispatch((0, _data.requestCartRepresentativeData)());
            },
            changeRepresentativeCountry: function changeRepresentativeCountry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    value = _ref4.value,
                    index = _ref4.index;
                return dispatch((0, _app.changeRepresentativeCountry)({
                    id: id,
                    name: name,
                    value: value,
                    index: index
                }));
            }
        };
    };

    var RepresentativeDataComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RepresentativeDataComponentView);
    var _default = RepresentativeDataComponent;
    _exports.default = _default;
});
//# sourceMappingURL=RepresentativeDataComponent.js.map