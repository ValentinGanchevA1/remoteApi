define(["exports", "react"], function(_exports, _react) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.Sticker = void 0;
    _react = babelHelpers.interopRequireDefault(_react);

    var Sticker = function Sticker() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (props.sticker) {
            var stickerStyle = {
                background: {
                    backgroundColor: "#" + props.sticker.color || "#FFD200"
                },
                font: {
                    color: "#" + props.sticker.textColor || "#000000",
                    fontSize: props.sticker.textSize || "small"
                }
            };
            var stickerAlignStyle = props.sticker.align === "LEFT" ? "u-left u-position-left" : "u-right u-position-right";
            var className = props.className ? props.className : "";
            var htmlStickerName = {
                __html: props.sticker.name
            };

            if (props.renderMobileVersion) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-glorious--badges opl-glorious--badges-small  ".concat(stickerAlignStyle)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-glorious--badges-bg u-margin-left-l u-medium-margin-left-xl u-small-no-margin",
                    style: stickerStyle.background
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-glorious--badges-text u-margin-left-l u-medium-margin-left-m u-medium-margin-left-xl u-small-no-margin",
                    style: stickerStyle.font
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-small-font-small u-no-margin-b",
                    dangerouslySetInnerHTML: htmlStickerName
                })));
            } else {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-glorious--badges opl-glorious--badges-small u-large-margin-left-m u-large-margin-left-l ".concat(className, " ").concat(stickerAlignStyle)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-glorious--badges-bg u-small-no-margin",
                    style: stickerStyle.background
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-glorious--badges-text ",
                    style: stickerStyle.font
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-font-bold u-small-font-small u-no-margin-b",
                    dangerouslySetInnerHTML: htmlStickerName
                })));
            }
        } else return null;
    };

    _exports.Sticker = Sticker;
});
//# sourceMappingURL=Sticker.js.map