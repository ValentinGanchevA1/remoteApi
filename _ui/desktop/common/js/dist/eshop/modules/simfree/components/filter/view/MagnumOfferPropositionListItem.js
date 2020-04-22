define(["exports", "react", "prop-types", "../../../../core/components/ui/OraSwitcher", "../../../../magnum2/components/Utils", "./MagnumPropositionListPriceTag"], function(_exports, _react, _propTypes, _OraSwitcher, _Utils, _MagnumPropositionListPriceTag) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.formatPrice = formatPrice;
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _MagnumPropositionListPriceTag = babelHelpers.interopRequireDefault(_MagnumPropositionListPriceTag);

    var MagnumOfferPropositionListItem = function MagnumOfferPropositionListItem(props) {
        var payNowPrice = formatPrice(props.offer.payNowPrice.value.toString(), props.offer.currency);
        return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
            className: "u-padding-left-m u-padding-right-m u-padding-top-s",
            isSelected: props.selected,
            onChangeHandler: props.onChange
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-no-margin"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "o-radio opl-radio u-w-100 u-box-sizing"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: "radio",
            checked: props.selected,
            className: "switcher-trigger"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci"
        }), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-display_table u-small-block u-no-margin u-large-block"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-12  u-display_table-cell u-small-block u-small-no-padding-r u-large-block u-large-no-padding-r"
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: "o-ci-label u-font-normal g-black1-c u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            dangerouslySetInnerHTML: {
                __html: props.offerDescription
            }
        })))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-12  u-clearfix u-display_table-cell u-small-block u-small-padding-top u-small-no-padding-r u-large-block u-large-padding-top u-large-no-padding-r u-medium-hide"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-large-margin-s u-small-margin-s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6  u-medium-hide u-no-padding-left"
        }, /*#__PURE__*/ _react.default.createElement("p", null, props.descriptions.monthlyPayments)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-6 l-col-medium-12 l-col-6  u-text-right"
        }, /*#__PURE__*/ _react.default.createElement(_MagnumPropositionListPriceTag.default, {
            offer: props.offer,
            clientContext: props.clientContext,
            loyaltyLength: props.loyaltyLength,
            monthString: "mies.",
            mainPriceClass: "",
            alignClass: "u-left",
            offerDiscountInfoDescription: props.descriptions.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: props.descriptions.offerDiscountInfoConvDescription,
            baseId: "desktop"
        })))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-12  u-clearfix u-display_table-cell u-small-block u-small-no-padding-r u-large-block u-large-no-padding-r u-no-padding-left"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-large-margin-s u-small-margin-s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 "
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-medium-hide u-inline-block"
        }, props.descriptions.activation)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-6 l-col-medium-12 l-col-4 "
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-font-bold u-small-inline-block u-text-right u-small-right u-large-right u-large-inline-block"
        }, payNowPrice))))));
    };

    MagnumOfferPropositionListItem.propTypes = {
        descriptions: _propTypes.default.shape({
            detailsLabel: _propTypes.default.string,
            monthlyPayments: _propTypes.default.string,
            activation: _propTypes.default.string
        }),
        offer: _propTypes.default.shape({
            currency: _propTypes.default.string,
            payNowPrice: _propTypes.default.shape({
                value: _propTypes.default.any
            }),
            monthlyPayments: _propTypes.default.arrayOf(_propTypes.default.shape({
                finalPrice: _propTypes.default.any
            }))
        }),
        selected: _propTypes.default.bool,
        offerDescription: _propTypes.default.string,
        onChange: _propTypes.default.func,
        clientContext: _propTypes.default.bool
    };

    function formatPrice(price, currency) {
        return '' + (0, _Utils.integer)(price) + ',' + (0, _Utils.fraction)(price) + ' ' + currency;
    }

    var _default = MagnumOfferPropositionListItem;
    _exports.default = _default;
});
//# sourceMappingURL=MagnumOfferPropositionListItem.js.map