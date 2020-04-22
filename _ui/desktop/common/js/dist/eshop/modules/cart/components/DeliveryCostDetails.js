define(["exports", "react", "../../checkout/selectors", "react-redux"], function(_exports, _react, _selectors, _reactRedux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var DeliveryCostDetails = function DeliveryCostDetails(props) {
        var monthlyPrice = /*#__PURE__*/ _react.default.createElement("span", null, "\u2014");

        var oneTimePrice = /*#__PURE__*/ _react.default.createElement("span", {
            className: "h5 g-brand2-c u-no-margin"
        }, props.cost);

        return props.render(oneTimePrice, monthlyPrice, props.title);
    };

    var _default = DeliveryCostDetails;
    _exports.default = _default;
});
//# sourceMappingURL=DeliveryCostDetails.js.map