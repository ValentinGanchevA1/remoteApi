define(["exports", "react", "prop-types", "lodash", "../../../../core/components/ui/OraSwitcher", "../../../../magnum2/components/OfferPropositionList/OfferProposition/OfferPropositionDetails", "../../../../magnum2/components/Utils"], function(_exports, _react, _propTypes, _lodash, _OraSwitcher, _OfferPropositionDetails, _Utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _OraSwitcher = babelHelpers.interopRequireDefault(_OraSwitcher);
    _OfferPropositionDetails = babelHelpers.interopRequireDefault(_OfferPropositionDetails);

    var MagnumOfferPropositionListItemProduct = function MagnumOfferPropositionListItemProduct(props) {
        var payNowPrice = formatPrice(props.offer.payNowPrice.value, props.offer.currency);
        var monthlyPayments = formatPrice(props.offer.monthlyPayments[0].finalPrice, props.offer.currency);
        return /*#__PURE__*/ _react.default.createElement(_OraSwitcher.default, {
            className: "u-no-padding-l u-no-padding-r",
            isSelected: props.selected
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-no-margin u-padding-left-m "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-1 "
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: "o-radio opl-radio"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: "radio",
            name: "offer-plans",
            className: "switcher-trigger",
            checked: props.selected,
            onChange: props.onChange,
            disabled: props.disabled
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci-label"
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-11"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-small-block u-no-margin"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-6 l-col-6  u-small-block u-small-no-padding-r u-no-padding-l"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-block u-small-right u-large-hide u-medium-hide"
        }), /*#__PURE__*/ _react.default.createElement("p", {
            className: "h5 u-spacing"
        }, (!!props.selectedProposition.promotionType ? "Orange Love " + _lodash.default.capitalize(props.selectedProposition.promotionType) : "") || props.selectedProposition.hardbundleName), /*#__PURE__*/ _react.default.createElement("p", {
            dangerouslySetInnerHTML: {
                __html: props.selectedProposition.offerDescription
            }
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-inline-block"
        }, /*#__PURE__*/ _react.default.createElement(_OfferPropositionDetails.default, {
            linkName: props.descriptions.detailsLabel,
            proposition: props.selectedProposition,
            transactions: props.transactions
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-small-padding-top u-small-no-padding-r"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-left"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-right"
        }, monthlyPayments)))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-large-hide u-medium-hide l-col l-col-small-12 l-col-medium-3 l-col-3   u-small-block u-small-no-padding-r"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-5 u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-medium-hide u-large-hide u-inline-block"
        }, "Op\u0142ata abonamentowa")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-7 u-small-right u-font-bold"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-left u-text-right"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-right"
        }, monthlyPayments))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-hide l-col l-col-small-12 l-col-medium-3 l-col-3  u-small-no-padding-r "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-small-hide"
        }, /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-right"
        }, payNowPrice)))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-large-hide u-medium-hide l-col l-col-small-12 l-col-medium-3 l-col-3   u-small-block u-small-no-padding-r"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-5 u-no-padding"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-medium-hide u-large-hide u-inline-block"
        }, "Aktywacja")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-7 u-small-right u-font-bold"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-left u-text-right"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-right"
        }, payNowPrice)))))))));
    };

    MagnumOfferPropositionListItemProduct.propTypes = {
        descriptions: _propTypes.default.shape({
            detailsLabel: _propTypes.default.string
        }),
        offer: _propTypes.default.shape({
            currency: _propTypes.default.string,
            payNowPrice: _propTypes.default.shape({
                value: _propTypes.default.string
            }),
            monthlyPayments: _propTypes.default.arrayOf(_propTypes.default.shape({
                finalPrice: _propTypes.default.string
            }))
        }),
        selected: _propTypes.default.bool,
        selectedProposition: _propTypes.default.object,
        onChange: _propTypes.default.func,
        offerDescription: _propTypes.default.string
    };

    function formatPrice(price, currency) {
        return '' + (0, _Utils.integer)(price) + ',' + (0, _Utils.fraction)(price) + ' ' + currency;
    }

    var _default = MagnumOfferPropositionListItemProduct;
    _exports.default = _default;
});
//# sourceMappingURL=MagnumOfferPropositionListItemProduct.js.map