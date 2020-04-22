define(["exports", "react", "../../../core/components/ui/Datepicker", "./Grantor", "eshop/utils/OnlineUtils", "../../../core/components/hoc/ErrorRow"], function(e, n, a, o, l, i) {
    "use strict";

    function s(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = s(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "removeFactory",
            value: function() {
                if (this.props.minCount && this.props.data.length > this.props.minCount) return this.props.remove
            }
        }, {
            key: "onDateChange",
            value: function(e) {
                this.props.setGrantingDate(e.value)
            }
        }, {
            key: "getDateProps",
            value: function() {
                return {
                    id: "granting-date",
                    floatingLabel: "Data udzielenia pełnomocnictwa",
                    onChange: this.onDateChange.bind(this),
                    value: this.props.grantingDate,
                    options: {
                        disabledWeekDays: [],
                        maxDate: l.default.toDateStr(new Date)
                    }
                }
            }
        }, {
            key: "render",
            value: function() {
                var r = this;
                return !!this.props.data.length && n.default.createElement("div", null, n.default.createElement("div", {
                    className: "h4"
                }, 1 < this.props.data.length ? this.props.titlePlural : this.props.title), n.default.createElement(i.default, {
                    errors: this.props.grantingDateErrors
                }, n.default.createElement(a.DatePicker, this.getDateProps())), this.props.data.map(function(e, t) {
                    return n.default.createElement(o.default, babelHelpers.extends({}, e, {
                        key: t,
                        index: t,
                        onChange: r.props.onChange,
                        remove: r.removeFactory(),
                        useLabel: 1 < r.props.data.length
                    }))
                }))
            }
        }]), r
    }(n.Component);
    e.default = t
});
//# sourceMappingURL=Grantors.js.map