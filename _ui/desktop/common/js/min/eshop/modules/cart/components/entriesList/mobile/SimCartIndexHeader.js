define(["exports", "react", "lodash"], function(e, a, s) {
    "use strict";

    function n(a) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), s = babelHelpers.interopRequireDefault(s);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getText",
            value: function(e) {
                switch (e) {
                    case 0:
                        return "Pierwsza";
                    case 1:
                        return "Druga";
                    case 2:
                        return "Trzecia";
                    case 3:
                        return "Czwarta";
                    case 4:
                        return "Piąta";
                    case 5:
                        return "Szósta";
                    case 6:
                        return "Siódma";
                    case 7:
                        return "Ósma";
                    case 8:
                        return "Dziewiąta";
                    case 9:
                        return "Dziesiąta";
                    case 10:
                        return "Jedenasta";
                    case 11:
                        return "Dwunasta";
                    case 12:
                        return "Trzynasta";
                    case 13:
                        return "Czternasta";
                    case 14:
                        return "Piętnasta";
                    case 15:
                        return "Szesnasta";
                    case 16:
                        return "Siedemnasta";
                    case 17:
                        return "Osiemnasta";
                    case 18:
                        return "Dziewiętnasta";
                    case 19:
                        return "Dwudziesta";
                    case 29:
                        return "Trzydziesta";
                    case 39:
                        return "Czterdziesta";
                    case 49:
                        return "Pięćdziesiąta";
                    case 59:
                        return "Sześćdziesiąta";
                    case 69:
                        return "Siedemdziesiąta";
                    case 79:
                        return "Osiemdziesiąta";
                    case 89:
                        return "Dziewięćdziesiąta";
                    default:
                        return null
                }
            }
        }, {
            key: "index2Text",
            value: function(e) {
                if (e < 20 || e % 10 == 9) return this.getText(e);
                var t = e % 10;
                return this.getText(e - t - 1) + " " + s.default.lowerFirst(this.getText(t))
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("p", {
                    className: "h3 " + this.props.className
                }, this.index2Text(this.props.simIndex), " karta")
            }
        }]), r
    }(a.Component);
    e.default = t
});
//# sourceMappingURL=SimCartIndexHeader.js.map