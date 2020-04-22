define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/DataLayerUtils", "./../utils/CartUtils", "./VASPackagesPresentationComponent"], function(e, l, t, a, n, r, i, o) {
    "use strict";

    function p(l) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o);
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = p(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "getMsisdnDescriptionForProcess",
            value: function() {
                return r.default.processTypeToMsisdnDescriptionMap[this.props.processType]
            }
        }, {
            key: "getMsisdn",
            value: function() {
                return this.props.msisdnVerificationData ? this.props.msisdnVerificationData.msisdn : this.props.msisdn
            }
        }, {
            key: "showChangeSimButton",
            value: function() {
                return this.props.onMsisdnChangeClicked && this.props.changeAllowed
            }
        }, {
            key: "showLowerInstallments",
            value: function() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (0 != this.props.monthlyPricePresentation.main.price || 0 != this.props.monthlyPricePresentation.main.priceWithoutVouchers)
            }
        }, {
            key: "render",
            value: function() {
                return l.default.createElement("div", null, l.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, l.default.createElement("table", {
                    className: "u-table-fixed"
                }, l.default.createElement("tbody", null, l.default.createElement("tr", null, l.default.createElement(a.default, {
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    terminalName: this.props.title
                }), l.default.createElement("td", null, l.default.createElement("p", {
                    className: "h2"
                }, this.props.title), this.props.loyaltyLengthDescription && l.default.createElement("p", {
                    className: "u-small-padding-m"
                }, " ", this.props.loyaltyLengthDescription, " "), this.props.instalmentLengthDescription && l.default.createElement("p", null, " ", this.props.instalmentLengthDescription, " "), this.props.processType && this.props.editable && [this.props.simCard && (0, i.createSimCardDescription)(this.props.simCard), this.getMsisdnDescriptionForProcess() + this.transformMsisdn(this.getMsisdn() ? this.getMsisdn() : "") + " ", this.showChangeSimButton.apply(this) && l.default.createElement("a", {
                    href: "#",
                    key: "msisdnChangeClicked_key",
                    onClick: (t = this.props.onMsisdnChangeClicked, function(e) {
                        e.preventDefault(), t(e)
                    }),
                    "aria-label": "zmień numer telefonu lub rodzaj karty sim"
                }, "Zmień")], l.default.createElement(o.default, {
                    className: this.props.editable ? "u-small-padding-top-m" : "",
                    editable: this.props.editable,
                    onVasPackagesChangeClicked: this.props.changePackages,
                    vases: this.props.vases,
                    bundleCode: this.props.bundleCode
                }), l.default.createElement(n.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                })))))), l.default.createElement("div", null, this.showLowerInstallments() && l.default.createElement("table", {
                    className: "u-table-fixed"
                }, l.default.createElement("tbody", null, l.default.createElement("tr", null, l.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top" + (this.props.lowerInstallmentsClicked ? " u-border-r" : "")
                }, l.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.lowerInstallmentsClicked
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))))), l.default.createElement("table", {
                    className: "u-table-fixed"
                }, l.default.createElement("tbody", null, l.default.createElement("tr", null, this.props.onChangeClicked && l.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top u-no-border-l"
                }, l.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onChangeClicked
                }, "Zmień")), this.props.onDetailsClicked && l.default.createElement("td", {
                    className: "u-padding-top-m u-padding-m u-padding-left-l u-padding-right-l u-text-center u-small-border-top" + (this.props.onChangeClicked ? " u-border-r" : "")
                }, l.default.createElement("a", {
                    className: "u-text-decoration-none",
                    onClick: this.props.onDetailsClicked
                }, "Szczegóły")))))));
                var t
            }
        }]), s
    }(t.default);
    e.default = s
});
//# sourceMappingURL=MultiCartItemHeaderMobileComponent.js.map