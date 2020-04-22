define(["exports", "react", "prop-types"], function(e, l, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.CloseAndSaveVasesButtons = void 0, l = babelHelpers.interopRequireDefault(l);

    function a(e) {
        return l.default.createElement("div", {
            className: "u-margin-top"
        }, l.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
        }, l.default.createElement("button", {
            className: "o-btn opl-btn u-w-100 opl-btn--secondary opl-btn--medium",
            onClick: e.onClose
        }, l.default.createElement("span", {
            className: "opl-ripple-box"
        }, l.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.closeVasesButtonText)), l.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-4 large-offset-by-4 medium-offset-by-4"
        }, l.default.createElement("button", {
            className: "o-btn opl-btn u-padd u-small-margin-top  opl-btn--primary u-w-100 opl-btn--medium",
            onClick: e.saveVasesClicked
        }, l.default.createElement("span", {
            className: "opl-ripple-box"
        }, l.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.saveVasesButtonText)))
    }(e.CloseAndSaveVasesButtons = a).propTypes = {
        saveVasesButtonText: t.PropTypes.string,
        closeVasesButtonText: t.PropTypes.string
    }, a.defaultProps = {
        saveVasesButtonText: "Wybierz",
        closeVasesButtonText: "Zamknij bez wyboru"
    }
});
//# sourceMappingURL=CloseAndSaveVasesButtons.js.map