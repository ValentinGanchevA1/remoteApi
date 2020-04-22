define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/cart/components/entriesList/utils/CartUtils", "eshop/modules/cart/selectors"], function(_exports, _react, _reactRedux, _OnlineUtils, _Tooltip, _CartUtils, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

    var SingleLine = function SingleLine(props) {
        var price = props.isBonus ? props.priceWithBonuses : props.price;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 "
        }, "- ", props.from, "-", props.to || props.loyaltyLength, " mies. za\xA0", props.isBonus && props.priceWithBonuses != props.price && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-text-line-through"
        }, props.price, " z\u0142/mies."), " "), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, price), " z\u0142/mies."));
    };

    var TitleLine = function TitleLine(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row "
        }, /*#__PURE__*/ _react.default.createElement("div", null), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 " + props.addClass,
            dangerouslySetInnerHTML: {
                __html: props.title
            }
        }));
    };

    var ProductOfferPriceTooltipComponent = function ProductOfferPriceTooltipComponent(props) {
        if (!props.monthlyPayments) {
            return null;
        }

        var isBonus = props.clientContext || props.isBonus;
        var monthlyPayments = props.monthlyPayments || [];
        var monthlyPaymentsWithBonuses = props.monthlyPaymentsWithBonuses || [];
        var rows = [];
        rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
            key: "title",
            title: "<b>Opłaty miesięczne</b>"
        }));
        rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
            key: "separator1",
            addClass: " u-spacing-top-s "
        }));
        var monthsFrom = babelHelpers.toConsumableArray(new Set([].concat(babelHelpers.toConsumableArray(monthlyPayments), babelHelpers.toConsumableArray(monthlyPaymentsWithBonuses)).flatMap(function(e) {
            return e.monthFrom;
        }))).sort(_OnlineUtils.default.ascendingNumberComparator);
        var monthsTo = babelHelpers.toConsumableArray(new Set([].concat(babelHelpers.toConsumableArray(monthlyPayments), babelHelpers.toConsumableArray(monthlyPaymentsWithBonuses)).flatMap(function(e) {
            return e.monthTo;
        }))).sort(_OnlineUtils.default.ascendingNumberComparator);
        monthsFrom.map(function(element, index) {
            return [element, monthsTo[index]];
        }).forEach(function(el, index) {
            var tieredPrice = monthlyPayments.find(function(mp) {
                return mp.monthFrom <= el[0] && mp.monthTo >= el[1];
            });
            var tieredPriceWithBonuses = monthlyPaymentsWithBonuses.find(function(mp) {
                return mp.monthFrom <= el[0] && mp.monthTo >= el[1];
            });
            var price = _OnlineUtils.default.getPriceAsNumberFromPaymentsObject(tieredPrice, props.showNet) || 0;

            var priceString = _OnlineUtils.default.formatPrice(price);

            var priceWithBonuses = _OnlineUtils.default.getPriceAsNumberFromPaymentsObject(tieredPriceWithBonuses, props.showNet) || 0;

            var priceWithBonusesString = _OnlineUtils.default.formatPrice(priceWithBonuses);

            rows.push( /*#__PURE__*/ _react.default.createElement(SingleLine, {
                key: "line_" + index,
                loyaltyLength: props.loyaltyLength,
                isBonus: tieredPriceWithBonuses && price > priceWithBonuses,
                price: priceString,
                priceWithBonuses: priceWithBonusesString,
                from: el[0],
                to: el[1]
            }));
        });
        var lastTieredPrice = _OnlineUtils.default.getPriceFromPaymentsObject(monthlyPayments[monthlyPayments.length - 1], props.showNet) || 0;
        var lastTieredPriceWithBonuses = _OnlineUtils.default.getPriceFromPaymentsObject(monthlyPaymentsWithBonuses[monthlyPaymentsWithBonuses.length - 1], props.showNet) || 0;

        if (isBonus && lastTieredPrice !== lastTieredPriceWithBonuses && props.offerDiscountInfoConvDescription) {
            rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                key: "desc",
                title: "- " + props.offerDiscountInfoConvDescription
            }));
            rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                key: "separator3",
                addClass: " u-spacing-top-s "
            }));
        } else if (props.offerDiscountInfoDescription) {
            rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                key: "desc",
                title: "- " + props.offerDiscountInfoDescription
            }));
            rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                key: "separator4",
                addClass: " u-spacing-top-s "
            }));
        }

        if (props.additionalInfo) {
            for (var i = 0; i < props.additionalInfo.length; i++) {
                rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                    key: "additionalInfo" + i,
                    title: "- " + props.additionalInfo[i]
                }));
                rows.push( /*#__PURE__*/ _react.default.createElement(TitleLine, {
                    key: "separator" + (6 + i),
                    addClass: " u-spacing-top-s "
                }));
            }
        }

        return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            key: "context_" + isBonus + "_" + props.showNet,
            maxWidth: 400,
            baseId: (props.baseId && props.baseId) + "-offerPriceTooltip" + "_" + props.showNet,
            className: "u-right u-w-100",
            iconClassName: "u-table-cell u-vertical-top",
            label: props.children
        }, rows);
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            showNet: (0, _selectors.getPriceIsNet)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, null)(ProductOfferPriceTooltipComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductOfferPriceTooltipComponent.js.map