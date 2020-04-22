define(["exports", "react", "prop-types", "./OraEmployeeListEntry"], function(e, a, t, n) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.call(this)
        }
        return babelHelpers.createClass(l, [{
            key: "radioChanged",
            value: function(e) {
                this.props.onSelectionChanged(e.target.value)
            }
        }, {
            key: "render",
            value: function() {
                var l = this;
                return a.default.createElement("table", {
                    className: "opl-table opl-table-basic"
                }, a.default.createElement("thead", null, a.default.createElement("tr", null, a.default.createElement("th", {
                    className: "u-font-bold",
                    style: {
                        width: 10
                    }
                }), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "ID"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Nazwisko"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Imię"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Login"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kod BSCS"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Lokalizacja"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kanał"), a.default.createElement("th", {
                    className: "u-font-bold"
                }, "Kanał SIS"))), a.default.createElement("tbody", null, this.props.employees.map(function(e, t) {
                    return a.default.createElement(n.default, {
                        employee: e,
                        radioChanged: l.radioChanged.bind(l),
                        key: l.props.listId + "-" + t
                    })
                })))
            }
        }]), l
    }(a.default.Component);
    (e.default = l).propTypes = {
        listId: t.default.string.isRequired
    }, l.defaultProps = {
        employees: [],
        listId: "default",
        onSelectionChanged: function() {}
    }
});
//# sourceMappingURL=OraEmployeeList.js.map