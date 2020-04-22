define(["exports", "react", "react-redux", "prop-types", "lodash", "./MsisdnVerificationComponent", "./MsisdnPositiveVerificationComponent", "./MsisdnNegativeVerificationComponent", "../selectors/filters", "../selectors/metaData", "../actions/filters", "../../core/constants/TransactionProcessTypeEnum", "../../magnum2/selectors", "eshop/modules/cart/actions/cart"], function(_exports, _react, _reactRedux, _propTypes, _lodash, _MsisdnVerificationComponent, _MsisdnPositiveVerificationComponent, _MsisdnNegativeVerificationComponent, _filters, _metaData, _filters2, _TransactionProcessTypeEnum, _selectors, _cart) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MsisdnVerificationComponentDescriptionsType = _exports.MsisdnVerificationComponentContainerBase = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _MsisdnVerificationComponent = babelHelpers.interopRequireDefault(_MsisdnVerificationComponent);
    _MsisdnPositiveVerificationComponent = babelHelpers.interopRequireDefault(_MsisdnPositiveVerificationComponent);
    _MsisdnNegativeVerificationComponent = babelHelpers.interopRequireDefault(_MsisdnNegativeVerificationComponent);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);

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

    var MsisdnVerificationComponentContainerBase = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MsisdnVerificationComponentContainerBase, _Component);

        var _super = _createSuper(MsisdnVerificationComponentContainerBase);

        function MsisdnVerificationComponentContainerBase(props) {
            var _this;

            babelHelpers.classCallCheck(this, MsisdnVerificationComponentContainerBase);
            _this = _super.call(this, props);
            _this.handleMsisdnChange = _this.handleMsisdnChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.validate = _this.validate.bind(babelHelpers.assertThisInitialized(_this));
            _this.reset = _this.reset.bind(babelHelpers.assertThisInitialized(_this));
            _this.resetNegative = _this.resetNegative.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleKeyPress = _this.handleKeyPress.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MsisdnVerificationComponentContainerBase, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                if (document.getElementById("searchButton")) {
                    document.getElementById("searchButton").addEventListener('click', this.reset);
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (document.getElementById("searchButton")) {
                    document.getElementById("searchButton").removeEventListener('click', this.reset);
                }
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                if (this.props.queryParams) {
                    this.setState({
                        msisdn: this.props.queryParams.msisdn
                    });
                    this.props.changeMsisdnInput(this.props.queryParams.msisdn, true);
                } // add flag to session storage


                this.props.msisdnVerificationNeeded();
            }
        }, {
            key: "handleMsisdnChange",
            value: function handleMsisdnChange(event) {
                this.setState({
                    msisdn: event.target.value
                });
                this.props.changeMsisdnInput(event.target.value, this.props.msisdnInput.valid);
            }
        }, {
            key: "handleKeyPress",
            value: function handleKeyPress(target) {
                if (target.key === 'Enter') {
                    this.validate();
                }
            }
        }, {
            key: "validate",
            value: function validate() {
                if (this.props.msisdnInput.msisdn == "undefined" || !this.props.msisdnInput.msisdn) {
                    this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, false);
                    return;
                }

                var validMsisdnPatternRE = new RegExp(this.props.descriptions.regexpForNumberValidation);
                var msisdnWithoutSpace = this.props.msisdnInput.msisdn.replace(/\s/g, "");

                if (validMsisdnPatternRE.test(msisdnWithoutSpace)) {
                    this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, true);
                    this.props.checkMsisdnAndGetOffers(msisdnWithoutSpace);
                } else {
                    this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, false);
                }
            }
        }, {
            key: "reset",
            value: function reset() {
                if (this.props.processType !== _TransactionProcessTypeEnum.default.ASSIGNMENT && this.props.processType !== _TransactionProcessTypeEnum.default.ASSIGNMENT_DEATH) {
                    this.props.changeMsisdnInput("", true);
                    this.props.clearCheckMsisdn();
                }
            }
        }, {
            key: "resetNegative",
            value: function resetNegative() {
                this.props.changeMsisdnInput("", true);
                this.props.clearCheckMsisdn();
            }
        }, {
            key: "render",
            value: function render() {
                var processTypes = [_TransactionProcessTypeEnum.default.MNP, _TransactionProcessTypeEnum.default.RETENTION, _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST, _TransactionProcessTypeEnum.default.MNP_TWOSTEP, _TransactionProcessTypeEnum.default.MIGRATION_ZETAFON_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_POST_TO_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_PRE_TO_POST, _TransactionProcessTypeEnum.default.ASSIGNMENT, _TransactionProcessTypeEnum.default.ASSIGNMENT_DEATH, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_B2B, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_JDG, _TransactionProcessTypeEnum.default.MNP_APPLICATION];
                var conditions;

                if (this.props.isB2B) {
                    conditions = !this.props.isPropositionListCountSetMode && this.props.propositionListCount > 0 && processTypes.indexOf(this.props.processType) !== -1 && (this.props.selectedLoyaltyLengthValue == 0 || !!this.props.selectedLoyaltyLengthValue);
                } else {
                    conditions = processTypes.indexOf(this.props.processType) !== -1;
                }

                var result;

                if (this.props.selectedMobileTransaction && this.props.selectedMobileTransaction.process) {
                    result = _lodash.default.isEmpty(this.props.checkMsisdnResult);
                } else {
                    result = !this.props.isMatchingFilters() || _lodash.default.isEmpty(this.props.checkMsisdnResult);
                }

                if (conditions) {
                    var _React$createElement;

                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: "msisdn-verification-container-row",
                        className: "l-full-row  u-padding-m " + "g-gray1-bg"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: " l-col l-col-small-12 l-col-medium-12 l-col-12 " + (this.props.isB2B ? "u-padding-l u-padding-top-l g-white1-bg" : "u-spacing-top-l")
                    }, result ? /*#__PURE__*/ _react.default.createElement(_MsisdnVerificationComponent.default, {
                        inputFieldDesc: this.props.descriptions.inputFieldDesc,
                        invalidNumberDesc: this.props.descriptions.invalidNumberDesc,
                        msisdn: this.props.msisdnInput.msisdn,
                        handleMsisdnChange: this.handleMsisdnChange,
                        valid: this.props.msisdnInput.valid,
                        handleKeyPress: this.handleKeyPress,
                        validate: this.validate,
                        isMsisdnChecking: this.props.isMsisdnChecking,
                        isCustomerSelected: this.props.isCustomerSelected,
                        showMsisdnVerificationWarning: this.props.isMsisdnVerificationRequired,
                        processType: this.props.processType
                    }) : "", !result && this.props.checkMsisdnResult.isPositive === true ? /*#__PURE__*/ _react.default.createElement(_MsisdnPositiveVerificationComponent.default, {
                        description: this.props.checkMsisdnResult.description,
                        reset: this.resetNegative
                    }) : "", !result && this.props.checkMsisdnResult.isPositive === false ? /*#__PURE__*/ _react.default.createElement(_MsisdnNegativeVerificationComponent.default, (_React$createElement = {
                        description: this.props.checkMsisdnResult.description,
                        reset: this.resetNegative,
                        msisdn: this.props.msisdnInput.msisdn,
                        cartToRemove: this.props.checkMsisdnResult.cartToRemove
                    }, babelHelpers.defineProperty(_React$createElement, "msisdn", this.props.checkMsisdnResult.msisdn), babelHelpers.defineProperty(_React$createElement, "removeCartByOmni", this.props.removeCartByOmni), _React$createElement)) : "")));
                } else {
                    return null;
                }
            }
        }]);
        return MsisdnVerificationComponentContainerBase;
    }(_react.Component);

    _exports.MsisdnVerificationComponentContainerBase = MsisdnVerificationComponentContainerBase;
    var MsisdnVerificationComponentDescriptionsType = {
        regexpForNumberValidation: _propTypes.PropTypes.string,
        description: _propTypes.PropTypes.string,
        inputFieldDesc: _propTypes.PropTypes.string,
        invalidNumberDesc: _propTypes.PropTypes.string,
        negativeVerificationDesc: _propTypes.PropTypes.string,
        positiveVerificationDesc: _propTypes.PropTypes.string,
        unknownOperatorDesc: _propTypes.PropTypes.string,
        processType: _propTypes.PropTypes.string
    };
    _exports.MsisdnVerificationComponentDescriptionsType = MsisdnVerificationComponentDescriptionsType;
    MsisdnVerificationComponentContainerBase.propTypes = {
        descriptions: _propTypes.PropTypes.shape(MsisdnVerificationComponentDescriptionsType),
        checkMsisdnResult: _propTypes.PropTypes.shape({
            isPositive: _propTypes.PropTypes.bool,
            description: _propTypes.PropTypes.string
        }),
        processType: _propTypes.PropTypes.string,
        isMsisdnChecking: _propTypes.PropTypes.bool,
        msisdnInput: _propTypes.PropTypes.shape({
            msisdn: _propTypes.PropTypes.string,
            valid: _propTypes.PropTypes.bool
        }).isRequired,
        msisdnVerificationNeeded: _propTypes.PropTypes.func,
        checkMsisdnAndGetOffers: _propTypes.PropTypes.func,
        clearCheckMsisdn: _propTypes.PropTypes.func,
        changeMsisdnInput: _propTypes.PropTypes.func
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isPropositionListCountSetMode: (0, _filters.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters.getPropositionListCount)(state),
            processType: (0, _filters.getSelectedProcessTypeValue)(state),
            selectedLoyaltyLengthValue: (0, _filters.getSelectedLoyaltyLengthValue)(state),
            checkMsisdnResult: (0, _filters.getCheckMsisdnResult)(state),
            isMsisdnChecking: (0, _filters.getIsMsisdnChecking)(state),
            msisdnInput: (0, _filters.getMsisdnInput)(state),
            isMsisdnVerificationRequired: (0, _metaData.isMsisdnVerificationRequired)(state),
            isB2B: (0, _filters.getMarketContext)(state) === 'B2B',
            isCustomerSelected: (0, _metaData.isCustomerSelected)(state),
            selectedMobileTransaction: (0, _selectors.getSelectedMobileTransaction)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearCheckMsisdn: function clearCheckMsisdn() {
                return dispatch((0, _filters2.clearCheckMsisdn)());
            },
            checkMsisdnAndGetOffers: function checkMsisdnAndGetOffers(msisdn) {
                return dispatch((0, _filters2.checkMsisdnAndGetOffers)(msisdn));
            },
            msisdnVerificationNeeded: function msisdnVerificationNeeded() {
                return dispatch(_filters2.msisdnVerificationNeeded);
            },
            changeMsisdnInput: function changeMsisdnInput(msisdn, valid) {
                return dispatch((0, _filters2.changeMsisdnInput)(msisdn, valid));
            },
            isMatchingFilters: function isMatchingFilters() {
                return dispatch((0, _filters2.isMatchingFilters)());
            },
            removeCartByOmni: function removeCartByOmni(omni) {
                return dispatch((0, _cart.removeCartByOmniCode)(omni));
            }
        };
    };

    var MsisdnVerificationComponentContainer = /*#__PURE__*/ function(_MsisdnVerificationCo) {
        babelHelpers.inherits(MsisdnVerificationComponentContainer, _MsisdnVerificationCo);

        var _super2 = _createSuper(MsisdnVerificationComponentContainer);

        function MsisdnVerificationComponentContainer() {
            babelHelpers.classCallCheck(this, MsisdnVerificationComponentContainer);
            return _super2.apply(this, arguments);
        }

        return MsisdnVerificationComponentContainer;
    }(MsisdnVerificationComponentContainerBase);

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MsisdnVerificationComponentContainer);

    _exports.default = _default;
});
//# sourceMappingURL=MsisdnVerificationComponentContainer.js.map