define(["exports", "react", "prop-types", "react-redux", "../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/components/MenuItem", "eshop/modules/cart/components/entriesList/simfree/SimfreeMenuItem"], function(e, n, t, r, s, a, i, l) {
    "use strict";

    function u(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l);

    function o(e) {
        return n.default.createElement(p, {
            marketContext: e.marketContext,
            menuHeader: e.menuHeader,
            addItemIcon: e.addItemIcon,
            menuItems: e.menuItems,
            entries: e.entries
        })
    }
    o.propTypes = {
        menuHeader: t.PropTypes.string.isRequired,
        addItemIcon: t.PropTypes.string.isRequired,
        menuItems: t.PropTypes.array.isRequired,
        entries: t.PropTypes.arrayOf(t.PropTypes.object)
    };
    var p = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "createHeader",
            value: function() {
                return null != this.props.entries && 0 < this.props.entries.length ? n.default.createElement(c, {
                    menuHeader: this.props.menuHeader
                }) : null
            }
        }, {
            key: "_checkAvailabilityRestriction",
            value: function(e, r) {
                return (!e.type || "B2B" != e.type || "B2B" == this.props.marketContext) && !e.availabilityRestrictions.map(function(e) {
                    var t = e.menuItemType;
                    return 0 === t.indexOf("_") && (t = t.slice(1)), r.filter(function(e) {
                        return t === e.bundleType
                    }).length > e.cartBundleNumberLimit
                }).some(function(e) {
                    return e
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props.entries && 0 < this.props.entries.length ? this.props.menuItems.filter(function(e) {
                        return t._checkAvailabilityRestriction(e, t.props.entries)
                    }) : this.props.menuItems;
                return e && 0 < e.length ? n.default.createElement("div", {
                    id: "menu",
                    className: "g-gray1-bg u-padding-l"
                }, n.default.createElement(d, {
                    className: "u-padding-top-l"
                }, n.default.createElement(m, null, this.createHeader(), e.map(function(e) {
                    return t._renderMenuItem(e)
                })))) : null
            }
        }, {
            key: "_renderMenuItem",
            value: function(e) {
                var t = e.type;
                return "B2B" == this.props.marketContext ? "B2B" === t ? n.default.createElement(l.default, babelHelpers.extends({
                    key: e.label,
                    addItemIcon: this.props.addItemIcon
                }, e, {
                    entries: e.entries
                })) : null : "VK_SIMFREE" == t ? n.default.createElement(l.default, babelHelpers.extends({
                    key: e.label,
                    addItemIcon: this.props.addItemIcon
                }, e, {
                    entries: e.entries
                })) : "B2B" !== t ? n.default.createElement(i.default, babelHelpers.extends({
                    key: e.label,
                    addItemIcon: this.props.addItemIcon
                }, e, {
                    entries: e.entries
                })) : void 0
            }
        }]), r
    }(n.Component);
    p.propTypes = {
        menuHeader: t.PropTypes.string.isRequired,
        addItemIcon: t.PropTypes.string.isRequired,
        menuItems: t.PropTypes.arrayOf(t.PropTypes.object).isRequired,
        entries: t.PropTypes.arrayOf(t.PropTypes.object)
    };
    var c = function(e) {
        return n.default.createElement("h3", {
            className: "h2 u-no-spacing"
        }, e.menuHeader)
    };
    c.propTypes = {
        menuHeader: t.PropTypes.string.isRequired
    };
    var d = function(e) {
            return n.default.createElement("div", {
                className: "l-full-row " + (e.className ? e.className : "")
            }, e.children)
        },
        m = function(e) {
            return n.default.createElement("div", {
                className: "l-page-row u-small-padding-left u-small-padding-right " + (e.className ? e.className : "")
            }, e.children)
        },
        f = (0, r.connect)(function(e) {
            return {
                entries: (0, s.getCartEntries)(e),
                marketContext: (0, a.getMarketContext)(e)
            }
        }, null)(o);
    e.default = f
});
//# sourceMappingURL=AddOffersMenu.js.map