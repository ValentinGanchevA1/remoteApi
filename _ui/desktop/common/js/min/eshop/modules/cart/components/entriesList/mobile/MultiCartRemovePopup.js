define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, a, r) {
    "use strict";

    function s(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = s(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "substituteElementName",
            value: function(e, t) {
                return {
                    __html: e.replace(/\$/g, t)
                }
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement(r.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0,
                    fallback: this.props.onClickRemove
                }, a.default.createElement("div", {
                    className: "l-page-row u-margin-l"
                }, a.default.createElement("div", {
                    className: "l-row u-spacing"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12"
                }, a.default.createElement("h2", null, this.props.title))), a.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12",
                    dangerouslySetInnerHTML: this.props.content && this.substituteElementName(this.props.content, this.props.textRepresentation)
                })), a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-margin-s"
                }, a.default.createElement(r.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm)), a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, a.default.createElement(r.OraButton, {
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline))), a.default.createElement("div", {
                    className: "u-small-hide"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, a.default.createElement(r.OraButton, {
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.decline)), a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, a.default.createElement(r.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirm))))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    t.defaultProps = {
        title: "Usunięcie elementu",
        content: "Usuwasz element $. Jesteś pewny?",
        confirm: "Zmień",
        decline: "Anuluj"
    };
    var l = t;
    e.default = l
});
//# sourceMappingURL=MultiCartRemovePopup.js.map