define(["exports", "react", "react-redux", "../../../configurator/selectors/filters", "../../constants/OfferTypeEnum", "eshop/modules/configurator/selectors/metaData", "../../selectors", "../../../configurator/components/MarketContextCheckboxView"], function(e, l, t, r, a, s, n, o) {
    "use strict";

    function c(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o);
    var i = function(e) {
            babelHelpers.inherits(r, e);
            var t = c(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "addFilterStateIfNeeded",
                value: function(e) {
                    var t = "";
                    return null !== this.props.filterState && "" !== this.props.filterState && void 0 !== this.props.filterState && (t = (e.includes("?") ? "&" : "?") + this.props.filterState), t
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.marketContextPrefixUrl + s.getProductListUrl;
                    return this.props.isDuet && (e += "?isDuet=true"), l.default.createElement("div", {
                        className: "l-full-row"
                    }, l.default.createElement("div", {
                        className: "l-page-row u-spacing-top-m"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-8 l-col-medium-12 l-col-small-12"
                    }, l.default.createElement("span", {
                        className: "u-left"
                    }, this.props.selectedOfferType === a.default.CONVERGENT ? l.default.createElement("a", {
                        href: "javascript:history.back()",
                        className: "u-text-decoration-none"
                    }, this.props.linkName) : l.default.createElement("a", {
                        href: e + this.addFilterStateIfNeeded(e),
                        className: "u-text-decoration-none"
                    }, this.props.linkName))), l.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-12 l-col-small-12 u-right "
                    }, l.default.createElement("span", {
                        className: "u-right"
                    }, l.default.createElement(o.default, null))))))
                }
            }]), r
        }(l.Component),
        u = (0, t.connect)(function(e) {
            return {
                selectedOfferType: (0, r.getSelectedOfferType)(e),
                marketContextPrefixUrl: (0, s.getMarketContextPrefixUrl)(e),
                isDuet: (0, n.isDuet)(e)
            }
        })(i);
    e.default = u
});
//# sourceMappingURL=ProductDetailsBackToListComponent.js.map