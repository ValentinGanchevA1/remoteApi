define(["exports", "react", "eshop/modules/core/utils/ui", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart"], function(e, a, t, l, r, n, o) {
    "use strict";

    function s(a) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n);
    var u = function(e) {
            babelHelpers.inherits(l, e);
            var t = s(l);

            function l(e) {
                return babelHelpers.classCallCheck(this, l), t.call(this, e)
            }
            return babelHelpers.createClass(l, [{
                key: "componentWillMount",
                value: function() {
                    var t = this;
                    r.default.add(function(e) {
                        return a.default.createElement(n.default, {
                            id: "remove-from-cart-modal" + t.props.entry.bundleNo,
                            bundleNo: t.props.entry.bundleNo,
                            onClickRemove: t.props.removeFromCart.bind(t, null, t.props.entry.bundleNo)
                        })
                    })
                }
            }, {
                key: "removeFromCart",
                value: function() {
                    var e = "remove-from-cart-modal" + this.props.entry.bundleNo;
                    "" !== this.props.sapReservation ? this.props.showErrorMessage(this.props.sapErrorMessage) : r.default.open(e, {
                        bundleNo: this.props.entry.bundleNo,
                        offerIndex: this.props.key
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return a.default.createElement("div", {
                        role: "tablist",
                        "aria-multiselectable": "false",
                        ref: function(e) {
                            return t.expander = e
                        }
                    }, a.default.createElement("div", {
                        className: "opl-checkout__section opl-checkout__section--togglable u-padding is-expanded"
                    }, a.default.createElement("div", {
                        className: "opl-checkout__section__header"
                    }, a.default.createElement("div", {
                        className: "l-full-row u-padding-top-l"
                    }, a.default.createElement("div", {
                        className: "l-page-row u-small-padding-left"
                    }, a.default.createElement("div", {
                        className: "u-padding-s u-small-padding u-padding-right-l u-small-no-padding-r"
                    }, a.default.createElement("table", {
                        className: "u-table-fixed"
                    }, a.default.createElement("thead", null, a.default.createElement("tr", null, a.default.createElement("th", {
                        className: "u-vertical-bottom u-text-left"
                    }, a.default.createElement("table", {
                        className: "u-small-w-100 u-w-auto"
                    }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement("td", {
                        className: "u-vertical-bottom u-small-vertical-baseline u-small-w-100"
                    }, a.default.createElement("h3", {
                        className: "h2 u-inline"
                    }, this.props.title)), a.default.createElement("td", {
                        className: "u-vertical-bottom u-padding-s u-padding-left-l",
                        "aria-hidden": "true"
                    }), a.default.createElement("td", {
                        className: "u-vertical-bottom u-small-vertical-baseline u-padding-s u-padding-left-l u-small-no-padding-b"
                    }, a.default.createElement("a", {
                        href: "#",
                        onClick: this.removeFromCart.bind(this)
                    }, "Usuń", a.default.createElement("span", {
                        className: "u-acc-hide"
                    }, this.props.title))))))), a.default.createElement("th", {
                        "aria-hidden": "true",
                        className: "u-padding-s u-padding-right-s l-col-2 u-vertical-bottom u-text-right u-small-hide"
                    }, "Opłaty ", a.default.createElement("br", {
                        className: "u-small-hide u-large-hide"
                    }), "jednorazowe"), a.default.createElement("th", {
                        "aria-hidden": "true",
                        className: "u-padding-s l-col-2 u-vertical-bottom u-text-right u-small-hide"
                    }, "Opłaty ", a.default.createElement("br", {
                        className: "u-small-hide u-large-hide"
                    }), "miesięczne")))))))), a.default.createElement("div", {
                        "aria-hidden": "false",
                        style: {
                            display: "block"
                        },
                        className: "opl-checkout__section__content",
                        id: "mod-core/modules/expander-1-tab-0",
                        role: "tabpanel",
                        "aria-labelledby": "mod-core/modules/expander-1-control-0"
                    }, this.props.children[0]), this.props.children[1]))
                }
            }]), l
        }(a.Component),
        i = (0, l.connect)(function() {
            return {}
        }, function(l) {
            return {
                removeFromCart: function(e, t) {
                    return l((0, o.removeFromCart)(e, t))
                },
                showErrorMessage: function(e) {
                    return l((0, o.showErrorMessage)(e))
                }
            }
        })(u);
    e.default = i
});
//# sourceMappingURL=MultiCartExpandingSectionComponent.js.map