define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/OraSwitcherSelect", "../../../components/InfoComponent", "../../core/constants/OfferTypeEnum", "../../core/enum/SalesChannel", "../../core/enum/SoftBundleGroup"], function(e, o, t, n, u, i, d, p) {
    "use strict";

    function l(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), d = babelHelpers.interopRequireDefault(d), p = babelHelpers.interopRequireDefault(p);
    var a = function(e) {
        babelHelpers.inherits(r, e);
        var s = l(r);

        function r() {
            var e;
            babelHelpers.classCallCheck(this, r);
            for (var t = arguments.length, l = new Array(t), a = 0; a < t; a++) l[a] = arguments[a];
            return e = s.call.apply(s, [this].concat(l)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "renderConditionalInfo", function(e) {
                var t = e.channels,
                    l = e.offerType,
                    a = e.softBundleGroup,
                    s = e.hasLove;
                if (t.sales === d.default.WWW && l === i.default.VOICE_LDF && a === p.default.LDF) return o.default.createElement(u.ConditionalInfoComponent, {
                    condition: s,
                    type: "blueInfo",
                    color: "black",
                    bgColor: "white",
                    title: "Pamiętaj!",
                    padding: "noPadding",
                    text: "Jesteś w Love dla Firm - dzięki temu korzystasz ze specjalnych rabatów. Jeśli chcesz korzystać z nich dalej - musisz mieć aktywną umowę na internet dla biura.",
                    altText: "Love dla firm to pakiet obejmujący abonament komórkowy i internet stacjonarny w Orange dzięki czemu koszt pierwszej karty jest od 35,00 zł + VAT, a drugą kartę dostaniesz za 0 zł."
                })
            }), e
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return this.props.offerType ? o.default.createElement("div", {
                    className: "l-full-row g-gray1-bg"
                }, o.default.createElement("div", {
                    className: "l-page-row u-padding-l "
                }, o.default.createElement("div", {
                    className: " " + (this.props.selectedOfferType === i.default.DATA ? " u-border-top" : " u-padding-m u-padding-top")
                }, this.props.descriptions.processSelectHeader && this.props.offerType === i.default.DATA && o.default.createElement("h2", null, this.props.descriptions.processSelectHeader), o.default.createElement("div", {
                    className: "u-medium-hide u-small-hide u-padding-top-s"
                }, o.default.createElement(n.default, {
                    key: "processTypeFilter",
                    options: this.props.processTypeData,
                    disabledOptions: this.props.disabledProcesses,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    isFeedbackParam: "true",
                    selectClassName: "opl-input--size-m"
                })), o.default.createElement("div", {
                    className: "u-large-hide"
                }, o.default.createElement(n.default, {
                    key: "processTypeFilter",
                    options: this.props.processTypeData,
                    disabledOptions: this.props.disabledProcesses,
                    id: "processTypeFilter",
                    selected: this.props.selectedProcessValue,
                    onChange: this.props.selectProcessCallback,
                    className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
                    isFeedbackParam: "true",
                    selectClassName: "opl-input--size-m"
                }))), this.renderConditionalInfo(this.props), this.props.selectedProcessValue && [o.default.createElement(c, babelHelpers.extends({
                    key: "loyaltySelectHeader"
                }, this.props.descriptions)), o.default.createElement(f, babelHelpers.extends({
                    key: "loyaltySelectDiv"
                }, this.props))])) : null
            }
        }]), r
    }(o.Component);
    e.default = a;
    var s = {
        selectedProcessValue: t.default.string,
        processTypeData: t.default.arrayOf(t.default.shape({
            value: t.default.string,
            description: t.default.string
        })),
        selectProcessCallback: t.default.func,
        selectedLoyaltyLengthValue: t.default.oneOfType([t.default.string, t.default.number]),
        loyaltyLengthData: t.default.arrayOf(t.default.shape({
            value: t.default.oneOfType([t.default.string, t.default.number]),
            description: t.default.string
        })),
        selectLoyaltyLengthCallback: t.default.func,
        softBundleGroup: t.default.string,
        contractRole: t.default.string,
        offerType: t.default.string,
        channels: t.default.object,
        hasLove: t.default.bool,
        hasODF: t.default.bool,
        descriptions: t.default.objectOf(t.default.string),
        selectedOfferType: t.default.objectOf(i.default)
    };
    a.propTypes = s;
    var c = function(e) {
        var t = e.loyaltySelectHeader;
        return o.default.createElement("div", {
            className: "u-border-top u-no-margin u-padding-l u-padding-top-m"
        }, t && o.default.createElement("h3", null, t))
    };
    c.propTypes = {
        loyaltySelectHeader: t.default.string
    };
    var f = function(e) {
        var t = e.loyaltyLengthData,
            l = e.selectedLoyaltyLengthValue,
            a = e.selectLoyaltyLengthCallback;
        return o.default.createElement(n.default, {
            key: "loyaltyFilter",
            options: t,
            id: "loyaltyFilter",
            selected: l,
            onChange: a,
            className: "u-small-left u-left u-w-100 u-small-w-auto u-medium-w-100 u-small-w-100",
            selectClassName: "opl-input--size-m",
            singleOptionClassName: "u-small-no-padding-left",
            renderSingleOption: !0
        })
    };
    f.propTypes = {
        loyaltyLengthData: t.default.array,
        selectedLoyaltyLengthValue: t.default.number,
        selectLoyaltyLengthCallback: t.default.func.isRequired
    }
});
//# sourceMappingURL=OfferFilterComponentsSwitcherView.js.map