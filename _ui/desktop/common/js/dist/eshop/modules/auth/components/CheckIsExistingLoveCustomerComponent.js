define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var CheckIsExistingLoveCustomerComponent = function CheckIsExistingLoveCustomerComponent(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-top"
        }, /*#__PURE__*/ _react.default.createElement("p", {
            className: "u-margin-l"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, "Tak - \u015Bwietnie!"), " W kolejnym kroku sprawdzimy, czy Tw\xF3j numer jest ju\u017C ", /*#__PURE__*/ _react.default.createElement("br", {
            className: "u-large-hide"
        }), " w Love dla firm."), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-font-bold"
        }, "Jeszcze nie -"), " w kolejnym kroku skomponuj sw\xF3j pakiet. Mo\u017Cesz te\u017C zostawi\u0107 sw\xF3j numer,", /*#__PURE__*/ _react.default.createElement("br", {
            className: "u-small-hide"
        }), " a my oddzwonimy, by porozmawia\u0107 o ofercie."), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            id: "continue",
            onClick: props.hasNoAccount,
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Nie mam")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            id: "stay",
            onClick: props.logIn,
            className: "o-btn opl-btn opl-btn--secondary u-w-100"
        }, "Tak, mam abonament"))));
    };

    CheckIsExistingLoveCustomerComponent.propTypes = {
        hasNoAccount: _propTypes.default.func,
        logIn: _propTypes.default.func
    };
    var _default = CheckIsExistingLoveCustomerComponent;
    _exports.default = _default;
});
//# sourceMappingURL=CheckIsExistingLoveCustomerComponent.js.map