define(["exports", "react", "./SummaryTable", "./SummaryTableHeader", "./SummaryDetails", "./SummaryDetailsForBundles", "./Utils", "eshop/components/OraCommonComponents"], function(e, o, n, s, l, a, p, i) {
    "use strict";

    function u(o) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                this.props.fetchCart(), this.props.fetchMiniCart()
            }
        }, {
            key: "getProps",
            value: function() {
                return {
                    monthlyHeader: this.props.descriptions.monthlyHeader,
                    oneTimeHeader: this.props.descriptions.oneTimeHeader,
                    checkoutPriceTooltipContent: this.props.descriptions.checkoutPriceTooltipContent || "płatność przy odbiorze przesyłki",
                    firstMonthPriceTooltipContent: this.props.descriptions.firstMonthPriceTooltipContent || "płatności uwzględnione w pierwszej fakturze",
                    entryType: this.props.entryType,
                    parentCmp: this.props.component + "-summaryTableHeader"
                }
            }
        }, {
            key: "render",
            value: function() {
                return this.props.hasCartData ? o.default.createElement(p.HideWhenCartIsEmpty, {
                    className: "l-full-row l-page-row g-white1-bg u-small-padding-top-l u-padding-l-xl"
                }, o.default.createElement("table", {
                    role: "presentation",
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-no-border"
                }, o.default.createElement(s.SummaryTableHeader, babelHelpers.extends({
                    title: this.props.descriptions.title
                }, this.getProps())), o.default.createElement(i.OraLoader, {
                    loading: this.props.updating,
                    parentId: "summary-loader"
                }, o.default.createElement(c, babelHelpers.extends({}, this.props, {
                    getProps: this.getProps()
                }))))) : null
            }
        }]), r
    }(o.Component);
    e.default = t;
    var c = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return o.default.createElement("div", {
                    id: "SummaryTableAndDetails"
                }, o.default.createElement(n.default, babelHelpers.extends({
                    title: this.props.descriptions.title,
                    id: this.props.component + "-table",
                    renderHeader: !1
                }, this.props.getProps)), this.props.showNewSummaryDetails ? o.default.createElement(a.default, babelHelpers.extends({
                    rootComponent: this.props.component,
                    id: this.props.component + "-details",
                    title: "Szczegóły opłat"
                }, this.props.getProps)) : o.default.createElement(l.default, babelHelpers.extends({
                    rootComponent: this.props.component,
                    id: this.props.component + "-details",
                    title: "Szczegóły opłat"
                }, this.props.getProps)))
            }
        }]), r
    }(o.Component)
});
//# sourceMappingURL=MulticartSummaryComponent.js.map