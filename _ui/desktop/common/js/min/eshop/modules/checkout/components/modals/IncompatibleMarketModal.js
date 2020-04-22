define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, o, a) {
    "use strict";

    function i(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
        var t = i(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "getTitle",
            value: function() {
                return "B2B" === this.props.marketIncompatibility ? this.props.titleB2B : "B2C" === this.props.marketIncompatibility ? this.props.titleB2C : this.props.titleDefault
            }
        }, {
            key: "render",
            value: function() {
                return o.default.createElement("div", null, o.default.createElement("div", {
                    className: "l-page-row u-margin-l"
                }, o.default.createElement("div", {
                    className: "l-row u-spacing"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12"
                }, o.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                }))), o.default.createElement("div", {
                    className: "u-medium-hide u-large-hide "
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-margin-s"
                }, o.default.createElement(a.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: !0
                }, this.props.clearCart)), o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, o.default.createElement(a.OraButton, {
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary",
                    onClick: this.props.onClickLightLogout
                }, this.props.logout))), o.default.createElement("div", {
                    className: "u-small-hide"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, o.default.createElement(a.OraButton, {
                    className: "u-w-100",
                    modal: !0,
                    type: "secondary",
                    onClick: this.props.onClickLightLogout
                }, this.props.logout)), o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4"
                }, o.default.createElement(a.OraButton, {
                    onClick: this.props.onClickRemove,
                    className: "u-w-100",
                    modal: !0
                }, this.props.clearCart)))))
            }
        }]), l
    }((o = babelHelpers.interopRequireWildcard(o)).Component);
    t.defaultProps = {
        titleB2B: "Zauważyliśmy, że jesteś na swoim koncie indywidualnym, a w koszyku masz ofertę dla klienta biznesowego.<br>Wybierz, co chcesz zrobić:<br>    kontynuuj zakup – wylogujesz się z konta indywidualnego i możesz złożyć zamówienie jako nowy klient biznesowy,<br>    wyczyść koszyk – usuniesz wybraną ofertę i możesz wybrać ofertę dla klienta indywidualnego.",
        titleB2C: "Zauważyliśmy, że jesteś na swoim koncie biznesowym, a w koszyku masz ofertę dla klienta indywidualnego. Wybierz, co chcesz zrobić:<br>    kontynuuj zakup – wylogujesz się z konta biznesowego i możesz złożyć zamówienie jako nowy klient indywidualny,<br>    wyczyść koszyk – usuniesz wybraną ofertę i możesz wybrać ofertę dla klienta biznesowego.",
        titleDefault: "Niezgodny rynek",
        logout: "Kontynuuj zakupy",
        clearCart: "Wyczyść koszyk"
    };
    var l = t;
    e.default = l
});
//# sourceMappingURL=IncompatibleMarketModal.js.map