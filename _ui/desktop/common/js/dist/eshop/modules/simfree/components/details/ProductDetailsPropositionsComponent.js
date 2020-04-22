define(["exports", "react", "prop-types", "react-redux", "../../../../modules/configurator/actions/offers", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/selectors/filters", "eshop/utils/OnlineUtils", "eshop/modules/simfree/selectors", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/modules/simfree/components/PropositionForDeviceTabletDesktopView", "eshop/modules/core/components/ui/OraSwitcher", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../../core/enum/MarketSegment", "../../../core/components/ui/OraHtmlText"], function(_exports, _react, _propTypes, _reactRedux, _offers, _OraCommonComponents, _offers2, _metaData, _filters, _OnlineUtils, _selectors, _PropositionForDeviceMobileView, _PropositionForDeviceTabletDesktopView, _OraSwitcher, _OfferTypeEnum, _selectors2, _MarketSegment, _OraHtmlText) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _PropositionForDeviceMobileView = babelHelpers.interopRequireDefault(_PropositionForDeviceMobileView);
    _PropositionForDeviceTabletDesktopView = babelHelpers.interopRequireDefault(_PropositionForDeviceTabletDesktopView);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _OfferTypeEnum = babelHelpers.interopRequireDefault(_OfferTypeEnum);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);
    _OraHtmlText = babelHelpers.interopRequireDefault(_OraHtmlText);

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

    var ProductDetailsPropositionsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductDetailsPropositionsComponent, _Component);

        var _super = _createSuper(ProductDetailsPropositionsComponent);

        function ProductDetailsPropositionsComponent(props) {
            babelHelpers.classCallCheck(this, ProductDetailsPropositionsComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductDetailsPropositionsComponent, [{
            key: "render",
            value: function render() {
                if ([_OfferTypeEnum.default.VOICE, _OfferTypeEnum.default.DATA, _OfferTypeEnum.default.VOICE_LDF, _OfferTypeEnum.default.DATA_LDF].indexOf(this.props.selectedOfferType) === -1) {
                    return null;
                }

                var props = Object.assign({}, this.props);
                var propositions;
                console.log("ProductDetailsPropositionsComponent propositionsInContext", this.props.propositionsInContext);

                if (this.props.propositionsInContext) {
                    propositions = this.props.propositionsInContext.offers;
                }

                console.log("ProductDetailsPropositionsComponent", {
                    propositions: propositions
                });
                props.propositions = propositions;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  g-gray1-bg u-large-no-bg u-spacing-l-xl u-medium-padding-left-l u-medium-padding-right-l u-no-padding-top u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg u-medium-no-bg g-small-no-bg u-padding-all-l u-small-padding-left u-small-padding-right u-medium-no-padding-left u-medium-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement(PropositionList, babelHelpers.extends({
                    key: this.props.selectedProcess,
                    selectedOfferId: this.props.selectedOfferId
                }, props, {
                    id: "propositionLoader"
                })))));
            }
        }]);
        return ProductDetailsPropositionsComponent;
    }(_react.Component);

    ProductDetailsPropositionsComponent.propTypes = {
        activeFilter: _propTypes.default.object,
        propositions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
        detailsLabel: _propTypes.default.string.isRequired
    };

    var getCarouselContainerId = function getCarouselContainerId() {
        return "carousel-container";
    };

    var getCarouselContainer = function getCarouselContainer() {
        return document.getElementById(getCarouselContainerId());
    };

    var minHeightBase = 300;

    var PropositionList = /*#__PURE__*/ function(_Component2) {
        babelHelpers.inherits(PropositionList, _Component2);

        var _super2 = _createSuper(PropositionList);

        function PropositionList(props) {
            var _this;

            babelHelpers.classCallCheck(this, PropositionList);
            _this = _super2.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "getInfoDescription", function(key) {
                var defaultDesc = {
                    'discount.text': 'z rabatami'
                };
                return _this.props.descriptions[key] ? _this.props.descriptions[key] : defaultDesc[key];
            });
            _this.state = {
                minHeight: 300
            };
            return _this;
        }

        babelHelpers.createClass(PropositionList, [{
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var discountDesc = this.getInfoDescription("discount.text");
                var _this$props = this.props,
                    propositions = _this$props.propositions,
                    rest = babelHelpers.objectWithoutProperties(_this$props, ["propositions"]);
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.offersLoading,
                    key: "loader",
                    id: "offerCarouselContainer-loader",
                    parentId: "offer-filter-loader",
                    useHeightFixing: false,
                    childrenHeight: this.state.minHeight,
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "offerCarouselContainer",
                    style: {
                        minHeight: this.props.offersLoading ? this.state.minHeight : minHeightBase
                    },
                    className: "g-gray1-bg u-position-relative",
                    ref: function ref(_ref) {
                        return _this2.ref = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-switcher-list"
                }, /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-switcher-list__item u-small-hide  "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, !this.props.addTerminalToOfferBundleNo && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-1 "
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4  u-display_table-cell u-small-block u-vertical-bottom"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Abonament")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col " + (this.props.addTerminalToOfferBundleNo ? " l-col-5" : "l-col-4") + "  u-display_table-cell u-small-block u-vertical-bottom u-text-left"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.isB2B ? "Korzyści" : "Internet")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-right"
                }, /*#__PURE__*/ _react.default.createElement("p", null, "Op\u0142ata abonamentowa ", !this.props.isB2B && this.props.descriptions && /*#__PURE__*/ _react.default.createElement(_OraHtmlText.default, null, discountDesc))))), !this.props.addTerminalToOfferBundleNo ? propositions && propositions.map(function(proposition, idx) {
                    return /*#__PURE__*/ _react.default.createElement(PropositionRow, babelHelpers.extends({
                        key: proposition.id + "_" + idx,
                        proposition: proposition
                    }, rest));
                }) : propositions && propositions.filter(function(proposition) {
                    return proposition.id === _this2.props.selectedOfferId;
                }).map(function(proposition, idx) {
                    return /*#__PURE__*/ _react.default.createElement(PropositionRow, babelHelpers.extends({
                        key: proposition.id + "_" + idx,
                        proposition: proposition
                    }, rest));
                }))));
            }
        }]);
        return PropositionList;
    }(_react.Component);

    PropositionList.propTypes = {
        activeFilter: _propTypes.default.object,
        propositions: _propTypes.default.arrayOf(_propTypes.default.object),
        detailsLabel: _propTypes.default.string.isRequired
    };

    var PropositionRow = /*#__PURE__*/ function(_Component3) {
        babelHelpers.inherits(PropositionRow, _Component3);

        var _super3 = _createSuper(PropositionRow);

        function PropositionRow() {
            babelHelpers.classCallCheck(this, PropositionRow);
            return _super3.apply(this, arguments);
        }

        babelHelpers.createClass(PropositionRow, [{
            key: "monthlyPaymentsWithBonuses",
            value: function monthlyPaymentsWithBonuses() {
                if (_OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole) && _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).totalPayments) return _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).totalPayments.monthlyPayments;
                return {};
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var proposition = this.props.proposition;

                var selectOfferNoPhoneAction = function selectOfferNoPhoneAction(e) {
                    var li = $(e.target).closest(".li");
                    var position = $(li).index();

                    _this3.props.selectOfferNoPhone(proposition.id, position);
                };

                var isSelected = proposition.id === this.props.selectedOfferId && !this.props.addTerminalToOfferBundleNo;
                return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
                    key: proposition.id + "_switcher",
                    onChangeHandler: selectOfferNoPhoneAction,
                    isSelected: isSelected,
                    className: " u-margin-l u-no-padding-r  u-border",
                    switcherClassName: "  opl-switcher-list__item u-cursor-pointer u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement(_PropositionForDeviceMobileView.default, babelHelpers.extends({
                    offer: proposition
                }, this.props, {
                    isSelected: isSelected,
                    index: this.props.index
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide"
                }, /*#__PURE__*/ _react.default.createElement(_PropositionForDeviceTabletDesktopView.default, babelHelpers.extends({
                    offer: proposition
                }, this.props, {
                    isSelected: isSelected,
                    index: this.props.index
                }))), isSelected && _OnlineUtils.default.updateOgTag('product:retailer_part_no', proposition.id + '^' + this.props.selectedVariant));
            }
        }]);
        return PropositionRow;
    }(_react.Component);

    PropositionRow.propTypes = {
        proposition: _propTypes.default.object.isRequired,
        detailsLabel: _propTypes.default.string.isRequired
    };

    var StartPrice = function StartPrice(props) {
        var proposition = props.proposition;
        if (!proposition.deviceData || !proposition.deviceData.inOffer) return null;

        var oneTimePayment = _OnlineUtils.default.formatPrice(proposition.deviceData.inOffer.price.base.oneTimePayment);

        return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-medium-hide u-large-hide u-inline-block u-small-left"
        }, "Op\u0142ata na start"), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-acc-hide"
        }, "Op\u0142ata na start"), /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold u-inline-block u-small-right"
        }, oneTimePayment, " \xA0z\u0142"));
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            selectedOfferId: (0, _offers2.getSelectedOfferId)(state),
            selectedRateplanBaseProductId: (0, _offers2.getSelectedBaseRatePlanId)(state),
            propositionsInContext: (0, _offers2.getOffersDataInContext)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            clientContext: (0, _filters.getClientContext)(state),
            loyaltyLength: (0, _filters.getSelectedLoyaltyLengthValue)(state),
            selectedProcess: (0, _filters.getSelectedProcessTypeValue)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            selectedVariant: (0, _selectors.getSelectedVariant)(state),
            contractRole: (0, _offers2.getContractRole)(state)[0],
            contractRoleInProgress: (0, _offers2.getContractRoleInProgress)(state),
            entryUnderChange: (0, _selectors2.getEntryUnderChange)(state),
            softBundleGroup: (0, _selectors.getSelectedSoftBundleGroup)(state),
            isB2B: _MarketSegment.default.isB2B((0, _filters.getMarketContext)(state)),
            selectedVases: (0, _offers2.getSelectedVases)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            selectOfferNoPhone: function selectOfferNoPhone(propositionId, position, deviceId) {
                return dispatch((0, _offers.preSelectOffer)(propositionId, position, deviceId));
            },
            pickDevice: function pickDevice(propositionId, url) {
                return dispatch((0, _offers.pickDevice)(propositionId, url));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductDetailsPropositionsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductDetailsPropositionsComponent.js.map