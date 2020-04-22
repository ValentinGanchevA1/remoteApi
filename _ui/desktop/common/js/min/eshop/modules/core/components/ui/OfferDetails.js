define(["exports", "react", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/TooltipFromHtml", "eshop/modules/core/components/ui/Price", "eshop/modules/core/utils/StylesUtils", "../../constants/OfferTypeEnum"], function(e, r, i, t, a, o, n) {
    "use strict";

    function p(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.DetailsRaw = e.DetailsLargeSimfreeRaw = e.DetailsSmallRaw = e.DetailsSmall = e.DetailsMedium = e.DetailsLarge = e.Details = void 0, r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n);
    var l = function(e) {
            babelHelpers.inherits(s, e);
            var l = p(s);

            function s(e) {
                var t;
                return babelHelpers.classCallCheck(this, s), (t = l.call(this, e)).details = null, t.preprocess(), t
            }
            return babelHelpers.createClass(s, [{
                key: "makeReactElement",
                value: function(e) {
                    return t.default.conditionalRender(e)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.preprocess()
                }
            }, {
                key: "preprocess",
                value: function() {
                    var t = this,
                        e = this.props.data || this.props.details;
                    e && e.map && (this.details = e.map(function(e) {
                        return {
                            reactKey: e.key,
                            key: t.makeReactElement(e.key),
                            value: t.makeReactElement(e.value)
                        }
                    }))
                }
            }, {
                key: "getPrices",
                value: function(e) {
                    if (!this.props.proposition) return {
                        basePrice: 0,
                        bonusPrice: 0
                    };
                    var t = this.props,
                        l = t.basePrice,
                        s = t.bonusPrice,
                        a = e ? "originalNetPrice" : "originalGrossPrice";
                    if (this.props.proposition.payments) l = i.default.getPaymentsForRole(this.props.proposition.payments, "").basePrice[a], s = i.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).basePrice[a];
                    else {
                        if (this.props.proposition.monthlyPrices && 0 < this.props.proposition.monthlyPrices.length) return a = e ? "priceNet" : "priceGross", s = this.props.proposition.monthlyPrices[this.props.proposition.monthlyPrices.length - 1][a], l = this.props.proposition.monthlyPrices[this.props.proposition.monthlyPrices.length - 1][a], this.props.proposition.monthlyOldPrice && this.props.proposition.monthlyOldPrice[a] && (l = this.props.proposition.monthlyOldPrice[a]), {
                            basePrice: l,
                            bonusPrice: s
                        };
                        this.props.proposition.planTotalMonthlyPrices && 0 < this.props.proposition.planTotalMonthlyPrices.length && (s = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1][a], l = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1][a], this.props.proposition.monthlyOldPrice && this.props.proposition.monthlyOldPrice[a] && (l = this.props.proposition.monthlyOldPrice[a]))
                    }
                    return this.props.proposition.entryType && this.props.proposition.entryType === n.default.CONVERGENT && this.props.proposition.planTotalMonthlyPrices && 0 < this.props.proposition.planTotalMonthlyPrices.length && (l = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1].gross, s = this.props.proposition.planTotalMonthlyPrices[this.props.proposition.planTotalMonthlyPrices.length - 1].gross), {
                        basePrice: l,
                        bonusPrice: s
                    }
                }
            }, {
                key: "getModalContent",
                value: function() {
                    if (!this.props.proposition) return null;
                    var e = this.props.propositionName || this.props.proposition && this.props.proposition.planName,
                        t = this.getPrices(this.props.showNet),
                        l = t.basePrice,
                        s = t.bonusPrice;
                    return [r.default.createElement("div", {
                        key: "large_" + this.props.clientContext + (this.props.proposition.rateplanId || this.props.proposition.productCode),
                        className: "u-small-hide"
                    }, r.default.createElement("div", {
                        className: "o-modal-content u-padding-all-xl"
                    }, r.default.createElement("table", {
                        className: "u-table-fixed"
                    }, r.default.createElement("caption", {
                        className: "u-text-left u-padding-l"
                    }, r.default.createElement("p", {
                        className: "h3 u-spacing-l"
                    }, e), r.default.createElement(a.default, {
                        key: "large",
                        basePrice: l,
                        bonusPrice: s
                    })), r.default.createElement("tfoot", null, r.default.createElement("tr", null, r.default.createElement("td", {
                        colSpan: "2",
                        className: "u-small-block u-padding-top-xl"
                    }, r.default.createElement("p", {
                        className: "u-font-small",
                        dangerouslySetInnerHTML: {
                            __html: this.props.proposition.internetLegal
                        }
                    })))), f(this.details, o.StylesUtils.large)))), r.default.createElement("div", {
                        key: "small" + this.props.clientContext + (this.props.proposition.rateplanId || this.props.proposition.productCode),
                        className: "u-hide u-small-block"
                    }, r.default.createElement("div", {
                        className: "o-modal-content"
                    }, r.default.createElement("table", {
                        className: "u-table-fixed"
                    }, r.default.createElement("caption", {
                        className: "u-text-left u-padding-xl"
                    }, r.default.createElement("p", {
                        className: "h3 u-spacing-top-m"
                    }, e), r.default.createElement(a.default, {
                        key: "large",
                        basePrice: l,
                        bonusPrice: s
                    })), r.default.createElement("tfoot", null, r.default.createElement("tr", null, r.default.createElement("td", {
                        colSpan: "2",
                        className: "u-small-block u-padding-top-xl"
                    }, r.default.createElement("p", {
                        className: "u-font-small",
                        dangerouslySetInnerHTML: {
                            __html: this.props.proposition.internetLegal
                        }
                    })))), f(this.details, o.StylesUtils.small))))]
                }
            }]), s
        }(r.default.Component),
        s = function(e) {
            babelHelpers.inherits(l, e);
            var t = p(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "render",
                value: function() {
                    return r.default.createElement("div", {
                        className: "opl-box__details opl-box__details--large"
                    }, r.default.createElement("div", {
                        className: "opl-box__details__content"
                    }, r.default.createElement("div", {
                        className: "opl-box__details__content__inner"
                    }, r.default.createElement("div", null, r.default.createElement("p", {
                        className: "h4 u-spacing-l"
                    }, this.props.labels.header), f(this.details, o.StylesUtils.large), r.default.createElement("div", {
                        className: "u-spacing-top-l"
                    }, r.default.createElement("a", {
                        href: "#",
                        onClick: this.props.select
                    }, this.props.labels.select))))))
                }
            }]), l
        }(e.Details = l);
    e.DetailsLarge = s;
    var c = function(e) {
        babelHelpers.inherits(l, e);
        var t = p(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "opl-box__details opl-box__details--medium"
                }, r.default.createElement("div", {
                    className: "opl-box__details__content"
                }, r.default.createElement("div", {
                    className: "opl-box__details__content__inner"
                }, r.default.createElement("div", null, r.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.labels.header), f(this.details, o.StylesUtils.medium), r.default.createElement("div", {
                    className: "u-spacing-top-l"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: this.props.select
                }, this.props.labels.select))))))
            }
        }]), l
    }(l);
    e.DetailsMedium = c;
    var u = function(e) {
        babelHelpers.inherits(l, e);
        var t = p(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "opl-box__details opl-box__details--small"
                }, r.default.createElement("div", {
                    className: "opl-box__details__content"
                }, r.default.createElement("p", {
                    className: "h3 u-spacing-l"
                }, this.props.labels.header), r.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.rateplanName), f(this.details, o.StylesUtils.small)))
            }
        }]), l
    }(l);
    e.DetailsSmall = u;
    var d = function(e) {
        babelHelpers.inherits(l, e);
        var t = p(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", null, f(this.details, o.StylesUtils.small))
            }
        }]), l
    }(l);
    e.DetailsSmallRaw = d;
    var h = function(e) {
        babelHelpers.inherits(l, e);
        var t = p(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", null, this.getModalContent())
            }
        }]), l
    }(l);
    e.DetailsLargeSimfreeRaw = h;
    var m = function(e) {
        babelHelpers.inherits(l, e);
        var t = p(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", null, this.getModalContent())
            }
        }]), l
    }(l);

    function f(e, t) {
        if (!e || 0 === e.length) return null;
        var l = t && t.tbody ? {
                className: t.tbody
            } : {},
            s = 0;
        e = e.map(function(e) {
            return e.i = s++, e
        });

        function a(e, t) {
            return 0 === e.i ? t.first : t.rest
        }
        return r.default.createElement("tbody", l, e.map(function(e) {
            return r.default.createElement("tr", {
                className: a(e, t.tr),
                key: e.reactKey
            }, r.default.createElement("th", {
                className: a(e, t.th)
            }, e.key), r.default.createElement("td", {
                className: a(e, t.td)
            }, e.value))
        }))
    }
    e.DetailsRaw = m
});
//# sourceMappingURL=OfferDetails.js.map