define(["exports", "react"], function(e, l) {
    "use strict";

    function a(l) {
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
    }), e.MobileContract = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return l.default.createElement("li", {
                    className: "u-margin"
                }, l.default.createElement("div", {
                    className: "l-row"
                }, l.default.createElement("div", {
                    className: "l-col l-col-4 "
                }, l.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle"
                }, l.default.createElement("span", {
                    className: "g-icon--device-smartphone g-icon g-icon--before g-icon--s",
                    "aria-hidden": "true"
                })), l.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, l.default.createElement("p", {
                    className: "u-font-small g-gray5-c"
                }, "Telefon komórkowy"), l.default.createElement("p", {
                    className: "u-font-bold"
                }, this.props.data.serviceNumber)))))
            }
        }]), r
    }((l = babelHelpers.interopRequireWildcard(l)).Component);
    e.MobileContract = t
});
//# sourceMappingURL=MobileContract.js.map