define(["exports", "react", "react-redux"], function(e, n, t) {
    "use strict";

    function r(n) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement("table", {
                    role: "presentation",
                    class: "opl-checkout-header u-small-padding-s"
                }, n.default.createElement("tbody", null, n.default.createElement("tr", null, n.default.createElement("td", {
                    colspan: "4",
                    class: "u-small-no-padding-b"
                }, n.default.createElement("div", null, n.default.createElement("b", null, this.props.entry.monthlyPrices && this.props.entry.monthlyPrices[0] ? this.props.entry.monthlyPrices[0].gross : ""), " ", n.default.createElement("b", null, this.props.entry.planName), " (Nr telefonu ", this.props.entry.msisdn, ", ", this.props.entry.loyaltyLengthDescription, ")", this._renderTerminalInfo(), this._renderEuroSetInfo())), this.props.deposit ? n.default.createElement("td", null, n.default.createElement("span", {
                    className: "u-right"
                }, this.props.deposit, " zł")) : null))), this.props.deposit ? n.default.createElement("div", null, n.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, n.default.createElement("div", {
                    className: "o-separator"
                })), n.default.createElement("div", {
                    className: "l-col l-col-3 u-left u-no-padding-left u-text-left"
                }, n.default.createElement("span", null, n.default.createElement("b", null, "Powód: "))), n.default.createElement("span", null, this._renderReasonSection())) : null, n.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, n.default.createElement("div", {
                    className: "o-separator u-no-padding-all"
                })))
            }
        }, {
            key: "_renderReasonSection",
            value: function() {
                var l = this;
                return n.default.createElement("div", {
                    className: "l-col l-col-12 u-padding-all-m u-no-padding-r u-no-padding-l"
                }, this.props.reasons ? this.props.reasons.map(function(e, t) {
                    if (l.props.entry.bundleNo === e.bundleNo) return n.default.createElement("div", null, n.default.createElement("span", null, e.code))
                }) : null)
            }
        }, {
            key: "_renderTerminalInfo",
            value: function() {
                return n.default.createElement("div", null, this.props.entry && this.props.entry.terminals ? this.props.entry.terminals.filter(function(e) {
                    return !!e
                }).map(function(e, t) {
                    return n.default.createElement("div", {
                        key: t
                    }, n.default.createElement("b", null, "".concat(e.name).concat(e.colorDefinition ? ", " + e.colorDefinition.name : "")))
                }) : null)
            }
        }, {
            key: "_renderEuroSetInfo",
            value: function() {
                var l = this;
                return n.default.createElement("div", null, this.props.entry && this.props.entry.euroSets ? this.props.entry.euroSets.filter(function(e) {
                    return !!e
                }).map(function(e, t) {
                    return n.default.createElement("div", {
                        key: t
                    }, n.default.createElement("b", null, e.name, " (", l.euroSetColors(e), ")"))
                }) : null)
            }
        }, {
            key: "euroSetColors",
            value: function(t) {
                var l = "",
                    n = 0;
                return t && t.setElements && t.setElements.map(function(e) {
                    n += 1, l = l + e.color + (n !== t.setElements.length ? "," : "")
                }), l
            }
        }]), l
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.default = l
});
//# sourceMappingURL=CustomerVerificationProductLineComponent.js.map