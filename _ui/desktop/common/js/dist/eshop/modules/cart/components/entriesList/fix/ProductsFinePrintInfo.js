define(["exports", "react", "prop-types", "eshop/modules/cart/analyzer/CartInfoUtils", "../../../../core/enum/Technology"], function(_exports, _react, _propTypes, _CartInfoUtils, _Technology) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.FinePrintForADSLModem = _exports.FinePrintForSatteliteTV = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _Technology = babelHelpers.interopRequireDefault(_Technology);

    var ProductsFinePrintInfo = function ProductsFinePrintInfo(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top u-padding"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            dangerouslySetInnerHTML: {
                __html: props.label
            }
        }))));
    };

    ProductsFinePrintInfo.propTypes = {
        label: _propTypes.default.string.isRequired
    };

    var FinePrintForSatteliteTV = function FinePrintForSatteliteTV(props) {
        if (props.entry.tvFixProduct && props.entry.tvFixProduct.technology === _Technology.default.SAT) {
            return /*#__PURE__*/ _react.default.createElement(ProductsFinePrintInfo, {
                label: props.label
            });
        } else {
            return null;
        }
    };

    _exports.FinePrintForSatteliteTV = FinePrintForSatteliteTV;

    var FinePrintForADSLModem = function FinePrintForADSLModem(props) {
        if (props.entry.broadbandFixProduct && props.entry.broadbandFixProduct.technology === _Technology.default.ADSL && props.entry.bundleType === "1P_PRE") {
            return /*#__PURE__*/ _react.default.createElement(ProductsFinePrintInfo, {
                label: props.label
            });
        } else {
            return null;
        }
    };

    _exports.FinePrintForADSLModem = FinePrintForADSLModem;
});
//# sourceMappingURL=ProductsFinePrintInfo.js.map