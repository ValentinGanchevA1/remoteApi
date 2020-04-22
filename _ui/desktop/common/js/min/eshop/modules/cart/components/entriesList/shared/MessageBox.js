define(["exports", "react", "prop-types"], function(e, t, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Warning = void 0, t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);

    function a(e) {
        var l = 0;
        e.showAccept && l++, e.showCancel && l++;
        var a = 1 < l ? "3" : "4";
        return t.default.createElement("div", {
            className: "u-w-100 u-h-100 u-position-absolute",
            style: {
                zIndex: 2,
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0.5)"
            }
        }, t.default.createElement("div", {
            className: "u-padding-all-l g-white1-bg",
            style: {
                margin: "15% auto",
                width: "80%",
                top: "15%",
                position: "sticky"
            }
        }, t.default.createElement("a", {
            href: "#",
            className: "o-modal__close",
            onClick: e.onCancel,
            style: {
                textDecoration: "none"
            }
        }, t.default.createElement("span", {
            className: "u-acc-hide"
        }, "Zamknij okno")), t.default.createElement("div", {
            className: "l-row"
        }, t.default.createElement("div", {
            className: "l-col l-col-12 "
        }, t.default.createElement("h2", {
            className: "u-margin-l u-margin-top-l"
        }, e.modalTitle), t.default.createElement("div", {
            className: "u-margin-l-xl",
            dangerouslySetInnerHTML: {
                __html: e.modalContents
            }
        }))), t.default.createElement("div", {
            className: "l-row"
        }, e.showAccept && t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-".concat(a, " l-col-").concat(a, " u-right u-text-right u-padding-top-l-xl")
        }, t.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: e.onAccept
        }, t.default.createElement("span", {
            className: "opl-ripple-box"
        }, t.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.onAcceptLabel)), e.showCancel && t.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-".concat(a, " l-col-").concat(a, " u-right u-text-right u-padding-top-l-xl")
        }, t.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--secondary opl-btn-medium u-w-100",
            onClick: e.onCancel
        }, t.default.createElement("span", {
            className: "opl-ripple-box"
        }, t.default.createElement("span", {
            className: "opl-ripple-circle"
        })), e.onCancelLabel)))))
    }(e.Warning = a).propTypes = {
        modalTitle: l.default.string,
        modalContents: l.default.string,
        onAccept: l.default.func,
        onCancel: l.default.func,
        onAcceptLabel: l.default.string,
        onCancelLabel: l.default.string,
        showAccept: l.default.bool,
        showCancel: l.default.bool
    }, a.defaultProps = {
        modalTitle: "Uwaga",
        onAcceptLabel: "Wybieram",
        onCancelLabel: "Anuluj",
        showAccept: !0,
        showCancel: !0
    }
});
//# sourceMappingURL=MessageBox.js.map