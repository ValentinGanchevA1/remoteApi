define(["exports", "react", "prop-types", "../../../shared/PriceBoxes", "../Utils", "../../Utils"], function(_exports, _react, _propTypes, _PriceBoxes, _Utils, _Utils2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.InputCell = _exports.PriceCell = _exports.NameCell = _exports.GraphicCell = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

    var GraphicCell = function GraphicCell(props) {
        var icon = props.vas.thumbnailIcon ? props.vas.thumbnailIcon : "air-drop";
        return /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
            big: "3",
            medium: "3",
            small: "8",
            className: "u-small-spacing-l"
        }, /*#__PURE__*/ _react.default.createElement(_Utils2.Graphic, {
            icon: icon ? icon.toLowerCase().split('_').join("-") : "",
            imgUrl: props.vas.imgUrl
        }));
    };

    _exports.GraphicCell = GraphicCell;

    var NameCell = function NameCell(props) {
        return /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
            small: "12",
            medium: "4",
            big: "4"
        }, /*#__PURE__*/ _react.default.createElement("h4", {
            className: "u-font-standard u-margin",
            dangerouslySetInnerHTML: {
                __html: props.vas.title
            }
        }), props.vas.slogan && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            dangerouslySetInnerHTML: {
                __html: props.vas.slogan
            }
        }), props.vas.detailsDescription && /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin",
            "aria-hidden": "false",
            dangerouslySetInnerHTML: {
                __html: props.vas.detailsDescription
            }
        }));
    };

    _exports.NameCell = NameCell;

    var PriceCell = function PriceCell(props) {
        return /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
            small: props.small,
            medium: props.medium,
            big: props.big,
            className: "u-large-text-right u-medium-text-right u-small-padding-l"
        }, /*#__PURE__*/ _react.default.createElement(_PriceBoxes.RwdPriceBox, {
            quantity: props.quantity,
            prices: (0, _Utils.transformPriceInfo)(props.vas.paymentDescriptions.monthlyPayments, props.net),
            oneTimePrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.paymentDescriptions.oneTimePayment, props.net),
            checkoutPrice: (0, _Utils.transformOneTimePriceInfo)(props.vas.paymentDescriptions.payNowPayment, props.net)
        }));
    };

    _exports.PriceCell = PriceCell;
    PriceCell.defaultProps = {
        small: "12",
        medium: "3",
        big: "3",
        quantity: "1"
    };

    var InputCell = function InputCell(props) {
        return /*#__PURE__*/ _react.default.createElement(_Utils.LCol, {
            small: "12",
            medium: "2",
            big: "2",
            className: "u-small-position-absolute u-small-position-right u-small-w-auto u-small-padding-right-l"
        }, /*#__PURE__*/ _react.default.createElement("label", {
            className: "o-radio opl-radio"
        }, /*#__PURE__*/ _react.default.createElement("input", {
            type: "checkbox",
            name: "gadget-choose",
            className: "u-acc-hide",
            checked: props.vas.selected,
            disabled: props.vas.mandatory,
            value: props.vas.id
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci"
        }), /*#__PURE__*/ _react.default.createElement("span", {
            className: "o-ci-label"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-txt--show"
        }, "Wybieram"), /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-txt--hide"
        }, props.vas.selected ? "Wybrano" : "Wybierz"))));
    };

    _exports.InputCell = InputCell;
});
//# sourceMappingURL=FixInputFragments.js.map