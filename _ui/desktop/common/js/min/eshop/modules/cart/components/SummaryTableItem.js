define(["exports", "react", "prop-types", "lodash"], function(e, n, t, r) {
    "use strict";

    function o(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r);
    var i = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.props.tooltip && OPL.UI.loadModules(document.getElementById(this.props.id), [{
                    path: "core/modules/tooltips",
                    options: {
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover"
                    }
                }])
            }
        }, {
            key: "render",
            value: function() {
                var e = "u-font-bold g-brand2-c u-no-margin",
                    t = " td-null",
                    r = this.props.monthlyPrice || 0 === this.props.monthlyPrice && this.props.monthFrom ? n.default.createElement("span", {
                        className: e
                    }, this.props.monthlyPrice.toFixed(2).replace(".", ",") + " " + this.props.currency) : this.renderNoPrice("u-font-bold g-brand2-c"),
                    o = this.props.oneTimePrice && void 0 === this.props.monthFrom && null != this.props.deposit ? this.getOneTimePriceWithDeposit() : this.props.oneTimePrice,
                    i = this.props.oneTimePrice ? n.default.createElement("span", {
                        className: e
                    }, o) : this.renderNoPrice("u-font-bold g-brand2-c");
                return n.default.createElement("tr", {
                    id: this.props.id + "-summaryItem",
                    className: "u-small-padding-l u-small-no-margin-top u-border-bottom"
                }, n.default.createElement("th", {
                    id: this.props.id,
                    className: "u-w-auto u-small-padding-top-l u-no-padding-left"
                }, n.default.createElement("span", {
                    className: "u-margin-right u-inline u-font-normal u-small-font-bold"
                }, this.props.header), this.props.tooltip && n.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), this.props.tooltip && n.default.createElement("p", {
                    className: "o-tooltip__content"
                }, " ", this.props.tooltip)), n.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal u-small-padding" + (this.props.oneTimePrice ? "" : t)
                }, i), n.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal  u-small-no-padding" + (this.props.monthlyPrice ? "" : t)
                }, r))
            }
        }, {
            key: "getOneTimePriceWithDeposit",
            value: function() {
                if (!this.props.deposit || !this.props.oneTimePrice) return this.props.oneTimePrice;
                var e = this.props.oneTimePrice.toString().replace(",", ".").replace("zł", ""),
                    t = this.props.deposit.toString().replace(",", "."),
                    r = (parseFloat(e) + parseFloat(t)).toString().replace(".", ",");
                return 1 === r.split(",").length ? r + ",00 zł" : r + " zł"
            }
        }, {
            key: "renderNoPrice",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : void 0;
                return n.default.createElement("div", {
                    className: "u-inline"
                }, n.default.createElement("span", {
                    className: t,
                    "aria-hidden": "true"
                }, "—"), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, "brak"))
            }
        }]), r
    }(n.Component);
    (e.default = i).propTypes = {
        header: t.default.string.isRequired,
        monthlyHeader: t.default.string.isRequired,
        oneTimeHeader: t.default.string.isRequired,
        monthlyPrice: t.default.number,
        oneTimePrice: t.default.string,
        highlighted: t.default.bool,
        tooltip: t.default.string,
        id: t.default.string
    }, i.defaultProps = {
        highlighted: !1
    }
});
//# sourceMappingURL=SummaryTableItem.js.map