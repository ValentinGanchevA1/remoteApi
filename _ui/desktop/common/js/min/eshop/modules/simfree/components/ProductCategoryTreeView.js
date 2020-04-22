define(["exports", "react", "../actions/filter", "eshop/utils/OnlineUtils"], function(e, l, t, s) {
    "use strict";

    function o(a) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), s = babelHelpers.interopRequireDefault(s);
    var i = 0,
        r = function(e) {
            babelHelpers.inherits(a, e);
            var r = o(a);

            function a(e) {
                var t;
                return babelHelpers.classCallCheck(this, a), (t = r.call(this, e)).props.fetchConfiguration(t.props.queryParams.producer, t.props.queryParams.selectedCategory, t.props.queryParams), -1 !== window.location.href.indexOf("akcesoria") && t.props.changeCategory({
                    code: "accesories",
                    name: "Akcesoria"
                }), t.props.selectedCategory && "0" != t.props.selectedCategory && t.props.getFilters(t.props.selectedCategory), t.props.initiallyFiltered || t.initializeFilters(), t
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "componentDidUpdate",
                value: function() {
                    null == document.getElementById("opl-tree-expander-main" + this.props.isModal) || document.getElementById("opl-tree-expander-main" + this.props.isModal).hasAttribute("data-js-processed") || OPL.UI.initModules($("#ora-product-category-tree-component")[0])
                }
            }, {
                key: "initializeFilters",
                value: function() {
                    this.props.queryParams.sticker && this.props.changeStickerFilter(this.props.queryParams.sticker), isNaN(this.props.queryParams.priceFrom) || this.props.changePriceFilter("from", this.props.queryParams.priceFrom), isNaN(this.props.queryParams.priceTo) || this.props.changePriceFilter("to", this.props.queryParams.priceTo), this.props.queryParams.esim && this.props.changeEsimFilterAttributeIfAvailable(this.props.queryParams.esim, this.props.queryParams.selectedCategory || "Phones and Devices"), this.props.queryParams.products && this.props.setProductsFilter(this.props.queryParams.products)
                }
            }, {
                key: "clickCategory",
                value: function(e, t) {
                    t.preventDefault(), this.props.changeCurrentPage(1), this.props.changeCategory(e), this.props.getFilters(e.code), this.props.reloadTree(), this.props.reloadMatchToFilter(), s.default.resetUrlPathWithoutReload()
                }
            }, {
                key: "checkSelectedCategory",
                value: function(e) {
                    return this.props.selectedCategory === e.code || this.checkSubcategory(e)
                }
            }, {
                key: "checkSubcategory",
                value: function(e) {
                    var r = this;
                    if (!e) return !1;
                    if (0 === e.subCategories.length) return !1;
                    var a = !1;
                    return e.subCategories.map(function(e, t) {
                        if (e.code === r.props.selectedCategory) return a = !0;
                        a = a || r.checkSubcategory(e)
                    }), a
                }
            }, {
                key: "renderCategory",
                value: function(e, t, r) {
                    var a = this;
                    if (0 === t.counter) return !1;
                    var s = t.categoryNameUrl ? t.categoryNameUrl : t.name.replace(/ /g, "-");
                    return l.default.createElement("li", {
                        className: "u-spacing",
                        key: r + t.code
                    }, l.default.createElement("div", {
                        className: "js-expander__container" + e + (this.checkSelectedCategory(t) ? " is-expanded" : "")
                    }, l.default.createElement("a", {
                        href: "/sklep/" + s,
                        "aria-expanded": this.props.selectedCategory === t.code,
                        className: (this.props.selectedCategory === t.code ? "g-brand-c" : "u-font-normal") + " u-text-decoration-none u-spacing-right-s js-expander__trigger" + e,
                        onClick: function(e) {
                            a.clickCategory(t, e)
                        }
                    }, t.name), l.default.createElement("span", {
                        className: "g-gray4-c u-font-small"
                    }, "(", t.counter, ")"), l.default.createElement("div", {
                        style: {
                            display: this.checkSelectedCategory(t) ? "block" : "none"
                        },
                        className: "js-expander__content" + e
                    }, this.renderTree(e, t, r))))
                }
            }, {
                key: "renderTree",
                value: function(r, e) {
                    var a = this;
                    if (e && 0 !== e.subCategories.length) return l.default.createElement("div", null, l.default.createElement("div", {
                        "data-js-module": "core/modules/expander",
                        "data-js-options": JSON.stringify({
                            hideOtherElements: !0,
                            duration: 300,
                            contentSelector: ".js-expander__content" + (r + 1),
                            triggerSelector: ".js-expander__trigger" + (r + 1),
                            parentClass: "js-expander__container" + (r + 1)
                        })
                    }, l.default.createElement("ul", {
                        className: 0 === r ? "" : "u-padding-left-l u-padding-top"
                    }, e.subCategories.map(function(e, t) {
                        return a.renderCategory(r + 1, e, t)
                    }))))
                }
            }, {
                key: "render",
                value: function() {
                    var e = i;
                    return i++, l.default.createElement("div", {
                        id: "opl-tree-expanders" + e + this.props.isModal,
                        className: "opl-category-tree__list u-spacing-l"
                    }, l.default.createElement("div", {
                        id: this.props.id || "opl-tree-expander-main" + this.props.isModal,
                        "data-js-module": "common/modules/opl-expander",
                        "data-js-options": JSON.stringify({
                            scrollToSelected: !1,
                            triggerSelector: ".opl-section__trigger",
                            contentSelector: ".opl-section__content",
                            parentClass: "opl-section"
                        }),
                        role: "tablist",
                        "aria-multiselectable": "false"
                    }, l.default.createElement("div", {
                        className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                        "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                    }, l.default.createElement("div", {
                        className: "opl-section__header u-no-padding"
                    }, l.default.createElement("div", {
                        className: "o-separator u-spacing-l u-spacing-top-l"
                    }), l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-9 "
                    }, l.default.createElement("h4", {
                        className: "h4 u-spacing-l"
                    }, this.props.title)), l.default.createElement("div", {
                        className: "l-col l-col-3 "
                    }, l.default.createElement("a", {
                        href: "#",
                        className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                        role: "tab"
                    }, l.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                    }), l.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Rozwiń sekcję " + this.props.title))))), l.default.createElement("div", {
                        className: "opl-section__content u-hide--soft",
                        role: "tabpanel"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12 "
                    }, l.default.createElement("div", {
                        className: "u-padding-right-xl"
                    }, l.default.createElement("ul", {
                        className: "opl-wiking-manufacturers"
                    }, this.renderTree(0, this.props.categories)))))))))
                }
            }]), a
        }(l.default.Component);
    e.default = r
});
//# sourceMappingURL=ProductCategoryTreeView.js.map