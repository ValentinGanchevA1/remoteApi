define(["exports", "react", "prop-types", "react-redux", "../selectors", "eshop/modules/configurator/actions/filters", "../actions/cart", "eshop/modules/configurator/selectors/filters", "../../configurator/components/MarketContextCheckboxView"], function(e, n, t, r, l, a, s, o, i) {
    "use strict";

    function u(l) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = u(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "componentWillMount",
                value: function() {
                    this.props.resetPropositionSimCount()
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement(f, this.props)
                }
            }]), r
        }(n.Component),
        f = function(e) {
            var t = {
                    __html: e.headerLabel
                },
                r = {
                    __html: e.emptyCartLabel
                },
                l = {
                    __html: e.description
                };
            e.descriptions.netSwitchValue, e.descriptions.grossSwitchValue;
            return e.hasMiniCartData ? void 0 !== e.entries && null != e.entries && 0 < e.entries.length ? n.default.createElement(d, null, n.default.createElement(p, null, n.default.createElement("div", {
                className: "l-row"
            }, n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
            }, n.default.createElement("h2", {
                className: "h1 u-inline",
                dangerouslySetInnerHTML: t
            })), (e.showNetSwitch || e.isB2B) && n.default.createElement("div", {
                className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
            }, n.default.createElement(i.default, null))))) : n.default.createElement(d, null, n.default.createElement(p, null, n.default.createElement("h2", {
                className: "h1 u-inline",
                dangerouslySetInnerHTML: r
            }), n.default.createElement("p", {
                className: "u-padding-top-l",
                dangerouslySetInnerHTML: l
            }))) : null
        };
    c.propTypes = {
        emptyCartLabel: t.default.string,
        headerLabel: t.default.string.isRequired,
        description: t.default.string,
        entries: t.default.arrayOf(t.default.object),
        showNetSwitch: t.default.bool,
        resetPropositionSimCount: t.default.func
    };
    var d = function(e) {
        return n.default.createElement("div", {
            className: "l-full-row " + (e.className || "")
        }, e.children)
    };
    d.propTypes = {
        className: t.default.string,
        children: t.default.element
    };
    var p = function(e) {
        return n.default.createElement("div", {
            className: "l-page-row " + (e.className || "")
        }, e.children)
    };
    p.propTypes = {
        className: t.default.string,
        children: t.default.node
    };
    var m = (0, r.connect)(function(e) {
        return {
            entries: (0, l.getCartEntries)(e),
            hasMiniCartData: (0, l.getHasMiniCartData)(e),
            showNetPrices: (0, l.getPriceIsNet)(e),
            isB2B: "B2B" === (0, o.getMarketContext)(e)
        }
    }, function(t) {
        return {
            setPriceIsNet: function(e) {
                return t((0, s.setPriceIsNet)(e))
            },
            resetPropositionSimCount: function() {
                t((0, a.propositionListCountSet)(1)), t((0, a.clearPropositionListSoftBundleGroup)())
            }
        }
    })(c);
    e.default = m
});
//# sourceMappingURL=CartHeader.js.map