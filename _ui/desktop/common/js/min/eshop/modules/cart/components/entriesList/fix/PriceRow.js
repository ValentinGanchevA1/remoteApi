define(["exports", "react", "prop-types", "../../../../core/components/ui/Tooltip"], function(e, i, t, l) {
    "use strict";

    function n(n) {
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
    }), e.Price = e.default = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t), l = babelHelpers.interopRequireDefault(l);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = n(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                OPL.UI.loadModules(document.getElementById(this.props.id), [{
                    path: "core/modules/tooltips",
                    options: {
                        side: "top",
                        maxWidth: 300,
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover"
                    }
                }])
            }
        }, {
            key: "render",
            value: function() {
                return i.default.createElement("div", {
                    id: this.props.id,
                    className: "l-row u-animate-height js-layout-fixer-group-1 js-height-sensitive-element opl-messages--notifications-image u-no-padding"
                }, i.default.createElement("div", {
                    className: "l-col l-col-6 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, this.props.price.oneTimeCost && i.default.createElement(o, {
                    price: this.props.price.oneTimeCost,
                    net: this.props.net
                })), i.default.createElement("div", {
                    className: "l-col l-col-6 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, this.props.price.monthlyCosts && 0 < this.props.price.monthlyCosts.length && this.props.price.monthlyCosts[0] && i.default.createElement(o, {
                    price: this.props.price.monthlyCosts[0],
                    tooltip: this.props.tooltip,
                    net: this.props.net,
                    priceSteps: this.props.price.monthlyCosts.length && 1 < this.props.price.monthlyCosts.length
                })))
            }
        }]), r
    }(i.Component);
    (e.default = r).propTypes = {
        price: t.default.shape({
            oneTimeCost: t.default.shape({
                gross: t.default.string,
                net: t.default.string,
                currency: t.default.string
            }),
            monthlyCosts: t.default.arrayOf(t.default.shape({
                gross: t.default.string,
                net: t.default.string,
                currency: t.default.string,
                monthFrom: t.default.number,
                monthTo: t.default.number
            }))
        }),
        id: t.default.string.isRequired,
        tooltip: t.default.string
    }, r.defaultProps = {
        tooltip: "Abonament zawiera rabaty za e-fakturę 5,01 zł i zgodę marketingową 5,01 zł. Zgody te możesz wyrazić na kolejnym kroku zamówienia. Jeśli ich nie wyrazisz rabaty nie będą naliczone."
    };
    var o = function(e) {
        var t = e.net ? e.price.net.split(",") : e.price.gross.split(","),
            r = t[0],
            n = t[1] ? t[1].split(" ")[0] : "00",
            o = !!e.price.monthFrom || !!e.price.monthTo;
        return i.default.createElement("div", null, i.default.createElement("span", {
            className: "u-font-xlarge u-font-bold u-no-spacing"
        }, r), i.default.createElement("span", {
            className: "u-font-large u-font-bold u-no-spacing"
        }, ",", n), i.default.createElement("span", {
            className: "u-font-large u-font-bold u-spacing-left-s"
        }, "".concat(e.price.currency).concat(e.net ? " + VAT" : "")), e.price.installments && e.price.monthTo && e.priceSteps && i.default.createElement("span", {
            className: "u-font-large u-font-bold u-no-spacing u-small-hide"
        }, " x ", e.price.monthTo, " raty"), o && i.default.createElement("span", {
            className: "u-large-hide u-medium-hide u-font-large u-font-bold u-no-spacing"
        }, "/mies."), e.tooltip && i.default.createElement(l.default, null, e.tooltip))
    };
    (e.Price = o).propTypes = {
        price: t.default.shape({
            gross: t.default.string.isRequired,
            currency: t.default.string.isRequired,
            monthFrom: t.default.number,
            monthTo: t.default.number,
            installments: t.default.bool
        }),
        tooltip: t.default.string
    }
});
//# sourceMappingURL=PriceRow.js.map