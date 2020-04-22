define(["exports", "react", "prop-types", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "../../constants/OfferTypeEnum", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actionTypes", "../../../checkout/actions/data", "./view/ProductTabHeaderView", "./view/ProductListHeaderView", "./view/ProductSwitcherHeaderView", "./view/ProductChangingHeaderView", "eshop/modules/cart/selectors", "eshop/modules/configurator/actions/cart", "../../../magnum2/components/wwt/OraLoyaltyHeader", "eshop/modules/simfree/actions/filter", "../../selectors", "eshop/modules/auth/actions/authorization", "../../../auth/selectors/authorization", "eshop/modules/magnum2/selectors", "eshop/modules/cart/components/entriesList/StayLoveMsisdnHeader", "../../../cart/selectors", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(_exports, _react, _propTypes, _reactRedux, _OnlineUtils, _cart, _OfferTypeEnum, _app, _selectors, _filters, _actionTypes, _data, _ProductTabHeaderView, _ProductListHeaderView, _ProductSwitcherHeaderView, _ProductChangingHeaderView, _selectors2, _cart2, _OraLoyaltyHeader, _filter, _selectors3, _authorization, _authorization2, _selectors4, _StayLoveMsisdnHeader, _selectors5, _OraVasPacketPickerComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _ProductTabHeaderView = babelHelpers.interopRequireDefault(_ProductTabHeaderView);
    _ProductListHeaderView = babelHelpers.interopRequireDefault(_ProductListHeaderView);
    _ProductSwitcherHeaderView = babelHelpers.interopRequireDefault(_ProductSwitcherHeaderView);
    _ProductChangingHeaderView = babelHelpers.interopRequireDefault(_ProductChangingHeaderView);
    _OraLoyaltyHeader = babelHelpers.interopRequireDefault(_OraLoyaltyHeader);
    _StayLoveMsisdnHeader = babelHelpers.interopRequireDefault(_StayLoveMsisdnHeader);
    _OraVasPacketPickerComponent = babelHelpers.interopRequireDefault(_OraVasPacketPickerComponent);

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

    var ProductListHeaderComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductListHeaderComponent, _Component);

        var _super = _createSuper(ProductListHeaderComponent);

        function ProductListHeaderComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListHeaderComponent);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getChangeTerminalLabel", function(cmsConf, selectedOfferType) {
                if (cmsConf && cmsConf[selectedOfferType] && cmsConf[selectedOfferType].cmsDescriptions && cmsConf[selectedOfferType].cmsDescriptions["changeTerminalLabel"]) return cmsConf[selectedOfferType].cmsDescriptions["changeTerminalLabel"];
                else return "Zmień terminal";
            });
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getBundleGroupsProps", function(_ref) {
                var _ref$hasLove = _ref.hasLove,
                    hasLove = _ref$hasLove === void 0 ? false : _ref$hasLove,
                    _ref$hasODF = _ref.hasODF,
                    hasODF = _ref$hasODF === void 0 ? false : _ref$hasODF,
                    _ref$softBundleGroup = _ref.softBundleGroup,
                    softBundleGroup = _ref$softBundleGroup === void 0 ? null : _ref$softBundleGroup;
                return {
                    hasLove: hasLove,
                    hasODF: hasODF,
                    softBundleGroup: softBundleGroup
                };
            });
            return _this;
        }

        babelHelpers.createClass(ProductListHeaderComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                var cmsConf = this.props.cmsConf;

                if (!this.props.isProductDetailsPage && !this.props.isProductListPage && !this.props.isAccessoryListPage) {
                    this.props.dontUseDefaultOffer();
                }

                this.props.registerCmsConfiguration(cmsConf, this.props.validOfferTypes);
                this.props.changeAddTerminalToOfferBundleNo(null);
                this.selectOfferType = this.selectOfferType.bind(this);
                this.props.fetchMiniCart();
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setSalesChannel(this.props.channels.sales);

                if (this.props.channels.sales !== "WWW") {
                    this.props.subscribeCustomerSelected();
                }

                if (this.props.offerType && this.props.useDefaultOfferType) {
                    this.selectOfferType(this.props.offerType);
                }
            }
        }, {
            key: "selectOfferType",
            value: function selectOfferType(value) {
                if (document.getElementById("expander-module-one-time")) {
                    OPL.UI.stopModules(document.getElementById("expander-module-one-time"));
                    OPL.UI.initModules(document.getElementById("expander-module-one-time"));
                }

                if (document.getElementById("expander-module-monthly")) {
                    OPL.UI.stopModules(document.getElementById("expander-module-monthly"));
                    OPL.UI.initModules(document.getElementById("expander-module-monthly"));
                } //for defaults to work


                _OnlineUtils.default.removeFromSessionStorage("selectedPropositionId");

                _OnlineUtils.default.removeFromSessionStorage("selectedPropositionPosition");

                _OnlineUtils.default.removeFromSessionStorage("processType");

                _OnlineUtils.default.changeOrAddUrlParameter("processType", null);

                _OnlineUtils.default.changeOrAddUrlParameter("serviceplan", null);

                this.props.setOfferType(value);
                this.props.setAllVisibility(false);
                this.props.changeCurrentPage(1);
            }
        }, {
            key: "filterVisible",
            value: function filterVisible(options) {
                var _this$props = this.props,
                    hasVoiceCartEntry = _this$props.hasVoiceCartEntry,
                    stayLoveRetentionMSISDN = _this$props.stayLoveRetentionMSISDN,
                    hasLove = _this$props.hasLove,
                    cmsConf = _this$props.cmsConf;

                if (!!cmsConf["VOICE_LDF"] && (hasLove && hasVoiceCartEntry || stayLoveRetentionMSISDN)) {
                    cmsConf["VOICE_LDF"].visible = true;
                }

                return options.filter(function(option) {
                    return cmsConf[option.value] && cmsConf[option.value].visible;
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var wwt = this.props.wwt;
                var headerView;
                console.log("ProductListHeaderComponent render", this.props); //For LP while setting sim count

                if ((this.props.isPropositionListCountSetMode || this.props.propositionListCount === 0) && !(this.props.isProductListPage || this.props.isProductDetailsPage)) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: "offerTypeSelectionComponent"
                    });
                } //For duets - no worlds change during sim count loop


                if (!this.props.isB2B && this.props.propositionListCount > 0 && this.props.isPropositionListCountLoop && (this.props.isProductListPage || this.props.isProductDetailsPage)) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: "offerTypeSelectionComponent"
                    }, /*#__PURE__*/ _react.default.createElement(_StayLoveMsisdnHeader.default, null));
                }

                if (this.props.addTerminalToOfferBundleNo) {
                    return /*#__PURE__*/ _react.default.createElement(_ProductChangingHeaderView.default, {
                        redirectToCart: this.props.redirectToCart,
                        descriptions: this.props.descriptions,
                        changeTerminalLbl: this.getChangeTerminalLabel(this.props.cmsConf, this.props.selectedOfferType),
                        channels: this.props.channels
                    });
                }

                var options = this.props.selectedOfferType !== _OfferTypeEnum.default.CONVERGENT ? this.props.selectValues.filter(function(o) {
                    return _OfferTypeEnum.default.CONVERGENT !== o.value;
                }) : this.props.selectValues.filter(function(t) {
                    return _this2.props.magnumType === t.value;
                });

                if (this.props.selectionType === "HIDDEN") {
                    headerView = null;
                }

                options = this.filterVisible(options);

                if (this.props.selectionType === "DROPDOWN") {
                    headerView = /*#__PURE__*/ _react.default.createElement(_ProductListHeaderView.default, {
                        headerText: this.props.headerText || "telefony",
                        onChange: this.selectOfferType,
                        options: options,
                        descriptions: this.props.descriptions,
                        channels: this.props.channels
                    });
                }

                if (this.props.selectionType === "TAB") {
                    headerView = /*#__PURE__*/ _react.default.createElement(_ProductTabHeaderView.default, babelHelpers.extends({
                        headerText: this.props.headerText || "telefony",
                        onChange: this.selectOfferType,
                        options: options,
                        descriptions: this.props.descriptions,
                        tabHeaderText: this.props.tabHeaderText,
                        channels: this.props.channels,
                        selectedOfferType: this.props.selectedOfferType,
                        isDuet: this.props.isDuet
                    }, this.getBundleGroupsProps(this.props)));
                }

                if (this.props.selectionType === "SWITCHER") {
                    headerView = /*#__PURE__*/ _react.default.createElement(_ProductSwitcherHeaderView.default, {
                        headerText: this.props.headerText,
                        onChange: this.selectOfferType,
                        options: options,
                        descriptions: this.props.descriptions,
                        tabHeaderText: this.props.tabHeaderText,
                        channels: this.props.channels,
                        selectedOfferType: this.props.selectedOfferType
                    });
                }

                if (this.props.selectedOfferType === _OfferTypeEnum.default.CONVERGENT) {
                    var descriptions = {};
                    var isAddressComplete = !!wwt.zip;
                    return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-box-shadow"
                    }, headerView), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-page-row" + (isAddressComplete ? "" : " u-hide")
                    }, /*#__PURE__*/ _react.default.createElement(_OraLoyaltyHeader.default, {
                        place: wwt.cityName,
                        street: wwt.streetName,
                        streetNumber: wwt.streetNumber,
                        apartmentNumber: wwt.apartmentNumber,
                        onClickChange: null,
                        descriptions: descriptions
                    })));
                }

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "offerTypeSelectionComponent"
                }, headerView), /*#__PURE__*/ _react.default.createElement(_StayLoveMsisdnHeader.default, null), /*#__PURE__*/ _react.default.createElement(_OraVasPacketPickerComponent.default, null));
            }
        }]);
        return ProductListHeaderComponent;
    }(_react.Component);

    ProductListHeaderComponent.propTypes = {
        cmsConf: _propTypes.default.object,
        selectionType: _propTypes.default.string,
        descriptions: _propTypes.default.object,
        headerText: _propTypes.default.string,
        tabHeaderText: _propTypes.default.string,
        selectValues: _propTypes.default.any,
        selectedOfferType: _propTypes.default.string,
        wwt: _propTypes.default.object,
        registerCmsConfiguration: _propTypes.default.func,
        setOfferType: _propTypes.default.func,
        subscribeCustomerSelected: _propTypes.default.func,
        changeAddTerminalToOfferBundleNo: _propTypes.default.func,
        redirectToCart: _propTypes.default.func,
        hasLove: _propTypes.default.bool,
        hasODF: _propTypes.default.bool,
        softBundleGroup: _propTypes.default.string,
        channels: _propTypes.default.object,
        hasVoiceCartEntry: _propTypes.default.bool,
        stayLoveRetentionMSISDN: _propTypes.default.string
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            registerCmsConfiguration: function registerCmsConfiguration(cmsConf, validOfferTypes) {
                return dispatch((0, _app.setOfferTypeCmsConf)(cmsConf, validOfferTypes));
            },
            setOfferType: function setOfferType(offerType) {
                return dispatch((0, _app.setOfferType)(offerType));
            },
            subscribeCustomerSelected: function subscribeCustomerSelected() {
                return dispatch((0, _data.subscribeCustomerSelected)());
            },
            changeAddTerminalToOfferBundleNo: function changeAddTerminalToOfferBundleNo() {
                return dispatch((0, _cart.changeAddTerminalToOfferBundleNo)(null));
            },
            redirectToCart: function redirectToCart() {
                return dispatch((0, _cart2.redirectToCart)());
            },
            fetchMiniCart: function fetchMiniCart() {
                return dispatch((0, _cart.fetchMiniCart)());
            },
            changeCurrentPage: function changeCurrentPage(page) {
                return dispatch((0, _filter.changeCurrentPageProps)(page));
            },
            setAllVisibility: function setAllVisibility(value) {
                return dispatch((0, _filter.setAllVisibilityProduct)(value));
            },
            dontUseDefaultOffer: function dontUseDefaultOffer() {
                return dispatch({
                    type: _actionTypes.USE_DEFAULT_OFFER,
                    use: false
                });
            },
            setSalesChannel: function setSalesChannel(channel) {
                return dispatch((0, _authorization.setSalesChannel)(channel));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            useDefaultOfferType: (0, _filters.getUseDefaultOfferType)(state),
            isPropositionListCountSetMode: (0, _filters.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters.getPropositionListCount)(state),
            headerText: (0, _selectors.getProductListHeader)(state),
            selectValues: (0, _selectors.getOfferTypesForSelect)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            wwt: state.magnum.wwt,
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            products: (0, _selectors3.getProductListWrapper)(state),
            productList: (0, _selectors3.getProductListData)(state),
            isProductListPage: (0, _selectors.isProductListPage)(state),
            isAccessoryListPage: (0, _selectors.isAccessoryListPage)(state),
            isProductDetailsPage: (0, _selectors.isProductDetailsPage)(state),
            isPropositionListCountLoop: (0, _filters.getPropositionListOfferType)(state) && (0, _filters.getPropositionListOfferType)(state) == (0, _filters.getSelectedOfferType)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B",
            hasLove: (0, _authorization2.hasLove)(state),
            hasODF: (0, _authorization2.hasODF)(state),
            softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(state),
            magnumType: (0, _selectors4.getMagnumType)(state),
            stayLoveRetentionMSISDN: (0, _authorization2.getStayLoveRetentionMSISDN)(state),
            hasVoiceCartEntry: (0, _selectors5.hasVoiceCartEntry)(state),
            isDuet: (0, _selectors3.isDuet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListHeaderComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductListHeaderComponent.js.map