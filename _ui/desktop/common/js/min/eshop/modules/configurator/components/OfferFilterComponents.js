define(["exports", "react", "eshop/components/OraCommonComponents", "./ClientContextCheckbox", "prop-types", "../../core/enum/SalesChannel"], function(e, s, a, o, l, c) {
    "use strict";

    function i(s) {
        return function() {
            var e, l = babelHelpers.getPrototypeOf(s);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(l, arguments, t)
            } else e = l.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c);
    var t = {
            selectedProcessValue: l.default.string,
            processTypeData: l.default.arrayOf(l.default.shape({
                value: l.default.string,
                description: l.default.string
            })),
            selectProcessCallback: l.default.func,
            selectedLoyaltyLengthValue: l.default.oneOfType([l.default.string, l.default.number]),
            loyaltyLengthData: l.default.arrayOf(l.default.shape({
                value: l.default.oneOfType([l.default.string, l.default.number]),
                description: l.default.string
            })),
            selectLoyaltyLengthCallback: l.default.func
        },
        r = function(e) {
            babelHelpers.inherits(t, e);
            var l = i(t);

            function t() {
                return babelHelpers.classCallCheck(this, t), l.apply(this, arguments)
            }
            return babelHelpers.createClass(t, [{
                key: "render",
                value: function() {
                    var e = "TAB" === this.props.switchType && this.props.showSwitch ? "l-col-6" : "l-col-4";
                    return s.default.createElement("div", {
                        className: "l-page-row u-small-box-shadow" + ("TAB" === this.props.switchType ? " u-large-padding-top-l u-medium-padding-l u-small-padding-l" : " u-padding-all-l")
                    }, this.props.headerText && s.default.createElement("h1", null, this.props.headerText), s.default.createElement("div", {
                        className: "l-row"
                    }, "TAB" === this.props.switchType && this.props.showSwitch && s.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-12 l-col-small-12"
                    }, s.default.createElement(a.SwitchButtons, {
                        options: this.props.switchConf,
                        onClick: this.props.onClickSwitch,
                        switchType: this.props.switchType
                    })), s.default.createElement("div", {
                        className: "TAB" === this.props.switchType && this.props.showSwitch ? "l-col l-col-small-12 l-col-medium-12 l-col-8" : ""
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12" + ("TAB" === this.props.switchType ? " l-col-8" : " l-col-5")
                    }, s.default.createElement("div", {
                        className: "l-row u-medium-padding-top-l u-small-padding-top-l"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 u-small-padding-l u-medium-no-padding-left " + (1 < this.props.processTypeData.length ? "" : "u-padding-top-m ") + e
                    }, s.default.createElement(a.OraSelect, {
                        options: this.props.processTypeData,
                        id: "processTypeFilter",
                        selected: this.props.selectedProcessValue,
                        onChange: this.props.selectProcessCallback,
                        className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                        isFeedbackParam: "true",
                        selectClassName: "opl-input--size-m"
                    })), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 " + e
                    }, s.default.createElement(a.OraSelect, {
                        options: this.props.loyaltyLengthData,
                        id: "loyaltyFilter",
                        selected: this.props.selectedLoyaltyLengthValue,
                        onChange: this.props.selectLoyaltyLengthCallback,
                        className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                        selectClassName: "opl-input--size-m",
                        singleOptionClassName: "u-small-no-padding-left"
                    })))), s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12" + ("TAB" === this.props.switchType ? " l-col-4" : " l-col-7")
                    }, s.default.createElement("div", {
                        className: "l-row u-medium-padding-top-l"
                    }, this.props.channels.sales === c.default.WWW && s.default.createElement("div", {
                        className: "l-col l-col-small-12 " + ("TAB" === this.props.switchType ? "l-col-medium-4 l-col-12" : "l-col-medium-6 l-col-5") + " u-padding-top u-small-padding-top-l"
                    }, s.default.createElement(o.default, babelHelpers.extends({}, this.props.clientContextCheckboxConfig, {
                        channels: this.props.channels,
                        alignClass: " u-small-left u-large-right u-small-no-padding-left"
                    }))), this.props.showSwitch && "TAB" !== this.props.switchType && s.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-7  u-small-padding-top-l"
                    }, s.default.createElement(a.SwitchButtons, {
                        options: this.props.switchConf,
                        onClick: this.props.onClickSwitch,
                        switchType: this.props.switchType
                    })))))))
                }
            }]), t
        }(s.Component);
    (e.default = r).propTypes = t
});
//# sourceMappingURL=OfferFilterComponents.js.map