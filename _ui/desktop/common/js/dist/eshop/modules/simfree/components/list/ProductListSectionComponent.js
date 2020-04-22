define(["exports", "react", "react-redux", "lodash", "eshop/modules/simfree/components/list/ProductListSingleProductComponent", "eshop/modules/simfree/components/list/ProductListHeaderFilterTagComponent", "eshop/modules/core/components/ui/Modal", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/components/ProductFilterView", "eshop/modules/simfree/components/filter/ProductListOneTimeFilterMobileComponent", "../../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/filter/ProducerFilterView", "eshop/modules/simfree/components/filter/StickerFilterView", "eshop/modules/simfree/components/ProductCategoryTreeView", "eshop/modules/core/utils/ui", "eshop/modules/simfree/components/list/DiscountInfoSection", "eshop/modules/simfree/components/filter/ProductListMaxMonthlyMobileFilterComponent", "eshop/modules/cart/selectors", "eshop/modules/simfree/selectors"], function(_exports, _react, _reactRedux, _lodash, _ProductListSingleProductComponent, _ProductListHeaderFilterTagComponent, _Modal, _app, _ProductFilterView, _ProductListOneTimeFilterMobileComponent, _selectors, _filter, _ProducerFilterView, _StickerFilterView, _ProductCategoryTreeView, _ui, _DiscountInfoSection, _ProductListMaxMonthlyMobileFilterComponent, _selectors2, _selectors3) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _ProductListSingleProductComponent = babelHelpers.interopRequireDefault(_ProductListSingleProductComponent);
    _ProductListHeaderFilterTagComponent = babelHelpers.interopRequireDefault(_ProductListHeaderFilterTagComponent);
    _Modal = babelHelpers.interopRequireDefault(_Modal);
    _ProductFilterView = babelHelpers.interopRequireDefault(_ProductFilterView);
    _ProductListOneTimeFilterMobileComponent = babelHelpers.interopRequireDefault(_ProductListOneTimeFilterMobileComponent);
    _ProducerFilterView = babelHelpers.interopRequireDefault(_ProducerFilterView);
    _StickerFilterView = babelHelpers.interopRequireDefault(_StickerFilterView);
    _ProductCategoryTreeView = babelHelpers.interopRequireDefault(_ProductCategoryTreeView);
    _DiscountInfoSection = babelHelpers.interopRequireDefault(_DiscountInfoSection);
    _ProductListMaxMonthlyMobileFilterComponent = babelHelpers.interopRequireDefault(_ProductListMaxMonthlyMobileFilterComponent);

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

    var ProductListView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListView, _React$Component);

        var _super = _createSuper(ProductListView);

        function ProductListView(props) {
            babelHelpers.classCallCheck(this, ProductListView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductListView, [{
            key: "_buildFilterStateQueryParam",
            value: function _buildFilterStateQueryParam() {
                var result = 'selectedCategory=' + this.props.selectedCategory;

                if (this.props.selectedProducer) {
                    result += '&producer=' + this.props.selectedProducer;
                }

                if (this.props.selectedPrice.from) {
                    result += '&priceFrom=' + this.props.selectedPrice.from;
                }

                if (this.props.selectedPrice.to) {
                    result += '&priceTo=' + this.props.selectedPrice.to;
                }

                if (this.props.selectedNumberFilters.Displaysize_from) {
                    result += '&Displaysize_from=' + this.props.selectedNumberFilters.Displaysize_from;
                }

                if (this.props.selectedNumberFilters.Displaysize_to) {
                    result += '&Displaysize_to=' + this.props.selectedNumberFilters.Displaysize_to;
                }

                if (this.props.selectedFilters.operatingsystem) {
                    result += '&operatingsystem=' + this.props.selectedFilters.operatingsystem;
                }

                if (this.props.selectedFilters.processorCores) {
                    result += '&processorCores=' + this.props.selectedFilters.processorCores;
                }

                if (this.props.selectedSort) {
                    result += '&sortMode=' + this.props.selectedSort;
                }

                if (this.props.selectedMaxMonthlyPriceRange && this.props.selectedMaxMonthlyPriceRange.to) {
                    result += '&maxMonthlyCost=' + this.props.selectedMaxMonthlyPriceRange.to;
                }

                if (this.props.selectedFilters.waterproofclalss) {
                    result += '&waterproofclalss=' + this.props.selectedFilters.waterproofclalss;
                }

                if (this.props.selectedFilters.dustprotection) {
                    result += '&dustprotection=' + this.props.selectedFilters.dustprotection;
                }

                if (this.props.selectedFilters.DualSim) {
                    result += '&DualSim=' + this.props.selectedFilters.DualSim;
                }

                return encodeURIComponent(result);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.props.products.data) {
                    this._loadModules();
                }

                this.props.changeCategory({
                    code: this.props.queryParams.selectedCategory
                });
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                if (!_lodash.default.isEqual(this.props.products, prevProps.products) && this.props.products.data) {
                    if (prevProps.currentPage != this.props.currentPage) {
                        this._loadModules();
                    }

                    this._loadFixerModule();
                }

                if (!this.props.openFilterModal && prevProps.openFilterModal) {
                    this._loadModules();
                }

                if (this.props.openFilterModal && !prevProps.openFilterModal) {
                    this._loadModalModules();
                }
            }
        }, {
            key: "checkSendDataLayer",
            value: function checkSendDataLayer(currentProps, prevProps) {
                return currentProps.selectedSort !== prevProps.selectedSort && currentProps.isAllVisible !== prevProps.isAllVisible && currentProps.selectedCategory !== prevProps.selectedCategory && currentProps.selectedProducer !== prevProps.selectedProducer && currentProps.currentPage !== prevProps.currentPage && currentProps.selectedPrice !== prevProps.selectedPrice;
            }
        }, {
            key: "handleInputBlur",
            value: function handleInputBlur(input) {
                if (input > this.props.products.pagesCount) {
                    input = this.props.products.pagesCount;
                } else if (input < 1) {
                    input = 1;
                }

                this.props.getProductList(input);
            }
        }, {
            key: "handleInputChange",
            value: function handleInputChange(input) {
                if (!isNaN(input)) {
                    this.props.changeCurrentPage(input);
                }
            }
        }, {
            key: "handleShowAll",
            value: function handleShowAll() {
                if (!this.props.isAllVisible) {
                    this.props.setAllVisibility(true);
                    this.props.getProductList(1);
                }
            }
        }, {
            key: "handleShowStandardGrid",
            value: function handleShowStandardGrid() {
                if (this.props.isAllVisible) {
                    this.props.setAllVisibility(false);
                    this.props.getProductList(1);
                }
            }
        }, {
            key: "handlePreviousPage",
            value: function handlePreviousPage(page) {
                if (this.props.products.currentPage > 1) {
                    this.props.getProductList(page);
                }
            }
        }, {
            key: "handleNextPage",
            value: function handleNextPage(page) {
                if (this.props.products.currentPage != this.props.products.pagesCount && this.props.products.pagesCount > 1) {
                    this.props.getProductList(page);
                }
            }
        }, {
            key: "handleGivenPage",
            value: function handleGivenPage(page) {
                this.props.getProductList(page);
            }
        }, {
            key: "handleSortChooseAction",
            value: function handleSortChooseAction(selectedSort) {
                this.props.setSelectedSort(selectedSort);
                this.props.getProductList(1);
            }
        }, {
            key: "openModal",
            value: function openModal() {
                this.props.setOpenFilterModal(true);

                if (document.getElementById("mobile-expander-module-one-time")) {
                    OPL.UI.stopModules(document.getElementById("mobile-expander-module-one-time"));
                    OPL.UI.initModules(document.getElementById("mobile-expander-module-one-time"));
                }

                if (document.getElementById("mobile-expander-module-monthly")) {
                    OPL.UI.stopModules(document.getElementById("mobile-expander-module-monthly"));
                    OPL.UI.initModules(document.getElementById("mobile-expander-module-monthly"));
                }
            }
        }, {
            key: "closeModal",
            value: function closeModal() {
                this.props.setOpenFilterModal(false);
            }
        }, {
            key: "checkSeparatorVisibility",
            value: function checkSeparatorVisibility() {
                return this.props.products.pagesCount > 6 && this.props.products.currentPage > 4;
            }
        }, {
            key: "calculatePages",
            value: function calculatePages() {
                var currentPage = this.props.products.currentPage;
                var pagesCount = this.props.products.pagesCount;
                var pages;

                if (pagesCount < 6) {
                    pages = _lodash.default.range(2, pagesCount + 1);
                } else {
                    if (currentPage < 4) {
                        pages = _lodash.default.range(2, 6);
                    } else if (currentPage > 3 && currentPage < pagesCount - 1) {
                        pages = _lodash.default.range(currentPage - 2, currentPage + 3);
                    } else {
                        pages = _lodash.default.range(pagesCount - 4, pagesCount + 1);
                    }
                }

                return pages;
            }
        }, {
            key: "clearFilters",
            value: function clearFilters() {
                this.props.clearMonthlyPrices();
                this.props.clearOneTimePrices();
                this.props.setSelectedProducer("");
                this.props.clearAttrFilters();
                this.props.changePriceFilter("from", "");
                this.props.changePriceFilter("to", "");
                this.props.reloadTree();
            }
        }, {
            key: "render",
            value: function render() {
                var discountInfo = (0, _ui.pickPropsBy)(this.props.descriptions, function(name) {
                    return name.indexOf("discountInfo_") === 0;
                });

                if (this.props.products.data) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "u-margin-top-l-xl"
                    }, this._renderHeader(), /*#__PURE__*/ _react.default.createElement("div", {
                        id: "product-list-wrapper",
                        className: "l-row opl-product-box--bordered-small__wrapper opl-product-box--bordered-medium__wrapper u-no-margin"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        id: 'product-list-opl-layout-fixer',
                        "data-js-module": "core/modules/layout-fixer",
                        "data-js-options": JSON.stringify({
                            conditions: "element:{seen}",
                            selectors: [".js-layout-fixer-group-1", ".js-layout-fixer-group-2", ".js-layout-fixer-group-3", ".js-layout-fixer-group-4", ".js-layout-fixer-group-5", ".js-layout-fixer-group-6", ".js-layout-fixer-group-7", ".js-layout-fixer-group-8", ".js-layout-fixer-group-9", ".js-layout-fixer-group-10"]
                        })
                    }, this._renderProductTable())), this._renderFooter(), /*#__PURE__*/ _react.default.createElement(_DiscountInfoSection.default, {
                        content: discountInfo
                    }));
                } else return null;
            }
        }, {
            key: "_renderHeader",
            value: function _renderHeader() {
                var _this = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-margin"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement(_ProductListHeaderFilterTagComponent.default, null)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-spacing u-no-padding"
                })), this._renderFilterModal(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3  u-spacing-top-s u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-gray5-c"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6  u-text-center u-small-hide u-medium-hide"
                }, this._renderPagination()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-8 l-col-medium-8 l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-select opl-select-light u-right u-small-right"
                }, /*#__PURE__*/ _react.default.createElement("select", {
                    className: "u-padding-s u-padding-top-s",
                    value: this.props.selectedSort,
                    onChange: function onChange(event) {
                        _this.handleSortChooseAction(event.target.value);
                    }
                }, this.props.options && this.props.options.map(function(option) {
                    return /*#__PURE__*/ _react.default.createElement("option", {
                        key: option.value,
                        value: option.value
                    }, option.description);
                })), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-select__arrow"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-spacing u-no-padding"
                })));
            }
        }, {
            key: "_renderPagination",
            value: function _renderPagination() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-pagination opl-pagination__with-input opl-pagination__radius u-inline-block"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "opl-pagination__prev"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    title: 'previous page',
                    onClick: this.handlePreviousPage.bind(this, this.props.products.currentPage - 1),
                    className: this.props.products.currentPage == 1 ? "opl-pagination__disabled" : "",
                    rel: "prev"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--arrow-left"
                }))), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "text",
                    value: this.props.currentPage,
                    placeholder: this.props.products.currentPage,
                    className: "opl-input--size-s u-inline-block",
                    onBlur: function onBlur(event) {
                        _this2.handleInputBlur(event.target.value);
                    },
                    onKeyPress: function onKeyPress(event) {
                        if (event.key === 'Enter') {
                            _this2.handleInputBlur(event.target.value);
                        }
                    },
                    onChange: function onChange(event) {
                        _this2.handleInputChange(event.target.value);
                    }
                })), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-spacing-right-s"
                }, "z"), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "u-inline",
                    onClick: this.handleGivenPage.bind(this, this.props.products.pagesCount)
                }, this.props.products.pagesCount == 0 ? this.props.products.pagesCount + 1 : this.props.products.pagesCount)), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "opl-pagination__next"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    title: 'next page',
                    onClick: this.handleNextPage.bind(this, this.props.products.currentPage + 1),
                    className: this.props.products.currentPage == this.props.products.pagesCount || this.props.products.pagesCount == 0 ? "opl-pagination__disabled" : "",
                    rel: "next"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--xs g-icon--arrow-right"
                }))));
            }
        }, {
            key: "_renderFooter",
            value: function _renderFooter() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-medium-spacing-l u-small-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-spacing-l u-medium-spacing-l u-small-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-spacing u-no-padding u-small-hide u-medium-hide"
                })), !this.props.isAllVisible ? [ /*#__PURE__*/ _react.default.createElement("div", {
                    key: "pagging",
                    className: "l-col l-col-10 l-col-small-12 u-text-center u-padding-l"
                }, this._renderPagination()), /*#__PURE__*/ _react.default.createElement("div", {
                    key: "showAll",
                    className: "l-col l-col-2 l-col-small-12 u-text-right u-padding-l u-small-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "u-inline-block u-right u-small-right u-spacing-top-s",
                    onClick: this.handleShowAll.bind(this)
                }, "Poka\u017C wszystkie"))] : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 u-text-center u-padding-l u-small-padding-right-l"
                }, this._renderPagination(), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "u-inline-block u-right u-small-right u-spacing-top-s",
                    onClick: this.handleShowStandardGrid.bind(this)
                }, "Poka\u017C mniej")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12  u-no-spacing-top u-spacing u-medium-spacing-top-l u-small-spacing-top u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-no-spacing u-no-padding"
                })));
            }
        }, {
            key: "_renderPaginationSeparator",
            value: function _renderPaginationSeparator() {
                return /*#__PURE__*/ _react.default.createElement("li", null, "...");
            }
        }, {
            key: "_renderPaginationNumbers",
            value: function _renderPaginationNumbers(pages) {
                var _this3 = this;

                return pages.map(function(page) {
                    return /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("a", {
                        href: "#",
                        className: _this3.props.products.currentPage === page ? "active" : "",
                        onClick: _this3.handleGivenPage.bind(_this3, page)
                    }, page));
                }, this);
            }
        }, {
            key: "_renderProductTable",
            value: function _renderProductTable() {
                var _this4 = this;

                var instalmentTooltipDescription = this.props.descriptions && this.props.descriptions["instalmentTooltipDescription"] ? this.props.descriptions["instalmentTooltipDescription"] : "";
                return this.props.products.data.map(function(product, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ProductListSingleProductComponent.default, {
                        key: product.productId,
                        product: product,
                        instalmentTooltipDescription: instalmentTooltipDescription,
                        position: index,
                        filterState: _this4._buildFilterStateQueryParam(),
                        salesChannel: _this4.props.channels && _this4.props.channels.sales,
                        products: _this4.props.products.data,
                        cartIsFix: _this4.props.cartIsFix,
                        queryParams: _this4.props.queryParams
                    });
                }, this);
            }
        }, {
            key: "_renderFilterModal",
            value: function _renderFilterModal() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-4 l-col-medium-4  u-large-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#!",
                    className: "o-icon-list__item u-font-normal u-text-decoration-none",
                    onClick: this.openModal.bind(this, true)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__icon u-vertical-middle u-padding-right-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--before g-icon--xs-s g-icon--filter"
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-icon-list__text u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("span", null, "Filtruj")))), this._renderModal());
            }
        }, {
            key: "_renderModal",
            value: function _renderModal() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "ora-filters-modal",
                    open: this.props.openFilterModal,
                    size: "small",
                    onClose: this.closeModal.bind(this),
                    showClose: false
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-modal-content"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "ora-product-list-section-modal"
                }, /*#__PURE__*/ _react.default.createElement("h2", {
                    className: "h2"
                }, "Filtruj"), /*#__PURE__*/ _react.default.createElement(_ProducerFilterView.default, babelHelpers.extends({
                    id: "opl-producer-filter-modal"
                }, this.props, {
                    title: "Producent",
                    initiallyExpanded: true
                })), /*#__PURE__*/ _react.default.createElement(_ProductCategoryTreeView.default, babelHelpers.extends({}, this.props, {
                    isModal: true,
                    isMobileTree: true,
                    title: "Kategoria",
                    initiallyExpanded: true
                })), /*#__PURE__*/ _react.default.createElement(_ProductListMaxMonthlyMobileFilterComponent.default, {
                    tieredPriceNumberExpander: 5,
                    tieredPrices: this.props.monthlyTieredPrices,
                    selectedTieredPrices: this.props.selectedMonthlyTieredPrices,
                    onClick: this.props.onClickMonthlyPrice,
                    filterLabelsHardcodedAsGross: this.props.filterLabelsHardcodedAsGross,
                    title: "Maksymalna opłata za ratę terminala",
                    initiallyExpanded: true,
                    isSalesOfGoodsPage: this.props.isSalesOfGoodsPage
                }), /*#__PURE__*/ _react.default.createElement(_ProductListOneTimeFilterMobileComponent.default, {
                    tieredPriceNumberExpander: 5,
                    tieredPrices: this.props.oneTimeTieredPrices,
                    selectedTieredPrices: this.props.selectedOneTimeTieredPrices,
                    onClick: this.props.onClickOneTimePrice,
                    filterLabelsHardcodedAsGross: this.props.filterLabelsHardcodedAsGross,
                    title: "Opłata na start",
                    initiallyExpanded: true
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    id: "ora-product-list-section-modal-product"
                }, /*#__PURE__*/ _react.default.createElement(_ProductFilterView.default, babelHelpers.extends({}, this.props, {
                    isModal: true,
                    title: "Cena",
                    initiallyExpanded: true
                }))), /*#__PURE__*/ _react.default.createElement(_StickerFilterView.default, babelHelpers.extends({}, this.props, {
                    isModal: true,
                    title: "Promocja",
                    initiallyExpanded: true
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    onClick: this.clearFilters.bind(this),
                    className: "g-gray5-c"
                }, "Wyczy\u015B\u0107 filtry"), /*#__PURE__*/ _react.default.createElement("button", {
                    onClick: this.closeModal.bind(this),
                    className: "o-btn opl-btn opl-btn--primary u-spacing-top-l u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), "Poka\u017C wyniki"))));
            }
        }, {
            key: "_loadModules",
            value: function _loadModules() {
                OPL.UI.stopModules(document.getElementById("ora-product-section-list-component"));
                OPL.UI.initModules(document.getElementById("ora-product-section-list-component"));
            }
        }, {
            key: "_loadModalModules",
            value: function _loadModalModules() {
                OPL.UI.stopModules(document.getElementById("ora-product-list-section-modal"));
                OPL.UI.initModules(document.getElementById("ora-product-list-section-modal"));
            }
        }, {
            key: "_loadFixerModule",
            value: function _loadFixerModule() {
                OPL.UI.stopModules(document.getElementById("product-list-wrapper"));
                OPL.UI.initModules(document.getElementById("product-list-wrapper"));
            }
        }]);
        return ProductListView;
    }(_react.default.Component);

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            products: (0, _selectors.getProductListWrapper)(state),
            options: (0, _selectors.getSortDefinition)(state),
            selectedSort: (0, _selectors.getSelectedSort)(state),
            openFilterModal: (0, _selectors.getOpenFilterModal)(state),
            isAllVisible: (0, _selectors.getAllVisibility)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            filters: (0, _selectors.getActualFilters)(state),
            selectedPrice: (0, _selectors.getSelectedPrice)(state),
            selectedFilters: (0, _selectors.getSelectedFilter)(state),
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            selectedProducer: (0, _selectors.getSelectedProducer)(state),
            selectedNumberFilters: (0, _selectors.getSelectedNumberFilter)(state),
            selectedStickerFilters: (0, _selectors.getSelectedStickerFilter)(state),
            isSalesOfGoodsPage: (0, _selectors.getIsSalesOfGoodsPage)(state),
            currentPage: (0, _selectors.getCurrentPageData)(state),
            categories: (0, _selectors.getProductsTrees)(state),
            productList: (0, _selectors.getProductListData)(state),
            matchToData: (0, _selectors.getMatchToDataList)(state),
            queryParams: ownProps.queryParams,
            oneTimeTieredPrices: (0, _selectors.getTieredOneTimePriceForCurrentOfferType)(state),
            selectedOneTimeTieredPrices: (0, _selectors.getSelectedOneTimePrices)(state),
            monthlyTieredPrices: (0, _selectors.getTieredMaxMonthlyPriceForCurrentOfferType)(state),
            selectedMonthlyTieredPrices: (0, _selectors.getSelectedMaxMonthlyPrice)(state),
            addTerminalToOfferBundleNo: (0, _selectors2.getAddTerminalToOfferBundleNo)(state),
            filterLabelsHardcodedAsGross: (0, _selectors3.filterLabelsHardcodedAsGross)(state),
            selectedMaxMonthlyPriceRange: (0, _selectors.getSelectedMaxMonthlyPriceRange)(state),
            initiallyFiltered: (0, _selectors.getInitiallyFiltered)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getProductList: function getProductList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            setSelectedSort: function setSelectedSort(sort) {
                return dispatch((0, _filter.setSelectedSort)(sort));
            },
            setAllVisibility: function setAllVisibility(value) {
                return dispatch((0, _filter.setAllVisibilityProduct)(value));
            },
            setOpenFilterModal: function setOpenFilterModal(opened) {
                return dispatch((0, _filter.setOpenFilterModal)(opened));
            },
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTree)(page));
            },
            getFilters: function getFilters(selectedCategory) {
                return dispatch((0, _filter.getFilters)(selectedCategory));
            },
            changeFilterAttribute: function changeFilterAttribute(element, parent, multiValue, operation) {
                return dispatch((0, _filter.changeFilterAttribute)(element, parent, multiValue, operation));
            },
            changePriceFilter: function changePriceFilter(type, price) {
                return dispatch((0, _filter.changePriceFilter)(type, price));
            },
            changeStickerFilter: function changeStickerFilter(value) {
                return dispatch((0, _filter.changeStickerFilter)(value));
            },
            changeFilterNumberAttribute: function changeFilterNumberAttribute(type, value, element) {
                return dispatch((0, _filter.changeFilterNumberAttribute)(type, value, element));
            },
            getFilteredList: function getFilteredList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            changeStickerFilterAttribute: function changeStickerFilterAttribute(element, parent, multiValue, operation) {
                return dispatch((0, _filter.changeStickerFilterAttribute)(element, parent, multiValue, operation));
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            },
            changeCurrentPage: function changeCurrentPage(page) {
                return dispatch((0, _filter.changeCurrentPageProps)(page));
            },
            reloadMatchToFilter: function reloadMatchToFilter() {
                return dispatch((0, _filter.reloadMatchToFilter)());
            },
            getMatchToData: function getMatchToData() {
                return dispatch((0, _filter.getMatchToData)());
            },
            getCategories: function getCategories(initCategory) {
                return dispatch((0, _filter.getProductsTree)(initCategory));
            },
            changeCategory: function changeCategory(category) {
                return dispatch((0, _app.changeCategory)(category));
            },
            fetchConfiguration: function fetchConfiguration(initProducer, initCategory, initFilters) {
                return dispatch((0, _filter.fetchFilterConfiguration)(initProducer, initCategory, initFilters));
            },
            onClickOneTimePrice: function onClickOneTimePrice(id) {
                return dispatch((0, _filter.selectOneTimePrice)(id));
            },
            onClickMonthlyPrice: function onClickMonthlyPrice(id) {
                return dispatch((0, _filter.selectMaxMonthlyPrice)(id));
            },
            clearOneTimePrices: function clearOneTimePrices() {
                return dispatch((0, _filter.clearOneTimePrices)());
            },
            clearMonthlyPrices: function clearMonthlyPrices() {
                return dispatch((0, _filter.clearMonthlyPrices)());
            },
            showError: function(_showError) {
                function showError(_x) {
                    return _showError.apply(this, arguments);
                }

                showError.toString = function() {
                    return _showError.toString();
                };

                return showError;
            }(function(msg) {
                return dispatch(showError(msg));
            })
        };
    };

    var ProductListSectionComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductListView);
    var _default = ProductListSectionComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListSectionComponent.js.map