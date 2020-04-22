define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.CloseAndSaveVasesButtons = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var CloseAndSaveVasesButtons = function CloseAndSaveVasesButtons(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-top"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn u-w-100 opl-btn--secondary opl-btn--medium",
            onClick: props.onClose
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.closeVasesButtonText)), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 large-offset-by-4 medium-offset-by-4"
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn u-padd u-small-margin-top  opl-btn--primary u-w-100 opl-btn--medium",
            onClick: props.saveVasesClicked
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.saveVasesButtonText)));
    };

    _exports.CloseAndSaveVasesButtons = CloseAndSaveVasesButtons;
    CloseAndSaveVasesButtons.propTypes = {
        saveVasesButtonText: _propTypes.PropTypes.string,
        closeVasesButtonText: _propTypes.PropTypes.string
    };
    CloseAndSaveVasesButtons.defaultProps = {
        saveVasesButtonText: "Wybierz",
        closeVasesButtonText: "Zamknij bez wyboru"
    };
});
//# sourceMappingURL=CloseAndSaveVasesButtons.js.map