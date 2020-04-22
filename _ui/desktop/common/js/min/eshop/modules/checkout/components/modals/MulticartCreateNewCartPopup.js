define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, a, r) {
    "use strict";

    function o(a) {
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
        var t = o(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return a.default.createElement(r.OraModal, {
                    id: this.props.id,
                    narrow: !0,
                    showClose: !0
                }, a.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, a.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12"
                }, "Czy na pewno chcesz stworzyć nowy koszyk? Do obecnego koszyka będziesz mógł powrócić poprzez listę dyspozycji w panelu konsultatna. Zapamiętaj dane klienta.")), a.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, a.default.createElement(r.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: !0
                }, "Anuluj")), a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, a.default.createElement(r.OraButton, {
                    className: "u-w-100 g-green3-bg",
                    type: "primary",
                    modal: !0,
                    onClick: this.props.onClickedCreateNew
                }, "Potwierdź")))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    e.default = t
});
//# sourceMappingURL=MulticartCreateNewCartPopup.js.map