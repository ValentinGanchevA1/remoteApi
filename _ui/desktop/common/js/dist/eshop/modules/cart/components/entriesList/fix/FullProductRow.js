define(["exports", "react", "prop-types", "./Utils", "./PriceRow", "../../../enum/DeviceType", "../../../enum/RelationType"], function(_exports, _react, _propTypes, _Utils, _PriceRow, _DeviceType, _RelationType) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _DeviceType = babelHelpers.interopRequireDefault(_DeviceType);
    _RelationType = babelHelpers.interopRequireDefault(_RelationType);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var FullProductRow = function FullProductRow(props) {
        var oneTimeCost = props.product.price && props.product.price.oneTimeCost;
        var hasNonZeroOneTimeCost = oneTimeCost && oneTimeCost.price > 0;
        var monthlyCost = props.product.price && props.product.price.monthlyCosts && props.product.price.monthlyCosts.length > 0 && props.product.price.monthlyCosts[0];
        var tieredPrices = props.product.price && props.product.price.monthlyCosts && props.product.price.monthlyCosts.length > 1 && props.product.price.monthlyCosts.slice(1);
        var hasZeroMonthlyCost = monthlyCost && monthlyCost.price <= 0;
        var hasMoreThanOneMonthlyCost = props.product.price && props.product.price.monthlyCosts && props.product.price.monthlyCosts.length > 1;
        var isDiscount = props.product.price < 0 || monthlyCost && monthlyCost.price < 0;
        var isFree = hasZeroMonthlyCost && !hasNonZeroOneTimeCost && !hasMoreThanOneMonthlyCost;
        var showFreeLabel = isFree && props.forFreeLabel && !isDiscount;
        var showOptionalSTBLabel = _DeviceType.default.STB === props.product.deviceType && _RelationType.default.OPTIONAL === props.product.relationType;
        var showOneTimeCostAsMain = hasNonZeroOneTimeCost && (!monthlyCost || hasZeroMonthlyCost);
        var installments = props.product.price && props.product.price.installments;
        var productIsDeviceType = !!props.product.deviceType;
        var productIsFreeLabel = productIsDeviceType ? props.forFreeLabel : props.serviceFreeLabel;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row ".concat(props.borderTop ? 'u-border-top' : '')
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-4 l-col-small-12 l-col--opposite"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row ".concat(showFreeLabel || !!tieredPrices ? 'u-padding-l u-padding-top-l' : 'u-padding-l-xl u-padding-top-l-xl', " u-small-no-padding")
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-right u-text-right ".concat(showOneTimeCostAsMain ? 'u-small-text-left u-small-padding-s u-small-padding-top-m' : 'u-small-hide')
        }, hasNonZeroOneTimeCost && /*#__PURE__*/ _react.default.createElement(_PriceRow.Price, {
            price: oneTimeCost,
            net: props.net
        })), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-right u-text-right ".concat(!showOneTimeCostAsMain ? 'u-small-text-left u-small-padding-s u-small-padding-top-m' : 'u-small-hide')
        }, monthlyCost && /*#__PURE__*/ _react.default.createElement(_PriceRow.Price, {
            price: _objectSpread({}, monthlyCost, {
                installments: installments
            }),
            net: props.net
        }), showFreeLabel && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: productIsFreeLabel
            }
        })), showOptionalSTBLabel && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("span", {
            dangerouslySetInnerHTML: {
                __html: props.optionalDeviceLabel
            }
        })), tieredPrices && tieredPrices.map(function(tieredPrice) {
            return /*#__PURE__*/ _react.default.createElement("div", {
                key: tieredPrice.monthFrom + "-" + tieredPrice.monthTo,
                className: "u-right u-text-nowrap"
            }, "od\xA0", tieredPrice.monthFrom, " ", tieredPrice.monthTo ? "do " + tieredPrice.monthTo + " " : "", "m-ca ", props.net ? tieredPrice.net : tieredPrice.gross, " ", tieredPrice.currency);
        }), !showOneTimeCostAsMain && hasNonZeroOneTimeCost && /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-font-small u-font-bold u-large-hide u-medium-hide"
        }, "+\xA0", props.net ? oneTimeCost.net : oneTimeCost.gross, " ", oneTimeCost.currency, "\xA0jednorazowa op\u0142ata"), monthlyCost && !!props.lowerInstallmentsClicked && !(!hasMoreThanOneMonthlyCost && hasZeroMonthlyCost) && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("a", {
            className: "u-spacing-left",
            href: "#",
            key: "lowerInstallmentsClicked_key",
            onClick: props.lowerInstallmentsClicked,
            "aria-label": "Obni\u017C raty"
        }, !!props.descriptions && props.descriptions.lowerInstallments || "Obniż raty"))))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-8 l-col-small-12"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row ".concat(showFreeLabel ? 'u-padding-l-xl u-padding-top-l-xl' : 'u-padding-l u-padding-top-l', " u-small-padding-top u-small-padding-l")
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto 'u-no-padding-r'"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-checkout__icon__cell"
        }, (!!props.product.thumbnailIcon || !!props.product.imageUrl) && /*#__PURE__*/ _react.default.createElement(_Utils.Graphic, {
            icon: props.product.thumbnailIcon,
            imgUrl: props.product.imageUrl
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto l-col-small-8 l-col-medium-8  'u-no-padding-l'"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold u-small-font-large",
            dangerouslySetInnerHTML: {
                __html: props.product.name
            }
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top-xs u-small-padding-top-s",
            dangerouslySetInnerHTML: {
                __html: props.product.description
            }
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top ".concat(props.showActionsMobile ? '' : 'u-small-hide')
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, props.onDetails && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap",
            onClick: props.onDetails
        }, props.detailsLabel))), props.product.changeable && props.onChange && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap ",
            onClick: props.onChange
        }, props.changeLabel))), props.product.removable && props.onRemove && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col--auto  "
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "u-spacing-right-l u-text-nowrap ",
            onClick: props.onRemove
        }, props.removeLabel)))))))));
    };

    FullProductRow.propTypes = {
        product: _propTypes.default.shape({
            price: _propTypes.default.shape({
                oneTimeCost: _propTypes.default.shape({
                    gross: _propTypes.default.string,
                    net: _propTypes.default.string,
                    currency: _propTypes.default.string
                }),
                monthlyCosts: _propTypes.default.arrayOf(_propTypes.default.shape({
                    gross: _propTypes.default.string,
                    net: _propTypes.default.string,
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
        lowerInstallmentsClicked: _propTypes.default.func,
        onRemove: _propTypes.default.func,
        borderTop: _propTypes.default.bool,
        showActionsMobile: _propTypes.default.bool,
        serviceFreeLabel: _propTypes.default.string,
        optionalDeviceLabel: _propTypes.default.string
    };
    FullProductRow.defaultProps = {
        changeLabel: "Zmień",
        detailsLabel: "Szczegóły",
        removeLabel: "Usuń",
        borderTop: true,
        showActionsMobile: true,
        forFreeLabel: "<div>Urządzenie bezpłatne</div><div>w ramach oferty</div>",
        optionalDeviceLabel: "<div>Dekoder opcjonalny</div>",
        serviceFreeLabel: "<div>Bezpłatne w cenie</div><div>pakietu</div>"
    };
    var _default = FullProductRow;
    _exports.default = _default;
});
//# sourceMappingURL=FullProductRow.js.map