define(["exports", "react", "react-redux", "eshop/modules/auth/selectors/authorization", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/metaData", "eshop/components/OraCommonComponents", "./MobileCarouselB2B", "eshop/modules/cart/selectors", "../../../../auth/actions/authorization", "../../../selectors/filters", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(_exports, _react, _reactRedux, _authorization, _offers, _filters, _filters2, _offers2, _metaData, _OraCommonComponents, _MobileCarouselB2B, _selectors, _authorization2, _filters3, _OnlineUtils, _OraVasPacketPickerComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MobileCarouselB2B = babelHelpers.interopRequireDefault(_MobileCarouselB2B);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
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

    var minHeightBase = 300;

    var OraPropositionCarouselB2B = /*#__PURE__*/ function(_React$PureComponent) {
        babelHelpers.inherits(OraPropositionCarouselB2B, _React$PureComponent);

        var _super = _createSuper(OraPropositionCarouselB2B);

        function OraPropositionCarouselB2B(props) {
            babelHelpers.classCallCheck(this, OraPropositionCarouselB2B);
            return _super.call(this, props);
        } //height - to prewent carousel from "blinking" while reloading


        babelHelpers.createClass(OraPropositionCarouselB2B, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.setSalesChannel(this.props.channels.sales);
                var height = this.getMyHeight();
                if (height < minHeightBase) height = minHeightBase;
                this.setState({
                    minHeight: height
                });
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var height = this.getMyHeight();

                if (this.props.isCarouselReady && height !== this.state.minHeight) {
                    if (height < minHeightBase) height = minHeightBase;

                    if (this.state.minHeight !== height) {
                        this.setState({
                            minHeight: height
                        });
                    }
                }
            }
        }, {
            key: "getMyHeight",
            value: function getMyHeight() {
                var elem = document.getElementById("offerB2BcarouselContainer-loader");
                if (!elem) return 0;
                var height = $(elem).outerHeight();
                if (height < minHeightBase) height = minHeightBase;
                console.log("myHeight=", height, this.state.minHeight);
                return height;
            }
        }, {
            key: "isLoyaltyLengthSelected",
            value: function isLoyaltyLengthSelected() {
                return this.props.selectedLoyaltyLengthValue || this.props.selectedLoyaltyLengthValue === 0;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                console.log("OraPropositionCarouselB2B render", this.props);

                if (this.props.isPropositionListCountSetMode === true || !_OnlineUtils.default.isAssignment(this.props.processType) && !this.isLoyaltyLengthSelected() || this.props.propositionListCount === 0) {
                    return null;
                }

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.offersLoading || !this.props.isCarouselReady,
                    key: "loader",
                    id: "offerB2BcarouselContainer-loader",
                    parentId: "offerb2b-filter-loader",
                    useHeightFixing: false,
                    childrenHeight: this.state.minHeight,
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "offerB2BcarouselContainer",
                    style: {
                        minHeight: this.props.offersLoading ? this.state.minHeight : minHeightBase
                    },
                    className: "g-gray1-bg u-position-relative",
                    ref: function ref(_ref) {
                        return _this.ref = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement(_MobileCarouselB2B.default, this.props))));
            }
        }]);
        return OraPropositionCarouselB2B;
    }(_react.default.PureComponent);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isPropositionListCountSetMode: (0, _filters.getPropositionListCountSetMode)(state),
            propositionListCount: (0, _filters.getPropositionListCount)(state),
            data: {
                processType: (0, _filters.getProcessTypeFiltersForSelect)(state),
                loyaltyLength: (0, _filters.getLoyaltyLengthFiltersForSelect)(state)
            },
            offers: function(state) {
                var offersInContext = (0, _offers.getOffersDataInContext)(state);
                return offersInContext && offersInContext.offers;
            }(state),
            selectedOfferId: (0, _offers.getSelectedOfferId)(state),
            selectedBaseRatePlanId: (0, _offers.getSelectedBaseRatePlanId)(state),
            selectedLoyaltyLengthValue: (0, _filters.getSelectedLoyaltyLengthValue)(state),
            verifiedMsisdn: (0, _filters.getVerifiedMsisdnB2B)(state),
            verifyMsisdnLoading: (0, _metaData.getVerifyMsisdnLoading)(state),
            offersLoading: (0, _metaData.getOffersLoading)(state),
            isCarouselReady: (0, _metaData.getCarouselReady)(state),
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            contractRole: (0, _offers.getContractRole)(state)[0],
            getContractRoleInProgress: (0, _offers.getContractRoleInProgress)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B",
            showNet: (0, _selectors.getPriceIsNet)(state),
            isLogged: (0, _authorization.isLogged)(state),
            addTerminalButtonEnabled: !!(0, _offers.getSelectedBaseRatePlanId)(state),
            processType: (0, _filters3.getSelectedProcessTypeValue)(state),
            disableAddToCart: (0, _filters.getDisableAddToCart)(state),
            marketContextPrefixUrl: (0, _metaData.getMarketContextPrefixUrl)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            carouselReady: function carouselReady() {
                return dispatch((0, _offers2.carouselReady)());
            },
            carouselPreparing: function carouselPreparing() {
                return dispatch((0, _offers2.carouselPreparing)());
            },
            selectOffer: function selectOffer(propositionId) {
                return dispatch((0, _offers2.preSelectOffer)(propositionId, 1, null));
            },
            verifyMsisdn: function verifyMsisdn(msisdn, index) {
                return dispatch((0, _filters2.checkMsisdnAndGetOffersB2B)(msisdn, index));
            },
            clearCheckMsisdn: function clearCheckMsisdn(index) {
                return dispatch((0, _filters2.clearCheckMsisdnB2B)(index));
            },
            setSalesChannel: function setSalesChannel(channel) {
                return dispatch((0, _authorization2.setSalesChannel)(channel));
            },
            selectOfferNoPhone: function selectOfferNoPhone(propositionId) {
                return dispatch((0, _offers2.selectOffer)(propositionId));
            },
            pickDevice: function pickDevice(propositionId, url) {
                return dispatch((0, _offers2.pickDevice)(propositionId, url));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraPropositionCarouselB2B);

    _exports.default = _default;
});
//# sourceMappingURL=OraPropositionCarouselB2B.js.map