define(["exports", "react", "prop-types"], function(e, l, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t);

    function a(e) {
        var t = e.showTick && l.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--valid g-icon--xs-s u-spacing-right"
        });
        return l.default.createElement("div", {
            className: "opl-switch-btn u-small-spacing-l ".concat(e.className),
            style: {
                height: e.height,
                maxWidth: "275px"
            }
        }, l.default.createElement("input", {
            className: "opl-switch-btn--left",
            type: "radio",
            id: "".concat(e.id, "-left"),
            name: e.id,
            value: e.labelLeft,
            checked: e.checked
        }), l.default.createElement("label", {
            htmlFor: "".concat(e.id, "-left"),
            onClick: e.onSwitchLeft
        }, l.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, t, l.default.createElement("span", null, e.labelLeft))), l.default.createElement("input", {
            className: "opl-switch-btn--right",
            type: "radio",
            id: "".concat(e.id, "-right"),
            name: e.id,
            value: e.labelRight,
            checked: !e.checked
        }), l.default.createElement("label", {
            htmlFor: "".concat(e.id, "-right"),
            onClick: e.onSwitchRight
        }, l.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, t, l.default.createElement("span", null, e.labelRight))), l.default.createElement("span", {
            className: "opl-switch-btn--bg"
        }))
    }
    a.propTypes = {
        id: t.default.string.isRequired,
        labelLeft: t.default.string.isRequired,
        labelRight: t.default.string.isRequired,
        checked: t.default.bool.isRequired,
        onSwitchLeft: t.default.func.isRequired,
        onSwitchRight: t.default.func.isRequired,
        height: t.default.string,
        showTick: t.default.bool,
        addClass: t.default.string
    }, a.defaultProps = {
        height: "40px",
        showTick: !0,
        className: ""
    };
    var i = a;
    e.default = i
});
//# sourceMappingURL=Switch.js.map