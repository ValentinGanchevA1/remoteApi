define(["exports", "react"], function(e, r) {
    "use strict";

    function a(r) {
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

        function l() {
            return babelHelpers.classCallCheck(this, l), t.call(this)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("tr", null, r.default.createElement("td", null, r.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, r.default.createElement("input", {
                    type: "radio",
                    name: this.props.radioName,
                    value: this.props.employee.sisId,
                    defaultChecked: this.props.checked === this.props.employee.sisId,
                    onChange: this.props.radioChanged
                }), r.default.createElement("span", {
                    className: "o-ci"
                }))), r.default.createElement("td", null, this.props.employee.sisId), r.default.createElement("td", null, this.props.employee.lastName), r.default.createElement("td", null, this.props.employee.firstName), r.default.createElement("td", null, this.props.employee.loginOtsa), r.default.createElement("td", null, this.props.employee.fullBscs), r.default.createElement("td", null, this.props.employee.location), r.default.createElement("td", null, this.props.employee.salesChannelName), r.default.createElement("td", null, this.props.employee.sisChannelDescription))
            }
        }]), l
    }((r = babelHelpers.interopRequireDefault(r)).default.Component);
    (e.default = t).defaultProps = {
        employee: {},
        radioName: "selectedEmployee",
        radioChanged: function() {}
    }
});
//# sourceMappingURL=OraEmployeeListEntry.js.map