define(["exports", "react", "react-redux", "lodash", "../../selectors", "eshop/modules/simfree/actions/filter", "../../filterUtils", "../../../fix/components/fragments/Tooltip"], function(e, i, t, l, r, c, n, a) {
    "use strict";

    function s(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), n = babelHelpers.interopRequireDefault(n), a = babelHelpers.interopRequireDefault(a);
    var o = function(e) {
            babelHelpers.inherits(r, e);
            var t = s(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "clearDefault",
                value: function() {
                    this.props.reloadTree(), this.props.reloadMatchToFilter()
                }
            }, {
                key: "clearPriceFilter",
                value: function(e) {
                    this.props.changePriceFilter(e, ""), this.clearDefault()
                }
            }, {
                key: "clearProducer",
                value: function() {
                    this.props.setSelectedProducer(""), this.clearDefault()
                }
            }, {
                key: "clearFilterByKey",
                value: function(e) {
                    this.props.updateFilter(n.default.deleteFilterByCode(e, this.props.filters)), this.clearDefault()
                }
            }, {
                key: "clearStickerFilterByKey",
                value: function(e) {
                    this.props.updateStickerFilter(n.default.deleteFilterByCode(e, this.props.selectedStickerFilter)), this.clearDefault()
                }
            }, {
                key: "clearMatchFilterByKey",
                value: function(e) {
                    this.props.updateMatchToFilter(n.default.deleteMatchToFilterByCode(e, this.props.matchToFilter)), this.clearDefault()
                }
            }, {
                key: "clearNumberFilterByKey",
                value: function(e) {
                    this.props.updateNumberFilter(n.default.deleteNumberFilterByCode(e, this.props.numberFilters)), this.clearDefault()
                }
            }, {
                key: "clearOneTimePricesRange",
                value: function(e) {
                    this.props.selectOneTimePrice(e)
                }
            }, {
                key: "clearMaxMonthlyPrices",
                value: function() {
                    this.props.clearMonthlyPrices(), this.clearDefault()
                }
            }, {
                key: "clearFilters",
                value: function() {
                    this.props.changePriceFilter("from", ""), this.props.changePriceFilter("to", ""), this.props.clearMonthlyPrices(), this.props.clearOneTimePrices(), this.props.setSelectedProducer(""), this.props.clearAttrFilters(), this.props.clearMatchToFilters()
                }
            }, {
                key: "checkProducer",
                value: function() {
                    return this.props.selectedProducer
                }
            }, {
                key: "checkPriceFrom",
                value: function() {
                    return this.props.selectedPrice && this.props.selectedPrice.from
                }
            }, {
                key: "checkPriceTo",
                value: function() {
                    return this.props.selectedPrice && this.props.selectedPrice.to
                }
            }, {
                key: "isSelectedStickerFilterEmpty",
                value: function(e) {
                    return !l.default.find(this.props.filterConfiguration.stickerFilter, {
                        code: e
                    })
                }
            }, {
                key: "checkFilterAttrs",
                value: function() {
                    return 0 < Object.keys(this.props.filters).length
                }
            }, {
                key: "checkStickerFilterAttrs",
                value: function() {
                    return 0 < Object.keys(this.props.selectedStickerFilter).length
                }
            }, {
                key: "checkMatchToFilters",
                value: function() {
                    return this.props.matchToFilter && 0 < Object.keys(this.props.matchToFilter).length
                }
            }, {
                key: "checkStartPricesRangeFilters",
                value: function() {
                    return this.props.selectedOneTimePrices && 0 < this.props.selectedOneTimePrices.length
                }
            }, {
                key: "checkMaxMonthlyPriceFilter",
                value: function() {
                    return this.props.selectedMaxMonthlyPrice && this.props.selectedMaxMonthlyPrice.to
                }
            }, {
                key: "checkNumberFilterAttrs",
                value: function() {
                    var t = this.props.numberFilters;
                    if (!Object.keys(t)) return !1;
                    if (0 == Object.keys(t).length) return !1;
                    var r = !1;
                    return Object.keys(t).map(function(e) {
                        t[e] && "" != t[e] && (r = !0)
                    }), r
                }
            }, {
                key: "checkRenderFilter",
                value: function() {
                    return this.checkMaxMonthlyPriceFilter() || this.checkStartPricesRangeFilters() || this.checkStickerFilterAttrs() || this.checkProducer() || this.checkPriceFrom() || this.checkPriceTo() || this.checkFilterAttrs() || this.checkNumberFilterAttrs() || this.checkMatchToFilters()
                }
            }, {
                key: "render",
                value: function() {
                    return this.checkRenderFilter() ? i.default.createElement("div", {
                        id: "opl-tags-filter-header"
                    }, this._renderFilterBoxes(), i.default.createElement("a", {
                        href: "#!",
                        className: "opl-tags__deleteAll",
                        onClick: this.clearFilters.bind(this)
                    }, "Usuń wszystkie filtry")) : null
                }
            }, {
                key: "_renderFilterBoxes",
                value: function() {
                    return i.default.createElement("u", {
                        className: "opl-tags__list ui-sortable"
                    }, this._renderProducerFilter(), this._renderPriceFromFilter(), this._renderStartPriceRangeFilter(), this._renderMaxMonthlyPriceFilter(), this._renderPriceToFilter(), this._renderFilterConfiguration(), this._renderNumberFilterConfiguration(), this._renderMatchToFilter(), this._renderStickerFilter())
                }
            }, {
                key: "_renderProducerFilter",
                value: function() {
                    return this.checkProducer() ? this._renderNameValueFilterBadge("Producent", this.props.selectedProducer, this.clearProducer.bind(this)) : null
                }
            }, {
                key: "_renderMatchToFilter",
                value: function() {
                    var t = this,
                        e = this.props.matchToFilter;
                    return Object.keys(e).map(function(e) {
                        if (e && "" != e) return t._renderNameValueFilterBadge("Pasuje do", n.default.getMatchToDescription(e, t.props.matchToFilterData), t.clearMatchFilterByKey.bind(t, e))
                    })
                }
            }, {
                key: "_renderPriceFromFilter",
                value: function() {
                    return this.checkPriceFrom() ? this._renderNameValueFilterBadge("Cena Od", this.props.selectedPrice.from, this.clearPriceFilter.bind(this, "from")) : null
                }
            }, {
                key: "_renderPriceToFilter",
                value: function() {
                    return this.checkPriceTo() ? this._renderNameValueFilterBadge("Cena Do", this.props.selectedPrice.to, this.clearPriceFilter.bind(this, "to")) : null
                }
            }, {
                key: "_renderStartPriceRangeFilter",
                value: function() {
                    var t = this;
                    return this.checkStartPricesRangeFilters() ? this.props.selectedOneTimePrices.map(function(e) {
                        return t._renderNameValueFilterBadge("Opłata na start", e.from + "-" + e.to + " zł", t.clearOneTimePricesRange.bind(t, e.id))
                    }) : null
                }
            }, {
                key: "_renderMaxMonthlyPriceFilter",
                value: function() {
                    return this.checkMaxMonthlyPriceFilter() ? this._renderNameValueFilterBadge("Miesięcznie do", this.props.selectedMaxMonthlyPrice.to + " zł", this.clearMaxMonthlyPrices.bind(this)) : null
                }
            }, {
                key: "_renderFilterConfiguration",
                value: function() {
                    var t = this,
                        r = this.props.filters;
                    return Object.keys(r).map(function(e) {
                        return t._renderNameValueFilterBadge(n.default.getFilterNameDescription(e, t.props.filterConfiguration.categoryFilter), r[e], t.clearFilterByKey.bind(t, e))
                    })
                }
            }, {
                key: "_renderNumberFilterConfiguration",
                value: function() {
                    var t = this,
                        r = this.props.numberFilters;
                    return Object.keys(r).map(function(e) {
                        if (r[e] && "" != r[e]) return t._renderNameValueFilterBadge(n.default.getNumberFilterNameDescription(e, t.props.filterConfiguration.categoryFilter), r[e], t.clearNumberFilterByKey.bind(t, e))
                    })
                }
            }, {
                key: "_renderStickerFilter",
                value: function() {
                    var t = this;
                    if (this.checkStickerFilterAttrs()) {
                        var r = this.props.selectedStickerFilter;
                        return Object.keys(r).map(function(e) {
                            return t._renderNameValueFilterStickerBadge(e, r[e], t.clearStickerFilterByKey.bind(t, e))
                        })
                    }
                    return null
                }
            }, {
                key: "_renderNameValueFilterStickerBadge",
                value: function(e, t, r) {
                    return this.isSelectedStickerFilterEmpty(e) ? this._renderFilterStickerWithTooltip(t, r) : this._renderFilterSticker(t, r)
                }
            }, {
                key: "_renderFilterSticker",
                value: function(e, t) {
                    return i.default.createElement("li", {
                        className: "opl-tags__item",
                        key: e
                    }, i.default.createElement("span", null, i.default.createElement("b", null, this.stripHtmlTagsFromString(e))), i.default.createElement("a", {
                        href: "#!",
                        className: "opl-tags__delete",
                        onClick: t
                    }, i.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--xs g-icon--close",
                        "aria-hidden": "true"
                    }), i.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń")))
                }
            }, {
                key: "_renderFilterStickerWithTooltip",
                value: function(e, t) {
                    return i.default.createElement("li", {
                        className: "opl-tags__item g-white1-c",
                        key: e
                    }, i.default.createElement(a.default, {
                        maxWidth: "300"
                    }, i.default.createElement("span", {
                        className: "o-tooltip__trigger o-tooltip--top"
                    }, i.default.createElement("b", null, this.stripHtmlTagsFromString(e)), i.default.createElement("span", {
                        className: "o-tooltip__content"
                    }, "ten filtr jest nieaktywny,nie ma dla niego żadnego urządzenia"))), i.default.createElement("a", {
                        href: "#!",
                        className: "opl-tags__delete",
                        onClick: t
                    }, i.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--xs g-icon--close",
                        "aria-hidden": "true"
                    }), i.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń")))
                }
            }, {
                key: "_renderNameValueFilterBadge",
                value: function(e, t, r) {
                    return i.default.createElement("li", {
                        className: "opl-tags__item",
                        style: {
                            display: "list-item",
                            opacity: 1
                        },
                        key: e + "_" + t
                    }, i.default.createElement("span", null, " ", e, " "), i.default.createElement("span", null, i.default.createElement("b", null, this.stripHtmlTagsFromString(t))), i.default.createElement("a", {
                        href: "#!",
                        className: "opl-tags__delete",
                        onClick: r
                    }, i.default.createElement("span", {
                        className: "g-icon g-icon--only g-icon--xs g-icon--close",
                        "aria-hidden": "true"
                    }), i.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń")))
                }
            }, {
                key: "stripHtmlTagsFromString",
                value: function(e) {
                    return e.replace(/<\/?[^>]+(>|$)/g, "")
                }
            }]), r
        }(i.default.Component),
        u = (0, t.connect)(function(e) {
            return {
                selectedProducer: (0, r.getSelectedProducer)(e),
                selectedPrice: (0, r.getSelectedPrice)(e),
                matchToFilter: (0, r.getMatchToFilter)(e),
                matchToFilterData: (0, r.getMatchToDataList)(e),
                filters: (0, r.getSelectedFilter)(e),
                numberFilters: (0, r.getSelectedNumberFilter)(e),
                filterConfiguration: (0, r.getFilterConfiguration)(e),
                selectedStickerFilter: (0, r.getSelectedStickerFilter)(e),
                selectedOneTimePrices: (0, r.getSelectedOneTimePricesList)(e),
                selectedMaxMonthlyPrice: (0, r.getSelectedMaxMonthlyPriceRange)(e)
            }
        }, function(r) {
            return {
                reloadTree: function(e) {
                    return r((0, c.getFilteredProductTree)(e))
                },
                setSelectedProducer: function(e) {
                    return r((0, c.setSelectedProducer)(e))
                },
                clearAttrFilters: function() {
                    return r((0, c.clearAttrsFilters)())
                },
                clearMatchToFilters: function() {
                    return r((0, c.clearMatchToFilters)())
                },
                getFilteredList: function(e) {
                    return r((0, c.getFilteredProductList)(e))
                },
                changePriceFilter: function(e, t) {
                    return r((0, c.changePriceFilter)(e, t))
                },
                changeStickerFilter: function(e) {
                    return r((0, c.changeStickerFilter)(e))
                },
                updateFilter: function(e) {
                    return r((0, c.updateAttrsFilter)(e))
                },
                updateStickerFilter: function(e) {
                    return r((0, c.updateStickerAttrsFilter)(e))
                },
                updateNumberFilter: function(e) {
                    return r((0, c.updateNumberAttrsFilter)(e))
                },
                updateMatchToFilter: function(e) {
                    return r((0, c.updateMatchToFilters)(e))
                },
                reloadMatchToFilter: function() {
                    return r((0, c.reloadMatchToFilter)())
                },
                clearMonthlyPrices: function() {
                    return r((0, c.clearMonthlyPrices)())
                },
                clearOneTimePrices: function() {
                    return r((0, c.clearOneTimePrices)())
                },
                selectOneTimePrice: function(e) {
                    return r((0, c.selectOneTimePrice)(e))
                }
            }
        })(o);
    e.default = u
});
//# sourceMappingURL=ProductListHeaderFilterTagComponent.js.map