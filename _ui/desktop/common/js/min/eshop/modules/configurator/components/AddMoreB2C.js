define(["exports", "react"], function(e, a) {
    "use strict";

    function r(a) {
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
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "onClick",
            value: function(e) {
                e.preventDefault(), this.props.onClick()
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("div", {
                    className: "l-page-row "
                }, a.default.createElement("div", {
                    className: "g-white1-bg u-padding-all-l"
                }, a.default.createElement("div", {
                    className: "u-position-relative"
                }, a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-8 l-col-medium-10 l-col-6 "
                }, a.default.createElement("div", {
                    className: "o-icon-list"
                }, a.default.createElement("div", {
                    className: "o-icon-list__item"
                }, a.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle u-small-hide"
                }, a.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--sim"
                })), a.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, a.default.createElement("p", {
                    className: "h5 u-no-margin"
                }, "Dobierz kartę SIM (kolejne karty SIM", a.default.createElement("span", {
                    className: "u-padding-left-s g-brand2-c"
                }, "taniej o 20 zł/mies."), a.default.createElement("span", null, ")")))))), a.default.createElement("div", {
                    className: "l-col l-col-small-2 l-col-medium-2 l-col-6  small-offset-by-2"
                }, a.default.createElement("a", {
                    href: "#",
                    "aria-label": "Dobierz kolejną kartę SIM",
                    className: "opl-product-addlink u-right u-small-right",
                    onClick: this.onClick.bind(this)
                }))))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    e.default = t
});
//# sourceMappingURL=AddMoreB2C.js.map