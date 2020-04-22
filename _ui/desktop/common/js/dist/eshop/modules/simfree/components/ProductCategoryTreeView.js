define(["exports", "react", "../actions/filter", "eshop/utils/OnlineUtils"], function(_exports, _react, _filter, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var count = 0;

    var ProductCategoryTreeView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductCategoryTreeView, _React$Component);

        var _super = _createSuper(ProductCategoryTreeView);

        function ProductCategoryTreeView(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductCategoryTreeView);
            _this = _super.call(this, props);
            console.log("ProductCategoryTreeView CONSTRUCTOR", _this.props.queryParams);

            _this.props.fetchConfiguration(_this.props.queryParams.producer, _this.props.queryParams.selectedCategory, _this.props.queryParams);

            if (window.location.href.indexOf("akcesoria") !== -1) {
                _this.props.changeCategory({
                    code: "accesories",
                    name: "Akcesoria"
                });
            }

            if (!!_this.props.selectedCategory && _this.props.selectedCategory != '0') _this.props.getFilters(_this.props.selectedCategory);

            if (!_this.props.initiallyFiltered) {
                _this.initializeFilters();
            }

            console.log("ProductCategoryTreeView CONSTRUCTOR current count = " + count);
            return _this;
        }

        babelHelpers.createClass(ProductCategoryTreeView, [{
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (document.getElementById("opl-tree-expander-main" + this.props.isModal) != null && !document.getElementById("opl-tree-expander-main" + this.props.isModal).hasAttribute("data-js-processed")) {
                    OPL.UI.initModules($('#ora-product-category-tree-component')[0]);
                }
            }
        }, {
            key: "initializeFilters",
            value: function initializeFilters() {
                if (this.props.queryParams.sticker) {
                    this.props.changeStickerFilter(this.props.queryParams.sticker);
                }

                if (!isNaN(this.props.queryParams.priceFrom)) {
                    this.props.changePriceFilter("from", this.props.queryParams.priceFrom);
                }

                if (!isNaN(this.props.queryParams.priceTo)) {
                    this.props.changePriceFilter("to", this.props.queryParams.priceTo);
                }

                if (this.props.queryParams.esim) {
                    this.props.changeEsimFilterAttributeIfAvailable(this.props.queryParams.esim, this.props.queryParams.selectedCategory || "Phones and Devices");
                }

                if (this.props.queryParams.products) {
                    this.props.setProductsFilter(this.props.queryParams.products);
                }
            }
        }, {
            key: "clickCategory",
            value: function clickCategory(category, event) {
                event.preventDefault();
                this.props.changeCurrentPage(1);
                this.props.changeCategory(category);
                this.props.getFilters(category.code);
                this.props.reloadTree();
                this.props.reloadMatchToFilter();

                _OnlineUtils.default.resetUrlPathWithoutReload();
            }
        }, {
            key: "checkSelectedCategory",
            value: function checkSelectedCategory(element) {
                if (this.props.selectedCategory === element.code) {
                    return true;
                }

                return this.checkSubcategory(element);
            }
        }, {
            key: "checkSubcategory",
            value: function checkSubcategory(element) {
                var _this2 = this;

                if (!element) return false;
                if (element.subCategories.length === 0) return false;
                var result = false;
                element.subCategories.map(function(pos, index) {
                    if (pos.code === _this2.props.selectedCategory) {
                        result = true;
                        return true;
                    }

                    result = result || _this2.checkSubcategory(pos);
                });
                return result;
            }
        }, {
            key: "renderCategory",
            value: function renderCategory(indent, element, index) {
                var _this3 = this;

                if (element.counter === 0) return false;
                var name = element.categoryNameUrl ? element.categoryNameUrl : element.name.replace(/ /g, '-');
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "u-spacing",
                    key: index + element.code
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "js-expander__container" + indent + (this.checkSelectedCategory(element) ? " is-expanded" : "")
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "/sklep/" + name,
                    "aria-expanded": this.props.selectedCategory === element.code,
                    className: (this.props.selectedCategory === element.code ? "g-brand-c" : "u-font-normal") + " u-text-decoration-none u-spacing-right-s js-expander__trigger" + indent,
                    onClick: function onClick(e) {
                        _this3.clickCategory(element, e);
                    }
                }, element.name), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-gray4-c u-font-small"
                }, "(", element.counter, ")"), /*#__PURE__*/ _react.default.createElement("div", {
                    style: {
                        display: this.checkSelectedCategory(element) ? "block" : "none"
                    },
                    className: "js-expander__content" + indent
                }, this.renderTree(indent, element, index))));
            }
        }, {
            key: "renderTree",
            value: function renderTree(indent, element, index) {
                var _this4 = this;

                if (!element) return;
                if (element.subCategories.length === 0) return;
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/expander",
                    "data-js-options": JSON.stringify({
                        hideOtherElements: true,
                        duration: 300,
                        "contentSelector": ".js-expander__content" + (indent + 1),
                        "triggerSelector": ".js-expander__trigger" + (indent + 1),
                        "parentClass": "js-expander__container" + (indent + 1)
                    })
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: indent === 0 ? "" : "u-padding-left-l u-padding-top"
                }, element.subCategories.map(function(pos, index) {
                    return _this4.renderCategory(indent + 1, pos, index);
                }))));
            }
        }, {
            key: "render",
            value: function render() {
                var currentId = count;
                count++;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-tree-expanders" + currentId + this.props.isModal,
                    className: "opl-category-tree__list u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.props.id || "opl-tree-expander-main" + this.props.isModal,
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-options": JSON.stringify({
                        scrollToSelected: false,
                        triggerSelector: ".opl-section__trigger",
                        "contentSelector": ".opl-section__content",
                        "parentClass": "opl-section"
                    }),
                    role: "tablist",
                    "aria-multiselectable": "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? " is-expanded" : ""),
                    "aria-expanded": this.props.initiallyExpanded ? "true" : "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l u-spacing-top-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "h4 u-spacing-l"
                }, this.props.title)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwiń sekcję " + this.props.title))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-right-xl"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-wiking-manufacturers"
                }, this.renderTree(0, this.props.categories)))))))));
            }
        }]);
        return ProductCategoryTreeView;
    }(_react.default.Component);

    _exports.default = ProductCategoryTreeView;
});
//# sourceMappingURL=ProductCategoryTreeView.js.map