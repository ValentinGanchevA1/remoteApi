define(["exports", "react", "prop-types", "jquery", "../../../modules/core/components/ui/Modal", "../../../components/common/OraLoader"], function(_exports, _react, _propTypes, _jquery, _Modal, _OraLoader) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    FullScreenLoader.propTypes = {
        showLoader: _propTypes.default.bool,
        message: _propTypes.default.string,
        messageType: _propTypes.default.string,
        id: _propTypes.default.string.isRequired,
        parentId: _propTypes.default.string,
        showClose: _propTypes.default.bool,
        onClose: _propTypes.default.func
    };

    function FullScreenLoader() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            showLoader: true,
            onClose: function onClose() {
                return null;
            },
            showClose: true
        };

        if (props.showLoader) {
            (0, _jquery.default)("#" + props.id + "Section").show();
        } else {
            (0, _jquery.default)("#" + props.id + "Section").hide();
        }

        return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
            size: "narrow",
            escapeClose: false,
            clickClose: false,
            showClose: props.showClose,
            open: props.showLoader,
            onClose: props.onClose,
            id: props.id + "Modal"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-full-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-page-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row u-padding-s"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-small-1 l-col-medium-1 l-col-1 u-spacing-top-m u-position-relative"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-vertical-middle"
        }, /*#__PURE__*/ _react.default.createElement(_OraLoader.OraLoader, {
            loading: props.showLoader,
            id: props.id,
            parentId: props.parentId | props.id + "Parent",
            size: "s"
        }))), /*#__PURE__*/ _react.default.createElement("div", {
            id: props.id + "Section",
            className: "l-col l-col-small-11 l-col-medium-11 l-col-11"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "u-font-bold u-padding-top u-vertical-middle"
        }, props.message))))));
    }

    var _default = FullScreenLoader;
    _exports.default = _default;
});
//# sourceMappingURL=FullScreenLoader.js.map