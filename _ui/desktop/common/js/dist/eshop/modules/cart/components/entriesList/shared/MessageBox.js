define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Warning = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

    var Warning = function Warning(props) {
        var style = {
            zIndex: 2,
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0.5)"
        };
        var contentStyle = {
            margin: "15% auto",
            width: "80%",
            top: "15%",
            position: "sticky"
        };
        var numberOfButtons = 0;
        if (props.showAccept) numberOfButtons++;
        if (props.showCancel) numberOfButtons++;
        var colSize = numberOfButtons > 1 ? '3' : '4';
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-w-100 u-h-100 u-position-absolute",
            style: style
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-padding-all-l g-white1-bg",
            style: contentStyle
        }, /*#__PURE__*/ _react.default.createElement("a", {
            href: "#",
            className: "o-modal__close",
            onClick: props.onCancel,
            style: {
                textDecoration: "none"
            }
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "u-acc-hide"
        }, "Zamknij okno")), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 "
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "u-margin-l u-margin-top-l"
        }, props.modalTitle), /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-margin-l-xl",
            dangerouslySetInnerHTML: {
                __html: props.modalContents
            }
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, props.showAccept && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-".concat(colSize, " l-col-").concat(colSize, " u-right u-text-right u-padding-top-l-xl")
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--primary opl-btn-medium u-w-100",
            onClick: props.onAccept
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.onAcceptLabel)), props.showCancel && /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-".concat(colSize, " l-col-").concat(colSize, " u-right u-text-right u-padding-top-l-xl")
        }, /*#__PURE__*/ _react.default.createElement("button", {
            className: "o-btn opl-btn opl-btn--secondary opl-btn-medium u-w-100",
            onClick: props.onCancel
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-box"
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "opl-ripple-circle"
        })), props.onCancelLabel)))));
    };

    _exports.Warning = Warning;
    Warning.propTypes = {
        modalTitle: _propTypes.default.string,
        modalContents: _propTypes.default.string,
        onAccept: _propTypes.default.func,
        onCancel: _propTypes.default.func,
        onAcceptLabel: _propTypes.default.string,
        onCancelLabel: _propTypes.default.string,
        showAccept: _propTypes.default.bool,
        showCancel: _propTypes.default.bool
    };
    Warning.defaultProps = {
        modalTitle: "Uwaga",
        onAcceptLabel: "Wybieram",
        onCancelLabel: "Anuluj",
        showAccept: true,
        showCancel: true
    };
});
//# sourceMappingURL=MessageBox.js.map