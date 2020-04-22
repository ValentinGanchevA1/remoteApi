define(["exports", "react", "prop-types"], function(e, n, t) {
    "use strict";

    function r(n) {
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
    }), e.default = void 0;
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "handleOnClick",
            value: function(e, t, l) {
                l && l(e)
            }
        }, {
            key: "render",
            value: function() {
                var e = void 0 === this.props.entries ? [] : this.props.entries;
                return (this.props.availabilityRestrictions ? this.props.availabilityRestrictions.filter(function(t) {
                    return e.filter(function(e) {
                        return e.bundleType === t.menuItemType
                    }).length > t.cartBundleNumberLimit
                }) : []).length <= 0 ? n.default.createElement("div", {
                    className: "u-padding-top-l"
                }, n.default.createElement(i, null, n.default.createElement(a, {
                    link: this.props.link,
                    label: this.props.label,
                    onClickHandlerProp: this.props.itemClickedHandler,
                    linkClicked: this.handleOnClick
                }, n.default.createElement("div", {
                    className: "u-position-relative"
                }, n.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right"
                }, n.default.createElement(s, null, n.default.createElement(o, {
                    icon: this.props.icon
                }), n.default.createElement(c, {
                    label: this.props.label
                }), n.default.createElement(u, {
                    link: this.props.link,
                    label: this.props.label,
                    onClickHandlerProp: this.props.itemClickedHandler,
                    linkClicked: this.handleOnClick,
                    disabled: !0
                }))))))) : null
            }
        }]), l
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.default = l;
    var i = function(e) {
            return n.default.createElement("div", {
                className: "g-white1-bg u-box-shadow"
            }, e.children)
        },
        a = function(t) {
            return n.default.createElement("a", {
                href: t.link || "#",
                onClick: function(e) {
                    return t.linkClicked(e, t.link, t.onClickHandlerProp)
                },
                "aria-label": t.label
            }, n.default.createElement("div", {
                className: "u-box-shadow--s u-box-shadow-hover"
            }, t.children))
        },
        s = function(e) {
            return n.default.createElement("table", {
                className: "u-table-fixed"
            }, n.default.createElement("tbody", null, n.default.createElement("tr", null, e.children)))
        },
        o = function(e) {
            return n.default.createElement("td", {
                className: "opl-checkout__icon__cell"
            }, e.icon && n.default.createElement("span", {
                className: "g-icon g-icon--only g-icon--" + e.icon.toLowerCase().split("_").join("-")
            }))
        },
        c = function(e) {
            return n.default.createElement("td", {
                className: "u-padding-top-l u-padding-l u-padding-right-l"
            }, e.label)
        },
        u = function(t) {
            return n.default.createElement("td", {
                className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
            }, t.disabled ? n.default.createElement("span", {
                className: "opl-product-addlink u-right u-small-right"
            }) : n.default.createElement("a", {
                href: t.link || "#",
                className: "opl-product-addlink u-right u-small-right",
                onClick: function(e) {
                    return t.linkClicked(e, t.link, t.onClickHandlerProp)
                },
                "aria-label": t.label
            }))
        };
    l.propTypes = {
        icon: t.PropTypes.string.isRequired,
        label: t.PropTypes.string.isRequired,
        link: t.PropTypes.string.isRequired,
        availabilityRestrictions: t.PropTypes.arrayOf(t.PropTypes.shape({
            menuItemType: t.PropTypes.string,
            cartBundleNumberLimit: t.PropTypes.oneOfType([t.PropTypes.string, t.PropTypes.number])
        })).isRequired,
        addItemIcon: t.PropTypes.string.isRequired,
        type: t.PropTypes.string,
        entries: t.PropTypes.arrayOf(t.PropTypes.object),
        onclick: t.PropTypes.func
    }
});
//# sourceMappingURL=MenuItem.js.map