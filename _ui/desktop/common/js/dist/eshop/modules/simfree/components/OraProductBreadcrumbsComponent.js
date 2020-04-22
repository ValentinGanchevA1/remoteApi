define(["exports", "react", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/filter", "../../configurator/selectors/filters"], function(_exports, _react, _reactRedux, _app, _selectors, _filter, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var OraProductBreadcrumbsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraProductBreadcrumbsComponent, _Component);

        var _super = _createSuper(OraProductBreadcrumbsComponent);

        function OraProductBreadcrumbsComponent(props) {
            babelHelpers.classCallCheck(this, OraProductBreadcrumbsComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraProductBreadcrumbsComponent, [{
            key: "clearAllFilters",
            value: function clearAllFilters() {
                this.clearSelectedFilters();
                this.props.changeCategory({
                    code: 'Phones and Devices',
                    name: 'Telefony i Urządzenia'
                });
            }
        }, {
            key: "clearSelectedFilters",
            value: function clearSelectedFilters() {
                this.props.changePriceFilter("from", "");
                this.props.changePriceFilter("to", "");
                this.props.clearMonthlyPrices();
                this.props.clearOneTimePrices();
                this.props.setSelectedProducer("");
                this.props.clearAttrFilters();
                this.props.clearMatchToFilters();
            }
        }, {
            key: "renderElement",
            value: function renderElement(number, breadcrumb) {
                return breadcrumb.url != null ? /*#__PURE__*/ _react.default.createElement("li", {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    itemProp: "item",
                    href: breadcrumb.url ? window.location.origin + breadcrumb.url : window.location.origin + '/sklep'
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    itemProp: "name"
                }, breadcrumb.name)), /*#__PURE__*/ _react.default.createElement("meta", {
                    itemProp: "position",
                    content: number
                })) : /*#__PURE__*/ _react.default.createElement("li", {
                    itemProp: "itemListElement",
                    itemScope: true,
                    itemType: "http://schema.org/ListItem"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    itemProp: "name"
                }, breadcrumb.name), /*#__PURE__*/ _react.default.createElement("meta", {
                    itemProp: "position",
                    content: number
                }));
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                var list = this.buildBreadcrumbJson();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row opl-breadcrumbs u-small-hide u-medium-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    itemScope: true,
                    itemType: "http://schema.org/BreadcrumbList"
                }, list.length !== undefined || list.length > 0 ? list.map(function(elem, index) {
                    return _this.renderElement(index, elem);
                }) : null)));
            }
        }, {
            key: "buildBreadcrumbJson",
            value: function buildBreadcrumbJson() {
                var list = this.props.isB2B ? babelHelpers.toConsumableArray(this.props.b2bBreadcrumb) : babelHelpers.toConsumableArray(this.props.b2cBreadcrumb);
                var shopElem = this.createShopElement();

                if (shopElem) {
                    list.push(shopElem);
                }

                return list;
            }
        }, {
            key: "createShopElement",
            value: function createShopElement() {
                if (!this.props.selectedProductListHeader) {
                    return {
                        name: "Sklep",
                        url: null
                    };
                }

                if (this.props.selectedProductListHeader) {
                    return {
                        name: "Sklep " + this.props.selectedProductListHeader.toLowerCase(),
                        url: null
                    };
                }
            }
        }]);
        return OraProductBreadcrumbsComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedOfferType: (0, _filters.getSelectedOfferType)(state),
            selectedProducer: (0, _selectors.getSelectedProducer)(state),
            selectedProductListHeader: (0, _selectors.getProductListHeader)(state),
            selectedCategoryName: (0, _selectors.getSelectedCategoryName)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            isB2B: (0, _filters.getMarketContext)(state) === "B2B"
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            clearMatchToFilters: function clearMatchToFilters() {
                return dispatch((0, _filter.clearMatchToFilters)());
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            },
            changePriceFilter: function changePriceFilter(type, price) {
                return dispatch((0, _filter.changePriceFilter)(type, price));
            },
            clearMonthlyPrices: function clearMonthlyPrices() {
                return dispatch((0, _filter.clearMonthlyPrices)());
            },
            clearOneTimePrices: function clearOneTimePrices() {
                return dispatch((0, _filter.clearOneTimePrices)());
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            changeCategory: function changeCategory(category) {
                return dispatch((0, _app.changeCategory)(category));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraProductBreadcrumbsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=OraProductBreadcrumbsComponent.js.map