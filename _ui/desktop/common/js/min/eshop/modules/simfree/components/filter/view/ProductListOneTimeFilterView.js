define(["exports", "react", "./ProductListPriceFilterRowView", "eshop/utils/OnlineUtils"], function(e, r, n, o) {
    "use strict";

    function t(a) {
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
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o);
    var l = function(e) {
        babelHelpers.inherits(a, e);
        var l = t(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = l.call(this, e)).attributeId = t.props.header.replace(/\s+/g, "-").toLowerCase(), t.componentId = e.id || o.default.generateUniqeHtmlId("priceFilterExpand_"), t
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "componentDidUpdate",
            value: function() {
                document.getElementById(this.componentId) && OPL.UI.initModules(document.getElementById(this.componentId)), document.getElementById("opl-product-list-one-time-expander-" + this.attributeId) && !document.getElementById("opl-product-list-one-time-expander-" + this.attributeId).getAttribute("data-js-processed") && OPL.UI.initModules(document.getElementById("opl-product-list-one-time-expander-" + this.attributeId))
            }
        }, {
            key: "render",
            value: function() {
                var l = this;
                return r.default.createElement("div", null, this.props.showComponent ? r.default.createElement("div", {
                    id: "opl-product-list-one-time-expander-" + this.attributeId
                }, r.default.createElement("div", {
                    id: "opl-sticker-expander-main-" + this.attributeId,
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-conditions": "element:{was seen}",
                    "data-js-options": JSON.stringify({
                        scrollToSelected: !1,
                        triggerSelector: ".opl-section__trigger",
                        contentSelector: ".opl-section__content",
                        parentClass: "opl-section"
                    }),
                    role: "tablist",
                    "aria-multiselectable": "false"
                }, r.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                    "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                }, r.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, r.default.createElement("div", {
                    className: "o-separator u-spacing-l"
                }), r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, r.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.header)), r.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, r.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, r.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), r.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję"))))), r.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, r.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-margin",
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": JSON.stringify({
                        coverClass: ".cover",
                        triggerHideName: "Zwiń",
                        triggerShowName: "Rozwiń",
                        maxHeight: 300,
                        showFirst: this.props.showExpanderNumber,
                        scrollTop: !1,
                        scrollSet: 0
                    })
                }, r.default.createElement("ul", {
                    className: "opl-gradient-fade--wrapper"
                }, this.props.tieredPrices && this.props.tieredPrices.map(function(e, t) {
                    return r.default.createElement(n.default, {
                        key: "Price_" + e + "_" + t,
                        type: l.props.type,
                        checked: l.props.selectedTieredPrices[e.id],
                        onClick: function() {
                            return l.props.onClick(e.id)
                        },
                        text: l.props.labelFormatter(e)
                    })
                })), r.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-text-left u-spacing-m u-spacing-top"
                }, r.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Rozwiń"))))))) : null)
            }
        }]), a
    }(r.default.Component);
    e.default = l
});
//# sourceMappingURL=ProductListOneTimeFilterView.js.map