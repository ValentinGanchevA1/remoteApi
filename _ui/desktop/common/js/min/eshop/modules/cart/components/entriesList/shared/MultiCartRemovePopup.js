define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, n, o) {
    "use strict";

    function r(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "substituteElementName",
            value: function(e, t) {
                return e ? e.replace("$", t) : e
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement(o.OraModal, {
                    id: this.props.id,
                    showClose: !0,
                    narrow: !0,
                    fallback: this.props.onClickRemove
                }, n.default.createElement("div", {
                    className: "l-page-row u-margin-l"
                }, n.default.createElement("div", {
                    className: "l-row u-spacing"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("h2", null, this.props.deleteEntryPopupTitle || this.props.sectionConf.deleteEntryPopupTitle))), n.default.createElement("div", {
                    className: "l-row u-spacing-xl"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("p", null, this.substituteElementName(this.props.deleteEntryPopupContent || this.props.sectionConf.deleteEntryPopupContent, this.props.textRepresentation)))), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, n.default.createElement(o.OraButton, {
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary"
                }, this.props.declineDeleteEntryPopupButtonLabel || this.props.sectionConf.declineDeleteEntryPopupButtonLabel)), n.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, n.default.createElement(o.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: !0
                }, this.props.confirmDeleteEntryPopupButtonLabel || this.props.sectionConf.confirmDeleteEntryPopupButtonLabel)))))
            }
        }]), l
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    t.defaultProps = {
        sectionConf: {
            deleteEntryPopupTitle: "Usunięcie elementu",
            deleteEntryPopupContent: "Usuwasz element $. Jesteś pewny?",
            declineDeleteEntryPopupButtonLabel: "Anuluj",
            confirmDeleteEntryPopupButtonLabel: "Zmień"
        }
    };
    var l = t;
    e.default = l
});
//# sourceMappingURL=MultiCartRemovePopup.js.map