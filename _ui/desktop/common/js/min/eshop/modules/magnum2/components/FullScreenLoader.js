define(["exports", "react", "prop-types", "jquery", "../../../modules/core/components/ui/Modal", "../../../components/common/OraLoader"], function(e, l, a, o, t, d) {
    "use strict";

    function s() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
            showLoader: !0,
            onClose: function() {
                return null
            },
            showClose: !0
        };
        return e.showLoader ? (0, o.default)("#" + e.id + "Section").show() : (0, o.default)("#" + e.id + "Section").hide(), l.default.createElement(t.default, {
            size: "narrow",
            escapeClose: !1,
            clickClose: !1,
            showClose: e.showClose,
            open: e.showLoader,
            onClose: e.onClose,
            id: e.id + "Modal"
        }, l.default.createElement("div", {
            className: "l-full-row"
        }, l.default.createElement("div", {
            className: "l-page-row"
        }, l.default.createElement("div", {
            className: "l-row u-padding-s"
        }, l.default.createElement("div", {
            className: "l-col l-col-small-1 l-col-medium-1 l-col-1 u-spacing-top-m u-position-relative"
        }, l.default.createElement("div", {
            className: "u-vertical-middle"
        }, l.default.createElement(d.OraLoader, {
            loading: e.showLoader,
            id: e.id,
            parentId: e.parentId | e.id + "Parent",
            size: "s"
        }))), l.default.createElement("div", {
            id: e.id + "Section",
            className: "l-col l-col-small-11 l-col-medium-11 l-col-11"
        }, l.default.createElement("div", {
            className: "u-font-bold u-padding-top u-vertical-middle"
        }, e.message))))))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o), t = babelHelpers.interopRequireDefault(t), s.propTypes = {
        showLoader: a.default.bool,
        message: a.default.string,
        messageType: a.default.string,
        id: a.default.string.isRequired,
        parentId: a.default.string,
        showClose: a.default.bool,
        onClose: a.default.func
    };
    var r = s;
    e.default = r
});
//# sourceMappingURL=FullScreenLoader.js.map