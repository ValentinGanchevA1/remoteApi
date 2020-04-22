define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.SaveVasesButton = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var SaveVasesButton = function SaveVasesButton(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right u-padding-top-l-xl"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: props.saveVasesClicked
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.saveVasesButtonText)));
    };

    _exports.SaveVasesButton = SaveVasesButton;
    SaveVasesButton.propTypes = {
        saveVasesButtonText: _propTypes.PropTypes.string
    };
    SaveVasesButton.defaultProps = {
        saveVasesButtonText: "Wybieram"
    };
});
//# sourceMappingURL=SaveVasesButton.js.map