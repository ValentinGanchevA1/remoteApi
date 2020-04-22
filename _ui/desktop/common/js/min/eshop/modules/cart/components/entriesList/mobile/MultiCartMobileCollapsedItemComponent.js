define(["exports", "react"], function(e, a) {
    "use strict";

    function r(a) {
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
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = r(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return a.default.createElement("div", {
                    className: "l-full-row is-expanded-hide is-expanding-hide"
                }, a.default.createElement("div", {
                    className: "l-page-row u-small-padding-left u-small-padding-right"
                }, a.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, a.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }, a.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-small-padding-left u-small-padding-right"
                }, a.default.createElement("table", {
                    className: "u-table-fixed"
                }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement("td", {
                    className: "u-padding-l-xl u-padding-top-l-xl u-padding-right-l u-small-padding-l u-small-padding-top-l"
                }, a.default.createElement("div", {
                    className: "l-group"
                }, a.default.createElement("div", {
                    className: "l-group__element u-vertical-middle u-padding-right-xl u-small-inline-block u-small-padding-right-l"
                }, a.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.entry.planName), a.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--" + this.props.icon
                })), this.props.entry.terminals && 0 < this.props.entry.terminals.length && this.props.entry.terminals.map(function(e, t) {
                    return a.default.createElement(n, {
                        key: "terminal-groupElement_" + t,
                        item: e
                    })
                }), this.props.entry.euroSets && 0 < this.props.entry.euroSets.length && this.props.entry.euroSets.map(function(e, t) {
                    return a.default.createElement(n, {
                        key: "euroSet-groupElement_" + t,
                        item: e
                    })
                }))))))), a.default.createElement("div", {
                    className: "u-border-top u-large-hide u-medium-hide u-padding-all-m u-text-center"
                }, a.default.createElement("a", {
                    href: "#",
                    className: "opl-checkout__section__title opl-checkout__section__trigger " + this.props.trigger
                }, "Szczegóły pakietu"))))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    e.default = t;
    var n = function(e) {
        var t = e.item;
        return a.default.createElement("div", {
            className: "l-group__element u-vertical-middle u-padding-right-xl u-small-inline-block u-small-padding-right-l"
        }, a.default.createElement("span", {
            className: "u-acc-hide"
        }, t && t.name), a.default.createElement("img", {
            src: t && t.imageUrl,
            alt: t.name,
            className: "opl-checkout__image--phone u-block"
        }))
    }
});
//# sourceMappingURL=MultiCartMobileCollapsedItemComponent.js.map