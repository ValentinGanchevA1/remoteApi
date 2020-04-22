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
            key: "componentDidMount",
            value: function() {
                this.props.getMatchToData()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var a = this;
                document.getElementById("opl-match-to-filter-expander-main" + this.props.isModal) && !document.getElementById("opl-match-to-filter-expander-main" + this.props.isModal).getAttribute("data-js-processed") && (OPL.UI.initModules(document.getElementById("matchToFilter")), OPL.UI.on("modules.categorytree.clickevent", function(e) {
                    a.bindEvent(e)
                }, "match-to-tree"), OPL.UI.on("modules.categorytree.clearevent", function(e) {
                    a.clearAll(e)
                }, "match-to-tree"));
                var l = !1;
                null != this.props.filters && this.props.filters.map(function(e) {
                    var t = e.name.replace(/\s+/g, "-").toLowerCase();
                    a.componentNeedInitialization("opl-product-filter-attribute-main-" + t + a.props.isModal) && (l = !0)
                }), (this.componentNeedInitialization("opl-match-to-filter-expander-main" + this.props.isModal) || this.componentNeedInitialization("opl-product-filter-expander-main" + this.props.isModal)) && (l = !0), l && this.props.isModal ? OPL.UI.initModules(document.getElementById("ora-product-list-section-modal-product")) : l && OPL.UI.initModules(document.getElementById("ora-product-filter-component"))
            }
        }, {
            key: "componentNeedInitialization",
            value: function(e) {
                return null != document.getElementById(e) && !document.getElementById(e).hasAttribute("data-js-processed")
            }
        }, {
            key: "getStateOfRadio",
            value: function(e, t) {
                return this.props.selectedFilters[e] === t
            }
        }, {
            key: "getStateOfCheckboxes",
            value: function(e, t) {
                var a = this.props.selectedFilters[e];
                return !!a && -1 != a.indexOf(t)
            }
        }, {
            key: "getStateOfNumberInput",
            value: function(e, t) {
                var a = this.props.selectedNumberFilters[e.code + "_" + t];
                return a || ""
            }
        }, {
            key: "renderValueCheckBox",
            value: function(a, l, e) {
                var r = this;
                return n.default.createElement("ul", {
                    key: l.code + "_" + e,
                    className: "u-spacing-l"
                }, n.default.createElement("li", {
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
                }, a, n.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                })))))
            }
        }, {
            key: "changeAttribute",
            value: function(e, t, a, l) {
                this.props.changeFilterAttribute(e, t.code, a, l), this.props.reloadTree()
            }
        }, {
            key: "changeNumberAttribute",
            value: function(e, t, a) {
                this.props.changeFilterNumberAttribute(e, t, a), this.props.reloadTree()
            }
        }, {
            key: "changeNumberAttributeProps",
            value: function(e, t, a) {
                this.props.changeFilterNumberAttribute(e, t, a)
            }
        }, {
            key: "renderValueRadio",
            value: function(a, l, e) {
                var r = this;
                return n.default.createElement("ul", {
                    key: l.code + "_" + e,
                    className: "u-spacing-l"
                }, n.default.createElement("li", {
                    className: "u-spacing"
                }, n.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, n.default.createElement("input", {
                    type: "radio",
                    name: this.props.component + "_" + l.code,
                    onClick: function(e, t) {
                        return r.changeAttribute(a, l, !1, "add", t)
                    },
                    checked: this.getStateOfRadio(l.code, a)
                }), n.default.createElement("span", {
                    className: "o-ci"
                }), n.default.createElement("span", {
                    className: "o-ci-label u-font-normal"
                }, a, n.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                })))))
            }
        }, {
            key: "renderInputString",
            value: function() {
                return n.default.createElement("div", {
                    className: "opl-input"
                }, n.default.createElement("input", {
                    type: "text"
                }))
            }
        }, {
            key: "renderNumberPair",
            value: function(e) {
                return n.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, this.renderInputNumber(e, "from"), this.renderInputNumber(e, "to"))
            }
        }, {
            key: "renderInputNumber",
            value: function(t, a) {
                var l = this;
                return n.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, n.default.createElement("input", {
                    type: "text",
                    placeholder: "from" == a ? "Od" : "Do",
                    value: this.getStateOfNumberInput(t, a),
                    className: "opl-input--size-m",
                    onBlur: function(e) {
                        l.changeNumberAttribute(a, e.target.value, t)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && l.changeNumberAttribute(a, e.target.value, t)
                    },
                    onChange: function(e) {
                        l.changeNumberAttributeProps(a, e.target.value, t)
                    }
                }))
            }
        }, {
            key: "renderAttribute",
            value: function(a) {
                var l = this,
                    e = a.name.replace(/\s+/g, "-").toLowerCase();
                return n.default.createElement("div", {
                    id: "opl-product-filter-attribute-expanders-" + e + this.props.isModal,
                    className: "single-filter"
                }, n.default.createElement("div", {
                    id: this.props.id || "opl-product-filter-attribute-main-" + e + this.props.isModal,
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
                    className: "opl-section u-no-padding"
                }, n.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, n.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, n.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, a.name)), n.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, n.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję"))))), n.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, "enum" == a.type ? a.availableValues.map(function(e, t) {
                    return a.multiValue ? l.renderValueCheckBox(e, a, t) : l.renderValueRadio(e, a, t)
                }) : "", "string" == a.type && this.renderInputString(a), "number" == a.type && this.renderNumberPair(a), n.default.createElement("div", {
                    className: "u-clear-both"
                })))))
            }
        }, {
            key: "handlePriceFilter",
            value: function(e, t) {
                this.props.changePriceFilter(e, t), this.props.reloadTree()
            }
        }, {
            key: "handlePricePropsFilter",
            value: function(e, t) {
                this.props.changePriceFilter(e, t)
            }
        }, {
            key: "renderPriceFilter",
            value: function() {
                var t = this;
                return this.props.isSalesOfGoodsPage ? n.default.createElement("div", {
                    id: "opl-product-filter-expanders" + this.props.isModal
                }, n.default.createElement("div", {
                    className: "u-clear-both"
                }), n.default.createElement("div", {
                    id: "opl-product-filter-expander-main" + this.props.isModal,
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
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, n.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.title, n.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                }, " (zł)"))), n.default.createElement("div", {
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
                    className: "l-row u-spacing-l"
                }, n.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, n.default.createElement("input", {
                    type: "text",
                    placeholder: "Od",
                    className: "opl-input--size-m",
                    onBlur: function(e) {
                        t.handlePriceFilter("from", e.target.value)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && t.handlePriceFilter("from", e.target.value)
                    },
                    onChange: function(e) {
                        t.handlePricePropsFilter("from", e.target.value)
                    },
                    value: this.props.selectedPrice.from
                })), n.default.createElement("div", {
                    className: "l-col l-col-6 "
                }, n.default.createElement("input", {
                    type: "text",
                    placeholder: "Do",
                    className: "opl-input--size-m",
                    onBlur: function(e) {
                        t.handlePriceFilter("to", e.target.value)
                    },
                    onKeyPress: function(e) {
                        "Enter" === e.key && t.handlePriceFilter("to", e.target.value)
                    },
                    ref: function(e) {
                        return t.priceTo = e
                    },
                    onChange: function(e) {
                        t.handlePricePropsFilter("to", e.target.value)
                    },
                    value: this.props.selectedPrice.to
                }))))))) : null
            }
        }, {
            key: "handleModelChooseAction",
            value: function(e, t) {
                this.props.setSelectedModel(e, t), this.props.reloadTree()
            }
        }, {
            key: "handleProducerChooseAction",
            value: function(e, t) {
                this.props.setSelectedRecomendedProducer(e, t), this.props.reloadTree()
            }
        }, {
            key: "bindEvent",
            value: function(e) {
                "model" == e.inputName && this.handleModelChooseAction(e.liDataId, e.checked), "producent" == e.inputName && this.handleProducerChooseAction(e.liDataId, e.checked)
            }
        }, {
            key: "clearAll",
            value: function() {
                this.props.clearMatchToFilters()
            }
        }, {
            key: "renderMatchToFilter",
            value: function() {
                return "accesories" == this.props.products.mainCategory ? n.default.createElement("div", {
                    className: "l-row u-small-hide u-medium-hide",
                    id: "matchToFilter"
                }, n.default.createElement("div", {
                    id: this.props.id || "opl-match-to-filter-expander-main" + this.props.isModal,
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
                    className: "opl-section u-no-padding"
                }, n.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, n.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, n.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, "Pasujące do")), n.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, n.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), n.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję"))))), n.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, n.default.createElement("div", {
                    "data-js-module": "common/modules/opl-category-tree",
                    id: "match-to-tree",
                    "data-js-options": JSON.stringify(this.props.matchToData),
                    className: "opl-category-tree"
                }, n.default.createElement("div", {
                    className: "l-row u-small-hide u-medium-hide"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12  u-text-right"
                }, n.default.createElement("a", {
                    href: "#",
                    className: "opl-category-tree__clear"
                }, "Wyczyść")))))))) : n.default.createElement("div", null)
            }
        }, {
            key: "render",
            value: function() {
                var a = this;
                return this.props.filters ? n.default.createElement("div", null, this.renderPriceFilter(), this.renderMatchToFilter(), this.props.filters.map(function(e, t) {
                    return a.renderAttribute(e)
                })) : null
            }
        }]), a
    }((n = babelHelpers.interopRequireDefault(n)).default.Component);
    e.default = t
});
//# sourceMappingURL=ProductFilterView.js.map