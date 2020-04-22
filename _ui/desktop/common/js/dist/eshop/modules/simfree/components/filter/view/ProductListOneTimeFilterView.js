define(["exports", "react", "./ProductListPriceFilterRowView", "eshop/utils/OnlineUtils"], function(_exports, _react, _ProductListPriceFilterRowView, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ProductListPriceFilterRowView = babelHelpers.interopRequireDefault(_ProductListPriceFilterRowView);
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

    var ProductListOneTimeFilterView = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(ProductListOneTimeFilterView, _React$Component);

        var _super = _createSuper(ProductListOneTimeFilterView);

        function ProductListOneTimeFilterView(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListOneTimeFilterView);
            _this = _super.call(this, props);
            _this.attributeId = _this.props.header.replace(/\s+/g, '-').toLowerCase();
            _this.componentId = props.id || _OnlineUtils.default.generateUniqeHtmlId("priceFilterExpand_");
            return _this;
        }

        babelHelpers.createClass(ProductListOneTimeFilterView, [{
            key: "componentDidMount",
            value: function componentDidMount() {}
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (document.getElementById(this.componentId)) {
                    OPL.UI.initModules(document.getElementById(this.componentId));
                }

                if (document.getElementById("opl-product-list-one-time-expander-" + this.attributeId) && !document.getElementById("opl-product-list-one-time-expander-" + this.attributeId).getAttribute("data-js-processed")) {
                    OPL.UI.initModules(document.getElementById("opl-product-list-one-time-expander-" + this.attributeId));
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.showComponent ? /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-product-list-one-time-expander-" + this.attributeId
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    id: "opl-sticker-expander-main-" + this.attributeId,
                    "data-js-module": "common/modules/opl-expander",
                    "data-js-conditions": "element:{was seen}",
                    "data-js-options": JSON.stringify({
                        scrollToSelected: false,
                        triggerSelector: ".opl-section__trigger",
                        "contentSelector": ".opl-section__content",
                        "parentClass": "opl-section"
                    }),
                    role: "tablist",
                    "aria-multiselectable": "false"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section u-no-padding" + (this.props.initiallyExpanded ? ' is-expanded' : ''),
                    "aria-expanded": this.props.initiallyExpanded ? 'true' : 'false'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__header u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-l"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-9 "
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.header)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 "
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-text-right u-block opl-section__trigger opl-wiking-expander__trigger--plus",
                    role: "tab"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--only g-icon--plus g-icon--xs"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Rozwi\u0144 sekcj\u0119"))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-section__content u-hide--soft",
                    role: "tabpanel"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-margin",
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": JSON.stringify({
                        'coverClass': '.cover',
                        'triggerHideName': 'Zwiń',
                        'triggerShowName': 'Rozwiń',
                        'maxHeight': 300,
                        'showFirst': this.props.showExpanderNumber,
                        'scrollTop': false,
                        'scrollSet': 0
                    })
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "opl-gradient-fade--wrapper"
                }, this.props.tieredPrices && this.props.tieredPrices.map(function(price, index) {
                    return /*#__PURE__*/ _react.default.createElement(_ProductListPriceFilterRowView.default, {
                        key: "Price_" + price + "_" + index,
                        type: _this2.props.type,
                        checked: _this2.props.selectedTieredPrices[price.id],
                        onClick: function onClick() {
                            return _this2.props.onClick(price.id);
                        },
                        text: _this2.props.labelFormatter(price)
                    });
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-text-left u-spacing-m u-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Rozwi\u0144"))))))) : null);
            }
        }]);
        return ProductListOneTimeFilterView;
    }(_react.default.Component);

    var _default = ProductListOneTimeFilterView;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListOneTimeFilterView.js.map