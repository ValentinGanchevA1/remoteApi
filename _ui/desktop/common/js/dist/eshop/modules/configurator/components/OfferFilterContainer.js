define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/components/OfferFilterComponents", "eshop/modules/configurator/components/OfferFilterComponentsSwitcherView", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/utils/OnlineUtils", "../../checkout/actions/data", "../../simfree/selectors", "../selectors/offers", "prop-types", "../../auth/selectors/authorization", "../../core/constants/OfferTypeEnum", "../selectors/filters"], function(_exports, _react, _reactRedux, _filters, _OfferFilterComponents, _OfferFilterComponentsSwitcherView, _filters2, _app, _OnlineUtils, _data, _selectors, _offers, _propTypes, _authorization, _OfferTypeEnum, _filters3) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OfferFilterComponents = babelHelpers.interopRequireDefault(_OfferFilterComponents);
    _OfferFilterComponentsSwitcherView = babelHelpers.interopRequireDefault(_OfferFilterComponentsSwitcherView);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);

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

    var OfferFilterContainer = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OfferFilterContainer, _Component);

        var _super = _createSuper(OfferFilterContainer);

        function OfferFilterContainer(props) {
            babelHelpers.classCallCheck(this, OfferFilterContainer);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OfferFilterContainer, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.selectProcessType = this.selectProcessType.bind(this);
                this.selectLoyaltyLength = this.selectLoyaltyLength.bind(this);
                this.selectSwitchButton = this.selectSwitchButton.bind(this);

                if (this.props.offerType) {
                    this.props.setOfferType(this.props.offerType);
                }
            }
        }, {
            key: "offerType",
            value: function offerType() {
                return this.props.offerType || this.props.selectedOfferType;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                // this.props.fetchOfferFilters(); //ToDo seems unnecessary, duplicated call
                this.props.subscribeCustomerSelected();
            }
        }, {
            key: "selectProcessType",
            value: function selectProcessType(e) {
                this.props.selectProcessType(e.value);
            }
        }, {
            key: "selectLoyaltyLength",
            value: function selectLoyaltyLength(e) {
                this.props.selectLoyaltyLength(parseInt(e.value));
            }
        }, {
            key: "selectSwitchButton",
            value: function selectSwitchButton(url) {
                url && _OnlineUtils.default.redirectToAnotherPage(url);
            }
        }, {
            key: "convertSwitchConf",
            value: function convertSwitchConf(conf) {
                return conf && conf.map(function(c) {
                    c.selected = c.active;
                    return c;
                });
            }
        }, {
            key: "getClientContextConf",
            value: function getClientContextConf() {
                return getClientContextCheckboxConfig(this.props.descriptions ? this.props.descriptions : {
                    clientContextLabel: "label",
                    clientContextTooltip: "tooltip"
                }, this.props.channels.sales);
            }
        }, {
            key: "disabledProcesses",
            value: function disabledProcesses() {
                if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === _OfferTypeEnum.default.VOICE_LDF) {
                    console.log("OPTIONS TO DISABLE ", this.props.processTypeData);
                    var optionsToDisable = [];
                    this.props.processTypeData.forEach(function(option) {
                        return option.value !== "RETENTION" && optionsToDisable.push(option);
                    });
                    console.log("OPTIONS TO DISABLE ", optionsToDisable);
                    return optionsToDisable;
                }

                return null;
            }
        }, {
            key: "render",
            value: function render() {
                if (this.props.isPropositionListCountSetMode || this.props.propositionListCount === 0) {
                    return null;
                }

                if (this.props.switchType === "SWITCH") {
                    return /*#__PURE__*/ _react.default.createElement(_OfferFilterComponentsSwitcherView.default, {
                        offerType: this.offerType(),
                        processTypeData: this.props.processTypeData,
                        selectedProcessValue: this.props.selectedProcessValue,
                        selectProcessCallback: this.selectProcessType.bind(this),
                        disabledProcesses: this.disabledProcesses(),
                        loyaltyLengthData: this.props.loyaltyLengthData,
                        selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                        selectLoyaltyLengthCallback: this.selectLoyaltyLength.bind(this),
                        clientContextCheckboxConfig: this.getClientContextConf(),
                        softBundleGroup: this.props.softBundleGroup,
                        contractRole: this.props.contractRole,
                        hasLove: this.props.hasLove,
                        hasODF: this.props.hasODF,
                        showSwitch: this.props.showSwitch,
                        onClickSwitch: this.selectSwitchButton,
                        switchConf: this.convertSwitchConf(this.props.switchConf),
                        descriptions: this.props.descriptions,
                        channels: this.props.channels,
                        switchType: "SWITCH"
                    });
                }

                return /*#__PURE__*/ _react.default.createElement(_OfferFilterComponents.default, {
                    processTypeData: this.props.processTypeData,
                    selectedProcessValue: this.props.selectedProcessValue,
                    selectProcessCallback: this.selectProcessType.bind(this),
                    loyaltyLengthData: this.props.loyaltyLengthData,
                    selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                    selectLoyaltyLengthCallback: this.selectLoyaltyLength.bind(this),
                    clientContextCheckboxConfig: this.getClientContextConf(),
                    showSwitch: this.props.showSwitch,
                    onClickSwitch: this.selectSwitchButton,
                    switchConf: this.convertSwitchConf(this.props.switchConf),
                    headerText: this.props.descriptions && this.props.descriptions.headerDescription || "",
                    channels: this.props.channels,
                    switchType: "TAB"
                });
            }
        }]);
        return OfferFilterContainer;
    }(_react.Component);

    var getClientContextCheckboxConfig = function getClientContextCheckboxConfig() {
        var desc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var channel = arguments.length > 1 ? arguments[1] : undefined;
        return {
            label: desc.clientContextLabel,
            tooltip: desc.clientContextTooltip,
            channel: channel
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isPropositionListCountSetMode: (0, _filters2.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters2.getPropositionListCount)(state),
            selectedProcessValue: (0, _filters2.getSelectedProcessTypeValue)(state),
            processTypeData: (0, _filters2.getProcessTypeFiltersForSelect)(state),
            selectedLoyaltyLengthValue: (0, _filters2.getSelectedLoyaltyLengthValue)(state),
            loyaltyLengthData: (0, _filters3.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(state),
            loyaltyLengthDataUnsorted: (0, _filters3.getLoyaltyLengthFiltersForSelect)(state),
            selectedOfferType: (0, _filters2.getSelectedOfferType)(state),
            stayLoveRetentionMSISDN: (0, _authorization.getStayLoveRetentionMSISDN)(state),
            softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(state),
            contractRole: (0, _offers.getContractRole)(state)[0],
            hasLove: (0, _authorization.hasLove)(state),
            hasODF: (0, _authorization.hasODF)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectProcessType: function selectProcessType(value) {
                return dispatch((0, _filters.selectProcessType)(value));
            },
            selectLoyaltyLength: function selectLoyaltyLength(value) {
                return dispatch((0, _filters.selectLoyaltyLength)(value));
            },
            fetchOfferFilters: function fetchOfferFilters() {
                return dispatch((0, _filters.fetchOfferFilters)());
            },
            setOfferType: function setOfferType(offerType) {
                return dispatch((0, _app.setOfferType)(offerType));
            },
            subscribeCustomerSelected: function subscribeCustomerSelected() {
                return dispatch((0, _data.subscribeCustomerSelected)());
            }
        };
    };

    OfferFilterContainer.propTypes = {
        switchType: _propTypes.default.string,
        softBundleGroup: _propTypes.default.string,
        contractRole: _propTypes.default.string,
        hasLove: _propTypes.default.bool,
        hasODF: _propTypes.default.bool,
        descriptions: _propTypes.default.objectOf(_propTypes.default.string),
        processTypeData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        })),
        channels: _propTypes.default.shape({
            sales: _propTypes.default.string
        }),
        loyaltyLengthData: _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
            description: _propTypes.default.string
        })),
        offerType: _propTypes.default.string,
        selectedOfferType: _propTypes.default.string,
        subscribeCustomerSelected: _propTypes.default.func,
        selectProcessType: _propTypes.default.func,
        selectLoyaltyLength: _propTypes.default.func,
        setOfferType: _propTypes.default.func,
        stayLoveRetentionMSISDN: _propTypes.default.string,
        switchConf: _propTypes.default.object,
        showSwitch: _propTypes.default.bool,
        selectedLoyaltyLengthValue: _propTypes.default.number,
        selectedProcessValue: _propTypes.default.string,
        isPropositionListCountSetMode: _propTypes.default.bool,
        propositionListCount: _propTypes.default.number
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OfferFilterContainer);

    _exports.default = _default;
});
//# sourceMappingURL=OfferFilterContainer.js.map