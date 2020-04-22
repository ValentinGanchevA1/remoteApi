define(["exports", "react"], function(e, n) {
    "use strict";

    function a(n) {
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
        var t = a(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "doContinue",
            value: function() {
                this.props.authorizationSuccess(!0, null)
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement("h5", null, "Czy chcesz przy nich zostać?"), n.default.createElement("p", null, "Jeśli tak - przeniesiemy Cię na stronę z ofertą Love dla Firm."), n.default.createElement("div", {
                    className: "l-row u-padding-top-l"
                }, n.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
                }, n.default.createElement("button", {
                    id: "continue",
                    onClick: this.doContinue.bind(this),
                    className: "o-btn opl-btn opl-btn--secondary u-w-100"
                }, "  Nie, chcę przedłużyć sam abonament")), n.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12 u-padding-top-l"
                }, n.default.createElement("button", {
                    id: "stay",
                    onClick: this.props.stayLove,
                    className: "o-btn opl-btn opl-btn--primary u-w-100 u-padding-top-l u-padding-l "
                }, "Tak, chcę zostać w Love dla Firm"))))
            }
        }]), l
    }((n = babelHelpers.interopRequireDefault(n)).default.Component);
    e.default = t
});
//# sourceMappingURL=StayLoveSectionComponent.js.map