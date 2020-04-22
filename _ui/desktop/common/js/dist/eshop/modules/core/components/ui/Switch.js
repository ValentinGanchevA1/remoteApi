define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var Switch = function Switch(props) {
        var icon = props.showTick && /*#__PURE__*/ _react.default.createElement("span", {
            className: "g-icon g-icon--only g-icon--valid g-icon--xs-s u-spacing-right"
        });

        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "opl-switch-btn u-small-spacing-l ".concat(props.className),
            style: {
                height: props.height,
                maxWidth: "275px"
            }
        }, /*#__PURE__*/ _react.default.createElement("input", {
            className: "opl-switch-btn--left",
            type: "radio",
            id: "".concat(props.id, "-left"),
            name: props.id,
            value: props.labelLeft,
            checked: props.checked
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "".concat(props.id, "-left"),
            onClick: props.onSwitchLeft
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-l"
        }, icon, /*#__PURE__*/ _react.default.createElement("span", null, props.labelLeft))), /*#__PURE__*/ _react.default.createElement("input", {
            className: "opl-switch-btn--right",
            type: "radio",
            id: "".concat(props.id, "-right"),
            name: props.id,
            value: props.labelRight,
            checked: !props.checked
        }), /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: "".concat(props.id, "-right"),
            onClick: props.onSwitchRight
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--text opl-switch-btn--text-r"
        }, icon, /*#__PURE__*/ _react.default.createElement("span", null, props.labelRight))), /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-switch-btn--bg"
        }));
    };

    Switch.propTypes = {
        id: _propTypes.default.string.isRequired,
        labelLeft: _propTypes.default.string.isRequired,
        labelRight: _propTypes.default.string.isRequired,
        checked: _propTypes.default.bool.isRequired,
        onSwitchLeft: _propTypes.default.func.isRequired,
        onSwitchRight: _propTypes.default.func.isRequired,
        height: _propTypes.default.string,
        showTick: _propTypes.default.bool,
        addClass: _propTypes.default.string
    };
    Switch.defaultProps = {
        height: "40px",
        showTick: true,
        className: ""
    };
    var _default = Switch;
    _exports.default = _default;
});
//# sourceMappingURL=Switch.js.map