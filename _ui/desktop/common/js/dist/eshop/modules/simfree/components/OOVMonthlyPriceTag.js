define(["exports", "react", "react-redux", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers"], function(_exports, _react, _reactRedux, _ProductOfferPriceTooltipComponent, _OnlineUtils, _selectors, _OraCommonComponents, _offers) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductOfferPriceTooltipComponent = babelHelpers.interopRequireDefault(_ProductOfferPriceTooltipComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var OOVMonthlyPriceTagCount = 0;

    var OOVMonthlyPriceTag = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OOVMonthlyPriceTag, _Component);

        var _super = _createSuper(OOVMonthlyPriceTag);

        function OOVMonthlyPriceTag(props) {
            var _this;

            babelHelpers.classCallCheck(this, OOVMonthlyPriceTag);
            _this = _super.call(this, props);
            _this.state = {
                countId: OOVMonthlyPriceTagCount++
            };
            return _this;
        }

        babelHelpers.createClass(OOVMonthlyPriceTag, [{
            key: "getPrice",
            value: function getPrice(prices) {
                return this.props.showNet ? prices.priceNet || prices.originalNetPrice : prices.priceGross || prices.originalGrossPrice;
            }
        }, {
            key: "render",
            value: function render() {
                var baseSummaryPrice = this.props.baseSummaryPrice;
                var convSummaryPrice = this.props.convSummaryPrice;
                var selected = this.props.selected;
                var monthlyPayments = this.props.monthlyPayments;
                var monthlyPaymentsWithBonuses = this.props.monthlyPaymentsWithBonuses;

                if (!this.props.isMagnum && monthlyPayments && monthlyPayments.length > 0) {
                    baseSummaryPrice = this.getPrice(monthlyPayments[monthlyPayments.length - 1]);
                }

                if (!this.props.isMagnum && monthlyPaymentsWithBonuses.length > 0) {
                    convSummaryPrice = this.getPrice(monthlyPaymentsWithBonuses[monthlyPaymentsWithBonuses.length - 1]);
                }

                var alignClass = this.props.alignClass || " u-right u-small-right ";
                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.clientContext && convSummaryPrice != baseSummaryPrice ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: alignClass
                }, selected && _OnlineUtils.default.updateOgTag('product:original_price:offer_price', _OnlineUtils.default.formatPrice(convSummaryPrice)), selected && _OnlineUtils.default.updateOgTag('product:offer_loyalyty', monthlyPaymentsWithBonuses && monthlyPaymentsWithBonuses[monthlyPaymentsWithBonuses.length - 1] && monthlyPaymentsWithBonuses[monthlyPaymentsWithBonuses.length - 1].monthTo), /*#__PURE__*/ _react.default.createElement(_ProductOfferPriceTooltipComponent.default, {
                    key: "client_" + this.props.clientContext + "_" + this.props.showNet + "_" + this.props.baseId,
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    monthlyPayments: monthlyPayments,
                    monthlyPaymentsWithBonuses: monthlyPaymentsWithBonuses,
                    clientContext: this.props.clientContext,
                    loyaltyLength: this.props.loyaltyLength,
                    baseId: this.props.baseId
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-left u-small-left"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.getContractRoleInProgress,
                    size: "s",
                    id: "contract-role-in-progress-offers-loader-" + this.state.countId + OOVMonthlyPriceTagCount,
                    parentId: "offer-filter-loader-opaque",
                    blockType: "span"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.props.mainPriceClass + " u-font-bold"
                }, _OnlineUtils.default.formatPrice(convSummaryPrice), "\xA0z\u0142", this.props.monthString && "/" + this.props.monthString)), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(OldPrice, {
                    baseSummaryPrice: baseSummaryPrice,
                    monthString: this.props.monthString
                })))) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: alignClass
                }, selected && _OnlineUtils.default.updateOgTag('product:original_price:offer_price', _OnlineUtils.default.formatPrice(baseSummaryPrice)), selected && _OnlineUtils.default.updateOgTag('product:offer_loyalyty', monthlyPayments && monthlyPayments[monthlyPayments.length - 1] && monthlyPayments[monthlyPayments.length - 1].monthTo), /*#__PURE__*/ _react.default.createElement(_ProductOfferPriceTooltipComponent.default, {
                    key: "client_" + this.props.clientContext + "_" + this.props.showNet + "_" + this.props.baseId + this.state.countId,
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    monthlyPayments: monthlyPayments,
                    monthlyPaymentsWithBonuses: monthlyPaymentsWithBonuses,
                    loyaltyLength: this.props.loyaltyLength,
                    clientContext: this.props.clientContext,
                    baseId: this.props.baseId
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-left u-small-left"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.getContractRoleInProgress,
                    size: "s",
                    id: "contract-role-in-progress-offers-loader-" + this.state.countId + OOVMonthlyPriceTagCount,
                    parentId: "offer-filter-loader-opaque",
                    blockType: "span"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.props.mainPriceClass + " u-font-bold"
                }, _OnlineUtils.default.formatPrice(baseSummaryPrice), "\xA0z\u0142", this.props.monthString && "/" + this.props.monthString))))));
            }
        }]);
        return OOVMonthlyPriceTag;
    }(_react.Component);

    var OldPrice = function OldPrice(props) {
        return /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-gray5-c u-font-bold  u-text-line-through u-left u-small-left"
        }, _OnlineUtils.default.formatPrice(props.baseSummaryPrice), "\xA0z\u0142", props.monthString && "/" + props.monthString);
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showNet: (0, _selectors.getPriceIsNet)(state),
            getContractRoleInProgress: (0, _offers.getContractRoleInProgress)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(OOVMonthlyPriceTag);

    _exports.default = _default;
});
//# sourceMappingURL=OOVMonthlyPriceTag.js.map