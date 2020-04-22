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
            key: "renderVal",
            value: function(e) {
                return null != e && 0 < e.length && !0 === e[0] ? l.default.createElement("td", null, l.default.createElement("span", {
                    className: "g-icon g-icon--valid g-icon--xs-s"
                })) : null != e && 0 < e.length && !0 !== e[0] ? l.default.createElement("td", null, l.default.createElement("span", null, e[0])) : (null != e && e.length, l.default.createElement("td", null, l.default.createElement("span", null, "-")))
            }
        }, {
            key: "render",
            value: function() {
                for (var t = this, e = [], r = 0; r < 3 - this.props.row.valueObject.length; r++) e.push(l.default.createElement("td", null, l.default.createElement("span", null, "-")));
                return l.default.createElement("tr", {
                    className: this.props.row.hasDifferences && this.props.markDiff ? "g-gray2-bgc" : ""
                }, l.default.createElement("th", null, this.props.row.attributeName), this.props.row.valueObject && this.props.row.valueObject.map(function(e) {
                    return t.renderVal(e.value)
                }), e)
            }
        }]), r
    }((l = babelHelpers.interopRequireWildcard(l)).Component);
    e.default = t
});
//# sourceMappingURL=ComparatorRowComponent.js.map