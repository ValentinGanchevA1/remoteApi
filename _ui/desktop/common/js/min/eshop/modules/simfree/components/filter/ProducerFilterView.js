define(["exports", "react", "eshop/utils/OnlineUtils"], function(e, a, o) {
    "use strict";

    function t(l) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o);
    var r = function(e) {
        babelHelpers.inherits(l, e);
        var r = t(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), (t = r.call(this, e)).handleProducerChooseAction = t.handleProducerChooseAction.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(l, [{
            key: "handleProducerChooseAction",
            value: function(e, t) {
                e.preventDefault(), this.props.setSelectedProducer(t), this.props.reloadTree(), this.props.reloadMatchToFilter(), o.default.resetUrlPathWithoutReload()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                $("#react-modal-ora-filters-modal").hasClass("is-visible") && OPL.UI.initModules(document.getElementById("react-modal-ora-filters-modal")), document.getElementById("opl-producer-filter-modal") && !document.getElementById("opl-producer-filter-modal").getAttribute("data-js-processed") && (OPL.UI.stopModules(document.getElementById("react-modal-ora-filters-modal")), OPL.UI.initModules(document.getElementById("react-modal-ora-filters-modal")))
            }
        }, {
            key: "prepareProducerName",
            value: function(e) {
                return e.cuteName ? e.cuteName : e.name
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("div", {
                    id: "opl-producer-expanders" + (this.props.id ? "-" + this.props.id : "")
                }, a.default.createElement("div", {
                    id: this.props.id || "opl-producer-expander-main",
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
                }, a.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                    "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                }, a.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, a.default.createElement("h4", {
                    className: "h4 u-spacing-l"
                }, this.props.title)), a.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, a.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, a.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), a.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję " + this.props.title))))), a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, a.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, a.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this._renderProducer())))), a.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, a.default.createElement("div", {
                    className: "l-row"
                }, a.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, a.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, a.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this._renderProducer(!0)))))))))
            }
        }, {
            key: "_renderProducer",
            value: function(r) {
                var l = this;
                return this.props.filterConfiguration.producerFilter ? this.props.filterConfiguration.producerFilter.map(function(t, e) {
                    return !r && e < 6 || r && 5 < e ? a.default.createElement("li", {
                        key: e,
                        className: "opl-wiking-manufacturers__wrapper",
                        onClick: function(e) {
                            return l.handleProducerChooseAction(e, t.name)
                        }
                    }, a.default.createElement("div", {
                        className: "opl-wiking-manufacturers__item"
                    }, t.iconUrl ? l._renderImgProducer(t) : l._renderTxtProducer(t))) : null
                }) : null
            }
        }, {
            key: "_renderImgProducer",
            value: function(e) {
                return a.default.createElement("a", {
                    href: "/sklep/" + this.prepareProducerName(e),
                    className: e.name == this.props.selectedProducer ? "active" : ""
                }, a.default.createElement("img", {
                    src: e.iconUrl,
                    alt: e.altText,
                    title: e.tooltip
                }))
            }
        }, {
            key: "_renderTxtProducer",
            value: function(e) {
                return a.default.createElement("a", {
                    href: "/sklep/" + this.prepareProducerName(e),
                    className: e.name == this.props.selectedProducer ? "active" : ""
                }, e.altText)
            }
        }]), l
    }(a.default.Component);
    e.default = r
});
//# sourceMappingURL=ProducerFilterView.js.map