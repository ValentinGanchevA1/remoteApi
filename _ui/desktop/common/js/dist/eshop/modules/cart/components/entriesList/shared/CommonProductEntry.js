define(["exports", "react", "prop-types", "../fix/FullProductRow"], function(_exports, _react, _propTypes, _FullProductRow) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _FullProductRow = babelHelpers.interopRequireDefault(_FullProductRow);

    var CommonProductEntry = function CommonProductEntry(props) {
        var twoButtons = props.product.changeable && props.onChange && props.onDetails;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-left-l u-padding-right-l-xl"
        }, /*#__PURE__*/ _react.default.createElement(_FullProductRow.default, babelHelpers.extends({}, props, {
            borderTop: false,
            forFreeLabel: props.forFreeLabel,
            serviceFreeLabel: props.serviceFreeLabel,
            lowerInstallmentsClicked: props.lowerInstallmentsClicked,
            descriptions: props.descriptions,
            showActionsMobile: false
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-border-top u-medium-hide u-large-hide"
        }, props.product.changeable && props.onChange && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-".concat(twoButtons ? '6 u-small-border-right' : '12', " u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center")
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-small-no-spacing",
            onClick: props.onChange
        }, props.changeLabel)), props.onDetails && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-".concat(twoButtons ? '6' : '12', " u-spacing-right-l u-padding-l u-padding-top-l u-padding-left-s u-small-no-spacing-r u-small-text-center")
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-small-no-spacing",
            onClick: props.onDetails
        }, props.detailsLabel)))), props.product.removable && props.onRemove && /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "opl-checkout__item__remove u-hide u-small-block",
            onClick: props.onRemove
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, props.removeLabel)));
    };

    CommonProductEntry.propTypes = {
        product: _propTypes.default.shape({
            price: _propTypes.default.shape({
                oneTimeCost: _propTypes.default.shape({
                    gross: _propTypes.default.string,
                    currency: _propTypes.default.string
                }),
                monthlyCosts: _propTypes.default.arrayOf(_propTypes.default.shape({
                    gross: _propTypes.default.string,
                    currency: _propTypes.default.string,
                    monthFrom: _propTypes.default.number,
                    monthTo: _propTypes.default.number
                })),
                installments: _propTypes.default.bool
            }),
            code: _propTypes.default.string,
            name: _propTypes.default.string,
            thumbnailIcon: _propTypes.default.string,
            imageUrl: _propTypes.default.string,
            description: _propTypes.default.string,
            changeable: _propTypes.default.bool,
            removable: _propTypes.default.bool
        }),
        detailsLabel: _propTypes.default.string,
        forFreeLabel: _propTypes.default.string,
        changeLabel: _propTypes.default.string,
        removeLabel: _propTypes.default.string,
        onDetails: _propTypes.default.func,
        onChange: _propTypes.default.func,
        onRemove: _propTypes.default.func,
        lowerInstallmentsClicked: _propTypes.default.func,
        serviceFreeLabel: _propTypes.default.string
    };
    CommonProductEntry.defaultProps = {
        changeLabel: "Zmień",
        detailsLabel: "Szczegóły",
        removeLabel: "Usuń"
    };
    var _default = CommonProductEntry;
    _exports.default = _default;
});
//# sourceMappingURL=CommonProductEntry.js.map