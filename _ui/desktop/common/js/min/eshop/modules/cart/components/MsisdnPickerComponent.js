define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils"], function(e, r, t, n, l) {
    "use strict";

    function o(r) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), l = babelHelpers.interopRequireDefault(l);
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = o(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {
                this.props.fetch && this.props.fetchMsisdns()
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                e.fetch && !this.props.fetch && this.props.fetchMsisdns()
            }
        }, {
            key: "renderList",
            value: function() {
                var t = this;
                return [].concat(babelHelpers.toConsumableArray(this.props.msisdns.filter(function(e) {
                    return e.number === t.props.entry.msisdn
                })), babelHelpers.toConsumableArray(this.props.msisdns.filter(function(e) {
                    return e.number !== t.props.entry.msisdn
                }).sort(function(e, t) {
                    return e.status < t.status ? -1 : e.status > t.status ? 1 : 0
                }))).map(function(e, t) {
                    return r.default.createElement("li", {
                        className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l",
                        key: e.number
                    }, r.default.createElement(n.OraSimpleRadio, {
                        name: "msisdn",
                        className: "o-radio opl-radio",
                        value: e.number,
                        onChange: this.props.changeMsisdn.bind(this, e.number),
                        checked: this.props.msisdn == e.number,
                        text: l.default.transformMsisdn(e.number),
                        readOnly: "LOCAL" === e.status && e.number !== this.props.entry.msisdn
                    }))
                }.bind(this))
            }
        }, {
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "l-row u-margin-top-l"
                }, r.default.createElement("div", {
                    className: "l-col l-col-12"
                }, r.default.createElement("h3", {
                    className: "h4 u-margin-l"
                }, "Zmień numer"), r.default.createElement("fieldset", null, r.default.createElement("legend", {
                    className: "u-acc-hide"
                }, "wybierz numer z listy"), r.default.createElement("ul", {
                    className: "l-row"
                }, this.renderList()))))
            }
        }]), s
    }(r.Component);
    s.defaultProps = {
        msisdns: []
    }, s.propTypes = {
        msisdn: t.PropTypes.string,
        msisdns: t.PropTypes.arrayOf(t.PropTypes.shape({
            number: t.PropTypes.string,
            status: t.PropTypes.string
        })),
        fetchMsisdns: t.PropTypes.func,
        changeMsisdn: t.PropTypes.func,
        fetch: t.PropTypes.bool
    };
    var a = s;
    e.default = a
});
//# sourceMappingURL=MsisdnPickerComponent.js.map