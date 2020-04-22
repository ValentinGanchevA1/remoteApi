define(["exports", "react", "react-redux", "lodash", "../../selectors", "eshop/modules/simfree/actions/filter", "../../filterUtils", "../../../fix/components/fragments/Tooltip"], function(_exports, _react, _reactRedux, _lodash, _selectors, _filter, _filterUtils, _Tooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _filterUtils = babelHelpers.interopRequireDefault(_filterUtils);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var ProductListHeaderFilterTagComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListHeaderFilterTagComponent, _React$Component);

        var _super = _createSuper(ProductListHeaderFilterTagComponent);

        function ProductListHeaderFilterTagComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListHeaderFilterTagComponent);
            _this = _super.call(this, props);
            console.log("Filters");
            console.log(_this.props.filters);
            return _this;
        }

        babelHelpers.createClass(ProductListHeaderFilterTagComponent, [{
            key: "clearDefault",
            value: function clearDefault() {
                this.props.reloadTree();
                this.props.reloadMatchToFilter();
            }
        }, {
            key: "clearPriceFilter",
            value: function clearPriceFilter(type) {
                this.props.changePriceFilter(type, "");
                this.clearDefault();
            }
        }, {
            key: "clearProducer",
            value: function clearProducer() {
                this.props.setSelectedProducer("");
                this.clearDefault();
            }
        }, {
            key: "clearFilterByKey",
            value: function clearFilterByKey(key) {
                this.props.updateFilter(_filterUtils.default.deleteFilterByCode(key, this.props.filters));
                this.clearDefault();
            }
        }, {
            key: "clearStickerFilterByKey",
            value: function clearStickerFilterByKey(key) {
                this.props.updateStickerFilter(_filterUtils.default.deleteFilterByCode(key, this.props.selectedStickerFilter));
                this.clearDefault();
            }
        }, {
            key: "clearMatchFilterByKey",
            value: function clearMatchFilterByKey(key) {
                this.props.updateMatchToFilter(_filterUtils.default.deleteMatchToFilterByCode(key, this.props.matchToFilter));
                this.clearDefault();
            }
        }, {
            key: "clearNumberFilterByKey",
            value: function clearNumberFilterByKey(key) {
                this.props.updateNumberFilter(_filterUtils.default.deleteNumberFilterByCode(key, this.props.numberFilters));
                this.clearDefault();
            }
        }, {
            key: "clearOneTimePricesRange",
            value: function clearOneTimePricesRange(id) {
                this.props.selectOneTimePrice(id);
            }
        }, {
            key: "clearMaxMonthlyPrices",
            value: function clearMaxMonthlyPrices() {
                this.props.clearMonthlyPrices();
                this.clearDefault();
            }
        }, {
            key: "clearFilters",
            value: function clearFilters() {
                this.props.changePriceFilter("from", "");
                this.props.changePriceFilter("to", "");
                this.props.clearMonthlyPrices();
                this.props.clearOneTimePrices();
                this.props.setSelectedProducer("");
                this.props.clearAttrFilters();
                this.props.clearMatchToFilters();
            }
        }, {
            key: "checkProducer",
            value: function checkProducer() {
                return this.props.selectedProducer;
            }
        }, {
            key: "checkPriceFrom",
            value: function checkPriceFrom() {
                return this.props.selectedPrice && this.props.selectedPrice.from;
            }
        }, {
            key: "checkPriceTo",
            value: function checkPriceTo() {
                return this.props.selectedPrice && this.props.selectedPrice.to;
            }
        }, {
            key: "isSelectedStickerFilterEmpty",
            value: function isSelectedStickerFilterEmpty(stickerFilters) {
                return !_lodash.default.find(this.props.filterConfiguration.stickerFilter, {
                    code: stickerFilters
                });
            }
        }, {
            key: "checkFilterAttrs",
            value: function checkFilterAttrs() {
                return Object.keys(this.props.filters).length > 0;
            }
        }, {
            key: "checkStickerFilterAttrs",
            value: function checkStickerFilterAttrs() {
                return Object.keys(this.props.selectedStickerFilter).length > 0;
            }
        }, {
            key: "checkMatchToFilters",
            value: function checkMatchToFilters() {
                return this.props.matchToFilter && Object.keys(this.props.matchToFilter).length > 0;
            }
        }, {
            key: "checkStartPricesRangeFilters",
            value: function checkStartPricesRangeFilters() {
                return this.props.selectedOneTimePrices && this.props.selectedOneTimePrices.length > 0;
            }
        }, {
            key: "checkMaxMonthlyPriceFilter",
            value: function checkMaxMonthlyPriceFilter() {
                return this.props.selectedMaxMonthlyPrice && this.props.selectedMaxMonthlyPrice.to;
            }
        }, {
            key: "checkNumberFilterAttrs",
            value: function checkNumberFilterAttrs() {
                var filter = this.props.numberFilters;
                if (!Object.keys(filter)) return false;
                if (Object.keys(filter).length == 0) return false;
                var ok = false;
                Object.keys(filter).map(function(key) {
                    if (filter[key] && filter[key] != "") {
                        ok = true;
                    }
                });
                return ok;
            }
        }, {
            key: "checkRenderFilter",
            value: function checkRenderFilter() {
                return this.checkMaxMonthlyPriceFilter() || this.checkStartPricesRangeFilters() || this.checkStickerFilterAttrs() || this.checkProducer() || this.checkPriceFrom() || this.checkPriceTo() || this.checkFilterAttrs() || this.checkNumberFilterAttrs() || this.checkMatchToFilters();
            }
        }, {
            key: "render",
            value: function render() {
                if (this.checkRenderFilter()) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: 'opl-tags-filter-header'
                    }, this._renderFilterBoxes(), /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#!",
                        className: "opl-tags__deleteAll",
                        onClick: this.clearFilters.bind(this)
                    }, "Usu\u0144 wszystkie filtry"));
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderFilterBoxes",
            value: function _renderFilterBoxes() {
                return /*#__PURE__*/ _react.default.createElement("u", {
                    className: "opl-tags__list ui-sortable"
                }, this._renderProducerFilter(), this._renderPriceFromFilter(), this._renderStartPriceRangeFilter(), this._renderMaxMonthlyPriceFilter(), this._renderPriceToFilter(), this._renderFilterConfiguration(), this._renderNumberFilterConfiguration(), this._renderMatchToFilter(), this._renderStickerFilter());
            }
        }, {
            key: "_renderProducerFilter",
            value: function _renderProducerFilter() {
                if (this.checkProducer()) {
                    return this._renderNameValueFilterBadge('Producent', this.props.selectedProducer, this.clearProducer.bind(this));
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderMatchToFilter",
            value: function _renderMatchToFilter() {
                var _this2 = this;

                var matchToFilters = this.props.matchToFilter;
                return Object.keys(matchToFilters).map(function(key) {
                    if (key && key != "") {
                        return _this2._renderNameValueFilterBadge('Pasuje do', _filterUtils.default.getMatchToDescription(key, _this2.props.matchToFilterData), _this2.clearMatchFilterByKey.bind(_this2, key));
                    }
                });
            }
        }, {
            key: "_renderPriceFromFilter",
            value: function _renderPriceFromFilter() {
                if (this.checkPriceFrom()) {
                    return this._renderNameValueFilterBadge('Cena Od', this.props.selectedPrice.from, this.clearPriceFilter.bind(this, 'from'));
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderPriceToFilter",
            value: function _renderPriceToFilter() {
                if (this.checkPriceTo()) {
                    return this._renderNameValueFilterBadge('Cena Do', this.props.selectedPrice.to, this.clearPriceFilter.bind(this, 'to'));
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderStartPriceRangeFilter",
            value: function _renderStartPriceRangeFilter() {
                var _this3 = this;

                //per id
                if (this.checkStartPricesRangeFilters()) {
                    return this.props.selectedOneTimePrices.map(function(range) {
                        return _this3._renderNameValueFilterBadge('Opłata na start', range.from + '-' + range.to + ' zł', _this3.clearOneTimePricesRange.bind(_this3, range.id));
                    });
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderMaxMonthlyPriceFilter",
            value: function _renderMaxMonthlyPriceFilter() {
                if (this.checkMaxMonthlyPriceFilter()) {
                    return this._renderNameValueFilterBadge('Miesięcznie do', this.props.selectedMaxMonthlyPrice.to + " zł", this.clearMaxMonthlyPrices.bind(this));
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderFilterConfiguration",
            value: function _renderFilterConfiguration() {
                var _this4 = this;

                var filter = this.props.filters;
                console.log(filter);
                return Object.keys(filter).map(function(key) {
                    return _this4._renderNameValueFilterBadge(_filterUtils.default.getFilterNameDescription(key, _this4.props.filterConfiguration.categoryFilter), filter[key], _this4.clearFilterByKey.bind(_this4, key));
                });
            }
        }, {
            key: "_renderNumberFilterConfiguration",
            value: function _renderNumberFilterConfiguration() {
                var _this5 = this;

                var filter = this.props.numberFilters;
                return Object.keys(filter).map(function(key) {
                    if (filter[key] && filter[key] != "") {
                        return _this5._renderNameValueFilterBadge(_filterUtils.default.getNumberFilterNameDescription(key, _this5.props.filterConfiguration.categoryFilter), filter[key], _this5.clearNumberFilterByKey.bind(_this5, key));
                    }
                });
            }
        }, {
            key: "_renderStickerFilter",
            value: function _renderStickerFilter() {
                var _this6 = this;

                if (this.checkStickerFilterAttrs()) {
                    var stickerFilters = this.props.selectedStickerFilter;
                    console.log("_renderStickerFilter EEEEEEEEEEEEEEEEEEEEEEe");
                    console.log(stickerFilters);
                    return Object.keys(stickerFilters).map(function(key) {
                        return _this6._renderNameValueFilterStickerBadge(key, stickerFilters[key], _this6.clearStickerFilterByKey.bind(_this6, key));
                    });
                } else {
                    return null;
                }
            }
        }, {
            key: "_renderNameValueFilterStickerBadge",
            value: function _renderNameValueFilterStickerBadge(name, value, onClickHandler) {
                if (this.isSelectedStickerFilterEmpty(name)) {
                    return this._renderFilterStickerWithTooltip(value, onClickHandler);
                } else {
                    return this._renderFilterSticker(value, onClickHandler);
                }
            }
        }, {
            key: "_renderFilterSticker",
            value: function _renderFilterSticker(value, onClickHandler) {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-tags__item",
                    key: value
                }, /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("b", null, this.stripHtmlTagsFromString(value))), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "opl-tags__delete",
                    onClick: onClickHandler
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--close",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")));
            }
        }, {
            key: "_renderFilterStickerWithTooltip",
            value: function _renderFilterStickerWithTooltip(value, onClickHandler) {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-tags__item g-white1-c",
                    key: value
                }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    maxWidth: "300"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__trigger o-tooltip--top"
                }, /*#__PURE__*/ _react.default.createElement("b", null, this.stripHtmlTagsFromString(value)), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content"
                }, "ten filtr jest nieaktywny,nie ma dla niego \u017Cadnego urz\u0105dzenia"))), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "opl-tags__delete",
                    onClick: onClickHandler
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--close",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")));
            }
        }, {
            key: "_renderNameValueFilterBadge",
            value: function _renderNameValueFilterBadge(name, value, onClickHandler) {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "opl-tags__item",
                    style: {
                        display: 'list-item',
                        opacity: 1
                    },
                    key: name + "_" + value
                }, /*#__PURE__*/ _react.default.createElement("span", null, " ", name, " "), /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("b", null, this.stripHtmlTagsFromString(value))), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "opl-tags__delete",
                    onClick: onClickHandler
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--close",
                    "aria-hidden": "true"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usu\u0144")));
            }
        }, {
            key: "stripHtmlTagsFromString",
            value: function stripHtmlTagsFromString(text) {
                return text.replace(/<\/?[^>]+(>|$)/g, "");
            }
        }]);
        return ProductListHeaderFilterTagComponent;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedProducer: (0, _selectors.getSelectedProducer)(state),
            selectedPrice: (0, _selectors.getSelectedPrice)(state),
            matchToFilter: (0, _selectors.getMatchToFilter)(state),
            matchToFilterData: (0, _selectors.getMatchToDataList)(state),
            filters: (0, _selectors.getSelectedFilter)(state),
            numberFilters: (0, _selectors.getSelectedNumberFilter)(state),
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            selectedStickerFilter: (0, _selectors.getSelectedStickerFilter)(state),
            selectedOneTimePrices: (0, _selectors.getSelectedOneTimePricesList)(state),
            selectedMaxMonthlyPrice: (0, _selectors.getSelectedMaxMonthlyPriceRange)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTree)(page));
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            },
            clearMatchToFilters: function clearMatchToFilters() {
                return dispatch((0, _filter.clearMatchToFilters)());
            },
            getFilteredList: function getFilteredList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            changePriceFilter: function changePriceFilter(type, price) {
                return dispatch((0, _filter.changePriceFilter)(type, price));
            },
            changeStickerFilter: function changeStickerFilter(value) {
                return dispatch((0, _filter.changeStickerFilter)(value));
            },
            updateFilter: function updateFilter(actualFilter) {
                return dispatch((0, _filter.updateAttrsFilter)(actualFilter));
            },
            updateStickerFilter: function updateStickerFilter(actualStickerAttrFilters) {
                return dispatch((0, _filter.updateStickerAttrsFilter)(actualStickerAttrFilters));
            },
            updateNumberFilter: function updateNumberFilter(actualNumberFilter) {
                return dispatch((0, _filter.updateNumberAttrsFilter)(actualNumberFilter));
            },
            updateMatchToFilter: function updateMatchToFilter(matchToFilter) {
                return dispatch((0, _filter.updateMatchToFilters)(matchToFilter));
            },
            reloadMatchToFilter: function reloadMatchToFilter() {
                return dispatch((0, _filter.reloadMatchToFilter)());
            },
            clearMonthlyPrices: function clearMonthlyPrices() {
                return dispatch((0, _filter.clearMonthlyPrices)());
            },
            clearOneTimePrices: function clearOneTimePrices() {
                return dispatch((0, _filter.clearOneTimePrices)());
            },
            selectOneTimePrice: function selectOneTimePrice(id) {
                return dispatch((0, _filter.selectOneTimePrice)(id));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListHeaderFilterTagComponent);

    _exports.default = _default;
});
//# sourceMappingURL=ProductListHeaderFilterTagComponent.js.map