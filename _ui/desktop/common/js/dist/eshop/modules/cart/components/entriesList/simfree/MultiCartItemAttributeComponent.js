define(["exports", "react", "./MultiCartItemTooltip", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/OnlineUtils"], function(_exports, _react, _MultiCartItemTooltip, _OraStockLevelStatusComponent, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartItemTooltip = babelHelpers.interopRequireDefault(_MultiCartItemTooltip);
    _OraStockLevelStatusComponent = babelHelpers.interopRequireDefault(_OraStockLevelStatusComponent);
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

    var MultiCartItemAttributeComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartItemAttributeComponent, _Component);

        var _super = _createSuper(MultiCartItemAttributeComponent);

        function MultiCartItemAttributeComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartItemAttributeComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartItemAttributeComponent, [{
            key: "getPartsOfPrice",
            value: function getPartsOfPrice(price) {
                var pricePartsArray,
                    convertedPrice = [];
                if (typeof price === 'undefined') return [null, null];
                if (typeof price === 'number') price = price.toFixed(2);
                pricePartsArray = price.match(/^(\d+)?((,|.)(\d{2}))?$/);

                if (pricePartsArray) {
                    convertedPrice.push(pricePartsArray[1]);
                    convertedPrice.push(typeof pricePartsArray[4] !== 'undefined' ? pricePartsArray[4] : '00');
                }

                return convertedPrice;
            }
        }, {
            key: "transformMsisdn",
            value: function transformMsisdn(number) {
                return number.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                    return arguments[1] + '\xa0' + arguments[2] + '\xa0' + arguments[3];
                });
            }
        }, {
            key: "getPriceSpelling",
            value: function getPriceSpelling(price) {
                if (price.monthTo && (!price.monthFrom || price.monthFrom === 1)) {
                    if (price.monthTo === 1) {
                        return 'przez pierwszy miesiąc';
                    } else if (price.monthTo > 1 && price.monthTo < 5) {
                        return 'przez pierwsze ' + price.monthTo + ' miesiące';
                    } else if (price.monthTo >= 5) {
                        return 'przez pierwsze ' + price.monthTo + ' miesięcy';
                    }

                    return 'do ' + price.monthTo + '. miesiąca';
                } else if (!price.monthTo && element.monthFrom) {
                    return 'od ' + price.monthFrom + '. miesiąca';
                } else {
                    return 'od ' + price.monthFrom + '. do ' + price.monthTo + '. miesiąca';
                }
            }
        }, {
            key: "getPricesTooltip",
            value: function getPricesTooltip(allPrices) {
                var _this = this;

                var prices = allPrices && allPrices.length > 1 && allPrices.map(function(element, idx) {
                    return /*#__PURE__*/ _react.default.createElement("li", {
                        key: idx
                    }, _this.getPriceSpelling(element), ": ", element.price, "\xA0", element.currency);
                });

                if (prices) {
                    return /*#__PURE__*/ _react.default.createElement(_MultiCartItemTooltip.default, null, /*#__PURE__*/ _react.default.createElement("div", null, "Op\u0142aty miesi\u0119czne:"), /*#__PURE__*/ _react.default.createElement("ul", null, prices));
                }
            }
        }, {
            key: "getHighestMonthlyPrice",
            value: function getHighestMonthlyPrice(monthlyPrices) {
                return monthlyPrices.slice().sort(function(a, b) {
                    return a.price - b.price;
                }).pop();
            }
        }, {
            key: "getCrossedOutPrice",
            value: function getCrossedOutPrice(pricePresentationMode, monthlyOldPrice, monthlyPrices) {
                switch (pricePresentationMode) {
                    case 'DISCOUNTED_PRICE':
                        if (monthlyOldPrice) {
                            return /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(monthlyOldPrice.price).join(','), "\xA0", monthlyOldPrice.currency);
                        }

                        break;

                    case 'HIGHEST':
                        if (monthlyPrices) {
                            return /*#__PURE__*/ _react.default.createElement("span", null, this.getPartsOfPrice(this.getHighestMonthlyPrice(monthlyPrices)).join(','));
                        }

                        break;
                }
            }
        }, {
            key: "renderVoidDesktop",
            value: function renderVoidDesktop() {
                return [ /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h4 u-no-spacing",
                    "aria-hidden": "true"
                }, "\u2014"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-acc-hide"
                }, "brak")];
            }
        }, {
            key: "renderPriceDesktop",
            value: function renderPriceDesktop(price) {
                var stockLevelStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-small-hide u-medium-hide opl-price-v2 opl-price-v2--s"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(price.price)[0])), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(price.price)[1]), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, price.currency))), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-small-hide u-large-hide opl-price-v2 opl-price-v2--xs"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(price.price)[0])), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(price.price)[1]), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, price.currency))));
            }
        }, {
            key: "renderPrice",
            value: function renderPrice() {
                var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                return this.props.monthlyPricePresentation.main ? this.renderPriceDesktop(this.props.monthlyPricePresentation.main, this.props.stockLevelStatus, className) : this.renderVoidDesktop();
            }
        }, {
            key: "prepareCrossedOneTimePrice",
            value: function prepareCrossedOneTimePrice(simFreeOneTimePrice) {
                return Math.floor(simFreeOneTimePrice.priceWithoutVouchers * 100) / 100 > simFreeOneTimePrice.price && /*#__PURE__*/ _react.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, _OnlineUtils.default.formatPrice(simFreeOneTimePrice.priceWithoutVouchers) + " " + simFreeOneTimePrice.currency);
            }
        }]);
        return MultiCartItemAttributeComponent;
    }(_react.Component);

    _exports.default = MultiCartItemAttributeComponent;
});
//# sourceMappingURL=MultiCartItemAttributeComponent.js.map