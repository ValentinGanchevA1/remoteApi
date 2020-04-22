define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent"], function(e, n, t, r, a) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = s(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "showLowerInstallments",
            value: function() {
                return this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (0 != this.props.monthlyPricePresentation.main.price || 0 != this.props.monthlyPricePresentation.main.priceWithoutVouchers)
            }
        }, {
            key: "render",
            value: function() {
                return n.default.createElement("div", null, n.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, n.default.createElement("table", {
                    className: "u-table-fixed"
                }, n.default.createElement("tbody", null, n.default.createElement("tr", null, n.default.createElement(r.default, {
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    terminalName: this.props.title
                }), n.default.createElement("td", null, n.default.createElement("p", {
                    className: "h2"
                }, this.props.title), this.props.description && n.default.createElement("div", null, this.props.description), this.props.msisdn && n.default.createElement("div", null, "nowy numer ", this.transformMsisdn(this.props.msisdn), " ", n.default.createElement("a", {
                    onClick: this.onMsisdnChangeClicked
                }, "Zmień")), n.default.createElement(a.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                })))))), n.default.createElement("div", null, this.showLowerInstallments() && n.default.createElement("table", {
                    className: "u-table-fixed"
                }, n.default.createElement("tbody", null, n.default.createElement("tr", null, n.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top" + (this.props.lowerInstallmentsClicked ? " u-border-r" : "")
                }, n.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.lowerInstallmentsClicked
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))))), n.default.createElement("table", {
                    className: "u-table-fixed"
                }, n.default.createElement("tbody", {
                    style: {
                        display: "none"
                    }
                }, n.default.createElement("tr", null, n.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-border u-no-border-l"
                }, n.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onChangeClicked
                }, "Zmień")), n.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-border u-no-border-r"
                }, n.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onDetailsClicked
                }, "Szczegóły")))))))
            }
        }]), l
    }(t.default);
    e.default = l
});
//# sourceMappingURL=MultiCartItemHeaderMobileComponent.js.map