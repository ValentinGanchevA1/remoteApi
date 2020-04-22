define(["exports", "react"], function(e, n) {
    "use strict";

    function l(l) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(a, e);
        var t = l(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "toHTML",
            value: function(e) {
                return {
                    __html: e
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "componentDidUpdate",
            value: function() {
                null == document.getElementById("opl-sticker-expander-main" + this.props.isModal) || document.getElementById("opl-sticker-expander-main" + this.props.isModal).hasAttribute("data-js-processed") || OPL.UI.initModules($("#ora-product-sticker-filter-component")[0])
            }
        }, {
            key: "render",
            value: function() {
                var a = this;
                return this.props.filterConfiguration.stickerFilter && 0 != this.props.filterConfiguration.stickerFilter.length ? n.default.createElement("div", {
                    id: "opl-sticker-expanders" + this.props.isModal
                }, n.default.createElement("div", {
                    id: "opl-sticker-expander-main" + this.props.isModal,
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-options": JSON.stringify({
                        scrollToSelected: !1,
                        triggerSelector: ".opl-section__trigger",
                        contentSelector: ".opl-section__content",
                        parentClass: "opl-section"
                    }),
                    role: "tablist",
                    "aria-multiselectable": "false"
                }, n.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                    "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                }, n.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, n.default.createElement("div", {
                    className: "o-separator u-spacing-l"
                }), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, n.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.title)), n.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, n.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję " + this.props.title))))), n.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, n.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, n.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this.props.filterConfiguration.stickerFilter.map(function(e, t) {
                    return a.renderAttribute(e)
                }))))), n.default.createElement("div", {
                    className: "u-clear-both"
                }))))) : null
            }
        }, {
            key: "renderAttribute",
            value: function(a) {
                var l = this;
                return n.default.createElement("ul", {
                    className: "u-spacing-l"
                }, "enum" == a.type ? a.availableValues.map(function(e, t) {
                    return a.multiValue ? l.renderCuteLinkIfAvailable(e, a) : l.renderValueRadio(e, a)
                }) : "")
            }
        }, {
            key: "renderCuteLinkIfAvailable",
            value: function(e, t) {
                return "" === t.cuteName || this.getStateOfCheckboxes(t.code, e) ? this.renderValueCheckBox(e, t) : n.default.createElement("a", {
                    href: "/sklep/" + t.cuteName
                }, " ", this.renderValueCheckBox(e, t), " ")
            }
        }, {
            key: "renderValueCheckBox",
            value: function(a, l) {
                var r = this;
                return n.default.createElement("li", {
                    className: "u-spacing"
                }, n.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, n.default.createElement("input", {
                    type: "checkbox",
                    name: this.props.component + "_" + l.code,
                    onClick: function(e, t) {
                        return r.changeAttribute(a, l, !0, "add", t)
                    },
                    checked: this.getStateOfCheckboxes(l.code, a)
                }), n.default.createElement("span", {
                    className: "o-ci"
                }), n.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, this.stripHtmlTagsFromString(l.name), " ", n.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                }, "(", l.unit, ")"))))
            }
        }, {
            key: "getStateOfCheckboxes",
            value: function(e, t) {
                var a = this.props.selectedStickerFilters[e];
                return !!a && -1 != a.indexOf(t)
            }
        }, {
            key: "stripHtmlTagsFromString",
            value: function(e) {
                return e.replace(/<\/?[^>]+(>|$)/g, "")
            }
        }, {
            key: "changeAttribute",
            value: function(e, t, a, l) {
                this.props.changeStickerFilterAttribute(e, t, a, l), this.props.reloadTree()
            }
        }]), a
    }((n = babelHelpers.interopRequireDefault(n)).default.Component);
    e.default = t
});
//# sourceMappingURL=StickerFilterView.js.map