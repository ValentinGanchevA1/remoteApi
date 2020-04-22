define(["exports", "react"], function(e, l) {
    "use strict";

    function n(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "renderMessage",
            value: function() {
                var e = this.props.rejectionReasons.map(function(e, t) {
                    return l.default.createElement("span", {
                        key: t
                    }, e, " ")
                });
                return e.push(l.default.createElement("span", {
                    key: -1
                }, "Usuń produkt z koszyka.")), e
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("tr", null, l.default.createElement("td", {
                    colSpan: 3
                }, l.default.createElement("div", {
                    className: "opl-msg opl-msg--box opl-msg--error"
                }, l.default.createElement("div", {
                    className: "o-icon-list"
                }, l.default.createElement("div", {
                    className: "o-icon-list__item"
                }, l.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, l.default.createElement("div", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--error g-icon--before g-icon--s"
                })), l.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, l.default.createElement("p", null, l.default.createElement("b", null, this.renderMessage.bind(this)()))))))))
            }
        }]), r
    }((l = babelHelpers.interopRequireWildcard(l)).Component);
    e.default = t
});
//# sourceMappingURL=MultiCartItemErrorComponent.js.map