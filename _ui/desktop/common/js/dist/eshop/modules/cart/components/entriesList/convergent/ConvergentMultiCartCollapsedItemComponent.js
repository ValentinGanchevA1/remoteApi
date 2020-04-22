define(["exports", "react", "../../../../magnum2/components/Utils", "./prices/CheckoutPrice", "./prices/CheckoutPriceMobile", "./prices/MonthlyPrices", "./prices/MonthlyPricesMobile"], function(_exports, _react, _Utils, _CheckoutPrice, _CheckoutPriceMobile, _MonthlyPrices, _MonthlyPricesMobile) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _CheckoutPrice = babelHelpers.interopRequireDefault(_CheckoutPrice);
    _CheckoutPriceMobile = babelHelpers.interopRequireDefault(_CheckoutPriceMobile);
    _MonthlyPrices = babelHelpers.interopRequireDefault(_MonthlyPrices);
    _MonthlyPricesMobile = babelHelpers.interopRequireDefault(_MonthlyPricesMobile);

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

    var ConvergentMultiCartCollapsedItemComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ConvergentMultiCartCollapsedItemComponent, _Component);

        var _super = _createSuper(ConvergentMultiCartCollapsedItemComponent);

        function ConvergentMultiCartCollapsedItemComponent() {
            babelHelpers.classCallCheck(this, ConvergentMultiCartCollapsedItemComponent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(ConvergentMultiCartCollapsedItemComponent, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row is-expanded-hide is-expanding-hide"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-white1-bg u-box-shadow"
                }, this._renderDesktopView(), this._renderMobileView()))));
            }
        }, {
            key: "_renderDesktopView",
            value: function _renderDesktopView() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-small-hide u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-l-xl u-padding-top-l-xl u-padding-right-l"
                }, this._renderIcons()), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-right l-col-2 u-small-hide u-padding-l u-padding-top-l u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_CheckoutPrice.default, {
                    checkoutPrice: this.props.entry.totalCheckoutPrice
                })), /*#__PURE__*/ _react.default.createElement("td", {
                    className: "u-padding-left l-col-2 u-small-hide u-padding-l u-padding-top-l u-text-right"
                }, /*#__PURE__*/ _react.default.createElement(_MonthlyPrices.default, {
                    monthlyPrices: this.props.entry.totalMonthlyPrices,
                    onlyFirst: true
                }))))));
            }
        }, {
            key: "_renderMobileView",
            value: function _renderMobileView() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-hide u-small-block u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("table", {
                    className: "u-table-fixed"
                }, /*#__PURE__*/ _react.default.createElement("tbody", null, /*#__PURE__*/ _react.default.createElement("tr", null, /*#__PURE__*/ _react.default.createElement("td", {
                    className: "opl-checkout__image__cell u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, this.props.entry.planName), /*#__PURE__*/ _react.default.createElement("img", {
                    src: "../../assets/images/articles/glorious-grid/orange-love.png",
                    alt: ""
                })), /*#__PURE__*/ _react.default.createElement("td", null, /*#__PURE__*/ _react.default.createElement(_MonthlyPricesMobile.default, {
                    monthlyPrices: this.props.entry.totalMonthlyPrices
                }), /*#__PURE__*/ _react.default.createElement(_CheckoutPriceMobile.default, {
                    checkoutPrice: this.props.entry.totalCheckoutPrice
                }))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top-l"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "opl-checkout__section__trigger " + this.props.trigger,
                    id: "mod-core/modules/expander-3-control-0",
                    role: "tab",
                    "aria-controls": "mod-core/modules/expander-3-tab-0",
                    "aria-expanded": "true"
                }, "Rozwi\u0144"))));
            }
        }, {
            key: "_renderIcons",
            value: function _renderIcons() {
                var _this = this;

                if (!this.props.entry.entries) {
                    return null;
                }

                var icons = this.props.entry.entries.map(function(subEntry, index) {
                    var productSection = _this.props.sectionConf.productSections.find(function(element) {
                        return element.entryType === subEntry.subEntryType;
                    });

                    return _this._renderIcon(subEntry, productSection, index !== _this.props.entry.entries.length - 1);
                });
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group"
                }, icons);
            }
        }, {
            key: "_renderIcon",
            value: function _renderIcon(subEntry, productSection, visiblePlus) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    key: subEntry.subEntryType + "_" + subEntry.productCode,
                    style: {
                        "float": "left"
                    }
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group__element u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, subEntry.planName), /*#__PURE__*/ _react.default.createElement("span", {
                    "aria-hidden": "true",
                    className: "g-icon g-icon--only g-icon--" + productSection.icon
                })), visiblePlus && this._renderPlusIcon());
            }
        }, {
            key: "_renderPlusIcon",
            value: function _renderPlusIcon() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-group__element u-vertical-middle u-padding-left-l u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--plus-slim g-icon--xs-s g-icon--only g-brand2-c"
                }));
            }
        }]);
        return ConvergentMultiCartCollapsedItemComponent;
    }(_react.Component);

    _exports.default = ConvergentMultiCartCollapsedItemComponent;
});
//# sourceMappingURL=ConvergentMultiCartCollapsedItemComponent.js.map