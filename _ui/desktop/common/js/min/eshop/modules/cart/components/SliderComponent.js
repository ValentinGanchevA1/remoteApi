define(["exports", "react", "prop-types", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/cart/selectors", "eshop/modules/cart/actions/resources"], function(e, r, t, s, i, a, n) {
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
    }), e.default = void 0;
    var l = function(e) {
        babelHelpers.inherits(s, e);
        var t = o(s);

        function s(e) {
            var r;
            return babelHelpers.classCallCheck(this, s), r = t.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "state", {
                showMinError: !1,
                showMaxError: !1,
                maxPrice: !1,
                minPrice: !1,
                count: !1,
                countIn: !1,
                fromInput: !0,
                diff: 0
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "getTaxFactor", function(e) {
                return e.tax ? e.tax / 100 + 1 : 1
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "getDevice", function(e) {
                return !!e && !!e.terminals && 0 < e.terminals.length && e.terminals[0] || !!e.euroSets && 0 < e.euroSets.length && e.euroSets[0]
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(r), "onChange", function(e) {
                var t = e.target.value.toString().replace(",", "."),
                    s = /^\d*(\.\d{0,2}|\d?)$/;
                s.test(t) && r.setState({
                    showMinError: !1,
                    showMaxError: !1,
                    fromInput: !0,
                    count: t,
                    countIn: r.getInstallment(parseFloat(t), r.props)
                })
            }), r
        }
        return babelHelpers.createClass(s, [{
            key: "componentWillReceiveProps",
            value: function(e) {
                var t = this.getDevice(e.entry),
                    s = this.getMaxPrice(t, e.showNetPrices),
                    r = this.isVoucher(t),
                    i = this.getDevice(this.props.entry),
                    a = this.getOffset(i, this.getTaxFactor(i), e),
                    n = this.getTaxFactor(t),
                    o = this.getOffset(t, n, e),
                    l = this.getMinPrice(t, e.showNetPrices, o),
                    c = this.isVoucher(this.getDevice(this.props.entry));
                if (0 == this.state.count || s !== this.state.maxPrice || l !== this.state.minPrice || c !== r || a != o || this.props.open != e.open || this.props.showNetPrices !== e.showNetPrices || n !== this.state.taxFactor) {
                    var u = Number(parseFloat(l) + o).toFixed(2);
                    this.setState({
                        maxPrice: s,
                        minPrice: l,
                        count: u,
                        countIn: this.getInstallment(u, e),
                        fromInput: !0,
                        diff: o,
                        taxFactor: n
                    })
                }
            }
        }, {
            key: "onMouseDown",
            value: function(e) {
                this.setState({
                    fromInput: !1,
                    count: e.target.value,
                    countIn: this.getInstallment(e.currentTarget.value, this.props),
                    showMinError: !1,
                    showMaxError: !1
                })
            }
        }, {
            key: "onMouseUp",
            value: function(e) {
                this.setState({
                    fromInput: !1,
                    count: e.target.value,
                    countIn: this.getInstallment(e.target.value, this.props),
                    showMinError: !1,
                    showMaxError: !1
                })
            }
        }, {
            key: "onSliderChange",
            value: function(e) {
                this.setState({
                    fromInput: !1,
                    count: e.target.value,
                    showMinError: !1,
                    showMaxError: !1
                })
            }
        }, {
            key: "onButtonClick",
            value: function() {
                if (isNaN(parseFloat(this.state.count)) || parseFloat(this.state.count) < this.state.minPrice) this.setState({
                    showMinError: !0
                });
                else if (parseFloat(this.state.count) > this.state.maxPrice) this.setState({
                    showMaxError: !0
                });
                else {
                    this.setState({
                        diff: this.state.count - this.state.minPrice
                    });
                    var e = 0;
                    e = this.props.cartIsNet && !this.props.showNetPrices ? ((this.state.count - this.state.minPrice) / this.state.taxFactor).toFixed(2) : (this.state.count - this.state.minPrice).toFixed(2), this.props.postLowerInstallments(this.props.bundleNo, e, this.props.showNetPrices ? "B2B" : "B2C")
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.renderMonthlyPrices(),
                    t = this.renderError();
                return r.default.createElement("div", {
                    className: ""
                }, r.default.createElement("h3", {
                    className: "opl-modal-title-space u-margin-l"
                }, "Obniż ratę"), r.default.createElement("p", {
                    className: "u-margin-l"
                }, "Możesz obniżyć wysokość raty, płacąc więcej na start:"), r.default.createElement("div", {
                    className: "l-row u-margin-l"
                }, r.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, r.default.createElement("div", {
                    className: "slide-container"
                }, r.default.createElement("input", {
                    className: "opl-range",
                    type: "range",
                    step: "0.01",
                    min: this.state.minPrice,
                    value: this.state.fromInput ? parseFloat(this.state.count) : void 0,
                    defaultValue: this.state.minPrice,
                    max: this.state.maxPrice,
                    id: "myRange",
                    onChange: this.onSliderChange.bind(this),
                    onMouseDown: this.state.fromInput ? this.onMouseDown.bind(this) : void 0,
                    onMouseUp: this.onMouseUp.bind(this),
                    onTouchEnd: this.onMouseUp.bind(this),
                    onTouchStart: this.onMouseUp.bind(this)
                }), r.default.createElement("div", {
                    className: "u-display__flex-wrap u-justify-content_space-between u-padding-top-s"
                }, r.default.createElement("p", {
                    className: "g-gray5-c"
                }, this.state.minPrice.toString().replace(".", ","), " zł"), r.default.createElement("p", {
                    className: "g-gray5-c"
                }, this.state.maxPrice.toString().replace(".", ","), " zł"))))), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-5 "
                }, r.default.createElement("div", {
                    className: "opl-floating-label-line u-margin-m o-floating-label",
                    id: "mod-core/modules/floating-label-2"
                }, r.default.createElement("input", {
                    type: "text",
                    id: "input01",
                    name: "input01",
                    value: this.state.count.toString().replace(".", ","),
                    className: "is-not-empty",
                    onChange: this.onChange.bind(this)
                }), r.default.createElement("label", {
                    className: "label o-floating-label__placeholder o-floating-label__p-2",
                    htmlFor: "input01"
                }, "Opłata na start"), r.default.createElement("span", {
                    className: "opl-floating-label-line--border"
                })), t), r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-5 l-col-4  u-small-margin-m"
                }, r.default.createElement("table", null, r.default.createElement("caption", {
                    className: "u-acc-hide"
                }, "Miesięczna rata"), r.default.createElement("thead", null, r.default.createElement("tr", {
                    className: "u-acc-hide"
                }, r.default.createElement("th", {
                    className: "um-table-60"
                }), r.default.createElement("th", {
                    className: "um-table-20"
                }, "Miesięczna rata"))), r.default.createElement("tbody", null, r.default.createElement("tr", null, r.default.createElement("td", {
                    className: "p um-table-60 u-padding-top-s u-padding-s g-gray6-c u-font-small"
                }, "Miesięczna rata")), !!e && e)))), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4  large-offset-by-8 medium-offset-by-8"
                }, r.default.createElement("button", {
                    onClick: this.onButtonClick.bind(this),
                    className: "opl-btn opl-btn--primary opl-btn--medium o-btn u-w-100"
                }, r.default.createElement("span", {
                    className: "opl-ripple-box"
                }, r.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), !!this.props.descriptions && this.props.descriptions.lowerInstallmentsSubmitButton || "Zatwierdź"))))
            }
        }, {
            key: "renderError",
            value: function() {
                if (this.state.showMinError || this.state.showMaxError) {
                    var e = this.state.showMinError ? !!this.props.descriptions && this.props.descriptions.lowerInstallmentsMinError || "Opłata na start nie może być niższa niż w ofercie" : !!this.props.descriptions && this.props.descriptions.lowerInstallmentsMaxError || "Opłata na start nie może być wyższa niż w ofercie";
                    return r.default.createElement("div", {
                        className: "opl-msg opl-msg--context opl-msg--error u-margin-top-s",
                        "aria-live": "rude"
                    }, r.default.createElement("div", null, r.default.createElement("p", {
                        role: "alert",
                        className: "u-margin-left"
                    }, e)))
                }
            }
        }, {
            key: "renderMonthlyPrices",
            value: function() {
                return this.state.countIn && 3 < this.state.countIn.length ? this.state.countIn[2] != this.state.countIn[3] ? [this.step(1, this.state.countIn[1], this.state.countIn[0]), this.step(this.state.countIn[1] + 1, null, this.state.countIn[2]), this.step(this.state.countIn[4] + 1, this.state.countIn[5], this.state.countIn[3])] : [this.step(1, this.state.countIn[1], this.state.countIn[0]), this.step(this.state.countIn[4], this.state.countIn[5], this.state.countIn[3])] : this.state.countIn[0] != this.state.countIn[1] ? [this.step(1, null, this.state.countIn[0]), this.step(2, this.state.countIn[2], this.state.countIn[1])] : this.step(1, this.state.countIn[2], this.state.countIn[0])
            }
        }, {
            key: "step",
            value: function(e, t, s) {
                return !isNaN(s) && parseFloat(this.state.count) >= parseFloat(this.state.minPrice) && parseFloat(this.state.count) <= parseFloat(this.state.maxPrice) && r.default.createElement("tr", null, r.default.createElement("td", {
                    className: "u-padding-s"
                }, e, !!t && "-" + t, " mies."), r.default.createElement("td", {
                    className: "u-font-bold u-small-padding u-padding-s u-text-right"
                }, !!s && s.toString().replace(".", ","), " zł"))
            }
        }, {
            key: "getOffset",
            value: function(e, t, s) {
                return !!e && (s.cartIsNet && !s.showNetPrices ? e.priceOffset * t : e.priceOffset)
            }
        }, {
            key: "getMinPrice",
            value: function(e, t, s) {
                if (!e) return !1;
                if (e && null == e.voucherNames) return t ? !!e && e.checkoutPrice.netPriceWithoutVouchers.toFixed(2) : !!e && e.checkoutPrice.priceWithoutVouchers.toFixed(2);
                var r = this.isOneTimeVoucher(e, t, s);
                return r ? r ? t ? !!e && (e.checkoutPrice.netPrice - this.state.diff).toFixed(2) : !!e && (e.checkoutPrice.price - this.state.diff).toFixed(2) : !!e && e.checkoutPrice.price.toFixed(2) : t ? !!e && e.checkoutPrice.netPriceWithoutVouchers.toFixed(2) : !!e && e.checkoutPrice.priceWithoutVouchers.toFixed(2)
            }
        }, {
            key: "isOneTimeVoucher",
            value: function(e, t, s) {
                return !1 !== s && t ? s + e.checkoutPrice.netPriceWithoutVouchers != e.checkoutPrice.netPrice : s + e.checkoutPrice.priceWithoutVouchers != e.checkoutPrice.price
            }
        }, {
            key: "isVoucher",
            value: function(e) {
                return !!e && null != e.voucherNames
            }
        }, {
            key: "getMaxPrice",
            value: function(e, t) {
                return e && null == e.voucherNames ? t ? !!e && (Number(this.getMonthlyPrice(e.monthlyPrices, "netPriceWithoutVouchers")) + e.checkoutPrice.netPriceWithoutVouchers).toFixed(2) : !!e && (Number(this.getMonthlyPrice(e.monthlyPrices, "priceWithoutVouchers")) + e.checkoutPrice.priceWithoutVouchers).toFixed(2) : t ? !!e && (Number(this.getMonthlyPrice(e.monthlyPrices, "netPrice")) + e.checkoutPrice.netPrice).toFixed(2) : !!e && (Number(this.getMonthlyPrice(e.monthlyPrices, "price")) + e.checkoutPrice.price).toFixed(2)
            }
        }, {
            key: "getMonthlyPrice",
            value: function(e, t) {
                var s = 0;
                return e.forEach(function(e) {
                    s += (e.monthTo - e.monthFrom + 1) * e[t]
                }), s
            }
        }, {
            key: "getInstallment",
            value: function(e, t) {
                var s = t.entry,
                    r = t.showNetPrices,
                    i = !!s && !!s.terminals && 0 < s.terminals.length && s.terminals[0] || !!s.euroSets && 0 < s.euroSets.length && s.euroSets[0];
                if (i) {
                    var a, n, o, l = this.getMaxPrice(i, r),
                        c = Number(l - e).toFixed(2);
                    if (i.monthlyPrices && i.monthlyPrices[1] && 0 == i.monthlyPrices[0].price) {
                        var u = i.monthlyPrices[0].monthTo,
                            h = i.monthlyPrices[1].monthTo,
                            m = i.monthlyPrices[1].monthFrom,
                            p = i.monthlyPrices[i.monthlyPrices.length - 1].monthTo - i.monthlyPrices[0].monthTo;
                        return a = this.calculateCompensation(c, p), n = Math.floor(100 * c / p) / 100, o = Number(n + parseFloat(a)).toFixed(2), [Number(0).toFixed(2), u, o, Number(n).toFixed(2), m, h]
                    }
                    var d = i.monthlyPrices[i.monthlyPrices.length - 1].monthTo;
                    return a = this.calculateCompensation(c, d), n = Math.floor(100 * c / d) / 100, [o = Number(n + parseFloat(a)).toFixed(2), Number(n).toFixed(2), d]
                }
                return !1
            }
        }, {
            key: "calculateCompensation",
            value: function(e, t) {
                var s = Number(100 * e).toFixed(0) % t;
                return Number(s / 100).toFixed(2)
            }
        }]), s
    }((r = babelHelpers.interopRequireWildcard(r)).Component);
    e.default = l
});
//# sourceMappingURL=SliderComponent.js.map