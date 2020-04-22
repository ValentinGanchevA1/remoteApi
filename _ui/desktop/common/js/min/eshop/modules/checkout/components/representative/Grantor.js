define(["exports", "react", "../../../core/components/hoc/LabeledInput", "./common"], function(e, t, l, n) {
    "use strict";

    function s(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), l = babelHelpers.interopRequireDefault(l);
    var a = function(e) {
        babelHelpers.inherits(r, e);
        var a = s(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), (t = a.call(this, e)).ordinals = ["Pierwsza", "Druga", "Trzecia", "Czwarta", "Piąta", "Szósta", "Siódma", "Ósma", "Dziewiąta", "Dziesiąta"], t
        }
        return babelHelpers.createClass(r, [{
            key: "getLabel",
            value: function() {
                return this.props.useLabel ? this.ordinals[this.props.index] + " osoba udzielająca pełnomocnictwa" : null
            }
        }, {
            key: "renderHeader",
            value: function() {
                return this.props.useLabel && t.default.createElement("div", {
                    className: "u-spacing-top-xl"
                }, t.default.createElement("div", {
                    className: "o-separator u-spacing-m"
                }), t.default.createElement("div", {
                    className: "u-position-relative"
                }, t.default.createElement("p", {
                    className: "h5 u-inline-block u-small-w-75 u-medium-w-75"
                }, this.getLabel()), this.props.remove && t.default.createElement("a", {
                    href: "#",
                    className: "u-inline-block u-right u-small-right",
                    onClick: this.remove.bind(this)
                }, "Usuń")))
            }
        }, {
            key: "remove",
            value: function(e) {
                e.preventDefault(), this.props.remove(this.props.index)
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("div", {
                    className: "u-padding-l u-spacing-top-l"
                }, this.renderHeader(), t.default.createElement("div", {
                    className: "l-row"
                }, t.default.createElement("div", {
                    className: "l-col l-col-12"
                }, t.default.createElement(l.default, (0, n.getCommonPropsForInput)(this.props, "firstName", "grantor", {
                    label: "Imię"
                }))), t.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, t.default.createElement(l.default, (0, n.getCommonPropsForInput)(this.props, "lastName", "grantor", {
                    label: "Nazwisko"
                })))))
            }
        }]), r
    }(t.Component);
    e.default = a
});
//# sourceMappingURL=Grantor.js.map