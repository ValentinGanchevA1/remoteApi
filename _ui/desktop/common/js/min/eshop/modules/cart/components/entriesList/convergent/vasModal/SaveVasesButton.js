define(["exports", "react", "prop-types"], function(e, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SaveVasesButton = void 0, t = babelHelpers.interopRequireDefault(t);

    function a(e) {
        return t.default.createElement("div", {
            className: "l-row"
        }, t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-right u-text-right u-padding-top-l-xl"
        }, t.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: e.saveVasesClicked
        }, t.default.createElement("span", {
            className: "opl-ripple-box"
        }, t.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.saveVasesButtonText)))
    }(e.SaveVasesButton = a).propTypes = {
        saveVasesButtonText: l.PropTypes.string
    }, a.defaultProps = {
        saveVasesButtonText: "Wybieram"
    }
});
//# sourceMappingURL=SaveVasesButton.js.map